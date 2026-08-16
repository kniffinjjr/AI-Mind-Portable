---
title: PATHS example
type: config
status: template
created: 2026-08-08
purpose: Remappable roots so AI Mind Vault works on GitHub, local Git, plain directories, or Obsidian
---

# PATHS.example.md

Copy this file to **`PATHS.md`** (gitignored, local only) and set paths for your machine.

Agents read `PATHS.md` when present; otherwise use the defaults below.

---

## Required paths

```yaml
# Where this Vault's controlling documentation lives
VAULT_ROOT: ~/Documents/AI-Mind-Vault   # or your clone path, or a plain folder

# Person-specific residue (NOT inside the portable Vault)
MY_MIND_ROOT: ~/Documents/My-Mind       # personal projects, notes, deliverables
WORK_MIND_ROOT: ~/Documents/Work-Mind   # work-only projects (IP separation)

# Optional: active product code outside the minds
PROJECTS_CODE_DIR: ~/code               # product repos (adopter's code)
```

## Defaults (when PATHS.md is missing)

| Variable | Default |
|----------|--------|
| `VAULT_ROOT` | directory containing this `AGENTS.md` |
| `MY_MIND_ROOT` | `../My-Mind` relative to Vault, or unset |
| `WORK_MIND_ROOT` | `../Work-Mind` relative to Vault, or unset |

## Backend modes

| Mode | How files are managed |
|------|------------------------|
| **GitHub** | Remote repo; use GitHub tools / git push; Checkout Locks + Review Queue |
| **Local Git** | `git` in `VAULT_ROOT`; same conventions, no remote required |
| **Plain directory** | File read/write only; no git; still use Review Queue discipline for permanent changes |
| **Obsidian** | Open `VAULT_ROOT` as an Obsidian vault; use wikilinks + optional kepano/obsidian-skills |

Core documentation is **tool-agnostic**. Backend-specific behavior lives in overlays:

- GitHub / multi-agent: `Process/Vault-Write-Lock-Protocol.md`, `_meta/CHECKOUT_LOCKS.md`
- Obsidian: `Skills/Custom/obsidian-markdown.md` + optional external kepano skills

## Rules for agents

1. Resolve `PATHS.md` first; never invent a third root.
2. Write **portable documentation** only under `VAULT_ROOT`.
3. Write **personal residue** under `MY_MIND_ROOT`.
4. Write **work residue** under `WORK_MIND_ROOT`.
5. On path confusion, activate the Librarian (GrokRarian).

Do not commit secrets or your real `PATHS.md` to a public remote.
