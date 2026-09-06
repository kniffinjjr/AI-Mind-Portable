---
name: bruno
description: >-
  Operate Bruno (open-source alternative to Postman) via CLI/API/SDK. Use for Bruno, Postman alternative, bru cli, API collection git.
metadata:
  replaces: Postman
  source_post: https://x.com/ihteshamali/status/2096598697308205182
  version: "1.0"
---

# Bruno — agent ops

Open-source alternative to **Postman**. This skill enables an AI agent to install, authenticate, and operate Bruno through documented CLI/API/SDK surfaces — not UI click-paths.

## Links

| Resource | URL |
|----------|-----|
| Home | https://www.usebruno.com |
| GitHub | https://github.com/usebruno/bruno |
| Docs | https://docs.usebruno.com |
| API / SDK | https://docs.usebruno.com/bru-cli/overview |

## Stack surface

- **SDK / CLI:** `@usebruno/cli` (`bru`); git-friendly `.bru` collections
- **Auth:** Offline collections; per-request auth in env files
- **MCP / automation:** No official MCP. Primary automation is `bru` CLI over git-stored collections.

## Install (quickstart)

`npm install -g @usebruno/cli`; desktop from usebruno.com/downloads

Install into a **product / project repo** or local ops folder — never as binaries inside the Vault.

## Agent operations

- `bru run` collection/folder/request
- `bru run --env <name>`
- Override env vars with `--env-var`
- CSV/JSON data-driven runs
- JSON/JUnit/HTML reporters
- `bru import openapi`
- CI: `--tests-only --bail`

## Workflow

1. Confirm target instance (self-host URL or cloud) and that credentials exist in env vars — not chat.
2. Prefer official CLI/SDK/MCP over scraping undocumented endpoints.
3. Run a read-only probe first (version/health/list).
4. Mutating ops only after the probe succeeds; leave intentional residue (IDs, links, logs).
5. Stop when the requested outcome is evidenced or a hard stop triggers.

## Hard stops

- CLI v3+ defaults to Safe Mode; Developer Mode needs `--sandbox=developer`
- Do not commit secrets in env files
- `--insecure` disables TLS verify

## Pairing

- Vault toolbox catalog: `Toolbox/Open-Source-Stack.md`
- Skill index: `Skills/Custom/oss-agent-ops/README.md`
- Prefer Harness · Loop · Graph: evidence over confidence; Writer ≠ Checker for destructive sends/deletes/deploys.
