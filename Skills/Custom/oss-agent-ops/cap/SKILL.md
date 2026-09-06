---
name: cap
description: >-
  Operate Cap (open-source alternative to Loom) via CLI/API/SDK. Use for Cap.so, Loom alternative, cap cli, screen recording OSS.
metadata:
  replaces: Loom
  source_post: https://x.com/ihteshamali/status/2096598697308205182
  version: "1.0"
---

# Cap — agent ops

Open-source alternative to **Loom**. This skill enables an AI agent to install, authenticate, and operate Cap through documented CLI/API/SDK surfaces — not UI click-paths.

## Links

| Resource | URL |
|----------|-----|
| Home | https://cap.so |
| GitHub | https://github.com/CapSoftware/Cap |
| Docs | https://cap.so/docs |
| API / SDK | https://cap.so/docs/api/rest-api |

## Stack surface

- **SDK / CLI:** CLI `cap`; `@cap/sdk-recorder`; `@cap/sdk-embed`
- **Auth:** `CAP_API_KEY` / `CAP_AGENT_TOKEN` for CLI/MCP; REST secret `csk_`
- **MCP / automation:** Local MCP `cap mcp serve` + Cap skill + Developer REST.

## Install (quickstart)

Self-host: clone Cap + `docker compose up -d`. CLI: `curl -fsSL https://cap.so/install-cli.sh | sh`

Install into a **product / project repo** or local ops folder — never as binaries inside the Vault.

## Agent operations

- `cap record start/stop` → export → upload → share (`--json`)
- `cap caps list|get|context|transcript|download|status|wait`
- Draft then confirm comments/visibility/title
- REST list/get/delete developer videos
- SDK create video + multipart upload
- `cap mcp serve` for structured tool calls

## Workflow

1. Confirm target instance (self-host URL or cloud) and that credentials exist in env vars — not chat.
2. Prefer official CLI/SDK/MCP over scraping undocumented endpoints.
3. Run a read-only probe first (version/health/list).
4. Mutating ops only after the probe succeeds; leave intentional residue (IDs, links, logs).
5. Stop when the requested outcome is evidenced or a hard stop triggers.

## Hard stops

- Mutations need explicit confirm (`--yes` / `confirmed=true`)
- Never put API keys/S3 creds in chat
- Replace default compose secrets before public deploy

## Pairing

- Vault toolbox catalog: `Toolbox/Open-Source-Stack.md`
- Skill index: `Skills/Custom/oss-agent-ops/README.md`
- Prefer Harness · Loop · Graph: evidence over confidence; Writer ≠ Checker for destructive sends/deletes/deploys.
