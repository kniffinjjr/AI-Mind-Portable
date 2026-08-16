---
title: Book Skill Pack Template
type: template
status: live
created: 2026-08-16
updated: 2026-08-16
related:
  - "[[Skills/Custom/book-skill]]"
  - "[[Concepts/Memory-Engineering]]"
  - "[[Methodology/Anti-Infinite-Loop-Checklist]]"
tags: [template, books, skills, knowledge, residue]
---

# Book Skill Pack — Layout Template

**Purpose:** Standard folder layout for one technical book (or multi-file source set) compiled into an on-demand agent skill pack.

**Ownership**

| Book type | Root |
|-----------|------|
| Personal | `{MY_MIND_ROOT}/Projects/<library-or-project>/knowledge/books/<slug>/` |
| Work / company | `{WORK_MIND_ROOT}/Projects/<library-or-project>/knowledge/books/<slug>/` |

Do **not** place generated book body under Vault `Methodology/` or `Concepts/`.

---

## Directory tree

```text
knowledge/books/<slug>/
  SKILL.md              # Always-on index (~3–4k tokens target)
  SOURCE.md             # Original path, date, license note, extractor
  glossary.md           # Terms + chapter refs
  patterns.md           # Techniques / algorithms / design patterns
  cheatsheet.md         # Decision tables / quick rules
  chapters/
    ch01-<short-title>.md
    ch02-<short-title>.md
    ...
```

`<slug>` = lowercase kebab-case from title or user (e.g. `designing-data-intensive-applications`).

---

## File specs

### SKILL.md (pack index)

Must include:

1. Book title + author (if known)
2. One-paragraph thesis
3. 5–12 named frameworks / mental models (author’s terms)
4. Chapter index table: `chNN | title | one-line when to load`
5. Triggers / example asks (“load ch05”, “replication from this book”)
6. Pointer that full prose lives in `chapters/` — do not paste whole book into chat

### SOURCE.md

| Field | Content |
|-------|--------|
| Original path | Absolute path to PDF/EPUB at extract time |
| Extracted | ISO date |
| Tool / method | e.g. pdftotext, Docling, manual |
| License / ownership | personal copy \| work-licensed \| note |
| Mind | My-Mind \| Work-Mind |

### chapters/chNN-*.md

- Target ~800–1200 tokens each
- Frameworks, decision rules, anti-patterns, worked examples from that chapter
- Optional page/section refs when available
- Not a full verbatim dump of the chapter

### glossary.md / patterns.md / cheatsheet.md

Optional but recommended for technical books. Keep loadable independently of chapters.

---

## Verify checklist

- [ ] `SOURCE.md` present and path still valid (or noted missing)
- [ ] Pack `SKILL.md` has thesis + chapter index
- [ ] At least one `chapters/ch*.md` file
- [ ] Files under correct Mind root (personal vs work)
- [ ] No book body written into Vault controlling docs

---

## Change log

- 2026-08-16: Initial template (book-skill / Grok Build + Vault + Codex pack).
