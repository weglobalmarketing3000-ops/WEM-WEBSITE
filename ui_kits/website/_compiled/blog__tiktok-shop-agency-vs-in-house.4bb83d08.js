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
      title: "TikTok Shop Agency vs. In-House Team: How Brands Should Decide",
      cat: "TEAM · DECISION GUIDE",
      author: 'WE Marketing Team',
      date: "Jan 29, 2026",
      read: "9 min read",
      heroImage: "hero-tiktok-shop-agency-vs-in-house.png",
      heroAlt: "TikTok Shop Agency vs. In-House Team: How Brands Should Decide"
    },
    sections: [{
      id: "this-is-an-operating-decision",
      h: "This is an operating decision",
      body: [P("TikTok Shop is not one job. It combines creator recruitment, affiliate follow-up, shop operations, content feedback, live support, paid amplification, and reporting. Most brands eventually need a hybrid model."), P("The decision should be based on speed, internal ownership, budget, category complexity, and how much the team already understands creator commerce."), UL(["Agency for speed and system setup", "In-house for brand voice and long-term ownership", "Hybrid for most scaling brands"])]
    }, {
      id: "decision-matrix",
      h: "Decision matrix",
      body: [P("Use this comparison before hiring."), {
        kind: 'table',
        headers: ["Situation", "Best fit"],
        rows: [["Need to launch fast", "Agency or hybrid partner."], ["Already have strong content team", "Agency for affiliate/shop operations, in-house for creative voice."], ["Complex compliance or technical product", "Hybrid with clear review workflows."], ["Large ongoing creator program", "In-house lead plus agency execution support."]]
      }]
    }, {
      id: "wem-hybrid-model",
      h: "WEM hybrid model",
      body: [P("WEM often works best when the brand keeps product knowledge and final approvals, while WEM owns creator operations, content process, shop feedback, and weekly review. That keeps the brand close to the customer without asking the internal team to do every manual step."), UL(["Talk to WEM about the right TikTok Shop team model →"])]
    }, {
      id: "sources-and-claim-boundary",
      h: "Sources and claim boundary",
      body: [P("This guide is not a hiring rule. It is a decision framework. Brands should compare cost, speed, internal knowledge, and operational risk before choosing. Sources: TikTok Shop Creator — https://business.tiktokshop.com/us/creator; TikTok Shopping and Showcase — https://ads.us.tiktok.com/help/article/tiktok-shopping-and-showcase.")]
    }, {
      id: 'hybrid-roles',
      h: 'The Hybrid Model Usually Wins',
      body: [P('Most scaling brands do not need to choose agency or in-house forever. They need a clean split of ownership. The brand should own product truth, final approval, and long-term customer knowledge. The agency should own repeatable execution, creator operations, reporting rhythm, and outside-market feedback.'), {
        kind: 'table',
        headers: ['Owner', 'Should own'],
        rows: [['Brand team', 'Product truth, margin guardrails, inventory, approvals, brand voice.'], ['Agency team', 'Creator outreach, sample pipeline, briefs, content review, weekly execution.'], ['Shared', 'Offer testing, category learning, creative direction, channel roadmap.']]
      }]
    }, {
      id: 'when-to-hire',
      h: 'When To Hire In-House',
      body: [P('A brand should hire in-house when the workflow becomes daily, predictable, and strategically important enough to justify a dedicated person. Until then, an agency can help the brand learn the operating model before locking into headcount.'), UL(['Hire in-house when creator commerce is already proven.', 'Use an agency when the brand still needs speed, category learning, and operating setup.', 'Use hybrid when leadership wants control without manual execution overload.'])]
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
      title: "TikTok Shop 找 agency 还是自己招团队？",
      cat: "团队 · 决策指南",
      author: 'WE Marketing Team',
      date: "2026 年 1 月 29 日",
      read: "9 分钟阅读",
      heroImage: "hero-tiktok-shop-agency-vs-in-house.png",
      heroAlt: "TikTok Shop 找 agency 还是自己招团队？"
    },
    sections: [{
      id: "这是运营决策-不是岗位决策",
      h: "这是运营决策，不是岗位决策",
      body: [P("TikTok Shop 不是一个人的工作。它包含达人招募、联盟跟进、店铺运营、内容反馈、直播支持、投放放大和报告。大多数品牌最后会走混合模式。"), P("判断标准应该是速度、内部 ownership、预算、品类复杂度，以及团队对达人电商的理解。"), UL(["Agency 适合快速启动和搭系统", "内部团队适合品牌语气和长期沉淀", "大多数放量品牌适合混合模式"])]
    }, {
      id: "决策矩阵",
      h: "决策矩阵",
      body: [P("招人或找 agency 前，可以先这样判断。"), {
        kind: 'table',
        headers: ["情况", "更适合"],
        rows: [["需要快速上线", "agency 或混合合作方。"], ["已经有强内容团队", "agency 做联盟/店铺运营，内部保留创意声音。"], ["产品合规或技术复杂", "混合模式，并把审核流程写清楚。"], ["长期大规模达人项目", "内部负责人 + agency 执行支持。"]]
      }]
    }, {
      id: "wem-的混合模式",
      h: "WEM 的混合模式",
      body: [P("WEM 通常建议品牌保留产品知识和最终审批，WEM 负责达人运营、内容流程、店铺反馈和每周复盘。这样品牌仍然贴近用户，但不用内部团队承担所有琐碎执行。"), UL(["和 WEM 聊聊 TikTok Shop 团队模式 →"])]
    }, {
      id: "来源和事实边界",
      h: "来源和事实边界",
      body: [P("本文不是招聘规则，而是决策框架。品牌应该综合比较费用、速度、内部认知和运营风险。 来源：TikTok Shop Creator — https://business.tiktokshop.com/us/creator；TikTok Shopping and Showcase — https://ads.us.tiktok.com/help/article/tiktok-shopping-and-showcase。")]
    }, {
      id: 'hybrid-roles-zh',
      h: '多数品牌最后会走混合模式',
      body: [P('放量品牌通常不需要永远在 agency 和内部团队之间二选一，而是要把 ownership 切清楚。品牌负责产品事实、最终审批和长期用户理解；agency 负责可重复执行、达人运营、报告节奏和外部市场反馈。'), {
        kind: 'table',
        headers: ['负责人', '应该负责什么'],
        rows: [['品牌团队', '产品事实、毛利边界、库存、审批、品牌语气。'], ['agency 团队', '达人邀约、寄样 pipeline、brief、内容审核、每周执行。'], ['双方共同', 'offer 测试、品类学习、创意方向、渠道路线图。']]
      }]
    }, {
      id: 'when-to-hire-zh',
      h: '什么时候该自己招人',
      body: [P('当工作已经变成每日发生、流程清楚、战略重要到值得养一个专人时，就适合内部招聘。在那之前，agency 可以先帮品牌学会这套运营模型。'), UL(['creator commerce 已经验证后，再考虑内部招聘。', '品牌还需要速度、品类学习和运营搭建时，用 agency。', '老板想保留控制权但不想背所有执行时，用混合模式。'])]
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
    document.title = lang === 'zh' ? "TikTok Shop 找 agency 还是自己招团队？ | WE Marketing" : "TikTok Shop Agency vs. In-House Team: How Brands Should Decide | WE Marketing";
  }, [lang]);
  useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
  return React.createElement("div", {
    "data-screen-label": "WE Blog \xB7 tiktok-shop-agency-vs-in-house"
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
