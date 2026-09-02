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

const POSTS = {
  en: {
    meta: {
      title: 'TikTok Shop Product Card Strategy: How U.S. Brands Turn Creator Demand Into Conversion',
      cat: 'TIKTOK SHOP U.S. · PRODUCT CARD STRATEGY', author: 'WE Marketing Team', date: 'Jul 20, 2026', read: '12 min read',
      heroImage: 'hero-tiktok-shop-product-card-strategy-v2.png',
      heroAlt: 'Product-card commerce illustration with a creator video, offer ticket, product page, shopping bag, price tags, and fulfillment box',
    },
    sections: [
      {
        id: 'direct-answer', eyebrow: 'PRODUCT-CARD STRATEGY',
        h: 'Product-card traffic is not a discount strategy',
        body: [
          CALLOUT('A TikTok Shop product card earns more useful traffic when the product, visible price, shipping, promotion, and creator promise make sense together. Lowering the displayed price without protecting margin or clarifying the offer may create clicks, but it does not create a dependable growth system.'),
          P('TikTok Shop Academy’s current U.S. guidance names competitive pricing, a deliberate promotion mix, and participation in platform campaigns as practical ways to improve product-card visibility. That is the platform layer. The operator layer is deciding which product can carry the offer, which promotion has one clear job, and whether the product card can convert the demand that creators, LIVEs, or ads create.'),
          P('For a brand, the product card is where a shopper checks whether the content promise is real. They compare the item, price, shipping, delivery expectation, reviews, offer, and perceived risk in one decision. A strong creator video can start the consideration. It cannot make an unclear product card feel easy to buy.'),
          INFO('tiktok-shop-product-card-offer-system.svg', 'WEM product card offer system linking creator demand, margin check, product promotion, cart incentive, coupon, and conversion review', 'WEM framework: creator demand brings a shopper to the card. Product economics and a clear offer decide whether the card can finish the job.'),
          UL([
            'Choose one or a small number of hero SKUs before building a promotion calendar.',
            'Model landed margin before a creator push, ad test, or platform campaign adds demand.',
            'Treat item price and shipping as one shopper-facing price decision.',
            'Give each promotion layer a defined job instead of stacking discounts by habit.',
            'Use customer questions, returns, and creator feedback to improve the card each week.',
          ]),
          P('This article uses TikTok Shop Academy’s April 1, 2026 U.S. guidance on product-card traffic as the source for current promotion mechanics. WEM’s operating framework connects those mechanics to cold start, creator content, and shop conversion. It is not a guarantee of visibility, sales, or campaign eligibility.'),
        ],
      },
      {
        id: 'hero-sku', eyebrow: 'HERO SKU', h: 'Start with a product that can carry the traffic',
        body: [
          P('The first correction is usually product selection, not discount depth. When a new shop gives equal attention to every SKU, creators receive vague briefs, the promotion menu fills with competing offers, and the team cannot tell which product page actually deserves more traffic. A cold start needs a hero SKU: a product with a clear demonstration, a readable use case, stable inventory, and enough economics to support sampling, content, and a customer incentive when appropriate.'),
          P('Before activation, write the full landed-margin model. TikTok Shop Academy describes disposable profit as selling price less product cost, total logistics cost, platform commission, and loss or damage. Its current ad guidance uses a 45% to 60% disposable-profit margin as a reference point and says sustained campaigns that perform well typically have a 10% to 30% ad-spend ratio. Those figures are planning references, not an instruction to spend or a promise that a product will work.'),
          TABLE(['Decision', 'What to verify before traffic', 'Why it protects conversion'], [
            ['Hero SKU', 'Clear problem, proof, inventory, reviews, and a workable landed margin', 'The team can concentrate creator briefs, page improvements, and offer learning.'],
            ['Product page', 'Images, variant clarity, core benefit, use case, shipping expectation, and FAQ answers', 'The page finishes the questions that content starts.'],
            ['Offer', 'A defined customer reason to act now, with a stop date or review point', 'The shopper sees a coherent decision, not a pile of discounts.'],
            ['Supply and service', 'Available stock, fulfillment capacity, customer support, and return-risk signal', 'More traffic should not create a worse customer experience.'],
          ]),
          P('This is where WEM is hands-on. We help brands decide what the hero product should prove, build the creator brief around that proof, review the product-card experience, and make sure a launch offer does not undermine the SKU before it has a chance to learn.'),
        ],
      },
      {
        id: 'price-shipping', eyebrow: 'PRICE ARCHITECTURE', h: 'Treat visible price and shipping as one decision',
        body: [
          P('A shopper does not separate the item price from the price they expect to pay. TikTok Shop Academy specifically cautions sellers against a very low listed price paired with high shipping fees. That pattern may create an attractive first impression, but it damages the value proposition at checkout and can reduce trust.'),
          P('The same is true of a misleading price. The Academy warns that inaccurate pricing can affect product, shop-health, or selling privileges. The practical lesson is simple: the product card should make the offer easier to understand, not easier to misunderstand.'),
          CALLOUT('A useful price test is not “Can we display a lower number?” It is “Can a new shopper understand what they receive, what they pay, and why this offer is worth acting on?”'),
          P('For a launch, make the price architecture legible in one screen: the hero SKU, any qualifying quantity or spend threshold, the shipping condition, and the reason for the offer. If a creator is telling a specific product story, the card should preserve that exact story rather than redirecting the shopper into a general sale.'),
        ],
      },
      {
        id: 'offer-stack', eyebrow: 'OFFER STACK', h: 'Build one job at each promotion layer',
        body: [
          P('TikTok Shop’s promotion tools give brands several ways to create an incentive. The better question is not which tool is available. It is which tool solves the customer decision in front of the product card. A product-level price can create a simple entry point. A cart incentive can reward a larger order. A coupon can give a selected audience a final nudge. They should not all do the same job.'),
          TABLE(['Layer', 'TikTok Shop examples', 'The job it should do'], [
            ['1. Product promotion', 'Campaign price, Flash Sale, Product Discount, Early Access', 'Make the individual hero SKU compelling and easy to compare. One product promotion applies at a time.'],
            ['2. Cart promotion', 'Buy More Save More or Gift with Purchase', 'Increase basket value or add perceived value after the product offer makes sense.'],
            ['3. Coupon', 'Seller, promotion, or platform coupon', 'Give an eligible shopper a final, clear reason to complete the order.'],
          ]),
          P('The Academy’s current stacking rules say a cart promotion can stack with the product-promotion layer, and one coupon can then stack with those layers. The minimum spend for a cart promotion is based on the product price after the first layer. Verify the live rules in Seller Center before launch, because platform mechanics can change.'),
          P('For many brands, Gift with Purchase is worth considering when a low headline price would weaken the product’s positioning. A relevant mini size, accessory, or complementary item can create an incentive without teaching the market to wait for the deepest discount. That only works when the gift has a real product connection and fulfillment can handle it.'),
        ],
      },
      {
        id: 'promotion-tools', eyebrow: 'PROMOTION CHOICES', h: 'Use Flash Sale, Product Discount, BMSM, and GWP for different situations',
        body: [
          P('Flash Sale is useful when the team needs urgency around a proven, well-stocked SKU and can protect the product’s floor price. TikTok Shop Academy states that a product with orders in the previous 30 days must use a Flash Sale price no higher than the lowest price paid by any buyer in the prior 30 days, excluding Flash Sale orders. A product with no order history needs a Flash Sale price below its regular retail price.'),
          P('Product Discount is more appropriate when a brand wants a simpler item-level offer without the same urgency mechanics. The Academy says Product Discount can stack with Hero Product Boost, while Flash Sale cannot. It also says Flash Sale does not stack with Seller Discount or Hero Product Boost, but can stack with BMSM. The platform’s Promotion Simulator is the place to check the actual outcome before publishing an offer.'),
          UL([
            'Use Flash Sale when urgency is the point and the price history allows it.',
            'Use Product Discount for a clearer, steadier hero-SKU offer.',
            'Use BMSM when a meaningful cart threshold can improve the unit economics of the order.',
            'Use GWP when a relevant item adds value better than a further price cut.',
            'Use free shipping only when the economics, shipping promise, and customer expectation stay intact.',
          ]),
          P('No promotion tool fixes an unclear product story. If creators need to explain three exceptions, the offer is probably too complicated for a short-form commerce environment.'),
        ],
      },
      {
        id: 'creator-demand', eyebrow: 'CREATOR COMMERCE', h: 'Creators create demand. The product card has to convert it.',
        body: [
          P('A creator’s job is not merely to drive a click. The right creator makes the product understandable to the right customer: what it does, who it is for, what result or experience is realistic, and why the hero SKU is worth considering now. When that content lands, the product card must repeat the essentials without forcing the shopper to reconstruct the promise.'),
          P('This is why WEM treats creator operations and shop conversion as one system. Our active 8,000+ creator and affiliate community helps us recruit for product fit and activate quickly, but recruitment alone is not the service. We can support the brief, sample follow-up, content review, coaching calls, product-page feedback, and weekly learning loop that tells the next group of creators what customers actually needed to see.'),
          P('For a new product launch, that continuity matters. A creator may uncover the angle that earns attention. The shop team needs to check whether product questions, variant confusion, price objections, or shipping friction are stopping the order. Then the next brief and the next card update should answer the evidence, not just repeat the first concept.'),
        ],
      },
      {
        id: 'thirty-day-plan', eyebrow: '30-DAY PLAN', h: 'A 30-day product-card traffic plan',
        body: [
          UL([
            'Week 1: Select one hero SKU. Audit landed margin, visible price, shipping, inventory, product-card clarity, reviews, and the single proof point a creator needs to demonstrate.',
            'Week 2: Build one offer. Choose a product promotion and only add a cart incentive or coupon if it has a separate job. Test it in Promotion Simulator before content goes live.',
            'Week 3: Activate demand. Recruit creators whose audience and format can demonstrate the actual product use case. Review content for claim clarity, product-card alignment, and customer objections.',
            'Week 4: Review the whole path. Compare creator angles, product-card visits, conversion, order value, shipping questions, return reasons, and offer performance. Keep the learning, not every discount.',
          ]),
          P('The first month is not about running every promotion type. It is about proving that one product, one story, one offer, and one fulfillment promise can work together before the brand scales the number of creators or campaigns.'),
        ],
      },
      {
        id: 'wem-role', eyebrow: 'WHY WEM', h: 'Where WEM fits',
        body: [
          P('WE Marketing (WEM) is an official TikTok Shop Partner agency and a full-service management partner for U.S. brands. We are built for the stage where a brand needs more than a large agency deck and more than a standalone creator list: a capable, responsive operating team that can turn a product launch into a connected shop, creator, content, offer, and weekly-review system.'),
          P('Brands tend to get the most value from WEM when they are entering TikTok Shop, launching a new hero SKU, rebuilding an affiliate program, or seeing creator traffic that the product card is not yet converting. We bring creator recruitment and brand-owned community building, content coaching, shop and offer coordination, and direct operator access into one working rhythm.'),
          P('The goal is not to make every product cheaper. It is to make the product-card decision clearer, give creators a story they can demonstrate honestly, and build a launch system that can learn before the brand spends harder.'),
          CTA('Talk through your TikTok Shop product-card strategy with WEM →'),
        ],
      },
      {
        id: 'sources', eyebrow: 'SOURCE NOTES', h: 'Sources and boundaries',
        body: [
          P('Primary source: TikTok Shop Academy, “How to Drive Traffic for Your Product Card,” dated April 1, 2026 and applicable to the United States. The source was reviewed directly on July 20, 2026.'),
          P('Current promotion mechanics, stacking descriptions, pricing cautions, and the stated margin and ad-spend references are attributed to that Academy page. WEM’s hero-SKU process, creator-to-card workflow, offer architecture, and 30-day plan are operating frameworks, not TikTok Shop policy or a performance promise. Sellers should confirm live eligibility, price requirements, and stacking behavior in Seller Center before execution.'),
          CTA('Read the official TikTok Shop Academy source', 'https://seller-us.tiktok.com/university/essay?knowledge_id=3684852088178446'),
        ],
      },
    ],
    faqs: [
      { q: 'What is a TikTok Shop product card?', a: 'A TikTok Shop product card is the commerce page a shopper uses to evaluate an item after discovering it through content, search, a LIVE, or another traffic source. It brings together the product, price, shipping, offer, variants, reviews, and purchase path.' },
      { q: 'How can a brand improve TikTok Shop product-card traffic?', a: 'Start with a hero SKU that has clear product proof, a competitive and truthful price, a clean shipping proposition, an appropriate promotion, reliable inventory, and creator content that matches the product card. TikTok Shop Academy also identifies competitive pricing, a promotion mix, and platform campaigns as traffic levers.' },
      { q: 'Can TikTok Shop Flash Sale and Product Discount stack?', a: 'No. TikTok Shop Academy’s current U.S. guidance says a product can have only one product promotion at a time. Product Discount can stack with Hero Product Boost, while Flash Sale cannot. Confirm live stacking in Promotion Simulator before launching.' },
      { q: 'Is a very low price plus high shipping a good TikTok Shop strategy?', a: 'No. TikTok Shop Academy cautions against using a very low listed price with high shipping fees. Treat the item price and shipping as one customer decision and make the total value proposition clear before checkout.' },
      { q: 'How much margin should a brand keep before using TikTok Shop ads?', a: 'TikTok Shop Academy presents a 45% to 60% disposable-profit margin as a reference for sellers running ads. Disposable profit accounts for selling price, product cost, logistics, platform commission, and loss or damage. It is a planning reference, not a blanket rule or performance guarantee.' },
      { q: 'What is TikTok Shop Promotion Simulator?', a: 'Promotion Simulator is a Seller Center tool that lets sellers preview how eligible promotion layers and stacking rules affect an offer. Use it before content or paid traffic sends shoppers to a product card.' },
      { q: 'Can WEM help improve a TikTok Shop product card?', a: 'Yes. WEM can connect hero-SKU selection, creator recruitment, content coaching, product-page feedback, offer planning, launch coordination, and weekly review so the creator story and product-card decision stay aligned.' },
    ],
    related: [
      { label: 'TikTok Shop Affiliate Strategy for Brands', href: 'tiktok-shop-affiliate-strategy-for-brands' },
      { label: 'TikTok Shop Creator Matchmaking Playbook', href: 'tiktok-shop-creator-matchmaking-playbook' },
      { label: 'TikTok Shop US New Seller Growth Strategy', href: 'tiktok-shop-us-new-seller-growth-strategy' },
    ],
  },
  zh: {
    meta: {
      title: 'TikTok Shop 商品卡流量怎么做：价格、促销和达人内容怎样一起接住转化',
      cat: 'TIKTOK SHOP 美国 · 商品卡策略', author: 'WE Marketing Team', date: '2026 年 7 月 20 日', read: '12 分钟阅读',
      heroImage: 'hero-tiktok-shop-product-card-strategy-v2.png', heroAlt: '商品卡、达人短视频、优惠券、价格标签和包裹组成的 TikTok Shop 商品卡增长插画',
    },
    sections: [
      { id: 'zh-direct-answer', eyebrow: '商品卡策略', h: '商品卡流量不是单纯降价', body: [
        CALLOUT('TikTok Shop 商品卡要拿到更有价值的流量，商品、标价、运费、优惠和达人内容里的承诺必须是一件事。把展示价格压得很低，却没有利润空间或没有讲清楚优惠，可能带来点击，但不会形成能持续复盘的增长系统。'),
        P('TikTok Shop Academy 目前的美国站指引提到，具有竞争力的价格、合理的促销组合和平台活动，都可能帮助商品卡获得更多曝光。但品牌真正要做的，是先决定哪个商品值得被推，哪种优惠只承担一个明确任务，再确认商品卡能不能接住达人、直播和广告带来的需求。'),
        P('用户从达人视频点进来后，会在一页里判断商品到底是什么、价格是否合理、运费和到货预期是否清楚、优惠能不能理解、评价是否够、风险是否可接受。达人内容可以把人带到商品卡，商品卡才决定这次兴趣能不能变成下单。'),
        INFO('tiktok-shop-product-card-offer-system-zh.svg', 'WEM 商品卡优惠系统：达人需求、利润检查、商品优惠、购物车优惠、优惠券和转化复盘', 'WEM 框架：达人把用户带到商品卡，商品经济模型和清楚的优惠决定商品卡能不能完成转化。'),
        UL(['先选 1 到 3 个 hero SKU，不要一开始所有 SKU 一起做活动。', '达人发力、投流或报活动前，先算完整到手利润和履约成本。', '商品价和运费要当成同一个用户决策来设计。', '每一层优惠只做一件事，不要为了叠券而叠券。', '每周把用户问题、退货原因和达人反馈带回商品卡和下一轮 brief。']),
      ]},
      { id: 'zh-hero-sku', eyebrow: 'HERO SKU', h: '先选一个能承接流量的商品', body: [
        P('许多新店一开始最容易犯的错，不是折扣不够大，而是所有商品都想推。结果达人 brief 变得很空，促销工具彼此打架，团队也无法判断到底是哪张商品卡值得继续投入。冷启动更适合先定一个 hero SKU：它应该有容易拍出来的使用场景、清楚的卖点、可稳定供货的库存，以及能支持寄样、内容和用户优惠的经济模型。'),
        P('在启动前，把完整的利润模型写清楚。Academy 对 disposable profit 的解释是：售价减去商品成本、总物流成本、平台佣金和损耗。它对做广告的商家给出 45% 到 60% disposable profit margin 的参考，并提到表现稳定的广告活动通常有 10% 到 30% 的广告花费比例。这些是平台页面的参考，不是所有品类都能照抄的标准，也不是结果承诺。'),
        TABLE(['启动前要看什么', '要核对的内容', '为什么重要'], [['Hero SKU', '卖点、演示、库存、评价和到手利润', '达人内容、商品页和优惠才能集中学习。'], ['商品卡', '图文、规格、核心利益、使用场景、运费和常见问题', '把短视频没有讲完的疑问补齐。'], ['优惠', '用户为什么现在下单，以及什么时候复盘或停止', '让用户看到一个清楚的决定，而不是一堆折扣。'], ['履约', '库存、仓库、客服和潜在退货原因', '流量上来不能反而伤害体验。']]),
        P('WEM 会实际参与这个阶段：一起判断 hero SKU 需要证明什么、把证明点放进达人 brief、检查商品卡体验，并确保 launch offer 不会在商品还没有学清楚之前就把它做成低价品。'),
      ]},
      { id: 'zh-price', eyebrow: '价格结构', h: '标价和运费在用户眼里是一件事', body: [
        P('用户不会把商品标价和最终要支付的钱分开看。TikTok Shop Academy 也特别提醒，不能用很低的商品标价配很高的运费。这种做法也许能让用户先点进来，但结账时会破坏价值感和信任。'),
        P('同样，不准确或误导性的价格也有风险。Academy 提醒，这可能影响商品、店铺健康或销售权限。实操上，商品卡的任务应该是让优惠更容易理解，而不是让用户先误解。'),
        CALLOUT('一个更有用的价格问题不是“能不能展示更低的数字”，而是“一个第一次来的用户，能不能看懂他得到什么、最后付多少、为什么现在下单值得”。'),
      ]},
      { id: 'zh-stack', eyebrow: '优惠叠加', h: '每一层优惠只承担一个任务', body: [
        P('TikTok Shop 有很多促销工具，但品牌不应该因为工具存在就全部打开。商品级优惠负责让 hero SKU 本身更有吸引力；购物车级优惠可以鼓励凑单或提高客单；优惠券适合给某一类用户最后一个明确理由。它们不应该重复做同一件事。'),
        TABLE(['层级', '常见工具', '更适合承担的任务'], [['第一层：商品优惠', 'Campaign price、Flash Sale、Product Discount、Early Access', '让单个 hero SKU 更容易比较、更有行动理由。每次只能有一个商品优惠。'], ['第二层：购物车优惠', 'BMSM、Gift with Purchase', '在商品优惠成立以后，提高客单或增加感知价值。'], ['第三层：优惠券', 'Seller、promotion 或 platform coupon', '给符合条件的用户一个完成下单的清楚理由。']]),
        P('Academy 目前的 stacking 规则说明，购物车优惠可以与商品优惠叠加，之后一张优惠券也可以叠加。购物车优惠的门槛，是按第一层优惠之后的商品价格计算。所有活动上线前，都应在 Seller Center 的 Promotion Simulator 里确认当前规则。'),
        P('如果品牌不希望一直降低商品的 headline price，Gift with Purchase 值得考虑。一个确实相关的小样、配件或搭配商品，有时比继续降价更能保住商品定位。但赠品本身要有价值，也要确认库存和履约能够跟上。'),
      ]},
      { id: 'zh-creator', eyebrow: '达人内容', h: '达人制造需求，商品卡负责接住需求', body: [
        P('达人不是只负责带点击。适合的达人要让正确的人看懂：这个商品解决什么、适合谁、能期待怎样真实的使用体验，以及为什么 hero SKU 值得现在考虑。用户点进商品卡后，核心信息应该被延续，而不是让他重新猜测内容里的承诺。'),
        P('这也是 WEM 把达人运营和店铺转化放在同一套系统里做的原因。我们的 8,000+ 活跃达人和 affiliate 社群能帮助品牌更快匹配和启动，但招募本身不是服务终点。我们也可以协助 brief、寄样 follow-up、content review、training call、商品页反馈和每周复盘，让下一批达人知道用户真正还需要看到什么。'),
        P('对于新产品 launch，这个闭环尤其重要。第一个达人可能找到能带来注意力的角度，店铺团队要确认是不是规格、价格、运费、变体或使用方式在阻止用户下单。下一轮 brief 和下一次商品卡更新，要回应这些真实信号，而不是只重复第一次的概念。'),
      ]},
      { id: 'zh-plan', eyebrow: '30 天计划', h: '30 天商品卡流量执行计划', body: [
        UL(['第 1 周：定 hero SKU。检查到手利润、标价、运费、库存、商品卡清晰度、评价，以及达人必须演示的一个核心证明点。', '第 2 周：做一个优惠。先选商品级优惠，只有购物车优惠或券有不同任务时才加。内容发布前，先在 Promotion Simulator 里测试。', '第 3 周：启动需求。找能真实演示该使用场景的达人，复核内容里的 claim、商品卡一致性和用户可能有的疑问。', '第 4 周：复盘整条路径。看达人角度、商品卡访问、转化、客单、运费问题、退货原因和优惠表现。保留学习，而不是保留每一个折扣。']),
        P('第一个月的目标不是把所有促销工具都用一遍，而是验证一个商品、一个故事、一个优惠和一个履约承诺能不能协同工作。这个基础清楚后，再扩大达人规模或活动规模才有意义。'),
      ]},
      { id: 'zh-wem', eyebrow: 'WEM 能做什么', h: '什么样的品牌适合找 WEM', body: [
        P('WE Marketing (WEM) 是 TikTok Shop official partner agency，也是 full-service management partner。我们适合正在进入 TikTok Shop、准备 launch 新 hero SKU、需要重建 affiliate program，或已经有达人流量但商品卡转化还接不住的品牌。'),
        P('我们不是只给名单的达人 agency，也不是你很难找到实际负责人的大型团队。我们会把 creator recruitment、品牌自己的达人社群搭建与管理、content coaching、商品卡和优惠协同、launch 节奏和每周复盘放进一个更紧密的工作节奏。品牌可以直接和实际运营团队沟通。'),
        P('目标不是把所有商品都卖得更便宜，而是让商品卡的购买决定更清楚，让达人有一套能真实演示的产品故事，并在投入更大预算前先建立能学习的 launch 系统。'),
        CTA('和 WEM 一起梳理 TikTok Shop 商品卡策略 →'),
      ]},
      { id: 'zh-sources', eyebrow: '来源说明', h: '来源与使用边界', body: [
        P('主要来源：TikTok Shop Academy《How to Drive Traffic for Your Product Card》，页面日期为 2026 年 4 月 1 日，适用于美国站。WEM 于 2026 年 7 月 20 日直接核对该页面。'),
        P('文中促销机制、叠加关系、价格提醒及利润和广告花费参考都来自该 Academy 页面。WEM 的 hero SKU 方法、达人到商品卡的工作流、优惠架构和 30 天计划属于运营框架，不是 TikTok Shop 政策或业绩承诺。活动执行前，请在 Seller Center 再次确认实时资格、价格要求和叠加结果。'),
        CTA('阅读 TikTok Shop Academy 官方来源', 'https://seller-us.tiktok.com/university/essay?knowledge_id=3684852088178446'),
      ]},
    ],
    faqs: [
      { q: 'TikTok Shop 商品卡是什么？', a: '商品卡是用户从短视频、搜索、直播或其他流量入口进入后，判断商品、价格、运费、优惠、规格、评价和购买路径的页面。' },
      { q: '怎么提高 TikTok Shop 商品卡流量？', a: '先集中一个 hero SKU，确保商品证明、价格、运费、库存和商品卡清楚，再用与商品匹配的促销和达人内容带来需求。Academy 也将竞争力定价、促销组合和平台活动列为流量杠杆。' },
      { q: 'Flash Sale 和 Product Discount 可以叠加吗？', a: '不可以。Academy 目前指引说明，一个商品一次只能有一个商品级促销。Product Discount 可以与 Hero Product Boost 叠加，Flash Sale 不可以。上线前应在 Promotion Simulator 再次确认。' },
      { q: '低标价加高运费是好策略吗？', a: '不是。Academy 明确提醒不要使用很低的商品标价配很高运费。商品价和运费要当成同一个用户决策，结账前把价值讲清楚。' },
      { q: '商品卡投广告前需要多少利润？', a: 'Academy 给出的参考是 45% 到 60% disposable profit margin。它考虑售价、商品成本、物流、平台佣金和损耗。这是规划参考，不是所有商品通用的规则或业绩保证。' },
      { q: 'Promotion Simulator 是什么？', a: '它是 Seller Center 里帮助卖家预览促销叠加和最终优惠结果的工具。在内容、直播或广告把用户带进商品卡之前，先用它确认当前规则。' },
      { q: 'WEM 可以帮助商品卡转化吗？', a: '可以。WEM 能把 hero SKU 选择、达人招募、内容 coaching、商品页反馈、优惠规划、launch 协同和每周复盘接在一起，让达人内容和商品卡购买决策保持一致。' },
    ],
    related: [
      { label: 'TikTok Shop Affiliate 怎么做稳：品牌要先打好店铺、产品和达人三层基础', href: 'tiktok-shop-affiliate-strategy-for-brands' },
      { label: 'TikTok Shop 达人 Matchmaking 怎么做？品牌需要的不只是“找达人”', href: 'tiktok-shop-creator-matchmaking-playbook' },
      { label: 'TikTok Shop US 新卖家增长策略', href: 'tiktok-shop-us-new-seller-growth-strategy' },
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
