---
title: Saboo — Loops, Graphs & Dynamic Agent Orgs
type: source
created: 2026-08-04
updated: 2026-08-05
url: https://x.com/saboo_shubham_/status/2084474890812338252
related_urls:
  - https://x.com/saboo_shubham_/status/2084828486980743354
tags: [graph, loop, dynamic-graph, shared-state, residue, org, multi-agent]
related: ["[[Concepts/Harness-Loop-Graph-Architecture]]", "[[Methodology/Handoff-Artifact-Spec]]", "[[Sources/Greg-Isenberg-Graph-Engineering-2026-08-03]]", "[[Concepts/Architecture-Visual]]"]
---

# Saboo: Loops made agent behavior programmable. Graphs make agent orgs programmable.

**Core distinction**

- **Loop** = one agent: look → act → check → repeat. Sufficient when one agent can hold the whole job.
- **Static graph** (LangGraph-style) = flowchart authored *up front*. Shape mostly fixed; routing can be runtime but possible paths are pre-defined.
- **Dynamic graph / shared board** (FarmTable-style) = tasks live on a shared board. Agents claim work, add new tasks mid-run, drop finished ones. The graph *rewrites itself* as reality changes.

**Key practical rules**

1. “Done” is a claim until proof (re-run tests; don’t trust status rows alone).
2. Bookkeeping cannot live only in an agent’s head — claiming must be automatic or the board drifts.
3. Three board-drift modes: tidy-but-stale plan, status without proof, missing claim records.
4. Coordinator can restructure the team at runtime (stronger model on repeated mistakes, temporary reviewer, collapse expensive parallel teams, skip org for tiny tasks).
5. Pre-flight before any graph: What does each task produce? What does each arrow mean? What proof lets the next task start?

**2026-08-05 follow-up post** (high engagement):  
https://x.com/saboo_shubham_/status/2084828486980743354  
“wtf is a dynamic agent orgs. Self-evolving agent orgs where graph rewrites itself while the work is happening.”  
Replies correctly surface the hard problems: who audits the rewrite, what evidence is left, does memory/history keep up with rapid topology changes.

**Mapping to our architecture**

- Expands Graph Engineering with static vs dynamic distinction.
- Shared board = Intentional Residue / externalized state at multi-agent scale.
- “Done = claim until proof” = Evidence > Confidence + Writer ≠ Checker.
- Pre-flight questions strengthen the Qualifying Test + Smallest Graph rules.
- Runtime org reshaping is a higher-order graph behavior we can name but do not need to fully automate yet.
- Dynamic rewrite raises exactly the audit + residue questions our W5 Handoff and Eval layers exist to answer.

See interactive visual: [[Concepts/Architecture-Visual]]
