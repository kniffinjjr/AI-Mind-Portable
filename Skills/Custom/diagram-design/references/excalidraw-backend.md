# Excalidraw backend

Use connected tools:

- `excalidraw___read_me` — once per conversation for element format
- `excalidraw___create_view` — `elements` argument is a JSON **array string**

## Role → Excalidraw color map (light canvas default)

| Style-guide role | Stroke | Fill (pastel) |
|---|---|---|
| ink | `#1e1e1e` | — |
| muted | `#757575` | — |
| accent / focal | `#4a9eed` | `#a5d8ff` |
| success / residue | `#22c55e` | `#b2f2bb` |
| budget / warn | `#f59e0b` | `#ffd8a8` |
| eval / special | `#8b5cf6` | `#d0bfff` |
| store / memory | `#06b6d4` | `#c3fae8` |
| zone harness | — | `#dbe4ff` opacity 30 |
| zone mid | — | `#e5dbff` opacity 30 |
| zone outer | — | `#ffd8a8` opacity 30 |

## Dark mode

First element: large dark bg rect (`#1e1e2e`). Then bright primary strokes and dark fills from the Excalidraw dark-mode table in read_me.

## Type tips on Excalidraw

| Type | Elements |
|---|---|
| Nested | Concentric ellipses/rects, opacity zones, labels on rings |
| Layer stack | Stacked rectangles, bottom = foundation |
| Loop | Ellipse cycle + center hub rect + dashed write-backs |
| Flowchart | rect + diamond + orthogonal arrows with bindings |
| Sequence | Actor headers + dashed lifelines + message arrows |
| Architecture | Grouped rects + bound arrows |

## Density

Excalidraw displays ~700px wide. Prefer fewer larger nodes. Min shape ~120×60. Min font 16.
