---
title: MCP Evaluation Workflow
type: methodology
status: live
created: 2026-08-05
updated: 2026-08-05
related:
  - "[[Concepts/Eval-Engineering]]"
  - "[[Concepts/Harness-Loop-Graph-Architecture]]"
  - "[[Methodology/Agent-Operating-Workflows]]"
tags: [methodology, mcp, eval, harness, loop, testing]
---

# MCP Evaluation Workflow

**Purpose:** Practical, production-grade evaluation of Model Context Protocol (MCP) servers and the agents that use them. Aligns directly with Eval Engineering, Harness, and Loop principles.

## Why MCP Evaluation Is Different

The consumer of an MCP server is non-deterministic. Traditional API testing (pin request → assert response) misses the failure modes that actually break agents in production: wrong tool selection, bad argument values, trajectory drift, and silent state corruption.

## Six Layers of MCP Evaluation

| Layer | What it tests | Deterministic? | Key practice |
|-------|---------------|----------------|--------------|
| **1. Protocol / Unit** | Schema, tools/list, input validation, error shapes | Yes | Call handlers directly; skip transport |
| **2. Tool Correctness** | Given correct tool call, does server return right result? | Yes | Fixture state + exact assertions |
| **3. Tool Discoverability / Selection** | Does an LLM choose the right tool + args from natural language? | Probabilistic | Multi-run pass-rate; LLM-as-judge or multi-model |
| **4. End-to-End Agent Loop** | Full agent + MCP interaction under realistic prompts | Mixed | **Assert eventual state / outcome**, not exact tool path |
| **5. Safety / Security** | Path traversal, description injection, capability escalation, DoS | Mostly | Dedicated payload packs + red-team |
| **6. Performance & Cost** | Latency, token usage, tool-call count, efficiency | Yes | Baselines + SLOs |

## The Harness Pattern (Critical)

Instead of asserting the exact tool call sequence, assert **the eventual state**.  
The model can take three different paths to the same outcome; the test only cares whether the outcome happened.

This is pure Loop Engineering: evidence-based stopping, not confidence or trajectory matching.

## Writer ≠ Checker

The agent under test must never grade itself. Use a separate judge model, deterministic post-conditions, or an independent checker node.

## Recommended Workflow for Any MCP We Adopt or Build

1. Start with deterministic protocol + tool-correctness tests (Layers 1–2).
2. Add a small tool-selection eval set (natural language → expected tool + args) with multi-run pass rates (Layer 3).
3. Prefer **state-based assertions** for end-to-end (Layer 4).
4. Keep a permanent Probe Suite entry so regressions are caught forever (Eval Engineering).
5. Treat tool description quality as first-class — bad descriptions destroy discoverability.
6. For stateful MCP servers (CAD, 3D, editor, or other bridges): scene / board / document state after natural-language commands is the primary evidence.

## Existing Tools & References (2026)

- mcp-eval / mcpevals (flight simulator for agents + MCP)
- gleanwork/mcp-server-tester (Playwright + LLM-as-judge)
- mcp-test-harness / mcp-test CLI (pytest-style, CI gate)
- Stainless MCP Evals Harness
- Yaw Labs 88-test grading suite
- GitHub offline evaluation pipelines for tool selection

## Relation to AI Mind Architecture

- **Harness**: isolation, transport, fixture state, safety controls around the MCP server.
- **Loop**: evidence = final system state or judge score; hard stops on iterations / cost.
- **Graph**: tool-selection graph, multi-server composition, dynamic routing.
- **Eval Engineering**: the evaluation stack itself becomes a permanent Probe Suite.
- **Stateful MCP skills**: should own their own evaluation loop using post-command state as evidence.

## Success Criteria

- Regressions in tool correctness or discoverability are caught before production use.
- Evaluation cost stays bounded (prefer deterministic layers first).
- Every MCP we depend on has at least Layers 1–2 + a small Layer 3 set in the Probe Suite.
