---
name: medusa
type: skill
status: active
created: 2026-09-06
updated: 2026-09-06
triggers: ["MedusaJS", "Shopify alternative", "medusa commerce", "headless ecommerce"]
related:
  - "[[Skills/Custom/oss-agent-ops/README]]"
  - "[[Toolbox/Open-Source-Stack]]"
replaces: Shopify
source_skill_path: ~/.cursor/plugins/local/oss-agent-ops/skills/medusa/SKILL.md
tags: [skill, oss, agent-ops, medusa]
---

# Medusa — Vault overlay

Open-source alternative to **Shopify**.

Runtime body: `~/.cursor/plugins/local/oss-agent-ops/skills/medusa/SKILL.md` (also mirrored under this folder as `SKILL.md` for portable agents).

| Resource | URL |
|----------|-----|
| Home | https://medusajs.com/ |
| Docs | https://docs.medusajs.com/ |
| API | https://docs.medusajs.com/api/admin |

**Auth:** Admin JWT / secret API key / cookie; Store customer auth providers

**Install:** `npx create-medusa-app@latest my-store` (Node 20+, PostgreSQL) → :9000
