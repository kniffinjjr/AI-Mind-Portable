---
title: Write Queue
type: system
status: live
created: 2026-08-08
updated: 2026-08-08
maintainer: Load Master
purpose: Velvet-rope ordered queue for multi-agent writes on contended backends (esp. GitHub)
related:
  - "[[Skills/Custom/load-master]]"
  - "[[_meta/CHECKOUT_LOCKS]]"
  - "[[Process/Vault-Write-Lock-Protocol]]"
  - "[[AGENTS.md]]"
---

# Write Queue (live board)

**Owner:** Load Master (not GrokRarian).  
**Purpose:** Order multi-agent writes so agents do not jump each other. Faster throughput via serialization on contended paths.

Orthogonal boards:

| Board | Question |
|-------|----------|
| **WRITE_QUEUE** | Whose turn is next? (priority + order) |
| **CHECKOUT_LOCKS** | Who holds this path right now? |
| **REVIEW_QUEUE** | May this become permanent knowledge? |

## Priority

| P | Meaning |
|---|--------|
| P0 | User-directed now |
| P1 | Unblocks others / protocol |
| P2 | Controlling documentation |
| P3 | Catalog / cleanup |

## Active queue

| ID | Priority | Agent | Paths / prefix | Purpose | Status | Enqueued (UTC) |
|----|----------|-------|----------------|---------|--------|----------------|
| — | — | — | — | — | *empty* | — |

## Recently completed

| ID | Agent | Paths | Result | Done |
|----|-------|-------|--------|------|
| — | — | — | — | — |

## Protocol (short)

```
ENQUEUE | <agent> | P<n> | paths: … | purpose: …
GRANT   | <agent> | id: W# | paths: … | you may write now
DONE    | <agent> | id: W# | result: <SHA or aborted>
```

After GRANT → claim CHECKOUT if required → write → DONE + RELEASE checkout.

**Free lane:** pure reads, Drafts/, single-agent uncontended creates — no enqueue required.
