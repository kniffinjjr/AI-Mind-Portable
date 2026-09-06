---
name: nocodb
type: skill
status: active
created: 2026-09-06
updated: 2026-09-06
triggers: ["NocoDB", "Airtable alternative", "nocodb api", "spreadsheet database"]
related:
  - "[[Skills/Custom/oss-agent-ops/README]]"
  - "[[Toolbox/Open-Source-Stack]]"
replaces: Airtable
source_skill_path: ~/.cursor/plugins/local/oss-agent-ops/skills/nocodb/SKILL.md
tags: [skill, oss, agent-ops, nocodb]
---

# NocoDB — Vault overlay

Open-source alternative to **Airtable**.

Runtime body: `~/.cursor/plugins/local/oss-agent-ops/skills/nocodb/SKILL.md` (also mirrored under this folder as `SKILL.md` for portable agents).

| Resource | URL |
|----------|-----|
| Home | https://nocodb.com |
| Docs | https://nocodb.com/docs |
| API | https://nocodb.com/docs/apis-and-mcp |

**Auth:** `xc-token` for REST; `xc-mcp-token` for MCP

**Install:** `curl -fsSL https://install.nocodb.com/noco.sh | bash -s -- --quick` (Compose on :8080)
