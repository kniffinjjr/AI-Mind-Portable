---
name: book-skill
type: skill
status: draft
created: 2026-08-16
updated: 2026-08-16
triggers:
  - book-skill
  - pdf to skill
  - book to skill
  - convert this PDF
  - convert this book
  - ingest book
  - library skill
  - make a skill from this book
related:
  - "[[Templates/Book-Skill-Pack]]"
  - "[[Methodology/Anti-Infinite-Loop-Checklist]]"
  - "[[Concepts/Memory-Engineering]]"
  - "[[Skills/Custom/page-master]]"
  - "[[Skills/Custom/grokrarian]]"
  - "[[_meta/AI-Tech-Radar-Bookmarks]]"
  - "[[AGENTS.md]]"
source_skill_path: ~/.grok/skills/book-skill/SKILL.md
tags: [skill, knowledge, pdf, books, residue, hard-stops]
---

# book-skill — Vault overlay

**Compile a local technical PDF/EPUB into an on-demand skill pack** (index + chapters) under **My-Mind** or **Work-Mind**. Inspired by upstream book-to-skill (Claude-centric); this skill is Grok Build + three-mind native.

Runtime body: copy `## Runtime SKILL.md body` below into `~/.grok/skills/book-skill/SKILL.md` (or `%USERPROFILE%\.grok\skills\book-skill\SKILL.md` on Windows) when installing for Grok Build.

## Core behavior

1. **Classify** — local file path + ownership (`personal` → My-Mind, `work` → Work-Mind).
2. **Extract** — text/structure from PDF/EPUB locally (no upload of the book to third parties required by this skill).
3. **Distill** — structure, not a book report: frameworks, decision rules, anti-patterns, chapter files, glossary, patterns, cheatsheet.
4. **File** — under `{MY|WORK}_MIND/Projects/<library-or-project>/knowledge/books/<slug>/` per [[Templates/Book-Skill-Pack]].
5. **Verify + exit** — paths exist; single-pass unless user asks to refine.

**Never** write generated book body into Vault `Methodology/` or `Concepts/`. Optional thin `Sources/` pointer only for portable *method* notes, not book text.

## Hard stops

| Bound | Default |
|-------|---------|
| Distill / extract passes per invocation | **1** (refine only on user request) |
| Max chapters per run | **40** |
| Identical failed extract | **1** then escalate |
| Agent-initiated re-distill without user | **0** |

See [[Methodology/Anti-Infinite-Loop-Checklist]].

## Relationship

| Role | Owns |
|------|------|
| **book-skill** | Compile pack layout + procedure |
| **GrokRarian** | Path routing, Mind root, filing hygiene |
| **Page Master** | Polish pack docs if user asks |
| **Upstream book-to-skill** | Inspiration only — different install paths |

## Runtime SKILL.md body

Copy from the fence below into the Grok skills directory as `SKILL.md`:

```markdown
---
name: book-skill
description: Compile a local technical PDF/EPUB into an on-demand skill pack
  (SKILL.md index + chapters) under My-Mind or Work-Mind. Use for book-skill,
  pdf to skill, convert this book, ingest book, or library skill.
---

# book-skill

Turn a book you own into structured agent residue: small always-on index,
chapters loaded only when relevant.

## When to use
- User provides a local PDF/EPUB (or supported text) path
- Technical / reference books
- personal → My-Mind; work IP → Work-Mind

## When not to use
- No local file (do not fetch pirated copies)
- Dumping the entire book into chat context
- Writing book content into Vault Methodology or Concepts

## Steps
1. Confirm path + ownership (personal | work) and slug
2. Extract text locally
3. Distill pack per Book-Skill-Pack template:
   SKILL.md, chapters/, glossary.md, patterns.md, cheatsheet.md, SOURCE.md
4. File under {MY|WORK}_MIND/Projects/.../knowledge/books/<slug>/
5. Report paths and token estimate (index vs full dump); stop

## Hard stops
- Single distill pass unless user asks to refine
- Max 40 chapters per run
- 1 identical extract failure → escalate
- Never place generated book body in Vault controlling docs

## Evidence of done
- SOURCE.md points at original file + date
- Pack SKILL.md + at least one chapter file exist on disk
```
