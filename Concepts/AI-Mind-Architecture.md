---
title: AI Mind Architecture
type: concept
status: live
created: 2026-08-08
updated: 2026-08-08
tags: [architecture, portable, memory, minds]
related:
  - "[[AGENTS.md]]"
  - "[[Process/Establishing-Your-Minds]]"
  - "[[PATHS.example]]"
  - "[[Concepts/Memory-Engineering]]"
  - "[[Concepts/Harness-Loop-Graph-Architecture]]"
---

# AI Mind Architecture

**The AI Mind Vault is portable documentation.**  
Any person can establish it and use it. It is not locked to one owner.

Person-specific project residue lives in **My Mind** (personal) and **Work Mind** (work IP).  
**Codex Mind Pack** (or equivalent) is a work-safe adaptation of Vault rules for locked-down environments.

---

## Four surfaces

```
┌──────────────────────────────────────────────────────────────┐
│                    AI MIND VAULT                             │
│         Portable documentation — any person can use          │
│  Workflows · Skills · Personas · AGENTS.md · Methodology     │
│  Review Queue · Checkout Locks · Librarian · Technical Writer│
└────────────────────┬─────────────────────┬───────────────────┘
                     │                     │
         ┌───────────▼──────────┐  ┌───────▼──────────────────┐
         │      MY MIND         │  │      WORK MIND           │
         │   (person-specific)  │  │   (person-specific)      │
         │  Personal projects   │  │  Work-only projects      │
         │  Notes, drafts       │  │  IP firewall             │
         │  Personal deliverables│  │  Company time/resources  │
         └──────────────────────┘  └────────────┬─────────────┘
                                                │
                                   ┌────────────▼─────────────┐
                                   │  CODEX MIND PACK (opt.)  │
                                   │  Work-safe adaptation of │
                                   │  Vault rules for work PCs│
                                   └──────────────────────────┘
```

| Surface | What it is | Ownership |
|---------|------------|-----------|
| **AI Mind Vault** | Portable controlling documentation | Any adopter |
| **My Mind** | Personal notes, projects, scripts, undeveloped ideas | That person |
| **Work Mind** | Work-only residue (IP separation) | That person at work; company typically owns work-time output |
| **Codex Mind Pack** | Subset of Vault rules without personal residue | Shared pattern |

---

## Tool backends (Vault is agnostic)

The Vault is a set of Markdown files. How you store and edit them is configurable via `PATHS.md`:

| Backend | Use when |
|---------|----------|
| **GitHub** | Multi-device, multi-agent, remote collaboration |
| **Local Git** | Version history without a remote, or offline |
| **Plain directory** | Simplest; no git required |
| **Obsidian** | Human browsing with wikilinks, graph, search |

See `PATHS.example.md`. Core rules in `AGENTS.md` do not depend on GitHub APIs.

---

## What stays in the Vault

- `AGENTS.md` — portable operating rules  
- `Concepts/` — architecture ideas  
- `Methodology/` — workflows and templates  
- `Skills/` — operational skills + short instructions  
- `Process/` — how the documentation is maintained  
- `Sources/` — external captures  
- `Templates/`, `_meta/` — gates and conventions  

**Not in the Vault:** personal project trees, brain dumps of identity, work deliverables, domain trackers. Those belong in My Mind or Work Mind.

---

## Memory principle

Storage is not memory. Keep facts and skills; control the write path; prefer inspectable files. Dual metric: quality and cost per correct outcome. See [[Concepts/Memory-Engineering]].

---

## For adopters

See [[Process/Establishing-Your-Minds]] — how any person stands up Vault + My Mind + Work Mind on their machine.
