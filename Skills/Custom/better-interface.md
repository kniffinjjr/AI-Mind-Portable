---
name: better-interface
type: skill
status: active
created: 2026-08-16
updated: 2026-08-16
triggers:
  - better-interface
  - full interface review
  - holistic UI audit
  - polish this screen
  - improve this UI
  - make the interface production-ready
  - review the design
related:
  - "[[Skills/Custom/pixelslop]]"
  - "[[Skills/Custom/a11y-build]]"
  - "[[Skills/Custom/web-motion]]"
  - "[[Methodology/Anti-Infinite-Loop-Checklist]]"
source_skill_path: $GROK_HOME/skills/better-interface/SKILL.md
---

# better-interface — Vault overlay

Cross-discipline interface review (a11y, layout, writing, type, color, polish). Runtime body: `source_skill_path`.

## Hard stops

| Bound | Default |
|-------|---------|
| Review / fix passes per invocation | **2** |
| After 2 passes | Deliver findings + remaining HIGH items; **stop** unless user requests another pass |
| Approve while HIGH/actionable remain | **Forbidden** |

Pair with [[Skills/Custom/pixelslop]] for AI-slop QA. Do not open unbounded polish loops. See [[Methodology/Anti-Infinite-Loop-Checklist]].
