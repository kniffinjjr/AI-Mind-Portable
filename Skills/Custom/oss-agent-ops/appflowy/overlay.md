---
name: appflowy
type: skill
status: active
created: 2026-09-06
updated: 2026-09-06
triggers: ["AppFlowy", "Notion alternative", "AppFlowy Cloud API"]
related:
  - "[[Skills/Custom/oss-agent-ops/README]]"
  - "[[Toolbox/Open-Source-Stack]]"
replaces: Notion
source_skill_path: ~/.cursor/plugins/local/oss-agent-ops/skills/appflowy/SKILL.md
tags: [skill, oss, agent-ops, appflowy]
---

# AppFlowy — Vault overlay

Open-source alternative to **Notion**.

Runtime body: `~/.cursor/plugins/local/oss-agent-ops/skills/appflowy/SKILL.md` (also mirrored under this folder as `SKILL.md` for portable agents).

| Resource | URL |
|----------|-----|
| Home | https://appflowy.io |
| Docs | https://docs.appflowy.io/ |
| API | https://github.com/AppFlowy-IO/documentations/tree/main/documentation/appflowy-cloud/openapi |

**Auth:** GoTrue email/password/OAuth → Bearer JWT

**Install:** Clone AppFlowy-Cloud → configure `.env` → `docker compose up -d`
