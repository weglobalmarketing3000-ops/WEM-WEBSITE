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
const SOURCE_URL = 'https://www.tiktokshopglobalselling.com/zh-cn/settle?channel=us_mkt_official&from_official_website=true&site=us&unique_code=5765611542680046852';
const POSTS = {
  zh: {
    meta: {
      title: '美国主体但中国受益人：TikTok Shop ACCU 入驻要准备什么',
      cat: 'ACCU · 美国主体 POP',
      author: 'WE Marketing Team',
      date: '2026 年 5 月 21 日',
      read: '9 分钟阅读',
      heroImage: 'hero-us-pop-for-chinese-owned-sellers-v3.png',
      heroAlt: '中国品牌团队在国内小仓准备美国 TikTok Shop ACCU 入驻材料和商品样品'
    },
    sections: [{
      id: 'what-accu-is',
      h: 'ACCU 适合哪类卖家',
      body: [P('TikTok Shop Global Selling 官方页面里的“美区 POP-美国跨境主体入驻标准”，核心是：美国注册企业，且企业最终受益人包含中国人。页面列出的支持企业类型包括 Sole proprietorship、Corporation、Partnership。'), P('这条路径适合已经有美国公司结构、美国本地手机号、美国本地仓储物流能力，并且准备自己经营美国 TikTok Shop 店铺的中国卖家。它不是托管模式，也不是只交材料就结束。'), UL(['你需要美国本地发货能力。', '你需要清楚的美国公司文件和最终受益人证件链路。', '你需要能自己接住商品页、库存、客服、达人内容和复盘。'])]
    }, {
      id: 'materials',
      h: '官方列出的入驻材料',
      body: [P('官方页面列出的基础材料包括：全网唯一美国本地手机号码、全网唯一邮箱地址、美国公司注册文件、中国最终受益人证件、主要联系人证件，以及可选的第三方电商平台经营经验证明。'), {
        kind: 'table',
        headers: ['材料', '官方页面说明', 'WEM 准备建议'],
        rows: [['美国公司注册文件', 'Articles of Incorporation、Articles of Organization、Business Corporation Certificate、Business License、Certificate of Registration 等任一', '公司名称、地址、注册信息要和后续材料一致。'], ['中国最终受益人证件', '中国内地身份证、中国港澳台居民来往内地通行证、中国公民护照', '先确认受益人信息和公司结构能对应。'], ['主要联系人证件', '中国公民可用中国内地身份证/通行证/护照；美国公民可用美国驾照或美国公民护照', '联系人最好是后续能稳定处理平台通知的人。'], ['第三方平台经验', '官方页面标注为可选', '如果有 Amazon、Shopify、Walmart、独立站或国内平台经验，建议准备截图和店铺说明。']]
      }]
    }, {
      id: 'possible-extra-docs',
      h: '被驳回后可能补什么',
      body: [P('官方页面写明，上述资料提交后会进入平台审核。平台可能根据账号筛查结果驳回申请，并额外收集资料。页面列出的补充资料包括 IRS Letter，以及在主要联系人为美国人时可能要求的美国主要联系人地址证明。'), P('IRS Letter 官方只接受若干类型：IRS 147 C、IRS 252 C、IRS CP 575 A、IRS CP 575 B、IRS CP 575 G、IRS CP 575 E。页面还要求 IRS Letter 清晰包括 Business Name、Business Address、EIN Number、Issue date。'), P('美国主要联系人地址证明可以是包含该联系人的银行对账单、信用卡对账单，或电话、网络、水、电、天然气账单；地址证明需完整包括地址，且为最近 6 个月内产生。'), {
        kind: 'callout',
        text: 'WEM 判断：ACCU 最大风险不是“有没有文件”，而是文件之间是否一致。公司名、地址、EIN、联系人、受益人、手机号和邮箱最好在提交前统一检查。'
      }]
    }, {
      id: 'deposit-and-fulfillment',
      h: '保证金和履约不要混在一起看',
      body: [P('官方页面在 ACCU 这一路径下显示，美国主体跨境 POP 商家暂不缴纳店铺保证金。这一点要和中国/香港主体 POP 的 1500 美金店铺保证金分开看。'), P('但“暂不缴纳保证金”不等于进入成本低。ACCU 仍然要求美国本地仓储物流能力，需要美国本地发货。也就是说，品牌需要提前准备库存、发货时效、退货、客服和商品页面承接。'), UL(['如果美国仓只是名义上存在，后面达人起量时会很危险。', '如果产品页面没有本地化，达人带来的流量也不一定转化。', '如果样品发货慢，creator program 会很难跑出节奏。'])]
    }, {
      id: 'wem-playbook',
      h: 'WEM 的 ACCU 上线检查框架',
      body: [P('WE Marketing / WEM 会把 ACCU 当作一次美国市场上线准备，而不只是入驻资料提交。提交前看材料是否一致，提交后看商品页、达人、内容、物流和周复盘能不能接上。'), P('2024 年末到 2025 年初，WEM 团队协助 50+ 家 ACCU 店铺完成入驻准备和上线推进，工作覆盖美国公司注册协调、EIN/税号申请材料、主体和受益人信息梳理、平台材料提交、审核补件和下店后的运营衔接。我们更熟悉的是 ACCU 从资料准备到店铺能开始运营之间的那些细节，而不是只看一张清单。'), P('ACCU 卖家很容易低估中美运营差异。美国主体和本地仓只是进入门槛，真正起量还要看美国达人愿不愿意拍、商品页能不能用美国用户的语言解释价值、客服和退货预期是否清楚。国内团队熟悉的表达方式，直接搬到美国 TikTok Shop 上，经常会水土不服。'), P('WEM 的角色是把两边接起来：我们可以用中文和国内品牌、工厂、运营团队对齐资料、货盘和供应链，再用美国市场的节奏去推进商品页、本地化内容、达人寄样、联盟设置和每周复盘。对 ACCU 卖家来说，找到会讲中文、又懂美国 TikTok Shop 运营的团队，会比只找一个“填资料”的服务更有价值。'), UL(['主体检查：美国公司文件、EIN/IRS 资料、联系人和受益人信息。', '履约检查：美国仓、发货时效、退货地址、库存补货节奏。', '内容检查：商品页主图、卖点、FAQ、短视频演示、达人 brief。', '增长检查：达人联盟、UGC 授权、直播测试、Meta/TikTok 广告素材复用。']), P('我们的冷启动方式通常从少数 hero SKU 开始：先判断哪些产品适合被美国达人讲清楚，再同步优化商品页、寄样节奏、UGC 角度、联盟佣金和每周数据复盘。这样不是盲目铺货，而是更快找到能起量的产品和内容角度。'), CTA('预约 WEM ACCU 上线准备评估 →')]
    }, {
      id: 'source',
      h: '来源和事实边界',
      body: [P('本文整理自 TikTok Shop Global Selling 中文官方入驻页面，整理日期为 2026 年 5 月 28 日。官方页面链接：' + SOURCE_URL), P('平台规则、保证金和审核补件可能更新。本文用于运营准备和材料理解，不替代官方审核、法律税务建议；美国公司注册、税务身份和 EIN 相关事项也应按具体情况确认。')]
    }],
    faqs: [{
      q: 'ACCU 是什么意思？',
      a: '本文按官方页面语境，指美国主体跨境商家，且美国注册企业的最终受益人包含中国人。'
    }, {
      q: 'ACCU 需要缴纳店铺保证金吗？',
      a: '官方页面当前在 ACCU/美国主体跨境 POP 路径下显示暂不缴纳店铺保证金。平台政策可能更新，申请前应重新核对官方页面。'
    }, {
      q: 'WEM 能帮 ACCU 卖家做什么？',
      a: 'WEM 可以帮助卖家做入驻路径判断、美国公司和 EIN 材料准备协调、平台材料一致性检查、审核补件、美国店铺上线节奏、商品页优化、达人联盟、UGC 内容和周复盘，并用中英双语团队连接国内品牌和美国市场执行。'
    }],
    related: [{
      label: '中国品牌入驻美国 TikTok Shop：四种路径怎么选',
      href: 'cross-border-tiktok-shop-entry-models.html?lang=zh'
    }, {
      label: '中国厂家出海做 TikTok Shop：全托管和品牌托管适合谁',
      href: 'tiktok-shop-managed-models-for-manufacturers.html?lang=zh'
    }]
  },
  en: {
    meta: {
      title: 'U.S. TikTok Shop POP for Chinese-Owned Sellers: ACCU Checklist',
      cat: 'ACCU · U.S. ENTITY POP',
      author: 'WE Marketing Team',
      date: 'May 21, 2026',
      read: '8 min read',
      heroImage: 'hero-us-pop-for-chinese-owned-sellers-v3.png',
      heroAlt: 'Chinese brand team preparing U.S. TikTok Shop ACCU entry documents and product samples in a China-based warehouse office'
    },
    sections: [{
      id: 'what-accu-is',
      h: 'Who the ACCU path fits',
      body: [P('On TikTok Shop Global Selling’s Chinese official entry page, the U.S. entity POP path is described as a U.S.-registered business whose ultimate beneficial owner includes a Chinese person. The listed supported business types include Sole proprietorship, Corporation, and Partnership.'), P('This path fits sellers that already have a U.S. entity, a U.S. local phone number, U.S. local warehousing and logistics capability, and a plan to operate a U.S. TikTok Shop store directly. It is not a managed model.'), UL(['You need U.S. local shipping capability.', 'You need clean U.S. company and Chinese UBO documentation.', 'You still need store operations, inventory, customer service, creators, and reporting.'])]
    }, {
      id: 'materials',
      h: 'Official materials listed',
      body: [P('The official page lists the following materials: a unique U.S. local phone number, unique email address, U.S. company registration documents, Chinese ultimate beneficial owner identity documents, main contact identity documents, and optional proof of third-party ecommerce experience.'), {
        kind: 'table',
        headers: ['Material', 'Official-page detail', 'WEM preparation note'],
        rows: [['U.S. registration documents', 'Articles of Incorporation, Articles of Organization, Business Corporation Certificate, Business License, Certificate of Registration, or similar', 'Keep business name, address, and registration information consistent.'], ['Chinese UBO ID', 'Mainland China ID, Mainland Travel Permit for Hong Kong/Macau/Taiwan residents, or Chinese passport', 'Confirm the UBO link matches the company structure.'], ['Main contact ID', 'Chinese or U.S. citizen ID options are listed separately on the official page', 'Use a stable contact who can handle platform notices.'], ['Ecommerce experience', 'Marked optional on the official page', 'Prepare Amazon, Shopify, Walmart, DTC, or domestic marketplace proof if available.']]
      }]
    }, {
      id: 'possible-extra-docs',
      h: 'Possible extra documents after rejection',
      body: [P('The official page says the platform may reject an application after screening and request additional documents. Listed examples include an IRS Letter and, if the main contact is American, U.S. main contact address proof.'), P('Accepted IRS Letter types listed on the page include IRS 147 C, IRS 252 C, IRS CP 575 A, IRS CP 575 B, IRS CP 575 G, and IRS CP 575 E. The IRS Letter must clearly include Business Name, Business Address, EIN Number, and Issue date.'), P('U.S. contact address proof may include a bank statement, credit card statement, or phone, internet, water, electricity, or gas bill. It must include the full address and be generated within the last six months.'), {
        kind: 'callout',
        text: 'WEM view: the main risk is not simply missing documents. It is inconsistency across company name, address, EIN, contact, UBO, phone, and email.'
      }]
    }, {
      id: 'deposit-and-fulfillment',
      h: 'Deposit is not the whole cost picture',
      body: [P('Under the ACCU path, the official page currently states that U.S. entity cross-border POP sellers do not need to pay a store deposit. This should be read separately from the US$1,500 store-level deposit listed for Mainland China and Hong Kong entity POP sellers.'), P('But no current deposit does not mean a low-effort launch. The ACCU path still requires U.S. local warehousing and shipping. Brands need inventory, shipping speed, return handling, customer service, and product-page readiness.'), UL(['A weak warehouse setup becomes risky when creators start driving traffic.', 'Unlocalized product pages waste creator interest.', 'Slow sample shipping makes creator programs hard to scale.'])]
    }, {
      id: 'wem-playbook',
      h: 'WEM launch checklist',
      body: [P('WE Marketing / WEM treats ACCU as a U.S. market launch readiness project, not just an application submission. Before launch, we look at documentation, fulfillment, product pages, creators, content, and weekly review.'), P('From late 2024 to early 2025, WEM helped 50+ ACCU stores move through entry preparation and launch execution, including U.S. company-registration coordination, EIN/tax ID application materials, entity and UBO information review, platform submission, follow-up documents, and the handoff into store operations. The experience is practical: we know where ACCU sellers often get stuck between having documents and being ready to operate.'), P('ACCU sellers often underestimate the cultural operating gap. A U.S. entity and local warehouse help with eligibility, but growth depends on whether U.S. creators want to film the product, whether the product page explains value in U.S. shopper language, and whether support, returns, and shipping expectations are clear.'), P('WEM connects both sides of the launch. The team can work in Chinese with brand owners, factories, and China-based operators while managing U.S. creator outreach, localized product-page feedback, affiliate setup, sample flow, and weekly decisions in the U.S. market context.'), UL(['Entity: U.S. company files, EIN/IRS materials, contact and UBO information.', 'Fulfillment: U.S. warehouse, shipping speed, return address, replenishment cadence.', 'Content: product images, benefits, FAQ, short-form demos, creator briefs.', 'Growth: affiliate creators, UGC rights, live tests, paid social creative reuse.']), P('The cold-start process usually begins with a small set of hero SKUs: select demo-friendly products, localize the offer and page, seed creators, test UGC angles, tune affiliate terms, and review the data weekly. The goal is to learn quickly instead of spreading effort across too many products.'), CTA('Book a WEM ACCU readiness review →')]
    }, {
      id: 'source',
      h: 'Source and claim boundary',
      body: [P('This article is based on TikTok Shop Global Selling’s Chinese official entry page, reviewed on May 28, 2026: ' + SOURCE_URL), P('Platform rules, deposits, and document requests may change. This article is operating guidance and does not replace official review, legal advice, or tax advice; U.S. company registration, tax identity, and EIN matters should be confirmed for each seller’s situation.')]
    }],
    faqs: [{
      q: 'What does ACCU mean in this article?',
      a: 'We use it to refer to the official-page path for U.S. entity cross-border sellers whose U.S.-registered business has a Chinese ultimate beneficial owner.'
    }, {
      q: 'Does the ACCU path currently require a store deposit?',
      a: 'The official page currently states under the ACCU/U.S. entity cross-border POP path that sellers do not pay a store deposit. Sellers should re-check the live official page before applying.'
    }, {
      q: 'How can WEM help ACCU sellers?',
      a: 'WEM can help with entry-model planning, U.S. company and EIN material coordination, platform-document consistency checks, follow-up documents, U.S. store launch cadence, product pages, creator affiliates, UGC, weekly operating review, and bilingual coordination between China-based teams and U.S. market execution.'
    }],
    related: [{
      label: 'TikTok Shop U.S. Entry Models for China-Based Brands',
      href: 'cross-border-tiktok-shop-entry-models.html'
    }, {
      label: 'TikTok Shop Managed Models for Manufacturers',
      href: 'tiktok-shop-managed-models-for-manufacturers.html'
    }]
  }
};
function getInitialLang() {
  const urlLang = new URLSearchParams(window.location.search).get('lang');
  if (urlLang === 'zh' || urlLang === 'en') return urlLang;
  const savedLang = localStorage.getItem('we-lang');
  if (savedLang === 'zh' || savedLang === 'en') return savedLang;
  return 'zh';
}
function App() {
  const [lang, setLang] = useState(getInitialLang);
  const post = POSTS[lang];
  useEffect(() => {
    localStorage.setItem('we-lang', lang);
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    document.title = lang === 'zh' ? '美国主体但中国受益人：TikTok Shop ACCU 入驻要准备什么 | WE Marketing' : 'U.S. TikTok Shop POP for Chinese-Owned Sellers: ACCU Checklist | WE Marketing';
  }, [lang]);
  useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
  return React.createElement("div", {
    "data-screen-label": "WE Blog \xB7 us-pop-for-chinese-owned-sellers"
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
