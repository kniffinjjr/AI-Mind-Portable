---
title: Hypergraph Entry Criteria
type: template
related:
  - "[[Methodology/Knowledge-Structure-Choices]]"
---

# Hypergraph Entry Criteria

Use **before** extracting a hypergraph for a project. Score Yes / Partial / No.

Prefer hypergraph only if **≥3 strong Yes** on core criteria **and** at least one payoff **and** cost gates clear.

## Core

| # | Criterion | Yes / Partial / No |
|---|-----------|--------------------|
| H1 | Native arity ≥ 3 facts matter | |
| H2 | Joint integrity lost if split to pairwise | |
| H3 | Queries need the whole multi-entity set | |
| H4 | Source text states multi-party facts together | |

## Payoff (need ≥1 strong Yes)

| # | Criterion | Yes / Partial / No |
|---|-----------|--------------------|
| H5 | Shallower reasoning paths under token limits | |
| H6 | Avoids fake hub nodes | |
| H7 | Domain schema/templates affordable | |

## Cost gates (any strong No → defer)

| # | Gate | Pass? |
|---|------|-------|
| C1 | Not “simple FAQ / tiny corpus only” | |
| C2 | Extraction + review budget exists | |
| C3 | Can evaluate hyperedge correctness | |
| C4 | Ops can maintain extract search | |

## Decision

| Result | Structure |
|--------|-----------|
| Core weak | Chunks / lists / binary KG |
| Core strong + payoff + gates pass | **Hypergraph candidate** |
| Time/place first-class in queries | Consider temporal / spatial types |

## Pilot (required before defaulting)

1. Sample 20–50 real questions.  
2. Count how many need ≥3 entities in one relation.  
3. If &lt;20% → do not hypergraph.  
4. If ≥30–40% high-value → pilot extract on one doc set; compare faithfulness vs binary KG.

**Project:** _____________  
**Mind root:** My-Mind / Work-Mind  
**Date:** _____________  
**Decision:** defer / binary KG / hypergraph pilot / adopt  
