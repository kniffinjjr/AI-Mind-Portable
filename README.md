# AI Mind Vault

**Portable documentation for agentic work.**  
Any person can establish this architecture and use it.

**This is the public portable edition** (single commit, no history).  
Clone it, copy `PATHS.example.md` → `PATHS.md`, and create empty My Mind / Work Mind folders.

The Vault holds controlling knowledge only: operating rules, skills, personas, methodology, and process.  
**My Mind** (personal) and **Work Mind** (work IP) are separate surfaces for project residue.  
See [[Concepts/AI-Mind-Architecture]] and [[Process/Establishing-Your-Minds]].

---

## Structure (portable)

| Path | Role |
|------|------|
| `AGENTS.md` | Portable operating rules — boot every session |
| `PATHS.example.md` | Remap roots for GitHub / local Git / plain dir / Obsidian |
| `Concepts/` | Architecture ideas (HLG, Memory Engineering, FDE, …) |
| `Methodology/` | Workflows, templates, checklists |
| `Skills/` | Operational skills + short instruction packs (generic agent profiles) |
| `Process/` | How the documentation is maintained (approval, locks, adopter guide) |
| `Templates/` | Reusable note templates |
| `_meta/` | Review Queue, Checkout Locks, Changelog, Conventions |

**Portable scope:** this public edition carries the overall architecture, methodology, process, and a representative set of agent profiles. Domain skills, external-tool catalogs, and research captures live in the private Agentic OS.

**Not portable residue:** personal project trees, identity brain dumps, and work deliverables belong in **My Mind** / **Work Mind**, not here.

---

## Backends

| Mode | Notes |
|------|--------|
| GitHub | Multi-agent + remote; use Checkout Locks |
| Local Git | Version history, optional offline |
| Plain directory | File read/write only |
| Obsidian | Open folder as vault; optional kepano/obsidian-skills |

Core docs are tool-agnostic. Set `PATHS.md` from `PATHS.example.md`.

---

## Approval gate

Permanent changes to controlling documentation go through `_meta/REVIEW_QUEUE.md` unless the owner directly authorizes the work.

---

## Quick start for a new adopter

1. Clone or copy this tree  
2. `cp PATHS.example.md PATHS.md` and set roots  
3. Create empty **My Mind** and **Work Mind** directories (see `Process/Establishing-Your-Minds.md`)  
4. Point agents at `AGENTS.md`  

Created 2026-08-02 · Portable multi-backend + adopter guide 2026-08-08.

---

## Privacy / portability contract

This Vault must stay **grab-able by anyone** without inheriting the original author's identity, employer, home, or machine.

**Allowed:** methodology, skill overlays, generic examples, public third-party links.

**Not allowed:** legal name, emails, GitHub/X handles as identity, employer names, addresses, vehicles, RV/home details, compensation, machine paths (`C:\Users\…`, `E:\…`), instance project overviews, or product SSOT.

Instance residue goes in **My Mind** / **Work Mind** (`PATHS.md`, gitignored).
