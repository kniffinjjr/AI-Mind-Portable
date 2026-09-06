---
name: metabase
description: >-
  Operate Metabase (open-source alternative to Tableau) via CLI/API/SDK. Use for Metabase, Tableau alternative, metabase api, BI OSS.
metadata:
  replaces: Tableau
  source_post: https://x.com/ihteshamali/status/2096598697308205182
  version: "1.0"
---

# Metabase — agent ops

Open-source alternative to **Tableau**. This skill enables an AI agent to install, authenticate, and operate Metabase through documented CLI/API/SDK surfaces — not UI click-paths.

## Links

| Resource | URL |
|----------|-----|
| Home | https://www.metabase.com/ |
| GitHub | https://github.com/metabase/metabase |
| Docs | https://www.metabase.com/docs/latest/ |
| API / SDK | https://www.metabase.com/docs/latest/api |

## Stack surface

- **SDK / CLI:** REST `/api`; Embedding SDK `@metabase/embedding-sdk-react`
- **Auth:** `X-API-Key` preferred; or session `X-Metabase-Session`
- **MCP / automation:** Prefer REST + API keys for coding agents; embedding SDK separate.

## Install (quickstart)

`java -jar metabase.jar` or Docker `metabase/metabase` → :3000; create API key in Admin

Install into a **product / project repo** or local ops folder — never as binaries inside the Vault.

## Agent operations

- List/create/update dashboards and cards
- Run/export question results
- Manage databases, collections, permissions
- Create/regenerate API keys
- Embed InteractiveDashboard (SDK)
- Inspect OpenAPI at `https://{host}/api/docs`

## Workflow

1. Confirm target instance (self-host URL or cloud) and that credentials exist in env vars — not chat.
2. Prefer official CLI/SDK/MCP over scraping undocumented endpoints.
3. Run a read-only probe first (version/health/list).
4. Mutating ops only after the probe succeeds; leave intentional residue (IDs, links, logs).
5. Stop when the requested outcome is evidenced or a hard stop triggers.

## Hard stops

- API is unversioned and can change per release
- API key permissions = assigned group only
- Production embedding SDK often needs Pro/Enterprise

## Pairing

- Vault toolbox catalog: `Toolbox/Open-Source-Stack.md`
- Skill index: `Skills/Custom/oss-agent-ops/README.md`
- Prefer Harness · Loop · Graph: evidence over confidence; Writer ≠ Checker for destructive sends/deletes/deploys.
