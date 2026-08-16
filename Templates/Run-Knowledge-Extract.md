---
title: Run Knowledge Extract
type: template
status: live
created: 2026-08-12
related:
  - "[[Methodology/Knowledge-Structure-Choices]]"
  - "[[Templates/Project-Knowledge-Extract-README]]"
  - "[[Templates/Hypergraph-Entry-Criteria]]"
  - "[[Concepts/Harness-Loop-Graph-Architecture]]"
  - "[[Concepts/Memory-Engineering]]"
tags: [template, residue, memory, extract, nodes, edges]
---

# Run Knowledge Extract

**Purpose:** After a meaningful agent run (research, radar, multi-agent, design review), leave **durable linked residue** so the next run does not start from a session trash can.

**Where this file lives (instance data — never in Vault):**

```text
{MY_MIND_ROOT|WORK_MIND_ROOT}/Projects/<slug>/knowledge/extract/
  YYYY-MM-DD-<short-slug>.md     ← this template, one file per run
  README.md                      ← from Project-Knowledge-Extract-README
```

| Content | Root |
|---------|------|
| Personal project | **My-Mind** |
| Work / company IP | **Work-Mind** |
| How-to / this template | **AI Mind Vault** only |

---

## When to fill

| Fill | Skip |
|------|------|
| Multi-source research, swarm, or long analysis | Pure chat with no lasting claims |
| Findings that should compound next week | One-off trivia |
| Contradictions, hubs, single points of failure | Unverified speculation only |

If in doubt: **one short extract beats zero**. Empty sections are fine; omit noise.

---

## Filing steps (agent + human)

1. Choose **My-Mind** vs **Work-Mind** (IP firewall).
2. Path: `Projects/<slug>/knowledge/extract/YYYY-MM-DD-<slug>.md`
3. Create folder README once per project if missing (`Templates/Project-Knowledge-Extract-README`).
4. Tell **GrokRarian**: “file extract at …” so path is known.
5. **Next run** loads this extract (or the project extract folder) before regenerating research.

Page Master only if the extract later becomes a user guide / runbook — not for every run file.

---

## Template body (copy below)

```markdown
---
project: <slug>
mind: My-Mind | Work-Mind
date: YYYY-MM-DD
run_type: research | radar | multi-agent | design | other
sources: []   # urls, docs, chat ids
structure: binary-graph | hypergraph | lists | mixed
entry_criteria: n/a | see Hypergraph-Entry-Criteria score
---

# Extract — <topic> — <YYYY-MM-DD>

## Context
- Goal of this run:
- What was already known (prior extracts):

## Nodes
| id | type | claim / label | source | confidence |
|----|------|---------------|--------|------------|
|    | entity / claim / tool / person / asset |  |  | high / med / low |

## Edges
| from | relation | to | evidence | note |
|------|----------|----|----------|------|
|      | depends_on / same_counterparty / contradicts / supports / routes_through |  |  |  |

## Hyperedges (only if entry criteria passed)
| members (3+) | relation | evidence |
|--------------|----------|----------|
|              |          |          |

## Open / contradictions
- 

## Single points of failure / hubs
- 

## Next questions
- 

## Residue note
- Safe to rebuild from sources listed above.
- Do not copy Work-Mind extracts into Vault or My-Mind.
```

---

## Minimal variant (small runs)

If the full table is overkill:

```markdown
# Extract — <topic> — <date>
**Mind:** My-Mind | Work-Mind | **Project:** <slug>

**Nodes:** …
**Edges:** A → relation → B (evidence)
**Open:** …
**Next:** …
```

---

## Alignment

- Structure ladder + IP split: [[Methodology/Knowledge-Structure-Choices]]
- Hypergraph gate: [[Templates/Hypergraph-Entry-Criteria]]
- Project folder README: [[Templates/Project-Knowledge-Extract-README]]
- Intentional residue / no session trash can: HLG + Memory Engineering
