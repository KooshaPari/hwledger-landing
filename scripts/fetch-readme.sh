#!/usr/bin/env bash
# Refresh the committed GitHub README snapshot used as a build-time fallback.
set -euo pipefail

REPO="KooshaPari/hwLedger"
DATA_DIR="$(cd "$(dirname "$0")/.." && pwd)/src/data"
AUTH=()

[[ -n "${GITHUB_TOKEN:-}" ]] && AUTH=(-H "Authorization: Bearer ${GITHUB_TOKEN}")

curl -fsSL "${AUTH[@]}" \
  -H "User-Agent: hwledger-landing-snapshot" \
  -H "Accept: application/vnd.github.html+json" \
  "https://api.github.com/repos/${REPO}/readme" \
  -o "${DATA_DIR}/readme.html"

echo "[fetch-readme] refreshed ${DATA_DIR}/readme.html"
