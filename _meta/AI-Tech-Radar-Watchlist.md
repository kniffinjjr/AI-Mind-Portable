---
title: AI Tech Radar Watchlist
type: system
status: live
created: 2026-08-05
updated: 2026-08-12
related:
  - "[[Methodology/AI-Tech-Radar]]"
  - "[[Skills/Custom/ai-tech-radar]]"
  - "[[Skills/Custom/grokrarian]]"
  - "[[Sources/skill-factory-eight-agent-loop-2026-08-08]]"
tags: [radar, watchlist, outer-loop, system]
---

# AI Tech Radar — Living Watchlist

**Single source of truth** for novel AI tools, architectures, multi-agent systems, MCP, eval methods, and related ideas that may strengthen the AI Mind.

- **Automated radar** appends candidates (Discover→Filter→Score).
- **User supplements** (`radar this: <url>`) append the same way.
- **Weekly review** updates status; only **High** items promote via REVIEW_QUEUE.

## Status Key

| Status | Meaning |
|--------|--------|
| **Watch** | Interesting; monitor |
| **Rising** | Gaining traction or clearer fit |
| **High** | Strong candidate for Source / deeper attention |
| **Adopted** | Turned into Source / Concept / Skill |
| **Dropped** | No longer relevant |

## Watchlist

| Item | First Noticed | Last Checked | Status | Notes / Progress | Link |
|------|---------------|--------------|--------|------------------|------|
| Saboo Dynamic Agent Orgs (self-rewriting graph) | 2026-08-05 | 2026-08-05 | Adopted | Source note created | [X](https://x.com/saboo_shubham_/status/2084828486980743354) |
| Microsoft Qlib + RD-Agent | 2026-08-04 | 2026-08-05 | Adopted | Nested Cycles / RAI mapping | [GitHub](https://github.com/microsoft/RD-Agent) |
| Memory Engineering | 2026-08-05 | 2026-08-12 | High | Write policy / what survives; reinforced by Reducer Engineering + provenance/trust memory (Statewave) | [X](https://x.com/beamnxw/status/2084951600716530032) |
| LangChain Labs / Viv — Synthetic Eval | 2026-08-05 | 2026-08-05 | Rising | Traces → Spec → Eval | — |
| Windows-MCP | 2026-08-05 | 2026-08-05 | Watch | Native Windows UI automation | — |
| HyperDbg MCP server | 2026-08-05 | 2026-08-05 | Watch | Domain MCP | [GitHub](https://github.com/HyperDbg/mcp) |
| Fudge (design reference MCP) | 2026-08-05 | 2026-08-05 | Watch | Design examples + critique | — |
| Bitpanda MCP | 2026-08-05 | 2026-08-05 | Watch | Finance; low priority | — |
| agentic-harness / Omnigent / agenthub-multiagent-mcp | 2026-08-05 | 2026-08-05 | Watch | Multi-agent + harness tooling | — |
| MCP Evaluation tools | 2026-08-05 | 2026-08-05 | Adopted | Methodology/MCP-Evaluation-Workflow.md | see Methodology |
| Shepherd (agent-native Git / run traces) | 2026-08-08 | 2026-08-08 | Adopted | Source + Reversibility-Class-Checklist | [X](https://x.com/akshay_pachaar/status/2086079311279493389) |
| Skill Factory (8-stage discover→publish loop) | 2026-08-08 | 2026-08-08 | Adopted | Stages folded into AI-Tech-Radar methodology | [X](https://x.com/imryven/status/2086177599705977138) |
| oil-motion (interactive AI video animation skill) | 2026-08-08 | 2026-08-08 | Watch | Selective absorb into web-motion | [GitHub](https://github.com/oil-oil/oil-motion) |
| Conductor Cloud — local escape hatches | 2026-08-08 | 2026-08-08 | Rising | Cloud agents + port-forward, file sync, run-local | [X](https://x.com/charlieholtz/status/2085830262294974904) |
| Microsoft Skill Recorder | 2026-08-08 | 2026-08-08 | Rising | Screen/voice → SKILL.md | [X](https://x.com/beamnxw/status/2086134780706357591) |
| best-of-Agent-Harnesses (+ MCP recommend) | 2026-08-08 | 2026-08-12 | Watch | Curated 100+; MCP recommend still useful | [GitHub](https://github.com/RyanAlberts/best-of-Agent-Harnesses) |
| HarnessKit (cross-agent skill/MCP manager) | 2026-08-08 | 2026-08-08 | Watch | Unified skills/MCP across agents | [GitHub](https://github.com/RealZST/HarnessKit) |
| Hermes portable Agent Plugins v1 | 2026-08-08 | 2026-08-08 | Watch | Portable skills + MCP packages | [X](https://x.com/Teknium/status/2085777889560305941) |
| Antithesis precommit “torture” skill (Huntley) | 2026-08-08 | 2026-08-08 | Watch | Eval before commit/push | [X](https://x.com/GeoffreyHuntley/status/2086112826410836028) |
| .NET skills discoverable from MCP servers | 2026-08-08 | 2026-08-08 | Watch | Author once → serve via MCP | [devblogs](https://devblogs.microsoft.com/agent-framework/discover-agent-skills-from-mcp-servers-in-net/) |
| AllowanceVault / scoped session keys | 2026-08-08 | 2026-08-08 | Watch | R3 money least-privilege | [X](https://x.com/FetchrBots/status/2086166302570258652) |
| Long Horizon Agent Harness (Saboo / ADK) | 2026-08-09 | 2026-08-09 | Rising | OSS: cross-session memory, per-user sandbox, sub-agents, guardrails, nightly “dream” | [X](https://x.com/Saboo_Shubham_/status/2086502073315811750) |
| Stanford — memory as trainable skill | 2026-08-09 | 2026-08-09 | Rising | FS memory ops first-class; train memory specialist, freeze task weights | [X](https://x.com/N01ennn/status/2086496820645990840) |
| Skills Over MCP | 2026-08-09 | 2026-08-09 | Rising | Any public SKILL.md repo → live MCP endpoint | [site](https://skillsovermcp.com/) |
| book-to-skill (PDF → Claude skill) | 2026-08-09 | 2026-08-09 | Watch | Skill Factory Extract from technical books | trending GH |
| TencentDB-Agent-Memory | 2026-08-09 | 2026-08-12 | Watch | Team memory hub: Chat/Skills/Wiki/CodeGraph | [GitHub](https://github.com/TencentCloud/TencentDB-Agent-Memory) |
| **Understand-Anything** | 2026-08-09 | 2026-08-09 | Rising | Codebase/docs → interactive knowledge graph | [GitHub](https://github.com/Egonex-AI/Understand-Anything) |
| **memharness** (las7) | 2026-08-10 | 2026-08-12 | Rising | Bi-temporal facts + provenance MCP (SQLite) | [GitHub](https://github.com/las7/memharness) |
| **Memora** | 2026-08-10 | 2026-08-10 | Watch | Persistent agent memory via MCP + semantic search | [GitHub](https://github.com/agentic-box/memora) |
| **MetaHarness** (ruvnet) | 2026-08-10 | 2026-08-10 | Watch | Scaffold branded harness from repo | [GitHub](https://github.com/ruvnet/metaharness) |
| **Agent Harness Engineering survey** | 2026-08-10 | 2026-08-12 | Rising | OpenReview survey 170+ projects; harness as bottleneck | OpenReview / related X |
| **Semantica** | 2026-08-10 | 2026-08-10 | Watch | Decision/causal graph under LLM+vector | [GitHub](https://github.com/semantica-agi/semantica) |
| **QuantMind** | 2026-08-10 | 2026-08-10 | Watch | Quant research knowledge extract/retrieve | [GitHub](https://github.com/LLMQuant/quant-mind) |
| Codebase Memory MCP (DeusData) | 2026-08-10 | 2026-08-10 | Watch | Fast code intelligence index for coding agents | [GitHub](https://github.com/DeusData/codebase-memory-mcp) |
| **OpenCode Memory** | 2026-08-11 | 2026-08-12 | Watch | Coding-agent memory; Turso/libSQL; project shards + user profile | [X](https://x.com/DanKornas/status/2086922010043851004) |
| **MemHarness** (KnowledgeXLab) | 2026-08-11 | 2026-08-11 | Watch | Reconstruct memory for present context (not replay) | [GitHub](https://github.com/KnowledgeXLab/MemHarness) |
| **awesome-harness-engineering** | 2026-08-11 | 2026-08-12 | Watch | Curated harness-eng patterns | [GitHub](https://github.com/ai-boost/awesome-harness-engineering) |
| **AgentRecall-MCP** | 2026-08-11 | 2026-08-11 | Watch | Correction-first persistent memory MCP | SkillsLLM / Goldentrii |
| CAD agent MCP (Fusion demo) | 2026-08-11 | 2026-08-12 | Watch | AI operating Autodesk Fusion via MCP | [X](https://x.com/irinatoxi/status/2086492713654821362) |
| **SolidWorks MCP servers** | 2026-08-12 | 2026-08-12 | Watch | COM MCP for SW CAD; CAD ≠ PDM | [SolidworksMCP-python](https://github.com/andrewbartels1/SolidworksMCP-python) · [SolidPilot](https://github.com/eyfel/mcp-server-solidworks) |
| **Statewave** | 2026-08-12 | 2026-08-12 | Rising | Provenance/audit/governance memory; trust > raw recall | [X](https://x.com/Shruti_0810/status/2087462175942279473) |
| **gbrain** | 2026-08-12 | 2026-08-12 | Watch | Agent synthesis/retrieval layer; graph + gap analysis | [X](https://x.com/N0V4Dev/status/2087501927823081763) |
| **mnemon** | 2026-08-12 | 2026-08-12 | Watch | Single-binary cross-session memory; zero API keys | [GitHub](https://github.com/mnemon-dev/mnemon) |
| **Grok Bot** (xAI) | 2026-08-12 | 2026-08-12 | Rising | Early beta: always-on AI teammates with **own cloud computer**, sign into tools (incl. non-API UIs), multi-bot parallel, human approval gates; SuperGrok Heavy / Cursor Ultra tiers | [x.ai/bot](https://x.ai/bot) · [@bot](https://x.com/bot) · [launch](https://x.com/bot/status/2087224798078517251) |
| **Grok Automations** | 2026-08-12 | 2026-08-12 | Watch | Scheduled + event triggers (email, Plaid, Stripe); runs as saved Grok conversations with connectors/skills | Product surface under Grok ecosystem |
| **Grok 4.6** (agentic) | 2026-08-12 | 2026-08-12 | Watch | Model refresh tied to Bot beta widen; Musk: fix early Bot issues then release 4.6 | [Elon](https://x.com/elonmusk/status/2087233507370147920) |
| OpenMausBot (OSS reaction) | 2026-08-12 | 2026-08-12 | Watch | Local-first multi-agent chat UI reacting to Grok Bot; own memory/personality per bot; BYO models | Post-launch OSS mirror pattern |
| **Tailcat** (Tailscale) | 2026-09-01 | 2026-09-01 | Rising | Encrypted netcat over Tailscale data plane without accounts/control plane; Bot↔desktop bridge + future SmaRV Linux gateway | [blog](https://tailscale.com/blog/tailcat) · [GitHub](https://github.com/tailscale/tailcat) · [[Toolbox/Tailcat]] |

## How items are added

1. **Automated:** `run radar` → scan X + GitHub + Bookmarks + project skill search → Filter → Score → append if pass.
2. **User supplement:** `radar this: <url>` → same Filter→Score→append.
3. **Publish still human:** High → REVIEW_QUEUE → Source / Skill only with owner direction.

**Discover note (2026-08-12):** Major **platform agent products** (e.g. Grok Bot, computer-use teammates) are in-scope even when proprietary — score on harness/loop patterns (approval gates, always-on runtime, multi-agent coordination), not only OSS GitHub.

## Weekly Review Process

1. Open this file.
2. Update Last Checked + Status for active rows.
3. Propose High → REVIEW_QUEUE.
4. Confirm recent scan + user supplements are present.

**Cadence:** Weekly (e.g. Sunday/Monday) or on “weekly radar review”.
