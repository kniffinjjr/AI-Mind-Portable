---
name: obsidian-markdown
type: skill
status: active
created: 2026-08-07
updated: 2026-08-07
triggers:
  - obsidian-markdown
  - Obsidian Flavored Markdown
  - wikilink hygiene
  - vault markdown standards
  - agent-operable notes
  - clean note ingest
related:
  - "[[Sources/Obsidian-Skills-kepano-2026-08-07]]"
  - "[[Skills/Custom/grokrarian]]"
  - "[[Skills/Custom/page-master]]"
  - "[[Skills/Short-Instructions]]"
  - "[[Concepts/Memory-Engineering]]"
  - "[[_meta/Vault-Conventions]]"
source_skill_path: null
---

# Obsidian-Markdown (Grok-compatible)

**Portable Obsidian Flavored Markdown (OFM) + agent-operable knowledge conventions.**

Derived from kepano/obsidian-skills (Steph Ango, Obsidian CEO) but stripped of Obsidian-runtime assumptions so Grok agents, GrokRarian, and Page Master can apply the same hygiene to the AI-Mind-Vault and any Markdown knowledge base.

## When to Activate

- Writing or editing durable notes that will be linked and retrieved later
- Source capture / web → note ingest
- Requests for proper Obsidian-style links, callouts, properties, or vault hygiene
- Any time an agent is about to emit generic Markdown that will live in a knowledge graph

## Core Conventions (non-negotiable)

1. **Wikilinks over bare URLs for internal knowledge**  
   Prefer `[[Note Title]]` or `[[path/Note|display]]` for Vault-internal references. External sources keep full URLs + capture metadata.

2. **Frontmatter / properties for machine-readable metadata**  
   Use YAML frontmatter (`title`, `type`, `status`, `captured`, `related`, `triggers`) so agents can filter and route without parsing prose.

3. **Callouts for signal, not decoration**  
   `> [!note]`, `> [!warning]`, `> [!tip]`, `> [!important]` — only when the distinction aids later retrieval or decision-making.

4. **Clean ingest (defuddle spirit)**  
   When turning web content into notes: strip navigation, ads, chrome; keep the argument, evidence, and structure. Prefer shorter, denser residue over raw dumps.

5. **Agent-operable by design**  
   Notes should be writable and readable by agents without requiring the human to rebuild context every session. Prefer atomic notes + explicit links over giant unstructured dumps.

6. **Write-access governance**  
   Agents may freely draft and propose. Permanent changes to controlling documents (Concepts/, Methodology/, AGENTS.md, live Skills) still require user direction or Review Queue approval. Same discipline as GrokRarian.

## What this skill does not do

- It does not require Obsidian to be running.
- It does not install or depend on the kepano pack’s CLI, Bases, or Canvas skills.
- It does not replace GrokRarian (routing) or Page Master (writing).
- It does not invent architecture; it only improves the format and link hygiene of residue.

## Relationship

- **GrokRarian** routes and surfaces existing notes.
- **Page Master** authors durable docs and short instruction packs.
- **obsidian-markdown** supplies the shared format and link discipline both use.

## Codex / Claude Code users

If you also run Obsidian, install the full kepano pack for Bases, Canvas, and CLI power:

```bash
npx skills add https://github.com/kepano/obsidian-skills
# or copy skills/ into ~/.codex/skills
```

This Grok skill remains the portable subset that works without that runtime.
