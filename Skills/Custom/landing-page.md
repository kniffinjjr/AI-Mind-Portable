---
name: landing-page
description: Design and refine conversion-focused landing pages and marketing homepages. Section patterns, CRO hierarchy, proof, pricing, FAQ, and single primary CTA. Use for landing page, homepage, signup page, marketing site, product page hero, or CRO layout work.
---

# Landing Page

Build and improve **conversion-focused** web pages (landing, homepage, signup, campaign). Optimize for clarity of offer and one primary action—not decoration.

## Triggers

landing page · homepage · signup page · marketing site · hero section · CRO · conversion page · waitlist page · product marketing page

## Principles

1. **One primary CTA** above the fold and repeated after proof.
2. **Offer clarity in 5 seconds** — who it’s for, what it does, why now.
3. **Proof before pitch depth** — logos, numbers, quotes, demos near the ask.
4. **Section discipline** — every block has a job; delete ornamental sections.
5. **Performance-first media** — prefer lightweight real-time 3D / canvas (or optimized stills) over heavy scroll-video when the narrative is spatial. Typical scroll-video sites run 20–100 MB; a well-built Three.js/WebGL scroll world can ship under 1 MB (code + geometry) plus images. Measure payload; do not trade conversion clarity for spectacle.
6. Hand off polish to `better-interface` and AI-slop QA to `pixelslop`.

## Core section library

| Section | Job |
|---------|-----|
| Hero | Outcome + audience + primary CTA (+ optional secondary) |
| Social proof | Logos, counts, short quotes |
| Problem / stakes | Make status quo costly |
| Solution / how it works | 3–5 steps or pillars max |
| Features → benefits | Benefit-led; feature as support |
| Demo / product visual | Show, don’t only tell |
| Pricing (if any) | Clear tiers; recommended path |
| FAQ | Top objections only |
| Final CTA | Repeat offer + action |
| Footer | Legal, nav, trust links |

## Workflow

1. Clarify offer, audience, primary action, and constraints (brand, stack, single page vs site).
2. Outline section order for the goal (signup, purchase, demo, waitlist).
3. Draft structure (wireframe-level) then copy + layout.
4. Apply mobile-first; ensure CTA reachable without hunt.
5. Run CRO checks: competing CTAs, weak proof, vague headline, long form friction.
6. Check media budget (video vs 3D vs stills) against load and clarity.
7. Optional: `pixelslop` scan; `better-interface` full review before ship.

## Output

- Page outline (sections + purpose)
- Key copy blocks (headline, sub, CTA labels)
- Layout notes (hierarchy, proof placement)
- Open risks (trust gaps, speed, compliance)

## Handoffs

- Tokens / consistency → `design-system`
- Multi-page nav → `site-ia`
- Forms on page → `form-ux`
- A11y defaults → `a11y-build`
- Motion / scroll worlds → `web-motion`
- Docs/long copy → Page Master
