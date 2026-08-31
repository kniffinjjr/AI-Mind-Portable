---
title: Tenex — MetaHarness AI-Native SDLC
type: source
created: 2026-08-06
source: https://x.com/businessbarista/status/2085385262037701056
article: https://www.tenex.co/blog/building-an-ai-native-sdlc
authors: [Alex Lieberman, Arman Hezarkhani, dan_zakon, seejayhess]
tags: [source, harness, context-as-code, skills, validation, sdlc, residue, tenex]
related:
  - "[[Concepts/Harness-Loop-Graph-Architecture]]"
  - "[[Concepts/Memory-Engineering]]"
  - "[[Methodology/DEV-TEST-PROD-Environments]]"
  - "[[Methodology/Nested-Cycles]]"
  - "[[Methodology/Handoff-Artifact-Spec]]"
  - "[[Concepts/Eval-Engineering]]"
  - "[[AGENTS.md]]"
---

# Tenex MetaHarness — Building an AI-Native SDLC (2026-08-06)

**Primary source:** Essay by Alex Lieberman (@businessbarista) + co-authors at Tenex Labs.  
X announcement: https://x.com/businessbarista/status/2085385262037701056  
Full article: https://www.tenex.co/blog/building-an-ai-native-sdlc

**Core diagnosis (matches our vault):** Execution capacity of coding agents now scales faster than the systems engineers use to preserve context, coherence, and understanding. Agents cannot inherit what was never written down.

**Eight principles extracted as durable patterns:**

1. **Context as code** — Project record lives in the repo as versioned markdown with strict grammar. Separate “what is true / what is planned / what happened.” Scratchpad exists so canonical docs stay clean. Filenames and fenced blocks enforce machine-writable vs human-writable zones (fence rule).

2. **Plans are detailed and allowed to change** — Deep blueprints are now cheap. Tickets belong to checkpoints; acceptance criteria are legible to agents. One connected blueprint rather than scattered tracker entries.

3. **Benevolent prompt injection / every agent starts senior** — Startup hooks automatically assemble architecture, recent decisions, acceptance criteria, validation state, and verification commands. No blank-prompt junior sessions.

4. **Skills ship like software** — 50+ versioned, tested, released skills (spec writing, ticket execution, bug investigation, PR prep, doc-vs-code review…). Local lessons become company defaults.

5. **One record, many views / machine interface** — CLI with structured commands. Agents ask “what is unblocked?”, “where does Linear disagree?” and receive facts grounded in the project record. Writes are plan-then-apply.

6. **Validation makes autonomy safer** — Agents check their own work. Validators return precise, self-healable errors. Trust is earned through verification, not confidence.

7. **Status is derived, not reported** — Human-facing surface reads the structured record. Inconsistencies (ticket marked done but missing PR/tests/sign-off) surface automatically.

8. **The process learns from the work** — Repeated gaps become new checks or skills. Improvements travel as versioned changes instead of oral culture.

**Concrete folder grammar they use (illustrative, not mandatory for us):**

```text
1-docs/          # current truth
2-epics/
3-project-specs/
4-log/
6-scratchpad/    # ungoverned annex so governance does not leak
.archived/
```

**Mapping to AI-Mind-Vault**

| MetaHarness | Our controlling surface |
|-------------|-------------------------|
| Context as code / project record | Memory Engineering, Intentional Residue, AGENTS.md, thin Project Overviews |
| Blueprint + changeable plans | Nested Cycles, Graph Engineering (Qualifying Test, Start Manual) |
| Benevolent prompt injection | GrokRarian Boot + Harness context injection |
| Skills as versioned software | Skills/Custom + local SKILL.md |
| Plan-before-apply machine interface | DEV-TEST-PROD §9 IaC rules, Writer ≠ Checker, Handoff Artifact Spec |
| Validation / self-check | Eval Engineering, Probe Suite, Production-Ready checklist |
| Derived status + residue | Observability rules, “done is a claim until proof” |
| Process learns | RAI / W6 outer loop / Probe Suite |

**Practical techniques worth selective adoption**

- **Fence rule** — Explicit syntax marking which parts of a markdown file a machine may rewrite. Prevents agents from overwriting human prose.
- **Plan-then-apply for any write that touches external systems** (tickets, Linear, GitHub, infrastructure) — already encoded in our IaC promotion rules.
- **Project-record shape** as an optional pattern for product repos that need stronger multi-agent legibility (especially when concurrency grows).

**Honest limits they state (align with our gradualism):** Overkill for tiny single-person projects; depends on a team that actually writes things down. Validation exists because discipline alone eventually fails.

This is external validation and a set of implementable harness patterns, not a competing architecture.
