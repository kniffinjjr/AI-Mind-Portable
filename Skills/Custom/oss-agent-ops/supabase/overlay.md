---
name: supabase
type: skill
status: active
created: 2026-09-06
updated: 2026-09-06
triggers: ["Supabase", "Firebase alternative", "supabase cli", "supabase mcp"]
related:
  - "[[Skills/Custom/oss-agent-ops/README]]"
  - "[[Toolbox/Open-Source-Stack]]"
replaces: Firebase
source_skill_path: ~/.cursor/plugins/local/oss-agent-ops/skills/supabase/SKILL.md
tags: [skill, oss, agent-ops, supabase]
---

# Supabase — Vault overlay

Open-source alternative to **Firebase**.

Runtime body: `~/.cursor/plugins/local/oss-agent-ops/skills/supabase/SKILL.md` (also mirrored under this folder as `SKILL.md` for portable agents).

| Resource | URL |
|----------|-----|
| Home | https://supabase.com |
| Docs | https://supabase.com/docs |
| API | https://supabase.com/docs/reference |

**Auth:** anon + service_role keys; CLI access tokens; MCP OAuth or PAT

**Install:** `npm i -D supabase && npx supabase init && npx supabase start` (Docker)
