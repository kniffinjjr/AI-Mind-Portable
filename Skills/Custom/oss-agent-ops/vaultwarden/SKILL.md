---
name: vaultwarden
description: >-
  Operate Vaultwarden (open-source alternative to 1Password) via CLI/API/SDK. Use for Vaultwarden, 1Password alternative, Bitwarden self-host, bw cli.
metadata:
  replaces: 1Password
  source_post: https://x.com/ihteshamali/status/2096598697308205182
  version: "1.0"
---

# Vaultwarden — agent ops

Open-source alternative to **1Password**. This skill enables an AI agent to install, authenticate, and operate Vaultwarden through documented CLI/API/SDK surfaces — not UI click-paths.

## Links

| Resource | URL |
|----------|-----|
| Home | https://github.com/dani-garcia/vaultwarden |
| GitHub | https://github.com/dani-garcia/vaultwarden |
| Docs | https://github.com/dani-garcia/vaultwarden/wiki |
| API / SDK | Bitwarden client-compatible API; automate via Bitwarden CLI `bw` + `bw serve` (Public Bitwarden org API NOT supported) |

## Stack surface

- **SDK / CLI:** Bitwarden CLI `bw`; `bw serve` local Vault Management API
- **Auth:** Master password (+ optional 2FA); `BW_SESSION`; `ADMIN_TOKEN` for `/admin`
- **MCP / automation:** No official MCP. Prefer `bw` CLI / `bw serve`. Avoid scraping undocumented client API.

## Install (quickstart)

`docker run -d --name vaultwarden -v vw-data:/data -p 80:80 vaultwarden/server:latest` behind HTTPS; set `DOMAIN`

Install into a **product / project repo** or local ops folder — never as binaries inside the Vault.

## Agent operations

- `bw login` → `bw sync|list|get|create|edit|delete`
- `bw serve` → localhost REST vault management
- `bw generate` passwords
- Manage sends/attachments via CLI
- Unlock/lock session (`BW_SESSION`)
- Admin invite/diagnostics via `/admin` (human-gated)

## Workflow

1. Confirm target instance (self-host URL or cloud) and that credentials exist in env vars — not chat.
2. Prefer official CLI/SDK/MCP over scraping undocumented endpoints.
3. Run a read-only probe first (version/health/list).
4. Mutating ops only after the probe succeeds; leave intentional residue (IDs, links, logs).
5. Stop when the requested outcome is evidenced or a hard stop triggers.

## Hard stops

- Never paste master password / BW_SESSION / ADMIN_TOKEN into chat
- Disable signups after bootstrap; hash ADMIN_TOKEN
- HTTPS required for WebCrypto/WebAuthn

## Pairing

- Vault toolbox catalog: `Toolbox/Open-Source-Stack.md`
- Skill index: `Skills/Custom/oss-agent-ops/README.md`
- Prefer Harness · Loop · Graph: evidence over confidence; Writer ≠ Checker for destructive sends/deletes/deploys.
