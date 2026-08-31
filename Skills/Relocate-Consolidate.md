---
title: Relocate & Consolidate SKILLS.md
type: process
status: live
created: 2026-08-10
updated: 2026-08-10
maintainer: Page Master
related:
  - "[[Skills/Agent-Skill-Map]]"
  - "[[Skills/Short-Instructions]]"
  - "[[Skills/Grok-Agent-Personalities]]"
  - "[[Process/Approval-Workflow]]"
---

# Relocate & consolidate existing SKILLS.md files

Use when a machine, project, Drive folder, or older AI Mind layout still has skill catalogs (`SKILLS.md`, `skills.md`, single-file registries) that should fold into the Vault and/or the public Codex Mind Pack.

**Canonical surfaces after consolidation**

| Artifact | Where |
|----------|--------|
| Full routing map | This vault: `Skills/Agent-Skill-Map.md` |
| Work-safe routing map | your published pack `Skills/Agent-Skill-Map.md` |
| Personalities (Grok) | `Skills/Grok-Agent-Personalities.md` + Short-Instructions |
| Personalities (Codex work) | pack `personalities/` |
| Skill overlays | `Skills/Custom/` |
| Runtime bodies | Local agent skill dirs (`SKILL.md` per skill) |

There is **no** long-lived root `SKILLS.md` as the AI Mind standard. Prefer map + personalities + Custom overlays + runtime bodies.

---

## 1. Discover

```text
**/SKILLS.md
**/skills.md
**/Skills.md
# Agent runtime
~/.grok/skills/**/SKILL.md
~/.codex/**/skills*
# Legacy single-file registries / Drive AI Mind exports
```

Record path, size, modified date, and whether the file is a **catalog**, **paste pack**, or **full procedure body**.

---

## 2. Classify

| Class | Meaning | Destination |
|-------|---------|-------------|
| **A. Routing** | Persona→skill tables, clusters | Vault and/or pack `Agent-Skill-Map.md` |
| **B. Work short pack** | ≤4k Codex/GPT work instructions | pack `personalities/` |
| **C. Personal short pack** | Grok-named / personal domain paste packs | `Skills/Grok-Agent-Personalities` or Short-Instructions |
| **D. Operational body** | Full SKILL.md | Local skill dir; Vault `Skills/Custom/` overlay when curated |
| **E. Personal / domain-only** | Tax, RE, trading, named products, PDM, … | Vault only (approval gate) — never public pack origin |
| **F. Project residue** | One-off lists | Project folder under Vault `Projects/` or pack `Projects/<slug>/` |
| **G. Duplicate / obsolete** | Same doctrine twice | One name; tombstone the other |

**Rules:** Personality ≠ skill · no double doctrine · pack stays work-safe · Vault permanent notes need approval unless user explicitly directs the update.

---

## 3. Consolidate

1. Diff Class A into [[Skills/Agent-Skill-Map]]; sync pack map if work-relevant.
2. Merge Class B/C into the correct personality catalog (neutral names on pack).
3. Keep Class D runtime paths; add Custom overlay when the skill is first-class in the Mind.
4. Class E → Vault only; do not push to `codex-mind-pack`.
5. Class F → project residue only unless user promotes.

---

## 4. Tombstone

Replace old root catalogs so agents stop treating them as authoritative:

```markdown
# SKILLS.md (moved)

Consolidated into the AI Mind:

- Vault map: Skills/Agent-Skill-Map.md
- Pack map (work): codex-mind-pack Skills/Agent-Skill-Map.md
- Procedure: Skills/Relocate-Consolidate.md

Do not edit this stub.
```

---

## 5. Checklist

- [ ] Discovery complete
- [ ] Classified A–G
- [ ] Vault map updated
- [ ] Pack map updated if work-portable (user-directed pack commit)
- [ ] No personal catalogs on public origin
- [ ] Old files removed or tombstoned
- [ ] CHANGELOG / APPROVAL_LOG when permanent Vault notes change under the gate

---

## When in doubt

GrokRarian for orientation; Page Master for map/doc edits; prefer the Agent-Skill-Map over a second root catalog.
