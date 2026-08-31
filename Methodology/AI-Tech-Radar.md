---
title: AI Tech Radar
type: methodology
status: live
created: 2026-08-05
updated: 2026-08-16
related:
  - "[[AGENTS.md]]"
  - "[[Methodology/Agent-Operating-Workflows]]"
  - "[[Methodology/Anti-Infinite-Loop-Checklist]]"
  - "[[Methodology/RAI-Improvement-Loop-Template]]"
  - "[[Concepts/Eval-Engineering]]"
  - "[[Skills/Custom/ai-tech-radar]]"
  - "[[Skills/Custom/grokrarian]]"
  - "[[_meta/AI-Tech-Radar-Watchlist]]"
  - "[[_meta/AI-Tech-Radar-Bookmarks]]"
  - "[[_meta/AI-Tech-Radar-Project-Queries]]"
  - "[[Sources/skill-factory-eight-agent-loop-2026-08-08]]"
tags: [methodology, radar, outer-loop, w6, automation, skill-factory, hard-stops]
---

# AI Tech Radar — Outer-Loop Technology Review

**Purpose:** Systematically surface novel AI ideas, tools, architectures, multi-agent systems, harness/loop/graph patterns, eval methods, memory systems, and **skills useful to active projects** — without the human hunting every candidate.

This is a **W6 / outer Nested Cycle** process. Human gate remains mandatory for any permanent Vault change (Review → Publish).

---

## Operating model

| Who | Does |
|-----|------|
| **Radar skill (default)** | Discover → Filter → Score → append Watchlist; re-check Bookmarks; **project skill search** |
| **User** | Supplements (`radar this:`); bookmarks; weekly review; approve High promotions |
| **Human / REVIEW_QUEUE** | Gate for Source / Concept / Skill publish |

---

## Skill Factory stages

| # | Stage | Automated? | Output |
|---|-------|------------|--------|
| 1 | **Discover** | Yes (X + GitHub + Bookmarks + **projects** + inject) | Raw candidates |
| 2 | **Filter** | Yes | Drop noise |
| 3 | **Read** | On demand / High | Docs + code |
| 4 | **Extract** | On demand / High | Workflow notes |
| 5 | **Score** | Yes (7 dimensions; Domain Fit weighted for project hits) | Pass / stop |
| 6–8 | Generate / Review / Publish | Human-gated | Skill / Source |

**Default run = 1–2–5 → Watchlist + bookmark re-check + project skill hits.**

---

## Hard stops (Discover)

| Bound | Default |
|-------|---------|
| X posts / threads deep-inspected | **12** |
| GitHub repos / hits deep-read | **8** |
| Project seeds queried | **10** |
| New Watchlist rows this run | **15** |
| Passes / re-Discover after report | **1** — deliver report then **exit** |

Do not auto-start a second Discover after the report. User must trigger again (`run radar` / `radar this`). Full detail: [[Methodology/Anti-Infinite-Loop-Checklist]].

---

## Living lists

| List | Role |
|------|------|
| [[_meta/AI-Tech-Radar-Watchlist]] | Scored candidates |
| [[_meta/AI-Tech-Radar-Bookmarks]] | Working bookmarks always in Discover |
| [[_meta/AI-Tech-Radar-Project-Queries]] | Active My-Mind / Work-Mind projects → search seeds |

---

## Triggers

| Trigger | Behavior |
|---------|----------|
| **run radar** | Full Discover including Bookmarks **and** project skill search |
| **radar this: url** | Supplement → Filter→Score |
| **bookmark this** | Append Bookmarks only |
| **weekly radar review** | Walk Watchlist + Bookmarks + project map freshness |

---

## Discover sources (five)

### 1. X Radar

Multi-agent, MCP, harness/loop/graph, eval, memory, agent skills.

### 2. GitHub Radar

Agent, mcp-server, harness, eval, memory topics; recent activity.

### 3. Working Bookmarks

Active rows in [[_meta/AI-Tech-Radar-Bookmarks]] — re-check every run.

### 4. Project skill search

Active projects under **My-Mind** and **Work-Mind** (via [[_meta/AI-Tech-Radar-Project-Queries]]):

1. Load project → query map (and Overview focus if needed).
2. Targeted X/GitHub search for skills, MCP servers, agent patterns matching each project’s seeds.
3. Prefer hits that **extend an existing skill** over inventing parallel skills.
4. Score with **Domain Fit** weighted for that project; Work-Mind hits stay work-safe.
5. Report under **Project skill search** in the radar report.

Skip `_template` and archived projects.

### 5. User inject

`radar this: <url>` — optional supplement.

---

## Evaluation checklist (Score)

| Dimension | Pass signal |
|-----------|-------------|
| **Harness** | Tools, context, safety, observability |
| **Loop** | Evidence rules, hard stops, verification |
| **Graph** | Topology, Writer≠Checker |
| **Eval / RAI** | Probes, judge hygiene |
| **Memory** | Residue, inspectable state |
| **Cost / Practicality** | Realistic for stack |
| **Domain Fit** | Strengthens existing skill **or** clear project need |

Project-driven hits: Domain Fit is decisive. Prefer “extend an existing project skill” over adding a third overlapping skill.

---

## Weekly review

1. Watchlist + Bookmarks + **Project-Queries map** (add/remove projects, refresh seeds).
2. Propose High → REVIEW_QUEUE.
3. Propose bookmark promotions and project-skill promotions.

---

## Ownership

| Role | Duty |
|------|------|
| **ai-tech-radar** | Discover (all five sources) → Filter → Score; report |
| **GrokRarian** | Orient; surface lists |
| **Page Master** | Catalog short instructions when skills publish |
| **Human** | Review / Publish; project map accuracy |

---

## Success criteria

- Bookmarks and **active projects** always feed Discover
- Skill search is **project-grounded**, not generic tool spam
- Existing skills preferred over duplicates
- No permanent controlling doc without Approval
- Discover respects the numeric caps and single-pass exit
