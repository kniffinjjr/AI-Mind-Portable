---
name: cal-com
description: >-
  Operate Cal.com (open-source alternative to Calendly) via CLI/API/SDK. Use for Cal.com, Calendly alternative, cal.com api, scheduling OSS.
metadata:
  replaces: Calendly
  source_post: https://x.com/ihteshamali/status/2096598697308205182
  version: "1.0"
---

# Cal.com — agent ops

Open-source alternative to **Calendly**. This skill enables an AI agent to install, authenticate, and operate Cal.com through documented CLI/API/SDK surfaces — not UI click-paths.

## Links

| Resource | URL |
|----------|-----|
| Home | https://cal.com |
| GitHub | https://github.com/calcom/cal.com |
| Docs | https://cal.com/docs |
| API / SDK | https://cal.com/docs/api-reference/v2/introduction |

## Stack surface

- **SDK / CLI:** `@calcom/cli`; `@calcom/atoms`; REST `https://api.cal.com/v2`
- **Auth:** API key Bearer + required header `cal-api-version: 2024-08-13`; OAuth for Atoms
- **MCP / automation:** Prefer official agent/CLI docs; community MCP via calcom-cli. Webhooks for events.

## Install (quickstart)

Clone cal.com → `.env` → `docker compose up -d`; or Cloud + `npm i -g @calcom/cli`

Install into a **product / project repo** or local ops folder — never as binaries inside the Vault.

## Agent operations

- GET `/v2/slots` availability
- POST `/v2/bookings` create
- Reschedule/cancel bookings
- List/create event types
- Read schedules; configure webhooks
- calcom CLI booking/slot workflows

## Workflow

1. Confirm target instance (self-host URL or cloud) and that credentials exist in env vars — not chat.
2. Prefer official CLI/SDK/MCP over scraping undocumented endpoints.
3. Run a read-only probe first (version/health/list).
4. Mutating ops only after the probe succeeds; leave intentional residue (IDs, links, logs).
5. Stop when the requested outcome is evidenced or a hard stop triggers.

## Hard stops

- API v1 removed — use v2 only
- Omit `cal-api-version` → 404
- Do not cancel/reschedule production bookings without human gate

## Pairing

- Vault toolbox catalog: `Toolbox/Open-Source-Stack.md`
- Skill index: `Skills/Custom/oss-agent-ops/README.md`
- Prefer Harness · Loop · Graph: evidence over confidence; Writer ≠ Checker for destructive sends/deletes/deploys.
