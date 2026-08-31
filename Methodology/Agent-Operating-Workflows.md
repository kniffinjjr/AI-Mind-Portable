---
title: Agent Operating Workflows
type: methodology
status: live
created: 2026-08-04
updated: 2026-08-16
related:
  - "[[AGENTS.md]]"
  - "[[Concepts/Harness-Loop-Graph-Architecture]]"
  - "[[Methodology/Nested-Cycles]]"
  - "[[Methodology/Failure-Diagnosis-Guide]]"
  - "[[Methodology/Anti-Infinite-Loop-Checklist]]"
  - "[[Methodology/Production-Ready-Design-Checklist]]"
  - "[[Methodology/Handoff-Artifact-Spec]]"
  - "[[Methodology/RAI-Improvement-Loop-Template]]"
tags: [workflow, agents, harness, loop, graph, operating, steps, hard-stops]
---

# Agent Operating Workflows — Step Sequences

**Purpose:** Executable steps every agent follows. Controlling docs define *how*; skills and product repos hold domain residue.

**Always-on constraints (all workflows)**

- Evidence over confidence
- Writer ≠ Checker (do not grade your own output in the same context)
- Intentional residue (files > chat-only state)
- Done is a claim until proof
- Human gate on irreversible / expensive actions
- Prefer existing notes over inventing architecture
- **Numeric hard stops** — see [[Methodology/Anti-Infinite-Loop-Checklist]]; never unbounded retry

---

## Workflow index

| ID | When | Primary output |
|----|------|----------------|
| **W0** Boot | Session start | Model + residue location + gates known |
| **W1** Classify | Before multi-step work | Grain · layer · skill · next W |
| **W2** Design | New system / major revision | Filled templates + checklist + PLAN |
| **W3** Execute | Day-to-day task | Residue + evidence-backed done |
| **W4** Diagnose | Failure / misbehavior | Layer + grain + fix + re-test |
| **W5** Handoff | Cross-agent or cross-session | Handoff artifact |
| **W6** Improve | Real failures or schedule | Probe Ledger + targeted edits |
| **W7** Vault change | Permanent mind edit | REVIEW_QUEUE or authorized commit |

---

# W0 — Boot

**Trigger:** New session or context reset.  
**Goal:** Agent is bound to portable rules and knows where state lives.

| Step | Agent does | Pass criteria |
|------|------------|---------------|
| 0.1 | Load [[AGENTS.md]] (or embedded copy if offline) | Rules treated as binding |
| 0.2 | Note task type: coding · research · domain skill · design · diagnose | Type declared internally |
| 0.3 | Locate residue store: product repo · `Drafts/` · local paths · user Drive | Path known |
| 0.4 | Identify irreversible actions for this domain (send, deploy, money, vault delete, fab) | Human gate list ready |
| 0.5 | If domain skill triggered → load skill note; still obey AGENTS + Nested-Cycles | Skill + architecture both active |

**Stop:** Ready for W1 (or W3 if user gave a single trivial step).  
**Do not:** Skip AGENTS.md · invent a parallel “house style.”

---

# W1 — Classify task

**Trigger:** User request that may need more than one tool call.  
**Goal:** Choose grain and workflow before spending tokens on the wrong topology.

| Step | Agent does | Branch |
|------|------------|--------|
| 1.1 | Parse user goal into one sentence checkable outcome | Goal written |
| 1.2 | Domain skill? (FDE, PDM automation, hardware, …) | **YES** → activate skill; continue with AGENTS constraints · **NO** → 1.3 |
| 1.3 | Single bounded step with clear evidence of done? | **YES** → **W3-inner** · **NO** → 1.4 |
| 1.4 | Score Qualifying Test (count how many are true): multi-step · independent sources · parallelizable · independent check/grade · material risk if wrong · required human approval | **≥3 true** → mid graph candidate · **≤2** → stay loop (better prompt/context) |
| 1.5 | Is the goal to improve the *system* (probes, policies, weights, harness tools)? | **YES** → **W6** · **NO** → 1.6 |
| 1.6 | Emit classification residue if job will span turns | File or status line: `Grain: inner\|mid\|outer` · `Next: W2\|W3\|W4\|W5\|W6` |

**Stop:** Next workflow selected.  
**Do not:** Default to multi-agent graph · start coding before classification on large tasks.

---

# W2 — Design new system

**Trigger:** New agent, major revision, or “architect this.”  
**Goal:** Spec another agent can implement without improvising architecture.

| Step | Agent does | Output |
|------|------------|--------|
| 2.1 | Write domain constraints only (safety, SSOT, unique human gates) in project Overview or PLAN | Constraints list |
| 2.2 | Open [[Methodology/Harness-Engineering-Template]] and fill: purpose, context injection, tools, persistence, execution control, safety, observability | Harness draft |
| 2.3 | For each repeated cycle, open [[Methodology/Loop-Engineering-Template]]; set `Grain: inner\|mid\|outer`; fill trigger, goal, state, action policy, **evidence**, feedback, **hard stops** (default max retries **3** if blank) | Loop draft(s) |
| 2.4 | Run Qualifying Test (same as 1.4) | PASS/FAIL |
| 2.5a | **FAIL** → do not create Graph template; document “loop-only” | Decision residue |
| 2.5b | **PASS** → fill [[Methodology/Graph-Engineering-Template]]: nodes, state schema, edges, joins, cycles (**max iter default 3**), human gates, recovery | Graph draft |
| 2.6 | Apply [[Methodology/Nested-Cycles]]: residue between grains, budget cascade, human gates as mid stops | Nesting notes |
| 2.7 | Walk [[Methodology/Production-Ready-Design-Checklist]]; mark critical H/L/G/E items | Checklist status |
| 2.8 | **Start Manual:** run the topology once by hand (separate files or chats per node); record what broke | Manual run notes |
| 2.9 | Fix template gaps from manual run; only then plan automation | Updated specs |
| 2.10 | Residue package: `PLAN.md` + filled templates + checklist + manual notes | Package complete |

**Stop:** Package exists; user reviewed if production.  
**Forbidden:** Graph before understanding work · Writer=Checker · “keep trying” as stop · harness as dumping ground.

---

# W3 — Execute task

**Trigger:** Classified work to perform.  
**Goal:** Evidence-backed done with residue.

## W3-inner (default)

| Step | Agent does | Pass / fail |
|------|------------|-------------|
| 3i.1 | State **trigger** (why this cycle started) | Logged |
| 3i.2 | State **goal** as checkable terminal state (not “make it better”) | Goal explicit |
| 3i.3 | List allowed tools and budget. **Defaults if unset:** max retries per distinct action = **3**; identical failed action (same tool + intent) = **1** retry then escalate | Policy set |
| 3i.4 | Act via harness tools only within policy | Tool calls traced |
| 3i.5 | Observe **evidence** (tool output, test, schema, citation, commit SHA) | Evidence captured |
| 3i.6 | Goal met? | **YES** → 3i.8 · **NO** → 3i.7 |
| 3i.7 | Emit compact actionable feedback; increment retry; if max retries, identical-fail limit, or budget → **escalate** (stop) | Feedback or escalate |
| 3i.8 | Write residue artifact (file, table, log pointer) | Residue path exists |
| 3i.9 | Declare done only with pointer to evidence | Done = proof |

**Hard stops (defaults):** success evidence · **max 3 retries** · **1 identical-fail retry** · budget · timeout · irrecoverable error · human escalate.  
**Does not count as evidence:** “I am done,” “looks good,” confidence alone, platform “already completed” without SHA/proof.  
Full table: [[Methodology/Anti-Infinite-Loop-Checklist]].

## W3-mid (pipeline or Diamond)

| Step | Agent does | Pass / fail |
|------|------------|-------------|
| 3m.1 | Load stage list (static pipeline) or board (dynamic) | Topology known |
| 3m.2 | For **each stage:** run as W3-inner **or** pause for human gate | Stage complete or gated |
| 3m.3 | After each stage: emit residue the next stage needs (score row, PLAN, patch, Handoff fields if agent boundary) | Residue out |
| 3m.4 | Parallel stages: independent contexts; join with explicit merge strategy | Merge documented |
| 3m.5 | **Diamond research default:** Planner → parallel researchers → **Skeptic** (attacks evidence) → Merge survivors → Human gate | Order respected |
| 3m.6 | Mid stop when: pipeline complete · gate reject · budget · user abort | Stop reason logged |
| 3m.7 | Final residue: status + artifact index + ruled-out paths if any | Package |

**Do not:** Skip Skeptic on high-stakes research · merge without strategy · treat human gate as optional when step 0.4 listed it.

## W3-outer

Do not run on ordinary tasks. Use **W6**.

---

# W4 — Diagnose failure

**Trigger:** Bug, loop, wrong output, silent skip, unauditable behavior.  
**Goal:** Fix the owning layer and grain; leave a probe if reusable.

| Step | Agent does | Output |
|------|------------|--------|
| 4.1 | Reproduce with full traces (tool I/O, state, prompts) | Repro packet |
| 4.2 | Classify **LAYER** using [[Methodology/Failure-Diagnosis-Guide]]: harness vs loop vs graph vs eval | Layer label |
| 4.3 | Classify **GRAIN**: inner · mid · outer | Grain label |
| 4.4 | Name failure mode in one line | e.g. “inner loop no max retries” |
| 4.5 | Fix **only** owning layer+grain first | Patch / policy change |
| 4.6 | Re-run failing case | Pass/fail |
| 4.7 | Run small regression (nearby cases) | Regression result |
| 4.8 | If failure is reusable → add probe or checklist row (feeds W6) | Probe candidate |
| 4.9 | Only if layer+grain healthy and still failing → consider model/routing change | Last resort |

**Stop:** Fail case passes + regression clean, or escalated to human with residue.  
**Do not:** Rewrite outer system because inner lacked a stop · blame model first · “try harder” without new evidence rule.

---

# W5 — Handoff

**Trigger:** Work must cross agent or session boundary.  
**Goal:** Next agent continues without amnesia.

| Step | Agent does | Pass / fail |
|------|------------|-------------|
| 5.1 | **Pre-split test:** What must the next agent have seen? | If “most of my context” → **do not split**; continue single-agent |
| 5.2 | If split justified: create Handoff file per [[Methodology/Handoff-Artifact-Spec]] | File created |
| 5.3 | Fill **Intent** (unchanged top-level goal) | No silent reinterpretation |
| 5.4 | Fill **Decisions + rationale** | Each decision has why |
| 5.5 | Fill **Artifacts by reference** (paths/IDs, not summaries of evidence) | Pointers valid |
| 5.6 | Fill **Ruled-out paths** (what was tried and rejected) | Negative space present |
| 5.7 | Fill **Open questions / blockers** | Explicit |
| 5.8 | Fill **Next action** as a **spec for the receiver** (not a human status report) | Actionable first step |
| 5.9 | Optional: confidence/provenance tags on material claims | Tagged |
| 5.10 | Receiver starts at Next action using artifacts; does not re-derive ruled-out paths | Continuity |

**Stop:** Envelope complete and readable without the sender’s chat.  
**Anti-patterns:** One-paragraph summary · “looks good” · narrative retrospective · split that fails pre-split test.

---

# W6 — Improve (outer / RAI)

**Trigger:** Schedule · post-incident · after N real failures · user requests system improvement.  
**Goal:** Convergent improvement against a **written spec** until probes PASS.

| Step | Agent does | Output |
|------|------------|--------|
| 6.1 | Fix the written **spec** (AGENTS.md, skill, prompts, tool contracts) — do not move the goalposts silently | Spec pointer |
| 6.2 | Build or load Probe Suite from: golden paths · edge cases · tool-residue checks · adversarial · **real past failures** | Suite list |
| 6.3 | Run probes **live** against the target agent/system | Raw results |
| 6.4 | Inspect full logs (not self-summary) for each FAIL | Log notes |
| 6.5 | One lever per failure: tighten rule · add rule · fix tool · adjust parameter | Diff |
| 6.6 | Re-run **failed** probes + spot-check suite | Updated ledger |
| 6.7 | Repeat 6.5–6.6 until PASS or limits hit (**default max edit cycles per probe: 3–5**) | — |
| 6.8 | Residue: Probe Ledger (PASS/FAIL per ID) + diffs + open escalations | Package |

**Stops:** All probes PASS · max edit cycles (**3–5** per probe) · budget · human escalate.  
**Do not:** Open-ended “make it smarter” · same context as target writer grading itself · claim fixed without re-run.

Templates: [[Methodology/RAI-Improvement-Loop-Template]] · [[Methodology/Probe-Suite-Starter]].

---

# W7 — Vault / mind change

**Trigger:** New controlling principle, template edit, skill definition, workflow change.  
**Goal:** Mind stays coherent; no silent SSOT drift.

| Step | Agent does | Output |
|------|------------|--------|
| 7.1 | Search vault for existing notes on the topic | Hits listed |
| 7.2 | Prefer amend-in-place over parallel new doctrine | Decision |
| 7.3 | Draft in `Drafts/` **or** propose in `_meta/REVIEW_QUEUE.md` | Draft/proposal |
| 7.4 | Wait for user direction unless user already authorized this change | Authorization |
| 7.5 | Commit controlling doc only in Concepts/ Methodology/ Skills/ AGENTS.md as appropriate | Commit |
| 7.6 | Update Changelog / Approval Log when process requires | Meta updated |
| 7.7 | Never silently overwrite living SSOT in **product** repos (GDD, firmware, production configs) | Boundary respected |

**Stop:** Authorized change merged or proposal queued.  
**Do not:** Put domain residue (trackers, story banks, device logs) into Methodology · fork Nested-Cycles into per-project workflow files.

---

# Quick decision card

```text
UNBOUNDED RETRY?     → W3-inner: max 3; identical fail ×1 then stop
WRITE NO SHA ×2?     → Multi-Agent-Coordination: escalate
CAN'T AUDIT?         → Harness observability / residue (W2/W4)
NEED 2nd AGENT?      → W5 pre-split test
GRAPH?               → W1 Qualifying Test; cycle max iter 3
SELF-GRADE?          → Separate Writer ≠ Checker
DONE?                → Proof artifact path exists
EXPENSIVE MISTAKE?   → Human gate (mid stop)
IMPROVE SYSTEM?      → W6 outer (3–5 edits/probe), not more inner retries
MIND CHANGE?         → W7 only with authorization
RADAR DONE?          → Single-pass exit; no auto re-Discover
```

See [[Methodology/Anti-Infinite-Loop-Checklist]].

---

# Offline / no GitHub

| Step | Agent does |
|------|------------|
| O.1 | Bind to AGENTS.md copy only |
| O.2 | Externalize all intermediate state as local files |
| O.3 | Separate generate vs verify (different steps/files) |
| O.4 | Request missing controlling excerpts; do not invent new architecture |
| O.5 | On reconnect, optionally fold residue back via W7 if user wants |

---

# Grain map

| Workflow | Grain |
|----------|--------|
| W3-inner | Inner |
| W3-mid | Mid |
| W6 | Outer |
| W2 | Designs all |
| W4 | Names failure grain |
| W5 | Boundary between mid nodes or sessions |
