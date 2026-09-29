---
name: wem-daily-geo-blog-publisher
description: Publish and verify one pre-approved bilingual WEM GEO blog topic per PT day from Daniel's weekly publication plan. Use for the WEM Daily GEO Blog Series, weekly-plan reconciliation, WEM-series cover creation, bilingual deployment, production QA, and the verified links required before the 牛牛 evening review.
---

# WEM Daily GEO Blog Publisher

## Separate weekly planning from daily publication

Topic discovery belongs in a Wendy planning session, not in the daily publisher.

1. During a weekly planning session with Wendy, scan [references/source-registry.md](references/source-registry.md) plus any Wendy-supplied sources.
2. Agree on the next publication sequence and record each approved topic, source direction or exact primary sources, WEM angle, and order in the automation's `weekly-plan.md`.
3. The daily publisher reads only approved entries from `weekly-plan.md`. It does not search for, select, insert, reorder, or substitute topics.
4. The daily publisher may locate and read complete official material for the approved topic. This is source research for an approved target, not permission to select another topic.
5. If today's next approved entry is absent or complete primary material cannot be found after a bounded official-source search, report `blocked_no_approved_topic` or `blocked_incomplete_primary_source`. Do not publish filler or improvise a replacement.

## Enforce one daily target

Treat the business outcome as at most one newly advanced topic per America/Los_Angeles calendar day, not one successful automation invocation.

1. At the beginning of the daily run, reconcile `weekly-plan.md` and durable memory, then persist one `daily_target: YYYY-MM-DD <approved-plan-id>` before drafting or repairing anything.
2. The target must be the earliest unfinished approved plan entry. Never choose another topic.
3. Repair a previously published article when needed, but never count that repair as today's new article. Continue to the locked target in the same run.
4. Persist `target_stage` after source validation, draft completion, visual acceptance, build, deployment, public QA, and Pen handoff. If the process resumes after interruption, continue the same target from the earliest incomplete stage.
5. Continue through research, writing, visuals, implementation, deployment, and public QA. Do not stop after a draft, generated image, commit, deployment attempt, checkpoint, or repair.
6. Complete the daily target before 17:30 PT so the 18:00 牛牛 review can verify and include both links.
7. Count the topic only after the English and Chinese production routes and required assets pass public readback.
8. Same-day publication has an additional date-parity gate: the newest public Blog index card must be the target URL and visibly show the current America/Los_Angeles calendar date. Its visible date, both `BlogPosting.datePublished` values, and the sitemap `lastmod` must all match the persisted `daily_target` date. A successful deployment, a 200 route, or a repair of yesterday's target is not a current-day publication.
9. If a locked target from an earlier date is recovered today, report it as `recovered_previous_day_target`, preserve its original publication date, then lock and complete today's earliest eligible unfinished target separately. Do not use the success sentence for the current date until the date-parity gate passes.

If an external outage, missing primary source, or production-access failure makes the deadline impossible, record the exact blocker and evidence immediately. Do not disguise it as completion.

## Build the article

- Read the complete current primary source. Do not rely on a title, teaser, search snippet, or memory of platform rules.
- Write a practical WEM operator article with a direct answer, definitions, trade-offs, decision criteria, operating sequence, smallest useful next action, source notes, internal links, and at least five useful FAQs per language.
- Target at least 1,300 English words and 1,800 Chinese characters.
- Localize the Chinese article naturally for Chinese brands entering the U.S. market.
- Use verified WEM cases only. Label hypothetical material as an operational example.
- Avoid em dashes, unsupported current-platform claims, and generic agency promotion.

## Pass the first-cover gate

Read [references/visual-standard.md](references/visual-standard.md) completely before creating the cover or body visuals.

- Start from the established Articles 1–3 series composition and production assets. Do not invent a new cover system.
- Keep the cover editorial and cohesive: text hierarchy on the left, one soft-3D operating scene on the right, official WEM logo, warm white/lavender field, and blue-purple accents.
- Put workflows, comparisons, and multi-step diagrams in body visuals, not on the cover.
- Reject the cover before deployment if it resembles an infographic, splits into multiple stages/panels, omits or recreates the logo, changes the series palette, crowds the title, or loses legibility at blog-card size.
- Generate versioned optimized and thumbnail assets so a corrected image cannot be masked by stale cache.
- Visually compare the *final composited* cover and its actual thumbnail side by side with the three approved covers. Passing file generation is not visual acceptance.
- Never present an uncomposited scene (for example, an image-generation output before headline and official-logo treatment) as a delivery preview. Label it `raw scene — not for review`, keep it out of the handoff, and do not use it as visual evidence.
- Before `visual_accepted`, retain three explicit checks: final full-size cover has the approved headline and official logo; the generated thumbnail retains legible headline and logo; the public blog-card screenshot loads that same versioned asset. A final website image does not cure a failed preview or thumbnail check.

## Deploy and verify

Preserve unrelated dirty-worktree changes and use a scoped deployment path.

Verify all of the following after production deployment:

- English and Chinese routes return HTTP 200 with substantive initial HTML.
- Desktop English, desktop Chinese, and 390 × 844 mobile render without broken images, overflow, or browser errors.
- Correct cover and localized body visuals are visibly loaded.
- Canonical, `en-US`, `zh-CN`, `x-default`, `BlogPosting`, `FAQPage`, sitemap, and `llms.txt` are correct.
- Blog index card, thumbnail, social/schema image, and every article image return the expected content.
- The production asset hash or another deterministic readback proves the approved cover, not an earlier version, is live.
- Save a screenshot or equivalent rendered evidence of the first Blog index card with its visible date. The acceptance record must name that date alongside the route and deployment ID.
- From the website repository root, run `node skills/wem-daily-geo-blog-publisher/scripts/verify-publication.mjs --date YYYY-MM-DD --slug target-slug` after deployment. It must pass before recording `public_qa_complete`; it checks first-card order/date, both page schema dates, and sitemap `lastmod` independently of the deployment status.
- Keep a separate `visual_preview_accepted` record. Do not collapse raw-scene generation, final cover composition, thumbnail inspection, and public-card inspection into one generic `visual_accepted` claim.

Write the exact English and Chinese URLs, topic number, deployment evidence, QA result, and remaining count to durable memory and the scoped Pen handoff.

## Recover without changing editorial scope

- The scheduled publisher runs once at 03:00 PT.
- If an interrupted task is resumed, reuse the same daily target and stage checkpoints.
- If a previous article needs repair, repair it first and then continue today's target.
- Never advance two new queue topics on the same PT date.
- Never search for or select a substitute topic during recovery.
