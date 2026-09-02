// Shared Chinese versions for legacy blog posts.
// Keep this separate so older per-post HTML files stay small and easier to maintain.
const ZP = (text) => ({ kind: 'p', text });
const ZH3 = (text) => ({ kind: 'h3', text });
const ZUL = (items) => ({ kind: 'list', items });
const ZCTA = (label = '预约一次策略沟通 ->') => ({ kind: 'cta', label, href: 'https://zus03h0enw04.sg.larksuite.com/scheduler/03970278dd9a7925' });
const ZINFO = (src, alt, caption) => ({ kind: 'infographic', src, alt, caption });

window.BLOG_ZH_LABELS = {
  back: '博客',
  toc: '本文目录',
  faq: '常见问题',
  related: '相关文章',
};

window.BLOG_ZH_POSTS = {
  'what-does-a-tiktok-shop-agency-do': {
    meta: {
      title: 'TikTok Shop 代理机构到底在做什么？',
      cat: 'TIKTOK SHOP · 代运营概览',
      author: 'WE Marketing Team',
      date: '2025 年 8 月 20 日',
      read: '8 分钟阅读',
      heroImage: 'hero-1-what-does-a-tiktok-shop-agency-do.png',
      heroAlt: 'TikTok Shop 运营团队查看达人、内容和销售数据看板。',
    },
    sections: [
      { id: 'intro', h: 'TikTok Shop 代理机构真正负责什么', body: [
        ZP('TikTok Shop 不是只开一个店铺、上传几个产品就会自然出单。真正的增长来自达人内容、联盟佣金、寄样节奏、店铺转化和广告放大的组合。'),
        ZP('所以 TikTok Shop agency 的核心价值，不是“帮你发帖”，而是把品牌在 TikTok Shop 上的销售系统跑起来：持续找到合适达人，持续产出能转化的内容，并把表现好的内容放大成稳定 GMV。'),
      ]},
      { id: 'creator-ops', h: '达人招募与关系管理', body: [
        ZP('TikTok Shop 的增长很大程度上取决于达人内容密度。品牌需要不断触达、筛选、沟通和激活创作者，让他们愿意试用产品、拍视频、挂车并复盘表现。'),
        ZP('好的代理机构通常已经有垂类达人池和沟通流程，可以更快匹配美妆、个护、家居、食品、宠物、时尚等品类达人。对出海品牌来说，美国本土达人网络尤其重要，因为语感、生活场景和购买理由都需要本地化。'),
      ]},
      { id: 'affiliate', h: '达人联盟计划搭建与优化', body: [
        ZP('TikTok Shop 达人联盟让创作者通过带货获得佣金。设置佣金并不难，难的是让佣金结构既能吸引优质达人，又不把品牌利润吃掉。'),
        ZP('代理机构会根据品类、客单价、毛利、竞争强度和达人层级，帮助品牌设计公开合作、定向合作、短期加佣、爆品重点推等策略。'),
      ]},
      { id: 'samples', h: '寄样与内容追踪', body: [
        ZP('寄样是很多品牌低估的运营环节。谁申请了样品、是否适合品牌、样品是否寄出、达人是否收到、什么时候发内容、内容质量如何，都需要有人跟进。'),
        ZP('如果没有筛选和追踪，样品很容易变成成本。成熟的 TikTok Shop 代运营会在寄样前看达人历史内容、类目匹配度、过往出单能力和发布稳定性，再决定是否寄样。'),
      ]},
      { id: 'shop-ops', h: '店铺运营与商品转化', body: [
        ZP('店铺端同样影响转化。产品标题、主图、卖点、优惠、库存、履约、评价和平台合规都会影响用户是否下单。'),
        ZP('TikTok Shop 代理机构会持续优化 listing，把“达人视频里被种草的理由”转化为商品页上的清晰卖点，让用户从视频跳到商品卡时能更快做决定。'),
      ]},
      { id: 'content', h: '内容策略与广告放大', body: [
        ZP('当某条达人视频自然表现好，品牌可以通过 Spark Ads 或其他付费方式放大。相比从零制作传统广告，用已经验证过的 UGC 视频放大，通常更贴近 TikTok 用户的内容语境。'),
        ZP('好的代理机构会帮助品牌判断哪些内容值得投放、哪些视频适合二次剪辑、哪些素材可以复用到 Meta、Instagram Reels 或 Amazon 页面。'),
      ]},
      { id: 'reporting', h: '数据复盘与增长节奏', body: [
        ZP('TikTok Shop 运营不能只看总销售额。更重要的是看每个产品、每个达人、每类内容、每一轮寄样和每个佣金策略带来的变化。'),
        ZP('代理机构应该定期给品牌复盘 GMV、内容量、发帖率、转化率、达人表现和下一步动作，而不是只发一份漂亮报表。'),
      ]},
      { id: 'choose', h: '如何选择 TikTok Shop 代理机构', body: [
        ZP('选择 agency 时，建议重点看这几件事：是否理解你的品类，是否有美国本土达人资源，是否能管理寄样和达人跟进，是否能同时看内容和销售数据。'),
        ZUL(['是否具备 TikTok Shop 运营经验，而不只是普通社媒代运营', '是否能说明达人筛选标准、寄样流程和内容复盘方法', '是否有与你类似品类或阶段的品牌案例', '沟通是否清楚，能否让你每周知道钱花在哪里、增长卡在哪里']),
        ZCTA(),
      ]},
    ],
    faqs: [
      { q: 'TikTok Shop 代理机构和普通社媒 agency 有什么不同？', a: '普通社媒 agency 更常关注曝光、粉丝和互动。TikTok Shop 代理机构更关注达人内容如何带来订单，包括联盟佣金、寄样、商品页、履约和 GMV 复盘。' },
      { q: '品牌可以自己做 TikTok Shop 吗？', a: '可以，但需要每天处理达人招募、寄样、内容跟进、店铺运营和数据优化。如果团队没有专人负责，通常很难持续。' },
      { q: '出海品牌为什么需要美国本土 TikTok Shop 资源？', a: '美国市场的内容语感、达人沟通、用户痛点和购买理由都更本地化。美国本土达人和本地运营经验能降低冷启动成本。' },
    ],
    related: [],
  },

  'how-to-choose-tiktok-shop-agency-as-creator': {
    meta: { title: '达人如何选择 TikTok Shop 代理机构', cat: '达人 · 选代理机构', author: 'WE Marketing Team', date: '2025 年 9 月 15 日', read: '7 分钟阅读', heroImage: 'hero-2-how-to-choose-tiktok-shop-agency-as-creator.png', heroAlt: 'TikTok Shop 达人在对比不同代理机构合作机会。' },
    sections: [
      { id: 'intro', h: '达人选择 agency，不只是看谁给样品', body: [
        ZP('对 TikTok Shop 达人来说，代理机构会影响你拿到什么产品、佣金多少、品牌是否配合、内容有没有被放大，以及长期收入是否稳定。'),
        ZP('一个好的 TikTok Shop agency 应该帮你更高效地接触适合账号定位的品牌，而不是把不相关的样品塞给你。'),
      ]},
      { id: 'does', h: '代理机构能为达人做什么', body: [
        ZP('对创作者端来说，agency 的价值包括品牌匹配、样品协调、佣金沟通、内容方向建议、表现复盘和长期合作机会。'),
        ZP('尤其是中腰部达人，很多机会不是公开挂在那里等你申请，而是来自 agency 与品牌之间的定向招募。'),
      ]},
      { id: 'red-flags', h: '需要避开的信号', body: [
        ZUL(['只承诺免费样品，却不说明佣金和合作规则', '频繁推与你账号受众不匹配的产品', '沟通混乱，样品和发布时间没人跟进', '要求你发布过度脚本化、像硬广的内容', '不尊重你的内容风格和粉丝信任']),
      ]},
      { id: 'green-flags', h: '值得合作的信号', body: [
        ZUL(['会根据你的内容风格匹配品牌', '清楚说明佣金、样品、发布时间和内容要求', '愿意提供产品卖点，但不强迫你照读脚本', '会复盘哪些视频带来点击和订单', '能帮表现好的达人争取更多品牌合作和加佣机会']),
      ]},
      { id: 'questions', h: '加入前可以问什么', body: [
        ZP('你可以直接问：这个品牌适合我的受众吗？佣金是多少？样品是否需要退回？有没有发布时间要求？视频是否会用于广告投放？如果表现好，是否有长期合作或加佣空间？'),
        ZP('这些问题不是麻烦，而是专业。靠谱的 agency 会愿意把规则讲清楚。'),
      ]},
      { id: 'wem', h: 'WE Marketing 如何和达人合作', body: [
        ZP('我们更看重内容匹配和长期关系，而不是一次性铺样。合适的达人会收到更匹配的品牌机会，也会得到更清楚的产品信息和合作节奏。'),
        ZCTA('申请加入达人合作 ->'),
      ]},
    ],
    faqs: [
      { q: 'TikTok Shop 达人需要签 agency 吗？', a: '不一定。你可以独立接合作，但 agency 可以帮你更快接触品牌、协调样品和争取更适合的合作机会。' },
      { q: '达人应该优先看佣金还是产品匹配度？', a: '两者都重要。高佣金但不适合账号受众，通常内容表现不会稳定；产品匹配度好，才有长期收入空间。' },
      { q: 'UGC 创作者也可以做 TikTok Shop 吗？', a: '可以。很多品牌需要真实使用场景和短视频素材，UGC 创作者可以通过联盟带货、授权素材或品牌合作变现。' },
    ],
    related: [],
  },

  'tiktok-shop-affiliate-program-brand-guide': {
    meta: { title: 'TikTok Shop 联盟计划：品牌完整指南', cat: '达人联盟 · 品牌指南', author: 'WE Marketing Team', date: '2025 年 10 月 8 日', read: '10 分钟阅读', heroImage: 'hero-3-tiktok-shop-affiliate-program-brand-guide.png', heroAlt: '品牌团队管理 TikTok Shop 达人联盟项目。' },
    sections: [
      { id: 'intro', h: '品牌视角下的 TikTok Shop 达人联盟', body: [
        ZP('TikTok Shop Affiliate Program 的本质，是让创作者用内容帮品牌卖货，并通过成交获得佣金。对品牌来说，这不是简单的“开佣金”，而是一套达人增长系统。'),
        ZP('做得好，联盟计划可以同时带来销售、内容资产、产品反馈和市场验证。做得不好，则会变成样品成本和低质量内容。'),
      ]},
      { id: 'how-it-works', h: '联盟计划如何运作', body: [
        ZP('品牌可以设置商品佣金，达人选择合作商品并发布带商品链接的视频或直播。用户通过内容进入商品卡下单后，达人获得相应佣金。'),
        ZP('品牌需要决定哪些产品开放合作、佣金多少、是否允许所有达人申请、哪些达人定向邀请，以及如何管理样品。'),
      ]},
      { id: 'commission', h: '如何设置合适佣金', body: [
        ZP('佣金太低，优质达人没有动力；佣金太高，又会压缩利润。合理佣金要结合毛利、客单价、复购、竞争品类和内容制作难度。'),
        ZP('冷启动阶段，品牌可以对重点产品短期提高佣金，用来吸引更好的达人测试内容。一旦找到能转化的卖点，再逐步优化结构。'),
      ]},
      { id: 'tiers', h: '理解达人层级', body: [
        ZINFO('info-3a-creator-tiers.png', 'TikTok Shop 达人层级示意图', '不同层级达人适合不同目标：内容量、垂类信任、爆发曝光。'),
        ZP('新品牌不一定只追大达人。很多时候，中腰部和垂类达人更愿意试产品，也更容易产出真实使用场景。'),
      ]},
      { id: 'samples', h: '寄样流程怎么设计', body: [
        ZP('寄样前要先筛选达人，寄样后要跟进内容发布时间和视频质量。样品数量越多，越需要系统化管理。'),
        ZP('建议品牌明确：哪些达人可以直接寄样，哪些需要人工审核，样品寄出后多久跟进，未发布内容如何处理。'),
      ]},
      { id: 'mistakes', h: '品牌常见错误', body: [
        ZINFO('info-3b-post-rate.png', 'TikTok Shop 寄样后发帖率对比', '筛选和跟进会直接影响样品转化为内容的比例。'),
        ZUL(['只开公开合作，不做定向达人招募', '佣金设置一刀切，没有按产品和阶段调整', '寄样不筛选，导致大量样品没有内容产出', '只看 GMV，不看内容质量和可复用素材', '没有及时放大表现好的达人视频']),
      ]},
      { id: 'measurement', h: '如何衡量联盟计划', body: [
        ZP('除了 GMV，还要看达人申请量、通过率、寄样量、发帖率、每条内容销售额、转化率、复购和可复用素材数量。'),
        ZCTA(),
      ]},
    ],
    faqs: [
      { q: 'TikTok Shop 达人联盟适合新品牌吗？', a: '适合，但新品牌需要更重视达人筛选、产品卖点和寄样跟进。只开佣金通常不够。' },
      { q: '佣金应该设置多少？', a: '没有固定答案。需要看品类毛利、客单价、竞争强度和品牌阶段。冷启动可以用阶段性加佣测试达人响应。' },
      { q: '公开合作和定向合作有什么区别？', a: '公开合作面向更多达人，适合扩大申请量；定向合作更适合邀请匹配度高或表现强的达人。' },
    ],
    related: [],
  },

  'amazon-sellers-expand-to-tiktok-shop': {
    meta: { title: '亚马逊卖家：为什么 TikTok Shop 是你的下一个销售渠道', cat: '亚马逊卖家 · 新渠道', author: 'WE Marketing Team', date: '2025 年 11 月 10 日', read: '8 分钟阅读', heroImage: 'hero-4-amazon-sellers-expand-to-tiktok-shop.png', heroAlt: '亚马逊卖家评估 TikTok Shop 作为新销售渠道。' },
    sections: [
      { id: 'why-look', h: '为什么亚马逊卖家开始关注 TikTok Shop', body: [
        ZP('很多亚马逊卖家的增长已经遇到同样的问题：站内广告越来越贵，类目竞争越来越透明，Listing 优化空间越来越小。'),
        ZP('TikTok Shop 提供的是另一种增长逻辑：先通过内容被发现，再直接完成购买。对有供应链、有库存、有成熟产品的亚马逊卖家来说，这是一个值得测试的新渠道。'),
      ]},
      { id: 'why-add', h: '为什么要把 TikTok Shop 加入渠道组合', body: [
        ZP('TikTok Shop 不只是新增一个销售入口。它还能为亚马逊卖家带来用户洞察、UGC 视频素材、产品卖点测试和品牌搜索增量。'),
        ZP('当达人内容跑起来，品牌不仅可能在 TikTok Shop 出单，也可能带动用户回到 Amazon 搜索品牌或产品。'),
      ]},
      { id: 'start', h: '亚马逊卖家如何开始', body: [
        ZUL(['先选择 1-3 个最适合视频展示的产品', '确认毛利是否支持达人佣金和寄样成本', '重写产品卖点，让它适合短视频表达', '搭建 TikTok Shop listing、优惠和基础履约', '用小规模达人测试内容角度，再扩大寄样和投放']),
      ]},
      { id: 'stuck', h: '亚马逊卖家最容易卡在哪里', body: [
        ZP('亚马逊运营习惯看关键词、排名和评论；TikTok Shop 更看内容触发、达人信任和即时购买冲动。两套逻辑不一样。'),
        ZP('常见卡点包括：内容太像广告、达人沟通不熟、样品发出后没人跟、商品页没有承接视频卖点，以及团队没有时间每天运营。'),
        ZCTA(),
      ]},
    ],
    faqs: [
      { q: '亚马逊卖家做 TikTok Shop 会不会影响 Amazon 销售？', a: '通常更像渠道补充。TikTok Shop 可以带来新客和内容资产，有些用户也会回到 Amazon 搜索品牌。' },
      { q: '哪些亚马逊产品更适合 TikTok Shop？', a: '适合视频展示、有明显使用场景、卖点能快速讲清楚、毛利能支持佣金和寄样的产品更适合。' },
      { q: '亚马逊团队可以自己运营 TikTok Shop 吗？', a: '可以，但需要补足达人招募、短视频内容和联盟运营能力。' },
    ],
    related: [],
  },

  'signs-your-brand-is-ready-for-tiktok-shop': {
    meta: { title: '品牌准备好上 TikTok Shop 的 5 个信号', cat: '策略 · 准备度', author: 'WE Marketing Team', date: '2025 年 12 月 3 日', read: '7 分钟阅读', heroImage: 'hero-5-signs-your-brand-is-ready-for-tiktok-shop.png', heroAlt: '品牌团队检查是否适合上线 TikTok Shop。' },
    sections: [
      { id: 'ready', h: '你的品牌真的准备好了吗？', body: [
        ZP('TikTok Shop 机会很大，但不是每个品牌都适合马上冲。准备度越高，冷启动成本越低，达人内容也越容易转化。'),
      ]},
      { id: 'camera', h: '1. 产品在镜头前有表达力', body: [
        ZP('适合 TikTok Shop 的产品通常能在 3-10 秒内让用户看懂：它解决什么问题、使用前后有什么差异、为什么值得买。'),
      ]},
      { id: 'margin', h: '2. 毛利能支持达人佣金', body: [
        ZP('达人联盟需要佣金，冷启动还可能需要寄样和短期加佣。如果毛利太薄，品牌很难给达人足够动力。'),
      ]},
      { id: 'fulfillment', h: '3. 履约能跟上放量', body: [
        ZP('TikTok 内容有时会突然爆发。品牌需要确认库存、发货、客服和退换货流程能承接增长。'),
      ]},
      { id: 'samples', h: '4. 有足够产品用于寄样', body: [
        ZP('达人内容需要产品体验。品牌需要预留样品预算，并建立寄样筛选和跟进机制。'),
      ]},
      { id: 'team', h: '5. 有人能每天推进', body: [
        ZP('TikTok Shop 不是一次性项目，而是持续运营。达人回复、样品状态、视频表现和店铺转化都需要日常跟进。'),
        ZCTA(),
      ]},
    ],
    faqs: [
      { q: '新品牌适合做 TikTok Shop 吗？', a: '如果产品有清晰卖点、毛利支持佣金、能寄样并愿意持续测试内容，新品牌也可以做。' },
      { q: '什么产品不太适合 TikTok Shop？', a: '难以视频展示、客单太高且解释成本很高、履约不稳定或毛利无法支持佣金的产品会更难。' },
      { q: '上线前最应该准备什么？', a: '先准备核心产品、达人佣金策略、样品流程、商品页卖点和至少 30-60 天的内容测试节奏。' },
    ],
    related: [],
  },

  'tiktok-shop-management-what-to-expect': {
    meta: { title: 'TikTok Shop 全托管：品牌应该期待代理交付什么', cat: '代理 · 全托管', author: 'WE Marketing Team', date: '2026 年 1 月 8 日', read: '9 分钟阅读', heroImage: 'hero-6-tiktok-shop-management-what-to-expect.png', heroAlt: 'TikTok Shop 全托管团队管理达人、内容和店铺运营。' },
    sections: [
      { id: 'expect', h: '找 TikTok Shop 代运营，应该期待什么', body: [
        ZP('好的 TikTok Shop management agency 不是只帮你“维护店铺”，而是负责把达人、内容、商品和数据串成增长系统。'),
      ]},
      { id: 'includes', h: '全托管通常包括哪些内容', body: [
        ZUL(['店铺基础设置和商品页优化', '达人招募、筛选、沟通和寄样', '达人联盟佣金策略和活动设置', '内容表现追踪与优质素材放大', '促销、库存和平台合规协同', '每周或每月数据复盘']),
      ]},
      { id: 'pricing', h: '常见收费方式', body: [
        ZP('市场上常见模式包括月度 retainer、GMV 分成、项目制启动费，或几种组合。品牌要看清楚费用覆盖范围：是否包含达人招募、寄样管理、广告投放管理和创意复盘。'),
      ]},
      { id: 'first-90', h: '前 90 天通常发生什么', body: [
        ZP('前 30 天重点是店铺基础、产品选择、佣金策略和第一批达人激活。30-60 天看内容量和早期销售信号。60-90 天开始根据数据扩大有效产品、达人类型和内容角度。'),
      ]},
      { id: 'inhouse', h: '自建团队、代理、还是混合模式', body: [
        ZP('如果品牌内部已经有内容和电商团队，可以用混合模式，让 agency 负责达人和 TikTok Shop 专项运营。如果内部没有专人，全托管会更快启动。'),
        ZCTA(),
      ]},
    ],
    faqs: [
      { q: 'TikTok Shop 全托管一般多久看到结果？', a: '通常前 30-60 天更偏测试和内容积累，90 天左右更适合判断产品、达人和内容策略是否跑通。' },
      { q: '全托管是否包含广告投放？', a: '不同代理不同。签约前要确认是否包含 Spark Ads、素材二剪和投放复盘。' },
      { q: '品牌还需要参与吗？', a: '需要。产品信息、库存、价格、样品和品牌方向都需要品牌配合。代理负责执行和优化，但不能替代品牌决策。' },
    ],
    related: [],
  },

  'is-tiktok-shop-worth-it-for-brands': {
    meta: { title: '2026 年 TikTok Shop 还值不值得品牌做？', cat: '策略 · 2026', author: 'WE Marketing Team', date: '2026 年 2 月 25 日', read: '9 分钟阅读', heroImage: 'hero-7-is-tiktok-shop-worth-it-for-brands.png', heroAlt: '品牌评估 2026 年 TikTok Shop 渠道机会。' },
    sections: [
      { id: 'market', h: '市场机会已经不只是概念', body: [
        ZINFO('info-7-gmv-growth.png', 'TikTok Shop GMV 增长趋势图', 'TikTok Shop 已经从新渠道变成品牌必须认真评估的内容电商渠道。'),
        ZP('到 2026 年，品牌问的问题不应该只是“TikTok Shop 有没有机会”，而是“这个渠道是否适合我的产品、利润和团队能力”。'),
      ]},
      { id: 'sales', h: 'TikTok Shop 如何真正带来销售', body: [
        ZP('TikTok Shop 的销售来自内容发现、达人信任和站内交易的结合。用户不一定先搜索产品，而是在刷视频时被使用场景触发购买。'),
      ]},
      { id: 'cost', h: '真实成本包括什么', body: [
        ZP('成本不只是佣金。还包括样品、运营人力、内容管理、优惠、广告放大、退换货和试错时间。'),
      ]},
      { id: 'volume', h: '内容量是现实问题', body: [
        ZP('TikTok Shop 需要持续内容，而不是一两条品牌视频。品牌要么自建达人和 UGC 流程，要么与有达人网络和运营节奏的 agency 合作。'),
      ]},
      { id: 'worth', h: '所以，到底值不值得做？', body: [
        ZP('如果你的产品适合视频展示、毛利能支持佣金、供应链稳定，并且愿意用 60-90 天测试内容和达人模型，TikTok Shop 值得认真做。'),
        ZP('如果产品解释成本高、毛利极薄、履约不稳，或团队完全没有精力跟进，它可能暂时不是优先级。'),
        ZCTA(),
      ]},
    ],
    faqs: [
      { q: 'TikTok Shop 适合所有品牌吗？', a: '不适合。它更适合有清晰使用场景、能被短视频种草、并且毛利支持佣金和寄样的产品。' },
      { q: '品牌应该先做 TikTok Shop 还是先做 TikTok 内容？', a: '最好一起设计。内容负责触发兴趣，TikTok Shop 负责承接购买。' },
      { q: '2026 年进入 TikTok Shop 会不会太晚？', a: '不算晚，但粗放铺货越来越难。后进入的品牌更需要清晰定位、达人策略和本地化内容。' },
    ],
    related: [],
  },

  'how-dtc-brands-use-tiktok-shop': {
    meta: { title: 'DTC 品牌如何用 TikTok Shop 放量', cat: 'DTC · 策略', author: 'WE Marketing Team', date: '2026 年 3 月 18 日', read: '8 分钟阅读', heroImage: 'hero-8-how-dtc-brands-use-tiktok-shop.png', heroAlt: 'DTC 品牌用 TikTok Shop 内容和达人带动增长。' },
    sections: [
      { id: 'more', h: 'TikTok Shop 不只是一个 marketplace', body: [
        ZP('对 DTC 品牌来说，TikTok Shop 更像内容驱动的增长引擎。它能直接卖货，也能测试卖点、制造 UGC、反哺官网和广告素材。'),
      ]},
      { id: 'factory', h: '它是内容工厂，不只是店铺', body: [
        ZP('DTC 品牌的优势是了解用户和产品故事。通过达人联盟，品牌可以把这些卖点转化成大量不同视角的视频，快速找到哪些场景、话术和人群最能转化。'),
      ]},
      { id: 'spillover', h: '外溢效应是真实存在的', body: [
        ZP('TikTok 上被种草的用户不一定都在 TikTok Shop 下单。有些会搜索品牌官网、Amazon 或社媒账号。因此 TikTok Shop 内容也会影响全渠道认知。'),
      ]},
      { id: 'structure', h: 'DTC 品牌如何搭建项目', body: [
        ZUL(['选择最适合视频表达的 Hero Product', '设置可持续的达人佣金和寄样预算', '把品牌卖点翻译成达人能自然表达的话术', '追踪每个达人和内容角度的销售表现', '把高转化视频复用到广告和官网页面']),
      ]},
      { id: 'advantage', h: '为什么 DTC 品牌有优势', body: [
        ZP('DTC 品牌通常更懂自己的客户、卖点和复购路径。只要把这些能力转化为 TikTok 的内容语言，就能比单纯铺货的卖家更容易建立品牌信任。'),
        ZCTA(),
      ]},
    ],
    faqs: [
      { q: 'DTC 品牌做 TikTok Shop 会不会分散官网销售？', a: '短期会有渠道分流，但长期看，内容曝光和 UGC 素材往往能反哺官网、广告和品牌搜索。' },
      { q: 'DTC 品牌应该选择哪些产品先测试？', a: '优先选择易展示、有明确痛点、客单价适中、库存稳定、毛利能支持佣金的产品。' },
      { q: 'TikTok Shop 内容可以复用吗？', a: '可以，但需要提前确认素材授权。表现好的达人视频可以用于广告、社媒、官网或电商页面。' },
    ],
    related: [],
  },

  'ugc-video-vs-traditional-ads': {
    meta: { title: '为什么 UGC 视频正在跑赢传统广告素材', cat: 'UGC · 付费投放', author: 'WE Marketing Team', date: '2026 年 3 月 25 日', read: '8 分钟阅读', heroImage: 'hero-9-ugc-video-vs-traditional-ads.png', heroAlt: 'UGC 视频素材与传统广告素材对比。' },
    sections: [
      { id: 'blindness', h: '用户对传统广告越来越免疫', body: [
        ZP('短视频平台上的用户不是来“看广告”的。他们更容易停留在真实、具体、有生活感的内容上。过度精致的品牌广告反而容易被划走。'),
      ]},
      { id: 'cost', h: '成本结构已经改变', body: [
        ZINFO('info-9-ugc-cost.png', 'UGC 视频与传统广告制作成本对比', 'UGC 让品牌用更低成本测试更多内容角度。'),
        ZP('传统广告通常制作周期长、成本高、版本少。UGC 视频可以用更低成本测试更多脚本、场景和人群。'),
      ]},
      { id: 'paid', h: '品牌如何把 UGC 用到投放里', body: [
        ZP('表现好的 UGC 可以作为 TikTok Spark Ads、Meta Reels Ads 或其他短视频广告素材。关键是保留真实感，而不是把它剪成传统硬广。'),
      ]},
      { id: 'works', h: '什么样的 UGC 更容易转化', body: [
        ZUL(['开头 3 秒有明确场景或痛点', '使用者看起来像目标用户', '卖点来自真实体验，而不是品牌口号', '画面能清楚展示产品如何使用', '结尾有自然的购买理由']),
      ]},
      { id: 'math', h: '品牌应该怎么算这笔账', body: [
        ZP('不要只比较单条视频成本。更应该看每月能测试多少内容角度、多少素材能复用、哪些视频能带来点击、加购和订单。'),
      ]},
      { id: 'start', h: '如何开始', body: [
        ZP('从 10-20 条不同角度的 UGC 测试开始，比押注一支大制作广告更适合短视频平台。跑出信号后，再把预算集中到表现好的内容。'),
        ZCTA(),
      ]},
    ],
    faqs: [
      { q: 'UGC 视频一定比传统广告好吗？', a: '不一定。品牌大片适合建立形象，UGC 更适合测试卖点、提高素材量和贴近短视频用户语境。' },
      { q: 'UGC 视频需要专业拍摄吗？', a: '不一定。很多高转化 UGC 反而需要真实使用感，但画面、声音和信息表达仍然要清楚。' },
      { q: '品牌使用达人视频投放需要授权吗？', a: '需要。投放、二次剪辑和跨平台使用最好在合作前明确授权范围。' },
    ],
    related: [],
  },

  'cross-border-brands-launch-tiktok-shop-us': {
    meta: { title: '出海品牌如何在美国 TikTok Shop 上线', cat: '出海 · 美国上线', author: 'WE Marketing Team', date: '2026 年 4 月 2 日', read: '9 分钟阅读', heroImage: 'hero-10-cross-border-brands-launch-tiktok-shop-us.png', heroAlt: '出海品牌准备进入美国 TikTok Shop 市场。' },
    sections: [
      { id: 'launch', h: '跨境品牌上线美国 TikTok Shop 的关键', body: [
        ZP('对出海品牌来说，上线 TikTok Shop 美国站不是把国内素材翻译成英文。真正的难点是本地化：用户是谁、为什么买、达人怎么讲、售后和履约怎么承接。'),
      ]},
      { id: 'localization', h: '核心挑战是本地化，不是翻译', body: [
        ZP('直译的卖点通常很难打动美国消费者。你需要把产品优势改写成美国用户熟悉的使用场景、痛点和购买理由。'),
      ]},
      { id: 'needs', h: '出海品牌需要准备什么', body: [
        ZUL(['适合美国市场的产品定位和价格', '英文商品页、卖点和 FAQ', '美国本土达人沟通和寄样流程', '稳定履约、退换货和客服安排', '符合 TikTok Shop 政策的运营方式']),
      ]},
      { id: 'language', h: '语言优势经常被低估', body: [
        ZP('中文团队懂产品和供应链，英文内容团队懂用户语感。最好的配合不是简单翻译，而是把产品事实转成美国达人愿意说、美国用户愿意信的内容。'),
      ]},
      { id: 'us-agency', h: '为什么美国本地 agency 很重要', body: [
        ZP('美国本地 TikTok Shop agency 更熟悉达人沟通、平台节奏、消费者表达和内容风险。对跨境品牌来说，这能减少试错成本。'),
      ]},
      { id: 'start', h: '如何开始', body: [
        ZP('建议先用一个重点产品、一个清晰目标人群和一批匹配达人做 60-90 天测试。跑出内容角度后，再扩大 SKU 和达人规模。'),
        ZCTA(),
      ]},
    ],
    faqs: [
      { q: '出海品牌可以直接用国内素材吗？', a: '不建议直接用。可以参考产品信息，但表达、场景和卖点需要针对美国市场重新写。' },
      { q: '美国 TikTok Shop 需要本地达人吗？', a: '强烈建议。美国本土达人更了解受众语言、生活方式和购买触发点。' },
      { q: '跨境品牌最容易失败在哪里？', a: '常见问题是内容本地化不足、履约体验不稳定、达人沟通慢，以及商品页没有承接视频卖点。' },
    ],
    related: [],
  },

  'how-to-find-creators-for-your-brand-tiktok-shop': {
    meta: { title: '如何为品牌找到合适的 TikTok Shop 达人', cat: '达人 · 筛选', author: 'WE Marketing Team', date: '2026 年 4 月 10 日', read: '10 分钟阅读', heroImage: 'hero-11-how-to-find-creators-for-your-brand-tiktok-shop.png', heroAlt: '品牌筛选 TikTok Shop 达人合作名单。' },
    sections: [
      { id: 'right', h: '重点不是找更多达人，而是找对达人', body: [
        ZP('TikTok Shop 达人招募不是数量游戏。真正重要的是达人受众、内容风格、品类匹配、发布稳定性和带货潜力。'),
      ]},
      { id: 'wrong', h: '为什么很多品牌找达人效果不好', body: [
        ZP('常见问题是只看粉丝数，不看内容质量；只发模板私信，不说明产品价值；寄样前不筛选，寄样后不跟进。'),
      ]},
      { id: 'tiers', h: 'Step 1：理解达人层级', body: [
        ZP('头部达人带来曝光，中腰部达人更适合持续内容和垂类信任，新达人可能更愿意合作。品牌需要组合不同层级，而不是只追大号。'),
      ]},
      { id: 'criteria', h: 'Step 2：先定义筛选标准', body: [
        ZUL(['账号受众是否匹配你的目标客户', '内容是否自然、有信任感', '过往是否做过相近品类', '视频互动是否真实', '是否愿意按节奏发布并沟通反馈']),
      ]},
      { id: 'where', h: 'Step 3：去哪里找达人', body: [
        ZP('品牌可以从 TikTok Shop Affiliate、达人市场、竞品视频、垂类关键词、UGC 平台和 agency 达人网络寻找达人。'),
      ]},
      { id: 'vet', h: 'Step 4：寄样前先审核', body: [
        ZP('寄样前审核能减少样品浪费。看达人最近 30-60 天内容、评论质量、视频风格和是否适合你的产品场景。'),
      ]},
      { id: 'outreach', h: 'Step 5：提高回复率的沟通方式', body: [
        ZP('私信或邮件要短、具体、和达人相关。说明为什么适合 TA、产品亮点、佣金、样品和合作节奏。不要群发一看就是模板的信息。'),
      ]},
      { id: 'timeline', h: 'Step 6：从寄样到内容发布的时间线', body: [
        ZP('通常需要预留选品、寄样、收货、体验、拍摄、发布和复盘时间。品牌越早把规则说清楚，达人越容易按节奏交付。'),
      ]},
      { id: 'followup', h: 'Step 7：跟进并建立长期关系', body: [
        ZP('第一次合作只是开始。表现好的达人应该进入长期名单，持续给新品、加佣、专属活动和素材放大机会。'),
      ]},
      { id: 'volume', h: '内容量仍然重要', body: [
        ZP('找到对的人之后，仍然需要足够内容量去测试算法和购买理由。正确做法是“筛选后的规模化”，而不是盲目铺样。'),
        ZCTA(),
      ]},
    ],
    faqs: [
      { q: 'TikTok Shop 达人应该看粉丝数吗？', a: '可以看，但不能只看粉丝数。更重要的是内容匹配度、互动质量、垂类信任和发布稳定性。' },
      { q: '品牌自己找达人还是找 agency？', a: '如果团队有时间和经验，可以自己找；如果需要快速启动或规模化，agency 的达人网络和流程会更省时间。' },
      { q: '如何提高达人发帖率？', a: '寄样前筛选、清楚沟通合作规则、及时跟进、提供卖点但保留创作自由，都会提高发帖率。' },
    ],
    related: [],
  },

  'how-retail-brands-use-tiktok-shop': {
    meta: { title: '零售品牌如何用 TikTok Shop 触达新客户', cat: '零售 · 策略', author: 'WE Marketing Team', date: '2026 年 5 月 8 日', read: '8 分钟阅读', heroImage: 'hero-12-how-retail-brands-use-tiktok-shop.png', heroAlt: '零售品牌通过 TikTok Shop 触达年轻消费者。' },
    sections: [
      { id: 'why', h: '为什么零售品牌开始加入 TikTok Shop', body: [
        ZP('零售品牌过去依赖门店、电商平台和传统广告触达用户。但年轻消费者越来越多在短视频里发现新产品，TikTok Shop 让发现和购买发生在同一场景。'),
      ]},
      { id: 'gap', h: '零售品牌面临的发现难题', body: [
        ZP('门店陈列和货架搜索适合已有需求的用户；TikTok 内容更适合创造需求。对零售品牌来说，这是一种新的获客入口。'),
      ]},
      { id: 'how', h: '零售品牌如何使用 TikTok Shop', body: [
        ZUL(['测试新品和季节性产品', '用达人内容解释产品使用场景', '把线下畅销品转成短视频爆品', '通过联盟达人扩大内容覆盖', '把高表现视频复用到广告和零售渠道']),
      ]},
      { id: 'different', h: '零售品牌需要换一种思路', body: [
        ZP('TikTok Shop 不是把货架搬到线上，而是把产品变成内容。商品卖点需要更快、更直观、更像真实用户推荐。'),
      ]},
      { id: 'start', h: '如何不打乱原有零售业务地开始', body: [
        ZP('可以先选择少量 SKU，单独设置 TikTok Shop 库存和促销节奏，用达人内容测试新客反应，再决定是否扩大。'),
        ZCTA(),
      ]},
    ],
    faqs: [
      { q: '零售品牌适合做 TikTok Shop 吗？', a: '如果产品适合短视频展示，并且能处理线上履约和达人佣金，TikTok Shop 是值得测试的新客渠道。' },
      { q: 'TikTok Shop 会不会和零售渠道冲突？', a: '可以通过 SKU、价格、套装和促销节奏管理冲突。关键是提前设计渠道策略。' },
      { q: '零售品牌应该先测哪些产品？', a: '优先选择视觉效果强、使用场景明确、客单价适中、库存稳定的产品。' },
    ],
    related: [],
  },

  'where-to-find-ugc-video-creators': {
    meta: { title: '品牌去哪里找 UGC 视频达人', cat: 'UGC · 达人获取', author: 'WE Marketing Team', date: '2026 年 5 月 15 日', read: '10 分钟阅读', heroImage: 'hero-13-where-to-find-ugc-video-creators.png', heroAlt: '品牌寻找 UGC 视频创作者。' },
    sections: [
      { id: 'need', h: '每个品牌都需要 UGC，问题是从哪里来', body: [
        ZP('UGC 视频已经成为短视频广告、TikTok Shop、官网和社媒内容的重要素材来源。关键不是有没有 UGC，而是如何稳定获得适合品牌的 UGC。'),
      ]},
      { id: 'platforms', h: '方式 1：UGC 平台', body: [
        ZP('UGC 平台适合快速下单、明确脚本和获得标准化素材。缺点是创作者可能不一定懂你的品类，也不一定能带来 TikTok Shop 销售。'),
      ]},
      { id: 'freelance', h: '方式 2：自由职业平台', body: [
        ZP('自由职业平台选择多，价格灵活，但筛选、沟通、授权和质量控制需要品牌自己投入时间。'),
      ]},
      { id: 'affiliate', h: '方式 3：TikTok Shop 联盟达人', body: [
        ZP('联盟达人既能产出 UGC，也能直接挂车带货。对品牌来说，这类素材更接近真实购买场景，后续也更容易放大。'),
      ]},
      { id: 'agency', h: '方式 4：有达人网络的 agency', body: [
        ZP('如果品牌需要规模化内容和销售结果，带有达人网络的 agency 可以同时处理筛选、寄样、内容跟进和素材授权。'),
      ]},
      { id: 'decide', h: '如何选择适合你的方式', body: [
        ZP('如果只需要少量素材，可以用平台或自由职业者。如果目标是 TikTok Shop 销售和持续内容，联盟达人或 agency 通常更合适。'),
      ]},
      { id: 'wem', h: 'WE Marketing 如何帮品牌获取 UGC', body: [
        ZP('我们会根据产品、目标用户和内容场景匹配达人，先测试真实内容表现，再把优秀素材用于 TikTok Shop、广告和品牌渠道。'),
      ]},
      { id: 'bottom', h: '结论', body: [
        ZP('UGC 不是一次性拍摄项目，而是一条内容供应链。品牌越早建立稳定来源，越容易在短视频渠道持续测试和放大。'),
        ZCTA(),
      ]},
    ],
    faqs: [
      { q: 'UGC 创作者和 TikTok Shop 达人一样吗？', a: '不完全一样。UGC 创作者侧重素材生产，TikTok Shop 达人还会挂车带货。很多创作者可以同时具备两种能力。' },
      { q: 'UGC 视频能用于广告吗？', a: '可以，但需要提前确认授权范围，包括平台、时长、剪辑和付费投放权限。' },
      { q: '品牌需要多少 UGC 视频？', a: '取决于投放和测试节奏。短视频渠道通常需要持续产出，而不是一次拍几条就结束。' },
    ],
    related: [],
  },

  'ugc-video-strategy-for-brands': {
    meta: { title: 'UGC 视频策略：搭建能驱动销售的内容流水线', cat: 'UGC · 策略', author: 'WE Marketing Team', date: '2026 年 5 月 20 日', read: '12 分钟阅读', heroImage: 'hero-14-ugc-video-strategy-for-brands.png', heroAlt: '品牌搭建 UGC 视频内容流水线。' },
    sections: [
      { id: 'pipeline', h: 'UGC 应该是一条流水线，不是一次项目', body: [
        ZP('很多品牌把 UGC 当作“找几个人拍视频”。真正有效的 UGC 策略，是持续获得、筛选、复用和放大内容的系统。'),
        ZINFO('info-14-ugc-pipeline.png', 'UGC 内容流水线示意图', '从达人匹配到素材复用，UGC 应该形成持续循环。'),
      ]},
      { id: 'three-layer', h: '三层 UGC 内容结构', body: [
        ZP('第一层是大量真实体验内容，用来测试场景和卖点。第二层是表现更好的内容，用于 TikTok Shop 和社媒。第三层是经过授权和剪辑的高表现素材，用于广告放大。'),
      ]},
      { id: 'timeline', h: '实操时间线', body: [
        ZUL(['第 1-2 周：确定产品、卖点、目标人群和创作者画像', '第 3-4 周：招募达人、寄样、收集第一批内容', '第 5-8 周：根据数据筛选高表现角度并扩大创作者', '第 9 周后：授权、二剪、投放和跨平台复用']),
      ]},
      { id: 'beats', h: '为什么这比传统 UGC 采购更有效', body: [
        ZP('传统采购容易一次性拿到一批素材，但缺少数据闭环。流水线模式会让内容、销售和广告表现互相反馈，越做越清楚什么能转化。'),
      ]},
      { id: 'brief', h: '创作者 brief 应该包含什么', body: [
        ZP('好的 brief 应该说明产品核心卖点、使用场景、禁用说法、拍摄重点、授权范围和发布时间。但不要把脚本写死，否则 UGC 会失去真实感。'),
        ZCTA(),
      ]},
    ],
    faqs: [
      { q: 'UGC 策略和达人营销有什么关系？', a: '达人营销可以是 UGC 的来源之一。品牌可以同时获得内容素材和 TikTok Shop 带货机会。' },
      { q: 'UGC brief 应该多详细？', a: '要清楚但不要过度控制。给卖点、场景和限制，保留创作者自己的表达方式。' },
      { q: 'UGC 内容如何判断好坏？', a: '看完播、点击、加购、转化、评论质量和是否能跨平台复用，而不只是画面是否好看。' },
    ],
    related: [],
  },
};
