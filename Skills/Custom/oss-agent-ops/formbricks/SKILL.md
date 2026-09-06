---
name: formbricks
description: >-
  Operate Formbricks (open-source alternative to Typeform) via CLI/API/SDK. Use for Formbricks, Typeform alternative, survey API OSS.
metadata:
  replaces: Typeform
  source_post: https://x.com/ihteshamali/status/2096598697308205182
  version: "1.0"
---

# Formbricks — agent ops

Open-source alternative to **Typeform**. This skill enables an AI agent to install, authenticate, and operate Formbricks through documented CLI/API/SDK surfaces — not UI click-paths.

## Links

| Resource | URL |
|----------|-----|
| Home | https://formbricks.com |
| GitHub | https://github.com/formbricks/formbricks |
| Docs | https://formbricks.com/docs |
| API / SDK | https://formbricks.com/docs/api-reference/rest-api |

## Stack surface

- **SDK / CLI:** `@formbricks/js`; Management REST + Public Client API
- **Auth:** Management: personal API key; Public Client API: unauthenticated display/response paths
- **MCP / automation:** No official MCP. Management API + webhooks + JS SDK.

## Install (quickstart)

Formbricks docker install script or compose from `stable/docker`

Install into a **product / project repo** or local ops folder — never as binaries inside the Vault.

## Agent operations

- Create/list/update/delete surveys
- List/update/delete responses
- Create/list/delete webhooks
- Manage contacts / attribute keys
- Manage action classes
- Client API: create/update responses

## Workflow

1. Confirm target instance (self-host URL or cloud) and that credentials exist in env vars — not chat.
2. Prefer official CLI/SDK/MCP over scraping undocumented endpoints.
3. Run a read-only probe first (version/health/list).
4. Mutating ops only after the probe succeeds; leave intentional residue (IDs, links, logs).
5. Stop when the requested outcome is evidenced or a hard stop triggers.

## Hard stops

- Keep Management API keys server-side
- Do not expose admin data via Public Client API
- Do not delete live surveys/responses without approval

## Pairing

- Vault toolbox catalog: `Toolbox/Open-Source-Stack.md`
- Skill index: `Skills/Custom/oss-agent-ops/README.md`
- Prefer Harness · Loop · Graph: evidence over confidence; Writer ≠ Checker for destructive sends/deletes/deploys.
