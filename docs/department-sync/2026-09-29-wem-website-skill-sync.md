# WEM Website department sync — 2026-09-29

- Repository: <https://github.com/weglobalmarketing3000-ops/WEM-WEBSITE>
- Base: `origin/main` at `ef35e252f38d71b92001ab94f887fea2f0039ae6`
- Review branch: `codex/wem-website-skills-sync-20260929`
- No website publication, production redeploy, merge, automation scheduling, or business message.

## Included

1. Existing repository-root `we-marketing-design` skill, installable under the same name in `~/.codex/skills` or `%USERPROFILE%\.codex\skills`.
2. Portable `wem-daily-geo-blog-publisher` at `skills/wem-daily-geo-blog-publisher`, with references, agent metadata, provenance, and verifier.
3. Cross-platform non-destructive installers and state-boundary documentation.
4. Current `origin/main` is documented through the July 17 `Update UGC Plus package pricing` commit; uncommitted local production output is not claimed as pushed.

## Excluded

Third-party SEO/GEO auditors, plugin caches, unrelated skills, credentials, tokens, `.env`, browser sessions, deployment secrets, automation schedules/memory/plans, raw intake, private chats, dirty primary-checkout changes, generated previews, screenshots/data, temporary files, and large local-only media.

## Checks

`git diff --check`; verifier syntax; privacy/secret/machine-path/size scan; disposable installer run and overwrite refusal; remote branch SHA verification.

Merge and production deployment are not performed. Claude review is requested through the pull request.
