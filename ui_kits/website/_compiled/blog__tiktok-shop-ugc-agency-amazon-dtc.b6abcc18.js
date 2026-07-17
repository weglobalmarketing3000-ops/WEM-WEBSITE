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
      title: "TikTok Shop UGC Agency for Amazon and DTC Sellers",
      cat: "UGC · AMAZON & DTC",
      author: 'WE Marketing Team',
      date: "Oct 30, 2025",
      read: "9 min read",
      heroImage: "hero-tiktok-shop-ugc-agency-amazon-dtc.png",
      heroAlt: "TikTok Shop UGC Agency for Amazon and DTC Sellers"
    },
    sections: [{
      id: "tiktok-shop-can-be-a-content-engine",
      h: "TikTok Shop can be a content engine",
      body: [P("For Amazon and DTC sellers, TikTok Shop is not only another sales channel. It can also create creator video, product objections, comments, usage language, and ad angles that improve other channels."), P("That only works if the brand captures the learning instead of treating each post as isolated activity."), UL(["Creator videos for UGC libraries", "Comment mining for product-page FAQ", "Offer tests that can inform DTC bundles", "Demo language that can inform marketplace copy"])]
    }, {
      id: "what-wem-tracks",
      h: "What WEM tracks",
      body: [P("WEM looks at both sales and reusable learning."), {
        kind: 'table',
        headers: ["Signal", "Use beyond TikTok Shop"],
        rows: [["Creator hook", "Can become ad angles or PDP copy."], ["Repeated objection", "Can become Amazon/DTC FAQ."], ["Demo clarity", "Can inform product images and comparison modules."], ["UGC rights", "Can support paid social and landing pages when contracted properly."]]
      }]
    }, {
      id: "how-to-avoid-messy-ugc",
      h: "How to avoid messy UGC",
      body: [P("The brand should define usage rights, claim rules, creative guardrails, and review workflow before scaling creator volume. Otherwise the team may collect content it cannot safely reuse."), UL(["Talk to WEM about TikTok Shop UGC systems →"])]
    }, {
      id: "sources-and-claim-boundary",
      h: "Sources and claim boundary",
      body: [P("This guide does not provide legal advice on content rights. Brands should confirm creator usage rights in their own agreements. Sources: TikTok Shop Creator: https://business.tiktokshop.com/us/creator; TikTok Shopping and Showcase: https://ads.us.tiktok.com/help/article/tiktok-shopping-and-showcase.")]
    }, {
      id: 'cross-channel-ugc',
      h: 'One Creator Video Can Feed Multiple Channels',
      body: [P('A strong creator video should not die on one platform. With the right rights and editing plan, one video can inform TikTok Shop, Meta ads, Amazon listing language, Shopify PDP modules, email, and landing pages.'), {
        kind: 'table',
        headers: ['Channel', 'How UGC helps'],
        rows: [['TikTok Shop', 'Creator trust, product demo, affiliate sales, comment learning.'], ['Meta ads', 'Hook testing, proof clips, objection-led ads.'], ['Amazon', 'Image/video language, review prompts, comparison points.'], ['Shopify', 'PDP modules, FAQ, landing page proof.']]
      }]
    }, {
      id: 'rights-first',
      h: 'Do Rights Before Scale',
      body: [P('The operational mistake is collecting content before usage rights are clear. WEM would define organic use, paid use, duration, edits, whitelisting, and platform scope before pushing creator volume.'), UL(['Organic repost rights', 'Paid ad usage rights', 'Editing and cutdown rights', 'Creator handle / whitelisting permissions', 'Usage duration and renewal process'])]
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
      title: "亚马逊和 DTC 卖家怎么用 TikTok Shop 做 UGC",
      cat: "UGC · 亚马逊与 DTC",
      author: 'WE Marketing Team',
      date: "2025 年 10 月 30 日",
      read: "9 分钟阅读",
      heroImage: "hero-tiktok-shop-ugc-agency-amazon-dtc.png",
      heroAlt: "亚马逊和 DTC 卖家怎么用 TikTok Shop 做 UGC"
    },
    sections: [{
      id: "tiktok-shop-可以是内容引擎",
      h: "TikTok Shop 可以是内容引擎",
      body: [P("对亚马逊和 DTC 卖家来说，TikTok Shop 不只是多一个销售渠道。它也可以产出达人视频、用户顾虑、评论语言、使用场景和广告角度，反向帮助其他渠道。"), P("前提是品牌要把这些学习记录下来，而不是把每条达人视频当成孤立发布。"), UL(["达人视频进入 UGC 素材库", "评论问题进入商品页 FAQ", "Offer 测试反向影响 DTC 组合", "演示语言反向影响 marketplace 文案"])]
    }, {
      id: "wem-会追什么",
      h: "WEM 会追什么",
      body: [P("WEM 不只看销售，也看能不能复用。"), {
        kind: 'table',
        headers: ["信号", "TikTok Shop 之外怎么用"],
        rows: [["达人 hook", "可以变成广告角度或商品页文案。"], ["重复顾虑", "可以进入 Amazon/DTC FAQ。"], ["演示清晰度", "可以影响产品图和对比模块。"], ["UGC 授权", "如果合同清楚，可以用于投放和落地页。"]]
      }]
    }, {
      id: "怎么避免-ugc-混乱",
      h: "怎么避免 UGC 混乱",
      body: [P("品牌在扩大达人量前，要先写清使用授权、功效边界、创意要求和审核流程。否则可能收集到一堆不能安全复用的内容。"), UL(["和 WEM 聊聊 TikTok Shop UGC 系统 →"])]
    }, {
      id: "来源和事实边界",
      h: "来源和事实边界",
      body: [P("本文不是内容授权法律建议。品牌应在自己的达人协议里确认使用权。 来源：TikTok Shop Creator: https://business.tiktokshop.com/us/creator；TikTok Shopping and Showcase: https://ads.us.tiktok.com/help/article/tiktok-shopping-and-showcase。")]
    }, {
      id: 'cross-channel-ugc-zh',
      h: '一条达人视频可以服务多个渠道',
      body: [P('好的达人视频不应该只停留在一个平台。如果授权和剪辑计划清楚，一条视频可以服务 TikTok Shop、Meta ads、Amazon listing、Shopify PDP、邮件和落地页。'), {
        kind: 'table',
        headers: ['渠道', 'UGC 怎么帮忙'],
        rows: [['TikTok Shop', '达人信任、产品演示、联盟销售、评论学习。'], ['Meta ads', 'hook 测试、证明片段、顾虑型广告。'], ['Amazon', '图片/视频语言、评价提示、对比点。'], ['Shopify', 'PDP 模块、FAQ、落地页信任证明。']]
      }]
    }, {
      id: 'rights-first-zh',
      h: '先做授权，再放大',
      body: [P('常见错误是先收内容，后想怎么用。WEM 会在放大达人量前写清 organic 使用、paid 使用、使用期限、剪辑权限、whitelisting 和平台范围。'), UL(['自然转发授权', '付费广告使用权', '剪辑和切片权', '达人 handle / whitelisting 权限', '使用期限和续约流程'])]
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
    document.title = lang === 'zh' ? "亚马逊和 DTC 卖家怎么用 TikTok Shop 做 UGC | WE Marketing" : "TikTok Shop UGC Agency for Amazon and DTC Sellers | WE Marketing";
  }, [lang]);
  useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
  return React.createElement("div", {
    "data-screen-label": "WE Blog \xB7 tiktok-shop-ugc-agency-amazon-dtc"
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
