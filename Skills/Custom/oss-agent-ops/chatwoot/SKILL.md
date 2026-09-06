---
name: chatwoot
description: >-
  Operate Chatwoot (open-source alternative to Intercom) via CLI/API/SDK. Use for Chatwoot, Intercom alternative, chatwoot cli, customer support OSS.
metadata:
  replaces: Intercom
  source_post: https://x.com/ihteshamali/status/2096598697308205182
  version: "1.0"
---

# Chatwoot — agent ops

Open-source alternative to **Intercom**. This skill enables an AI agent to install, authenticate, and operate Chatwoot through documented CLI/API/SDK surfaces — not UI click-paths.

## Links

| Resource | URL |
|----------|-----|
| Home | https://www.chatwoot.com |
| GitHub | https://github.com/chatwoot/chatwoot |
| Docs | https://www.chatwoot.com/docs |
| API / SDK | https://developers.chatwoot.com/api-reference/introduction |

## Stack surface

- **SDK / CLI:** Official CLI (`curl -fsSL https://chwt.app/install-cli | sh`); Application/Client/Platform REST
- **Auth:** Application: agent `access_token`; Client: inbox+contact identifiers; Platform: platform app token
- **MCP / automation:** Official agent skill: `npx skills add chatwoot/cli` (CLI designed for coding agents).

## Install (quickstart)

Production docker-compose from chatwoot + `db:chatwoot_prepare` + proxy

Install into a **product / project repo** or local ops folder — never as binaries inside the Vault.

## Agent operations

- `chatwoot convs` list/filter
- `chatwoot conv <id>` read thread
- Reply public or `--private` note
- assign / label / priority / resolve|pending|snooze
- contacts / inboxes / agents
- help center article search
- `chatwoot api` raw Application API

## Workflow

1. Confirm target instance (self-host URL or cloud) and that credentials exist in env vars — not chat.
2. Prefer official CLI/SDK/MCP over scraping undocumented endpoints.
3. Run a read-only probe first (version/health/list).
4. Mutating ops only after the probe succeeds; leave intentional residue (IDs, links, logs).
5. Stop when the requested outcome is evidenced or a hard stop triggers.

## Hard stops

- Pause for explicit approval before customer-visible writes
- Label replaces rather than appends
- Platform API is installation-admin scope

## Pairing

- Vault toolbox catalog: `Toolbox/Open-Source-Stack.md`
- Skill index: `Skills/Custom/oss-agent-ops/README.md`
- Prefer Harness · Loop · Graph: evidence over confidence; Writer ≠ Checker for destructive sends/deletes/deploys.
