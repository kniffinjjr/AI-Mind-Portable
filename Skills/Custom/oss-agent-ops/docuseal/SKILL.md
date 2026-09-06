---
name: docuseal
description: >-
  Operate DocuSeal (open-source alternative to DocuSign) via CLI/API/SDK. Use for DocuSeal, DocuSign alternative, e-sign API OSS.
metadata:
  replaces: DocuSign
  source_post: https://x.com/ihteshamali/status/2096598697308205182
  version: "1.0"
---

# DocuSeal — agent ops

Open-source alternative to **DocuSign**. This skill enables an AI agent to install, authenticate, and operate DocuSeal through documented CLI/API/SDK surfaces — not UI click-paths.

## Links

| Resource | URL |
|----------|-----|
| Home | https://www.docuseal.com |
| GitHub | https://github.com/docusealco/docuseal |
| Docs | https://www.docuseal.com/docs |
| API / SDK | https://www.docuseal.com/docs/api |

## Stack surface

- **SDK / CLI:** `@docuseal/api`; Python `docuseal`; embed SDKs
- **Auth:** API key via `X-Auth-Token`
- **MCP / automation:** No official MCP. REST/SDKs + webhooks.

## Install (quickstart)

`docker run --name docuseal -p 3000:3000 -v.:/data docuseal/docuseal`

Install into a **product / project repo** or local ops folder — never as binaries inside the Vault.

## Agent operations

- List/create templates
- POST `/submissions` signature request
- Create submission from PDF/DOCX/HTML (Pro)
- GET submission status + signed documents
- List/update submitters
- Configure completion webhooks

## Workflow

1. Confirm target instance (self-host URL or cloud) and that credentials exist in env vars — not chat.
2. Prefer official CLI/SDK/MCP over scraping undocumented endpoints.
3. Run a read-only probe first (version/health/list).
4. Mutating ops only after the probe succeeds; leave intentional residue (IDs, links, logs).
5. Stop when the requested outcome is evidenced or a hard stop triggers.

## Hard stops

- E-sign sends are legally consequential — human gate
- API/Embedding often Pro-gated
- Signed PDFs are sensitive PII

## Pairing

- Vault toolbox catalog: `Toolbox/Open-Source-Stack.md`
- Skill index: `Skills/Custom/oss-agent-ops/README.md`
- Prefer Harness · Loop · Graph: evidence over confidence; Writer ≠ Checker for destructive sends/deletes/deploys.
