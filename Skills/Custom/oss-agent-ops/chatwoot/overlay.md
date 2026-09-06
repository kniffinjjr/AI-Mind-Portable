---
name: chatwoot
type: skill
status: active
created: 2026-09-06
updated: 2026-09-06
triggers: ["Chatwoot", "Intercom alternative", "chatwoot cli", "customer support OSS"]
related:
  - "[[Skills/Custom/oss-agent-ops/README]]"
  - "[[Toolbox/Open-Source-Stack]]"
replaces: Intercom
source_skill_path: ~/.cursor/plugins/local/oss-agent-ops/skills/chatwoot/SKILL.md
tags: [skill, oss, agent-ops, chatwoot]
---

# Chatwoot — Vault overlay

Open-source alternative to **Intercom**.

Runtime body: `~/.cursor/plugins/local/oss-agent-ops/skills/chatwoot/SKILL.md` (also mirrored under this folder as `SKILL.md` for portable agents).

| Resource | URL |
|----------|-----|
| Home | https://www.chatwoot.com |
| Docs | https://www.chatwoot.com/docs |
| API | https://developers.chatwoot.com/api-reference/introduction |

**Auth:** Application: agent `access_token`; Client: inbox+contact identifiers; Platform: platform app token

**Install:** Production docker-compose from chatwoot + `db:chatwoot_prepare` + proxy
