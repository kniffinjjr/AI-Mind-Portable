---
title: 0xWast3 — Context Pipeline (relevance → route → compress)
type: source
created: 2026-08-04
url: https://x.com/0xwast3/status/2084578495452070176
tags: [context, cost, harness, coding-agent]
related: ["[[Methodology/Cost-Efficient-Coding-Agent-Context]]", "[[AGENTS.md]]"]
---

# Context pipeline that stops burning tokens on irrelevant code

Four-stage pattern:

1. Rank files by relevance to the *actual task* (not just recency)
2. Router decides how much context the task earns (typo → few files; rewrite → module)
3. Compress survivors to the exact lines that matter
4. Cost per finished task drops because the model stops reading dead weight

**Mapping:** Strengthens existing Cost & Context Policy / blast-radius injection in the harness. No new architecture layer.
