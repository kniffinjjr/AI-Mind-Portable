---
title: Agent Failure Diagnosis Guide
type: guide
created: 2026-07-30
migrated_from: Google Drive / AI Agent Architecture / 06 - Failure Diagnosis Guide
tags: [guide, harness, loop, graph, debugging]
---

# Agent Failure Diagnosis Guide

**Purpose:** When an agent misbehaves, identify which architectural layer owns the failure before rewriting prompts or swapping models.

## Diagnostic decision tree

```text
Missing capability?
  → Harness (tools, permissions, environment)

Loses context/state across turns?
  → Harness (persistence, compaction, progress files)

Cannot audit or replay?
  → Harness (observability)

Keeps trying without progress/stop?
  → Loop (evidence, bounds, stopping rule)

Looks good to itself but fails real checks?
  → Loop (self-grading; separate writer/grader)

Wrong order / skips approvals / no recovery?
  → Graph (routing, gates, cycle bounds)

Parallel/multi-agent collisions?
  → Graph (state schema, merge, joins)

Cannot tell if a change improved the system?
  → Evaluation (traces, attribution, regression)

Looks green / many commits / many closed gates but no user-visible capability?
  → Process porn / reward hacking (see [[Methodology/Agent-Process-Porn-and-Reward-Hacking]])
```

## Five expensive mistakes

1. Building a graph before understanding the work  
2. Same model writes and grades without safeguards  
3. “Keep trying” as a loop specification  
4. Harness as a dumping ground  
5. Blaming the model for orchestration failures  
6. **Infinite ceremony** — new validators without a defect or release gate; agents that close their own proofs  

## Debugging workflow

1. Reproduce with full traces  
2. Classify layer  
3. Fix owning layer first  
4. Re-run failing case + small regression suite  
5. Update Harness / Loop / Graph templates and Production Checklist  
6. Only then consider model changes  
