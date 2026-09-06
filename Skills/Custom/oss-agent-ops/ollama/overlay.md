---
name: ollama
type: skill
status: active
created: 2026-09-06
updated: 2026-09-06
triggers: ["Ollama", "local LLM", "ChatGPT Pro alternative", "ollama serve"]
related:
  - "[[Skills/Custom/oss-agent-ops/README]]"
  - "[[Toolbox/Open-Source-Stack]]"
replaces: ChatGPT Pro
source_skill_path: ~/.cursor/plugins/local/oss-agent-ops/skills/ollama/SKILL.md
tags: [skill, oss, agent-ops, ollama]
---

# Ollama — Vault overlay

Open-source alternative to **ChatGPT Pro**.

Runtime body: `~/.cursor/plugins/local/oss-agent-ops/skills/ollama/SKILL.md` (also mirrored under this folder as `SKILL.md` for portable agents).

| Resource | URL |
|----------|-----|
| Home | https://ollama.com |
| Docs | https://docs.ollama.com/ |
| API | https://docs.ollama.com/api/introduction |

**Auth:** None on local :11434; cloud needs `OLLAMA_API_KEY`

**Install:** `curl -fsSL https://ollama.com/install.sh | sh` — API on :11434
