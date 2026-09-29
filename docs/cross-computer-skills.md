# Cross-computer website skill installation

Before merge, clone the repository and check out `codex/wem-website-skills-sync-20260929`. After merge, use `main`. Configure GitHub access independently on each computer; never copy tokens, browser profiles, `.env`, or credential stores.

## macOS or Linux

```sh
git clone https://github.com/weglobalmarketing3000-ops/WEM-WEBSITE.git
cd "WE Marketing Design System"
git switch codex/wem-website-skills-sync-20260929
./scripts/install-wem-skills.sh
```

Pass `"$HOME/.agents/skills"` for an agent runtime.

## Windows PowerShell

```powershell
git clone https://github.com/weglobalmarketing3000-ops/WEM-WEBSITE.git
Set-Location "WEM-WEBSITE"
git switch codex/wem-website-skills-sync-20260929
.\scripts\install-wem-skills.ps1
```

Pass `-TargetRoot "$HOME\.agents\skills"` for an agent runtime.

Installers stop if a target exists. Downloaded source, installed link, runtime recognition, automation scheduling, and verified publication are separate stages. Plans, memory, credentials, and deployment access remain per-machine.
