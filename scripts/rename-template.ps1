# PowerShell script to rename the Angular template project
# Usage: ./rename-template.ps1 NewProjectName
param(
    [Parameter(Mandatory = $true)]
    [string]$NewName
)

# Replace all occurrences of 'angular-template' and 'Angular Template' in all files
Get-ChildItem -Path . -Recurse -File | ForEach-Object {
    (Get-Content $_.FullName) -replace 'angular-template', $NewName -replace 'Angular Template', $NewName | Set-Content $_.FullName
}

Write-Host "Renamed project to $NewName. Please update angular.json manually if needed."
