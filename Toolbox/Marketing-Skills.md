---
title: Marketing Skills
type: toolbox
status: live
created: 2026-09-05
category: marketing
stack: [agent-skills, markdown]
related:
  - "[[Toolbox/_index]]"
  - "[[Skills/Custom/product-marketing/SKILL]]"
  - "[[Skills/Custom/copywriting/SKILL]]"
  - "[[Skills/Custom/cro/SKILL]]"
  - "[[Skills/Custom/seo-audit/SKILL]]"
  - "[[Skills/Custom/copy-editing/SKILL]]"
  - "[[Skills/Custom/marketingskills-NOTICE]]"
tags: [toolbox, marketing, agent-skills, cro, seo, copy]
---

# Marketing Skills (coreyhaines31/marketingskills)

**One-liner:** Agent Skills library for marketing work (CRO, copy, SEO, growth). MIT. Selective subset vendored into this vault; full set installs in **product repos**.

**Links:**
- GitHub: https://github.com/coreyhaines31/marketingskills
- Agent Skills: https://agentskills.io
- Author: [Corey Haines](https://corey.co)

## Stack

Markdown Agent Skills (`SKILL.md` + optional `references/` + `evals/`). Works with Claude Code, Codex, Cursor, Windsurf, and any Agent Skills–compatible harness.

## Install (product repo — not Vault)

Prefer installing what you need in the **product** repo:

```bash
npx skills add coreyhaines31/marketingskills
# or a single skill, e.g.:
# npx skills add coreyhaines31/marketingskills --skill cro
```

Do **not** vendor the entire upstream library into AI-Mind-Portable. Shared vault residue already includes a curated subset under `Skills/Custom/`.

## Vault subset (curated)

| Skill | Use |
|-------|-----|
| `product-marketing` | Shared product/audience/positioning context (`.agents/product-marketing.md` in the product repo) |
| `copywriting` | New marketing copy |
| `copy-editing` | Edit / tighten existing copy (checker pass) |
| `cro` | Conversion diagnosis + experiment framing |
| `seo-audit` | Technical + on-page SEO audit |

Attribution: [[Skills/Custom/marketingskills-NOTICE]].

## When to use

- Founder / product marketing drafts with coding agents
- Landing/page CRO reviews paired with `landing-page` / `product-page`
- SEO health checks paired with `seo-page`
- Copy write → edit loop (`copywriting` then `copy-editing`)

## When not to use

- As a replacement for a marketing owner, brand judgment, or measurement system
- Dumping 50+ skills into every session (token waste; activate on trigger)
- Treating simulated “marketing councils” as independent checkers
- Claiming hire-equivalent outcomes from markdown alone

## Agent pairing (Grok Build)

| Task | Skills |
|------|--------|
| Positioning / ICP context | `product-marketing` |
| Write copy | `copywriting` → `copy-editing` |
| Conversion review | `cro` + `landing-page` / `product-page` |
| SEO audit vs page build | `seo-audit` vs `seo-page` |
| UI polish after marketing structure | `pixelslop`, `better-interface` |

## Notes / IP

- License: MIT (Corey Haines)
- Work installs: keep product-specific `.agents/product-marketing.md` and campaign residue under Work Mind / product repo — not vault methodology
- Personal experiments: My Mind / personal product repos
- Source review: X post promoting the repo (quote-RT); stars ≈47k — useful pack, oversold “worth more than a hire” closer
