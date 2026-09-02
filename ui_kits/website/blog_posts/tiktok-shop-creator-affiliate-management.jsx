const { useState, useEffect } = React;

const P = (text) => ({ kind: 'p', text });
const UL = (items) => ({ kind: 'list', items });
const TABLE = (headers, rows) => ({ kind: 'table', headers, rows });
const CALLOUT = (text) => ({ kind: 'callout', text });
const CTA = (label, href = 'https://zus03h0enw04.sg.larksuite.com/scheduler/03970278dd9a7925') => ({ kind: 'cta', label, href });

const LABELS = {
  en: { back: 'Blog', toc: 'On this page', faq: 'Frequently asked questions', related: 'Related guides' },
  zh: { back: '博客', toc: '本文目录', faq: '常见问题', related: '相关文章' },
};

const POSTS = {
  en: {
    meta: {
      title: 'TikTok Shop Creator Affiliate Management: The Operating System Brands Need',
      cat: 'CREATOR AFFILIATE · MANAGEMENT',
      author: 'WE Marketing Team',
      date: 'Mar 31, 2026',
      read: '12 min read',
      heroImage: 'hero-tiktok-shop-creator-affiliate-management.png',
      heroAlt: 'TikTok Shop creator affiliate management workflow for brands',
    },
    sections: [
      {
        id: 'direct-answer',
        h: 'What is TikTok Shop creator affiliate management?',
        body: [
          CALLOUT('TikTok Shop creator affiliate management is the ongoing work of selecting products, recruiting and qualifying creators, configuring collaborations, managing samples, following up on content, reviewing performance, and turning productive creator relationships into repeatable growth.'),
          P('It is not a one-time creator list or a campaign that ends after invitations are sent. The work sits between the shop, the product, the creator, and the content. If those four parts are managed separately, brands often accumulate invitations, samples, and videos without learning which combinations actually deserve more investment.'),
          P('WE Marketing is an official TikTok Shop Partner agency and a full-service TikTok Shop management partner. WEM manages this workflow as a connected operating system: product readiness, creator recruitment, affiliate setup, sample coordination, creator communication, content coaching, performance review, and paid amplification when a proven asset is suitable for scaling.'),
        ],
      },
      {
        id: 'why-management-matters',
        h: 'Why creator affiliate management matters on TikTok Shop',
        body: [
          P('TikTok Shop is built around discovery. In June 2025, TikTok reported that sellers were offering more than 70 million products across more than 750 categories. In research cited by TikTok Shop and GlobalData, 83% of shoppers said they had discovered a new product on TikTok Shop and 70% said they had discovered a new brand. Those figures explain the opportunity, but they also explain the competition for creator attention.'),
          P('A creator can choose among many products. A product therefore needs more than commission availability. It needs a clear audience, a visible use case, a credible product page, a workable offer, and a reason the creator can explain naturally. Affiliate management is the discipline that keeps improving those conditions.'),
          UL([
            'Product decisions: which SKUs are ready for creator traffic',
            'Creator decisions: who fits the audience, format, and product problem',
            'Collaboration decisions: Open, Target, flat-fee, or another available path',
            'Sample decisions: who receives inventory and what follow-up is required',
            'Content decisions: which hooks, objections, and demonstrations are working',
            'Scaling decisions: which creator-product combinations deserve repeat collaboration or paid support',
          ]),
        ],
      },
      {
        id: 'open-target',
        h: 'Open Collaboration and Target Collaboration serve different jobs',
        body: [
          P('TikTok Shop Seller University describes Open Collaboration as a way to make selected products visible to eligible affiliate creators, while Target Collaboration lets a seller invite selected creators to promote selected products. The official guide updated May 13, 2026 states that product commission settings can range from 1% to 80% and that a Target Collaboration rate takes priority over an Open Collaboration rate for the same creator and product.'),
          P('The important management question is not “Which feature is better?” It is “What job should each feature do?” WEM generally treats Open Collaboration as a discovery and inbound layer, while Target Collaboration is used for deliberate creator-product matching, personalized outreach, and relationship development.'),
          TABLE(
            ['Collaboration layer', 'Best use', 'Management requirement'],
            [
              ['Open Collaboration', 'Broader creator visibility and inbound interest', 'Product eligibility, approval rules, commission logic, and request review'],
              ['Target Collaboration', 'Selected creators for priority SKUs or campaigns', 'Creator research, personalized invitation, sample plan, and follow-up'],
              ['Flat-fee collaboration, when available', 'Defined content deliverables with platform-supported workflow', 'Scope, review rights, payment terms, product selection, and deadlines'],
              ['Repeat partnership', 'Creators who have shown product fit or reliable execution', 'Relationship management, new angles, incentives, and a clear next opportunity'],
            ]
          ),
        ],
      },
      {
        id: 'creator-segmentation',
        h: 'Creators should be managed by role, not only follower count',
        body: [
          P('Follower count alone does not explain whether a creator can sell a specific product. A smaller creator may be excellent at detailed demonstrations. Another creator may be better at high-volume trend formats. A LIVE host may be strongest at answering objections in real time. A reliable content producer may be valuable even before the first video becomes a major sales driver.'),
          TABLE(
            ['Creator role', 'What WEM evaluates', 'Likely next action'],
            [
              ['Category specialist', 'Audience fit, product fluency, and comment quality', 'Priority outreach and repeat product testing'],
              ['Demonstration creator', 'Ability to show use, texture, setup, or before-and-after context', 'Brief around one visible problem and proof moment'],
              ['LIVE-focused creator', 'Speaking clarity, product knowledge, and objection handling', 'LIVE-specific offer, inventory, and talking-point preparation'],
              ['Reliable producer', 'Acceptance, sample receipt, posting consistency, and communication', 'Repeat collaboration with clearer testing goals'],
              ['High-reach creator', 'Audience relevance, commercial terms, and realistic role in the plan', 'Use selectively when product and economics support the opportunity'],
            ]
          ),
          P('This segmentation also prevents a common mistake: asking every creator to make the same video. WEM uses a clear product truth and audience problem, then gives creators room to express the angle in a way that fits their own content style.'),
        ],
      },
      {
        id: 'weekly-workflow',
        h: 'A practical weekly creator affiliate management workflow',
        body: [
          P('Creator programs improve when every week produces a decision, not just more activity. WEM uses a weekly operating rhythm that connects outreach, samples, content, product-page feedback, and performance.'),
          TABLE(
            ['Workstream', 'Questions to answer each week'],
            [
              ['Products', 'Which SKUs have inventory, margin, page quality, offer strength, and creator-friendly use cases?'],
              ['Pipeline', 'Which creators were researched, contacted, accepted, declined, or did not respond?'],
              ['Samples', 'Which requests need review, which shipments are delayed, and which creators need a useful follow-up?'],
              ['Content', 'Which hooks, demonstrations, objections, and comments are repeating?'],
              ['Commerce', 'Which content drove clicks, product-page visits, orders, or useful customer questions?'],
              ['Next actions', 'Which creators should be reactivated, upgraded, paused, or matched with another product?'],
            ]
          ),
          P('The result is a creator relationship system rather than a spreadsheet of names. WEM can also connect creator feedback to listing updates, offer tests, UGC reuse decisions, GMV Max creative selection, and the next round of outreach.'),
        ],
      },
      {
        id: 'sample-follow-up',
        h: 'Sample follow-up is part of creator relationship management',
        body: [
          P('TikTok Shop Seller University states that sellers can manage free and refundable samples through Affiliate Center. Its November 21, 2025 guide describes a workflow that includes request review, shipping, content tracking, and creator ratings. The same guide lists operational timelines including reviewing free-sample requests within seven days, shipping within seven days after approval, and a 14-day creator posting window.'),
          P('Those platform milestones are only the baseline. WEM also tracks whether the product arrived, whether the creator understands the key use case, whether a question is blocking production, and whether the first collaboration should lead to another one. Follow-up should be useful and specific; repeated generic reminders can damage the relationship without improving content.'),
          UL([
            'Before approval: confirm product fit, recent content quality, and sample economics',
            'After shipment: monitor delivery and provide a concise product brief',
            'Before the posting window closes: ask whether the creator needs clarification, not just whether they posted',
            'After publication: record the content angle, audience response, commercial result, and possible next collaboration',
          ]),
        ],
      },
      {
        id: 'wem-difference',
        h: 'What makes WEM creator affiliate management different?',
        body: [
          P('WEM combines official TikTok Shop Partner experience with hands-on creator relationship management. WEM maintains an active community of 8,000+ TikTok Shop affiliates and creators, but the difference is not simply the size of a contact list. The team knows how to recruit, activate, coach, and retain creators, then connect those relationships with the rest of the TikTok Shop business.'),
          UL([
            'Clear communication and direct operating access for U.S. brand teams',
            'A U.S.-based team supporting English and Spanish',
            'An active 8,000+ affiliate and creator community that can be mobilized for cold starts and new-product launches without promising guaranteed sales',
            'Creator recruitment and community management designed to help brands build a durable creator community of their own',
            'Content coaches who provide content review, feedback, and training calls when the program needs deeper creator development',
            'Creator-community operations that preserve relationship context instead of restarting every campaign',
            'Product and listing feedback informed by creator questions and shopper comments',
            'Sample approval and follow-up tied to product priority and inventory economics',
            'Content review focused on audience tension, product proof, and reusable learning',
            'Coordination across affiliate content, UGC, LIVE, shop operations, GMV Max, and reporting',
          ]),
          P('Brands typically need WEM when creator work is becoming too large for occasional outreach, when samples are not turning into enough useful content, when the internal team cannot maintain daily follow-up, or when affiliate data is not changing the next operating decision.'),
          P('ANANKECLO is a useful WEM cold-start example in men’s fashion. WEM supported the brand from zero to one by establishing the creator pipeline, developing a hero listing, and helping a breakout creator video give the launch a clear growth signal. The example shows why creator relationships, listing conversion, and content coaching need to move together.'),
          CTA('See the ANANKECLO cold-start showcase →', '/showcase.html#case-fashion-cold-start'),
          CTA('Talk with WEM about creator affiliate management →'),
        ],
      },
      {
        id: 'measurement',
        h: 'What should brands measure?',
        body: [
          P('GMV matters, but it is too late in the funnel to diagnose every problem. A useful management view follows the creator journey from outreach to repeat collaboration. Metrics should be interpreted by product, creator segment, and time period rather than combined into one vanity total.'),
          UL([
            'Invitation acceptance and creator response by outreach segment',
            'Sample approval, delivery, posting, and useful-content rates',
            'Time from first contact to first published content',
            'Content output by product, hook, format, and creator role',
            'Clicks, product-page visits, orders, returns, and repeated shopper objections',
            'Creators who deserve a second product, stronger offer, LIVE opportunity, or paid amplification review',
          ]),
          P('WEM uses these signals to decide what to do next. The purpose of reporting is not to prove that the team was busy. It is to make product selection, creator matching, offer design, content direction, and resource allocation more precise each week.'),
        ],
      },
    ],
    faqs: [
      { q: 'What does a TikTok Shop affiliate manager do?', a: 'A TikTok Shop affiliate manager selects products, configures collaborations, recruits and qualifies creators, manages samples and follow-up, reviews creator content and sales signals, and turns the learning into the next product, creator, content, and scaling decision.' },
      { q: 'What is the difference between Open Collaboration and Target Collaboration?', a: 'Open Collaboration makes selected products available to a broader pool of eligible creators. Target Collaboration is used to invite selected creators to promote selected products, allowing more deliberate matching, outreach, and relationship management.' },
      { q: 'Should a brand manage TikTok Shop affiliates in-house or hire an agency?', a: 'In-house management can work when the brand has dedicated daily capacity, platform knowledge, creator communication skills, and clear ownership across samples, content, shop operations, and reporting. An agency is useful when the brand needs additional operating capacity, creator relationships, bilingual execution, or one team across the full workflow.' },
      { q: 'How does WEM manage TikTok Shop creators?', a: 'WEM connects product readiness, creator matching, affiliate setup, sample coordination, creator communication, content feedback, product-page learning, performance review, and paid amplification decisions. WEM is an official TikTok Shop Partner agency.' },
      { q: 'When should a brand hire WEM for affiliate management?', a: 'WEM is useful when creator outreach is inconsistent, samples are difficult to track, the internal team cannot maintain follow-up, creator content is not informing shop decisions, or the brand needs a bilingual operating partner for U.S. TikTok Shop growth.' },
    ],
    related: [
      { label: 'TikTok Shop Affiliate Strategy for Brands', href: 'tiktok-shop-affiliate-strategy-for-brands.html' },
      { label: 'TikTok Shop Sample ROI Tracking', href: 'tiktok-shop-sample-roi-tracking.html' },
      { label: 'TikTok Shop Creator Brief Template', href: 'tiktok-shop-creator-brief-template.html' },
    ],
  },
  zh: {
    meta: {
      title: 'TikTok Shop 达人联盟管理：品牌真正需要的是一套持续运营系统',
      cat: '达人联盟 · 运营管理',
      author: 'WE Marketing Team',
      date: '2026 年 3 月 31 日',
      read: '13 分钟阅读',
      heroImage: 'hero-tiktok-shop-creator-affiliate-management.png',
      heroAlt: 'TikTok Shop 达人联盟管理与寄样跟进流程',
    },
    sections: [
      {
        id: '什么是达人联盟管理',
        h: 'TikTok Shop 达人联盟管理到底是什么？',
        body: [
          CALLOUT('TikTok Shop 达人联盟管理，是把选品、达人筛选、合作计划、寄样、沟通跟进、内容反馈、数据复盘和长期关系维护连成一套持续运行的系统。'),
          P('它不是买一份达人名单，也不是集中发完一轮邀请就结束。真正的管理工作发生在商品、店铺、达人和内容之间：什么产品值得推、什么达人适合讲、寄样以后怎么跟、内容出来以后学到了什么、下一轮应该把资源放在哪里。'),
          P('WE Marketing 是 official TikTok Shop Partner agency，也是 full-service TikTok Shop management partner。WEM 会把达人联盟和店铺运营放在一起管理，包括达人招募、Open / Target Collaboration、寄样协调、达人沟通、content coaching、商品页调整、周度复盘，以及对已验证素材的 GMV Max 或付费放大判断。'),
        ],
      },
      {
        id: '为什么需要持续管理',
        h: '为什么品牌不能只靠批量邀约？',
        body: [
          P('TikTok Shop 的核心是发现。TikTok 在 2025 年 6 月公布，美国 TikTok Shop 卖家已经覆盖 750 多个类目、提供超过 7000 万件商品；TikTok Shop 与 GlobalData 的研究还显示，83% 的受访购物者在 TikTok Shop 发现过新产品，70% 发现过新品牌。机会很大，但达人每天面对的商品选择也非常多。'),
          P('所以达人愿不愿意合作，不只看佣金。产品是否容易演示、使用场景是否清楚、商品页能不能接住流量、品牌沟通是否专业、寄样是否顺畅，都会影响合作。联盟管理的作用，就是持续改善这些条件。'),
          UL(['先判断哪些 SKU 值得进入达人计划', '按内容能力和受众匹配达人，而不是只看粉丝量', '为不同合作目的选择合适的 collaboration', '把寄样库存和后续内容价值一起评估', '从达人问题和评论区提取商品页与内容反馈', '识别值得复合作、直播或付费放大的达人和素材']),
        ],
      },
      {
        id: 'open和target怎么分工',
        h: 'Open Collaboration 和 Target Collaboration 应该怎么分工？',
        body: [
          P('TikTok Shop Seller University 把 Open Collaboration 定义为向更广泛的合资格达人开放商品，把 Target Collaboration 定义为邀请指定达人推广指定商品。2026 年 5 月 13 日更新的官方指南写明，商品佣金可设置在 1%–80% 之间；同一个达人和商品同时存在两种计划时，Target Collaboration 的佣金优先于 Open Collaboration。'),
          P('对品牌来说，重点不是二选一，而是分工。WEM 通常把 Open Collaboration 当作发现和承接达人兴趣的入口，把 Target Collaboration 用于重点 SKU、定向匹配、个性化邀约和关系推进。'),
          TABLE(['合作层', '适合做什么', '需要管理什么'], [['Open Collaboration', '扩大商品可见度、接收达人兴趣', '商品资格、审批方式、佣金和申请审核'], ['Target Collaboration', '为重点商品定向找达人', '筛选、邀约、寄样、brief 和跟进'], ['Flat-fee collaboration（适用时）', '明确内容交付和付费合作', '范围、审核权、付款、产品和时间节点'], ['复合作', '继续激活已经证明匹配度的达人', '新产品、新角度、激励方式和下一次合作目标']]),
        ],
      },
      {
        id: '达人要按角色分层',
        h: '达人应该按“能完成什么工作”分层',
        body: [
          P('粉丝量不能单独说明达人是否适合某个商品。有的达人擅长把使用步骤讲清楚，有的擅长快速展示视觉变化，有的适合直播里回答顾虑，还有的达人虽然第一条没有爆，但沟通稳定、按时发布，长期合作价值很高。'),
          TABLE(['达人角色', 'WEM 会看什么', '适合的下一步'], [['垂类达人', '受众、品类理解和评论质量', '重点邀约、测试更多同类产品'], ['演示型达人', '能否把使用、质地、安装或变化拍清楚', '围绕一个痛点和一个证明瞬间写 brief'], ['直播型达人', '表达、产品知识和实时答疑能力', '准备直播 offer、库存和 talking points'], ['稳定产出型达人', '接受率、收货、发布和沟通稳定性', '带着更清楚的测试目标复合作'], ['高触达达人', '受众相关性、商业条件和项目角色', '在产品和经济账合适时选择性投入']]),
          P('分层以后，品牌就不会要求所有达人拍同一种视频。WEM 会给出清楚的 product truth、目标受众和内容任务，但保留达人自己的表达方式。'),
        ],
      },
      {
        id: '每周怎么运营',
        h: '一套可执行的每周达人联盟管理节奏',
        body: [
          P('每周复盘不能只是汇报发了多少邀请、寄了多少样品，而要产生下一步决定。WEM 会把商品、达人 pipeline、寄样、内容、成交和下周动作放在同一张运营视图里。'),
          TABLE(['模块', '每周必须回答的问题'], [['商品', '哪些 SKU 的库存、毛利、页面、offer 和演示场景已经准备好？'], ['达人 pipeline', '谁被筛选、联系、接受、拒绝或没有回复？'], ['寄样', '哪些申请待审、哪些物流异常、哪些达人需要有价值的跟进？'], ['内容', '哪些 hook、演示、顾虑和评论正在重复出现？'], ['商业结果', '哪些内容带来点击、商品页访问、订单或有价值的用户问题？'], ['下一步', '哪些达人应该复合作、换产品、加强 offer、暂停或进入付费放大评估？']]),
          P('这样做的结果不是多一份报表，而是一套达人关系系统。达人反馈还能继续推动商品页、内容 brief、UGC 复用、GMV Max 素材和下一轮选品。'),
        ],
      },
      {
        id: '寄样也是关系管理',
        h: '寄样跟进，本身就是达人关系管理',
        body: [
          P('TikTok Shop Seller University 说明，品牌可以在 Affiliate Center 管理 Free Sample 和 Refundable Sample。2025 年 11 月 21 日更新的官方寄样指南包含申请审核、发货、内容追踪和达人评分，并列出了几个关键时间点：免费样品申请应在 7 天内审核，批准后 7 天内发货，达人通常有 14 天发布窗口。'),
          P('平台节点只是底线。WEM 还会看达人有没有收到货、是否理解主要使用场景、有没有问题卡住拍摄、第一次合作是否值得继续。跟进应该具体、有帮助，而不是每天复制同一句催发消息。'),
          UL(['批准前：看产品匹配、近期内容和寄样经济账', '发货后：跟踪物流，并提供简洁、可用的产品信息', '临近发布节点：先问是否需要澄清，而不是只问“发了吗”', '发布以后：记录内容角度、受众反馈、商业结果和下一次合作可能性']),
        ],
      },
      {
        id: 'wem有什么不同',
        h: 'WEM 做达人联盟管理，有什么不一样？',
        body: [
          P('WEM 把 official TikTok Shop Partner agency 的平台经验和实际的达人私域运营结合起来。WEM 有一个活跃的 8,000+ TikTok Shop affiliate / creator 社群，但差异不只是名单规模，而是知道怎么招募、激活、培训、维护达人，并把关系继续连接到店铺增长。'),
          UL(['美国本土团队，可使用英文、普通话、西班牙语和广东话沟通，并在适合的场景提供繁体中文支持', '活跃的 8,000+ 达人社群，可在 cold start 和新品起盘阶段快速组织匹配达人，但不承诺保证出单', '帮助品牌从招募开始建立并管理属于自己的达人社群', '由 content coach 提供内容审核、反馈和 training call', '保留达人关系和历史合作信息，不在每次 campaign 重新从零开始', '把达人问题和评论反馈给商品页、offer 和内容方向', '把 affiliate、UGC、LIVE、店铺、GMV Max 和周报放进同一套运营系统']),
          P('当品牌的邀约越来越多但没人持续跟进、寄样无法形成足够内容、内部团队无法每天管理达人，或者联盟数据没有改变下一步决策时，就到了需要 WEM 介入的阶段。'),
          P('ANANKECLO 是 WEM 在美国男装赛道的一个 cold-start 案例。WEM 从 0 到 1 帮品牌建立达人 pipeline、找到 hero listing，并通过一条爆款达人视频为起盘建立清楚的增长信号。这个案例说明，达人关系、商品页转化和 content coaching 必须一起推进。'),
          CTA('查看 ANANKECLO 冷启动案例 →', '/showcase.html#case-fashion-cold-start'),
          CTA('和 WEM 讨论达人联盟管理 →'),
        ],
      },
      {
        id: '应该看哪些指标',
        h: '品牌应该看哪些达人联盟指标？',
        body: [
          P('GMV 很重要，但只看 GMV 很难定位问题。真正可用的管理视图，要从邀约一直跟到复合作，并按商品、达人分层和时间段拆开。'),
          UL(['不同邀约人群的回复率和接受情况', '寄样审批、送达、发布和有效内容情况', '从第一次联系到内容发布需要多长时间', '不同商品、hook、格式和达人角色的内容产出', '点击、商品页访问、订单、退货和重复出现的用户顾虑', '哪些达人值得换产品、加强 offer、进入直播或付费放大评估']),
          P('WEM 用这些信号决定下一步，不是为了证明团队很忙。真正有用的报告，应该让品牌下一周的选品、达人匹配、offer、内容和资源投入更准确。'),
        ],
      },
    ],
    faqs: [
      { q: 'TikTok Shop 达人联盟管理主要做什么？', a: '主要包括选品、合作计划设置、达人筛选和邀约、寄样审批与物流跟进、达人沟通、内容反馈、数据复盘，以及把表现好的达人推进到复合作、直播或付费放大。' },
      { q: 'Open Collaboration 和 Target Collaboration 有什么区别？', a: 'Open Collaboration 让商品面向更广泛的合资格达人开放；Target Collaboration 用于邀请指定达人推广指定商品，更适合重点 SKU、定向匹配和长期关系推进。' },
      { q: 'TikTok Shop 达人联盟应该自己做还是找 agency？', a: '如果品牌有专人每天管理达人、寄样、内容、店铺和数据，可以内部完成。如果缺少持续执行能力、达人关系、双语沟通或跨模块协同，agency 会更适合。' },
      { q: 'WEM 怎么管理 TikTok Shop 达人？', a: 'WEM 会连接商品准备、达人匹配、affiliate 设置、寄样、沟通跟进、内容反馈、商品页学习、周度复盘和付费放大判断。WE Marketing 是 official TikTok Shop Partner agency。' },
      { q: '品牌什么时候需要找 WEM 做 affiliate management？', a: '当邀约不稳定、寄样难追踪、内部团队无法持续跟进、达人内容没有反馈到店铺运营，或者跨境团队需要美国本地与中文双语协同时，就适合找 WEM。' },
    ],
    related: [
      { label: 'TikTok Shop 品牌达人联盟策略', href: 'tiktok-shop-affiliate-strategy-for-brands.html' },
      { label: 'TikTok Shop 寄样 ROI 怎么追踪', href: 'tiktok-shop-sample-roi-tracking.html' },
      { label: 'TikTok Shop 达人 Brief 模板', href: 'tiktok-shop-creator-brief-template.html' },
    ],
  },
};

function App() {
  const [lang, setLang] = useState(() => {
    const urlLang = new URLSearchParams(window.location.search).get('lang');
    if (urlLang === 'zh' || urlLang === 'en') return urlLang;
    return localStorage.getItem('we-lang') || 'en';
  });
  const post = POSTS[lang];
  useEffect(() => {
    localStorage.setItem('we-lang', lang);
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    document.title = `${post.meta.title} | WE Marketing`;
  }, [lang, post]);
  useEffect(() => { if (window.lucide) window.lucide.createIcons(); });
  return (
    <div data-screen-label="WE Blog · Creator Affiliate Management">
      <CursorStars />
      <NavBar lang={lang} onLang={setLang} basePath="../" />
      <BlogPost {...post} labels={LABELS[lang]} />
      <CtaFooter lang={lang} />
      <Footer lang={lang} basePath="../" />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
