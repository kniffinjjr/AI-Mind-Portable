---
title: OSS Tier A — Mac install kit
type: runbook
status: live
created: 2026-09-06
updated: 2026-09-06
related:
  - "[[Toolbox/OSS-Install-Footprint-Tier-A]]"
  - "[[Toolbox/Open-Source-Stack]]"
tags: [runbook, mac, oss, install]
---

# OSS Tier A — Mac install kit

**Run on the Mac.** Cursor Cloud cannot reach Joe’s Mac (no self-hosted worker connected).

## One command

```bash
cd /path/to/ai-mind-portable
chmod +x Scripts/oss-tier-a-mac/install.sh Scripts/oss-tier-a-mac/bin/install-heavy.sh
./Scripts/oss-tier-a-mac/install.sh
```

Needs: Homebrew, Docker Desktop **running**, Node/npm, network.

## What it installs

| Item | Status after script |
|------|---------------------|
| Ollama | Skipped if present (already on Mac) |
| Syncthing | Homebrew cask/formula |
| Bruno CLI (`bru`) | `npm i -g @usebruno/cli` |
| n8n | Docker `:5678` · data `~/oss-stack/n8n` |
| Vaultwarden | Docker `:8080` · data `~/oss-stack/vaultwarden` |
| DocuSeal | Docker `:3000` · data `~/oss-stack/docuseal` |
| Umami + Postgres | Docker `:3001` · data `~/oss-stack/umami` |

**Not installed by default on Mac:** Coolify (server install), Plane, Penpot (use `bin/install-heavy.sh` guidance / official compose when RAM allows).

## After install

1. Syncthing: pair `~/Sync/My-Mind` (and KiCad if needed). Keep Work-Mind off personal folders.
2. Umami: change default `admin` / `umami` password immediately.
3. Vaultwarden: put behind HTTPS (Tailscale Serve / Caddy) before real vault data; then disable signups.
4. Secrets file: `Scripts/oss-tier-a-mac/compose/.env` — do not commit.

## Disk / time (Mac as host)

- Syncthing + Bruno: &lt;1 GB, ~10–20 min  
- Four Docker apps: typically **~8–20 GB** after extract + volumes, **~20–40 min** pulls on home broadband  
- Data root: `~/oss-stack/` (override with `OSS_STACK_DIR=...`)
