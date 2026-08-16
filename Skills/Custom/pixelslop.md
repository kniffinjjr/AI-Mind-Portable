---
name: pixelslop
type: skill
status: active
created: 2026-08-16
updated: 2026-08-16
triggers:
  - pixelslop
  - design QA
  - AI slop check
  - scan this HTML
  - critique this UI for genericism
  - fix AI design tells
related:
  - "[[Skills/Custom/better-interface]]"
  - "[[Skills/Custom/design-system]]"
  - "[[Methodology/Anti-Infinite-Loop-Checklist]]"
source_skill_path: $GROK_HOME/skills/pixelslop/SKILL.md
---

# pixelslop — Vault overlay

Browser-first scan for AI-generic UI patterns, weak hierarchy, low contrast. Runtime body: `source_skill_path`.

## Hard stops

| Bound | Default |
|-------|---------|
| Scan / fix passes per invocation | **2** |
| After 2 passes | Report residual issues; **exit** unless user requests another pass |

Not a substitute for `design-system` tokens. See [[Methodology/Anti-Infinite-Loop-Checklist]].
