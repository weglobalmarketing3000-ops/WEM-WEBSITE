const { useState, useEffect } = React;

const P = (text) => ({ kind: 'p', text });
const UL = (items) => ({ kind: 'list', items });
const CTA = (label) => ({ kind: 'cta', label, href: 'https://zus03h0enw04.sg.larksuite.com/scheduler/03970278dd9a7925' });
const A = ({ href, children }) => <a href={href} target="_blank" rel="noopener" style={{ color: '#FF1493', textDecoration: 'underline', textUnderlineOffset: 3 }}>{children}</a>;

const LABELS = {
  en: { back: 'Blog', toc: 'On this page', faq: 'Related Q&A', related: 'Related guides' },
  zh: { back: '博客', toc: '本文目录', faq: '相关 Q&A', related: '相关文章' },
};

const POSTS = {
  en: {
    meta: {
      title: 'TikTok Shop US Logistics: Why Fulfillment Is Now Part of Your Growth Strategy',
      cat: 'TIKTOK SHOP U.S. · LOGISTICS',
      author: 'WE Marketing Team',
      date: 'Jul 13, 2026',
      read: '10 min read',
      heroImage: 'hero-tiktok-shop-us-logistics-fulfillment-strategy.png',
      heroAlt: 'TikTok Shop US fulfillment graphic with shipping boxes, delivery icons, and phone order tracking',
    },
    sections: [
      {
        id: 'intro',
        h: 'TikTok Shop growth does not stop at content',
        body: [
          P('TikTok Shop growth often starts with content. A creator posts a clear product demo. A shopper sees the product in use, trusts the moment, and checks out while the idea is still fresh. For many brands, that is exactly what they want from TikTok Shop: fast discovery, fast demand, and a path from attention to purchase.'),
          P('But TikTok Shop US growth does not stop at content. Once orders arrive, the brand still has to ship accurately, keep tracking visible, protect delivery expectations, and make sure the warehouse can keep up with creator-driven spikes.'),
          P(<>That is why TikTok Shop's Seller Blog article <A href="https://seller.tiktok.com/blog/turning-discovery-into-delivery/10025162/">Turning Discovery into Delivery</A> matters for U.S. sellers and cross-border brands. The article outlines several logistics options for U.S. sellers, including Seller Shipping, TikTok Shipping, Collection by TikTok (CBT), and Fulfilled by TikTok (FBT). It also highlights a ShipStation integration that helps sellers manage TikTok Shop deliveries inside an existing shipping workflow.</>),
          P('The business takeaway is simple: TikTok Shop fulfillment is no longer a back-office detail. For brands, it is part of the growth strategy.'),
        ],
      },
      {
        id: 'quick-answer',
        h: 'Quick answer: What are the main TikTok Shop US logistics options?',
        body: [
          P('TikTok Shop US sellers can generally think about four fulfillment paths:'),
          UL([
            'Seller Shipping: The seller manages inventory, packing, carrier selection, and shipping workflow.',
            'TikTok Shipping: The seller ships from their own warehouse while using platform-supported shipping options and rates.',
            'Collection by TikTok (CBT): An option under TikTok Shipping for eligible sellers, where TikTok Shop can arrange parcel pickup from the seller facility in supported areas.',
            'Fulfilled by TikTok (FBT): A more managed fulfillment model where inventory is stored, packed, and shipped through TikTok fulfillment centers.',
          ]),
          P('The right choice depends on the seller product type, warehouse setup, order volume, margin, campaign calendar, and operational maturity. A brand may use one model for some SKUs and another model for different products.'),
        ],
      },
      {
        id: 'customer-experience',
        h: 'Fulfillment is part of the customer experience',
        body: [
          P('On a traditional ecommerce site, shoppers may search, compare, read reviews, and come back later. On TikTok Shop, the purchase journey can be much faster. A shopper may discover a product through a short video or live session and buy within minutes.'),
          P('That speed is powerful, but it also makes operational weaknesses visible. If a creator video drives sudden demand and the warehouse is not ready, the brand can run into delayed dispatch, missing scans, customer messages, cancellations, and weak post-purchase confidence. The content did its job, but the operating system did not.'),
          UL([
            'Creator seeding schedules.',
            'Affiliate commission pushes.',
            'Hero SKU selection.',
            'Inventory depth.',
            'Campaign timing.',
            'Product-page promises.',
            'Customer support coverage.',
            'Warehouse staffing and packing rhythm.',
          ]),
          P('When these pieces are disconnected, brands either underuse their best content moments or create demand they cannot serve well.'),
        ],
      },
      {
        id: 'shipping-options',
        h: 'Seller Shipping, TikTok Shipping, CBT, and FBT: how brands should think about the choice',
        body: [
          P('Seller Shipping gives sellers the most control. It can make sense for brands with existing carrier contracts, special packaging requirements, fragile products, oversized products, or warehouse workflows that are already mature.'),
          P('TikTok Shipping can fit sellers that still ship from their own warehouse but want access to platform-supported shipping options. For sellers that are eligible, Collection by TikTok can add pickup support and more platform-connected scan visibility.'),
          P('FBT can make sense when a brand wants to reduce internal warehouse work and move more fulfillment into a managed process. It may be especially relevant for standardized SKUs, repeatable packaging, and products with enough sales velocity to justify moving inventory into a fulfillment center.'),
          P('There is no single best answer for every TikTok Shop seller. The better question is: which fulfillment path best matches this SKU, this campaign, this margin, and this warehouse reality?'),
        ],
      },
      {
        id: 'cbt',
        h: 'Why Collection by TikTok matters for sellers with a US warehouse',
        body: [
          P('Collection by TikTok is important because many TikTok Shop sellers already have goods in a U.S. warehouse or 3PL, but their shipping process is still too manual for creator-commerce speed.'),
          P('According to TikTok Seller Blog and TikTok Shipping materials, CBT is available to eligible sellers in supported areas and can include door-to-door pickup, discounted shipping rates, and pickup scans. TikTok says sellers can save up to 30% on logistics costs compared with standard shipping rates, and immediate scans can help improve tracking visibility.'),
          P('For operators, the value is not only lower postage. It is coordination. When a warehouse team has to manually batch orders, print labels, hand packages to carriers, chase tracking events, and answer support questions, every strong content moment becomes a fulfillment test.'),
          UL([
            'Whether the warehouse address is eligible.',
            'Whether contact information and pickup timing are stable.',
            'Whether product weights and dimensions are accurate.',
            'Whether packing standards can handle repeat order spikes.',
            'Whether TikTok Shop orders can be prioritized during campaigns.',
            'Whether customer support understands the tracking flow.',
          ]),
          P('Eligibility and exact service details should always be confirmed inside TikTok Seller Center or official TikTok Shop materials.'),
        ],
      },
      {
        id: 'shipstation',
        h: 'ShipStation shows where TikTok Shop operations are going',
        body: [
          P('The ShipStation integration is a useful signal for brands that already sell across multiple channels. TikTok Shop should not live forever as a separate manual workflow. As it becomes a meaningful revenue channel, it needs to connect with the seller order, inventory, warehouse, and customer support systems.'),
          UL([
            'Which TikTok Shop orders should stay inside the existing warehouse tool?',
            'Which SKUs should move into FBT?',
            'Which orders should use TikTok Shipping or CBT?',
            'How will order status sync with inventory and support?',
            'Who reviews fulfillment performance after creator campaigns?',
          ]),
          P('These questions are not just logistics questions. They affect TikTok Shop affiliate marketing, live selling, customer experience, and the brand ability to keep scaling.'),
        ],
      },
      {
        id: 'content-and-logistics',
        h: 'Content strategy and logistics strategy should be built together',
        body: [
          P('Many TikTok Shop plans start with creator volume: how many samples to send, how many affiliates to recruit, how many videos to generate, and what commission rate to offer. That matters, but it is incomplete.'),
          UL([
            'Which hero SKUs can handle a sudden order spike?',
            'Which products are easy for creators to demonstrate and easy for the warehouse to ship?',
            'Which bundles improve average order value without increasing packing errors?',
            'Which offers can be fulfilled quickly enough to protect the shopper experience?',
            'Which campaign dates need extra inventory and warehouse staffing?',
            'Which products should not be pushed heavily until fulfillment is stable?',
          ]),
          P('The best TikTok Shop operators do not separate marketing from operations. They choose products, creator briefs, offers, inventory depth, and shipping workflows as one system.'),
        ],
      },
      {
        id: 'china-brands',
        h: 'For Chinese brands and factories, fulfillment is part of US market localization',
        body: [
          P('Chinese manufacturers and brand owners often bring real advantages to TikTok Shop US: fast sampling, cost control, stable production, flexible packaging, small-batch testing, product iteration, continuous new product development, and the ability to move from idea to inventory quickly.'),
          P('Those advantages matter. They can help a brand respond faster than competitors when the U.S. market shows demand.'),
          P('But U.S. TikTok Shop execution is not only translation or application paperwork. China domestic ecommerce playbooks do not automatically fit U.S. creator behavior, shopper trust signals, fulfillment expectations, product-page language, or weekly decision rhythm.'),
          P('This is where a bilingual U.S.-based operating team matters. A China-based factory may be able to produce and adjust quickly, while a U.S. operating partner can connect that supply strength to local creator seeding, product-page localization, affiliate setup, sample tracking, fulfillment decisions, and weekly content-sales review.'),
          UL([
            'Choose demo-friendly hero SKUs.',
            'Localize the product page and offer for U.S. shoppers.',
            'Seed creators with clear briefs and sample discipline.',
            'Test UGC hooks before overinvesting in one message.',
            'Tune affiliate terms based on creator quality and margin.',
            'Review sample, content, fulfillment, and sales data every week.',
            'Move inventory and logistics decisions based on actual traction.',
          ]),
          P('For Chinese factories, the point is not to weaken their supply-chain advantage. The point is to make sure that advantage shows up correctly in the U.S. market.'),
        ],
      },
      {
        id: 'checklist',
        h: 'A TikTok Shop fulfillment checklist before scaling creator traffic',
        body: [
          UL([
            'SKU readiness: Can this product be demonstrated clearly, shipped reliably, and restocked quickly?',
            'Inventory depth: How many orders can the brand absorb if multiple creator videos perform at once?',
            'Shipping path: Should this SKU use Seller Shipping, TikTok Shipping, CBT, FBT, or a mixed model?',
            'Warehouse workflow: Can the team identify TikTok Shop orders, print the right labels, pack accurately, and meet dispatch expectations?',
            'Tracking visibility: Will customers and the platform see timely scan events?',
            'Support readiness: Who handles late scans, damaged packages, returns, and creator-driven customer questions?',
            'Weekly review: Are content, affiliate, inventory, fulfillment, and customer issues reviewed together?',
          ]),
          P('If a brand cannot answer these questions, it may still be able to sell. But it is not ready to scale with confidence.'),
          CTA('Book a TikTok Shop operations call →'),
        ],
      },
      {
        id: 'sources',
        h: 'Sources and notes',
        body: [
          P(<>This article uses TikTok Seller Blog and official TikTok Shop Academy materials as source signals, then translates them into a practical WE Marketing operating framework for TikTok Shop US brands, sellers, and cross-border teams. Sources checked include <A href="https://seller.tiktok.com/blog/turning-discovery-into-delivery/10025162/">Turning Discovery into Delivery</A>, <A href="https://seller-us.tiktok.com/university/essay?knowledge_id=1830506744514347&lang=en">TikTok Shipping Overview</A>, <A href="https://seller-us.tiktok.com/university/essay?knowledge_id=4455924967638798&lang=en">How to Upgrade to TikTok Shipping</A>, <A href="https://seller-us.tiktok.com/university/essay?knowledge_id=6734735776089869&lang=en">TikTok Shop US Logistics Services Overview</A>, and <A href="https://help.shipstation.com/hc/en-us/articles/50577851406875-TikTok-Shipping">ShipStation TikTok Shipping</A>.</>),
        ],
      },
    ],
    faqs: [
      { q: 'Which TikTok Shop US shipping option should a brand choose before scaling creator traffic?', a: 'There is no single best shipping option for every TikTok Shop US seller. Seller Shipping may fit brands that need control over packaging or carrier relationships. TikTok Shipping and CBT may fit sellers with their own warehouse who want a more platform-connected workflow. FBT may fit standardized SKUs that benefit from managed fulfillment.' },
      { q: 'What is Collection by TikTok, and why does it matter for sellers with a US warehouse?', a: 'Collection by TikTok is an option under TikTok Shipping for eligible sellers in supported areas. It can allow TikTok Shop to arrange package pickup from a seller facility and improve tracking visibility through pickup scans. Sellers should confirm eligibility and operational details in TikTok Seller Center.' },
      { q: 'Is Fulfilled by TikTok the same as TikTok Shipping for US sellers?', a: 'No. TikTok Shipping supports sellers that still ship from their own warehouse while using platform-supported shipping options. Fulfilled by TikTok, or FBT, is a more managed fulfillment model where inventory is stored, packed, and shipped through TikTok fulfillment centers.' },
      { q: 'Why does fulfillment matter when TikTok Shop affiliate videos start driving orders?', a: 'TikTok Shop affiliate videos and live sessions can create sudden demand. If inventory, packing, labels, scans, and customer support are not ready, a strong content moment can become delayed dispatch, customer complaints, or missed repeat purchases.' },
      { q: 'How should Chinese brands and factories prepare fulfillment for TikTok Shop US?', a: 'Chinese brands should connect production advantages with U.S. market execution: choose demo-friendly SKUs, prepare U.S. inventory or 3PL workflows, localize product pages, set clear affiliate and sample rules, and review content, fulfillment, and sales data weekly.' },
    ],
    related: [
      { label: 'TikTok Shop Affiliate Marketing for Brands: A Better Operating Playbook', href: 'tiktok-shop-affiliate-marketing-for-brands' },
      { label: 'TikTok Shop US New Seller Growth Strategy', href: 'tiktok-shop-us-new-seller-growth-strategy' },
      { label: 'TikTok Shop Trust Signals: Why Customer Service Starts Before the Order', href: 'tiktok-shop-us-trust-signals' },
    ],
  },
  zh: {
    meta: {
      title: 'TikTok Shop 美国物流：为什么履约已经成为增长策略的一部分',
      cat: 'TIKTOK SHOP 美国 · 物流履约',
      author: 'WE Marketing Team',
      date: '2026 年 7 月 13 日',
      read: '10 分钟阅读',
      heroImage: 'hero-tiktok-shop-us-logistics-fulfillment-strategy.png',
      heroAlt: 'TikTok Shop 美国履约封面图，包含物流纸箱、配送图标和手机订单追踪画面',
    },
    sections: [
      { id: '开头', h: 'TikTok Shop 美国增长不能只看内容', body: [P('很多品牌做 TikTok Shop 美国市场时，第一反应是先想内容：找达人、寄样品、做短视频、开直播、提高佣金。这个方向没有错。TikTok Shop 的增长确实经常从内容开始。'), P('但真正决定一个店铺能不能稳住增长的，往往是内容之后的那一步：订单来了以后，能不能及时发出、能不能被平台和消费者清楚追踪、能不能在销量突然起来时不把店铺运营指标拖坏。'), P('TikTok Seller Blog 发布的 Turning Discovery into Delivery，表面看是在介绍美国卖家的几种物流方案：Seller Shipping、TikTok Shipping、Fulfilled by TikTok（FBT），以及 TikTok Shipping 下面的 Collection by TikTok（CBT）。同时，文章也提到 TikTok Shop 与 ShipStation 的集成，让卖家可以在更熟悉的多渠道发货工具里处理 TikTok Shop 订单。'), P('但对品牌来说，这篇文章真正释放的信号是：TikTok Shop 美国运营，已经不能只靠内容拉动。内容、库存、仓库、物流、客服、达人节奏，需要放在同一个运营系统里看。')] },
      { id: '快速回答', h: '快速回答：TikTok Shop 美国卖家有哪些物流选择？', body: [P('TikTok Shop 美国卖家可以重点理解四种履约路径：'), UL(['Seller Shipping：卖家自己管理库存、打包、承运商和发货流程。','TikTok Shipping：卖家仍然从自己的仓库发货，但使用平台支持的物流方案和运费条件。','Collection by TikTok（CBT）：TikTok Shipping 下的一个选项，符合条件的卖家可以在支持地区使用上门取件等服务。','Fulfilled by TikTok（FBT）：更偏平台托管的履约方式，库存进入 TikTok 履约中心，由平台完成存储、打包和发货。']), P('哪一种更适合，要看产品属性、仓库能力、订单量、毛利、活动节奏和运营成熟度。一个品牌也不一定只能选一种方式，很多时候应该按 SKU 和活动阶段做组合。')] },
      { id: '为什么影响增长', h: '为什么物流会影响 TikTok Shop 的增长', body: [P('在传统电商里，消费者可能会先搜索、比价、看评论，再慢慢下单。TikTok Shop 的购买路径更短。一个达人把产品讲清楚，用户相信这个场景，就可能直接下单。'), P('这种速度很有价值，但也会放大发货问题。如果一个视频突然带来订单，而仓库没有准备好，品牌可能马上遇到延迟发货、物流扫描不及时、客服消息变多、订单取消、差评风险上升等问题。内容是成功的，但后端运营没有接住。'), UL(['达人寄样节奏。','TikTok Shop 联盟营销佣金和推广节点。','主推 SKU 的选择。','库存深度。','活动时间表。','商品页承诺。','客服排班。','仓库打包和出库节奏。']), P('如果这些环节彼此脱节，品牌很容易出现两种情况：要么内容做起来了但发货跟不上，要么为了避免风险而不敢放大已经有效的内容。')] },
      { id: '怎么选', h: 'Seller Shipping、TikTok Shipping、CBT、FBT 应该怎么选？', body: [P('Seller Shipping 更适合有特殊发货需求、已经有稳定承运商合同，或者需要更高自主控制的卖家。比如易碎、体积大、包装复杂、定制化强的产品，可能需要品牌自己掌握更多发货细节。'), P('TikTok Shipping 适合有自有仓库或合作仓库，但希望使用平台支持物流方案的卖家。对符合条件的卖家来说，CBT 可以进一步把平台订单、取件和扫描流程连接得更紧。'), P('FBT 更适合希望减少内部仓库操作压力的卖家。对于标准化程度高、包装稳定、有一定销售速度的 SKU，把库存放进履约中心，可能会让运营更轻。'), P('这几种方式没有绝对好坏。更好的问题是：这个 SKU、这场活动、这个毛利、这个仓库能力，最适合哪一种履约路径？')] },
      { id: 'cbt', h: 'CBT 对有美国仓的卖家为什么重要', body: [P('Collection by TikTok（CBT）值得特别关注，因为它对应的是一类很常见的卖家：货在自己的美国仓或合作仓里，但希望发货流程更贴近 TikTok Shop 平台。'), P('根据 TikTok Seller Blog 和 TikTok Shipping 相关说明，CBT 面向符合条件地区的卖家，可以提供上门取件、折扣运费以及取件时的现场扫描。TikTok 官方资料提到，卖家使用 CBT 最高可节省 30% 的物流成本；现场扫描也有助于提升追踪可见度，降低 Late Dispatch Rate 相关压力。'), P('对运营团队来说，重点不只是省运费，而是减少协调成本。当仓库每天要手动分拣 TikTok Shop 订单、打印面单、交接包裹、追踪扫描、回复物流咨询时，一场达人内容带来的订单增长，就会变成一次仓库压力测试。'), UL(['仓库地址是否符合条件。','仓库联系人、电话、取件时间是否稳定。','商品重量和尺寸是否准确。','包材和打包 SOP 是否能支撑重复出单。','活动期间 TikTok Shop 订单能不能被优先识别。','客服是否知道不同物流状态代表什么。']), P('具体资格和服务细节，应该以 TikTok Seller Center 和官方 TikTok Shop 材料为准。')] },
      { id: 'shipstation', h: 'ShipStation 集成说明 TikTok Shop 运营正在走向系统化', body: [P('TikTok Seller Blog 还提到与 ShipStation 的合作。对很多美国多渠道卖家来说，ShipStation 是熟悉的发货和订单管理工具。这个信号很重要：TikTok Shop 不应该长期作为一个手工处理的边缘渠道存在。'), P('只要品牌认真把 TikTok Shop 当作销售渠道，就必须把它放进现有的订单、库存、仓库和客服流程里。'), UL(['哪些 TikTok Shop 订单可以继续走现有仓库工具？','哪些 SKU 适合进入 FBT？','哪些订单适合 TikTok Shipping 或 CBT？','TikTok Shop 的订单状态如何同步到库存、客服和复盘表？','达人活动结束后，谁来复盘发货表现？']), P('这些不是单纯的物流问题。它们会影响 TikTok Shop 达人营销、直播转化、客户体验，以及品牌能不能继续放大。')] },
      { id: '内容和物流', h: '内容策略和物流策略要一起做', body: [P('很多 TikTok Shop 运营计划只看达人数量：寄多少样品、招多少达人、产出多少条视频、佣金给多少。这些当然重要，但还不够。'), UL(['哪些主推 SKU 既适合达人展示，也适合稳定发货？','哪些产品可以承接突然增加的订单？','哪些套装能提高客单价，同时不会增加打包错误？','哪些优惠承诺不会拖累仓库？','哪些活动节点需要提前补货和加人手？','哪些产品暂时不适合大规模推达人？']), P('优秀的 TikTok Shop 美国运营，不会把“营销”和“履约”拆开看。它会把选品、达人 brief、优惠、库存、仓库和物流放在一起设计。')] },
      { id: '中国品牌', h: '对中国品牌和工厂来说，物流也是美国市场本地化的一部分', body: [P('中国工厂和品牌做 TikTok Shop 美国市场，其实有很强的底层优势：打样快、成本控制强、产能稳定、包装调整灵活、小批量测试能力强、产品迭代快、新品开发连续，能够从一个想法快速推进到库存。'), P('这些优势是真实的，也是很多美国本土小品牌很难复制的。'), P('但美国 TikTok Shop 的执行，不只是把资料翻译好、把店铺申请提交上去。中国国内电商的打法，不能直接套到美国市场。美国达人的沟通方式、消费者信任信号、商品页语言、物流预期、退货习惯、每周复盘节奏，都不一样。'), P('这也是为什么一个在美国本地、有中文沟通能力的运营团队很重要。中国工厂可以负责快速生产和调整，美国本地团队则要把供应链能力连接到本地达人、商品页、联盟设置、样品追踪、物流方案和每周销售复盘。'), UL(['先选适合展示、容易被达人讲清楚的主推 SKU。','把商品页、卖点和优惠本地化，让美国消费者能直接理解。','有节奏地寄样给达人，而不是无目标撒样。','先测试 UGC 钩子，再决定放大哪类内容。','根据毛利和达人质量调整联盟佣金。','每周同时看样品、内容、履约和销售数据。','根据真实反馈调整库存和物流方案。']), P('对中国工厂来说，重点不是否定供应链优势，而是让这些优势用美国市场能接受的方式体现出来。')] },
      { id: '检查清单', h: '放大 TikTok Shop 达人流量之前，先做这份履约检查', body: [UL(['SKU 是否适合放大：产品是否容易展示、容易打包、容易补货？','库存是否足够：如果两三个达人视频同时跑起来，店铺能承接多少订单？','物流路径是否清楚：这个 SKU 应该走 Seller Shipping、TikTok Shipping、CBT、FBT，还是组合方式？','仓库 SOP 是否稳定：团队能不能识别 TikTok Shop 订单、打印正确面单、准确打包、按时出库？','物流扫描是否及时：平台和消费者能不能看到清楚的追踪节点？','客服是否准备好：谁处理物流咨询、延迟扫描、破损、退货和达人内容带来的用户预期？','是否每周复盘：内容表现、达人表现、库存、发货和客服问题，是不是放在同一张表里看？']), P('如果这些问题还没有答案，品牌可以先卖，但不适合盲目放大。'), CTA('预约 TikTok Shop 运营沟通 →')] },
      { id: '来源', h: '来源和说明', body: [P('本文参考 TikTok Seller Blog、TikTok Shop Academy 和 ShipStation 公开资料，并结合 WEM 对 TikTok Shop 美国运营、达人流量、仓库履约和跨境品牌执行的经验做成业务解读。平台功能、资格和费用会变化，具体操作应以 TikTok Seller Center 与官方最新材料为准。')] },
    ],
    faqs: [
      { q: '品牌在放大达人流量前，应该选择哪种 TikTok Shop 美国物流方式？', a: '没有一种物流方式适合所有 TikTok Shop 美国卖家。Seller Shipping 更适合需要控制包装、承运商和仓库流程的品牌。TikTok Shipping 和 CBT 更适合有美国仓、但希望使用平台支持物流流程的卖家。FBT 更适合标准化程度高、希望减少内部仓库操作压力的 SKU。' },
      { q: 'TikTok Shop CBT 是什么？为什么适合有美国仓的卖家重点关注？', a: 'CBT 是 Collection by TikTok，属于 TikTok Shipping 下的一个选项。对符合条件、位于支持地区的卖家来说，CBT 可以提供平台安排的包裹取件，并通过取件扫描提升物流追踪可见度。' },
      { q: '对美国卖家来说，FBT 和 TikTok Shipping 是一回事吗？', a: '不是。TikTok Shipping 通常指卖家仍然从自己的仓库发货，但使用平台支持的物流方式。FBT，也就是 Fulfilled by TikTok，则是更偏平台托管的履约模式。' },
      { q: '为什么 TikTok Shop 达人视频开始出单后，物流能力会影响增长？', a: '达人视频和联盟营销可能在短时间内带来订单。如果库存、打包、面单、扫描和客服没有准备好，内容爆发反而可能带来延迟发货、客户投诉和复购损失。' },
      { q: '中国品牌做 TikTok Shop 美国市场，物流应该怎么准备？', a: '中国品牌和工厂要把供应链优势和美国本地运营连接起来，包括选择适合展示的主推 SKU，规划美国仓或 3PL，做好商品页本地化，设置清楚的达人寄样和联盟规则，并每周复盘内容、履约和销售数据。' },
    ],
    related: [
      { label: 'TikTok Shop 达人分销为什么经常跑不顺', href: 'tiktok-shop-affiliate-marketing-for-brands.html?lang=zh' },
      { label: 'TikTok Shop 美区新卖家增长打法', href: 'tiktok-shop-us-new-seller-growth-strategy.html?lang=zh' },
      { label: 'TikTok Shop 美区的信任感，为什么不是客服部门一个人的事', href: 'tiktok-shop-us-trust-signals.html?lang=zh' },
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
      ? 'TikTok Shop 美国物流：为什么履约已经成为增长策略的一部分 | WE Marketing'
      : 'TikTok Shop US Logistics: Why Fulfillment Is Now Part of Growth Strategy | WE Marketing';
  }, [lang]);
  return <><CursorStars /><NavBar lang={lang} onLang={setLang} basePath="../" /><BlogPost {...POSTS[lang]} labels={LABELS[lang]} /><CtaFooter lang={lang} /><Footer lang={lang} basePath="../" /></>;
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
