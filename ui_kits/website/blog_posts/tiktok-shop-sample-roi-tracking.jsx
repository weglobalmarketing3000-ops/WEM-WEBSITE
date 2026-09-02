const { useState, useEffect } = React;
const P = (text) => ({ kind: 'p', text });
const UL = (items) => ({ kind: 'list', items });
const TABLE = (headers, rows) => ({ kind: 'table', headers, rows });
const CALLOUT = (text) => ({ kind: 'callout', text });
const CTA = (label, href = 'https://zus03h0enw04.sg.larksuite.com/scheduler/03970278dd9a7925') => ({ kind: 'cta', label, href });
const LABELS = { en: { back: 'Blog', toc: 'On this page', faq: 'Frequently asked questions', related: 'Related guides' }, zh: { back: '博客', toc: '本文目录', faq: '常见问题', related: '相关文章' } };

const POSTS = {
  en: {
    meta: { title: 'TikTok Shop Sample ROI: How Brands Should Track Seeding', cat: 'SAMPLES · ROI TRACKING', author: 'WE Marketing Team', date: 'Mar 5, 2026', read: '11 min read', heroImage: 'hero-tiktok-shop-sample-roi-tracking.png', heroAlt: 'TikTok Shop sample ROI tracking funnel for brands' },
    sections: [
      {
        id: 'direct-answer', h: 'How do you calculate TikTok Shop sample ROI?', body: [
          CALLOUT('TikTok Shop sample ROI should compare the full cost of approved and shipped samples with the value created by published content, attributed orders, reusable learning, and any separately licensed content rights. Do not divide GMV only by the number of samples shipped.'),
          P('A sample is the beginning of a creator workflow, not the result. Brands need to track request, approval, shipment, delivery, publication, content quality, traffic, orders, and the next relationship decision. Otherwise a high shipment count can hide poor creator fit, slow fulfillment, weak follow-up, or content that never reaches the product page.'),
          P('WE Marketing is an official TikTok Shop Partner agency and a full-service management partner. With a U.S.-based multilingual team and an active community of 8,000+ affiliates and creators, WEM manages sample seeding together with creator selection, recruitment, logistics follow-up, content coaching, shop conversion, and weekly reporting so the brand can see where value is created or lost.'),
        ]
      },
      {
        id: 'full-cost', h: 'Start with the full sample cost', body: [
          P('The product cost is only one part of sample investment. A useful cost view includes the cost of goods, packing, shipping, warehouse handling, replacement shipments, and the operating time used to review, coordinate, and follow up. Paid creator fees and content usage rights should remain separate line items because a free sample does not automatically grant advertising rights.'),
          TABLE(['Cost layer', 'What to include', 'Why it matters'], [['Product', 'COGS and any special sample packaging', 'Shows the inventory value committed to testing'], ['Fulfillment', 'Pick, pack, postage, and reshipment', 'Prevents cheap products with expensive shipping from looking artificially efficient'], ['Operations', 'Review, outreach, support, and tracking time', 'Reveals whether the process can scale'], ['Creator payment', 'Flat fee or other guaranteed compensation, if used', 'Separates paid production from commission-only seeding'], ['Usage rights', 'Licensing negotiated for paid or cross-channel use', 'Avoids treating creator content as an automatically owned asset']]),
        ]
      },
      {
        id: 'funnel', h: 'Track the full sample funnel', body: [
          P('A single posting rate cannot explain the whole program. The funnel should identify the exact stage where samples stop moving. This is especially important when multiple SKUs, creator segments, and collaboration types are running at once.'),
          TABLE(['Stage', 'Question', 'Possible action'], [['Requested', 'Did the right creators request the right product?', 'Tighten eligibility, product positioning, or creator targeting'], ['Approved', 'Did the team review requests consistently?', 'Create approval rules by SKU and creator role'], ['Shipped', 'Did approved samples leave on time?', 'Fix warehouse ownership and inventory visibility'], ['Delivered', 'Did the creator receive the correct product?', 'Resolve delivery issues before sending content reminders'], ['Published', 'Was qualifying content posted and linked?', 'Improve follow-up, brief clarity, or creator selection'], ['Engaged', 'Did viewers watch, click, comment, or ask useful questions?', 'Identify hooks and objections worth testing again'], ['Converted', 'Did the content contribute orders, and what happened after purchase?', 'Review page conversion, returns, margin, and offer'], ['Repeated', 'Should this creator receive another product or collaboration?', 'Build a relationship plan instead of restarting outreach']]),
        ]
      },
      {
        id: 'official-timeline', h: 'Use TikTok Shop milestones, then add your own operating checks', body: [
          P('TikTok Shop Seller University explains that sellers can manage free and refundable samples in Affiliate Center. In its guide updated November 21, 2025, TikTok Shop lists operational timelines that include reviewing free-sample requests within seven days, shipping within seven days after approval, and a 14-day posting window for creators. Refundable-sample criteria can use a longer window defined by the applicable program rules.'),
          P('Platform status is necessary, but it does not capture every blocker. WEM also records shipment exceptions, creator questions, brief delivery, content angle, link status, audience response, and follow-up outcome. Dates should be stored as events so the team can see where time is being lost.'),
          UL(['Approval date and decision reason', 'Shipment date, carrier, and delivery status', 'Brief or product-information delivery', 'Creator question and support history', 'Publication date, URL, product link, and format', 'Content review, commerce signals, and next action']),
        ]
      },
      {
        id: 'cohorts', h: 'Measure sample ROI by cohort, SKU, and creator segment', body: [
          P('Averages can be misleading. A beauty product that needs visible demonstration should not be judged against a simple accessory using the same content expectation. New creators should not automatically be compared with proven repeat partners. A low-cost item with high shipping cost should not be evaluated like a higher-margin bundle.'),
          P('WEM groups samples into cohorts such as approval week, product, creator role, collaboration type, and outreach source. This makes the comparison operational: which product creates the strongest content, which creator segment posts reliably, which brief reduces confusion, and which cohort deserves another test.'),
          TABLE(['Cohort view', 'What it can reveal'], [['Approval week', 'Whether workflow or follow-up changes improved later batches'], ['SKU', 'Which products are creator-friendly and economically support seeding'], ['Creator role', 'Which creator types produce demonstrations, LIVE value, reach, or conversion'], ['Open vs Target', 'How inbound requests compare with deliberate creator matching'], ['First vs repeat collaboration', 'Whether relationship history improves speed, quality, or reliability']]),
        ]
      },
      {
        id: 'value', h: 'Sample value is broader than immediate GMV, but it must stay measurable', body: [
          P('Immediate attributed orders are important, but some samples also create product learning, shopper-language insights, usable organic content, or a creator relationship that becomes valuable later. Those outcomes should not be converted into invented dollar values. They should be recorded as separate evidence.'),
          UL(['Attributed GMV, orders, refunds, and contribution margin where available', 'Published content that meets the brand and platform requirements', 'Repeated shopper questions that can improve the product page or FAQ', 'A proven hook, use case, or objection response for the next brief', 'A creator who qualifies for another collaboration, LIVE, or flat-fee discussion', 'Content that may be considered for licensing or paid amplification after rights review']),
          P('This keeps reporting honest. WEM does not claim that every sample should generate a sale or assign fictional media value to every video. The goal is to identify which sample investments produced enough evidence to justify the next action.'),
        ]
      },
      {
        id: 'wem-workflow', h: 'How WEM manages sample ROI', body: [
          P('WEM connects sample tracking to the creator and shop decisions around it. Before approval, the team reviews creator fit, content quality, product priority, inventory, and sample economics. After approval, WEM coordinates status, delivery, creator support, content review, and performance. For cold starts and new-product launches, the existing creator community can shorten recruitment time while WEM still applies product-fit and sample-economics controls.'),
          UL(['Define approval rules for each priority SKU', 'Review creator fit before committing inventory', 'Keep one status history from request through publication', 'Use concise product information and creator-specific context', 'Separate logistics problems from creator follow-up problems', 'Review content quality and commercial signals together', 'Feed creator questions back into listings, briefs, and future outreach', 'Decide whether to repeat, pause, change product, negotiate rights, or test paid amplification']),
          P('Brands often need WEM when sample volume has outgrown a spreadsheet, when different teams own approval and shipping, when creators receive inconsistent follow-up, or when the brand cannot explain which seeding cohorts should continue.'),
          CTA('See WEM work and capabilities →', '/showcase.html'), CTA('Talk with WEM about sample seeding and ROI →'),
        ]
      },
      {
        id: 'dashboard', h: 'What should a sample ROI dashboard show?', body: [
          P('The dashboard should make the next decision obvious. It should allow the operator to move from a total to a specific SKU, creator, cohort, shipment, or piece of content without rebuilding the report.'),
          TABLE(['Dashboard area', 'Minimum useful fields'], [['Pipeline', 'Requested, approved, rejected, shipped, delivered, posted, and overdue'], ['Economics', 'COGS, fulfillment cost, paid fee, usage-rights cost, commission, and returns where applicable'], ['Content', 'URL, format, hook, product, creator, posting date, and review status'], ['Commerce', 'Clicks, orders, GMV, refunds, and margin signals available to the team'], ['Learning', 'Repeated questions, objections, successful proof points, and listing changes'], ['Next action', 'Repeat, follow up, change product, pause, license, LIVE test, or paid review']]),
        ]
      },
    ],
    faqs: [
      { q: 'What is a good sample-to-post rate on TikTok Shop?', a: 'There is no universal rate that applies to every category, product, creator segment, or sample type. Brands should compare posting performance by cohort and investigate approval quality, delivery, follow-up, and content requirements instead of relying on an unsupported benchmark.' },
      { q: 'How long do TikTok Shop creators have to post after receiving a sample?', a: 'TikTok Shop Seller University lists a 14-day creator posting window for free samples in its sample-management guide updated November 21, 2025. Sellers should verify the current status and applicable sample type inside Affiliate Center because platform rules can change.' },
      { q: 'Does giving a free sample give the brand usage rights to the video?', a: 'Not automatically. Product seeding, affiliate commission, content ownership, and paid-ad usage rights are separate issues. Brands should review the applicable agreement and obtain the necessary permission before reusing creator content.' },
      { q: 'What should brands track for TikTok Shop samples?', a: 'Track request, approval, shipment, delivery, publication, content quality, product link, traffic, orders, refunds, costs, creator questions, and the next relationship decision. Segment the data by SKU, cohort, creator role, and collaboration type.' },
      { q: 'How can WEM help with TikTok Shop sample seeding?', a: 'WEM manages creator screening, sample approval logic, shipment follow-up, creator communication, content tracking, product feedback, cohort reporting, and next-action decisions as part of a full TikTok Shop operating system.' },
    ],
    related: [{ label: 'TikTok Shop Creator Affiliate Management', href: 'tiktok-shop-creator-affiliate-management.html' }, { label: 'TikTok Shop Sample Seeding Strategy', href: 'tiktok-shop-sample-seeding-strategy.html' }, { label: 'TikTok Shop Creator Brief Template', href: 'tiktok-shop-creator-brief-template.html' }],
  },
  zh: {
    meta: { title: 'TikTok Shop 寄样 ROI 怎么算？品牌需要追踪完整寄样漏斗', cat: '寄样 · ROI 追踪', author: 'WE Marketing Team', date: '2026 年 3 月 5 日', read: '12 分钟阅读', heroImage: 'hero-tiktok-shop-sample-roi-tracking.png', heroAlt: 'TikTok Shop 寄样 ROI 与达人内容追踪漏斗' },
    sections: [
      { id: '寄样roi怎么算', h: 'TikTok Shop 寄样 ROI 应该怎么算？', body: [CALLOUT('TikTok Shop 寄样 ROI 应该比较完整寄样成本与实际产生的内容、归因订单、产品反馈、达人关系和已获得授权的内容价值，而不是只用 GMV 除以寄出的样品数。'), P('寄出样品只是流程开始。品牌需要继续追踪申请、审批、发货、签收、发布、内容质量、点击、订单和下一次合作决定。否则“寄了很多”很容易掩盖达人不匹配、物流慢、没人跟进或内容无法承接商品页的问题。'), P('WE Marketing 是 official TikTok Shop Partner agency，也是 full-service management partner。WEM 的美国本土多语言团队和活跃的 8,000+ 达人社群，可以把达人筛选、招募、寄样、物流跟进、content coaching、店铺转化与周度复盘放在一起管理。')] },
      { id: '完整成本', h: '先把寄样的完整成本算清楚', body: [P('样品本身不是全部成本。品牌还要看产品成本、包装、仓库操作、运费、补寄，以及团队花在审核、协调和跟进上的时间。如果另有达人固定费用或内容使用权费用，也应该单独记录，因为免费寄样并不自动等于品牌获得广告使用权。'), TABLE(['成本层', '应该记录什么', '为什么重要'], [['产品', 'COGS 和特殊样品包装', '知道投入了多少库存价值'], ['履约', '拣货、包装、邮费和补寄', '避免低货值高运费的产品看起来虚假高效'], ['运营', '审核、沟通、支持和追踪时间', '判断流程能否放大'], ['达人费用', '固定费用或保证付款', '和纯佣金寄样分开'], ['使用权', '付费广告或跨渠道授权费用', '避免把达人内容当成自动归品牌所有']])] },
      { id: '完整漏斗', h: '寄样要追踪完整漏斗', body: [P('一个发帖率解释不了全部问题。品牌必须知道样品在哪一个环节停住，尤其是在多个 SKU、达人分层和合作方式同时运行时。'), TABLE(['阶段', '要回答的问题', '可能的动作'], [['申请', '对的达人有没有申请对的产品？', '调整资格、产品表达或定向筛选'], ['批准', '团队有没有一致审核？', '按 SKU 和达人角色建立规则'], ['发货', '批准后是否及时出库？', '明确仓库责任和库存可见性'], ['签收', '达人是否收到正确产品？', '先解决物流，再做内容提醒'], ['发布', '是否发布合格且挂链的内容？', '改善 brief、跟进或达人选择'], ['互动', '用户是否观看、点击、评论或提出有效问题？', '识别值得继续测试的 hook 和顾虑'], ['成交', '内容是否带来订单，售后表现如何？', '继续看商品页、退货、毛利和 offer'], ['复合作', '这个达人是否值得测试下一款？', '建立关系计划，而不是重新找人']])] },
      { id: '官方节点', h: '先遵守平台节点，再增加自己的运营检查', body: [P('TikTok Shop Seller University 说明，卖家可以在 Affiliate Center 管理 Free Sample 和 Refundable Sample。2025 年 11 月 21 日更新的官方指南列出的节点包括：免费样品申请在 7 天内审核，批准后 7 天内发货，达人通常有 14 天发布窗口。不同样品类型和后续更新应以后台当前规则为准。'), P('平台状态还不够。WEM 还会记录物流异常、达人问题、brief 发送、内容角度、挂链状态、受众反馈和跟进结果，并把日期作为事件保存，方便定位时间到底耗在哪里。'), UL(['审批日期与原因', '发货、承运商和签收状态', '产品信息和 brief 是否发送', '达人问题和支持记录', '发布日期、链接、商品和内容格式', '内容复盘、商业信号和下一步动作'])] },
      { id: '按cohort看', h: '按 cohort、SKU 和达人类型看 ROI', body: [P('平均数很容易误导。需要明显演示的美妆产品，不能和简单配件使用同一套内容预期；第一次合作的达人，也不应该直接和长期复合作达人混在一起；货值低但运费高的产品，经济账也完全不同。'), P('WEM 会按审批周、SKU、达人角色、合作类型和来源分 cohort。这样才能回答：哪个产品最适合达人内容、哪类达人发布稳定、哪种 brief 最少产生误解、哪一组值得继续投入。'), TABLE(['拆分方式', '可以看出什么'], [['审批周', '流程或跟进方式变化以后有没有改善'], ['SKU', '哪些产品适合寄样并支持经济账'], ['达人角色', '谁更适合演示、直播、触达或成交'], ['Open 与 Target', '自然申请和定向匹配的差异'], ['首次与复合作', '关系积累是否改善速度、质量和稳定性']])] },
      { id: '价值不能乱估', h: '寄样价值不只 GMV，但不能乱估', body: [P('归因订单很重要，但寄样还可能产生产品反馈、用户语言、自然内容和长期达人关系。品牌不能把这些结果随便换算成一个虚构金额，而应该分开记录为证据。'), UL(['可获得的 GMV、订单、退款和贡献毛利', '符合品牌与平台要求的已发布内容', '可以改善商品页和 FAQ 的重复问题', '下一轮 brief 可以复用的 hook、场景和顾虑回答', '值得继续合作、直播或讨论固定费用的达人', '经过权利审核后可能进入授权或付费放大的内容']), P('WEM 不会声称每个样品都应该马上出单，也不会给每条视频编一个“媒体价值”。判断标准是：这次投入是否产生了足够证据，支持下一步继续、调整或停止。')] },
      { id: 'wem怎么做', h: 'WEM 怎么管理寄样 ROI？', body: [P('WEM 会把寄样追踪和前后的达人、商品、店铺决策连起来。批准前看达人匹配、内容质量、产品优先级、库存和经济账；批准后协调状态、物流、达人支持、内容跟进和结果复盘。'), UL(['为重点 SKU 建立审批规则', '投入库存前先审核达人匹配', '从申请到发布保留一条完整状态记录', '提供简洁、具体的产品信息', '把物流问题和达人跟进问题分开', '同时看内容质量和商业信号', '把达人问题反馈给商品页和下一轮 brief', '决定复合作、暂停、换产品、谈授权或进入付费评估']), P('当寄样量已经超过表格能管理的范围、审批与发货属于不同团队、达人跟进不一致，或者品牌无法解释哪一批样品值得继续时，就适合让 WEM 介入。'), CTA('查看 WEM 的项目与能力 →', '/showcase.html'), CTA('和 WEM 讨论寄样与 ROI →')] },
      { id: '看板', h: '寄样 ROI 看板应该展示什么？', body: [P('看板的目的，是让运营人员马上知道下一步做什么。它应该能从总数继续下钻到具体 SKU、达人、cohort、物流和内容。'), TABLE(['看板区域', '最低限度字段'], [['Pipeline', '申请、批准、拒绝、发货、签收、发布和逾期'], ['经济账', 'COGS、履约、达人费用、使用权、佣金和退款'], ['内容', '链接、格式、hook、商品、达人、发布日期和审核状态'], ['商业结果', '点击、订单、GMV、退款和可获得的毛利信号'], ['学习', '重复问题、顾虑、有效证明和商品页修改'], ['下一步', '复合作、跟进、换产品、暂停、授权、直播或付费评估']])] },
    ],
    faqs: [
      { q: 'TikTok Shop 寄样后多少达人发视频才算正常？', a: '没有适用于所有品类、产品、达人和样品类型的统一比例。品牌应该按 cohort 比较，并检查审批质量、物流、跟进和内容要求，不要使用没有来源的行业数字。' },
      { q: 'TikTok Shop 达人收到样品后多久要发视频？', a: 'TikTok Shop Seller University 在 2025 年 11 月 21 日更新的寄样指南中列出 14 天发布窗口。品牌仍应在 Affiliate Center 核对当前状态和适用的样品类型。' },
      { q: '免费寄样以后，品牌可以直接拿达人视频投广告吗？', a: '不一定。寄样、affiliate 佣金、内容所有权和广告使用权是不同问题。品牌在用于广告或其他渠道前，应确认适用协议并获得必要授权。' },
      { q: 'TikTok Shop 寄样应该追踪哪些数据？', a: '至少追踪申请、审批、发货、签收、发布、内容质量、挂链、点击、订单、退款、成本、达人问题和下一步合作决定，并按 SKU、cohort、达人角色和 collaboration 拆分。' },
      { q: 'WEM 可以帮品牌管理 TikTok Shop 寄样吗？', a: '可以。WEM 会管理达人筛选、寄样审批逻辑、物流跟进、达人沟通、内容追踪、产品反馈、cohort 复盘和下一步动作，并把它放进完整的 TikTok Shop 运营系统。' },
    ],
    related: [{ label: 'TikTok Shop 达人联盟管理', href: 'tiktok-shop-creator-affiliate-management.html' }, { label: 'TikTok Shop 寄样策略', href: 'tiktok-shop-sample-seeding-strategy.html' }, { label: 'TikTok Shop 达人 Brief 模板', href: 'tiktok-shop-creator-brief-template.html' }],
  }
};

function App() {
  const [lang, setLang] = useState(() => { const urlLang = new URLSearchParams(window.location.search).get('lang'); if (urlLang === 'zh' || urlLang === 'en') return urlLang; return localStorage.getItem('we-lang') || 'en'; });
  const post = POSTS[lang];
  useEffect(() => { localStorage.setItem('we-lang', lang); document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en'; document.title = `${post.meta.title} | WE Marketing`; }, [lang, post]);
  useEffect(() => { if (window.lucide) window.lucide.createIcons(); });
  return <div data-screen-label="WE Blog · Sample ROI"><CursorStars /><NavBar lang={lang} onLang={setLang} basePath="../" /><BlogPost {...post} labels={LABELS[lang]} /><CtaFooter lang={lang} /><Footer lang={lang} basePath="../" /></div>;
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
