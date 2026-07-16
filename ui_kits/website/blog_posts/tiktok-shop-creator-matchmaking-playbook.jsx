const { useState, useEffect } = React;

const P = (text) => ({ kind: 'p', text });
const UL = (items) => ({ kind: 'list', items });
const CTA = (label) => ({ kind: 'cta', label, href: 'https://zus03h0enw04.sg.larksuite.com/scheduler/03970278dd9a7925' });

const LABELS = {
  en: { back: 'Blog', toc: 'On this page', faq: 'Related Q&A', related: 'Related guides' },
  zh: { back: '博客', toc: '本文目录', faq: '相关 Q&A', related: '相关文章' },
};

const POSTS = {
  en: {
    meta: {
      title: 'TikTok Shop Creator Matchmaking: How Brands Should Match Products With the Right Creators',
      cat: 'TIKTOK SHOP U.S. · CREATOR MATCHING',
      author: 'WE Marketing Team',
      date: 'Jul 16, 2026',
      read: '11 min read',
      heroImage: 'hero-tiktok-shop-creator-matchmaking-playbook.png',
      heroAlt: 'TikTok Shop Creator Matchmaking Playbook strategy graphic',
    },
    sections: [
      {
        id: 'intro',
        h: 'Creator matching is not just finding more creators',
        body: [
          P('Many brands enter TikTok Shop Affiliate with one simple goal: find more creators. That goal makes sense. TikTok Shop growth is increasingly driven by creator videos, product demos, livestreams, affiliate links, and content that makes shoppers feel like they are seeing a product in real life.'),
          P('But finding more creators is not the same as building a creator matchmaking system. Good TikTok Shop creator matchmaking means matching the right product with the right creator, offer, sample strategy, brief, and follow-up rhythm. It is not a one-time outreach task. It is an operating system.'),
          P('TikTok Shop Seller University published an official guide called "8 Tips for Successful Seller & Creator Matchmaking." The guide is useful for sellers who want to understand Open Collaboration, Target Collaboration, free samples, creator filters, and Affiliate Center workflows. For brands, the bigger question is how to turn those tools into a repeatable creator-commerce engine.'),
        ],
      },
      {
        id: 'why-now',
        h: 'Why creator matchmaking matters now',
        body: [
          P('TikTok Shop is not a traditional search-first marketplace. Shoppers often discover products through short videos, livestreams, creator demos, and social proof before they ever search for a brand name.'),
          UL([
            'TikTok said U.S. TikTok Shop sales were up 120% year over year as of June 2025.',
            'TikTok reported more than 70 million products across 750+ categories on TikTok Shop.',
            'TikTok and GlobalData research found that 83% of TikTok Shop shoppers discovered a new product, and 70% discovered a new brand.',
            'Momentum Works and Tabcut reported that TikTok Shop U.S. GMV reached US$15.1 billion in 2025, up 68% year over year.',
            'The same Momentum Works / Tabcut report counted 15.4 million influencers and 803,500 stores in the U.S. TikTok Shop ecosystem in 2025.',
            'Momentum Works and Tabcut also reported that U.S. TikTok Shop sales in 2025 came from video, the Shop tab, and LIVE, with video contributing 50%, Shop tab 36%, and LIVE 14%.',
          ]),
          P('The takeaway is simple: TikTok Shop growth is not only about listing products. It is about content distribution, creator trust, product demonstration, live selling, and a shopping path that happens inside the app. That makes creator matchmaking a core growth function, not a side marketing task.'),
        ],
      },
      {
        id: 'not-biggest',
        h: 'Matchmaking is not about chasing the biggest creator',
        body: [
          P('Many sellers reduce creator selection to two questions: how many followers does this creator have, and will this creator promote my product? Those questions are too shallow.'),
          P('A stronger TikTok Shop creator evaluation should ask whether the creator has sold or featured similar products before, whether their audience matches the buyer profile, whether they can demonstrate the product naturally, whether they post consistently, and whether the product value, sample, and commission are strong enough for them to care.'),
          P('This is different from traditional KOL marketing. In TikTok Shop, many purchases happen through interest-based and content-driven discovery. A shopper may see a video, feel the product is useful, buy on impulse, and never follow the creator. The creator is not always a long-term influencer. Sometimes the creator is a good product demonstrator, a trusted reviewer, or simply the right person to make the product feel relevant in the feed.'),
          P('That is why audience fit can matter as much as category fit. A creator may not be perfectly vertical in the exact product category, but if their audience age, interests, lifestyle, and buying context match the product, they can still be worth testing. Perfectly vertical creators with strong data often ask for paid placement or higher collaboration terms. For new brands, a practical path is to test creators with strong content, matching audience, and adjacent category fit.'),
        ],
      },
      {
        id: 'sop',
        h: 'A practical TikTok Shop creator matchmaking SOP',
        body: [
          { kind: 'h3', text: 'Step 1: Choose one to three creator-friendly hero SKUs' },
          P('TikTok Shop is a strong platform for testing hero SKUs first. Brands should not open the entire catalog and expect creators to figure out what to promote. Most TikTok Shop affiliate collaborations are commission-based. The brand is not paying a guaranteed placement fee, so creators are not obligated to spend a long time studying a complicated product list. If the choice feels too hard, many creators will simply move on.'),
          P('A better starting point is to choose one to three hero SKUs based on inventory depth, product strength, visual appeal, margin, and ease of demonstration. The best affiliate products usually have a clear demo moment, a specific use case, enough inventory, enough margin for creator commission, stable sample shipping, and a product page that can convert creator traffic.'),
          { kind: 'h3', text: 'Step 2: Treat Open Collaboration as a signal, but make Target Collaboration the core' },
          P('TikTok Shop Seller University explains two collaboration models: Open Collaboration and Target Collaboration. Open Collaboration is useful because it signals that the product is open to affiliate collaboration, commission, and possibly samples. If a product does not have Open Collaboration at all, creators may assume the brand is not ready to work with them.'),
          P('But Open Collaboration is not a growth strategy by itself. Many strong creators will not proactively apply. They already have options. If a seller simply turns on Open Collaboration and waits, the result is often low application volume, inconsistent creator quality, or applications from creators who are not a good fit.'),
          UL([
            'Use Open Collaboration to show that the brand is ready to work with creators.',
            'Prepare samples and commission so the offer is worth considering.',
            'Manually review applications so samples do not get wasted.',
            'Put most of the effort into Target Collaboration with better-fit creators.',
            'Review which creator profiles, outreach messages, and offers get accepted.',
          ]),
          P('Open Collaboration is infrastructure. Target Collaboration is the real growth motion.'),
          { kind: 'h3', text: 'Step 3: Treat samples as an investment, not a giveaway' },
          P('Samples matter because creators need real product experience to create believable content. In the cold-start stage, samples are usually not the place to cut costs. If a product is new, the store has limited sales proof, or the brand is unknown, creators need a reason to trust the product enough to film it.'),
          P('That does not mean brands should auto-approve every request. For new products, manually review requests and prioritize creators with strong category or audience fit. For broad testing, use Open Collaboration and free samples, but keep manual review. For cost control, use refundable samples instead of broad auto-approval.'),
          P('Refundable samples can be useful for creators whose data is not yet impressive but who show real intent. The creator pays for the sample first, then gets refunded after meeting the agreed content or order requirement. Some brands may set the refund threshold at three or five orders; for cold-start testing, even one real order can be a meaningful signal.'),
          { kind: 'h3', text: 'Step 4: Screen creators by audience fit, category fit, content ability, and operating fit' },
          P('A simple scorecard should include category fit, audience fit, content fit, and operating fit. Category fit asks whether the creator already makes content in this product space. Audience fit asks whether their viewer profile matches the buyer. Content fit asks whether they can make demos, reviews, tutorials, comparisons, or real-use videos. Operating fit asks whether they post consistently and respond professionally.'),
          P('Follower count is only one signal. For TikTok Shop, a smaller creator with consistent output and real audience trust may be the better match.'),
          { kind: 'h3', text: 'Step 5: Use briefs and reference videos, not rigid scripts' },
          P('Creator content works because it feels like a recommendation, not a commercial. A strong TikTok Shop creator brief should include core product benefits, one to three proven opening hooks, reference videos, best use cases, compliance boundaries, shopper pain points, required product demonstration points, offer details, offer disclaimers, and dos and don\'ts for claims, price language, platform rules, and compliance.'),
          P('The brief should guide creators without forcing them to read a script. Reference videos are often more useful than a long written script because they show pacing, framing, demo style, and tone. Give creators several content angles and let them speak in their own voice.'),
          { kind: 'h3', text: 'Step 6: Track the 14-day content window' },
          P('TikTok Shop Seller University says creators generally have 14 days to post after receiving samples. That means sample management needs a tracking sheet: request date, approval date, shipping date, delivery date, expected content deadline, shoppable content URL, views, clicks, orders, GMV, and follow-up decision. Without this tracking, samples become a cost center. With tracking, they become a learning system.'),
          { kind: 'h3', text: 'Step 7: Review outreach acceptance before reviewing sales' },
          P('Many brands start by reviewing views, orders, and GMV. Those numbers matter, but in the matchmaking stage the first question is even earlier: what kind of creator actually accepts your invitation?'),
          P('This matters because seller invitation limits are finite, especially for stores that have not yet reached higher operating levels. If the team sends broad, unfocused invitations, it burns through quota before learning anything useful. Review which creator profiles are most likely to accept, which outreach message gets the best response, which commission and sample terms improve acceptance, which filters lead to higher-quality creators, and which creators look good on paper but rarely accept or rarely post.'),
          P('After that, review the content and sales layer: which SKUs creators accept, which creator types produce the strongest content, which hooks drive watch time and clicks, which videos get views but no orders, which creators deserve better commission, and which product-page issues block conversion. Early on, the goal is to find two signals: which creators are willing to accept the brand\'s invitation, and which product-creator-content combinations can produce real purchase behavior.'),
        ],
      },
      {
        id: 'wem-role',
        h: 'How WE Marketing helps',
        body: [
          P('Creator matchmaking looks simple from the outside. In practice, the difficult part is the operating layer between product, creator, sample, content, and performance.'),
          P('WE Marketing helps brands select creator-friendly hero SKUs, structure Open Collaboration and Target Collaboration, design commission and sample strategies, match products with creators from 8,000+ creator resources, write briefs with reference videos and compliance guidance, manage outreach and sample timelines, and review acceptance rate before wasting more invitation quota.'),
          P('WE Marketing\'s role is not to guarantee that every creator will accept or every video will sell. The value is improving efficiency and probability: better creator selection, better outreach, fewer wasted samples, faster follow-up, clearer briefs, and lower operating cost per useful creator test.'),
          CTA('Book a TikTok Shop creator matchmaking call ->'),
        ],
      },
      {
        id: 'sources',
        h: 'Sources and notes',
        body: [
          P('Primary source: TikTok Shop Seller University, "8 Tips for Successful Seller & Creator Matchmaking" (knowledge_id=6401096262616878). Supporting data sources: Momentum Works / Tabcut, "TikTok Shop U.S. GMV grew 68% to reach US$15.1B in 2025"; TikTok Newsroom, "TikTok Shop is where shoppers come to discover"; TikTok Newsroom, "TikTok Shop: A Home for Inspiration this Holiday Season."'),
          P('This article uses official and public materials as source signals, then translates them into a WE Marketing operating framework for U.S. TikTok Shop brands.'),
        ],
      },
    ],
    faqs: [
      { q: 'What is TikTok Shop creator matchmaking?', a: 'TikTok Shop creator matchmaking is the process of matching the right product with the right creator, commission, sample strategy, brief, and follow-up workflow so the creator can produce shoppable content that supports discovery, trust, clicks, and sales.' },
      { q: 'What is Open Collaboration on TikTok Shop?', a: 'Open Collaboration lets eligible creators discover and apply to promote a seller\'s products. It is useful as a cooperation signal and basic affiliate setup, but brands should not rely on it as the main growth motion.' },
      { q: 'What is Target Collaboration on TikTok Shop?', a: 'Target Collaboration lets sellers invite selected creators directly. It is usually the core action for serious creator matching because better creators often do not apply proactively.' },
      { q: 'Are free samples important for TikTok Shop affiliate marketing?', a: 'Yes, especially in cold start. Samples help creators experience the product and create believable content. Brands should still manually review requests and use refundable samples when they need cost control.' },
      { q: 'Should brands only work with large creators?', a: 'No. Follower count is only one signal. Micro and mid-tier creators with strong audience fit, good content, consistent posting, and real product relevance can be highly valuable on TikTok Shop.' },
      { q: 'What does WE Marketing do?', a: 'WE Marketing helps brands build the operating layer around TikTok Shop creator matching: hero SKU selection, creator filtering, outreach, samples, briefs, compliance guidance, affiliate terms, acceptance-rate review, and weekly performance learning.' },
      { q: 'Can WE Marketing guarantee creator sales?', a: 'No. Creator performance depends on product, price, content, audience, commission, inventory, logistics, product page, and timing. A good operating team improves matching quality, acceptance probability, execution speed, and learning efficiency, but no agency should guarantee every creator or video will produce sales.' },
    ],
    related: [
      { label: 'TikTok Shop Affiliate Marketing for Brands: A Better Operating Playbook', href: 'tiktok-shop-affiliate-marketing-for-brands' },
      { label: 'Why TikTok Shop Brands Need a Creator Community, Not Just a Database', href: 'tiktok-shop-creator-community-brand-growth' },
      { label: 'TikTok Shop Sample ROI Tracking: How Brands Should Measure Seeding', href: 'tiktok-shop-sample-roi-tracking' },
    ],
  },
  zh: {
    meta: {
      title: 'TikTok Shop 达人 Matchmaking 怎么做？品牌需要的不只是“找达人”',
      cat: 'TIKTOK SHOP 美国 · 达人匹配',
      author: 'WE Marketing Team',
      date: '2026 年 7 月 16 日',
      read: '11 分钟阅读',
      heroImage: 'hero-tiktok-shop-creator-matchmaking-playbook.png',
      heroAlt: 'TikTok Shop 达人 Matchmaking Playbook 策略图',
    },
    sections: [
      {
        id: '开头',
        h: '达人匹配不是找更多达人这么简单',
        body: [
          P('很多品牌做 TikTok Shop Affiliate 的时候，第一反应是：我要找更多达人。这个方向没有错。TikTok Shop 的增长确实越来越依赖达人内容、短视频、直播和真实使用场景。'),
          P('但只找更多达人，不等于做好了 seller and creator matchmaking。真正有效的 matchmaking，不是把产品链接发给一堆达人，也不是等平台自然带来申请。它是一套运营系统：选对商品，设计佣金和样品策略，筛选合适达人，给出清晰 brief，及时发样，追踪内容产出，再持续复盘。'),
          P('TikTok Shop Seller University 的官方指南《8 Tips for Successful Seller & Creator Matchmaking》很适合商家学习 Open Collaboration、Target Collaboration、样品设置、达人筛选和 Affiliate Center 使用路径。对品牌来说，更重要的问题是：怎样把这些平台功能变成一个可复制的达人增长系统？'),
        ],
      },
      {
        id: '为什么重要',
        h: '为什么现在更应该重视达人匹配',
        body: [
          P('TikTok Shop 不是传统货架电商。用户很多时候不是先搜索产品，再比较价格，而是在内容里被种草、被解释、被演示，然后直接进入购买路径。'),
          UL([
            'TikTok 官方表示，截至 2025 年 6 月，TikTok Shop 美国销售额同比增长 120%。',
            'TikTok 官方称，TikTok Shop 覆盖 750 多个类目、7000 万+商品。',
            'TikTok 与 GlobalData 的研究显示，83% 的 TikTok Shop 购物者在平台上发现了新产品，70% 发现了新品牌。',
            'Momentum Works 与 Tabcut 的报告显示，2025 年 TikTok Shop 美国 GMV 达到 151 亿美元，同比增长 68%。',
            '同一报告显示，2025 年美国 TikTok Shop 生态里有 1540 万 influencers 和 80.35 万 stores。',
            'Momentum Works 与 Tabcut 还提到，2025 年 TikTok Shop 美国销售结构中，Video 占 50%，Shop tab 占 36%，LIVE 占 14%。',
          ]),
          P('这些数字背后的意思很直接：TikTok Shop 的增长不是只靠上架产品。它靠内容分发、达人信任、产品演示、直播承接和平台内购买路径一起推动。'),
        ],
      },
      {
        id: '不是大达人',
        h: 'Matchmaking 不是“达人越大越好”',
        body: [
          P('很多商家会把 creator matching 简化成两个问题：这个达人粉丝多不多？这个达人愿不愿意带我的货？这两个问题太粗了。'),
          P('TikTok Shop 和传统 KOL marketing 不完全一样。很多带货视频的购买发生在兴趣电商和内容电商场景里：用户刷到一个视频，本来没有计划购买，但因为场景、情绪、演示和优惠产生了即时购买。用户买了产品，不一定会关注达人本人。'),
          P('所以 KOC、带货达人和真正的 influencer 不是一回事。粉丝量重要，但没有想象中那么重要。更关键的是 audience fit。有些达人未必和产品类目完全垂直，但如果粉丝年龄、兴趣、消费场景和产品目标用户很接近，而且内容质量好，也值得测试。'),
        ],
      },
      {
        id: 'sop',
        h: '一个简单的 TikTok Shop 达人 Matchmaking SOP',
        body: [
          { kind: 'h3', text: 'Step 1: 先选 1-3 个适合达人的 Hero SKUs' },
          P('TikTok 是一个适合先推 Hero SKU 的平台。品牌不要一开始把所有产品都丢给达人，让达人自己慢慢挑。大多数 TikTok Shop 达人合作是纯佣模式，品牌没有付坑位费，达人没有义务花很多时间帮你研究产品目录。如果产品太多、选择太难、卖点不清楚，达人很可能直接跳过。'),
          P('更好的方式是先选 1-3 个 Hero SKUs，围绕这几个产品集中测试。筛选时看库存深度、产品优势、视觉表现力、使用场景、价格和佣金、样品发货速度，以及商品页能不能承接达人带来的流量。'),
          { kind: 'h3', text: 'Step 2: Open Collaboration 是信号，Target Collaboration 才是核心' },
          P('Open Collaboration 更像一个合作信号：它告诉达人，这个产品愿意开放联盟合作、愿意给佣金、也可能提供样品。如果一个产品连 Open Collaboration 都没有，达人会更难判断品牌是否真的想合作。'),
          P('但 Open Collaboration 不能替代主动邀约。很多优质达人不会主动来申请，或者已经有很多合作选择。品牌如果只是把 Open Collaboration 放上去，然后等达人自己来，结果往往是申请量少、达人质量不稳定，或者来的都是不太匹配的人。'),
          UL([
            '用 Open Collaboration 释放合作信号。',
            '准备好样品和佣金，降低达人合作门槛。',
            '坚持手动审核申请，避免样品被浪费。',
            '把主要精力放在 Target Collaboration，主动邀请更合适的达人。',
            '每周复盘哪类达人、哪种话术、哪种 offer 更容易被接受。',
          ]),
          P('对新品牌来说，Open 是基础设施，Target 才是增长动作。'),
          { kind: 'h3', text: 'Step 3: 样品是投资，不是随便送' },
          P('冷启动阶段，样品基本不能省。尤其是新产品、新品牌、没有太多销量证明的时候，如果没有样品，达人很难判断产品值不值得拍。'),
          P('但样品也不能无限乱发。新品或早期测试要手动审核样品申请，优先给内容质量高、类目或受众匹配的达人。想扩大覆盖，可以用 Open Collaboration 加免费样品，但前提是坚持手动审核。担心样品浪费，可以引入 refundable sample，用它代替无门槛自动批准。'),
          P('Refundable Sample 对一些新达人或数据不够漂亮的达人很有价值。达人先购买样品，如果按要求发布内容或产生订单，品牌再退还样品费。退款门槛可以根据产品利润设置；冷启动测试时，1 单也可以作为合理门槛。'),
          { kind: 'h3', text: 'Step 4: 看 audience fit、category fit、content fit 和 operating fit' },
          P('达人筛选可以看四个维度：category fit、audience fit、content fit 和 operating fit。现实里没有那么多完美垂直、数据漂亮、又愿意纯佣合作的达人。对于新品牌、新产品，或者比较难建联的商品，一个更现实的策略是：不要只找“类目完全一致”的达人，也可以找内容表现好、category 不完全一致、但 audience 一致的达人做测试。'),
          { kind: 'h3', text: 'Step 5: Brief 要给方向，也要给 reference video' },
          P('现在很多 brief 不会给逐字 script，这是对的。但如果只给一段产品介绍，达人也很难理解品牌到底想要什么。更好的方式是给 reference video。文字可以讲清楚卖点和边界，reference video 可以让达人更直观地理解内容节奏、开头方式、镜头语言、演示方法和真实感。'),
          P('一个好的 TikTok Shop creator brief 至少包括产品核心卖点、1-3 条 proven opening hooks、reference videos、使用场景、合规风险、目标人群、必须展示的使用方式、优惠 disclaimer，以及 dos and don\'ts。尤其是保健品、小家电、复杂功能产品，卖点和违规边界必须讲清楚。'),
          { kind: 'h3', text: 'Step 6: 把 14 天内容交付节奏纳入运营表' },
          P('官方指南里提到，达人收到样品后通常有 14 天发布内容。品牌不能发完样品就结束。运营团队应该跟踪样品申请日期、审核通过日期、发货日期、签收日期、预计内容发布日期、是否发布 shoppable content、内容链接、播放、互动、点击、订单和 GMV。'),
          { kind: 'h3', text: 'Step 7: 先复盘邀约接受率，再复盘内容和销售' },
          P('很多品牌一上来就复盘视频播放、订单和 GMV，这当然重要。但在 matchmaking 阶段，更前置的问题是：你邀约什么样的达人，才更容易被接受？'),
          P('商家的邀约额度是有限的，尤其是还没有完全成长起来的店铺。品牌不能无脑群发，不能把额度浪费在明显不匹配的人身上。第一层复盘应该看：什么样的达人最容易接受？什么样的话术、佣金和样品条件接受率更高？哪些筛选条件带来的达人质量最好？哪些达人画像看起来漂亮，但实际接受率低或内容产出差？'),
        ],
      },
      {
        id: '中国品牌',
        h: '中国品牌和工厂进入美国 TikTok Shop，要特别注意什么？',
        body: [
          P('很多中国品牌和制造型企业其实很适合 TikTok Shop。他们有真实优势：打样快、成本控制强、生产稳定、包装灵活、小批量测试快、产品迭代能力强，也能持续开发新品。'),
          P('但美国 TikTok Shop 不是把国内电商打法翻译一下就能跑通。常见问题包括产品卖点不符合美国用户表达习惯、商品页像参数表、达人 brief 太像广告脚本、样品发得慢、佣金没有竞争力、没有每周复盘。'),
          P('还有一个更细但很重要的问题：达人沟通方式。有些品牌一上来就写 Hi honey 或 Hi dear，这在美国达人沟通里很容易显得不专业。再加上时差问题，品牌早上起来回复时，美国达人那边可能已经晚上了。建联不是只发消息，而是要建立真正的 relationship。'),
          P('这也是为什么一个懂美国市场、也能中文沟通的本地运营团队很重要。它不是帮品牌“翻译资料”，而是帮助品牌用美国达人更自然接受的方式沟通，再把商品、达人、内容、样品、商品页和周复盘接起来。'),
        ],
      },
      {
        id: 'wem作用',
        h: 'WE Marketing 在这里能做什么？',
        body: [
          P('WE Marketing 可以帮助品牌从产品线里选出适合达人演示和 TikTok Shop 冷启动的 hero SKUs；设置 Open Collaboration 和 Target Collaboration 的产品、佣金和样品策略；从 8,000+ creator resources 中筛选更适合类目、内容风格和美国用户场景的达人；设计达人 brief；管理样品申请、发货、签收和内容交付节奏；跟进达人沟通、内容反馈和二次合作。'),
          P('WE Marketing 的角色不是保证每个达人都能约出来，也不是替品牌“买一批达人发帖”。更准确地说，是提高建联效率和合作概率，减少无效样品、无效邀约和无效沟通，把 TikTok Shop creator matchmaking 做成一套降本增效的运营系统。'),
          CTA('预约 TikTok Shop 达人匹配沟通 ->'),
        ],
      },
      {
        id: '来源',
        h: '来源和说明',
        body: [
          P('主要来源：TikTok Shop Seller University, "8 Tips for Successful Seller & Creator Matchmaking"（knowledge_id=6401096262616878）。数据来源包括 Momentum Works / Tabcut 的 TikTok Shop U.S. GMV 报告，以及 TikTok Newsroom 的 TikTok Shop discovery 和 holiday shopping 相关数据。'),
          P('本文使用官方和公开资料作为 source signal，再结合 WE Marketing 对美国 TikTok Shop 达人运营、样品、brief、outreach 和 weekly review 的经验，转化成品牌可执行的运营框架。'),
        ],
      },
    ],
    faqs: [
      { q: 'TikTok Shop creator matchmaking 是什么？', a: '它是把合适的产品、合适的达人、合适的佣金和样品策略、合适的内容 brief 匹配起来，让达人愿意创作 shoppable content，并帮助品牌获得内容曝光、点击、订单和复盘信号。' },
      { q: 'Open Collaboration 和 Target Collaboration 有什么区别？', a: 'Open Collaboration 更像公开合作信号，告诉达人品牌愿意开放联盟合作。Target Collaboration 是卖家主动邀请特定达人，更适合真正想做高质量匹配和提高合作成功率的品牌。' },
      { q: '免费样品一定要给吗？', a: '冷启动阶段通常很重要，但不应该无门槛乱发。品牌可以手动审核免费样品申请，也可以用 refundable sample 给数据不够漂亮但很有诚意的达人一个合作选项。' },
      { q: '筛选达人时粉丝量重要吗？', a: '粉丝量是信号之一，但不是最重要。TikTok Shop 带货更看 audience fit、内容能力、演示能力、发布稳定性和合作意愿。' },
      { q: 'WE Marketing 能解决什么问题？', a: 'WE Marketing 帮品牌提高达人建联效率和合作概率，降低无效邀约、无效样品和无效沟通成本，并把选品、达人筛选、样品、brief、outreach 和复盘连成系统。' },
    ],
    related: [
      { label: 'TikTok Shop 达人分销为什么经常跑不顺', href: 'tiktok-shop-affiliate-marketing-for-brands.html?lang=zh' },
      { label: 'TikTok Shop 品牌为什么需要达人社群，而不只是一份达人名单', href: 'tiktok-shop-creator-community-brand-growth.html?lang=zh' },
      { label: 'TikTok Shop 寄样 ROI 怎么追踪', href: 'tiktok-shop-sample-roi-tracking.html?lang=zh' },
    ],
  },
};

const App = () => {
  const getLang = () => new URLSearchParams(window.location.search).get('lang') === 'zh' ? 'zh' : 'en';
  const [lang, setLang] = useState(getLang());
  useEffect(() => {
    const sync = () => setLang(getLang());
    window.addEventListener('popstate', sync);
    return () => window.removeEventListener('popstate', sync);
  }, []);
  useEffect(() => {
    document.getElementById('seo-static-fallback')?.remove();
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    document.title = lang === 'zh'
      ? 'TikTok Shop 达人 Matchmaking 怎么做？| WE Marketing'
      : 'TikTok Shop Creator Matchmaking Playbook | WE Marketing';
  }, [lang]);
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(CursorStars, null),
    React.createElement(NavBar, { lang, onLang: setLang, basePath: '../' }),
    React.createElement(BlogPost, { ...POSTS[lang], labels: LABELS[lang] }),
    React.createElement(CtaFooter, { lang }),
    React.createElement(Footer, { lang, basePath: '../' })
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App, null));
