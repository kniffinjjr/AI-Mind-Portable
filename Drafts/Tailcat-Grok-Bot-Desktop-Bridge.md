---
title: Tailcat — Grok Bot ↔ Desktop Bridge
type: draft
status: draft
created: 2026-09-01
updated: 2026-09-01
related:
  - "[[Toolbox/Tailcat]]"
  - "[[Concepts/Harness-Loop-Graph-Architecture]]"
tags: [draft, tailcat, grok-bot, harness, runbook]
---

# Tailcat — Grok Bot ↔ Desktop Bridge

**Status:** Draft runbook (manual-validate once, then automate).  
**Toolbox:** [[Toolbox/Tailcat]]  
**Grain:** Inner harness — no multi-node graph required for the first link.

## Goal

Establish an encrypted, account-free pipe between:

1. **Grok Bot** cloud computer (`/workspace` durable root)
2. **Your desktop** (lab MCP ports, files, optional SSH)

Evidence of success: `tailcat ping --until-direct <addr>` reports a direct path (or DERP fallback that still carries bytes), plus one file or port exercise.

## Prerequisites

- Tailcat CLI on **both** sides ([install notes](https://github.com/tailscale/tailcat))
- Out-of-band channel already open (Bot chat / Cursor session) to paste a one-time `tc…` address
- Human present for first desktop `serve` (capability token = whoever holds the address)

## Pattern A — Desktop serves, Bot connects (usual for local tools)

Use when the Bot must reach FreeCAD/KiCad/Docker/Unity/lab HTTP on the desktop.

### Desktop

```bash
# Proof only — stdin/stdout
tailcat
# Copy the printed tc… address into Bot chat

# Or expose specific localhost ports (example: FreeCAD RPC + a static HTTP port)
tailcat serve 9875,8080

# Or a write-only drop box for Bot → desktop artifact handoff
tailcat recv ~/Inbox/tailcat

# Or SSH without password (HUMAN GATE — powerful)
# tailcat serve no-auth-ssh
```

### Grok Bot

```bash
# Install once into durable workspace
mkdir -p /workspace/bin
curl -sL -o /tmp/tailcat.tgz \
  https://github.com/tailscale/tailcat/releases/download/v0.4.0/tailcat_0.4.0_linux_amd64.tar.gz
tar xzf /tmp/tailcat.tgz -C /tmp
install -m 755 /tmp/tailcat /workspace/bin/tailcat
export PATH="/workspace/bin:$PATH"
hash -r
tailcat --help >/dev/null

# Connectivity evidence
tailcat ping --until-direct 'tc…'   # paste address from desktop

# File send into desktop drop box
tailcat cp /workspace/out/report.md 'tc…:'

# Port use via SOCKS (tools that honor all_proxy)
tailcat socks 'tc…' curl -sS http://127.0.0.1:8080/

# SSH (only if desktop served no-auth-ssh or port 22)
tailcat ssh 'tc…'
```

## Pattern B — Bot serves, desktop connects (usual for `/workspace` pull)

Use when you want the desktop to fetch Bot artifacts or shell into the Bot box without Tailscale account join.

### Grok Bot

```bash
export PATH="/workspace/bin:$PATH"
mkdir -p /workspace/inbox
# Drop box for desktop → Bot
tailcat recv /workspace/inbox
# OR expose a workspace tree read-only for scp/sftp clients
# tailcat serve --files=/workspace:ro
# Paste tc… into the session for the desktop
```

### Desktop

```bash
tailcat ping --until-direct 'tc…'
tailcat cp ./local-fixing.md 'tc…:'
# If Bot served files (read-only), pull with scp-style paths:
# tailcat cp 'tc…:report.md' .
```

## Recommended first session (checklist)

1. Install Tailcat on desktop + Bot.
2. Pattern A proof: desktop `tailcat` ↔ Bot `echo ping | tailcat tc…`.
3. Upgrade: desktop `tailcat recv ~/Inbox/tailcat` ↔ Bot `tailcat cp` one file.
4. Optional: one localhost port via `serve` + `socks`/`tailcat <addr> <port>`.
5. Record evidence (timestamps, direct vs DERP) in My Mind project residue — **not** the live `tc…` string in Vault git.
6. Kill servers when done (ephemeral key dies with the process).

## Stopping rules

- Stop after successful ping + one byte/file proof (do not keep widening ports “just in case”).
- Stop and escalate if you need durable identity / ACL / team sharing → evaluate full Tailscale instead.
- Never leave `no-auth-ssh` or `exit-node` running unattended on the desktop.

## Automation later (after one manual success)

- Bot skill: install Tailcat under `/workspace/bin` if missing; print serve/connect snippets.
- Desktop helper script in My Mind (not Vault) to `serve` an allow-listed port set.
- Handoff artifact field: `tailcat_addr_ref` pointing to a **secret store / chat**, never raw addr in shared markdown.

## SmaRV follow-on (not this session)

When thermostats need remote agent reachability, put Tailcat on a **coach-LAN Linux gateway**, not on the ESP boards. Agents connect to the gateway; gateway talks ESPHome/HA locally. Preserve on-device offline climate safety.
