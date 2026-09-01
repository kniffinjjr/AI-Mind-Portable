---
title: Toolbox — Tailcat
type: toolbox
status: live
created: 2026-09-01
updated: 2026-09-01
category: harness
stack: [Tailcat, WireGuard, magicsock, DERP, Go]
related:
  - "[[Toolbox/_index]]"
  - "[[Concepts/Harness-Loop-Graph-Architecture]]"
  - "[[Drafts/Tailcat-Grok-Bot-Desktop-Bridge]]"
  - "[[_meta/AI-Tech-Radar-Watchlist]]"
tags: [toolbox, tailcat, harness, networking, grok-bot, smarv]
---

# Tailcat

**One-liner:** Account-free encrypted netcat over Tailscale’s data plane (WireGuard + NAT traversal + DERP) — no Tailscale login, no root, no TUN/routing changes.

**Links:**
- Blog: https://tailscale.com/blog/tailcat
- GitHub: https://github.com/tailscale/tailcat
- Releases: https://github.com/tailscale/tailcat/releases (v0.4.0 as of 2026-08-31)
- Container: `ghcr.io/tailscale/tailcat`
- DERP map (default): https://tailcat.dev/derpmap.json

## Stack

- CLI + Go library (`github.com/tailscale/tailcat`)
- Userspace WireGuard + magicsock; DERP bootstrap then usually direct UDP
- Optional: self-hosted `derper`, DNS TXT `tailcat=` records for stable names

## Install (product / Bot / desktop — not Vault)

```bash
# macOS
brew install tailcat

# Linux amd64 (example)
curl -sL -o tailcat.tgz \
  https://github.com/tailscale/tailcat/releases/download/v0.4.0/tailcat_0.4.0_linux_amd64.tar.gz
tar xzf tailcat.tgz   # yields ./tailcat
sudo install -m 755 tailcat /usr/local/bin/tailcat

# From source
go install github.com/tailscale/tailcat/cmd/tailcat@latest

# Container
docker pull ghcr.io/tailscale/tailcat:v0.4.0
```

Install on the **Grok Bot cloud computer** under `/workspace/bin` (or `/usr/local/bin` if writable) and on the **desktop**. Do not vendor binaries into this Vault.

## When to use

- Ephemeral encrypted pipe between two shells / agents that already share an out-of-band channel (chat, handoff note)
- Grok Bot ↔ desktop bridge (files, SSH, port forward, SOCKS) without enrolling either side in a Tailscale tailnet
- Remote agent reach into local MCP ports (FreeCAD `:9875`, KiCad MCP, Docker, Unity) without public bind
- Future **SmaRV** coach/lab access via a Linux gateway (not on the ESP32 itself) — see below

## When not to use

- Need org identity, ACLs, MDM, audit → full Tailscale / Headscale
- Long-lived public services or “anyone with an old token forever” without `--allow` key lockdown
- Expecting Tailcat to run **on** ESP32 thermostat MCUs (it will not — needs a Linux/userspace peer)
- Browser-only demos as production path (WASM demo is DERP-relayed until WebRTC)

## Agent pairing (Grok Build)

| Task | Skills / notes |
|------|----------------|
| Decide if connectivity is the gap | `harness-loop-graph` — layer = Harness |
| Bot install / durable `/workspace` | `install-grok-build-on-bot` + this entry |
| Bot ↔ desktop session | Follow [[Drafts/Tailcat-Grok-Bot-Desktop-Bridge]] |
| SmaRV remote debug (later) | Hardware Forge persona + Linux gateway next to ESPHome/HA |

## Patterns that matter here

### 1) Grok Bot ↔ desktop (primary)

Two directions — pick by who owns the ports you need:

| Goal | Who serves | Who connects |
|------|------------|--------------|
| Bot pulls desktop MCP / lab ports / files | **Desktop** `tailcat serve …` | **Bot** `tailcat <addr> …` |
| Desktop pulls Bot `/workspace` or Bot SSH | **Bot** `tailcat serve …` / `recv` | **Desktop** client |

Always prefer **ephemeral keys** (default). Paste the `tc…` address through chat once. Treat the address like a capability token.

Minimal proof:

```bash
# side A
tailcat
# → prints tc…

# side B
echo hello | tailcat tc…
# side A prints hello
```

Full runbook: [[Drafts/Tailcat-Grok-Bot-Desktop-Bridge]].

### 2) Future — SmaRV WIFI thermostats

Thermostats are **ESP32-class / ESPHome** devices on coach Wi‑Fi. Tailcat does **not** replace ESPHome or Home Assistant on-device.

Recommended topology later:

```text
[Agent / Grok Bot / desktop]
        │  Tailcat (tc… token)
        ▼
[Linux gateway on coach LAN]  ← Pi / NUC / always-on lab box
        │  local HTTP / ESPHome API / HA
        ▼
[SmaRV front + rear thermostat boards]
```

- Keep offline-first thermostat safety on-device (unchanged).
- Use Tailcat only as the **remote reachability harness** to the gateway.
- Human gate before any OTA or compressor-affecting action (existing SmaRV safety rules).

## Safety

- Token possession ≈ access. Default ephemeral; rotate by restarting the server.
- Gate `serve no-auth-ssh` and `serve exit-node` behind explicit human approval.
- Do not commit live `tc…` addresses into the Vault or product git history.
- Tailscale-hosted DERP for Tailcat is rate-limited; self-host `derper` if you need sustained relay bandwidth.

## Verification (this environment)

Cloud agent smoke (2026-09-01): installed v0.4.0 linux/amd64; local `tailcat` server + client stdin pipe delivered `pipe-ok` end-to-end (DERP region 301 bootstrap).

## Notes / IP

- Work vs personal: personal Bot/desktop experiments → My Mind residue; company coach/fleet work → Work Mind + product repos.
- License: BSD-style (see upstream LICENSE). WireGuard is a registered trademark of Jason A. Donenfeld.
