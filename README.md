# WE Marketing — Design System

**WE Marketing** is a TikTok Shop agency. They help brands launch, grow, and monetize on TikTok Shop — creator partnerships, live-commerce, short-form content production, and storefront operations. The business is bilingual (English + Simplified Chinese) and operates across TikTok's US and APAC markets.

The brand is loud, neon, and confident — designed to feel native to the TikTok culture it serves. The hero asset is a hand-drawn looping scribble of the word "we" layered over a bold geometric "W", wordmarked **WE MARKETING**.

## Deliverables in scope

| Surface | Purpose | Bilingual |
|---|---|---|
| **Marketing website** | Case studies, services, contact | EN + ZH |
| **Business deck** | Pitch to brands/founders for TikTok Shop services | EN + ZH |

## Sources provided

- `uploads/你的段落文字 副本 (500 x 500 像素).png` — **primary logo** (transparent PNG, 500×500). Neon magenta "W" with hand-drawn "we" scribble, black "WE MARKETING" wordmark beneath.
- `uploads/Purple and Pink Neon Discord Profile Banner (960 x 540 px) (1920 x 1080 px).png` — **brand banner** (1920×1080). Logo on a textured violet field, wordmark rendered white. This banner establishes the brand's secondary palette and texture/grain language.

No codebase, Figma file, or deck template was provided. Everything downstream is **derived from those two assets** + **structural reference from two sites the client named**:
- **[bemomentiq.com](https://bemomentiq.com)** (MomentIQ, US TikTok Shop agency) — neon/dark palette energy, GMV-led stat callouts, "Create · Connect · Convert" triplet taglines.
- **[nbglobal.live](https://www.nbglobal.live)** (NB Global, bilingual TikTok Shop agency) — the closer IA match. We borrow: big-number **Achievements** grid with category badges (#1 / TOP 3 / $25M+ / 50K+), a **scrolling brand-partners marquee** with ~100 logos, **All-in-One Services** cards with large illustration-led tiles, repeating **"New Beginnings. New Growth."**-style tagline band above the footer, and EN/中 language toggle in the top nav.

We use these sites' *information architecture* only — nothing is visually copied. The skin is entirely WE Marketing's neon-magenta/violet brand.

### Information architecture

Site sections we build:
1. **Hero** — big claim + primary CTA
2. **Achievements** — rank badges + big GMV/partner/creator numbers (NB-style)
3. **Brand Partners marquee** — auto-scrolling logo rows, 3 tracks
4. **Services** — illustration-led service-pillar cards
5. **Case studies** — featured results with creator attribution
6. **Testimonials** — quote block from brand leaders
7. **Tagline band** — repeating brand statement strip (WE style: "Create. Connect. Convert.")
8. **CTA footer** — "Ready to go live?" + contact
9. **Footer** — links, socials, legal

---

## Index

| File / folder | What's in it |
|---|---|
| `README.md` | This file. Brand context, content & visual foundations, iconography. |
| `SKILL.md` | Entry point when used as an Agent Skill. |
| `colors_and_type.css` | All CSS variables — color tokens, type scale, spacing, radii, shadows, motion. Import this first. |
| `assets/` | Logos (full colour, white, mark-only), brand banner, social/TT icons. |
| `fonts/` | (Google-Fonts hosted — see Typography note below.) |
| `preview/` | Design-system preview cards (rendered as review pane tiles). |
| `ui_kits/website/` | Website UI kit — components + interactive home. |
| `ui_kits/deck/` | Business-deck UI kit — slide types + sample deck. |

---

## CONTENT FUNDAMENTALS

The WE voice is **confident, punchy, and bilingual**. It talks like a TikTok creator who has also read a pitch deck — energetic claims, short sentences, numbers over adjectives. It addresses brand clients directly.

### Voice & tone
- **We / you** — always. WE Marketing is a partner, not a vendor. Copy uses "we build", "you launch", "let's go".
- **Imperative verbs, short clauses.** "Go viral. Sell more. Repeat."
- **Numbers are louder than words.** Any claim that *can* be a stat, is a stat — "$4.2M GMV in 90 days" beats "significant growth".
- **Bilingual parity.** On headers and stats, EN and ZH are often stacked or paired. Chinese uses punchy 4-character phrases when possible ("全域增长", "爆款孵化", "从 0 到 1").
- **Casing** — display copy is **ALL CAPS** or Title Case; body copy is sentence case. Never ALL CAPS for body paragraphs.
- **Emoji** — used sparingly, only in social-native contexts (case-study captions, testimonials). ✨ 🔥 📈 🛍 are the only sanctioned ones. Never in headers, CTAs, or formal deck copy.
- **Punctuation** — oxford commas off; em-dashes on; periods optional on headlines.

### Example voice samples

> **Hero headline** — "Turn scrolls into sales." / "让每一次滑动都变成成交。"
>
> **Stat callout** — "4.2M GMV · 90 days · 1 creator team"
>
> **Service line** — "We run the shop. You run the brand."
>
> **Case study opener** — "Brand X had 0 followers on Day 1. On Day 60 they were trending. Here's how."
>
> **CTA** — "Book a discovery call →" / "预约咨询 →"

### Things we don't say
- "Unlock synergies", "leverage", "solutions", "ecosystem" — all corporate pitch-deck jargon.
- "Revolutionary", "game-changing" — over-claimed adjectives.
- Long 3+ line paragraphs on hero sections — break it up.

---

## VISUAL FOUNDATIONS

The brand is **neon-on-dark** with moments of **black-on-white** for density. Energy comes from a single, highly-saturated magenta used loudly and sparingly, over violet fields with a subtle grain.

### Color
- **Neon magenta `#FF5BF8`** is the hero. Used for the logo, key CTAs, accent strokes, and gradient fills. Never used for body text.
- **Brand violet `#A130CF`** is the signature bg. Grainy, textured — never flat.
- **Deep violet `#6B14A3`** and **violet-ink `#2A0A45`** ground darker backgrounds.
- **Off-black `#0D0D0D`** is primary body text on light. Never pure `#000`.
- **Warm neutral greys** for borders / secondary fills.
- **Semantic tokens** (success/warning/danger/info) are standard, but kept muted so they don't fight the magenta.

### Type
- **Display** — `Archivo Black` — **this is WE Marketing's official display face**. (Client has confirmed no separate brand font is in use; we adopt Archivo Black, loaded via Google Fonts, as the house display.) Hero & H1 always uppercase, tight tracking.
- **Body + UI** — `Space Grotesk`. Clean, slightly technical, reads well bilingually.
- **Chinese** — `Noto Sans SC`. Paired at slightly heavier weight (700/900) for display parity with Archivo Black.
- **Mono** — `Space Mono` for stats, timestamps, codes, overline labels.
- No custom brand font is required — Archivo Black + Space Grotesk (+ Noto Sans SC, Space Mono) are the adopted stack, all loaded from Google Fonts. No local file dependency.

### Backgrounds & surface
- **Violet with grain** is the signature dark bg. The banner shows a subtle canvas-grain texture overlaid on flat violet — replicate, don't flatten.
- **White pages** carry most of the marketing site's body content. High contrast, generous whitespace.
- **Full-bleed hero sections** — gradient or grainy-violet — only at the top of a page or a deck cover. One per view, max.
- **Gradients** — linear 135°, magenta → violet. Used behind display type, inside pills, inside the logo mark.
- No hand-drawn illustrations aside from the "we" scribble that lives *inside* the logo. We do not re-draw it; we import it.
- No repeating-pattern fills. Texture is always photographic grain, not SVG pattern.

### Motion
- Fast easing (`cubic-bezier(.2,.8,.2,1)` — "ease-out-expo-ish") for entrances.
- **No bounces.** No spring overshoot. The brand is punchy, not playful.
- Hover: 140ms opacity/scale/glow change. Press: quick scale(.97), no rotation.
- Page scroll: reveal on intersection, `translateY(16px) → 0`. No parallax.

### Hover / press states
- **Primary CTAs (magenta)** — hover intensifies the neon glow shadow. No color shift.
- **Dark CTAs** — hover shifts bg from `#0D0D0D` to `#2A0A45` (violet-ink), giving a cold->warm feel.
- **Ghost/outline CTAs** — hover fills with `--we-ink`, inverts text to white.
- **Press** — scale(.97), duration 90ms.
- **Cards** — hover lifts with `--shadow-lg` and 1px translateY(-2px).

### Borders & shadows
- Borders are **1px `#E5E5E5`** on light surfaces. No 2px borders except on ghost buttons.
- **Neon glow** is the signature shadow — `0 0 24px rgba(255,91,248,.55)`. Used on primary CTAs and focus rings.
- **Grey shadows** stay restrained — `0 6px 16px rgba(13,13,13,.08)` for cards. We don't layer multiple grey shadows.
- No inner shadows. No inset borders.

### Transparency & blur
- **Glassmorphism is OFF-brand** — we do not use frosted glass, backdrop blur, or translucent white panels. The brand is saturated and opaque.
- The only transparency used is the logo scribble line (`~80%` stroke opacity on white) when the white logo sits on a violet bg.

### Corner radii
- Buttons & pills — fully rounded (`--r-pill`, 999px).
- Cards — `14px` (`--r-3`). Decks/slide containers can go to `20px`.
- Input fields — `8px` (`--r-2`).
- Images — usually square/rectangular (no radius) — TikTok-native aesthetic. Product-card thumbnails at 14px.

### Cards
- White bg, `--r-3` (14px) corners, no border, soft grey `--shadow-md`.
- Hover: lifts to `--shadow-lg` + `translateY(-2px)` at 220ms.
- Brand cards (magenta/violet filled) use no shadow, just the fill + neon glow on CTA inside.

### Layout rules
- Desktop website: 1280px content max, 32px side gutters. Section spacing 96–128px.
- Decks: 1920×1080 (16:9). Safe area 80px all sides. One hero element per slide.
- Grid: 12-col on web, 6-col on slides.

---

## ICONOGRAPHY

WE Marketing doesn't have an existing icon system in-codebase (none provided). We use **[Lucide](https://lucide.dev)** as the default line-icon set — consistent 1.75px stroke, rounded caps, which pairs with Space Grotesk/Archivo Black without fighting them.

- **Load via CDN**: `<script src="https://unpkg.com/lucide@latest"></script>` then `<i data-lucide="shopping-bag"></i>` + `lucide.createIcons()`.
- **Stroke**: `1.75`; **Color**: inherit `currentColor` — in dark sections `white`, in light sections `--we-ink`.
- **Size**: 16px (inline), 20px (buttons), 24px (nav), 32px (feature blocks), 48px (marketing hero icons).
- **Brand-marked icons** — when the icon IS the feature accent (e.g. hero feature blocks), it gets the magenta fill or the neon-gradient.
- **Platform logos** — for TikTok, TikTok Shop, Shopify, we use monochrome SVG marks placed in `assets/platforms/`. Never color them magenta — keep them platform-authentic.
- **Emoji** — only in social-caption demos (see Content Fundamentals). Never as a system icon.
- **Unicode arrows** — `→` in CTAs is allowed and preferred over `<ChevronRight />` for hero copy; keeps it typographic.

⚠️ **Icon substitution flag** — if WE Marketing has a proprietary icon set, we'll swap Lucide out. For now it is the system default.

---

## CAVEATS

- **Only 2 source files provided** (logo + banner). Voice, visual foundations beyond color/type, deck/site layouts, and iconography are all inferred from category conventions + the brand's obvious neon/TikTok-native positioning. **Please review the CONTENT FUNDAMENTALS and VISUAL FOUNDATIONS closely** — many of these rules are best-guesses.

- **No icon set provided** — defaulted to Lucide. Swap if WE has an established one.
- **No real copy or case-study content** — all sample copy is illustrative and should be replaced before client use.
