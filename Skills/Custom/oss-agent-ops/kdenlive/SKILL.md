---
name: kdenlive
description: >-
  Operate Kdenlive (open-source alternative to Premiere Pro) via CLI/API/SDK. Use for Kdenlive, Premiere alternative, melt mlt, video edit OSS.
metadata:
  replaces: Premiere Pro
  source_post: https://x.com/ihteshamali/status/2096598697308205182
  version: "1.0"
---

# Kdenlive — agent ops

Open-source alternative to **Premiere Pro**. This skill enables an AI agent to install, authenticate, and operate Kdenlive through documented CLI/API/SDK surfaces — not UI click-paths.

## Links

| Resource | URL |
|----------|-----|
| Home | https://kdenlive.org/ |
| GitHub | https://invent.kde.org/multimedia/kdenlive |
| Docs | https://docs.kdenlive.org/ |
| API / SDK | https://www.mltframework.org/docs/ |

## Stack surface

- **SDK / CLI:** `.kdenlive` MLT XML; `melt` / `kdenlive_render`
- **Auth:** Local desktop; no remote auth
- **MCP / automation:** No official MCP. Write MLT XML + melt/kdenlive_render in CI.

## Install (quickstart)

Install from kdenlive.org/download (ships melt). Smoke: `melt -query producers`

Install into a **product / project repo** or local ops folder — never as binaries inside the Vault.

## Agent operations

- Generate/edit MLT XML producers/playlists/filters
- Render via `melt project.mlt -consumer avformat:out.mp4`
- Invoke `kdenlive_render` delivery mode
- Batch-transcode clips with melt
- Attach filters/transitions in XML
- Zone render with in=/out= bounds

## Workflow

1. Confirm target instance (self-host URL or cloud) and that credentials exist in env vars — not chat.
2. Prefer official CLI/SDK/MCP over scraping undocumented endpoints.
3. Run a read-only probe first (version/health/list).
4. Mutating ops only after the probe succeeds; leave intentional residue (IDs, links, logs).
5. Stop when the requested outcome is evidenced or a hard stop triggers.

## Hard stops

- No official public REST for GUI timeline editing
- Prefer `melt` for agent pipelines
- Headless servers may need xvfb for titles/graphics

## Pairing

- Vault toolbox catalog: `Toolbox/Open-Source-Stack.md`
- Skill index: `Skills/Custom/oss-agent-ops/README.md`
- Prefer Harness · Loop · Graph: evidence over confidence; Writer ≠ Checker for destructive sends/deletes/deploys.
