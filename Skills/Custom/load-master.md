---
name: load-master
type: skill
status: active
created: 2026-08-08
updated: 2026-08-16
triggers:
  - Load Master
  - load master
  - write queue
  - velvet rope
  - sequence writes
  - grant write
  - who is next to write
  - multi-agent GitHub contention
related:
  - "[[_meta/WRITE_QUEUE]]"
  - "[[_meta/CHECKOUT_LOCKS]]"
  - "[[Process/Vault-Write-Lock-Protocol]]"
  - "[[Process/Multi-Agent-Coordination]]"
  - "[[Methodology/Anti-Infinite-Loop-Checklist]]"
  - "[[Skills/Custom/grokrarian]]"
  - "[[AGENTS.md]]"
---

# Load Master — Velvet-rope write sequencer

**Job:** Keep multi-agent writes orderly on contended backends (especially GitHub).  
**Not the Librarian.** GrokRarian answers “what do we know?” and “who has path X?”. Load Master answers “whose turn is next?” and “may you write now?”

Goal: **fast processing** via short, fair queues — not bureaucracy.

---

## When to activate

Activate when **any** of these are true:

- Two or more agents may write the same repo/prefix in the same session
- GitHub (or other remote) returns race / “another agent already completed” errors
- User or team asks to sequence, prioritize, or grant writes
- Contended paths under Vault controlling docs, My-Mind, Work-Mind architecture files

**Do not activate** for: pure reads, Drafts/, single-agent uncontended creates, offline plain-directory with one writer.

---

## Velvet ropes (rules)

1. **One active grant** on a contended path prefix at a time.
2. Agents **enqueue** before writing contended paths; they do not jump the line.
3. **Grant → CHECKOUT → write → RELEASE grant + checkout.**
4. Independent path prefixes may run in parallel only if Load Master marks them independent.
5. Prefer **sequential `push_files` / single-file updates** over parallel tool spam.
6. Keep the queue short. Finish and release fast so the next agent moves.

---

## Priority (fixed)

| Priority | Meaning | Examples |
|----------|---------|----------|
| **P0** | User said do this now | Explicit user direction |
| **P1** | Unblocks others / protocol | RELEASE lock, separation migrate, broken index |
| **P2** | Controlling documentation | AGENTS, Concepts, Skills definitions |
| **P3** | Catalog / cleanup | Source captures, stub polish, changelog |

Same priority → FIFO by enqueue time. P0 always jumps.

---

## Wait / poll hard stops

| Bound | Default |
|-------|---------|
| Max checks for GRANT / free lock while waiting | **3** |
| After 3 checks still blocked | **Stop polling** → do non-overlapping work, mark path stale if ETA passed, or escalate to user |
| Busy-retry writes on locked paths | **Forbidden** |

See [[Methodology/Anti-Infinite-Loop-Checklist]].

---

## Board: `_meta/WRITE_QUEUE.md`

| Column | Meaning |
|--------|--------|
| ID | Short id (W1, W2, …) |
| Priority | P0–P3 |
| Agent | Who will write |
| Paths / prefix | What they need |
| Purpose | One line |
| Status | `queued` · `granted` · `writing` · `done` · `cancelled` |
| Enqueued | UTC |

Load Master updates this board. Free-write class (like CHECKOUT_LOCKS).

---

## Chatroom protocol

```text
ENQUEUE | <agent> | P<0-3> | paths: <list> | purpose: <one line>
GRANT   | <agent> | id: <W#> | paths: <list> | you may write now
DONE    | <agent> | id: <W#> | result: <commit SHA or aborted>
```

After GRANT, agent still claims CHECKOUT on paths if protocol requires it, then writes, then DONE + RELEASE checkout.

---

## Relationship map

| Role | Owns |
|------|------|
| **GrokRarian** | Knowledge orientation, “who has path X?”, path routing |
| **Load Master** | Write queue, priority, grant order, velvet ropes |
| **CHECKOUT_LOCKS** | Exclusive hold while writing |
| **REVIEW_QUEUE** | Human gate for permanent knowledge |

Librarian never manages the line. Load Master never invents Vault doctrine.

---

## Speed discipline

- Grant the smallest path set that unblocks work
- Reject speculative parallel “help” on the same prefix
- If an agent is past ETA with no DONE, mark stale and grant the next
- Prefer one batch `push_files` over many racing single updates
- **Max 2 write attempts** without verified SHA on a path/session — then escalate ([[Process/Multi-Agent-Coordination]])

---

## Triggers (summary)

“Load Master”, “write queue”, “velvet rope”, “sequence these commits”, “who writes next”, multi-agent GitHub contention, repeated race errors on the same paths.
