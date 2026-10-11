# q4-14 Production Recovery Evidence

- Recovered article: `tiktok-shop-bfcm-price-claim-audit`
- Required publication date preserved: `2026-10-10`
- Public EN: `https://www.weglobalmarketing.com/blog/tiktok-shop-bfcm-price-claim-audit`
- Public ZH: `https://www.weglobalmarketing.com/blog/tiktok-shop-bfcm-price-claim-audit?lang=zh`
- Accepted deployment ID: `dpl_AEhTHx2EBf8BTafZGyTTPy889uYa`
- Accepted deployment URL: `https://wem-website-prgkkbin8-wem1.vercel.app`
- Patch fingerprint: `4f918757e340d29e44fa3ac9ad1e0d6334753544041197b99f7c42a12399e321`
- Exact deployment readback: 17 of 17 patch files matched.
- Public QA report: `outputs/2026-10-10-q4-14-recovery-public-qa/report.json`
- Public QA result: hashes, schema, EN/ZH desktop/mobile rendering, blog index, sitemap and `llms.txt` all passed.
- Independent verifier: passed 5 of 5 checks; Oct 10 card was rank 1 when recovered.

## Regression cause

The custom domains had been reassigned to a newer CLI production deployment, `dpl_4Ns6mktkckQsYo4vc9rLEUxRWzE1`, whose static baseline did not contain q4-14. Vercel reported both the accepted q4-14 deployment and the competing deployment as CLI-sourced. The failure was deployment alias ownership, not article generation and not a Git auto-deploy.

## Prevention applied

1. The Vercel project now has automatic custom-domain assignment disabled.
2. Production builds deploy with `--skip-domain`.
3. The deployment helper reconstructs from the deployment currently verified behind `www.weglobalmarketing.com`, not simply the newest production build.
4. Only after the accepted deployment is READY does the helper assign both `www.weglobalmarketing.com` and `weglobalmarketing.com`.
5. A completed production receipt is revalidated and re-promoted rather than trusted without terminal readback.
6. The helper performs public alias health checks and verifies every sitemap route.

