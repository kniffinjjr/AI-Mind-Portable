---
title: Agent ↔ Skill Map
type: catalog
status: live
created: 2026-08-06
updated: 2026-08-16
# last add: local CAD/stream/docker/unity/comfy hubs
maintainer: Page Master
purpose: Route agent personalities to operational skills (Vault full set + pack alignment)
related:
  - "[[Skills/Grok-Agent-Personalities]]"
  - "[[Skills/Short-Instructions]]"
  - "[[Skills/Relocate-Consolidate]]"
  - "[[Skills/Custom/book-skill]]"
  - "[[AGENTS.md]]"
---

# Agent ↔ Skill Map

**Personalities** = paste packs. **Skills** = operational procedures.

Full catalog lives here. Work-safe subset can be published as a separate pack (`Skills/Agent-Skill-Map.md` only).

**Legacy root `SKILLS.md` / `skills.md`:** do not dual-maintain. Fold in via [[Skills/Relocate-Consolidate]].

---

## Grok / personal personalities → primary skills

| Agent | Primary skill(s) | Supporting |
|-------|------------------|------------|
| **PHD Grok** | `first-principles-research` | GrokRarian, Page Master |
| **GrokDeals** | `strategic-buyer` | `hardware-forge` |
| **GrokBogle** | `fiduciary-investor` | CPA skill |
| **GrokEliteTrader** | options + day-trader skills | not fiduciary-investor |
| **GrokForge** | `hardware-forge` | strategic-buyer, kicad |
| **GrokPA** | `worlds-best-cpa-tax-attorney` | tx-fl-real-estate |
| **GrokMogul** | `tx-fl-real-estate` | CPA skill |
| **GrokRarian** | `grokrarian` | all Custom overlays |
| **Page Master** | `page-master` | GrokRarian, diagram-design |

---

## Work / Codex pack personalities → primary skills

Portable names used in codex-mind-pack `personalities/`. Same skills; neutral branding on the public surface.

| Pack personality | Primary skill(s) | Supporting |
|------------------|------------------|------------|
| **Librarian** | `grokrarian` | Page Master |
| **Page Master** | `page-master` | Librarian, diagram-design |
| **Lessons Learned** | `lessons-learned` | Page Master, Librarian |
| **Accountant** | `accountant` | — |
| **PHD Researcher** | `first-principles-research` | Librarian, Page Master |
| **Code Architect** | coding / architecture practice | react-ui, nextjs-app, eval-engineering |
| **Forge Hardware** | `hardware-forge` | strategic-buyer, kicad |
| **FDE** | `fde` | harness-loop-graph, eval-engineering |

---

## Website design cluster (any agent)

| Skill | Use |
|-------|-----|
| `landing-page` | Conversion pages, hero/proof/CTA hierarchy |
| `product-page` | PDP / ecommerce product pages, offer stack, upsells |
| `design-system` | Tokens, type, components, themes |
| `site-ia` | Sitemap, nav, page types, URLs |
| `responsive-shell` | Mobile-first shells and grids |
| `a11y-build` | Accessible implementation patterns |
| `form-ux` | Forms and multi-step flows |
| `web-motion` | Purposeful micro-interactions |
| `seo-page` | Intent, titles, heading structure |
| `better-interface` | Holistic UI review/polish |
| `pixelslop` | AI-generic design QA |

## Web implementation cluster (any agent)

| Skill | Use |
|-------|-----|
| `react-ui` | React components, hooks, TypeScript props, composition |
| `nextjs-app` | App Router, RSC vs client, layouts, metadata, data/caching |

**Design → implement pipeline:** `site-ia` → `design-system` → `responsive-shell` → `landing-page` / `product-page` / `form-ux` → `react-ui` / `nextjs-app` → `a11y-build` → `web-motion` → `seo-page` → `better-interface` + `pixelslop`.

## Cross-cutting

| Skill | Use |
|-------|-----|
| `harness-loop-graph` | Agent architecture |
| `eval-engineering` | Probes / RAI |
| `diagram-design` | Architecture visuals |
| `fde` | Production AI tools |
| `accountant` | Token/credit/USD cost |
| `lessons-learned` | After-action on complete or major revision |
| `page-master` | Guides, runbooks, short packs |
| `grokrarian` | Orient, locate, route knowledge |
| `load-master` | Multi-agent write sequencing (GitHub) |
| `obsidian-markdown` | Portable vault markdown conventions |
| `book-skill` | Local PDF/EPUB → on-demand skill pack under My-Mind or Work-Mind |
| `freecad` | Live FreeCAD via MCP |
| `kicad` | KiCad 10 schematic/PCB via MCP |
| `blender` / `blender-mcp` | Live Blender via MCP |
| `obs` | OBS scenes / stream / record |
| `docker` | Local Docker Engine |
| `unity` | Unity 6 Editor (DYC) |
| `comfyui` | Local ComfyUI HTTP (not MCP) |

---

## Design rules

1. Personality ≠ skill.
2. No double doctrine across domain boundaries.
3. New skills need Short-Instructions (or pack personality) **and** this map (and pack map when work-portable).
4. **No parallel root `SKILLS.md`.** Relocate/consolidate via [[Skills/Relocate-Consolidate]].
5. Permanent Vault skill notes still go through REVIEW_QUEUE unless the user explicitly directs an update (as on 2026-08-10).
6. Pack stays work-safe: personal finance, tax, RE, and named product catalogs do not ship on a public origin.

---

## Sync with codex-mind-pack

| Surface | Path |
|---------|------|
| Vault (this file) | `Skills/Agent-Skill-Map.md` — full set |
| Pack | `Skills/Agent-Skill-Map.md` — work subset + relocate procedure |

After approved Vault skill changes that affect work agents, update the pack on user request (Vault → pack).
