---
title: AI Mind — Architecture & Data-Flow Charts
type: draft
status: draft
created: 2026-08-31
tags: [draft, architecture, data, sync, diagram]
---

# AI Mind — Architecture & Data-Flow Charts

Working note (scratch). Two charts:

1. **Where and how data is stored and managed** — the git/Dropbox split across devices.
2. **Overall AI Mind OS architecture** — Harness · Loop · Graph over the three roots.

Both are Mermaid, so they render in GitHub and Obsidian and stay editable in plain text. Promote to `Concepts/` / `Process/` via `_meta/REVIEW_QUEUE.md` when ready.

---

## 1. Data storage & management

Rule of thumb: **git repos sync via a git remote; everything else syncs via Dropbox; never nest a `.git` folder inside Dropbox.**

```mermaid
flowchart TB
  classDef git fill:#1f6feb,color:#ffffff,stroke:#0b3d91;
  classDef box fill:#238636,color:#ffffff,stroke:#0f5323;
  classDef work fill:#8957e5,color:#ffffff,stroke:#4b2c91;
  classDef dev fill:#30363d,color:#e6edf3,stroke:#8b949e;
  classDef rule fill:#3d1d1d,color:#f85149,stroke:#f85149;

  subgraph DEV["Your devices"]
    direction LR
    D1["Desktop (primary)"]:::dev
    D2["Laptop / desktop #2"]:::dev
    AND["Android"]:::dev
    IOS["iPhone / iPad"]:::dev
  end

  subgraph GIT["GIT plane — repos: source of truth + history"]
    direction LR
    GH["GitHub remotes"]:::git
    RV["AI-Mind-Vault (private OS)"]:::git
    RP["AI-Mind-Portable (public subset)"]:::git
    RC["Product code repos"]:::git
  end
  GH --- RV
  GH --- RP
  GH --- RC

  subgraph DBX["DROPBOX plane — non-repo files"]
    direction LR
    MM["My Mind (notes, assets)"]:::box
    INB["Inbox / scratch"]:::box
    REF["Reference / PDFs"]:::box
    NOW["Handoffs / NOW.md"]:::box
  end

  WM["Work Mind — IP firewall (employer storage, NOT personal Dropbox)"]:::work

  D1 <-->|git push / pull| GH
  D2 <-->|git push / pull| GH
  D1 <-->|Dropbox file sync| DBX
  D2 <-->|Dropbox file sync| DBX
  AND <-->|Dropsync / FolderSync| DBX
  IOS <-->|Obsidian Sync or git client| DBX

  R1["RULE 1: never put .git inside Dropbox"]:::rule
  R2["RULE 2: repos to git remote, files to Dropbox"]:::rule
  R3["RULE 3: let Dropbox finish syncing before switching devices"]:::rule
```

**Continuity habits**

- Leaving a machine (code): `git add -A && git commit -m "wip" && git push`. Arriving: `git pull`.
- Leaving a machine (files): let Dropbox reach a full-sync checkmark first.
- `Handoffs/NOW.md`: current focus + next action, so mental context restores instantly.

---

## 2. Overall AI Mind OS architecture

The OS wraps the model in a **Harness**, runs an evidence-based **Loop**, and only adds an explicit **Graph** when the Qualifying Test passes. Agent profiles act through skills over three data roots, behind governance gates. The public portable edition is a subset (architecture + generic profiles); domain skills and residue live in the private OS.

```mermaid
flowchart TB
  classDef root fill:#1f6feb,color:#ffffff,stroke:#0b3d91;
  classDef core fill:#238636,color:#ffffff,stroke:#0f5323;
  classDef agent fill:#9e6a03,color:#ffffff,stroke:#5a3d02;
  classDef gate fill:#8957e5,color:#ffffff,stroke:#4b2c91;
  classDef human fill:#30363d,color:#e6edf3,stroke:#8b949e;

  USER([Operator / User]):::human
  AGENTS["AGENTS.md — portable operating rules"]:::human
  USER --> AGENTS

  subgraph HARNESS["HARNESS — tools, state, permissions, observability, context"]
    subgraph GRAPH["GRAPH — explicit topology only when Qualifying Test passes"]
      subgraph LOOP["LOOP — work then evidence then feedback, with hard stops"]
        CORE["Core agent loop: model and tools"]:::core
        EVAL["Eval — score that changes the next edge"]:::core
        CORE --> EVAL
        EVAL --> CORE
      end
    end
  end
  AGENTS --> HARNESS

  subgraph GRAINS["Nested grains (same 7 loop fields)"]
    direction LR
    INNER["Inner (turn)"] --> MID["Mid (job / pipeline)"] --> OUTER["Outer (improve system)"]
  end

  subgraph AGENTSP["Agent profiles → skills"]
    direction LR
    LIB["GrokRarian — orient / locate"]:::agent
    PM["Page Master — docs"]:::agent
    HR["human-review — Writer not Checker"]:::agent
    LM["Load Master — write queue"]:::agent
    LL["Lessons Learned"]:::agent
    AC["Accountant — cost"]:::agent
    FP["First-Principles / PHD"]:::agent
    FDE["FDE"]:::agent
  end

  subgraph ROOTS["Data substrate — three roots"]
    direction LR
    VAULT["Vault — portable controlling docs"]:::root
    MYM["My Mind — personal residue"]:::root
    WORKM["Work Mind — work IP"]:::root
  end

  subgraph GOV["Governance gates"]
    direction LR
    RQ["Review Queue — approval gate"]:::gate
    HG["Human gate — irreversible steps"]:::gate
    WL["Write-Lock + Load Master — multi-agent"]:::gate
  end

  subgraph BACK["Backends (tool-agnostic)"]
    direction LR
    B1["GitHub"]
    B2["Local Git"]
    B3["Plain dir"]
    B4["Obsidian"]
  end

  HARNESS --> GRAINS
  HARNESS --> AGENTSP
  AGENTSP --> GOV
  AGENTSP --> ROOTS
  GOV --> VAULT
  ROOTS --- BACK
```

**How to read it**

- **Harness ⊃ Graph ⊃ Loop** — the nested boxes are literal: the Loop lives inside a Graph (when justified), which lives inside the Harness.
- **Never loop on confidence** — the Loop advances only on new evidence (Eval), with hard stops.
- **Writer ≠ Checker** — `human-review` and independent checks grade output in a separate context.
- **Three roots** — Vault is shared/portable; My Mind and Work Mind hold instance residue (see chart 1 for how each syncs).
