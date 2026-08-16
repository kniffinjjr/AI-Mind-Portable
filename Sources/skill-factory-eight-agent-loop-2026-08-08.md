---
title: Skill Factory — eight-agent continuous skill discovery loop
type: source
created: 2026-08-08
source: https://x.com/imryven/status/2086177599705977138
tags: [outer-loop, radar, skill-factory, human-gate]
related:
  - "[[Methodology/AI-Tech-Radar]]"
  - "[[_meta/AI-Tech-Radar-Watchlist]]"
  - "[[Methodology/Nested-Cycles]]"
  - "[[_meta/REVIEW_QUEUE]]"
---

# Skill Factory — source capture

**Claim:** One continuous loop of eight stages that discovers GitHub capabilities, packages them as skills, and grows a persistent library — with human approval before publish.

## Stages (portable names)

| Stage | Job |
|-------|-----|
| Discover | Find candidates (GitHub / X / user inject) |
| Filter | Drop noise before expensive read |
| Read | Understand docs + code |
| Extract | Pull reusable workflows |
| Score | Objective fit check — fail → stop |
| Generate | Standardize into skill package |
| Review | Human approve / reject |
| Publish | Library entry (Vault skill / Source) |

**Flywheel:** library → richer context → better discoveries → stronger skills.  
**Hard rule:** automation proposes; humans approve. Nothing enters the library without review.

## Mapping to AI Mind

| Stage | Our implementation |
|-------|--------------------|
| Discover + Filter + Score | **AI Tech Radar** (automated scan + checklist) |
| Read + Extract | Selective absorption / source notes |
| Generate | Skills/Custom + short instructions |
| Review + Publish | **REVIEW_QUEUE** + owner direction |
| Library | AI Mind Vault |

## Absorption

Adopt the **stage names and gates** into [[Methodology/AI-Tech-Radar]].  
Do **not** require eight permanent agent personas — stages can be one skill with hard stops.
