---
name: webstudio
type: skill
status: active
created: 2026-09-06
updated: 2026-09-06
triggers: ["Webstudio", "Webflow alternative", "webstudio cli", "visual web builder OSS"]
related:
  - "[[Skills/Custom/oss-agent-ops/README]]"
  - "[[Toolbox/Open-Source-Stack]]"
replaces: Webflow
source_skill_path: ~/.cursor/plugins/local/oss-agent-ops/skills/webstudio/SKILL.md
tags: [skill, oss, agent-ops, webstudio]
---

# Webstudio — Vault overlay

Open-source alternative to **Webflow**.

Runtime body: `~/.cursor/plugins/local/oss-agent-ops/skills/webstudio/SKILL.md` (also mirrored under this folder as `SKILL.md` for portable agents).

| Resource | URL |
|----------|-----|
| Home | https://webstudio.is/ |
| Docs | https://docs.webstudio.is/ |
| API | https://docs.webstudio.is/university/cli |

**Auth:** Builder share link with Build access (token in local config)

**Install:** Node >= 22.12; `npx --yes webstudio@latest --version` then `npx webstudio link`
