---
name: form-ux
description: Design form and multi-step flow UX — validation, progressive disclosure, checkout-like patterns, error recovery. Use for form design, multi-step form, checkout flow, onboarding steps, or validation UX.
---

# Form UX

Design forms and multi-step flows that get completed—not abandoned.

## Triggers

form design · multi-step form · checkout flow · onboarding form · validation UX · signup form · wizard · progressive disclosure

## Principles

1. **Ask only what’s needed now** — defer optional fields.
2. **Inline help over tooltips walls** — clarify before error.
3. **Errors are recoverable** — name the field, the problem, and how to fix.
4. **Progress is honest** — step counts match real effort; don’t fake 99%.
5. Accessible by default — hand structure to `a11y-build`.

## Patterns

| Pattern | When |
|---------|------|
| Single column | Most marketing/signup forms |
| Inline validation | After blur or submit—not on every keystroke for all fields |
| Progressive disclosure | Advanced options hidden until needed |
| Stepper | 3–7 steps with clear back/save |
| Address/payment blocks | Isolated, reusable, PCI-aware placement notes |
| Magic link / OTP | Reduce password friction when appropriate |

## Workflow

1. List required data vs nice-to-have; map to steps.
2. Draft field order (identity → intent → details → confirm).
3. Define validation rules and error copy.
4. Specify submit states: loading, success, partial failure.
5. Mobile: large targets, correct `inputmode`/autocomplete.
6. Edge cases: paste, autofill, network fail, session expiry.

## Output

- Step/field map
- Validation + error message table
- CTA labels per step
- Risks (drop-off points, legal consent)

## Handoffs

- Page chrome → `landing-page` / `responsive-shell`
- A11y labels/focus → `a11y-build`
- Tokens for inputs → `design-system`
