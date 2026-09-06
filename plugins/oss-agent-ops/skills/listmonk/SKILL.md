---
name: listmonk
description: >-
  Operate Listmonk (open-source alternative to Klaviyo) via CLI/API/SDK. Use for Listmonk, Klaviyo alternative, newsletter API, email campaign OSS.
metadata:
  replaces: Klaviyo
  source_post: https://x.com/ihteshamali/status/2096598697308205182
  version: "1.0"
---

# Listmonk — agent ops

Open-source alternative to **Klaviyo**. This skill enables an AI agent to install, authenticate, and operate Listmonk through documented CLI/API/SDK surfaces — not UI click-paths.

## Links

| Resource | URL |
|----------|-----|
| Home | https://listmonk.app |
| GitHub | https://github.com/knadh/listmonk |
| Docs | https://listmonk.app/docs/ |
| API / SDK | https://listmonk.app/docs/apis/apis/ |

## Stack surface

- **SDK / CLI:** Single Go binary `listmonk`; REST JSON API + Swagger
- **Auth:** HTTP Basic and/or Authorization token; role-scoped API users
- **MCP / automation:** No official MCP. Full REST + public subscription APIs.

## Install (quickstart)

`curl -LO https://github.com/knadh/listmonk/raw/master/docker-compose.yml && docker compose up -d` → http://localhost:9000

Install into a **product / project repo** or local ops folder — never as binaries inside the Vault.

## Agent operations

- CRUD subscribers `/api/subscribers`
- Manage lists and memberships
- Create/schedule/start campaigns
- Manage templates and media
- Send transactional mail `/api/tx`
- Bulk import; query/blocklist by expression

## Workflow

1. Confirm target instance (self-host URL or cloud) and that credentials exist in env vars — not chat.
2. Prefer official CLI/SDK/MCP over scraping undocumented endpoints.
3. Run a read-only probe first (version/health/list).
4. Mutating ops only after the probe succeeds; leave intentional residue (IDs, links, logs).
5. Stop when the requested outcome is evidenced or a hard stop triggers.

## Hard stops

- Campaign send and subscriber delete are high blast-radius
- SQL query-delete can wipe large sets — human gate
- SMTP credentials and admin password are secrets

## Pairing

- Vault toolbox catalog: `Toolbox/Open-Source-Stack.md`
- Skill index: `Skills/Custom/oss-agent-ops/README.md`
- Prefer Harness · Loop · Graph: evidence over confidence; Writer ≠ Checker for destructive sends/deletes/deploys.
