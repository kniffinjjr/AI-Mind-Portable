---
name: appsmith
type: skill
status: active
created: 2026-09-06
updated: 2026-09-06
triggers: ["Appsmith", "Retool alternative", "appsmithctl", "internal tools OSS"]
related:
  - "[[Skills/Custom/oss-agent-ops/README]]"
  - "[[Toolbox/Open-Source-Stack]]"
replaces: Retool
source_skill_path: ~/.cursor/plugins/local/oss-agent-ops/skills/appsmith/SKILL.md
tags: [skill, oss, agent-ops, appsmith]
---

# Appsmith — Vault overlay

Open-source alternative to **Retool**.

Runtime body: `~/.cursor/plugins/local/oss-agent-ops/skills/appsmith/SKILL.md` (also mirrored under this folder as `SKILL.md` for portable agents).

| Resource | URL |
|----------|-----|
| Home | https://www.appsmith.com/ |
| Docs | https://docs.appsmith.com/ |
| API | Internal `/api/v1/*`; instance ops via `appsmithctl` |

**Auth:** Instance user/session; datasource API key/Basic/OAuth2

**Install:** Docker Compose `appsmith/appsmith-ce` with `./stacks` volume → http://localhost
