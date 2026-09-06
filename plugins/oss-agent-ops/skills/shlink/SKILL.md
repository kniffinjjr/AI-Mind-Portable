---
name: shlink
description: >-
  Operate Shlink (open-source alternative to Bitly) via CLI/API/SDK. Use for Shlink, Bitly alternative, URL shortener API, shlink cli.
metadata:
  replaces: Bitly
  source_post: https://x.com/ihteshamali/status/2096598697308205182
  version: "1.0"
---

# Shlink — agent ops

Open-source alternative to **Bitly**. This skill enables an AI agent to install, authenticate, and operate Shlink through documented CLI/API/SDK surfaces — not UI click-paths.

## Links

| Resource | URL |
|----------|-----|
| Home | https://shlink.io/ |
| GitHub | https://github.com/shlinkio/shlink |
| Docs | https://shlink.io/documentation/ |
| API / SDK | https://shlink.io/documentation/api-docs/ |

## Stack surface

- **SDK / CLI:** CLI `shlink`; REST v3; language clients in Shlink org
- **Auth:** Every REST call needs `X-Api-Key`
- **MCP / automation:** No official MCP. REST + CLI are the automation surfaces.

## Install (quickstart)

`docker run -p 8080:8080 -e DEFAULT_DOMAIN=s.test -e IS_HTTPS_ENABLED=true shlinkio/shlink:stable` then `shlink api-key:generate`

Install into a **product / project repo** or local ops folder — never as binaries inside the Vault.

## Agent operations

- `shlink api-key:generate`
- Create short URLs REST or CLI
- List/edit/delete short URLs
- Manage tags
- Fetch visit analytics
- Import short URLs; configure domain redirects

## Workflow

1. Confirm target instance (self-host URL or cloud) and that credentials exist in env vars — not chat.
2. Prefer official CLI/SDK/MCP over scraping undocumented endpoints.
3. Run a read-only probe first (version/health/list).
4. Mutating ops only after the probe succeeds; leave intentional residue (IDs, links, logs).
5. Stop when the requested outcome is evidenced or a hard stop triggers.

## Hard stops

- API key shown once (stored hashed)
- Missing/invalid key → 401
- Production needs external DB + proper domain/TLS

## Pairing

- Vault toolbox catalog: `Toolbox/Open-Source-Stack.md`
- Skill index: `Skills/Custom/oss-agent-ops/README.md`
- Prefer Harness · Loop · Graph: evidence over confidence; Writer ≠ Checker for destructive sends/deletes/deploys.
