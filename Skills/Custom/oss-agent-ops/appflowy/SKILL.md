---
name: appflowy
description: >-
  Operate AppFlowy (open-source alternative to Notion) via CLI/API/SDK. Use for AppFlowy, Notion alternative, AppFlowy Cloud API.
metadata:
  replaces: Notion
  source_post: https://x.com/ihteshamali/status/2096598697308205182
  version: "1.0"
---

# AppFlowy — agent ops

Open-source alternative to **Notion**. This skill enables an AI agent to install, authenticate, and operate AppFlowy through documented CLI/API/SDK surfaces — not UI click-paths.

## Links

| Resource | URL |
|----------|-----|
| Home | https://appflowy.io |
| GitHub | https://github.com/AppFlowy-IO/AppFlowy |
| Docs | https://docs.appflowy.io/ |
| API / SDK | https://github.com/AppFlowy-IO/documentations/tree/main/documentation/appflowy-cloud/openapi |

## Stack surface

- **SDK / CLI:** AppFlowy-Cloud REST `/api` + GoTrue `/gotrue` + WS `/ws`
- **Auth:** GoTrue email/password/OAuth → Bearer JWT
- **MCP / automation:** No official MCP. HTTP + WebSocket + OpenAPI specs.

## Install (quickstart)

Clone AppFlowy-Cloud → configure `.env` → `docker compose up -d`

Install into a **product / project repo** or local ops folder — never as binaries inside the Vault.

## Agent operations

- POST `/gotrue/token` for JWT
- List/create workspaces `/api/workspace`
- Read workspace folder tree
- List databases; create/update rows
- Admin user listing with admin token
- WebSocket collab sync for live docs

## Workflow

1. Confirm target instance (self-host URL or cloud) and that credentials exist in env vars — not chat.
2. Prefer official CLI/SDK/MCP over scraping undocumented endpoints.
3. Run a read-only probe first (version/health/list).
4. Mutating ops only after the probe succeeds; leave intentional residue (IDs, links, logs).
5. Stop when the requested outcome is evidenced or a hard stop triggers.

## Hard stops

- Protect JWT, GoTrue, and MinIO/S3 secrets
- Client↔server version skew breaks sync
- Admin APIs manage all users — TLS required

## Pairing

- Vault toolbox catalog: `Toolbox/Open-Source-Stack.md`
- Skill index: `Skills/Custom/oss-agent-ops/README.md`
- Prefer Harness · Loop · Graph: evidence over confidence; Writer ≠ Checker for destructive sends/deletes/deploys.
