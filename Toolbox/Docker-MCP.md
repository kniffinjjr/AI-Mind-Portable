---
title: Toolbox — Docker MCP
type: toolbox
status: live
created: 2026-08-16
category: harness
stack: [Docker Engine, uvx mcp-server-docker]
related:
  - "[[Skills/Custom/docker]]"
tags: [toolbox, docker, mcp]
---

# Docker MCP

**One-liner:** Local Engine control (containers, images, volumes, compose) via ckreiling/mcp-server-docker.

## When to use

SpinWurkz / MemOS compose, logs, health.

## When not to use

Privileged containers or passing secrets into create_container.

## Agent pairing

`docker`, `docker-ps-health`, `docker-compose-up`. Docker Desktop must be running.
