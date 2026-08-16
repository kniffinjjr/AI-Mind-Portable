---
title: Toolbox — Unity MCP
type: toolbox
status: live
created: 2026-08-16
category: harness
stack: [Unity 6000, Node, WebSocket]
related:
  - "[[Skills/Custom/unity]]"
  - "[[Projects/06-Defend-Your-Calendar/Overview]]"
tags: [toolbox, unity, mcp, game]
---

# Unity MCP

**One-liner:** CoderGamester mcp-unity — Editor WebSocket + Node MCP bridge.

**Links:**
- GitHub: https://github.com/CoderGamester/mcp-unity

## When to use

Scenes, GameObjects, play mode, console, tests in the adopter's Unity project.

## When not to use

Other Unity projects until the same package is added. Domain Reload on play can drop the socket.

## Agent pairing

`unity`, `unity-open-scene`, `unity-run-playmode`, `unity-build-win`. Port **8090**.
