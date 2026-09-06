---
name: jitsi
description: >-
  Operate Jitsi Meet (open-source alternative to Zoom) via CLI/API/SDK. Use for Jitsi, Zoom alternative, jitsi meet api, video conference OSS.
metadata:
  replaces: Zoom
  source_post: https://x.com/ihteshamali/status/2096598697308205182
  version: "1.0"
---

# Jitsi Meet — agent ops

Open-source alternative to **Zoom**. This skill enables an AI agent to install, authenticate, and operate Jitsi Meet through documented CLI/API/SDK surfaces — not UI click-paths.

## Links

| Resource | URL |
|----------|-----|
| Home | https://jitsi.org |
| GitHub | https://github.com/jitsi/jitsi-meet |
| Docs | https://jitsi.github.io/handbook/ |
| API / SDK | https://jitsi.github.io/handbook/docs/dev-guide/dev-guide-iframe/ |

## Stack surface

- **SDK / CLI:** IFrame External API; `@jitsi/react-sdk`; docker-jitsi-meet
- **Auth:** Anonymous by default; optional JWT / LDAP / OIDC; JaaS JWT
- **MCP / automation:** No official MCP. IFrame API + reservation REST/webhooks.

## Install (quickstart)

Clone `jitsi/docker-jitsi-meet` → `cp env.example .env` → `./gen-passwords.sh` → `docker compose up -d`

Install into a **product / project repo** or local ops folder — never as binaries inside the Vault.

## Agent operations

- Embed/control meetings via `JitsiMeetExternalAPI`
- executeCommand: toggleAudio/Video, hangup, password, subject, lobby
- Listen participantJoined / videoConferenceLeft
- Generate JWT room tokens for moderated rooms
- Automate docker-jitsi-meet env (prosody/jicofo/jvb)
- Optional Prosody reservation REST gatekeeping

## Workflow

1. Confirm target instance (self-host URL or cloud) and that credentials exist in env vars — not chat.
2. Prefer official CLI/SDK/MCP over scraping undocumented endpoints.
3. Run a read-only probe first (version/health/list).
4. Mutating ops only after the probe succeeds; leave intentional residue (IDs, links, logs).
5. Stop when the requested outcome is evidenced or a hard stop triggers.

## Hard stops

- Public rooms are guessable — use strong names + lobby/JWT
- Keep `JWT_APP_SECRET` server-side
- Recording/transcription has privacy impact

## Pairing

- Vault toolbox catalog: `Toolbox/Open-Source-Stack.md`
- Skill index: `Skills/Custom/oss-agent-ops/README.md`
- Prefer Harness · Loop · Graph: evidence over confidence; Writer ≠ Checker for destructive sends/deletes/deploys.
