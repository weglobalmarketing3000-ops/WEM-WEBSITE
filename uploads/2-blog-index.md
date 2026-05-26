# Blog Index Page Brief: `ui_kits/website/blog.html`

**Paste this into your Claude design project to build the Blog index page.**

---

## Build instructions for Claude

> Create `ui_kits/website/blog.html`. Reuse `NavBar` and `Footer`. The page is a list of blog posts with the same dark-mode aesthetic.
>
> Each post card uses: eyebrow tag (category) + title (large, white, hover to gradient) + 2-line excerpt + meta line (date + reading time). Cards stack vertically in a single centered column on desktop (max-width ~720px) for a readable, blog-native feel: not a grid. Magenta border-bottom on hover.
>
> Update `app.jsx` so `BLOG` link in `NavBar` points to `blog.html` instead of `#Blog`. Same fix in Footer Company column.
>
> Each blog post listed below should also exist as its own page at `ui_kits/website/blog/[slug].html`. Reuse a shared `BlogPost` component for layout (article column, sticky TOC on desktop, FAQ accordion at bottom). Apply `BlogPosting` and `FAQPage` JSON-LD schemas on every post (these matter for GEO).

---

## Page meta

- **Page title:** `Blog | TikTok Shop Strategy & Playbooks · WE Marketing`
- **Meta description:** `TikTok Shop strategy, creator partnerships, affiliate playbooks, and brand launch guides from WE Marketing, a TikTok Shop Partner Agency. Updated 2026.`
- **URL:** `/blog.html`

---

## Section 1: Hero (compact)

```
Eyebrow tag: WE MARKETING BLOG

Headline (H1):
TikTok Shop strategy, 
without the fluff.

Lead paragraph:
Playbooks, frameworks, and field notes from running 
$15M+ in annual TikTok Shop sales across 160+ brands. 
Updated as the platform changes.
```

---

## Section 2: Post list

Three posts to ship. Each card:

```
┌──────────────────────────────────────────────────┐
│ TIKTOK SHOP · LAUNCH                             │
│                                                  │
│ How to Launch a Brand on TikTok Shop in 2026:   │
│ The Complete Playbook                            │
│                                                  │
│ A 90-day operator's guide for brands cold-      │
│ starting on TikTok Shop. Setup, creator         │
│ seeding, content engine, live, and the          │
│ moment to scale.                                 │
│                                                  │
│ May 2026 · 12 min read                          │
└──────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────┐
│ TIKTOK SHOP · AGENCY                             │
│                                                  │
│ Best TikTok Shop Partner Agencies in 2026:      │
│ How to Choose a TSP                              │
│                                                  │
│ A buyer's guide for brands shopping for a       │
│ TikTok Shop Partner Agency. The 6 questions     │
│ to ask, the red flags to avoid, and how the    │
│ top TSPs actually differ.                        │
│                                                  │
│ May 2026 · 11 min read                          │
└──────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────┐
│ TIKTOK SHOP · AFFILIATE                          │
│                                                  │
│ The Best TikTok Shop Affiliate Strategy for     │
│ Brands in 2026                                   │
│                                                  │
│ How to scale a TikTok Shop affiliate program    │
│ from 10 to 1,000 creators. Commission rates,    │
│ brief frameworks, the four affiliate motions,   │
│ and the math that actually works.                │
│                                                  │
│ May 2026 · 13 min read                          │
└──────────────────────────────────────────────────┘
```

---

## Section 3: CTA Footer (reuse `CtaFooter` from index.html)

Same component, no changes.

---

## Footer (reuse existing)

Once routing is fixed, Footer's `Company → Blog` link goes to `/blog.html`.

---

## QA checklist

- [ ] `BLOG` link in NavBar and Footer point to `/blog.html`
- [ ] Each post card links to `/blog/[slug].html`
- [ ] Slugs match: `launch-tiktok-shop-2026`, `best-tiktok-shop-partner-agencies-2026`, `tiktok-shop-affiliate-strategy-2026`
- [ ] Three blog post pages exist (see files 3, 4, 5 in this brief set)
- [ ] BlogPosting schema on each post page
- [ ] FAQPage schema on each post page
- [ ] OG images set with stat-loaded alt text
