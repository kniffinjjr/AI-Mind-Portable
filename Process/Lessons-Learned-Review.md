---
title: Lessons Learned Review
type: process
status: live
created: 2026-08-09
related:
  - "[[Skills/Custom/lessons-learned]]"
  - "[[Templates/Lessons-Learned]]"
  - "[[_meta/REVIEW_QUEUE]]"
  - "[[Process/Establishing-Your-Minds]]"
  - "[[Methodology/Nested-Cycles]]"
tags: [process, outer-loop, residue, review]
---

# Lessons Learned Review

**Purpose:** Capture actionable lessons when a project completes or after a major revision, so the system compounds instead of repeating the same failures.

This is an **outer Nested Cycle** residue process. Human review gates permanent commits.

---

## When to run

| Trigger | Example |
|---------|--------|
| Project complete / shipped | Feature done, migration finished, product handoff |
| Major revision | Architecture pivot, abandoned approach, large refactor |
| Production incident / costly failure | After recovery, before “move on” |
| Explicit ask | “lessons learned”, “postmortem”, “close out” |

---

## Loop

```text
Scope → Gather → Extract → Classify → Draft → Human review → Commit
```

1. **Scope** — Project, mind root (My Mind / Work Mind / product), complete vs revision, window.
2. **Gather** — Evidence: decisions, failures, costs, handoffs, write-lock races, user corrections. No invention.
3. **Extract** — Actionable lessons only.
4. **Classify**
   - **Local** — project / personal / work-IP specific
   - **Portable** — methodology or process any adopter could reuse
5. **Draft** — [[Templates/Lessons-Learned]]
6. **Human review** — Approve, edit, or reject. Portable Vault changes never auto-merge.
7. **Commit**
   - Local → `Projects/<name>/Lessons-Learned.md` under the correct mind root (append dated section if file exists)
   - Portable → `_meta/REVIEW_QUEUE.md` until owner directs Vault `Process/` or `Methodology/` placement

---

## Filing (PATHS-aware)

| Content | Root |
|---------|------|
| Personal project lessons | `MY_MIND_ROOT` |
| Work / company IP lessons | `WORK_MIND_ROOT` |
| Portable process / methodology | `VAULT_ROOT` only after REVIEW_QUEUE + owner direction |

Do not put company residue in the portable Vault. Do not put undeveloped personal notes in Work Mind.

---

## Quality bar

- Every “what failed” ties to evidence and a mechanism (Harness / Loop / Graph / skill gap / process gap)
- Actions have an owner sense (human, skill, or next project checklist)
- Prefer fewer sharp lessons over long narrative
- Update related skills only with explicit direction

---

## Ownership

| Role | Duty |
|------|------|
| **lessons-learned skill** | Run the loop; draft; propose commit plan |
| **Page Master** | Optional polish of the written artifact |
| **GrokRarian** | Path orientation |
| **Load Master** | Serialize multi-agent Vault/GitHub writes |
| **Human** | Approve commits and portable promotions |
