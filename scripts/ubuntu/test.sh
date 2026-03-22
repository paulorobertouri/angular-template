#!/bin/bash

set -euo pipefail

# Normalize to POSIX path
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_ROOT="$(dirname "$(dirname "$SCRIPT_DIR")")"

cd "$PROJECT_ROOT"

# Detect available Chrome/Chromium binary if CHROME_BIN is not already set
if [[ -z "${CHROME_BIN:-}" ]]; then
  for bin in google-chrome chromium-browser chromium; do
    if command -v "$bin" &>/dev/null; then
      export CHROME_BIN="$(command -v "$bin")"
      break
    fi
  done
fi

echo "Running tests..."
npm run test -- --karma-config karma.ci.conf.cjs
