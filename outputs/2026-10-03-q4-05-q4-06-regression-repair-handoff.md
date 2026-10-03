# q4-05/q4-06 regression repair handoff — 2026-10-03 PT

## Completed

- Restored q4-05 to the public bilingual BlogList at rank 3 with October 1 dates and localized 880px thumbnails.
- Restored both q4-05 sitemap entries and `llms.txt` entries.
- Repaired q4-06 topic metadata: meta description, EN/ZH ImageObject URL/caption, FAQPage content, Seller Terms citation, keywords, breadcrumb and CTA subtitle.
- Preserved q4-07/current production baseline and every original publication date; no duplicate article or new target was created.

## Deployment evidence

- Patch: `outputs/patches/2026-10-03-q4-05-q4-06-regression-repair`
- Fingerprint: `80f6c252e6355fe6764e46a507b5749b6beb304e4408846b9b5ce4af79670197`
- Preview: `dpl_CCos1Z1h6aCLyVGfcFhfJiHzHmYU` / https://wem-website-72dge6ctn-wem1.vercel.app
- Preview acceptance: all six scoped files matched by authenticated SHA-256 readback.
- Production: `dpl_BCTKpqHqvQRrpwfxuAebb5Pff9CK` / https://wem-website-9jbrxazdt-wem1.vercel.app
- Production acceptance: all six files matched; receipt `outputs/deployment-receipts/80f6c252e6355fe6764e-production.json` is `succeeded / production_health_complete / exit 0`; all 256 sitemap routes returned 200.

## Public acceptance

- q4-07 report: `outputs/2026-10-03-q4-07-public-qa/report.json` = `public_qa_complete`.
- q4-06 repair report: `outputs/2026-10-03-q4-06-regression-repair-public-qa/report.json` = `public_qa_complete`.
- q4-05 report: `outputs/2026-10-01-q4-05-public-qa/report.json` = `public_qa_complete`.
- q4-04 report: `outputs/2026-09-30-q4-04-public-qa/report.json` = `public_qa_complete`.
- Independent verifier passed all five checks for q4-07 rank 1 / October 3, q4-06 rank 2 / October 2, q4-05 rank 3 / October 1, and q4-04 rank 4 / September 30.
- q4-06 public HTML contains six relevant FAQ schema entries per language, localized creator-rights image captions, the current Seller Terms citation, and no stale Discount Architecture, Promotion Simulator or AI-image metadata.

## Queue

- q4-06 and q4-07 remain `published_complete`.
- Remaining queue remains 23 topics, q4-08 through q4-30. q4-08 was not advanced.
