---
name: coolify
type: skill
status: active
created: 2026-09-06
updated: 2026-09-06
triggers: ["Coolify", "Heroku alternative", "self-host PaaS", "coolify cli"]
related:
  - "[[Skills/Custom/oss-agent-ops/README]]"
  - "[[Toolbox/Open-Source-Stack]]"
replaces: Heroku
source_skill_path: ~/.cursor/plugins/local/oss-agent-ops/skills/coolify/SKILL.md
tags: [skill, oss, agent-ops, coolify]
---

# Coolify — Vault overlay

Open-source alternative to **Heroku**.

Runtime body: `~/.cursor/plugins/local/oss-agent-ops/skills/coolify/SKILL.md` (also mirrored under this folder as `SKILL.md` for portable agents).

| Resource | URL |
|----------|-----|
| Home | https://coolify.io |
| Docs | https://coolify.io/docs |
| API | https://coolify.io/docs/api-reference/authorization |

**Auth:** Sanctum API tokens with permissions read|write|deploy|root; enable API Access

**Install:** `curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash` (root/sudo + Docker; UI :8000)
