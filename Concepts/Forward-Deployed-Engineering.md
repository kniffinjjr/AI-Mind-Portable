---
title: Forward Deployed Engineering
type: concept
created: 2026-08-02
source: https://x.com/0xmorlex/status/2083144963819270357
tags: [production-ai, fde, deployment, evals, skills]
related: ["[[Eval-Engineering]]", "[[Harness-Loop-Graph]]", "[[Skills-as-AI-Mind]]"]
---

# Forward Deployed Engineering (FDE)

**The scarce skill in AI is no longer training models. It is making them survive contact with a real company.**

## The 95% Problem
An MIT NANDA study of 300+ enterprise AI deployments found that only ~5% produced measurable operational or financial impact. The other 95% stalled after an estimated $30–40B in spend. The models worked in demos. The deployments died on integration: legacy databases, compliance, authentication, data residency, and handoff to the ops team that inherited them.

The bottleneck is no longer model capability. It is **deployment**.

## What an FDE Actually Does
A Forward Deployed Engineer embeds with a customer for weeks, learns their workflow in painful detail, and ships custom code that makes the AI product work in *their* environment. Mental model: founding engineer working on someone else’s product. No PM, no staff engineer to escalate to. You decide what to build, what to fake, and what to push back on — in the room, that week.

The strategic loop: FDE ships something that works → core engineering productizes the generalizable parts. You deliver revenue *and* the highest-fidelity product research simultaneously.

## The Three Artifacts Enterprises Buy
Anthropic’s own FDE postings name them plainly:
1. **MCP servers** — the integration layer that wires the model into the customer’s real systems (ticketing, warehouse, internal APIs with no docs).
2. **Agent skills** — encode the customer’s specific workflow so the model follows *their* process instead of a generic one. (This is exactly what the AI Mind skills system is.)
3. **Sub-agents** — handle long tasks that would otherwise blow the context window.

## Why This Strengthens Our AI Mind
- Our existing [[Eval-Engineering]] and [[Harness-Loop-Graph]] skills are the exact disciplines that keep the 95% from happening.
- Modular skills are the “Agent Skills” artifact that production teams are paid to deliver.
- Every custom skill we maintain (CAD/PDM, embedded hardware, EDA, trading, etc.) is practice for the FDE motion: making a frontier model useful inside a system nobody designed for it.

## Practical Takeaways for This Vault
- Prefer evals and failure-mode thinking over prompt tweaking.
- Treat every agent as something that must survive handoff to a skeptical ops team.
- When designing new skills, ask: “Would this survive contact with a real company?”

**Source:** @0xMorlex thread, 31 Jul 2026.
