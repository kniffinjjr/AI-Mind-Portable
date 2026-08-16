---
name: ai-tech-radar
type: skill
status: active
created: 2026-08-05
updated: 2026-08-16
triggers:
  - run radar
  - tech radar
  - AI Tech Radar
  - X radar
  - GitHub radar
  - radar this
  - bookmark this
  - working bookmark
  - weekly radar review
  - project skill search
  - scan for new tools
  - scan for new architectures
related:
  - "[[Methodology/AI-Tech-Radar]]"
  - "[[Methodology/Anti-Infinite-Loop-Checklist]]"
  - "[[_meta/AI-Tech-Radar-Watchlist]]"
  - "[[_meta/AI-Tech-Radar-Bookmarks]]"
  - "[[_meta/AI-Tech-Radar-Project-Queries]]"
  - "[[Sources/skill-factory-eight-agent-loop-2026-08-08]]"
  - "[[Skills/Custom/grokrarian]]"
source_skill_path: $GROK_HOME/skills/ai-tech-radar/SKILL.md
---

# AI Tech Radar — Vault overlay

Controlling process: [[Methodology/AI-Tech-Radar]].

**Discover (every run):** X + GitHub + [[_meta/AI-Tech-Radar-Bookmarks]] + **project skill search** via [[_meta/AI-Tech-Radar-Project-Queries]] + user inject.

**Default:** Filter → Score → append Watchlist; report project-skill hits; prefer extending existing skills over duplicates.

Stages 6–8 stay human-gated.

## Hard stops (per “run radar”)

| Bound | Default |
|-------|---------|
| X posts/threads deep-inspected | **12** |
| GitHub repos/hits deep-read | **8** |
| Project seeds queried | **10** |
| New Watchlist rows this run | **15** |
| Passes / re-Discover after report | **1** — deliver report then **exit** |

Do not auto-start a second Discover after the report. User must trigger again (`run radar` / `radar this`). Full detail: [[Methodology/Anti-Infinite-Loop-Checklist]].
