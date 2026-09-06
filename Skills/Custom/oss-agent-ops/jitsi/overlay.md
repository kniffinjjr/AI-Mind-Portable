---
name: jitsi
type: skill
status: active
created: 2026-09-06
updated: 2026-09-06
triggers: ["Jitsi", "Zoom alternative", "jitsi meet api", "video conference OSS"]
related:
  - "[[Skills/Custom/oss-agent-ops/README]]"
  - "[[Toolbox/Open-Source-Stack]]"
replaces: Zoom
source_skill_path: ~/.cursor/plugins/local/oss-agent-ops/skills/jitsi/SKILL.md
tags: [skill, oss, agent-ops, jitsi]
---

# Jitsi Meet — Vault overlay

Open-source alternative to **Zoom**.

Runtime body: `~/.cursor/plugins/local/oss-agent-ops/skills/jitsi/SKILL.md` (also mirrored under this folder as `SKILL.md` for portable agents).

| Resource | URL |
|----------|-----|
| Home | https://jitsi.org |
| Docs | https://jitsi.github.io/handbook/ |
| API | https://jitsi.github.io/handbook/docs/dev-guide/dev-guide-iframe/ |

**Auth:** Anonymous by default; optional JWT / LDAP / OIDC; JaaS JWT

**Install:** Clone `jitsi/docker-jitsi-meet` → `cp env.example .env` → `./gen-passwords.sh` → `docker compose up -d`
