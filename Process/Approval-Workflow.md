---
title: Approval Workflow
created: 2026-08-02
tags: [process, system]
---

# Approval Workflow for AI Mind Vault

**Principle:** The AI team has free access to draft and propose. Permanent knowledge changes require human (user) review and approval. This is the control-flow edge that turns the thermometer into a thermostat.

## How We Propose a Change

1. Create a new entry at the top of [[_meta/REVIEW_QUEUE]].
2. Use the template from [[Templates/Review-Proposal]].
3. Include:
   - Clear title and date
   - Type of change (new note / update / delete / restructure)
   - Target path
   - Rationale (why this improves the AI Mind)
   - Full proposed content or precise diff
   - Impact / Risk assessment
4. Status starts as `AWAITING USER APPROVAL`.

## How the User Approves

Reply in conversation with one of:

- `approve [title or ID]`
- `approve all pending`
- `approve with changes: [instructions]`
- `reject [title] because [reason]`
- `defer [title]`

## After Approval

1. AI applies the change to the live note(s).
2. Move or update the REVIEW_QUEUE entry to status `APPROVED` (or archive it).
3. Append a line to `_meta/CHANGELOG.md`.
4. Append a record to `_meta/APPROVAL_LOG.md`.
5. If useful, update 00_Home.md links or domain notes.

## Emergency / Founding Exception

The initial creation of this vault structure and migration of the original AI_Mind.md content was performed under the user's direct instruction to "perform an eval ... and iterate on it to create a personal clone". Subsequent changes follow the full gate.

## Why This Exists

From the [[Eval-Engineering]] skill: a score that only sits on a dashboard is analytics. A score that changes the next graph edge is engineering. The user's approval is the permanent examiner for the personal AI Mind knowledge base.
