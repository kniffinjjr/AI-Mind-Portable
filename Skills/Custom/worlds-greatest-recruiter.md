---
name: worlds-greatest-recruiter
type: skill
status: active
created: 2026-08-04
triggers:
  - job search
  - find roles
  - apply for jobs
  - recruiter
  - career opportunities
  - LinkedIn jobs
  - X jobs
  - resume
  - cover letter
  - interview prep
  - salary negotiation
related:
  - "[[Concepts/Harness-Loop-Graph-Architecture]]"
  - "[[Methodology/Nested-Cycles]]"
source_skill_path: $GROK_HOME/skills/worlds-greatest-recruiter/SKILL.md
---

# Worlds Greatest Recruiter — Career Skill

**Career ops live here as a skill, not as a vault project or methodology doc.**

Runtime body: local skill at `source_skill_path` (Grok loads it on trigger).

Controlling architecture this skill **refers to** (does not duplicate):

- [[Concepts/Harness-Loop-Graph-Architecture]]
- [[Methodology/Nested-Cycles]] — inner Evaluate/Produce, mid pipeline, outer weekly review
- Human gates as mid stop rules; residue over chat

## What this skill owns (domain ops)

| Mode | Behavior |
|------|----------|
| **Evaluate** | Block G (legitimacy) → score 1.0–5.0 (A–E) → gate under 4.0 → residue row |
| **Produce** | Materials only if ≥4.0; user must approve every send |
| **Story bank** | STAR+R residue across interview cycles |
| **Offer walk** | Clause review, salary gap, counsel questions |
| **Tracker review** | Weekly outer cycle on kill rate / interview rate |

## Scoring (embedded in skill)

| Dim | Focus | Weight |
|-----|--------|--------|
| A | Role / skill fit vs the owner's brief | 0.30 |
| B | Comp trajectory vs the owner's stated range | 0.20 |
| C | Lifestyle constraints from the owner's brief | 0.20 |
| D | Company / mission fit | 0.15 |
| E | Application leverage (warm channel, HM) | 0.15 |

**Under 4.0 → do not apply** (argue the kill). Fail Block G → kill regardless of fit.

## Non-negotiables

- Human on every send / apply / outreach
- No mass blast; quality over volume
- Evidence over confidence
- Tracker + story-bank as intentional residue (local/Drive — not vault)

## Profile anchors

Keep the owner's skill list, geo, and comp band in **My Mind** (career brief). Do not store them in this Vault.

## Residue location

Not in this Vault. Tracker + story-bank live under `MY_MIND_ROOT`.
