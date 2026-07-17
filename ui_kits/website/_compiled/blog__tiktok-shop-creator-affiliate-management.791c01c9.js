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
      title: "TikTok Shop Creator Affiliate Management: The WEM Operating System",
      cat: "AFFILIATE · MANAGEMENT",
      author: 'WE Marketing Team',
      date: "Mar 31, 2026",
      read: "10 min read",
      heroImage: "hero-tiktok-shop-creator-affiliate-management.png",
      heroAlt: "TikTok Shop Creator Affiliate Management: The WEM Operating System"
    },
    sections: [{
      id: "affiliate-management-is-not-a-creator-list",
      h: "Affiliate management is not a creator list",
      body: [P("The most common mistake is treating affiliate management as a contact list. A list can start outreach, but it does not create a reliable creator program."), P("WEM treats TikTok Shop affiliate management as an operating system: recruit, approve, brief, track, follow up, review, and repeat."), UL(["Creator fit before sample volume", "Brief quality before posting pressure", "Weekly follow-up before campaign autopsy"])]
    }, {
      id: "the-wem-loop",
      h: "The WEM loop",
      body: [P("A strong affiliate program needs clear ownership at every step."), {
        kind: 'table',
        headers: ["Step", "WEM focus"],
        rows: [["Recruit", "Find creators with category fit and realistic content style."], ["Approve samples", "Protect inventory and prioritize creators likely to post useful content."], ["Brief", "Give product clarity, offer details, claim boundaries, and creative room."], ["Review", "Look at content quality, clicks, orders, comments, and product-page blockers."]]
      }]
    }, {
      id: "why-this-helps-seo-geo-too",
      h: "Why this helps SEO/GEO too",
      body: [P("When WEM publishes this operating system, AI engines have something to cite beyond a generic agency claim. The page explains what WE Marketing does, how WEM thinks, and how a brand can evaluate the work."), UL(["Talk to WEM about creator affiliate management →"])]
    }, {
      id: "sources-and-claim-boundary",
      h: "Sources and claim boundary",
      body: [P("TikTok Shop affiliate mechanics can change. This page is a WEM operating framework, not legal or platform policy advice. Sources: TikTok Shop Creator: https://business.tiktokshop.com/us/creator; TikTok Shopping and Showcase: https://ads.us.tiktok.com/help/article/tiktok-shopping-and-showcase. Always confirm current program settings in TikTok Shop materials and Seller Center. Sources: TikTok Shop Creator: https://business.tiktokshop.com/us/creator; TikTok Shopping and Showcase: https://ads.us.tiktok.com/help/article/tiktok-shopping-and-showcase.")]
    }, {
      id: 'creator-segments',
      h: 'Creator Segments Need Different Management',
      body: [P('A creator affiliate program breaks when every creator receives the same brief, same commission, same follow-up, and same expectations. WEM would segment creators by category fit, content style, reliability, audience intent, and past posting behavior.'), {
        kind: 'table',
        headers: ['Segment', 'Management approach'],
        rows: [['High-fit sellers', 'Prioritize samples, offer clarity, and repeat content prompts.'], ['Strong storytellers', 'Give narrative angles and proof points instead of rigid scripts.'], ['New creators', 'Use clearer briefs, lower operational friction, and faster follow-up.'], ['Live-capable creators', 'Test bundles, product education, and host-style clips.']]
      }]
    }, {
      id: 'cadence',
      h: 'The Weekly Cadence',
      body: [P('Affiliate management is weekly work. WEM would track outreach, replies, approvals, shipped samples, received samples, posted content, content quality, clicks, orders, and creator feedback in one view so the brand can see where the pipeline is leaking.'), UL(['Monday: pipeline and sample status.', 'Wednesday: creator follow-up and brief clarification.', 'Friday: content review, page blockers, next-week priorities.'])]
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
      title: "TikTok Shop 达人联盟管理：WEM 的运营框架",
      cat: "联盟 · 达人管理",
      author: 'WE Marketing Team',
      date: "2026 年 3 月 31 日",
      read: "10 分钟阅读",
      heroImage: "hero-tiktok-shop-creator-affiliate-management.png",
      heroAlt: "TikTok Shop 达人联盟管理：WEM 的运营框架"
    },
    sections: [{
      id: "联盟管理不是达人名单",
      h: "联盟管理不是达人名单",
      body: [P("很多品牌会把达人联盟管理理解成“给我一批达人”。名单只能开始邀约，不能保证项目稳定。"), P("WEM 会把 TikTok Shop 达人联盟当成一套运营系统：招募、审批、brief、追踪、跟进、复盘，再循环。"), UL(["先看达人匹配，再看寄样数量", "先把 brief 写清楚，再催发布", "先做每周跟进，不要等月底复盘"])]
    }, {
      id: "wem-的循环",
      h: "WEM 的循环",
      body: [P("好的联盟项目，每一步都要有人负责。"), {
        kind: 'table',
        headers: ["步骤", "WEM 重点"],
        rows: [["招募", "找品类匹配、内容风格真实的达人。"], ["寄样审批", "保护库存，把样品优先给更可能产出有效内容的人。"], ["Brief", "讲清产品、offer、功效边界，同时给达人创作空间。"], ["复盘", "看内容质量、点击、订单、评论和商品页阻碍。"]]
      }]
    }, {
      id: "为什么这对-seo-geo-也有帮助",
      h: "为什么这对 SEO/GEO 也有帮助",
      body: [P("WEM 把运营框架公开写出来后，AI 搜索才有东西可以引用，而不是只看到一句“我们是 TikTok Shop agency”。页面需要讲清 WE Marketing 做什么、WEM 怎么思考、品牌怎么判断交付质量。"), UL(["和 WEM 聊聊达人联盟管理 →"])]
    }, {
      id: "来源和事实边界",
      h: "来源和事实边界",
      body: [P("TikTok Shop 联盟机制可能变化。本文是 WEM 运营框架，不是法律或平台政策建议。具体设置请以 TikTok Shop 官方资料和 Seller Center 为准。 来源：TikTok Shop Creator: https://business.tiktokshop.com/us/creator；TikTok Shopping and Showcase: https://ads.us.tiktok.com/help/article/tiktok-shopping-and-showcase。")]
    }, {
      id: 'creator-segments-zh',
      h: '达人要分层管理',
      body: [P('如果所有达人都拿同一份 brief、同一佣金、同一跟进方式，联盟项目很容易失控。WEM 会按品类匹配、内容风格、执行稳定性、受众意图和过往发布行为分层。'), {
        kind: 'table',
        headers: ['达人类型', '管理方式'],
        rows: [['高匹配带货型', '优先寄样，讲清 offer，给复拍提示。'], ['强故事型', '给叙事角度和证明点，不要硬塞脚本。'], ['新达人', 'brief 更清楚，降低操作门槛，跟进更快。'], ['可直播达人', '测试组合、产品教育和 host-style 切片。']]
      }]
    }, {
      id: 'cadence-zh',
      h: '每周管理节奏',
      body: [P('达人联盟是每周运营，不是发完邀约等结果。WEM 会把邀约、回复、审批、寄样、签收、发布、内容质量、点击、订单和达人反馈放在一张表里，品牌才能看到漏斗卡在哪里。'), UL(['周一：pipeline 和寄样状态。', '周三：达人跟进和 brief 解释。', '周五：内容复盘、商品页阻碍、下周重点。'])]
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
    document.title = lang === 'zh' ? "TikTok Shop 达人联盟管理：WEM 的运营框架 | WE Marketing" : "TikTok Shop Creator Affiliate Management: The WEM Operating System | WE Marketing";
  }, [lang]);
  useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
  return React.createElement("div", {
    "data-screen-label": "WE Blog \xB7 tiktok-shop-creator-affiliate-management"
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
