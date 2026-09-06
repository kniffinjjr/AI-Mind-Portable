---
name: docuseal
type: skill
status: active
created: 2026-09-06
updated: 2026-09-06
triggers: ["DocuSeal", "DocuSign alternative", "e-sign API OSS"]
related:
  - "[[Skills/Custom/oss-agent-ops/README]]"
  - "[[Toolbox/Open-Source-Stack]]"
replaces: DocuSign
source_skill_path: ~/.cursor/plugins/local/oss-agent-ops/skills/docuseal/SKILL.md
tags: [skill, oss, agent-ops, docuseal]
---

# DocuSeal — Vault overlay

Open-source alternative to **DocuSign**.

Runtime body: `~/.cursor/plugins/local/oss-agent-ops/skills/docuseal/SKILL.md` (also mirrored under this folder as `SKILL.md` for portable agents).

| Resource | URL |
|----------|-----|
| Home | https://www.docuseal.com |
| Docs | https://www.docuseal.com/docs |
| API | https://www.docuseal.com/docs/api |

**Auth:** API key via `X-Auth-Token`

**Install:** `docker run --name docuseal -p 3000:3000 -v.:/data docuseal/docuseal`
