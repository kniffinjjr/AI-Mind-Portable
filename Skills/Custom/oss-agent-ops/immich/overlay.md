---
name: immich
type: skill
status: active
created: 2026-09-06
updated: 2026-09-06
triggers: ["Immich", "Google Photos alternative", "immich cli", "self-host photos"]
related:
  - "[[Skills/Custom/oss-agent-ops/README]]"
  - "[[Toolbox/Open-Source-Stack]]"
replaces: Google Photos
source_skill_path: ~/.cursor/plugins/local/oss-agent-ops/skills/immich/SKILL.md
tags: [skill, oss, agent-ops, immich]
---

# Immich — Vault overlay

Open-source alternative to **Google Photos**.

Runtime body: `~/.cursor/plugins/local/oss-agent-ops/skills/immich/SKILL.md` (also mirrored under this folder as `SKILL.md` for portable agents).

| Resource | URL |
|----------|-----|
| Home | https://immich.app |
| Docs | https://docs.immich.app/ |
| API | https://api.immich.app/ |

**Auth:** Permission-scoped API keys; Bearer session JWT for apps

**Install:** wget official docker-compose.yml + .env → `docker compose up -d`
