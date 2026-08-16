---
title: Toolbox — ComfyUI
type: toolbox
status: live
created: 2026-08-16
category: harness
stack: [ComfyUI, HTTP]
related:
  - "[[Skills/Custom/comfyui]]"
tags: [toolbox, comfyui, local-image]
---

# ComfyUI

**One-liner:** Local image gen/upscale over HTTP — **not** an MCP. Skills call `http://127.0.0.1:8188`.

**Install:** official ComfyUI repo in the adopter's `PROJECTS_CODE_DIR`.

## When to use

Local SD/Flux jobs the user wants off Imagine/xAI.

## When not to use

Server down; no checkpoints in `models/checkpoints`.

## Agent pairing

`comfyui`, `comfy-txt2img`, `comfy-upscale`.
