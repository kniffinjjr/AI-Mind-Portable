---
name: penpot
type: skill
status: active
created: 2026-09-06
updated: 2026-09-06
triggers: ["Penpot", "Canva alternative", "open source design", "penpot api"]
related:
  - "[[Skills/Custom/oss-agent-ops/README]]"
  - "[[Toolbox/Open-Source-Stack]]"
replaces: Canva
source_skill_path: ~/.cursor/plugins/local/oss-agent-ops/skills/penpot/SKILL.md
tags: [skill, oss, agent-ops, penpot]
---

# Penpot — Vault overlay

Open-source alternative to **Canva**.

Runtime body: `~/.cursor/plugins/local/oss-agent-ops/skills/penpot/SKILL.md` (also mirrored under this folder as `SKILL.md` for portable agents).

| Resource | URL |
|----------|-----|
| Home | https://penpot.app |
| Docs | https://help.penpot.app/ |
| API | https://help.penpot.app/technical-guide/developer/http-api/ |

**Auth:** Personal access token (`Authorization: Token <token>`) or session cookies

**Install:** curl Penpot docker-compose from docs → `docker compose -p penpot up -d` (HTTPS proxy on :9001)
