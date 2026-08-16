---
title: Checkout Locks
type: system
status: live
created: 2026-08-08
updated: 2026-08-08
maintainer: GrokRarian
purpose: Live board of exclusive write locks on Vault controlling paths
related:
  - "[[Process/Vault-Write-Lock-Protocol]]"
  - "[[_meta/WRITE_QUEUE]]"
  - "[[Skills/Custom/load-master]]"
  - "[[Skills/Custom/grokrarian]]"
  - "[[AGENTS.md]]"
---

# Checkout Locks (live board)

**Who answers “who has X?”:** GrokRarian.  
**Who orders the line:** Load Master (`_meta/WRITE_QUEUE.md`) — not the Librarian.

Orthogonal boards:
- REVIEW_QUEUE = may this become permanent knowledge?
- WRITE_QUEUE = whose turn / priority?
- CHECKOUT_LOCKS = who holds this path right now?

## Active locks

| Paths / prefix | Holder | Project / session | Purpose | Acquired (UTC) | ETA return | Status |
|----------------|--------|-------------------|---------|----------------|------------|--------|
| — | — | — | — | — | — | *none* |

## Recent releases

| Paths | Holder | Project | Result | Released |
|-------|--------|---------|--------|----------|
| Projects/*/Overview; Personal/; Work/; Sources/oil-motion* | Grok | residual-stubs | moved pointers; commit 98972d32 | 2026-08-08 |
| protocol set | Grok | multi-agent coordination | protocol live | 2026-08-08 |

## Status values

| Status | Meaning |
|--------|--------|
| `held` | Exclusive write in progress |
| `released` | Work finished; path free |
| `stale` | Past ETA with no release; Librarian may clear after brief wait |
| `aborted` | Holder abandoned without commit |

## Quick claim format

```
CHECKOUT | <holder> | <project> | paths: <list> | purpose: <one line> | ETA: <time> | status: held
RELEASE  | <holder> | paths: <list> | result: <commit SHA or aborted>
```

Under multi-agent contention: obtain **Load Master GRANT** first, then CHECKOUT, then write.
