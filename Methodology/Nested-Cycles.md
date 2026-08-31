---
title: Nested Cycles
type: methodology
status: live
created: 2026-08-04
updated: 2026-08-04
related:
  - "[[Concepts/Harness-Loop-Graph-Architecture]]"
  - "[[Methodology/Loop-Engineering-Template]]"
  - "[[Methodology/RAI-Improvement-Loop-Template]]"
tags: [harness, loop, graph, cycle, nesting, residue]
---

# Nested Cycles

HLG is not three parallel checklists. It is a **recursive stack**: the same loop anatomy runs at different grains; graphs compose loops; harness wraps everything; outer cycles treat mid systems as the thing under test.

Mental model: **Environment → Feedback → Flow**  
Grain model: **Inner → Mid → Outer**

Projects do **not** maintain separate workflow documents. They state domain constraints in Overview and **apply this file + HLG architecture + templates**.

---

## 1. Three cycle grains

```text
OUTER  (meta / improvement)
  RAI · ops review · probe suite batch
  └── evidence = Probe Ledger, metrics, residue diffs
        │
MID    (job / workflow)
  Graph stages or single qualified loop
  └── each node is an inner loop (or human gate)
        │
INNER  (agent turn)
  model → tools → observe → stop on evidence
  └── harness supplies tools, state, budgets, gates
```

| Grain | What one cycle is | Typical evidence | Typical stop |
|-------|-------------------|------------------|--------------|
| **Inner** | One agent turn / tool sequence | Tool output, test, schema | Success evidence, max retries, budget |
| **Mid** | One job through a pipeline or Diamond | Stage residue (PLAN, Handoff) | Gate pass/fail, human approval |
| **Outer** | Improve or audit the mid system | Probe Ledger, rates | All probes PASS, review done |

**Same seven loop fields at every grain** ([[Methodology/Loop-Engineering-Template]]):

1. Trigger  
2. Goal (checkable terminal state)  
3. State & memory  
4. Action policy  
5. Evidence  
6. Feedback  
7. Stopping rules  

Declare grain on every filled loop: `Grain: inner | mid | outer`.

---

## 2. How layers nest

```text
Harness                    ← environment for all grains
├── tools, permissions, persistence, budgets, observability
├── OUTER loop (optional)
│   └── treats MID system as target under test
├── MID graph or loop
│   ├── node = INNER loop or human gate
│   └── residue edges = shared state
└── INNER may call tools that are tiny graphs
```

1. Harness wraps all grains.  
2. Graph node ≈ inner loop (or deterministic / human).  
3. Residue flows upward; outer never depends on chat alone.  
4. Budgets cascade: outer → mid → inner.  
5. Human gates are mid stopping rules.

---

## 3. Promotion rules

| From | To | Only when |
|------|----|-----------|
| Single inner loop | Mid graph | Qualifying Test met |
| Mid pipeline | Dynamic board | Work discovers/cancels tasks mid-run |
| Ad-hoc mid | Outer RAI / review | Spec + Probe Suite needed |
| One agent | Second agent | Pre-split test passes |

Default: smallest grain that still yields evidence-backed done.

---

## 4. Residue between grains

| Boundary | What crosses |
|----------|--------------|
| Inner → Mid | Durable artifact for next stage |
| Mid → Mid | Handoff envelope (intent, decisions, artifacts, **ruled-out paths**, next action) |
| Mid → Outer | Metrics / ledgers — not narrative status |
| Outer → Mid | Updated spec, probes, policy as residue |

---

## 5. Static vs dynamic by grain

| Grain | Usual shape |
|-------|-------------|
| Inner | Static |
| Mid | Static pipeline or dynamic board |
| Outer | Scheduled static loop |

---

## 6. Failure diagnosis

[[Methodology/Failure-Diagnosis-Guide]] plus: **which grain failed?**  
Do not rewrite outer because an inner loop lacked a stop rule.

---

## 7. How projects use this

1. Overview holds **domain constraints only** (safety, SSOT, human gates unique to that product).  
2. Fill Harness / Loop / Graph **templates** when specifying a system — do not fork Nested-Cycles into a project file.  
3. Production readiness: [[Methodology/Production-Ready-Design-Checklist]].

---

## 8. Ship checklist

- [ ] Each loop declares grain  
- [ ] Each mid stage has residue out  
- [ ] Budgets cascade  
- [ ] Human gates as mid stop rules  
- [ ] Qualifying Test before multi-node graph  
- [ ] Outer has Probe Ledger or equivalent  
- [ ] Failure names layer **and** grain  
