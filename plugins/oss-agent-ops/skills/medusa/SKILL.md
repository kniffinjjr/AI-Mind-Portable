---
name: medusa
description: >-
  Operate Medusa (open-source alternative to Shopify) via CLI/API/SDK. Use for MedusaJS, Shopify alternative, medusa commerce, headless ecommerce.
metadata:
  replaces: Shopify
  source_post: https://x.com/ihteshamali/status/2096598697308205182
  version: "1.0"
---

# Medusa — agent ops

Open-source alternative to **Shopify**. This skill enables an AI agent to install, authenticate, and operate Medusa through documented CLI/API/SDK surfaces — not UI click-paths.

## Links

| Resource | URL |
|----------|-----|
| Home | https://medusajs.com/ |
| GitHub | https://github.com/medusajs/medusa |
| Docs | https://docs.medusajs.com/ |
| API / SDK | https://docs.medusajs.com/api/admin |

## Stack surface

- **SDK / CLI:** `@medusajs/js-sdk`; `create-medusa-app`; `medusa` CLI; `mcloud`
- **Auth:** Admin JWT / secret API key / cookie; Store customer auth providers
- **MCP / automation:** Docs MCP https://docs.medusajs.com/mcp (Medusa Cloud gated).

## Install (quickstart)

`npx create-medusa-app@latest my-store` (Node 20+, PostgreSQL) → :9000

Install into a **product / project repo** or local ops folder — never as binaries inside the Vault.

## Agent operations

- Scaffold store with create-medusa-app
- CRUD products/variants via Admin SDK
- Manage orders, customers, regions, inventory
- Create secret API keys for automation
- Extend with custom routes/workflows/modules
- Query Store API for catalog/cart/checkout

## Workflow

1. Confirm target instance (self-host URL or cloud) and that credentials exist in env vars — not chat.
2. Prefer official CLI/SDK/MCP over scraping undocumented endpoints.
3. Run a read-only probe first (version/health/list).
4. Mutating ops only after the probe succeeds; leave intentional residue (IDs, links, logs).
5. Stop when the requested outcome is evidenced or a hard stop triggers.

## Hard stops

- Admin mutating ops need valid credentials
- Docs MCP may require Cloud subscription
- PostgreSQL required for standard local install

## Pairing

- Vault toolbox catalog: `Toolbox/Open-Source-Stack.md`
- Skill index: `Skills/Custom/oss-agent-ops/README.md`
- Prefer Harness · Loop · Graph: evidence over confidence; Writer ≠ Checker for destructive sends/deletes/deploys.
