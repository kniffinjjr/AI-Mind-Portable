---
name: metabase
type: skill
status: active
created: 2026-09-06
updated: 2026-09-06
triggers: ["Metabase", "Tableau alternative", "metabase api", "BI OSS"]
related:
  - "[[Skills/Custom/oss-agent-ops/README]]"
  - "[[Toolbox/Open-Source-Stack]]"
replaces: Tableau
source_skill_path: ~/.cursor/plugins/local/oss-agent-ops/skills/metabase/SKILL.md
tags: [skill, oss, agent-ops, metabase]
---

# Metabase — Vault overlay

Open-source alternative to **Tableau**.

Runtime body: `~/.cursor/plugins/local/oss-agent-ops/skills/metabase/SKILL.md` (also mirrored under this folder as `SKILL.md` for portable agents).

| Resource | URL |
|----------|-----|
| Home | https://www.metabase.com/ |
| Docs | https://www.metabase.com/docs/latest/ |
| API | https://www.metabase.com/docs/latest/api |

**Auth:** `X-API-Key` preferred; or session `X-Metabase-Session`

**Install:** `java -jar metabase.jar` or Docker `metabase/metabase` → :3000; create API key in Admin
