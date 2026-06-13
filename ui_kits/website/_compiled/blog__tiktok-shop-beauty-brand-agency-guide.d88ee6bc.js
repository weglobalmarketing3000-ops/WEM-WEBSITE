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
      title: "TikTok Shop Agency for Beauty Brands: What Actually Matters",
      cat: "BEAUTY · TIKTOK SHOP",
      author: 'WE Marketing Team',
      date: "Nov 20, 2025",
      read: "9 min read",
      heroImage: "hero-tiktok-shop-beauty-brand-agency-guide.png",
      heroAlt: "TikTok Shop Agency for Beauty Brands: What Actually Matters"
    },
    sections: [{
      id: "beauty-needs-proof-people-can-see",
      h: "Beauty needs proof people can see",
      body: [P("Beauty brands need creators who can show texture, shade, routine, packaging, application, and realistic expectations. A generic lifestyle creator may not be enough."), P("The agency also has to understand claim boundaries. If a creator overpromises, the brand may get short-term attention and long-term risk."), UL(["Texture and shade clarity", "Routine fit", "Realistic before/after language", "Product-page images that support creator traffic"])]
    }, {
      id: "what-to-ask-an-agency",
      h: "What to ask an agency",
      body: [P("A beauty-focused TikTok Shop agency should be able to discuss content quality and conversion operations in the same conversation."), {
        kind: 'table',
        headers: ["Question", "Why it matters"],
        rows: [["Can creators show texture clearly?", "Beauty decisions often happen in the demo, not the caption."], ["How are claims reviewed?", "The brand needs safe language and consistent approvals."], ["Can UGC be reused?", "Creator content can support ads, product pages, and email if rights are clear."], ["How is live handled?", "Live needs product education, shade/texture questions, and offer clarity."]]
      }]
    }, {
      id: "wem-beauty-workflow",
      h: "WEM beauty workflow",
      body: [P("WEM supports beauty brands through creator casting, sample seeding, brief writing, UGC review, product-page feedback, and live host matching. The goal is simple: make the product easier to trust before the buyer leaves the page."), UL(["Talk to WEM about beauty TikTok Shop growth →"])]
    }, {
      id: "sources-and-claim-boundary",
      h: "Sources and claim boundary",
      body: [P("This page is not medical, legal, or regulatory advice. Beauty and wellness brands should review claims internally before creator publication. Sources: TikTok Shop Creator — https://business.tiktokshop.com/us/creator; TikTok Shopping and Showcase — https://ads.us.tiktok.com/help/article/tiktok-shopping-and-showcase.")]
    }, {
      id: 'beauty-proof',
      h: 'Beauty Content Needs Visible Proof',
      body: [P('Beauty content becomes stronger when the buyer can see texture, shade, finish, routine fit, packaging scale, and realistic use. WEM would not approve a creator plan that only says “make it aesthetic.” The content has to reduce uncertainty.'), UL(['Show texture on different skin tones when relevant.', 'Explain routine order and frequency.', 'Avoid unrealistic before/after promises.', 'Capture close-ups that can be reused in PDP or paid social.', 'Record questions that should become FAQ.'])]
    }, {
      id: 'beauty-page',
      h: 'The Product Page Has To Match The Video',
      body: [P('If the creator shows texture, the product page should show texture. If the creator explains a routine, the page should support that routine. If comments ask about skin type, scent, shade, or timing, the page should answer those questions quickly.'), {
        kind: 'table',
        headers: ['Creator content', 'Product page response'],
        rows: [['Texture demo', 'Add close-up texture image or application note.'], ['Routine explanation', 'Add step order and usage frequency.'], ['Objection in comments', 'Add FAQ or comparison language.'], ['Strong UGC clip', 'Consider ad usage rights and PDP placement.']]
      }]
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
      title: "美妆品牌做 TikTok Shop，agency 应该懂什么",
      cat: "美妆 · TIKTOK SHOP",
      author: 'WE Marketing Team',
      date: "2025 年 11 月 20 日",
      read: "9 分钟阅读",
      heroImage: "hero-tiktok-shop-beauty-brand-agency-guide.png",
      heroAlt: "美妆品牌做 TikTok Shop，agency 应该懂什么"
    },
    sections: [{
      id: "美妆需要看得见的证明",
      h: "美妆需要看得见的证明",
      body: [P("美妆品牌需要达人讲清质地、色号、使用步骤、包装、上脸/上手效果和真实预期。泛生活方式达人不一定够。"), P("Agency 还要懂功效边界。达人如果夸大，短期可能有曝光，长期会带来风险。"), UL(["质地和色号是否清楚", "是否符合真实 routine", "前后对比语言是否稳妥", "商品页图片能否承接达人流量"])]
    }, {
      id: "该问-agency-什么",
      h: "该问 agency 什么",
      body: [P("懂美妆的 TikTok Shop agency，应该能同时聊内容质量和转化运营。"), {
        kind: 'table',
        headers: ["问题", "为什么重要"],
        rows: [["达人能不能拍清质地？", "美妆决策很多发生在演示里，不是在 caption。"], ["功效怎么审核？", "品牌需要安全、稳定的表达。"], ["UGC 能不能复用？", "如果授权清楚，达人内容可以用于广告、商品页和邮件。"], ["直播怎么处理？", "直播要回答质地、色号、使用场景和 offer。"]]
      }]
    }, {
      id: "wem-的美妆流程",
      h: "WEM 的美妆流程",
      body: [P("WEM 会帮美妆品牌做达人筛选、寄样、brief、UGC 审核、商品页反馈和直播主持人匹配。目标很简单：在用户离开页面前，让产品更容易被信任。"), UL(["和 WEM 聊聊美妆 TikTok Shop 增长 →"])]
    }, {
      id: "来源和事实边界",
      h: "来源和事实边界",
      body: [P("本文不是医疗、法律或监管建议。美妆和健康相关产品发布达人内容前，应先做内部 claim review。 来源：TikTok Shop Creator — https://business.tiktokshop.com/us/creator；TikTok Shopping and Showcase — https://ads.us.tiktok.com/help/article/tiktok-shopping-and-showcase。")]
    }, {
      id: 'beauty-proof-zh',
      h: '美妆内容需要看得见的证明',
      body: [P('美妆内容越能让用户看到质地、色号、妆效/肤感、routine、包装大小和真实使用，越容易建立信任。WEM 不会只接受“拍得高级一点”这种 brief，内容必须降低不确定性。'), UL(['相关时展示不同肤色上的质地。', '讲清使用顺序和频率。', '避免不真实的前后对比承诺。', '拍摄可复用于 PDP 或 paid social 的 close-up。', '记录评论里应该进入 FAQ 的问题。'])]
    }, {
      id: 'beauty-page-zh',
      h: '商品页要接住视频里的信息',
      body: [P('如果达人展示质地，商品页也要有质地图。如果达人讲 routine，页面要支持这个 routine。如果评论问肤质、气味、色号或使用时间，页面要快速回答。'), {
        kind: 'table',
        headers: ['达人内容', '商品页应该怎么接'],
        rows: [['质地演示', '加入近景质地图或使用说明。'], ['routine 解释', '加入步骤顺序和使用频率。'], ['评论里的顾虑', '加入 FAQ 或对比语言。'], ['强 UGC 片段', '考虑广告授权和 PDP 摆放。']]
      }]
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
    document.title = lang === 'zh' ? "美妆品牌做 TikTok Shop，agency 应该懂什么 | WE Marketing" : "TikTok Shop Agency for Beauty Brands: What Actually Matters | WE Marketing";
  }, [lang]);
  useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
  return React.createElement("div", {
    "data-screen-label": "WE Blog \xB7 tiktok-shop-beauty-brand-agency-guide"
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
