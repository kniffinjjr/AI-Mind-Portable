# Style guide — diagram-design (Grok)

Single source of truth for colors and type. Diagrams reference **roles**, not raw hex, except when writing the final SVG attributes from this table.

## Default tokens (dark editorial)

| Role | Hex | Use |
|---|---|---|
| paper | `#0b0f14` | Page background |
| paper-2 | `#111820` | Node fill, panels |
| ink | `#e8eef7` | Primary text and strong strokes |
| muted | `#8b9bb0` | Secondary text, default arrows |
| soft | `#5a6a80` | Tertiary, disabled |
| rule | `#1e2a3a` | Hairline borders, grid |
| accent | `#5b9cff` | 1–2 focal nodes only |
| accent-tint | `rgba(91,156,255,0.12)` | Focal fill |
| link | `#3dd6c6` | External / API edges (optional) |
| danger | `#fb7185` | Rare — errors, budget cuts |
| success | `#34d399` | Rare — proof, residue out |

## Light variant (optional)

| Role | Hex |
|---|---|
| paper | `#faf7f2` |
| paper-2 | `#ffffff` |
| ink | `#1c1917` |
| muted | `#78716c` |
| soft | `#a8a29e` |
| rule | `#e7e5e4` |
| accent | `#b5523a` |
| accent-tint | `rgba(181,82,58,0.10)` |

## Typography

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;650&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

Or system stack: `ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`.

| Role | Size | Weight |
|---|---|---|
| Page title | 1.05–1.2rem | 650 |
| Node name | 11–12px | 600 |
| Sublabel | 8–9px | 400–500 |
| Arrow label | 8px | 500 |
| Eyebrow | 7–8px uppercase tracked | 600 |

Mono only for ports, commands, field types — not for human node names.

## Focal rule

`accent` on **at most two** elements. Everything else ink/muted/soft.

## Customization

If the user provides a URL or token set, map into this file under a "Custom tokens" section and use those values for subsequent diagrams in the project.
