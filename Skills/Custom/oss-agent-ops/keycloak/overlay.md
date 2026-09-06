---
name: keycloak
type: skill
status: active
created: 2026-09-06
updated: 2026-09-06
triggers: ["Keycloak", "Auth0 alternative", "OIDC IdP", "keycloak admin api"]
related:
  - "[[Skills/Custom/oss-agent-ops/README]]"
  - "[[Toolbox/Open-Source-Stack]]"
replaces: Auth0
source_skill_path: ~/.cursor/plugins/local/oss-agent-ops/skills/keycloak/SKILL.md
tags: [skill, oss, agent-ops, keycloak]
---

# Keycloak — Vault overlay

Open-source alternative to **Auth0**.

Runtime body: `~/.cursor/plugins/local/oss-agent-ops/skills/keycloak/SKILL.md` (also mirrored under this folder as `SKILL.md` for portable agents).

| Resource | URL |
|----------|-----|
| Home | https://www.keycloak.org/ |
| Docs | https://www.keycloak.org/documentation |
| API | https://www.keycloak.org/docs-api/latest/rest-api/ |

**Auth:** OAuth2/OIDC IdP; Admin API via password grant or client_credentials Bearer

**Install:** `docker run -p 127.0.0.1:8080:8080 -e KC_BOOTSTRAP_ADMIN_USERNAME=admin -e KC_BOOTSTRAP_ADMIN_PASSWORD=admin quay.io/keycloak/keycloak:latest start-dev`
