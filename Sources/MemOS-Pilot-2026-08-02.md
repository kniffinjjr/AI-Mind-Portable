# MemOS Local Pilot Notes

**Date:** 2026-08-02  
**Machine:** Windows (no Docker)  
**Goal:** Local-only evaluation — no cloud MemOS, no work secrets.

## What we installed

| Component | Location | Status |
|-----------|----------|--------|
| MemOS repo (shallow clone) | local clone under `PROJECTS_CODE_DIR` | OK — full monorepo |
| `@memtensor/memos-local-plugin` npm | local plugin install | OK |
| Docker / Neo4j / Qdrant full stack | — | **Blocked** — Docker not installed |
| OpenClaw / Hermes runtime | — | **Not present** — plugin adapters need one of these |

## Smoke checks

- `npm install @memtensor/memos-local-plugin@latest` → success (99 packages)
- `require('@memtensor/memos-local-plugin/package.json')` → `OK @memtensor/memos-local-plugin 2.0.12`
- Package is a **Reflect2Evolve memory plugin** for OpenClaw/Hermes (L1/L2/L3 memory, local SQLite path), not a standalone Grok Build native plugin
- Full self-host path wants Docker + Neo4j + Qdrant + LLM/embedder API keys (example env points at Bailian/DashScope)

## Blockers for full pilot on this PC

1. **No Docker** — cannot `docker compose up` the REST API + graph/vector stack  
2. **No OpenClaw/Hermes** — official local plugin install scripts target those agent homes  
3. **No Grok Build adapter** in MemOS today — integration would be custom (MCP bridge or session export pipeline)

## Recommended next steps (priority order)

1. **Optional:** Install Docker Desktop → self-host MemOS API with a non-sensitive API key for LLM/embedder  
2. **Optional:** Install OpenClaw or Hermes if you want the official local plugin path  
3. **For Grok Build:** treat MemOS as research; keep AI Mind Vault as human-gated knowledge; do not wire work PDM data into MemOS cloud  
4. Revisit when a Grok/MCP memory bridge exists or when Docker is available for a weekend pilot

## Fit with stack

| Tool | Role | Pilot result |
|------|------|--------------|
| GrokTerm | Host | Independent |
| Local usage dashboard | Token / cost visibility | Independent |
| AI Mind Vault | Human-gated knowledge | Keep as SoT |
| MemOS | Runtime agent memory | Package installable; runtime not yet wired |

## Decision

**Pilot phase 1 complete (install + inspect).** Phase 2 (live memory loop) deferred until Docker or OpenClaw/Hermes is available. No cloud credentials stored; no production data connected.
