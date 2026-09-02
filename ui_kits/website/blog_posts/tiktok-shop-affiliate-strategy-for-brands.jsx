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
      title: 'TikTok Shop Affiliate Strategy for Brands: Build the System Before Scaling Creators',
      cat: 'TIKTOK SHOP U.S. · AFFILIATE STRATEGY',
      author: 'WE Marketing Team',
      date: 'Jul 16, 2026',
      read: '9 min read',
      heroImage: 'hero-tiktok-shop-affiliate-strategy-for-brands.png',
      heroAlt: 'TikTok Shop affiliate strategy for brands showing a strong foundation, creator recruitment, activation, optimization, and performance dashboard',
    },
    sections: [
      {
        id: 'intro',
        h: 'Affiliate is not only a creator-recruitment game',
        body: [
          P('Many brands start TikTok Shop affiliate marketing by chasing volume: invite more creators, send more samples, open more plans, raise commission, and add more products.'),
          P('Those actions can help. But if the operating foundation is weak, more creators can simply expose the problems faster.'),
          P('TikTok Shop Seller University\'s Affiliate Marketing Policy looks like a rules document. For brands, it is more useful as an operating warning: affiliate growth depends on the health of the shop, the quality of the product, and the quality of the creator.'),
          P('The better question is not only "How many creators can we recruit?" The better question is: are our shop operations, product experience, creator quality, and weekly review process strong enough to keep affiliate growth eligible?'),
        ],
      },
      {
        id: 'three-layers',
        h: 'The three layers brands need to manage',
        body: [
          P('TikTok Shop affiliate marketing sounds simple: the brand offers commission, creators promote the product, and everyone shares the upside when sales happen. In practice, the platform looks at seller performance, product performance, and creator performance.'),
          UL([
            'Shop health: Does the shop have stable enough operational performance?',
            'Product health: Is each SKU strong enough on customer experience, product quality, logistics, and service?',
            'Creator quality: Does the creator have enough performance, account health, sales history, and content quality?',
          ]),
          P('This is why many affiliate programs struggle. The visible problem may look like "creators are not posting" or "content is not converting." The real problem may be the product page, sample process, customer feedback, logistics, shop health, or weekly follow-up.'),
          P('A mature TikTok Shop affiliate program cannot be managed only as outreach. It has to connect shop operations, product pages, customer service, logistics, product quality, creator selection, sample follow-up, and weekly review.'),
        ],
      },
      {
        id: 'shop-health',
        h: 'First layer: weak shop health makes creator scale risky',
        body: [
          P('TikTok Shop sets shop-level requirements for Affiliate Marketing. According to Seller University, sellers need a Shop Performance Score of 3.5 or above. SPS reflects shop operational performance on a 0-5 scale, calculated based on average performance over the last 90 days.'),
          UL([
            'If SPS falls below 3.5 but remains between 3.0 and 3.5, the seller receives a warning and cannot add new products to Affiliate Marketing, while existing collaborations are not impacted.',
            'If SPS falls below 3.0, the shop may be disqualified from Affiliate Marketing.',
            'When a shop is disqualified, active affiliate marketing collaborations may be terminated, the seller can no longer create new collaborations, and previously enrolled products are removed.',
          ]),
          P('For brands, SPS is not an abstract score. It affects whether the affiliate program can keep scaling. Fulfillment, service, customer experience, shop health, and policy discipline all affect whether the creator system can keep operating.'),
        ],
      },
      {
        id: 'product-health',
        h: 'Second layer: not every SKU belongs in affiliate',
        body: [
          P('Another mistake brands make: they want to push every available SKU into affiliate. The policy makes one point very clear: shop qualification does not guarantee that all products can be enrolled. Each product is evaluated separately.'),
          UL([
            'The product VoC Index must be less than 1.5 times the average VoC Index of products in the same listing category.',
            'The product must not have intellectual property, fair trading, or customer review-related policy violations.',
            'The product must not be flagged as inauthentic or unoriginal through reviews or other channels.',
            'If a product VoC Index is more than 3 times the category average, the product may face restrictions or removal from Affiliate Marketing.',
          ]),
          P('Creator content will amplify the strengths of a product, but it will also amplify the problems. A SKU with unclear product-page information, weak logistics, obvious complaint patterns, or fragile customer trust should not be the first product pushed to a large creator base.'),
          P('Fashion, jewelry, and accessories can use affiliate marketing for new drops, styling, and visual product discovery. Beauty, personal care, health, wellness, supplements, pet, baby, home essentials, and food and beverage categories need even more attention to product experience and trust because shoppers ask more questions and often come back for repeat purchase.'),
        ],
      },
      {
        id: 'creator-quality',
        h: 'Third layer: more creators is not always better',
        body: [
          P('Brands want more creators to say yes. That is understandable. But creator quality matters too.'),
          P('Seller University says affiliate creators may need to meet thresholds when adding category products to showcases, livestreams, and video anchors. The source lists Promotion Performance Score of 3.5 or higher, Creator Health Rating of 150 or higher, sales track record, and sustained ability to create high-quality content.'),
          P('For Auction target plan visibility, the source lists additional checks: Promotion Performance Score above 3.5, Creator Health Rating above 150, no high-risk creator flag, no inferior-performance creator flag, and no active intellectual property risk flag.'),
          P('This means affiliate is not "any creator can post anything." TikTok Shop looks at creator performance, health, risk, and content quality. Brands should do the same.'),
          UL([
            'Who posts reliably?',
            'Who creates quality content?',
            'Who fits each category?',
            'Whose audience matches the product?',
            'Who needs a better brief?',
            'Who deserves a second collaboration?',
            'Who should stop receiving samples?',
          ]),
        ],
      },
      {
        id: 'collaboration-types',
        h: 'Open, Target, and Shop Collaboration should be used differently',
        body: [
          P('The policy describes three collaboration types: Open Collaboration, Target Collaboration, and Shop Collaboration. They should not be used casually. They are tools for different moments.'),
          UL([
            'Open Collaboration helps with discovery, but it requires strong application review and creator filtering.',
            'Target Collaboration fits hero SKUs, brand-sensitive products, launches, and categories where creator fit matters.',
            'Shop Collaboration fits shops with clearer SKU structure, stable commission logic, and enough operational maturity to manage broad visibility.',
          ]),
          P('If a brand does not have clean product pages, sample SOPs, creator scoring, and weekly review, it should be careful about opening every product too broadly. It may look proactive, but it can create low-quality applications, inconsistent content, and more support pressure.'),
        ],
      },
      {
        id: 'wem-role',
        h: 'Where WEM fits: creator community, not a creator list',
        body: [
          P('WEM niche here is creator-community operations for TikTok Shop brands. Many brands do not lack creator names. They lack creator relationship management.'),
          P('Common problems include samples sent without follow-up, creator applications that are not prioritized, Open Collaboration that creates reach but inconsistent content, commission increases without tiering logic, creators who post once and disappear, and content, orders, VoC, SPS, and customer-service signals that are not reviewed together.'),
          P('WEM helps brands turn affiliate marketing into a creator-community operating system: creator vetting, sample tracking, affiliate activation, commission logic, content follow-up, UGC feedback, product-page updates, and weekly community-to-commerce review.'),
          P('This is especially important for brands moving quickly on product and content. TikTok Shop US growth still depends on creator trust, product-page clarity, category rules, creator communication rhythm, customer feedback, and after-sales expectations.'),
          CTA('Book a TikTok Shop affiliate strategy call ->'),
        ],
      },
      {
        id: 'takeaway',
        h: 'The takeaway',
        body: [
          P('TikTok Shop affiliate growth is not only about finding more creators. Brands have to manage shop performance, product experience, creator quality, content feedback, and buyer trust at the same time. Otherwise, more creators may simply expose problems faster.'),
          P('A sustainable affiliate program is not a creator list. It is a creator-community operating system.'),
        ],
      },
      {
        id: 'sources',
        h: 'Sources and notes',
        body: [
          P('Primary source: TikTok Shop Seller University, "Affiliate Marketing Policy" (knowledge_id=2244964886103809), applicable to the United States. The source covers seller and product qualification, creator thresholds, collaboration types, disqualification criteria, enforcement actions, and appeals.'),
          P('This article uses the policy as a source signal, then translates it into a WEM operating framework for U.S. TikTok Shop brands and creator-community teams. It does not imply guaranteed affiliate eligibility, creator approval, product enrollment, or avoidance of enforcement.'),
        ],
      },
    ],
    faqs: [
      { q: 'What SPS do sellers need for TikTok Shop Affiliate Marketing?', a: 'According to TikTok Shop Seller University, sellers need a Shop Performance Score of 3.5 or above to qualify for Affiliate Marketing. If SPS falls between 3.0 and 3.5, sellers may be warned and unable to add new products. If SPS falls below 3.0, the shop may be disqualified.' },
      { q: 'Why can a product be removed from TikTok Shop Affiliate Marketing?', a: 'A product can be restricted or removed if its VoC Index is too high, or if it has intellectual property, fair trading, customer review-related violations, or inauthentic/unoriginal flags.' },
      { q: 'What categories are strongest for TikTok Shop affiliate marketing?', a: 'Strong categories include products that need creator demos, trust-building, repeat purchase, or frequent newness: fashion, jewelry, accessories, beauty, personal care, health, wellness, supplements, pet, baby, home essentials, and food and beverage.' },
      { q: 'Should brands rely only on Open Collaboration?', a: 'Not usually. Open Collaboration can expand reach, but without creator review, sample management, content feedback, and product-page readiness, it can create low-quality applications and inconsistent content. Brands often need a mix of Open, Target, and Shop Collaboration.' },
      { q: 'What does WEM do for TikTok Shop affiliate marketing?', a: 'WEM helps brands build creator-community operations: creator vetting, sample follow-up, affiliate activation, commission logic, UGC feedback, product-page updates, SPS and VoC risk signals, and weekly community-to-commerce review.' },
    ],
    related: [
      { label: 'Why TikTok Shop Brands Need a Creator Community, Not Just a Database', href: 'tiktok-shop-creator-community-brand-growth' },
      { label: 'TikTok Shop Follower Group Chat: A Retention Layer for Brands', href: 'tiktok-shop-follower-group-chat-retention' },
      { label: 'TikTok Shop Creator Affiliate Management: The WEM Operating System', href: 'tiktok-shop-creator-affiliate-management' },
    ],
  },
  zh: {
    meta: {
      title: 'TikTok Shop Affiliate 怎么做稳：品牌要先打好店铺、产品和达人三层基础',
      cat: 'TIKTOK SHOP 美国 · 达人分销',
      author: 'WE Marketing Team',
      date: '2026 年 7 月 16 日',
      read: '9 分钟阅读',
      heroImage: 'hero-tiktok-shop-affiliate-strategy-for-brands.png',
      heroAlt: 'TikTok Shop Affiliate Strategy for Brands 文章主图，展示品牌增长、达人招募、内容激活和绩效优化',
    },
    sections: [
      {
        id: '开头',
        h: 'Affiliate 不是多找达人就能跑起来',
        body: [
          P('很多品牌一开始做 TikTok Shop affiliate，都会很自然地想扩大数量：多邀请达人、多寄样、多开计划、多给佣金、多上产品。'),
          P('这些动作不是错。但如果底层没有打稳，达人越多，问题也会越快被放大。'),
          P('TikTok Shop Seller University 的 Affiliate Marketing Policy 表面上是在讲资格要求，实际上给品牌提了一个很实际的醒：TikTok Shop affiliate 不是把产品开放给更多达人就结束了。它背后有三层基础。'),
          P('店铺要达标，产品要达标，达人也要达标。品牌真正要问的，不是“我们还能找多少达人？”而是“我们的店铺健康、产品体验、达人质量和每周跟进，能不能接得住更多达人？”'),
        ],
      },
      {
        id: '三层基础',
        h: '先想清楚：affiliate 是一个运营系统',
        body: [
          P('Affiliate marketing 看起来很简单：品牌给佣金，达人帮你推广产品，出了单大家分成。但在 TikTok Shop 里，这件事没有那么开放。平台会看店铺表现、产品表现，也会看创作者表现。'),
          UL([
            '店铺资格：店铺本身是否有足够稳定的运营表现。',
            '产品资格：具体 SKU 是否有足够好的客户体验、产品质量、物流和服务表现。',
            '达人资格：创作者是否有足够好的推广表现、账号健康、销售记录和内容质量。',
          ]),
          P('很多品牌 affiliate 跑不顺，表面上是达人问题，底层可能是商品页、客服、物流、产品口碑、寄样跟进或复盘机制的问题。'),
          P('一个成熟的 TikTok Shop affiliate program，不能只交给 BD 或达人招募。它必须把店铺运营、商品页、客服、物流、产品口碑、达人筛选、寄样 follow-up 和每周复盘接起来。'),
        ],
      },
      {
        id: '店铺健康',
        h: '第一层：店铺健康不稳，达人越多越危险',
        body: [
          P('TikTok Shop 对店铺本身有基础要求。根据 Seller University 的政策，卖家参与 Affiliate Marketing 时，Shop Performance Score，SPS 必须达到 3.5 或以上。SPS 反映店铺运营表现，范围是 0-5，基于过去 90 天平均表现计算。'),
          UL([
            '如果 SPS 低于 3.5，但仍在 3.0 到 3.5 之间，卖家会收到 warning，不能再把新产品加入 Affiliate Marketing，但 existing collaborations 不受影响。',
            '如果 SPS 低于 3.0，店铺可能被取消 Affiliate Marketing 资格。',
            '当店铺被取消资格时，active affiliate marketing collaborations 可能被终止，卖家也不能创建新的 collaborations，之前加入项目的产品会被移除。',
          ]),
          P('如果 SPS 掉下来，问题不是今天少出几单。它会影响你能不能继续把新产品放进 affiliate，甚至影响整个 affiliate program 的稳定性。'),
          P('所以 affiliate growth 不是只靠达人端。店铺履约、客服、发货、订单体验、违规管理，都会影响达人体系能不能继续跑。'),
        ],
      },
      {
        id: '产品健康',
        h: '第二层：不是所有 SKU 都应该推给达人',
        body: [
          P('很多品牌会犯一个错：店里有什么，就都想放进 affiliate。但 TikTok Shop 的政策讲得很清楚：店铺达标，不代表所有产品都会自动适合 Affiliate Marketing。每个产品会被单独看。'),
          UL([
            '产品 VoC Index 必须低于同 listing category 平均 VoC Index 的 1.5 倍。',
            '产品不能有 intellectual property、fair trading 或 customer review 相关 policy violations。',
            '产品不能被 product reviews 或其他渠道标记为 inauthentic 或 unoriginal。',
            '如果产品 VoC Index 超过同类目平均的 3 倍，产品可能受到限制或被移出 Affiliate Marketing。',
          ]),
          P('达人内容会放大产品的优点，也会放大产品的问题。一个 SKU 如果商品页写得不清楚、物流不稳定、差评点明显、售后问题多，就不应该先推给大量达人。'),
          P('Fashion、jewelry、accessories 这类经常上新、需要搭配和审美表达的 category，很适合用 affiliate 做新品种草和风格展示。Beauty、personal care、health、wellness、supplements、pet、baby、home essentials、食品饮料这类复购和 trust 比较强的 category，则更需要注意产品体验和 VoC。'),
        ],
      },
      {
        id: '达人质量',
        h: '第三层：达人也不是越多越好',
        body: [
          P('品牌当然希望更多 creator 愿意推产品。但在 TikTok Shop affiliate 里，creator 也有资格和质量信号。'),
          P('官方政策提到，Affiliate creators 在推广指定 category 产品时，可能需要满足 Promotion Performance Score 达到 3.5 或以上、Creator Health Rating 达到 150 或以上、有销售记录，以及持续产出高质量内容的能力。'),
          P('对于 Auction target plan，官方还提到更具体的 creator checks：Promotion Performance Score above 3.5、Creator Health Rating above 150、没有 high-risk creator flag、没有 inferior-performance creator flag、creator account 没有 active intellectual property risk flag。'),
          P('这说明 TikTok Shop affiliate 不是“只要达人愿意发就可以”。平台会看创作者表现、账号健康、风险信号和内容能力。品牌也应该看。'),
          UL([
            '谁能稳定发布？',
            '谁的内容质量好？',
            '谁适合哪个 category？',
            '谁的受众和产品匹配？',
            '谁需要更清楚的 brief？',
            '谁适合二次合作？',
            '谁不应该继续寄样？',
          ]),
        ],
      },
      {
        id: '合作类型',
        h: 'Open、Target、Shop Collaboration 不要乱开',
        body: [
          P('官方政策提到三种 Affiliate Collaborations：Open Collaboration、Target Collaboration 和 Shop Collaboration。从运营角度看，它们不是随便选一个，而是不同阶段的工具。'),
          UL([
            'Open Collaboration 适合扩大 discovery，但需要更强的筛选和申请管理。',
            'Target Collaboration 适合重点类目、hero SKU、新品发布、品牌调性较强的产品。',
            'Shop Collaboration 适合规则比较稳定、SKU 结构清晰、佣金策略已经想好的店铺。',
          ]),
          P('如果品牌还没有稳定的商品页、寄样 SOP、达人评分规则和复盘机制，不建议一上来把所有产品全部开放。那样看起来很积极，实际很容易带来低质量申请、低质量内容和客服压力。'),
        ],
      },
      {
        id: 'wem作用',
        h: 'WEM 的作用：把 affiliate 做成达人私域，而不是达人名单',
        body: [
          P('WEM 在这个话题里的 niche 很清楚：creator community operations / 达人私域运营系统。很多品牌不是没有达人资源，而是没有把达人关系经营起来。'),
          P('常见问题包括：样品寄出后没有持续跟进，达人申请很多但不知道谁值得优先，open collaboration 有流量但内容质量不稳定，佣金只会加高但没有分层，达人发完一次后没有二次合作，内容、订单、VoC、SPS、客服问题没有放在一起复盘。'),
          P('WEM 的工作不是简单帮品牌找达人。更重要的是把达人私域、寄样、affiliate activation、UGC feedback、product-page updates 和 weekly community-to-commerce review 连成一套。'),
          P('对中国品牌和工厂来说，这一点更重要。中国团队往往有很强的产品和供应链优势：打样快、成本控制强、生产稳定、包装调整灵活、小批量测试快、产品迭代能力强。但美国 TikTok Shop 的增长需要本地创作者信任、商品页语言、类目规则、达人合作节奏、用户反馈和售后预期一起配合。'),
          CTA('预约 TikTok Shop 达人分销策略沟通 ->'),
        ],
      },
      {
        id: '结论',
        h: '结论：先把底层打稳，再去放大达人',
        body: [
          P('TikTok Shop Affiliate Marketing Policy 给品牌的提醒其实很简单：想做 affiliate growth，不能只看 creator 数量。'),
          P('品牌要同时管理店铺表现、产品体验、达人质量、内容反馈和用户信任。否则，达人越多，问题也可能越快暴露。真正可持续的 affiliate program，不是一个达人名单，而是一套 creator-community operating system。'),
        ],
      },
      {
        id: '来源',
        h: '来源和说明',
        body: [
          P('主要来源：TikTok Shop Seller University, "Affiliate Marketing Policy"（knowledge_id=2244964886103809），适用于美国市场。该来源涵盖 seller and product qualification、creator thresholds、collaboration types、disqualification criteria、enforcement actions 和 appeals。'),
          P('本文使用官方政策作为 source signal，再结合 WEM 对美国 TikTok Shop 达人运营、达人私域、商品页承接和跨境品牌执行的经验，转化成品牌可执行的运营框架。本文不承诺 affiliate eligibility、creator approval、product enrollment 或避免 enforcement。'),
        ],
      },
    ],
    faqs: [
      { q: 'TikTok Shop Affiliate Marketing 需要什么店铺条件？', a: '根据 TikTok Shop Seller University 的官方政策，店铺参与 Affiliate Marketing 需要 SPS 达到 3.5 或以上。SPS 低于 3.5 时会进入 warning 区间；如果低于 3.0，店铺可能被取消 Affiliate Marketing 资格。' },
      { q: '为什么产品会被移出 TikTok Shop Affiliate Marketing？', a: '产品可能因为 VoC Index 过高、IP violation、fair trading violation、customer review 相关违规，或被标记为 inauthentic/unoriginal，而受到限制或被移出 Affiliate Marketing。' },
      { q: 'TikTok Shop affiliate 更适合哪些 category？', a: '更适合 creator demo、信任建立、复购和持续上新的 category，例如 fashion、jewelry、accessories、beauty、personal care、health、wellness、supplements、pet、baby、home essentials、食品饮料等。' },
      { q: '为什么品牌不能只做 Open Collaboration？', a: 'Open Collaboration 可以扩大覆盖，但如果没有达人筛选、样品管理、内容复盘和商品页承接，很容易变成低质量申请和低质量内容。品牌通常需要把 Open、Target 和 Shop Collaboration 结合起来使用。' },
      { q: 'WEM 在 TikTok Shop affiliate 里做什么？', a: 'WEM 帮品牌搭建 creator community 和达人私域运营系统，包括达人筛选、样品 follow-up、affiliate activation、佣金策略、UGC 反馈、商品页优化、SPS/VoC 风险信号和每周 community-to-commerce 复盘。' },
    ],
    related: [
      { label: 'TikTok Shop 品牌为什么需要达人社群，而不只是一份达人名单', href: 'tiktok-shop-creator-community-brand-growth.html?lang=zh' },
      { label: 'TikTok Shop Group Chat：品牌留存和达人私域的新入口', href: 'tiktok-shop-follower-group-chat-retention.html?lang=zh' },
      { label: 'TikTok Shop 达人联盟管理：WEM 的运营框架', href: 'tiktok-shop-creator-affiliate-management.html?lang=zh' },
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
      ? 'TikTok Shop Affiliate 怎么做稳：店铺、产品和达人三层运营 | WE Marketing'
      : 'TikTok Shop Affiliate Strategy: Shop, Product, and Creator Quality | WE Marketing';
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
