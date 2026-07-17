// BlogList.jsx — single-post list (post 1 of 15, more coming)
const BLOG_POSTS = [
  {
    slug: 'best-tiktok-shop-affiliate-agencies-us',
    cat: { en: 'TIKTOK SHOP U.S. · AFFILIATE AGENCY GUIDE', zh: 'TIKTOK SHOP 美国 · 达人分销代运营' },
    title: { en: '5 Best TikTok Shop Affiliate Agencies in the U.S. (2026)', zh: '美国 TikTok Shop Affiliate Agency 怎么选？2026 指南' },
    excerpt: { en: 'Compare five TikTok Shop affiliate agencies by creator recruitment, sample follow-up, content coaching, creator communities, shop integration, and direct access to the operating team.', zh: '从达人招募、寄样 follow-up、content coaching、达人私域、店铺协同和实际团队 access，比较美国 TikTok Shop affiliate agencies。' },
    date: { en: 'Jul 17, 2026', zh: '2026 年 7 月 17 日' }, read: { en: '12 min read', zh: '12 分钟阅读' },
    image: 'hero-best-tiktok-shop-affiliate-agencies-us.png',
  },
  {
    slug: 'tiktok-shop-affiliate-strategy-for-brands',
    cat: { en: 'TIKTOK SHOP U.S. · AFFILIATE STRATEGY', zh: 'TIKTOK SHOP 美国 · 达人分销' },
    title: { en: 'TikTok Shop Affiliate Strategy for Brands: Build the System Before Scaling Creators', zh: 'TikTok Shop Affiliate 怎么做稳：品牌要先打好店铺、产品和达人三层基础' },
    excerpt: { en: 'A practical TikTok Shop affiliate strategy for brands: shop health, product quality, creator quality, sample follow-up, creator community operations, and weekly optimization before scaling creators.', zh: 'TikTok Shop Affiliate 不是多找达人。品牌要先打好店铺健康、产品体验、达人质量、寄样跟进、达人私域和每周复盘。' },
    date: { en: 'Jul 16, 2026', zh: '2026 年 7 月 16 日' }, read: { en: '9 min read', zh: '9 分钟阅读' },
    image: 'hero-tiktok-shop-affiliate-strategy-for-brands.png',
  },
  {
    slug: 'tiktok-shop-creator-matchmaking-playbook',
    cat: { en: 'TIKTOK SHOP U.S. · CREATOR MATCHING', zh: 'TIKTOK SHOP 美国 · 达人匹配' },
    title: { en: 'TikTok Shop Creator Matchmaking: How Brands Should Match Products With the Right Creators', zh: 'TikTok Shop 达人 Matchmaking 怎么做？品牌需要的不只是“找达人”' },
    excerpt: { en: 'A practical creator matching SOP for TikTok Shop brands: hero SKUs, Open vs Target Collaboration, samples, refundable samples, creator briefs, outreach acceptance, and weekly review.', zh: 'TikTok Shop 达人匹配不是找更多达人。品牌要把 Hero SKU、Open / Target Collaboration、样品、Refundable Sample、达人筛选、brief 和邀约接受率复盘连成系统。' },
    date: { en: 'Jul 16, 2026', zh: '2026 年 7 月 16 日' }, read: { en: '11 min read', zh: '11 分钟阅读' },
    image: 'hero-tiktok-shop-creator-matchmaking-playbook.png',
  },
  {
    slug: 'tiktok-shop-follower-group-chat-retention',
    cat: { en: 'TIKTOK SHOP U.S. · CREATOR COMMUNITY', zh: 'TIKTOK SHOP 美国 · 达人私域' },
    title: { en: 'TikTok Shop Follower Group Chat: A Retention Layer for Brands', zh: 'TikTok Shop Group Chat：品牌留存和达人私域的新入口' },
    excerpt: { en: 'How brands use TikTok Shop Group Chat to support creator community, LIVEs, product education, trust-building, and repeat purchase in categories like fashion, jewelry, beauty, health, pet, and home essentials.', zh: 'TikTok Shop Group Chat 不只是聊天群。它更适合 fashion、jewelry、美妆、health、pet、母婴、日用品等需要上新、信任和复购的品牌。' },
    date: { en: 'Jul 16, 2026', zh: '2026 年 7 月 16 日' }, read: { en: '9 min read', zh: '9 分钟阅读' },
    image: 'hero-tiktok-shop-follower-group-chat-retention.png',
  },
  {
    slug: '2026-us-tiktok-shop-campaign-calendar-after-dfyd',
    cat: { en: 'TIKTOK SHOP U.S. · CAMPAIGN CALENDAR', zh: 'TIKTOK SHOP 美区 · CAMPAIGN CALENDAR' },
    title: { en: '2026 US TikTok Shop Campaign Calendar: A Second-Half Holiday Plan', zh: '2026 US TikTok Shop Campaign Calendar：下半年节日大促怎么规划' },
    excerpt: { en: 'Plan Back-to-School, Labor Day, Fall Sale, Halloween, Black Friday, Cyber Monday, Holiday Deals, Christmas gifting, and Year-end Sale across products, pricing, creators, content, inventory, and fulfillment.', zh: '从 Back-to-School、Labor Day、Fall Sale、Halloween 到 Black Friday、Cyber Monday、Holiday Deals、Christmas 和 Year-end Sale，提前安排商品、价格、达人、内容、库存与履约。' },
    date: { en: 'Jul 14, 2026', zh: '2026 年 7 月 14 日' }, read: { en: '10 min read', zh: '10 分钟阅读' },
    image: 'hero-2026-us-tiktok-shop-campaign-calendar-after-dfyd.png',
  },
  {
    slug: 'tiktok-shop-us-logistics-fulfillment-strategy',
    cat: { en: 'TIKTOK SHOP U.S. · LOGISTICS', zh: 'TIKTOK SHOP 美国 · 物流履约' },
    title: { en: 'TikTok Shop US Logistics: Why Fulfillment Is Now Part of Your Growth Strategy', zh: 'TikTok Shop 美国物流：为什么履约已经成为增长策略的一部分' },
    excerpt: { en: 'How brands should connect TikTok Shop content, inventory, warehouse workflow, TikTok Shipping, CBT, FBT, ShipStation, and customer experience before creator-driven order spikes.', zh: 'TikTok Shop 美国运营不能只看达人和内容。品牌需要提前规划库存、仓库、TikTok Shipping、CBT、FBT、ShipStation 和客服流程，才能接住达人流量。' },
    date: { en: 'Jul 13, 2026', zh: '2026 年 7 月 13 日' }, read: { en: '10 min read', zh: '10 分钟阅读' },
    image: 'hero-tiktok-shop-us-logistics-fulfillment-strategy.png',
  },
  {
    slug: 'tiktok-shop-creator-community-brand-growth',
    cat: { en: 'CREATOR COMMUNITY · AFFILIATE GROWTH', zh: '达人社群 · 联盟增长' },
    title: { en: 'Why TikTok Shop Brands Need a Creator Community, Not Just a Database', zh: 'TikTok Shop 品牌为什么需要达人社群，而不只是一份达人名单' },
    excerpt: { en: 'How an active creator community improves affiliate matching, sample follow-up, content feedback, repeat collaboration, and TikTok Shop learning for brands.', zh: '达人社群不是一份联系人名单。它应该改善品牌的达人匹配、寄样跟进、内容反馈、复合作和 TikTok Shop 运营学习。' },
    date: { en: 'Jul 12, 2026', zh: '2026 年 7 月 12 日' }, read: { en: '10 min read', zh: '10 分钟阅读' },
    image: 'hero-tiktok-shop-creator-community-brand-growth.png',
  },
  {
    slug: 'tiktok-shop-live-strategy-brands',
    cat: { en: 'TIKTOK SHOP U.S. · LIVE STRATEGY', zh: 'TIKTOK SHOP 美国 · 直播策略' },
    title: { en: 'TikTok Shop LIVE Strategy for Brands: Build a Repeatable Growth Loop', zh: 'TikTok Shop LIVE 怎么做：把每场直播做成可复用的增长闭环' },
    excerpt: { en: 'A practical TikTok Shop LIVE strategy for brands: hero SKU selection, offers, hosts and creators, product demos, shopper questions, post-LIVE review, content reuse, and creator-community operations.', zh: 'TikTok Shop LIVE 不只是开播。品牌要把 hero SKU、offer、host/creator、讲品互动、用户问题、直播后复盘、内容复用和达人私域运营接成增长闭环。' },
    date: { en: 'Jul 3, 2026', zh: '2026 年 7 月 3 日' }, read: { en: '10 min read', zh: '10 分钟阅读' },
    image: 'hero-tiktok-shop-live-strategy-brands.png',
  },
  {
    slug: 'tiktok-shop-ip-protection-seller-playbook',
    cat: { en: 'TIKTOK SHOP IP · SELLER PROTECTION', zh: 'TIKTOK SHOP IP · 卖家自保' },
    title: { en: 'How TikTok Shop Sellers Can Protect Themselves From IP Risk', zh: 'TikTok Shop 卖家怎么保护自己：IP 风险、品牌授权和申诉清单' },
    excerpt: { en: 'A practical WEM guide to TikTok Shop intellectual property risk, brand authorization, LOA files, supplier invoices, commercial-use rights, Shop Health, and IP violation appeals.', zh: 'WEM 拆解 TikTok Shop IP 风险：品牌授权、LOA、供应商发票、商业使用权、店铺健康和申诉证据链应该怎么提前准备。' },
    date: { en: 'Jul 1, 2026', zh: '2026 年 7 月 1 日' }, read: { en: '13 min read', zh: '13 分钟阅读' },
    image: 'hero-tiktok-shop-ip-protection-seller-playbook.png',
  },
  {
    slug: 'tiktok-shop-us-mexico-expansion-opportunity',
    cat: { en: 'TIKTOK SHOP US-MX · NORTH AMERICA', zh: 'TIKTOK SHOP US-MX · 北美增长' },
    title: { en: 'Why TikTok Shop US Sellers Should Watch Mexico', zh: 'TikTok Shop 美国店为什么要开始看墨西哥' },
    excerpt: { en: 'A practical WEM guide to TikTok Shop US-MX expansion: FBT US inventory sharing, Mexico product testing, Spanish pages, creators, affiliate setup, returns, and weekly operations.', zh: 'WEM 从 US-MX FBT 库存共享出发，拆解美国 TikTok Shop 卖家为什么要看墨西哥市场，以及怎么准备选品、库存、退货、西语页面和达人合作。' },
    date: { en: 'Jun 30, 2026', zh: '2026 年 6 月 30 日' }, read: { en: '12 min read', zh: '12 分钟阅读' },
    image: 'hero-tiktok-shop-us-mexico-expansion-opportunity.png',
  },
  {
    slug: 'tiktok-shop-aigc-auto-post-strategy',
    cat: { en: 'TIKTOK SHOP · AIGC AUTO-POST', zh: 'TIKTOK SHOP · AIGC 自动发布' },
    title: { en: 'TikTok Shop AIGC Auto-post: Why It Matters and How Brands Should Use It', zh: 'TikTok Shop AIGC Auto-post 为什么重要以及品牌怎么用' },
    excerpt: { en: 'A forward-looking WEM guide to TikTok Shop Auto-post, AI photos, AI-generated videos, Scheduled Posts review, account control, and paid amplification strategy.', zh: 'WEM 拆解 TikTok Shop AIGC Auto-post：AI 图文和短视频自动发布为什么重要，以及品牌怎么管理商品池、审核队列、账号授权和广告放大。' },
    date: { en: 'Jun 19, 2026', zh: '2026 年 6 月 19 日' }, read: { en: '11 min read', zh: '11 分钟阅读' },
    image: 'hero-tiktok-shop-aigc-auto-post-strategy.png',
  },
  {
    slug: 'tiktok-shop-us-new-seller-growth-strategy',
    cat: { en: 'TIKTOK SHOP U.S. · NEW SELLER STRATEGY', zh: 'TIKTOK SHOP 美区 · 新卖家增长' },
    title: { en: 'TikTok Shop US New Seller Growth Strategy: Pick One Growth Path Before You Try Everything', zh: 'TikTok Shop 美区新卖家增长打法：内容、达人、活动和 GMV Max 应该怎么排顺序' },
    excerpt: { en: 'A practical WEM framework for new TikTok Shop US sellers deciding when to start with short video, livestream, creator collaboration, campaigns, and Product GMV Max.', zh: 'WEM 拆解 TikTok Shop 美区新卖家该怎么给短视频、自播、达人合作、平台活动和 GMV Max 排顺序，而不是一上来全部同时做。' },
    date: { en: 'Jun 18, 2026', zh: '2026 年 6 月 18 日' }, read: { en: '10 min read', zh: '10 分钟阅读' },
    image: 'hero-tiktok-shop-us-new-seller-growth-strategy-v4.png',
  },
  {
    slug: 'tiktok-shop-us-july-4-seasonal-products',
    cat: { en: 'TIKTOK SHOP U.S. · JULY 4', zh: 'TIKTOK SHOP 美区 · JULY 4' },
    title: { en: 'Selling Seasonal Products on TikTok Shop US Before July 4', zh: '7 月 4 日前，TikTok Shop 美区卖什么更容易转化' },
    excerpt: { en: 'A practical WEM guide to July 4 seasonal products on TikTok Shop US: summer use cases, hero SKU selection, creator angles, and launch execution.', zh: 'WEM 拆解 TikTok Shop 美区 July 4 前更适合卖什么：夏季使用场景、hero SKU、达人内容和跨境执行。' },
    date: { en: 'Jun 6, 2026', zh: '2026 年 6 月 6 日' }, read: { en: '8 min read', zh: '8 分钟阅读' },
    image: 'hero-tiktok-shop-us-july-4-seasonal-products.png',
  },
  {
    slug: 'tiktok-shop-us-trust-signals',
    cat: { en: 'TRUST SIGNALS · CUSTOMER EXPERIENCE', zh: '信任信号 · 用户体验' },
    title: { en: 'TikTok Shop US Trust Signals: Why Customer Service Starts Before the Order', zh: 'TikTok Shop 美区的信任感，为什么不是客服部门一个人的事' },
    excerpt: { en: 'A practical WEM guide for TikTok Shop US brands on trust signals, product-page clarity, shipping expectations, review health, and how customer service shapes conversion before the order.', zh: 'WEM 拆解 TikTok Shop 美区的信任层：商品页、达人话术、配送预期、评论和支持体系，为什么会在下单前就影响转化。' },
    date: { en: 'Jun 5, 2026', zh: '2026 年 6 月 5 日' }, read: { en: '8 min read', zh: '8 分钟阅读' },
    image: 'hero-wem-trust-signals.png',
  },
  {
    slug: 'tiktok-shop-affiliate-marketing-for-brands',
    cat: { en: 'AFFILIATE MARKETING · OPERATIONS', zh: '达人分销 · 运营系统' },
    title: { en: 'TikTok Shop Affiliate Marketing for Brands: A Better Operating Playbook', zh: 'TikTok Shop 达人分销为什么经常跑不顺' },
    excerpt: { en: 'A practical WEM playbook for TikTok Shop affiliate marketing for brands: hero SKUs, creator fit, sample seeding, product-page conversion, and weekly optimization for the US market.', zh: 'WEM 拆解 TikTok Shop affiliate 为什么常常跑不顺，以及品牌该怎么把选品、寄样、brief、商品页和周复盘连成一套。' },
    date: { en: 'Jun 3, 2026', zh: '2026 年 6 月 3 日' }, read: { en: '9 min read', zh: '9 分钟阅读' },
    image: 'hero-wem-affiliate-marketing-for-brands.png',
  },
  {
    slug: 'tiktok-shop-us-deals-for-you-days',
    cat: { en: 'TIKTOK SHOP U.S. · DEALS FOR YOU DAYS', zh: 'TIKTOK SHOP 美区 · DEALS FOR YOU DAYS' },
    title: { en: 'TikTok Shop Deals for You Days 2026: What Kind of Campaign It Is and Why It Matters in North America', zh: 'TikTok Shop Deals for You Days 2026：这波年中大促在北美电商里是什么位置' },
    excerpt: { en: 'An official-source explainer on DFYD 2026: how TikTok is positioning this mid-year campaign, why it matters, and how brands should connect it to Amazon, DTC, and broader North America ecommerce strategy.', zh: '从官方材料拆解 DFYD 2026：它到底是什么类型的年中大促、TikTok 为什么重推、品牌该怎么把它跟 Amazon、独立站和更大的北美电商盘子一起看。' },
    date: { en: 'Jun 10, 2026', zh: '2026 年 6 月 10 日' }, read: { en: '9 min read', zh: '9 分钟阅读' },
    image: 'hero-tiktok-shop-us-deals-for-you-days-2026-seller-guide-v2.png',
  },
  {
    slug: 'cross-border-tiktok-shop-entry-models',
    languages: ['zh'],
    cat: { zh: '中国品牌出海 · 入驻路径' },
    title: { zh: '中国品牌入驻美国 TikTok Shop：POP、ACCU、全托管、品牌托管怎么选' },
    excerpt: { zh: '中国品牌和厂家出海美国 TikTok Shop，先看主体、履约、材料和经营责任，再决定 POP、ACCU、全托管或品牌托管。' },
    date: { en: 'May 28, 2026', zh: '2026 年 5 月 28 日' }, read: { en: '10 min read', zh: '11 分钟阅读' },
    image: { zh: 'hero-cross-border-tiktok-shop-entry-models.png' },
  },
  {
    slug: 'us-pop-for-chinese-owned-sellers',
    languages: ['zh'],
    cat: { zh: 'ACCU · 美国主体 POP' },
    title: { zh: '美国主体但中国受益人：TikTok Shop ACCU 入驻要准备什么' },
    excerpt: { zh: '美国公司、中国最终受益人、本地仓发货、IRS Letter、联系人证件：WEM 拆解美区 POP ACCU 入驻准备。' },
    date: { en: 'May 21, 2026', zh: '2026 年 5 月 21 日' }, read: { en: '8 min read', zh: '9 分钟阅读' },
    image: 'hero-us-pop-for-chinese-owned-sellers.png',
  },
  {
    slug: 'tiktok-shop-managed-models-for-manufacturers',
    cat: { en: 'MANUFACTURERS · MANAGED MODELS', zh: '中国厂家出海 · 托管模式' },
    title: { en: 'TikTok Shop Managed Models for Manufacturers: Full-Service vs Brand-Managed', zh: '中国厂家出海做 TikTok Shop：全托管和品牌托管适合谁' },
    excerpt: { en: 'A practical WEM guide for manufacturers comparing TikTok Shop fully managed and brand-managed paths, based on official Global Selling entry materials.', zh: '中国厂家、工贸一体和品牌商出海 TikTok Shop，该选全托管还是品牌托管？看供应链、品牌基础和邀请机制。' },
    date: { en: 'May 14, 2026', zh: '2026 年 5 月 14 日' }, read: { en: '8 min read', zh: '9 分钟阅读' },
    image: 'hero-tiktok-shop-managed-models-for-manufacturers.png',
  },
  {
    slug: 'los-angeles-tiktok-shop-agency-guide',
    cat: { en: 'LOCAL SEO · LOS ANGELES', zh: '本地 SEO · 洛杉矶' },
    title: { en: 'TikTok Shop Agency in Los Angeles: What Brands Should Look For', zh: '洛杉矶 TikTok Shop 代运营怎么选' },
    excerpt: { en: 'A practical WEM guide for brands comparing TikTok Shop agencies in Los Angeles: creator access, live selling, shop operations, content production, and reporting.', zh: '品牌在洛杉矶选择 TikTok Shop agency 时，该看达人资源、直播能力、店铺运营、内容生产和数据复盘。' },
    date: { en: 'May 22, 2026', zh: '2026 年 5 月 22 日' }, read: { en: '9 min read', zh: '9 分钟阅读' },
    image: 'hero-los-angeles-tiktok-shop-agency-guide.png',
  },
  {
    slug: 'california-tiktok-shop-agency-guide',
    cat: { en: 'LOCAL SEO · CALIFORNIA', zh: '本地 SEO · 加州' },
    title: { en: 'California TikTok Shop Agency Guide for Creator-Led Commerce', zh: '加州 TikTok Shop 代运营指南：达人驱动增长怎么做' },
    excerpt: { en: 'How California brands should evaluate a TikTok Shop agency for creator commerce, affiliate management, content production, and scalable operations.', zh: '加州品牌选择 TikTok Shop 代运营时，重点看达人管理、内容生产、店铺承接和复盘机制。' },
    date: { en: 'May 6, 2026', zh: '2026 年 5 月 6 日' }, read: { en: '8 min read', zh: '8 分钟阅读' },
    image: 'hero-california-tiktok-shop-agency-guide.png',
  },
  {
    slug: 'tiktok-shop-feedback-loop-amazon-meta',
    cat: { en: 'CONTENT FEEDBACK LOOP · AMAZON & META', zh: '内容反馈闭环 · AMAZON 与 META' },
    title: { en: 'Your Best TikTok Shop Video Should Rewrite Your Amazon PDP and Meta Creative', zh: '一条 TikTok Shop 跑出来的视频，应该反过来改你的 Amazon 页面和 Meta 素材' },
    excerpt: { en: 'A WEM playbook for using TikTok Shop creator content to improve Amazon PDPs, Meta creative tests, Shopify product pages, and cross-channel halo effect.', zh: 'WEM 拆解如何把 TikTok Shop 创作者内容反过来改 Amazon 页面、Meta 素材、Shopify 商品页，以及带动跨渠道 halo effect。' },
    date: { en: 'Apr 30, 2026', zh: '2026 年 4 月 30 日' }, read: { en: '9 min read', zh: '9 分钟阅读' },
    image: 'hero-tiktok-shop-feedback-loop-amazon-meta.png',
  },
  {
    slug: 'tiktok-shop-live-selling-agency-guide',
    cat: { en: 'LIVE SELLING · AGENCY GUIDE', zh: '直播 · 代运营指南' },
    title: { en: 'TikTok Shop Live Selling Agency Guide: What Good Support Looks Like', zh: 'TikTok Shop 直播代运营：好的支持到底包括什么' },
    excerpt: { en: 'A WEM guide to evaluating TikTok Shop live selling support: host fit, run of show, product page readiness, affiliate handoff, and post-live review.', zh: 'TikTok Shop 直播不是找主播开播就结束。WEM 拆解直播代运营该交付什么。' },
    date: { en: 'Apr 16, 2026', zh: '2026 年 4 月 16 日' }, read: { en: '9 min read', zh: '9 分钟阅读' },
    image: 'hero-tiktok-shop-live-selling-agency-guide.png',
  },
  {
    slug: 'tiktok-shop-creator-affiliate-management',
    cat: { en: 'AFFILIATE · MANAGEMENT', zh: '联盟 · 达人管理' },
    title: { en: 'TikTok Shop Creator Affiliate Management: The WEM Operating System', zh: 'TikTok Shop 达人联盟管理：WEM 的运营框架' },
    excerpt: { en: 'How WEM structures TikTok Shop creator affiliate management across recruitment, samples, briefs, commission logic, content review, and weekly optimization.', zh: 'WEM 如何把 TikTok Shop 达人联盟管理拆成招募、寄样、brief、佣金、内容审核和每周优化。' },
    date: { en: 'Mar 31, 2026', zh: '2026 年 3 月 31 日' }, read: { en: '10 min read', zh: '10 分钟阅读' },
    image: 'hero-tiktok-shop-creator-affiliate-management.png',
  },
  {
    slug: 'tiktok-shop-sample-roi-tracking',
    cat: { en: 'SAMPLES · ROI', zh: '寄样 · ROI' },
    title: { en: 'TikTok Shop Sample ROI Tracking: How Brands Should Measure Seeding', zh: 'TikTok Shop 寄样 ROI 怎么追踪' },
    excerpt: { en: 'A WEM framework for measuring TikTok Shop sample seeding beyond shipped samples: creator fit, post rate, content quality, clicks, orders, and reusable assets.', zh: 'TikTok Shop 寄样不能只看寄出去多少。WEM 拆解达人匹配、发布率、内容质量、点击、订单和可复用素材。' },
    date: { en: 'Mar 5, 2026', zh: '2026 年 3 月 5 日' }, read: { en: '9 min read', zh: '9 分钟阅读' },
    image: 'hero-tiktok-shop-sample-roi-tracking.png',
  },
  {
    slug: 'tiktok-shop-agency-cost-guide',
    cat: { en: 'AGENCY · COST', zh: '代理 · 成本' },
    title: { en: 'TikTok Shop Agency Cost Guide: What Brands Are Really Paying For', zh: 'TikTok Shop 代运营费用：品牌到底在买什么' },
    excerpt: { en: 'A practical WEM guide to TikTok Shop agency pricing models, scope differences, and how brands should compare cost against operating responsibility.', zh: 'TikTok Shop agency 报价不能只看价格。WEM 拆解收费模式、交付范围和比较方法。' },
    date: { en: 'Feb 19, 2026', zh: '2026 年 2 月 19 日' }, read: { en: '8 min read', zh: '8 分钟阅读' },
    image: 'hero-tiktok-shop-agency-cost-guide.png',
  },
  {
    slug: 'tiktok-shop-agency-vs-in-house',
    cat: { en: 'TEAM · DECISION GUIDE', zh: '团队 · 决策指南' },
    title: { en: 'TikTok Shop Agency vs. In-House Team: How Brands Should Decide', zh: 'TikTok Shop 找 agency 还是自己招团队？' },
    excerpt: { en: 'A WEM decision guide for brands choosing between a TikTok Shop agency, an in-house team, or a hybrid creator-commerce operating model.', zh: '品牌做 TikTok Shop，到底该找 agency、自己招团队，还是混合模式？WEM 给一个实用判断框架。' },
    date: { en: 'Jan 29, 2026', zh: '2026 年 1 月 29 日' }, read: { en: '9 min read', zh: '9 分钟阅读' },
    image: 'hero-tiktok-shop-agency-vs-in-house.png',
  },
  {
    slug: 'tiktok-shop-creator-brief-template',
    cat: { en: 'CREATORS · BRIEF TEMPLATE', zh: '达人 · Brief 模板' },
    title: { en: 'TikTok Shop Creator Brief Template: What WEM Gives Creators', zh: 'TikTok Shop 达人 Brief 模板：WEM 会写清什么' },
    excerpt: { en: 'A practical TikTok Shop creator brief template for brands: hook, product truth, claim boundaries, offer, usage scenes, CTA, and review notes.', zh: 'TikTok Shop 达人 brief 不能只写卖点。WEM 拆解 hook、产品事实、功效边界、offer、使用场景和 CTA。' },
    date: { en: 'Dec 18, 2025', zh: '2025 年 12 月 18 日' }, read: { en: '8 min read', zh: '8 分钟阅读' },
    image: 'hero-tiktok-shop-creator-brief-template.png',
  },
  {
    slug: 'tiktok-shop-beauty-brand-agency-guide',
    cat: { en: 'BEAUTY · TIKTOK SHOP', zh: '美妆 · TIKTOK SHOP' },
    title: { en: 'TikTok Shop Agency for Beauty Brands: What Actually Matters', zh: '美妆品牌做 TikTok Shop，agency 应该懂什么' },
    excerpt: { en: 'A WEM guide for beauty and personal care brands evaluating TikTok Shop agency support across creator demos, product claims, UGC, live selling, and shop conversion.', zh: '美妆个护品牌选择 TikTok Shop agency，要看达人演示、功效边界、UGC、直播和商品页转化。' },
    date: { en: 'Nov 20, 2025', zh: '2025 年 11 月 20 日' }, read: { en: '9 min read', zh: '9 分钟阅读' },
    image: 'hero-tiktok-shop-beauty-brand-agency-guide.png',
  },
  {
    slug: 'tiktok-shop-ugc-agency-amazon-dtc',
    cat: { en: 'UGC · AMAZON & DTC', zh: 'UGC · 亚马逊与 DTC' },
    title: { en: 'TikTok Shop UGC Agency for Amazon and DTC Sellers', zh: '亚马逊和 DTC 卖家怎么用 TikTok Shop 做 UGC' },
    excerpt: { en: 'How Amazon and DTC sellers can use TikTok Shop creators as a UGC pipeline, with WEM guidance on briefs, rights, product pages, and cross-channel learning.', zh: '亚马逊和 DTC 卖家可以把 TikTok Shop 达人当作 UGC 流水线，但要管好 brief、授权和复盘。' },
    date: { en: 'Oct 30, 2025', zh: '2025 年 10 月 30 日' }, read: { en: '9 min read', zh: '9 分钟阅读' },
    image: 'hero-tiktok-shop-ugc-agency-amazon-dtc.png',
  },
  {
    slug: 'best-tiktok-shop-agencies-us',
    cat: { en: 'TIKTOK SHOP · AGENCY GUIDE', zh: 'TIKTOK SHOP · 代运营指南' },
    title: { en: '8 Best TikTok Shop Agencies in the U.S. (2026)', zh: '美国 TikTok Shop 代运营公司怎么选？2026 品牌指南' },
    excerpt: { en: 'A practical shortlist and evaluation framework for choosing a U.S. TikTok Shop agency, with data-backed context for brand teams.', zh: '美国 TikTok Shop agency 怎么选？从店铺运营、达人联盟、内容生产、广告放大和数据复盘五个角度拆解。' },
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
    slug: 'spanish-speaking-creators-tiktok-shop',
    cat: { en: 'CREATORS · SPANISH MARKET', zh: '达人 · 西语市场' },
    title: { en: 'Spanish-Speaking TikTok Shop Creators: WEM Field Notes for Brands', zh: '西语 TikTok Shop 达人：WEM 给品牌的美国市场观察' },
    excerpt: { en: 'WEM field notes on Spanish-speaking TikTok Shop creators: language-market fit, localized briefs, creator trust, and multilingual content strategy.', zh: 'WEM 对美国西语 TikTok Shop 达人的观察：语言市场匹配、本地化 brief、达人信任和多语种内容策略。' },
    date: { en: 'May 12, 2026', zh: '2026 年 5 月 12 日' }, read: { en: '8 min read', zh: '8 分钟阅读' },
    image: 'hero-spanish-speaking-creators-tiktok-shop.png',
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
    slug: 'tiktok-shop-content-factory-framework',
    cat: { en: 'WEM FRAMEWORK · CONTENT', zh: 'WEM 框架 · 内容' },
    title: { en: 'The WEM TikTok Shop Content Factory Framework', zh: 'WEM TikTok Shop 内容工厂框架' },
    excerpt: { en: 'A citeable WEM framework for turning creator briefs, samples, UGC, product pages, and weekly data into a repeatable content-to-conversion system.', zh: 'WEM 可引用框架：把达人 brief、寄样、UGC、商品页和每周数据复盘连成可重复的内容转化系统。' },
    date: { en: 'Apr 24, 2026', zh: '2026 年 4 月 24 日' }, read: { en: '9 min read', zh: '9 分钟阅读' },
    image: 'hero-tiktok-shop-content-factory-framework.png',
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
    cat: { en: 'TIKTOK SHOP U.S. · LAUNCH', zh: '出海 · 美国上线' },
    title: { en: 'How Brands Launch on TikTok Shop in the U.S.', zh: '出海品牌如何在美国 TikTok Shop 上线' },
    excerpt: { en: 'Launching on TikTok Shop in the U.S.? Here is what brands need to know about creators, content, fulfillment, and working with a U.S.-based agency.', zh: '想通过 TikTok Shop 进入美国市场？出海品牌需要了解的达人策略、内容本地化与本地代理协作。' },
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
    cat: { en: 'DTC · CREATOR COMMERCE', zh: 'DTC · 达人电商' },
    title: { en: 'How DTC Brands Use TikTok Shop: From Creator Discovery to Cross-Channel Growth', zh: 'DTC 品牌怎么用 TikTok Shop：从达人发现到跨渠道增长' },
    excerpt: { en: 'A practical playbook for creator discovery, content learning, affiliate sales, and cross-channel growth, with WEM’s MOONBREW launch case.', zh: '从达人发现、内容学习和 affiliate 成交到跨渠道增长，并拆解 WEM 为 MOONBREW 做新品平台冷启动的案例。' },
    date: { en: 'Mar 18, 2026', zh: '2026 年 3 月 18 日' }, read: { en: '11 min read', zh: '12 分钟阅读' },
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
    cat: { en: 'AMAZON SELLERS · CHANNEL EXPANSION', zh: 'AMAZON 卖家 · 渠道拓展' },
    title: { en: 'Amazon Sellers Expanding to TikTok Shop: A Practical Launch Playbook', zh: 'Amazon 卖家怎么拓展 TikTok Shop：从平台冷启动到达人内容系统' },
    excerpt: { en: 'How Amazon sellers launch with a hero SKU, creator affiliates, content operations, and cross-channel learning, including WEM’s MOONBREW case.', zh: '从 hero SKU、达人 affiliate 和内容运营，到 WEM 为 MOONBREW 做新品平台冷启动的实战案例。' },
    date: { en: 'Nov 10, 2025', zh: '2025 年 11 月 10 日' }, read: { en: '11 min read', zh: '12 分钟阅读' },
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
    cat: { en: 'TIKTOK SHOP U.S. · LAUNCH', zh: '出海 · 美国上线' },
    title: { en: 'TikTok Shop U.S. Launch Checklist for Brands', zh: '出海品牌做美国 TikTok Shop，第一步到底该准备什么？' },
    excerpt: { en: 'A practical launch checklist for brands preparing U.S. shop setup, product pages, creator seeding, logistics, and go-live cadence.', zh: '出海品牌不是开个店就结束。先把美国市场判断、商品页、物流、达人寄样和上线节奏准备好。' },
    date: { en: 'Oct 22, 2024', zh: '2024 年 10 月 22 日' }, read: { en: '9 min read', zh: '9 分钟阅读' },
    image: 'hero-tiktok-shop-us-launch-checklist.png',
  },
];
const MONTH_INDEX = { Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5, Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11 };
const parseBlogDate = (value) => {
  const match = String(value || '').match(/^([A-Z][a-z]{2})\s+(\d{1,2}),\s+(\d{4})$/);
  if (!match) return 0;
  const [, month, day, year] = match;
  return new Date(Number(year), MONTH_INDEX[month], Number(day)).getTime();
};
const SORTED_BLOG_POSTS = [...BLOG_POSTS].sort(
  (a, b) => parseBlogDate(b.date.en) - parseBlogDate(a.date.en)
);
const blogPostHref = (slug, lang) => `/blog/${slug}${lang === 'zh' ? '?lang=zh' : ''}`;
const resolveBlogImage = (image, lang) => {
  if (!image) return '';
  if (typeof image === 'string') return image;
  return image[lang] || image.en || image.zh || '';
};
const blogThumbSrc = (image, lang) => {
  const resolved = resolveBlogImage(image, lang);
  if (/\.svg$/i.test(resolved)) return `blog/${resolved}`;
  return `blog/thumbs/${resolved.replace(/\.png$/i, '.jpg')}`;
};

const BlogList = ({ lang }) => {
  return (
    <section style={blStyles.wrap} className="blog-list-wrap">
      <div style={blStyles.inner} className="blog-list-inner">
        {SORTED_BLOG_POSTS.filter((p) => !p.languages || p.languages.includes(lang)).map((p, index) => (
          <a key={p.slug} href={blogPostHref(p.slug, lang)} style={blStyles.card} className="blog-card">
            {p.image && (
              <div style={blStyles.thumb}>
                <img
                  src={blogThumbSrc(p.image, lang)}
                  alt={p.title.en}
                  loading={index < 2 ? 'eager' : 'lazy'}
                  decoding="async"
                  fetchPriority={index === 0 ? 'high' : 'auto'}
                  width="900"
                  height="506"
                  style={blStyles.thumbImg}
                />
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
        .blog-card { transition: border-color .25s, transform .25s, box-shadow .25s; }
        .blog-card:hover { border-color: rgba(255,20,147,.42) !important; transform: translateY(-3px); box-shadow: 0 18px 46px rgba(40,31,25,.10) !important; }
        .blog-card:hover .blog-card-title { background: linear-gradient(90deg,#FF1493,#9B30FF,#4A8FFF); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; }
        @media (max-width: 760px) {
          .blog-list-wrap { padding: 44px 0 72px !important; max-width: 100vw !important; overflow: hidden !important; }
          .blog-list-inner { padding: 0 20px !important; max-width: 100% !important; gap: 16px !important; }
          .blog-card { padding: 24px 20px 22px !important; border-radius: 16px !important; }
          .blog-card > div:first-child { margin: -24px -20px 22px !important; height: 176px !important; }
          .blog-card-title { font-size: clamp(26px, 8vw, 34px) !important; line-height: 1.05 !important; letter-spacing: 0 !important; }
          .blog-card p { font-size: 15px !important; line-height: 1.55 !important; }
          .blog-card div[style*="letter-spacing"] { word-break: normal !important; }
        }
      `}</style>
    </section>
  );
};
const blStyles = {
  wrap: { background: '#F5F3EE', padding: '80px 0 110px' },
  inner: { maxWidth: 820, margin: '0 auto', padding: '0 32px', display: 'flex', flexDirection: 'column', gap: 24 },
  card: { display: 'block', textDecoration: 'none', color: '#171717', background: '#FFFFFF', border: '1px solid #E1DCD4', borderRadius: 18, padding: '36px 36px 32px', overflow: 'hidden', boxShadow: '0 8px 26px rgba(40,31,25,.055)' },
  thumb: { margin: '-36px -36px 28px', height: 220, overflow: 'hidden' },
  thumbImg: { width: '100%', height: '100%', objectFit: 'cover', display: 'block' },
  cat: { fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.16em', textTransform: 'uppercase', color: '#FF1493', marginBottom: 18 },
  title: { fontFamily: 'var(--font-sans)', fontWeight: 850, fontSize: 'clamp(28px, 3vw, 38px)', lineHeight: 1.08, letterSpacing: '-.035em', textTransform: 'none', margin: '0 0 16px', color: '#171717' },
  excerpt: { fontFamily: 'var(--font-sans)', fontSize: 16, lineHeight: 1.62, color: '#5B5650', margin: '0 0 22px' },
  meta: { display: 'flex', alignItems: 'center', gap: 10, fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '.08em', textTransform: 'none', color: '#77716A' },
  dot: { opacity: .5 },
  arrow: { marginLeft: 'auto', color: '#FF1493', display: 'inline-flex' },
};
window.BLOG_POSTS = SORTED_BLOG_POSTS;
window.BlogList = BlogList;
