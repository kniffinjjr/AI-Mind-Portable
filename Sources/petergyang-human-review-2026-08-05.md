---
title: Peter Yang /human-review skill
type: source
created: 2026-08-05
source: https://x.com/petergyang/status/2085006701984698712
repo: https://github.com/petergyang/human-review
tags: [source, skill, human-review, visual-editor, feedback-loop, hlg, local]
related: ["[[Skills/Custom/human-review]]", "[[Concepts/Harness-Loop-Graph-Architecture]]", "[[Concepts/AI-Powered-Premium-Website-Generation]]"]
---

# /human-review — Local visual editor for AI document & page feedback

**Author:** @petergyang (creator of /no-ai-slop, 4k stars)  
**Date:** 2026-08-05  
**Repo:** https://github.com/petergyang/human-review (MIT)

Solves the pain of describing precise edits to AI in chat ("update the 3rd paragraph… resize that image…"). Opens HTML, Markdown, or localhost pages in a browser so the human can:

- Edit & format text directly
- Resize images by drag
- Leave Google-Doc-style anchored comments on text or elements
- Remove elements
- Send one clean structured batch back to the agent

Agent receives JSON with pages → comments + edits (before/after + HTML formatting), applies them to source (preserving Markdown syntax fidelity), and the page refreshes. Fully local (Node CLI + local server), no cloud, no keys.

SKILL.md (in src/) teaches the exact poll / ack / status loop that agents must follow. Complementary to /no-ai-slop and our better-interface skill. Clean example of a Graph-layer human gate.
