---
name: cap
type: skill
status: active
created: 2026-09-06
updated: 2026-09-06
triggers: ["Cap.so", "Loom alternative", "cap cli", "screen recording OSS"]
related:
  - "[[Skills/Custom/oss-agent-ops/README]]"
  - "[[Toolbox/Open-Source-Stack]]"
replaces: Loom
source_skill_path: ~/.cursor/plugins/local/oss-agent-ops/skills/cap/SKILL.md
tags: [skill, oss, agent-ops, cap]
---

# Cap — Vault overlay

Open-source alternative to **Loom**.

Runtime body: `~/.cursor/plugins/local/oss-agent-ops/skills/cap/SKILL.md` (also mirrored under this folder as `SKILL.md` for portable agents).

| Resource | URL |
|----------|-----|
| Home | https://cap.so |
| Docs | https://cap.so/docs |
| API | https://cap.so/docs/api/rest-api |

**Auth:** `CAP_API_KEY` / `CAP_AGENT_TOKEN` for CLI/MCP; REST secret `csk_`

**Install:** Self-host: clone Cap + `docker compose up -d`. CLI: `curl -fsSL https://cap.so/install-cli.sh | sh`
