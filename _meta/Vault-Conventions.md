---
title: Vault Conventions
created: 2026-08-02
updated: 2026-08-02
tags: [system, meta]
---

# AI Mind Vault Conventions

This vault is the personal Obsidian-style clone of the AI Mind.

## Folder Purpose

- **00_Home.md**: Single entry-point dashboard / Map of Content (MOC).
- **_meta/**: Meta files that control the vault itself (never delete without approval). Contains REVIEW_QUEUE, CHANGELOG, conventions, eval logs, approval history.
- **Skills/Custom/**: One atomic note per custom skill. These are curated overlays, not full copies of SKILL.md.
- **Skills/Bundled/**: Notes for system skills where relevant.
- **Concepts/**: Core ideas (Harness-Loop-Graph, Eval Engineering, Progressive Disclosure, etc.).
- **Process/**: How we operate the vault (Approval-Workflow, etc.).
- **Templates/**: Reusable note templates.
- **Drafts/** and **Inbox/**: Free AI workspace. Content here is not "live" until promoted via REVIEW_QUEUE.
- **Journal/**: Optional session or daily notes.
- **Personal/**: Migrated personal second-brain files (Brain Dumps).
- **Projects/**: Migrated project documents from Google Drive.

## Linking

- Use Obsidian-style `[[wikilinks]]` for all internal references.
- Prefer `[[Skills/Custom/eval-engineering]]` or just `[[eval-engineering]]` if unambiguous.
- Tags: `#skill` `#concept` `#domain/trading` `#status/active` `#status/draft`

## Free Access vs Gated Updates

- AI team may freely create, edit, and delete anything in **Drafts/**, **Inbox/**, and **_meta/REVIEW_QUEUE.md**.
- AI team may freely *read* the entire vault and the underlying SKILL.md files.
- Any change that promotes content into Skills/, Concepts/, or Process/ (or modifies existing live notes) **must** be entered as a proposal in `_meta/REVIEW_QUEUE.md` and wait for explicit user approval.
- After approval, the change is applied, logged in CHANGELOG.md and APPROVAL_LOG.md.

This gate implements the "verdict changes the edge" principle from eval-engineering.
