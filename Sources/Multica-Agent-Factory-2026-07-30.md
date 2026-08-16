---
title: Multica + Agent Factory Documentation
type: source
date: 2026-07-30
migrated_from: Google Drive / AI Agent Architecture / Multica + Agent Factory Documentation
tags: [source, multica, agent-factory, sageroute, production-ai]
---

# Multica + Agent Factory (July 30, 2026)

**Sources:**  
- https://x.com/Av1dlive/status/2082807521161654576  
- Article: https://x.com/i/article/2082454613601705984  

**Repos:**  
- Multica: https://github.com/multica-ai/multica  
- SageRoute / Agent Factory: https://github.com/codejunkie99/sageroute  

## Multica (overview)

Open-source managed agents platform: assign issues to agents like teammates; skills compound; multi-runtime CLI support (Claude Code, Codex, Cursor Agent, Grok-adjacent CLIs, etc.).

**Architecture:** Next.js ↔ Go backend (Chi + WebSocket) ↔ PostgreSQL (pgvector) + local Agent Daemon.

## Agent Factory thesis

Build agents that *do the task*, not software wrapped around the task. Scale requires machine verification of every output (not humans reading everything).

### Two necks (quality bottlenecks)

1. **Human once:** certify agent competence  
2. **Machine every run:** verify outputs (e.g. Sage decision model + confidence)

### Five stations

1. Job Card (ABOM) — identity, grants, tools, rubric  
2. Assembly / Stamp — master → variants; restamp revokes certificates  
3. Proving Ground — eval suite *before* agent is good; sealed cases  
4. The Law — **no evals, no production**  
5. The Broker — grant check outside the model; autonomy tiers C0–C3  

### SageRoute

OpenAI-compatible proxy with local detectors (loops, error classes, no progress) then Sage only when needed. Actions: continue | switch_model | restart_clean | escalate_human.

### Fit with this vault

- Multica ≈ orchestration (board, agents as teammates)  
- Factory + SageRoute ≈ quality/cost control (pairs with [[Eval-Engineering]] and [[Harness-Loop-Graph-Architecture]])  
- Job cards + sealed suites mirror Review Queue + production checklists  

**Full original Drive doc retained as migration source.** Key next actions from the doc: star/clone repos, 7-day factory playbook for one high-ROI scorable job, wire SageRoute, treat job card + sealed suite + grant broker as non-negotiable.
