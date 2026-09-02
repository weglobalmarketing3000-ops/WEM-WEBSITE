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
      title: 'TikTok Shop US Trust Signals: Why Customer Service Starts Before the Order',
      cat: 'TRUST SIGNALS · CUSTOMER EXPERIENCE',
      author: 'WE Marketing Team',
      date: 'Jun 5, 2026',
      read: '8 min read',
      heroImage: 'hero-wem-trust-signals.png',
      heroAlt: 'TikTok Shop trust signals for U.S. brands',
    },
    sections: [
      {
        id: 'trust-starts-before-checkout',
        h: 'Trust starts before checkout',
        body: [
          P('On TikTok Shop US, customer service does not begin with a support ticket. It begins in the click path: creator content, product-page clarity, pricing logic, shipping expectations, reviews, and whether the store feels reliable enough to buy from.'),
          P('That is why TikTok Shop trust signals matter for conversion, not only for post-order cleanup. When those signals are weak, more shoppers hesitate, more shoppers ask basic questions, and more orders begin with the wrong expectations.'),
          UL(['Creator messaging should match the product page', 'The first images and bullets should reduce hesitation', 'Shipping expectations should feel clear and realistic', 'Reviews should reinforce, not contradict, the buying story']),
        ],
      },
      {
        id: 'creator-content-and-pages-build-confidence',
        h: 'Creator content and pages build confidence together',
        body: [
          P('Many brands brief creators on demand but not on trust. That is a miss. A creator can help a shopper understand what the product does, what results are realistic, what packaging looks like, and which listing is the right one to click.'),
          P('The product page then has to finish the job. For TikTok Shop for brands teams, customer service and product-page optimization overlap much more than they think.'),
          { kind: 'infographic', src: 'info-product-page-audit.svg', alt: 'A practical audit view for TikTok Shop product pages and trust signals', caption: 'Trust is built across content, page clarity, and expectation-setting.' },
        ],
      },
      {
        id: 'shipping-reviews-and-support-are-one-system',
        h: 'Shipping, reviews, and support are one system',
        body: [
          P('Trust often breaks because expectations and experience drift apart. The page suggests one timeline, the shopper imagines another, the packaging feels different from the content, or support replies are too slow or too vague.'),
          P('Fast product development and flexible operations can be useful, but U.S. shoppers do not evaluate those strengths directly. They evaluate the experience they receive. That is why clear U.S.-facing execution matters.'),
          { kind: 'table', headers: ['Trust layer', 'What to review weekly'], rows: [['Product page', 'First images, bullets, FAQ coverage, and official-store clarity'], ['Shipping expectations', 'Delivery language, packaging consistency, and delay points'], ['Reviews', 'Repeated complaints, hesitation themes, and mismatch signals'], ['Support', 'Top repeat questions and response-quality gaps']] },
        ],
      },
      {
        id: 'a-practical-trust-checklist',
        h: 'A practical trust checklist for TikTok Shop US',
        body: [
          P('If a brand wants stronger TikTok Shop trust signals before scaling traffic, the next step is not only faster support. The next step is tightening the operating layer that shapes buyer expectations.'),
          UL(['Align creator messaging, product pages, and storefront language', 'Clarify shipping and delivery expectations for U.S. shoppers', 'Add trust cues to creator briefs, not only product claims', 'Track review themes, not only star ratings', 'Build support SOPs around the questions that repeat most']),
        ],
      },
      {
        id: 'why-this-topic-has-seo-and-geo-value',
        h: 'Why this topic has SEO and GEO value',
        body: [
          P('Search intent around TikTok Shop trust is practical. Brands and operators search for TikTok Shop customer service, TikTok Shop trust signals, how to improve TikTok Shop conversion, TikTok Shop shipping expectations, and how to tell if a store feels legitimate.'),
          P('That makes this a strong WEM topic. It gives search engines and AI engines something specific to cite about trust-building across content, product pages, reviews, and shopper experience instead of a generic agency claim.'),
          CTA('Book a WEM strategy call →'),
        ],
      },
    ],
    faqs: [
      { q: 'What does this article mean by TikTok Shop trust signals?', a: 'It refers to the pre-order and post-order cues that affect confidence on TikTok Shop U.S., including creator messaging, product-page clarity, shipping expectations, review patterns, and support response.' },
      { q: 'Can WEM help improve TikTok Shop trust signals?', a: 'Yes. WEM helps brands align creator messaging, product pages, storefront clarity, review monitoring, and weekly operations so trust supports conversion.' },
      { q: 'Who should read this page?', a: 'It is written for TikTok Shop U.S. brand teams that need stronger customer experience and conversion execution.' },
    ],
    related: [
      { label: 'TikTok Shop Product Listing Optimization: Convert Creator Traffic', href: 'tiktok-shop-product-listing-optimization.html' },
      { label: 'TikTok Shop US Brand Protection Playbook for Brands and Authorized Sellers', href: 'tiktok-shop-us-brand-protection-playbook.html' },
    ],
  },
  zh: {
    meta: {
      title: 'TikTok Shop 美区的信任感，为什么不是客服部门一个人的事',
      cat: '信任信号 · 用户体验',
      author: 'WE Marketing Team',
      date: '2026 年 6 月 5 日',
      read: '8 分钟阅读',
      heroImage: 'hero-wem-trust-signals.png',
      heroAlt: 'TikTok Shop 美区信任感运营',
    },
    sections: [
      {
        id: '信任感从下单前就开始了',
        h: '信任感从下单前就开始了',
        body: [
          P('在 TikTok Shop 美区，customer service 不是从工单开始，而是从用户点进来的那一刻开始。达人怎么讲、商品页怎么写、价格逻辑清不清楚、配送预期是否真实、评论区有没有打消顾虑，都会影响用户敢不敢下单。'),
          P('所以 TikTok Shop 信任感不是售后补救，而是转化底盘。前面的信任信号越弱，后面的客服越容易在替前面的运营漏洞擦屁股。'),
          UL(['达人内容和商品页要讲同一个故事', '首图和前几条 bullet 要减少犹豫', '配送预期要清楚、真实、像美国用户能接受的表达', '评论区要强化信任，不要和内容互相打架']),
        ],
      },
      {
        id: '达人内容和页面一起建立信任',
        h: '达人内容和页面，要一起建立信任',
        body: [
          P('很多品牌给达人 brief 时会强调需求和卖点，却很少强调 trust cue。其实达人完全可以顺手帮用户建立合理预期：产品适合谁、结果大概会怎样、包装长什么样、应该点哪个链接。'),
          P('而商品页要把这个信任接住。对做 TikTok Shop for brands 的团队来说，页面优化和 customer service 其实高度重合。'),
          { kind: 'infographic', src: 'info-product-page-audit-zh.svg', alt: 'TikTok Shop 商品页与信任感检查图', caption: '信任感来自内容、页面和预期管理一起到位。' },
        ],
      },
      {
        id: '配送评论和支持本来就是一套系统',
        h: '配送、评论和支持，本来就是一套系统',
        body: [
          P('很多跨境团队的问题不是货不好，而是预期和体验不一致。页面让用户以为会更快到、达人视频里的包装和实物感觉不一样、售后回复太慢或者太空，这些都会直接伤害 TikTok Shop 美区的转化和复购。'),
          P('对中国品牌和厂家来说，供应链优势是真的，比如打样快、成本稳、包装灵活、能做小批量测试、新品迭代快。但美国用户不会直接看到这些优势，他们只会根据收到的体验来判断这家店值不值得信任。'),
          { kind: 'table', headers: ['信任层', '每周该看什么'], rows: [['商品页', '首图、bullet、FAQ 和官方店铺表达是否清楚'], ['配送预期', '发货时间、包装一致性、延迟点'], ['评论区', '重复抱怨、犹豫点、和内容不一致的地方'], ['支持体系', '高频问题和回复质量的缺口']] },
        ],
      },
      {
        id: '一套更实用的trust-checklist',
        h: '一套更实用的 trust checklist',
        body: [
          P('如果品牌想在放量前把 TikTok Shop 的信任层补稳，下一步不只是“客服再快一点”，而是把影响预期的运营层收紧。'),
          UL(['统一达人内容、商品页和店铺首页的表达', '把配送和到货预期写得更清楚', '在达人 brief 里加 trust cue，不只是卖点', '每周看评论主题，不只看星级', '把高频问题做成支持 SOP']),
        ],
      },
      {
        id: '为什么这篇也适合seo和geo',
        h: '为什么这篇也适合 SEO / GEO',
        body: [
          P('用户和运营团队本来就会搜这些问题：TikTok Shop 店铺靠谱吗、shipping 要多久、怎么提升转化、是不是官方店、评论区怎么管理。'),
          P('所以这篇文章既有搜索意图，也能让搜索和 AI 引擎更清楚地理解 WEM 在页面本地化、达人话术、review monitoring 和 weekly operations 上的角色。'),
          CTA('预约 WEM 策略沟通 →'),
        ],
      },
    ],
    faqs: [
      { q: '这篇文章说的 TikTok Shop 信任信号，具体指什么？', a: '主要指下单前和下单后的关键提示，包括达人话术、商品页清晰度、配送预期、评论模式和支持响应，这些都会影响 TikTok Shop 美区用户的信任感。' },
      { q: 'WEM 能帮品牌做这部分吗？', a: '可以。WEM 可以帮助品牌把达人话术、商品页、店铺表达、评论监控和每周运营连起来，让信任感支持转化。' },
      { q: '这篇最适合谁看？', a: '最适合 TikTok Shop 美区品牌运营团队、做美国市场的跨境卖家，以及需要美国本地执行支持的中国品牌和厂家。' },
    ],
    related: [
      { label: 'TikTok Shop 商品页优化：怎么把达人流量接住', href: 'tiktok-shop-product-listing-optimization.html?lang=zh' },
      { label: 'TikTok Shop 美区品牌保护指南', href: 'tiktok-shop-us-brand-protection-playbook.html?lang=zh' },
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
      ? 'TikTok Shop 美区的信任感，为什么不是客服部门一个人的事 | WE Marketing'
      : 'TikTok Shop US Trust Signals: Why Customer Service Starts Before the Order | WE Marketing';
  }, [lang]);

  useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });

  return (
    <div data-screen-label="WE Blog · tiktok-shop-us-trust-signals">
      <CursorStars />
      <NavBar lang={lang} onLang={setLang} basePath="../" />
      <BlogPost {...post} labels={LABELS[lang]} />
      <CtaFooter lang={lang} />
      <Footer lang={lang} basePath="../" />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
