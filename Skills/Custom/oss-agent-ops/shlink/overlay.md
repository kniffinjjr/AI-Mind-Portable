---
name: shlink
type: skill
status: active
created: 2026-09-06
updated: 2026-09-06
triggers: ["Shlink", "Bitly alternative", "URL shortener API", "shlink cli"]
related:
  - "[[Skills/Custom/oss-agent-ops/README]]"
  - "[[Toolbox/Open-Source-Stack]]"
replaces: Bitly
source_skill_path: ~/.cursor/plugins/local/oss-agent-ops/skills/shlink/SKILL.md
tags: [skill, oss, agent-ops, shlink]
---

# Shlink — Vault overlay

Open-source alternative to **Bitly**.

Runtime body: `~/.cursor/plugins/local/oss-agent-ops/skills/shlink/SKILL.md` (also mirrored under this folder as `SKILL.md` for portable agents).

| Resource | URL |
|----------|-----|
| Home | https://shlink.io/ |
| Docs | https://shlink.io/documentation/ |
| API | https://shlink.io/documentation/api-docs/ |

**Auth:** Every REST call needs `X-Api-Key`

**Install:** `docker run -p 8080:8080 -e DEFAULT_DOMAIN=s.test -e IS_HTTPS_ENABLED=true shlinkio/shlink:stable` then `shlink api-key:generate`
