#!/usr/bin/env bash
set -euo pipefail

APP_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PACKAGE_PATH="${1:-$APP_ROOT/aqionlabs-ai-cpanel-upload.zip}"

cd "$APP_ROOT"

if ! command -v npm >/dev/null 2>&1; then
  echo "npm is required to build the cPanel upload package." >&2
  exit 1
fi

if ! command -v zip >/dev/null 2>&1; then
  echo "zip is required to create the cPanel upload package." >&2
  exit 1
fi

if [ -f package-lock.json ]; then
  npm ci
else
  npm install
fi

npm run build

rm -f "$PACKAGE_PATH"
(cd dist && zip -qr "$PACKAGE_PATH" .)

echo "Created cPanel upload package at $PACKAGE_PATH"
