---
name: mattermost
type: skill
status: active
created: 2026-09-06
updated: 2026-09-06
triggers: ["Mattermost", "Slack alternative", "mmctl", "mattermost api"]
related:
  - "[[Skills/Custom/oss-agent-ops/README]]"
  - "[[Toolbox/Open-Source-Stack]]"
replaces: Slack
source_skill_path: ~/.cursor/plugins/local/oss-agent-ops/skills/mattermost/SKILL.md
tags: [skill, oss, agent-ops, mattermost]
---

# Mattermost — Vault overlay

Open-source alternative to **Slack**.

Runtime body: `~/.cursor/plugins/local/oss-agent-ops/skills/mattermost/SKILL.md` (also mirrored under this folder as `SKILL.md` for portable agents).

| Resource | URL |
|----------|-----|
| Home | https://mattermost.com |
| Docs | https://docs.mattermost.com/ |
| API | https://api.mattermost.com/ |

**Auth:** Bearer session / personal access token / bot token; mmctl login or `--local`

**Install:** Official docker-compose / Omnibus / Kubernetes per Mattermost deploy docs
