---
name: twenty
type: skill
status: active
created: 2026-09-06
updated: 2026-09-06
triggers: ["Twenty CRM", "Salesforce alternative", "twenty.com api", "open source CRM"]
related:
  - "[[Skills/Custom/oss-agent-ops/README]]"
  - "[[Toolbox/Open-Source-Stack]]"
replaces: Salesforce
source_skill_path: ~/.cursor/plugins/local/oss-agent-ops/skills/twenty/SKILL.md
tags: [skill, oss, agent-ops, twenty]
---

# Twenty CRM — Vault overlay

Open-source alternative to **Salesforce**.

Runtime body: `~/.cursor/plugins/local/oss-agent-ops/skills/twenty/SKILL.md` (also mirrored under this folder as `SKILL.md` for portable agents).

| Resource | URL |
|----------|-----|
| Home | https://twenty.com/ |
| Docs | https://docs.twenty.com/ |
| API | https://docs.twenty.com/developers/extend/api |

**Auth:** Bearer API key; OAuth 2.0 auth-code+PKCE and client_credentials

**Install:** Twenty docker install script or compose from `packages/twenty-docker` → :3000
