---
name: planka
type: skill
status: active
created: 2026-09-06
updated: 2026-09-06
triggers: ["Planka", "Trello alternative", "kanban OSS", "planka api"]
related:
  - "[[Skills/Custom/oss-agent-ops/README]]"
  - "[[Toolbox/Open-Source-Stack]]"
replaces: Trello
source_skill_path: ~/.cursor/plugins/local/oss-agent-ops/skills/planka/SKILL.md
tags: [skill, oss, agent-ops, planka]
---

# Planka — Vault overlay

Open-source alternative to **Trello**.

Runtime body: `~/.cursor/plugins/local/oss-agent-ops/skills/planka/SKILL.md` (also mirrored under this folder as `SKILL.md` for portable agents).

| Resource | URL |
|----------|-----|
| Home | https://planka.app |
| Docs | https://docs.planka.cloud |
| API | https://plankanban.github.io/planka/swagger-ui/ |

**Auth:** JWT via `/api/access-tokens`; optional OIDC; v2 `X-Api-Key`

**Install:** curl docker-compose.yml → set `SECRET_KEY` + `BASE_URL` → create admin → `docker compose up -d`
