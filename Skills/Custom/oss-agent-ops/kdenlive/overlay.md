---
name: kdenlive
type: skill
status: active
created: 2026-09-06
updated: 2026-09-06
triggers: ["Kdenlive", "Premiere alternative", "melt mlt", "video edit OSS"]
related:
  - "[[Skills/Custom/oss-agent-ops/README]]"
  - "[[Toolbox/Open-Source-Stack]]"
replaces: Premiere Pro
source_skill_path: ~/.cursor/plugins/local/oss-agent-ops/skills/kdenlive/SKILL.md
tags: [skill, oss, agent-ops, kdenlive]
---

# Kdenlive — Vault overlay

Open-source alternative to **Premiere Pro**.

Runtime body: `~/.cursor/plugins/local/oss-agent-ops/skills/kdenlive/SKILL.md` (also mirrored under this folder as `SKILL.md` for portable agents).

| Resource | URL |
|----------|-----|
| Home | https://kdenlive.org/ |
| Docs | https://docs.kdenlive.org/ |
| API | https://www.mltframework.org/docs/ |

**Auth:** Local desktop; no remote auth

**Install:** Install from kdenlive.org/download (ships melt). Smoke: `melt -query producers`
