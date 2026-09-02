// BlogList.jsx — add one or more canonical `tags` to every new post.
const BLOG_POSTS = [{slug:'manage-20-tiktok-shop-skus-smart-assistant',tags:['tiktok-shop','shop-operations'],cat:{en:'TIKTOK SHOP U.S. · AI OPERATIONS',zh:'TIKTOK SHOP 美国站 · AI 运营'},title:{en:'Manage 20+ TikTok Shop SKUs With Smart Assistant Without Optimizing Everything',zh:'TikTok Shop 商品超过 20 个以后：如何用 Smart Assistant 排优先级'},excerpt:{en:'Prioritize Discover, List, Optimize, Diagnose, and Monitor work across a live multi-SKU catalog.',zh:'在多商品目录中，为发现、上架、优化、诊断与监控建立可执行优先级。'},date:{en:'Sep 1, 2026',zh:'2026 年 9 月 1 日'},read:{en:'16 min read',zh:'16 分钟阅读'},image:'hero-manage-20-tiktok-shop-skus-smart-assistant-v1.png'},{slug:'tiktok-shop-live-assortment',tags:['tiktok-shop','live','shop-operations'],cat:{en:'TIKTOK SHOP U.S. · LIVE OPERATIONS',zh:'TIKTOK SHOP 美国站 · LIVE 运营'},title:{en:'Build a TikTok Shop LIVE Assortment That Protects Margin and Inventory',zh:'TikTok Shop LIVE 货盘运营：管住库存、毛利、上下架与复盘'},excerpt:{en:'Release, sequence, monitor, and review LIVE products without losing inventory or margin control.',zh:'用准入、排序、监控与复盘管住 LIVE 商品的库存和毛利。'},date:{en:'Aug 31, 2026',zh:'2026 年 8 月 31 日'},read:{en:'16 min read',zh:'16 分钟阅读'},image:'hero-tiktok-shop-live-assortment-v1.png'},{slug:'tiktok-shop-ai-first-90-days',tags:['tiktok-shop','shop-operations'],cat:{en:'TIKTOK SHOP U.S. · NEW SELLER AI',zh:'TIKTOK SHOP 美国站 · 新卖家 AI'},title:{en:'A 0–90 Day TikTok Shop AI Operating System for New Sellers',zh:'TikTok Shop 新卖家前 90 天：如何用 AI 完成设置、上架与早期优化'},excerpt:{en:'Use AI to accelerate setup and diagnosis while humans own truth, economics, policy, and final state.',zh:'让 AI 加速设置与诊断，但由人工负责事实、经营账、政策与最终状态。'},date:{en:'Aug 30, 2026',zh:'2026 年 8 月 30 日'},read:{en:'15 min read',zh:'15 分钟阅读'},image:'hero-tiktok-shop-ai-first-90-days-v1.png'},{slug:'tiktok-shop-policy-vs-milestone-quiz',tags:['tiktok-shop','shop-operations'],cat:{en:'TIKTOK SHOP U.S. · ACCOUNT HEALTH',zh:'TIKTOK SHOP 美国站 · 账号健康'},title:{en:'TikTok Shop Policy Quiz vs. Milestone Quiz: Recover Points or Shorten Enforcement?',zh:'TikTok Shop Policy Quiz 和 Milestone Quiz：恢复积分还是缩短处罚？'},excerpt:{en:'Know which quiz changes Account Health points and which changes enforcement duration.',zh:'分清哪种 Quiz 恢复积分，哪种只缩短处罚时长。'},date:{en:'Aug 29, 2026',zh:'2026 年 8 月 29 日'},read:{en:'15 min read',zh:'15 分钟阅读'},image:'hero-tiktok-shop-policy-vs-milestone-quiz-v1.png'},{slug:'tiktok-shop-correct-or-appeal',tags:['tiktok-shop','shop-operations'],cat:{en:'TIKTOK SHOP U.S. · ACCOUNT HEALTH',zh:'TIKTOK SHOP 美国站 · 账号健康'},title:{en:'Correct or Appeal a TikTok Shop Violation? Choose by Facts, Evidence and Deadline',zh:'TikTok Shop 违规应该整改还是申诉：按事实、证据与时限判断'},excerpt:{en:'Choose correction or appeal from the ticket facts, available path, evidence, and timer.',zh:'按 Ticket 事实、可用路径、证据与倒计时选择整改或申诉。'},date:{en:'Aug 28, 2026',zh:'2026 年 8 月 28 日'},read:{en:'15 min read',zh:'15 分钟阅读'},image:'hero-tiktok-shop-correct-or-appeal-v1.png'},{slug:'tiktok-shop-violation-first-24-hours',tags:['tiktok-shop','shop-operations'],cat:{en:'TIKTOK SHOP U.S. · ACCOUNT HEALTH',zh:'TIKTOK SHOP 美国站 · 账号健康'},title:{en:'The First 24 Hours After a TikTok Shop Violation',zh:'收到 TikTok Shop 违规后的第一天：通知、Ticket、倒计时与应急分工'},excerpt:{en:'Capture the notice, ticket, status, deadline, evidence, owner, and next safe action.',zh:'第一天先锁定通知、票据、状态、截止时间、证据与 Owner。'},date:{en:'Aug 27, 2026',zh:'2026 年 8 月 27 日'},read:{en:'15 min read',zh:'15 分钟阅读'},image:'hero-tiktok-shop-violation-first-24-hours-v1.png'},{slug:'tiktok-shop-regulated-claims-review',tags:['tiktok-shop','shop-operations'],cat:{en:'TIKTOK SHOP U.S. · LISTING COMPLIANCE',zh:'TIKTOK SHOP 美国站 · Listing 合规'},title:{en:'Can You Say Organic, Non-GMO, Eco-Friendly or Made in USA on TikTok Shop?',zh:'TikTok Shop 商品文案哪些词不能随便写：受监管声明审核系统'},excerpt:{en:'Route every regulated claim from proposed copy to label, authority, evidence, and approval.',zh:'把每个受监管声明连接到标签、监管定义、证据与批准记录。'},date:{en:'Aug 26, 2026',zh:'2026 年 8 月 26 日'},read:{en:'15 min read',zh:'15 分钟阅读'},image:'hero-tiktok-shop-regulated-claims-review-v1.png'},{slug:'validate-tiktok-shop-ai-report',tags:['tiktok-shop','shop-operations'],cat:{en:'TIKTOK SHOP U.S. · AI ANALYTICS',zh:'TIKTOK SHOP 美国站 · AI 数据分析'},title:{en:'Validate a TikTok Shop AI Report Before You Make a Growth Decision',zh:'TikTok Shop AI Report 怎么验证：先核对口径，再做增长决策'},excerpt:{en:'Use Ask, Validate, Compare, Decide before changing spend, products, or creator priorities.',zh:'按提问、核验、比较、决策四步，避免被 AI 报告带偏。'},date:{en:'Aug 25, 2026',zh:'2026 年 8 月 25 日'},read:{en:'15 min read',zh:'15 分钟阅读'},image:'hero-validate-tiktok-shop-ai-report-v1.png'},{slug:'tiktok-shop-seller-assistant-human-control',tags:['tiktok-shop','shop-operations'],cat:{en:'TIKTOK SHOP U.S. · AI OPERATIONS',zh:'TIKTOK SHOP 美国站 · AI 运营'},title:{en:'Where TikTok Shop Seller Assistant Should Act, Recommend or Stop',zh:'TikTok Shop Seller Assistant 哪些能自动做、哪些必须人工确认'},excerpt:{en:'Separate AI advice, permissioned action, evidence checks, and terminal readback.',zh:'把 AI 建议、授权动作、证据核验与最终回读分开。'},date:{en:'Aug 24, 2026',zh:'2026 年 8 月 24 日'},read:{en:'15 min read',zh:'15 分钟阅读'},image:'hero-tiktok-shop-seller-assistant-human-control-v1.png'},{slug:'tiktok-shop-live-preheat-system',tags:['tiktok-shop','live'],cat:{en:'TIKTOK SHOP U.S. · LIVE OPERATIONS',zh:'TIKTOK SHOP 美国站 · 直播运营'},title:{en:'The TikTok Shop LIVE Preheat System: Build Demand Before You Go Live',zh:'TikTok Shop LIVE 预热系统：开播前如何建立进房理由'},excerpt:{en:'Build a truthful reason to enter before you go LIVE.',zh:'开播前，用一套真实的进房理由系统建立需求。'},date:{en:'Aug 23, 2026',zh:'2026 年 8 月 23 日'},read:{en:'14 min read',zh:'14 分钟阅读'},image:'tiktok-shop-live-preheat-system-v1.svg'},{slug:'tiktok-shop-live-first-five-sessions-learning-system',tags:['shop-operations','content-ugc'],cat:{en:'TIKTOK SHOP U.S. · LIVE OPERATIONS',zh:'TIKTOK SHOP 美国站 · LIVE 运营'},title:{en:'TikTok Shop LIVE 0-1: Why Your First Five Sessions Are a Learning System',zh:'TikTok Shop LIVE 从 0 到 1：前 5 场如何跑通增长模型'},excerpt:{en:'Use five controlled LIVE sessions to turn shopper evidence into one owned next decision.',zh:'用前五场受控 LIVE，把消费者证据变成一个有 Owner 的下一步决定。'},date:{en:'Aug 20, 2026',zh:'2026 年 8 月 20 日'},read:{en:'16 min read',zh:'16 分钟阅读'},image:'hero-tiktok-shop-live-first-five-sessions-learning-system-v1.png'},{slug:'weekly-tiktok-shop-operating-review',tags:['tiktok-shop','shop-operations'],cat:{en:'TIKTOK SHOP U.S. · OPERATING CADENCE',zh:'TIKTOK SHOP 美国站 · 运营复盘'},title:{en:'The Weekly TikTok Shop Operating Review',zh:'每周 TikTok Shop 运营复盘：看什么指标、谁负责、做什么决定'},excerpt:{en:'Run one owner-based weekly review that turns product, creator, content, and shop signals into decisions.',zh:'用一场按 Owner 组织的周复盘，把商品、达人、内容与店铺信号变成决定。'},date:{en:'Aug 19, 2026',zh:'2026 年 8 月 19 日'},read:{en:'15 min read',zh:'15 分钟阅读'},image:'hero-weekly-tiktok-shop-operating-review-v1.png'},{slug:'tiktok-shop-probation-growth-plan',tags:['tiktok-shop','shop-operations'],cat:{en:'TIKTOK SHOP U.S. · NEW SHOP OPERATIONS',zh:'TIKTOK SHOP 美国站 · 新店运营'},title:{en:'How to Grow While Your TikTok Shop Is Still in Probation',zh:'TikTok Shop 新店考察期内，品牌应该怎么增长？'},excerpt:{en:'Treat probation as a capacity constraint: focus products, build demand carefully, and protect fulfillment.',zh:'把考察期当作产能约束，聚焦商品、稳步建立需求，并优先保护履约。'},date:{en:'Aug 18, 2026',zh:'2026 年 8 月 18 日'},read:{en:'14 min read',zh:'14 分钟阅读'},image:'hero-tiktok-shop-probation-growth-plan-v1.png'},{slug:'measure-tiktok-shop-partner-performance',tags:['tiktok-shop','shop-operations'],cat:{en:'TIKTOK SHOP U.S. · PARTNER MANAGEMENT',zh:'TIKTOK SHOP 美国站 · Partner 管理'},title:{en:'How to Measure a TikTok Shop Partner After You Hire Them',zh:'合作之后，如何评估 TikTok Shop Partner 或 Agency 是否有效？'},excerpt:{en:'Evaluate partner ownership, creator and content quality, product economics, and decisions, not gross GMV alone.',zh:'不要只看总 GMV，要看 Partner 是否建立了可追责、可迭代的经营系统。'},date:{en:'Aug 17, 2026',zh:'2026 年 8 月 17 日'},read:{en:'15 min read',zh:'15 分钟阅读'},image:'hero-measure-tiktok-shop-partner-performance-v1.png'},{slug:'tiktok-shop-affiliate-commission-change',tags:['tiktok-shop','shop-operations'],cat:{en:'TIKTOK SHOP U.S. · AFFILIATE GOVERNANCE',zh:'TIKTOK SHOP 美国站 · 联盟佣金治理'},title:{en:'How to Change TikTok Shop Affiliate Commission Without Breaking Creator Trust',zh:'如何调整 TikTok Shop 联盟佣金，又不破坏达人信任'},excerpt:{en:'Change commission with a creator-cohort map, margin floor, communication plan, and post-change readback.',zh:'先画清达人批次、利润底线、沟通动作与生效回读，再调整联盟佣金。'},date:{en:'Aug 16, 2026',zh:'2026 年 8 月 16 日'},read:{en:'14 min read',zh:'14 分钟阅读'},image:'hero-tiktok-shop-affiliate-commission-change-v1.png'},{slug:'tiktok-shop-open-collaboration-product-fit',tags:['affiliate','shop-operations'],cat:{en:'TIKTOK SHOP U.S. · AFFILIATE PORTFOLIO',zh:'TIKTOK SHOP 美国站 · 联盟商品组合'},title:{en:'Which Products Actually Belong in TikTok Shop Open Collaboration?',zh:'哪些商品真正适合放进 TikTok Shop Open Collaboration？'},excerpt:{en:'Choose creator-ready products using buyer job, product truth, supply, commission, and review ownership.',zh:'按消费者任务、商品真实度、供给、佣金和复盘责任，选择真正适合给达人开放的商品。'},date:{en:'Aug 15, 2026',zh:'2026 年 8 月 15 日'},read:{en:'15 min read',zh:'15 分钟阅读'},image:'hero-tiktok-shop-open-collaboration-product-fit-v3.png'},{slug:'tiktok-shop-video-volume-vs-conversion',tags:['shop-operations','content-ugc'],cat:{en:'TIKTOK SHOP U.S. · PERFORMANCE DIAGNOSIS',zh:'TIKTOK SHOP 美国站 · 表现诊断'},title:{en:'Make More TikTok Shop Videos or Fix Conversion First?',zh:'应该多拍 TikTok Shop 视频，还是先修转化？'},excerpt:{en:'Identify the buyer-path constraint before asking TikTok Shop to produce more video demand.',zh:'增加 TikTok Shop 视频需求前，先找到买家路径真正的限制。'},date:{en:'Aug 13, 2026',zh:'2026 年 8 月 13 日'},read:{en:'15 min read',zh:'15 分钟阅读'},image:'hero-tiktok-shop-video-volume-vs-conversion-v1.png'},{slug:'best-tiktok-shop-agency-by-growth-stage',tags:['shop-operations','partner'],cat:{en:'TIKTOK SHOP U.S. · PARTNER SELECTION',zh:'TIKTOK SHOP 美国站 · PARTNER 选择'},title:{en:'Best TikTok Shop Agency for Your Brand? Choose by Growth Stage, Not a Generic Ranking',zh:'TikTok Shop Agency 推荐怎么看：按增长阶段选，不要只看榜单'},excerpt:{en:'Choose a TikTok Shop agency for the next operating stage, not a generic ranking.',zh:'按下一阶段选择 TikTok Shop Agency，不要只看泛泛榜单。'},date:{en:'Aug 12, 2026',zh:'2026 年 8 月 12 日'},read:{en:'14 min read',zh:'14 分钟阅读'},image:'hero-best-tiktok-shop-agency-growth-stage-v2.png'},{slug:'tiktok-shop-content-assortment-balance',tags:['shop-operations','content-ugc'],cat:{en:'TIKTOK SHOP U.S. · PORTFOLIO DIAGNOSIS',zh:'TIKTOK SHOP 美国站 · 商品组合诊断'},title:{en:'Is Your TikTok Shop Too Content-Led or Too Assortment-Led?',zh:'你的 TikTok Shop 过度依赖内容，还是商品组合没有搭好？'},excerpt:{en:'Balance priority products, creator content, availability, and the buyer path before you add more demand.',zh:'在增加需求前，先把优先商品、达人内容、库存和买家路径平衡起来。'},date:{en:'Aug 11, 2026',zh:'2026 年 8 月 11 日'},read:{en:'14 min read',zh:'14 分钟阅读'},image:'hero-tiktok-shop-content-assortment-balance-v2.png'},{slug:'tiktok-shop-discovery-diagnosis',tags:['shop-operations','content-ugc'],cat:{en:'TIKTOK SHOP U.S. · DISCOVERY DIAGNOSIS',zh:'TIKTOK SHOP 美国站 · 发现路径诊断'},title:{en:'Search, Recommendation, or Content: Where Is TikTok Shop Discovery Breaking?',zh:'搜索、推荐还是内容：你的 TikTok Shop 流量断在哪里？'},excerpt:{en:'Identify the failing discovery surface before changing listings, creator mix, content volume, or spend.',zh:'先找到真正断掉的发现路径，再改 Listing、达人组合、内容量或投放。'},date:{en:'Aug 10, 2026',zh:'2026 年 8 月 10 日'},read:{en:'16 min read',zh:'16 分钟阅读'},image:'hero-tiktok-shop-discovery-diagnosis-v1.png'},{slug:'how-to-choose-tiktok-shop-partner',tags:['shop-operations','creator-affiliate'],cat:{en:'TIKTOK SHOP U.S. · PARTNER DILIGENCE',zh:'TIKTOK SHOP 美国站 · PARTNER 尽调'},title:{en:'How to Choose a TikTok Shop Partner: 12 Questions Before You Sign',zh:'如何选择 TikTok Shop Partner：签约前必须问的 12 个问题'},excerpt:{en:'Use 12 diligence questions to choose a partner with clear ownership, economics, and learning controls.',zh:'用 12 个尽调问题选择拥有明确职责、经营账和学习控制的 Partner。'},date:{en:'Aug 9, 2026',zh:'2026 年 8 月 9 日'},read:{en:'15 min read',zh:'15 分钟阅读'},image:'hero-tiktok-shop-partner-choice-v1.png'},{ slug: 'tiktok-shop-shop-ready-scale-ready', tags: ['shop-operations'], cat: { en: 'TIKTOK SHOP U.S. · PRODUCT OPERATIONS', zh: 'TIKTOK SHOP 美国站 · 商品运营' }, title: { en: 'Shop-Ready Is Not Scale-Ready', zh: 'TikTok Shop 商品“可上架”不等于“可放大”' }, excerpt: { en: 'Use a two-stage product gate to decide what is safe to test and what has evidence to scale.', zh: '用两阶段商品 Gate 判断什么可以测试，什么有证据可以放大。' }, date: { en: 'Aug 8, 2026', zh: '2026 年 8 月 8 日' }, read: { en: '15 min read', zh: '15 分钟阅读' }, image: 'hero-tiktok-shop-shop-ready-scale-ready-v1.png' },
  {
    slug: 'tiktok-shop-partner-readiness', tags: ['shop-operations'],
    cat: { en: 'TIKTOK SHOP U.S. · PARTNER READINESS', zh: 'TIKTOK SHOP 美国站 · 合作准备度' },
    title: { en: 'Is Your Brand Ready to Work With a TikTok Shop Partner?', zh: '你的品牌准备好与 TikTok Shop Partner 合作了吗？' },
    excerpt: { en: 'Use five readiness gates before turning partner activity into a controlled learning cycle.', zh: '先完成五个准备度门槛，再把合作变成可验证的学习周期。' },
    date: { en: 'Aug 7, 2026', zh: '2026 年 8 月 7 日' }, read: { en: '14 min read', zh: '14 分钟阅读' }, image: 'hero-tiktok-shop-partner-readiness-v1.png',
  },
  {
    slug: 'tiktok-shop-growth-bottleneck', tags: ['shop-operations'],
    cat: { en: 'TIKTOK SHOP U.S. · SHOP OPERATIONS', zh: 'TIKTOK SHOP 美国站 · 店铺运营' },
    title: { en: 'Which TikTok Shop Growth Bottleneck Should You Fix First?', zh: 'TikTok Shop 增长卡在哪里？先修哪个增长瓶颈' },
    excerpt: { en: 'Diagnose the constraint that changes the next commercial decision before adding activity.', zh: '先诊断会改变下一步商业决策的瓶颈，再增加动作。' },
    date: { en: 'Aug 6, 2026', zh: '2026 年 8 月 6 日' }, read: { en: '14 min read', zh: '14 分钟阅读' }, image: 'hero-tiktok-shop-growth-bottleneck-v1.png',
  },
  {
    slug: 'tiktok-shop-storefront-merchandising',
    tags: ['content-ugc', 'shop-operations'],
    cat: { en: 'TIKTOK SHOP U.S. · SHOP OPERATIONS', zh: 'TIKTOK SHOP 美国站 · 店铺运营' },
    title: { en: 'TikTok Shop Storefront Merchandising for Brands', zh: '品牌如何做好 TikTok Shop 店铺陈列与 Shop Design' },
    excerpt: { en: 'Give every storefront module one shopper job, tie the path to product truth, and verify the live version.', zh: '给每个 Storefront Module 一个 Shopper Job，对齐 Product Truth，再验证 Live Version。' },
    date: { en: 'Aug 5, 2026', zh: '2026 年 8 月 5 日' }, read: { en: '17 min read', zh: '17 分钟阅读' },
    image: 'hero-tiktok-shop-storefront-merchandising-v1.png',
  },
  {
    slug: 'tiktok-shop-performance-score-growth-ceiling',
    tags: ['content-ugc', 'shop-operations'],
    cat: { en: 'TIKTOK SHOP U.S. · SHOP OPERATIONS', zh: 'TIKTOK SHOP 美国站 · 店铺运营' },
    title: { en: 'Why Shop Performance Score Becomes a Growth Ceiling', zh: '为什么 Shop Performance Score 会变成增长天花板' },
    excerpt: { en: 'Diagnose the limiting SPS metric, fix its operating cause, and verify the readback before scaling demand.', zh: '先诊断限制增长的 SPS Metric，修 Operating Cause，再完成 Live Readback 后放大 Demand。' },
    date: { en: 'Aug 4, 2026', zh: '2026 年 8 月 4 日' }, read: { en: '18 min read', zh: '18 分钟阅读' },
    image: 'hero-tiktok-shop-performance-score-growth-ceiling-v1.png',
  },
  {
    slug: 'tiktok-shop-returns-margin-trust',
    tags: ['content-ugc', 'shop-operations'],
    cat: { en: 'TIKTOK SHOP U.S. · SHOP OPERATIONS', zh: 'TIKTOK SHOP 美国站 · 内容运营' },
    title: { en: 'TikTok Shop Returns Without Destroying Margin or Customer Trust', zh: 'TikTok Shop 退货不该吞掉利润，也不该毁掉客户信任' },
    excerpt: { en: 'Route each return by case facts, protect trust with a fair resolution, and protect margin by removing the repeat cause.', zh: '先按 Case Fact 路由 Return，用公平 Resolution 保护 Trust，再修 Repeat Cause 保护 Margin。' },
    date: { en: 'Aug 3, 2026', zh: '2026 年 8 月 3 日' }, read: { en: '17 min read', zh: '17 分钟阅读' },
    image: 'hero-tiktok-shop-returns-margin-trust-v1.png',
  },
  {
    slug: 'tiktok-shop-voice-of-customer-content-system',
    tags: ['content-ugc', 'shop-operations'],
    cat: { en: 'TIKTOK SHOP U.S. · CONTENT OPERATIONS', zh: 'TIKTOK SHOP 美国站 · 内容运营' },
    title: { en: 'Turn Voice of Customer Into Better TikTok Shop Content', zh: '把 Voice of Customer 变成更有效的 TikTok Shop 内容' },
    excerpt: { en: 'Route customer feedback to the true owner, fix the cause, and turn expectation gaps into one useful content job.', zh: '先把 Customer Feedback 路由给真正 Owner，修 Cause，再把 Expectation Gap 变成一个有用 Content Job。' },
    date: { en: 'Aug 2, 2026', zh: '2026 年 8 月 2 日' }, read: { en: '15 min read', zh: '15 分钟阅读' },
    image: 'hero-tiktok-shop-voice-of-customer-content-v1.png',
  },
  {
    slug: 'tiktok-shop-sample-decision-system',
    tags: ['creator-affiliate', 'shop-operations'],
    cat: { en: 'TIKTOK SHOP U.S. · CREATOR OPERATIONS', zh: 'TIKTOK SHOP 美国站 · 达人运营' },
    title: { en: 'Free, Refundable or Auto-Approved Samples: A Better Decision System', zh: '免费、可退款还是自动批准寄样：品牌该怎么选？' },
    excerpt: { en: 'Route every sample by product evidence, creator evidence, economics, inventory risk, and operating control.', zh: '从 Product Evidence、Creator Evidence、Economics、Inventory Risk 与 Operating Control 选择寄样方式。' },
    date: { en: 'Aug 1, 2026', zh: '2026 年 8 月 1 日' }, read: { en: '16 min read', zh: '16 分钟阅读' },
    image: 'hero-tiktok-shop-sample-decision-system-v1.png',
  },
  {
    slug: 'tiktok-shop-creator-collaboration-model',
    tags: ['creator-affiliate', 'shop-operations'],
    cat: { en: 'TIKTOK SHOP U.S. · CREATOR OPERATIONS', zh: 'TIKTOK SHOP 美国站 · 达人运营' },
    title: { en: 'Commission, Flat Fee or Exclusive Collaboration?', zh: '佣金、固定费用，还是 Exclusive Collaboration？' },
    excerpt: { en: 'Match commission, flat fee, and invite-only collaboration programs to the creator job, evidence, economics, and risk.', zh: '从 Creator Job、Evidence、Economics 与 Risk，选择 Commission、Flat Fee 或邀请制合作项目。' },
    date: { en: 'Jul 31, 2026', zh: '2026 年 7 月 31 日' }, read: { en: '15 min read', zh: '15 分钟阅读' },
    image: 'hero-tiktok-shop-creator-collaboration-model-v1.png',
  },
  {
    slug: 'tiktok-shop-gmv-max-readiness',
    tags: ['campaign-growth', 'shop-operations'],
    cat: { en: 'TIKTOK SHOP U.S. · SHOP ADS OPERATIONS', zh: 'TIKTOK SHOP 美国站 · SHOP ADS 运营' },
    title: { en: 'When Should a Brand Turn On GMV Max?', zh: '品牌什么时候应该开启 GMV Max？' },
    excerpt: { en: 'Use five readiness gates, blended-attribution controls, and a 14-day activation to decide when Product GMV Max is ready to scale.', zh: '用五个 Readiness Gate、混合归因控制和 14 天 Activation，判断什么时候适合开启并扩大 Product GMV Max。' },
    date: { en: 'Jul 30, 2026', zh: '2026 年 7 月 30 日' }, read: { en: '14 min read', zh: '14 分钟阅读' },
    image: 'hero-tiktok-shop-gmv-max-readiness-v1.png',
  },
  {
    slug: 'tiktok-shop-discount-architecture',
    tags: ['campaign-growth', 'shop-operations'],
    cat: { en: 'TIKTOK SHOP U.S. · PROMOTION OPERATIONS', zh: 'TIKTOK SHOP 美国站 · 优惠运营' },
    title: { en: 'TikTok Shop Discount Architecture: Stop Stacking Offers Without a Plan', zh: 'TikTok Shop 折扣架构：不要没有计划地叠加优惠' },
    excerpt: { en: 'Control final customer price, seller funding, margin, inventory, messaging, and stop rules before promotions overlap.', zh: '在优惠重叠前，先控制消费者最终价、卖家出资、毛利、库存、传播口径和停止规则。' },
    date: { en: 'Jul 29, 2026', zh: '2026 年 7 月 29 日' }, read: { en: '14 min read', zh: '14 分钟阅读' },
    image: 'hero-tiktok-shop-discount-architecture-v1.png',
  },
  {
    slug: 'tiktok-shop-preorder-mto-backorder',
    tags: ['shop-operations'],
    cat: { en: 'TIKTOK SHOP U.S. · SHOP OPERATIONS', zh: 'TIKTOK SHOP 美国站 · 店铺运营' },
    title: { en: 'Pre-Order, Made-to-Order or Backorder: Which Model Fits Your Product?', zh: '预售、定制生产还是缺货预订：TikTok Shop 延迟履约模式怎么选？' },
    excerpt: { en: 'Choose the delayed-order model from the real source of the delay, then control the release date, production capacity, inbound evidence, and customer promise.', zh: '先按上市、生产或补货延迟选择模式，再用发布日期、真实产能、入库证据和消费者承诺控制履约。' },
    date: { en: 'Jul 29, 2026', zh: '2026 年 7 月 29 日' }, read: { en: '14 min read', zh: '14 分钟阅读' },
    image: 'hero-tiktok-shop-preorder-mto-backorder-v3.png',
  },
  {
    slug: 'tiktok-shop-catalog-architecture',
    tags: ['shop-operations', 'campaign-growth'],
    cat: { en: 'TIKTOK SHOP U.S. · SHOP OPERATIONS', zh: 'TIKTOK SHOP 美国站 · 店铺运营' },
    title: { en: 'TikTok Shop Catalog Architecture: Combined Listings, Bundles and Subscriptions', zh: 'TikTok Shop 商品目录架构：Combined Listings、组合套装与订阅怎么选' },
    excerpt: { en: 'Choose the right catalog structure for conversion, basket size, repeat purchase, fulfillment, creator content, and weekly change control.', zh: '从转化、客单、复购、履约、达人内容和每周变更管理出发，选择正确的商品目录结构。' },
    date: { en: 'Jul 28, 2026', zh: '2026 年 7 月 28 日' }, read: { en: '12 min read', zh: '12 分钟阅读' },
    image: 'hero-tiktok-shop-catalog-architecture.png',
  },
  {
    slug: 'tiktok-shop-hero-sku-search-demand',
    tags: ['campaign-growth', 'getting-started'],
    cat: { en: 'TIKTOK SHOP U.S. · CAMPAIGNS & GROWTH', zh: 'TIKTOK SHOP 美国站 · 活动与增长' },
    title: { en: 'TikTok Shop Hero SKU Strategy: Choose Products With Search Demand, Not Guesswork', zh: 'TikTok Shop Hero SKU 怎么选：用搜索需求验证选品，不靠猜' },
    excerpt: { en: 'Use search demand to shortlist products, then test creator proof, listing conversion, contribution margin, inventory, and fulfillment before concentrating on a Hero SKU.', zh: '先用搜索需求缩小候选范围，再通过达人证明、商品页转化、贡献利润、库存和履约判断资源应该集中到哪个 Hero SKU。' },
    date: { en: 'Jul 27, 2026', zh: '2026 年 7 月 27 日' }, read: { en: '13 min read', zh: '13 分钟阅读' },
    image: 'hero-tiktok-shop-hero-sku-search-demand-v2.png',
  },
  {
    slug: 'tiktok-shop-health-wellness-cold-start',
    tags: ['getting-started', 'shop-operations'],
    cat: { en: 'TIKTOK SHOP U.S. · HEALTH & WELLNESS', zh: 'TIKTOK SHOP 美国站 · HEALTH & WELLNESS' },
    title: { en: 'TikTok Shop Health & Wellness Cold Start: Build Trust Before You Scale', zh: 'TikTok Shop 健康与保健冷启动：先建立信任，再扩大增长' },
    excerpt: { en: 'Connect product eligibility, Hero SKUs, claims, creator education, listing trust, offers, GMV Max, inventory, fulfillment, and customer feedback before scaling.', zh: '把产品资格、Hero SKU、claim、达人教育、商品页信任、Offer、GMV Max、库存、履约和用户反馈连接成一套冷启动系统。' },
    date: { en: 'Jul 26, 2026', zh: '2026 年 7 月 26 日' }, read: { en: '17 min read', zh: '17 分钟阅读' },
    image: 'hero-tiktok-shop-health-wellness-cold-start.png',
  },
  {
    slug: 'tiktok-shop-beauty-cold-start',
    tags: ['getting-started', 'content-ugc'],
    cat: { en: 'TIKTOK SHOP U.S. · BEAUTY', zh: 'TIKTOK SHOP 美国站 · 美妆冷启动' },
    title: { en: 'TikTok Shop Beauty Cold Start: Build a 0-to-1 Hero Product System', zh: 'TikTok Shop 美妆冷启动：从 Hero SKU 到可重复增长的 0-1 系统' },
    excerpt: { en: 'Connect Hero SKUs, creator demonstrations, claims, product pages, offers, affiliate activation, GMV Max, inventory, and customer feedback before scaling a Beauty launch.', zh: '把 Hero SKU、达人演示、claim、商品页、Offer、Affiliate、GMV Max、库存和用户反馈连接成一套美妆冷启动系统。' },
    date: { en: 'Jul 26, 2026', zh: '2026 年 7 月 26 日' }, read: { en: '16 min read', zh: '16 分钟阅读' },
    image: 'hero-tiktok-shop-beauty-cold-start.png',
  },
  {
    slug: 'tiktok-shop-fashion-cold-start',
    tags: ['getting-started', 'creator-affiliate'],
    cat: { en: 'TIKTOK SHOP U.S. · FASHION', zh: 'TIKTOK SHOP 美国站 · 服装冷启动' },
    title: { en: 'TikTok Shop Fashion Cold Start: Build a 0-to-1 Bestseller System', zh: 'TikTok Shop 服装冷启动：从选款到爆款的 0-1 运营系统' },
    excerpt: { en: 'Connect hero SKUs, creator fit, try-on proof, size clarity, GMV Max, inventory, returns, and weekly decisions before scaling a Fashion launch.', zh: '把选款、达人匹配、试穿内容、尺码变体、GMV Max、库存、退货和周复盘连接成一套美国站服装冷启动系统。' },
    date: { en: 'Jul 26, 2026', zh: '2026 年 7 月 26 日' }, read: { en: '13 min read', zh: '13 分钟阅读' },
    image: 'hero-tiktok-shop-fashion-cold-start.png',
  },
  {
    slug: 'tiktok-shop-food-beverage-cold-start',
    tags: ['getting-started', 'shop-operations'],
    cat: { en: 'TIKTOK SHOP U.S. · FOOD & BEVERAGE', zh: 'TIKTOK SHOP 美国 · 食品饮料' },
    title: { en: 'TikTok Shop Food and Beverage Cold Start: A 0-to-1 Launch System', zh: 'TikTok Shop 食品饮料冷启动：从 0 到 1 的产品验证系统' },
    excerpt: { en: 'Build the first repeatable F&B launch loop across hero SKUs, creator fit, sensory content, product pages, GMV Max, inventory, fulfillment, and the next scale-repair-stop decision.', zh: '食品饮料冷启动不是多发视频。品牌要把 Hero SKU、达人匹配、感官内容、商品页、GMV Max、库存和履约接成从 0 到 1 的验证系统。' },
    date: { en: 'Jul 25, 2026', zh: '2026 年 7 月 25 日' }, read: { en: '12 min read', zh: '13 分钟阅读' },
    image: 'hero-tiktok-shop-food-beverage-cold-start-v3.png',
  },
  {
    slug: 'tiktok-shop-live-auction-readiness',
    tags: ['live-commerce', 'shop-operations'],
    cat: { en: 'TIKTOK SHOP U.S. · LIVE COMMERCE', zh: 'TIKTOK SHOP 美国 · 直播拍卖' },
    title: { en: 'TikTok Shop LIVE Auctions: The U.S. Brand Readiness System', zh: 'TikTok Shop LIVE 拍卖怎么做：美国站品牌上线前的运营系统' },
    excerpt: { en: 'Decide whether a product belongs in an auction, verify seller and creator access, align the listing with the LIVE, and protect fulfillment after the win.', zh: '先判断商品是否适合拍卖，再核对店铺与达人资格，把镜头、listing、成交实物和履约接成同一套系统。' },
    date: { en: 'Jul 23, 2026', zh: '2026 年 7 月 23 日' }, read: { en: '12 min read', zh: '13 分钟阅读' },
    image: 'hero-tiktok-shop-live-auction-readiness.png',
  },
  {
    slug: 'tiktok-shop-shop-recognition-badge-strategy',
    tags: ['shop-operations'],
    cat: { en: 'TIKTOK SHOP U.S. · SHOP RECOGNITION', zh: 'TIKTOK SHOP 美国 · 店铺认证' },
    title: { en: 'TikTok Shop Badges: A Trust Operating System for U.S. Brands', zh: 'TikTok Shop 店铺认证徽章怎么用：从品牌身份到美国市场信任运营' },
    excerpt: { en: 'Choose the right recognition path, prepare the storefront, activate creators, and maintain trust through a weekly operating loop.', zh: '从身份链、商品页、达人激活到每周复盘，把店铺认证变成美国市场可持续的信任运营系统。' },
    date: { en: 'Jul 22, 2026', zh: '2026 年 7 月 22 日' }, read: { en: '13 min read', zh: '13 分钟阅读' },
    image: 'hero-tiktok-shop-shop-recognition-badges-v3.png',
  },
  {
    slug: 'tiktok-shop-product-card-strategy',
    cat: { en: 'TIKTOK SHOP U.S. · PRODUCT CARD STRATEGY', zh: 'TIKTOK SHOP 美国 · 商品卡策略' },
    title: { en: 'TikTok Shop Product Card Strategy: Turn Creator Demand Into Conversion', zh: 'TikTok Shop 商品卡流量怎么做：价格、促销和达人内容怎样一起接住转化' },
    excerpt: { en: 'How U.S. brands connect hero SKUs, margin-safe pricing, promotion stacking, creator content, and product-card conversion.', zh: '从 hero SKU、价格和运费，到优惠叠加、达人内容和商品卡转化，拆解品牌怎样把流量接成更清楚的购买决定。' },
    date: { en: 'Jul 20, 2026', zh: '2026 年 7 月 20 日' }, read: { en: '12 min read', zh: '12 分钟阅读' },
    image: 'hero-tiktok-shop-product-card-strategy-v2.png',
  },
  {
    slug: 'tiktok-shop-customer-retention-crm-playbook',
    cat: { en: 'TIKTOK SHOP U.S. · CUSTOMER RETENTION', zh: 'TIKTOK SHOP 美国 · 用户留存' },
    title: { en: 'TikTok Shop CRM: Turn the First Order Into a Repeat-Purchase System', zh: 'TikTok Shop CRM 怎么做：把首单变成复购系统' },
    excerpt: { en: 'Learn what TikTok Shop CRM is, which campaigns to launch first, and how to connect creator-led orders, customer outreach, and retention measurement.', zh: '讲清 TikTok Shop CRM 是什么、先上线哪些活动，以及怎样把达人首单、用户触达和留存衡量接成一套复购系统。' },
    date: { en: 'Jul 18, 2026', zh: '2026 年 7 月 18 日' }, read: { en: '12 min read', zh: '12 分钟阅读' },
    image: 'hero-tiktok-shop-customer-retention-crm-playbook.png',
  },
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
// One slug represents one public article. Prevent an interrupted publisher
// retry from rendering the same article twice on the blog index.
const UNIQUE_BLOG_POSTS = BLOG_POSTS.filter((post, index, posts) =>
  posts.findIndex((candidate) => candidate.slug === post.slug) === index,
);
// fixed-19's v2 file is the raw 3D scene. The accepted card asset is the
// composited v1 cover with headline, subtitle, and the official WEM logo.
const BLOG_CARD_IMAGE_OVERRIDES = {
  'best-tiktok-shop-agency-by-growth-stage': 'hero-best-tiktok-shop-agency-growth-stage-v1.png',
};
const DISPLAY_BLOG_POSTS = UNIQUE_BLOG_POSTS.map((post) => ({
  ...post,
  image: BLOG_CARD_IMAGE_OVERRIDES[post.slug] || post.image,
}));
const SORTED_BLOG_POSTS = [...DISPLAY_BLOG_POSTS].sort(
  (a, b) => parseBlogDate(b.date.en) - parseBlogDate(a.date.en)
);
const BLOG_TAGS = [
  { id: 'getting-started', label: { en: 'Getting Started', zh: '入门启动', ko: '시작하기' }, desc: { en: 'Launch paths, readiness, and first operating decisions.', zh: '上线路径、准备度与第一阶段运营决策。', ko: '론치 경로, 준비도와 첫 운영 의사결정.' } },
  { id: 'creator-affiliate', label: { en: 'Creator & Affiliate', zh: '达人与联盟', ko: '크리에이터·어필리에이트' }, desc: { en: 'Creator matching, samples, briefs, and affiliate systems.', zh: '达人匹配、寄样、Brief 与联盟运营。', ko: '크리에이터 매칭, 샘플, 브리프와 어필리에이트 운영.' } },
  { id: 'content-ugc', label: { en: 'Content & UGC', zh: '内容与 UGC', ko: '콘텐츠·UGC' }, desc: { en: 'Content systems, UGC strategy, and creative learning.', zh: '内容系统、UGC 策略与素材复盘。', ko: '콘텐츠 시스템, UGC 전략과 크리에이티브 학습.' } },
  { id: 'live-commerce', label: { en: 'LIVE Commerce', zh: '直播电商', ko: '라이브 커머스' }, desc: { en: 'LIVE readiness, hosts, offers, and repeatable formats.', zh: '直播准备、主播、Offer 与可复制流程。', ko: '라이브 준비도, 호스트, 오퍼와 반복 가능한 포맷.' } },
  { id: 'shop-operations', label: { en: 'Shop Operations', zh: '店铺运营', ko: '숍 운영' }, desc: { en: 'Listings, logistics, trust, retention, and compliance.', zh: '商品页、履约、信任、留存与合规。', ko: '리스팅, 물류, 신뢰, 리텐션과 규정 준수.' } },
  { id: 'campaign-growth', label: { en: 'Campaigns & Growth', zh: '活动与增长', ko: '캠페인·성장' }, desc: { en: 'Campaign calendars, customer growth, and channel expansion.', zh: '活动日历、用户增长与渠道拓展。', ko: '캠페인 캘린더, 고객 성장과 채널 확장.' } },
  { id: 'agency-guides', label: { en: 'Agency Guides', zh: 'Agency 指南', ko: '에이전시 가이드' }, desc: { en: 'How to compare scope, cost, teams, and operating support.', zh: '如何比较服务范围、费用、团队与交付。', ko: '서비스 범위, 비용, 팀과 운영 지원 비교 방법.' } },
  { id: 'cross-border', label: { en: 'Cross-Border', zh: '跨境出海', ko: '크로스보더' }, desc: { en: 'Entry models and U.S. market operating paths.', zh: '入驻模式与美国市场运营路径。', ko: '미국 시장 진입 모델과 운영 경로.' } },
];
const BLOG_TAG_ASSIGNMENTS = {
  'tiktok-shop-hero-sku-search-demand': ['campaign-growth', 'getting-started'],
  'tiktok-shop-health-wellness-cold-start': ['getting-started', 'shop-operations'],
  'tiktok-shop-beauty-cold-start': ['getting-started', 'content-ugc'],
  'tiktok-shop-fashion-cold-start': ['getting-started', 'creator-affiliate'],
  'tiktok-shop-food-beverage-cold-start': ['getting-started', 'shop-operations'],
  'tiktok-shop-live-auction-readiness': ['live-commerce', 'shop-operations'],
  'tiktok-shop-shop-recognition-badge-strategy': ['shop-operations'],
  'tiktok-shop-product-card-strategy': ['shop-operations', 'content-ugc'],
  'tiktok-shop-customer-retention-crm-playbook': ['campaign-growth', 'shop-operations'],
  'best-tiktok-shop-affiliate-agencies-us': ['agency-guides', 'creator-affiliate'],
  'tiktok-shop-affiliate-strategy-for-brands': ['creator-affiliate'],
  'tiktok-shop-creator-matchmaking-playbook': ['creator-affiliate'],
  'tiktok-shop-follower-group-chat-retention': ['creator-affiliate', 'campaign-growth'],
  '2026-us-tiktok-shop-campaign-calendar-after-dfyd': ['campaign-growth'],
  'tiktok-shop-us-logistics-fulfillment-strategy': ['shop-operations'],
  'tiktok-shop-creator-community-brand-growth': ['creator-affiliate'],
  'tiktok-shop-live-strategy-brands': ['live-commerce'],
  'tiktok-shop-ip-protection-seller-playbook': ['shop-operations'],
  'tiktok-shop-us-mexico-expansion-opportunity': ['cross-border', 'campaign-growth'],
  'tiktok-shop-aigc-auto-post-strategy': ['content-ugc'],
  'tiktok-shop-us-new-seller-growth-strategy': ['getting-started'],
  'tiktok-shop-us-july-4-seasonal-products': ['campaign-growth'],
  'tiktok-shop-us-trust-signals': ['shop-operations'],
  'tiktok-shop-affiliate-marketing-for-brands': ['creator-affiliate'],
  'tiktok-shop-us-deals-for-you-days': ['campaign-growth'],
  'cross-border-tiktok-shop-entry-models': ['cross-border', 'getting-started'],
  'us-pop-for-chinese-owned-sellers': ['cross-border', 'getting-started'],
  'tiktok-shop-managed-models-for-manufacturers': ['cross-border'],
  'los-angeles-tiktok-shop-agency-guide': ['agency-guides'],
  'california-tiktok-shop-agency-guide': ['agency-guides'],
  'tiktok-shop-feedback-loop-amazon-meta': ['content-ugc', 'campaign-growth'],
  'tiktok-shop-live-selling-agency-guide': ['live-commerce', 'agency-guides'],
  'tiktok-shop-creator-affiliate-management': ['creator-affiliate'],
  'tiktok-shop-sample-roi-tracking': ['creator-affiliate', 'shop-operations'],
  'tiktok-shop-agency-cost-guide': ['agency-guides'],
  'tiktok-shop-agency-vs-in-house': ['agency-guides'],
  'tiktok-shop-creator-brief-template': ['creator-affiliate', 'content-ugc'],
  'tiktok-shop-beauty-brand-agency-guide': ['agency-guides'],
  'tiktok-shop-ugc-agency-amazon-dtc': ['content-ugc'],
  'best-tiktok-shop-agencies-us': ['agency-guides'],
  'ugc-video-strategy-for-brands': ['content-ugc'],
  'where-to-find-ugc-video-creators': ['content-ugc', 'creator-affiliate'],
  'spanish-speaking-creators-tiktok-shop': ['creator-affiliate'],
  'how-retail-brands-use-tiktok-shop': ['campaign-growth'],
  'tiktok-shop-content-factory-framework': ['content-ugc'],
  'how-to-find-creators-for-your-brand-tiktok-shop': ['creator-affiliate'],
  'cross-border-brands-launch-tiktok-shop-us': ['cross-border', 'getting-started'],
  'ugc-video-vs-traditional-ads': ['content-ugc'],
  'how-dtc-brands-use-tiktok-shop': ['campaign-growth'],
  'is-tiktok-shop-worth-it-for-brands': ['getting-started'],
  'tiktok-shop-management-what-to-expect': ['getting-started', 'agency-guides'],
  'signs-your-brand-is-ready-for-tiktok-shop': ['getting-started'],
  'amazon-sellers-expand-to-tiktok-shop': ['cross-border', 'campaign-growth'],
  'tiktok-shop-affiliate-program-brand-guide': ['creator-affiliate'],
  'tiktok-shop-product-listing-optimization': ['shop-operations'],
  'how-to-choose-tiktok-shop-agency-as-creator': ['agency-guides', 'creator-affiliate'],
  'what-does-a-tiktok-shop-agency-do': ['agency-guides'],
  'tiktok-shop-sample-seeding-strategy': ['creator-affiliate'],
  'tiktok-shop-us-launch-checklist': ['getting-started'],
};
const getPostTags = (post) => post.tags || BLOG_TAG_ASSIGNMENTS[post.slug] || ['shop-operations'];
const getTagLabel = (tagId, lang) => {
  const tag = BLOG_TAGS.find((item) => item.id === tagId);
  return tag ? tag.label[lang] : tagId;
};
const blogPostHref = (slug, lang) => lang === 'ko' ? `/ko/blog/${slug}` : `/blog/${slug}${lang === 'zh' ? '?lang=zh' : ''}`;
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
  const [activeTag, setActiveTag] = React.useState('all');
  const [query, setQuery] = React.useState('');
  const [showAll, setShowAll] = React.useState(false);
  const copy = {
    en: {
      search: 'Search articles, topics, or strategies',
      all: 'All',
      count: (count) => `${count} ${count === 1 ? 'article' : 'articles'}`,
      empty: 'No articles match this search yet.',
      clear: 'Clear filters',
      browseEyebrow: 'BROWSE BY TOPIC',
      browseTitle: 'Find the operating problem you need to solve.',
      browseSub: 'Start with a topic instead of scrolling through the full archive.',
      recent: 'RECENTLY PUBLISHED',
      viewAll: (count) => `View all ${count} articles`,
      backHome: 'Back to blog overview',
      archiveEyebrow: 'ARTICLE LIBRARY',
      archiveTitle: 'Browse all guides.',
    },
    zh: {
      search: '搜索文章、主题或运营策略',
      all: '全部',
      count: (count) => `${count} 篇文章`,
      empty: '暂时没有符合条件的文章。',
      clear: '清除筛选',
      browseEyebrow: '按主题浏览',
      browseTitle: '先找到你现在需要解决的运营问题。',
      browseSub: '不用从完整文章库往下翻，先从一个主题开始。',
      recent: '最近更新',
      viewAll: (count) => `查看全部 ${count} 篇文章`,
      backHome: '返回博客首页',
      archiveEyebrow: '文章库',
      archiveTitle: '浏览全部实操指南。',
    },
    ko: {
      search: '글, 주제 또는 전략 검색',
      all: '전체',
      count: (count) => `${count}개 글`,
      empty: '현재 조건에 맞는 한국어 글이 없습니다.',
      clear: '필터 초기화',
      browseEyebrow: '주제별 탐색',
      browseTitle: '지금 해결해야 할 운영 문제부터 찾아보세요.',
      browseSub: '전체 아카이브를 스크롤하기보다 필요한 주제에서 시작하세요.',
      recent: '최근 게시물',
      viewAll: (count) => `전체 ${count}개 글 보기`,
      backHome: '블로그 홈으로',
      archiveEyebrow: '아티클 라이브러리',
      archiveTitle: '전체 실무 가이드.',
    },
  }[lang];
  const languagePosts = React.useMemo(
    () => SORTED_BLOG_POSTS.filter((post) => (!post.languages || post.languages.includes(lang)) && (lang !== 'ko' || post.title.ko)),
    [lang]
  );
  const normalizedQuery = query.trim().toLocaleLowerCase();
  const visiblePosts = languagePosts.filter((post) => {
    const tags = getPostTags(post);
    if (activeTag !== 'all' && !tags.includes(activeTag)) return false;
    if (!normalizedQuery) return true;
    const searchable = [
      post.title[lang],
      post.excerpt[lang],
      post.cat[lang],
      ...tags.map((tagId) => getTagLabel(tagId, lang)),
    ].filter(Boolean).join(' ').toLocaleLowerCase();
    return searchable.includes(normalizedQuery);
  });
  const tagCount = (tagId) => (
    tagId === 'all'
      ? languagePosts.length
      : languagePosts.filter((post) => getPostTags(post).includes(tagId)).length
  );
  const clearFilters = () => {
    setActiveTag('all');
    setQuery('');
    setShowAll(false);
  };
  const openTopic = (tagId) => {
    setActiveTag(tagId);
    setQuery('');
    setShowAll(true);
  };
  const isOverview = activeTag === 'all' && !normalizedQuery && !showAll;
  const latestPosts = languagePosts.slice(0, 3);
  const renderPostCard = (post, index, keyPrefix = '') => (
    <a
      key={`${keyPrefix}${post.slug}`}
      href={blogPostHref(post.slug, lang)}
      style={blStyles.card}
      className="blog-card"
    >
      {post.image && (
        <div style={blStyles.thumb} className="blog-card-thumb">
          <img
            src={blogThumbSrc(post.image, lang)}
            alt={post.title[lang]}
            loading={index < 2 ? 'eager' : 'lazy'}
            decoding="async"
            fetchPriority={index === 0 ? 'high' : 'auto'}
            width="900"
            height="506"
            style={blStyles.thumbImg}
          />
        </div>
      )}
      <div style={blStyles.cardTags}>
        {getPostTags(post).map((tagId) => (
          <span key={tagId} style={blStyles.cardTag}>{getTagLabel(tagId, lang)}</span>
        ))}
      </div>
      <h3 style={blStyles.title} className="blog-card-title">{post.title[lang]}</h3>
      <p style={blStyles.excerpt}>{post.excerpt[lang]}</p>
      <div style={blStyles.meta}>
        <span>{post.date[lang]}</span>
        <span style={blStyles.dot}>·</span>
        <span>{post.read[lang]}</span>
        <span style={blStyles.arrow}>
          <i data-lucide="arrow-right" style={{ width: 16, height: 16 }}/>
        </span>
      </div>
    </a>
  );
  return (
    <section style={blStyles.wrap} className="blog-list-wrap">
      <div style={blStyles.controls} className="blog-controls">
        <label style={blStyles.searchWrap} className="blog-search">
          <i data-lucide="search" aria-hidden="true" style={{ width: 20, height: 20 }}/>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={copy.search}
            aria-label={copy.search}
            style={blStyles.searchInput}
          />
        </label>
      </div>

      {isOverview ? (
        <>
          <div style={blStyles.sectionHead} className="blog-section-head">
            <span style={blStyles.eyebrow}>{copy.browseEyebrow}</span>
            <h2 style={blStyles.sectionTitle}>{copy.browseTitle}</h2>
            <p style={blStyles.sectionSub}>{copy.browseSub}</p>
          </div>
          <div style={blStyles.topicGrid} className="blog-topic-grid">
            {BLOG_TAGS.map((tag, index) => (
              <button
                key={tag.id}
                type="button"
                onClick={() => openTopic(tag.id)}
                style={blStyles.topicCard}
                className="blog-topic-card"
              >
                <span style={blStyles.topicNumber}>{String(index + 1).padStart(2, '0')}</span>
                <span style={blStyles.topicContent}>
                  <span style={blStyles.topicTitle}>{tag.label[lang]}</span>
                  <span style={blStyles.topicDesc}>{tag.desc[lang]}</span>
                </span>
                <span style={blStyles.topicMeta}>
                  {copy.count(tagCount(tag.id))}
                  <i data-lucide="arrow-up-right" style={{ width: 16, height: 16 }}/>
                </span>
              </button>
            ))}
          </div>

          <div style={blStyles.recentStrip} className="blog-recent-strip">
            <div style={blStyles.recentTop} className="blog-recent-top">
              <span style={blStyles.recentLabel}>{copy.recent}</span>
              <button type="button" onClick={() => setShowAll(true)} style={blStyles.viewAllButton}>
                {copy.viewAll(languagePosts.length)}
                <i data-lucide="arrow-right" style={{ width: 15, height: 15 }}/>
              </button>
            </div>
            {lang === 'ko' && languagePosts.length === 0 && (
              <p style={{ margin: '18px 0 0', color: '#5E5953', fontSize: 16, lineHeight: 1.6 }}>
                한국어 아티클은 현재 순차적으로 검수·공개하고 있습니다. 검수가 끝난 글부터 이곳에 표시됩니다.
              </p>
            )}
            <div style={blStyles.recentLinks} className="blog-recent-links">
              {latestPosts.map((post) => (
                <a
                  key={post.slug}
                  href={blogPostHref(post.slug, lang)}
                  style={blStyles.recentLink}
                  className="blog-recent-link"
                >
                  <div style={blStyles.recentThumb} className="blog-recent-thumb">
                    <img
                      src={blogThumbSrc(post.image, lang)}
                      alt={post.title[lang]}
                      loading="lazy"
                      decoding="async"
                      width="900"
                      height="506"
                      style={blStyles.recentThumbImg}
                    />
                  </div>
                  <div style={blStyles.recentBody}>
                    <div style={blStyles.recentMeta}>
                      <span style={blStyles.recentDate}>{post.date[lang]}</span>
                      <span style={blStyles.recentTags}>
                        {getPostTags(post).slice(0, 2).map((tagId) => (
                          <span key={tagId} style={blStyles.recentTag}>{getTagLabel(tagId, lang)}</span>
                        ))}
                      </span>
                    </div>
                    <h3 style={blStyles.recentTitle} className="blog-recent-title">{post.title[lang]}</h3>
                    <p style={blStyles.recentExcerpt} className="blog-recent-excerpt">{post.excerpt[lang]}</p>
                    <span style={blStyles.recentArrow}>
                      <i data-lucide="arrow-up-right" style={{ width: 17, height: 17 }}/>
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          <div style={blStyles.archiveHead} className="blog-archive-head">
            <div>
              <span style={blStyles.eyebrow}>{copy.archiveEyebrow}</span>
              <h2 style={blStyles.archiveTitle}>{activeTag === 'all' ? copy.archiveTitle : getTagLabel(activeTag, lang)}</h2>
            </div>
            <button type="button" onClick={clearFilters} style={blStyles.backButton}>
              <i data-lucide="arrow-left" style={{ width: 15, height: 15 }}/>
              {copy.backHome}
            </button>
          </div>
          <div style={blStyles.archiveControls} className="blog-archive-controls">
            <div style={blStyles.tags} className="blog-tags" aria-label={lang === 'zh' ? '文章分类' : lang === 'ko' ? '글 카테고리' : 'Article categories'}>
              {[{ id: 'all', label: { en: copy.all, zh: copy.all, ko: copy.all } }, ...BLOG_TAGS].map((tag) => {
                const isActive = activeTag === tag.id;
                return (
                  <button
                    key={tag.id}
                    type="button"
                    onClick={() => openTopic(tag.id)}
                    aria-pressed={isActive}
                    className={`blog-filter${isActive ? ' is-active' : ''}`}
                    style={isActive ? { ...blStyles.filter, ...blStyles.filterActive } : blStyles.filter}
                  >
                    <span>{tag.label[lang]}</span>
                    <span style={isActive ? { ...blStyles.filterCount, ...blStyles.filterCountActive } : blStyles.filterCount}>
                      {tagCount(tag.id)}
                    </span>
                  </button>
                );
              })}
            </div>
            <div style={blStyles.resultsRow}>
              <span>{copy.count(visiblePosts.length)}</span>
              {(activeTag !== 'all' || query) && (
                <button type="button" onClick={clearFilters} style={blStyles.clearButton}>{copy.clear}</button>
              )}
            </div>
          </div>
          <div style={blStyles.inner} className="blog-list-inner">
            {visiblePosts.map((post, index) => renderPostCard(post, index, 'archive-'))}
            {visiblePosts.length === 0 && (
              <div style={blStyles.empty}>
                <p style={{ margin: 0 }}>{copy.empty}</p>
                <button type="button" onClick={clearFilters} style={blStyles.emptyButton}>{copy.clear}</button>
              </div>
            )}
          </div>
        </>
      )}
      <style>{`
        .blog-filter { cursor: pointer; transition: color .2s, background .2s, border-color .2s, transform .2s; }
        .blog-filter:hover { border-color: #171717 !important; transform: translateY(-1px); }
        .blog-topic-card { cursor: pointer; transition: transform .22s, border-color .22s, box-shadow .22s; }
        .blog-topic-card:hover { transform: translateY(-3px); border-color: rgba(255,20,147,.48) !important; box-shadow: 0 16px 36px rgba(40,31,25,.09) !important; }
        .blog-recent-link { transition: color .2s, transform .22s, border-color .22s, box-shadow .22s; }
        .blog-recent-link:hover { color: #B10A69 !important; transform: translateY(-3px); border-color: rgba(255,20,147,.45) !important; box-shadow: 0 18px 42px rgba(40,31,25,.10) !important; }
        .blog-recent-thumb img { transition: transform .35s ease; }
        .blog-recent-link:hover .blog-recent-thumb img { transform: scale(1.025); }
        .blog-recent-link:hover .blog-recent-title { background: linear-gradient(90deg,#FF1493,#9B30FF,#4A8FFF); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; }
        .blog-card { transition: border-color .25s, transform .25s, box-shadow .25s; }
        .blog-card:hover { border-color: rgba(255,20,147,.42) !important; transform: translateY(-3px); box-shadow: 0 18px 46px rgba(40,31,25,.10) !important; }
        .blog-card:hover .blog-card-title { background: linear-gradient(90deg,#FF1493,#9B30FF,#4A8FFF); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; }
        .blog-search:focus-within { border-color: #171717 !important; box-shadow: 0 0 0 4px rgba(255,20,147,.09); }
        .blog-search input::-webkit-search-cancel-button { cursor: pointer; }
        @media (max-width: 980px) {
          .blog-list-inner { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
          .blog-topic-grid { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
        }
        @media (max-width: 760px) {
          .blog-list-wrap { padding: 32px 0 72px !important; max-width: 100vw !important; overflow: hidden !important; }
          .blog-controls { padding: 0 20px !important; margin-bottom: 28px !important; }
          .blog-section-head, .blog-archive-head, .blog-archive-controls { padding-left: 20px !important; padding-right: 20px !important; }
          .blog-topic-grid { margin: 0 20px !important; grid-template-columns: 1fr !important; gap: 12px !important; }
          .blog-topic-card { min-height: 154px !important; padding: 22px !important; }
          .blog-recent-strip { margin: 34px 20px 0 !important; padding: 24px 0 0 !important; }
          .blog-recent-top { align-items: flex-start !important; flex-direction: column !important; gap: 12px !important; }
          .blog-recent-links { grid-template-columns: 1fr !important; gap: 16px !important; }
          .blog-recent-link { min-height: 0 !important; }
          .blog-recent-thumb { height: 188px !important; }
          .blog-recent-title { font-size: 23px !important; }
          .blog-archive-head { align-items: flex-start !important; flex-direction: column !important; gap: 18px !important; }
          .blog-tags { margin-left: -20px !important; margin-right: -20px !important; padding: 2px 20px 8px !important; }
          .blog-list-inner { padding: 0 20px !important; max-width: 100% !important; gap: 16px !important; grid-template-columns: 1fr !important; }
          .blog-card { padding: 24px 20px 22px !important; border-radius: 16px !important; }
          .blog-card-thumb { margin: -24px -20px 22px !important; height: 176px !important; }
          .blog-card-title { font-size: clamp(26px, 8vw, 34px) !important; line-height: 1.05 !important; letter-spacing: 0 !important; }
          .blog-card p { font-size: 15px !important; line-height: 1.55 !important; }
        }
      `}</style>
    </section>
  );
};
const blStyles = {
  wrap: { background: '#F5F3EE', padding: '44px 0 110px' },
  controls: { maxWidth: 1180, margin: '0 auto 52px', padding: '0 32px' },
  searchWrap: { maxWidth: 720, margin: '0 auto', minHeight: 58, padding: '0 20px', display: 'flex', alignItems: 'center', gap: 12, color: '#6D665F', background: '#FFFFFF', border: '1px solid #DCD6CD', borderRadius: 16, boxShadow: '0 8px 24px rgba(40,31,25,.05)', transition: 'border-color .2s, box-shadow .2s' },
  searchInput: { width: '100%', height: 56, border: 0, outline: 0, background: 'transparent', color: '#171717', fontFamily: 'var(--font-sans)', fontSize: 16 },
  sectionHead: { maxWidth: 1180, margin: '0 auto 26px', padding: '0 32px' },
  eyebrow: { display: 'block', marginBottom: 12, color: '#B10A69', fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 750, letterSpacing: '.13em', textTransform: 'uppercase' },
  sectionTitle: { maxWidth: 720, margin: 0, color: '#171717', fontFamily: 'var(--font-sans)', fontSize: 'clamp(30px, 3.8vw, 50px)', fontWeight: 850, letterSpacing: '-.045em', lineHeight: 1.03 },
  sectionSub: { maxWidth: 620, margin: '16px 0 0', color: '#625C56', fontFamily: 'var(--font-sans)', fontSize: 16, lineHeight: 1.6 },
  topicGrid: { maxWidth: 1180, margin: '0 auto', padding: '0 32px', display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: 16 },
  topicCard: { minHeight: 190, padding: 24, display: 'flex', flexDirection: 'column', alignItems: 'stretch', textAlign: 'left', color: '#171717', background: '#FFFFFF', border: '1px solid #E1DCD4', borderRadius: 16, boxShadow: '0 7px 20px rgba(40,31,25,.04)', fontFamily: 'var(--font-sans)' },
  topicNumber: { color: '#B10A69', fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 750, letterSpacing: '.08em' },
  topicContent: { display: 'flex', flexDirection: 'column', gap: 8, marginTop: 22 },
  topicTitle: { fontSize: 21, fontWeight: 820, letterSpacing: '-.025em', lineHeight: 1.05 },
  topicDesc: { color: '#68615B', fontSize: 13, lineHeight: 1.5 },
  topicMeta: { marginTop: 'auto', paddingTop: 18, display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#8A837C', fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '.05em', textTransform: 'uppercase' },
  recentStrip: { maxWidth: 1116, margin: '40px auto 0', padding: '28px 0 0', borderTop: '1px solid #D8D1C8' },
  recentTop: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20 },
  recentLabel: { color: '#B10A69', fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 780, letterSpacing: '.13em', textTransform: 'uppercase' },
  viewAllButton: { padding: 0, display: 'inline-flex', alignItems: 'center', gap: 8, border: 0, background: 'transparent', color: '#171717', cursor: 'pointer', fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 780 },
  recentLinks: { marginTop: 22, display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', alignItems: 'stretch', gap: 18 },
  recentLink: { minWidth: 0, minHeight: 440, display: 'flex', flexDirection: 'column', overflow: 'hidden', color: '#272421', background: '#FFFFFF', border: '1px solid #E1DCD4', borderRadius: 16, boxShadow: '0 8px 26px rgba(40,31,25,.05)', textDecoration: 'none' },
  recentThumb: { height: 198, overflow: 'hidden', background: '#ECE8E1' },
  recentThumbImg: { width: '100%', height: '100%', display: 'block', objectFit: 'cover' },
  recentBody: { position: 'relative', flex: 1, padding: '20px 20px 22px', display: 'flex', flexDirection: 'column' },
  recentMeta: { minHeight: 24, marginBottom: 14, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10 },
  recentDate: { flex: '0 0 auto', color: '#888078', fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '.05em' },
  recentTags: { display: 'flex', justifyContent: 'flex-end', gap: 5, overflow: 'hidden' },
  recentTag: { padding: '4px 7px', borderRadius: 999, color: '#A40B61', background: '#F8E8F1', fontFamily: 'var(--font-mono)', fontSize: 8, fontWeight: 750, letterSpacing: '.04em', textTransform: 'uppercase', whiteSpace: 'nowrap' },
  recentTitle: { margin: 0, color: '#171717', fontFamily: 'var(--font-sans)', fontSize: 22, fontWeight: 830, letterSpacing: '-.025em', lineHeight: 1.12 },
  recentExcerpt: { margin: '12px 28px 0 0', color: '#625C56', fontFamily: 'var(--font-sans)', fontSize: 13, lineHeight: 1.52 },
  recentArrow: { marginTop: 'auto', paddingTop: 18, alignSelf: 'flex-end', display: 'inline-flex', color: '#FF1493' },
  archiveHead: { maxWidth: 1180, margin: '0 auto 30px', padding: '0 32px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24 },
  archiveTitle: { margin: 0, color: '#171717', fontFamily: 'var(--font-sans)', fontSize: 'clamp(34px, 4.2vw, 56px)', fontWeight: 850, letterSpacing: '-.045em', lineHeight: 1 },
  backButton: { padding: '10px 14px', display: 'inline-flex', alignItems: 'center', gap: 8, border: '1px solid #D8D1C8', borderRadius: 999, color: '#4F4944', background: '#FFFFFF', cursor: 'pointer', fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 740 },
  archiveControls: { maxWidth: 1180, margin: '0 auto 28px', padding: '0 32px' },
  tags: { display: 'flex', gap: 10, overflowX: 'auto', padding: '2px 2px 8px', scrollbarWidth: 'none' },
  filter: { flex: '0 0 auto', minHeight: 42, padding: '8px 10px 8px 16px', display: 'inline-flex', alignItems: 'center', gap: 9, border: '1px solid #D8D1C8', borderRadius: 999, background: '#ECE8E1', color: '#4E4944', fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 750 },
  filterActive: { background: '#171717', borderColor: '#171717', color: '#FFFFFF' },
  filterCount: { minWidth: 24, height: 24, padding: '0 7px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: 999, background: 'rgba(23,23,23,.08)', color: '#6C655F', fontFamily: 'var(--font-mono)', fontSize: 10 },
  filterCountActive: { background: '#FF1493', color: '#FFFFFF' },
  resultsRow: { minHeight: 32, marginTop: 12, display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#746E67', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.07em', textTransform: 'uppercase' },
  clearButton: { padding: 6, border: 0, background: 'transparent', color: '#B10A69', cursor: 'pointer', fontFamily: 'inherit', fontSize: 'inherit', fontWeight: 700, textDecoration: 'underline', textUnderlineOffset: 3 },
  inner: { maxWidth: 1180, margin: '0 auto', padding: '0 32px', display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', alignItems: 'stretch', gap: 22 },
  card: { display: 'flex', flexDirection: 'column', minWidth: 0, textDecoration: 'none', color: '#171717', background: '#FFFFFF', border: '1px solid #E1DCD4', borderRadius: 18, padding: '28px 28px 26px', overflow: 'hidden', boxShadow: '0 8px 26px rgba(40,31,25,.055)' },
  thumb: { margin: '-28px -28px 24px', height: 188, overflow: 'hidden' },
  thumbImg: { width: '100%', height: '100%', objectFit: 'cover', display: 'block' },
  cardTags: { display: 'flex', flexWrap: 'wrap', gap: 7, marginBottom: 16 },
  cardTag: { display: 'inline-flex', alignItems: 'center', minHeight: 25, padding: '5px 9px', borderRadius: 999, background: '#F8E8F1', color: '#A40B61', fontFamily: 'var(--font-mono)', fontSize: 9, fontWeight: 750, letterSpacing: '.07em', textTransform: 'uppercase' },
  title: { fontFamily: 'var(--font-sans)', fontWeight: 850, fontSize: 'clamp(24px, 2.2vw, 31px)', lineHeight: 1.1, letterSpacing: '-.032em', textTransform: 'none', margin: '0 0 14px', color: '#171717' },
  excerpt: { fontFamily: 'var(--font-sans)', fontSize: 15, lineHeight: 1.58, color: '#5B5650', margin: '0 0 22px' },
  meta: { display: 'flex', alignItems: 'center', gap: 8, marginTop: 'auto', paddingTop: 2, fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '.06em', textTransform: 'none', color: '#77716A' },
  dot: { opacity: .5 },
  arrow: { marginLeft: 'auto', color: '#FF1493', display: 'inline-flex' },
  empty: { gridColumn: '1 / -1', padding: '72px 24px', textAlign: 'center', border: '1px dashed #CFC7BD', borderRadius: 18, color: '#5B5650', fontFamily: 'var(--font-sans)', fontSize: 17 },
  emptyButton: { marginTop: 18, padding: '11px 18px', border: 0, borderRadius: 999, background: '#171717', color: '#FFFFFF', cursor: 'pointer', fontFamily: 'var(--font-sans)', fontWeight: 750 },
};
window.BLOG_POSTS = SORTED_BLOG_POSTS;
window.BLOG_TAGS = BLOG_TAGS;
window.BlogList = BlogList;
