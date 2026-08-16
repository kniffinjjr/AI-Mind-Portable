---
title: Harness · Loop · Graph Architecture
type: concept
created: 2026-08-02
updated: 2026-08-14
source: https://x.com/i/article/2080670611538329601
migrated_from: Google Drive / AI Agent Architecture - Harness Loop Graph Methodology / 00 - Methodology Overview
tags: [production-ai, harness, loop, graph, architecture, hard-stops]
related: ["[[Eval-Engineering]]", "[[Forward-Deployed-Engineering]]", "[[Memory-Engineering]]", "[[Skills-as-AI-Mind]]", "[[Skills/Custom/harness-loop-graph]]", "[[Sources/Greg-Isenberg-Graph-Engineering-2026-08-03]]"]
---

# AI Agent Architecture: Harness, Loop & Graph Engineering

**Source:** Practical guide / X Article by @beamnxw (July 2026) — https://x.com/i/article/2080670611538329601  
**Purpose:** Design reliable production AI agents by correctly distinguishing the three core architecture layers.

## The Core Confusion

Teams mix three distinct engineering concerns:

1. **Agent Harness Engineering** — the machinery *around* the model  
2. **Loop Engineering** — the repeated work-and-feedback cycle  
3. **Graph Engineering** — explicit workflow topology (nodes, branches, joins, state)

Mental model: **Environment → Feedback → Flow**

Stack as systems mature:

- **Foundation:** Agent Harness  
- **Next:** Loops (execution + quality checks)  
- **Finally:** Graphs (structured control flow)

---

## Skill Execution Contract (hard stops) — skill-session only

> **Scope (2026-08-14):** The detailed bounds, progress rule, anti-meta-loop language, and single-pass requirements below apply **only while the `harness-loop-graph` skill is active**. They are a review/design procedure contract, not default turn behavior for ordinary coding, simple Q&A, or routine Grok Build work. High-level principles in the rest of this note remain core.

The `harness-loop-graph` skill is a **review/design procedure, not an open-ended agent**. It MUST terminate.

### Default bounds (when skill is active)

| Bound | Default |
|-------|---------|
| Max tool attempts per distinct action | **3** |
| Identical failed action (same tool + intent) | **1 retry → escalate/stop** |
| Review/rewrite passes on same artifact | **2** |
| Progress each iteration | **New evidence** or stop that branch |

### Progress rule

Each iteration must produce at least one of: confirmed tool result · layer diagnosis · concrete stopping rule delivered to the user.

**Narration without tool result ≠ progress.**

### Exit conditions (any one ends the procedure)

1. Diagnosis delivered with layer ownership + next action  
2. Design template filled (Trigger, Goal, Evidence, Feedback, Stopping Rule)  
3. Bound hit → partial result + blocker reported  
4. User says stop / change topic

### Anti-meta-loop

Do not re-read the same skill file or restate the same plan more than once without intervening evidence. Diagnosing unbounded loops is **single-pass**: deliver diagnosis, then **exit**.

---

## 1. Agent Harness Engineering

**Definition:** agent = model + harness. The harness is everything outside the model: system prompt, tools, memory, filesystems, sandboxes, routing, handoffs, compaction, permissions, logging, verification interfaces.

| Component | Description |
|-----------|-------------|
| Context injection | Instructions, RAG, conversation state, skills, policies; for **coding agents**, prefer structural/minimal inject (see [[Methodology/Cost-Efficient-Coding-Agent-Context]]) |
| Action surfaces | APIs, browsers, shells, MCP tools |
| Persistence | Files, checkpoints, sessions, progress logs, git |
| Execution control | Timeouts, retries, budgets, routing, sub-agents, approval gates |
| Safety & governance | Permissions, isolation, secrets, human authorization |
| Observability | Traces, tool I/O, cost, latency, eval results |

**Key insight:** Remove the model from the diagram. Everything left is the harness.

---

## 2. Loop Engineering

Core embedded loop: model → tools → observe → repeat.

**Intentional loops:** verification, event-driven, improvement/reflection.

### Anatomy of a well-engineered loop

1. Trigger  
2. Goal (specific terminal state)  
3. State & memory  
4. Action policy  
5. Evidence (tests, schema, citations, metrics, human review)  
6. Feedback (compact + actionable)  
7. Stopping rule (success, budget, timeout, escalate)

**Critical rule:** Do **not** loop on confidence. Loop on **evidence**.

---

## 3. Graph Engineering

Answers: *which component may run next?*

- **Nodes:** deterministic function / LLM / specialist agent / human  
- **Edges:** sequence, branch, parallel, join, cycle, interrupt  
- **State** travels through the graph  

Use graphs for branches, parallel work, approvals, recovery, multi-agent coordination. Skip graphs when one agent + three tools is enough.

### Practical Operating Rules (committed 2026-08-03 from Greg Isenberg refinements)

**Qualifying Test**  
Reserve a multi-node graph only when the work has several of: multiple steps, multiple independent sources, parallelizable paths, need for independent checks/grading, material risk if wrong, or required human approvals. Otherwise improve the prompt and context.

**Diamond Pattern** (default research / multi-perspective shape)  
Planner → parallel specialized researchers → independent Skeptic → Merge of survivors → Human gate.

**Writer ≠ Checker**  
Generation and verification must be structurally separated. Never let the same model or context grade its own output.

**Intentional Residue / Externalized State**  
Every meaningful node leaves durable artifacts (files, notes, tables, evidence). Shared state is external memory. Residue compounds across runs and sessions.

**Start Manual → Validate → Automate**  
Draw the topology first. Run it by hand once with separate lanes/files. Only then automate.

**Smallest graph that improves quality** + place human gates where mistakes are expensive.

See also: [[Sources/Greg-Isenberg-Graph-Engineering-2026-08-03]], [[Methodology/Graph-Engineering-Template]]

---

## How the layers nest

```
Harness
└── Graph (explicit topology)
    └── Loop(s)
        └── Core agent loop (model ↔ tools)
```

---

## Failure diagnosis (which layer?)

| Symptom | Fix layer |
|---------|-----------|
| Missing capability / cannot recover / loses state / unauditable | Harness |
| No success criteria / unbounded retry / “keep trying” | Loop |
| Wrong order / missing branches / no human gates | Graph |
| Cannot attribute improvement | Evaluation (cross-cutting) |

---

## Expensive mistakes

1. Graph before understanding the work  
2. Same model writes and grades without safeguards  
3. “Keep trying” as a loop  
4. Harness as dumping ground  
5. Blaming the model for orchestration failures  
6. **Meta-loops** — re-reading the same skill, restating the same plan, or retrying the same failed tool without new evidence  

See also: [[Methodology/Production-Ready-Design-Checklist]], [[Methodology/Failure-Diagnosis-Guide]], [[Skills/Custom/harness-loop-graph]], project folders under `Projects/`.
