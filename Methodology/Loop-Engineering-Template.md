---
title: Loop Engineering Template
type: template
created: 2026-07-30
updated: 2026-08-16
migrated_from: Google Drive / AI Agent Architecture / 03 - Loop Engineering Template
tags: [template, loop, hard-stops]
related:
  - "[[Methodology/Anti-Infinite-Loop-Checklist]]"
  - "[[Methodology/Agent-Operating-Workflows]]"
  - "[[Methodology/Graph-Engineering-Template]]"
---

# Loop Engineering Specification Template

**Agent / System Name:** ________________  
**Loop Name / Type:** ________________  
**Owner:** ________________  
**Version:** ________________  
**Grain:** inner | mid | outer  

## 1. Loop Purpose & Type

- [ ] Core agent loop (model ↔ tools)  
- [ ] Verification / grader loop  
- [ ] Event-driven loop  
- [ ] Improvement / reflection loop  
- [ ] Other: ________  

**One-sentence purpose:**

## 2. Trigger

What starts a new cycle?

## 3. Goal (Specific State)

Concrete, checkable terminal state (not “keep improving”).

## 4. State & Memory Required

| Information needed | Source / Storage | Notes |
|--------------------|------------------|-------|
| | | |

## 5. Action Policy

- Allowed tools / actions:  
- Forbidden actions:  
- Budget (tokens, $, time, retries):  
- Delegation / sub-agents:  

## 6. Evidence of Success / Failure

**Primary evidence:**

1.  
2.  
3.  

**What does *not* count** (e.g. model saying “I am done”, confidence alone, platform “already completed” without SHA):

## 7. Feedback Design

- Compact  
- Actionable  
- Evidence-based  

## 8. Stopping Rules

| Condition | Action |
|-----------|--------|
| Success | Terminate, return artifact |
| Max retries | Escalate / fail |
| Identical failed action | 1 retry then escalate |
| Budget exhausted | |
| Timeout | |
| Irrecoverable error | |
| Human escalation | |

**Hard max retries:** **3** (default if blank; override only when filled template or user sets higher)  

See [[Methodology/Anti-Infinite-Loop-Checklist]] for full numeric bounds table.

## 9. Cost & Latency

Estimated cost per cycle · expected cycles · worst case · mitigations  

## 10. Relationship to Graph / Other Loops

## 11. Known Failure Modes

## 12. Change Log

- 2026-08-16: Default hard max retries = 3; identical-fail 1; grain field; link Anti-Infinite-Loop-Checklist.
