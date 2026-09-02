const { useState, useEffect } = React;

const P = (text) => ({ kind: 'p', text });
const UL = (items) => ({ kind: 'list', items });
const CTA = (label) => ({ kind: 'cta', label, href: 'https://zus03h0enw04.sg.larksuite.com/scheduler/03970278dd9a7925' });

const LABELS = {
  en: { back: 'Blog', toc: 'On this page', faq: 'Frequently asked questions', related: 'Related guides' },
  zh: { back: '博客', toc: '本文目录', faq: '常见问题', related: '相关文章' },
};

const POSTS = {
  en: {
    meta: {
      title: 'TikTok Shop New Seller Growth Strategy: Scale Exposure and GMV With Content, Campaigns, and Ads',
      cat: 'TIKTOK SHOP U.S. · NEW SELLER STRATEGY',
      author: 'WE Marketing Team',
      date: 'Jun 18, 2026',
      read: '10 min read',
      heroImage: 'hero-tiktok-shop-us-new-seller-growth-strategy-v5.png',
      heroAlt: 'Small ecommerce team planning TikTok Shop US content, creator outreach, and product launch workflow',
    },
    sections: [
      {
        id: 'why-sequencing-matters',
        h: 'Start with one growth path, not five',
        body: [
          { kind: 'callout', text: 'New to TikTok Shop? Do not launch short video, LIVE, creator outreach, campaigns, and ads all at once. Pick the one channel most likely to create your first repeatable signal, then build around it.' },
          P('The most common new-seller mistake is trying to turn on every growth tool in the first month. The result is usually scattered content, too many SKUs, rushed samples, and no clear answer to what is actually working.'),
          P('A simpler rule works better: choose the first growth path that fits your product and team, then make the product page, offer, inventory, content, and follow-up support that path. Add the next lever only after the first one is producing useful learning.'),
          UL([
            'Pick one traffic path first instead of splitting attention everywhere',
            'Make the product page, content, samples, and offer support that path',
            'Use campaigns and paid media to scale signals that already work',
          ]),
          { kind: 'infographic', src: 'info-new-seller-sequence.svg', alt: 'Checklist for sequencing TikTok Shop growth actions for a new US seller', caption: 'New sellers need a growth order, not a longer tool list.' },
        ],
      },
      {
        id: 'when-short-video-is-right',
        h: 'Start with short video when the product is easy to understand fast',
        body: [
          P('Short video is usually the best first move when a shopper can understand the product in a few seconds. Think visible use, a clear before-and-after use case, a texture or setup worth showing, or a problem that a creator can demonstrate rather than explain for a minute.'),
          P('Do not launch your full catalog. Start with one or two hero SKUs. The goal is not to post more; it is to learn which product, hook, and proof moment earn clicks, and whether the product page turns those clicks into orders.'),
          UL([
            'Start with one or two hero SKUs, not the whole assortment',
            'Use product angles that can be demonstrated quickly on camera',
            'Make sure the listing explains the benefit as clearly as the video does',
            'Treat low CTR or weak GMV as a signal to iterate, not just post more',
          ]),
        ],
      },
      {
        id: 'when-live-makes-sense',
        h: 'Use LIVE when you can answer buying questions in real time',
        body: [
          P('LIVE is useful when the product needs demonstration, comparison, or trust-building before someone buys. A good host can show the product, answer the questions people keep asking, and make the offer feel clear, not complicated.'),
          P('For a new shop, do not expect LIVE to create demand by itself. It works better when short videos, creators, or paid traffic are feeding qualified viewers into the room. If there is no traffic plan, unclear pricing, or a weak product page behind the room, LIVE becomes a lot of work without a reliable conversion loop.'),
          P('Treat LIVE as part of the same system as product pages, creator content, offers, and paid amplification. That is how a good session becomes a repeatable sales channel instead of a one-off event.'),
        ],
      },
      {
        id: 'creator-collaboration-basics',
        h: 'Before you invite creators, make the offer worth accepting',
        body: [
          P('Creator outreach starts before the first invitation. TikTok Shop’s new-seller guidance recommends choosing three to four flagship products for creator collaboration, not sending a broad catalog and hoping creators choose for you.'),
          P('Creators need a reason to spend time on a new brand: a product they can demonstrate, a clear commission structure, reliable samples, a page they are comfortable sending traffic to, and someone who follows up. If those basics are missing, more outreach only creates more unanswered invitations.'),
          UL([
            'Choose three to four flagship products before opening broad creator outreach',
            'Give new products stronger commission support than mature products when margin allows',
            'Sample readiness and creator-ready pages matter as much as outreach volume',
            'Clear weekly ownership and fast decisions matter as much as outreach volume',
          ]),
        ],
      },
      {
        id: 'campaigns-as-accelerators',
        h: 'Use campaigns to amplify readiness, not to rescue a weak launch',
        body: [
          P('A campaign can give a new shop more visibility, but it also puts pressure on every weak part of the operation. More traffic will not fix a confusing listing, thin inventory, unclear discount, slow shipping, or an offer nobody wants.'),
          P('Before registering, make sure the product has a real sales reason, campaign stock is protected, the offer is easy to understand, and someone owns customer questions and fulfillment. A useful planning rule is to hold two to three times normal sales volume for campaign SKUs rather than treating campaign inventory like normal inventory.'),
          { kind: 'table', headers: ['Campaign question', 'What new sellers should check first'], rows: [['Should we register?', 'Only if the product already has real sales logic and enough stock'], ['Will more traffic help?', 'Only if the listing, offer, and support flow can convert it'], ['What should be ready?', 'Discount logic, inventory, creatives, and customer-service follow-through'], ['What should WEM help manage?', 'SKU selection, page updates, creator support, and paid amplification timing']] },
        ],
      },
      {
        id: 'gmv-max-timing',
        h: 'Use Product GMV Max after you have something worth scaling',
        body: [
          P('If you have budget and strong linked videos, paid testing can begin early. If you have a tighter budget, start with organic content and creators, find the first useful signal, then use ads to give that signal more reach. Ads should make a good signal bigger; they should not be asked to invent one.'),
          P('Product GMV Max is a practical starting ad format for many new sellers, but only when the basics are ready: linked accounts, authorized product videos, several usable creative options, and a small group of products worth testing. Start with roughly three to seven strong candidates, give the campaign at least three days to learn, and review creative, page, offer, and conversion together.'),
          UL([
            'Do not use ads to cover up a weak first signal',
            'Start with products that already show conversion or content traction',
            'Treat paid amplification as part of the same creator-commerce system',
            'Review creative, page, and offer performance together every week',
          ]),
        ],
      },
      {
        id: 'wem-role-in-the-system',
        h: 'Where WEM fits for brands',
        body: [
          P('This topic is a strong WEM fit because new-seller growth on TikTok Shop US is not just a platform-education problem. It is an execution problem. Brands need help choosing the first growth path, strengthening product pages, setting up creator collaboration, supporting campaigns, and connecting paid amplification to store operations.'),
          P('WEM gives brand teams one operating layer across shop operations, creator outreach, samples, content feedback, campaign readiness, GMV Max, and weekly decisions. That makes it easier to learn which product, message, creator angle, and offer should receive the next round of attention.'),
          { kind: 'infographic', src: 'info-new-seller-growth-paths.svg', alt: 'Decision framework for choosing the right TikTok Shop growth path for a new seller', caption: 'The first job is choosing the right path, not turning on every lever.' },
          CTA('Book a WEM strategy call →'),
        ],
      },
    ],
    faqs: [
      { q: 'What should a new TikTok Shop seller do first?', a: 'Choose one first growth path: short video, LIVE, creator collaboration, or a campaign. Then make the hero product, product page, offer, inventory, and follow-up support that path before adding more channels.' },
      { q: 'How many products should a new TikTok Shop seller promote first?', a: 'Start with one or two hero SKUs for short video testing. For creator collaboration, choose a small creator-ready group. TikTok Shop guidance recommends three to four flagship products rather than a broad catalog.' },
      { q: 'When should a new TikTok Shop seller use Product GMV Max?', a: 'Use Product GMV Max after account linkage is complete and you have authorized product videos, several usable creative options, and a small group of products showing content or conversion potential. Do not use it to cover up a weak listing or offer.' },
      { q: 'How long should a new seller let GMV Max run before judging it?', a: 'Give a new Product GMV Max campaign at least three days to learn before making a major decision. Review the creative, product page, offer, and conversion signals together, not only ad spend or GMV.' },
      { q: 'Should a new seller join TikTok Shop campaigns right away?', a: 'Join when the product, offer, inventory, listing, and fulfillment are ready. Campaigns can increase exposure, but they cannot repair a weak launch. Protect campaign inventory and prepare customer-service follow-through first.' },
      { q: 'What do creators need before they will promote a new TikTok Shop brand?', a: 'Creators need a clear hero product, a visible affiliate offer, practical commission logic, sample availability, a creator-ready product page, and timely follow-up. More invitations do not help if the collaboration structure is unclear.' },
      { q: 'Can WEM help brands build a TikTok Shop US growth system?', a: 'Yes. WEM helps brands prioritize hero products, structure creator collaboration, coordinate samples and campaigns, connect paid amplification, and run weekly execution reviews across the shop.' },
    ],
    related: [
      { label: 'TikTok Shop Affiliate Marketing for Brands: A Better Operating Playbook', href: 'tiktok-shop-affiliate-marketing-for-brands.html' },
      { label: 'TikTok Shop Product Listing Optimization: Convert Creator Traffic', href: 'tiktok-shop-product-listing-optimization.html' },
    ],
  },
  zh: {
    meta: {
      title: 'TikTok Shop 美区新卖家增长打法：内容、达人、活动和 GMV Max 应该怎么排顺序',
      cat: 'TIKTOK SHOP 美区 · 新卖家增长',
      author: 'WE Marketing Team',
      date: '2026 年 6 月 18 日',
      read: '10 分钟阅读',
      heroImage: 'hero-tiktok-shop-us-new-seller-growth-strategy-v5.png',
      heroAlt: '小团队在规划 TikTok Shop 美区内容、达人合作和商品上线流程',
    },
    sections: [
      {
        id: '为什么顺序比全开更重要',
        h: '为什么顺序比把所有动作一起打开更重要',
        body: [
          P('很多 TikTok Shop 美区新卖家一开店就想把短视频、自播、达人、活动和广告同时做起来。问题不是动作少，而是动作太散，最后没有一个环节真正跑通。'),
          P('TikTok Shop US Academy 这篇新卖家指南更值得提炼出来的，不是平台又多了什么工具，而是一个更实用的运营逻辑：先选一条最适合当前团队和商品的增长路径，再把商品页、内容、样品、活动和广告围绕这条路径接起来。'),
          UL([
            '先选路径，而不是先堆动作',
            '先让商品页、内容和 offer 围着同一个目标配合',
            '活动和广告用来放大有效信号，而不是替代有效信号',
          ]),
          { kind: 'infographic', src: 'info-new-seller-sequence.svg', alt: 'TikTok Shop 美区新卖家增长动作排序清单', caption: '新卖家先要有增长顺序，再谈更多工具。' },
        ],
      },
      {
        id: '什么样的商品适合先做短视频',
        h: '什么样的商品更适合先做短视频起量',
        body: [
          P('官方更推荐把短视频优先放在那些卖点清楚、镜头里容易演示、价格更容易转化、相对更有增长势头的商品上。换成更实际的话，就是用户刷到后几秒钟就能看懂的 SKU，更适合做 TikTok Shop 冷启动。'),
          P('所以短视频不是“多发就行”，而是要先挑对 hero SKU，再让页面能接住点击后的成交。对很多美区新卖家来说，短视频的价值在于快速验证：到底哪个商品、哪个开头、哪种表达更容易让用户愿意点进来。'),
          UL([
            '先从 1 到 2 个 hero SKU 开始，不要一上来铺全店',
            '优先选能快速演示、容易理解的卖点',
            '让商品页和视频讲的是同一个成交逻辑',
            '出现低 CTR 或低 GMV 时，先改内容和页面，不只是继续发',
          ]),
        ],
      },
      {
        id: '什么时候直播会变成真正的转化工具',
        h: '什么时候自播会变成真正的转化工具',
        body: [
          P('官方把自播定义成一种低成本、高互动、能快速把观众转成买家的方式。这个定义很重要，因为很多团队会把直播想成“大品牌玩法”，但对新卖家来说，直播更像一种建立信任和快速回答顾虑的转化工具。'),
          P('直播真正跑起来，一般要同时满足几件事：主播能把商品讲清楚，SKU 足够适合演示，短视频或广告能持续把流量送进直播间。如果直播没有流量支持、价格不稳、页面承接弱，那它更容易变成消耗团队时间的渠道。'),
        ],
      },
      {
        id: '达人合作开始前要先准备什么',
        h: '达人合作开始前，哪些基础动作必须先做完',
        body: [
          P('这篇官方文章里最值得品牌认真看的，是 creator collaboration 部分。因为它讲清楚了一件事：达人合作真正的起点，不是先去找人，而是先把达人愿意接的商品和合作结构准备好。'),
          P('如果重点商品、佣金逻辑、样品机制、商品页表达、creator-facing offer 都还没搭好，达人再多也很难真正起量。很多品牌口头上想做 TikTok Shop affiliate marketing，但真正的基础动作其实还没完成。'),
          UL([
            '先选出 3 到 4 个真的适合合作的重点商品',
            '先把 affiliate plan 和 creator 能看到的规则搭好',
            '先明确样品和跟进机制，再谈放大招募',
            '对跨境团队来说，本地化沟通和中英双语周复盘很关键',
          ]),
        ],
      },
      {
        id: '平台活动应该扮演什么角色',
        h: '平台活动在新卖家增长里应该扮演什么角色',
        body: [
          P('官方对 campaigns 的写法也很实用。核心不是告诉你活动一定有效，而是提醒你：活动本质上是放大器。只有当商品、折扣、库存、素材和支持体系已经有基本盘时，放大流量才有意义。'),
          P('如果基础没打稳，更多曝光不会替你解决问题，只会把问题放大。所以 TikTok Shop campaigns 更适合被看成“在准备度足够后放大结果”，而不是“缺什么就靠活动补什么”。'),
          { kind: 'table', headers: ['活动相关问题', '新卖家应该先检查什么'], rows: [['要不要报活动？', '先看商品有没有真实销售逻辑、库存够不够'], ['更多流量会不会有用？', '要先看页面、offer 和支持体系接不接得住'], ['活动前该准备什么？', '折扣逻辑、库存、素材、客服与履约'], ['WEM 更适合做什么？', 'SKU 选择、页面更新、达人配合和广告节奏管理']] },
        ],
      },
      {
        id: 'gmv-max什么时候介入',
        h: 'GMV Max 应该什么时候介入',
        body: [
          P('官方广告部分给了一个很值得参考的顺序：预算充足的新卖家可以更早测试 ads；预算有限的团队，最好先用 organic 找到有效内容和有效商品，再逐步用 paid 去放大。'),
          P('这也是为什么 Product GMV Max 不适合被当成“新店万能解法”。它更适合在店铺已经有一些可用素材、账号连接完成、并且已经出现第一批有效信号后介入。'),
          UL([
            '不要用广告去补一个还没跑通的基础盘',
            '优先给已经表现出潜力的商品和素材放量',
            '把 paid amplification 放回同一套 creator commerce 系统里',
            '每周一起看素材、页面、offer 和结果，而不是只看花费',
          ]),
        ],
      },
      {
        id: 'wem在这里的角色',
        h: '对品牌和跨境团队来说，WEM 在这里扮演什么角色',
        body: [
          P('这篇文章适合长期埋词，不只是因为有 TikTok Shop 美区新卖家、TikTok Shop campaigns、TikTok Shop affiliate、Product GMV Max 这些搜索词，更因为它能自然解释 WEM 的服务角色。'),
          P('对中国品牌和厂家来说，供应链优势是真的，比如打样快、成本控制稳、包装灵活、小批量测试快、上新迭代快。但这些优势不会自动变成美国市场的 creator behavior、shopper trust 或 product-page conversion。真正决定结果的，还是美国市场执行。'),
          { kind: 'infographic', src: 'info-new-seller-growth-paths.svg', alt: 'TikTok Shop 美区新卖家选择增长路径的决策框架图', caption: '第一步不是全做，而是先选对增长路径。' },
          CTA('预约 WEM 策略沟通 →'),
        ],
      },
    ],
    faqs: [
      { q: 'TikTok Shop 美区新卖家更适合什么增长打法？', a: '更适合先选一条最适合当前团队和商品的增长路径，比如短视频、自播、达人合作或活动，然后让商品页、样品、内容和广告围绕这条路径配合。' },
      { q: 'GMV Max 适合什么时候开始？', a: '更适合在店铺已经有可用素材、账号连接完成、并且已经出现第一批有效商品或内容信号之后开始，不适合拿来硬补一个还没跑通的基础盘。' },
      { q: 'WEM 能帮助跨境团队做 TikTok Shop 美区增长吗？', a: '可以。WEM 可以帮助跨境团队做商品页本地化、达人合作结构、活动支持、paid amplification 衔接和每周执行复盘。' },
    ],
    related: [
      { label: 'TikTok Shop 达人分销为什么经常跑不顺', href: 'tiktok-shop-affiliate-marketing-for-brands.html?lang=zh' },
      { label: 'TikTok Shop 商品页优化：怎么把达人流量接住', href: 'tiktok-shop-product-listing-optimization.html?lang=zh' },
    ],
  },
};

function getInitialLang() {
  const urlLang = new URLSearchParams(window.location.search).get('lang');
  if (urlLang === 'zh' || urlLang === 'en') return urlLang;
  const savedLang = localStorage.getItem('we-lang');
  if (savedLang === 'zh' || savedLang === 'en') return savedLang;
  return (navigator.language || '').toLowerCase().startsWith('zh') ? 'zh' : 'en';
}

function App() {
  const [lang, setLang] = useState(getInitialLang);
  const post = POSTS[lang];

  useEffect(() => {
    localStorage.setItem('we-lang', lang);
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    document.title = lang === 'zh'
      ? 'TikTok Shop 美区新卖家增长打法：内容、达人、活动和 GMV Max 应该怎么排顺序 | WE Marketing'
      : 'TikTok Shop New Seller Growth Strategy: Scale Exposure and GMV | WE Marketing';
  }, [lang]);

  useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });

  return (
    <div data-screen-label="WE Blog · tiktok-shop-us-new-seller-growth-strategy">
      <CursorStars />
      <NavBar lang={lang} onLang={setLang} basePath="../" />
      <BlogPost {...post} labels={LABELS[lang]} />
      <CtaFooter lang={lang} />
      <Footer lang={lang} basePath="../" />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
