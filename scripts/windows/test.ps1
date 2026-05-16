$ErrorActionPreference = "Stop"

$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$ProjectRoot = Split-Path -Parent (Split-Path -Parent $ScriptDir)

Set-Location $ProjectRoot

Write-Output "Running tests..."
if [[ -z "${CHROME_BIN:-}" ]]; then
Write-Output "Running tests..."
for bin in google-chrome chromium-browser chromium; do
Write-Output "Running tests..."
if command -v "$bin" &>/dev/null; then
Write-Output "Running tests..."
export CHROME_BIN="$(command -v "$bin")"
Write-Output "Running tests..."
break
Write-Output "Running tests..."
fi
Write-Output "Running tests..."
done
Write-Output "Running tests..."
fi
Write-Output "Running tests..."
pnpm test
