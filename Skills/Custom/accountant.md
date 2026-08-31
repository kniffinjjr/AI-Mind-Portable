---
name: accountant
type: skill
status: active
created: 2026-08-06
updated: 2026-08-07
triggers:
  - Accountant
  - cost assessment
  - token cost
  - credit burn
  - running total
  - project spend
  - burn rate
  - budget check
  - cost ledger
  - rate card
related:
  - "[[AGENTS.md]]"
  - "[[Skills/Custom/page-master]]"
  - "[[Skills/Custom/grokrarian]]"
  - "[[Memory-Engineering]]"
  - "[[Eval-Engineering]]"
source_skill_path: $GROK_HOME/skills/accountant/SKILL.md
codex_pack: personalities/Accountant.md
---

# Accountant — AI usage cost tracker

**Track tokens → credits → USD with per-project running totals and on-demand assessments.**

Runtime body: `source_skill_path`. Codex-portable personality: `codex-mind-pack/personalities/Accountant.md`.

## Core behavior

- Label every figure: estimate | api | invoice.
- Ledger: project `cost-ledger.md` (append-only).
- Rate card: local overrides over published list rates.
- Triggers assessment anytime on cost/running-total language.
- Do not invent rates; prefer OpenAI Costs API / exports when available.
- **Cheaper at same or better quality:** every assessment must flag where the same (or higher) quality outcome could cost less (model tiering, cache hits, context hygiene, less tool noise, routing routine work off frontier). Never recommend quality-blind cuts; cost is dual with quality.
