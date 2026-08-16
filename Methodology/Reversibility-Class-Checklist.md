---
title: Reversibility Class Checklist
type: methodology
created: 2026-08-08
status: active
tags: [harness, loop, safety, gates]
related:
  - "[[Sources/shepherd-agent-native-git-2026-08-08]]"
  - "[[Concepts/Harness-Loop-Graph-Architecture]]"
  - "[[Methodology/Production-Ready-Design-Checklist]]"
  - "[[Methodology/Loop-Engineering-Template]]"
---

# Reversibility Class Checklist

**Rule:** The less reversible an action is, the earlier governance must happen.

Use when designing tools, agent graphs, or human gates. Complements Writer ≠ Checker and “done is a claim until proof.”

---

## Classes

| Class | Meaning | Default control |
|-------|---------|-----------------|
| **R0 — Fully reversible** | Sandbox files, drafts, temp state; undo is automatic or trivial | Soft checks; log residue |
| **R1 — Reversible with undo pair** | DB write, config change, ticket update — only if matching undo exists *before* the action | Require undo tool or rollback path in harness; verify undo in loop |
| **R2 — Costly / partial** | Large refactors, multi-file commits, long-running jobs; recoverable with effort | Checkpoint + human or supervisor review before promote |
| **R3 — Irreversible external** | Send email, charge card, publish public, legal notice, OTA to hardware, money movement | **Human gate before call**; no “fix after send” |

---

## Checklist (per tool or graph edge)

- [ ] What class is this action (R0–R3)?
- [ ] If R1: is the undo path implemented and tested *before* enablement?
- [ ] If R2: is there a checkpoint / branch / residue snapshot before mutate?
- [ ] If R3: is there an explicit human gate *before* the tool fires?
- [ ] Does the agent (or supervisor) see evidence *before* promoting residue?
- [ ] On failure: stop / revert / escalate — never unbounded “fix” on confidence alone

---

## Domain reminders (examples)

| Domain | Typical R3 / high-stakes |
|--------|-------------------------|
| Legal / rental ops | Notices, money movement |
| Employer production systems | Vault/PDM mutations without audit |
| Embedded / OTA | Firmware without interlock + human gate |
| Trading | Live orders |
| Comms | External email / public post as the agent |

---

## Relationship

- **Harness:** classify tools by reversibility; expose only granted classes
- **Loop:** evidence + stop rules; prefer revert over blind retry when R0–R2
- **Graph:** put human/supervisor nodes *before* R3 edges
- **Load Master / CHECKOUT:** multi-agent *file* contention — orthogonal to intra-run trajectory rewind

Inspired by selective absorption of Shepherd (agent-native run traces); **no runtime dependency** required to apply this checklist.
