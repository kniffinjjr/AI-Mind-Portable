---
title: Production-Ready Design Checklist
type: template
created: 2026-07-30
migrated_from: Google Drive / AI Agent Architecture / 01 - Production-Ready Design Checklist
tags: [template, harness, loop, graph, checklist]
---

# Production-Ready AI Agent Design Checklist

**Based on:** @beamnxw – three architecture layers (July 2026)  
**Usage:** Copy for every new agent or major revision. Fill Status / Notes before production and after incidents.

## 1. Harness Engineering Checklist

| # | Question | Status | Notes |
|---|----------|--------|-------|
| H1 | Tools narrow, documented, observable? | ☐ | |
| H2 | State durable (files, checkpoints, sessions, git)? | ☐ | |
| H3 | Permissions least-privilege? | ☐ | |
| H4 | Operators can pause, inspect, resume? | ☐ | |
| H5 | Context injection clean? | ☐ | |
| H6 | Action surfaces explicit? | ☐ | |
| H7 | Model routing / sub-agent policy clear? | ☐ | |
| H8 | Timeouts, retries, budgets defined? | ☐ | |
| H9 | Secret handling and isolation? | ☐ | |
| H10 | Traces, cost, latency, tool I/O observable? | ☐ | |

## 2. Loop Engineering Checklist

| # | Question | Status | Notes |
|---|----------|--------|-------|
| L1 | What evidence proves success? | ☐ | |
| L2 | What feedback on failure (compact + actionable)? | ☐ | |
| L3 | Max retries (hard limit)? | ☐ | |
| L4 | Behavior when budget exhausted? | ☐ | |
| L5 | Goal is a specific state? | ☐ | |
| L6 | Clear trigger? | ☐ | |
| L7 | Stopping rule based on evidence? | ☐ | |
| L8 | Verification separated from writer when possible? | ☐ | |
| L9 | Explicit human escalation path? | ☐ | |
| L10 | Cost/latency trade-off measured? | ☐ | |

## 3. Graph Engineering Checklist

| # | Question | Status | Notes |
|---|----------|--------|-------|
| G1 | Which paths must be deterministic? | ☐ | |
| G2 | Where can work run in parallel? | ☐ | |
| G3 | Shared state + merge strategy? | ☐ | |
| G4 | Human gates and approval points? | ☐ | |
| G5 | Recovery routes after failure? | ☐ | |
| G6 | Node boundaries clear? | ☐ | |
| G7 | Routing conditions evidence-based? | ☐ | |
| G8 | Cycles bounded? | ☐ | |
| G9 | Checkpoints for durable resume? | ☐ | |
| G10 | Simplest topology that works? | ☐ | |

## 4. Evaluation & Operations

| # | Question | Status | Notes |
|---|----------|--------|-------|
| E1 | Can team replay real traces? | ☐ | |
| E2 | Attribute improvement to a specific change? | ☐ | |
| E3 | Cost, latency, failure rate, intervention rate monitored? | ☐ | |
| E4 | Regression suite from real failure traces? | ☐ | |
| E5 | Versioned evals before promoting changes? | ☐ | |

## Production readiness gate

- [ ] Critical harness H1–H4 green  
- [ ] Critical loop L1–L4, L7 green  
- [ ] Critical graph G1, G4, G5, G8 green (if graph used)  
- [ ] Eval & monitoring in place  
- [ ] One end-to-end success path and one failure recovery path tested with real traces  
