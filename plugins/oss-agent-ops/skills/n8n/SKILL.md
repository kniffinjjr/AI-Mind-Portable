---
name: n8n
description: >-
  Operate n8n (open-source alternative to Zapier) via CLI/API/SDK. Use for n8n, Zapier alternative, workflow automation, n8n API.
metadata:
  replaces: Zapier
  source_post: https://x.com/ihteshamali/status/2096598697308205182
  version: "1.0"
---

# n8n — agent ops

Open-source alternative to **Zapier**. This skill enables an AI agent to install, authenticate, and operate n8n through documented CLI/API/SDK surfaces — not UI click-paths.

## Links

| Resource | URL |
|----------|-----|
| Home | https://n8n.io |
| GitHub | https://github.com/n8n-io/n8n |
| Docs | https://docs.n8n.io/ |
| API / SDK | https://docs.n8n.io/api/ |

## Stack surface

- **SDK / CLI:** CLI `n8n`; Public REST `/api/v1`; instance Swagger
- **Auth:** `X-N8N-API-KEY`; MCP OAuth2 or personal MCP token
- **MCP / automation:** Built-in instance MCP at `/mcp-server/http` + webhooks + REST.

## Install (quickstart)

Official Docker Compose from n8n deploy docs (or `docker run n8nio/n8n` with volume)

Install into a **product / project repo** or local ops folder — never as binaries inside the Vault.

## Agent operations

- List/create/update/delete workflows
- Activate/deactivate workflows
- Execute workflows; read executions
- Manage credentials (privileged)
- Trigger webhook workflows
- Import/export via CLI for CI
- Use instance MCP for selected workflows

## Workflow

1. Confirm target instance (self-host URL or cloud) and that credentials exist in env vars — not chat.
2. Prefer official CLI/SDK/MCP over scraping undocumented endpoints.
3. Run a read-only probe first (version/health/list).
4. Mutating ops only after the probe succeeds; leave intentional residue (IDs, links, logs).
5. Stop when the requested outcome is evidenced or a hard stop triggers.

## Hard stops

- API key / MCP token can access credentials
- Only expose selected workflows to MCP
- Unauthenticated webhooks are abuse-prone

## Pairing

- Vault toolbox catalog: `Toolbox/Open-Source-Stack.md`
- Skill index: `Skills/Custom/oss-agent-ops/README.md`
- Prefer Harness · Loop · Graph: evidence over confidence; Writer ≠ Checker for destructive sends/deletes/deploys.
