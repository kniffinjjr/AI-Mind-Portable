---
name: responsive-shell
description: Author mobile-first responsive layout systems and page shells — breakpoints, grids, fluid type, container behavior. Use for responsive layout, mobile-first, breakpoint system, page shell, or fluid grid work.
---

# Responsive Shell

Produce **mobile-first** layout systems and page shells that don’t collapse under real content.

## Triggers

responsive layout · mobile-first · breakpoint system · page shell · fluid grid · container queries · viewport layout

## Principles

1. **Mobile base, enhance up** — default styles are small-screen; `min-width` adds complexity.
2. **Content defines breakpoints** — not only device names; fix when the layout breaks.
3. **Fluid over fragmented** — prefer `clamp`, fluid type, flexible grids over many fixed widths.
4. **Shell ≠ decoration** — header, main, aside, footer landmarks and sticky rules are part of the system.
5. Review finished UI with `better-interface` layout domain; kill AI-generic grids with `pixelslop`.

## Deliverables

- Breakpoint table (name, min-width, intent)
- Grid/column rules (e.g. 4 → 8 → 12)
- Page shell HTML/CSS structure (header/nav/main/footer)
- Fluid type + spacing notes tied to `design-system` tokens when available
- Overflow/sticky/safe-area considerations

## Workflow

1. Confirm viewports that matter (often 360 / 768 / 1024 / 1280+).
2. Define shell regions and sticky behavior.
3. Set grid and gap from tokens or an explicit scale.
4. Specify how navigation transforms (burger vs bar vs sidebar).
5. Test mental models: long titles, dense tables, forms, images.
6. Document container-query opportunities for components.

## Anti-patterns

- Desktop-only fixed widths
- Horizontal scroll on common phones
- Breakpoints that only match iPhone marketing sizes
- Hiding critical CTAs behind menus on mobile without alternate path

## Handoffs

- Tokens → `design-system`
- Conversion content → `landing-page`
- A11y landmarks/focus → `a11y-build`
- Motion on resize/nav → `web-motion`
