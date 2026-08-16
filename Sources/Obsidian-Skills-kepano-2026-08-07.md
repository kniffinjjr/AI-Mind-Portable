---
title: Obsidian Skills — kepano (Steph Ango)
type: source
status: live
captured: 2026-08-07
source_url: https://github.com/kepano/obsidian-skills
x_post: https://x.com/chewadot/status/2085737189401342281
creator: Steph Ango (kepano), CEO of Obsidian
related:
  - "[[Skills/Custom/obsidian-markdown]]"
  - "[[Skills/Custom/grokrarian]]"
  - "[[Skills/Custom/page-master]]"
  - "[[Skills/Agent-Skill-Map]]"
---

# Obsidian Skills (kepano / Steph Ango)

**Repo:** https://github.com/kepano/obsidian-skills  
**Author:** Steph Ango (**kepano**), CEO of Obsidian  
**License:** MIT  
**Stars:** ~44k (as of capture)  
**Captured from:** X post by @chewadot (2026-08-07)

## What it is

Official collection of **Agent Skills** that teach Claude Code, Codex, OpenCode, and any skills-compatible agent how to operate an Obsidian vault correctly.

Instead of treating the vault as a folder of generic Markdown, agents learn Obsidian-specific formats and can create, edit, search, and reorganize notes, Bases, and Canvas files in place.

## The five skills

| Skill | Purpose |
|-------|--------|
| `obsidian-markdown` | Obsidian Flavored Markdown — wikilinks `[[ ]]`, embeds `![[ ]]`, callouts, properties/frontmatter, tags, block refs |
| `obsidian-bases` | Create/edit `.base` files (views, filters, formulas, summaries) |
| `json-canvas` | Create/edit `.canvas` files (nodes, edges, groups per JSON Canvas Spec) |
| `obsidian-cli` | Drive a running Obsidian instance via official CLI (search, create, append, daily notes, plugin/theme work) |
| `defuddle` | Extract clean Markdown from web pages (strips clutter → lower token cost) |

Follows the open [Agent Skills specification](https://agentskills.io/specification).

## Installation (Codex path)

```bash
# Codex
# Copy the skills/ directory into your Codex skills path (typically ~/.codex/skills)
# Or:
npx skills add https://github.com/kepano/obsidian-skills
```

Claude Code and OpenCode have their own documented paths in the repo README.

## Evaluation (2026-08-07)

- **Substance:** High — real project from the product CEO; correct formats, not hypeware.
- **Novelty:** Medium-high for agent tooling — closes the “agent only reads generic MD” gap.
- **Role for us:** High-value **companion capability** for anyone running Obsidian + coding agents. Transferable patterns (markdown hygiene, clean ingest) for GrokRarian / Page Master.

## Selective absorption

| What we keep | Where |
|--------------|--------|
| Obsidian Flavored Markdown conventions | `[[Skills/Custom/obsidian-markdown]]` (Grok-compatible) |
| Clean web→MD ingest discipline (defuddle spirit) | Page Master / source-capture habits |
| Agent-operable vault concept | Already aligned with GrokRarian + Page Master |

## Do not

- Clone the full pack as a core Grok skill (it is Obsidian-runtime oriented).
- Give agents unrestricted write access to personal vaults without human governance.
- Treat CLI skill as required for our GitHub Vault (we use GitHub tools + Review Queue).

## When to reopen

- User actively maintains an Obsidian vault alongside AI-Mind-Vault / Codex Mind Pack.
- Expanding Base/Canvas support or tighter OFM standards.
- Codex users requesting first-class Obsidian format support.
