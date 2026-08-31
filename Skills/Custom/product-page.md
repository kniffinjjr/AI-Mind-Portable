---
name: product-page
description: Design high-converting product detail pages (PDPs) from product facts and images — offer stack, proof, variants, upsells, objections, sticky CTA. Use for product page, PDP, ecommerce product page, photo to product page, or upsell bundle layout on a product page.
---

# Product Page (PDP Conversion)

Specialize conversion design for **product detail pages**. Input is product truth (facts + images); output is a structured, honest offer page—not generic storefront mush.

## Triggers

product page · PDP · ecommerce product page · photo to product page · product detail page · upsell on PDP · bundle layout · variant selector UX

## Principles

1. **Product truth first** — claims must map to real attributes; no invented reviews, stock, or timers.
2. **One primary purchase action** — sticky or repeated Add to cart / Buy; secondary actions stay secondary.
3. **Offer stack is structured** — price anchor, variants, supply tiers, bundles as explicit grammar.
4. **Proof is specific** — outcome, constraint, or verified count; reject star-walls with no substance.
5. Hand visual QA to `pixelslop` and full UI review to `better-interface`.

## Input contract

Minimum:

- Product name + what it is
- Primary image(s) (hero, optional lifestyle/detail)
- Price and currency
- Key benefits / specs the seller will stand behind

Optional:

- Variants (size, flavor, color)
- Bundle or upsell candidates
- Brand tokens (`design-system`)
- Constraints (regulated claims, shipping, returns)

## Section library (default order)

| Section | Job |
|---------|-----|
| Hero | Product visual + name + primary benefit + price cue + primary CTA |
| Proof strip | Specific social proof (not empty stars) |
| Offer stack | Variants, supply length, good/better/best or single clear offer |
| Benefits → proof | Benefit-led bullets tied to real features |
| Details / specs | Scannable facts; materials, contents, limits |
| Upsells | Complementary only; clear “add” not forced |
| Objections / FAQ | Shipping, returns, who it’s for / not for |
| Sticky CTA | Mobile-friendly purchase affordance |

## Offer grammar (upsells & tiers)

- **Anchor** — show reference price only when real (MSRP, prior price policy).
- **Variants** — one decision dimension at a time when possible.
- **Bundles** — complementary items; state savings honestly.
- **Post-add bumps** — optional; never block checkout.
- **Guarantees** — only if merchant actually offers them.

## Anti-patterns (reject or flag)

- Fake countdown / false scarcity
- Invented review counts or testimonials
- Six competing CTAs above the fold
- Health/earnings claims without substantiation
- Auto-checked upsells
- Stock “AI storefront” purple-gradient genericism → `pixelslop`

## Workflow

1. Lock product truth and claim boundaries.
2. Choose section order for the offer type (single SKU vs subscription vs bundle-heavy).
3. Draft outline + key copy (headline, benefit bullets, CTA labels).
4. Specify variant UX and upsell rules.
5. Align tokens with `design-system` if present; shell with `responsive-shell`.
6. A11y: name controls, focus, errors → `a11y-build`.
7. SEO fields (title, H1, description) → `seo-page`.
8. QA: `pixelslop` then `better-interface`.

## Output

- Section outline with purpose per block
- Copy blocks (hero, benefits, FAQ starters)
- Offer stack rules (variants, tiers, upsells)
- Proof plan (what is allowed vs forbidden)
- Open risks (claim, trust, mobile CTA)

## Handoffs

- Marketing/home conversion (non-PDP) → `landing-page`
- Tokens / components → `design-system`
- Multi-page catalog IA → `site-ia`
- Checkout forms → `form-ux`
- Docs / policies → Page Master
