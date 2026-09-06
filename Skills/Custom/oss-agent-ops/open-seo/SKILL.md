---
name: open-seo
description: >-
  Operate OpenSEO (open-source alternative to Semrush) via CLI/API/SDK. Use for OpenSEO, Semrush alternative, openseo.so, SEO MCP.
metadata:
  replaces: Semrush
  source_post: https://x.com/ihteshamali/status/2096598697308205182
  version: "1.0"
---

# OpenSEO — agent ops

Open-source alternative to **Semrush**. This skill enables an AI agent to install, authenticate, and operate OpenSEO through documented CLI/API/SDK surfaces — not UI click-paths.

## Links

| Resource | URL |
|----------|-----|
| Home | https://openseo.so |
| GitHub | https://github.com/every-app/open-seo |
| Docs | https://openseo.so/docs |
| API / SDK | https://openseo.so/docs (MCP + Agent Skills; no separate public product REST) |

## Stack surface

- **SDK / CLI:** MCP server; `npx skills add every-app/open-seo`
- **Auth:** Hosted MCP OAuth or personal API key; Docker self-host often single-user
- **MCP / automation:** Official MCP https://app.openseo.so/mcp + Agent Skills pack.

## Install (quickstart)

Self-host per https://openseo.so/docs/self-hosting — set `DATAFORSEO_API_KEY`, `docker compose up`

Install into a **product / project repo** or local ops folder — never as binaries inside the Vault.

## Agent operations

- Keyword research (volume/KD/CPC) via MCP
- SERP inspection / competitive domain research
- Backlink overview
- Save keywords + rank tracker reads
- Google Search Console performance (when connected)
- Run Agent Skills: keyword-research, clustering, competitor-analysis, link-prospecting, seo-audit

## Workflow

1. Confirm target instance (self-host URL or cloud) and that credentials exist in env vars — not chat.
2. Prefer official CLI/SDK/MCP over scraping undocumented endpoints.
3. Run a read-only probe first (version/health/list).
4. Mutating ops only after the probe succeeds; leave intentional residue (IDs, links, logs).
5. Stop when the requested outcome is evidenced or a hard stop triggers.

## Hard stops

- DataForSEO paid credits/rate limits
- Do not expose Docker default (weak/no auth) publicly
- Rotate API keys; protect GSC/OAuth secrets

## Pairing

- Vault toolbox catalog: `Toolbox/Open-Source-Stack.md`
- Skill index: `Skills/Custom/oss-agent-ops/README.md`
- Prefer Harness · Loop · Graph: evidence over confidence; Writer ≠ Checker for destructive sends/deletes/deploys.
