---
title: Toolbox — FreeCAD MCP
type: toolbox
status: live
created: 2026-08-16
category: harness
stack: [FreeCAD, Python, XML-RPC, MCP]
related:
  - "[[Skills/Custom/freecad]]"
  - "[[Toolbox/_index]]"
tags: [toolbox, freecad, mcp, cad]
---

# FreeCAD MCP

**One-liner:** Live FreeCAD 1.1 control via neka-nat XML-RPC addon + stdio MCP.

**Links:**

- GitHub: https://github.com/neka-nat/freecad-mcp

## When to use

Parametric parts, CSG, PartDesign, FEM, STEP/STL from Grok Build.

## When not to use

Inventor/Fusion shop files; headless CI without a GUI session.

## Agent pairing

| Task | Skills |
|------|--------|
| Primitives / export | `freecad` |
| Sketch → pad | `freecad-partdesign` |
| CalculiX | `freecad-fem` |

Runtime: FreeCAD open, MCP Addon RPC `:9875`. Grok: `[mcp_servers.freecad]`.
