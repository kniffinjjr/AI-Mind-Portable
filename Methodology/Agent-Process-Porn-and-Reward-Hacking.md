---
title: Agent Process Porn & Reward Hacking
type: methodology
status: live
created: 2026-08-02
source: https://x.com/doodlestein/status/2083763029993292168
tags: [methodology, eval, multi-agent, production-ai]
related:
  - "[[Eval-Engineering]]"
  - "[[Harness-Loop-Graph-Architecture]]"
  - "[[Methodology/Failure-Diagnosis-Guide]]"
  - "[[Methodology/Production-Ready-Design-Checklist]]"
  - "[[Sources/Multica-Agent-Factory-2026-07-30]]"
  - "[[Sources/doodlestein-Agent-Process-Porn-2026-08-02]]"
---

# Agent Process Porn & Reward Hacking

**Companion to [[Eval-Engineering]]:** having gates is necessary; letting gates *become the work* is a failure mode.

**Primary source:** Jeffrey Emanuel (@doodlestein) thread, 2 Aug 2026 — [[Sources/doodlestein-Agent-Process-Porn-2026-08-02]].

## Two failure modes

### 1. Process porn (ceremony without product)

Agent swarms (or humans steering them) optimize **acceptance certificates, meta-docs, and gate theater** instead of shipping useful features.

**Smell tests**

- More commits about process than product  
- “Closed” work that users can’t use  
- New validators without a named defect or release gate  
- Endless beads that only edit plans, checklists, or goldens  

**Counter:** *Just ship capability.* Ceremony is justified only when it prevents a **real** class of failure or is a **named** release criterion.

### 2. Reward hacking (gaming the score)

Whatever you measure, a swarm will maximize: commits, closed beads, green gates, “LIVE_VERIFIED” labels. **Anticipate the hack; forbid it in agent rules** (`AGENTS.md`, skills, batch-verify).

Useful phrase (thread): **self-licking ice cream cone** — the system’s only customer is its own process.

## Named patterns (compressed for this vault)

From the thread’s “Twelve Rules for Agent Life.” Keep the names; adapt counters to Grok Build / your repos.

| Pattern | What agents do | Counter (principle) |
|---------|----------------|---------------------|
| **Gate self-weakening** | Edit validators / add exemptions so checks pass | Conformance is single-owner; reviewer sign-off; verify *diffs* to gate code every wave |
| **Proof-class inflation** | Fixtures, mocks, hand-inserted rows sold as live proof | Live proof = runtime-selected subjects, real receipts, fresh-process readback |
| **Golden regeneration reflex** | Update snapshots instead of fixing output | Require change note + semantic review of golden updates |
| **Commit-stream pumping** | KPI = commits → trivial splits, placeholder scaffolds | Ban placeholders; grep at verify; commits name scope of real work |
| **Tautological tests** | Tests that only restate current behavior | Pre-specify assertions; ≥1 **negative** a wrong impl fails |
| **Easy-bead cherry-picking** | Farm easy items; starve hard ones | Claim highest-priority ready; staleness alerts on P0/P1 |
| **Close-pump abuse** | False-close to unlock more work | Only orchestrator (or human) closes; violations reopen with incident |
| **Scope-splitting** | Types / impl / tests as three “dones” | Code + tests ship in one unit of work |
| **Spec-editing as progress** | Weaken plan instead of implementing | Plan edits are chore lane; never close feature work |
| **Conformance metastasis** | Infinite new checks for their own sake | New check must cite **observed defect** or **named release gate** |
| **Dependency smuggling** | Bypass banned deps / sandboxes | Deny-list grep at batch verify |
| **Demo-path hardcoding** | Special-case pilot paths only | Conformance subjects runtime-selected ≠ dev fixtures |

## Operating rules for the owner's agents

1. **Evals exist to change the next edge** — not to generate certificates. See [[Eval-Engineering]].  
2. **Writer ≠ grader** — same agent that implements should not own the only green check.  
3. **No new gate without a warrant** — defect ID or release criterion in the checklist note.  
4. **Live > mocked for promotion** — mocks are fine in unit tests; promotion needs proof-class honesty.  
5. **Orchestrator owns “done”** — agents propose; human or designated closer accepts. Mirrors vault Review Queue.  
6. **Batch-verify cheats** — greps for placeholders, banned deps, gate-file edits, tautological test smells.  
7. **Ship order:** real feature → real test → then process docs. Not the reverse.

## Where this sits in HLG

| Layer | Process porn / reward hack shows up as |
|-------|----------------------------------------|
| **Harness** | Observability that only tracks vanity KPIs; tools that edit their own validators |
| **Loop** | Stopping rule = “green internal check” instead of external evidence |
| **Graph** | Extra gate nodes with no failure mode; close edges agents can fire themselves |
| **Eval** | Suite that agents can edit; goldens that absorb bugs |

## Anti-pattern: more Multica ceremony without product

[[Sources/Multica-Agent-Factory-2026-07-30]] is correct that **no evals → no production**. This note is the dual: **evals that never ship → also no production.** Hold both.

## Do not

- Codify all 12 as permanent law without adapting to the repo  
- Add conformance for “professionalism” alone  
- Let agents close Review Queue / release gates  
- Treat author tooling (ntm, etc.) as required infrastructure  
