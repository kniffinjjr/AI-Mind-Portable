---
name: immich
description: >-
  Operate Immich (open-source alternative to Google Photos) via CLI/API/SDK. Use for Immich, Google Photos alternative, immich cli, self-host photos.
metadata:
  replaces: Google Photos
  source_post: https://x.com/ihteshamali/status/2096598697308205182
  version: "1.0"
---

# Immich — agent ops

Open-source alternative to **Google Photos**. This skill enables an AI agent to install, authenticate, and operate Immich through documented CLI/API/SDK surfaces — not UI click-paths.

## Links

| Resource | URL |
|----------|-----|
| Home | https://immich.app |
| GitHub | https://github.com/immich-app/immich |
| Docs | https://docs.immich.app/ |
| API / SDK | https://api.immich.app/ |

## Stack surface

- **SDK / CLI:** `@immich/sdk`; `@immich/cli` (`immich`)
- **Auth:** Permission-scoped API keys; Bearer session JWT for apps
- **MCP / automation:** No official MCP. OpenAPI + SDK + CLI.

## Install (quickstart)

wget official docker-compose.yml + .env → `docker compose up -d`

Install into a **product / project repo** or local ops folder — never as binaries inside the Vault.

## Agent operations

- `immich login-key` / `server-info` / `upload`
- SDK: getMyUser, albums, asset search/upload
- Create albums; set asset visibility
- Manage API keys with least privilege
- Trigger library scans/jobs via API
- Download/export assets programmatically

## Workflow

1. Confirm target instance (self-host URL or cloud) and that credentials exist in env vars — not chat.
2. Prefer official CLI/SDK/MCP over scraping undocumented endpoints.
3. Run a read-only probe first (version/health/list).
4. Mutating ops only after the probe succeeds; leave intentional residue (IDs, links, logs).
5. Stop when the requested outcome is evidenced or a hard stop triggers.

## Hard stops

- Protect `~/.config/immich/auth.yml`
- `--delete` permanently removes local files
- Person/face data is privacy-sensitive

## Pairing

- Vault toolbox catalog: `Toolbox/Open-Source-Stack.md`
- Skill index: `Skills/Custom/oss-agent-ops/README.md`
- Prefer Harness · Loop · Graph: evidence over confidence; Writer ≠ Checker for destructive sends/deletes/deploys.
