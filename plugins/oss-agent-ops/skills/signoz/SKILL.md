---
name: signoz
description: >-
  Operate SigNoz (open-source alternative to Datadog) via CLI/API/SDK. Use for SigNoz, Datadog alternative, OpenTelemetry, signoz api.
metadata:
  replaces: Datadog
  source_post: https://x.com/ihteshamali/status/2096598697308205182
  version: "1.0"
---

# SigNoz — agent ops

Open-source alternative to **Datadog**. This skill enables an AI agent to install, authenticate, and operate SigNoz through documented CLI/API/SDK surfaces — not UI click-paths.

## Links

| Resource | URL |
|----------|-----|
| Home | https://signoz.io/ |
| GitHub | https://github.com/SigNoz/signoz |
| Docs | https://signoz.io/docs/ |
| API / SDK | https://signoz.io/docs/metrics-management/query-range-api/ |

## Stack surface

- **SDK / CLI:** OpenTelemetry SDKs/Collectors; REST query/alerts; `foundryctl`
- **Auth:** Service Account header `SIGNOZ-API-KEY`
- **MCP / automation:** Optional official SigNoz MCP (Foundry mcp block, often :8000).

## Install (quickstart)

Install foundryctl → casting.yaml → `foundryctl cast -f casting.yaml` → UI :8080

Install into a **product / project repo** or local ops folder — never as binaries inside the Vault.

## Agent operations

- POST `/api/v5/query_range` metrics/logs/traces
- Search/aggregate traces
- Create/list alert rules `/api/v1/rules`
- Create notification channels
- Query meter/cost metrics
- Enable optional SigNoz MCP in Foundry casting

## Workflow

1. Confirm target instance (self-host URL or cloud) and that credentials exist in env vars — not chat.
2. Prefer official CLI/SDK/MCP over scraping undocumented endpoints.
3. Run a read-only probe first (version/health/list).
4. Mutating ops only after the probe succeeds; leave intentional residue (IDs, links, logs).
5. Stop when the requested outcome is evidenced or a hard stop triggers.

## Hard stops

- Alert history v1 deprecated — use v2 history endpoints
- API key required for programmatic APIs
- Self-host needs substantial disk/CPU for ClickHouse

## Pairing

- Vault toolbox catalog: `Toolbox/Open-Source-Stack.md`
- Skill index: `Skills/Custom/oss-agent-ops/README.md`
- Prefer Harness · Loop · Graph: evidence over confidence; Writer ≠ Checker for destructive sends/deletes/deploys.
