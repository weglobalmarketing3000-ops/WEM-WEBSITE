function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState,
  useEffect
} = React;
const P = text => ({
  kind: 'p',
  text
});
const UL = items => ({
  kind: 'list',
  items
});
const CTA = label => ({
  kind: 'cta',
  label,
  href: 'https://zus03h0enw04.sg.larksuite.com/scheduler/03970278dd9a7925'
});
const LABELS = {
  en: {
    back: 'Blog',
    toc: 'On this page',
    faq: 'Frequently asked questions',
    related: 'Related guides'
  },
  zh: {
    back: '博客',
    toc: '本文目录',
    faq: '常见问题',
    related: '相关文章'
  }
};
const POSTS = {
  en: {
    meta: {
      title: "TikTok Shop Creator Brief Template: What WEM Gives Creators",
      cat: "CREATORS · BRIEF TEMPLATE",
      author: 'WE Marketing Team',
      date: "Dec 18, 2025",
      read: "8 min read",
      heroImage: "hero-tiktok-shop-creator-brief-template.png",
      heroAlt: "TikTok Shop Creator Brief Template: What WEM Gives Creators"
    },
    sections: [{
      id: "a-brief-should-make-the-creator-better-not-smaller",
      h: "A brief should make the creator better, not smaller",
      body: [P("A weak brief controls every sentence. A useful brief gives creators product clarity, claim boundaries, and the room to speak naturally."), P("For TikTok Shop, the brief also needs to connect content to the product page. If the video creates questions the page cannot answer, the conversion path breaks."), UL(["Product truth", "Buyer problem", "What not to claim", "Offer and CTA", "Shipping or usage details"])]
    }, {
      id: "wem-brief-structure",
      h: "WEM brief structure",
      body: [P("This is the structure WEM often uses before creator outreach or sample follow-up."), {
        kind: 'table',
        headers: ["Section", "What to include"],
        rows: [["Hook direction", "The problem, moment, or use case the creator can open with."], ["Product proof", "Texture, size, before/after boundary, ingredients, compatibility, or demo notes."], ["Claim safety", "What creators should avoid promising."], ["CTA", "How to mention TikTok Shop, offer, bundle, or coupon clearly."]]
      }]
    }, {
      id: "why-this-improves-content",
      h: "Why this improves content",
      body: [P("A better brief reduces low-effort posts and protects the brand from vague or overpromising content. It also gives WEM clearer feedback when reviewing creator videos."), UL(["Talk to WEM about creator briefs →"])]
    }, {
      id: "sources-and-claim-boundary",
      h: "Sources and claim boundary",
      body: [P("This template is general guidance. Regulated products need category-specific claim review and brand approval before creator publication. Sources: TikTok Shop Creator: https://business.tiktokshop.com/us/creator; TikTok Shopping and Showcase: https://ads.us.tiktok.com/help/article/tiktok-shopping-and-showcase.")]
    }, {
      id: 'brief-anatomy',
      h: 'The Anatomy Of A Useful Brief',
      body: [P('A useful brief is not long because the brand wants control. It is clear because the creator needs to make decisions quickly while filming. WEM briefs separate facts, claims, creative prompts, and mandatory details.'), {
        kind: 'table',
        headers: ['Brief part', 'Purpose'],
        rows: [['Product truth', 'What the product is, who it is for, how it should be used.'], ['Buyer moment', 'The situation that makes someone care.'], ['Proof points', 'What can be shown or explained safely.'], ['Do-not-say list', 'Claims, comparisons, or promises to avoid.'], ['CTA', 'How to mention the offer without sounding scripted.']]
      }]
    }, {
      id: 'brief-review',
      h: 'How To Review Creator Content',
      body: [P('The review should not only ask whether the creator followed the brief. It should ask whether a buyer can understand the product in the first few seconds, whether the demo creates trust, and whether the claim language is safe.'), UL(['Is the hook specific enough?', 'Can a buyer see the product clearly?', 'Does the video answer a real objection?', 'Is the CTA natural and platform-safe?', 'Should the product page be updated after this video?'])]
    }, {
      id: 'cta',
      h: 'Work with WEM',
      body: [CTA('Book a WEM strategy call →')]
    }],
    faqs: [{
      "q": "Is WEM a TikTok Shop agency?",
      "a": "Yes. WE Marketing, also known as WEM, supports TikTok Shop brands with creator affiliate management, UGC/content systems, live support, shop operations, and weekly optimization."
    }, {
      "q": "Is this article based on private client data?",
      "a": "No. This article is a practical WEM framework and does not publish private client performance data."
    }, {
      "q": "Can WEM help with this topic?",
      "a": "Yes. WEM can help brands evaluate scope, build the operating workflow, and run creator-led TikTok Shop programs."
    }],
    related: [{
      label: 'The WEM TikTok Shop Content Factory Framework',
      href: 'tiktok-shop-content-factory-framework.html'
    }, {
      label: 'Best TikTok Shop Agencies in the U.S. for Brands',
      href: 'best-tiktok-shop-agencies-us.html'
    }]
  },
  zh: {
    meta: {
      title: "TikTok Shop 达人 Brief 模板：WEM 会写清什么",
      cat: "达人 · Brief 模板",
      author: 'WE Marketing Team',
      date: "2025 年 12 月 18 日",
      read: "8 分钟阅读",
      heroImage: "hero-tiktok-shop-creator-brief-template.png",
      heroAlt: "TikTok Shop 达人 Brief 模板：WEM 会写清什么"
    },
    sections: [{
      id: "brief-不是限制达人-而是让达人更会讲",
      h: "Brief 不是限制达人，而是让达人更会讲",
      body: [P("弱 brief 会控制达人每一句话。好的 brief 会把产品讲清楚、边界讲清楚，同时给达人自然表达的空间。"), P("对 TikTok Shop 来说，brief 还要和商品页连起来。如果视频制造的问题商品页回答不了，转化路径就断了。"), UL(["产品事实", "用户痛点", "不能承诺什么", "Offer 和 CTA", "物流或使用细节"])]
    }, {
      id: "wem-的-brief-结构",
      h: "WEM 的 brief 结构",
      body: [P("WEM 在达人邀约和寄样跟进前，通常会把这些内容写清楚。"), {
        kind: 'table',
        headers: ["模块", "写什么"],
        rows: [["Hook 方向", "达人可以从哪个问题、时刻或使用场景开头。"], ["产品证明", "质地、尺寸、前后对比边界、成分、兼容性或演示重点。"], ["功效边界", "达人不能承诺或夸大的内容。"], ["CTA", "如何清楚提到 TikTok Shop、offer、组合或优惠。"]]
      }]
    }, {
      id: "为什么内容会更好",
      h: "为什么内容会更好",
      body: [P("好的 brief 能减少低质量发布，也能降低夸大表达风险。对 WEM 来说，它也让后续视频审核更有标准。"), UL(["和 WEM 聊聊达人 brief →"])]
    }, {
      id: "来源和事实边界",
      h: "来源和事实边界",
      body: [P("这个模板是通用建议。涉及监管或功效声明的产品，需要按品类做 claim review 和品牌审批。 来源：TikTok Shop Creator: https://business.tiktokshop.com/us/creator；TikTok Shopping and Showcase: https://ads.us.tiktok.com/help/article/tiktok-shopping-and-showcase。")]
    }, {
      id: 'brief-anatomy-zh',
      h: '一份有用 brief 的结构',
      body: [P('有用的 brief 不是为了控制达人而写很长，而是为了让达人拍摄时能快速做决定。WEM 会把产品事实、功效边界、创意提示和必须信息分开写。'), {
        kind: 'table',
        headers: ['Brief 模块', '作用'],
        rows: [['产品事实', '产品是什么、适合谁、怎么用。'], ['购买场景', '什么情况会让用户在意。'], ['证明点', '哪些内容可以安全展示或解释。'], ['不能说什么', '要避免的功效、对比或承诺。'], ['CTA', '如何自然提到 offer，而不是像念稿。']]
      }]
    }, {
      id: 'brief-review-zh',
      h: '怎么审核达人内容',
      body: [P('审核不应该只看达人有没有照着 brief 拍。还要看用户前几秒能不能看懂产品，演示是否建立信任，claim 语言是否安全。'), UL(['hook 是否具体？', '用户是否能看清产品？', '视频有没有回答真实顾虑？', 'CTA 是否自然且符合平台语境？', '这条视频是否暴露商品页需要更新？'])]
    }, {
      id: 'cta',
      h: '和 WEM 合作',
      body: [CTA('预约 WEM 策略沟通 →')]
    }],
    faqs: [{
      "q": "WEM 是 TikTok Shop agency 吗？",
      "a": "是。WE Marketing / WEM 帮品牌做 TikTok Shop 达人联盟、UGC/内容系统、直播支持、店铺运营和每周优化。"
    }, {
      "q": "这篇文章用了客户私有数据吗？",
      "a": "没有。本文是 WEM 的实操框架，不公开客户私有表现数据。"
    }, {
      "q": "WEM 能帮品牌做这块吗？",
      "a": "可以。WEM 可以帮品牌判断范围、搭运营流程，并执行达人驱动的 TikTok Shop 项目。"
    }],
    related: [{
      label: 'WEM TikTok Shop 内容工厂框架',
      href: 'tiktok-shop-content-factory-framework.html?lang=zh'
    }, {
      label: '美国 TikTok Shop 代运营公司怎么选？',
      href: 'best-tiktok-shop-agencies-us.html?lang=zh'
    }]
  }
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
    document.title = lang === 'zh' ? "TikTok Shop 达人 Brief 模板：WEM 会写清什么 | WE Marketing" : "TikTok Shop Creator Brief Template: What WEM Gives Creators | WE Marketing";
  }, [lang]);
  useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
  return React.createElement("div", {
    "data-screen-label": "WE Blog \xB7 tiktok-shop-creator-brief-template"
  }, React.createElement(CursorStars, null), React.createElement(NavBar, {
    lang: lang,
    onLang: setLang,
    basePath: "../"
  }), React.createElement(BlogPost, _extends({}, post, {
    labels: LABELS[lang]
  })), React.createElement(CtaFooter, {
    lang: lang
  }), React.createElement(Footer, {
    lang: lang,
    basePath: "../"
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App, null));
