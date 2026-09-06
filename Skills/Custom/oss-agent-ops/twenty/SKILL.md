---
name: twenty
description: >-
  Operate Twenty CRM (open-source alternative to Salesforce) via CLI/API/SDK. Use for Twenty CRM, Salesforce alternative, twenty.com api, open source CRM.
metadata:
  replaces: Salesforce
  source_post: https://x.com/ihteshamali/status/2096598697308205182
  version: "1.0"
---

# Twenty CRM — agent ops

Open-source alternative to **Salesforce**. This skill enables an AI agent to install, authenticate, and operate Twenty CRM through documented CLI/API/SDK surfaces — not UI click-paths.

## Links

| Resource | URL |
|----------|-----|
| Home | https://twenty.com/ |
| GitHub | https://github.com/twentyhq/twenty |
| Docs | https://docs.twenty.com/ |
| API / SDK | https://docs.twenty.com/developers/extend/api |

## Stack surface

- **SDK / CLI:** REST + GraphQL (workspace OpenAPI under Settings → API & Webhooks)
- **Auth:** Bearer API key; OAuth 2.0 auth-code+PKCE and client_credentials
- **MCP / automation:** No official MCP. Automate via REST/GraphQL + webhooks (100 req/min).

## Install (quickstart)

Twenty docker install script or compose from `packages/twenty-docker` → :3000

Install into a **product / project repo** or local ops folder — never as binaries inside the Vault.

## Agent operations

- CRUD People/Companies/Opportunities/custom objects
- GraphQL queries/mutations with relations
- Batch create/update/delete (max 60)
- Metadata API for objects/fields/relations
- Soft-delete/restore via GraphQL
- Register OAuth clients `/oauth/*`

## Workflow

1. Confirm target instance (self-host URL or cloud) and that credentials exist in env vars — not chat.
2. Prefer official CLI/SDK/MCP over scraping undocumented endpoints.
3. Run a read-only probe first (version/health/list).
4. Mutating ops only after the probe succeeds; leave intentional residue (IDs, links, logs).
5. Stop when the requested outcome is evidenced or a hard stop triggers.

## Hard stops

- Schema is per-workspace (no static global OpenAPI)
- API keys shown once
- Batch hard cap 60; respect rate limit

## Pairing

- Vault toolbox catalog: `Toolbox/Open-Source-Stack.md`
- Skill index: `Skills/Custom/oss-agent-ops/README.md`
- Prefer Harness · Loop · Graph: evidence over confidence; Writer ≠ Checker for destructive sends/deletes/deploys.
