---
title: AI-Powered Premium Website Generation
type: concept
created: 2026-08-02
source: adapted from Viktor Oddy / Motionsites workflows + Grok Imagine practice
tags: [design, web, motion, grok-imagine, portfolio, polish]
related: ["[[Memory-Engineering]]", "[[Forward-Deployed-Engineering]]", "[[Eval-Engineering]]"]
status: live
---

# AI-Powered Premium Website Generation

**Agency-grade sites are not “one prompt → finished page.” They are a constrained pipeline: identity lock → structure → type → space → motion → assets → verify.**

This note captures the usable core of the **Viktor Oddy / Motionsites** cinematic-web playbook (Claude-era design-to-build loops, motion-first landing pages, anti-generic UI) and **adapts it for Grok Build + Grok Imagine** on industrial / portfolio work.

## Why Most AI Sites Look Cheap

| Failure mode | Symptom | Fix in this pipeline |
|---|---|---|
| Generic type stack | Inter + 16px everywhere | Lock a distinctive family pair; enforce type scale |
| Uniform spacing | Every section feels like the same card grid | Vertical rhythm tokens; uneven but intentional gaps |
| Motion as decoration | Random fade-ins, bounce, parallax noise | 200–300ms reveals only; hover micro-interactions on interactive surfaces |
| Asset mismatch | Stock photos fight the brand | Generate a **style-locked** asset set (same void, accent, lighting) |
| One-shot generation | Model invents a new aesthetic each pass | Identity brief first; sequential polish; never re-roll identity mid-stream |

## Source Pattern (Motionsites / Oddy lineage)

Public teaching from **@viktoroddy** (Design Rocket, [motionsites.ai](https://motionsites.ai/)) centers on:

1. **Cinematic / motion-first web** — sites that feel directed (scroll storytelling, deliberate timing), not template SaaS.
2. **Prompt libraries + build loops** — design intent → implementation prompt → iterative polish with Claude (or peer models).
3. **Anti-generic bar** — reject default UI chrome, default fonts, and “AI landing page” spacing.

We do **not** copy Motionsites product internals. We extract the **engineering discipline**: identity constraints + ordered polish + motion as a late, light layer.

## Adapted Pipeline (Grok Build + Imagine)

### Phase 0 — Identity lock (do not skip)

Write a one-page brief before HTML:

- **Palette** (exact hex), **void vs surface**, accent usage rules  
- **Type** (display / body / mono) — ban residual Inter unless intentional  
- **Motifs** (e.g. redacted bars, stamps, CAD explode, fluoro lime on dark industrial)  
- **Tone** (public-info only, classification language, CTA voice)  
- **Ban list** (generic soft shadows, purple gradients, bounce easings, stock lifestyle photos)

Example lock used on portfolio: void `#2A2A2A`, fluoro lime `#C6FF00`, JetBrains Mono stamps, redacted bars, Three.js exploded CAD background.

### Phase 1 — Structure first

Sections, hierarchy, and information architecture only. No polish. No motion. Content must survive as plain document.

### Phase 2 — Sequential polish (order is mandatory)

```
type  →  spacing  →  motion
```

1. **Type** — scale, weight, tracking, mono vs sans roles, line-height.  
2. **Spacing** — vertical rhythm, section padding, card internal padding, max-width.  
3. **Motion** — last. Subtle scroll-reveals (200–300ms, ease-out, small translate/opacity). Card hover micro-interactions (border, lift, accent edge). Prefer `IntersectionObserver` over heavy libraries.

**Rule:** If type or space is wrong, motion makes it look worse. Do not animate broken layout.

### Phase 3 — Assets via Grok Imagine

Use Imagine when the asset is **look-driven** (product stills, atmospheric industrial, CAD aesthetic). Use **code** when accuracy of labels/numbers/structure matters (configurators, diagrams, metrics).

**Style-lock formula for a set:**

1. Same background family (dark void / fog / job-site dusk).  
2. Same accent language (fluoro lime on edges, hydraulics, sensors — sparingly).  
3. Same “camera” quality (cinematic still vs product photo vs technical isometric).  
4. Generate **related subjects in parallel** only when they share the lock; otherwise generate base → `image_edit` variants.

**Portfolio asset triad (example prompts):**

| Role | Prompt spine |
|---|---|
| TBM / underground | Photorealistic cinematic still; small-diameter TBM; wet rock; industrial lighting; fluoro lime on hydraulics/sensors; dark fog |
| Trailer / product | Premium industrial product photography; heavy open dump trailer; engineered beam; dusk job site; dramatic side light |
| Exploded CAD match | Technical exploded isometric; gear/shaft/flange/plate/bracket; dashed assembly lines; void bg; fluoro edge highlights |

Wire into `/assets/` with `CREDITS.txt` noting **AI-generated, style-matched** vs third-party public photos.

### Phase 4 — Interactive systems (when relevant)

Elevate configurators / tools as **systems-thinking demos**, not toys:

- Modular BOM mental model (e.g. Tongue/Neck + Deck + Tail)  
- Visible state, constraints, and composition  
- Same visual language as the rest of the site (borders, mono labels, accent CTAs)

Build interactive demos in **HTML/CSS/JS** (or engine), not as Imagine images of UIs.

### Phase 5 — Performance & mobile

- Three.js / WebGL: **mobile fallback** (static frame, reduced geometry, or disable + haze only).  
- Cap `devicePixelRatio`, skip mousemove parallax on touch, `prefers-reduced-motion`.  
- Lazy-load images; keep motion CSS-only where possible.

### Phase 6 — Eval (cheap checks)

Before ship, score:

- [ ] Identity still matches Phase 0 (no Inter creep, no purple SaaS)  
- [ ] Type scale is strict; stamps/mono used for meta only  
- [ ] Vertical rhythm feels intentional on mobile  
- [ ] Motion is subtle and disableable  
- [ ] Assets match accent + void  
- [ ] Public-info / classification constraints held  
- [ ] CTAs for contract/contact are obvious and on-brand  

This is lightweight [[Eval-Engineering]]: the verdict changes the next edge (fix, space, asset, or motion), not a dashboard vanity score.

## Sequential Polish Checklist (copy into PR)

```
[ ] Identity brief frozen
[ ] Structure complete without motion
[ ] Type: scale, families, tracking
[ ] Spacing: section + card rhythm
[ ] Motion: 200–300ms reveals + card hover only
[ ] Imagine assets style-locked and credited
[ ] Mobile WebGL fallback
[ ] Reduced-motion respect
[ ] CTA strength (contract / contact)
[ ] Ban list re-checked
```

## Relation to This Vault

- **[[Forward-Deployed-Engineering]]** — same spirit: demo quality dies on contact with real constraints (brand, mobile GPU, public-info policy). Ship what survives.  
- **[[Eval-Engineering]]** — polish is a loop with a verdict, not infinite prompt churn.  
- **[[Memory-Engineering]]** — store identity locks and prompt spines so the next site does not re-invent the brand.

## Practical Defaults (Grok stack)

| Concern | Default |
|---|---|
| Implementation | Grok Build on static HTML/CSS/JS or existing repo |
| Assets | Grok Imagine (`image_gen` / `image_edit`); style-lock across set |
| Motion | CSS + IntersectionObserver; 200–300ms; no library unless needed |
| 3D | Three.js optional; always provide mobile/static path |
| Fonts | Distinctive sans + mono; ban leftover Inter |
| Approval of identity | Human lock on palette/type/motif before bulk generation |

## Anti-Patterns

- Regenerating the whole page because one section feels flat  
- Adding scroll libraries for three fade-ins  
- Mixing stock photos with Imagine assets without a shared grade  
- Animating layout that still uses default Tailwind “gap-4 everywhere”  
- Treating Motionsites prompt packs as a substitute for an identity brief  

## First Application

Primary application: the adopter's own portfolio or product site. Identity brief lives in My Mind, not this Vault.

---

**Adaptation note:** Motionsites/Oddy content is public marketing and teaching. This vault note is an **internal engineering adaptation** for Grok workflows — not a dump of paid prompt packs.
