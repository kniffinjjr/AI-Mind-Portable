---
title: Shepherd — agent-native Git for live run state
type: source
created: 2026-08-08
source: https://x.com/akshay_pachaar/status/2086079311279493389
repo: https://github.com/shepherd-agents/shepherd
status: alpha
tags: [harness, loop, reversibility, trajectory, supervisor]
related:
  - "[[Methodology/Reversibility-Class-Checklist]]"
  - "[[Concepts/Harness-Loop-Graph-Architecture]]"
  - "[[Methodology/Nested-Cycles]]"
---

# Shepherd — source capture (selective)

**Claim:** Stanford/shepherd-agents runtime that records agent runs as typed event traces (commits) including process + filesystem (copy-on-write), so a bad step can be forked/reverted without restarting from step one. Message logs alone do not hold live state (handles, packages, KV cache).

## Portable principles (absorb these)

1. **Trajectory ≠ log** — chat/tool logs are not OS/process/cache state.
2. **Git ≠ full run checkpoint** — files only; process may still sit at the failed step.
3. **Supervisor before commit** — meta-check on evidence; revert/stop before promoting bad residue.
4. **Reversibility boundary** — the less reversible an action, the earlier the gate (see checklist).
5. **Harness still drifts** — inner rewind does not fix outer prompts/tools/checks; outer improvement loop remains required.

## Do not absorb

Full Shepherd runtime dependency into Vault skills. Alpha; OS jails; heavy substrate. Watch-list only.

## Reported signal

CooperBench pair-coding pass rate 28.8% → 54.7% with live supervisor (early, one suite).

## Absorption map

| Idea | Target |
|------|--------|
| Reversibility classes | [[Methodology/Reversibility-Class-Checklist]] |
| Supervisor / evidence before promote | Loop + Review Queue habits |
| Trajectory state awareness | Harness design notes |
