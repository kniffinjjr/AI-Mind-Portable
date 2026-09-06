---
title: Toolbox — Open Source Stack (SaaS replacements)
type: toolbox
status: live
created: 2026-09-06
updated: 2026-09-06
category: harness
stack: [docker, rest, mcp, cli]
related:
  - "[[Skills/Custom/oss-agent-ops/README]]"
  - "[[Toolbox/_index]]"
  - "[[Sources/Ihtesham-OSS-Stack-Post-2026-09-06]]"
tags: [toolbox, oss, self-host, agent-ops]
---

# Open Source Stack — SaaS replacements

**One-liner:** Catalog of 35 free/open-source apps that replace common paid SaaS products, paired with agent-operable skills (docs + API/SDK/CLI/MCP).

**Source post:** [ihteshamali — 2026-09-06](https://x.com/ihteshamali/status/2096598697308205182)

**Links:**
- Skills pack: [[Skills/Custom/oss-agent-ops/README]]
- Cursor plugin: `~/.cursor/plugins/local/oss-agent-ops/`
- **Install footprint (Tier A for current projects):** [[Toolbox/OSS-Install-Footprint-Tier-A]]

## When to use

- User wants a self-hosted / OSS alternative to a named paid product.
- Agent must operate that app via API/CLI/MCP (not guess UI clicks).
- Evaluating stack choices before recommending paid SaaS.

## When not to use

- Compliance / enterprise support requires a vendor SLA the OSS project does not provide.
- Team already standardized on a paid tool with working integrations.
- Pure design inspiration (use Design-Reference-Galleries / Refero instead).

## Catalog (paid → OSS → skill)

| Paid | OSS | Skill |
|------|-----|-------|
| Canva | Penpot | `penpot` |
| Klaviyo | Listmonk | `listmonk` |
| Semrush | OpenSEO | `open-seo` |
| ChatGPT Pro | Ollama | `ollama` |
| Notion | AppFlowy | `appflowy` |
| Zapier | n8n | `n8n` |
| Loom | Cap | `cap` |
| Zoom | Jitsi | `jitsi` |
| Slack | Mattermost | `mattermost` |
| 1Password | Vaultwarden | `vaultwarden` |
| Dropbox | Syncthing | `syncthing` |
| Google Photos | Immich | `immich` |
| Calendly | Cal.com | `cal-com` |
| Airtable | NocoDB | `nocodb` |
| Typeform | Formbricks | `formbricks` |
| Google Analytics | Umami | `umami` |
| Grammarly | LanguageTool | `languagetool` |
| Postman | Bruno | `bruno` |
| Jira | Plane | `plane` |
| Trello | Planka | `planka` |
| Intercom | Chatwoot | `chatwoot` |
| DocuSign | DocuSeal | `docuseal` |
| Heroku | Coolify | `coolify` |
| Firebase | Supabase | `supabase` |
| Photoshop | GIMP | `gimp` |
| Premiere Pro | Kdenlive | `kdenlive` |
| Shopify | Medusa | `medusa` |
| Webflow | Webstudio | `webstudio` |
| Salesforce | Twenty | `twenty` |
| Retool | Appsmith | `appsmith` |
| Tableau | Metabase | `metabase` |
| Datadog | SigNoz | `signoz` |
| Auth0 | Keycloak | `keycloak` |
| Evernote | Joplin | `joplin` |
| Bitly | Shlink | `shlink` |

## Agent pairing

| Task | Skills |
|------|--------|
| Operate a listed app | matching `Skills/Custom/oss-agent-ops/<slug>/SKILL.md` |
| Choose stack | this note + [[Toolbox/_index]] |
| Deploy/host | `docker` + app skill |
| UI polish after shipping | `pixelslop`, `better-interface` |

## Notes / IP

- Work vs personal: installs and secrets live under Work-Mind / My-Mind / product repos — not Vault.
- License: each upstream project has its own license; verify before commercial redistribution.
- Secrets: API keys, admin tokens, and master passwords stay in env / secret stores — never in skill files.
