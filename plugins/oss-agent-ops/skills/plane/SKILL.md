---
name: plane
description: >-
  Operate Plane (open-source alternative to Jira) via CLI/API/SDK. Use for Plane.so, Jira alternative, plane mcp, project management OSS.
metadata:
  replaces: Jira
  source_post: https://x.com/ihteshamali/status/2096598697308205182
  version: "1.0"
---

# Plane — agent ops

Open-source alternative to **Jira**. This skill enables an AI agent to install, authenticate, and operate Plane through documented CLI/API/SDK surfaces — not UI click-paths.

## Links

| Resource | URL |
|----------|-----|
| Home | https://plane.so |
| GitHub | https://github.com/makeplane/plane |
| Docs | https://docs.plane.so |
| API / SDK | https://developers.plane.so/api-reference/introduction |

## Stack surface

- **SDK / CLI:** `@makeplane/plane-node-sdk`; `plane-compose`; Prime CLI; REST
- **Auth:** `X-API-Key` PAT/service token or OAuth Bearer
- **MCP / automation:** Official MCP https://developers.plane.so/dev-tools/mcp-server — hosted or `uvx plane-mcp-server`.

## Install (quickstart)

Prime installer or community `setup.sh`; agents: `pipx install plane-compose`

Install into a **product / project repo** or local ops folder — never as binaries inside the Vault.

## Agent operations

- List/create projects
- CRUD work items
- Manage states, labels, modules, cycles
- `plane compose` init/push/pull/diff/validate
- Prime CLI start/stop/upgrade/backup
- Webhook/app OAuth bot flows

## Workflow

1. Confirm target instance (self-host URL or cloud) and that credentials exist in env vars — not chat.
2. Prefer official CLI/SDK/MCP over scraping undocumented endpoints.
3. Run a read-only probe first (version/health/list).
4. Mutating ops only after the probe succeeds; leave intentional residue (IDs, links, logs).
5. Stop when the requested outcome is evidenced or a hard stop triggers.

## Hard stops

- Never expose PAT in client code
- Prefer dry-run on compose push
- Project/work-item deletes need human gate

## Pairing

- Vault toolbox catalog: `Toolbox/Open-Source-Stack.md`
- Skill index: `Skills/Custom/oss-agent-ops/README.md`
- Prefer Harness · Loop · Graph: evidence over confidence; Writer ≠ Checker for destructive sends/deletes/deploys.
