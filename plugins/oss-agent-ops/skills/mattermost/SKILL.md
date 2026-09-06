---
name: mattermost
description: >-
  Operate Mattermost (open-source alternative to Slack) via CLI/API/SDK. Use for Mattermost, Slack alternative, mmctl, mattermost api.
metadata:
  replaces: Slack
  source_post: https://x.com/ihteshamali/status/2096598697308205182
  version: "1.0"
---

# Mattermost — agent ops

Open-source alternative to **Slack**. This skill enables an AI agent to install, authenticate, and operate Mattermost through documented CLI/API/SDK surfaces — not UI click-paths.

## Links

| Resource | URL |
|----------|-----|
| Home | https://mattermost.com |
| GitHub | https://github.com/mattermost/mattermost |
| Docs | https://docs.mattermost.com/ |
| API / SDK | https://api.mattermost.com/ |

## Stack surface

- **SDK / CLI:** `mmctl`; `@mattermost/client`; Go model package; REST `/api/v4`
- **Auth:** Bearer session / personal access token / bot token; mmctl login or `--local`
- **MCP / automation:** No first-party MCP. REST v4 + webhooks + mmctl.

## Install (quickstart)

Official docker-compose / Omnibus / Kubernetes per Mattermost deploy docs

Install into a **product / project repo** or local ops folder — never as binaries inside the Vault.

## Agent operations

- Create/list channels; post/update/delete posts
- Manage users/teams/roles
- Upload files; search posts
- `mmctl` user/channel/team/config/plugin ops
- Create bots, webhooks, slash commands
- Export compliance data (admin)

## Workflow

1. Confirm target instance (self-host URL or cloud) and that credentials exist in env vars — not chat.
2. Prefer official CLI/SDK/MCP over scraping undocumented endpoints.
3. Run a read-only probe first (version/health/list).
4. Mutating ops only after the probe succeeds; leave intentional residue (IDs, links, logs).
5. Stop when the requested outcome is evidenced or a hard stop triggers.

## Hard stops

- Prefer least-privilege bots over PATs
- `mmctl --local` bypasses auth — filesystem = admin
- Delete/export/compliance ops need human gate

## Pairing

- Vault toolbox catalog: `Toolbox/Open-Source-Stack.md`
- Skill index: `Skills/Custom/oss-agent-ops/README.md`
- Prefer Harness · Loop · Graph: evidence over confidence; Writer ≠ Checker for destructive sends/deletes/deploys.
