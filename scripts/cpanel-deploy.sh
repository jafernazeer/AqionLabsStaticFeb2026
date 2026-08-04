#!/usr/bin/env bash
set -euo pipefail

APP_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
if [ -n "${CPANEL_DEPLOY_PATH:-}" ]; then
  DEPLOY_PATH="$CPANEL_DEPLOY_PATH"
elif [ -n "${DEPLOYPATH:-}" ]; then
  DEPLOY_PATH="$DEPLOYPATH"
elif [[ "$APP_ROOT" == */public_html/* ]]; then
  DEPLOY_PATH="$(dirname "$APP_ROOT")"
else
  DEPLOY_PATH="$HOME/public_html"
fi
DEPLOY_PATH="${DEPLOY_PATH%/}"

cd "$APP_ROOT"

if [ -s "$HOME/.nvm/nvm.sh" ]; then
  # shellcheck disable=SC1090
  . "$HOME/.nvm/nvm.sh"
  nvm use 20 >/dev/null 2>&1 || nvm use 18 >/dev/null 2>&1 || true
fi

if ! command -v npm >/dev/null 2>&1; then
  echo "npm is required on the cPanel host to build this site." >&2
  exit 1
fi

if [ -f package-lock.json ]; then
  npm ci
else
  npm install
fi

npm run build

mkdir -p "$DEPLOY_PATH"

if command -v rsync >/dev/null 2>&1; then
  rsync -a dist/ "$DEPLOY_PATH"/
else
  cp -a dist/. "$DEPLOY_PATH"/
fi

echo "Deployed AqionLabs website to $DEPLOY_PATH"
