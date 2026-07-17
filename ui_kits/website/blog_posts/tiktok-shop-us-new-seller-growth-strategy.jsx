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
      title: 'TikTok Shop US New Seller Growth Strategy: Pick One Growth Path Before You Try Everything',
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
        h: 'Why sequencing matters more than doing everything at once',
        body: [
          P('Many new TikTok Shop sellers open their store and immediately try to do short videos, livestreams, creators, campaigns, and ads all at once. That usually does not create faster growth. It creates fragmented execution.'),
          P('TikTok Shop US Academy’s new-seller guidance points to a better operating truth: choose a growth path that fits your product and team first, then build the supporting system around it. For most sellers, long-term growth does not come from activating every tool. It comes from activating the right order.'),
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
        h: 'When short video is the right first growth path',
        body: [
          P('The official Academy article recommends short-video-led growth for products with strong visual selling points, low enough price to convert easily, and momentum versus the rest of the catalog. In plain language, that means products shoppers can understand in seconds.'),
          P('That makes short video a strong first path for many new TikTok Shop US sellers. It is often the fastest way to test which SKU, message, and creator-style hook actually earns attention and clicks. But short video only works as a growth path when the page can close the sale after the click.'),
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
        h: 'When livestream becomes a real conversion tool',
        body: [
          P('TikTok Shop’s official guidance frames self-hosted livestreams as a low-cost, high-engagement way to turn viewers into buyers fast. That is useful because too many sellers treat live as a big-brand theater project instead of an early conversion channel.'),
          P('For a new seller, live works best when the host can explain the product clearly, the SKU is easy to demo, and short videos or ads are feeding people into the room. If live has no traffic support, unstable pricing, or a weak product page behind it, the channel gets expensive in attention and cheap in results.'),
          P('WEM usually treats live as one part of the same operating loop as product-page localization, creator seeding, affiliate setup, and paid amplification. That is what makes live sales repeatable rather than occasional.'),
        ],
      },
      {
        id: 'creator-collaboration-basics',
        h: 'What TikTok Shop affiliate marketing requires before outreach starts',
        body: [
          P('One of the most useful parts of the official Academy page is the creator-collaboration section, because it makes clear that creator growth begins before outreach. The article recommends choosing 3 to 4 flagship products, setting stronger commission rates for new products, and making sure products are creator-friendly from a logistics and content standpoint.'),
          P('That matters because many brands say they want TikTok Shop affiliate marketing, but have not prepared the basics that creators actually need: a clear product priority list, creator-facing commission logic, a sample workflow, and a product page built for creator traffic.'),
          UL([
            'Creators need to see a live affiliate plan before they can collaborate properly',
            'New products usually need stronger commission logic than mature products',
            'Sample readiness and creator-ready pages matter as much as outreach volume',
            'For cross-border teams, bilingual execution and faster weekly decisions matter',
          ]),
        ],
      },
      {
        id: 'campaigns-as-accelerators',
        h: 'How TikTok Shop campaigns fit into a new seller strategy',
        body: [
          P('The Academy guide also gives a practical reminder about campaigns: they are accelerators, not substitutes for readiness. The same page notes campaign eligibility expectations such as Shop Performance Score thresholds and shipping requirements, which means stores need a working operational baseline before traffic expansion becomes useful.'),
          P('That is the right way to think about TikTok Shop campaigns. More exposure does not fix weak product selection, weak discount logic, or weak fulfillment. It only makes those gaps easier to see.'),
          { kind: 'table', headers: ['Campaign question', 'What new sellers should check first'], rows: [['Should we register?', 'Only if the product already has real sales logic and enough stock'], ['Will more traffic help?', 'Only if the listing, offer, and support flow can convert it'], ['What should be ready?', 'Discount logic, inventory, creatives, and customer-service follow-through'], ['What should WEM help manage?', 'SKU selection, page updates, creator support, and paid amplification timing']] },
        ],
      },
      {
        id: 'gmv-max-timing',
        h: 'When Product GMV Max should enter the mix',
        body: [
          P('The official advertising section is valuable because it gives new sellers a sequencing rule. If a seller has budget and strong linked videos, ads can start earlier. If the budget is limited, the better path is to use organic content first, identify winning signals, and then scale with paid media.'),
          P('The same Academy page recommends Product GMV Max as a common starting point for many new sellers. That makes sense, but GMV Max is strongest when the store already has usable creative volume, linked ad accounts, authorized videos, and a small set of products that deserve more traffic.'),
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
        h: 'Where WEM fits for brands and cross-border teams',
        body: [
          P('This topic is a strong WEM fit because new-seller growth on TikTok Shop US is not just a platform-education problem. It is an execution problem. Teams need help choosing the first growth path, localizing product pages, setting up creator collaboration, supporting campaigns, and connecting paid amplification to store operations.'),
          P('For Chinese brands and manufacturers, the gap is even more obvious. Manufacturing strengths are real: fast sampling, cost control, packaging flexibility, small-batch testing, and quick product iteration. But those strengths do not automatically translate into U.S. creator behavior, U.S. shopper trust, or U.S.-facing product language. That is where a bilingual U.S.-based operating team matters.'),
          { kind: 'infographic', src: 'info-new-seller-growth-paths.svg', alt: 'Decision framework for choosing the right TikTok Shop growth path for a new seller', caption: 'The first job is choosing the right path, not turning on every lever.' },
          CTA('Book a WEM strategy call →'),
        ],
      },
    ],
    faqs: [
      { q: 'What is a good TikTok Shop new seller strategy?', a: 'A good TikTok Shop new seller strategy starts with one clear growth path, such as short video, livestream, creator collaboration, or campaigns, then builds the product-page, sample, offer, and ad systems to support that path.' },
      { q: 'When should a new TikTok Shop seller use Product GMV Max?', a: 'Product GMV Max is more useful after a seller has usable creative volume, account linkage completed, and at least a few products or videos showing promising signals.' },
      { q: 'Can WEM help cross-border teams with TikTok Shop US growth?', a: 'Yes. WEM helps cross-border brands and manufacturers localize product pages, structure creator collaboration, support campaigns, connect paid amplification, and run weekly execution reviews for the U.S. market.' },
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
      : 'TikTok Shop US New Seller Growth Strategy: Pick One Growth Path Before You Try Everything | WE Marketing';
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
