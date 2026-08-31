---
title: Magic UI
type: toolbox
status: live
created: 2026-08-13
category: ui
stack: [react, typescript, tailwind, motion, shadcn]
related:
  - "[[Toolbox/_index]]"
  - "[[Skills/Custom/react-ui]]"
  - "[[Skills/Custom/landing-page]]"
  - "[[Skills/Custom/pixelslop]]"
tags: [toolbox, ui, react, shadcn]
---

# Magic UI

**One-liner:** Copy-paste animated React components for design engineers; shadcn-compatible companion library (~22k★, MIT).

**Links:**

- https://magicui.design
- https://github.com/magicuidesign/magicui
- MCP (AI editor install): https://github.com/magicuidesign/mcp

## Stack

React · TypeScript · Tailwind · Motion · shadcn/ui CLI install path

## Install (in the **product** repo)

Follow current docs (shadcn-style registry). Example pattern:

```bash
# Prefer official CLI / docs at magicui.design/docs — versions change
npx shadcn@latest add <component>   # when published on their registry
```

Do **not** vendor the entire monorepo into AI-Mind-Vault.

## When to use

- Landing/marketing surfaces that need marquees, beams, bento, kinetic text, terminal chrome
- Already on React + Tailwind + (ideally) shadcn
- After layout, hierarchy, and CTA are set (`landing-page` / `product-page`)

## When not to use

- As a substitute for `design-system` tokens
- Dense data apps where motion harms clarity
- Before `pixelslop` / `better-interface` review on AI-generated pages

## Agent pairing (Grok Build)

| Task | Skills |
|------|--------|
| Implement components | `react-ui`, `nextjs-app` |
| Page structure | `landing-page`, `product-page`, `design-system` |
| QA | `pixelslop`, `better-interface`, `a11y-build`, `web-motion` |

## Source post

- https://x.com/githubprojects/status/2087909565589512196
