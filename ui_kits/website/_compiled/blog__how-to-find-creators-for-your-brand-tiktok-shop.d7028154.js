function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState,
  useEffect
} = React;
const P = t => ({
  kind: 'p',
  text: t
});
const H3 = t => ({
  kind: 'h3',
  text: t
});
const UL = items => ({
  kind: 'list',
  items
});
const INFO = (title, src, alt) => ({
  kind: 'infographic',
  title,
  src,
  alt
});
const CTA = label => ({
  kind: 'cta',
  label,
  href: 'https://zus03h0enw04.sg.larksuite.com/scheduler/03970278dd9a7925'
});
const POST = {
  meta: {
    title: 'How to Find the Right Creators for Your Brand on TikTok Shop',
    cat: 'CREATORS · SOURCING',
    author: 'WE Marketing Team',
    date: 'Apr 10, 2026',
    read: '10 min read',
    heroImage: 'hero-11-how-to-find-creators-for-your-brand-tiktok-shop.png',
    heroAlt: 'A marketing operator at a desk with two monitors: a creator search dashboard showing eight creator profile tiles with engagement metrics, and a spreadsheet of outreach candidates.'
  },
  sections: [{
    id: 'intro',
    h: 'Finding the right creators, not just more creators',
    body: [P("Finding creators on TikTok Shop is easy. Finding creators who actually drive sales for your specific brand is a completely different challenge."), P("After matching creators to 160+ brands through our community of 8,000+ TikTok Shop creators, we've learned that the brands with the best results aren't the ones who reach the most creators. They're the ones who reach the right ones."), P("Here's the framework we use.")]
  }, {
    id: 'mistakes',
    h: 'Why most brands get creator recruitment wrong',
    body: [P("The most common mistake brands make is optimizing for follower count. A creator with 500,000 followers sounds impressive, but if their audience doesn't buy, it doesn't matter."), P("On TikTok Shop, the metric that matters is GMV: how much revenue has this creator actually generated through product sales? A creator with 15,000 followers and a track record of consistent affiliate sales will almost always outperform a creator with 500,000 followers who has never sold through TikTok Shop."), P("The second mistake is treating creator outreach like a one-and-done transaction. Brands send products and then go silent, wondering why their post rate is low. The brands that build strong creator programs are the ones that stay in communication before, during, and after the seeding process.")]
  }, {
    id: 'tiers',
    h: 'Step 1: Understand creator tiers and where to focus',
    body: [P("TikTok Shop categorizes creators into GMV-based tiers. Knowing where to focus saves you time and budget:"), UL(['L1 ($0 to $5K monthly GMV): Newer creators, often very responsive. High volume potential at low cost.', 'L2 ($5K to $25K monthly GMV): Active sellers with proven conversion ability. Still accessible and commission-friendly.', 'L3 ($25K to $60K monthly GMV): Strong performers. Higher conversion rates, but many expect paid collaborations on top of commission.', 'L4 ($60K to $150K monthly GMV): Established creators who are selective about partnerships. Typically require retainer or flat fee arrangements.', 'L5 ($150K to $400K monthly GMV): Top-tier creators, often with management representation.', 'L6 ($400K to $1.5M monthly GMV): Elite sellers. Very selective, high cost.', 'L7 ($1.5M+ monthly GMV): The top performers on the platform.']), INFO('Creator Tier Chart', 'info-3a-creator-tiers.png', 'TikTok Shop Creator Tiers (L1-L7) with monthly GMV bands and program-fit notes.'), P("For commission-only programs, L1 and L2 are your sweet spot. These creators are active, responsive to outreach, and willing to work on a pure commission basis. You get volume and discoverability without upfront costs beyond product samples."), P("For retainer-based programs, L3 is the best value. These creators have proven they can convert, and while they may expect some form of payment beyond commission, the rates are still reasonable relative to their output. L3 creators often deliver the highest ROI when you factor in content quality and consistency."), P("L4 and above are valuable for tentpole moments (product launches, seasonal campaigns), but they shouldn't be the foundation of your everyday program.")]
  }, {
    id: 'criteria',
    h: 'Step 2: Define your creator criteria before you search',
    body: [P("Before reaching out to anyone, get clear on three things:"), H3('Content fit'), P("What does a great video for your product look like? If you sell skincare, you want creators who film texture shots, application routines, and results over time. If you sell kitchen gadgets, you want creators who film cooking demos and problem-solution clips. Watch videos from your top-performing competitors to calibrate your expectations."), H3('Language and audience match'), P("This gets overlooked constantly. We've seen cases where Spanish-speaking creators drove over 70% of a brand's total video GMV because the content resonated with an underserved audience segment. Think about who your actual buyer is, not just your ideal buyer."), H3('Post rate, not just GMV'), P("A creator's post rate tells you how reliably they actually publish content after receiving samples. We don't send samples to creators with post rates below 70%."), P("Here's a nuance worth understanding: sometimes a creator has strong GMV and great content but a lower post rate. Before writing them off, check how much content they've published in the last 30 days. If they're posting frequently but their post rate is low, it usually means they're receiving more samples than they can get to. That's a volume backlog, not a reliability issue. These creators are still worth seeding.")]
  }, {
    id: 'where',
    h: 'Step 3: Where to find creators',
    body: [H3("TikTok Shop's affiliate marketplace"), P("Your starting point. Through Seller Center, you can browse active affiliates, filter by category and activity, and set up open collaborations with your commission rate so creators can find you. For higher-value targets, use targeted collaboration to invite specific creators directly."), H3('Manual discovery on TikTok'), P("Search hashtags relevant to your product category. Look at who's creating content for similar or competing products. Check the \"shop\" tab on creator profiles to see if they're already active affiliates. This is time-intensive but surfaces creators the marketplace might miss."), H3('Creator communities and agencies'), P("Working with a TikTok Shop agency that has an established creator network is the fastest path. When a new brand comes in through our community at WE Marketing, we can match and activate creators within days instead of weeks because the creators are already vetted, categorized, and ready to go.")]
  }, {
    id: 'vet',
    h: 'Step 4: Vet before you invest',
    body: [P("Before sending product, check these five things:"), H3('Recent activity'), P("Has the creator posted TikTok Shop content in the last 30 days? Inactive creators waste your samples."), H3('Content quality'), P("Watch their last 10 videos. Is the production clean? Do they speak naturally about products, or does it feel scripted? Does the content get genuine engagement?"), H3('Post rate'), P("This is critical. If their post rate is below 70%, the odds of them posting your content drop significantly. Your samples have a cost, and sending them to creators who won't post is throwing money away."), H3('Category relevance'), P("A beauty creator with 100K followers is not automatically a good fit for your pet product. Category drift kills conversion rates."), H3('30-day content volume'), P("How many videos have they posted in the last month? Creators who post 3 or more times per week compound faster on TikTok's algorithm than those who post sporadically.")]
  }, {
    id: 'outreach',
    h: 'Step 5: How to reach out (and actually get a response)',
    body: [H3('Lead with value, not your pitch'), P("Don't open with \"We'd love to partner with you.\" Open with what the creator gets: free product plus your commission rate. Be specific about the product: \"Our Dark Spot Serum is our #1 seller on TikTok Shop with a 4.8 star rating\" is better than \"We have a great skincare line.\""), H3('Make it frictionless'), P("Include a direct link to request a sample or join your affiliate program. Don't require a long application form. Reduce every barrier to saying yes."), H3('Use email when possible'), P("Email tends to get better response rates than TikTok DMs because DMs get buried under brand messages. If a creator has an email in their bio, use it.")]
  }, {
    id: 'timeline',
    h: 'Step 6: The timeline from seed to content',
    body: [P("Set realistic expectations for your team:"), H3('Days 1-5'), P("Sample ships and arrives at the creator's location. Shipping time depends on where they're based."), H3('Days 5-10'), P("Creator tries the product and produces content. Most need 3 to 5 days for this."), H3('Days 10-14'), P("Content goes live. Most programs give creators a 14-day posting window."), P("In practice, the full cycle from sample shipment to published content is about two to three weeks. Some creators move faster, some slower. Plan your content calendar around this timeline, not around the day you ship.")]
  }, {
    id: 'follow-up',
    h: 'Step 7: Follow up and build the relationship',
    body: [P("This is where most brands drop the ball, and it's where the biggest gains are."), H3('Follow up after delivery'), P("A simple message on Day 3 after delivery: \"Did you receive the product? Let us know if you have any questions.\" This keeps you top of mind and opens a dialogue."), H3('Check in before the deadline'), P("Around Day 10, a light nudge: \"Looking forward to seeing your content! Let us know if you need anything.\" Not pushy, just present."), H3('Re-engage your top performers'), P("When a creator's video drives strong sales, reach back out with exclusive offers: higher commission rate, early access to new products, or a dedicated discount code for their audience. A creator who has already converted for your brand is far more valuable than a new recruit."), P("The difference between a 30% post rate and an 80% post rate comes down to this step. Brands that send products and go silent get 30-50%. Brands that communicate proactively and treat creators as partners consistently hit 80% or higher."), INFO('Post Rate Comparison', 'info-3b-post-rate.png', 'Post rate comparison: 30-50% without active management vs. 80%+ with vetting and follow-up.')]
  }, {
    id: 'volume',
    h: 'The volume game',
    body: [P("TikTok Shop is a volume channel. You need consistent content to build sustainable sales. A handful of videos won't cut it."), P("Whether you build creator volume yourself or work with an agency that has an existing network, the math is the same: more creators activated, more content produced, more chances for a video to catch the algorithm and drive a wave of sales."), P("If you want help building your creator pipeline, schedule a call with our team to discuss your brand's goals."), CTA('Book a discovery call →')]
  }],
  faqs: [{
    q: 'How do I find TikTok Shop creators for my brand?',
    a: "Start with TikTok Shop's affiliate marketplace to browse active creators in your category. Filter by GMV performance, not follower count. For commission-only programs, L1 and L2 creators (up to $25K monthly GMV) are the sweet spot for volume and responsiveness. You can also work with a TikTok Shop agency that has a pre-built creator community for faster activation."
  }, {
    q: 'How many followers does a creator need to sell on TikTok Shop?',
    a: "Creators need at least 1,000 followers to access TikTok Shop's affiliate features. However, follower count is a poor predictor of sales performance. Creators with smaller but engaged audiences often outperform larger accounts in conversion rate because their followers trust their recommendations more."
  }, {
    q: 'How long does it take for a creator to post after receiving a sample?',
    a: "From sample shipment to published content, expect about two to three weeks. Shipping typically takes 3 to 5 days, and creators generally need another 3 to 5 days to produce content. Most programs give creators a 14-day window to post after receiving the product."
  }, {
    q: 'How do I contact TikTok creators about promoting my product?',
    a: "You can reach TikTok Shop creators through the platform's built-in affiliate marketplace, through direct message on TikTok, or through email if listed in their bio. Email tends to get better response rates since TikTok DMs get buried. Lead with what's in it for the creator: commission rate, free product, and any additional incentives."
  }],
  related: [{
    label: "TikTok Shop Affiliate Program: A Brand's Complete Guide",
    href: 'tiktok-shop-affiliate-program-brand-guide.html'
  }, {
    label: 'How Cross-Border Brands Launch on TikTok Shop in the U.S.',
    href: 'cross-border-brands-launch-tiktok-shop-us.html'
  }, {
    label: 'How DTC Brands Are Using TikTok Shop to Scale',
    href: 'how-dtc-brands-use-tiktok-shop.html'
  }]
};
function App() {
  const slug = window.location.pathname.split('/').pop().replace('.html', '');
  const [lang, setLang] = useState(() => {
    const urlLang = new URLSearchParams(window.location.search).get('lang');
    if (urlLang === 'zh' || urlLang === 'en') return urlLang;
    return localStorage.getItem('we-lang') || 'en';
  });
  const post = lang === 'zh' && window.BLOG_ZH_POSTS?.[slug] ? window.BLOG_ZH_POSTS[slug] : POST;
  useEffect(() => {
    localStorage.setItem('we-lang', lang);
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    if (post?.meta?.title) document.title = (post.meta.title || "WE Blog") + " | WE Marketing";
  }, [lang, post]);
  useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
  return React.createElement("div", {
    "data-screen-label": "WE Blog \xB7 Find Creators"
  }, React.createElement(CursorStars, null), React.createElement(NavBar, {
    lang: lang,
    onLang: setLang,
    basePath: "../"
  }), React.createElement(BlogPost, _extends({}, post, {
    labels: lang === 'zh' ? window.BLOG_ZH_LABELS : undefined
  })), React.createElement(CtaFooter, {
    lang: lang
  }), React.createElement(Footer, {
    lang: lang,
    basePath: "../"
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App, null));
