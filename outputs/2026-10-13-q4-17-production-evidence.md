# q4-17 production evidence — 2026-10-13

- Target: `q4-17` / `tiktok-shop-qualifying-dispatch-event`
- English: https://www.weglobalmarketing.com/blog/tiktok-shop-qualifying-dispatch-event
- Chinese: https://www.weglobalmarketing.com/blog/tiktok-shop-qualifying-dispatch-event?lang=zh
- Approved visible/schema/sitemap date: `2026-10-13`
- Patch: `outputs/patches/2026-10-13-q4-17-qualifying-dispatch`
- Patch fingerprint: `0daee5c0c47120da7f396a5d03bdbb36df6438dbd88e0db3cf34e6408ce29ec2`
- Protected preview: `dpl_DZwiT8kCaqfqnNAJxWQixGt8JGdx`; authenticated preview QA passed hashes, schema, render, index and discovery.
- Accepted production: `dpl_EwmPanqvNwhStoXPxQkqNujFYyqk`; state `READY`; receipt `outputs/deployment-receipts/0daee5c0c47120da7f39-production.json` is `succeeded / production_health_complete / exit 0`.
- Production sitemap health: 276/276 routes returned HTTP 200.
- Public QA: `outputs/2026-10-13-q4-17-public-qa/report.json`; hashes, schema, render, index and discovery all true.
- Independent verification: `outputs/2026-10-13-q4-17-verifier.json` passed accepted-deployment binding, EN/ZH dates, rank 1, sitemap parity and prior-article regression. The canonical automation verifier also passed all five rank/date/schema/sitemap checks.
- Content: 1,812 English words; 4,761 Chinese non-whitespace characters; six FAQs per language; two localized body visuals per language; Source notes, related guides, Ready-to-talk CTA, booking and footer included.
- Live order: q4-17 rank 1; q4-16 rank 2; q4-15 rank 3.
- Scope preserved: q4-18 untouched; primary publisher PAUSED; recovery monitor ACTIVE; no Lark/email send.

## 2026-10-14 reconciliation

- A newer legitimate q4-17 live revision was traced to `origin/codex/q4-16-q4-17-recovery-20261013`, commit `2be8884`; it was preserved rather than overwritten.
- Accepted baseline deployment before q4-18: `dpl_8GEYiVr1NTXbkcUgXgwcXRNNi3gn`; patch fingerprint `4729621b114edd659d58a97a1e6b1950d1a1ebb95e6af30a2239228f25d1f92f`.
- Exact current readback patch: `outputs/patches/2026-10-14-q4-17-current-readback`.
- Reconciled public QA: `outputs/2026-10-14-q4-17-current-reconciled-public-qa/report.json`; hashes, schema, render, index and discovery all true.
- Both q4-17 verifiers passed before q4-18 publication. q4-18 was then layered onto this accepted baseline, so the reconciled q4-17 revision remains live at rank 2.
