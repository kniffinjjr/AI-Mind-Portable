---
title: Ashpreet Bedi — Recursive Auto-Improvement (RAI)
type: source
created: 2026-08-03
source: https://x.com/ashpreetbedi/status/2084331523147239805
article: https://x.com/i/article/2084290193310334976
tags: [source, eval-engineering, loop, harness, production-ai, agent-improvement]
related: ["[[Concepts/Eval-Engineering]]", "[[Concepts/Harness-Loop-Graph-Architecture]]", "[[Methodology/Loop-Engineering-Template]]", "[[Methodology/Graph-Engineering-Template]]", "[[Sources/Greg-Isenberg-Graph-Engineering-2026-08-03]]"]
---

# Recursive Auto-Improvement (RAI) — Ashpreet Bedi / Agno

**Primary source:** X post + Radar Auto Improvement Loop dashboard by @ashpreetbedi (founder of Agno), first installment of the Pro Agent Builders series (2026-08-03).

## Core Distinction (critical)

- **Recursive Self-Improvement (RSI):** The system improves *itself*; improvements target its ability to improve further; gains compound → divergent process.
- **Recursive Auto-Improvement (RAI):** A coding agent improves a *target* agent by editing its instructions, tools, and parameters against a fixed written spec, using probes derived from that spec + real usage data → **convergent** process. Preferred for production reliability.

We adopt RAI (convergent) as the preferred improvement pattern. We do not default to RSI.

## The RAI Loop

1. Coding agent reads the target agent’s instructions/spec + mines real usage/session data.
2. Derives probes covering golden path, edge cases, tool selection, and adversarial cases. Each probe has a one-line expected behavior drawn from the mechanical rules in the spec.
3. Runs the probes against the *live* agent.
4. Reviews full trajectory logs (tool calls, errors, debug messages).
5. For each failure: chooses one lever (tighten a rule, add a rule, swap a tool/parameter), edits, restarts, and re-runs only the failures (plus spot-checks).
6. Continues until every probe passes.

Preferred operating mode: kick off 300–500 probes overnight; wake up to a better agent.  
“I rarely deploy an agent without running this loop first.”

Failures become permanent evals / probes.

## Probe Categories (from Radar dashboard example)

- Golden (Brief / Direct / Delta)
- Tool Selection
- Edge · Scope
- Adversarial (injection resistance, hype pressure, fabrication resistance)

The Probe Ledger itself (before/after verdicts, latency deltas, exact changes) is high-quality intentional residue.

## Harness Prerequisites (non-negotiable)

The coding agent must be able to:

- Query the live target agent (API / invocation)
- Watch complete logs / trajectories
- Make code / instruction changes and re-test
- Mine real usage data for probe derivation
- Look up framework information

Without these harness surfaces the loop cannot close unsupervised.

## Mapping to Our Architecture

**Primary placement: Loop Engineering + Eval Engineering**

- **Loop layer:** Canonical Improvement / Verification loop.  
  - Trigger: manual, scheduled, or post-usage  
  - Goal: every probe passes (checkable terminal state)  
  - Evidence: live probe outcomes + full log inspection (never confidence)  
  - Feedback: small targeted edit  
  - Stopping rule: all probes green (or budget / human gate)  
  Fits the Loop-Engineering-Template as an Improvement / Verification loop.

- **Harness layer:** Forces design of the observability, editability, live-access, and session-store surfaces listed above. “The system must be set up for it.”

- **Graph layer:** Minimal form is a self-improving cycle. Expand only when the Qualifying Test is met (e.g., Probe Deriver → parallel category runners → Independent Judge → Editor → selective re-test). Strong structural Writer ≠ Checker (coding agent edits vs. original agent). Intentional Residue = Probe Ledger + before/after diffs + edit history.

- **Eval Engineering:** Exact realization of “evidence over confidence”, “Writer ≠ grader”, “traces first-class”, “regression from real failures”, and “no evals, no production”.

## Practical Notes for This Vault / Codex Usage

- Treat AGENTS.md + project agent definitions as the fixed “spec”.
- Derive probes that test adherence (golden-path instructions, adversarial resistance, tool selection, out-of-scope refusal, residue requirements, etc.).
- Full unsupervised overnight live-container version (Agno-style) requires additional harness maturity.
- A practical subset is immediately usable: maintain a Probe Suite as residue + coding-agent (Codex / Claude Code) edit-and-reverify loop against those tests. Overnight batch via scheduled session or CI is feasible.

These principles operationalize and strengthen the Loop and Eval Engineering layers already committed in the vault.
