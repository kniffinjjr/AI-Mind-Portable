---
name: nextjs-app
description: Build Next.js App Router applications — layouts, server/client components, metadata, routing, data fetching, and caching mental model. Use for Next.js, App Router, RSC, next metadata, or Next.js site/app implementation.
---

# Next.js App

Implement **Next.js App Router** apps with a clear server/client split, typed boundaries, and SEO-aware metadata. Pairs with `react-ui` for component internals.

## Triggers

Next.js · App Router · RSC · React Server Components · next metadata · next.js app · next layout · route handler

## Principles

1. **Server Components default** — add `"use client"` only for interactivity, browser APIs, or hooks.
2. **Push data fetching toward the server** — avoid client waterfalls when RSC/loader patterns suffice.
3. **Layouts for chrome, pages for content** — nested layouts share UI; don’t re-fetch blindly in every leaf.
4. **Metadata is a feature** — titles, descriptions, Open Graph via the Metadata API (`seo-page` alignment).
5. **Caching is intentional** — know static vs dynamic; don’t sprinkle `no-store` without reason.
6. Compose with `react-ui`, `design-system`, `a11y-build`; QA with `better-interface` + `pixelslop`.

## App Router map

| Concern | Where |
|---------|--------|
| Routes | `app/**/page.tsx` |
| Shared chrome | `layout.tsx` (root + nested) |
| Loading UI | `loading.tsx` |
| Error UI | `error.tsx` (client), `global-error.tsx` |
| Not found | `not-found.tsx` |
| API / mutations | `route.ts` handlers or server actions |
| Client islands | Files with `"use client"` |

## Server vs client

**Stay on the server when you can:** data reads, secrets, heavy deps, static markup.

**Client when you must:** event handlers, `useState`/`useEffect`, browser-only APIs, certain third-party widgets.

Pattern: server page fetches → passes serializable props → small client children for interaction.

## TypeScript defaults

- Page/layout props typed (`{ children: React.ReactNode }`, `params`, `searchParams` per current Next types).
- Server actions and route handlers: explicit request/response types.
- Don’t import client-only modules into server files.

## Data & caching (mental model)

- Default: cache where Next caches; revalidate by time or tag when content freshness matters.
- Dynamic: cookies/session, personalization, `no-store` when required.
- Prefer one clear data ownership story per route over ad-hoc `fetch` in every component.

## Metadata & SEO

- `export const metadata` or `generateMetadata` for title/description/OG.
- Align H1 and titles with `seo-page`.
- Canonical/alternates when duplicate routes exist.

## Anti-patterns

- `"use client"` on the root layout “just in case”
- Fetching the same data in layout and page without coordination
- Shipping secrets to the client
- Ignoring `loading.js` for slow server routes
- Client-side only SPA habits inside App Router (empty server shell)

## Workflow

1. Map routes to `site-ia` (if multi-page).
2. Define root layout (nav, fonts, providers—minimize client providers).
3. Implement pages as Server Components first.
4. Extract client islands (`react-ui`).
5. Add metadata; wire `seo-page` concerns.
6. Forms/actions: progressive enhancement where possible (`form-ux`).
7. A11y landmarks/focus (`a11y-build`).
8. QA pass: `better-interface`, `pixelslop`.

## Output

- Route/file structure
- Server vs client boundary notes
- Metadata plan
- Data/caching notes
- Open risks

## Handoffs

- Component patterns → `react-ui`
- Marketing/PDP content structure → `landing-page` / `product-page`
- Design tokens → `design-system`
- Docs → Page Master
