---
title: Vault Write-Lock Protocol
type: process
status: live
created: 2026-08-08
updated: 2026-08-08
maintainer: GrokRarian
related:
  - "[[_meta/CHECKOUT_LOCKS]]"
  - "[[_meta/Vault-Conventions]]"
  - "[[_meta/REVIEW_QUEUE]]"
  - "[[AGENTS.md]]"
  - "[[Skills/Custom/grokrarian]]"
---

# Vault Write-Lock Protocol

**Problem this solves:** Parallel agents writing the same GitHub paths produce race locks (“Another agent already completed…”), silent no-ops, and lost work. There was no shared record of *who* held *what* for *which project* or when it would return.

**Principle:** Claim before exclusive write. Librarian informs the rest of the team.

This protocol is **orthogonal** to [[_meta/REVIEW_QUEUE]]:

| Gate | Question |
|------|----------|
| CHECKOUT_LOCKS | Who may write this path *right now*? |
| REVIEW_QUEUE | May this change become *permanent* live knowledge? |

---

## When a lock is required

**Yes — claim a lock before writing when:**

- Multiple files in one commit on controlling paths
- Any write to a path another agent may also touch in the same session window
- Batch updates to catalogs (Short-Instructions, Agent-Skill-Map, AGENTS.md, skill overlays)
- codex-mind-pack architecture / companion files while a team is active

**No lock needed for:**

- Pure reads
- Drafts/ and Inbox/
- Single uncontended file create when the team is idle
- Local-only mirrors under `$GROK_HOME/skills/` (still prefer sequential if multiple agents touch the same skill)

---

## How to claim (holder)

1. **Check** [[_meta/CHECKOUT_LOCKS]] (or ask GrokRarian: “who has &lt;path&gt;?”).
2. If free, **announce in chatroom** to All:

   ```
   CHECKOUT | <your name> | <project or chat label> | paths: <list or prefix> | purpose: <one line> | ETA: <e.g. 10 min or until commit> | status: held
   ```

3. **Append a row** to the Active locks table in `_meta/CHECKOUT_LOCKS.md`.
4. **Write sequentially.** Prefer one agent holding the exclusive path; others do non-overlapping work or wait.
5. On finish, **release**:

   ```
   RELEASE | <your name> | paths: <list> | result: <commit SHA or aborted>
   ```

   Update the registry row to `released` (or delete it). Note the commit SHA when useful.

---

## How others behave while locked

- **Do not** call `create_or_update_file` / `push_files` on locked paths.
- **Do** ask GrokRarian if unsure who holds a path.
- **Do** switch to non-overlapping work (reads, Drafts, different path prefixes, analysis).
- If the holder’s ETA has passed with no release, ask GrokRarian to mark **stale** and reclaim after a short wait.

---

## GrokRarian duties

1. Answer “who has X?” / “when is it free?” from the registry + recent chatroom CHECKOUT lines.
2. Report: holder, project, purpose, acquired time, ETA, status.
3. Advise: wait, queue alternate work, or reclaim if stale.
4. May mark `stale` when ETA is exceeded and holder is silent; may clear stale rows after a brief grace period with a one-line note.
5. Does **not** invent locks; only surfaces and maintains the board.

---

## Soft lock vs hard record

| Layer | Mechanism |
|-------|-----------|
| Soft (immediate) | Chatroom `CHECKOUT` / `RELEASE` to All |
| Hard (durable) | Row in `_meta/CHECKOUT_LOCKS.md` |

Both are required for multi-file exclusive work. Chatroom alone is enough only for a single short single-file write when the team is small and attentive.

---

## Stale and abort rules

- **Stale:** ETA passed, no RELEASE, holder unresponsive → GrokRarian marks `stale`; another agent may reclaim after ~2 minutes and a chatroom notice.
- **Abort:** Holder stops without commit → `RELEASE … result: aborted` and status `aborted`.
- Do not leave `held` rows indefinitely.

---

## Relation to other gates

- Permanent knowledge still goes through REVIEW_QUEUE (or explicit user direction).
- A successful commit after a lock is closer to **verified** work; a CHECKOUT claim alone is **agent-reported** intent (see agentacct pattern: claim ≠ verified).
- Local skill mirrors may be updated under the same lock when the Vault overlay is held, so runtime and Vault stay in sync.

---

## Why this exists

Repeated multi-agent sessions produced GitHub tool race locks and incomplete catalog updates. Naming the project, the holder, the paths, and the ETA makes contention visible and recoverable without inventing a heavy workflow engine.
