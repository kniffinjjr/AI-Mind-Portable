---
title: code-review-graph — structural context for coding agents
type: source
status: live
date: 2026-08-03
url: https://x.com/savipww/status/2084310731483206099
repo: https://github.com/tirth8205/code-review-graph
tags: [source, cost, coding-agent, mcp, tree-sitter]
related:
  - "[[Methodology/Cost-Efficient-Coding-Agent-Context]]"
  - "[[Memory-Engineering]]"
  - "a local usage/observability dashboard"
  - "[[Sources/LazyGraphRAG-N01ennn-2026-08-02]]"
---

# Source: code-review-graph via @savipww (3 Aug 2026)

**Post:** https://x.com/savipww/status/2084310731483206099  
**Repo:** [tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph)  
**Site/docs:** https://code-review-graph.com/ (project marketing)

## Claim (post)

Coding agents re-read large fractions of the repo every question to recover structure → huge token waste.  

**code-review-graph:** Tree-sitter map once → local SQLite graph (functions, calls, imports, tests) → on change, walk callers/dependents/tests → give the agent only that set.

**Reported numbers (author/post, not independently re-run here):**
- Flask: ~143,594 → ~2,196 tokens per question  
- FastAPI: ~948,793 → ~2,653  
- Median across 6 repos: **~65×** fewer tokens  

Setup ~2 minutes; auto-config for Claude Code, Cursor, Codex, Copilot, others; local (including CI). README documents limitations (e.g. circularity risk on some recall metrics).

## What the product actually is

From project README/docs:

- Local-first code intelligence graph for **MCP + CLI**  
- Tree-sitter AST → nodes/edges → `.code-review-graph/` SQLite  
- Incremental updates; blast-radius / review-focused context selection  
- Multi-language support via Tree-sitter (Python, TS/JS, Go, Rust, Java, C#, …)  
- Core path: no external DB/cloud required  

## Critical review (for AI Mind)

### Strong / vault-aligned
- Implements **cost-efficient coding context** doctrine: structure once, inject minimum.  
- Same family as [[Memory-Engineering]] and [[Sources/LazyGraphRAG-N01ennn-2026-08-02]] (structure beats stuffing).  
- Local-first fits work privacy; dual metric fits a paid subscription + a local usage dashboard.  
- Honest limitations section is a positive trust signal.

### Skepticism
- Token multipliers are **marketing/benchmark until re-run** on the owner's repos.  
- Grok Build may need manual MCP/CLI integration (not necessarily in “auto config” list).  
- Graph staleness and language edge cases can silently drop true dependents.  
- Influencer packaging; evaluate the repo, not the star count.

### Practical next step
Optional pilot on a medium Python/TS repo you own: measure tokens-per-task with vs without graph-selected context. Methodology lives in [[Methodology/Cost-Efficient-Coding-Agent-Context]] regardless of whether this exact tool wins.

## Not in scope of this source
Quoted skill-recorder / Microsoft “record desktop → skill” is a different product — do not conflate.
