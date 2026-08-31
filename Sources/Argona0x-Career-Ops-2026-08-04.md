---
title: Career-Ops (santifer) — Job Hunt Agent Pipeline
type: source
status: live
created: 2026-08-04
source: https://x.com/argona0x/status/2084678743935647825
repo: https://github.com/santifer/career-ops
tags: [career, job-search, harness, gate, residue, human-in-loop]
related:
  - "[[Harness-Loop-Graph-Architecture]]"
---

# Career-Ops (santifer)

Open-source MIT job-search operator that turns an AI coding CLI (Claude Code, Codex, OpenCode, Grok, etc.) into a full pipeline: scan → evaluate → gate → produce → contact → interview prep → offer review → tracker.

**Measured run (author):** 740 listings → 68 applications → 12 interviews → 1 Head of AI offer. Human never auto-submits.

## Pipeline shape

```text
PORTALS (Greenhouse/Ashby/Lever/Wellfound + company pages)
    ↓
EVALUATE (A–F dimensions → 1.0–5.0)  +  BLOCK G (legitimacy, scored apart)
    ↓
THE GATE (under 4.0 → argued out)
    ↓
PRODUCE (ATS CV · letter · email)  |  CONTACT (HM ≤300 char draft)
    ↓
INTERVIEW (story bank · red flags · debrief)
    ↓
OFFER (clauses · salary gap · lawyer questions)
    ↓
TRACKER (statuses, follow-ups, which channels advance)
```

## Design principles worth keeping

1. **Filter, not cannon** — built to reject; effort only on what survives the gate.
2. **Legitimacy scored apart** — ghost/scam never moves the fit score.
3. **Human on the send button** — it drafts; user submits every time.
4. **Context compounds** — every evaluation sharpens the next; story bank accumulates.
5. **No new bill** — runs on the CLI subscription already paid.

## What we steal for the recruiter skill

| Piece | Vault / skill use |
|-------|-------------------|
| 1.0–5.0 + gate under 4.0 | Replace soft tiers with hard reject threshold |
| Block G legitimacy | Separate pass/fail before fit scoring |
| Story bank (5–10 master STAR+R) | Durable residue across interview cycles |
| Offer clause walk | Structured offer-prep mode |
| Human-on-send | Already non-negotiable in recruiter skill |

## HLG mapping

| Layer | Career-ops expression |
|-------|----------------------|
| **Harness** | CLI skill files, `cv.md`, tracker, Playwright PDF, portals.yml |
| **Loop** | Evaluate → gate → produce; evidence-based stop (under 4.0) |
| **Graph** | Pipeline stages as nodes; legitimacy as parallel check |

## Links

- Post: https://x.com/argona0x/status/2084678743935647825
- Repo: https://github.com/santifer/career-ops
- Init: `npx @santifer/career-ops init`
