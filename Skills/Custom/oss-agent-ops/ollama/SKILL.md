---
name: ollama
description: >-
  Operate Ollama (open-source alternative to ChatGPT Pro) via CLI/API/SDK. Use for Ollama, local LLM, ChatGPT Pro alternative, ollama serve.
metadata:
  replaces: ChatGPT Pro
  source_post: https://x.com/ihteshamali/status/2096598697308205182
  version: "1.0"
---

# Ollama — agent ops

Open-source alternative to **ChatGPT Pro**. This skill enables an AI agent to install, authenticate, and operate Ollama through documented CLI/API/SDK surfaces — not UI click-paths.

## Links

| Resource | URL |
|----------|-----|
| Home | https://ollama.com |
| GitHub | https://github.com/ollama/ollama |
| Docs | https://docs.ollama.com/ |
| API / SDK | https://docs.ollama.com/api/introduction |

## Stack surface

- **SDK / CLI:** CLI `ollama`; SDKs `ollama` (pip/npm); OpenAI-compatible `/v1`
- **Auth:** None on local :11434; cloud needs `OLLAMA_API_KEY`
- **MCP / automation:** No first-party MCP; many community bridges. Prefer REST + CLI.

## Install (quickstart)

`curl -fsSL https://ollama.com/install.sh | sh` — API on :11434

Install into a **product / project repo** or local ops folder — never as binaries inside the Vault.

## Agent operations

- `ollama pull|run|stop|ps|ls|rm`
- POST `/api/chat` and `/api/generate`
- Create custom models via Modelfile
- Embeddings endpoints
- OpenAI-compatible chat/completions against local server
- `ollama launch <integration>` for coding agents

## Workflow

1. Confirm target instance (self-host URL or cloud) and that credentials exist in env vars — not chat.
2. Prefer official CLI/SDK/MCP over scraping undocumented endpoints.
3. Run a read-only probe first (version/health/list).
4. Mutating ops only after the probe succeeds; leave intentional residue (IDs, links, logs).
5. Stop when the requested outcome is evidenced or a hard stop triggers.

## Hard stops

- Do not bind 0.0.0.0 without auth
- Respect disk/VRAM limits on pulls
- Do not send secrets to remote/cloud hosts

## Pairing

- Vault toolbox catalog: `Toolbox/Open-Source-Stack.md`
- Skill index: `Skills/Custom/oss-agent-ops/README.md`
- Prefer Harness · Loop · Graph: evidence over confidence; Writer ≠ Checker for destructive sends/deletes/deploys.
