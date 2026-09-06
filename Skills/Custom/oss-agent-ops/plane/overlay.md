---
name: plane
type: skill
status: active
created: 2026-09-06
updated: 2026-09-06
triggers: ["Plane.so", "Jira alternative", "plane mcp", "project management OSS"]
related:
  - "[[Skills/Custom/oss-agent-ops/README]]"
  - "[[Toolbox/Open-Source-Stack]]"
replaces: Jira
source_skill_path: ~/.cursor/plugins/local/oss-agent-ops/skills/plane/SKILL.md
tags: [skill, oss, agent-ops, plane]
---

# Plane — Vault overlay

Open-source alternative to **Jira**.

Runtime body: `~/.cursor/plugins/local/oss-agent-ops/skills/plane/SKILL.md` (also mirrored under this folder as `SKILL.md` for portable agents).

| Resource | URL |
|----------|-----|
| Home | https://plane.so |
| Docs | https://docs.plane.so |
| API | https://developers.plane.so/api-reference/introduction |

**Auth:** `X-API-Key` PAT/service token or OAuth Bearer

**Install:** Prime installer or community `setup.sh`; agents: `pipx install plane-compose`
