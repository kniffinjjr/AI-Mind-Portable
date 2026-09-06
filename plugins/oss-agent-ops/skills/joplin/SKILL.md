---
name: joplin
description: >-
  Operate Joplin (open-source alternative to Evernote) via CLI/API/SDK. Use for Joplin, Evernote alternative, joplin api, notes OSS.
metadata:
  replaces: Evernote
  source_post: https://x.com/ihteshamali/status/2096598697308205182
  version: "1.0"
---

# Joplin — agent ops

Open-source alternative to **Evernote**. This skill enables an AI agent to install, authenticate, and operate Joplin through documented CLI/API/SDK surfaces — not UI click-paths.

## Links

| Resource | URL |
|----------|-----|
| Home | https://joplinapp.org/ |
| GitHub | https://github.com/laurent22/joplin |
| Docs | https://joplinapp.org/help/ |
| API / SDK | https://joplinapp.org/help/api/references/rest_api/ |

## Stack surface

- **SDK / CLI:** Terminal `joplin`; Data API on clipper port (default 41184); Plugin API
- **Auth:** Data API token from Web Clipper Options
- **MCP / automation:** No official MCP. Automate via Data API (localhost) or `joplin` CLI.

## Install (quickstart)

Desktop from joplinapp.org; terminal via npm global `joplin`; enable Web Clipper for Data API

Install into a **product / project repo** or local ops folder — never as binaries inside the Vault.

## Agent operations

- CRUD notes via `/notes`
- Manage folders/tags
- Search `GET /search?query=...`
- Attach resources multipart
- CLI: mknote/mktodo/search/sync/import
- Import Evernote ENEX

## Workflow

1. Confirm target instance (self-host URL or cloud) and that credentials exist in env vars — not chat.
2. Prefer official CLI/SDK/MCP over scraping undocumented endpoints.
3. Run a read-only probe first (version/health/list).
4. Mutating ops only after the probe succeeds; leave intentional residue (IDs, links, logs).
5. Stop when the requested outcome is evidenced or a hard stop triggers.

## Hard stops

- Data API is local clipper — not multi-tenant cloud by default
- Token required for every external HTTP call
- Protect sync-target credentials

## Pairing

- Vault toolbox catalog: `Toolbox/Open-Source-Stack.md`
- Skill index: `Skills/Custom/oss-agent-ops/README.md`
- Prefer Harness · Loop · Graph: evidence over confidence; Writer ≠ Checker for destructive sends/deletes/deploys.
