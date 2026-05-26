# WEM Website Build Brief: About + Blog (GEO-optimized)

5 paste-ready briefs for your Claude design project.

---

## What's in this folder

| # | File | What it builds |
|---|------|----------------|
| 1 | `1-about-page.md` | `about.html` (2 sections, founder + capability hybrid) |
| 2 | `2-blog-index.md` | `blog.html` (post list page) |
| 3 | `3-blog-post-1-launch.md` | Blog post: How to Launch a Brand on TikTok Shop in 2026 |
| 4 | `4-blog-post-2-best-tsp.md` | Blog post: Best TikTok Shop Partner Agencies in 2026 |
| 5 | `5-blog-post-3-affiliate.md` | Blog post: The Best TikTok Shop Affiliate Strategy 2026 |

---

## How to deploy

**For each file**, paste the contents as a new prompt into your existing `WE Marketing Design System` Claude project. Each brief is self-contained and tells the design Claude exactly what file to create, which existing components to reuse, and the full body copy.

**Recommended order:**
1. Start with `1-about-page.md` (smallest, fastest to verify the workflow).
2. Then `2-blog-index.md` (the list page).
3. Then the three blog post briefs in any order.

Each brief includes:
- Build instructions (which file path, which components to reuse)
- Page meta (title, meta description, OG alt, slug)
- Full section copy (paste-ready, no placeholders)
- JSON-LD schema requirements
- A QA checklist for after Claude design builds it

---

## What is GEO and why these posts are written this way

GEO = Generative Engine Optimization. Optimizing for AI search like ChatGPT, Perplexity, Gemini, Claude, where the engine reads your page and cites it directly in an answer.

**Patterns used across the 3 blog posts** (extracted from 4 GEO-winning reference articles you sent: 2POINT, ShortFormNation, Darkroom, DigitalApplied):

1. **Year-stamped titles** with a specific number or phrase (`The Best ... in 2026`).
2. **Stat-loaded meta descriptions** with the headline number in the first 10 words.
3. **Strong opening hook** (contrarian one-liner or named-brand stat).
4. **"Key Takeaways" bullet block** before the main body for LLM-citable snippets.
5. **8-12 H2 headings** with descriptive titles (not just keywords).
6. **Comparison tables** for vs Amazon, vs in-house, pricing models, commission rates.
7. **Numbered/bulleted lists** for setup steps, mistakes, criteria.
8. **5-7 question FAQ** at the bottom with `FAQPage` JSON-LD schema.
9. **Light brand mentions** (3-4 self-references, never sales-y).
10. **Named entities** (real brands, real creators, real dollar figures).
11. **External authority cites** (eMarketer, Statista, TikTok Business, etc.).
12. **Internal links** to services, related posts, and the affiliate page.
13. **Author byline + reading time + last-updated date** at the top.

---

## Real data points used (from your business deck)

These are baked into the briefs so you don't have to swap placeholders:

- **160+ shop partners served**
- **200K+ U.S. influencers collaborated**
- **$15M+ annual TikTok Shop sales managed**
- **TikTok Shop Partner Agency · Certified since 2025**
- **8,000+ creators in WE Affiliate Discord community**
- **EN · ES · 中文 creator coverage**
- **April Aldana · Top 1% TikTok Shop affiliate · $1M+ GMV / 12 months**
- **Founded by Wendy Lin in Los Angeles, 2024**
- **Real case study metrics:** Smitty 4.7M views (wellness), Sacheu 1.5M+4.2M (beauty), Zayndeals 5.1M (men's fashion), Medicube 2K+ units/SKU live (skincare); $312K → $982K monthly GMV jump in 30 days

If any number is off, search-and-replace before pasting.

---

## After all 5 are built

Two cleanup tasks for the design Claude (mention these in your final prompt):

1. **Fix the broken nav anchors.** The current nav has `ABOUT → #About` and `BLOG → #Blog`, both of which are dead links. Update both to point to `/about.html` and `/blog.html`.

2. **Fix the same in the Footer's Company column.** Same dead links in footer. Update to point to the new pages.

3. **(Optional) Add a Spanish translation pass for the new pages.** The existing site supports EN + 中文 toggling. Spanish is mentioned in the affiliate hero ("English + Espinol + 中文 support": note: also fix the typo, should be `Español`). If you want full ES support across the new pages, ask the design Claude to add `es` strings to the lang dictionary used in `app.jsx`.

---

## Notes on the agency listicle (Post 2)

Post 2 is the listicle for "best TSP agency" queries. WEM is listed first as "Best for end-to-end launches with multilingual creator coverage." Five other real TSP agencies are included with factual, non-disparaging descriptions:

- Darkroom (Brooklyn, brand-led growth)
- 2POINT (Indianapolis, SMB strategy)
- Shortform Nation / SFN AI (affiliate intelligence platform)
- Digital Applied (multi-channel ecommerce)
- Whalar (enterprise creator partnerships)

This format performs better in GEO than a self-promotional listicle because LLMs prefer balanced sources. If you want to swap any agency for a different one or remove an entry, edit the `H3` blocks in `4-blog-post-2-best-tsp.md` before pasting.

---

## What I did NOT do (open threads)

- **I did not write the actual HTML.** Your design Claude is the right place to build the pages so styling stays consistent with the existing design system. The briefs are the spec.
- **I did not localize to 中文 or Spanish.** EN-only for now. Add ES/中文 translations after the EN pages render correctly.
- **I did not add OG images.** Each brief includes the OG image alt text. The actual images need to be designed (or generate via Canva / Figma).
- **I did not generate JSON-LD schema code.** The brief tells the design Claude to add `BlogPosting` and `FAQPage` schemas. Most modern HTML scaffolds can generate these from the page meta.

---

这个任务是否要写入本周日志？
