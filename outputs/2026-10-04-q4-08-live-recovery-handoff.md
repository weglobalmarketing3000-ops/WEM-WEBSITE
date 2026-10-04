# q4-08 live recovery and acceptance

Date: 2026-10-04 PT
Target: `q4-08`
Status: `published_complete`

## Public routes

- English: https://www.weglobalmarketing.com/blog/tiktok-shop-agency-app-offboarding-data-access
- Chinese: https://www.weglobalmarketing.com/blog/tiktok-shop-agency-app-offboarding-data-access?lang=zh
- Approved/publication date: 2026-10-04

## Deployment evidence

- Preview: `dpl_6joxvjz9rDsXojH3oRyRy9Wcao2g` / `https://wem-website-hc7cmw5nv-wem1.vercel.app`, READY, created 03:10 PT.
- Production: `dpl_C9KjZKgtmX58SnE2md7wqWxH1UYS` / `https://wem-website-cuvwtjjgj-wem1.vercel.app`, READY, created 03:17 PT.
- The local primary-publisher receipt is absent. No receipt or source task was invented and no duplicate deployment was run.
- Exact 16-file production readback: `outputs/patches/2026-10-04-q4-08-live-recovered`.
- Readback fingerprint: `f338bab2de4647e9c7410dc2d4f3bd9eb7cb2ccf84f17e1bb173d6dc3a15e9cc`.

## Public QA

- Report: `outputs/2026-10-04-q4-08-public-qa/report.json`.
- Result: `public_qa_complete`; hashes, schema, render, index and discovery are all true.
- Verified EN/ZH desktop and 390x844 mobile, actual language switching, three localized article images, six FAQs per language, three related guides, compact Source notes, Ready-to-talk CTA, booking/footer, no overflow or browser errors.
- Verified canonical, `en-US`, `zh-CN`, `x-default`, two BlogPosting nodes, two FAQPage nodes, sitemap and `llms.txt`.
- Fresh and warm index checks show q4-08 at rank 1 with the October 4 date and 880px localized thumbnail.
- Independent verifier passed all five rank/date/schema/sitemap checks.
- All 258 sitemap routes returned HTTP 200.

## Visual evidence

- Final EN/ZH covers and thumbnails load publicly and match exact Vercel deployment bytes.
- Visual inspection passed the approved WEM series grammar: warm-white/lavender field, blue category pill, high-contrast left headline, restrained blue-purple scene, official WEM logo, legible thumbnail crop, August 1-aligned typography/colors/spacing.
- Cover SHA-256 EN/ZH: `084da891e64876c57c58467443776725a124827a6a688522e04a7381d6101320` / `2390f39f81d4077ec60743250796c2895275ad6e5327c63325a4b80998e3771f`.
- Thumbnail SHA-256 EN/ZH: `29704b02d68f2782bbd70eda55b0bd0362e53fb2c72076c329a11b2a20a581d5` / `128cee53ab4744f01e61d19d25deeeab84e759c08889f9660050d417fc199d65`.

## Automation reconciliation

- Wendy intentionally directed on October 3: keep successful scheduled tasks, turn off unsuccessful tasks, and fix intermittent tasks.
- The resulting audit classified the original WEM publisher as 0/7 original-run success and the catch-up monitor as 7/7 successful recovery. It paused `tiktok-shop-academy-daily-blog-publisher-2` and retained `daniel-blog-catch-up-monitor` ACTIVE once daily.
- No separate active local replacement publisher exists. The exact process that made the 03:10/03:17 Vercel deployments is not evidenced by a local task, Git commit or receipt; Vercel shows only the existing team account.
- Keep the primary publisher PAUSED. The recovery monitor and existing Daniel owner task are the evidenced continuation path.

## Queue

- q4-08 is `published_complete`.
- Remaining approved queue: 22 topics, `q4-09` through `q4-30`.
- q4-09 is due 2026-10-05 PT. Do not advance it early, create a second publisher or increase monitoring frequency.
