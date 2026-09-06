---
name: umami
description: >-
  Operate Umami (open-source alternative to Google Analytics) via CLI/API/SDK. Use for Umami, Google Analytics alternative, privacy analytics, umami api.
metadata:
  replaces: Google Analytics
  source_post: https://x.com/ihteshamali/status/2096598697308205182
  version: "1.0"
---

# Umami — agent ops

Open-source alternative to **Google Analytics**. This skill enables an AI agent to install, authenticate, and operate Umami through documented CLI/API/SDK surfaces — not UI click-paths.

## Links

| Resource | URL |
|----------|-----|
| Home | https://umami.is |
| GitHub | https://github.com/umami-software/umami |
| Docs | https://docs.umami.is |
| API / SDK | https://docs.umami.is/docs/api |

## Stack surface

- **SDK / CLI:** `@umami/api-client`; REST `/api`
- **Auth:** Self-host: login JWT; Cloud: API key Bearer / `UMAMI_API_KEY`
- **MCP / automation:** No official MCP. Use `@umami/api-client` or REST.

## Install (quickstart)

Clone umami → `docker compose up -d` → http://localhost:3000 (change default admin password immediately)

Install into a **product / project repo** or local ops folder — never as binaries inside the Vault.

## Agent operations

- List/create/update/delete websites
- getWebsiteStats / pageviews / metrics
- Realtime active visitors
- Custom events data
- resetWebsite / manage users (admin)

## Workflow

1. Confirm target instance (self-host URL or cloud) and that credentials exist in env vars — not chat.
2. Prefer official CLI/SDK/MCP over scraping undocumented endpoints.
3. Run a read-only probe first (version/health/list).
4. Mutating ops only after the probe succeeds; leave intentional residue (IDs, links, logs).
5. Stop when the requested outcome is evidenced or a hard stop triggers.

## Hard stops

- Change default admin password immediately
- Do not reset production websites without approval
- Treat analytics data carefully even if privacy-first

## Pairing

- Vault toolbox catalog: `Toolbox/Open-Source-Stack.md`
- Skill index: `Skills/Custom/oss-agent-ops/README.md`
- Prefer Harness · Loop · Graph: evidence over confidence; Writer ≠ Checker for destructive sends/deletes/deploys.
