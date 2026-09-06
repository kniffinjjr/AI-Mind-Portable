---
name: open-seo
type: skill
status: active
created: 2026-09-06
updated: 2026-09-06
triggers: ["OpenSEO", "Semrush alternative", "openseo.so", "SEO MCP"]
related:
  - "[[Skills/Custom/oss-agent-ops/README]]"
  - "[[Toolbox/Open-Source-Stack]]"
replaces: Semrush
source_skill_path: ~/.cursor/plugins/local/oss-agent-ops/skills/open-seo/SKILL.md
tags: [skill, oss, agent-ops, open-seo]
---

# OpenSEO — Vault overlay

Open-source alternative to **Semrush**.

Runtime body: `~/.cursor/plugins/local/oss-agent-ops/skills/open-seo/SKILL.md` (also mirrored under this folder as `SKILL.md` for portable agents).

| Resource | URL |
|----------|-----|
| Home | https://openseo.so |
| Docs | https://openseo.so/docs |
| API | https://openseo.so/docs (MCP + Agent Skills; no separate public product REST) |

**Auth:** Hosted MCP OAuth or personal API key; Docker self-host often single-user

**Install:** Self-host per https://openseo.so/docs/self-hosting — set `DATAFORSEO_API_KEY`, `docker compose up`
