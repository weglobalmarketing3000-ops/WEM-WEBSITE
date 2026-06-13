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
      title: "TikTok Shop Agency Cost Guide: What Brands Are Really Paying For",
      cat: "AGENCY · COST",
      author: 'WE Marketing Team',
      date: "Feb 19, 2026",
      read: "8 min read",
      heroImage: "hero-tiktok-shop-agency-cost-guide.png",
      heroAlt: "TikTok Shop Agency Cost Guide: What Brands Are Really Paying For"
    },
    sections: [{
      id: "cost-only-makes-sense-with-scope",
      h: "Cost only makes sense with scope",
      body: [P("A low monthly fee can be expensive if the agency only sends reports and waits for the brand to do the work. A higher fee can be reasonable if the partner owns creator follow-up, content review, shop updates, live planning, and weekly optimization."), P("The right question is not “How much does a TikTok Shop agency cost?” The better question is “What operating responsibility is included?”"), UL(["Creator management", "Shop operations", "Content and UGC production", "Live support", "Reporting and optimization"])]
    }, {
      id: "common-pricing-shapes",
      h: "Common pricing shapes",
      body: [P("Exact pricing depends on scope, category, product count, creator volume, and urgency."), {
        kind: 'table',
        headers: ["Model", "Best for"],
        rows: [["Monthly retainer", "Brands that need steady operations and weekly accountability."], ["Project launch package", "Brands that need setup, first creator wave, and product-page readiness."], ["Performance component", "Brands that can track sales and agree on attribution rules."], ["Content package", "Brands mainly buying UGC/video assets rather than full shop management."]]
      }]
    }, {
      id: "how-wem-frames-cost",
      h: "How WEM frames cost",
      body: [P("WEM recommends comparing cost against workload removed from the brand team and learning speed added to the program. A good partner should make the brand clearer on what to do next every week."), UL(["Talk to WEM about TikTok Shop agency scope →"])]
    }, {
      id: "sources-and-claim-boundary",
      h: "Sources and claim boundary",
      body: [P("This page does not publish universal pricing benchmarks because agency scope varies widely. Use it as a comparison framework, then request a scope-specific proposal. Sources: TikTok Shop Creator — https://business.tiktokshop.com/us/creator; TikTok Shopping and Showcase — https://ads.us.tiktok.com/help/article/tiktok-shopping-and-showcase.")]
    }, {
      id: 'scope-ladder',
      h: 'A Scope Ladder Makes Pricing Clearer',
      body: [P('A brand can compare agency pricing only after comparing scope. WEM would split scope into a ladder: advisory, launch support, creator operations, full shop management, and growth system. Each step carries different work and accountability.'), {
        kind: 'table',
        headers: ['Scope level', 'What is included'],
        rows: [['Advisory', 'Audit, strategy, and operating recommendations.'], ['Launch support', 'Setup, product page review, first creator wave, first reporting rhythm.'], ['Creator operations', 'Outreach, sample management, briefs, follow-up, content review.'], ['Full management', 'Creator, shop, live/content, offer testing, weekly optimization.']]
      }]
    }, {
      id: 'hidden-costs',
      h: 'Hidden Costs Brands Forget',
      body: [P('The cheapest agency can become expensive if the brand still has to chase creators, rewrite briefs, fix product pages, manage shipping, and interpret reports. WEM frames cost around workload removed and learning speed added.'), UL(['Internal team hours saved', 'Creator response and post-rate improvement', 'Fewer wasted samples', 'Faster product-page fixes', 'More usable UGC and ad candidates'])]
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
      title: "TikTok Shop 代运营费用：品牌到底在买什么",
      cat: "代理 · 成本",
      author: 'WE Marketing Team',
      date: "2026 年 2 月 19 日",
      read: "8 分钟阅读",
      heroImage: "hero-tiktok-shop-agency-cost-guide.png",
      heroAlt: "TikTok Shop 代运营费用：品牌到底在买什么"
    },
    sections: [{
      id: "费用必须和范围一起看",
      h: "费用必须和范围一起看",
      body: [P("低月费不一定便宜。如果 agency 只是发报告，真正执行还要品牌自己做，那成本其实很高。高一点的费用也不一定贵，如果对方负责达人跟进、内容审核、店铺更新、直播计划和每周优化。"), P("问题不是“TikTok Shop 代运营多少钱”，而是“这个价格里到底包含哪些运营责任”。"), UL(["达人管理", "店铺运营", "内容和 UGC 生产", "直播支持", "报告和优化"])]
    }, {
      id: "常见收费方式",
      h: "常见收费方式",
      body: [P("具体费用取决于范围、品类、产品数量、达人量和上线节奏。"), {
        kind: 'table',
        headers: ["模式", "适合什么品牌"],
        rows: [["月度 retainer", "需要稳定运营和每周 accountability 的品牌。"], ["上线项目包", "需要搭店、第一批达人和商品页准备的品牌。"], ["效果成分", "能清楚追踪销售并约定归因规则的品牌。"], ["内容包", "主要想买 UGC/视频素材，而不是全托管的品牌。"]]
      }]
    }, {
      id: "wem-怎么看费用",
      h: "WEM 怎么看费用",
      body: [P("WEM 建议品牌把费用和“团队被省掉的工作量”以及“项目学习速度”放在一起看。好的合作方应该每周让品牌更清楚下一步做什么。"), UL(["和 WEM 聊聊 TikTok Shop 代运营范围 →"])]
    }, {
      id: "来源和事实边界",
      h: "来源和事实边界",
      body: [P("本文不写统一报价区间，因为 agency 范围差异很大。它是比较框架，具体仍需要按范围出 proposal。 来源：TikTok Shop Creator — https://business.tiktokshop.com/us/creator；TikTok Shopping and Showcase — https://ads.us.tiktok.com/help/article/tiktok-shopping-and-showcase。")]
    }, {
      id: 'scope-ladder-zh',
      h: '用范围阶梯看报价',
      body: [P('品牌只有先比较范围，才有资格比较价格。WEM 会把范围拆成几个层级：咨询、上线支持、达人运营、全托管和增长系统。每一级对应的工作和责任都不一样。'), {
        kind: 'table',
        headers: ['范围层级', '包含什么'],
        rows: [['咨询', '审计、策略和运营建议。'], ['上线支持', '开店/设置、商品页检查、第一批达人、初始报告节奏。'], ['达人运营', '邀约、寄样、brief、跟进、内容审核。'], ['全托管', '达人、店铺、直播/内容、offer 测试、每周优化。']]
      }]
    }, {
      id: 'hidden-costs-zh',
      h: '品牌经常忘记的隐形成本',
      body: [P('最便宜的 agency 可能最后最贵，如果品牌还要自己追达人、改 brief、修商品页、管物流、解释报告。WEM 会把费用和省下的内部工时、加快的学习速度一起看。'), UL(['节省内部团队时间', '提高达人回复和发布率', '减少样品浪费', '更快修商品页', '产出更多可用 UGC 和广告素材'])]
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
    document.title = lang === 'zh' ? "TikTok Shop 代运营费用：品牌到底在买什么 | WE Marketing" : "TikTok Shop Agency Cost Guide: What Brands Are Really Paying For | WE Marketing";
  }, [lang]);
  useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
  return React.createElement("div", {
    "data-screen-label": "WE Blog \xB7 tiktok-shop-agency-cost-guide"
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
