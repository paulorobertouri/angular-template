$ErrorActionPreference = "Stop"

$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$ProjectRoot = Split-Path -Parent (Split-Path -Parent $ScriptDir)

Set-Location $ProjectRoot

if [ -z "$1" ]; then
echo "Usage: $0 NewProjectName"
exit 1
fi
find . -type f -exec sed -i "s/angular-template/$1/g" {} +
find . -type f -exec sed -i "s/Angular Template/$1/g" {} +
