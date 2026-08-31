---
title: AI Mind — Architecture & Data-Flow Charts
type: draft
status: draft
created: 2026-08-31
updated: 2026-08-31
tags: [draft, architecture, data, sync, diagram]
---

# AI Mind — Architecture & Data-Flow Charts

Working note (scratch). Two charts:

1. **Where and how data is stored and managed** — the git/Dropbox split across devices.
2. **Overall AI Mind OS architecture** — Harness · Loop · Graph over the three roots.

Both are Mermaid, so they render in GitHub and Obsidian and stay editable in plain text. Promote to `Concepts/` / `Process/` via `_meta/REVIEW_QUEUE.md` when ready.

---

## 1. Data storage & management

Two sync planes, one per data type. **Git repos** move through a git remote; **loose files** move through Dropbox. The two planes never mix (never nest a `.git` folder inside Dropbox).

```mermaid
flowchart TB
  classDef dev fill:#30363d,color:#e6edf3,stroke:#8b949e,stroke-width:1px;
  classDef hub fill:#161b22,color:#e6edf3,stroke:#e6edf3,stroke-width:2px;
  classDef git fill:#1f6feb,color:#ffffff,stroke:#0b3d91;
  classDef file fill:#238636,color:#ffffff,stroke:#0f5323;
  classDef work fill:#8957e5,color:#ffffff,stroke:#4b2c91;
  classDef note fill:#0d1117,color:#8b949e,stroke:#30363d;
  classDef rule fill:#2d1618,color:#ff7b72,stroke:#f85149;

  subgraph DEVICES["1 · Your devices"]
    direction LR
    D1["Desktop / laptop"]:::dev
    AND["Android"]:::dev
    IOS["iPhone / iPad"]:::dev
  end

  GH{{"GitHub remote"}}:::hub
  DBX{{"Dropbox"}}:::hub

  subgraph REPOS["2a · Git repos — source of truth + history"]
    direction LR
    RV["AI-Mind-Vault<br/><i>private OS</i>"]:::git
    RP["AI-Mind-Portable<br/><i>public subset</i>"]:::git
    RC["Product code repos"]:::git
  end

  subgraph FILES["2b · Dropbox files — loose, non-repo"]
    direction LR
    MM["My Mind<br/>notes + assets"]:::file
    SCR["Inbox / scratch"]:::file
    REFP["Reference / PDFs"]:::file
    NOW["Handoffs / NOW.md"]:::file
  end

  WM["Work Mind — IP firewall<br/><i>employer storage, never personal Dropbox</i>"]:::work

  DEVICES ==>|"git push / pull"| GH
  DEVICES ==>|"file sync"| DBX
  GH --> REPOS
  DBX --> FILES

  subgraph HOW["How each device reaches Dropbox"]
    direction TB
    H1["Desktop&nbsp;→ native Dropbox app"]:::note
    H2["Android&nbsp;→ Dropsync / FolderSync"]:::note
    H3["iOS&nbsp;→ Obsidian Sync or git client<br/>(no direct Dropbox)"]:::note
  end

  subgraph RULESET["Rules"]
    direction TB
    R1["1 · Never put .git inside Dropbox"]:::rule
    R2["2 · Repos → git remote · files → Dropbox"]:::rule
    R3["3 · Let Dropbox fully sync before switching devices"]:::rule
  end

  DBX -.-> HOW
```

**Continuity habits**

- Leaving a machine (code): `git add -A && git commit -m "wip" && git push`. Arriving: `git pull`.
- Leaving a machine (files): wait for Dropbox's full-sync checkmark before switching.
- `Handoffs/NOW.md`: current focus + next action, so mental context restores instantly.

---

## 2. Overall AI Mind OS architecture

Read it top-to-bottom as a spine: the **operator** sets rules, the **Harness** wraps a **Graph** that wraps the **Loop**, agent **profiles** act through skills, and writes reach the **data roots** only through **governance gates**.

```mermaid
flowchart TB
  classDef human fill:#30363d,color:#e6edf3,stroke:#8b949e;
  classDef core fill:#238636,color:#ffffff,stroke:#0f5323;
  classDef agent fill:#9e6a03,color:#ffffff,stroke:#5a3d02;
  classDef gate fill:#8957e5,color:#ffffff,stroke:#4b2c91;
  classDef root fill:#1f6feb,color:#ffffff,stroke:#0b3d91;
  classDef back fill:#161b22,color:#e6edf3,stroke:#30363d;

  USER(["Operator / User"]):::human
  AGENTS["AGENTS.md<br/>portable operating rules"]:::human
  USER --> AGENTS

  subgraph HARNESS["HARNESS — tools · state · permissions · observability · context"]
    subgraph GRAPH["GRAPH — explicit topology only when the Qualifying Test passes"]
      subgraph LOOP["LOOP — evidence over confidence · hard stops"]
        CORE["Core loop<br/>model ↔ tools"]:::core
        EVAL["Eval<br/>score that changes the next edge"]:::core
        CORE -->|produce| EVAL
        EVAL -->|feedback| CORE
      end
    end
  end
  AGENTS --> HARNESS

  subgraph PROFILES["Agent profiles — act through skills"]
    direction LR
    subgraph ORCH["Orchestration"]
      direction TB
      LIB["GrokRarian<br/><i>orient / locate</i>"]:::agent
      PM["Page Master<br/><i>docs</i>"]:::agent
      LM["Load Master<br/><i>write queue</i>"]:::agent
    end
    subgraph QUAL["Quality &amp; review"]
      direction TB
      HR["human-review<br/><i>Writer ≠ Checker</i>"]:::agent
      LL["Lessons Learned<br/><i>after-action</i>"]:::agent
      AC["Accountant<br/><i>cost</i>"]:::agent
    end
    subgraph DEL["Research &amp; delivery"]
      direction TB
      FP["First-Principles<br/><i>PHD research</i>"]:::agent
      FDE["FDE<br/><i>production AI</i>"]:::agent
    end
  end

  subgraph GATES["Governance gates"]
    direction LR
    RQ["Review Queue<br/>approval"]:::gate
    HG["Human gate<br/>irreversible steps"]:::gate
    WL["Write-Lock + Load Master<br/>multi-agent"]:::gate
  end

  subgraph ROOTS["Data substrate — three roots"]
    direction LR
    VAULT["Vault<br/>portable controlling docs"]:::root
    MYM["My Mind<br/>personal residue"]:::root
    WORKM["Work Mind<br/>work IP"]:::root
  end

  subgraph BACK["Backends — tool-agnostic"]
    direction LR
    B1["GitHub"]:::back
    B2["Local Git"]:::back
    B3["Plain dir"]:::back
    B4["Obsidian"]:::back
  end

  HARNESS -->|runs| PROFILES
  PROFILES -->|proposes writes| GATES
  GATES -->|approved| ROOTS
  ROOTS --- BACK

  subgraph GRAINS["Nested grains — same 7 loop fields at each scale"]
    direction LR
    INNER["Inner<br/>turn"] --> MIDG["Mid<br/>job / pipeline"] --> OUTER["Outer<br/>improve the system"]
  end
  HARNESS -.->|operates at every grain| GRAINS
```

**How to read it**

- **Harness ⊃ Graph ⊃ Loop** — the nested boxes are literal: the Loop lives inside a Graph (only when justified), which lives inside the Harness.
- **Evidence over confidence** — the Loop advances only on new evidence (Eval), with hard stops; it never loops on confidence.
- **Writer ≠ Checker** — `human-review` and independent checks grade output in a separate context.
- **Gates before writes** — permanent changes reach the roots only through the Review Queue / human gate / write-lock.
- **Portable vs private** — the public edition ships the architecture + generic profiles; domain skills and instance residue stay in the private OS and in My Mind / Work Mind.
