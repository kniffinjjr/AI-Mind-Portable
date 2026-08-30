#!/usr/bin/env python3
"""Vault link-integrity checker for the AI Mind portable vault.

Resolves Obsidian-style ``[[wikilinks]]`` and relative Markdown links the way
Obsidian does, then reports any link whose target is missing.

Resolution rules
----------------
* ``[[Path/Note]]``        -> vault-root relative path (``Path/Note.md`` or an
                              attachment such as ``Path/Note.html``).
* ``[[Note]]``             -> basename match against any file in the vault.
* ``[[Note#Heading]]``     -> heading anchor is stripped before resolving.
* ``[[Note|Alias]]``       -> alias is stripped before resolving.
* ``[[Note.md]]``          -> explicit extension honoured.
* ``[text](rel/path.md)``  -> resolved relative to the containing file.

Links inside fenced code blocks and inline code spans are ignored, because
those are documentation examples rather than real references.

A baseline ignore file (``link-ignore.txt`` next to this script) lists targets
that are known-dangling on purpose -- for example references into instance
residue (``Projects/``, personal ``Sources/`` captures) that the public
portable edition intentionally excludes. Those are reported as "ignored" and do
not fail the check, so the checker still catches *new* breakage.

Exit code is ``0`` when every non-baseline link resolves and ``1`` otherwise.
"""

from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path
from urllib.parse import unquote

WIKILINK_RE = re.compile(r"\[\[([^\]\n]+?)\]\]")
MDLINK_RE = re.compile(r"(?<!\!)\[[^\]\n]*?\]\(([^)\n]+?)\)")
FENCE_RE = re.compile(r"^\s*(```|~~~)")

IGNORED_PREFIXES = ("http://", "https://", "mailto:", "#")

SCRIPT_DIR = Path(__file__).resolve().parent
DEFAULT_IGNORE_FILE = SCRIPT_DIR / "link-ignore.txt"

# Path segments that are never vault content (tooling deps, VCS metadata).
EXCLUDED_SEGMENTS = {".git", "node_modules"}


def is_excluded(rel: str) -> bool:
    return any(seg in EXCLUDED_SEGMENTS for seg in rel.split("/"))


def is_external(target: str) -> bool:
    return target.startswith(IGNORED_PREFIXES)


def strip_anchor_and_alias(target: str) -> str:
    target = target.split("|", 1)[0]
    target = target.split("#", 1)[0]
    return target.strip()


def strip_code(text: str) -> str:
    """Blank out fenced code blocks and inline code spans.

    Positions are preserved (replaced char-for-char with spaces) so that line
    numbers reported for real links stay accurate.
    """
    out: list[str] = []
    in_fence = False
    for line in text.splitlines(keepends=True):
        if FENCE_RE.match(line):
            in_fence = not in_fence
            out.append(" " * len(line))
            continue
        if in_fence:
            out.append(" " * len(line))
            continue
        # Blank inline code spans (`...`) while keeping the trailing newline.
        out.append(re.sub(r"`[^`\n]*`", lambda m: " " * len(m.group(0)), line))
    return "".join(out)


class VaultIndex:
    def __init__(self, root: Path) -> None:
        self.root = root
        self.by_relpath_lower: dict[str, Path] = {}
        self.by_relpath_noext_lower: dict[str, Path] = {}
        self.by_basename_lower: dict[str, list[Path]] = {}
        for path in root.rglob("*"):
            if not path.is_file():
                continue
            rel = path.relative_to(root).as_posix()
            if is_excluded(rel):
                continue
            self.by_relpath_lower[rel.lower()] = path
            self.by_relpath_noext_lower[rel.rsplit(".", 1)[0].lower()] = path
            self.by_basename_lower.setdefault(path.name.lower(), []).append(path)
            self.by_basename_lower.setdefault(path.stem.lower(), []).append(path)

    def _candidate_names(self, target: str) -> list[str]:
        if target.lower().endswith(".md"):
            return [target]
        return [f"{target}.md", target]

    def resolve(self, target: str, source: Path) -> bool:
        target = unquote(target).strip()
        if not target or is_external(target):
            return True

        if "/" in target:
            tl = target.lower()
            for name in self._candidate_names(target):
                if name.lower() in self.by_relpath_lower:
                    return True
            # Attachment with any extension (e.g. ``Concepts/Architecture-Visual``).
            if tl in self.by_relpath_noext_lower:
                return True
            src_dir = source.parent
            for name in self._candidate_names(target):
                if (src_dir / name).resolve().exists():
                    return True
            return False

        for name in self._candidate_names(target):
            if name.lower() in self.by_basename_lower:
                return True
        return target.lower() in self.by_basename_lower


def load_ignore(path: Path) -> set[str]:
    if not path.exists():
        return set()
    entries: set[str] = set()
    for line in path.read_text(encoding="utf-8").splitlines():
        line = line.strip()
        if not line or line.startswith("#"):
            continue
        entries.add(line)
    return entries


def iter_links(text: str):
    for m in WIKILINK_RE.finditer(text):
        yield m.start(), strip_anchor_and_alias(m.group(1)), m.group(0)
    for m in MDLINK_RE.finditer(text):
        yield m.start(), strip_anchor_and_alias(m.group(1).strip()), m.group(0)


def line_of(text: str, pos: int) -> int:
    return text.count("\n", 0, pos) + 1


def collect(root: Path, index: VaultIndex):
    """Return (md_file_count, total_links, unresolved) for the vault."""
    unresolved: list[tuple[str, int, str, str]] = []
    total_links = 0
    md_files = sorted(
        p
        for p in root.rglob("*.md")
        if not is_excluded(p.relative_to(root).as_posix())
    )
    for md in md_files:
        raw_text = md.read_text(encoding="utf-8", errors="replace")
        text = strip_code(raw_text)
        for pos, target, raw in iter_links(text):
            if is_external(target) or not target:
                continue
            total_links += 1
            if not index.resolve(target, md):
                rel = md.relative_to(root).as_posix()
                unresolved.append((rel, line_of(text, pos), raw, target))
    return len(md_files), total_links, unresolved


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("root", nargs="?", default=None)
    parser.add_argument(
        "--write-baseline",
        action="store_true",
        help="Write all currently-unresolved targets to the ignore file.",
    )
    args = parser.parse_args()

    root = Path(args.root).resolve() if args.root else SCRIPT_DIR.parents[1]
    index = VaultIndex(root)
    md_count, total_links, unresolved = collect(root, index)

    if args.write_baseline:
        targets = sorted({t for _, _, _, t in unresolved})
        header = (
            "# Baseline of intentionally-dangling link targets.\n"
            "# One target per line. Lines starting with # are comments.\n"
            "# Regenerate with: python3 .cursor/tools/check_links.py --write-baseline\n\n"
        )
        DEFAULT_IGNORE_FILE.write_text(header + "\n".join(targets) + "\n", encoding="utf-8")
        print(f"Wrote {len(targets)} baseline targets to {DEFAULT_IGNORE_FILE.name}")
        return 0

    ignore = load_ignore(DEFAULT_IGNORE_FILE)
    broken = [row for row in unresolved if row[3] not in ignore]
    ignored = [row for row in unresolved if row[3] in ignore]

    print(f"Scanned {md_count} markdown files")
    print(f"Checked {total_links} internal links")
    if ignored:
        print(f"Ignored {len(ignored)} baseline (intentionally-dangling) links")

    if broken:
        print(f"\nBROKEN LINKS: {len(broken)}\n")
        for rel, line, raw, _ in broken:
            print(f"  {rel}:{line}  {raw}")
        return 1

    print("\nAll internal links resolve (excluding baseline). Vault integrity OK.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
