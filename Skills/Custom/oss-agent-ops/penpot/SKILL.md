---
name: penpot
description: >-
  Operate Penpot (open-source alternative to Canva) via CLI/API/SDK. Use for Penpot, Canva alternative, open source design, penpot api.
metadata:
  replaces: Canva
  source_post: https://x.com/ihteshamali/status/2096598697308205182
  version: "1.0"
---

# Penpot — agent ops

Open-source alternative to **Canva**. This skill enables an AI agent to install, authenticate, and operate Penpot through documented CLI/API/SDK surfaces — not UI click-paths.

## Links

| Resource | URL |
|----------|-----|
| Home | https://penpot.app |
| GitHub | https://github.com/penpot/penpot |
| Docs | https://help.penpot.app/ |
| API / SDK | https://help.penpot.app/technical-guide/developer/http-api/ |

## Stack surface

- **SDK / CLI:** HTTP RPC API; plugin types `@penpot/plugin-types`
- **Auth:** Personal access token (`Authorization: Token <token>`) or session cookies
- **MCP / automation:** No first-party MCP. Use RPC HTTP + webhooks + plugins.

## Install (quickstart)

curl Penpot docker-compose from docs → `docker compose -p penpot up -d` (HTTPS proxy on :9001)

Install into a **product / project repo** or local ops folder — never as binaries inside the Vault.

## Agent operations

- Authenticate with access token against `/api/rpc/command/*`
- get-profile / get-file / export SVG or binfile
- import-binfile / create-file for project automation
- Create/list/delete access tokens
- Consume team webhooks (file create/update/comment)
- Build plugins against Penpot Plugin API

## Workflow

1. Confirm target instance (self-host URL or cloud) and that credentials exist in env vars — not chat.
2. Prefer official CLI/SDK/MCP over scraping undocumented endpoints.
3. Run a read-only probe first (version/health/list).
4. Mutating ops only after the probe succeeds; leave intentional residue (IDs, links, logs).
5. Stop when the requested outcome is evidenced or a hard stop triggers.

## Hard stops

- Never commit access tokens
- Scope tokens tightly — RPC can mutate design data
- Production requires HTTPS (secure cookies / browser crypto)

## Pairing

- Vault toolbox catalog: `Toolbox/Open-Source-Stack.md`
- Skill index: `Skills/Custom/oss-agent-ops/README.md`
- Prefer Harness · Loop · Graph: evidence over confidence; Writer ≠ Checker for destructive sends/deletes/deploys.
