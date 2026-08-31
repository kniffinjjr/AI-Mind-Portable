# AGENTS.md — AI Mind Portable Operating Rules

Instruction surface for Codex, Claude Code, Grok, **Grok Build**, and any agent working from this vault or related projects.

**Vault role:** portable controlling documentation only — any person can establish and use it.  
Domain ops live in **skills**. Person-specific residue lives in **My Mind** (personal) or **Work Mind** (work IP).  
Product code lives in product repos. Workflow detail: `Methodology/Agent-Operating-Workflows.md`.

**Paths:** read `PATHS.md` when present (from `PATHS.example.md`); otherwise treat the directory containing this file as `VAULT_ROOT`.

---

## 0. Boot (every session)

1. Obey this file.
2. Resolve `PATHS.md` (Vault / My Mind / Work Mind roots). Do not invent a third root.
3. Classify task (W1): domain skill? inner loop? mid graph? outer improve?
4. Prefer existing vault notes over inventing principles.
5. Externalize state as files. Done requires proof artifacts.

---

## 1. Core architecture (Harness · Loop · Graph)

- **Harness** — tools, state, permissions, observability, context injection, safety around the model.
- **Loop** — work → evidence → feedback with hard stopping rules. **Never loop on confidence.**
- **Graph** — explicit topology only when **Qualifying Test** is met.

Nested grains: **Inner** (turn) ⊂ **Mid** (job/pipeline) ⊂ **Outer** (improve the system). Same seven loop fields at every grain. See `Methodology/Nested-Cycles.md`.

**Important separation (2026-08-14):** High-level HLG principles (evidence over confidence, smallest graph, Writer ≠ Checker, Qualifying Test) belong here and in `Concepts/Harness-Loop-Graph-Architecture`. The *detailed* Skill Execution Contract (max tool attempts table, “narration ≠ progress”, single-pass anti-meta-loop rules) lives **only** inside the `harness-loop-graph` skill and applies **only while that skill is active**. Do not promote those bounds into the default agent turn or ordinary coding work — that previously made simple tasks slow.

---

## 2. Graph rules

**Qualifying Test** — multi-node graph only if several apply: multiple steps, independent sources, parallel paths, independent checks, material risk, required human approvals. Else better prompt + context.

**Diamond (default research shape)**  
Planner → parallel researchers → independent Skeptic → Merge → Human gate.

**Writer ≠ Checker** — do not grade your own output in the same context.

**Intentional Residue** — every meaningful step leaves durable artifacts. Shared state is external memory.

**Start Manual → Validate → Automate** — draw topology; run it by hand once; then automate.

**Smallest graph** that improves quality. Human gates where mistakes are expensive.

**Static vs dynamic** — stable pipeline = static graph; work that creates/cancels tasks mid-run = dynamic board.

**Done is a claim until proof.**

---

## 3. Operating workflows (summary)

| ID | Use |
|----|-----|
| **W1 Classify** | Skill vs inner vs mid vs outer before multi-step work |
| **W2 Design** | New system: Harness → Loop → Qualifying Test → Graph → Checklist → manual run |
| **W3 Execute** | Inner default; mid if qualified; residue each stage |
| **W4 Diagnose** | Layer then grain; fix owner first; then model |
| **W5 Handoff** | Pre-split test; Handoff artifact with ruled-out paths |
| **W6 Improve** | Probe Suite / RAI outer loop only |
| **W7 Vault change** | REVIEW_QUEUE or explicit owner direction |
| **W8 Write lock + queue** | Contended multi-agent writes: Load Master grant (velvet rope) then CHECKOUT (see §7) |

Full steps: `Methodology/Agent-Operating-Workflows.md`.  
Write-lock: `Process/Vault-Write-Lock-Protocol.md`.  
Write queue: `Skills/Custom/load-master.md` · `_meta/WRITE_QUEUE.md`.  
Adopter guide: `Process/Establishing-Your-Minds.md`.

---

## 4. Cost & context (coding agents)

- Structural / blast-radius context over full-repo dumps.
- Map once; inject the relevant slice.
- Dual metric: quality **and** tokens/$ per successful task.
- See `Methodology/Cost-Efficient-Coding-Agent-Context.md`.

---

## 5. Failure quick card

```text
Missing capability / lost state / no audit → Harness
Unbounded retry / no evidence / self-grade → Loop
Wrong order / skipped gate / bad merge → Graph
Can't tell if improved → Outer residue / eval missing
Parallel write race / silent no-op → missing Load Master grant or write lock (W8)
Wrong root for residue → check PATHS.md (My Mind vs Work Mind vs Vault)
```

Then ask: **which grain?** Do not rewrite outer because inner lacked a stop.

---

## 6. Handoff (no amnesia)

Before a second agent: pre-split test. If they need most of your context, do not split.

Handoff must include: Intent · Decisions · Artifacts by ref · **Ruled-out paths** · Open questions · Next action as receiver spec. See `Methodology/Handoff-Artifact-Spec.md`.

---

## 7. Vault conventions & backends

- **Portable docs only** under `VAULT_ROOT`: Concepts/, Methodology/, AGENTS.md, Skills/, Process/, Templates/, `_meta/`.
- **My Mind** (`MY_MIND_ROOT`): personal projects, notes, undeveloped ideas, personal deliverables.
- **Work Mind** (`WORK_MIND_ROOT`): work-only residue — IP firewall (company time/resources → company ownership).
- Permanent vault edits: `_meta/REVIEW_QUEUE.md` unless owner directs.
- Domain residue is **not** stored as vault methodology.

### Backends (tool-agnostic core)

| Mode | Notes |
|------|--------|
| GitHub | Remote + multi-agent; **Load Master queue + Checkout Locks** (GitHub handles concurrent multi-agent writes poorly) |
| Local Git | Version history; same conventions when multi-agent |
| Plain directory | File I/O only; still use promotion discipline |
| Obsidian | Open `VAULT_ROOT` as vault; see `Skills/Custom/obsidian-markdown.md` |

### Velvet ropes + write locks (multi-agent)

**Load Master** (queue) and **CHECKOUT** (exclusive hold) are orthogonal. Librarian does **not** manage the line.

When multi-agent contention is possible (especially GitHub):

1. **Enqueue** with Load Master (`_meta/WRITE_QUEUE.md`) — priority P0–P3.
2. Wait for **GRANT** (do not jump the rope).
3. **CHECKOUT** paths (`_meta/CHECKOUT_LOCKS.md` or ask Librarian “who has X?”).
4. Write **sequentially** (prefer one `push_files` batch).
5. **DONE** to Load Master + **RELEASE** checkout.

| Role | Question |
|------|----------|
| Load Master | Whose turn / priority? |
| GrokRarian | Who has path X? / what does the Vault say? |
| CHECKOUT | Exclusive hold while writing |

**Free lane (no queue):** pure reads, Drafts/, single-agent uncontended creates.

Full queue skill: `Skills/Custom/load-master.md`. Full lock protocol: `Process/Vault-Write-Lock-Protocol.md`.

---

## 8. Offline / no remote

1. This AGENTS.md is the complete portable mind.
2. Externalize intermediate state as local files under the correct root (Vault / My Mind / Work Mind).
3. Separate generation from verification.
4. Request missing controlling excerpts; do not invent a new architecture.

---

## 9. Skills

- **Skills** — activate when triggered; they **apply** HLG; they do not replace it. The detailed hard-stop contract of `harness-loop-graph` remains skill-session only.
- Install code in **product / project repos**, not as binaries in the Vault.
- Domain- and tool-specific skills live in the private Agentic OS, not in this portable edition.

---

Adhere strictly. When in doubt: externalize state, separate writer from checker, stop on evidence, ask which grain, check PATHS.md. Under multi-agent GitHub work: respect the velvet rope.
