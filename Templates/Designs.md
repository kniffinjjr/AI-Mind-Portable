---
title: Designs — product UI brief + FDE client discovery
type: template
status: live
created: 2026-09-08
related:
  - "[[Skills/Custom/design-system]]"
  - "[[Skills/Custom/fde]]"
  - "[[Concepts/Forward-Deployed-Engineering]]"
tags: [template, design, ui, ux, fde, discovery]
---

# Designs

**Required in every product repo that ships UI/UX.** Living brief for humans and agents. Read this before changing layout, visual system, copy hierarchy, or interaction patterns.

Copy this file to the **product repo root** as `Designs.md` (keep the name). Fill answers under **Client answers**. Leave unanswered items as `TBD` — do not invent brand or product truth.

---

## Agent rules

1. **Discovery before pixels.** If Client answers are empty or stale for the requested change, run the FDE interview below with the user as client. Do not “pretty up” from vibes.
2. **User = embedded client.** Prefer clarifying questions over silent assumptions (FDE motion).
3. **Write residue here.** Capture decisions in this file (or link to a dated decision log). Chat is not the source of truth.
4. **Pair with skills:** `design-system` (tokens) → page skills → `pixelslop` / `better-interface` / `a11y-build` before ship.
5. **Done requires proof.** Screenshots or a short walkthrough against the success criteria below.

---

## Product snapshot

| Field | Value |
|-------|-------|
| Product / site | |
| Primary audience | |
| Primary job-to-be-done | |
| Primary CTA / outcome | |
| Stack (UI) | |
| Brand owner | |
| Last discovery | YYYY-MM-DD |

---

## FDE discovery — ask the client

Treat unanswered items as blockers for non-trivial UI work. Ask only what’s missing for the current task; don’t dump the whole list every turn.

### 1. Context & stakeholders

- Who is the **client** for this change (decision maker), and who are the **users**?
- What workflow or business moment does this UI sit in (before/after screens)?
- What already exists (live site, Figma, PDF brand guide, competitor they like)?
- Who must approve ship, and what does “approved” look like?

### 2. Problem & success

- What is broken or missing **today** in measurable terms?
- What does success look like in **30 days** (metric, quote, or observable behavior)?
- What would make this project a **failure** even if it “looks nice”?
- What is explicitly **out of scope** for this pass?

### 3. Users & jobs

- Primary persona (role, skill, device, time pressure)?
- Secondary personas that must not be broken?
- Critical path: first visit → aha → conversion/task complete — step by step?
- Accessibility / inclusion requirements (WCAG target, language, motor/vision constraints)?

### 4. Brand & visual direction

- Must-keep brand assets (logo, colors, type, voice)?
- References they love (**and** hate) — links or names?
- Tone: utility / premium / playful / industrial / clinical / other?
- Light / dark / both? Density: comfortable vs compact?
- Motion: none / subtle / expressive — any “never animate X”?

### 5. Information & IA

- Which pages or surfaces are in scope this pass?
- Nav model (flat, hub, wizard, app shell)?
- Content sources of truth (CMS, markdown, hardcoded)?
- Empty, loading, error, and permission-denied states — required?

### 6. Constraints (integration reality)

- Tech constraints (framework, component library, no new deps)?
- Performance budget (LCP, JS KB, image policy)?
- Compliance / legal (claims, disclaimers, privacy, regulated copy)?
- Timeline and “must demo by” date?
- Environments (local, staging, prod) and who deploys?

### 7. Evidence & handoff

- How will we **know** the UI works (checklist, analytics event, user test)?
- Who maintains tokens/components after handoff?
- Where do future design decisions get logged (this file vs `docs/Design-Decision-Log.md`)?

---

## Client answers

> Fill during discovery. Prefer short bullets. Date each substantive update.

### Decisions

- 

### Open questions

- 

### Explicit non-goals

- 

### References

- Love:
- Hate:

---

## Visual system pointers

Link or summarize; do not duplicate a full token dump unless this repo has no `DESIGN_SYSTEM.md`.

| Layer | Location / notes |
|-------|------------------|
| Tokens / theme | |
| Components | |
| Page patterns | |
| Motion | |
| Content / voice | |

Optional hosted brand context for AI tools: see vault [[Toolbox/Marketing-Skills]] pattern — prefer product-local truth here; tools like UI Rules are optional MCP delivery, not a substitute for this brief.

---

## Ship gate (UI)

Before calling UI work done:

- [ ] Answers above cover this change (or TBD items explicitly deferred)
- [ ] Tokens/roles used — no one-off magic colors/fonts unless documented
- [ ] Critical path walkthrough recorded or checklist passed
- [ ] `pixelslop` / `better-interface` / `a11y-build` concerns addressed or filed
- [ ] This file updated with any new decisions
