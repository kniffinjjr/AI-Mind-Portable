---
name: languagetool
description: >-
  Operate LanguageTool (open-source alternative to Grammarly) via CLI/API/SDK. Use for LanguageTool, Grammarly alternative, grammar API, proofreading OSS.
metadata:
  replaces: Grammarly
  source_post: https://x.com/ihteshamali/status/2096598697308205182
  version: "1.0"
---

# LanguageTool — agent ops

Open-source alternative to **Grammarly**. This skill enables an AI agent to install, authenticate, and operate LanguageTool through documented CLI/API/SDK surfaces — not UI click-paths.

## Links

| Resource | URL |
|----------|-----|
| Home | https://languagetool.org |
| GitHub | https://github.com/languagetool-org/languagetool |
| Docs | https://dev.languagetool.org |
| API / SDK | https://languagetool.org/http-api/ |

## Stack surface

- **SDK / CLI:** HTTP `POST /v2/check`; Java server jar; community clients
- **Auth:** Public free API: no key (strict limits). Premium: API key. Self-host: local HTTP
- **MCP / automation:** No official MCP. Call `/v2/check` from agents/CI; prefer self-host for automation.

## Install (quickstart)

Run `languagetool-server.jar` on :8081 or Docker behind a proxy

Install into a **product / project repo** or local ops folder — never as binaries inside the Vault.

## Agent operations

- POST `/v2/check` with text + language
- `language=auto` detection
- Markup-aware checks via data JSON
- Disable specific rules
- Batch CI lint against self-host
- Tune `server.properties` maxTextLength/rate

## Workflow

1. Confirm target instance (self-host URL or cloud) and that credentials exist in env vars — not chat.
2. Prefer official CLI/SDK/MCP over scraping undocumented endpoints.
3. Run a read-only probe first (version/health/list).
4. Mutating ops only after the probe succeeds; leave intentional residue (IDs, links, logs).
5. Stop when the requested outcome is evidenced or a hard stop triggers.

## Hard stops

- Do NOT send automated traffic to public api.languagetool.org
- Public free limits ~20 req/IP/min
- Self-host `--public` needs network hardening

## Pairing

- Vault toolbox catalog: `Toolbox/Open-Source-Stack.md`
- Skill index: `Skills/Custom/oss-agent-ops/README.md`
- Prefer Harness · Loop · Graph: evidence over confidence; Writer ≠ Checker for destructive sends/deletes/deploys.
