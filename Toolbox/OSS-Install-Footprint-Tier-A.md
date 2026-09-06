---
title: OSS Install Footprint — Tier A (current projects)
type: toolbox
status: live
created: 2026-09-06
updated: 2026-09-06
related:
  - "[[Toolbox/Open-Source-Stack]]"
  - "[[Skills/Custom/oss-agent-ops/README]]"
  - "[[Sources/Ihtesham-OSS-Stack-Post-2026-09-06]]"
tags: [toolbox, oss, install, storage, footprint]
---

# OSS Install Footprint — Tier A

**Scope:** Only open-source apps from the ihteshamali stack that help **current** projects — not all 35.

**Assumptions:** one Linux Docker host for services; Ollama + Syncthing + Bruno on the workstation (or RV laptop). Paths use `/opt/oss-stack/<app>` for services.

**Sizing notes:** Image sizes are compressed Hub `full_size` (pull size). On disk after extract, plan **~2–3×** image + volumes. Times assume ~100 Mbps down and a mid VPS.

---

## Current projects → Tier A picks

| Project | Why these tools matter |
|---------|------------------------|
| **SmaRV / KiCad / pc-api-hub** | Plane (backlog), Syncthing (CAD/minds), Vaultwarden (device secrets), Ollama (offline agent), Bruno (API), Coolify (later device dashboards) |
| **Defend Your Calendar** | Plane, Penpot (HUD/UI mockups), Cap later for playtest clips |
| **Festival Deploy** | Cap + Kdenlive later; Immich later for take library; Ollama for local prompt iteration |
| **Colony rental** | DocuSeal (leases), NocoDB later, Formbricks later; Vaultwarden; LanguageTool later |
| **SpinWurkz / portfolio** | Coolify (host), Penpot (UI), Umami (analytics), Webstudio/Medusa later |
| **Diamond C PDM (work)** | n8n (glue), Appsmith/Metabase later — keep Work-Mind IP firewall |
| **Career / GrokTokens / mind packs** | Plane, Ollama, Syncthing, Vaultwarden |

---

## Tier A — install now (9)

| # | App | Replaces | Projects helped | Install kind | Default / recommended paths | Pull / install size (approx) | Working set after extract + light volumes | Fresh install time (approx) |
|---|-----|----------|-----------------|--------------|------------------------------|------------------------------|---------------------------------------------|------------------------------|
| 1 | **Coolify** | Heroku | SpinWurkz, portfolio, host for other apps | Docker install script | `/data/coolify/` (script default); apps under Coolify-managed Docker | Coolify core images ~2–4 GB | **10–30 GB free min**; plan **80–160 GB** once hosting multiple apps/builds | **10–25 min** (script + first UI) |
| 2 | **n8n** | Zapier | Diamond C glue, rental/shop automations | Docker Compose | `/opt/oss-stack/n8n/` · volume `n8n_data` | Image ~0.4 GB compressed | **1.5–3 GB** (+ workflow media growth) | **5–10 min** |
| 3 | **Plane** | Jira | All active project backlogs | Docker Compose (Prime/community) | `/opt/oss-stack/plane/` | Backend image ~0.1 GB; full stack (web+db+redis+worker) typically **2–5 GB** pulls | **8–15 GB** with Postgres | **15–30 min** |
| 4 | **Vaultwarden** | 1Password | All (secrets for agents + apps) | Docker | `/opt/oss-stack/vaultwarden/data/` | Image ~0.09 GB | **0.5–1 GB** (vault grows slowly) | **5–10 min** (+ HTTPS reverse proxy) |
| 5 | **Penpot** | Canva | SpinWurkz UI, Smarvy brand, DYC mockups | Docker Compose | `/opt/oss-stack/penpot/` | frontend+backend ~0.7 GB compressed; full stack (exporter/redis/exporter/exporter) often **3–6 GB** pulls | **10–20 GB** with assets | **15–25 min** |
| 6 | **DocuSeal** | DocuSign | Colony leases, SpinWurkz contracts | Docker | `/opt/oss-stack/docuseal/data/` | Image ~0.23 GB | **1–3 GB** (+ signed PDFs) | **5–10 min** |
| 7 | **Umami** | Google Analytics | Portfolio, client sites | Docker Compose + Postgres | `/opt/oss-stack/umami/` | App image ~0.3–0.6 GB est. + Postgres | **2–5 GB** | **10–15 min** |
| 8 | **Ollama** | ChatGPT Pro | Offline/RV agents, GrokTokens cost control | Native (desktop/server) | Binary: package default · Models: `~/.ollama/models` or `$OLLAMA_MODELS` | Binary ~**4 GB**; models separate | **Binary 4 GB + models** (e.g. one 8B Q4 ≈ **5 GB**; 3 models ≈ **15–40 GB**) | Binary **5–10 min**; each model pull **2–20 min** |
| 9 | **Syncthing** | Dropbox | My-Mind ↔ Work-Mind ↔ KiCad ↔ GDD assets | Native desktop (optional Docker) | Config `~/.config/syncthing/` · synced folders **you choose** (e.g. `~/Sync/My-Mind`) | Binary tiny (~20 MB); Docker image ~0.02 GB | **Config &lt;100 MB**; data = size of synced trees | **5–15 min** to pair devices |

**Bruno** (Postman OSS) — add as desktop/npm companion for pc-api-hub / connectors: `npm i -g @usebruno/cli` · collections in each product repo · **&lt;200 MB** · **2–5 min**. Not a server.

---

## Roll-up budgets

### A. Docker host only (apps 1–7, no Ollama models)

| Budget | Disk | Wall-clock (serial) | Wall-clock (parallel pulls) |
|--------|------|---------------------|-----------------------------|
| **Minimum to stand up** | **~40–60 GB free** | ~70–125 min | ~40–60 min |
| **Comfortable + headroom** | **100–160 GB** | same install; growth from builds/logs | — |

Coolify alone wants ≥10–30 GB free; hosting Plane+Penpot+n8n+Umami+DocuSeal+Vaultwarden on the same box is what drives the 100 GB+ comfort zone.

### B. Workstation / RV laptop (Ollama + Syncthing + Bruno)

| Item | Disk | Time |
|------|------|------|
| Ollama binary | ~4 GB | 5–10 min |
| First useful coding model (e.g. 8B Q4) | ~5 GB | 3–10 min |
| Syncthing + Bruno | &lt;0.5 GB | ~10–20 min |
| **Starter total** | **~10–15 GB** | **~20–40 min** |
| Comfortable multi-model | **+20–60 GB** | as pulled |

### C. Combined (recommended first month)

| | |
|--|--|
| **Disk to reserve** | **~150 GB** on Docker host + **~40 GB** on laptop for models |
| **First weekend install** | Coolify → Vaultwarden → n8n → Plane → DocuSeal → Umami → Penpot (services); Ollama+Syncthing+Bruno (laptop) |
| **Defer** | Immich, Cap, Kdenlive, Medusa, Webstudio, Twenty, Chatwoot, Appsmith, Metabase, SigNoz, Keycloak, Listmonk, OpenSEO, AppFlowy, Jitsi, Mattermost, Cal.com, NocoDB, Formbricks, LanguageTool, Shlink, GIMP |

---

## Directory layout (convention)

```text
/opt/oss-stack/
  coolify/          # or use Coolify’s /data/coolify and deploy others via Coolify UI
  n8n/
  plane/
  vaultwarden/
  penpot/
  docuseal/
  umami/
  README.md         # which ports, domains, backup cron

# Workstation
~/.ollama/models          # or $OLLAMA_MODELS=/data/ollama/models
~/.config/syncthing/
~/Sync/My-Mind/
~/Sync/Work-Mind/         # Work IP only on work-approved devices
~/Sync/KiCad/
```

**IP firewall:** Work-Mind / Diamond C PDM residue stays on work-approved sync targets — never mix into personal Syncthing folders.

**Secrets:** Vaultwarden behind HTTPS; Coolify/n8n/Plane API tokens in Vaultwarden — never in the Vault git repo.

---

## Suggested install order (dependency / risk)

1. **Coolify** (PaaS host) — if this box will run the rest  
2. **Vaultwarden** — secrets before more apps  
3. **n8n** + **Plane** — daily ops leverage  
4. **DocuSeal** — Colony high-stakes docs (human gate forever)  
5. **Umami** — portfolio analytics  
6. **Penpot** — design when UI work starts  
7. **Ollama / Syncthing / Bruno** on laptop in parallel anytime  

---

## Tier B (next, project-triggered)

| App | Trigger |
|-----|---------|
| Cap + Kdenlive | Festival Deploy / DYC capture-edit |
| Immich | Large media libraries for Festival/DYC |
| NocoDB + Formbricks | Colony ops sheets/surveys |
| Webstudio + Medusa + Twenty + Chatwoot | SpinWurkz MVP beyond static demo |
| Appsmith + Metabase | Diamond C internal tools (Work-Mind) |
| Supabase | When SmaRV/SpinWurkz need hosted backend beyond Coolify static |
| Listmonk | SpinWurkz email once there is an audience |

Each Tier B item: add a one-page footprint row here before install.

---

## Evidence / method

- Docker Hub `full_size` sampled 2026-09-06 for n8n, vaultwarden, docuseal, penpot frontend/backend, plane-backend, syncthing  
- Coolify disk guidance from Coolify docs (10 GB min free; 30 GB common install guidance; production growth higher)  
- Ollama binary ~4 GB + model sizes from Ollama docs / model library norms  
- Project mapping from My-Mind / Work-Mind overviews + product repos  

Sizes are **planning estimates**, not measured on Joe’s hardware. Re-measure with `docker system df` and `du -sh` after first install weekend.
