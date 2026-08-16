---
title: How to be a Memory Engineer (N01ennn / four labs)
type: source
status: live
date: 2026-08-02
approved: 2026-08-02
url: https://x.com/i/article/2083965152056033281
announce: https://x.com/N01ennn/status/2083971749079581120
tags: [source, memory, stanford, microsoft, anthropic, nvidia]
related: ["[[Memory-Engineering]]", "[[Sources/MemOS-gippp69-2026-08-02]]", "[[Eval-Engineering]]", "[[Sources/LazyGraphRAG-N01ennn-2026-08-02]]"]
---

# Source: How to be a Memory Engineer — @N01ennn (2 Aug 2026)

**Article:** https://x.com/i/article/2083965152056033281  
**Announce post:** https://x.com/N01ennn/status/2083971749079581120  

## One-line thesis

Your agent’s memory problem is not that it forgets — it’s that it **never forgets on purpose**. Everyone optimizes what is remembered; almost nobody engineers write cost, worth-keeping, control/delete, and hardware impact.

## Structure (six parts / 15 steps)

### See memory for what it is
1. Stop calling storage “memory” — metabolism: energy in, growth, rot, stale truth.  
2. Four lenses: Stanford (cost) · Microsoft (worth keeping) · Anthropic (control) · Nvidia (hardware).

### Price it before you build it (Stanford)
3. Attention on the **write path** (construction), not only query latency.  
4. Measure **energy (or cost) per correct answer**, not accuracy alone — same-accuracy systems can differ by **~47×**.  
5. Pick your cost deliberately across four families: raw context · flat retrieval · structured extraction · fully agentic.

### Decide what is worth keeping (Microsoft)
6. Store **facts and skills**, not logs (PlugMem-style framing).  
7. Judge by **utility density** (decision-relevant info per context token), not store size.  
8. **Memento**: model manages context in blocks; dense note + drop raw reasoning → ~2–3× peak memory drop, nearly 2× throughput; rebuild from note alone can cost ~15 accuracy points. Forgetting is not pure deletion.

### Keep control of what it keeps (Anthropic)
9. Memory as **files** you can inspect, export, delete.  
10. Scope, audit, roll back — wrong memory persists across sessions. Article claim: ~97% fewer first-pass errors, ~⅓ faster verification when learning is observable.

### Survive the hardware (Nvidia)
11. Read memory as **KV cache / HBM**, not only text.  
12. Construction as **background job** (prefill-like); keep off latency-sensitive path.

### Build without hurting yourself
13. Prove each extraction pass **by hand** on real history first.  
14. **Forgetting policy** before the store grows; never auto-merge contradictions.  
15. Ship order: write path → contradiction detection → forgetting → hardware last.

## Critical review (for AI Mind)

### High signal / vault-aligned
- Matches vault philosophy: **controlled state** (Review Queue) over black-box accumulation.  
- Extends [[Eval-Engineering]] with **cost-normalized** quality for memory systems.  
- Complements MemOS product note: MemOS is one *implementation* of inspectable graph memory; this article is the *job description* and checklist.  
- “Never auto-merge contradictions” is an explicit rule the vault already practices via human approval.

### Caveats
- Numbers (47×, 97%, 15 pts, 2–3×) are **reported from labs/vendor framing via a secondary article** — useful as directional constraints, not as committed benchmarks until primary papers are linked and re-run.  
- Author is a synthesizer/curator on X, not a peer-reviewed primary source.  
- Does not replace FDE integration work; memory engineering is still harness + ops.

### Practical use
- Distilled concept: [[Memory-Engineering]].  
- When evaluating MemOS, LazyGraphRAG, or “just use 1M context,” score against the **four lenses + dual metrics + ship order**.

## Related follow-up same day
- LazyGraphRAG vs million-token context: https://x.com/N01ennn/status/2084018136437985417 → [[Sources/LazyGraphRAG-N01ennn-2026-08-02]]
