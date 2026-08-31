---
title: Cost-Efficient Coding Agent Context
type: methodology
status: live
created: 2026-08-03
approved: 2026-08-03
tags: [methodology, cost, harness, coding-agent, production-ai]
related:
  - "[[Memory-Engineering]]"
  - "[[Eval-Engineering]]"
  - "[[Harness-Loop-Graph-Architecture]]"
  - "[[Skills/Custom/accountant]]"
  - "[[Methodology/Agent-Process-Porn-and-Reward-Hacking]]"
---

# Cost-Efficient Coding Agent Context

**Policy for this vault:** coding agents must run in a **cost-efficient** mode by default — not only when a budget alarm fires. Context is a billable resource (tokens / $ / subscription headroom), same class as tool latency and human attention.

**Primary illustration:** structural code graphs (e.g. code-review-graph) that map once and inject only change-relevant slices.

## Core problem

Every turn, naive agents re-discover structure:

- Re-list trees, re-open “important” files, re-walk imports  
- Pay **tens of thousands of tokens** for topology they already paid for last turn  
- Cost scales with repo size, not with the size of the *diff* or question  

That is **raw context as memory** — the failure Memory Engineering and LazyGraphRAG warn about, applied to source code.

## Principle

**Map structure once (or incrementally). Query the map. Feed the model only the blast radius of the task.**

| Bad default | Cost-efficient default |
|-------------|------------------------|
| Stuff half the repo into context | Index structure offline / once |
| Semantic “maybe related” dump | Structural edges: calls, imports, tests, inheritance |
| Bigger window = better coding | Smaller, precise window + dual metric |
| Re-read everything after one edit | Re-walk dependents of changed symbols only |

## Operating rules (always on)

1. **Dual metric on coding loops** — quality of the change **and** tokens (or $) per successful task. Never quote “it works” without a sense of context size. See [[Eval-Engineering]] + [[Memory-Engineering]].  
2. **Prefer structural retrieval over full-repo reread** — AST/tree-sitter (or IDE index) graphs beat dumping directories when the question is local or change-scoped.  
3. **Persist the map locally** — SQLite / index on disk; update on file change; no cloud required for core structure (privacy + cost).  
4. **Inject minimum viable context** — changed files + callers + callees + covering tests first; expand only when evidence fails.  
5. **Write path vs query path** — indexing is a **background construction** job (Memory Engineering / Nvidia lens); keep it off the interactive hot path when possible.  
6. **Measure with harness observability** — a local usage/observability dashboard (or equivalent) should make large context burns visible.  
7. **Don’t buy process porn with tokens** — ceremony that re-reads the world to “be thorough” is still waste. See [[Methodology/Agent-Process-Porn-and-Reward-Hacking]].  
8. **Honest evals** — if a tool’s “recall” is circular (ground truth from the same graph it queries), treat reported multipliers as directional until re-run on *your* repos.

## Pattern: code intelligence graph (tool-agnostic)

```text
repo → parse (Tree-sitter / language servers)
     → nodes: functions, classes, imports, tests
     → edges: calls, inheritance, test coverage
     → store: local graph (e.g. SQLite)
     → on task: BFS/blast-radius from change set
     → agent: only that file/symbol set (+ task prompt)
```

**Implementations** are replaceable. The **pattern** is permanent: *persistent structural map + selective inject via MCP/CLI/harness.*

One concrete candidate: [code-review-graph](https://github.com/tirth8205/code-review-graph) (MCP + CLI, local SQLite, multi-language Tree-sitter). Author-reported median ~65× fewer tokens on sample repos — **verify on your own repos before treating as fact.**

## How this maps to HLG

| Layer | Cost-efficient behavior |
|-------|-------------------------|
| **Harness** | Context injection policy; graph/index tools; usage-dashboard budget signals |
| **Loop** | Stop expanding context when evidence is enough; bound “read more files” retries |
| **Graph** | Optional node: “resolve blast radius” before “deep edit” |
| **Eval** | Tokens per green check / per merged change; regression if context size explodes |

## Stack fit (this harness)

| Component | Role |
|-----------|------|
| Agent host (Grok Build or equivalent) | Keep sessions from re-loading whole trees by habit |
| Usage dashboard | See the burn; subscriptions still have headroom limits |
| This Vault | Methodology; not a substitute for a code graph on product repos |
| code-review-graph (optional pilot) | Local structural map + MCP for coding agents |
| LazyGraphRAG / Memory Eng. | Same doctrine, knowledge/docs domain |

## Do not

- Treat 1M context as the cost strategy for coding  
- Auto-wire cloud indexing of employer repos without policy  
- Assume star counts or influencer medians without a local pilot  
- Optimize tokens so hard that tests and proof-class honesty disappear  

## Open actions

1. Pilot structural graph (or IDE-index equivalent) on one high-churn repo.  
2. Record before/after: tokens per question or per PR review task (usage dashboard + session logs).  
3. If Grok MCP support is limited, use CLI export of blast-radius file lists into agent prompts as a thin harness.  
