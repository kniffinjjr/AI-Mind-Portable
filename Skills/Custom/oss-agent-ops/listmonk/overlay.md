---
name: listmonk
type: skill
status: active
created: 2026-09-06
updated: 2026-09-06
triggers: ["Listmonk", "Klaviyo alternative", "newsletter API", "email campaign OSS"]
related:
  - "[[Skills/Custom/oss-agent-ops/README]]"
  - "[[Toolbox/Open-Source-Stack]]"
replaces: Klaviyo
source_skill_path: ~/.cursor/plugins/local/oss-agent-ops/skills/listmonk/SKILL.md
tags: [skill, oss, agent-ops, listmonk]
---

# Listmonk — Vault overlay

Open-source alternative to **Klaviyo**.

Runtime body: `~/.cursor/plugins/local/oss-agent-ops/skills/listmonk/SKILL.md` (also mirrored under this folder as `SKILL.md` for portable agents).

| Resource | URL |
|----------|-----|
| Home | https://listmonk.app |
| Docs | https://listmonk.app/docs/ |
| API | https://listmonk.app/docs/apis/apis/ |

**Auth:** HTTP Basic and/or Authorization token; role-scoped API users

**Install:** `curl -LO https://github.com/knadh/listmonk/raw/master/docker-compose.yml && docker compose up -d` → http://localhost:9000
