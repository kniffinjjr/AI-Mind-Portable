---
name: nocodb
description: >-
  Operate NocoDB (open-source alternative to Airtable) via CLI/API/SDK. Use for NocoDB, Airtable alternative, nocodb api, spreadsheet database.
metadata:
  replaces: Airtable
  source_post: https://x.com/ihteshamali/status/2096598697308205182
  version: "1.0"
---

# NocoDB — agent ops

Open-source alternative to **Airtable**. This skill enables an AI agent to install, authenticate, and operate NocoDB through documented CLI/API/SDK surfaces — not UI click-paths.

## Links

| Resource | URL |
|----------|-----|
| Home | https://nocodb.com |
| GitHub | https://github.com/nocodb/nocodb |
| Docs | https://nocodb.com/docs |
| API / SDK | https://nocodb.com/docs/apis-and-mcp |

## Stack surface

- **SDK / CLI:** Data + Meta REST APIs; official SDK; MCP server
- **Auth:** `xc-token` for REST; `xc-mcp-token` for MCP
- **MCP / automation:** Official MCP: Settings → Model Context Protocol → New MCP Endpoint.

## Install (quickstart)

`curl -fsSL https://install.nocodb.com/noco.sh | bash -s -- --quick` (Compose on :8080)

Install into a **product / project repo** or local ops folder — never as binaries inside the Vault.

## Agent operations

- CRUD records via Data APIs
- Filter/sort/paginate table rows
- Create/update tables and fields (Meta)
- Manage views/bases (plan-gated Meta)
- Upload attachments
- Generate MCP endpoint for a base

## Workflow

1. Confirm target instance (self-host URL or cloud) and that credentials exist in env vars — not chat.
2. Prefer official CLI/SDK/MCP over scraping undocumented endpoints.
3. Run a read-only probe first (version/health/list).
4. Mutating ops only after the probe succeeds; leave intentional residue (IDs, links, logs).
5. Stop when the requested outcome is evidenced or a hard stop triggers.

## Hard stops

- MCP config = full base credentials — never commit
- Scope tokens tightly
- Self-host MCP OAuth limitations apply

## Pairing

- Vault toolbox catalog: `Toolbox/Open-Source-Stack.md`
- Skill index: `Skills/Custom/oss-agent-ops/README.md`
- Prefer Harness · Loop · Graph: evidence over confidence; Writer ≠ Checker for destructive sends/deletes/deploys.
