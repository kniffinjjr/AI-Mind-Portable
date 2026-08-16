---
title: Checklist Design — George Hatzis
type: source
status: live
captured: 2026-08-07
source_url: https://www.checklist.design/
x_post: https://x.com/rutu_3/status/2085742929684132085
creator: George Hatzis
related:
  - "[[Skills/Custom/form-ux]]"
  - "[[Skills/Custom/a11y-build]]"
  - "[[Skills/Custom/design-system]]"
  - "[[Skills/Agent-Skill-Map]]"
---

# Checklist Design (George Hatzis)

**URL:** https://www.checklist.design/  
**Captured from:** X post by @rutu_3 (2026-08-07)  
**Figma plugin:** https://www.figma.com/community/plugin/1548640679824154718/checklist-design

## What it is

Free curated library of ~110 interactive UI/UX checklists across:

| Category | Focus |
|----------|--------|
| Design System | Foundations (type, space, color, tokens) + components (Button, Card, Input, Modal, Toast…) |
| Web App | 2FA, Empty State, Onboarding, Multi-step form, Admin, Billing… |
| Website | Pricing, Features, 404, FAQ, Careers… |
| Mobile | Gesture navigation, Tab bar, Action sheet, Paywall, Camera… |
| Flows | Add to cart, Submit form, Reset password, Payment, Error display… |

Each checklist: interactive items + short rationale tips + related links. Designed to catch micro-details before ship.

## Evaluation (2026-08-07)

- **Substance:** High — practical state/edge-case probes, not vaporware.
- **Novelty:** Low–medium — form is excellent; content is best-practice knowledge many teams maintain internally.
- **Role for us:** External **probe library**, not a replacement for authoring skills.

## Selective absorption (done)

Items absorbed into operational skills (not a full clone):

| Skill | What was absorbed |
|-------|-------------------|
| `form-ux` | Field & state probe checklist (labels, errors, multi-step, submit states, empty-in-form) |
| `a11y-build` | Component & interaction probes (focus/dialog, form a11y, perceivable states, gesture alternatives) |
| `design-system` | Component state matrix + ship-gate probe (default/hover/focus/disabled/loading/error/empty/selected) |

## Do not

- Create a standalone "checklist.design agent" skill that only regurgitates lists.
- Freeze the entire library into Vault doctrine (site remains living source).

## When to reopen

- Expanding empty-state or onboarding patterns
- New component types entering `design-system`
- Figma-heavy workflows where the plugin becomes primary
