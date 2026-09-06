---
name: syncthing
description: >-
  Operate Syncthing (open-source alternative to Dropbox) via CLI/API/SDK. Use for Syncthing, Dropbox alternative, syncthing api, P2P sync.
metadata:
  replaces: Dropbox
  source_post: https://x.com/ihteshamali/status/2096598697308205182
  version: "1.0"
---

# Syncthing — agent ops

Open-source alternative to **Dropbox**. This skill enables an AI agent to install, authenticate, and operate Syncthing through documented CLI/API/SDK surfaces — not UI click-paths.

## Links

| Resource | URL |
|----------|-----|
| Home | https://syncthing.net |
| GitHub | https://github.com/syncthing/syncthing |
| Docs | https://docs.syncthing.net/ |
| API / SDK | https://docs.syncthing.net/dev/rest.html |

## Stack surface

- **SDK / CLI:** Binary `syncthing` + `syncthing cli`; REST with `X-API-Key`
- **Auth:** GUI/REST API key (`X-API-Key` or Bearer)
- **MCP / automation:** No official MCP. REST + `syncthing cli` + event API.

## Install (quickstart)

Package/binary or Docker `syncthing/syncthing`; GUI/API default http://127.0.0.1:8384

Install into a **product / project repo** or local ops folder — never as binaries inside the Vault.

## Agent operations

- GET `/rest/system/status`, connections, version
- Read/update `/rest/config` (folders/devices)
- Pause/resume folders or devices
- POST `/rest/db/scan`; browse versions
- `syncthing cli config get|set`
- Restart/shutdown via REST (admin)

## Workflow

1. Confirm target instance (self-host URL or cloud) and that credentials exist in env vars — not chat.
2. Prefer official CLI/SDK/MCP over scraping undocumented endpoints.
3. Run a read-only probe first (version/health/list).
4. Mutating ops only after the probe succeeds; leave intentional residue (IDs, links, logs).
5. Stop when the requested outcome is evidenced or a hard stop triggers.

## Hard stops

- API key = full control including DB wipe
- POST `/rest/system/reset|shutdown` are destructive
- Do not expose GUI/API to WAN without TLS + auth

## Pairing

- Vault toolbox catalog: `Toolbox/Open-Source-Stack.md`
- Skill index: `Skills/Custom/oss-agent-ops/README.md`
- Prefer Harness · Loop · Graph: evidence over confidence; Writer ≠ Checker for destructive sends/deletes/deploys.
