---
title: AI Tech Radar Bookmarks
type: system
status: live
created: 2026-08-10
updated: 2026-08-16
related:
  - "[[_meta/AI-Tech-Radar-Watchlist]]"
  - "[[Methodology/AI-Tech-Radar]]"
  - "[[Skills/Custom/ai-tech-radar]]"
tags: [radar, bookmarks, outer-loop, system]
---

# AI Tech Radar — Working Bookmarks

**Purpose:** Capture items the user marks as **bookmark only** (not yet Watchlist rows) so **every `run radar` still includes them in Discover**.

| Status | Meaning |
|--------|--------|
| **Bookmark** | Working reference; re-scan on radar runs |
| **Promoted** | Moved to Watchlist (Watch/Rising/High) |
| **Dropped** | No longer of interest |

**Rule:** Saying “bookmark this” → append here. Radar must re-check active bookmarks (updates, related repos, status change proposals). Promotion to Watchlist still requires Filter→Score pass or explicit user direction.

## Active bookmarks

| Item | Bookmarked | Last Radar Check | Notes | Link |
|------|------------|------------------|-------|------|
| Hyper-Extract | 2026-08-10 | 2026-08-12 | Stay Bookmark | [GitHub](https://github.com/yifanfeng97/hyper-extract) · [X](https://x.com/oliviscusai/status/2086654314953474186) |
| HQ (Indigo / company harness) | 2026-08-10 | 2026-08-12 | Stay Bookmark | [X](https://x.com/vibemarketer_/status/2086808854898323774) |
| Uiverse.io | 2026-08-10 | 2026-08-12 | Stay Bookmark — UI inspo only | [uiverse.io](https://uiverse.io/) · [Galaxy](https://github.com/uiverse-io/galaxy) |
| Solt Wagner creator resources | 2026-08-10 | 2026-08-12 | Stay Bookmark — design toolbox | [X](https://x.com/soltwagner/status/2086830068761068006) · [Supahero](https://supahero.io/) · [Pagy](https://pagy.co/) |
| Fakebase Studio | 2026-08-11 | 2026-08-12 | Stay Bookmark — work SQL candidate; verify AI migrations | [fakebase.studio](https://fakebase.studio/) · [X](https://x.com/albinolssonglad/status/2087162125009518929) |
| **Reducer Engineering** | 2026-08-12 | 2026-08-12 | Multi-agent state compression; code reducer workers→synthesizer; Memory Engineering | [X](https://x.com/0xWast3/status/2087164481855971839) · [gippp69](https://x.com/gippp69/status/2087120797206819322) |
| Complete System Design (Coder-World04) | 2026-08-12 | 2026-08-12 | Interview-style system design link hub; general eng literacy | [GitHub](https://github.com/Coder-World04/Complete-System-Design) · [X](https://x.com/kirkdborne/status/2087422879273013436) |
| **Persistent graph residue (session trash can)** | 2026-08-12 | 2026-08-12 | Findings as nodes, shared sources as edges; graph survives session and compounds; pairs with Reducer + Memory Engineering | [X](https://x.com/antpalkin/status/2087580473136443550) · parent [swarm map](https://x.com/antpalkin/status/2087210112716787915) |
| **book-to-skill** | 2026-08-16 | 2026-08-16 | PDF/EPUB → structured agent skill (index + on-demand chapters); Claude-centric upstream — adapt for Grok Build / Vault | [X](https://x.com/hasantoxr/status/2088672380306808938) · [GitHub](https://github.com/Leutenegger/book-to-skill) · [virgiliojr94](https://github.com/virgiliojr94/book-to-skill) |

## How to use

1. User: “bookmark this” / “working bookmark” → agent appends a row here (do **not** force Watchlist).
2. On **run radar**: Discover sources include **this file’s active rows** as candidates (re-check links, note updates, propose Promote/Drop).
3. Promote → add/update Watchlist row; set bookmark Status to **Promoted**.
4. Drop → Status **Dropped** (keep row for history or remove on weekly review).

## Not the same as Watchlist

| Bookmarks | Watchlist |
|-----------|-----------|
| Explicit user “hold lightly” | Scored radar candidates |
| Always re-entered into Discover | Append only if Filter→Score pass |
| May stay forever as reference | Tracked for Adopt/Drop decisions |
