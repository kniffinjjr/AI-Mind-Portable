---
name: blender-mcp
type: skill
status: active
created: 2026-08-05
updated: 2026-08-16
triggers:
  - Blender
  - blender mcp
  - 3D scene
  - conversational 3D
  - bpy
  - viewport screenshot
  - product visualization
  - game asset placement
  - architecture walkthrough
  - spatial audio
  - fix orientation
related:
  - "[[Concepts/Harness-Loop-Graph-Architecture]]"
  - "[[Methodology/Nested-Cycles]]"
  - "[[Methodology/Anti-Infinite-Loop-Checklist]]"
  - "[[Sources/irinatoxi-Grok-Blender-MCP-Demo-2026-08-04]]"
source_skill_path: $GROK_HOME/skills/blender/SKILL.md
---

# Blender MCP — Conversational 3D Scene Control

**Control a live Blender project via natural language + MCP tools with vision closed-loop.**

Runtime body lives at `source_skill_path`. This note is the vault overlay.

## Core Behavior
- Prefer high-level safe tools over raw `execute_blender_code` / bpy
- Always inspect (screenshot or scene query) after mutations
- Treat the `.blend` as the single source of truth; iterate on real state
- Apply Harness · Loop · Graph: undo/checkpoints, evidence-based stopping, human gate before final export/render

## Hard stops (vision / correct loop)

| Bound | Default |
|-------|---------|
| Max mutate → screenshot → correct passes per task | **5** |
| Identical failed correction (same intent) | **1** retry then escalate / ask user |
| After max passes | Stop; report remaining issues; human review |

Do not open endless orientation/scale fix loops. See [[Methodology/Anti-Infinite-Loop-Checklist]].

## Safety Non-negotiables
- Working-copy isolation preferred
- Auto-undo / Safe Mode when available
- Never run unconstrained Python against production assets without checkpoints
- Human approval for destructive or irreversible ops

## Typical Loop
Compose / import assets → place & orient → lights/cameras/audio → screenshot → correct → polish → human review.

See full skill for tool catalog, failure modes (origin/orientation/scale/parenting), and integration notes for grok-blender-mcp / ahujasid/blender-mcp / Blender Lab.
