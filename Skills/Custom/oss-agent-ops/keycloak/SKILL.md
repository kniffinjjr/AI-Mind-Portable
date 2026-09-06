---
name: keycloak
description: >-
  Operate Keycloak (open-source alternative to Auth0) via CLI/API/SDK. Use for Keycloak, Auth0 alternative, OIDC IdP, keycloak admin api.
metadata:
  replaces: Auth0
  source_post: https://x.com/ihteshamali/status/2096598697308205182
  version: "1.0"
---

# Keycloak — agent ops

Open-source alternative to **Auth0**. This skill enables an AI agent to install, authenticate, and operate Keycloak through documented CLI/API/SDK surfaces — not UI click-paths.

## Links

| Resource | URL |
|----------|-----|
| Home | https://www.keycloak.org/ |
| GitHub | https://github.com/keycloak/keycloak |
| Docs | https://www.keycloak.org/documentation |
| API / SDK | https://www.keycloak.org/docs-api/latest/rest-api/ |

## Stack surface

- **SDK / CLI:** `@keycloak/keycloak-admin-client`; Java admin-client; `kc.sh`
- **Auth:** OAuth2/OIDC IdP; Admin API via password grant or client_credentials Bearer
- **MCP / automation:** No official MCP. Automate with Admin REST + admin-client SDKs.

## Install (quickstart)

`docker run -p 127.0.0.1:8080:8080 -e KC_BOOTSTRAP_ADMIN_USERNAME=admin -e KC_BOOTSTRAP_ADMIN_PASSWORD=admin quay.io/keycloak/keycloak:latest start-dev`

Install into a **product / project repo** or local ops folder — never as binaries inside the Vault.

## Agent operations

- Create realms, clients, roles, users via Admin REST
- Assign role mappings and required actions
- Manage identity providers and auth flows
- Export/import realm JSON
- Use Node admin-client `auth()` + `users.create()`
- Rotate client secrets and service-account roles

## Workflow

1. Confirm target instance (self-host URL or cloud) and that credentials exist in env vars — not chat.
2. Prefer official CLI/SDK/MCP over scraping undocumented endpoints.
3. Run a read-only probe first (version/health/list).
4. Mutating ops only after the probe succeeds; leave intentional residue (IDs, links, logs).
5. Stop when the requested outcome is evidenced or a hard stop triggers.

## Hard stops

- `start-dev` is not production
- Least privilege for realm-management roles
- Do not use master realm for application users

## Pairing

- Vault toolbox catalog: `Toolbox/Open-Source-Stack.md`
- Skill index: `Skills/Custom/oss-agent-ops/README.md`
- Prefer Harness · Loop · Graph: evidence over confidence; Writer ≠ Checker for destructive sends/deletes/deploys.
