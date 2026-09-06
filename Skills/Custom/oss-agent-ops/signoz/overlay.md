---
name: signoz
type: skill
status: active
created: 2026-09-06
updated: 2026-09-06
triggers: ["SigNoz", "Datadog alternative", "OpenTelemetry", "signoz api"]
related:
  - "[[Skills/Custom/oss-agent-ops/README]]"
  - "[[Toolbox/Open-Source-Stack]]"
replaces: Datadog
source_skill_path: ~/.cursor/plugins/local/oss-agent-ops/skills/signoz/SKILL.md
tags: [skill, oss, agent-ops, signoz]
---

# SigNoz — Vault overlay

Open-source alternative to **Datadog**.

Runtime body: `~/.cursor/plugins/local/oss-agent-ops/skills/signoz/SKILL.md` (also mirrored under this folder as `SKILL.md` for portable agents).

| Resource | URL |
|----------|-----|
| Home | https://signoz.io/ |
| Docs | https://signoz.io/docs/ |
| API | https://signoz.io/docs/metrics-management/query-range-api/ |

**Auth:** Service Account header `SIGNOZ-API-KEY`

**Install:** Install foundryctl → casting.yaml → `foundryctl cast -f casting.yaml` → UI :8080
