---
title: Toolbox Index
type: catalog
status: live
created: 2026-08-13
updated: 2026-09-06
related:
  - "[[AGENTS.md]]"
  - "[[Skills/Agent-Skill-Map]]"
  - "[[_meta/AI-Tech-Radar-Bookmarks]]"
tags: [toolbox, catalog, grok-build, agents]
---

# Toolbox — External tools agents may use

**Purpose:** Portable catalog of **third-party libraries, CLIs, UIs, and harnesses** the AI team (including **Grok Build**) may recommend or wire into projects. Not skills (behavior) and not Concepts (doctrine).

| Layer | Holds |
|-------|--------|
| **Skills/** | How the agent behaves |
| **Toolbox/** | What external product/tool to reach for |
| **My-Mind / Work-Mind** | Instance config, installs, secrets, project-specific use |

Toolbox notes are **how-to-find-and-use**. They do not store API keys or company IP.

---

## Grok Build / agent rules

1. **Discover:** On UI, frontend, design-system, landing, or “what library?” tasks → read this index first, then the matching entry.
2. **Select:** Prefer tools already listed; add a new entry (or Draft) before inventing a parallel recommendation.
3. **Pair with skills:**
   - UI components → `react-ui` / `nextjs-app` + `design-system` + `landing-page` as needed
   - Motion/effects → `web-motion` + **`pixelslop`** / `better-interface` before ship
   - Structured design systems for agents → [[Toolbox/Refero-Styles]] then own tokens via `design-system`
   - Vault spatial UI → `obsidian-markdown` + Codex `core/Hypervault-Work-Mind` for work
4. **Install location:** Tooling installs and `node_modules` live in **product repos** or Work/My project folders — never as binary blobs inside this Vault.
5. **IP:** Work projects use Work-Mind paths; do not pull personal toolbox experiments into company deliverables without clearance.
6. **Promote:** New toolbox candidates from radar/bookmarks → optional Draft → user direction → live `Toolbox/<Name>.md` + row here.

---

## Catalog

| Tool | Category | When to use | Note |
|------|----------|-------------|------|
| [[Toolbox/Refero-Styles]] | Design systems (agent) | Load real systems as `DESIGN.MD` for tokens/rules | Prefer over screenshot-only inspo |
| [[Toolbox/Magic-UI]] | UI components | Animated React/shadcn paste components for landings/marketing | Pair with pixelslop |
| [[Toolbox/Uiverse]] | UI inspo | CSS/HTML snippet inspiration only | Not a design system |
| [[Toolbox/Design-Reference-Galleries]] | UI inspo | Web/mobile/social/hero/nav/CTA/motion galleries | Human reference wall |
| [[Toolbox/Hypervault]] | Knowledge UI | 3D city over Obsidian / agent launch into project dirs | Work: Codex Hypervault-Work-Mind |
| [[Toolbox/Fakebase-Studio]] | Data / SQL | Schema/SQL exploration candidate for work | Verify AI migrations |
| [[Toolbox/FreeCAD-MCP]] | CAD / harness | Live FreeCAD parts, FEM, STEP | GUI + RPC :9875 |
| [[Toolbox/KiCad-MCP]] | EDA / harness | KiCad 10 schematic/PCB/JLCPCB | Local KiCAD-MCP-Server |
| [[Toolbox/Blender-MCP]] | 3D / harness | Live Blender bpy via addon | Install Blender first |
| [[Toolbox/OBS-MCP]] | Stream / harness | Scenes, stream, record | obs-websocket :4455 |
| [[Toolbox/Docker-MCP]] | Infra / harness | Local Engine + compose | Docker Desktop up |
| [[Toolbox/Unity-MCP]] | Game / harness | Editor scenes + play mode | DYC project :8090 |
| [[Toolbox/ComfyUI]] | Image / harness | Local txt2img/upscale HTTP | Not an MCP |
| [[Toolbox/Open-Source-Stack]] | SaaS / harness | 35 OSS replacements + agent skills | From ihteshamali post 2026-09-06 |

---

## Template for new entries

Use [[Toolbox/_TEMPLATE]] — required fields: name, category, stack, install, when-to-use, when-not, agent skills to pair, links.

---

## Related

- Radar bookmarks often seed candidates: [[_meta/AI-Tech-Radar-Bookmarks]]
- Skills map: [[Skills/Agent-Skill-Map]]
- Operating rules: [[AGENTS.md]] § Skills & Toolbox
