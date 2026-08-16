---
title: Toolbox — OBS MCP
type: toolbox
status: live
created: 2026-08-16
category: harness
stack: [OBS Studio, obs-websocket, npx obs-mcp]
related:
  - "[[Skills/Custom/obs]]"
tags: [toolbox, obs, mcp, streaming]
---

# OBS MCP

**One-liner:** Control OBS Studio over WebSocket 5.x (`npx obs-mcp`, `ws://127.0.0.1:4455`).

## When to use

Scene switch, go live, record, replay buffer.

## When not to use

Editing timelines (Vegas/MAGIX). Never start a stream without explicit ask.

## Agent pairing

`obs`, `obs-go-live`, `obs-switch-scene`, `obs-clip-replay`. Password via `OBS_WEBSOCKET_PASSWORD` if set.
