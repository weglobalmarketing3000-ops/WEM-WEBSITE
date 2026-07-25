const P = (text) => ({ kind: 'p', text });
const UL = (items, ordered = false) => ({ kind: 'list', items, ordered });
const TABLE = (headers, rows) => ({ kind: 'table', headers, rows });
const CALLOUT = (text) => ({ kind: 'callout', text });
const INFO = (src, alt, caption) => ({ kind: 'infographic', src, alt, caption });
const CTA = (label, href = 'https://zus03h0enw04.sg.larksuite.com/scheduler/03970278dd9a7925') => ({ kind: 'cta', label, href });

const LABELS = {
  en: { back: 'Blog', toc: 'On this page', faq: 'Frequently asked questions', related: 'Related guides' },
  zh: { back: '博客', toc: '本文目录', faq: '常见问题', related: '相关文章' },
};

const SOURCE_PDF = 'https://ads.tiktok.com/business/library/FnB_cold_start_EN.pdf';
const GMV_MAX_SOURCE = 'https://ads.tiktok.com/help/article/about-product-gmv-max?lang=en';

const POSTS = {
  en: {
    meta: {
      title: 'TikTok Shop Food and Beverage Cold Start: A 0-to-1 Launch System',
      cat: 'TIKTOK SHOP U.S. · FOOD & BEVERAGE',
      author: 'WE Marketing Team',
      date: 'Jul 25, 2026',
      read: '12 min read',
      heroImage: 'hero-tiktok-shop-food-beverage-cold-start-v2.png',
      heroAlt: 'Food, beverage, and condiment hero SKUs arranged for a TikTok Shop 0-to-1 cold-start content test',
    },
    sections: [
      {
        id: 'direct-answer',
        eyebrow: 'THE REAL CORRECTION',
        h: 'A food and beverage cold start is a 0-to-1 product test, not a posting sprint',
        body: [
          CALLOUT('A TikTok Shop food and beverage cold start should prove that one product, one creator thesis, several useful content angles, a clear product page, a workable offer, paid testing, inventory, and fulfillment can operate as one system. The first 30 days should end with a decision: scale, repair, or stop.'),
          P('A new F&B product does not become ready because a brand sends the most samples, publishes the most videos, or turns on ads first. Affiliate is not free marketing just because a collaboration is commission-only. A serious test still needs product inventory, creator screening, sample follow-up, content direction, GMV Max budget, customer support, and fulfillment capacity.'),
          P('TikTok for Business groups its current F&B cold-start guidance into product selection and testing, launch content, affiliate co-marketing, product-page quality, buyer experience, promotions, and GMV Max. Those are useful components. The operating mistake is treating them as separate checkboxes. A cold start becomes useful only when every component sends evidence into the next decision.'),
          INFO(
            'tiktok-shop-fnb-zero-to-one-loop.svg',
            'WEM food and beverage 0-to-1 cold-start loop from product truth through creator fit, content, product page, GMV Max, fulfillment, and next decision',
            'WEM operating framework: use each launch layer to decide what the next test should keep, repair, or stop.',
          ),
        ],
      },
      {
        id: 'product-test',
        eyebrow: 'PRODUCT SELECTION',
        h: 'Test several candidates, then concentrate on one to three hero SKUs',
        body: [
          P('TikTok’s F&B guide recommends testing three to five SKUs over one to two weeks, while its action list gives a broader three-to-seven range. That is a screening stage, not a reason to divide samples, creator attention, content, and ad budget equally across the whole catalog. WEM’s practical move is to test several candidates lightly, then concentrate the real launch on one to three hero SKUs.'),
          TABLE(['Stage', 'Product scope', 'What the brand needs to learn'], [
            ['Quick screen', '3 to 5 candidate SKUs, flavors, formats, or offers', 'Which option earns attention and gives creators a believable product story?'],
            ['0-to-1 launch', '1 to 3 hero SKUs', 'Can the strongest candidate create repeatable content, conversion, and reliable fulfillment?'],
            ['Scale decision', 'The proven hero SKU plus controlled extensions', 'Should the brand add flavors, bundles, replenishment, or another product role?'],
          ]),
          P('A useful F&B hero SKU is easy to understand in a few seconds, visually demonstrable through taste, texture, preparation, or occasion, and supported by inventory and economics that can carry samples, commission, shipping, and controlled paid testing. The highest-margin item is not automatically the best lead-in product. A lower-margin SKU can be valuable if it attracts the right customer and creates a credible path into bundles, repeat purchase, or higher-margin products. If that downstream path does not exist, the economics need work.'),
          P('TikTok’s PDF calls at least $250 in GMV and three or more U.S. orders within the first 30 days a cold-start milestone. That is an early transaction signal, not complete proof of product-market fit. The brand still needs to know why the orders happened, whether more than one content angle can work, and whether the contribution margin and customer experience can repeat.'),
        ],
      },
      {
        id: 'creator-system',
        eyebrow: 'CREATOR AFFILIATE',
        h: 'Creators are early potential customers, not sample destinations',
        body: [
          P('A creator should either personally want the product or believe they can sell it to their audience. If qualified food, recipe, family, fitness, wellness, hosting, or lifestyle creators repeatedly show no interest, that is product, offer, or positioning feedback. Sending more generic invitations does not repair that signal.'),
          P('TikTok’s F&B guide says affiliates drive approximately 70% of category GMV and recommends reaching out to 100 creators a day with free-product samples. Treat that as platform guidance, not a universal KPI. A team that cannot screen fit, approve samples, provide claims-safe direction, follow up, and learn from the resulting content will create more shipments, not more evidence.'),
          P('For a smaller brand, WEM’s experience-based working range is often roughly 50 to 100 samples per hero SKU per month, plus enough inventory to support ongoing orders. It is not a performance guarantee or a fixed quota. The right number depends on product fit, budget, margin, follow-up capacity, and supply. Before approving a sample, the team should be able to picture at least one believable creator-specific content angle.'),
          UL([
            'Choose creators for product affinity, audience fit, commerce evidence, and ability to explain or demonstrate the food.',
            'Give each approved creator two or three usable angles, accurate product facts, claim boundaries, and a strong reference video.',
            'Track outreach response and sample acceptance before judging content or sales.',
            'Treat delivery as the start of follow-up, not the end of the affiliate action.',
            'Build repeat relationships with creators whose content, communication, and audience response produce useful learning.',
          ]),
        ],
      },
      {
        id: 'creative',
        eyebrow: 'F&B CONTENT',
        h: 'Make an offline sensory experience understandable on a screen',
        body: [
          P('A shopper cannot taste a snack or smell a drink through TikTok. F&B content has to translate sensory experience into visible evidence. TikTok recommends showing taste, texture, and usage, producing at least two high-quality videos each week, and beginning GMV Max with five to ten videos. The important question is not only how many videos exist. It is whether they perform different selling jobs.'),
          TABLE(['Content job', 'What the shopper needs to understand', 'Useful formats'], [
            ['Sensory proof', 'What does it crunch, pour, mix, melt, or taste like?', 'Close-up texture, preparation, first reaction'],
            ['Usage and occasion', 'When would this fit into my life?', 'Breakfast, lunchbox, workout, hosting, snack routine'],
            ['Product distinction', 'Why this instead of a familiar alternative?', 'Ingredient, format, flavor, or preparation comparison'],
            ['Trust', 'Is the product legitimate and right for me?', 'Label walkthrough, founder context, reviews, accurate sourcing'],
            ['Offer', 'Why buy this listing now?', 'Bundle, flavor choice, shipping, promotion, replenishment'],
          ]),
          P('High views and sales are not interchangeable. An entertaining tasting video can reach broadly without creating a reason to buy. A more product-focused video may receive fewer views but convert better because the people who stay are more relevant. At the same time, early high views are still a distribution signal. If the product economics and content quality make sense, that video can deserve a controlled paid test before the team dismisses it for weak immediate organic sales.'),
          CALLOUT('Ten nearly identical unboxings create less learning than five videos with five clear jobs. During a cold start, content is customer research with a buy button attached.'),
        ],
      },
      {
        id: 'buyer-experience',
        eyebrow: 'PRODUCT PAGE & TRUST',
        h: 'Do not pay to send more shoppers into an unclear listing',
        body: [
          P('TikTok’s guide recommends clear product images, nutrition information, strong calls to action, a healthy Shop Performance Score, fast responses, customer reviews, smooth shipping, and a free-shipping offer. The operator lesson is simple: the product page and buyer experience are part of the content funnel.'),
          UL([
            'Make the first image, pack size, flavor, quantity, and bundle contents obvious.',
            'Keep ingredients, nutrition, allergens, storage, preparation, and claims accurate and readable.',
            'Match the product-page promise to what creators show in content.',
            'Treat item price and shipping as one shopper-facing value decision.',
            'Protect freshness, packaging condition, delivery timing, customer response, and review health.',
          ]),
          P('Free shipping can reduce friction, but it is not free to the brand. Test it inside contribution margin instead of adding it by habit. Food and beverage is also trust-heavy because customers are putting the product into their bodies. Ingredient clarity, responsible claims, reviews, packaging condition, and support matter alongside the creative. A poor first delivery can weaken creator confidence, repeat purchase, and future paid performance.'),
        ],
      },
      {
        id: 'gmv-max',
        eyebrow: 'PAID TESTING',
        h: 'Use GMV Max to amplify learning, not to hide uncertainty',
        body: [
          P('TikTok recommends using early promotion and GMV Max with an expanding pool of brand and authorized affiliate content. Its current Help Center describes Product GMV Max as an automated campaign that uses available creative assets and optimizes organic and paid delivery toward total channel ROI. Paid delivery can reveal which creators, hooks, use cases, and offers deserve more exposure. It cannot repair weak product positioning, an unclear page, or unworkable shipping economics.'),
          P('Protect the balance of the launch budget. Spending everything on samples and leaving nothing to test promising content creates an incomplete cold start. Spending heavily on GMV Max without enough credible brand and affiliate content creates the same problem from the other direction. Samples, creator support, content, paid testing, inventory, and fulfillment need one shared budget logic.'),
          P('There is also a reporting nuance. TikTok says GMV Max reporting attributes orders for promoted products from paid, organic, and affiliate sources to GMV Max. Do not automatically treat every dollar shown in that dashboard as incremental ad impact. Review spend, total product GMV, content-level behavior, margin, and the broader shop trend together.'),
        ],
      },
      {
        id: 'thirty-days',
        eyebrow: '30-DAY 0-TO-1 PLAN',
        h: 'Turn the first month into four decisions',
        body: [
          UL([
            'Days 1 to 7, product truth: screen three to five candidates, select one to three hero SKUs, confirm margin, offer, product page, inventory, shipping, and five to ten distinct starting videos.',
            'Days 8 to 14, creator fit: recruit a focused cohort, track response and sample acceptance, support delivered samples with usable angles, and add content based on real customer questions.',
            'Days 15 to 21, amplification: add promising brand and authorized affiliate content to GMV Max, compare content jobs, and review product clicks, conversion, spend, margin, reviews, and fulfillment signals.',
            'Days 22 to 30, operating decision: scale a repeatable pattern, repair one named constraint, or stop a weak product test before it consumes more samples, inventory, and creator trust.',
          ]),
          P('Demand can change faster than supply on TikTok Shop. A single creator video can move a product from a small daily order count into a different fulfillment reality. Before increasing spend or creator volume, confirm replenishment, packaging, warehouse handoff, customer communication, and support capacity.'),
          TABLE(['Decision', 'Evidence', 'Next move'], [
            ['Scale', 'More than one useful content angle, acceptable conversion, workable economics, reliable fulfillment', 'Increase creator depth, content variety, inventory, and paid testing carefully.'],
            ['Repair', 'Some demand signal, but one visible constraint in fit, content, page, offer, trust, or shipping', 'Fix the named constraint and run a narrower second test.'],
            ['Stop', 'Weak response across several credible tests or no realistic economic path', 'Preserve the learning and move resources to a stronger candidate.'],
          ]),
        ],
      },
      {
        id: 'measurement',
        eyebrow: 'WEEKLY REVIEW',
        h: 'Measure where the system lost momentum',
        body: [
          P('GMV matters, but GMV alone cannot explain what to do next. Review creator response, sample acceptance, delivery, posting, repeat posting, content quality, distribution, product clicks, conversion, commission, samples, shipping, paid spend, reviews, cancellations, support issues, and repeat purchase where relevant.'),
          P('The order matters. If creators do not accept the product, review product fit, creator selection, and outreach. If they accept but do not post, review original fit, the brief, follow-up, and product experience. If videos earn views but few clicks, review purchase intent. If clicks are healthy but orders are weak, inspect the page, price, shipping, reviews, trust, and checkout offer.'),
          P('Do not solve every weak result by sending more samples, raising every commission, or increasing the ad budget. Identify whether the constraint is the product, creator fit, content, product page, offer, trust, inventory, or fulfillment. Then change the smallest part of the system that can test that diagnosis.'),
        ],
      },
      {
        id: 'wem-role',
        eyebrow: 'WHERE WEM FITS',
        h: 'Build the operating system before you scale the activity',
        body: [
          P('WE Marketing helps U.S. consumer brands build and operate TikTok Shop cold starts across hero-SKU selection, creator affiliate recruitment, sample follow-up, creator briefs, content coaching, shop coordination, paid testing, inventory awareness, and weekly performance decisions. The value is not a larger invitation number. It is connecting the decisions so each launch produces better evidence.'),
          P('A brand can self-operate this system if the team has the time, judgment, tools, and follow-through. WEM is most useful when a team needs hands-on execution, cross-brand pattern recognition, creator relationships, and a clean 0-to-1 process it can later understand and own.'),
          CTA('Build a TikTok Shop F&B 0-to-1 plan with WEM →'),
        ],
      },
      {
        id: 'sources',
        eyebrow: 'SOURCE NOTES',
        h: 'Sources and boundaries',
        body: [
          P('Primary source: TikTok for Business, “From Zero to Performer,” F&B cold-start guide, reviewed directly on July 25, 2026. Product-test ranges, the first-30-day milestone, content-volume suggestions, affiliate-share and outreach guidance, commission references, listing and shipping recommendations, promotion budgets, and creative-pool guidance are attributed to that PDF.'),
          P('Product GMV Max product behavior and reporting language were checked against the TikTok Business Help Center page “About Product GMV Max,” updated June 2026 and reviewed July 25, 2026. Platform guidance can change and account access can differ. Confirm current settings and eligibility in Seller Center.'),
          P('The one-to-three hero-SKU concentration, experience-based sample range, creator-as-customer judgment, sensory content matrix, budget balance, diagnostic sequence, and scale-repair-stop model are WEM operating frameworks. They are not TikTok policy or a guarantee of views, orders, GMV, ROI, creator participation, or product-market fit.'),
          CTA('Read TikTok’s F&B cold-start guide', SOURCE_PDF),
          CTA('Read TikTok’s current Product GMV Max overview', GMV_MAX_SOURCE),
        ],
      },
    ],
    faqs: [
      { q: 'What is a TikTok Shop food and beverage cold start?', a: 'It is a 0-to-1 product validation period that connects product selection, creator fit, samples, content, the product page, offer, GMV Max, inventory, fulfillment, and customer feedback. Its purpose is to decide what to scale, repair, or stop.' },
      { q: 'How many F&B products should a brand test?', a: 'TikTok recommends quick tests across three to five SKUs, with a broader three-to-seven action-step range. WEM recommends using that as a screen, then concentrating the real launch on one to three hero SKUs.' },
      { q: 'What counts as product-market fit in the first 30 days?', a: 'TikTok’s guide uses at least $250 in GMV and three or more U.S. orders as a cold-start milestone. Treat that as an early transaction signal, not complete proof. Repeatable content response, conversion, workable economics, fulfillment, reviews, and downstream customer value provide stronger evidence.' },
      { q: 'Should a small food brand contact 100 creators every day?', a: 'TikTok’s guide recommends outreach at that scale, but it should not become a blind volume target. A smaller brand needs enough capacity to screen creators, approve samples, provide useful guidance, follow up, and support inventory. A smaller, well-matched cohort is often more useful than a generic list the team cannot support.' },
      { q: 'How many videos should a new F&B product have?', a: 'TikTok recommends beginning GMV Max with five to ten videos and expanding the creative pool. Those videos should test different jobs such as sensory proof, usage, product distinction, trust, and offer, not repeat the same unboxing.' },
      { q: 'When should an F&B brand start GMV Max?', a: 'A brand can test early once the product page, offer, shipping, inventory, tracking, and an initial credible creative pool are ready. GMV Max can distribute and compare content, but it cannot solve weak positioning or a broken buyer experience.' },
      { q: 'Why can a TikTok food video get views but no sales?', a: 'The video may be entertaining without creating purchase intent. If clicks are weak, review the creator, angle, and call to action. If clicks are healthy but orders are weak, inspect the product page, price, shipping, reviews, trust, and offer.' },
    ],
    related: [
      { label: 'TikTok Shop Affiliate Strategy for Brands', href: 'tiktok-shop-affiliate-strategy-for-brands' },
      { label: 'TikTok Shop Creator Matchmaking Playbook', href: 'tiktok-shop-creator-matchmaking-playbook' },
      { label: 'TikTok Shop US Logistics and Fulfillment Strategy', href: 'tiktok-shop-us-logistics-fulfillment-strategy' },
    ],
  },
  zh: {
    meta: {
      title: 'TikTok Shop 食品饮料冷启动：从 0 到 1 的产品验证系统',
      cat: 'TIKTOK SHOP 美国 · 食品饮料',
      author: 'WE Marketing Team',
      date: '2026 年 7 月 25 日',
      read: '13 分钟阅读',
      heroImage: 'hero-tiktok-shop-food-beverage-cold-start-v2.png',
      heroAlt: '食品、饮料和调味品 Hero SKU 静物组合，用于 TikTok Shop 从 0 到 1 冷启动内容测试',
    },
    sections: [
      {
        id: 'zh-direct-answer',
        eyebrow: '先纠正一个误区',
        h: '食品饮料冷启动不是多发视频，而是完成从 0 到 1 的产品验证',
        body: [
          CALLOUT('TikTok Shop 食品饮料冷启动要验证的，不是团队能做多少动作，而是一个产品、一套达人逻辑、几种有效内容、清楚的商品页、可承受的 offer、付费测试、库存和履约能不能连成系统。第一个 30 天应该得到一个决定：扩大、修复，或者停止。'),
          P('新品不是寄出最多样品、发出最多视频、最早打开广告就算冷启动成功。Affiliate 也不是免费营销。哪怕是纯佣合作，品牌仍然需要样品库存、达人筛选、寄样 follow-up、内容支持、GMV Max 预算、客服和履约能力。'),
          P('TikTok for Business 的 F&B 冷启动资料把工作拆成选品测试、launch 内容、affiliate co-marketing、商品页质量、买家体验、promotion 和 GMV Max。这些都是有用的组件，但不能变成互不相干的 checklist。真正有价值的冷启动，是每一层都能给下一步决策提供证据。'),
          INFO(
            'tiktok-shop-fnb-zero-to-one-loop-zh.svg',
            'WEM 食品饮料从 0 到 1 冷启动闭环：产品事实、达人匹配、内容、商品页与 offer、GMV Max、履约和下一次决策',
            'WEM 运营框架：每一层都要回答下一轮应该保留什么、修复什么、停止什么。',
          ),
        ],
      },
      {
        id: 'zh-product-test',
        eyebrow: '选品与测试',
        h: '可以同时筛 3 到 5 个候选，但真正 launch 要集中 1 到 3 个 Hero SKU',
        body: [
          P('TikTok 的 F&B 指南建议在一到两周内测试 3 到 5 个 SKU，后面的 action list 又给出 3 到 7 个的范围。这里讲的是快速筛选，不是让品牌把样品、达人注意力、内容和广告预算平均分给整个产品目录。WEM 更实际的做法是先轻量比较几个候选，再把真正的冷启动资源集中到 1 到 3 个 Hero SKU。'),
          TABLE(['阶段', '商品范围', '品牌要学到什么'], [
            ['快速筛选', '3 到 5 个 SKU、口味、规格或 offer', '哪个选项更容易获得注意，也让达人更容易讲出一个真实故事？'],
            ['0-1 launch', '1 到 3 个 Hero SKU', '最强候选能不能形成重复内容、转化和稳定履约？'],
            ['扩大阶段', '跑出来的 Hero SKU 加少量延伸', '下一步该加口味、组合装、复购路径，还是另一个产品角色？'],
          ]),
          P('适合冷启动的 F&B Hero SKU，通常需要几秒内能看懂，也能通过口感、质地、冲泡、食用场景或搭配被拍出来；同时要有足够库存和经济空间支持寄样、佣金、运费与受控投流。最高毛利的产品不一定最适合做 lead-in SKU。低一点的首单利润如果能带来组合装、复购或更高毛利商品，也可能有价值。但如果后续路径不存在，品牌就不能只用销量替弱经济模型辩护。'),
          P('TikTok PDF 把美国站前 30 天达到至少 250 美元 GMV 和至少 3 个订单称为 cold-start milestone。这个数字只能证明出现了早期成交信号，不能直接证明产品已经找到稳定 product-market fit。品牌仍然需要知道订单为什么发生、是否有不止一个内容角度可以复现，以及利润和用户体验能不能持续。'),
        ],
      },
      {
        id: 'zh-creators',
        eyebrow: '达人 Affiliate',
        h: '达人是第一批潜在消费者，不是样品收货地址',
        body: [
          P('一个达人要么自己真的想试这个产品，要么相信自己能把它卖给受众。如果一批真正匹配的美食、食谱、家庭、健身、wellness、生活方式达人持续没有兴趣，品牌应该把它看成产品、offer 或定位信号，而不是用更大的群发名单覆盖过去。'),
          P('TikTok 的 F&B 指南提到 affiliate 贡献约 70% 的类目 GMV，并建议每天触达 100 位达人、提供 free product samples。品牌应该把它理解为平台 guidance，而不是所有团队必须完成的 KPI。如果团队没有能力做达人筛选、样品审核、claim 边界、跟进和内容复盘，增加触达只会增加包裹，不会增加有效证据。'),
          P('对于体量较小的品牌，WEM 的经验型工作范围通常是每个 Hero SKU 每月大约 50 到 100 份样品，同时保留足够的销售库存。这不是业绩保证，也不是固定 quota。实际数量要根据达人 fit、预算、利润、跟进能力和供货决定。每批准一份样品之前，团队至少要能想象出这个达人可以成立的一种具体内容角度。'),
          UL([
            '先看产品 affinity、受众、commerce 证据和达人能不能把食物讲清楚、拍清楚。',
            '给已批准达人 2 到 3 个可执行角度、准确产品事实、claim 边界和强 reference video。',
            '先看邀约回复和样品接受率，再看发布、内容和销售。',
            '样品送达只是 follow-up 的开始，不是 affiliate action 的完成。',
            '对真正匹配的达人做具体反馈、第二个角度和长期关系，而不是只追一次发布。',
          ]),
        ],
      },
      {
        id: 'zh-content',
        eyebrow: 'F&B 内容',
        h: '把线下的味觉和食用体验，变成镜头里看得懂的证据',
        body: [
          P('用户不能隔着 TikTok 尝到零食，也闻不到饮料。食品饮料内容的任务，是把感官体验翻译成可见证据。TikTok 建议展示 taste、texture 和 usage，每周至少生产两条高质量视频，并以 5 到 10 条视频启动 GMV Max。真正要问的不是视频够不够多，而是每条视频有没有不同任务。'),
          TABLE(['内容任务', '用户需要看懂什么', '适合形式'], [
            ['感官证明', '到底有多脆、怎么倒、怎么融、怎么拌、口感是什么？', '质地 close-up、制作过程、第一口反应'],
            ['使用场景', '什么时候、和谁、怎么吃？', '早餐、午餐盒、运动后、聚会、夜间零食'],
            ['产品差异', '为什么不是熟悉的替代品？', '原料、规格、口味、做法或搭配比较'],
            ['信任', '这个产品是否可靠、适合我？', '标签解释、品牌故事、评价、准确来源'],
            ['Offer', '为什么现在买这个 listing？', '组合装、口味选择、运费、优惠和复购'],
          ]),
          P('高播放和高销量不是一回事。有趣的试吃视频可能覆盖很多人，却没有给用户下单理由；更产品导向的视频可能播放少一些，但留下的人更接近目标客户。另一方面，高播放仍然是早期分发信号。如果产品经济和内容质量成立，这类视频可以获得一次小范围受控投流，而不是因为没有立刻产生自然销售就被放弃。'),
          CALLOUT('10 条几乎一样的开箱，通常不如 5 条承担不同任务的视频。冷启动阶段，内容本质上是带购买入口的消费者研究。'),
        ],
      },
      {
        id: 'zh-pdp',
        eyebrow: '商品页与信任',
        h: '不要花钱把更多用户送进一个讲不清楚的 listing',
        body: [
          P('TikTok 指南建议提供清楚的商品图、nutrition information、明确 CTA、良好的 Shop Performance Score、快速回复、评价、顺畅配送和 free shipping。运营上的重点是：商品页和买家体验本来就是内容漏斗的一部分。'),
          UL([
            '第一张图要让用户看懂商品、pack size、口味、数量和组合内容。',
            '成分、营养、过敏原、保存、制作方法和 claims 必须准确可读。',
            '商品页承诺要和达人视频里展示的产品一致。',
            '商品价和运费要当作同一个用户价值决策。',
            '提前保护新鲜度、包装状态、到货时间、客服响应和评价健康。',
          ]),
          P('Free shipping 可以降低阻力，但对品牌并不免费。它必须放进 contribution margin 里测试，不能因为平台建议就习惯性打开。食品饮料也是 trust-heavy 类目，因为用户会把产品吃进身体。原料透明、claim 边界、评价、包装状态和售后支持，与内容一样重要。一次糟糕的到货体验，可能同时伤害评价、达人信心、复购和后续投流。'),
        ],
      },
      {
        id: 'zh-gmvmax',
        eyebrow: '付费测试',
        h: 'GMV Max 用来放大学习，不是用自动化掩盖不确定性',
        body: [
          P('TikTok 建议在早期使用 promotion 和 GMV Max，并不断增加品牌与已授权 affiliate 内容。当前 Help Center 把 Product GMV Max 定义为使用可用素材、共同优化自然与付费分发的自动化 campaign。付费可以帮助团队判断哪些达人、hook、场景和 offer 值得获得更多曝光，但不能修复一个难理解的产品、一个失去信任的页面，或根本不成立的运费经济。'),
          P('冷启动预算必须保持平衡。把钱全部用在样品上，却没有预算测试有潜力的内容，会留下一个不完整的冷启动；反过来，没有足够可信内容就重投 GMV Max，也是同一个问题。样品、达人支持、内容、投流、库存和履约必须放在同一套预算逻辑里。'),
          P('报表还有一个容易误读的地方。TikTok 说明，GMV Max dashboard 会把被推广商品的 paid、organic 和 affiliate 订单一起归因到 GMV Max。品牌不能自动把 dashboard 里每一美元都当成广告增量。要把 spend、商品总 GMV、内容表现、利润和整个店铺趋势放在一起判断。'),
        ],
      },
      {
        id: 'zh-plan',
        eyebrow: '30 天 0-1 计划',
        h: '第一个月需要完成四个决定',
        body: [
          UL([
            '第 1 到 7 天，产品事实：筛 3 到 5 个候选，集中 1 到 3 个 Hero SKU，确认利润、offer、商品页、库存、运费和 5 到 10 条承担不同任务的起始视频。',
            '第 8 到 14 天，达人匹配：启动一组真正匹配的达人，跟踪回复和样品接受率，为已送达样品提供内容角度，并用真实用户问题补充下一批内容。',
            '第 15 到 21 天，受控放大：把有潜力的品牌内容和已授权 affiliate 内容加入 GMV Max，比较不同内容任务，并查看点击、转化、spend、利润、评价和履约信号。',
            '第 22 到 30 天，运营决策：扩大已经出现的重复模式，修复一个明确 bottleneck，或者停止弱测试，避免继续消耗样品、库存和达人信任。',
          ]),
          P('TikTok Shop 的需求变化可能比供应链快。一条达人视频跑出来后，商品可能很快进入完全不同的日单量。增加 spend 或达人量之前，先确认补货、包装、仓库交接、用户沟通和客服可以接住这个变化。'),
          TABLE(['决定', '证据', '下一步'], [
            ['扩大', '不止一个内容角度有效，转化可接受，经济模型和履约稳定', '逐步增加达人深度、内容差异、库存和付费测试。'],
            ['修复', '已有需求信号，但达人 fit、内容、页面、offer、信任或运费有明确问题', '只修这个 bottleneck，再做一次更窄的测试。'],
            ['停止', '几次可信测试都很弱，或者没有可实现的经济路径', '保留学习，把资源转给更强候选。'],
          ]),
        ],
      },
      {
        id: 'zh-review',
        eyebrow: '每周复盘',
        h: '找到系统在哪一层失去动能',
        body: [
          P('GMV 必须看，但只看 GMV 无法告诉团队下一步做什么。冷启动要把邀约回复、样品接受、送达、发布、复发、内容质量、分发、商品点击、转化、佣金、样品、运费、广告、评价、取消、客服问题和复购放在一条关系链里。'),
          P('顺序很重要。达人不接受，先检查产品、达人选择和邀约；接受却不发，检查最初 fit、brief、follow-up 和产品体验；视频有播放却没点击，检查购买理由；点击正常却不下单，检查商品页、价格、运费、评价、信任和 checkout offer。'),
          P('不要把所有弱结果都用更多样品、全员加佣或提高广告预算解决。先判断 bottleneck 在产品、达人、内容、商品页、offer、信任、库存还是履约，再改变系统中最小但能验证这个判断的一部分。'),
        ],
      },
      {
        id: 'zh-wem',
        eyebrow: 'WEM 的角色',
        h: '先把 0-1 系统搭起来，再扩大动作量',
        body: [
          P('WE Marketing 为美国消费品牌提供 TikTok Shop 冷启动与日常运营支持，把 Hero SKU、creator affiliate 招募、寄样跟进、达人 brief、content coaching、店铺协同、付费测试、库存意识和每周复盘连接起来。价值不在于发出更大的邀请数量，而在于让每次 launch 都能产生更清楚的下一步。'),
          P('如果品牌内部有时间、判断力、工具和 follow-through，当然可以自己做。WEM 更适合需要 hands-on execution、跨品牌经验、达人关系和一套未来团队也能理解与接手的 0-1 流程的品牌。'),
          CTA('和 WEM 一起搭建 F&B 0-1 冷启动计划 →'),
        ],
      },
      {
        id: 'zh-sources',
        eyebrow: '来源说明',
        h: '来源与使用边界',
        body: [
          P('主要来源：TikTok for Business《From Zero to Performer》F&B cold-start guide，WEM 于 2026 年 7 月 25 日直接核对。文中的产品测试范围、首个 30 天 milestone、视频数量建议、affiliate 占比和触达建议、佣金参考、listing 与 shipping 建议、promotion budget 和 creative pool guidance 均归属于该 PDF。'),
          P('Product GMV Max 的功能和报表表述，另外核对了 TikTok Business Help Center《About Product GMV Max》，页面更新于 2026 年 6 月，WEM 于 2026 年 7 月 25 日查看。平台 guidance 会变化，账户权限也可能不同，执行前应在 Seller Center 再确认。'),
          P('1 到 3 个 Hero SKU 的集中原则、经验型样品范围、达人也是潜在客户、感官内容矩阵、预算平衡、诊断顺序和“扩大、修复、停止”模型属于 WEM 运营框架，不是 TikTok 政策，也不保证播放、订单、GMV、ROI、达人参与或 product-market fit。'),
          CTA('阅读 TikTok F&B cold-start 官方指南', SOURCE_PDF),
          CTA('阅读 TikTok Product GMV Max 当前说明', GMV_MAX_SOURCE),
        ],
      },
    ],
    faqs: [
      { q: 'TikTok Shop 食品饮料冷启动是什么？', a: '它是一段从 0 到 1 的产品验证期，把选品、达人 fit、样品、内容、商品页、offer、GMV Max、库存、履约和用户反馈连起来，最后决定扩大、修复还是停止。' },
      { q: '食品饮料品牌冷启动应该测试多少个商品？', a: 'TikTok 建议快速测试 3 到 5 个 SKU，action list 给出的更宽范围是 3 到 7 个。WEM 建议把它当作筛选，真正 launch 时把资源集中到 1 到 3 个 Hero SKU。' },
      { q: '前 30 天什么算 product-market fit？', a: 'TikTok F&B 指南把至少 250 美元 GMV 和至少 3 个美国站订单当作 cold-start milestone。它只是早期成交信号。能否重复出现内容反应、转化、可承受利润、稳定履约、好评价和后续客户价值，才是更强证据。' },
      { q: '小食品品牌需要每天触达 100 位达人吗？', a: 'TikTok 指南这样建议，但不能把它变成盲目数量目标。品牌必须有能力做筛选、寄样审核、内容支持、follow-up 和库存承接。一个真正匹配、团队能支持的小 cohort，通常比无法管理的大名单更有价值。' },
      { q: '新品需要多少条视频才能启动 GMV Max？', a: 'TikTok 建议从 5 到 10 条视频开始，再扩大 creative pool。视频要测试感官证明、使用场景、产品差异、信任和 offer 等不同任务，而不是重复同一种开箱。' },
      { q: 'F&B 品牌什么时候可以开始 GMV Max？', a: '商品页、offer、运费、库存、tracking 和第一批可信内容准备好后，可以小范围开始。GMV Max 能分发和比较内容，但不能解决定位不清或买家体验损坏的问题。' },
      { q: '为什么食品视频有播放却没有销量？', a: '视频可能有趣，却没有创造购买理由。点击弱时检查达人、内容角度和 CTA；点击正常但订单弱时，检查商品页、价格、运费、评价、信任和 offer。' },
    ],
    related: [
      { label: 'TikTok Shop Affiliate 怎么做稳：品牌要先打好店铺、产品和达人三层基础', href: 'tiktok-shop-affiliate-strategy-for-brands' },
      { label: 'TikTok Shop 达人 Matchmaking 怎么做？品牌需要的不只是“找达人”', href: 'tiktok-shop-creator-matchmaking-playbook' },
      { label: 'TikTok Shop 美国物流：为什么履约已经成为增长策略的一部分', href: 'tiktok-shop-us-logistics-fulfillment-strategy' },
    ],
  },
};

const App = () => {
  const getLang = () => new URLSearchParams(window.location.search).get('lang') === 'zh' ? 'zh' : 'en';
  const [lang, setLang] = React.useState(getLang());
  React.useEffect(() => {
    const sync = () => setLang(getLang());
    window.addEventListener('popstate', sync);
    return () => window.removeEventListener('popstate', sync);
  }, []);
  React.useEffect(() => {
    document.getElementById('seo-static-fallback')?.remove();
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  }, [lang]);
  return <><CursorStars /><NavBar lang={lang} onLang={setLang} basePath="../" /><BlogPost {...POSTS[lang]} labels={LABELS[lang]} /><CtaFooter lang={lang} /><Footer lang={lang} basePath="../" /></>;
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
