# q4-27 production evidence

- Status: `published_complete`
- Original date: `2026-10-23`
- English: https://www.weglobalmarketing.com/blog/tiktok-shop-bfcm-better-price-rewards-margin-returns-fees
- Chinese: https://www.weglobalmarketing.com/blog/tiktok-shop-bfcm-better-price-rewards-margin-returns-fees?lang=zh
- Patch: `outputs/patches/2026-10-23-q4-27-better-price-rewards`
- Final patch fingerprint: `834263f43ffb927192f223cd5bf37ece016052ef21558579e987309b4f05713b`
- Build size: 1,542 English words; 1,980 Chinese characters; 15 files
- Repaired defect: the inherited language-switch script replaced the Chinese meta description with stale return-inspection copy. The builder and generated HTML now use the q4-27 Better Price Rewards description. The local index predicate was also corrected to validate exact JSON-style field keys and values.
- Local QA: `outputs/2026-10-23-q4-27-local-qa/report.json`, hashes/schema/render/index/discovery all true
- Immutable preview: `dpl_Emh2BBQJMPmD6nr84vvSFjEQpuTy`, exact 15/15 file and hash readback passed
- Production: `dpl_9osib8pP7B83pipTgfU1qtEXDVVG`, https://wem-website-1qej6xpej-wem1.vercel.app
- Production receipt: `succeeded / production_health_complete / exit 0`
- Production exact readback: `outputs/2026-10-23-q4-27-production-readback-final.json`, 15/15 passed
- Domain readback: both `www.weglobalmarketing.com` and `weglobalmarketing.com` resolve to `dpl_9osib8pP7B83pipTgfU1qtEXDVVG`
- Anonymous public QA: `outputs/2026-10-23-q4-27-public-qa/report.json`, hashes/schema/render/index/discovery all true
- Independent verifier: 5/5 passed at rank 1 with bilingual `datePublished` and sitemap `lastmod` equal to `2026-10-23`
- Visual acceptance: localized WEM-logo cover and 880 x 440 thumbnail use `v1`; English cover SHA-256 `6af37b0e5efe78cd3ee52a2f622b65fa0416eb901a5b41fe710b288d29708cf8`; Chinese cover SHA-256 `6f4f1972ac8c0c1359e81c0b37a83955e3dc4ce7350d81a528cce0b4aeb4bb78`
- Public EN/ZH desktop and 390 x 844 mobile each render two images, six FAQs, three related guides, source notes, language switch, CTA and footer without errors or overflow. Fresh and warm index checks show the q4-27 card at rank 1 with the original date.
