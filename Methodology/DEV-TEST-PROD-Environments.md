---
title: DEV · TEST · PROD Environments
type: methodology
status: live
created: 2026-08-06
updated: 2026-08-06
tags: [methodology, environments, promotion, harness, production, project-work, iac, pipelines]
related:
  - "[[Methodology/Production-Ready-Design-Checklist]]"
  - "[[Methodology/Nested-Cycles]]"
  - "[[Methodology/Agent-Operating-Workflows]]"
  - "[[Concepts/Harness-Loop-Graph-Architecture]]"
  - "[[Concepts/Memory-Engineering]]"
  - "[[AGENTS.md]]"
---

# DEV · TEST · PROD Environments — Standard for Project Work

**Purpose:** Every project that ships code, agents, configs, firmware, or data pipelines must treat environments as first-class harness surfaces. Isolation + evidence-based promotion is the default control for irreversible or customer-visible change.

This note is controlling methodology. Project Overviews declare their environment map (or explicitly document “single-environment for now” with justification). Product repos own the actual env configs and secrets; the vault owns the rules.

**Preferred implementation mechanism:** Infrastructure-as-Code (IaC) pipelines (Section 9). Manual or ad-hoc promotion is allowed only while a project is still single-env or explicitly excepted.

---

## 1. Definitions (canonical names)

| Environment | Purpose | Who may change | Data characteristics | Blast radius |
|-------------|---------|----------------|----------------------|--------------|
| **DEV** | Fast iteration, experiments, broken states allowed | Developer / agent under active work | Synthetic, anonymized, or throwaway; may be reset freely | Local or isolated sandbox only |
| **TEST** (aka Staging / QA) | Validation against realistic conditions before promotion | Controlled agents + human review | Production-like schema & volume where possible; no real customer PII unless explicitly approved | Shared team / pre-prod; still recoverable |
| **PROD** | Live customer / operational value | Human-gated only (or automated after explicit policy) | Real data; durability and correctness required | Highest; irreversible actions require proof |

Aliases are allowed in product docs (`staging`, `preprod`, `uat`) but the vault and handoffs use **DEV / TEST / PROD**.

---

## 2. Core rules (non-negotiable)

1. **No silent promotion.** Every move DEV → TEST or TEST → PROD leaves intentional residue (artifact, checklist, or Handoff) and satisfies the evidence criteria for that boundary.
2. **Writer ≠ Checker on promotion.** The agent or human that authored the change does not alone declare it production-ready in the same context. Separate verification (tests, Skeptic, human gate) is required for PROD.
3. **Secrets & credentials are environment-scoped.** Never share PROD secrets with DEV/TEST. Harness must enforce least-privilege per env.
4. **Data isolation.** PROD data does not flow downward except through approved, audited export/anonymization processes. DEV and TEST may be wiped without ceremony.
5. **Observability per env.** Logs, traces, metrics, and cost signals are tagged by environment. “It worked in DEV” is not evidence for PROD.
6. **Human gate on PROD.** Irreversible actions (deploy, schema migration that drops data, live customer messaging, money movement, vault permanent writes) require explicit human approval unless a pre-approved automation policy already exists and is itself versioned.
7. **Single source of truth for config.** Environment differences live in config / feature flags / secret stores, not in forked code paths that diverge permanently.
8. **Prefer Infrastructure-as-Code for promotion.** When a project has (or reaches) more than one environment, the definition, provisioning, and promotion of those environments should be expressed as versioned IaC + pipeline rather than manual clicks or one-off scripts. (See §9.)

---

## 3. Mapping onto Harness · Loop · Graph

| Layer | Environment implication |
|-------|-------------------------|
| **Harness** | Tools, permissions, persistence, budgets, and observability are **environment-aware**. A tool that can write PROD must be gated or unavailable in DEV sessions. State (files, DBs, caches) is namespaced or physically separate. IaC state backends and secret stores are part of the harness. |
| **Loop** | Promotion is itself a mid-grain loop: Trigger (change ready) → Goal (env transition with evidence) → Evidence (tests passed, checklist green, Skeptic notes, IaC plan) → Hard stops (failures, missing gate). |
| **Graph** | Promotion pipeline is a simple static graph when Qualifying Test is met: Build/Validate in DEV → Promote + verify in TEST → Human gate → PROD. Parallel paths only when independent checks exist. IaC pipelines are the concrete realization of this graph. |
| **Nested Cycles** | DEV work is usually inner; TEST validation is mid; PROD promotion and post-deploy monitoring feed outer improvement (RAI / Probe Suite). |

---

## 4. Promotion evidence (minimum)

### DEV → TEST
- Unit / integration tests green on the change
- Manual or automated smoke against DEV
- Residue: PR / commit / artifact list + known limitations
- Config / IaC plan diff reviewed (no accidental PROD pointers)
- IaC plan (if applicable) shows only expected resources

### TEST → PROD
- Full test suite + any environment-specific probes green
- Production-Ready Design Checklist critical items green (or waivers documented)
- Skeptic or independent reviewer notes (Writer ≠ Checker)
- Rollback plan exists and has been exercised or is trivial
- Human approval recorded (APPROVAL_LOG style or product equivalent)
- Monitoring / alert readiness confirmed
- IaC plan for PROD has been reviewed and approved; apply is gated

“Looks good” or confidence alone is never evidence.

---

## 5. Project obligations

Every project Overview (or its product repo README / ops doc) must contain one of:

- **Environment map** — short table of what exists (DEV / TEST / PROD or subset), where configs/secrets live, and whether promotion is IaC-driven or still manual, **or**
- **Explicit single-env declaration** — “Currently single-environment; promotion gates + IaC pipeline will be added when [trigger].”

Thin overviews stay thin: they *point* to this methodology; they do not re-state the full rules.

When a project reaches production readiness, the [[Methodology/Production-Ready-Design-Checklist]] is applied **per environment** where relevant (especially H9 secrets, H10 observability, E1–E5 eval).

---

## 6. Agent-specific notes

- Coding / agent sessions default to **DEV** context. Agents must not assume they are talking to PROD tools unless the harness explicitly injects PROD credentials and the task has a human gate.
- Memory / state (see [[Concepts/Memory-Engineering]]) is environment-scoped when the memory can affect live behavior.
- Handoffs across environments use the standard Handoff Artifact Spec and must name the target environment in Intent / Next action.
- Outer loops (W6) that improve a system must declare which environments the probes run against.
- Agents that generate or modify IaC must treat the generated plan as residue and never auto-apply to TEST or PROD without an explicit human (or pre-approved policy) gate.

---

## 7. Exceptions & gradualism

- Personal scripts, one-off research, or pre-product prototypes may run single-env. Document the exception.
- Firmware / hardware projects map “DEV = lab bench”, “TEST = pilot unit / field trial”, “PROD = fleet”. Same promotion discipline applies; IaC may take the form of versioned device configs, OTA manifests, or ESPHome / PlatformIO pipelines.
- When automation of promotion is desired, the automation itself is a system that must pass the Production-Ready checklist and retain a human kill switch.

---

## 8. Ship checklist (for this standard itself)

- [ ] Project Overviews updated or flagged for environment map + IaC status
- [ ] New systems designed with env isolation in Harness template
- [ ] Promotion evidence requirements known to agents via AGENTS.md / this note
- [ ] No permanent Methodology fork per project
- [ ] IaC pipeline (when present) follows the rules in §9

---

## 9. Infrastructure-as-Code Pipelines (preferred realization)

**Purpose of this section:** Make the abstract promotion rules in §§2–4 executable. IaC is the default way to define, provision, drift-detect, and promote environments once a project leaves single-env status.

### 9.1 Definition

Infrastructure-as-Code = version-controlled declarations (Terraform / OpenTofu, Pulumi, CloudFormation, Crossplane, ESPHome YAML, Ansible, Nix, etc.) that describe the desired state of an environment, plus the pipeline that plans, reviews, and applies those declarations.

The pipeline is a **mid-grain static graph** that realizes the promotion topology:

```
DEV change → Plan (DEV) → Apply (DEV) → Validate
          → Promote artifact → Plan (TEST) → Review → Apply (TEST) → Validate
          → Human gate → Plan (PROD) → Approve → Apply (PROD) → Monitor
```

### 9.2 Non-negotiable IaC rules

1. **Code is the source of truth.** Manual console changes in TEST or PROD are drift and must be either imported into code or reverted. Drift detection is part of the outer loop.
2. **Separate state per environment.** Never share a single state backend across DEV / TEST / PROD. State files / workspaces / stacks are environment-scoped.
3. **Plan before apply.** Every promotion produces a human-readable plan (or equivalent diff) that is stored as residue. Apply is a separate, gated step.
4. **Writer ≠ Checker on apply.** The agent or human that authors the IaC change does not alone approve the PROD apply. Plan review + independent approval is required.
5. **Secrets never in code.** Secrets live in environment-scoped secret stores (or encrypted variable sets) referenced by the IaC; they are injected at apply time under least privilege.
6. **Idempotent and declarative.** Prefer declarative tools. Imperative scripts are allowed only when the domain has no mature declarative option (document the exception).
7. **Rollback is first-class.** Every PROD apply has a documented, tested rollback path (previous state, previous image, feature flag, etc.).
8. **Pipeline itself is versioned.** The CI/CD definition (GitHub Actions, etc.) is code and subject to the same review discipline as the infrastructure it deploys.

### 9.3 Pipeline stages (canonical)

| Stage | Environment | Actor | Required residue | Hard stop |
|-------|-------------|-------|------------------|-----------|
| 1. Change | DEV | Developer / agent | Commit / PR + unit tests | Tests fail |
| 2. Plan DEV | DEV | Pipeline | Plan artifact | Plan errors |
| 3. Apply DEV | DEV | Pipeline / agent | Apply log + state update | Apply fails |
| 4. Validate DEV | DEV | Tests / probes | Green smoke / integration | Validation fails |
| 5. Promote | → TEST | Pipeline | Promotion artifact (image, package, config bundle) | Missing evidence |
| 6. Plan TEST | TEST | Pipeline | Plan artifact | Unexpected resources |
| 7. Review | TEST | Human or Skeptic | Review notes | Reject |
| 8. Apply TEST | TEST | Pipeline (gated) | Apply log | Apply fails |
| 9. Validate TEST | TEST | Full suite + env probes | Green ledger | Validation fails |
| 10. Human gate | → PROD | Human | Explicit approval record | No approval |
| 11. Plan PROD | PROD | Pipeline | Plan artifact | Unexpected change |
| 12. Approve + Apply PROD | PROD | Human + pipeline | Approval + apply log | Any failure |
| 13. Monitor | PROD | Observability | Metrics / alerts ready | — |

Not every project needs every stage on day one. The table is the target shape; projects may collapse early stages while they are still single-env, but must not skip the human gate or plan-before-apply for PROD.

### 9.4 Mapping onto HLG

| HLG element | IaC realization |
|-------------|-----------------|
| **Harness** | Tooling (Terraform/Pulumi/etc.), state backends, secret stores, CI runner permissions, environment-scoped credentials |
| **Loop (mid)** | Each promotion is a mid-grain loop whose evidence is the plan + test results + approval |
| **Graph** | The stage table above is the static graph. Qualifying Test is almost always met once two or more environments exist |
| **Writer ≠ Checker** | Plan generation (writer) vs plan review + apply approval (checker) |
| **Intentional residue** | Plans, apply logs, state snapshots, promotion artifacts, approval records |
| **Nested Cycles** | Inner = local plan/apply in DEV; Mid = full promotion pipeline; Outer = drift detection + pipeline improvement (RAI on the pipeline itself) |

### 9.5 Agent behavior with IaC

- Agents default to generating or editing IaC in the **DEV** context only.
- An agent may propose a plan for TEST or PROD, but must never execute `apply` (or equivalent) against TEST/PROD unless the harness has injected credentials **and** an explicit human (or pre-approved policy) gate has already fired in the current session.
- Generated plans are residue; they are not “done.”
- When an agent is asked to “deploy to prod,” it must surface the plan, the required evidence checklist, and the human gate rather than attempting the apply itself.

### 9.6 Tool-agnostic guidance (project chooses)

| Domain | Typical IaC / pipeline surface |
|--------|--------------------------------|
| Cloud / services | Terraform / OpenTofu, Pulumi, Crossplane + GitHub Actions / similar |
| Containers | Dockerfile + Helm / Kustomize / Compose + CI |
| Firmware / embedded | Versioned ESPHome / PlatformIO / Zephyr configs + OTA manifest pipeline |
| Local / desktop agents | Nix, Docker Compose, or scripted env bootstrap that is still versioned and plan-able |
| Data pipelines | dbt, Airflow/Dagster DAGs treated as code + environment-scoped warehouses |

The vault does not mandate a single tool. It mandates the **rules** (separate state, plan-before-apply, Writer ≠ Checker, human gate on PROD, secrets out of code).

### 9.7 Gradual adoption

1. Single-env projects: document the exception; no pipeline required yet.
2. First second environment appears: introduce at least plan + apply separation and environment-scoped state.
3. PROD exists: full human gate + plan review + rollback path become mandatory.
4. Pipeline maturity: add drift detection as an outer-loop probe; treat the pipeline itself as a system under the Production-Ready checklist.

---

**Status:** Live. Promoted from Drafts under user direction 2026-08-06 (“Commit the updates”).
