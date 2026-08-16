---
title: Refero Styles (DESIGN.MD)
type: toolbox
status: live
created: 2026-08-14
category: ui
stack: [design-tokens, markdown, agent-context]
related:
  - "[[Toolbox/_index]]"
  - "[[Toolbox/Design-Reference-Galleries]]"
  - "[[Skills/Custom/design-system]]"
  - "[[Skills/Custom/landing-page]]"
  - "[[Skills/Custom/pixelslop]]"
tags: [toolbox, design-system, design.md, agents, grok-build]
---

# Refero Styles — design systems as DESIGN.MD

**One-liner:** 2,000+ real design systems turned into **AI-readable `DESIGN.MD` files** (colors, type, spacing, rules) for Cursor, Claude Code, v0, Grok Build, and similar agents.

**Links:**
- https://styles.refero.design
- Source post cluster: https://x.com/tranmautritam/status/2088189728432799797

## What it is

Not a React component library. A **reference library of design-system documents** formatted so agents can load tokens and rules into context when generating UI.

Typical contents of a `DESIGN.MD`:
- Color palette / semantic colors
- Typography scale
- Spacing / layout rules
- Component or interaction conventions (as text)

## When to use

- Seeding or refreshing a product **`design-system`** (tokens first, then components)
- Giving Grok Build / coding agents a concrete visual system instead of “make it look modern”
- Comparing real production systems before inventing new tokens

## When not to use

- As a substitute for owning your own token file in the product repo
- Pasting a foreign brand system into a client deliverable without license/brand clearance
- Skipping `pixelslop` / `better-interface` / `a11y-build` after generation

## Agent pairing (Grok Build)

| Task | Skills |
|------|--------|
| Load system into context | Drop chosen `DESIGN.MD` into project docs or prompt |
| Own the tokens | `design-system` |
| Build pages | `landing-page`, `product-page`, `react-ui`, `nextjs-app` |
| QA | `pixelslop`, `better-interface`, `a11y-build`, `web-motion` |

## Install / usage

1. Browse https://styles.refero.design and select a system appropriate to the product.
2. Export or copy the `DESIGN.MD` (or equivalent) into the **product repo** (e.g. `docs/DESIGN.md` or `design-system/DESIGN.md`) — not into AI-Mind-Vault as the live token source.
3. Point the coding agent at that file via AGENTS/project instructions.
4. Adapt tokens to brand; do not ship a cloned competitor identity.

## IP / work

- Work projects: store adapted tokens under Work Mind / product repo only.
- Vault holds this **how-to-use** note only.

## Notes

Highest-value item from the 2026-08-14 design inspiration list: turns “inspiration” into **structured agent context**.
