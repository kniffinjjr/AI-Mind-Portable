---
title: Meng To — Three.js 3D Scroll Landing Page
type: source
status: live
captured: 2026-08-07
source_url: https://x.com/MengTo/status/2085765403729653877
x_post: https://x.com/MengTo/status/2085765403729653877
creator: Meng To (@MengTo)
related:
  - "[[Skills/Custom/landing-page]]"
  - "[[Skills/Custom/web-motion]]"
  - "[[Skills/Custom/react-ui]]"
  - "[[Skills/Custom/nextjs-app]]"
  - "[[Skills/Agent-Skill-Map]]"
---

# Meng To — Three.js 3D Scroll Landing (KAGE)

**X post:** https://x.com/MengTo/status/2085765403729653877  
**Author:** Meng To (@MengTo)  
**Captured:** 2026-08-07

## What it is

A Three.js landing page with **3D scrolling for every section**. Atmospheric “KAGE – Hidden Realms of Kyoto” narrative experience (torii, temples, vermilion moon, lanterns, mist, maple).

**Key performance claim:**
- Whole site (apart from images): **922 KB on disk / 290 KB gzipped**
- Typical 1080p scrolling-video sites: **20–100 MB**

Built with Claude Code (Opus), Higgsfield for images, external cloth-effect tool. Inspiration: Daniel Snow. Author asked community whether to open-source.

## Evaluation (2026-08-07)

- **Substance:** High visual craft + strong first-principles performance argument.
- **Novelty:** Medium for Three.js scroll worlds; **high** for the explicit “replace video scrolls with lightweight real-time 3D” framing and measured payload.
- **Role for us:** External reference for performance-first spatial storytelling on landing pages. Not a full new skill yet.

## Selective absorption (done)

| Skill | What was absorbed |
|-------|-------------------|
| `landing-page` | Performance budget language: prefer lightweight real-time 3D / canvas over heavy video scrolls when the narrative is spatial |
| `web-motion` | Scroll-synced camera/scene patterns, AI-assisted texture/lighting/alpha loops, prefers-reduced-motion fallbacks for 3D |

## Do not

- Freeze the Kyoto aesthetic or specific cloth shader as doctrine.
- Create a full `threejs-scroll` skill unless authoring depth is later requested.
- Ignore a11y / reduced-motion when using 3D as the primary experience.

## When to reopen

- User wants full Three.js / R3F authoring skill
- Open-source release from Meng To becomes available
- Expanding performance budgets for marketing pages
