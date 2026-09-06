---
name: umami
type: skill
status: active
created: 2026-09-06
updated: 2026-09-06
triggers: ["Umami", "Google Analytics alternative", "privacy analytics", "umami api"]
related:
  - "[[Skills/Custom/oss-agent-ops/README]]"
  - "[[Toolbox/Open-Source-Stack]]"
replaces: Google Analytics
source_skill_path: ~/.cursor/plugins/local/oss-agent-ops/skills/umami/SKILL.md
tags: [skill, oss, agent-ops, umami]
---

# Umami — Vault overlay

Open-source alternative to **Google Analytics**.

Runtime body: `~/.cursor/plugins/local/oss-agent-ops/skills/umami/SKILL.md` (also mirrored under this folder as `SKILL.md` for portable agents).

| Resource | URL |
|----------|-----|
| Home | https://umami.is |
| Docs | https://docs.umami.is |
| API | https://docs.umami.is/docs/api |

**Auth:** Self-host: login JWT; Cloud: API key Bearer / `UMAMI_API_KEY`

**Install:** Clone umami → `docker compose up -d` → http://localhost:3000 (change default admin password immediately)
