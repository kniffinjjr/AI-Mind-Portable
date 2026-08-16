---
title: Greg Isenberg — Graph Engineering (Claude/Codex)
type: source
created: 2026-08-03
source: https://x.com/gregisenberg/status/2084359492569907643
video: https://www.youtube.com/watch?v=JWhICz1QR8M
tags: [source, graph-engineering, coding-agents]
related: ["[[Concepts/Harness-Loop-Graph-Architecture]]", "[[Methodology/Graph-Engineering-Template]]", "[[Methodology/Cost-Efficient-Coding-Agent-Context]]"]
---

# Greg Isenberg — Why Graph Engineering will 10x your Claude/Codex (2026-08-03)

**Primary source:** X post + 26-min YouTube by @gregisenberg.

**Core contribution (durable principles extracted for this vault):**

1. **Qualifying Test** — Reserve graphs for work with multiple steps, multiple independent sources, parallelizable paths, need for checks/grading, material risk if wrong, or required human approvals. Otherwise better single prompt + context.

2. **Diamond Pattern** (first reusable research shape) — Planner → parallel specialized researchers (customer / competitor / distribution / etc.) → independent Skeptic that attacks claims → Merge of survivors → Human gate.

3. **Writer ≠ Checker** — Never let the same model (or same context) grade its own output. Structural separation is epistemic hygiene.

4. **Intentional Residue / Externalized State** — Every node leaves durable artifacts (files, notes, scored tables, evidence logs). Shared state is external memory; residue compounds across runs.

5. **Start Manual → Validate Topology → Automate** — Draw the jobs/arrows first. Run by hand once. Only then orchestrate (Claude Code files, LangGraph, n8n, Codex workflows).

6. **Smallest graph that improves quality** + human gates placed at asymmetric risk points.

**Implementation ladder (practical):**
- Level 1: Manual whiteboard / Excalidraw / markdown lanes
- Level 2: Claude Code / Codex with each job writing its own file (paper trail)
- Level 3: LangGraph / n8n / AutoGen / Codex dynamic workflows

These principles refine and operationalize the Graph layer of our Harness · Loop · Graph Architecture. They are now permanent operating rules.
