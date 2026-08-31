---
title: Anti-Infinite-Loop Checklist
type: methodology
status: live
created: 2026-08-16
updated: 2026-08-16
related:
  - "[[AGENTS.md]]"
  - "[[Methodology/Agent-Operating-Workflows]]"
  - "[[Methodology/Loop-Engineering-Template]]"
  - "[[Methodology/Graph-Engineering-Template]]"
  - "[[Process/Multi-Agent-Coordination]]"
  - "[[Skills/Custom/load-master]]"
  - "[[Skills/Custom/harness-loop-graph]]"
  - "[[Methodology/Failure-Diagnosis-Guide]]"
tags: [loop, hard-stops, checklist, harness]
---

# Anti-Infinite-Loop Checklist

**Purpose:** Numeric defaults and exit rules so agents do not retry, discover, or polish forever. Companion to [[Methodology/Loop-Engineering-Template]] and W3/W6 in [[Methodology/Agent-Operating-Workflows]].

---

## Global rules (all grains)

1. **Never loop on confidence** — only on **new evidence**.
2. **Narration ≠ progress** — “retrying…”, “reading skill…”, platform “completed” without proof do not count.
3. **Identical failed action** (same tool + same intent) → **1 retry**, then escalate or stop.
4. **Done** requires a pointer to external evidence (file, SHA, test, citation).
5. Meta-loops (re-read same skill / restate same plan with no intervening evidence) are forbidden.

---

## Default numeric bounds

| Context | Bound | Default |
|---------|-------|---------|
| **W3-inner** execution | Max retries per distinct action | **3** |
| **W3-inner** | Identical fail | **1** then escalate |
| **W6 / RAI** | Edit cycles per probe | **3–5** |
| **GitHub write** (contended path/session) | Attempts without SHA success | **2** then escalate |
| **Load Master wait** | Poll/check cycles before alternate work | **3** |
| **Graph cycle** | Max revisits / depth unless specified | **3** |
| **human-review** | Agent-initiated re-open without user | **0** (user must request) |
| **harness-loop-graph skill** | Tool attempts / identical fail / review passes | **3 / 1 / 2** (skill-session only) |

Override only when the user sets a higher bound or a filled Loop/Graph template specifies one.

---

## Route → document

| Risk route | Controlling doc |
|------------|-----------------|
| Everyday tool retry | Agent-Operating-Workflows W3-inner |
| System improvement | RAI template + W6 |
| Write race / false DONE | Multi-Agent-Coordination |
| Queue wait forever | load-master |
| Graph cycles | Graph-Engineering-Template §7 |
| Architecture meta-loop | harness-loop-graph contract |

---

## Quick exit card

```text
Same tool fail twice?     → STOP / escalate
No new evidence this turn? → STOP that branch
Write without SHA ×2?     → STAND DOWN, escalate
Radar report delivered?   → EXIT (no auto re-Discover)
GRANT wait > 3 checks?    → alternate work / stale
User did not ask continue? → do not open another polish pass
```

---

## Change log

- 2026-08-16: Initial checklist from Vault loop-risk scan; wires P0–P3 defaults.
