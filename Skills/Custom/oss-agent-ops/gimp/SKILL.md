---
name: gimp
description: >-
  Operate GIMP (open-source alternative to Photoshop) via CLI/API/SDK. Use for GIMP, Photoshop alternative, gimp batch, python-fu.
metadata:
  replaces: Photoshop
  source_post: https://x.com/ihteshamali/status/2096598697308205182
  version: "1.0"
---

# GIMP — agent ops

Open-source alternative to **Photoshop**. This skill enables an AI agent to install, authenticate, and operate GIMP through documented CLI/API/SDK surfaces — not UI click-paths.

## Links

| Resource | URL |
|----------|-----|
| Home | https://www.gimp.org/ |
| GitHub | https://gitlab.gnome.org/GNOME/gimp |
| Docs | https://docs.gimp.org/ |
| API / SDK | https://developer.gimp.org/ |

## Stack surface

- **SDK / CLI:** `gimp` / `gimp-3.0` CLI batch; Script-Fu; Python 3 libgimp GI
- **Auth:** Local desktop process (OS user)
- **MCP / automation:** No official MCP. Automate via CLI batch + Python/Script-Fu.

## Install (quickstart)

OS package/Flatpak from gimp.org/downloads; verify `gimp-3.0 --version`

Install into a **product / project repo** or local ops folder — never as binaries inside the Vault.

## Agent operations

- Headless batch: `gimp -i --batch-interpreter python-fu-eval -b '...' --quit`
- Open/convert/export via PDB
- Resize/crop/color-correct batches
- Register custom plug-in procedures
- Call GEGL ops from scripts
- Inspect PDB procedures for discovery

## Workflow

1. Confirm target instance (self-host URL or cloud) and that credentials exist in env vars — not chat.
2. Prefer official CLI/SDK/MCP over scraping undocumented endpoints.
3. Run a read-only probe first (version/health/list).
4. Mutating ops only after the probe succeeds; leave intentional residue (IDs, links, logs).
5. Stop when the requested outcome is evidenced or a hard stop triggers.

## Hard stops

- Requires local install (or Xvfb headless)
- Prefer `-i/--batch/--quit` — avoid interactive UI
- GIMP 3.x Python API ≠ 2.x

## Pairing

- Vault toolbox catalog: `Toolbox/Open-Source-Stack.md`
- Skill index: `Skills/Custom/oss-agent-ops/README.md`
- Prefer Harness · Loop · Graph: evidence over confidence; Writer ≠ Checker for destructive sends/deletes/deploys.
