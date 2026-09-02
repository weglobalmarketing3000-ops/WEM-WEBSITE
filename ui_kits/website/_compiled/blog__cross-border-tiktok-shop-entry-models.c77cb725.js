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
      title: '中国品牌入驻美国 TikTok Shop：POP、ACCU、全托管、品牌托管怎么选',
      cat: '中国品牌出海 · 入驻路径',
      author: 'WE Marketing Team',
      date: '2026 年 5 月 28 日',
      read: '11 分钟阅读',
      heroImage: 'hero-cross-border-tiktok-shop-entry-models.png',
      heroAlt: 'POP、ACCU、全托管三种 TikTok Shop 美国市场入驻路径对比信息图'
    },
    sections: [{
      id: 'why-entry-model-first',
      h: '先选模式，再谈运营',
      body: [P('很多中国品牌做美国 TikTok Shop，会先问达人、直播、投流和爆款内容。但真正的第一步是：你用什么主体、什么履约方式、什么货盘进入平台。模式选错，后面的内容和运营都会被卡住。'), P('TikTok Shop Global Selling 中文官方入驻页把美区相关路径分成几类：商家自运营 POP（中国/香港主体）、美国主体跨境商家且中国最终受益人、全托管、品牌托管。它们不是四个名字而已，而是四种不同的责任分配。'), UL(['POP 更像品牌自己运营店铺，需要自己解决本地履约和店铺经营。', '美国主体 ACCU 适合已经有美国公司结构、且最终受益人包含中国人的卖家。', '全托管更偏供货和交付能力，适合工厂、工贸一体或贸易型商家。', '品牌托管当前采用定向邀请，更偏已有电商体量或跨境经验的品牌。'])]
    }, {
      id: 'comparison',
      h: '四种路径一张图看懂',
      body: [{
        kind: 'infographic',
        src: 'info-cross-border-entry-models-zh.svg',
        alt: '美国 TikTok Shop 四种入驻路径对比',
        caption: '官方页面规则可能更新，最终以 TikTok Shop Global Selling 页面和审核结果为准。'
      }, P('这张图不是替代官方入驻页，而是帮品牌和厂家先做内部判断：我们到底是要自己做美国店铺，还是更适合先用供应链能力进入平台。')]
    }, {
      id: 'pop-cn-hk',
      h: 'POP 中国/香港主体：适合能自己接住美国履约的品牌',
      body: [P('官方页面显示，美区 POP 中国主体入驻标准包括：提供合法中国内地或中国香港营业执照；具有美国本地仓储物流能力，需要美国本地发货；产品符合当地出口要求和平台治理需求；拥有第三方电商平台运营经验。'), P('普通商家需要准备公司营业执照原件照片、法人证件、全网唯一手机号码、全网唯一邮箱地址，以及可选的第三方电商平台经营经验证明。主营类目为珠宝的商家，官方页面提示需要申请邀请码。'), P('保证金方面，官方页面写明美国跨境 POP 商家（适用于中国内地主体和中国香港主体）按店铺维度收缴，每个店铺需缴纳 1500 美金才能开启正常经营。'), {
        kind: 'callout',
        text: 'WEM 判断：如果品牌已有美国仓、能管库存、客服、发货和退货，并且想自己掌握店铺经营，POP 中国/香港主体会更像完整品牌经营路径。'
      }]
    }, {
      id: 'accu',
      h: '美国主体 ACCU：适合已有美国公司结构的中国卖家',
      body: [P('官方页面中的“美区 POP-美国跨境主体入驻标准”要求拥有合法企业营业执照：美国注册企业，且企业最终受益人包含中国人。页面列出的支持企业类型包括 Sole proprietorship、Corporation、Partnership。'), P('材料会比中国/香港主体 POP 更偏美国公司和人员身份：美国本地手机号码、唯一邮箱地址、美国公司注册文件、中国最终受益人证件、主要联系人证件、可选第三方电商平台经验证明。官方页面还说明，平台可能在驳回后要求补充 IRS Letter；如果主要联系人为美国人，也可能要求美国主要联系人地址证明。'), P('保证金方面，官方页面在 ACCU/美国主体跨境 POP 路径下显示暂不缴纳店铺保证金。这条应按官方页面实时更新为准，也要和中国/香港主体 POP 的 1500 美金店铺保证金分开看。'), {
        kind: 'callout',
        text: 'WEM 判断：ACCU 不是“更简单”，而是资料结构不同。它适合美国主体已经准备好、联系人和受益人证件链路清楚、也能做美国本地履约的卖家。'
      }]
    }, {
      id: 'managed-models',
      h: '全托管和品牌托管：更看供应链、货盘和邀请机制',
      body: [P('全托管的官方标准更偏供应链能力。中国内地企业、中国内地个体工商户、中国香港企业满足任一条件即可申请：有供应链资源，例如工贸一体、工厂型商家或贸易商；有跨境运营或跨境渠道供货经验者优先；有意向向跨境供货的内贸商家也被纳入欢迎范围。'), P('全托管材料包括营业执照、法人身份证件、公司全景图、办公室图、仓库图、自有或外发工厂营业执照信息。香港企业还需要公司注册证和商业登记证。官方页面显示全托管商家保证金为人民币 1000 元。'), P('品牌托管则更强调商家已有经营基础。官方页面显示，满足国内各电商平台头部商家，或具备独立站/跨境电商运营经验任一条件即可申请；但品牌托管当前采用定向邀请形式，需要通过运营经理提供的邀请码线上注册。页面显示保证金同样为人民币 1000 元。')]
    }, {
      id: 'flow',
      h: '官方流程：注册、提交、审核、开店',
      body: [P('四类路径在流程上有相似结构：线上注册账号、提交入驻资料、开店资质审核、审核通过后学习新商运营指南并完成开店相关操作。官方页面写的时间参考通常是注册约 2 分钟、提交资料约 15 分钟、审核约 3-5 个工作日。'), P('但品牌不能只按“几分钟提交”理解入驻。真正花时间的是前置准备：主体是否合规、仓储履约是否真实、联系人证件是否一致、产品类目是否受限、材料照片是否清楚、第三方平台经验是否能支撑你的经营叙事。'), UL(['先确认主体：中港主体、美国主体，还是更适合托管。', '再确认履约：是否必须美国本地发货，仓库和退货链路是否已经准备好。', '再确认材料：证件、执照、联系人、受益人、仓库/办公室/工厂信息。', '最后才进入内容和达人运营：商品页、UGC、达人 brief、直播和广告放大。'])]
    }, {
      id: 'wem-angle',
      h: 'WEM 怎么帮品牌做判断',
      body: [P('WE Marketing / WEM 不会把入驻当成一个孤立表格。对中国品牌和厂家来说，选模式会影响后面 90 天的全部运营：商品页由谁负责，样品从哪里发，达人收到货要多久，直播间讲什么，售后问题谁接，广告素材是否能复用。'), P('更关键的是，中美市场的运营逻辑不一样。国内团队熟悉的投流、达人沟通、商品表达和价格打法，到了美国 TikTok Shop 可能会水土不服。美国达人要的是能拍出来的场景和观众能马上理解的理由，美国消费者也更在意真实体验、退换货预期、配送速度和评论信任。'), P('如果你是品牌方，WEM 会先看主体、履约、货盘、品类、价格带、内容资产和美国本地运营能力；如果你是厂家，WEM 会先看供货稳定性、产品差异化、包装和英文信息、是否适合达人演示，以及是否应该先走托管/供货路径。'), P('尤其是 ACCU 路径，WEM 在 2024 年末到 2025 年初协助 50+ 家店铺完成入驻准备和上线推进，熟悉美国公司注册协调、EIN/税号申请材料、受益人和联系人信息、平台审核补件以及下店后的运营衔接。这里的重点不是承诺审核结果，而是把容易出错的材料链路和上线节奏提前理顺。'), P('WEM 的优势是能做中英双语的美国运营衔接：用中文和国内老板、工厂、运营团队把产品和供应链讲清楚，再用美国市场的方式去做商品页、本地化内容、达人寄样、联盟设置和每周复盘。我们也有一套可复制的冷启动节奏，先跑通少数 hero SKU，再用达人内容、UGC 角度和数据复盘快速判断能不能起量。'), CTA('预约 WEM 出海 TikTok Shop 判断会 →')]
    }, {
      id: 'source',
      h: '来源和事实边界',
      body: [P('本文整理自 TikTok Shop Global Selling 中文官方入驻页面，整理日期为 2026 年 5 月 28 日。官方页面链接：' + SOURCE_URL), P('TikTok Shop 入驻规则、保证金、邀请码、审核材料可能随平台政策调整。本文用于帮助品牌做前期判断，不替代官方审核、法律税务建议或平台最终结果。')]
    }],
    faqs: [{
      q: '中国品牌做美国 TikTok Shop 一定要美国公司吗？',
      a: '不一定。官方页面展示了中国/香港主体 POP、美国主体 ACCU、全托管、品牌托管等不同路径。是否需要美国公司取决于你的主体、履约方式、经营责任和入驻模式。'
    }, {
      q: '中国/香港主体 POP 和美国主体 ACCU 最大区别是什么？',
      a: '中国/香港主体 POP 用中港主体入驻，并要求美国本地仓储物流和本地发货；美国主体 ACCU 用美国注册企业入驻，且企业最终受益人包含中国人，材料会涉及美国公司注册文件和中国最终受益人证件。'
    }, {
      q: 'WEM 可以代替官方审核吗？',
      a: '不可以。WEM 可以帮助品牌准备判断框架、运营规划、内容和达人策略，也能用中英双语团队协助美国市场冷启动，但平台审核和最终入驻结果以 TikTok Shop 官方为准。'
    }],
    related: [{
      label: '美国主体但中国受益人：TikTok Shop ACCU 入驻要准备什么',
      href: 'us-pop-for-chinese-owned-sellers.html?lang=zh'
    }, {
      label: '中国厂家出海做 TikTok Shop：全托管和品牌托管适合谁',
      href: 'tiktok-shop-managed-models-for-manufacturers.html?lang=zh'
    }]
  },
  en: {
    meta: {
      title: 'TikTok Shop U.S. Entry Models for China-Based Brands',
      cat: 'CHINA BRAND EXPANSION · ENTRY MODELS',
      author: 'WE Marketing Team',
      date: 'May 28, 2026',
      read: '10 min read',
      heroImage: 'hero-cross-border-tiktok-shop-entry-models-en.png',
      heroAlt: 'Graphic comparison of POP, ACCU, and fully managed TikTok Shop U.S. entry models'
    },
    sections: [{
      id: 'why-entry-model-first',
      h: 'Choose the entry model before the launch plan',
      body: [P('For China-based brands and manufacturers entering the U.S. through TikTok Shop, the first question is not only creators or livestreams. It is the operating model: which entity applies, who handles fulfillment, what materials are required, and how much responsibility the seller keeps.'), P('TikTok Shop Global Selling’s Chinese official entry page shows several U.S.-relevant paths: POP with a China/Hong Kong entity, POP with a U.S. entity and Chinese ultimate beneficial owner, fully managed, and brand-managed. These are not just labels. They change how the business has to operate.'), UL(['POP keeps more store operating responsibility with the seller.', 'The U.S. entity ACCU path fits sellers with a U.S. business structure and Chinese UBO documentation.', 'Fully managed is more supply-chain oriented.', 'Brand-managed is currently invitation-based and better aligned with brands that already have ecommerce scale or cross-border experience.'])]
    }, {
      id: 'comparison',
      h: 'The four paths at a glance',
      body: [{
        kind: 'infographic',
        src: 'info-cross-border-entry-models-en.svg',
        alt: 'Four U.S. TikTok Shop entry models',
        caption: 'Platform rules may change. Final requirements are controlled by TikTok Shop Global Selling and review results.'
      }, P('Use this comparison as a planning filter, not as a replacement for the official entry page. The goal is to decide whether your team is ready to operate a U.S. store directly or should start from a supply-chain-led model.')]
    }, {
      id: 'pop-cn-hk',
      h: 'China or Hong Kong entity POP',
      body: [P('The official page states that U.S. POP with a China/Hong Kong entity requires a legal Mainland China or Hong Kong business license, U.S. local warehousing and logistics capability, U.S. local shipping, product compliance with export/import and platform governance requirements, and third-party ecommerce operating experience.'), P('The listed materials include a business license photo, legal representative ID, a unique phone number, a unique email address, and optional proof of third-party ecommerce experience. The official page also notes that jewelry sellers need to apply for an invitation code.'), P('The official page states that U.S. cross-border POP sellers using Mainland China or Hong Kong entities need a store-level deposit of US$1,500 before normal operation.'), {
        kind: 'callout',
        text: 'WEM view: this path fits brands that already have U.S. fulfillment, can manage store operations, and want more direct control over the U.S. TikTok Shop business.'
      }]
    }, {
      id: 'accu',
      h: 'U.S. entity with Chinese ultimate beneficial owner',
      body: [P('The official page describes the U.S. entity path as a U.S.-registered business whose ultimate beneficial owner includes a Chinese person. Supported business types listed on the page include Sole proprietorship, Corporation, and Partnership.'), P('The materials are more U.S.-entity heavy: U.S. local phone number, unique email address, U.S. company registration documents, Chinese UBO identity documents, main contact identity documents, and optional proof of third-party ecommerce experience. The page also says the platform may request an IRS Letter after rejection, and may request U.S. main contact address proof if the main contact is an American citizen.'), P('For the deposit, the official page currently states that U.S. entity cross-border POP sellers do not need to pay a store deposit. This should be checked against the live official page before application.'), {
        kind: 'callout',
        text: 'WEM view: ACCU is not automatically easier. It is a different documentation path. It works best when the U.S. entity, contact, UBO, and fulfillment chain are already clean.'
      }]
    }, {
      id: 'managed-models',
      h: 'Fully managed and brand-managed',
      body: [P('The fully managed path is more supply-chain oriented. The official page says eligible Mainland China companies, individual industrial/commercial households, and Hong Kong companies can apply if they meet one of several conditions: supply-chain resources, cross-border operating or supply experience, or domestic sellers that intend to supply cross-border channels.'), P('Materials include the business license, legal representative ID, company overview photo, office photo, warehouse photo, and owned or outsourced factory license information. Hong Kong companies also need company registration and business registration documents. The official page lists the deposit as RMB 1,000.'), P('The brand-managed path is more selective. The official page says it fits leading sellers on domestic ecommerce platforms or merchants with independent site or cross-border ecommerce experience. It is currently invitation-based and uses an invitation code from an operations manager. The listed deposit is also RMB 1,000.')]
    }, {
      id: 'flow',
      h: 'The official flow',
      body: [P('Across these paths, the flow is similar: register an account, submit materials, wait for qualification review, then follow new-seller operating guidance after approval. The official page uses reference timing such as around 2 minutes for registration, around 15 minutes for material submission, and around 3-5 working days for review.'), P('The practical work happens before the form: entity readiness, fulfillment proof, contact consistency, product category restrictions, clean material photos, and a credible operating story.'), UL(['Confirm the entity path first.', 'Confirm whether U.S. local fulfillment is required and ready.', 'Prepare documents before opening the application flow.', 'Then build product pages, creator briefs, UGC, livestream, and paid media plans.'])]
    }, {
      id: 'wem-angle',
      h: 'How WEM helps',
      body: [P('WE Marketing / WEM treats entry-model choice as part of the go-to-market system. The model affects product pages, sample shipping, creator timelines, livestream scripts, customer service, and paid social creative reuse.'), P('The operating gap is often cultural, not only procedural. A playbook that works in China may not work on TikTok Shop U.S. without adaptation. U.S. creators need a filmable hook, shoppers need local trust signals, and the shop needs fulfillment, product-page language, and support expectations that match the U.S. market.'), P('For brands, WEM evaluates entity, fulfillment, product category, price point, content assets, and U.S. operating readiness. For manufacturers, WEM looks at supply stability, product differentiation, packaging, English product information, creator-demo fit, and whether a managed model is a better first step.'), P('For the ACCU path specifically, WEM helped 50+ stores move through entry preparation and launch execution from late 2024 to early 2025, including U.S. company-registration coordination, EIN/tax ID application materials, UBO and contact information review, platform follow-up documents, and the handoff into operations. The point is not to promise review outcomes, but to reduce avoidable friction in the documentation and launch sequence.'), P('WEM is useful for China-based teams because the team can work in Chinese with owners, factories, and operators while running the U.S.-side creator, content, product-page, affiliate, and weekly review process. The cold-start method is repeatable: pick a few hero SKUs, localize the page and offer, seed creators, test UGC angles, then use weekly data to decide what to scale.'), CTA('Book a WEM TikTok Shop expansion call →')]
    }, {
      id: 'source',
      h: 'Source and claim boundary',
      body: [P('This article is based on TikTok Shop Global Selling’s Chinese official entry page, reviewed on May 28, 2026: ' + SOURCE_URL), P('Platform rules, deposits, invitation codes, and material requests can change. This article is planning guidance and does not replace official platform review, legal advice, tax advice, or final TikTok Shop decisions.')]
    }],
    faqs: [{
      q: 'Do China-based brands need a U.S. company to sell on U.S. TikTok Shop?',
      a: 'Not always. The official page shows multiple paths, including China/Hong Kong entity POP, U.S. entity with Chinese UBO, fully managed, and brand-managed. The right path depends on entity structure, fulfillment, and operating responsibility.'
    }, {
      q: 'What is the biggest difference between China/HK POP and U.S. entity ACCU?',
      a: 'China/HK POP uses a Mainland China or Hong Kong entity and requires U.S. local fulfillment. The U.S. entity ACCU path uses a U.S.-registered business with a Chinese ultimate beneficial owner and requires U.S. company and UBO documentation.'
    }, {
      q: 'Can WEM replace TikTok Shop official review?',
      a: 'No. WEM can help with planning, operating readiness, content, and creator strategy, but final review and approval are controlled by TikTok Shop.'
    }],
    related: [{
      label: 'U.S. TikTok Shop POP for Chinese-Owned Sellers: ACCU Checklist',
      href: 'us-pop-for-chinese-owned-sellers.html'
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
    document.title = lang === 'zh' ? '中国品牌入驻美国 TikTok Shop：POP、ACCU、全托管、品牌托管怎么选 | WE Marketing' : 'TikTok Shop U.S. Entry Models for China-Based Brands | WE Marketing';
  }, [lang]);
  useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
  return React.createElement("div", {
    "data-screen-label": "WE Blog \xB7 cross-border-tiktok-shop-entry-models"
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
