---
title: Establishing Your Minds
type: process
status: live
created: 2026-08-08
updated: 2026-08-10
maintainer: Page Master / GrokRarian
purpose: How any person adopts the AI Mind Vault and establishes their own My Mind and Work Mind
related:
  - "[[Concepts/AI-Mind-Architecture]]"
  - "[[PATHS.example]]"
  - "[[AGENTS.md]]"
  - "[[_meta/Vault-Conventions]]"
  - "[[Methodology/Knowledge-Structure-Choices]]"
---

# Establishing Your Minds

This guide is for **any person** who wants to use the AI Mind architecture — not only the original author.

---

## What you are establishing

| Surface | Purpose |
|---------|--------|
| **AI Mind Vault** | Portable documentation: how agents and you operate (skills, workflows, AGENTS.md, **knowledge-structure rules**) |
| **My Mind** | *Your* personal project notes, undeveloped ideas, personal scripts, **optional knowledge extracts** |
| **Work Mind** | *Your* work-only residue and **optional knowledge extracts** — company IP side of the line |

The Vault is shared pattern. My Mind and Work Mind are yours alone.

**Knowledge graphs / hypergraphs:** Vault holds *how* they work and entry criteria. Instance extracts live only under My Mind or Work Mind projects. See [[Methodology/Knowledge-Structure-Choices]].

---

## Step 1 — Get the portable documentation

Choose one backend:

**A. GitHub clone**

```bash
git clone https://github.com/<your-org-or-user>/AI-Mind-Portable.git ~/Documents/AI-Mind-Vault
cd ~/Documents/AI-Mind-Vault
```

**B. Local Git (no remote required)**

```bash
mkdir -p ~/Documents/AI-Mind-Vault
# copy or clone then remove remote if desired
cd ~/Documents/AI-Mind-Vault && git init   # if starting fresh structure
```

**C. Plain directory**
Copy the Markdown tree into any folder. No git needed. Still follow Review Queue discipline for permanent changes.

**D. Obsidian**
Open the Vault folder as an Obsidian vault. Enable wikilinks. Optional: install [kepano/obsidian-skills](https://github.com/kepano/obsidian-skills) for agent-friendly Obsidian formats. Core Vault does not require the Obsidian app to function for agents.

---

## Step 2 — Set PATHS.md

```bash
cp PATHS.example.md PATHS.md
# edit PATHS.md: set VAULT_ROOT, MY_MIND_ROOT, WORK_MIND_ROOT
```

Do **not** commit `PATHS.md` if your Vault remote is public.

---

## Step 3 — Create My Mind

My Mind holds **personal** residue only.

```bash
mkdir -p ~/Documents/My-Mind
cd ~/Documents/My-Mind
git init   # optional but recommended
```

Suggested layout:

```text
My-Mind/
  README.md
  Brain-Dump.md
  Projects/
    <slug>/Overview.md
    <slug>/Lessons-Learned.md     # optional
    <slug>/knowledge/             # optional structured extracts
      sources/
      extract/README.md
  Inbox/
  Deliverables/
```

**Rule:** if you built it on your own time, with your own tools → My Mind (or a personal product repo linked from it).

Structured knowledge extracts (binary KG, hypergraph, etc.) are **optional** and only after [[Templates/Hypergraph-Entry-Criteria]] (or the simpler structure ladder in [[Methodology/Knowledge-Structure-Choices]]).

---

## Step 4 — Create Work Mind (IP firewall)

Work Mind mirrors the shape of My Mind but holds **work-only** residue.

```bash
mkdir -p ~/Documents/Work-Mind
cd ~/Documents/Work-Mind
git init   # optional; often private or offline-only
```

Suggested layout:

```text
Work-Mind/
  README.md
  Brain-Dump.md
  Projects/
    <employer-project>/
      Overview.md
      knowledge/          # optional — work IP only
```

**Why separate:** employment agreements typically assign the company ownership of work created on company time or with company resources. Do not mix Work Mind content into My Mind or into a public Vault.

On work machines that cannot reach your private Vault, use a **Codex Mind Pack** (or equivalent) for operating rules only — no personal My Mind files.

---

## Step 5 — Boot agents against the Vault

1. Point agents at `VAULT_ROOT/AGENTS.md` (or the pack’s AGENTS.md at work).
2. Librarian orients against Vault notes before inventing principles.
3. Personal project work writes under `MY_MIND_ROOT`.
4. Work project work writes under `WORK_MIND_ROOT`.
5. Permanent changes to *portable* documentation still go through Review Queue (or explicit owner direction).
6. Knowledge *extracts* stay under the project mind root — never as Vault controlling data.

---

## What never goes in the portable Vault

- Your identity brain dump  
- Your personal project trees  
- Employer project notes, deliverables, and **knowledge extracts**  
- Secrets, credentials, PATHS.md with real paths on a public remote  

Those stay in My Mind / Work Mind / local-only config.

---

## Minimal adopt path

1. Clone or copy Vault documentation  
2. `PATHS.md` with three roots  
3. Empty My Mind + Work Mind folders  
4. AGENTS.md on every machine that runs agents  
5. Promote carefully: drafts free; live controlling docs gated  
6. Add `knowledge/` under a project only when structure entry criteria pass  

You do not need every skill on day one. You need the **portable documentation** and the **IP line**.
