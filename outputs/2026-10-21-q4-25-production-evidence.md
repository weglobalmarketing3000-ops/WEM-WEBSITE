# q4-25 production evidence

- Daily target: `2026-10-21 q4-25`
- English: https://www.weglobalmarketing.com/blog/tiktok-shop-order-to-appeal-evidence-ledger
- Chinese: https://www.weglobalmarketing.com/blog/tiktok-shop-order-to-appeal-evidence-ledger?lang=zh
- Source revalidation: `outputs/2026-10-21-q4-25-source/report.json` plus six saved official-source HTML readbacks
- Local QA: `outputs/2026-10-21-q4-25-local-qa/report.json` — complete
- Protected preview: `dpl_14M2HTfKtzhUhqHhLj62Ym1rtAGF`
- Preview exact-file readback: `outputs/2026-10-21-q4-25-preview-readback.json` — 17/17 SHA-256 matches
- Production deployment: `dpl_87qqfbwQzrn2LN8dcF1WWXwKknNu`
- Production URL: `https://wem-website-bhepqo9dw-wem1.vercel.app`
- Patch fingerprint: `f414f5e5b02ec2cc996e78e79f4a766f7adddb6668195f58827c7555ec0d4bb2`
- Public QA: `outputs/2026-10-21-q4-25-public-qa/report.json` — all checks true
- Independent verifier: `outputs/2026-10-21-q4-25-verifier.json` — passed
- Final order: q4-25 rank 1, q4-24 rank 2, q4-23 rank 3, q4-22 rank 4, q4-21 rank 5, q4-20 rank 6
- Current-image regression: 84 current article image requests returned HTTP 200
- q4-24 continuity: `/blog/tiktok-shop-return-inspection-six-photo-evidence` returns permanent 308 to `/blog/tiktok-shop-return-inspection-photo-evidence`; `?lang=zh` is preserved
- q4-20 continuity: singular legacy URL returns permanent 308 to current plural URL; `?lang=zh` is preserved
- Both `www.weglobalmarketing.com` and `weglobalmarketing.com` were bound to the accepted production deployment and verified
- Queue boundary: q4-26 was not advanced; primary publisher remains PAUSED; recovery monitor remains ACTIVE; no Lark/email send

Editorial acceptance: English body 1,376 words; Chinese body 3,014 non-whitespace characters; each language has three rendered images, six FAQs, three related guides, source notes, CTA, booking and footer. The article distinguishes candidate, draft, approved, submitted and verified terminal states and cites Content Policy, Seller Terms, Fulfillment, Returns, Chargeback and Seller Enforcement material.
