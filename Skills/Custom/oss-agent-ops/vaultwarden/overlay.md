---
name: vaultwarden
type: skill
status: active
created: 2026-09-06
updated: 2026-09-06
triggers: ["Vaultwarden", "1Password alternative", "Bitwarden self-host", "bw cli"]
related:
  - "[[Skills/Custom/oss-agent-ops/README]]"
  - "[[Toolbox/Open-Source-Stack]]"
replaces: 1Password
source_skill_path: ~/.cursor/plugins/local/oss-agent-ops/skills/vaultwarden/SKILL.md
tags: [skill, oss, agent-ops, vaultwarden]
---

# Vaultwarden — Vault overlay

Open-source alternative to **1Password**.

Runtime body: `~/.cursor/plugins/local/oss-agent-ops/skills/vaultwarden/SKILL.md` (also mirrored under this folder as `SKILL.md` for portable agents).

| Resource | URL |
|----------|-----|
| Home | https://github.com/dani-garcia/vaultwarden |
| Docs | https://github.com/dani-garcia/vaultwarden/wiki |
| API | Bitwarden client-compatible API; automate via Bitwarden CLI `bw` + `bw serve` (Public Bitwarden org API NOT supported) |

**Auth:** Master password (+ optional 2FA); `BW_SESSION`; `ADMIN_TOKEN` for `/admin`

**Install:** `docker run -d --name vaultwarden -v vw-data:/data -p 80:80 vaultwarden/server:latest` behind HTTPS; set `DOMAIN`
