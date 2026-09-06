---
name: webstudio
description: >-
  Operate Webstudio (open-source alternative to Webflow) via CLI/API/SDK. Use for Webstudio, Webflow alternative, webstudio cli, visual web builder OSS.
metadata:
  replaces: Webflow
  source_post: https://x.com/ihteshamali/status/2096598697308205182
  version: "1.0"
---

# Webstudio — agent ops

Open-source alternative to **Webflow**. This skill enables an AI agent to install, authenticate, and operate Webstudio through documented CLI/API/SDK surfaces — not UI click-paths.

## Links

| Resource | URL |
|----------|-----|
| Home | https://webstudio.is/ |
| GitHub | https://github.com/webstudio-is/webstudio |
| Docs | https://docs.webstudio.is/ |
| API / SDK | https://docs.webstudio.is/university/cli |

## Stack surface

- **SDK / CLI:** `npx webstudio` CLI; `@webstudio-is/sdk`
- **Auth:** Builder share link with Build access (token in local config)
- **MCP / automation:** First-party Webstudio MCP via CLI (`npx webstudio mcp` / `connect`).

## Install (quickstart)

Node >= 22.12; `npx --yes webstudio@latest --version` then `npx webstudio link`

Install into a **product / project repo** or local ops folder — never as binaries inside the Vault.

## Agent operations

- `npx webstudio link --link '<build-access-share-link>'`
- `npx webstudio sync`
- `npx webstudio build --template docker|ssg`
- `npx webstudio init --json` for automation
- MCP ops: meta.index / insert-fragment
- `npx webstudio connect cursor|claude|codex|vscode`

## Workflow

1. Confirm target instance (self-host URL or cloud) and that credentials exist in env vars — not chat.
2. Prefer official CLI/SDK/MCP over scraping undocumented endpoints.
3. Run a read-only probe first (version/health/list).
4. Mutating ops only after the probe succeeds; leave intentional residue (IDs, links, logs).
5. Stop when the requested outcome is evidenced or a hard stop triggers.

## Hard stops

- Needs Build-access share link
- Do not use deprecated `@webstudio-is/cli` / `wstd`
- sdk-components-animation is proprietary EULA

## Pairing

- Vault toolbox catalog: `Toolbox/Open-Source-Stack.md`
- Skill index: `Skills/Custom/oss-agent-ops/README.md`
- Prefer Harness · Loop · Graph: evidence over confidence; Writer ≠ Checker for destructive sends/deletes/deploys.
