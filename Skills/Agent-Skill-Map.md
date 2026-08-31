---
title: Agent ↔ Skill Map
type: catalog
status: live
created: 2026-08-06
updated: 2026-08-16
maintainer: Page Master
purpose: Route agent personalities to operational skills (portable subset)
related:
  - "[[Skills/Grok-Agent-Personalities]]"
  - "[[Skills/Short-Instructions]]"
  - "[[Skills/Relocate-Consolidate]]"
  - "[[AGENTS.md]]"
---

# Agent ↔ Skill Map

**Personalities** = paste packs. **Skills** = operational procedures.

This portable edition maps the generic agent profiles to the skills that back them. Domain- and tool-specific personas and skills (finance, trading, real estate, tax, hardware, CAD, media, web) live in the private Agentic OS.

**Legacy root `SKILLS.md` / `skills.md`:** do not dual-maintain. Fold in via [[Skills/Relocate-Consolidate]].

---

## Personalities → primary skills

| Agent | Primary skill(s) | Supporting |
|-------|------------------|------------|
| **PHD Grok** | `first-principles-research` | GrokRarian, Page Master |
| **GrokClaude** | coding / architecture practice | `harness-loop-graph` |
| **GrokRarian** | `grokrarian` | all Custom overlays |
| **Page Master** | `page-master` | GrokRarian, `diagram-design` |

---

## Codex-pack personalities → primary skills

Portable names used in codex-mind-pack `personalities/`. Same skills; neutral branding on the public surface.

| Pack personality | Primary skill(s) | Supporting |
|------------------|------------------|------------|
| **Librarian** | `grokrarian` | Page Master |
| **Page Master** | `page-master` | Librarian, `diagram-design` |
| **Lessons Learned** | `lessons-learned` | Page Master, Librarian |
| **Accountant** | `accountant` | — |
| **PHD Researcher** | `first-principles-research` | Librarian, Page Master |
| **FDE** | `fde` | `harness-loop-graph` |

---

## Cross-cutting skills

| Skill | Use |
|-------|-----|
| `harness-loop-graph` | Agent architecture (Harness · Loop · Graph) |
| `diagram-design` | Architecture visuals |
| `fde` | Production AI tools |
| `first-principles-research` | Deconstruct to axioms; evidence hierarchy |
| `accountant` | Token/credit/USD cost |
| `lessons-learned` | After-action on complete or major revision |
| `page-master` | Guides, runbooks, short packs |
| `grokrarian` | Orient, locate, route knowledge |
| `human-review` | Human-in-the-loop review gate |
| `load-master` | Multi-agent write sequencing (GitHub) |
| `obsidian-markdown` | Portable vault markdown conventions |

---

## Design rules

1. Personality ≠ skill.
2. No double doctrine across domain boundaries.
3. New skills need Short-Instructions (or pack personality) **and** this map (and pack map when work-portable).
4. **No parallel root `SKILLS.md`.** Relocate/consolidate via [[Skills/Relocate-Consolidate]].
5. Permanent Vault skill notes still go through REVIEW_QUEUE unless the user explicitly directs an update.
6. Pack stays work-safe: personal finance, tax, RE, and named product catalogs do not ship on a public origin.

---

## Sync with codex-mind-pack

| Surface | Path |
|---------|------|
| Vault (this file) | `Skills/Agent-Skill-Map.md` — portable subset |
| Pack | `Skills/Agent-Skill-Map.md` — work subset + relocate procedure |

After approved Vault skill changes that affect work agents, update the pack on user request (Vault → pack).
