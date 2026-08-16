---
name: web-motion
description: Intentional web motion and micro-interactions — enter/exit, feedback, state change, reduced-motion. Use for micro-interactions, UI animation, motion design, page transitions, or prefers-reduced-motion.
---

# Web Motion

Add **purposeful** motion that clarifies state—not ornamental animation.

## Triggers

micro-interactions · UI animation · motion design · page transition · reduced motion · hover feedback · loading motion · scroll-driven 3D · three.js scroll

## Principles

1. **Meaning first** — motion explains enter/exit, success/fail, attention—not “alive” for its own sake.
2. **Fast and subtle by default** — UI feedback often 100–200ms; longer only for spatial storytelling.
3. **Honor `prefers-reduced-motion`** — provide reduced or zero-motion equivalents (critical for 3D/scroll worlds).
4. **Don’t fight layout** — avoid animating large layout reflows; prefer opacity/transform.
5. Tokens for duration/easing live in `design-system` when present.
6. **Scroll-synced spatial motion** — when using real-time 3D (Three.js / R3F / WebGL) as a scroll narrative, keep payload lean, camera/scene tied to scroll progress, and always ship a static or reduced-motion fallback. Prefer this over multi-megabyte scroll-video when the story is spatial.

## Common cases

| Case | Guidance |
|------|----------|
| Button/press | Quick opacity/scale; keep focus ring stable |
| Toast/status | Slide+fade; don’t block main task |
| Modal | Fade backdrop; slight rise; focus management via `a11y-build` |
| List load | Stagger sparingly; prefer skeleton over long choreography |
| Page transition | Optional; never delay LCP for decoration |
| Marketing hero | One restrained motion max; pixelslop will flag excess |
| Scroll-driven 3D | Camera/scene progress mapped to scroll; AI-assisted texture/lighting/alpha iteration is fine; measure disk + gzipped size; reduced-motion must not strand the user |

## Workflow

1. Identify state changes that confuse without feedback.
2. Choose the smallest motion that communicates.
3. Specify duration, easing, properties (transform/opacity preferred).
4. Define reduced-motion behavior.
5. Note performance risk (many simultaneous animations, blur, large filters, heavy 3D assets).

## Anti-patterns

- Infinite ambient loops on marketing pages
- Animating width/height of large regions
- Motion as only affordance (no static cue)
- Ignoring reduced-motion
- Heavy scroll-video when a lightweight 3D/canvas world would carry the same narrative at a fraction of the size

## Handoffs

- System durations → `design-system`
- Focus during animated UI → `a11y-build`
- Landing restraint + media budget → `landing-page` + `pixelslop`
