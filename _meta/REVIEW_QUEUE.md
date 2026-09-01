---
title: Review Queue
type: system
created: 2026-08-02
updated: 2026-08-16
status: live
tags: [system, approval, gate]
---

# Review Queue

**All permanent changes to the AI Mind Vault must be proposed here and receive explicit user approval before being applied** — except when the user directly requests the work (then log as approved by direction).

---

## [APPROVED BY DIRECTION] 2026-09-01 — Tailcat Toolbox + Bot↔desktop bridge draft

**Proposed by:** Cursor Cloud agent  
**Type:** toolbox entry + draft runbook + radar row  
**Target:**
- `Toolbox/Tailcat.md` (live)
- `Toolbox/_index.md` (catalog row)
- `Drafts/Tailcat-Grok-Bot-Desktop-Bridge.md` (manual-validate runbook)
- `_meta/AI-Tech-Radar-Watchlist.md` (Rising)
- `_meta/CHANGELOG.md`

**Rationale:** User: “Bring into toolbox, and let’s look into how we can establish a connection with grok bot and my desktop. Future wise this might be a good way to connect the SmaRV thermostats.”

**Impact / Risk:** low (additive catalog + draft; no doctrine change; no binaries in Vault)  
**Status:** **APPROVED BY USER DIRECTION** — 2026-09-01

---

## [APPROVED BY DIRECTION] 2026-08-16 — Privacy / portability pass + MCP catalog

**Proposed by:** Grok Build  
**Type:** remove instance identity + keep portable catalog  
**Target:** Projects/* instance folders deleted; Personal/Work pointers generic; Imagine/recruiter/radar/sources sanitized; README privacy contract.

**Rationale:** User: review the GitHub repo so there is no direct project information and others can grab it without exposing the owner or their system.

**Status:** **APPROVED BY USER DIRECTION**

---

## [APPROVED BY DIRECTION] 2026-08-16 — Local Grok MCP stack + Toolbox/skill overlays

**Proposed by:** Grok Build (this machine)  
**Type:** toolbox + skill overlays + catalog  
**Target:**
- `Toolbox/` FreeCAD-MCP, KiCad-MCP, Blender-MCP, OBS-MCP, Docker-MCP, Unity-MCP, ComfyUI
- `Skills/Custom/` freecad, kicad, obs, docker, unity, comfyui (+ blender-mcp path update)
- `Toolbox/_index.md`, `Skills/Agent-Skill-Map.md`, `00_Home.md`
- `.gitignore` for local `PATHS.md`

**Rationale:** User: clone AI-Mind-Vault from GitHub and commit what is pertinent. Instance paths stay in gitignored `PATHS.md`. Runtime SKILL.md files stay under `$GROK_HOME`; vault holds portable overlays only.

**Impact / Risk:** low (additive catalog; no doctrine change)  
**Status:** **APPROVED BY USER DIRECTION** — “grab AI Mind Vault from my Github and commit what is pertinent”

---

## [APPROVED BY DIRECTION] 2026-08-14 — Scope HLG hard-stop contract (fix for slow simple tasks)

**Proposed by:** Grok (this session)  
**Type:** skill-overlay update + AGENTS.md clarification + core note hygiene  
**Target:**  
- `Skills/Custom/harness-loop-graph.md` (add scope note + narrow triggers / hard negatives)  
- `AGENTS.md` (add explicit separation: high-level HLG principles stay core; detailed bounds table / “narration ≠ progress” / single-pass rules stay skill-only)  
- `Concepts/Harness-Loop-Graph-Architecture.md` (scoped the embedded hard-stop contract)  

**Rationale:**  
After the 2026-08-12 addition of infinite-loop protections, the detailed Skill Execution Contract (bounds table, progress rule, anti-meta-loop) leaked into always-on surfaces and was treated as default turn behavior. Result: simple tasks in local Grok Build took forever.  

**Already applied outside the Vault:**  
- Local skill `$GROK_HOME/skills/harness-loop-graph/SKILL.md`  
- Public pack `codex-mind-pack` (core + AGENTS.md + skill map)  

**Vault changes applied on approval:** kept high-level principles; pulled detailed hard-stop contract back behind the skill activation boundary; strengthened activation negatives.  

**Impact / Risk:** low (corrective scoping; restores previous speed for non-HLG work)  
**Status:** **APPROVED BY USER DIRECTION** — user reply “approve the vault review” (2026-08-14). Applied same day.

---

## [APPROVED BY DIRECTION] 2026-08-06 — DEV · TEST · PROD Environments + Infrastructure-as-Code Pipelines

**Proposed by:** AI Team (Grok / GrokRarian)  
**Type:** new-note (Methodology) + Home link  
**Target:**  
- `Methodology/DEV-TEST-PROD-Environments.md` (promoted from `Drafts/DEV-TEST-PROD-Environments.md`)  
- `00_Home.md` Methodology section  

**Rationale:**  
1. User direction: “I would like to add to our AI mind for project work to establish as DEV, TEST, PROD environments.”  
2. Follow-on: “Implement infrastructure as code pipelines.”  
3. Explicit: “Commit the updates.”  

Environments as first-class harness surfaces; promotion as mid-grain loop with evidence + Writer ≠ Checker + human gate on PROD; IaC pipelines as the preferred executable realization (separate state, plan-before-apply, secrets out of code). Tool-agnostic rules; projects choose concrete tools.  

**Impact / Risk:** low (additive methodology)  
**Status:** **APPROVED BY USER DIRECTION** — applied 2026-08-06

---

## [APPROVED BY DIRECTION] 2026-08-05 — GrokRarian skill + AGENTS.md Boot strengthening

**Proposed by:** AI Team (Grok + Harper + Benjamin + Lucas)  
**Type:** new-skill-note + AGENTS.md update  
**Target:**  
- `Skills/Custom/grokrarian.md`  
- Local: `$GROK_HOME/skills/grokrarian/SKILL.md`  
- `AGENTS.md` (Boot section)  

**Rationale:** User: “Ok draft up the GrokRarian agent instructions” then “Commit”. Addresses the observed cold-start problem (new conversations do not automatically consult the Vault). GrokRarian is a Harness-level librarian that orients against the Vault before inventing principles. No long new SOP needed; existing Agent-Operating-Workflows.md remains the detailed SOP.  
**Impact / Risk:** low (additive skill + clarifying Boot sentence)  
**Status:** **APPROVED BY USER DIRECTION** — applied 2026-08-05

---

## [APPROVED BY DIRECTION] 2026-08-05 — blender-mcp skill + source capture (@irinatoxi demo)

**Proposed by:** AI Team (Grok + Harper + Benjamin + Lucas)  
**Type:** new-note (×2) + local skill  
**Target:**  
- `Skills/Custom/blender-mcp.md`  
- `Sources/irinatoxi-Grok-Blender-MCP-Demo-2026-08-04.md`  
- (local) `$GROK_HOME/skills/blender-mcp/SKILL.md`  

**Rationale:** User: “Ok let’s do it” after review of the high-signal @irinatoxi Grok 4.5 + Blender MCP demo. Captures a production-adjacent visual closed-loop pattern fully consistent with existing KiCAD / SOLIDWORKS skills and HLG architecture. Safety-first design around bpy execution. Local skill already created.  
**Impact / Risk:** low (additive skill overlay + source; no deletions)  
**Status:** **APPROVED BY USER DIRECTION** — applied 2026-08-05

---

## [APPROVED BY DIRECTION] 2026-08-03 — Graph Engineering refinements (Greg Isenberg) + AGENTS.md

**Proposed by:** AI Team (Grok)  
**Type:** concept update + new source + new root AGENTS.md + system logs  
**Target:**
- `Concepts/Harness-Loop-Graph-Architecture.md` (Graph section expanded with Qualifying Test, Diamond, Writer≠Checker, Residue, Start Manual)
- `Sources/Greg-Isenberg-Graph-Engineering-2026-08-03.md`
- `AGENTS.md` (new root file for Codex / Claude Code / portable mind)
- `00_Home.md`, CHANGELOG, APPROVAL_LOG

**Rationale:** User: “Ok let’s commit them” after reviewing the Isenberg video on Graph Engineering for Claude/Codex. Principles align with and operationalize the existing HLG Architecture. AGENTS.md solves the “Codex without GitHub access” adherence problem by making the mind portable.

**Impact / Risk:** low (additive refinements + portable instruction file)  
**Status:** **APPROVED BY USER DIRECTION** — applied 2026-08-03

---

## [APPROVED] 2026-08-03 — Foreman's clipboard / agent ops control surface (@andreysuperior)

**Proposed by:** AI Team (Grok Build)  
**Type:** new-note + light Home link  
**Target:**
- `Sources/Andreysuperior-Foreman-Clipboard-2026-08-02.md`
- `00_Home.md` (Sources list)
**Rationale:** Durable ops-layer thesis: value migrates from “best automation” to the human-facing control surface where agent outputs land (content inbox + two-way files).  
**Impact / Risk:** low  
**Status:** **APPROVED** — user reply `Ok commit` (2026-08-03). Applied same day.

---

## [APPROVED BY DIRECTION] 2026-08-03 — Cost-efficient coding agent context (code-review-graph)

**Proposed by:** AI Team (Grok Build)  
**Type:** new-note + cross-links  
**Target:**
- `Methodology/Cost-Efficient-Coding-Agent-Context.md`
- `Sources/code-review-graph-savipww-2026-08-03.md`
- Eval Engineering principle 8; Memory Engineering stack row; usage-dashboard rec; Home  

**Rationale:** User: cost is always a factor for coding agents; commit management pattern from savipww / code-review-graph (map once, inject blast radius).  
**Impact / Risk:** low  
**Status:** **APPROVED BY USER DIRECTION** — applied 2026-08-03  

---

## [APPROVED BY DIRECTION] 2026-08-02 — Agent process porn & reward hacking (doodlestein)

**Proposed by:** AI Team (Grok Build)  
**Type:** new-note + updates  
**Target:**
- `Methodology/Agent-Process-Porn-and-Reward-Hacking.md`
- `Sources/doodlestein-Agent-Process-Porn-2026-08-02.md`
- `Concepts/Eval-Engineering.md` (principle 7)
- `Methodology/Failure-Diagnosis-Guide.md` (symptom + mistake 6)
- `00_Home.md`

**Rationale:** User asked to “review it for commit” — high-signal anti-ceremony / multi-agent reward-hacking taxonomy; dual of “no evals, no production.”  
**Impact / Risk:** low  
**Status:** **APPROVED BY USER DIRECTION** (`review it for commit`) — applied 2026-08-02  

---

## [APPROVED BY DIRECTION] 2026-08-02 — AI-Powered Premium Website Generation concept

**Proposed by:** AI Team (Grok Build)  
**Type:** new-note  
**Target:** `Concepts/AI-Powered-Premium-Website-Generation.md`; links in `00_Home.md`  
**Rationale:** Capture Viktor Oddy / Motionsites / sequential-polish (type → spacing → motion) adapted to Grok Imagine + Grok Build for industrial portfolio work.  
**Impact / Risk:** low (new concept; no deletion)  
**Status:** **APPROVED BY USER DIRECTION** — applied 2026-08-02 (compressed brief: write into Concepts path)

---

## [APPROVED BY DIRECTION] 2026-08-02 — Google Drive project + research migration

**Proposed by:** AI Team (Grok Build)  
**Type:** migration  
**Target:** Concepts/, Methodology/, Projects/, Personal/, Work/, Domains/, Sources/, 00_Home.md  
**Rationale:** User requested Drive review and storage of project + recent research in the mind vault.  
**Impact / Risk:** medium (large knowledge import; PII summarized not fully duplicated)  
**Status:** **APPROVED BY USER DIRECTION** — applied 2026-08-02  

---

## [APPROVED BY DIRECTION] 2026-08-02 — Founding of AI_Mind_Vault + Initial Population

**Proposed by:** AI Team (Grok web session)  
**Type:** restructure + migration  
**Target:** Entire vault under this GitHub repo  
**Rationale:** Single-file AI_Mind.md scored ~54%; user directed eval + Obsidian-style clone with approval gate.  
**Status:** **APPROVED BY USER DIRECTION** (founding + subsequent FDE research + Drive migration)

---

## [APPROVED] 2026-08-02 — Memory Engineering concept + two source notes (N01ennn)

**Proposed by:** AI Team (Grok Build)  
**Type:** new-note (×3 promote from Drafts) + light updates to Home / related  
**Target:**
- `Concepts/Memory-Engineering.md`
- `Sources/N01ennn-Memory-Engineer-2026-08-02.md`
- `Sources/LazyGraphRAG-N01ennn-2026-08-02.md`
- `00_Home.md`; related links on MemOS, Harness, Eval

**Rationale:** Memory as engineered system (four lenses, dual metrics, ship order); LazyGraphRAG claim as source.

**Status:** **APPROVED** — user reply `approve` (2026-08-02). Applied same day.

---


## [PENDING] Optional follow-ups

1. Full offline mirror of My Brain Dump.md body  
2. Skills-as-AI-Mind concept note + full custom skills inventory  
3. Import remaining pre-filled HLG checklists per project  

**Status:** AWAITING USER PRIORITY  

---

*(New proposals append above optional follow-ups)*  
