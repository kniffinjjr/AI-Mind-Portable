#!/usr/bin/env bash
# Tier A Mac installer — run on Joe's Mac (not in Cursor Cloud).
# Requires: Homebrew, Docker Desktop running, network.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")" && pwd)"
COMPOSE_DIR="$ROOT/compose"
DATA_ROOT="${OSS_STACK_DIR:-$HOME/oss-stack}"
LOG="$DATA_ROOT/install-$(date +%Y%m%d-%H%M%S).log"

mkdir -p "$DATA_ROOT"
exec > >(tee -a "$LOG") 2>&1

echo "=== OSS Tier A Mac install ==="
echo "data root: $DATA_ROOT"
echo "log: $LOG"
echo

need_cmd() {
  command -v "$1" >/dev/null 2>&1 || {
    echo "MISSING: $1"
    return 1
  }
}

echo "-- preflight --"
need_cmd brew
need_cmd docker
need_cmd npm
docker info >/dev/null
echo "Docker OK"
echo

echo "-- Ollama (expect already installed) --"
if command -v ollama >/dev/null 2>&1; then
  echo "ollama: $(command -v ollama)"
  ollama list || true
  du -sh "$HOME/.ollama" 2>/dev/null || true
else
  echo "WARN: ollama not on PATH. App may still be in /Applications/Ollama.app"
fi
echo

echo "-- Syncthing (Homebrew) --"
if brew list --cask syncthing >/dev/null 2>&1 || brew list syncthing >/dev/null 2>&1; then
  echo "Syncthing already installed"
else
  brew install --cask syncthing || brew install syncthing
fi
echo "Syncthing config (typical): ~/Library/Application Support/Syncthing/"
echo

echo "-- Bruno CLI --"
if command -v bru >/dev/null 2>&1; then
  echo "bru already on PATH: $(command -v bru)"
else
  npm install -g @usebruno/cli
fi
bru --version || true
echo

echo "-- Docker services (Mac Docker Desktop) --"
echo "Skipping Coolify on Mac laptop (server-oriented). Deploying compose stack instead."
mkdir -p \
  "$DATA_ROOT/n8n" \
  "$DATA_ROOT/vaultwarden" \
  "$DATA_ROOT/docuseal" \
  "$DATA_ROOT/umami/db"

export OSS_STACK_DIR="$DATA_ROOT"
cd "$COMPOSE_DIR"

# Generate secrets once
ENV_FILE="$COMPOSE_DIR/.env"
if [[ ! -f "$ENV_FILE" ]]; then
  VW_TOKEN="$(openssl rand -hex 24)"
  UMAMI_SECRET="$(openssl rand -hex 32)"
  POSTGRES_PASSWORD="$(openssl rand -hex 16)"
  cat >"$ENV_FILE" <<EOF
OSS_STACK_DIR=$DATA_ROOT
VAULTWARDEN_ADMIN_TOKEN=$VW_TOKEN
UMAMI_APP_SECRET=$UMAMI_SECRET
POSTGRES_PASSWORD=$POSTGRES_PASSWORD
N8N_HOST=localhost
N8N_PROTOCOL=http
N8N_PORT=5678
EOF
  echo "Wrote $ENV_FILE (keep private)"
else
  echo "Using existing $ENV_FILE"
fi

docker compose --env-file "$ENV_FILE" pull
docker compose --env-file "$ENV_FILE" up -d

echo
echo "-- status --"
docker compose --env-file "$ENV_FILE" ps
echo
echo "URLs (local):"
echo "  n8n:         http://localhost:5678"
echo "  Vaultwarden: http://localhost:8080"
echo "  DocuSeal:    http://localhost:3000"
echo "  Umami:       http://localhost:3001  (first login: admin / umami — change immediately)"
echo
echo "Next on Mac:"
echo "  1. Open Syncthing and pair folders (My-Mind / KiCad)."
echo "  2. Change Umami admin password."
echo "  3. Put Vaultwarden behind HTTPS before real secrets (Tailscale/Caddy)."
echo "  4. Plane + Penpot: heavier stacks — run Scripts/oss-tier-a-mac/bin/install-heavy.sh when ready."
echo
echo "DONE. Log: $LOG"
