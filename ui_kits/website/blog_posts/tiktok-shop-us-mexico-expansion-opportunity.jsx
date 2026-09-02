const { useState, useEffect } = React;

const P = (text) => ({ kind: 'p', text });
const UL = (items) => ({ kind: 'list', items });
const CTA = (label) => ({ kind: 'cta', label, href: 'https://zus03h0enw04.sg.larksuite.com/scheduler/03970278dd9a7925' });

const LABELS = {
  en: { back: 'Blog', toc: 'On this page', faq: 'Frequently asked questions', related: 'Related guides' },
  zh: { back: '博客', toc: '本文目录', faq: '常见问题', related: '相关文章' },
};

const POSTS = {
  en: {
    meta: {
      title: 'Why TikTok Shop US Sellers Should Watch Mexico',
      cat: 'TIKTOK SHOP US-MX · NORTH AMERICA',
      author: 'WE Marketing Team',
      date: 'Jun 30, 2026',
      read: '12 min read',
      heroImage: 'hero-tiktok-shop-us-mexico-expansion-opportunity.png',
      heroAlt: 'TikTok Shop operations team planning US to Mexico expansion from a warehouse office',
    },
    sections: [
      {
        id: 'what-changed',
        h: 'US-MX inventory sharing is more than a warehouse update',
        body: [
          P('TikTok Shop Seller University’s US-MX FBT inventory-sharing guide looks like a logistics update at first. The bigger signal is that TikTok Shop is making Mexico easier to test for sellers that already operate from the United States.'),
          P('The official guide says US-MX shops can share inventory from FBT US warehouses after sellers bind shops and match SKUs. It also says this path is for US-MX shops, not CN-MX shops, and that prohibited or restricted products for Mexico will not sync.'),
          P('That matters because Mexico may become a practical second North American growth lane for eligible TikTok Shop US sellers with US inventory, creator content, and a working operations rhythm.'),
        ],
      },
      {
        id: 'why-mexico',
        h: 'Why Mexico matters for TikTok Shop US sellers',
        body: [
          P('The United States remains the priority market for many brands. It has stronger purchasing power, a deeper creator pool, more mature affiliate activity, and more visible TikTok Shop momentum. But US growth is also getting more competitive.'),
          UL([
            'Creator attention is more crowded.',
            'Product windows move faster.',
            'Sample costs and fulfillment expectations are higher.',
            'New brands need stronger product pages, creator briefs, and paid amplification systems.',
          ]),
          P('Mexico creates a different opportunity: a controlled second-market test. If a seller already has inventory in FBT US warehouses and already knows which products work on TikTok Shop US, the US-MX path can reduce the first round of Mexico testing friction.'),
        ],
      },
      {
        id: 'not-copy-paste',
        h: 'US experience helps, but Mexico is not copy-paste',
        body: [
          P('The wrong read is: we can share inventory, so we can copy the US shop into Mexico. That is too simple. Mexico needs its own market execution.'),
          UL([
            'Product titles, benefits, and support language need natural Spanish, not machine-translated English.',
            'Creator tone, pacing, humor, and use cases should be tested with Mexican audiences.',
            'Pricing, bundles, and offer language may need to change.',
            'Customer service and return expectations need to be clear before traffic scales.',
          ]),
          P('The best use of US TikTok Shop experience is as a filter. Start with SKUs that have already proven they can work in TikTok content, then rebuild the Mexico page, creator brief, affiliate offer, and weekly review process.'),
        ],
      },
      {
        id: 'eligibility-path',
        h: 'Who can open a TikTok Shop Mexico store from the United States?',
        body: [
          P('TikTok Shop’s current US Academy guide describes a route for eligible US corporate sellers using a US-based entity. The application starts from the main Corporate Seller account in US Seller Center under Profile and Manage Multiple Markets. Sub-accounts cannot submit the application.'),
          P('Eligibility is not automatic. Seller Center displays the current requirements, and TikTok Shop gives an SPS score of 4 or higher as one example. The platform may also evaluate GMV or other account criteria. Sellers should treat the requirements shown in their own backend as the source of truth because eligibility can change.'),
          UL([
            'Use the main US Corporate Seller account, not a sub-account.',
            'Check Manage Multiple Markets and confirm the current eligibility requirements.',
            'Accept the terms, submit the application, and wait for review before building a launch calendar.',
            'After approval, switch into the Mexico store and complete Mexico-specific attributes and qualifications.',
            'Plan fulfillment from within the United States and confirm how orders, affiliate, marketing, and customer service will be managed.',
          ]),
          P('The direct answer is: some eligible US corporate sellers can open and link a Mexico store, but a US shop alone does not guarantee access. The first step is checking the live eligibility entry in Seller Center.'),
        ],
      },
      {
        id: 'inventory-returns',
        h: 'Inventory, returns, and SKU selection come first',
        body: [
          P('US-MX FBT inventory sharing can reduce friction, but it also creates a new operating risk: one inventory pool may support two markets. A winning SKU can run out faster than expected if both US and Mexico demand grow at the same time.'),
          UL([
            'Priority test SKUs: proven in the US, stable inventory, acceptable margin, easy to demonstrate.',
            'Watchlist SKUs: strong content performance but unstable inventory or tighter margin.',
            'Discovery SKUs: moderate US sales but strong visual appeal and low return risk.',
            'Excluded SKUs: restricted, qualification-heavy, fragile, high-return, or unclear for Mexico review.',
          ]),
          P('Returns also need planning. The official US-MX FBT guide says customer returns from US-MX shops cannot be returned to FBT US warehouses. If no local Mexico return warehouse is configured, relevant orders may be handled as refund only. That can change the economics of the test.'),
        ],
      },
      {
        id: 'content-creators',
        h: 'Mexico needs localized pages, creators, and affiliate strategy',
        body: [
          P('TikTok Shop expansion is ultimately a content problem as much as a logistics problem. A brand may have strong US creator content, but Mexico still needs local execution.'),
          UL([
            'Which Mexican shoppers are most likely to care about this product?',
            'What Spanish product-page language feels native and trustworthy?',
            'Which creator style fits: practical demo, household routine, beauty review, deal discovery, comparison, or family use case?',
            'What affiliate commission is strong enough for Mexico creators?',
            'Should content emphasize North American inventory, everyday usefulness, value, trend fit, or problem solving?',
          ]),
          P('Opening the Mexico store is only the beginning. The operating system decides whether the store gets traction.'),
        ],
      },
      {
        id: 'wem-role',
        h: 'How WEM helps brands turn US momentum into a Mexico test',
        body: [
          P('WEM’s role is not to treat Mexico as a checkbox after TikTok Shop US setup. The useful work is building a controlled North American testing plan.'),
          UL([
            'Identify which US TikTok Shop SKUs are worth testing in Mexico.',
            'Review eligibility, product restrictions, fulfillment risk, and return-path implications.',
            'Balance US inventory demand against Mexico test volume.',
            'Localize product pages into natural Spanish buying language.',
            'Build creator and affiliate test lists for Mexico.',
            'Review sample flow, content output, clicks, conversion, inventory, refunds, and customer messages every week.',
          ]),
          P('The opportunity is strongest for brands with fast sampling, cost control, stable production, packaging flexibility, small-batch testing, and rapid product iteration. But North American expansion is not just paperwork or translation. WEM helps connect supply-side strength with U.S. and Mexico market execution.'),
          CTA('Plan a US-MX TikTok Shop test with WEM →'),
        ],
      },
      {
        id: 'market-test-plan',
        h: 'A 90-day TikTok Shop US-to-Mexico test plan',
        body: [
          P('Brands should treat Mexico as a measured market test, not a bulk catalog sync. The first 90 days should answer whether proven US products can earn attention, trust, and acceptable unit economics with Mexico-specific execution.'),
          UL([
            'Weeks 1–2: confirm eligibility, categories, qualifications, US fulfillment, return handling, Spanish support, and the maximum inventory the test can consume.',
            'Weeks 2–4: select three to five demo-friendly SKUs, rewrite product pages in natural Spanish, set local pricing and offers, and prepare creator briefs.',
            'Weeks 3–6: recruit a small Mexico creator and affiliate cohort, send controlled samples, and test multiple hooks, use cases, and objections.',
            'Weeks 5–8: compare views, clicks, conversion, creator acceptance, sample posting, refunds, customer questions, and inventory movement.',
            'Weeks 8–12: scale only combinations with clean conversion and support economics; pause SKUs with weak localization, high refunds, or unstable inventory.',
          ]),
          P('At the end of the test, the brand should know which SKUs deserve more inventory, which Spanish messages convert, which creators are worth repeating, and whether the return and support model can sustain growth.'),
        ],
      },
      {
        id: 'readiness-check',
        h: 'Which brands are ready for TikTok Shop Mexico expansion?',
        body: [
          P('The best candidates already have a stable US operating base. Mexico is less attractive when the US store still has unclear listings, unstable inventory, unresolved fulfillment issues, or no repeatable creator workflow.'),
          UL([
            'Good fit: a US corporate seller with Seller Center eligibility, stable inventory, clear hero SKUs, usable creator data, and Spanish page and support capability.',
            'Promising fit: a brand with U.S. inventory, strong supply-chain responsiveness, and a team that can adapt products and content.',
            'Poor fit for now: products with unclear Mexico category approval, complex qualifications, high return risk, fragile margins, or inventory constrained by US demand.',
            'Not ready: teams planning to machine-translate the US catalog, copy US creator scripts, and measure only GMV without refunds, support, or inventory impact.',
          ]),
          P('Mexico should expand a working operating system, not distract from fixing a broken one. Brands that are not ready can still clean product data, build Spanish assets, model return economics, and identify a small creator test list.'),
        ],
      },
    ],
    faqs: [
      { q: 'Can TikTok Shop US sellers open a Mexico store?', a: 'TikTok Shop Seller University describes a path for eligible US corporate sellers to apply for a Mexico store through US Seller Center. Sellers should verify current eligibility inside their own Seller Center before acting.' },
      { q: 'Does US-MX FBT inventory sharing apply to every Mexico shop?', a: 'The official US-MX FBT guide describes this inventory-sharing path for eligible US-MX shops. Sellers should confirm current eligibility and market availability inside Seller Center before planning inventory.' },
      { q: 'What should sellers prepare before testing TikTok Shop Mexico?', a: 'Sellers should prepare eligible SKUs, inventory limits, return-path planning, Spanish product pages, Mexico creator briefs, affiliate terms, customer-service language, and weekly review reporting.' },
      { q: 'Can a sub-account apply to open the Mexico store?', a: 'TikTok Shop’s current guide says the application must be submitted from the main US Corporate Seller account. Sub-accounts do not have permission to apply through Manage Multiple Markets.' },
      { q: 'Should a brand sync its full US catalog to TikTok Shop Mexico?', a: 'Usually no. A controlled launch with three to five proven, demo-friendly SKUs makes it easier to manage qualifications, inventory, localization, creator testing, refunds, and customer support before scaling.' },
    ],
    related: [
      { label: 'Spanish-Speaking TikTok Shop Creators: WEM Field Notes for Brands', href: 'spanish-speaking-creators-tiktok-shop.html' },
      { label: 'TikTok Shop Affiliate Marketing for Brands: A Better Operating Playbook', href: 'tiktok-shop-affiliate-marketing-for-brands.html' },
      { label: 'TikTok Shop US Logistics: Why Fulfillment Is Part of Growth', href: 'tiktok-shop-us-logistics-fulfillment-strategy.html' },
    ],
  },
  zh: {
    meta: {
      title: 'TikTok Shop 美国店为什么要开始看墨西哥',
      cat: 'TIKTOK SHOP US-MX · 北美增长',
      author: 'WE Marketing Team',
      date: '2026 年 6 月 30 日',
      read: '12 分钟阅读',
      heroImage: 'hero-tiktok-shop-us-mexico-expansion-opportunity.png',
      heroAlt: 'TikTok Shop 运营团队在美国仓办公室规划美国店拓展墨西哥市场',
    },
    sections: [
      {
        id: '官方信号',
        h: 'US-MX 库存共享不只是一个仓储功能',
        body: [
          P('TikTok Shop Seller University 的 US-MX FBT 库存共享指南，表面看是物流和履约更新。更大的信号是：TikTok Shop 正在让已经在美国运营的卖家，更容易测试墨西哥市场。'),
          P('官方说明里提到，US-MX 店铺可以在绑定店铺、匹配 SKU 后，共享 FBT 美国仓库存。同时也明确这条路径是 US-MX，不是 CN-MX；墨西哥站点禁限售或不符合要求的商品不会同步。'),
          P('对 TikTok Shop 美国卖家来说，这意味着墨西哥可能成为一个更现实的北美第二增长市场。'),
        ],
      },
      {
        id: '墨西哥机会',
        h: '为什么墨西哥 TikTok Shop 对美国卖家是机会',
        body: [
          P('美国市场仍然是很多品牌的主战场。客单价、达人生态、affiliate 活跃度和平台成熟度都更强。但美国 TikTok Shop 的竞争也在变强。'),
          UL([
            '达人注意力更贵。',
            '爆品窗口更短。',
            '寄样成本和履约要求更高。',
            '新品牌冷启动需要更强的商品页、达人 brief 和广告放大系统。',
          ]),
          P('墨西哥的机会，是给部分美国卖家一个更可控的第二市场测试。如果品牌已经有 FBT 美国仓库存，也已经知道哪些产品适合 TikTok 内容，US-MX 路径可以降低第一轮试错成本。'),
        ],
      },
      {
        id: '不能复制',
        h: '美国经验能做起点，但不能直接复制',
        body: [
          P('卖家最容易误读的一点是：既然能共享库存，那就把美国店复制到墨西哥。这个想法太粗。墨西哥需要自己的市场执行。'),
          UL([
            '标题、卖点和售后说明要用自然西语，而不是英文直译。',
            '达人表达、节奏、生活场景和购买引导要重新测试。',
            '价格、组合和促销表达可能要调整。',
            '客服和退货预期要在放量前讲清楚。',
          ]),
          P('更稳的做法，是先从美国店里筛出已经被内容验证过的 hero SKU，再重做墨西哥版本的页面、达人 brief、佣金策略和周复盘。'),
        ],
      },
      {
        id: '开店资格',
        h: '哪些美国卖家可以申请 TikTok Shop 墨西哥店',
        body: [
          P('TikTok Shop 当前美国 Academy 指南描述的是符合条件的美国公司主体卖家。申请入口在 US Seller Center 主账号的 Profile 和 Manage Multiple Markets 中，子账号没有权限提交。'),
          P('资格不是自动获得。Seller Center 会显示当前要求，官方页面把 SPS 不低于 4 作为示例，也可能评估 GMV 或其他账号条件。因为标准会变化，卖家应以自己后台实时显示的要求为准。'),
          UL([
            '使用美国 Corporate Seller 主账号，不要用 sub-account。',
            '进入 Manage Multiple Markets，确认店铺满足当前资格。',
            '接受条款、提交申请并等待审核，再安排正式 launch。',
            '通过后切换到墨西哥店，补齐当地要求的商品属性和资质。',
            '规划从美国境内履约，并确认订单、affiliate、marketing 和客服的运营方式。',
          ]),
          P('直接答案是：部分符合条件的美国公司主体卖家可以开通并绑定墨西哥店，但有美国店不等于自动有资格。第一步应该是检查 Seller Center 中实时开放的入口。'),
        ],
      },
      {
        id: '库存退货',
        h: '选品、库存和退货，是 US-MX 扩张的第一道门槛',
        body: [
          P('US-MX FBT 库存共享降低了部分履约门槛，但也带来一个新问题：同一批库存可能同时支持美国和墨西哥两个市场。一个 SKU 如果同时起量，缺货会更快出现。'),
          UL([
            '优先测试：美国已验证、库存稳定、毛利可承受、容易演示的 SKU。',
            '谨慎测试：内容表现好但库存波动大或毛利紧的 SKU。',
            '发现测试：美国销量一般但视觉展示强、售后风险低的 SKU。',
            '暂缓同步：禁限售、资质复杂、易碎、高退货或墨西哥审核不确定的 SKU。',
          ]),
          P('退货也要提前算。官方 US-MX FBT 页面说明，US-MX 跨境店铺的消费者退货不能退回 FBT 美国仓；如果没有墨西哥本地退货仓，相关订单可能按 refund only 处理。这会直接影响利润模型。'),
        ],
      },
      {
        id: '本地内容',
        h: '墨西哥市场要重新做页面、达人和 affiliate',
        body: [
          P('TikTok Shop 跨市场扩张，最后仍然是内容和信任问题。美国内容表现好，说明产品有潜力，但墨西哥市场仍然要做本地化执行。'),
          UL([
            '墨西哥消费者最关心价格、用途、品质、家庭场景还是赠品？',
            '西语商品页是否像真实本地电商页面？',
            '达人风格适合实用 demo、家庭场景、美妆测评、deal discovery 还是对比？',
            '佣金是否足够吸引墨西哥 creator？',
            '客服和退货语言是否能减少误解？',
          ]),
          P('开店只是开始。真正决定结果的，是页面、内容、达人、库存、退款和客服能不能每周一起复盘。'),
        ],
      },
      {
        id: 'wem角色',
        h: 'WEM 怎么帮品牌把美国 TikTok Shop 能力延伸到墨西哥',
        body: [
          P('WEM 不会把墨西哥当作美国店之后的一个勾选项。更有价值的工作，是把美国 TikTok Shop 已有资产整理成一个可控的北美第二市场测试。'),
          UL([
            '从美国店数据里筛选适合墨西哥测试的 SKU。',
            '检查商品是否适合 US-MX 路径、是否涉及禁限售或资质问题。',
            '评估美国仓库存、美国销量节奏和墨西哥测试量之间的平衡。',
            '重写墨西哥市场产品标题、卖点和页面结构。',
            '搭建墨西哥 creator / affiliate 测试名单和佣金策略。',
            '每周复盘样品、内容、点击、转化、库存、退款和客服问题。',
          ]),
          P('对中国品牌和厂家来说，供应链优势是真实的：打样快、成本控制强、生产稳定、包装灵活、小批量测试快、产品迭代快。但北美市场不是翻译和上架。WEM 的价值，是把供应链优势接到美国和墨西哥的本地运营执行上。'),
          CTA('和 WEM 规划 US-MX TikTok Shop 测试 →'),
        ],
      },
      {
        id: '九十天测试',
        h: 'TikTok Shop 美国到墨西哥的 90 天测试计划',
        body: [
          P('品牌应该把墨西哥当作可衡量的市场测试，而不是整店批量同步。前 90 天要判断美国已经验证过的商品，在墨西哥本地化执行下能不能获得注意力、信任和可接受的单位经济模型。'),
          UL([
            '第 1–2 周：确认开店资格、类目、商品资质、美国履约、退货处理、西语客服和测试库存上限。',
            '第 2–4 周：选择 3–5 个容易演示的 SKU，用自然西语重写商品页，设置当地价格、offer 和达人 brief。',
            '第 3–6 周：招募一小组墨西哥 creator 和 affiliate，控制寄样数量，测试不同 hook、场景和消费者异议。',
            '第 5–8 周：比较播放、点击、转化、达人接受率、寄样发布率、退款、客服问题和库存变化。',
            '第 8–12 周：只放大转化和售后经济模型健康的组合；暂停本地化弱、退款高或库存不稳的 SKU。',
          ]),
          P('测试结束时，品牌应该知道哪些 SKU 值得增加库存、哪些西语表达能转化、哪些达人值得复合作，以及退货和客服模型能不能支撑增长。'),
        ],
      },
      {
        id: '准备度',
        h: '什么样的品牌现在适合扩展 TikTok Shop 墨西哥',
        body: [
          P('最适合的品牌通常已经有稳定的美国运营基础。如果美国店页面还不清楚、库存不稳、履约问题没解决、达人合作没有形成节奏，墨西哥扩张更容易分散团队。'),
          UL([
            '适合：有美国公司主体和后台资格、美国库存稳定、hero SKU 清楚、有可用达人数据，并能支持西语页面和客服。',
            '有潜力：中国品牌或厂家有美国库存和快速供应链，也有美国运营团队能为第二市场调整产品和内容。',
            '暂时不适合：类目资格不清、资质复杂、退货风险高、毛利太薄，或美国需求已经让库存紧张。',
            '尚未准备好：计划机器翻译整店、复制美国达人脚本，只看 GMV 而不看退款、客服和库存影响。',
          ]),
          P('墨西哥应该放大一套已经能运转的系统，而不是让团队逃避美国店的问题。暂时没准备好的品牌，也可以先清理商品资料、建立西语资产、测算退货经济模型和整理小规模达人名单。'),
        ],
      },
    ],
    faqs: [
      { q: '美国 TikTok Shop 卖家可以开墨西哥店吗？', a: 'TikTok Shop Seller University 描述了符合条件的美国公司主体卖家从 US Seller Center 申请墨西哥店的路径。卖家要以自己后台当前资格和官方要求为准。' },
      { q: 'US-MX FBT 库存共享适用于中国发墨西哥吗？', a: '官方 US-MX FBT 指南描述的是 US-MX 店铺路径，并说明 CN-MX shops 不适用这个 FBT 美国仓库存共享功能。' },
      { q: '测试墨西哥 TikTok Shop 前要准备什么？', a: '建议先准备适合测试的 SKU、库存边界、退货路径、西语商品页、墨西哥达人 brief、affiliate 佣金、客服话术和每周复盘机制。' },
      { q: '子账号可以申请开 TikTok Shop 墨西哥店吗？', a: 'TikTok Shop 当前指南说明，申请需要由美国 Corporate Seller 主账号通过 Manage Multiple Markets 提交，sub-account 没有申请权限。' },
      { q: '品牌应该把美国店全部商品同步到墨西哥吗？', a: '通常不建议。先用 3–5 个已经验证、容易演示的 SKU 做受控测试，更容易管理资质、库存、本地化、达人测试、退款和客服，再决定是否扩大。' },
    ],
    related: [
      { label: '西语 TikTok Shop 达人：WEM 给品牌的美国市场观察', href: 'spanish-speaking-creators-tiktok-shop.html?lang=zh' },
      { label: 'TikTok Shop 达人分销为什么经常跑不顺', href: 'tiktok-shop-affiliate-marketing-for-brands.html?lang=zh' },
      { label: 'TikTok Shop 美国物流：为什么履约也是增长策略', href: 'tiktok-shop-us-logistics-fulfillment-strategy.html?lang=zh' },
    ],
  },
};

function getInitialLang() {
  const urlLang = new URLSearchParams(window.location.search).get('lang');
  if (urlLang === 'zh' || urlLang === 'en') return urlLang;
  const savedLang = localStorage.getItem('we-lang');
  if (savedLang === 'zh' || savedLang === 'en') return savedLang;
  return (navigator.language || '').toLowerCase().startsWith('zh') ? 'zh' : 'en';
}

function App() {
  const [lang, setLang] = useState(getInitialLang);
  const post = POSTS[lang];

  useEffect(() => {
    localStorage.setItem('we-lang', lang);
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    document.title = lang === 'zh'
      ? 'TikTok Shop 美国店为什么要开始看墨西哥 | WE Marketing'
      : 'Why TikTok Shop US Sellers Should Watch Mexico | WE Marketing';
  }, [lang]);

  useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });

  return (
    <div data-screen-label="WE Blog · tiktok-shop-us-mexico-expansion-opportunity">
      <CursorStars />
      <NavBar lang={lang} onLang={setLang} basePath="../" />
      <BlogPost {...post} labels={LABELS[lang]} />
      <CtaFooter lang={lang} />
      <Footer lang={lang} basePath="../" />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
