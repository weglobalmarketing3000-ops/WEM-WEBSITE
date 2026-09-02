const P = (text) => ({ kind: 'p', text });
const UL = (items) => ({ kind: 'list', items });
const TABLE = (headers, rows) => ({ kind: 'table', headers, rows });
const CALLOUT = (text) => ({ kind: 'callout', text });
const INFO = (src, alt, caption) => ({ kind: 'infographic', src, alt, caption });
const CTA = (label, href = 'https://zus03h0enw04.sg.larksuite.com/scheduler/03970278dd9a7925') => ({ kind: 'cta', label, href });

const LABELS = {
  en: { back: 'Blog', toc: 'On this page', faq: 'Frequently asked questions', related: 'Related guides' },
  zh: { back: '博客', toc: '本文目录', faq: '常见问题', related: '相关文章' },
};

const POSTS = {
  en: {
    meta: {
      title: 'From Cold Start to Refill: How New TikTok Shop Brands Use Customer CRM',
      cat: 'TIKTOK SHOP U.S. · COLD START · CUSTOMER RETENTION',
      author: 'WE Marketing Team', date: 'Jul 19, 2026', read: '12 min read',
      heroImage: 'hero-tiktok-shop-cold-start-refill-crm.png',
      heroAlt: 'New TikTok Shop brand moving from creator discovery and a first order into customer education, replenishment, and repeat purchase',
    },
    sections: [
      {
        id: 'direct-answer', eyebrow: 'COLD START', h: 'New brands should design the second order before launch', body: [
          CALLOUT('For a product that depends on replenishment, repeat use, or subscription economics, the second order is not a retention project for later. It belongs in the cold-start plan alongside the hero SKU, creator brief, product page, first-order offer, inventory, and customer support.'),
          P('Most new TikTok Shop brands build their cold start around the first order. They recruit creators, send samples, prepare content, choose an offer, and try to prove that an unfamiliar shop can convert. That work matters, but it leaves one expensive question unanswered: what should happen after the customer buys?'),
          P('A useful cold-start CRM system connects the first order to the next useful customer moment. It uses customer state, product education, expected refill timing, and purchase behavior to decide who should receive a message, why the timing makes sense, and what the brand should learn from the response.'),
          P('TikTok Shop Customer CRM gives eligible sellers customer insights, segmentation, and outreach tools for automated and one-time campaigns. The operating advantage does not come from sending more messages. It comes from knowing which message has earned a place in the customer journey.'),
        ],
      },
      {
        id: 'second-order', eyebrow: 'OPERATING CORRECTION', h: 'The second order changes the cold-start decisions upstream', body: [
          P('If a team cannot explain why a good-fit customer would buy again, it may be choosing the wrong hero SKU, making the wrong promise, or building a first-order offer that attracts customers with weak long-term fit. A deep discount can create a sale without creating a product habit. A creator can generate strong first-order GMV while setting expectations the product experience cannot support.'),
          UL([
            'Hero SKU: choose a product with a natural reason to replenish, continue, upgrade, or add a useful companion product.',
            'Creator brief: show how the product fits into a real routine, not only why it feels exciting today.',
            'Product page: explain quantity, usage, expected experience, and product fit clearly enough to support correct use after delivery.',
            'Offer: introduce the product without training customers to wait for an extreme discount.',
            'Inventory: prepare for both a creator-driven first-order spike and the likely refill window that follows.',
            'Customer support: answer usage and order questions before confusion becomes a return or negative review.',
          ]),
          P('The first order shows whether acquisition happened. The second order begins to show whether the product, promise, and customer were a good match. That is why retention is part of cold start, not a separate department that appears after growth.'),
          INFO('tiktok-shop-cold-start-refill-loop.svg', 'WEM cold-start to refill operating loop connecting hero SKU, first order, customer education, refill timing, and second-order learning', 'WEM operating framework: customer questions and repeat behavior should improve the next product page, creator brief, offer, and inventory decision.'),
        ],
      },
      {
        id: 'customer-state', eyebrow: 'CUSTOMER STATE', h: 'CRM should follow the customer, not the promotion calendar', body: [
          P('Weak CRM starts with the brand calendar: a holiday, a coupon, a LIVE, or this week’s revenue target. Strong CRM starts with the customer’s current state. A shopper who abandoned checkout, a first-time buyer waiting for delivery, and a repeat customer approaching a refill do not need the same message.'),
          TABLE(['Customer state', 'Useful CRM job', 'Question the brand must answer'], [
            ['Product viewer or new follower', 'Explain the hero product and real use case', 'What must this person understand before buying?'],
            ['Cart or checkout abandoned', 'Remove one likely point of friction', 'What probably stopped the order?'],
            ['First order delivered', 'Help the customer use the product correctly', 'What will make the first experience more successful?'],
            ['Expected refill window', 'Remind a narrow, relevant segment', 'Is the product likely running low, or are we simply trying to sell again?'],
            ['Repeat customer', 'Offer a refill, bundle, upgrade, or relevant launch', 'What is the next logical value based on prior behavior?'],
            ['Lapsed customer', 'Give a credible reason to return', 'What has changed enough to deserve attention again?'],
          ]),
          P('Current CRM access, available segments, channels, and campaign features depend on the live shop status shown in Seller Center. Verify what the account actually has before building a campaign calendar around it.'),
        ],
      },
      {
        id: 'refill-clock', eyebrow: 'REPLENISHMENT', h: 'Define the refill clock before writing the message', body: [
          P('Refill timing should not be copied from a generic ecommerce template. Start with product quantity, suggested usage, realistic usage frequency, and the customer’s likely routine. Thirty daily servings have different logic from a serum used several times a week, a cleaning concentrate used by household size, or a starter kit whose parts run out at different times.'),
          P('Treat the first estimate as a hypothesis. Review actual days to second order, customer questions, returns, usage feedback, and segment behavior. If customers buy earlier or later than expected, change the timing. If a reminder earns attention but produces little purchase activity, the issue may be the timing, product experience, price, or proposed next product.'),
          P('Products can have subscription economics without TikTok Shop offering a native subscription feature for that account and item. Customer CRM can support education, refill reminders, and repeat-purchase behavior, but brands should not call that a native TikTok Shop subscription unless the feature is officially available. Replenishment, continuity, and repeat purchase are the more accurate operating terms.'),
        ],
      },
      {
        id: 'small-architecture', eyebrow: 'CAMPAIGN DESIGN', h: 'A new brand only needs five clear CRM jobs', body: [
          P('A cold-start shop does not need fifteen campaigns. It needs a few messages with clear jobs, owners, and review dates.'),
          UL([
            'First-order education: clarify setup, usage, storage, routine, or the most common misunderstanding before trying to upsell.',
            'Usage support: collect repeated customer questions and route them back to packaging, product pages, creator content, and support scripts.',
            'Refill reminder: contact a relevant segment when product timing and customer history create a reasonable signal.',
            'Relevant bundle or next product: solve the next customer problem instead of using CRM to move unrelated inventory.',
            'LIVE, launch, or lapsed-customer outreach: explain what will be demonstrated or what has changed enough to make returning useful.',
          ]),
          P('Every campaign should define the audience, customer state, one purpose, product or offer rationale, owner, stop condition, and review date. Automated should never mean unreviewed.'),
        ],
      },
      {
        id: 'creator-quality', eyebrow: 'CREATOR QUALITY', h: 'Connect creator acquisition to repeat purchase', body: [
          P('Creator teams often stop at attributed first-order GMV. That hides a valuable cold-start signal: the quality of customers each content angle brings in. One angle may produce many first orders but weak repeat behavior, high returns, or repeated confusion. Another may create fewer first orders but better product understanding and stronger second-order behavior.'),
          P('Where the available data supports a reasonable cohort comparison, review customer questions, return reasons, repeat timing, and product fit around major creator or campaign windows. Add repeated expectation gaps to the next creator brief. Re-engage creators whose audiences appear to understand the product and remain good customers.'),
          P('CRM is not separate from creator operations. It is the customer side of the same product, content, inventory, fulfillment, and service system.'),
        ],
      },
      {
        id: 'policy-guardrails', eyebrow: 'PLATFORM GUARDRAILS', h: 'The latest policy updates define the guardrails, not the strategy', body: [
          P('TikTok Shop’s June 2026 Policy Pulse, published July 13 for the United States, highlighted three post-purchase updates that customer-service and CRM teams should add to their operating rules.'),
          UL([
            'Partial refunds: TikTok Shop Customer Service may initiate partial refund requests for eligible U.S. aftersales issues. Assign an owner to review, resolve, and record the underlying product or fulfillment reason.',
            'Review requests: requests must remain neutral, optional, and fair. Do not offer money, gifts, discounts, or refunds, suggest a star rating, use review gating, pressure customers, or ask them to remove a negative review.',
            'Buyer PII: names, phone numbers, email addresses, delivery addresses, social handles, payment details, and re-identifiable order data have strict use limits. Do not treat fulfillment data as an unrestricted off-platform marketing list.',
          ]),
          P('These rules do not reduce the value of CRM. They clarify what good retention is: using supported customer tools to offer a relevant next step without manipulating reviews or reusing customer information for unauthorized solicitation.'),
        ],
      },
      {
        id: 'measurement', eyebrow: 'MEASUREMENT', h: 'Measure whether the customer moved forward', body: [
          P('Read rate shows whether a message earned attention. It does not prove the customer relationship improved. Judge each campaign by the job it was designed to do.'),
          TABLE(['Measurement layer', 'Useful signals', 'Decision to make'], [
            ['Message quality', 'Delivered, read, unsubscribe, blocked', 'Did this message deserve attention?'],
            ['Commerce response', 'Product visits, checkout recovery, CRM orders, conversion', 'Did it change purchase behavior?'],
            ['Repeat purchase', 'Second-order rate, days to second order, repeat AOV', 'Is the brand building a real return pattern?'],
            ['Product experience', 'Questions, refunds, returns, review themes', 'What should change in the product, page, packaging, or support?'],
            ['Acquisition quality', 'Repeat behavior by creator or campaign window where measurable', 'Which content angles bring better-fit customers?'],
          ]),
          P('First-order education may reduce confusion before it creates revenue. A refill campaign should be reviewed against realistic product timing. A lapsed-customer message is not successful simply because it was opened.'),
        ],
      },
      {
        id: 'thirty-day-plan', eyebrow: '30-DAY PLAN', h: 'A practical cold-start CRM plan', body: [
          UL([
            'Week 1: choose the hero SKU, map the customer journey, estimate the first refill hypothesis, list the questions customers must understand, and confirm current CRM access.',
            'Week 2: launch one first-order education message and one cart or checkout recovery message with owners and review dates.',
            'Week 3: collect support questions, review themes, refund or return reasons, and campaign response. Update one product-page section and one creator brief.',
            'Week 4: test one narrow refill, relevant bundle, or LIVE reminder segment. Review message quality, second-order signals, and customer feedback before expanding.',
          ]),
          P('The first month does not need to prove maximum automation. It needs to prove that the brand can acquire a customer, help them succeed, recognize a reasonable next moment, and learn from what happens next.'),
        ],
      },
      {
        id: 'wem-role', eyebrow: 'WHY WEM', h: 'Where WEM fits', body: [
          P('WEM helps new and growing TikTok Shop brands connect cold start to retention instead of treating them as separate projects. That work can include hero-SKU selection, creator matching, sample operations, product pages, creator briefs, LIVE planning, Customer CRM structure, customer-experience feedback, and weekly performance review.'),
          P('The practical value is continuity. Creator content sets the expectation. The product page closes the knowledge gap. Fulfillment and support protect the experience. Customer CRM creates the next relevant touchpoint. Repeat-purchase behavior then changes the next creator, product, inventory, and offer decision.'),
          P('A cold start should not end when the first order arrives. It should create enough learning to make the second order more likely to be earned.'),
          CTA('Build a TikTok Shop cold-start and retention system with WEM →'),
        ],
      },
      {
        id: 'sources', eyebrow: 'SOURCE NOTES', h: 'Sources and claim boundaries', body: [
          P('Official sources checked July 19, 2026: TikTok Shop Academy “Customer Outreach Playbook”; “Policy Pulse (June 2026),” published July 13, 2026; “Customer Review Requests Best Practices and FAQs,” dated June 25, 2026; and “Seller Enforcement Policy,” dated June 25, 2026.'),
          P('CRM eligibility and features may change and should be verified inside Seller Center. The cold-start lifecycle, refill-clock method, creator-to-retention loop, measurement structure, and 30-day plan are WEM operating frameworks, not TikTok guarantees. WEM does not guarantee repeat purchase, CRM access, GMV, policy approval, or compliance outcomes.'),
          CTA('Read the TikTok Shop Customer Outreach Playbook', 'https://seller-us.tiktok.com/university/essay?knowledge_id=505578792273677&lang=en'),
          CTA('Read the June 2026 Policy Pulse', 'https://seller-us.tiktok.com/university/essay?knowledge_id=6747273381791534'),
          CTA('Read the review-request guidance', 'https://seller-us.tiktok.com/university/essay?course_type=1&from=search&knowledge_id=8794641096984333&role=1'),
          CTA('Read the Seller Enforcement Policy', 'https://seller-us.tiktok.com/university/essay?knowledge_id=2380042836166443'),
        ],
      },
    ],
    faqs: [
      { q: 'Should customer retention be part of a TikTok Shop cold start?', a: 'Yes. A new brand should define the second-order logic while choosing the hero SKU, first-order offer, creator promise, inventory plan, and post-purchase education. This does not require many campaigns before launch. It requires knowing why a good-fit customer would return and what the brand must learn after the first order.' },
      { q: 'How should a new TikTok Shop brand use Customer CRM first?', a: 'Start with first-order education, cart or checkout recovery, and one carefully timed refill, bundle, or LIVE use case. Give each campaign a customer state, one purpose, an owner, a stop condition, and a review date.' },
      { q: 'How should a brand estimate a refill window?', a: 'Begin with product quantity, realistic usage frequency, and expected routine. Validate the estimate using actual days to second order, customer questions, returns, and segment response. Treat the first timing assumption as a test.' },
      { q: 'Can TikTok Shop CRM support subscription products?', a: 'CRM can support products with subscription or replenishment economics through education, refill reminders, bundles, and relevant follow-up. Do not imply TikTok Shop provides a native subscription feature unless it is officially available for the specific shop and product.' },
      { q: 'Can a TikTok Shop seller reward a positive review?', a: 'Current guidance says sellers should not offer money, gifts, discounts, refunds, or other benefits for a review. Requests must be neutral and optional. Use an official incentivized-review feature only when it is available through TikTok Shop.' },
      { q: 'Can TikTok Shop buyer information be used for off-platform marketing?', a: 'The Seller Enforcement Policy restricts soliciting, sharing, retaining, or reusing Buyer PII outside authorized purposes. Use supported customer tools and verify current policy requirements instead of treating fulfillment data as an unrestricted email, SMS, or social marketing list.' },
    ],
    related: [
      { label: 'TikTok Shop CRM: Turn the First Order Into a Repeat-Purchase System', href: 'tiktok-shop-customer-retention-crm-playbook' },
      { label: 'TikTok Shop Creator Matchmaking Playbook', href: 'tiktok-shop-creator-matchmaking-playbook' },
      { label: 'TikTok Shop LIVE Strategy for Brands', href: 'tiktok-shop-live-strategy-brands' },
    ],
  },
  zh: {
    meta: {
      title: '从冷启动到补货：新品牌如何用 TikTok Shop Customer CRM 做复购',
      cat: 'TIKTOK SHOP 美国 · 冷启动 · 用户留存', author: 'WE Marketing Team', date: '2026 年 7 月 19 日', read: '12 分钟阅读',
      heroImage: 'hero-tiktok-shop-cold-start-refill-crm.png',
      heroAlt: '新品牌从达人种草和 TikTok Shop 首单走向用户教育、补货与复购的运营路径',
    },
    sections: [
      {
        id: '直接答案', eyebrow: '冷启动', h: '新品牌应该在上线前就设计第二单', body: [
          CALLOUT('对依赖补货、重复使用或 subscription economics 的产品来说，第二单不是以后再做的 retention 项目。它应该和 Hero SKU、达人 brief、商品页、首单 offer、库存和客服一起进入冷启动方案。'),
          P('很多新品牌做 TikTok Shop 冷启动时，把全部注意力放在第一单：找达人、寄样、做内容、定 offer、跑 LIVE，然后看店铺能不能尽快出单。这些工作都重要，但它们没有回答一个成本很高的问题：客户买完以后，下一步是什么？'),
          P('冷启动阶段的 Customer CRM，不是用来增加群发量，而是把首单接到下一个真正有用的用户节点。品牌要根据用户状态、使用教育、预计补货时间和购买行为，决定联系谁、为什么现在联系，以及这次触达之后团队要学到什么。'),
          P('TikTok Shop Customer CRM 为符合条件的店铺提供用户洞察、分群和触达能力。按钮本身不是留存。真正的能力，是判断哪一条消息在用户旅程里有存在的理由。'),
        ],
      },
      {
        id: '第二单', eyebrow: '运营纠正', h: '第二单会改变冷启动前面的决定', body: [
          P('如果团队说不清好客户为什么会回来，可能从一开始就选错了 Hero SKU，或者用了只能制造首单、不能建立长期产品关系的卖点。大折扣可以带来订单，却不一定建立使用习惯。达人内容可以带来很高的首单 GMV，却可能留下产品体验无法兑现的预期。'),
          UL([
            'Hero SKU 有没有自然补货、继续使用、升级或搭配购买的理由？',
            '达人 brief 有没有讲清产品怎样进入真实生活和日常 routine？',
            '商品页有没有说明数量、用法、使用节奏和适用场景？',
            '首单 offer 会不会让客户以后只等超低折扣？',
            '库存能不能同时承接首轮爆量和后续补货窗口？',
            '客服能不能在困惑变成退货或差评之前解决问题？',
          ]),
          P('第一单说明获客有没有发生。第二单才开始说明产品、承诺和客户是不是匹配。所以留存本来就是冷启动的一部分，不是增长完成以后才出现的新部门。'),
          INFO('tiktok-shop-cold-start-refill-loop-zh.svg', 'WEM 从冷启动到补货的运营闭环，连接 Hero SKU、首单、用户教育、补货时间和第二单学习', 'WEM 运营框架：用户问题和复购行为，要改变下一版商品页、达人 brief、offer 和库存决定。'),
        ],
      },
      {
        id: '用户状态', eyebrow: '用户状态', h: 'CRM 应该跟着用户走，不要跟着促销日历走', body: [
          P('弱 CRM 从品牌今天想推什么开始。强 CRM 从用户现在处在哪个阶段开始。加购未买的人、刚收到第一单的人和快到补货期的复购客户，不应该收到同一条消息。'),
          TABLE(['用户状态', '更合理的 CRM 任务', '团队要回答的问题'], [
            ['看过商品或刚关注', '解释 Hero SKU 和真实使用场景', '买之前还缺哪一层理解？'],
            ['加购或结账放弃', '解决一个最可能的阻力', '是价格、信任、用法还是物流预期？'],
            ['首单已送达', '帮助客户正确使用产品', '怎样让第一次体验更成功？'],
            ['预计补货窗口', '提醒窄而相关的分群', '产品真的快用完了，还是品牌只是想再卖一次？'],
            ['复购客户', '补货、bundle、升级或相关新品', '上一次购买怎样解释这一次推荐？'],
            ['沉默客户', '提供可信的回归理由', '品牌发生了什么值得重新关注的变化？'],
          ]),
          P('店铺实际能使用哪些分群、渠道和 campaign，要以 Seller Center 的实时状态为准。不要围绕一个账户还没有的功能设计整套 CRM 日历。'),
        ],
      },
      {
        id: '补货时间', eyebrow: '补货逻辑', h: '先确定补货时钟，再写消息', body: [
          P('补货时间不能从通用模板里抄。先看产品数量、建议用法、真实使用频率和用户 routine。30 份、每天使用的产品，与每周使用几次的精华、按家庭人数消耗的清洁浓缩液，补货逻辑完全不同。Starter kit 里不同组件的消耗速度也可能不一样。'),
          P('第一版时间只是 hypothesis。上线后要看真实第二单间隔、用户问题、退货原因和不同分群的反应。如果消息有人读却没人买，问题可能是时间不对，也可能是产品体验、价格或下一件商品不对。'),
          P('Customer CRM 可以帮助具有订阅经济的产品建立持续教育、补货提醒和复购节奏，但除非店铺和商品真的获得官方 subscription 功能，否则不要写成 TikTok Shop 原生订阅。更准确的说法是 replenishment、continuity 和 repeat purchase。'),
        ],
      },
      {
        id: '五个任务', eyebrow: 'CAMPAIGN 设计', h: '新品牌先搭五个清楚的 CRM 任务', body: [
          P('冷启动店铺不需要十五条自动化。它需要少量有明确任务、负责人和复盘日期的消息。'),
          UL([
            '首购教育：先讲清安装、用法、保存、routine 或最常见误区，不要把感谢消息立刻变成 upsell。',
            '使用支持：把重复出现的问题送回包装、商品页、达人内容和客服话术。',
            '补货提醒：只有产品时间和客户历史形成合理信号时，才联系相关分群。',
            '相关 bundle 或下一件商品：解决用户的下一个问题，不要用 CRM 清理无关库存。',
            'LIVE、上新或沉默客户唤回：讲清会演示什么，以及为什么现在值得回来。',
          ]),
          P('每个 campaign 最少写明目标人群、用户状态、唯一任务、商品或 offer 逻辑、负责人、停止条件和复盘日期。Automated 不等于永远不用复盘。'),
        ],
      },
      {
        id: '达人质量', eyebrow: '达人质量', h: '把达人获客和复购数据接起来', body: [
          P('达人团队如果只看到首单 GMV，就会错过客户质量。某个内容角度可能首单很多，但复购弱、退货高、使用疑问多，说明它可能过度承诺、吸引了错误场景，或者没有建立完整预期。另一个角度首单不一定最高，却带来更好的产品理解和第二单。'),
          P('在数据允许合理比较时，按照主要达人或 campaign 窗口查看用户问题、退货原因、复购间隔和产品适配。把重复的预期差送回下一版达人 brief，也要继续合作那些能带来长期适配用户的达人。'),
          P('CRM 不是独立的 retention 部门。它是同一套产品、内容、库存、履约和客服系统里的用户侧。'),
        ],
      },
      {
        id: '政策边界', eyebrow: '平台边界', h: '新政策是 CRM 的边界，不是文章的中心', body: [
          P('TikTok Shop 在 2026 年 7 月 13 日发布的美国 June Policy Pulse，补充了几条成交后的运营边界。CRM 和客服团队需要把它们写进自己的工作规则。'),
          UL([
            'Partial refund：符合条件的美国售后问题，TikTok Shop Customer Service 可能发起 partial refund request。店铺要确定谁查看、处理并记录背后的商品或履约原因。',
            '索评：必须保持中立、自愿和公平，不能用钱、礼物、折扣或退款换评论，不能建议星级、review gating、施压或要求删除差评。',
            'Buyer PII：姓名、电话、邮箱、地址、社交账号、支付信息和可以重新识别用户的订单数据都有使用边界，不能被当成自由使用的站外营销名单。',
          ]),
          P('这些规则不会削弱 CRM 的价值。它们只是把好留存和坏触达的区别讲清楚：好留存在合适时机提供下一步价值，不操纵评论，也不无节制使用用户数据。'),
        ],
      },
      {
        id: '衡量', eyebrow: '效果衡量', h: '衡量用户有没有前进，而不是消息发了多少', body: [
          P('Read rate 只能说明消息有没有获得注意，不能证明它改善了客户关系。不同任务必须用不同标准判断。'),
          TABLE(['衡量层级', '可以观察的信号', '要做的决定'], [
            ['消息质量', '送达、已读、退订、屏蔽', '这条消息值不值得占用用户注意力？'],
            ['交易反应', '商品访问、结账挽回、CRM 订单、转化', '消息有没有改变购买行为？'],
            ['复购', '第二单率、复购间隔、复购客单', '品牌有没有形成真实回购模式？'],
            ['产品体验', '问题、退款、退货、评论主题', '产品、商品页、包装或客服要改什么？'],
            ['获客质量', '数据允许时按达人或 campaign 窗口看复购', '哪种内容带来更适配的客户？'],
          ]),
          P('首购教育可能先减少困惑，再影响收入。补货活动应该按照真实产品节奏复盘。沉默客户消息也不能因为有人打开就算成功。'),
        ],
      },
      {
        id: '30天', eyebrow: '30 天方案', h: '新品牌第一个月怎么做', body: [
          UL([
            '第一周：选定 Hero SKU，画出用户路径，写下第一版补货假设和高频问题，并核对实际 CRM 权限。',
            '第二周：上线一条首购教育和一条购物车或结账挽回，明确 owner 和复盘日期。',
            '第三周：收集客服问题、评论主题、退款或退货原因，至少修改一处商品页和一版达人 brief。',
            '第四周：挑一个窄分群测试补货、相关 bundle 或 LIVE 提醒，一起看消息质量、第二单和用户反馈。',
          ]),
          P('第一个月不需要证明自动化最多。它需要证明新品牌能把客户带进来、帮助客户用好产品、识别合理的下一次时机，并把结果送回下一轮达人、商品和库存决策。'),
        ],
      },
      {
        id: 'wem作用', eyebrow: '为什么选择 WEM', h: 'WEM 在这里做什么', body: [
          P('WEM 会把 TikTok Shop 冷启动和 Customer CRM 留存接成一套。Hero SKU、达人匹配、寄样、达人 brief、商品页、LIVE、用户分群、首购教育、补货节奏和周复盘不能各做各的。'),
          P('达人内容建立第一次预期，商品页补足信息，履约和客服保护体验，Customer CRM 提供下一次相关触达，复购结果再改变下一轮达人、产品、库存和 offer 决定。'),
          P('冷启动不是第一单出现就结束。好的冷启动应该从第一单里得到足够学习，让第二单有机会被真正赚回来。'),
          CTA('和 WEM 一起搭建 TikTok Shop 冷启动与复购系统 →'),
        ],
      },
      {
        id: '来源', eyebrow: '来源说明', h: '官方来源与内容边界', body: [
          P('WEM 于 2026 年 7 月 19 日核对了 TikTok Shop Academy《Customer Outreach Playbook》、2026 年 7 月 13 日发布的《Policy Pulse (June 2026)》、2026 年 6 月 25 日的《Customer Review Requests Best Practices and FAQs》和《Seller Enforcement Policy》。'),
          P('CRM 权限和功能可能变化，执行前应以 Seller Center 为准。冷启动用户路径、补货时钟、达人到复购闭环、衡量结构和 30 天方案属于 WEM 运营框架，不是 TikTok 的业绩保证。WEM 不保证复购、CRM 权限、GMV、政策批准或合规结果。'),
          CTA('查看 Customer Outreach Playbook', 'https://seller-us.tiktok.com/university/essay?knowledge_id=505578792273677&lang=en'),
          CTA('查看 June 2026 Policy Pulse', 'https://seller-us.tiktok.com/university/essay?knowledge_id=6747273381791534'),
          CTA('查看官方索评指南', 'https://seller-us.tiktok.com/university/essay?course_type=1&from=search&knowledge_id=8794641096984333&role=1'),
          CTA('查看 Seller Enforcement Policy', 'https://seller-us.tiktok.com/university/essay?knowledge_id=2380042836166443'),
        ],
      },
    ],
    faqs: [
      { q: '新品牌冷启动阶段就需要做 Customer CRM 吗？', a: '需要设计，但不需要一开始铺很多 campaign。品牌应该在选 Hero SKU、offer、达人话术、库存和首购教育时，就想清楚第二单逻辑。第一阶段先做首购教育、购物车或结账挽回，再测试一个合理的复购场景。' },
      { q: '新品牌第一批 CRM 应该做什么？', a: '先做首购教育、购物车或结账挽回，再选择一个补货、相关 bundle 或 LIVE 的窄分群测试。每条 campaign 都需要用户状态、唯一任务、负责人、停止条件和复盘日期。' },
      { q: '怎么判断产品应该什么时候提醒补货？', a: '先看商品数量、真实使用频率和用户 routine，再用第二单间隔、用户问题、退货和分群反应验证。第一版补货时间只是测试假设，不能设置一次后永远不改。' },
      { q: 'Customer CRM 可以帮助 subscription 产品吗？', a: '它可以帮助具有订阅经济或补货逻辑的产品建立教育、补货提醒、bundle 和复购节奏，但不能在没有官方功能的情况下把它描述成 TikTok Shop 原生 subscription。' },
      { q: '可以用折扣换客户好评吗？', a: '不可以自己创建这种安排。当前官方指南要求评论邀请保持中立、自愿和公平，不能用钱、礼物、折扣或退款换评论，也不能只找满意客户或要求删除差评。' },
      { q: '可以把 TikTok Shop 买家邮箱用于站外营销吗？', a: '不能把履约获得的 Buyer PII 当成自由使用的营销名单。品牌应使用平台支持的客户工具，并在具体执行前核对 Seller Enforcement Policy 和最新 Customer Service 要求。' },
    ],
    related: [
      { label: 'TikTok Shop CRM 怎么做：把首单变成复购系统', href: 'tiktok-shop-customer-retention-crm-playbook.html?lang=zh' },
      { label: 'TikTok Shop 达人 Matchmaking 怎么做', href: 'tiktok-shop-creator-matchmaking-playbook.html?lang=zh' },
      { label: 'TikTok Shop LIVE 怎么做：可复用增长闭环', href: 'tiktok-shop-live-strategy-brands.html?lang=zh' },
    ],
  },
};

const App = () => {
  const getLang = () => new URLSearchParams(window.location.search).get('lang') === 'zh' ? 'zh' : 'en';
  const [lang, setLang] = React.useState(getLang());
  React.useEffect(() => { const sync = () => setLang(getLang()); window.addEventListener('popstate', sync); return () => window.removeEventListener('popstate', sync); }, []);
  React.useEffect(() => { document.getElementById('seo-static-fallback')?.remove(); document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en'; }, [lang]);
  return <><CursorStars /><NavBar lang={lang} onLang={setLang} basePath="../" /><BlogPost {...POSTS[lang]} labels={LABELS[lang]} /><CtaFooter lang={lang} /><Footer lang={lang} basePath="../" /></>;
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
