---
name: syncthing
type: skill
status: active
created: 2026-09-06
updated: 2026-09-06
triggers: ["Syncthing", "Dropbox alternative", "syncthing api", "P2P sync"]
related:
  - "[[Skills/Custom/oss-agent-ops/README]]"
  - "[[Toolbox/Open-Source-Stack]]"
replaces: Dropbox
source_skill_path: ~/.cursor/plugins/local/oss-agent-ops/skills/syncthing/SKILL.md
tags: [skill, oss, agent-ops, syncthing]
---

# Syncthing — Vault overlay

Open-source alternative to **Dropbox**.

Runtime body: `~/.cursor/plugins/local/oss-agent-ops/skills/syncthing/SKILL.md` (also mirrored under this folder as `SKILL.md` for portable agents).

| Resource | URL |
|----------|-----|
| Home | https://syncthing.net |
| Docs | https://docs.syncthing.net/ |
| API | https://docs.syncthing.net/dev/rest.html |

**Auth:** GUI/REST API key (`X-API-Key` or Bearer)

**Install:** Package/binary or Docker `syncthing/syncthing`; GUI/API default http://127.0.0.1:8384
