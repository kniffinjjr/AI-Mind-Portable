---
name: languagetool
type: skill
status: active
created: 2026-09-06
updated: 2026-09-06
triggers: ["LanguageTool", "Grammarly alternative", "grammar API", "proofreading OSS"]
related:
  - "[[Skills/Custom/oss-agent-ops/README]]"
  - "[[Toolbox/Open-Source-Stack]]"
replaces: Grammarly
source_skill_path: ~/.cursor/plugins/local/oss-agent-ops/skills/languagetool/SKILL.md
tags: [skill, oss, agent-ops, languagetool]
---

# LanguageTool — Vault overlay

Open-source alternative to **Grammarly**.

Runtime body: `~/.cursor/plugins/local/oss-agent-ops/skills/languagetool/SKILL.md` (also mirrored under this folder as `SKILL.md` for portable agents).

| Resource | URL |
|----------|-----|
| Home | https://languagetool.org |
| Docs | https://dev.languagetool.org |
| API | https://languagetool.org/http-api/ |

**Auth:** Public free API: no key (strict limits). Premium: API key. Self-host: local HTTP

**Install:** Run `languagetool-server.jar` on :8081 or Docker behind a proxy
