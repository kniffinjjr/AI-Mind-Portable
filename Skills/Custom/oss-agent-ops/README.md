---
title: OSS Agent Ops — skill pack
type: catalog
status: live
created: 2026-09-06
updated: 2026-09-06
source: https://x.com/ihteshamali/status/2096598697308205182
related:
  - "[[Toolbox/Open-Source-Stack]]"
  - "[[Skills/Agent-Skill-Map]]"
  - "[[AGENTS.md]]"
tags: [skills, oss, agent-ops, toolbox]
---

# OSS Agent Ops

Skill pack for **35** open-source apps that replace paid SaaS tools. Each skill documents help docs, API/SDK surfaces, install, agent operations, and hard stops.

**Source post:** [ihteshamali — OSS replacements](https://x.com/ihteshamali/status/2096598697308205182)

**Cursor plugin:** `~/.cursor/plugins/local/oss-agent-ops/`

## Catalog

| Skill | App | Replaces | Docs | API |
|-------|-----|----------|------|-----|
| `penpot` | Penpot | Canva | [docs](https://help.penpot.app/) | [api](https://help.penpot.app/technical-guide/developer/http-api/) |
| `listmonk` | Listmonk | Klaviyo | [docs](https://listmonk.app/docs/) | [api](https://listmonk.app/docs/apis/apis/) |
| `open-seo` | OpenSEO | Semrush | [docs](https://openseo.so/docs) | [api](https://openseo.so/docs (MCP + Agent Skills; no separate public product REST)) |
| `ollama` | Ollama | ChatGPT Pro | [docs](https://docs.ollama.com/) | [api](https://docs.ollama.com/api/introduction) |
| `appflowy` | AppFlowy | Notion | [docs](https://docs.appflowy.io/) | [api](https://github.com/AppFlowy-IO/documentations/tree/main/documentation/appflowy-cloud/openapi) |
| `n8n` | n8n | Zapier | [docs](https://docs.n8n.io/) | [api](https://docs.n8n.io/api/) |
| `cap` | Cap | Loom | [docs](https://cap.so/docs) | [api](https://cap.so/docs/api/rest-api) |
| `jitsi` | Jitsi Meet | Zoom | [docs](https://jitsi.github.io/handbook/) | [api](https://jitsi.github.io/handbook/docs/dev-guide/dev-guide-iframe/) |
| `mattermost` | Mattermost | Slack | [docs](https://docs.mattermost.com/) | [api](https://api.mattermost.com/) |
| `vaultwarden` | Vaultwarden | 1Password | [docs](https://github.com/dani-garcia/vaultwarden/wiki) | [api](Bitwarden client-compatible API; automate via Bitwarden CLI `bw` + `bw serve` (Public Bitwarden org API NOT supported)) |
| `syncthing` | Syncthing | Dropbox | [docs](https://docs.syncthing.net/) | [api](https://docs.syncthing.net/dev/rest.html) |
| `immich` | Immich | Google Photos | [docs](https://docs.immich.app/) | [api](https://api.immich.app/) |
| `cal-com` | Cal.com | Calendly | [docs](https://cal.com/docs) | [api](https://cal.com/docs/api-reference/v2/introduction) |
| `nocodb` | NocoDB | Airtable | [docs](https://nocodb.com/docs) | [api](https://nocodb.com/docs/apis-and-mcp) |
| `formbricks` | Formbricks | Typeform | [docs](https://formbricks.com/docs) | [api](https://formbricks.com/docs/api-reference/rest-api) |
| `umami` | Umami | Google Analytics | [docs](https://docs.umami.is) | [api](https://docs.umami.is/docs/api) |
| `languagetool` | LanguageTool | Grammarly | [docs](https://dev.languagetool.org) | [api](https://languagetool.org/http-api/) |
| `bruno` | Bruno | Postman | [docs](https://docs.usebruno.com) | [api](https://docs.usebruno.com/bru-cli/overview) |
| `plane` | Plane | Jira | [docs](https://docs.plane.so) | [api](https://developers.plane.so/api-reference/introduction) |
| `planka` | Planka | Trello | [docs](https://docs.planka.cloud) | [api](https://plankanban.github.io/planka/swagger-ui/) |
| `chatwoot` | Chatwoot | Intercom | [docs](https://www.chatwoot.com/docs) | [api](https://developers.chatwoot.com/api-reference/introduction) |
| `docuseal` | DocuSeal | DocuSign | [docs](https://www.docuseal.com/docs) | [api](https://www.docuseal.com/docs/api) |
| `coolify` | Coolify | Heroku | [docs](https://coolify.io/docs) | [api](https://coolify.io/docs/api-reference/authorization) |
| `supabase` | Supabase | Firebase | [docs](https://supabase.com/docs) | [api](https://supabase.com/docs/reference) |
| `gimp` | GIMP | Photoshop | [docs](https://docs.gimp.org/) | [api](https://developer.gimp.org/) |
| `kdenlive` | Kdenlive | Premiere Pro | [docs](https://docs.kdenlive.org/) | [api](https://www.mltframework.org/docs/) |
| `medusa` | Medusa | Shopify | [docs](https://docs.medusajs.com/) | [api](https://docs.medusajs.com/api/admin) |
| `webstudio` | Webstudio | Webflow | [docs](https://docs.webstudio.is/) | [api](https://docs.webstudio.is/university/cli) |
| `twenty` | Twenty CRM | Salesforce | [docs](https://docs.twenty.com/) | [api](https://docs.twenty.com/developers/extend/api) |
| `appsmith` | Appsmith | Retool | [docs](https://docs.appsmith.com/) | [api](Internal `/api/v1/*`; instance ops via `appsmithctl`) |
| `metabase` | Metabase | Tableau | [docs](https://www.metabase.com/docs/latest/) | [api](https://www.metabase.com/docs/latest/api) |
| `signoz` | SigNoz | Datadog | [docs](https://signoz.io/docs/) | [api](https://signoz.io/docs/metrics-management/query-range-api/) |
| `keycloak` | Keycloak | Auth0 | [docs](https://www.keycloak.org/documentation) | [api](https://www.keycloak.org/docs-api/latest/rest-api/) |
| `joplin` | Joplin | Evernote | [docs](https://joplinapp.org/help/) | [api](https://joplinapp.org/help/api/references/rest_api/) |
| `shlink` | Shlink | Bitly | [docs](https://shlink.io/documentation/) | [api](https://shlink.io/documentation/api-docs/) |

## Usage

1. Activate the skill matching the product the user wants operated.
2. Read that skill's Links + Hard stops before mutating anything.
3. Prefer CLI/API/MCP evidence; leave residue (IDs, URLs, logs).

## Maintenance

New OSS alternatives → add `skills/<slug>/SKILL.md` in the plugin and mirror here; update [[Toolbox/Open-Source-Stack]] and [[Skills/Agent-Skill-Map]].
