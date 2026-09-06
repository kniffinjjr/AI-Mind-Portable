---
name: planka
description: >-
  Operate Planka (open-source alternative to Trello) via CLI/API/SDK. Use for Planka, Trello alternative, kanban OSS, planka api.
metadata:
  replaces: Trello
  source_post: https://x.com/ihteshamali/status/2096598697308205182
  version: "1.0"
---

# Planka — agent ops

Open-source alternative to **Trello**. This skill enables an AI agent to install, authenticate, and operate Planka through documented CLI/API/SDK surfaces — not UI click-paths.

## Links

| Resource | URL |
|----------|-----|
| Home | https://planka.app |
| GitHub | https://github.com/plankanban/planka |
| Docs | https://docs.planka.cloud |
| API / SDK | https://plankanban.github.io/planka/swagger-ui/ |

## Stack surface

- **SDK / CLI:** REST `/api`; community `@gewis/planka-client`
- **Auth:** JWT via `/api/access-tokens`; optional OIDC; v2 `X-Api-Key`
- **MCP / automation:** No official MCP. Automate via REST/Swagger.

## Install (quickstart)

curl docker-compose.yml → set `SECRET_KEY` + `BASE_URL` → create admin → `docker compose up -d`

Install into a **product / project repo** or local ops folder — never as binaries inside the Vault.

## Agent operations

- Create access token / API key
- List/create projects and boards
- CRUD lists and cards
- Move/duplicate cards; due dates
- Manage labels, checklists, attachments
- Board membership role updates

## Workflow

1. Confirm target instance (self-host URL or cloud) and that credentials exist in env vars — not chat.
2. Prefer official CLI/SDK/MCP over scraping undocumented endpoints.
3. Run a read-only probe first (version/health/list).
4. Mutating ops only after the probe succeeds; leave intentional residue (IDs, links, logs).
5. Stop when the requested outcome is evidenced or a hard stop triggers.

## Hard stops

- Set strong `SECRET_KEY`
- Configure outgoing host/IP blocks (SSRF)
- API key shown once; card deletes are destructive

## Pairing

- Vault toolbox catalog: `Toolbox/Open-Source-Stack.md`
- Skill index: `Skills/Custom/oss-agent-ops/README.md`
- Prefer Harness · Loop · Graph: evidence over confidence; Writer ≠ Checker for destructive sends/deletes/deploys.
