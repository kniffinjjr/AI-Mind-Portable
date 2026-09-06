---
name: cal-com
type: skill
status: active
created: 2026-09-06
updated: 2026-09-06
triggers: ["Cal.com", "Calendly alternative", "cal.com api", "scheduling OSS"]
related:
  - "[[Skills/Custom/oss-agent-ops/README]]"
  - "[[Toolbox/Open-Source-Stack]]"
replaces: Calendly
source_skill_path: ~/.cursor/plugins/local/oss-agent-ops/skills/cal-com/SKILL.md
tags: [skill, oss, agent-ops, cal-com]
---

# Cal.com — Vault overlay

Open-source alternative to **Calendly**.

Runtime body: `~/.cursor/plugins/local/oss-agent-ops/skills/cal-com/SKILL.md` (also mirrored under this folder as `SKILL.md` for portable agents).

| Resource | URL |
|----------|-----|
| Home | https://cal.com |
| Docs | https://cal.com/docs |
| API | https://cal.com/docs/api-reference/v2/introduction |

**Auth:** API key Bearer + required header `cal-api-version: 2024-08-13`; OAuth for Atoms

**Install:** Clone cal.com → `.env` → `docker compose up -d`; or Cloud + `npm i -g @calcom/cli`
