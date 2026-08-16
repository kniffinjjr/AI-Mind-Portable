---
title: RAI Improvement Loop Template
type: template
created: 2026-08-03
tags: [template, loop, eval, rai]
related: ["[[Methodology/Loop-Engineering-Template]]", "[[Concepts/Eval-Engineering]]", "[[Sources/Ashpreet-Bedi-Recursive-Auto-Improvement-RAI-2026-08-03]]"]
---

# RAI Improvement Loop Template

**Specialization of the Loop Engineering Template for Recursive Auto-Improvement (convergent).**

**Agent / System Name:** ________________  
**Loop Name:** RAI Improvement Loop  
**Owner:** ________________  
**Version:** 0.1  

## 1. Loop Purpose & Type

- [x] Improvement / verification loop  
- [x] Evaluation-driven  

**One-sentence purpose:**  
A coding agent improves a target agent by deriving probes from its fixed written spec + real usage/failure data, running them live, inspecting full logs, and making targeted edits until every probe passes.

## 2. Trigger

- Manual kickoff before deploy  
- Scheduled overnight batch  
- Post-usage (after real failures observed)  
- After significant instruction or tool changes  

## 3. Goal (Specific Terminal State)

Every probe in the current Probe Suite returns PASS against the live target agent.  
No open FAIL items remain (or remaining failures are explicitly escalated to human with residue).

## 4. State & Memory Required

| Information needed | Source / Storage | Notes |
|--------------------|------------------|-------|
| Target agent instructions / tools | Code + prompt files | Fixed written “spec” |
| Usage / session data or past failures | Logs, session store, residue | Source of new probes |
| Probe Suite | `probes/` or Probe-Suite.md | Golden / Edge / Tool / Adversarial |
| Full trajectory logs | Agent platform or container logs | Tool calls, errors, debug |
| Before / after diffs | Filesystem residue | Intentional residue |

## 5. Action Policy

- Allowed: derive probes, invoke live agent, inspect logs, edit prompt lines or code levers, re-run only failures + spot-checks  
- Forbidden: unbounded “keep improving”, same-context self-grading without separation, changing the goal of the target agent  
- Budget: set max probes / max edit cycles / token or $ ceiling  
- Delegation: coding agent is the improver; target agent is the system under test  

## 6. Evidence of Success / Failure

**Primary evidence:**
1. Probe Ledger (PASS / FAIL per probe ID)  
2. Full log inspection for each run  
3. Diff of changes made (prompt lines or code)  

**What does *not* count:**  
Model saying “I fixed it” or “looks good now” without re-running the failing probes.

## 7. Feedback Design

- Compact: one lever per failure (tighten rule, add rule, swap tool/parameter)  
- Actionable: exact file + line or parameter changed  
- Evidence-based: re-run result attached  

## 8. Stopping Rules

| Condition | Action |
|-----------|--------|
| All probes PASS | Terminate, write final Probe Ledger + summary residue |
| Max edit cycles reached | Escalate remaining FAILs with residue |
| Budget exhausted | Stop, surface open failures |
| Irrecoverable error / harness missing | Fail the loop, report missing harness surface |
| Human escalation requested | Pause and surface current ledger |

**Hard max edit cycles per probe:** 3–5 (configurable)  

## 9. Cost & Latency

Prefer overnight batch for large suites (hundreds of probes).  
For interactive use: run only previously failing + newly added probes first, then full suite as spot-check.

## 10. Relationship to Graph / Other Loops

Minimal form = single improvement cycle.  
Escalate to multi-node graph only when Qualifying Test is met (e.g., parallel category runners + independent Judge + Editor).

## 11. Known Failure Modes

- Missing live access or logs → loop cannot close  
- Probes too vague → false passes  
- Editor and original agent share context without separation → Writer = Checker  
- No residue of the Probe Ledger → improvements cannot compound  

## 12. Change Log

- 2026-08-03: Initial RAI specialization from Ashpreet Bedi / Agno pattern + existing Loop template.
