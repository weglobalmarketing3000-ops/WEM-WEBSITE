# WEM Website Build Brief: Full Site Redesign (GEO-optimized)

7 paste-ready briefs for your Claude design project, plus 1 SOP and 1 weekly log.

---

## New site IA (after this redesign)

5 pages, each with a clear job. No more overlap.

| Page | Job | Status |
|---|---|---|
| **`index.html`** | Services intro (the 6 services live here) | Brief 7 (redesign) |
| **`work.html` (NEW)** | All case studies | Brief 8 (new page) |
| **`about.html` (NEW)** | Founder + credibility | Brief 1 (paused, not yet rewritten leaner) |
| **`affiliate.html`** | Creator recruitment (existing, no change) | No change |
| **`blog.html` + 3 posts (NEW)** | SEO/GEO | Briefs 2-5 |

---

## What's in this folder

| # | File | What it builds |
|---|------|----------------|
| 1 | `1-about-page.md` | `about.html` (paused, will rewrite leaner after homepage + work are built) |
| 2 | `2-blog-index.md` | `blog.html` (post list page) |
| 3 | `3-blog-post-1-launch.md` | Blog post: How to Launch a Brand on TikTok Shop in 2026 |
| 4 | `4-blog-post-2-best-tsp.md` | Blog post: Best TikTok Shop Partner Agencies in 2026 |
| 5 | `5-blog-post-3-affiliate.md` | Blog post: The Best TikTok Shop Affiliate Strategy 2026 |
| 7 | `7-homepage-redesign.md` | `index.html` redesign (services-led, case sections moved out) |
| 8 | `8-work-page.md` | `work.html` new page (houses case studies) |

(No file 6: the standalone Services page brief was killed because homepage now does that job.)

Plus:
- `SOP-claude-design-token-guardrail.md` (process SOP)
- `本周日志-2026-W19.md` (weekly log)

---

## Recommended deploy order

1. **Brief 7** (homepage redesign) FIRST. Trims case sections out of homepage.
2. **Brief 8** (work page) SECOND. Re-imports the case components on the new page.
3. **Brief 2** (blog index) and **Briefs 3-5** (blog posts) in any order. New SEO/GEO content.
4. **Brief 1** (about page) LAST. Will need a rewrite to remove duplication with the new homepage and work page. Hold for now.

---

## Token guardrail (already baked into every brief)

Every brief opens with a TOKEN GUARDRAIL block telling Design Claude NOT to re-render existing pages, regenerate the Design System, or re-export shared components. Critical: Design Claude can burn 10K-30K tokens per unnecessary regeneration.

**SOP for pasting briefs (always do both):**
1. Drop the `.md` file (or paste the content) into Design Claude.
2. Add a one-line guardrail in the chat input above the brief, e.g.:

```
守门员指令：只建下面 brief 里的新文件。不要重新渲染 index.html / 
affiliate.html 或任何已有页面。不要重建 Design System。NavBar 和 
Footer 直接 import 复用。如果你想"重建所有东西"，先停下，告诉我卡在哪。
```

If you see Design Claude start "rebuilding everything" instead of just creating/editing the one file, stop it and remind it of the guardrail.

---

## What is GEO and why the blog posts are written this way

GEO = Generative Engine Optimization. Optimizing for AI search like ChatGPT, Perplexity, Gemini, Claude, where the engine reads your page and cites it directly in an answer.

**Patterns used across the 3 blog posts** (extracted from 4 GEO-winning reference articles: 2POINT, ShortFormNation, Darkroom, DigitalApplied):

1. Year-stamped titles with a specific number or phrase
2. Stat-loaded meta descriptions
3. Strong opening hook (contrarian one-liner or named-brand stat)
4. "Key Takeaways" bullet block before the main body
5. 8-12 H2 headings with descriptive titles
6. Comparison tables for vs Amazon, vs in-house, pricing models, commission rates
7. Numbered/bulleted lists for setup steps, mistakes, criteria
8. 5-7 question FAQ at the bottom with FAQPage JSON-LD schema
9. Light brand mentions (3-4 self-references, never sales-y)
10. Named entities (real brands, real creators, real dollar figures)
11. External authority cites (eMarketer, Statista, TikTok Business)
12. Internal links to services, related posts, affiliate page
13. Author byline + reading time + last-updated date

---

## Real data points used (from your business deck)

These are baked into every brief.

- **160+ shop partners served**
- **200K+ U.S. influencers collaborated**
- **$15M+ annual TikTok Shop sales managed**
- **TikTok Shop Partner Agency · Certified since 2025**
- **8,000+ creators in WE Affiliate Discord community**
- **EN · ES · 中文 creator coverage**
- **April Aldana · Top 1% TikTok Shop affiliate · $1M+ GMV / 12 months**
- **Real case study metrics:** Smitty 4.7M views (wellness), Sacheu 1.5M+4.2M (beauty), Zayndeals 5.1M (men's fashion), Medicube 2K+ units/SKU live (skincare); $312K → $982K monthly GMV jump in 30 days

If any number is off, search-and-replace before pasting.

---

## After all briefs are deployed

Cleanup tasks for Design Claude (mention these in the final pass):

1. **All nav and footer links resolve to real destinations:** SERVICES → #Services, OUR WORK → /work.html, AFFILIATE → /affiliate.html, ABOUT → /about.html, BLOG → /blog.html. No more dead anchors.
2. **Optional: Rename "AFFILIATE" nav label to "CREATORS"** for clarity. Currently confusing because brand visitors expect a service description but `/affiliate.html` is creator-side recruitment.
3. **Fix the "Espinol" typo** in affiliate.html hero. Should be `Español`.
4. **(Optional) Add Spanish + 中文 translations for the new pages.** Existing site supports lang toggling. Add `es` strings and verify `zh` strings on the new pages.

---

## Notes on the agency listicle (Blog Post 2)

Post 2 is the listicle for "best TSP agency" GEO queries. WEM is listed first as "Best for end-to-end launches with multilingual creator coverage." Five other real TSP agencies are included with factual, non-disparaging descriptions (Darkroom, 2POINT, Shortform Nation, Digital Applied, Whalar). To swap or remove an entry, edit the `H3` blocks in `4-blog-post-2-best-tsp.md` before pasting.

This balanced format performs better in GEO than a self-promotional listicle because LLMs prefer balanced sources.

---

## What I did NOT do (open threads)

- **No actual HTML written.** Design Claude is the right place to build the pages so styling stays consistent with the design system. The briefs are the spec.
- **No localization.** EN-only content. Add ES/中文 after EN renders correctly.
- **No OG images created.** Each brief includes the OG image alt text. Actual images need to be designed (Canva or Figma).
- **No JSON-LD schema code.** Briefs tell Design Claude to add `BlogPosting` and `FAQPage` schemas. Most modern HTML scaffolds can generate these from page meta.
- **About page brief is paused.** It needs a rewrite to remove duplication with the new homepage + work page. Will revisit after homepage and work are built.
