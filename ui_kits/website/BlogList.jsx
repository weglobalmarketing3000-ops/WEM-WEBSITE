// BlogList.jsx — single-post list (post 1 of 15, more coming)
const BLOG_POSTS = [
  {
    slug: 'best-tiktok-shop-agencies-us',
    cat: { en: 'TIKTOK SHOP · AGENCY GUIDE', zh: 'TIKTOK SHOP · 代运营指南' },
    title: { en: 'Best TikTok Shop Agencies in the U.S. for Brands', zh: '美国 TikTok Shop 代运营公司怎么选？2026 品牌指南' },
    excerpt: { en: 'A practical shortlist and evaluation framework for choosing a U.S. TikTok Shop agency, with data-backed context and bilingual guidance for cross-border brands.', zh: '美国 TikTok Shop agency 怎么选？从店铺运营、达人联盟、内容生产、广告放大和数据复盘五个角度拆解。' },
    date: { en: 'May 27, 2026', zh: '2026 年 5 月 27 日' }, read: { en: '12 min read', zh: '12 分钟阅读' },
    image: 'hero-best-tiktok-shop-agencies-us-v3.png',
  },
  {
    slug: 'ugc-video-strategy-for-brands',
    cat: { en: 'UGC · STRATEGY', zh: 'UGC · 策略' },
    title: { en: 'UGC Video Strategy: How to Build a Content Pipeline That Drives Sales', zh: 'UGC 视频策略：搭建驱动销售的内容流水线' },
    excerpt: { en: 'A step-by-step UGC strategy for brands: how to source creator video, license usage rights, and deploy UGC across TikTok, Meta, and beyond.', zh: '品牌 UGC 策略实操：如何获取达人视频、购买使用授权、跨平台部署。' },
    date: { en: 'May 20, 2026', zh: '2026 年 5 月 20 日' }, read: { en: '12 min read', zh: '12 分钟阅读' },
    image: 'hero-14-ugc-video-strategy-for-brands.png',
  },
  {
    slug: 'where-to-find-ugc-video-creators',
    cat: { en: 'UGC · SOURCING', zh: 'UGC · 达人获取' },
    title: { en: 'Where to Find UGC Video Creators for Your Brand', zh: '去哪里找 UGC 视频达人' },
    excerpt: { en: 'Looking for UGC creators? TikTok Shop affiliates are the most cost-effective source of authentic video content.', zh: '找 UGC 达人？TikTok Shop 联盟达人是性价比最高的真实内容源。' },
    date: { en: 'May 15, 2026', zh: '2026 年 5 月 15 日' }, read: { en: '10 min read', zh: '10 分钟阅读' },
    image: 'hero-13-where-to-find-ugc-video-creators.png',
  },
  {
    slug: 'how-retail-brands-use-tiktok-shop',
    cat: { en: 'RETAIL · STRATEGY', zh: '零售 · 策略' },
    title: { en: 'How Retail Brands Use TikTok Shop to Reach New Customers', zh: '零售品牌如何用 TikTok Shop 触达新客户' },
    excerpt: { en: 'Retail brands are using TikTok Shop to reach younger buyers, test products, and create content at scale.', zh: '零售品牌在用 TikTok Shop 触达年轻客户、测试新品、批量产出内容。' },
    date: { en: 'May 8, 2026', zh: '2026 年 5 月 8 日' }, read: { en: '8 min read', zh: '8 分钟阅读' },
    image: 'hero-12-how-retail-brands-use-tiktok-shop.png',
  },
  {
    slug: 'how-to-find-creators-for-your-brand-tiktok-shop',
    cat: { en: 'CREATORS · SOURCING', zh: '达人 · 筛选' },
    title: { en: 'How to Find the Right Creators for Your Brand on TikTok Shop', zh: '如何为品牌找到合适的 TikTok Shop 达人' },
    excerpt: { en: 'Finding TikTok Shop creators isn’t hard. Finding ones that actually convert is. Here’s the framework we use to match brands with 8,000+ vetted creators.', zh: '找达人不难，找能转化的才难。8,000+ 认证达人的匹配框架。' },
    date: { en: 'Apr 10, 2026', zh: '2026 年 4 月 10 日' }, read: { en: '10 min read', zh: '10 分钟阅读' },
    image: 'hero-11-how-to-find-creators-for-your-brand-tiktok-shop.png',
  },
  {
    slug: 'cross-border-brands-launch-tiktok-shop-us',
    cat: { en: 'CROSS-BORDER · U.S. LAUNCH', zh: '出海 · 美国上线' },
    title: { en: 'How Cross-Border Brands Launch on TikTok Shop in the U.S.', zh: '出海品牌如何在美国 TikTok Shop 上线' },
    excerpt: { en: 'Selling into the U.S. market through TikTok Shop? Here’s what cross-border brands need to know about creators, content localization, and working with a U.S.-based agency.', zh: '想通过 TikTok Shop 进入美国市场？出海品牌需要了解的达人策略、内容本地化与本地代理协作。' },
    date: { en: 'Apr 2, 2026', zh: '2026 年 4 月 2 日' }, read: { en: '9 min read', zh: '9 分钟阅读' },
    image: 'hero-10-cross-border-brands-launch-tiktok-shop-us.png',
  },
  {
    slug: 'ugc-video-vs-traditional-ads',
    cat: { en: 'UGC · PAID MEDIA', zh: 'UGC · 付费投放' },
    title: { en: 'Why UGC Video Is Outperforming Traditional Ad Creative', zh: '为什么 UGC 视频质量超越传统广告素材' },
    excerpt: { en: 'UGC video ads convert better and cost less than studio-produced creative. Here’s why brands are shifting budget from traditional ads to creator-made content.', zh: 'UGC 视频转化更高、成本更低。品牌为何将预算从传统广告转向达人内容。' },
    date: { en: 'Mar 25, 2026', zh: '2026 年 3 月 25 日' }, read: { en: '8 min read', zh: '8 分钟阅读' },
    image: 'hero-9-ugc-video-vs-traditional-ads.png',
  },
  {
    slug: 'how-dtc-brands-use-tiktok-shop',
    cat: { en: 'DTC · STRATEGY', zh: 'DTC · 策略' },
    title: { en: 'How DTC Brands Are Using TikTok Shop to Scale', zh: 'DTC 品牌如何用 TikTok Shop 放量' },
    excerpt: { en: 'DTC brands are using TikTok Shop as a content engine that drives sales on and off the platform.', zh: 'DTC 品牌把 TikTok Shop 当作内容引擎，驱动站内与跨渠道销售。' },
    date: { en: 'Mar 18, 2026', zh: '2026 年 3 月 18 日' }, read: { en: '8 min read', zh: '8 分钟阅读' },
    image: 'hero-8-how-dtc-brands-use-tiktok-shop.png',
  },
  {
    slug: 'is-tiktok-shop-worth-it-for-brands',
    cat: { en: 'STRATEGY · 2026', zh: '策略 · 2026' },
    title: { en: 'Is TikTok Shop Worth It for Brands in 2026?', zh: '2026 年 TikTok Shop 还值不值得做？' },
    excerpt: { en: 'TikTok Shop hit $64B in global GMV in 2025 and is projected to reach $112B in 2026. Here’s how to know if it’s the right channel for your brand.', zh: '2025 年 TikTok Shop 全球 GMV 达 640 亿美元，2026 预计 1120 亿。判断是否适合你品牌的几个问题。' },
    date: { en: 'Feb 25, 2026', zh: '2026 年 2 月 25 日' }, read: { en: '9 min read', zh: '9 分钟阅读' },
    image: 'hero-7-is-tiktok-shop-worth-it-for-brands.png',
  },
  {
    slug: 'tiktok-shop-management-what-to-expect',
    cat: { en: 'AGENCY · MANAGEMENT', zh: '代理 · 全托管' },
    title: { en: 'TikTok Shop Management: What Brands Should Expect from an Agency', zh: 'TikTok Shop 全托管：品牌应该期待代理交付什么' },
    excerpt: { en: "Thinking about hiring a TikTok Shop management agency? Here’s what a good partner actually delivers, what it costs, and how to evaluate results.", zh: '考虑找 TikTok Shop 全托管代理？好的合作伙伴会交付什么、如何计费、怎么评估结果。' },
    date: { en: 'Jan 8, 2026', zh: '2026 年 1 月 8 日' }, read: { en: '9 min read', zh: '9 分钟阅读' },
    image: 'hero-6-tiktok-shop-management-what-to-expect.png',
  },
  {
    slug: 'signs-your-brand-is-ready-for-tiktok-shop',
    cat: { en: 'STRATEGY · READINESS', zh: '策略 · 准备度' },
    title: { en: '5 Signs Your Brand Is Ready for TikTok Shop', zh: '品牌准备好上 TikTok Shop 的 5 个信号' },
    excerpt: { en: 'Not every brand is ready for TikTok Shop. Here are 5 signals that your product, team, and margins are set up to succeed on the platform.', zh: '并不是每个品牌都适合现在上 TikTok Shop。5 个信号帮你判断产品、团队和利润率是否准备就绪。' },
    date: { en: 'Dec 3, 2025', zh: '2025 年 12 月 3 日' }, read: { en: '7 min read', zh: '7 分钟阅读' },
    image: 'hero-5-signs-your-brand-is-ready-for-tiktok-shop.png',
  },
  {
    slug: 'amazon-sellers-expand-to-tiktok-shop',
    cat: { en: 'AMAZON SELLERS · NEW CHANNEL', zh: '亚马逊卖家 · 新渠道' },
    title: { en: 'Amazon Sellers: Why TikTok Shop Is Your Next Sales Channel', zh: '亚马逊卖家：TikTok Shop 为什么是你的下一个销售渠道' },
    excerpt: { en: 'Already selling on Amazon? TikTok Shop can drive new customer discovery, generate content for your Amazon listings, and diversify your revenue.', zh: '已经在亚马逊卖？TikTok Shop 可以带来新客发现、为 Listing 产出内容、多元化收入。' },
    date: { en: 'Nov 10, 2025', zh: '2025 年 11 月 10 日' }, read: { en: '8 min read', zh: '8 分钟阅读' },
    image: 'hero-4-amazon-sellers-expand-to-tiktok-shop.png',
  },
  {
    slug: 'tiktok-shop-affiliate-program-brand-guide',
    cat: { en: 'AFFILIATE · BRAND GUIDE', zh: '联盟 · 品牌指南' },
    title: { en: "TikTok Shop Affiliate Program: A Brand's Complete Guide", zh: 'TikTok Shop 联盟计划：品牌完整指南' },
    excerpt: { en: "Everything brands need to know about TikTok Shop’s affiliate program: how it works, commission rates, creator tiers, and how to build a program that drives consistent sales.", zh: 'TikTok Shop 联盟计划全解析：运作机制、佣金设定、达人分级以及如何搭建可持续出单的项目。' },
    date: { en: 'Oct 8, 2025', zh: '2025 年 10 月 8 日' }, read: { en: '10 min read', zh: '10 分钟阅读' },
    image: 'hero-3-tiktok-shop-affiliate-program-brand-guide.png',
  },
  {
    slug: 'tiktok-shop-product-listing-optimization',
    cat: { en: 'SHOP OPS · CONVERSION', zh: '店铺运营 · 转化' },
    title: { en: 'TikTok Shop Product Listing Optimization: Convert Creator Traffic', zh: '达人把流量带来了，TikTok Shop 商品页接得住吗？' },
    excerpt: { en: 'Creator content can drive traffic, but the product page has to convert it. A practical audit for titles, images, benefits, offers, reviews, and FAQ.', zh: '达人内容负责带来兴趣，商品页负责让兴趣变成订单。拆解主图、标题、卖点、offer、评价和 FAQ 怎么接住流量。' },
    date: { en: 'Sep 29, 2025', zh: '2025 年 9 月 29 日' }, read: { en: '10 min read', zh: '10 分钟阅读' },
    image: 'hero-tiktok-shop-product-listing-optimization.png',
  },
  {
    slug: 'how-to-choose-tiktok-shop-agency-as-creator',
    cat: { en: 'CREATORS · AGENCY GUIDE', zh: '达人 · 选代理机构' },
    title: { en: 'How to Choose a TikTok Shop Agency as a Creator', zh: '达人如何选择 TikTok Shop 代理机构' },
    excerpt: { en: "Not all TikTok Shop agencies treat creators the same. Here’s what to look for, what to avoid, and how the right partnership grows your affiliate income.", zh: '不同代理机构对待达人的方式差异很大。该看什么、避开什么、怎么谈出更高佣金。' },
    date: { en: 'Sep 15, 2025', zh: '2025 年 9 月 15 日' }, read: { en: '7 min read', zh: '7 分钟阅读' },
    image: 'hero-2-how-to-choose-tiktok-shop-agency-as-creator.png',
  },
  {
    slug: 'what-does-a-tiktok-shop-agency-do',
    cat: { en: 'AGENCY · OVERVIEW', zh: '代理 · 概览' },
    title: { en: 'What Does a TikTok Shop Agency Do?', zh: 'TikTok Shop 代理机构到底在做什么？' },
    excerpt: { en: 'A TikTok Shop agency handles creator recruitment, affiliate management, shop operations, and content strategy so brands can focus on product.', zh: '代理机构负责达人招募、联盟管理、店铺运营和内容策略，让品牌专注产品。' },
    date: { en: 'Aug 20, 2025', zh: '2025 年 8 月 20 日' }, read: { en: '8 min read', zh: '8 分钟阅读' },
    image: 'hero-1-what-does-a-tiktok-shop-agency-do.png',
  },
  {
    slug: 'tiktok-shop-sample-seeding-strategy',
    cat: { en: 'CREATORS · SAMPLE SEEDING', zh: '达人 · 寄样策略' },
    title: { en: 'TikTok Shop Sample Seeding Strategy for Brands', zh: 'TikTok Shop 寄样不是撒样品：品牌怎么把样品变成内容' },
    excerpt: { en: 'How brands can turn samples into creator content with better vetting, briefs, tracking, follow-up, affiliate links, and reuse.', zh: '寄样不是谁申请就寄。品牌要先筛达人、写清 brief、跟进物流和发布，把样品变成可复用内容。' },
    date: { en: 'Feb 18, 2025', zh: '2025 年 2 月 18 日' }, read: { en: '9 min read', zh: '9 分钟阅读' },
    image: 'hero-tiktok-shop-sample-seeding-strategy.png',
  },
  {
    slug: 'tiktok-shop-us-launch-checklist',
    cat: { en: 'CROSS-BORDER · U.S. LAUNCH', zh: '出海 · 美国上线' },
    title: { en: 'TikTok Shop U.S. Launch Checklist for Cross-Border Brands', zh: '出海品牌做美国 TikTok Shop，第一步到底该准备什么？' },
    excerpt: { en: 'A practical launch checklist for cross-border brands preparing U.S. shop setup, product pages, creator seeding, logistics, and go-live cadence.', zh: '出海品牌不是开个店就结束。先把美国市场判断、商品页、物流、达人寄样和上线节奏准备好。' },
    date: { en: 'Oct 22, 2024', zh: '2024 年 10 月 22 日' }, read: { en: '9 min read', zh: '9 分钟阅读' },
    image: 'hero-tiktok-shop-us-launch-checklist.png',
  },
];
window.BLOG_POSTS = BLOG_POSTS;

const BlogList = ({ lang }) => {
  return (
    <section style={blStyles.wrap}>
      <div style={blStyles.inner}>
        {BLOG_POSTS.map(p => (
          <a key={p.slug} href={`blog/${p.slug}.html${lang === 'zh' ? '?lang=zh' : ''}`} style={blStyles.card} className="blog-card">
            {p.image && (
              <div style={blStyles.thumb}>
                <img src={`blog/${p.image}`} alt={p.title.en} style={blStyles.thumbImg}/>
              </div>
            )}
            <div style={blStyles.cat}>{p.cat[lang]}</div>
            <h2 style={blStyles.title} className="blog-card-title">{p.title[lang]}</h2>
            <p style={blStyles.excerpt}>{p.excerpt[lang]}</p>
            <div style={blStyles.meta}>
              <span>{p.date[lang]}</span>
              <span style={blStyles.dot}>·</span>
              <span>{p.read[lang]}</span>
              <span style={blStyles.arrow}>
                <i data-lucide="arrow-right" style={{ width: 16, height: 16 }}/>
              </span>
            </div>
          </a>
        ))}
      </div>
      <style>{`
        .blog-card { transition: border-color .25s, transform .25s; }
        .blog-card:hover { border-color: rgba(255,20,147,.5) !important; }
        .blog-card:hover .blog-card-title { background: linear-gradient(90deg,#FF1493,#9B30FF,#00E5FF); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; }
      `}</style>
    </section>
  );
};
const blStyles = {
  wrap: { background: '#000', padding: '80px 0 100px' },
  inner: { maxWidth: 760, margin: '0 auto', padding: '0 32px', display: 'flex', flexDirection: 'column', gap: 20 },
  card: { display: 'block', textDecoration: 'none', color: '#fff', background: '#0A0A0A', border: '1px solid rgba(255,255,255,.08)', borderRadius: 18, padding: '36px 36px 32px', overflow: 'hidden' },
  thumb: { margin: '-36px -36px 28px', height: 220, overflow: 'hidden' },
  thumbImg: { width: '100%', height: '100%', objectFit: 'cover', display: 'block' },
  cat: { fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.16em', textTransform: 'uppercase', color: '#FF1493', marginBottom: 18 },
  title: { fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(28px, 3vw, 38px)', lineHeight: 1.05, letterSpacing: '-.01em', textTransform: 'uppercase', margin: '0 0 16px', color: '#fff' },
  excerpt: { fontFamily: 'var(--font-sans)', fontSize: 16, lineHeight: 1.55, color: 'rgba(255,255,255,.7)', margin: '0 0 22px' },
  meta: { display: 'flex', alignItems: 'center', gap: 10, fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,.5)' },
  dot: { opacity: .5 },
  arrow: { marginLeft: 'auto', color: '#FF1493', display: 'inline-flex' },
};
window.BlogList = BlogList;
