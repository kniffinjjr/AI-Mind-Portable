---
name: appsmith
description: >-
  Operate Appsmith (open-source alternative to Retool) via CLI/API/SDK. Use for Appsmith, Retool alternative, appsmithctl, internal tools OSS.
metadata:
  replaces: Retool
  source_post: https://x.com/ihteshamali/status/2096598697308205182
  version: "1.0"
---

# Appsmith — agent ops

Open-source alternative to **Retool**. This skill enables an AI agent to install, authenticate, and operate Appsmith through documented CLI/API/SDK surfaces — not UI click-paths.

## Links

| Resource | URL |
|----------|-----|
| Home | https://www.appsmith.com/ |
| GitHub | https://github.com/appsmithorg/appsmith |
| Docs | https://docs.appsmith.com/ |
| API / SDK | Internal `/api/v1/*`; instance ops via `appsmithctl` |

## Stack surface

- **SDK / CLI:** `appsmithctl` backup/restore/export_db/import_db
- **Auth:** Instance user/session; datasource API key/Basic/OAuth2
- **MCP / automation:** No official MCP. Prefer `appsmithctl` for instance ops; treat `/api/v1` as editor-oriented.

## Install (quickstart)

Docker Compose `appsmith/appsmith-ce` with `./stacks` volume → http://localhost

Install into a **product / project repo** or local ops folder — never as binaries inside the Vault.

## Agent operations

- Self-host and configure `docker.env`
- `appsmithctl backup|restore`
- `appsmithctl export_db|import_db`
- Create Authenticated API datasources/queries in apps
- Call `/api/v1/applications|pages|datasources|actions`
- Publish apps via `/api/v1/applications/publish/{id}`

## Workflow

1. Confirm target instance (self-host URL or cloud) and that credentials exist in env vars — not chat.
2. Prefer official CLI/SDK/MCP over scraping undocumented endpoints.
3. Run a read-only probe first (version/health/list).
4. Mutating ops only after the probe succeeds; leave intentional residue (IDs, links, logs).
5. Stop when the requested outcome is evidenced or a hard stop triggers.

## Hard stops

- No first-party SDK to author full visual UIs like the builder
- Internal `/api/v1` may change
- Backup restore needs encryption password

## Pairing

- Vault toolbox catalog: `Toolbox/Open-Source-Stack.md`
- Skill index: `Skills/Custom/oss-agent-ops/README.md`
- Prefer Harness · Loop · Graph: evidence over confidence; Writer ≠ Checker for destructive sends/deletes/deploys.
