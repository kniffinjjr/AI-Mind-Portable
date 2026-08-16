---
name: harness-loop-graph
type: skill
status: active
created: 2026-08-02
updated: 2026-08-14
triggers:
  - harness
  - loop engineering
  - graph engineering
  - agent architecture
  - unbounded loop
  - production agents
  - verification loop
  - "harness loop graph"
  - HLG
related:
  - "[[Concepts/Harness-Loop-Graph-Architecture]]"
  - "[[Methodology/Loop-Engineering-Template]]"
  - "[[Methodology/Graph-Engineering-Template]]"
  - "[[Methodology/Production-Ready-Design-Checklist]]"
  - "[[Process/Multi-Agent-Coordination]]"
source_skill_path: $GROK_HOME/skills/harness-loop-graph/SKILL.md
---

# harness-loop-graph — Vault overlay

Controlling concept: [[Concepts/Harness-Loop-Graph-Architecture]].

**Critical scope (2026-08-14):** This skill is **single-pass with hard stops**. The detailed execution contract applies **only while the skill is active**. Do not promote the bounds table, progress rule, or anti-meta-loop language into the general agent harness, core AGENTS.md loop, or default turn behavior of Grok Build / local agents.

## When to Activate (narrow)

**Positive:** Designing / reviewing / diagnosing agentic systems, production readiness, choosing loop vs graph, explicit “harness loop graph” / HLG / agent architecture requests.

**Hard negatives:** Ordinary coding, file edits, simple Q&A, one-shot tool use, routine project work, or any task that is not clearly architecture/design/diagnosis of an agent. Keep the default agent loop lightweight.

## Skill Execution Contract (summary — skill-session only)

| Bound | Default |
|-------|---------|
| Max tool attempts per distinct action | 3 |
| Identical failed action | 1 retry → escalate/stop |
| Review passes on same artifact | 2 |
| Progress each iteration | New evidence or stop branch |

**Exit when:** diagnosis delivered · template filled · bound hit · user stops.

**Anti-meta-loop:** Do not re-read the same skill or restate the same plan without intervening evidence. Narration ≠ progress.

Full contract lives in local `SKILL.md` and is mirrored (with scope) in the Concept note.
