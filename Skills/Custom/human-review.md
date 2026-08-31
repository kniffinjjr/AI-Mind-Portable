---
name: human-review
type: skill
status: active
created: 2026-08-05
updated: 2026-08-16
triggers:
  - human-review
  - visual review
  - inline comments
  - Google Doc style feedback
  - edit PRD
  - landing page feedback
  - product copy review
  - review HTML
  - review Markdown
  - better feedback to AI
related:
  - "[[Concepts/Harness-Loop-Graph-Architecture]]"
  - "[[Methodology/Anti-Infinite-Loop-Checklist]]"
upstream: https://github.com/petergyang/human-review
source_skill_path: $GROK_HOME/skills/human-review/SKILL.md
---

# human-review — Visual Human Gate for HTML / Markdown / Localhost

**Open the page in a real browser, let the human edit & comment like Google Docs, then receive one structured batch of feedback.**

Upstream owns the tool (`npx human-review`). This note is the Vault controlling overlay + Grok integration notes. Runtime body lives at `source_skill_path`.

## Core Behavior

- After writing or updating readable artifacts (PRDs, landing pages, product copy, plans, decks, local apps), open them with `/human-review` or `npx -y human-review <path-or-url>`
- Poll with the official loop until feedback arrives **or tool timeout**
- Apply every edit **verbatim** (especially `after` / `after_html`) to the **source** (Markdown/MDX/TSX), never the rendered output
- Treat this as a hard human gate in the Graph layer of HLG

## Hard stops

| Bound | Default |
|-------|---------|
| Agent-initiated re-open without user request | **0** |
| After one batch applied | Stop unless user asks for another pass |
| Poll past tool timeout with no feedback | Escalate / skip gate with residue note |

## Non-negotiables

- Local only — never upload content
- User edits are authoritative; do not “improve” or revert them
- Preserve Markdown / source formatting fidelity
- One batch → apply → stop (re-open only on user request)

## Integration

Complements documentation and UI-polish workflows. Use after any agent-generated document or UI that the user will actually read.
