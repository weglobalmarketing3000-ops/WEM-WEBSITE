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
      title: 'TikTok Shop CRM: Turn the First Order Into a Repeat-Purchase System',
      cat: 'TIKTOK SHOP U.S. · CUSTOMER RETENTION',
      author: 'WE Marketing Team', date: 'Jul 18, 2026', read: '12 min read',
      heroImage: 'hero-tiktok-shop-customer-retention-crm-playbook.png',
      heroAlt: 'Editorial lifecycle illustration connecting creator discovery, a first TikTok Shop order, customer outreach, LIVE reminders, and repeat purchase',
    },
    sections: [
      {
        id: 'direct-answer',
        h: 'What is TikTok Shop CRM, and what should a brand do first?',
        body: [
          CALLOUT('TikTok Shop CRM is the customer segmentation and outreach system in Seller Center for eligible sellers. It supports automated and one-time campaigns across available channels, helping brands recover high-intent shoppers, educate first-time buyers, promote relevant LIVEs or launches, and bring customers back for a logical next purchase.'),
          P('For most U.S. brands, the practical starting point is three focused jobs: recover abandoned carts or incomplete checkouts, help first-time buyers use the product successfully, and invite the right segment to a relevant LIVE or launch. Add replenishment and lapsed-customer campaigns only after the first three have clear owners, stop conditions, and review dates.'),
          UL([
            'Segment by customer state, not by one universal promotional calendar.',
            'Give each message one job and one reason to reach the customer now.',
            'Connect CRM results to product pages, creator briefs, offers, and LIVEs.',
            'Measure second-order behavior and customer quality, not only sends or reads.',
            'Verify current eligibility, quotas, and feature access in Seller Center before launch.',
          ]),
          P('This answer is based on TikTok Shop Academy’s Customer Outreach Playbook, updated June 15, 2026 and rechecked by WEM on July 18, 2026. The five-part operating model in this guide is WEM’s framework, not a TikTok guarantee.'),
        ],
      },
      {
        id: 'first-order-problem',
        h: 'The first order is not the finish line',
        body: [
          P('TikTok Shop is exceptionally good at creating first encounters. A creator demonstrates a product, a shopper enters a LIVE, an offer makes the decision feel timely, and an unfamiliar brand earns an order. Most operating teams celebrate that conversion and immediately return to the top of the funnel.'),
          P('That is expensive behavior. If every sale requires a fresh creator post, another paid impression, or another peak LIVE moment, the brand keeps renting attention it has already earned. The first order should create more than revenue. It should create a relationship signal: what the customer bought, what problem they were trying to solve, what might bring them back, and when a second conversation would be useful.'),
          P('TikTok Shop Academy’s Customer Outreach Playbook shows that Seller Center now supports customer segments, automated and one-time outreach, chat, customer email for one-time plans, LIVE reminders, abandoned-cart recovery, repeat-purchase messages, and performance reporting. The operating opportunity is bigger than “send more messages.” Brands can build a retention system inside the commerce journey.'),
        ],
      },
      {
        id: 'lifecycle-not-broadcast',
        h: 'CRM should follow the customer lifecycle, not the brand calendar',
        body: [
          P('Weak CRM begins with the brand’s need to announce something. Strong CRM begins with the customer’s current state. A new follower needs a reason to care. An abandoned-cart shopper needs one unresolved objection removed. A first-time buyer needs confidence that the purchase was worthwhile. A repeat buyer may need replenishment, a companion product, or early access to a launch.'),
          P('The distinction matters because the same promotion can feel useful to one segment and intrusive to another. Sending every offer to every reachable person is not a retention strategy. It is a way to train customers to ignore the brand.'),
          TABLE(
            ['Customer state', 'Useful next message', 'Operating question'],
            [
              ['New follower', 'Hero product education or first-purchase offer', 'What should this person understand before buying?'],
              ['Cart or checkout abandoned', 'Reminder, proof, product link, or time-bounded offer', 'What friction most likely stopped the order?'],
              ['First-time buyer', 'Thank-you, usage guidance, or complementary product', 'How do we improve the first product experience?'],
              ['Repeat customer', 'Replenishment, bundle, upgrade, or early access', 'What is the next logical value, not merely the next SKU?'],
              ['Lapsed customer', 'Relevant return reason tied to prior behavior', 'What has changed enough to deserve attention again?'],
              ['Likely LIVE viewer', 'A clear LIVE topic, time, and hero product', 'Why is this LIVE worth attending?'],
            ]
          ),
        ],
      },
      {
        id: 'retention-loop',
        h: 'The WEM customer-retention operating loop',
        body: [
          P('WEM recommends treating TikTok Shop retention as a five-stage operating loop. Creator content and LIVEs create discovery. The product page and offer convert demand. Fulfillment and product experience determine whether trust survives. CRM provides the next relevant touchpoint. Weekly review sends what customers did and asked back into creator briefs, product pages, offers, and the next LIVE.'),
          INFO('tiktok-shop-crm-retention-loop.svg', 'WEM customer retention loop from creator discovery through first order, customer signals, relevant outreach, repeat purchase, and weekly learning', 'WEM operating framework: every customer signal should improve the next message and the next acquisition cycle.'),
          P('The loop is deliberately wider than messaging. CRM cannot rescue a weak product, late fulfillment, confusing instructions, or a misleading creator claim. It can, however, reveal those failures earlier. If first-time buyers repeatedly ask the same usage question, that is product-page and creator-brief feedback. If a segment opens messages but does not buy, the offer or product match may be wrong. If customers buy once and disappear, the product experience deserves investigation before the team increases message volume.'),
        ],
      },
      {
        id: 'creator-community',
        h: 'Connect creator acquisition to customer retention',
        body: [
          P('Creator teams and CRM teams are often managed as separate functions. That separation wastes some of TikTok Shop’s best learning. Creators tell the brand which demonstrations create attention. Customers reveal which promises survive after checkout. The two sides should share a weekly feedback loop.'),
          P('When one creator angle produces many first orders but unusually weak repeat behavior, the content may be overpromising, attracting the wrong use case, or setting incomplete expectations. When another angle produces fewer orders but stronger repeat purchase, higher average spend, or more complementary-product interest, it may be bringing in a better-fit customer. Last-click GMV alone will not show that difference.'),
          UL([
            'Tag creator-led acquisition windows so the team can compare the quality of customers, not only the quantity of orders.',
            'Bring repeated customer questions into the next creator brief and LIVE product demonstration.',
            'Use product-page language that answers the objections appearing in chat and post-purchase outreach.',
            'Invite strong creators back when their audience shows durable product fit, not only when one video spikes.',
            'Coordinate CRM reminders with creator launches and LIVEs so customers receive one coherent story.',
          ]),
        ],
      },
      {
        id: 'campaign-architecture',
        h: 'Build a small campaign architecture before adding volume',
        body: [
          P('A brand does not need fifteen campaigns on day one. It needs a few messages with clear jobs. Begin with the moments closest to revenue and customer experience: abandoned cart or checkout, first-purchase thank-you and education, LIVE reminders, replenishment or complementary products, and re-engagement for customers whose behavior suggests a real reason to return.'),
          P('Automated plans are useful when the trigger is stable and the message remains relevant over time. One-time plans are better for launches, seasonal offers, specific LIVEs, or a carefully selected customer group. The Academy source also states that customer email is available only for one-time plans. Advanced hosted email and AI-powered chat outreach are limited to selected or trial sellers, so teams should design a system that works without assuming access to experimental features.'),
          P('Every campaign needs an owner, an audience definition, a single purpose, a product or offer rationale, a stop condition, and a review date. “Always on” should never mean “never reviewed.”'),
        ],
      },
      {
        id: 'official-guardrails',
        h: 'Know the access, quota, and frequency guardrails',
        body: [
          P('TikTok Shop Academy ties CRM access to Shop Performance Score. The current U.S. playbook says sellers with SPS at or above 3.5 receive access; permissions are recalculated daily. It describes a frozen state for 3 to below 3.5 and revoked access below 3 or when a seller has no transaction value in the previous 30 days. Sellers should verify the live status shown in Seller Center because platform rules can change.'),
          P('The Academy page also says weekly one-time campaign quota depends on 30-day GMV and may receive bonuses based on read and unsubscribe performance. Automated campaigns are described as having no quota limit when SPS is at least 3.5, while campaigns created through third-party tools still count toward quota.'),
          P('Frequency controls are not an excuse to message at the maximum. The official page describes channel-specific limits, including a shop reaching the same user by inbox or email up to once a week and separate Group Chat limits. Operationally, the better standard is relevance: send only when the message changes the customer’s decision or product experience.'),
        ],
      },
      {
        id: 'measurement',
        h: 'Measure movement, not message activity',
        body: [
          P('Open rate and read rate tell the team whether a message earned attention. They do not prove the campaign created value. A retention review should connect communication metrics to customer movement: product-page visits, recovered checkout, second order, time to repurchase, complementary-product adoption, repeat LIVE attendance, and unsubscribe or block behavior.'),
          TABLE(
            ['Layer', 'Primary metrics', 'What the team should decide'],
            [
              ['Reach quality', 'Delivered, read, unsubscribe, blocked', 'Is the audience-message match healthy?'],
              ['Commerce response', 'Clicks, orders, CRM GMV, conversion', 'Did the message change purchase behavior?'],
              ['Retention', 'Second-order rate, time to repurchase, repeat AOV', 'Are customers building a stronger relationship?'],
              ['Learning', 'Repeated questions, objections, returns, segment differences', 'What changes in the product page, creator brief, offer, or LIVE?'],
            ]
          ),
          P('Review by segment and message purpose. An abandoned-cart campaign should not be judged by the same standard as a post-purchase education message. One tries to recover near-term revenue; the other may reduce confusion, returns, or churn before it creates another order.'),
        ],
      },
      {
        id: 'thirty-day-plan',
        h: 'A practical 30-day launch plan',
        body: [
          UL([
            'Week 1: Map the lifecycle. Identify first-order sources, existing customer segments, repeat-purchase windows, common questions, and current SPS access.',
            'Week 2: Launch three jobs. Start one abandoned-cart or checkout recovery message, one post-purchase education message, and one LIVE or launch reminder.',
            'Week 3: Connect the feedback. Update one product-page section and one creator brief using questions or objections from customers.',
            'Week 4: Review quality. Compare reads, clicks, orders, second-order signals, unsubscribes, and segment differences; pause messages that do not earn their place.',
          ]),
          P('The goal of the first month is not maximum automation. It is to prove that the brand can choose a useful moment, reach the right segment, send a message with one clear job, and learn from the response.'),
        ],
      },
      {
        id: 'wem-role',
        h: 'Where WEM fits',
        body: [
          P('WEM helps U.S. TikTok Shop brands connect customer retention to the rest of the operating system: creator matching, affiliate setup, sample seeding, localized product pages, UGC and content testing, LIVE planning, and weekly performance review.'),
          P('The practical advantage is continuity. Creator questions shape product education. Customer behavior changes the next brief. CRM segments make LIVE reminders more relevant. Repeat-purchase patterns influence bundles and product-page merchandising. The weekly review decides which creator angles and customer messages deserve another cycle.'),
          P('Retention is not a separate department that begins after growth. It is how a brand learns whether the growth it acquired was worth keeping.'),
          CTA('Build a TikTok Shop retention system with WEM →'),
        ],
      },
      {
        id: 'sources',
        h: 'Sources and methodology',
        body: [
          P('Primary source: TikTok Shop Academy, “Customer Outreach Playbook,” dated June 15, 2026, applicable to the United States (knowledge_id=505578792273677). The page was reviewed directly on July 18, 2026.'),
          P('Official thresholds, feature availability, quotas, and frequency controls in this article are attributed to that Academy page. The lifecycle model, measurement structure, 30-day plan, and creator-to-retention loop are WEM operating frameworks. Sellers should verify current access and rules inside Seller Center before execution.'),
          CTA('Read the official TikTok Shop Academy Customer Outreach Playbook', 'https://seller-us.tiktok.com/university/essay?knowledge_id=505578792273677&source_type=ai_university_home'),
        ],
      },
    ],
    faqs: [
      { q: 'What is TikTok Shop CRM?', a: 'TikTok Shop CRM is the customer-management and outreach capability in Seller Center. It helps eligible sellers understand customer segments and run automated or one-time campaigns through supported channels such as chat, email for one-time plans, and selected Group Chat use cases.' },
      { q: 'Who can access TikTok Shop CRM in the United States?', a: 'The Academy playbook reviewed for this article states that access is granted when Shop Performance Score is at least 3.5, with permissions recalculated daily. Sellers should verify their current access and any changed requirements in Seller Center.' },
      { q: 'What TikTok Shop CRM campaigns should a brand launch first?', a: 'Start with a small set tied to clear customer states: abandoned cart or checkout recovery, first-purchase education, LIVE or launch reminders, replenishment or complementary products, and relevant re-engagement for lapsed customers.' },
      { q: 'Does TikTok Shop CRM include email marketing?', a: 'The Academy page says customer email is available for one-time plans. Advanced hosted email is described as an invite-only testing feature for selected sellers, so brands should not assume the advanced feature is available to every shop.' },
      { q: 'Is AI-powered TikTok Shop customer outreach available to every seller?', a: 'No. The Academy source describes AI-powered chat outreach as a trial feature. Eligible trial sellers can review and apply recommended plans, but access is not universal.' },
      { q: 'How should brands measure TikTok Shop CRM performance?', a: 'Measure delivery and read quality, clicks and CRM-attributed orders, second-order rate, time to repurchase, repeat average order value, unsubscribes, and the customer questions that should change product pages, creator briefs, offers, or LIVEs.' },
      { q: 'How does CRM support TikTok Shop creator marketing?', a: 'CRM reveals whether creator-acquired customers remain engaged, buy again, ask recurring questions, or respond to later LIVEs and launches. Those signals help brands improve creator matching, briefs, product education, and repeat collaborations.' },
    ],
    related: [
      { label: 'TikTok Shop Follower Group Chat: A Retention Layer for Brands', href: 'tiktok-shop-follower-group-chat-retention' },
      { label: 'TikTok Shop Creator Matchmaking Playbook', href: 'tiktok-shop-creator-matchmaking-playbook' },
      { label: 'TikTok Shop LIVE Strategy for Brands', href: 'tiktok-shop-live-strategy-brands' },
    ],
  },
  zh: {
    meta: {
      title: 'TikTok Shop CRM 怎么做：把首单变成复购系统',
      cat: 'TIKTOK SHOP 美国 · 用户留存', author: 'WE Marketing Team', date: '2026 年 7 月 18 日', read: '12 分钟阅读',
      heroImage: 'hero-tiktok-shop-customer-retention-crm-playbook.png',
      heroAlt: '从达人种草、TikTok Shop 首单、客户触达、LIVE 提醒到复购的用户生命周期示意图',
    },
    sections: [
      {
        id: '直接答案', h: 'TikTok Shop CRM 是什么，品牌第一步该做什么？', body: [
          CALLOUT('TikTok Shop CRM 是 Seller Center 面向符合条件卖家的用户分群与触达系统。品牌可根据实际开放权限，通过 automated campaign 和 one-time campaign 挽回高意向用户、教育首购客户、提醒相关 LIVE 或上新，并推动下一次合理购买。'),
          P('面向美国市场的品牌，第一阶段先做三个任务：挽回购物车或结账放弃、帮助首购客户正确使用产品、邀请合适人群参加相关 LIVE 或新品活动。等这三类消息都有负责人、停止条件和复盘日期后，再增加补货与沉默客户唤回。'),
          UL(['按用户状态分群，不按品牌自己的大促日历统一群发。','每条消息只完成一个任务，并解释为什么现在值得联系。','把 CRM 结果回流到英文商品页、达人 brief、offer 和 LIVE。','衡量第二单和客户质量，不只看发送量与已读。','上线前在 Seller Center 核对最新资格、配额和功能权限。']),
          P('以上判断基于 TikTok Shop Academy 的 Customer Outreach Playbook。该页面更新于 2026 年 6 月 15 日，WEM 于 2026 年 7 月 18 日再次核对。本文的五段运营闭环属于 WEM 方法，不代表 TikTok 对业绩作出保证。'),
        ]
      },
      {
        id: '首单不是终点', h: '首单不是终点，而是关系刚刚开始', body: [
          P('中国品牌、工厂和制造商进入美国 TikTok Shop，常常有几项真实优势：打样快、成本控制能力强、供应稳定、包装调整灵活、小批量测试门槛低，看到市场反馈后也能迅速迭代。这些能力让团队更容易抓住一个突然出现的内容机会。'),
          P('但供应链速度解决的是“能不能及时把货做出来”，不自动解决“美国消费者为什么第二次还要回来”。很多团队把达人视频、LIVE 和折扣当成首单机器：流量来了就出单，流量停了就再找一批达人。每一笔销售都重新购买注意力，已经成交的客户却没有进入下一段关系。'),
          P('TikTok Shop Academy 的 Customer Outreach Playbook 给出了另一条路径。Seller Center 已经能按用户状态做细分，通过 automated campaign 和 one-time campaign 触达购物车放弃者、新客、复购客、沉默客户、粉丝和潜在 LIVE 观众。真正值得写的不是“平台多了哪些按钮”，而是品牌能不能把首单变成一套可持续的复购系统。'),
        ]
      },
      {
        id: '美国市场差异', h: '美国市场的差距，往往发生在成交之后', body: [
          P('跨境团队很容易高估产品和价格，低估消费者关系。美国用户不会因为工厂反应快就天然信任一个新品牌。他们更关心商品页是否说人话、达人展示是否真实、物流是否可预期、使用方法是否清楚、售后是否有人回应，以及品牌下一次联系自己时有没有充分理由。'),
          P('因此 CRM 不能只是大促群发。新粉丝、加购未买、新客、复购客和沉默客户处在完全不同的决策阶段。把同一张优惠券发给所有人，短期看起来省事，长期却会让用户忽略品牌。'),
          TABLE(['用户状态','更合理的触达','团队要回答的问题'],[
            ['新粉丝','Hero SKU 教育或首购理由','用户买之前还需要相信什么？'],
            ['加购或结账放弃','提醒、信任证据、商品链接或限时 offer','是哪一个阻力让订单停下来？'],
            ['首购客户','感谢、使用教育、搭配商品','怎样让第一次产品体验更成功？'],
            ['复购客户','补货、bundle、升级款或新品优先权','下一步价值是什么，而不是下一件货是什么？'],
            ['沉默客户','与历史行为相关的回归理由','品牌发生了什么值得重新关注的变化？'],
            ['潜在 LIVE 用户','明确的主题、时间和主推品','为什么这场直播值得来？'],
          ]),
        ]
      },
      {
        id: '留存闭环', h: 'WEM 用户留存闭环：把达人、首单和复购接起来', body: [
          P('WEM 建议把留存看成五段闭环：达人内容和 LIVE 负责发现；商品页和 offer 负责首单；履约和产品体验决定信任能否保住；CRM 在合适时间提供下一次有用触达；周复盘再把用户问题和行为送回达人 brief、商品页、组合策略与下一场 LIVE。'),
          INFO('tiktok-shop-crm-retention-loop-zh.svg','WEM TikTok Shop 用户留存闭环：达人发现、首单、用户信号、精准触达、复购和周复盘','WEM 运营框架：每一次用户反馈，都应该改变下一条消息和下一轮获客。'),
          P('这个闭环故意不把 CRM 单独拿出来。CRM 救不了差产品、迟到的包裹、夸大的达人话术和看不懂的使用说明，但它能更早暴露这些问题。新客反复问同一个问题，说明商品页和达人 brief 没讲清；消息有人读却没人买，可能是商品与分群不匹配；首单很多却没有复购，团队应该先检查产品体验，而不是提高发送量。'),
        ]
      },
      {
        id: '达人和crm', h: '达人团队和 CRM 团队不能各做各的', body: [
          P('达人负责把陌生人带进来，CRM 负责观察这些人是否留下。两边如果不共享数据，品牌只能看到哪条视频出了单，却看不到哪种内容带来的客户更适合长期经营。'),
          P('某个内容角度可能首单很多，但复购弱、退货高、使用疑问多。这可能意味着内容承诺过度、吸引了错误场景，或没有建立完整预期。另一个角度首单不一定最高，却带来更快复购、更高客单和更强的搭配购买，它可能才是值得继续找同类达人的方向。'),
          UL(['按达人活动窗口观察客户质量，而不只看订单数量。','把用户重复问题写进下一版达人 brief 和 LIVE demo。','把聊天和售后里的异议补进英文商品页。','优先复合作能带来长期适配用户的达人，而不是只追一次爆量。','让 CRM、达人发布和 LIVE 共用一套节奏，避免同一用户接收互相冲突的信息。']),
        ]
      },
      {
        id: '活动架构', h: '先搭一个小而清楚的活动架构', body: [
          P('第一阶段不需要十几条自动化。先抓离收入和体验最近的五个任务：挽回购物车或结账放弃、首购感谢与使用教育、LIVE 或新品提醒、补货与搭配购买、对沉默客户进行有理由的唤回。'),
          P('稳定触发、长期有效的内容适合 automated plan；新品、大促、特定 LIVE 和精选人群适合 one-time plan。Academy 页面还明确写到，customer email 只用于 one-time plan。Advanced Email Marketing 属于受邀测试，AI-powered chat outreach 也只对试点卖家开放，团队不能把尚未获得的功能当成基础能力。'),
          P('每个 plan 都要写清 owner、目标人群、唯一任务、商品或 offer 逻辑、停止条件和复盘日期。Always-on 不是永远不复盘。'),
        ]
      },
      {
        id: '官方边界', h: '资格、配额和频控必须看清', body: [
          P('当前美国 Academy 页面把 CRM 权限与 Shop Performance Score 绑定：SPS 至少 3.5 才获得权限，并按日重新计算。页面还描述了 SPS 处于 3 到 3.5 以下时的冻结状态，以及 SPS 低于 3 或过去 30 天没有交易额时的暂停状态。执行时必须以 Seller Center 实际显示为准。'),
          P('One-time campaign 的周配额与过去 30 天 GMV 有关，还可能受到 read rate 和 unsubscribe rate 的奖励影响。SPS 至少 3.5 时，官方页面把 automated campaign 描述为不受配额限制；第三方工具创建的 campaign 仍会占用 quota。'),
          P('频控是上限，不是发送目标。官方对 inbox、email、Group Chat 和大促阶段分别设有触达限制。真正的运营标准应该更严格：这条消息是否能改变用户的决定或改善产品体验？如果不能，就不值得占用一次注意力。'),
        ]
      },
      {
        id: '本地化', h: '本地化不是翻译，而是重写关系理由', body: [
          P('中国团队常见的问题，是把国内电商话术直接翻成英文：强调工厂实力、最低价格、限时催促，却没有解释产品怎样进入美国用户的生活。CRM 会把这种差距放大，因为用户已经买过或表达过兴趣，他们更期待品牌理解自己的场景。'),
          P('美国市场的消息应该围绕具体任务：怎么正确使用、什么时候补货、哪一个搭配能解决下一步问题、这场 LIVE 会演示什么、这次新品和上次购买有什么关系。英文不是越热情越好，而是越相关越好。'),
          P('供应链优势应该出现在后台决策里：快速做出更合理的小套装、根据用户问题改包装说明、用小批量验证补货周期、让稳定生产支持复购。不要把“我们是工厂”当成消费者必须购买的理由。'),
        ]
      },
      {
        id: '衡量', h: '衡量用户有没有前进，而不是消息发了多少', body: [
          P('Read rate 只能说明消息有没有获得注意，不能证明它创造了价值。留存复盘要把沟通指标接到用户移动：商品页访问、结账挽回、第二单、复购间隔、搭配商品采用、重复进入 LIVE，以及 unsubscribe 或 block。'),
          TABLE(['层级','关键指标','要做的决定'],[
            ['触达质量','送达、已读、退订、屏蔽','分群和消息是否匹配？'],
            ['交易反应','点击、订单、CRM GMV、转化','消息有没有改变购买行为？'],
            ['留存','第二单率、复购间隔、复购客单','关系是否在变强？'],
            ['运营学习','重复问题、异议、退货、分群差异','商品页、达人 brief、offer 或 LIVE 改什么？'],
          ]),
          P('不同任务不能用同一标准。购物车挽回追求近期转化；首购教育可能先降低误用、退货和流失，再影响下一单。'),
        ]
      },
      {
        id: '30天', h: '一个可执行的 30 天启动方案', body: [
          UL(['第一周：画出用户生命周期，确认首单来源、现有分群、复购周期、常见问题和 SPS 权限。','第二周：只上线三个任务，包括一次购物车或结账挽回、一次首购教育、一次 LIVE 或新品提醒。','第三周：把用户问题回流，至少改一处英文商品页和一版达人 brief。','第四周：一起看已读、点击、订单、第二单、退订和分群差异；没有价值的消息暂停。']),
          P('第一个月的目标不是自动化最多，而是证明团队能选对时机、找对人、用一条消息完成一个任务，并从结果中学到下一轮怎么改。'),
        ]
      },
      {
        id: 'wem作用', h: 'WEM 在这套系统里的作用', body: [
          P('WEM 帮助面向美国市场的品牌，把 CRM 留存接到达人匹配、affiliate setup、寄样、英文商品页、本地 UGC 测试、LIVE 规划和周复盘。'),
          P('真正的价值是连续性：达人问题改变产品教育，用户行为改变下一版 brief，CRM 分群让 LIVE 提醒更相关，复购数据影响 bundle 和商品页陈列，周复盘决定哪种达人角度和用户消息值得进入下一轮。'),
          P('留存不是增长完成之后才开始的部门。它是品牌判断这次增长值不值得留下来的方法。'),
          CTA('和 WEM 一起搭建 TikTok Shop 留存系统 →'),
        ]
      },
      {
        id: '来源', h: '来源与边界', body: [
          P('主要来源：TikTok Shop Academy《Customer Outreach Playbook》，页面日期为 2026 年 6 月 15 日，适用于美国市场，knowledge_id=505578792273677。WEM 于 2026 年 7 月 18 日直接核对原文。'),
          P('文中的权限、功能范围、配额和频控均归因于该 Academy 页面；用户生命周期、衡量结构、30 天方案和达人到留存闭环属于 WEM 运营框架。平台规则可能变化，执行前应以 Seller Center 实际权限和官方最新页面为准。'),
          CTA('查看 TikTok Shop Academy 官方 Customer Outreach Playbook', 'https://seller-us.tiktok.com/university/essay?knowledge_id=505578792273677&source_type=ai_university_home'),
        ]
      },
    ],
    faqs: [
      { q: 'TikTok Shop CRM 是什么？', a: '它是 Seller Center 里的用户管理和触达能力，帮助符合条件的卖家查看用户分群，并通过 chat、one-time email 及部分 Group Chat 场景运行自动或单次活动。' },
      { q: '美国 TikTok Shop 卖家达到什么条件可以使用 CRM？', a: '本次核对的 Academy 页面写明 SPS 至少达到 3.5 才获得权限，并按日重新计算。实际执行应以 Seller Center 最新显示为准。' },
      { q: '品牌最先应该上线哪些 CRM 活动？', a: '建议先做购物车或结账挽回、首购使用教育、LIVE 或新品提醒、补货或搭配购买，以及针对沉默客户的相关唤回，不要一开始铺太多 campaign。' },
      { q: 'TikTok Shop CRM 可以发邮件吗？', a: 'Academy 页面说明 customer email 可用于 one-time plan；Advanced Email Marketing 属于受邀测试功能，并非所有店铺都能使用。' },
      { q: 'AI-powered outreach 所有卖家都能用吗？', a: '不能。官方页面把 AI-powered chat outreach 描述为试点功能，是否开放要看店铺实际入口。' },
      { q: 'TikTok Shop CRM 应该看哪些指标？', a: '除了送达和已读，还要看点击、CRM 订单、第二单率、复购间隔、复购客单、退订，以及用户问题是否推动商品页、达人 brief、offer 和 LIVE 改进。' },
      { q: 'CRM 和 TikTok Shop 达人营销有什么关系？', a: 'CRM 能帮助品牌判断达人带来的用户是否继续互动、复购、进入下一场 LIVE，并把这些信号用于改进达人匹配、内容角度、商品教育和复合作。' },
    ],
    related: [
      { label: 'TikTok Shop Group Chat：品牌留存和达人私域的新入口', href: 'tiktok-shop-follower-group-chat-retention.html?lang=zh' },
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
