param([string]$TargetRoot = "$HOME\.codex\skills")
$ErrorActionPreference = "Stop"
$RepoRoot = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
function Install-SkillJunction {
  param([string]$SourcePath, [string]$TargetPath)
  if (Test-Path -LiteralPath $TargetPath) { throw "Refusing to overwrite existing target: $TargetPath" }
  New-Item -ItemType Directory -Path (Split-Path -Parent $TargetPath) -Force | Out-Null
  New-Item -ItemType Junction -Path $TargetPath -Target $SourcePath | Out-Null
  Write-Host "Installed: $TargetPath -> $SourcePath"
}
Install-SkillJunction -SourcePath $RepoRoot -TargetPath (Join-Path $TargetRoot "we-marketing-design")
Install-SkillJunction -SourcePath (Join-Path $RepoRoot "skills\wem-daily-geo-blog-publisher") -TargetPath (Join-Path $TargetRoot "wem-daily-geo-blog-publisher")
Write-Host "Automation scheduling remains a separate per-machine step."
