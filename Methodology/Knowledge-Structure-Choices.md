---
title: Knowledge Structure Choices
type: methodology
status: live
created: 2026-08-10
updated: 2026-08-12
related:
  - "[[Templates/Hypergraph-Entry-Criteria]]"
  - "[[Templates/Project-Knowledge-Extract-README]]"
  - "[[Templates/Run-Knowledge-Extract]]"
  - "[[Process/Establishing-Your-Minds]]"
  - "[[Methodology/Reversibility-Class-Checklist]]"
  - "[[Concepts/Harness-Loop-Graph-Architecture]]"
tags: [methodology, memory, harness, hypergraph, knowledge, residue]
---

# Knowledge Structure Choices

**Purpose:** Decide *how* to structure knowledge for a project — and *where* instance data lives.

This file is **portable doctrine** (AI Mind Vault).  
**Actual extracts** (graphs, hypergraphs, embeddings outputs) live only under **My Mind** or **Work Mind** project folders — never as a global Vault database.

---

## Three-mind split (non-negotiable)

| Mind | Holds |
|------|--------|
| **AI Mind Vault** | **How** the system works: structure ladder, hypergraph entry criteria, filing rules, tool patterns |
| **My Mind** | **Actual** knowledge extracts for *personal* projects |
| **Work Mind** | **Actual** knowledge extracts for *work* projects (IP firewall) |

```text
Vault     →  “when and how to use hypergraphs”
My/Work   →  “the extract for this project”
```

Do not build one hypergraph spanning Vault + My Mind + Work Mind. Do not put company extracts in My Mind or the portable Vault.

---

## Structure ladder (choose the simplest that answers the questions)

| Level | Use when |
|-------|----------|
| **Chunks / vector RAG** | Single-hop facts, FAQ, small corpus |
| **Lists / sets / Pydantic** | Typed fields, checklists, forms |
| **Binary knowledge graph** | Mostly pairwise relations; multi-hop entity paths |
| **Hypergraph** | Native **arity ≥ 3** facts; joint multi-party meaning lost if split |
| **Temporal / spatial / spatio-temporal** | When / where are first-class for queries |

**Agent Graph Engineering** (workflow topology in HLG) is a *different* layer. Do not confuse agent graphs with knowledge graphs.

---

## Run residue (avoid the session trash can)

After a meaningful agent run, deposit a **Run Knowledge Extract** so the next run compounds instead of regenerating.

| Artifact | Template |
|----------|----------|
| Per-run nodes / edges / open / next | [[Templates/Run-Knowledge-Extract]] |
| Per-project extract folder README | [[Templates/Project-Knowledge-Extract-README]] |
| Hypergraph yes/no gate | [[Templates/Hypergraph-Entry-Criteria]] |

**Default path:**

```text
{MY_MIND_ROOT|WORK_MIND_ROOT}/Projects/<slug>/knowledge/extract/
  YYYY-MM-DD-<slug>.md
  README.md
```

Process: fill extract → GrokRarian knows the path → **next run loads extract first**. Optional graph DB tools later; process first.

---

## Hypergraph — how the system functions (Vault knowledge)

### What it is

- Ordinary graph edge: connects **2** entities.  
- Hyperedge: connects **n ≥ 2** entities in **one** relation (plus optional natural-language or typed description).

Binary encoding of an n-ary fact forces hubs or loses “jointly” meaning.

### Pipeline (conceptual)

```text
Sources (docs under project)
  → Entry criteria gate (see template)
  → Extract (LLM / tool: binary KG or hypergraph or temporal…)
  → Store under project knowledge/extract/
  → Retrieve / search when answering
  → Sources remain source of truth (extract is rebuildable residue)
```

### Entry criteria

Full checklist: [[Templates/Hypergraph-Entry-Criteria]].

**Short rule:** Use hypergraph only when native multi-entity facts are central to high-value queries and pairwise encoding demonstrably loses joint meaning; otherwise prefer binary KG or chunks.

### Tools (optional harness — not required)

Examples: Hyper-Extract CLI, HyperGraphRAG-class methods, domain YAML templates. Choose per project; Vault does not mandate a vendor.

---

## Where instance data lives

```text
{MY_MIND_ROOT|WORK_MIND_ROOT}/Projects/<slug>/
  Overview.md
  Lessons-Learned.md          # optional
  knowledge/                  # optional — only if structured extract is justified
    sources/                  # pointers or copies of inputs
    extract/
      README.md               # from Templates/Project-Knowledge-Extract-README
      YYYY-MM-DD-<slug>.md    # from Templates/Run-Knowledge-Extract
      hypergraph/             # or graph/, temporal/, etc. if bulk tool output
```

| Content | Root |
|---------|------|
| Personal project extracts | My Mind |
| Work project extracts | Work Mind |
| How-to / criteria / templates | AI Mind Vault |

---

## Promotion

- Portable *lessons* about structure → REVIEW_QUEUE → Vault methodology.  
- Graph *data* stays in the mind that owns the IP.  
- Never auto-merge Work extracts into Vault or My Mind.

---

## Related

- Per-run extract: [[Templates/Run-Knowledge-Extract]]  
- Entry checklist: [[Templates/Hypergraph-Entry-Criteria]]  
- Per-project README: [[Templates/Project-Knowledge-Extract-README]]  
- Adopter layout: [[Process/Establishing-Your-Minds]]  
