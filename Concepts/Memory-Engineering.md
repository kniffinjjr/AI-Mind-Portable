---
title: Memory Engineering
type: concept
status: live
created: 2026-08-02
approved: 2026-08-02
updated: 2026-08-07
source: https://x.com/i/article/2083965152056033281
tags: [production-ai, memory, harness, eval]
related:
  - "[[Harness-Loop-Graph-Architecture]]"
  - "[[Eval-Engineering]]"
  - "[[Forward-Deployed-Engineering]]"
  - "[[Sources/MemOS-gippp69-2026-08-02]]"
  - "[[Sources/N01ennn-Memory-Engineer-2026-08-02]]"
  - "[[Sources/LazyGraphRAG-N01ennn-2026-08-02]]"
  - "[[Sources/NVIDIA-Cross-Model-KV-Cache-Transfer-2026-08-07]]"
  - "[[Methodology/Cost-Efficient-Coding-Agent-Context]]"
  - "[[Process/Approval-Workflow]]"
---

# Memory Engineering

**Definition for this vault:** treat agent memory as a **system with cost, lifecycle, control, and hardware bounds** — not as a vector bucket or a bigger context window.

**Primary synthesis:** @N01ennn “How to be a Memory Engineer” (Stanford · Microsoft · Anthropic · Nvidia), 2 Aug 2026.  
See [[Sources/N01ennn-Memory-Engineer-2026-08-02]] and the LazyGraphRAG follow-up [[Sources/LazyGraphRAG-N01ennn-2026-08-02]].

## Core claim

Storage is not memory. Memory has **metabolism**: energy on write, growth every session, rot without pruning, and stale truths that were correct once.

The expensive part is often the **write path** (construction), not the query latency users notice.

## Four lenses (hold all at once)

| Lab lens | Hard question | Vault translation |
|----------|---------------|-------------------|
| **Stanford** | What does remembering cost? | Dual metrics: quality **and** cost (or energy) per correct answer; watch write path |
| **Microsoft** | What is worth keeping? | Store **facts and skills**, not raw logs; density beats volume |
| **Anthropic** | Who controls what it keeps? | Files / inspectable state; scope, audit, delete/rollback — same spirit as Review Queue |
| **Nvidia** | Where does it hit hardware? | KV cache / HBM / tokens·s⁻¹; construction as background job, off the hot path |

None of the four is wrong alone; the skill is refusing to optimize only one.

## Memory family tradeoffs (Stanford framing)

Four families; **no free lunch** across build cost, query speed, and accuracy:

1. **Raw context** — dump history into the window  
2. **Flat retrieval** — vector / lexical top‑k  
3. **Structured extraction** — facts, skills, graphs (e.g. GraphRAG / LazyGraphRAG / MemOS-style graphs)  
4. **Fully agentic** — agent decides what to write/read/maintain  

Example tension (from article): Mem0-class systems can answer fast after paying heavy construction; lexical indexes build cheaply but are blunter at query time. A Memory Engineer **picks which cost to pay on purpose**.

## Microsoft thread (utility, not size)

- More raw memory can **hurt**: retrieval drowns; attention burns on transcripts.  
- Keep **facts and skills** extracted from events (human analogy: we don’t replay days, we keep what we learned).  
- Optimize **decision-relevant bits per token of context**, not bytes stored.  
- **Memento-style** in-model notes: write dense note, drop raw chain-of-thought → peak memory ~2–3× lower, throughput up; but reconstruction from note alone can lose ~15 pts accuracy. **Forgetting ≠ clean deletion** (shadow may remain in weights/behavior).

## Anthropic thread (control)

- Memory as **files** the agent (and human) can open, export, and delete.  
- Scope who reads/writes; **audit** what was learned; power to **roll back**.  
- Wrong memory fails repeatedly across sessions — control is design, not a bolt-on.  
- Article claims: ~97% fewer first-pass errors and ~⅓ faster verification when learning stays observable (treat as cited claim; reproduce on your tasks).

## Nvidia thread (hardware)

- Under the algorithms: **KV cache** in HBM is scarce. Full-history context is quadratic; prefix cache often collapses across sessions.  
- Read memory in: HBM bandwidth, GPU util, tok/s, **KV slots freed**.  
- **Construction ≈ prefill / background indexing** — rate-limit, batch, defer; do not stall live queries.
- **Cross-model extension (notes, 2026-08-07):** prefix cache is also **model-bound**. Same-family closed-form KV transfer (arXiv:2608.03893) can recover paid prefill when routing across sizes *you control*. See [[Sources/NVIDIA-Cross-Model-KV-Cache-Transfer-2026-08-07]]. On-radar for self-hosted multi-size fleets; not a change to Vault/skills today. Prefer inspectable file residue as the portable continuation format across *any* model.

## LazyGraphRAG addendum (same author, later same day)

Microsoft Research (Jonathan Larson numbers as reported): LazyGraphRAG won **~92 / 90 / 91%** of data-local questions vs vector RAG across **8k / 120k / 1M** context setups, at ~**1/10** the cost of the million-token run.

**Lesson for vault:** bigger context window ≠ memory; **structured memory** can dominate raw scale on local factual questions.

## Operating rules (steps 13–15 distilled)

1. **Prove each pass by hand** on real history before scheduling automation.  
2. **Forgetting policy before volume** — dedup, consolidation, explicit delete rules; growth slope bankrupts long-lived agents.  
3. **Never auto-merge contradictions** — surface them; human (or Review Queue) decides.  
4. **Ship order:** write path (facts/skills) → contradiction detection → forgetting/maintenance → hardware/KV tuning last.

## How this maps onto AI Mind stack

| Layer | Role vs Memory Engineering |
|-------|----------------------------|
| **AI Mind Vault** | Human-gated durable knowledge; Review Queue = Anthropic control lens for *promoted* memory |
| **MemOS / runtime LTM** | Candidate for session/preference facts & skills; must still have edit/delete + policies |
| **Harness** | Persistence row: files, checkpoints, RAG, compaction — *where* memory lives |
| **Eval Engineering** | Extend dual metric: accuracy **and** cost (tokens/energy/$ ) per correct answer for memory ablations |
| **Usage dashboard** | Surface cost of write vs query paths in practice |
| **Coding agent context** | Structural code graph / blast-radius inject — code-domain twin of “density beats volume”; see [[Methodology/Cost-Efficient-Coding-Agent-Context]] |
| **Graph Engineering (workflow)** | Control-flow graphs — **not** the same as knowledge-graph memory, but both need explicit state schema |
| **Self-hosted serving (future)** | Nvidia lens extends to same-family KV transfer when you own multi-size routing; see [[Sources/NVIDIA-Cross-Model-KV-Cache-Transfer-2026-08-07]] |

## What *not* to do

- Treat “1M context” as a memory strategy.  
- Optimize only top‑k retrieval accuracy.  
- Auto-write agent state into live vault Concepts/ without approval.  
- Schedule full agentic memory maintenance on day one with empty store.
- Redesign agent graphs around opaque KV tensors; keep portable residue in **files**.

## Open questions for the owner

1. Which agent loops deserve a **facts/skills write path** first (hardware diagnostics? calendar agent?)?  
2. Should vault + runtime memory share a **contradiction / forgetting** checklist under Methodology/?  
3. Eval suite: one data-local benchmark comparing raw context vs vector vs graph (LazyGraphRAG or MemOS) on a personal corpus?
4. When a work-hosted multi-size same-family fleet exists: does prefill invalidation on route show up in $ / TTFT metrics enough to justify KV-transfer R&D?
