---
name: design-system
description: Own product/site design tokens, type scale, spacing, components, and light/dark themes. Create or extend a durable DESIGN_SYSTEM.md and component stubs. Use for design system, tokens, component library, theme, or brand UI foundations.
---

# Design System

Create and maintain a **durable design system** for a product or site—not one-off pretty pages.

## Triggers

design system · tokens · component library · theme · UI kit · design tokens · light dark mode · brand UI foundations

## Principles

1. **Tokens before components** — color, type, space, radius, elevation as source of truth.
2. **Roles not values in prose** — “accent”, “surface”, “danger” mapped to concrete values.
3. **One density story** — comfortable vs compact; don’t mix randomly.
4. **Dark mode as first-class** (when required)—pair tokens, don’t invert ad hoc.
5. Extract from refs via `grok-infographic` patterns when user provides brand samples; then **own** the living system here.

## Artifacts

| Artifact | Purpose |
|----------|---------|
| `DESIGN_SYSTEM.md` | Tokens, type scale, spacing, radius, motion defaults, never-do list |
| `tokens-preview.html` | Swatches, type specimens, sample components |
| Component stubs (optional) | Button, input, card, nav patterns aligned to tokens |

## Workflow

1. Gather refs, existing CSS variables, or product constraints.
2. Define palette roles (bg, surface, ink, muted, accent, success/warn/danger).
3. Define type roles (display, title, body, label, mono) + modular scale.
4. Spacing scale (e.g. 4/8 base), radius, border, shadow elevation.
5. Component rules: primary/secondary/ghost buttons, form fields, cards, nav.
6. Theme matrix if dark mode: map each role.
7. Never-do list (e.g. pure black text on pure white only, rainbow gradients, 6 font families).
8. Preview HTML for visual verification; iterate with user.

## Quality bar

- Contrast meets WCAG for text/UI where roles imply readable content.
- Components describe states: default, hover, focus, disabled, error.
- Compatible with `better-interface` review and `a11y-build` defaults.

## Handoffs

- Landing sections using the system → `landing-page`
- Responsive shells → `responsive-shell`
- Motion tokens → `web-motion`
- Infographic one-offs → `grok-infographic` (extraction only)
