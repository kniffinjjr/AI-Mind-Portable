---
name: diagram-design
description: Create editorial technical diagrams as self-contained HTML with inline SVG — architecture, nested containment, layer stack, loop/flywheel, flowchart, sequence, state machine, swimlane, and related types. Use when the user asks for a diagram, schematic, architecture visual, flowchart, sequence diagram, nested grains view, layer stack, or flywheel. Avoids Mermaid-slop, heavy shadows, and overcrowded boxes. Matches a style guide and can skin from a URL or project tokens. Supports HTML+SVG files and live Excalidraw via connected tools.
metadata:
  version: "1.0-grok"
  source: adapted from cathrynlavery/diagram-design (MIT)
---

# Diagram Design (Grok)

Create visual diagrams as **self-contained HTML files with inline SVG + CSS**. No build step, no external JS required to view.

Opinionated editorial system. Target density **4/10**. Highest-quality move is usually **deletion**.

## When to use

Use when a reader learns more from a visual than from prose or a table.

**Do not use for** quick ASCII, simple lists, or one-shape diagrams — write the sentence instead.

Before drawing ask: would the reader learn more from this than from a tight paragraph? If no, do not draw.

## Diagram type selection

| Showing… | Type | Load reference |
|---|---|---|
| Components + connections | Architecture | `references/type-architecture.md` |
| Hierarchy by containment (INNER within MID within OUTER) | Nested | `references/type-nested.md` |
| Stacked abstractions (HLG, platform layers) | Layer stack | `references/type-layers.md` |
| Reinforcing cycle / RAI / flywheel with hub | Loop | `references/type-loop.md` |
| Decision logic / W0–W7 spine | Flowchart | `references/type-flowchart.md` |
| Time-ordered messages between agents | Sequence | `references/type-sequence.md` |
| States + transitions | State machine | `references/type-state.md` |
| Cross-functional handoffs | Swimlane | `references/type-swimlane.md` |
| Two-axis prioritization | Quadrant | (inline conventions) |
| Parent to children tree | Tree | (inline) |

**Always load the matching `references/type-*.md` when it exists** before drawing that type.

If combining ideas, pick the **dominant axis** — do not hybridize grammars in one figure. Prefer overview + detail over one overloaded poster.

## Philosophy

- Every node is a distinct idea. Two nodes that always travel together become one node.
- Every connection carries information. If layout already shows the relationship, drop the line.
- **Accent is editorial, not a flag.** 1–2 focal nodes max.
- Done when nothing can be removed.
- Above about 9 nodes, split into two diagrams.

## Style guide (SSOT)

Colors, fonts, and semantic roles live in [`references/style-guide.md`](references/style-guide.md).

**Default skin (Grok / dark-friendly editorial):** paper `#0b0f14`, paper-2 `#111820`, ink `#e8eef7`, muted `#8b9bb0`, soft `#5a6a80`, accent `#5b9cff` (1–2 focal only), rule `#1e2a3a`.

**First-run gate:** if the user has a brand site or vault style tokens, offer to map them into `style-guide.md` before first diagram. Otherwise proceed with default.

## Output contract (HTML)

1. Write a **single HTML file** under `artifacts/` (or path user names).
2. File is self-contained — inline CSS + SVG; open in any browser.
3. Include a short title and optional one-line caption outside the SVG.
4. Dark default; light variant if user asks.
5. After write, report the path.

## Core SVG rules

1. No shadows. Borders only.
2. Max corner radius 6–10px (or 0).
3. Orthogonal connectors preferred for architecture/flowchart. Curved arcs only when geometry is orbital/circular by design.
4. Arrow labels sit off the stroke with a small gap.
5. Fan attach points at least 12px apart.
6. Do not route a connector through a non-endpoint node.
7. Grid align to 4px multiples.
8. Hairlines 1–1.5px for structure; 1.5–2px for primary paths.

## Universal anti-patterns (AI slop)

- Cyan/purple glow on dark
- Identical boxes for every node
- Legend inside the drawing area colliding with nodes
- Accent on 4+ nodes
- Diagonal spaghetti when elbows would work
- Vertical text on arrows
- Mermaid default look

## Workflow

1. Classify type from the selection table.
2. Load `references/style-guide.md` + the type reference.
3. Sketch content as a short node/edge list; cut to density 4/10.
4. Generate via chosen backend (HTML or Excalidraw).
5. Self-check against anti-patterns and type-specific rules.

## Output backends

| Backend | When | How |
|---|---|---|
| **HTML + SVG** | Durable vault artifact, shareable file | Write self-contained HTML under `artifacts/` |
| **Excalidraw** | Interactive edit, quick whiteboard, streaming draw | `excalidraw___read_me` (once per conversation) then `excalidraw___create_view` |

### Excalidraw path

1. Call `excalidraw___read_me` via `call_connected_tool` if not loaded this conversation.
2. Build a JSON array of elements (cameraUpdate first, labeled shapes, bindings).
3. Call `excalidraw___create_view` with `elements` as a **JSON array string**.
4. Same philosophy: density 4/10, accent on 1–2 nodes.
5. Map style-guide roles to Excalidraw palette — see `references/excalidraw-backend.md`.
6. Prefer `label` on shapes. Camera sizes must be 4:3 (800×600 default). Font sizes ≥16 body, ≥20 titles.
7. For nested/orbital geometry, use ellipses + opacity zones rather than forcing flowchart boxes.

## Relation to AI Mind / HLG

| Concept | Preferred type |
|---|---|
| INNER within MID within OUTER | **Nested** |
| Harness / Loop / Graph / Eval | **Layer stack** |
| W0–W7 process | **Flowchart** (spine only) |
| RAI / Probe improvement | **Loop** |
| Diamond research path | **Sequence** or compact **Architecture** |
| Handoff across agents | **Sequence** / **Swimlane** |

Do **not** force process + containment + eval into one diagram. Split by geometry.

## Source credit

Adapted for Grok from cathrynlavery/diagram-design (MIT). Philosophy, type taxonomy, and anti-slop rules retained; runtime rewritten for Grok (artifacts HTML, Excalidraw connected tools, progressive references/).
