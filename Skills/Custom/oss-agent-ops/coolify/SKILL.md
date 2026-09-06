---
name: coolify
description: >-
  Operate Coolify (open-source alternative to Heroku) via CLI/API/SDK. Use for Coolify, Heroku alternative, self-host PaaS, coolify cli.
metadata:
  replaces: Heroku
  source_post: https://x.com/ihteshamali/status/2096598697308205182
  version: "1.0"
---

# Coolify — agent ops

Open-source alternative to **Heroku**. This skill enables an AI agent to install, authenticate, and operate Coolify through documented CLI/API/SDK surfaces — not UI click-paths.

## Links

| Resource | URL |
|----------|-----|
| Home | https://coolify.io |
| GitHub | https://github.com/coollabsio/coolify |
| Docs | https://coolify.io/docs |
| API / SDK | https://coolify.io/docs/api-reference/authorization |

## Stack surface

- **SDK / CLI:** `coolify-cli`; REST `/api/v1` Bearer token
- **Auth:** Sanctum API tokens with permissions read|write|deploy|root; enable API Access
- **MCP / automation:** Built-in MCP at `/mcp` when Enable MCP Server is on.

## Install (quickstart)

`curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash` (root/sudo + Docker; UI :8000)

Install into a **product / project repo** or local ops folder — never as binaries inside the Vault.

## Agent operations

- `coolify context add` register instance+token
- List servers/projects/apps/databases/services
- Create apps (git/Dockerfile/image)
- Sync env vars; deploy by uuid/name/batch
- Manage domains and private keys
- Read deployment status/logs; `/api/v1/health`

## Workflow

1. Confirm target instance (self-host URL or cloud) and that credentials exist in env vars — not chat.
2. Prefer official CLI/SDK/MCP over scraping undocumented endpoints.
3. Run a read-only probe first (version/health/list).
4. Mutating ops only after the probe succeeds; leave intentional residue (IDs, links, logs).
5. Stop when the requested outcome is evidenced or a hard stop triggers.

## Hard stops

- Avoid root tokens; prefer least privilege
- `read:sensitive` exposes secrets
- Deploy/delete production needs human gate

## Pairing

- Vault toolbox catalog: `Toolbox/Open-Source-Stack.md`
- Skill index: `Skills/Custom/oss-agent-ops/README.md`
- Prefer Harness · Loop · Graph: evidence over confidence; Writer ≠ Checker for destructive sends/deletes/deploys.
