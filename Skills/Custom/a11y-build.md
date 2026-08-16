---
name: a11y-build
description: Build accessible web UI defaults — focus, ARIA patterns, landmarks, skip links, forms, live regions. Complements better-interface audits with implementation patterns. Use for accessible components, a11y defaults, ARIA, keyboard navigation, or WCAG implementation.
---

# A11y Build

Implement **accessible defaults** so pages and components work with keyboard, screen readers, and contrast needs—not only pass a visual review.

## Triggers

a11y · accessibility implementation · ARIA · keyboard nav · focus management · skip link · WCAG build · accessible components

## Principles

1. **Native first** — correct HTML elements before ARIA.
2. **Focus visible and logical** — never `outline: none` without a replacement.
3. **Name, role, value** — every control exposes an accessible name.
4. **Don’t only audit** — `better-interface` finds issues; this skill ships patterns.
5. **Prefer proven patterns** — dialog, tabs, disclosure, menu from established references over invented ARIA.

## Pattern checklist (minimum)

| Area | Defaults |
|------|----------|
| Landmarks | `header`, `nav`, `main`, `footer`; one `h1` |
| Skip link | First focusable control to `#main` |
| Icons | Decorative `aria-hidden`; actionable need text/name |
| Buttons vs links | Actions = `button`; navigation = `a[href]` |
| Forms | Labelled fields, `aria-invalid`, error text tied via `aria-describedby` |
| Dialogs | Focus trap, Escape closes, return focus on close |
| Live regions | Polite status for async results; assertive sparingly |
| Motion | Respect `prefers-reduced-motion` (`web-motion`) |

## Workflow

1. Identify interactive surfaces (nav, forms, modals, tables).
2. Choose native structure; add ARIA only for gaps.
3. Specify tab order and focus move on view changes.
4. Contrast roles from `design-system`; flag failures.
5. Provide code-level patterns (HTML/JS behavior notes).
6. Suggest verification: keyboard-only pass, screen reader smoke, axe/lighthouse — label **Not verified** if not run.

## Handoffs

- Full UI critique → `better-interface`
- Form flows → `form-ux`
- Tokens/contrast roles → `design-system`
- Marketing page structure → `landing-page`
