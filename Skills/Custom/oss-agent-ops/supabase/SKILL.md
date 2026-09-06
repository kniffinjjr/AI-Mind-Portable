---
name: supabase
description: >-
  Operate Supabase (open-source alternative to Firebase) via CLI/API/SDK. Use for Supabase, Firebase alternative, supabase cli, supabase mcp.
metadata:
  replaces: Firebase
  source_post: https://x.com/ihteshamali/status/2096598697308205182
  version: "1.0"
---

# Supabase — agent ops

Open-source alternative to **Firebase**. This skill enables an AI agent to install, authenticate, and operate Supabase through documented CLI/API/SDK surfaces — not UI click-paths.

## Links

| Resource | URL |
|----------|-----|
| Home | https://supabase.com |
| GitHub | https://github.com/supabase/supabase |
| Docs | https://supabase.com/docs |
| API / SDK | https://supabase.com/docs/reference |

## Stack surface

- **SDK / CLI:** `supabase` CLI; `@supabase/supabase-js`; PostgREST/Auth/Storage/Functions
- **Auth:** anon + service_role keys; CLI access tokens; MCP OAuth or PAT
- **MCP / automation:** Official hosted MCP `https://mcp.supabase.com/mcp`; local `:54321/mcp`.

## Install (quickstart)

`npm i -D supabase && npx supabase init && npx supabase start` (Docker)

Install into a **product / project repo** or local ops folder — never as binaries inside the Vault.

## Agent operations

- `supabase start` local stack
- db diff / migration apply
- Execute SQL (MCP or SQL APIs)
- Manage Auth users/policies
- Storage bucket/object ops
- Deploy Edge Functions; generate types

## Workflow

1. Confirm target instance (self-host URL or cloud) and that credentials exist in env vars — not chat.
2. Prefer official CLI/SDK/MCP over scraping undocumented endpoints.
3. Run a read-only probe first (version/health/list).
4. Mutating ops only after the probe succeeds; leave intentional residue (IDs, links, logs).
5. Stop when the requested outcome is evidenced or a hard stop triggers.

## Hard stops

- Use `read_only=true` + project scoping for agents
- `service_role` bypasses RLS — never ship to browsers
- Do not point unconstrained agents at production

## Pairing

- Vault toolbox catalog: `Toolbox/Open-Source-Stack.md`
- Skill index: `Skills/Custom/oss-agent-ops/README.md`
- Prefer Harness · Loop · Graph: evidence over confidence; Writer ≠ Checker for destructive sends/deletes/deploys.
