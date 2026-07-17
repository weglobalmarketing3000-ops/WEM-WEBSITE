const { useState, useEffect } = React;

const P = (text) => ({ kind: 'p', text });
const UL = (items) => ({ kind: 'list', items });
const CTA = (label) => ({ kind: 'cta', label, href: 'https://zus03h0enw04.sg.larksuite.com/scheduler/03970278dd9a7925' });
const INFO = (src, alt, caption) => ({ kind: 'infographic', src, alt, caption });

const LABELS = {
  en: { back: 'Blog', toc: 'On this page', faq: 'Related Q&A', related: 'Related guides' },
  zh: { back: '博客', toc: '本文目录', faq: '相关 Q&A', related: '相关文章' },
};

const POSTS = {
  en: {
    meta: {
      title: 'TikTok Shop LIVE Strategy for Brands: Build a Repeatable Growth Loop',
      cat: 'TIKTOK SHOP U.S. · LIVE STRATEGY',
      author: 'WE Marketing Team',
      date: 'Jul 3, 2026',
      read: '10 min read',
      heroImage: 'hero-tiktok-shop-live-strategy-brands.png',
      heroAlt: 'TikTok Shop LIVE strategy for brands with a prepare, host, learn, and reuse operating loop',
    },
    sections: [
      {
        id: 'intro',
        h: 'A TikTok Shop LIVE should not end when the camera turns off',
        body: [
          P('Many brands treat a TikTok Shop LIVE as a one-off campaign: book a host, choose a date, discount a few products, go live, then check GMV. That approach can create activity, but it does not automatically create a growth system.'),
          P('A better TikTok Shop LIVE strategy asks a different question: what will this session teach us that makes the next session stronger? The answer may be a better hero SKU, a clearer demo, a question shoppers keep asking, a creator who should return, a product-page gap, or a short clip worth distributing after the stream.'),
          P('TikTok Shop\'s LIVE newcomer toolkit frames the work as a journey across preparation, the session itself, and post-LIVE improvement. For brands, that is the useful operating model. A LIVE is not only a sales event. It is a fast customer-research and creator-commerce loop.'),
          { kind: 'callout', text: 'WEM TikTok Shop LIVE Loop: Prepare the product and offer, host a useful session, learn from shopper behavior, then reuse the winning ideas in creator content, product pages, and the next LIVE.' },
        ],
      },
      {
        id: 'framework',
        h: 'The 3-phase, 8-step LIVE operating loop',
        body: [
          P('The framework below is a practical operating map adapted from TikTok Shop\'s LIVE onboarding materials. It is a checklist for how a brand can organize the work, not a claim that using every tool guarantees views, sales, or GMV.'),
          INFO('optimized/tiktok-shop-live-growth-loop-framework.jpg', 'Go LIVE journey overview showing pre-LIVE, during-LIVE, and post-LIVE stages', 'WEM operating framework: use the LIVE journey to organize preparation, live execution, and post-LIVE learning.'),
          { kind: 'table', headers: ['Phase', 'Brand decision', 'What to carry forward'], rows: [
            ['Pre-LIVE', 'Choose one or two demo-friendly hero SKUs, an understandable offer, a host, and a reason to watch now.', 'Product questions, creator talking points, offer language, and a clear run of show.'],
            ['During LIVE', 'Introduce products, demonstrate them in context, answer real questions, pin the right products, and make the next action clear.', 'Objection patterns, successful demos, shopper language, and moments worth clipping.'],
            ['Post-LIVE', 'Review product clicks, orders, questions, drop-off moments, chat themes, and the creator or host contribution.', 'A tighter product page, better creator brief, next-session offer, and reusable short-form content.'],
          ] },
          P('The eight actions are simple: get inspiration, select products and design content, set up the LIVE, introduce products, engage viewers, drive sales, analyze and evaluate, then recap and improve. The hard part is not memorizing the list. The hard part is assigning owners and making sure the final two steps change what happens before the next stream.'),
        ],
      },
      {
        id: 'category-fit',
        h: 'Which brands and categories get the most value from LIVE?',
        body: [
          P('LIVE is most useful when a product needs more than a static product image. The strongest starting categories are not necessarily the ones with the largest catalog. They are the ones where real-time demonstration, trust, freshness, or Q&A meaningfully helps a shopper decide.'),
          UL([
            'Fashion, jewelry, and accessories: frequent new drops, styling choices, fit, color, layering, gifting, and limited-time collections give shoppers a reason to come back.',
            'Beauty, personal care, wellness, and health-adjacent products: texture, routine placement, ingredient questions, practical use, and repeated education make trust especially important. Claims must remain accurate and category-appropriate.',
            'Pet, baby, home essentials, and food or beverage: a real use case, comparison, preparation, or problem-solving demo can make the value easier to understand.',
            'Products with repeat-purchase potential: a LIVE can support the first order, but it can also create a reason for customers to return for replenishment, new variants, routines, and community updates.',
          ]),
          P('A weak fit is a product with no clear demo, no story, no fresh reason to return, and no team ready to answer questions. In that case, the brand may be better served by fixing product-page clarity or creator seeding before committing to a recurring LIVE cadence.'),
        ],
      },
      {
        id: 'pre-live',
        h: 'Before LIVE: build the session around one job to be done',
        body: [
          P('The most common pre-LIVE mistake is trying to sell the whole store. Instead, choose one practical job for the session: launch a new drop, demonstrate a hero product, answer routine questions, restock a popular item, bundle complementary products, or help a first-time buyer choose.'),
          { kind: 'h3', text: 'Choose one or two hero SKUs' },
          P('A hero SKU should be easy to demonstrate, clearly in stock, priced with enough room for the offer, and supported by a page that explains the key buying decision. If the host cannot show why it matters in the first minute, it is usually not the right anchor for the session.'),
          { kind: 'h3', text: 'Give the host a run of show, not a rigid commercial script' },
          P('A good run of show has a welcome, product order, demo moments, likely questions, offer timing, and a clear close. It should leave room for the host or creator to react to chat naturally. A rigid script can make a LIVE feel like a long ad, which weakens the reason shoppers stay.'),
          { kind: 'h3', text: 'Connect creator content before the session' },
          P('For creator-led commerce, LIVE should not start from zero. Seed a few short videos, send an invitation to the relevant creator community, prepare an approved product sample or reference clip, and make sure the product page and offer match what viewers will hear on screen.'),
        ],
      },
      {
        id: 'during-live',
        h: 'During LIVE: make the product easy to understand and easy to buy',
        body: [
          P('A brand does not need a theatrical show to make a useful TikTok Shop LIVE. It needs a host who can make the product understandable in a real shopping context.'),
          UL([
            'Show the product being used, worn, compared, prepared, or unpacked instead of only describing it.',
            'Pin the product that matches the current conversation so the shopping path stays clear.',
            'Use chat questions as research. If the same hesitation appears three times, it probably belongs in the product page, creator brief, or next LIVE opening.',
            'Use offers carefully. A coupon, giveaway, or flash-sale moment can create urgency, but the offer should support the product story rather than replace it.',
            'Capture moments that can become short clips later: a useful demo, an objection answered well, a before-and-after process where permitted, or a clear product comparison.',
          ]),
          P('For beauty, wellness, and health-adjacent categories, the operating rule is especially important: education can be valuable, but hosts and creators should use approved, supportable language. A LIVE is not a place to improvise medical, efficacy, or compliance-sensitive claims.'),
        ],
      },
      {
        id: 'post-live',
        h: 'After LIVE: turn the session into a better next session',
        body: [
          P('The post-LIVE review is where most of the compounding value sits. GMV matters, but one number cannot explain why a session worked or what should happen next.'),
          { kind: 'table', headers: ['Review signal', 'Question to ask', 'Likely next action'], rows: [
            ['Product interest', 'Which pinned products earned attention but did not convert?', 'Clarify product-page copy, price framing, images, or bundle logic.'],
            ['Shopper questions', 'What did viewers ask repeatedly before buying?', 'Add FAQ language to the product page, creator brief, and next LIVE run of show.'],
            ['Content moments', 'Which demo or explanation held attention?', 'Clip it for creator-community sharing, organic short video, or a reference video.'],
            ['Creator or host fit', 'Who made the product feel credible and clear?', 'Invite them back, refine their brief, or test them with the next hero SKU.'],
            ['Offer response', 'Did the offer help a clear product decision, or only create short-lived attention?', 'Keep, simplify, or replace the offer based on the buying friction observed.'],
          ] },
          P('This review should be short and weekly. The point is not to create a long report. The point is to make one or two better operating decisions before the next stream.'),
        ],
      },
      {
        id: 'wem-role',
        h: 'Where WEM fits: LIVE as part of creator-community operations',
        body: [
          P('WEM\'s niche is creator-community operations for TikTok Shop brands. We do not treat LIVE as a separate production task that ends when the stream ends. We connect the session to the surrounding creator and commerce system.'),
          P('That can include choosing the right hero SKU, localizing the product page and offer, preparing the host or creator brief, inviting relevant creators, seeding samples, collecting the best UGC hooks, following up after the session, and reviewing product, content, creator, and sales signals together.'),
          P('This is particularly useful for brands entering or scaling TikTok Shop U.S. Product strength matters, but so do U.S. creator communication, shopper trust signals, product-page clarity, fulfillment expectations, and a weekly operating rhythm.'),
          P('WEM is a hands-on U.S. TikTok Shop operating partner that connects brand teams with creators, product-page refinement, affiliate setup, sample seeding, content feedback, and weekly reviews. We do not promise a certain LIVE result. We build the repeatable system that helps brands learn faster from each session.'),
          CTA('Book a TikTok Shop LIVE strategy call ->'),
        ],
      },
      {
        id: 'sources',
        h: 'Sources and notes',
        body: [
          P('Primary source: TikTok Shop LIVE Toolkits Onepager for LIVE Newbies, shared July 2026. The source describes the LIVE journey from pre-LIVE planning through in-session tools and post-LIVE analytics and improvement.'),
          P('This article uses the source as a signal, then translates it into a WE Marketing operating framework for brands selling in or targeting the United States. It is not a repost of the platform SOP and does not guarantee traffic, sales, creator participation, or compliance outcomes.'),
        ],
      },
    ],
    faqs: [
      { q: 'What is a TikTok Shop LIVE strategy for brands?', a: 'A TikTok Shop LIVE strategy is the operating plan around a stream: hero SKU selection, offer, run of show, host or creator fit, product-page readiness, viewer interaction, post-LIVE review, and reuse of successful content and shopper insights.' },
      { q: 'Which categories are best for TikTok Shop LIVE?', a: 'LIVE is especially useful for categories that benefit from demonstration, trust, frequent newness, or repeat purchase, including fashion, jewelry, accessories, beauty, personal care, wellness, pet, baby, home essentials, and food or beverage.' },
      { q: 'What should brands do after a TikTok Shop LIVE?', a: 'Review shopper questions, product interest, conversion friction, the strongest content moments, host or creator fit, and offer response. Then use the findings to improve the next LIVE, creator brief, product page, and short-form content.' },
      { q: 'Does a brand need a large audience before going LIVE on TikTok Shop?', a: 'Not necessarily. A smaller, well-prepared LIVE can still create useful product, content, and shopper-learning signals. The important question is whether the brand has a clear hero SKU, a credible host or creator, an understandable offer, and a plan to reuse the learning.' },
      { q: 'What does WEM do for TikTok Shop LIVE?', a: 'WEM helps brands connect LIVE to creator-community operations: hero SKU selection, U.S. product-page and offer localization, creator or host preparation, affiliate and sample coordination, content reuse, and weekly product-content-creator-sales review.' },
    ],
    related: [
      { label: 'TikTok Shop Creator Matchmaking: How Brands Should Match Products With the Right Creators', href: 'tiktok-shop-creator-matchmaking-playbook' },
      { label: 'TikTok Shop Follower Group Chat: A Retention Layer for Brands', href: 'tiktok-shop-follower-group-chat-retention' },
      { label: 'TikTok Shop Affiliate Strategy for Brands: Build the System Before Scaling Creators', href: 'tiktok-shop-affiliate-strategy-for-brands' },
    ],
  },
  zh: {
    meta: {
      title: 'TikTok Shop LIVE 怎么做：把每场直播做成可复用的增长闭环',
      cat: 'TIKTOK SHOP 美国 · 直播策略',
      author: 'WE Marketing Team',
      date: '2026 年 7 月 3 日',
      read: '10 分钟阅读',
      heroImage: 'hero-tiktok-shop-live-strategy-brands.png',
      heroAlt: 'TikTok Shop LIVE 直播策略主图，展示准备、开播、复盘和内容复用的增长闭环',
    },
    sections: [
      {
        id: '开头',
        h: 'TikTok Shop 直播，不应该在下播那一刻结束',
        body: [
          P('很多品牌把 TikTok Shop LIVE 当成一次活动：找主播、定时间、选几个商品、给点折扣、开播，然后看 GMV。这样可以完成一次直播，但不一定能积累出下一场更好的能力。'),
          P('更值得问的问题是：这场直播结束后，我们留下了什么，能让下一场更强？可能是一个更适合讲解的 hero SKU，一段更清楚的产品 demo，一组用户反复问的问题，一个值得二次合作的 creator，或者一段可以剪成短视频的内容。'),
          P('TikTok Shop 的 LIVE 新手工具资料把工作分成直播前、直播中和直播后。对品牌来说，这不是一份功能清单，而是一套运营逻辑：直播不是只为了当场成交，它也是一次快速的用户研究和 creator commerce 测试。'),
          { kind: 'callout', text: 'WEM 的 TikTok Shop LIVE Loop：准备商品和 offer，做好当场讲解和互动，复盘用户行为，再把有效内容、问题和成交线索带回下一场直播、商品页和达人内容。' },
        ],
      },
      {
        id: '框架',
        h: '把直播拆成 3 个阶段、8 个动作',
        body: [
          P('下面这张图来自 TikTok Shop LIVE onboarding 资料，我们把它转成了品牌更容易执行的运营框架。它不是承诺流量或 GMV 的“公式”，而是帮助团队分清直播前、中、后到底各自要做什么。'),
          INFO('optimized/tiktok-shop-live-growth-loop-framework.jpg', 'Go LIVE journey overview 展示直播前、直播中和直播后的关键动作', 'WEM 运营框架：通过直播前准备、直播中执行和直播后复盘，形成可持续优化的 TikTok Shop LIVE 闭环。'),
          { kind: 'table', headers: ['阶段', '品牌要做的决定', '下一场要带走什么'], rows: [
            ['直播前', '确定 1-2 个适合演示的 hero SKU、清楚的 offer、主持人和开播理由。', '商品问题、达人讲点、offer 表达和 run of show。'],
            ['直播中', '讲清产品、真实演示、回答问题、正确挂品、让用户知道下一步怎么购买。', '高频顾虑、有效 demo、用户语言和可剪辑的内容片段。'],
            ['直播后', '复盘点击、订单、问题、停留、聊天主题和 host/creator 的表现。', '更好的商品页、更清楚的 brief、下一场的 offer 和可复用短视频。'],
          ] },
          P('8 个动作分别是：找灵感、选品和设计内容、搭建直播、介绍商品、与观众互动、推动成交、分析评估、复盘改进。真正拉开差距的，不是会不会背流程，而是最后的分析和复盘有没有改变下一场的选品、内容和达人动作。'),
        ],
      },
      {
        id: '品类',
        h: '什么品牌、什么 category 更适合做 TikTok Shop LIVE？',
        body: [
          P('适合直播的，不一定是 SKU 最多的品牌，而是那些需要真实演示、信任、持续上新或即时答疑的产品。静态商品图讲不清的地方，直播往往能讲清。'),
          UL([
            'Fashion、jewelry、accessories：需要经常上新、讲搭配、看颜色、看细节、讲送礼场景，直播很适合把一次新品发布变成持续回访的理由。',
            'Beauty、personal care、wellness、health 相关产品：用户会问质地、使用步骤、搭配方式和日常场景，更需要通过内容建立信任。涉及功效或健康表达时，必须使用经过确认的、适合该类目的表述。',
            'Pet、baby、home essentials、食品饮料：如果产品有清楚的使用场景、对比、准备过程或问题解决方式，直播能帮助用户更快理解价值。',
            '复购较强的品牌：直播不只是拉第一单，也可以围绕补货、新口味、新颜色、新组合、routine 和社群互动，创造下一次回来的理由。',
          ]),
          P('反过来，如果产品没有 demo、没有场景、没有持续内容理由，团队也没准备好回答用户问题，那品牌应该先补商品页和达人内容，不要急着把“固定开播”当成答案。'),
        ],
      },
      {
        id: '直播前',
        h: '直播前：先让这场直播只解决一个明确问题',
        body: [
          P('直播前最常见的错误，是想把整个店都卖一遍。更好的做法是给这场直播一个明确任务：做新品 launch、讲一个 hero SKU、回答一组使用问题、做补货提醒、卖一个组合，或者帮助新用户第一次做选择。'),
          { kind: 'h3', text: '先选 1-2 个 hero SKU' },
          P('适合做直播主推的 SKU，应该容易演示、库存稳定、offer 有空间、商品页能接住流量，也能在前一分钟讲清“为什么值得买”。如果 host 连第一分钟都讲不出产品价值，它通常不适合做这一场的核心。'),
          { kind: 'h3', text: '给 host 一个 run of show，不是死板广告词' },
          P('一份好的 run of show 包含开场、商品顺序、demo 节点、高频问题、offer 节奏和结束动作，但仍然让 host 或 creator 能根据 chat 自然回应。直播如果像一条超长广告，用户没有留下来的理由。'),
          { kind: 'h3', text: '开播前就接上达人内容' },
          P('如果要做 creator commerce，LIVE 不应该从零开始。提前准备短视频、给相关 creator community 发邀请、准备好产品样品或 reference clip，并确保商品页和 offer 与直播里的表达一致。'),
        ],
      },
      {
        id: '直播中',
        h: '直播中：让用户听懂，也让用户容易下单',
        body: [
          P('TikTok Shop LIVE 不一定要做成很夸张的节目。更重要的是，host 能不能把产品放进一个真实的购物场景里，让用户听得懂。'),
          UL([
            '不要只念卖点。尽量展示产品怎么用、怎么穿、怎么搭、怎么比较、怎么准备或怎么拆箱。',
            '讨论哪一个商品，就挂哪一个商品，让购物路径保持清楚。',
            '把 chat 当用户研究。一个问题如果重复出现三次，它很可能也该出现在商品页、达人 brief 或下一场的开场。',
            'coupon、giveaway、flash sale 可以制造节奏，但 offer 应该服务于产品理解，而不是替代产品价值。',
            '记录可以被复用的片段：有效的 demo、回答得好的顾虑、清楚的对比，或合规前提下的真实使用过程。',
          ]),
          P('Beauty、wellness 和 health 相关类目尤其要注意：直播可以做产品教育，但不能即兴说未经确认的医疗、功效或合规敏感表述。'),
        ],
      },
      {
        id: '直播后',
        h: '直播后：把这场直播变成下一场更好的输入',
        body: [
          P('真正会累积价值的部分，往往发生在下播以后。GMV 很重要，但一个数字不能解释一场直播为什么有效，也不能告诉团队下一步该怎么改。'),
          { kind: 'table', headers: ['复盘信号', '要问的问题', '下一步动作'], rows: [
            ['商品兴趣', '哪些挂品有人看、有人点，但没有成交？', '补商品页、价格表达、图片或 bundle 逻辑。'],
            ['用户问题', '用户在下单前反复问什么？', '加入商品页 FAQ、达人 brief 和下一场 run of show。'],
            ['内容片段', '哪段 demo 或解释最有效？', '剪成短视频，放进达人社群，或作为 reference video。'],
            ['Host / creator 匹配', '谁把产品讲得更可信、更清楚？', '邀请二次合作、优化 brief，或让对方测试下一个 hero SKU。'],
            ['Offer 反应', 'offer 是帮助用户决策，还是只带来短暂注意力？', '根据购买阻力保留、简化或替换 offer。'],
          ] },
          P('复盘不需要做成长报告。每周花很短的时间，确保团队在下一场前做出 1-2 个更好的运营决定，才是关键。'),
        ],
      },
      {
        id: 'wem作用',
        h: 'WEM 的作用：把直播接入达人私域运营，而不是做完一场就结束',
        body: [
          P('WEM 的 niche 是 TikTok Shop creator-community operations / 达人私域运营。我们不会把 LIVE 当成一项独立制作任务，而是把它接到前后的达人和店铺运营系统里。'),
          P('这包括选择适合演示的 hero SKU、美国市场的商品页和 offer 本地化、准备 host 或 creator brief、邀请合适的 creators、寄样、收集有效 UGC hook、直播后跟进，并把产品、内容、达人和销售信号放在一起做 weekly review。'),
          P('对进入 TikTok Shop US 的中国品牌和工厂来说，这个连接尤其重要。很多团队本来就有很真实的优势：打样快、成本控制强、生产稳定、包装灵活、小批量测试快、产品迭代快。问题通常不是不会做产品，而是怎样把这些优势变成美国用户能信任的商品页、达人沟通、直播内容、履约预期和每周运营节奏。'),
          P('WEM 是能用中英文沟通的美国 TikTok Shop 运营伙伴，帮助中国团队连接美国 creators、商品页本地化、affiliate setup、sample seeding、内容本地化和周复盘。我们不承诺某一场直播一定出什么结果，而是帮助品牌更快从每一场里学到东西，把系统跑起来。'),
          CTA('预约 TikTok Shop LIVE 策略沟通 ->'),
        ],
      },
      {
        id: '来源',
        h: '来源和说明',
        body: [
          P('主要来源：TikTok Shop LIVE Toolkits Onepager for LIVE Newbies，2026 年 7 月分享。该资料介绍了从直播前准备、直播中工具到直播后分析和复盘的完整 LIVE journey。'),
          P('本文把原始资料作为 source signal，再结合 WEM 对美国 TikTok Shop、达人私域、商品页承接和跨境品牌运营的实践，改写成品牌可执行的运营文章。本文不承诺流量、GMV、creator participation 或合规结果。'),
        ],
      },
    ],
    faqs: [
      { q: 'TikTok Shop LIVE strategy 是什么？', a: 'TikTok Shop LIVE strategy 不是只排一场直播，而是围绕选品、offer、run of show、host 或 creator、商品页、用户互动、直播后复盘和内容复用建立的一套运营计划。' },
      { q: '什么 category 适合做 TikTok Shop LIVE？', a: '更适合需要 demo、信任、持续上新或复购的品类，例如 fashion、jewelry、accessories、beauty、personal care、wellness、pet、baby、home essentials 和食品饮料。' },
      { q: 'TikTok Shop 直播结束后应该看什么？', a: '除了订单和 GMV，也要看用户问题、商品兴趣、转化阻力、有效内容片段、host 或 creator 匹配度，以及 offer 是否真的帮助用户做决定。' },
      { q: '品牌没有很大粉丝量，能做 TikTok Shop LIVE 吗？', a: '可以。冷启动阶段的小规模直播也能帮助品牌了解产品问题、内容角度和用户表达。关键是 hero SKU、host/creator、offer 和复盘计划是否准备好。' },
      { q: 'WEM 能为 TikTok Shop LIVE 做什么？', a: 'WEM 帮品牌把 LIVE 接进达人私域运营，包括 hero SKU 选择、美国商品页和 offer 本地化、creator/host 准备、affiliate 和样品协同、内容复用，以及产品-内容-达人-销售的 weekly review。' },
    ],
    related: [
      { label: 'TikTok Shop 达人 Matchmaking 怎么做？品牌需要的不只是“找达人”', href: 'tiktok-shop-creator-matchmaking-playbook.html?lang=zh' },
      { label: 'TikTok Shop Group Chat：品牌留存和达人私域的新入口', href: 'tiktok-shop-follower-group-chat-retention.html?lang=zh' },
      { label: 'TikTok Shop Affiliate 怎么做稳：品牌要先打好店铺、产品和达人三层基础', href: 'tiktok-shop-affiliate-strategy-for-brands.html?lang=zh' },
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
      ? 'TikTok Shop LIVE 怎么做：把每场直播做成增长闭环 | WE Marketing'
      : 'TikTok Shop LIVE Strategy for Brands | WE Marketing';
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
