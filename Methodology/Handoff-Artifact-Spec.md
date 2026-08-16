---
title: Handoff Artifact Spec
type: template
created: 2026-08-03
tags: [template, residue, handoff, multi-agent, graph]
related: ["[[Concepts/Harness-Loop-Graph-Architecture]]", "[[Methodology/Probe-Suite-Starter]]", "[[Methodology/RAI-Improvement-Loop-Template]]"]
source: "Mapped from hanakoxbt handoff-amnesia diagnosis + production patterns (structured briefings, LangGraph-style shared state, Anthropic research-agent schemas)"
---

# Handoff Artifact Spec

**Purpose:** Prevent expensive amnesia at multi-agent (or multi-session) boundaries.

A handoff is a compression event. Prose summaries drop causal chains, constraints, uncertainty, temporal order, and especially **negative space** (what was tried and rejected). The only lossless handoff is the artifact itself plus a structured envelope written *for the next agent*.

## When to use

- Any time work moves from one agent (or context) to another
- Before introducing a second agent at all (run the pre-split test first)
- Cross-session continuity on the same task

## Pre-split test (cheapest fix)

Before creating a second agent, ask:

> What does the second agent actually need to have seen?

If the answer is most of what the first agent saw → **do not split**. You have one agent + expensive amnesia.

## Required fields (minimum viable envelope)

```markdown
# Handoff: <id or task name>
From: <agent / context> → To: <agent / context or "any">
Date: 

## Intent / Original Goal
(Unchanged top-level goal. Do not silently reinterpret.)

## Decisions Made + Rationale
- Decision: …
  Why: …

## Artifacts (by reference)
- [label](path or ID) — note
(Pass pointers to the real evidence, not summaries of it.)

## Ruled-Out / Rejected Paths (Negative Space)
- What was tried: …
  Result / why rejected: …
(This is the highest-leverage field. It stops the next agent walking the same dead ends.)

## Open Questions / Blockers
- …

## Confidence & Provenance (where material)
- Claim: … | Confidence: high/medium/low | Source: tool output / inference / inherited

## Next Action (written as a spec for the receiving agent)
What the next agent should do first, and what evidence it already has.
Do not write a human status report. Write an actionable brief.
```

## Design rules

1. **Artifacts > prose.** Files, schemas, captured responses, and ruled-out lists survive; summaries of them do not.
2. **Carry failures explicitly.** Negative space is first-class residue.
3. **Write for the next agent**, not for a human reader. A report optimizes for narrative; a spec optimizes for completeness of evidence and next action.
4. **Tag provenance** so uncertainty is not flattened into assertion.
5. Prefer shared durable state (filesystem, checkpointer, structured store) + pointer over one-shot full context dumps when the pipeline is long.

## Relationship to existing principles

| Principle | Application at handoff |
|-----------|------------------------|
| Intentional Residue | The handoff *is* residue. |
| Writer ≠ Checker | Conclusion without evidence cannot be reasoned from or verified. |
| Probe Ledger | Ruled-out paths become permanent negative-space residue. |
| Qualifying Test / Smallest Graph | Pre-split test before adding a second node. |
| Harness | Shared state + structured envelope is harness design. |

## Anti-patterns

- One-paragraph summary that drops the 400 bodies and ruled-out routes
- "I am done / looks good" with no artifact references
- Handoff written as a retrospective narrative instead of a next-agent spec
- Splitting work when the second agent still needs most of the first agent's context
