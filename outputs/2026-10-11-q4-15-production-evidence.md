# q4-15 Production Evidence

Date: 2026-10-11 PT  
Status: `published_complete`

## Public routes

- English: https://www.weglobalmarketing.com/blog/tiktok-shop-peak-season-shipping-margin
- Chinese: https://www.weglobalmarketing.com/blog/tiktok-shop-peak-season-shipping-margin?lang=zh
- Apex redirect route: https://weglobalmarketing.com/blog/tiktok-shop-peak-season-shipping-margin
- Publication date: `2026-10-11`

## Deployment identity

- Deployment ID: `dpl_4ut1zMRsC7kufkGMcuCxnGfRZSc3`
- Deployment URL: `https://wem-website-resnav3bo-wem1.vercel.app`
- State: `READY`
- Patch fingerprint: `ee8e06d1b729784c02f49874a0688ea86b4fb3d2228b257db4d19130ca2c29e0`
- Production receipt: `outputs/deployment-receipts/ee8e06d1b729784c02f4-production.json`
- Exact production readback: `outputs/2026-10-11-q4-15-production-readback.json`; 17 of 17 files matched local SHA-256.
- Pre-deploy sitemap coverage: 272 routes.
- Post-alias sitemap health: 272 URLs returned HTTP 200.

## Public QA

- q4-15 report: `outputs/2026-10-11-q4-15-public-qa/report.json`
- Result: hashes, schema, EN/ZH desktop/mobile render, language switch, localized images, six FAQs per language, Source notes, CTA/footer, blog index, sitemap and `llms.txt` all passed.
- Independent verifier: `outputs/2026-10-11-q4-15-verifier.json`; passed 7 of 7 checks.
- Public card order: q4-15 rank 1, q4-14 rank 2.
- WWW EN, WWW ZH and apex-followed EN returned HTTP 200.

## q4-14 regression protection

- q4-14 EN and ZH remained HTTP 200 after q4-15 publication.
- Regression report: `outputs/2026-10-10-q4-14-post-q4-15-regression-qa/report.json`
- Result: unchanged article/image hashes plus schema, EN/ZH render, rank-2 index presence and discovery all passed.
- Vercel project `autoAssignCustomDomains` is `false`.
- The production helper uses the deployment currently serving the verified custom domain as its merge baseline, deploys with `--skip-domain`, and assigns both custom domains only after the accepted build is READY.

## Publication boundary

- q4-15 is `published_complete`.
- q4-16 was not drafted, built, deployed or otherwise advanced.
- Primary publisher remains PAUSED.
- Existing recovery monitor remains ACTIVE.

