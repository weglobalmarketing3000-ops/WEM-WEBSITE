const { useState, useEffect } = React;

const P = (text) => ({ kind: 'p', text });
const UL = (items) => ({ kind: 'list', items });
const CTA = (label) => ({ kind: 'cta', label, href: 'https://zus03h0enw04.sg.larksuite.com/scheduler/03970278dd9a7925' });
const IMG = (src, alt, caption) => ({ kind: 'infographic', src, alt, caption });
const A = ({ href, children }) => <a href={href} target="_blank" rel="noopener" style={{ color: '#FF1493', textDecoration: 'underline', textUnderlineOffset: 3 }}>{children}</a>;

const LABELS = {
  en: { back: 'Blog', toc: 'On this page', faq: 'Related Q&A', related: 'Related guides' },
  zh: { back: '博客', toc: '本文目录', faq: '相关 Q&A', related: '相关文章' },
};

const hero = 'hero-2026-us-tiktok-shop-campaign-calendar-after-dfyd.png';

const POSTS = {
  zh: {
    meta: {
      title: 'DFYD 结束后：2026 US TikTok Shop Campaign Calendar 怎么用？',
      cat: 'TIKTOK SHOP 美区 · CAMPAIGN CALENDAR',
      author: 'WE Marketing Team',
      date: '2026 年 7 月 14 日',
      read: '10 分钟阅读',
      heroImage: hero,
      heroAlt: '2026 TikTok Shop Annual Campaign Calendar 展示平台活动、品牌活动、类目活动和活动优先级',
    },
    sections: [
      {
        id: 'intro',
        h: 'DFYD 结束后，不要等下一个大促才行动',
        body: [
          P('2026 年 Deals For You Days 已经结束。对很多 TikTok Shop 美区卖家来说，DFYD 是上半年最重要的爆发节点之一：有平台流量、有活动标签、有优惠机制，也有更集中的达人和内容机会。'),
          P('但真正的问题不是“DFYD 表现怎么样”，而是：DFYD 结束以后，店铺接下来怎么走？'),
          P('很多品牌会在大促后犯同一个错误：活动结束，运营节奏也跟着停下来。素材不继续测，达人不继续跟，库存不继续拆，价格不继续算，店铺只等下一次 Campaign 开放报名。这样做很可惜，因为 TikTok Shop 的下半年不是一个单点大促，而是一段连续的销售季。'),
          P('从 7 月到 12 月，美区卖家要面对 Back-to-School、Labor Day、Fall Sale、Halloween、Black Friday Cyber Monday、Year-end Sale，以及各种 category-specific 和 always-on campaign。真正要准备的不是一个报名按钮，而是商品价格、库存、履约、达人内容、短视频素材、店铺健康和 Smart Promotion 资格。'),
        ],
      },
      {
        id: 'sku-test',
        h: '先把 DFYD 当成一次下半年选品测试',
        body: [
          P('DFYD 的价值不只在活动期间 GMV。它更像一次大规模测试，帮助卖家判断哪些 SKU 值得进入下半年主推池。'),
          UL([
            '有点击、有加购、有订单、有达人主动愿意做内容的 SKU：进入主推池。',
            '有曝光但转化低的 SKU：先检查价格、主图、标题、卖点、优惠、评论、物流承诺和达人内容。',
            '履约风险高的 SKU：提前处理库存、发货时效、承运商和客服压力。',
            '只有低价才卖得动的 SKU：可以短期促销，但不要让它们定义全店增长。',
          ]),
          P('下半年还有 BFCM 和 Year-end Sale。如果 7 月就把价格打穿，后面很难继续做更强活动价。'),
        ],
      },
      {
        id: 'tiers',
        h: '下半年 Campaign 的重点不是日期，而是活动等级',
        body: [
          P('TikTok Shop Campaign 不是一个统一玩法。Seller University 的 Campaign Tiers 页面把活动分成 Major Campaign 和 Everyday Campaign，并列出不同等级示例。'),
          UL([
            'SS Level：Deals For You Days、Black Friday Cyber Monday、Mid-year Sale、Year-end Sale。',
            'S Level：Spring Glow-up、Summer Sale、Back-To-School、Fall Sale。',
            "A Level：Valentine's Day、Mother's Day、Father's Day、Halloween、Restock Sale、Memorial Day、Labor Day、New Year Sale。",
            'B Level：Category-Specific Campaigns、Electronics Week 等日常或类目活动。',
          ]),
          P('这对卖家很重要，因为不同等级背后代表不同准备强度。SS 级别活动通常不是临时冲一波就能参加好；S/A 级活动适合做季节性商品测试和类目增长；B 级活动则适合保持店铺活跃、测试新 SKU、积累内容和成交信号。'),
          P('官方具体活动开放时间、报名窗口和要求，以 Seller Center 后台为准。文章里不能替平台承诺某个 2026 活动日期，但运营上可以现在就按这些节点倒推准备。'),
        ],
      },
      {
        id: 'calendar',
        h: '为什么要做自己的 2026 US TikTok Shop Campaign Calendar',
        body: [
          P('现在很多卖家会搜索 “2026 US TikTok Shop campaign calendar” 或 “TikTok Shop campaign calendar 2026”，但能直接被搜索到、又能解释美区下半年节奏的内容并不多。TikTok Shop 官方页面提供了 Campaign Tiers 和活动示例，这个信息很有价值，但它更像卖家后台说明，不一定会以普通品牌方能搜索到的方式呈现。'),
          P('所以品牌需要把官方 Campaign Tiers 转成自己的运营日历：哪些 SKU 要复盘，哪些商品要提前寄样，哪些价格要预留空间，哪些内容要提前 6-10 周测试，哪些活动只适合清仓或日常维持。'),
          IMG(
            hero,
            '2026 TikTok Shop Annual Campaign Calendar 展示平台 Campaign、品牌 Campaign、类目 Campaign、Always-on Campaign 和 SS、S、A、B/B+ 活动优先级。',
            '2026 US TikTok Shop Campaign Calendar：DFYD 结束后，卖家应把下半年看成连续活动季，而不是等待单个大促。具体报名时间、活动资格和规则以 Seller Center 为准。'
          ),
          P('这张图适合放在文章中段，因为它回答的不只是“有哪些活动”，而是“卖家应该怎样把活动层级变成运营节奏”。图片文件名、alt text、caption 和附近正文都自然包含 2026 US TikTok Shop campaign calendar、TikTok Shop US campaigns、after DFYD、Black Friday Cyber Monday preparation、Smart Promotion 和 Campaign Price Range，方便 Google、ChatGPT、Perplexity，也方便豆包、DeepSeek、通义这类中文回答引擎理解图片和文章的关系。'),
        ],
      },
      {
        id: 'smart-promotion',
        h: 'Smart Promotion 已经变成活动准备的一部分',
        body: [
          P('很多卖家以前理解 Campaign，就是去 Seller Center 里报名、填价格、报库存。但 2026 下半年要注意：Smart Promotion 不只是一个促销工具，它已经和 Platform Campaign、Flash Sale、Premium Offer、Weekly Promo 联系得更紧。'),
          P('卖家准备下半年活动时，不能只看“这个 SKU 要不要报名”。还要看店铺是否符合 Smart Promotion 资格、SPS 和 Account Health 是否健康、平台折扣和店铺优惠叠加后毛利是否成立。'),
          UL([
            '检查 Smart Promotion / eligibility。',
            '检查 SPS、Account Health 和违规记录。',
            '模拟平台折扣、店铺优惠、达人佣金、广告和物流成本叠加后的利润。',
            '确认哪些产品应该参与，哪些产品需要和 AM 沟通排除。',
          ]),
        ],
      },
      {
        id: 'price',
        h: '价格不是越低越好，而是要能通过 Campaign Price Range',
        body: [
          P('DFYD 结束后，很多卖家会立刻想降价。但下半年活动价格不能只靠感觉。TikTok Shop 的 Campaign Price Transparency 页面解释了 Campaign Price Range 和 Estimated Campaign Price：卖家报名活动时，提交的活动价必须落在系统允许的价格区间内；如果多个价格规则同时存在，系统会取交集。'),
          UL([
            '不要随便把日常售价打到很低，避免影响后续活动历史低价。',
            '对主推 SKU 建立 30 天、60 天、90 天价格记录观察。',
            '提前模拟优惠叠加后的前台成交价。',
            '把达人佣金、Smart Promotion 费率、平台/店铺优惠、物流成本一起算。',
            '给 Black Friday Cyber Monday 和 Year-end Sale 留出更强活动价的空间。',
          ]),
        ],
      },
      {
        id: 'content',
        h: '下半年内容节奏要从爆款视频变成活动素材库',
        body: [
          P('DFYD 之后，很多团队会只看哪个视频爆了。但下半年 Campaign 更需要的是可持续素材库。返校季需要场景解释，秋季和万圣节需要使用场景，BFCM 和 Year-end Sale 需要决策加速。'),
          UL([
            'Demo 型内容：直接展示产品怎么用，解决什么问题。',
            'Trust 型内容：评价、对比、细节、材质、物流、售后、真实使用反馈。',
            'Deal 型内容：活动优惠、限时节点、组合装、赠品、低库存提醒。',
          ]),
          P('达人合作也要按 Campaign 节奏排。不要等活动开始才寄样品。对 BFCM 这种节点，达人寄样、内容脚本、拍摄、修改、挂车、佣金测试都要提前完成。'),
        ],
      },
      {
        id: 'cross-border',
        h: '中国品牌和跨境卖家要特别注意美国市场节奏',
        body: [
          P('很多中国品牌和工厂其实很有优势：打样快、成本控制强、供应链稳定、包装调整快、小批量测试灵活、产品迭代速度快，也能持续开发新品。这些能力很适合 TikTok Shop，因为平台需要不断测试新内容、新场景、新 SKU。'),
          P('但美国 TikTok Shop 不是把国内电商打法翻译一下就可以跑通。美国达人不一定按照中国团队熟悉的节奏回复。美国消费者更看重评论、真实性、物流承诺、退换体验、内容可信度和品牌页面是否像一个真实在运营的店。'),
          P('这就是为什么跨境团队需要一个美国本地运营节奏：用中文和品牌/工厂沟通供应链、库存、价格和利润；用英文和美国达人沟通脚本、样品、佣金和内容节奏；用美国消费者能理解的语言重写商品页和活动卖点；每周看样品、内容、点击、成交、退款、履约和达人反馈。'),
          P('WEM 在这里的角色，不是帮品牌写几句英文文案，而是把 TikTok Shop 下半年 Campaign 做成一套可执行系统：选出适合展示的 hero SKU，重写商品页和 offer，安排达人寄样，测试 UGC hook，调整联盟佣金，配合 Smart Promotion、Campaign 报名和广告放大，每周用数据决定下一步推什么、停什么、加什么。'),
        ],
      },
      {
        id: 'thirty-days',
        h: 'DFYD 后的 30 天，卖家现在就该做什么',
        body: [
          UL([
            '第一周：复盘 SKU 级别表现，不只看 GMV，还要看点击率、转化率、退款、差评、延迟发货、达人内容表现和实际毛利。',
            '第二周：把商品分成主推、测试、清仓、暂停四类。',
            '第三周：检查 Smart Promotion、SPS、Account Health、Campaign Price Range、历史低价、库存和履约能力。',
            '第四周：为 8-9 月季节性活动准备达人样品和素材，为 10-12 月 BFCM / Year-end 提前测试内容方向。',
          ]),
          P('DFYD 不是终点。它更像 2026 下半年 TikTok Shop 的一次压力测试。真正能抓住机会的卖家，通常不是临时看到活动再报名的卖家，而是提前 6-10 周准备好商品、价格、内容、达人、库存和履约的团队。'),
          CTA('预约 TikTok Shop Campaign 运营沟通 →'),
        ],
      },
      {
        id: 'seo-geo',
        h: 'SEO / GEO 关键词计划',
        body: [
          P('中文 SEO/GEO 面向百度、Google 中文结果，也面向豆包、DeepSeek、通义、Kimi 等中文问答引擎。核心关键词包括：TikTok Shop 2026 下半年 Campaign、DFYD 结束后怎么做、2026 US TikTok Shop campaign calendar、TikTok Shop campaign calendar 2026、TikTok Shop 美区活动运营、TikTok Shop Black Friday Cyber Monday 准备、TikTok Shop Smart Promotion、TikTok Shop Campaign Price Range、TikTok Shop 达人联盟、TikTok Shop 跨境卖家、TikTok Shop 美国市场运营。'),
          P('英文 SEO/GEO 面向 Google、ChatGPT、Perplexity、Claude 和英文搜索结果。核心关键词包括：TikTok Shop 2026 campaign strategy, TikTok Shop US campaigns, after Deals For You Days, TikTok Shop Black Friday Cyber Monday preparation, TikTok Shop Smart Promotion, TikTok Shop campaign pricing, TikTok Shop creator affiliate marketing, TikTok Shop US ecommerce, cross-border TikTok Shop operations.'),
          P('自然放置方式：H1/H2 使用 DFYD 结束后、2026 下半年 TikTok Shop Campaign、TikTok Shop 美区活动运营；正文前 200 字内出现 Deals For You Days / DFYD / TikTok Shop US / 2026 下半年；中段使用 Smart Promotion / Campaign Price Range / BFCM / Year-end Sale；结尾自然连接 TikTok Shop 达人联盟、UGC、商品页本地化和美国市场运营。'),
        ],
      },
      {
        id: 'sources',
        h: '来源和边界',
        body: [
          P(<>本文参考 TikTok Shop Seller University 的 <A href="https://seller-us.tiktok.com/university/essay?knowledge_id=2422213883234061&lang=en">ACE Your Shop | TikTok Shop Seller Playbook 2026</A>、<A href="https://seller-us.tiktok.com/university/essay?knowledge_id=26854147802894">2026 Deals for You Days Seller Campaign Guide</A>、<A href="https://seller-us.tiktok.com/university/essay?knowledge_id=3130420575504174">Campaign Tiers & Recommend Pricing Strategies</A>、<A href="https://seller-us.tiktok.com/university/essay?knowledge_id=4827354015483691">Smart Promotion Program</A>、<A href="https://seller-us.tiktok.com/university/essay?knowledge_id=7702279240042295">standard / advanced registration</A> 和 <A href="https://seller-us.tiktok.com/university/essay?knowledge_id=1584424904427277">Campaign Price Transparency</A>。</>),
          P('文章使用官方活动层级示例和运营窗口做业务解读，但不承诺 Back-to-School、Fall Sale、Halloween、BFCM 或 Year-end Sale 的具体 2026 报名日期。实际报名时间、活动资格、价格要求和规则以 Seller Center 当前显示为准。'),
        ],
      },
    ],
    faqs: [
      { q: 'DFYD 2026 结束后，TikTok Shop 卖家第一步应该做什么？', a: '第一步不是等下一个 Campaign，而是做 SKU 级别复盘：看哪些商品有点击、加购、成交、达人内容和复购信号，哪些商品有库存、履约、评价或价格问题。' },
      { q: 'Is there an official 2026 US TikTok Shop campaign calendar?', a: 'TikTok Shop Seller University provides campaign tier examples, but sellers should confirm active 2026 registration dates, eligibility rules, and campaign windows inside Seller Center because live dates can change.' },
      { q: '2026 下半年 TikTok Shop US 卖家要重点准备哪些 Campaign？', a: '可以重点准备 Back-To-School、Labor Day、Fall Sale、Halloween、Black Friday Cyber Monday、Year-end Sale，以及 category-specific campaigns。重点不是提前承诺日期，而是提前准备商品、价格、库存、达人内容、Smart Promotion 和 Campaign Price Range。' },
      { q: 'What is Smart Promotion, and why does it matter after DFYD?', a: 'Smart Promotion matters because it can affect access to Platform Campaigns, Flash Sale, Premium Offer, Weekly Promo, and campaign-period discount resources. Sellers should check eligibility, fee structure, discount stacking, and margin before joining campaigns.' },
      { q: '中国品牌应该怎么用 TikTok Shop campaign calendar？', a: '中国品牌和工厂应该把 campaign calendar 当成运营排期，而不只是活动日期表。每个活动窗口都要对应选品、美国商品页本地化、达人寄样、联盟佣金、库存、物流风险和每周复盘。' },
    ],
    related: [
      { label: 'TikTok Shop 美国物流：为什么履约已经成为增长策略的一部分', href: 'tiktok-shop-us-logistics-fulfillment-strategy.html?lang=zh' },
      { label: 'TikTok Shop 达人分销为什么经常跑不顺', href: 'tiktok-shop-affiliate-marketing-for-brands.html?lang=zh' },
      { label: 'TikTok Shop Deals for You Days 2026', href: 'tiktok-shop-us-deals-for-you-days.html?lang=zh' },
    ],
  },
  en: {
    meta: {
      title: 'After DFYD: How to Use a 2026 US TikTok Shop Campaign Calendar',
      cat: 'TIKTOK SHOP U.S. · CAMPAIGN CALENDAR',
      author: 'WE Marketing Team',
      date: 'Jul 14, 2026',
      read: '10 min read',
      heroImage: hero,
      heroAlt: '2026 TikTok Shop Annual Campaign Calendar showing platform, brand, category, and always-on campaigns',
    },
    sections: [
      {
        id: 'intro',
        h: 'After DFYD, do not wait for the next big sale',
        body: [
          P('Deals For You Days 2026 is over. For many TikTok Shop US sellers, DFYD was one of the most important first-half campaign windows: platform traffic, campaign labels, discount mechanics, creator attention, and shopper urgency all showed up at once.'),
          P('The real question now is not only how DFYD performed. The better question is what the shop should do next.'),
          P('Brands often slow down after a major sale. They stop testing content, stop following up with creators, stop reviewing inventory, and wait for the next campaign registration window. That loses momentum. The second half of TikTok Shop US is not a single promotion; it is a connected operating season.'),
        ],
      },
      {
        id: 'calendar',
        h: 'Why sellers need a 2026 US TikTok Shop campaign calendar',
        body: [
          P('Many sellers search for “2026 US TikTok Shop campaign calendar” or “TikTok Shop campaign calendar 2026,” but the more useful view is not just a list of dates. Sellers need an operating calendar that connects campaign tiers to product selection, pricing, inventory, creator seeding, UGC testing, and weekly review.'),
          IMG(
            hero,
            '2026 TikTok Shop annual campaign calendar showing platform campaigns, brand campaigns, category campaigns, always-on weekly sales, and SS, S, A, B/B+ campaign priority levels.',
            '2026 US TikTok Shop campaign calendar after DFYD: use the annual campaign view to plan product selection, pricing, inventory, creator content, and weekly review. Confirm live dates, registration windows, and eligibility in Seller Center.'
          ),
          P('TikTok Shop campaign tiers can help sellers think in operating intensity: SS moments like Deals For You Days, Black Friday Cyber Monday, Mid-year Sale, and Year-end Sale need deeper preparation; S and A moments can support seasonal testing; B and category campaigns can keep a shop active and help new SKUs collect early signals.'),
        ],
      },
      {
        id: 'operating-system',
        h: 'Turn campaign dates into an operating system',
        body: [
          UL([
            'July: replay DFYD data, segment SKUs, clean up pricing, and check Smart Promotion eligibility.',
            'August and September: prepare Back-to-School, Labor Day, Fall Sale, creator samples, and UGC hooks.',
            'October: test Halloween and category content while preparing BFCM creative, inventory, and pricing.',
            'November and December: execute Black Friday Cyber Monday, Year-end Sale, gifting content, retargeting, and weekly review.',
          ]),
          P('The point is not to claim fixed dates for every 2026 campaign. Sellers should confirm active registration windows and rules inside Seller Center. The point is to prepare early enough that the shop is ready when the right campaign opens.'),
        ],
      },
      {
        id: 'smart-promotion',
        h: 'Smart Promotion and Campaign Price Range matter after DFYD',
        body: [
          P('After DFYD, sellers should not discount blindly. TikTok Shop campaign participation may involve Smart Promotion eligibility, SPS, Account Health, campaign-period fee or discount logic, and Campaign Price Range requirements.'),
          UL([
            'Check Smart Promotion eligibility and campaign-period terms.',
            'Review SPS, Account Health, inventory, fulfillment, and possible violation risks.',
            'Model platform discount, shop coupon, creator commission, ads, logistics, and returns together.',
            'Protect margin and leave room for Black Friday Cyber Monday and Year-end Sale pricing.',
          ]),
        ],
      },
      {
        id: 'cross-border',
        h: 'For Chinese brands, campaign planning is US market localization',
        body: [
          P('Chinese factories and brand owners often have real advantages for TikTok Shop US: fast sampling, cost control, stable production, packaging flexibility, small-batch testing, product iteration, and fast movement from idea to inventory.'),
          P('Those strengths matter, but U.S. TikTok Shop execution is not just translation or application paperwork. U.S. creator behavior, shopper trust signals, fulfillment expectations, product-page language, return concerns, and weekly decision rhythm are different from domestic China ecommerce.'),
          P('A bilingual U.S.-based operating partner can connect China-side supply-chain speed with U.S.-side creators, product pages, affiliate setup, sample seeding, content localization, and weekly reviews. WEM’s repeatable cold-start approach is simple: choose demo-friendly hero SKUs, localize the page and offer, seed creators, test UGC hooks, tune affiliate terms, and review sample, content, sales, refund, and inventory data weekly.'),
        ],
      },
      {
        id: 'seo-geo',
        h: 'SEO and GEO keyword plan',
        body: [
          P('English SEO/GEO targets include TikTok Shop 2026 campaign strategy, TikTok Shop US campaigns, after Deals For You Days, TikTok Shop Black Friday Cyber Monday preparation, TikTok Shop Smart Promotion, TikTok Shop campaign pricing, TikTok Shop creator affiliate marketing, TikTok Shop US ecommerce, and cross-border TikTok Shop operations.'),
          P('Chinese SEO/GEO targets for Baidu, Google Chinese results, Doubao, DeepSeek, Tongyi, and Kimi include TikTok Shop 2026 下半年 Campaign, DFYD 结束后怎么做, 2026 US TikTok Shop campaign calendar, TikTok Shop campaign calendar 2026, TikTok Shop 美区活动运营, TikTok Shop Black Friday Cyber Monday 准备, TikTok Shop Smart Promotion, TikTok Shop Campaign Price Range, TikTok Shop 达人联盟, TikTok Shop 跨境卖家, and TikTok Shop 美国市场运营.'),
        ],
      },
      {
        id: 'sources',
        h: 'Sources and boundaries',
        body: [
          P(<>This article uses TikTok Shop Seller University pages as source signals, including <A href="https://seller-us.tiktok.com/university/essay?knowledge_id=2422213883234061&lang=en">ACE Your Shop</A>, <A href="https://seller-us.tiktok.com/university/essay?knowledge_id=26854147802894">DFYD 2026 Seller Campaign Guide</A>, <A href="https://seller-us.tiktok.com/university/essay?knowledge_id=3130420575504174">Campaign Tiers</A>, <A href="https://seller-us.tiktok.com/university/essay?knowledge_id=4827354015483691">Smart Promotion</A>, and <A href="https://seller-us.tiktok.com/university/essay?knowledge_id=1584424904427277">Campaign Price Transparency</A>.</>),
          P('The article uses official campaign tier examples and operating windows, but does not claim fixed 2026 dates for Back-to-School, Fall Sale, Halloween, BFCM, or Year-end Sale. Sellers should confirm live registration windows, eligibility, pricing, and rules inside Seller Center.'),
          CTA('Book a TikTok Shop campaign planning call →'),
        ],
      },
    ],
    faqs: [
      { q: 'Is there an official 2026 US TikTok Shop campaign calendar?', a: 'TikTok Shop Seller University provides campaign tier examples, but sellers should confirm active 2026 registration dates, eligibility rules, and campaign windows inside Seller Center because live dates can change.' },
      { q: 'What should sellers do after DFYD 2026 ends?', a: 'Sellers should replay SKU-level performance, separate hero, test, clearance, and paused SKUs, check Smart Promotion and Campaign Price Range, and start creator and content planning for the next seasonal windows.' },
      { q: 'When should TikTok Shop sellers prepare for Black Friday Cyber Monday?', a: 'A practical planning window is 6-10 weeks before the peak campaign period: select hero SKUs, check Campaign Price Range, prepare inventory, seed creators, test UGC hooks, align affiliate commission, and review Smart Promotion eligibility.' },
      { q: 'How should cross-border sellers use a TikTok Shop campaign calendar?', a: 'Cross-border sellers should use the calendar as an operating schedule for product readiness, U.S. market page localization, creator sample timing, affiliate commission setup, inventory planning, logistics risk, and weekly performance review.' },
    ],
    related: [
      { label: 'TikTok Shop US Logistics: Why Fulfillment Is Now Part of Your Growth Strategy', href: 'tiktok-shop-us-logistics-fulfillment-strategy.html' },
      { label: 'TikTok Shop Affiliate Marketing for Brands', href: 'tiktok-shop-affiliate-marketing-for-brands.html' },
      { label: 'TikTok Shop Deals for You Days 2026', href: 'tiktok-shop-us-deals-for-you-days.html' },
    ],
  },
};

const App = () => {
  const getLang = () => new URLSearchParams(window.location.search).get('lang') === 'en' ? 'en' : 'zh';
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
      ? 'DFYD 结束后：2026 US TikTok Shop Campaign Calendar 怎么用？ | WE Marketing'
      : 'After DFYD: 2026 US TikTok Shop Campaign Calendar | WE Marketing';
  }, [lang]);
  return <><CursorStars /><NavBar lang={lang} onLang={setLang} basePath="../" /><BlogPost {...POSTS[lang]} labels={LABELS[lang]} /><CtaFooter lang={lang} /><Footer lang={lang} basePath="../" /></>;
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
