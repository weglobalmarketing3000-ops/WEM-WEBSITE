# Website Skills

This repository contains two WE Marketing-owned skills.

| Skill | Repository source | Default Codex install path |
|---|---|---|
| WE Marketing design system | repository root (`SKILL.md`) | `~/.codex/skills/we-marketing-design` |
| WEM daily GEO blog publisher | `skills/wem-daily-geo-blog-publisher` | `~/.codex/skills/wem-daily-geo-blog-publisher` |

Use `scripts/install-wem-skills.sh` on macOS/Linux or `scripts/install-wem-skills.ps1` on Windows. Both stop if a target exists.

The locally installed `geo-content-optimizer`, `technical-seo-checker`, and `content-quality-auditor` identify Aaron He Zhu as author, use Apache-2.0, and depend on files outside their directories. They are intentionally not vendored. Install from <https://github.com/aaron-he-zhu/aaron-marketing-skills>.

Plugin caches, unrelated skills, credentials, automation memory/plans, raw intake, screenshots, and local production state are excluded.
