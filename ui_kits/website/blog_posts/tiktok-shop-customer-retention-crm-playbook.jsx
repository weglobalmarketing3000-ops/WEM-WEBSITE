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
        h: 'Most brands do not have a messaging problem. They have a next-reason problem.',
        body: [
          CALLOUT('A first order does not create retention on its own. Before sending anything, decide what would give this customer a real reason to take the next step: finish checkout, use the product correctly, join a relevant LIVE, replenish, or discover a product that genuinely fits what they already bought.'),
          P('TikTok Shop CRM is the segmentation and outreach capability inside Seller Center that lets eligible sellers act on those moments through automated and one-time campaigns. The tool matters, but the operating judgment matters more. A campaign should exist because the customer has reached a meaningful point in the journey, not because the brand has another promotion to announce.'),
          P('For most U.S. brands, start with three jobs: recover abandoned carts or incomplete checkouts, help first-time buyers get value from the product, and invite the right segment to a LIVE or launch that connects to their behavior. Add replenishment and lapsed-customer campaigns only after the first three have clear owners, stop conditions, and review dates.'),
          UL([
            'Segment by customer state, not by one universal promotional calendar.',
            'Give each message one job and one reason to reach the customer now.',
            'Connect CRM results to product pages, creator briefs, offers, and LIVEs.',
            'Measure second-order behavior and customer quality, not only sends or reads.',
            'Verify current eligibility, quotas, and feature access in Seller Center before launch.',
          ]),
          P('WEM built this operating approach from TikTok Shop Academy’s current Customer Outreach Playbook and from the way creator acquisition, customer experience, and repeat purchase affect one another. The platform rules cited below were rechecked on July 18, 2026. The operating judgment is WEM’s, and it is not a sales guarantee.'),
        ],
      },
      {
        id: 'first-order-problem',
        h: 'The first order is not the finish line',
        body: [
          P('TikTok Shop is exceptionally good at creating first encounters. A creator demonstrates a product, a shopper enters a LIVE, an offer makes the decision feel timely, and an unfamiliar brand earns an order. Most operating teams celebrate that conversion and immediately return to the top of the funnel.'),
          P('That is expensive behavior. If every sale requires a fresh creator post, another paid impression, or another peak LIVE moment, the brand keeps renting attention it has already earned. The first order should create more than revenue. It should create a relationship signal: what the customer bought, what problem they were trying to solve, what might bring them back, and when a second conversation would be useful.'),
          P('Seller Center now gives eligible shops enough segmentation and outreach capability to act on this information. But having more ways to contact customers is not the opportunity. The opportunity is to stop treating every first order as an isolated win and start using what happens after checkout to improve the next message, the next creator brief, and the next product decision.'),
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
          P('Use automation only when both the trigger and the message stay useful without someone forcing the timing. A cart reminder or post-purchase instruction may qualify. A launch, seasonal offer, or specific LIVE usually needs a one-time plan and a deliberately chosen audience. Customer email is currently limited to one-time plans, while advanced hosted email and AI-powered chat outreach are restricted to selected or trial sellers. Build the retention logic around customer moments you can manage today, not features your shop may never receive.'),
          P('Every campaign needs an owner, an audience definition, a single purpose, a product or offer rationale, a stop condition, and a review date. “Always on” should never mean “never reviewed.”'),
        ],
      },
      {
        id: 'official-guardrails',
        h: 'CRM access is earned operating capacity, not just another marketing button',
        body: [
          P('The 3.5 Shop Performance Score threshold is not merely a permission rule. It is TikTok signaling that customer outreach should sit on top of a healthy shop. If service, fulfillment, or transaction activity weakens, a brand can lose the ability to create or edit plans. CRM therefore cannot live on a separate marketing calendar. Shop health is part of the retention system.'),
          TABLE(
            ['Live shop status', 'What happens to CRM', 'What the team should do'],
            [
              ['SPS 3.5 or higher', 'Access is available and recalculated daily', 'Build a small set of campaigns and review customer response.'],
              ['SPS 3 to below 3.5', 'Existing plans are frozen', 'Fix the customer experience and shop-health issue before expanding outreach.'],
              ['SPS below 3, or no transaction value in the prior 30 days', 'Access is revoked', 'Restore the operating foundation first. CRM is not the recovery shortcut.'],
            ]
          ),
          P('Quota should force prioritization, not volume chasing. Weekly one-time campaign capacity is tied to 30-day GMV and can be affected by read and unsubscribe performance. Use those limited sends for moments that truly need a date, a selected audience, or a fresh decision. Automated campaigns may be quota-free when SPS is at least 3.5, but that does not make unlimited messaging good practice. Third-party campaigns still count toward quota.'),
          P('The same principle applies to frequency limits. A platform ceiling tells you what is allowed, not what has earned the customer’s attention. WEM’s standard is stricter: if the message does not remove a real obstacle, improve product use, or create a relevant next reason to buy, do not send it. Verify the live thresholds and permissions in Seller Center before execution because platform rules can change.'),
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
          CTA('Read the official TikTok Shop Academy source', 'https://seller-us.tiktok.com/university/essay?knowledge_id=505578792273677&source_type=ai_university_home'),
        ],
      },
    ],
    faqs: [
      { q: 'What is TikTok Shop CRM?', a: 'TikTok Shop CRM is the segmentation and outreach capability inside Seller Center for eligible sellers. Its useful role is to help a brand act on a real customer moment, such as an abandoned checkout, a first-purchase education need, a relevant LIVE, or a logical next purchase.' },
      { q: 'Who can access TikTok Shop CRM in the United States?', a: 'The current U.S. Academy playbook sets access at a Shop Performance Score of at least 3.5 and recalculates permission daily. Treat that threshold as a reminder that retention depends on shop health, then confirm the live status in Seller Center before planning campaigns.' },
      { q: 'What TikTok Shop CRM campaigns should a brand launch first?', a: 'Start with three clear jobs: recover an abandoned cart or checkout, help a first-time buyer use the product successfully, and invite the right segment to a relevant LIVE or launch. Add more only after these campaigns have owners, stop conditions, and review dates.' },
      { q: 'Does TikTok Shop CRM include email marketing?', a: 'Customer email is currently available for one-time plans. Advanced hosted email is an invite-only test, so build a retention system that works with the channels your shop actually has instead of assuming every email feature will be available.' },
      { q: 'Is AI-powered TikTok Shop customer outreach available to every seller?', a: 'No. AI-powered chat outreach is currently a trial feature. If it appears in your shop, review the recommended plan as carefully as a human-created campaign; the tool does not replace audience, timing, or offer judgment.' },
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
        id: '直接答案', h: '很多品牌缺的不是发消息的工具，而是用户下一次回来的理由', body: [
          CALLOUT('首单不会自动变成复购。发任何消息之前，团队先要回答：这个用户为什么值得在此刻继续往前走？是完成结账、正确使用产品、参加一场真正相关的 LIVE、到了补货时间，还是已经出现了合理的搭配需求？'),
          P('TikTok Shop CRM 是 Seller Center 面向符合条件卖家的用户分群与触达能力，品牌可以通过 automated campaign 和 one-time campaign 对这些时刻采取行动。但按钮不是策略。只有当用户走到了一个真实节点，消息才应该存在，而不是因为品牌今天又有一个促销要宣布。'),
          P('面向美国市场的品牌，第一阶段先做三个任务：挽回购物车或结账放弃、帮助首购客户真正用好产品、邀请合适人群参加与其行为相关的 LIVE 或新品活动。等这三类消息都有负责人、停止条件和复盘日期后，再增加补货与沉默客户唤回。'),
          UL(['按用户状态分群，不按品牌自己的大促日历统一群发。','每条消息只完成一个任务，并解释为什么现在值得联系。','把 CRM 结果回流到英文商品页、达人 brief、offer 和 LIVE。','衡量第二单和客户质量，不只看发送量与已读。','上线前在 Seller Center 核对最新资格、配额和功能权限。']),
          P('WEM 参考 TikTok Shop Academy 当前的 Customer Outreach Playbook，再结合达人获客、客户体验和复购之间的关系，整理出这套运营方法。下文引用的平台规则已于 2026 年 7 月 18 日重新核对；具体运营判断属于 WEM，不代表 TikTok 对业绩作出保证。'),
        ]
      },
      {
        id: '首单不是终点', h: '首单不是终点，而是关系刚刚开始', body: [
          P('中国品牌、工厂和制造商进入美国 TikTok Shop，常常有几项真实优势：打样快、成本控制能力强、供应稳定、包装调整灵活、小批量测试门槛低，看到市场反馈后也能迅速迭代。这些能力让团队更容易抓住一个突然出现的内容机会。'),
          P('但供应链速度解决的是“能不能及时把货做出来”，不自动解决“美国消费者为什么第二次还要回来”。很多团队把达人视频、LIVE 和折扣当成首单机器：流量来了就出单，流量停了就再找一批达人。每一笔销售都重新购买注意力，已经成交的客户却没有进入下一段关系。'),
          P('Seller Center 已经提供了足够的分群和触达能力，让符合条件的店铺对这些信号采取行动。但机会不在于多发几条消息，而在于不再把每一张首单当成孤立的胜利。成交后的问题、使用反馈和复购行为，都应该改变下一条消息、下一版达人 brief 和下一次商品决策。'),
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
          P('只有触发条件稳定、消息长期都不会失去意义时，才适合自动化。购物车提醒或首购使用说明可能符合；新品、大促和特定 LIVE 通常更适合 one-time plan，并且要重新选择人群。Customer email 目前只用于 one-time plan，Advanced Email Marketing 属于受邀测试，AI-powered chat outreach 也只对试点卖家开放。团队应该先把现有权限内的用户逻辑做对，而不是围绕一个可能永远拿不到的功能设计系统。'),
          P('每个 plan 都要写清 owner、目标人群、唯一任务、商品或 offer 逻辑、停止条件和复盘日期。Always-on 不是永远不复盘。'),
        ]
      },
      {
        id: '官方边界', h: 'CRM 权限不是一个按钮，而是店铺基本功的结果', body: [
          P('SPS 3.5 不是一个孤立的功能门槛。它说明平台不希望店铺在履约、服务或交易状态不稳的时候继续放大用户触达。一旦店铺健康度下降，团队可能失去创建或编辑 plan 的能力。所以 CRM 不能脱离店铺运营单独排日历，履约和客户体验本来就是留存系统的一部分。'),
          TABLE(['店铺实时状态','CRM 会发生什么','团队现在该做什么'],[
            ['SPS 3.5 及以上','获得权限，并按日重新计算','只搭少量核心活动，持续复盘用户反应。'],
            ['SPS 3 到 3.5 以下','现有 plan 冻结','先修复客户体验和店铺健康问题，不要继续加触达。'],
            ['SPS 低于 3，或过去 30 天没有交易额','权限撤销','先恢复运营基本盘，CRM 不是救店捷径。'],
          ]),
          P('配额的作用是逼团队做优先级，不是鼓励把次数用完。One-time campaign 的周容量与过去 30 天 GMV 有关，也会受到 read rate 和 unsubscribe rate 表现影响。把有限次数留给真正需要明确日期、特定人群或新决策的场景。SPS 至少 3.5 时，automated campaign 可能不受配额限制，但无限制不等于应该无限发；第三方工具创建的 campaign 仍会占用 quota。'),
          P('频控也只是平台允许的上限，不代表用户愿意接受的频率。WEM 的标准更严格：如果一条消息没有解决真实阻力、改善产品使用，或提供合理的下一次购买理由，就不要发。平台规则会变化，执行前仍要以 Seller Center 的实时权限和官方最新页面为准。'),
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
          CTA('查看 TikTok Shop Academy 官方原文', 'https://seller-us.tiktok.com/university/essay?knowledge_id=505578792273677&source_type=ai_university_home'),
        ]
      },
    ],
    faqs: [
      { q: 'TikTok Shop CRM 是什么？', a: '它是 Seller Center 面向符合条件卖家的用户分群与触达能力。真正的作用不是让品牌多发消息，而是在购物车放弃、首购教育、相关 LIVE 或下一次合理购买等真实节点采取行动。' },
      { q: '美国 TikTok Shop 卖家达到什么条件可以使用 CRM？', a: '当前美国 Academy 页面把权限门槛设为 SPS 至少 3.5，并按日重新计算。团队应该把这理解为留存建立在健康店铺之上，再在执行前以 Seller Center 实时显示为准。' },
      { q: '品牌最先应该上线哪些 CRM 活动？', a: '先做三个任务：挽回购物车或结账放弃、帮助首购客户正确使用产品、邀请合适人群参加相关 LIVE 或新品活动。等每个活动都有负责人、停止条件和复盘日期后再扩展。' },
      { q: 'TikTok Shop CRM 可以发邮件吗？', a: 'Customer email 目前可用于 one-time plan；Advanced Email Marketing 属于受邀测试。先用店铺实际拥有的渠道把留存逻辑跑通，不要默认所有邮件能力都会开放。' },
      { q: 'AI-powered outreach 所有卖家都能用吗？', a: '不能。AI-powered chat outreach 目前是试点功能。即使店铺获得入口，也要像人工活动一样审核人群、时机和 offer，AI 不能替代运营判断。' },
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
