---
title: Changelog
type: system
created: 2026-08-02
updated: 2026-09-01
---

# Changelog

## 2026-09-01

- **Toolbox/Tailcat:** Account-free WireGuard/netcat harness (Tailscale data plane, no control plane). Catalogued for Grok Bot ↔ desktop bridging and future SmaRV coach-LAN gateway reachability (not on-ESP). Draft runbook: `Drafts/Tailcat-Grok-Bot-Desktop-Bridge.md`. Radar: Rising.

## 2026-08-16

- **Portability / privacy pass:** Removed named project folders and instance pointers (hardware, rental, employer PDM, career, game GDD). Stripped machine paths, legal name, email, Imagine personal library, recruiter profile anchors. Radar queries are a template. README privacy contract. Adopters clone methodology only.
- **Grok Build MCP catalog:** Toolbox entries + Custom overlays for FreeCAD, KiCad, Blender, OBS, Docker, Unity; ComfyUI as HTTP-only. Runtime skills remain in `$GROK_HOME/skills/`. `.gitignore` for `PATHS.md`.

## 2026-08-14

- **HLG hard-stop contract scoped to skill-session only** (user: “approve the vault review”). Detailed bounds table, progress rule, anti-meta-loop, and single-pass exit now apply *only while the `harness-loop-graph` skill is active*. High-level HLG principles remain core. Fixes leakage that was forcing every simple task through multi-iteration evidence checks and slowing local Grok Build. Updated: `Concepts/Harness-Loop-Graph-Architecture.md`, `Skills/Custom/harness-loop-graph.md`, `AGENTS.md`. Parallel changes already applied in local skill + public `codex-mind-pack`.

## 2026-08-12

- **harness-loop-graph Skill Execution Contract (hard stops)** — max 3 tool attempts/action, 1 identical-fail retry, progress = new evidence, single-pass exit, anti-meta-loop. Local SKILL.md + `Skills/Custom/harness-loop-graph.md` + `Concepts/Harness-Loop-Graph-Architecture.md`. Codex: `core/Harness-Loop-Graph.md`.
- **Run Knowledge Extract template** — per-run nodes/edges residue so agent findings do not die in the session trash can. `Templates/Run-Knowledge-Extract.md`; wired into `Methodology/Knowledge-Structure-Choices.md`. Instance path: `{MY|WORK}_MIND/Projects/<slug>/knowledge/extract/YYYY-MM-DD-<slug>.md`. Codex: `templates/Run-Knowledge-Extract.md`.
- **Radar / Bookmarks**
  - Bookmarks: Reducer Engineering; Complete System Design; Persistent graph residue (antpalkin session trash can / swarm map)
  - Watchlist: Statewave (Rising); SolidWorks MCP; gbrain; mnemon; **Grok Bot** cluster (Rising) + Automations + 4.6 + OpenMausBot
  - Discover rule: major platform agent products in-scope (score harness/loop patterns, not only OSS)
- **Doctrine locked:** intentional residue + extract-after-meaningful-run is mandatory process; graph DB optional later.

## 2026-08-10

- **Skills map + pack alignment (user: update Codex Mind Pack then AI Mind Vault):**
  - `Skills/Agent-Skill-Map.md` expanded: work/Codex pack personalities table; lessons-learned + accountant in cross-cutting; pack sync section; no parallel root `SKILLS.md` rule
  - New `Skills/Relocate-Consolidate.md` — discover / classify / merge / tombstone legacy `SKILLS.md` catalogs (Vault + pack destinations)
  - `00_Home.md` links Relocate-Consolidate, lessons-learned, accountant; Agent Instruction Surface points at pack `Skills/`
  - Public pack already has work-safe `Skills/Agent-Skill-Map.md` + `Skills/Relocate-Consolidate.md` + `SKILLS_RUNTIME` PATHS key

## 2026-08-07

- **Website design cluster** (Custom overlays + Short-Instructions + Agent-Skill-Map):
  - `landing-page`, `product-page`, `design-system`, `site-ia`, `responsive-shell`
  - `a11y-build`, `form-ux`, `web-motion`, `seo-page`
- **Web implementation cluster:**
  - `react-ui` (TypeScript props, composition, hooks discipline)
  - `nextjs-app` (App Router, RSC vs client, metadata, caching mental model)
- Pipeline documented: design → implement → QA (`better-interface` + `pixelslop`)
- **Sources:** `NVIDIA-Cross-Model-KV-Cache-Transfer-2026-08-07` (arXiv:2608.03893) — closed-form same-family KV transfer; notes for future self-hosted multi-size serving
- **Memory Engineering:** linked Nvidia serving extension + re-open criteria for work-hosted fleets

## 2026-08-06

- **Agent-supporting skills + Agent ↔ Skill Map (user direction):**  
  - New local skills: `first-principles-research`, `strategic-buyer`, `fiduciary-investor`, `hardware-forge`, `tx-fl-real-estate`  
  - Vault overlays under `Skills/Custom/`; map at `Skills/Agent-Skill-Map.md`  
  - Routes PHD/Deals/Bogle/Forge/Mogul personas to operational skills; GrokPA → existing CPA skill; EliteTrader → options/day-trader skills  
  - Short-Instructions + Home updated  
- **Grok Agent Personalities catalog:** `Skills/Grok-Agent-Personalities.md` (8 ≤4000-char packs with triggers)  
- **Page Master + Short-Instructions catalog**  
- **Tenex MetaHarness source note**  
- **DEV · TEST · PROD + IaC methodology**  

## 2026-08-04

- Architecture Visual; Saboo / 0xWast3 / Fran sources; Handoff Artifact Spec; RAI + Probe Suite  

## 2026-08-03

- Graph Engineering + AGENTS.md; cost-efficient coding context; Anthropic course source; Foreman clipboard  

## 2026-08-02

- Vault founded; Memory Engineering; FDE; process porn / reward hacking; Drive migration  
