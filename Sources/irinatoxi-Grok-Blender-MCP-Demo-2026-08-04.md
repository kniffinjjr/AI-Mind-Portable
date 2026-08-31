---
title: irinatoxi Grok 4.5 + Blender MCP Demo
type: source
created: 2026-08-05
source: https://x.com/irinatoxi/status/2084737280204280212
tags: [source, blender, mcp, grok, 3d, vision-loop]
related: ["[[Skills/Custom/blender-mcp]]", "[[Concepts/Harness-Loop-Graph-Architecture]]"]
---

# Grok 4.5 turns Blender into a conversation (live project editing)

**Author:** @irinatoxi  
**Date:** 2026-08-04  
**Engagement (at capture):** ~1.2k likes, 200+ reposts, 570k+ views  

Grok 4.5, via Blender MCP, drives a live Blender session. Instead of one-shot image generation, it issues commands that mutate the actual `.blend` file / scene graph.

Demo (~170s video): builds a medieval battlefield from existing assets (knights, horses, castle, siege machines, trees), adds animation paths, cameras, and spatial audio. Failures are visible and corrected iteratively (upside-down models, wrong orientations, etc.) using viewport feedback / screenshots + bpy operations.

Key insight (also noted in replies and by @grok): the agent treats the scene as a stateful, inspectable environment and keeps editing the *real* project rather than regenerating images.

**Key open-source implementations:**

- https://github.com/jaskirat1616/grok-blender-mcp (Grok-first, vision screenshots, high-level safe tools, auto-undo, guarded code)
- https://github.com/ahujasid/blender-mcp (popular general MCP, screenshots, Sketchfab/Poly Haven/Rodin integrations)
- Blender Lab MCP: projects.blender.org/lab/blender_mcp
- Larger toolsets exist (200–270+ tools)

This is a clean real-world example of a tool-using agent with a visual closed loop on a high-stakes stateful environment — directly analogous to KiCAD / SOLIDWORKS PDM patterns already in the system.
