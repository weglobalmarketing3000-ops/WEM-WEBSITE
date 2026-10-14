# q4-18 production evidence — 2026-10-14 PT

## Publication

- English: https://www.weglobalmarketing.com/blog/tiktok-shop-order-capacity-q4-demand-spike
- Chinese: https://www.weglobalmarketing.com/blog/tiktok-shop-order-capacity-q4-demand-spike?lang=zh
- Original publication date: 2026-10-14
- State: `published_complete`

## Source boundary

- Complete official source captures are under `outputs/2026-10-14-q4-18-source/`.
- The article accurately states that the new Logistics and Fulfillment Score was preview-only through October 14, 2026 and scheduled for official launch on October 15. It does not present the October 15 version or benefits as live on the article date.

## Accepted package and visual evidence

- Patch: `outputs/patches/2026-10-14-q4-18-order-capacity`
- Files: 17
- Fingerprint: `2039b3edea5e9df5636fc07c271332886657b2d9b68c32a9412fe47767257b80`
- EN cover SHA-256: `61868c815dc2628e0eff15c862aca7831ba329f771550d6ce41cd5cbeae57359`
- ZH cover SHA-256: `85933c5dee6fd3405ad8ba5a6722accd05ab80b59abc5863a69a71880ecd2084`
- EN thumbnail SHA-256: `a805c7a09916872fa412e5ad7237720fdbecc2799188c0010d1b63ab606230f8`
- ZH thumbnail SHA-256: `54b9878a9013775ad7a555d464742d74b164b64929c0ec72b3c7ed8f0a48a57b`

## Deployment

- Preview: `dpl_6WU3XXcNqDhnws3b3P4so8uVpwVJ` / https://wem-website-eklgu5b81-wem1.vercel.app
- Preview QA: `outputs/2026-10-14-q4-18-preview-qa/report.json`, `preview_qa_complete`, all five checks true.
- Production: `dpl_7E4A4WMo9LnDqfnswbeWQ4vHmK2N` / https://wem-website-o7fead2ip-wem1.vercel.app
- Production receipt: `outputs/deployment-receipts/2039b3edea5e9df5636f-production.json`, `succeeded / production_health_complete / exit 0`.
- Apex and `www` aliases were explicitly assigned to the verified production deployment.

## Anonymous public acceptance

- `outputs/2026-10-14-q4-18-public-qa/report.json` is `public_qa_complete`.
- Exact q4-18 file hashes, schema, EN/ZH desktop/mobile rendering, language switching, three localized article images, six FAQs, Source notes, CTA, booking/footer, first-card index, sitemap and `llms.txt` all passed.
- Independent verifier passed all five checks for q4-18 at rank 1.
- Preservation verifier passed all five checks for q4-17 at rank 2 and q4-16 at rank 3. Their public schema/render/index/discovery checks remain true; shared index-file hashes naturally changed because q4-18 was inserted ahead of them.

## Queue

- q4-19 remains `approved_unfinished` and was not advanced.
- Remaining executable queue: 12 topics, q4-19 through q4-30.
