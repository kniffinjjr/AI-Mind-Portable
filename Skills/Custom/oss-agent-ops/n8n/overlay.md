---
name: n8n
type: skill
status: active
created: 2026-09-06
updated: 2026-09-06
triggers: ["n8n", "Zapier alternative", "workflow automation", "n8n API"]
related:
  - "[[Skills/Custom/oss-agent-ops/README]]"
  - "[[Toolbox/Open-Source-Stack]]"
replaces: Zapier
source_skill_path: ~/.cursor/plugins/local/oss-agent-ops/skills/n8n/SKILL.md
tags: [skill, oss, agent-ops, n8n]
---

# n8n — Vault overlay

Open-source alternative to **Zapier**.

Runtime body: `~/.cursor/plugins/local/oss-agent-ops/skills/n8n/SKILL.md` (also mirrored under this folder as `SKILL.md` for portable agents).

| Resource | URL |
|----------|-----|
| Home | https://n8n.io |
| Docs | https://docs.n8n.io/ |
| API | https://docs.n8n.io/api/ |

**Auth:** `X-N8N-API-KEY`; MCP OAuth2 or personal MCP token

**Install:** Official Docker Compose from n8n deploy docs (or `docker run n8nio/n8n` with volume)
