---
title: Multi-Agent Coordination
type: process
status: live
created: 2026-08-10
updated: 2026-08-16
maintainer: Load Master / team leader
purpose: How agents coordinate writes on Web Grok (4-agent teams) vs Grok Build — so voluntary boards and platform behavior do not fight each other
related:
  - "[[Skills/Custom/load-master]]"
  - "[[_meta/WRITE_QUEUE]]"
  - "[[_meta/CHECKOUT_LOCKS]]"
  - "[[Process/Vault-Write-Lock-Protocol]]"
  - "[[Methodology/Anti-Infinite-Loop-Checklist]]"
  - "[[AGENTS.md]]"
tags: [process, multi-agent, harness, github, coordination, hard-stops]
---

# Multi-Agent Coordination

**Problem:** Parallel agents + GitHub tools produce false “Another agent already completed…” responses, empty WRITE_QUEUE boards, and missing commits.

**Principle:** Policy boards (Load Master, CHECKOUT) are correct but **voluntary**. The runtime does not enforce them. Coordination must match **how each product actually schedules agents**.

---

## Two runtimes

| Dimension | **Web Grok (team, ≤4 agents)** | **Grok Build** |
|-----------|--------------------------------|----------------|
| Shape | Leader + specialists, shared chatroom | Often one primary agent per job |
| Parallelism | High by default on broad prompts | Usually sequential steps in one job |
| Write surface | Shared GitHub MCP for all | Workspace-local ± optional GitHub |
| Failure mode | Tool dedupe → false success, no commit | Branch/workspace conflicts |
| Effective control | **Sole writer + STAND DOWN + SHA verify** | **One owner per branch/job** |

---

## Boards (still valid — know their limits)

| Board | Question | Enforced by platform? |
|-------|----------|------------------------|
| **WRITE_QUEUE** | Whose turn is next? | **No** — agents must obey |
| **CHECKOUT_LOCKS** | Who holds this path now? | **No** — soft + durable claim only |
| **REVIEW_QUEUE** | May this become permanent doctrine? | Human / process |

Load Master answers “whose turn?” GrokRarian answers “who has path?” Neither stops another agent from calling `push_files` unless the **team stands down**.

---

## Hard stops (writes)

| Bound | Default |
|-------|---------|
| GitHub write attempts without verified SHA success (same path / session) | **2** then STAND DOWN / escalate |
| Identical race / “already completed” without SHA | Treat as fail; does **not** count as progress |
| After max attempts | Escalate to user or Load Master; do not spin |

Full table: [[Methodology/Anti-Infinite-Loop-Checklist]].

---

## Web Grok (4-agent team)

### Default roles

| Agent | GitHub writes on contended repos? |
|-------|-------------------------------------|
| **Team leader** | **Yes** — default sole writer for Vault / My-Mind / Work-Mind / Codex architecture |
| **Specialists** | **No** by default — research, draft in chat, verify SHAs after leader writes |
| **Exception** | User names one specialist as sole writer for a **named** path set |

### Write protocol

```text
1. SOLE_WRITE | repo: <name> | paths: … | others: STAND DOWN
2. Specialists: no create_or_update_file / push_files on that repo
3. Writer commits
4. Confirm: list_commits / get_file_contents — require SHA
5. DONE | SHA: <hash>
6. Next path or repo only after confirm
```

### Never trust without proof

Platform message **“Another agent already completed successfully”** does **not** mean the remote has your commit. Always verify SHA or file contents. After **2** unverified attempts → escalate.

### Safe parallel vs serial

| Parallel (OK) | Serial only |
|---------------|-------------|
| Fetch posts, browse, analysis | `push_files` / `create_or_update_file` |
| Draft text for the writer | Same repo path prefix |
| SHA verify after a write | “Help finish the same commit” |

### User prompt patterns

| Risky | Better |
|-------|--------|
| “Retry mirrors” / “Finish” | “Grok sole writer: push Codex only; others stand down” |
| “Commit everything” | One repo, one path set, one agent |

### Chatroom lines

```text
STAND DOWN | repo: <name> | sole: <agent>
SOLE_WRITE | <agent> | repo: … | paths: …
DONE       | <agent> | SHA: <hash> | repo: …
```

Optional: ENQUEUE / GRANT on `_meta/WRITE_QUEUE.md` for audit — **chatroom STAND DOWN is the real control** on Web Grok.

---

## Grok Build

| Concern | Rule |
|---------|------|
| Single job | One agent owns the branch; sequential steps inside the job |
| Multiple jobs | One branch per job, or queue merges to shared `main` |
| App code | Feature branch + PR; no chatroom CHECKOUT required for every local file |
| Vault / Codex via GitHub MCP | Same **sole-writer + SHA confirm** as Web Grok |
| Second job same branch | Do not start without merge or explicit queue |

Build contention is usually branch/workspace ownership, not four chat agents sharing one MCP call.

---

## Relation to existing process

- **Vault Write-Lock Protocol** — CHECKOUT for exclusive holds; still use when multi-file controlling docs.
- **Load Master** — priority and GRANT when the team is disciplined; on Web Grok, pair GRANT with STAND DOWN or sole-writer default.
- **REVIEW_QUEUE** — unchanged; coordination does not approve doctrine.
- **Anti-Infinite-Loop-Checklist** — numeric bounds for write attempts and identical-fail.

---

## Boot checklist (team sessions)

1. Contended write coming? → name **sole writer** and **repo**.
2. Others → STAND DOWN on that repo’s write tools.
3. Write → **confirm SHA** → DONE.
4. Never treat platform “already completed” as success without proof.
5. After 2 unverified attempts → escalate (do not spin).

---

## Summary

| Runtime | Control that works |
|---------|-------------------|
| Web Grok 4-agent | Sole writer + stand down + SHA verify (max 2 attempts) |
| Grok Build | One owner per job/branch; sole writer if sharing GitHub MCP on docs |

Policy boards remain the map. **Runtime behavior requires explicit sole-writer discipline.**
