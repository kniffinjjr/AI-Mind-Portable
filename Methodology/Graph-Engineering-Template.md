---
title: Graph Engineering Template
type: template
created: 2026-07-30
updated: 2026-08-16
migrated_from: Google Drive / AI Agent Architecture / 04 - Graph Engineering Template
tags: [template, graph, hard-stops]
related:
  - "[[Methodology/Anti-Infinite-Loop-Checklist]]"
  - "[[Methodology/Loop-Engineering-Template]]"
---

# Graph Engineering Specification Template

**Agent / System Name:** ________________  
**Graph / Workflow Name:** ________________  
**Owner:** ________________  
**Implementation framework** (LangGraph / AutoGen / custom): ________________  

## 1. Why a Graph Is Needed

Why a single-agent loop is insufficient.

## 2. High-Level Topology

**Prose overview:**

**Mermaid / ASCII diagram:**

## 3. Node Catalog

| Node ID | Name | Type | Responsibility | Inputs | Outputs | Notes |
|---------|------|------|----------------|--------|---------|-------|
| | | Deterministic / LLM / Specialist / Human | | | | |

## 4. State Schema

| Field | Type | Description | Who writes | Who reads | Merge strategy |
|-------|------|-------------|------------|-----------|----------------|
| | | | | | |

## 5. Edges & Routing Conditions

| From | To | Condition / Evidence | Notes |
|------|----|----------------------|-------|
| | | | |

## 6. Parallelism & Joins

| Parallel Group | Concurrent nodes | Join condition | Shared resources |
|----------------|------------------|----------------|------------------|
| | | | |

## 7. Cycles, Retries & Safe Exits

**Defaults if blank:** Max iter / revisits = **3**; identical failed node action = **1 retry** then escalate; no cycle without an exit condition and escalation path. See [[Methodology/Anti-Infinite-Loop-Checklist]].

| Cycle | Entry | Exit / success | Max iter (default 3) | Escalation |
|-------|-------|----------------|----------------------|------------|
| | | | | |

## 8. Human-in-the-Loop Gates

| After node | What human decides | Timeout / default | Notes |
|------------|--------------------|-------------------|-------|
| | | | |

## 9. Checkpoints & Durability

| Location | What persisted | Resume behavior |
|----------|----------------|-----------------|
| | | |

## 10. Failure & Recovery Paths

| Scenario | Detection | Recovery route | Fallback |
|----------|-----------|----------------|----------|
| | | | |

## 11. Relationship to Harness & Loops

## 12. Complexity Justification

Simplest graph that still provides required control?

## 13. Change Log

- 2026-08-16: Default max cycle iter = 3; link Anti-Infinite-Loop-Checklist.
