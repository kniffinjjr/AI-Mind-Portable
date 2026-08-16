---
title: Eval Engineering
type: concept
created: 2026-08-02
updated: 2026-08-03
tags: [eval, production-ai, control-flow]
related: ["[[Harness-Loop-Graph-Architecture]]", "[[Forward-Deployed-Engineering]]", "[[Memory-Engineering]]", "[[Methodology/Agent-Process-Porn-and-Reward-Hacking]]", "[[Methodology/Cost-Efficient-Coding-Agent-Context]]", "[[Sources/Ashpreet-Bedi-Recursive-Auto-Improvement-RAI-2026-08-03]]"]
---

# Eval Engineering

**Definition for this vault:** evaluation that **changes control flow** (what runs next, what is promoted, what is blocked) — not scores that only decorate a dashboard.

## Principles

1. **Evidence over confidence** — success criteria are external (tests, schema, citations, human sign-off).  
2. **Writer ≠ grader** — separate contexts or use deterministic checks.  
3. **Traces are first-class** — replay real failures; attribute improvement to a specific change (prompt, tool, loop, edge).  
4. **No evals, no production** — Agent Factory law; same spirit as Review Queue for vault knowledge.  
5. **Regression from real failures** — production bugs become suite cases.  
6. **Dual metric for memory systems** — when evaluating stores/RAG/context strategies, quote quality **and** cost (tokens / energy / $) per correct answer; accuracy alone hides 10–50× bills. See [[Memory-Engineering]].  
7. **No process porn** — gates that don’t change a real edge (or that agents can edit/close themselves) become reward hacks. Dual of #4: *evals without shipping is also failure.* See [[Methodology/Agent-Process-Porn-and-Reward-Hacking]].  
8. **Coding agents are cost-constrained by default** — dual metric on every coding loop (quality **and** tokens/$); prefer structural/minimal context over full-repo reread. See [[Methodology/Cost-Efficient-Coding-Agent-Context]].

## Production Improvement Pattern: Recursive Auto-Improvement (RAI)

See [[Sources/Ashpreet-Bedi-Recursive-Auto-Improvement-RAI-2026-08-03]].

Canonical **convergent** loop (preferred for production):

1. Coding agent derives categorized probes (Golden / Edge / Tool Selection / Adversarial) from a fixed written spec + real usage data.
2. Runs probes against the *live* target agent.
3. Inspects full trajectory logs.
4. Makes small targeted prompt or code edits.
5. Re-runs only the failures (plus spot-checks) until every probe passes.

Failures become permanent probes. Overnight batch (hundreds of probes) is the preferred operating mode. Requires harness surfaces for live invocation, complete logs, editable instructions/tools, and usage data.

This operationalizes principles 1–5 above and pairs cleanly with the Loop Engineering template and the Writer ≠ Checker rule.

**Note:** We adopt RAI (convergent toward a fixed spec). We do not default to divergent Recursive Self-Improvement (RSI).

## How it shows up here

| Mechanism | Role |
|-----------|------|
| `_meta/REVIEW_QUEUE.md` | Human gate before permanent knowledge changes |
| Production checklist E1–E5 | Ops eval bar for agents |
| Project verification loops | ECO completeness, DRC, HOA citations, balance simulation |
| Anti-ceremony methodology | Named agent cheats + “new gate needs a warrant” |
| Coding context methodology | Map once, inject blast radius; a usage dashboard makes burns visible |
| RAI / Probe Suite | Improvement loop that turns failures into permanent tests and edits the agent until every probe passes |

See [[Process/Approval-Workflow]], [[Methodology/Production-Ready-Design-Checklist]], [[Methodology/Agent-Process-Porn-and-Reward-Hacking]], [[Methodology/Cost-Efficient-Coding-Agent-Context]], and [[Sources/Ashpreet-Bedi-Recursive-Auto-Improvement-RAI-2026-08-03]].
