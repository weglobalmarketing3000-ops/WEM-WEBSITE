function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState,
  useEffect
} = React;
const P = text => ({
  kind: 'p',
  text
});
const H3 = text => ({
  kind: 'h3',
  text
});
const UL = items => ({
  kind: 'list',
  items
});
const INFO = (title, src, alt, caption) => ({
  kind: 'infographic',
  title,
  src,
  alt,
  caption
});
const CTA = label => ({
  kind: 'cta',
  label,
  href: 'https://zus03h0enw04.sg.larksuite.com/scheduler/03970278dd9a7925'
});
const A = ({
  href,
  children
}) => React.createElement("a", {
  href: href,
  target: "_blank",
  rel: "noopener",
  style: {
    color: '#FF1493',
    textDecoration: 'underline',
    textUnderlineOffset: 3
  }
}, children);
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
      title: 'Best TikTok Shop Agencies in the U.S. for Brands',
      cat: 'TIKTOK SHOP · AGENCY GUIDE',
      author: 'WE Marketing Team',
      date: 'May 27, 2026',
      read: '11 min read',
      heroImage: 'hero-best-tiktok-shop-agencies-us-v3.png',
      heroAlt: 'A U.S. TikTok Shop agency comparison desk with scorecards, launch plans, creator network cards, and performance dashboards.'
    },
    sections: [{
      id: 'why-agencies',
      h: 'Why TikTok Shop agencies matter now',
      body: [P(React.createElement(React.Fragment, null, "TikTok Shop moved from experiment to serious U.S. commerce channel quickly. TikTok officially announced the full U.S. launch of TikTok Shop on September 12, 2023 in its ", React.createElement(A, {
        href: "https://newsroom.tiktok.com/introducing-tiktok-shop?lang=en"
      }, "Newsroom"), ". At launch, AP reported more than 200,000 registered sellers and more than 100,000 creators participating in the affiliate program. More recently, eMarketer coverage cited TikTok Shop U.S. sales reaching $15.82 billion in 2025 and 18.2% of U.S. social commerce.")), P('That growth changed what “TikTok marketing” means. A brand no longer needs only content or ads. It needs shop operations, product SEO, affiliate creator management, sample seeding, live commerce, paid amplification, and weekly sales reporting working together.')]
    }, {
      id: 'scorecard',
      h: 'How we evaluated the agencies',
      body: [P('This is not a pay-to-play directory. We evaluated agencies from a brand operator’s point of view: what would actually help a brand launch, fix, or scale on TikTok Shop in the United States.'), P('For us, a strong TikTok Shop agency is not just a media buyer or an influencer broker. It should understand shop operations, already have creator relationships, know how to start from zero, and be able to communicate clearly with both brands and creators.'), UL(['Cold-start experience: whether the agency has taken brands from no shop momentum to first orders, creator posts, reviews, and repeatable weekly execution.', 'Creator relationships: not only access to a database, but active creator communities, pre-vetted creators, sampling follow-up, and real relationship management.', 'Shop operations: setup, listings, product SEO, promotions, shop health, Seller Center fluency, and the ability to fix operational blockers.', 'Content and live commerce: UGC, short video, livestream clips, creator briefs, hooks, editing direction, and ad-ready creative.', 'Market and language fit: English, Spanish, Chinese, and bilingual communication when brands, creators, and internal teams are not all in the same market.', 'Proof and transparency: case studies, sales results, creator volume, content output, post rate, reporting cadence, and realistic expectations.']), INFO('TikTok Shop Agency Scorecard', 'info-best-agencies-scorecard.svg', 'Six practical criteria for choosing a TikTok Shop agency', 'Use this framework before comparing proposals.'), INFO('Agency Fit Map', 'info-best-agencies-market.svg', 'A visual map comparing creator-first, retail-first, paid-social-first, and marketplace-first TikTok Shop agency fits', 'The right agency depends on the bottleneck: creators, shop operations, paid media, or retail complexity.')]
    }, {
      id: 'best-agencies',
      h: 'Best TikTok Shop agencies in the U.S.',
      body: [{
        kind: 'callout',
        text: 'Method note: we reference public agency positioning and service pages, but we do not screenshot other agencies’ websites. The point is to help brands compare fit, not to reuse another company’s design assets.'
      }, H3('1. WE Marketing: best for brands that need creator affiliate + content + U.S. market execution'), P('WE Marketing is a California-based TikTok Shop agency built around creator-driven commerce. The strongest fit is for brands that need more than media buying: creator affiliate recruitment, sample seeding, content production, shop strategy, and U.S. market execution.'), P('For Chinese and international brands entering the U.S., WE is especially useful because the gap is usually not just “how to open a shop.” The hard part is local creator trust, English, Spanish, and Chinese communication, category fit, realistic commission strategy, and a repeatable creator pipeline.'), P('WE also works directly with both sides of the marketplace. The team supports brands and maintains an active creator community, so communication does not depend only on cold outreach. With team coverage across China and the United States, brands can move faster without waiting through a full time-zone cycle.'), P('WE works best when a brand needs an operating partner, not only a campaign vendor. The team can connect the pieces that often sit in separate silos: Seller Center operations, affiliate recruitment, creator briefs, sample follow-up, content review, Spark Ads testing, and weekly performance reporting.'), UL(['Creator affiliate engine: outreach, pre-vetting, sample coordination, commission planning, and post-rate follow-up.', 'Content system: UGC briefs, short-video angles, creator coaching, editing direction, and ad-ready content selection.', 'Shop and sales support: product listings, promotional rhythm, offer testing, and practical weekly reporting.', 'Multilingual execution: English, Spanish, and Chinese communication across brand teams, creators, and U.S. operations.']), P('This makes WE a strong fit for beauty, wellness, CPG, lifestyle, DTC, Amazon sellers, and China-based brands that want a U.S.-focused TikTok Shop launch without building an in-house creator commerce team first.'), H3('2. The Social Shepherd: strong full-funnel TikTok Shop and paid social positioning'), P(React.createElement(React.Fragment, null, "The Social Shepherd is worth considering for brands that want TikTok Shop connected to a broader paid social and creative strategy. Its public service positioning covers TikTok Shop strategy, creator affiliates, TikTok content, paid social, and product SEO, which can make sense for teams that already have some internal ecommerce operations but want stronger campaign and media support.")), H3('3. Iced Media: strong for beauty and premium consumer brands'), P('Iced Media is often associated with beauty and lifestyle marketing. For brands where influencer credibility, creative quality, and premium positioning matter more than pure affiliate volume, it is worth evaluating.'), H3('4. Stella Rising: strong for beauty, CPG, and retail media sophistication'), P('Stella Rising is a broader agency option for brands that want TikTok Shop connected to retail media, performance marketing, and consumer brand strategy. It may be a fit for more established brands with multi-channel budgets.'), H3('5. Avenue Z: strong for PR, social commerce, and performance storytelling'), P('Avenue Z is positioned around influence, media, and performance. It can be useful for brands that want TikTok Shop tied to broader brand visibility, founder stories, PR, and social commerce campaigns.'), H3('6. inBeat: strong for creator sourcing and micro-influencer campaigns'), P('inBeat is known for creator and micro-influencer sourcing. It can be a fit when the brand already has shop operations covered but needs more creator volume or UGC supply.'), H3('7. Revwise: strong for marketplace and commerce execution'), P('Revwise is worth evaluating for brands that think of TikTok Shop as part of a wider marketplace or ecommerce operating model. The fit depends on how much creator affiliate management the brand needs versus backend commerce support.'), H3('8. Harvest Group: strong for retail and marketplace brands expanding into TikTok Shop'), P('Harvest Group is more retail and marketplace oriented. Brands with existing retail, Amazon, or omnichannel complexity may want to compare its TikTok Shop approach against creator-first agencies.'), {
        kind: 'table',
        headers: ['Agency type', 'Best fit', 'Watch-out'],
        rows: [['Creator-first TikTok Shop agency', 'Brands that need creator volume, sample follow-up, UGC, affiliate management, and weekly execution.', 'Ask how creator quality, post rate, and product-page blockers are reviewed.'], ['Paid-social-first agency', 'Brands with solid shop operations that need Spark Ads, creative testing, and media scale.', 'Make sure shop operations and affiliate follow-up are not treated as someone else’s job.'], ['Retail / marketplace agency', 'Brands with Amazon, retail, CPG, or omnichannel complexity.', 'Check whether they can actually manage TikTok creators, not only retail strategy.'], ['PR / influence agency', 'Brands that need founder story, authority, social proof, or launch buzz.', 'Confirm how attention turns into TikTok Shop product clicks and orders.']]
      }]
    }, {
      id: 'who-fits',
      h: 'Which agency type fits your brand?',
      body: [P('The “best” agency depends on the bottleneck. A brand with weak product listings needs a shop operations partner. A brand with no creator content needs an affiliate and UGC engine. A brand with plenty of content but weak sales needs paid amplification and conversion strategy.'), {
        kind: 'table',
        headers: ['Brand situation', 'Best agency type'],
        rows: [['New TikTok Shop launch', 'Full-service TikTok Shop agency with shop setup, creator seeding, and content strategy'], ['Chinese or cross-border brand entering the U.S.', 'Bilingual U.S.-focused agency with local creator network and localization experience'], ['Beauty, wellness, CPG, or impulse-buy products', 'Creator affiliate agency with strong UGC and short-video production'], ['Established retail brand', 'Agency that can connect TikTok Shop to retail media, paid social, and broader ecommerce reporting'], ['Amazon seller expanding channels', 'Agency that understands marketplace economics, product pages, and creator-led discovery']]
      }]
    }, {
      id: 'questions',
      h: 'Questions to ask before hiring',
      body: [UL(['How many creators can you realistically activate in the first 60 days?', 'What post rate do you expect from sampled creators, and how do you improve it?', 'Do you manage open collaboration, targeted collaboration, or both?', 'Who writes creator briefs and reviews content quality?', 'How do you decide commission rates by product and category?', 'Do you report sales results, content output, creator response, sample status, and paid performance weekly?', 'Can you show examples in our category or with a similar price point?']), P('If an agency can only talk about “viral videos,” be careful. TikTok Shop growth is not just virality. It is operations plus creator volume plus conversion discipline.'), CTA('Book a TikTok Shop strategy call →')]
    }, {
      id: 'sources',
      h: 'Sources and methodology',
      body: [P(React.createElement(React.Fragment, null, "This article uses publicly available platform and market data from ", React.createElement(A, {
        href: "https://newsroom.tiktok.com/introducing-tiktok-shop?lang=en"
      }, "TikTok Newsroom"), ", ", React.createElement(A, {
        href: "https://apnews.com/article/65470c109c80408f05875d8678fe5072"
      }, "Associated Press"), ", TikTok Shop discovery research referenced by ", React.createElement(A, {
        href: "https://newsroom.tiktok.com/tiktok-shop-is-where-shoppers-come-to-discover?lang=en"
      }, "TikTok"), ", and eMarketer coverage cited in ", React.createElement(A, {
        href: "https://www.ictbusiness.biz/analysis/tiktok-shop-makes-up-nearly-20-percent-of-social-commerce-in-2025"
      }, "ICT Business"), ". Agency descriptions are based on public positioning and service pages, not private performance data."))]
    }],
    faqs: [{
      q: 'What does a TikTok Shop agency do?',
      a: 'A TikTok Shop agency helps brands launch and scale on TikTok Shop through shop setup, product listings, creator affiliate recruitment, sample seeding, content production, livestream support, TikTok Ads, and performance reporting.'
    }, {
      q: 'How do I choose a TikTok Shop agency in the U.S.?',
      a: 'Look for cold-start experience, TikTok Shop operations depth, real creator relationships, category fit, content production ability, market and language fit, and transparent reporting around sales results, creator volume, post rate, and content output.'
    }, {
      q: 'Do Chinese and cross-border brands need a U.S.-based TikTok Shop agency?',
      a: 'For brands selling into the U.S., a U.S.-based or U.S.-focused TikTok Shop agency can help with local creator communication, content localization, campaign timing, compliance expectations, and market-specific category strategy.'
    }],
    related: [{
      label: 'How Cross-Border Brands Launch on TikTok Shop in the U.S.',
      href: 'cross-border-brands-launch-tiktok-shop-us.html'
    }, {
      label: 'How to Find the Right Creators for Your Brand on TikTok Shop',
      href: 'how-to-find-creators-for-your-brand-tiktok-shop.html'
    }]
  },
  zh: {
    meta: {
      title: '美国 TikTok Shop 代运营公司怎么选？2026 品牌指南',
      cat: 'TIKTOK SHOP · 代运营指南',
      author: 'WE Marketing Team',
      date: '2026 年 5 月 27 日',
      read: '12 分钟阅读',
      heroImage: 'hero-best-tiktok-shop-agencies-us-v3.png',
      heroAlt: '美国 TikTok Shop agency 评估桌面，包含 scorecard、上线计划、达人资源卡片和数据看板。'
    },
    sections: [{
      id: 'why-agencies',
      h: '为什么现在需要 TikTok Shop 代运营',
      body: [P(React.createElement(React.Fragment, null, "TikTok Shop \u5728\u7F8E\u56FD\u4E0D\u662F\u201C\u8BD5\u8BD5\u770B\u201D\u7684\u65B0\u6E20\u9053\u4E86\u3002TikTok \u5B98\u65B9\u5728 2023 \u5E74 9 \u6708 12 \u65E5\u901A\u8FC7 ", React.createElement(A, {
        href: "https://newsroom.tiktok.com/introducing-tiktok-shop?lang=en"
      }, "Newsroom"), " \u5BA3\u5E03 TikTok Shop \u5728\u7F8E\u56FD\u5168\u9762\u4E0A\u7EBF\uFF1BAP \u5F53\u65F6\u62A5\u9053\uFF0C\u5E73\u53F0\u5DF2\u6709 200,000+ \u6CE8\u518C\u5356\u5BB6\u548C 100,000+ \u53C2\u4E0E\u8054\u76DF\u8BA1\u5212\u7684\u521B\u4F5C\u8005\u3002eMarketer \u76F8\u5173\u62A5\u9053\u5219\u663E\u793A\uFF0CTikTok Shop \u7F8E\u56FD 2025 \u5E74\u9500\u552E\u989D\u9884\u8BA1/\u8FBE\u5230 $15.82B\uFF0C\u5360\u7F8E\u56FD social commerce \u7684 18.2%\u3002")), P('这意味着，品牌做 TikTok Shop 不再只是“找几个达人拍视频”。真正难的是店铺运营、商品标题和内容 SEO、联盟达人招募、寄样管理、直播/短视频素材、Spark Ads 放大和销售复盘全部连在一起。')]
    }, {
      id: 'scorecard',
      h: '我们怎么判断一家 agency 是否靠谱',
      body: [P('这不是付费榜单，也不是单纯按名气排名。我们更像站在品牌运营方的角度看：这家 agency 到底能不能帮品牌在美国 TikTok Shop 上线、修问题、跑出内容和订单。'), P('在我们看来，靠谱的 TikTok Shop agency 不能只是会投广告，也不能只是有一份达人名单。它要懂店铺运营，要有真实达人关系，要做过冷启动，也要能把品牌、达人和内部团队之间的沟通接住。'), UL(['冷启动经验：是否真的做过从 0 到 1，包括开店、首批订单、达人发布、评价积累和每周推进。', '达人关系：不是只有数据库，而是有活跃达人社群、预筛达人、寄样跟进和长期沟通能力。', '店铺运营：开店、商品上架、商品 SEO、活动设置、店铺健康、Seller Center 操作和问题处理。', '内容和直播：UGC、短视频、直播切片、达人内容要求、开头钩子、剪辑方向和可投放素材。', '市场和语言：英文、西语、中文沟通能力，尤其适合品牌团队、美国达人和中国团队不在同一市场时。', '结果透明：案例、销售结果、达人数量、内容产出、发布率、周报和真实预期。']), INFO('TikTok Shop 代理机构评估表', 'info-best-agencies-scorecard.svg', '选择 TikTok Shop agency 的六个实用标准', '在看 proposal 前，先用这张表判断对方能力是否完整。'), INFO('Agency 类型匹配图', 'info-best-agencies-market.svg', '对比达人优先、零售优先、投放优先和 marketplace 优先的 TikTok Shop agency 类型', '先判断瓶颈：达人、店铺运营、投放放大，还是零售复杂度。')]
    }, {
      id: 'best-agencies',
      h: '美国 TikTok Shop agency 推荐',
      body: [{
        kind: 'callout',
        text: '说明：我们会参考公开 agency 定位和服务页，但不直接截图其他公司官网。这样更稳，也不会让 WEM 的页面视觉被别人品牌素材带跑。'
      }, H3('1. WE Marketing：适合需要达人联盟 + 内容 + 美国本土执行的品牌'), P('WE Marketing 是位于加州的 TikTok Shop agency，核心优势是 creator-driven commerce：联盟达人招募、寄样、内容生产、店铺策略和美国市场执行一起做。'), P('对中国品牌和跨境品牌来说，难点通常不只是“开一个 TikTok Shop”。真正影响结果的是美国本土达人信任、英文、西语、中文沟通、品类适配、佣金策略和稳定的达人内容流水线。WE 更适合需要美国本地达人资源和从 0 到 1 执行的团队。'), P('WE 同时服务品牌方，也维护自己的创作者社群，所以沟通不是只靠冷邮件。品牌、达人和运营团队之间的信息能更快接上。我们在中国和美国都有团队覆盖，跨境品牌不用因为时差等一整天才能推进下一步。'), P('WE 更适合品牌把 agency 当作运营伙伴，而不是只做一次 campaign 的供应商。我们会把 Seller Center 店铺运营、联盟达人招募、达人内容要求、寄样跟进、内容审核、Spark Ads 测试和周度数据复盘连在一起，减少品牌内部来回协调的成本。'), UL(['达人联盟体系：达人招募、预筛、寄样协调、佣金建议和发布率跟进。', '内容生产系统：UGC 内容要求、短视频角度、达人沟通、剪辑方向和可投放素材筛选。', '店铺和销售支持：商品页、促销节奏、offer 测试和围绕销售结果的实际复盘。', '多语种执行：英文、西语、中文都能沟通，适合跨境团队、美国达人和本地运营一起推进。']), P('所以 WE 更适合美妆、健康、食品、生活方式、DTC、Amazon 卖家，以及想进入美国 TikTok Shop、但还不想先自建完整 creator commerce 团队的中国品牌。'), H3('2. The Social Shepherd：适合想要完整 TikTok Shop + paid social 体系的品牌'), P(React.createElement(React.Fragment, null, "The Social Shepherd \u9002\u5408\u60F3\u628A TikTok Shop \u548C paid social\u3001\u521B\u610F\u5185\u5BB9\u4E00\u8D77\u770B\u7684\u54C1\u724C\u3002\u5B83\u516C\u5F00\u5C55\u793A\u7684\u670D\u52A1\u65B9\u5411\u8986\u76D6 TikTok Shop strategy\u3001creator affiliates\u3001TikTok content\u3001paid social \u548C product SEO\u3002\u5982\u679C\u54C1\u724C\u5185\u90E8\u5DF2\u7ECF\u6709\u4E00\u5B9A\u7535\u5546\u8FD0\u8425\u80FD\u529B\uFF0C\u4F46\u5E0C\u671B\u52A0\u5F3A campaign\u3001\u5E7F\u544A\u548C\u521B\u610F\u4FA7\u652F\u6301\uFF0C\u53EF\u4EE5\u653E\u8FDB\u5019\u9009\u540D\u5355\u3002")), H3('3. Iced Media：适合美妆和高质感消费品牌'), P('Iced Media 更适合重视 influencer credibility、创意质感和品牌调性的美妆/生活方式品牌。如果你的内容不能只追求数量，还要有高级感和一致的品牌表达，可以放进候选名单。'), H3('4. Stella Rising：适合美妆、CPG 和成熟零售品牌'), P('Stella Rising 更偏综合型 agency，适合希望把 TikTok Shop 和 retail media、performance marketing、消费者品牌策略一起看的成熟品牌。'), H3('5. Avenue Z：适合需要 PR、影响力和 social commerce 结合的品牌'), P('Avenue Z 的定位偏 influence、media 和 performance。如果品牌希望 TikTok Shop 和创始人故事、PR、社媒声量一起做，可以评估。'), H3('6. inBeat：适合需要大量 micro-influencer / UGC 的品牌'), P('inBeat 更适合已经有店铺运营能力，但需要更多达人来源、micro-influencer 内容和 UGC 素材供给的品牌。'), H3('7. Revwise：适合偏 marketplace / ecommerce 运营逻辑的品牌'), P('Revwise 可以作为偏电商运营和 marketplace 视角的候选。是否适合，取决于你更需要后端电商支持，还是更需要前端达人联盟管理。'), H3('8. Harvest Group：适合零售、Amazon 和全渠道复杂度较高的品牌'), P('Harvest Group 更偏 retail 和 marketplace 背景。已有 Amazon、零售渠道或全渠道结构的品牌，可以把它和 creator-first 的 agency 做对比。'), {
        kind: 'table',
        headers: ['Agency 类型', '更适合谁', '要注意什么'],
        rows: [['达人优先型 TikTok Shop agency', '需要达人数量、寄样跟进、UGC、联盟管理和每周执行的品牌。', '要问清达人质量、发布率和商品页问题怎么复盘。'], ['投放优先型 agency', '店铺基础已经不错，需要 Spark Ads、素材测试和广告放大的品牌。', '确认店铺运营和达人跟进不是被甩给品牌自己做。'], ['零售 / marketplace agency', '已有 Amazon、零售、CPG 或全渠道复杂度的品牌。', '确认对方真的能管理 TikTok 达人，而不只是会讲零售策略。'], ['PR / influence agency', '需要创始人故事、权威背书、声量或新品发布 buzz 的品牌。', '确认注意力怎么转成 TikTok Shop 点击和订单。']]
      }]
    }, {
      id: 'who-fits',
      h: '不同品牌应该选哪类 agency',
      body: [P('没有一家 agency 适合所有品牌。你要先判断自己的瓶颈在哪里：是店铺基础没搭好？没有达人内容？寄样没人跟？还是有内容但不出单？'), {
        kind: 'table',
        headers: ['品牌情况', '更适合的 agency 类型'],
        rows: [['TikTok Shop 冷启动', '全托管型 agency：开店、上架、寄样、达人和内容策略都能做'], ['中国/跨境品牌进入美国', '中英双语、熟悉美国本土达人和内容本地化的 TikTok Shop agency'], ['美妆、健康、食品、服饰等冲动消费品类', '强达人联盟和 UGC 能力的 agency'], ['成熟零售品牌', '能连接 retail media、paid social 和电商数据的综合 agency'], ['Amazon 卖家拓展新渠道', '懂 marketplace 逻辑、商品页和达人种草转化的 agency']]
      }]
    }, {
      id: 'questions',
      h: '签约前一定要问的问题',
      body: [UL(['前 60 天你们能实际激活多少达人？', '寄样后预计发布率是多少？你们怎么提高发布率？', '你们管理 open collaboration、targeted collaboration，还是两者都做？', '谁负责写达人内容要求和审核内容质量？', '佣金比例怎么根据品类、价格和毛利制定？', '周报是否包含销售结果、内容数量、达人回复率、寄样状态和广告表现？', '有没有同品类或相似客单价的案例？']), P('如果一个 agency 只会讲“爆款视频”，但说不清寄样、发布率、佣金、内容产出和销售复盘，就要谨慎。TikTok Shop 的增长不是单靠 viral，而是运营、达人、内容和成交一起跑。'), CTA('预约 TikTok Shop 策略咨询 →')]
    }, {
      id: 'sources',
      h: '数据来源和说明',
      body: [P(React.createElement(React.Fragment, null, "\u672C\u6587\u4F7F\u7528\u7684\u516C\u5F00\u6570\u636E\u6765\u81EA ", React.createElement(A, {
        href: "https://newsroom.tiktok.com/introducing-tiktok-shop?lang=en"
      }, "TikTok Newsroom"), "\u3001", React.createElement(A, {
        href: "https://apnews.com/article/65470c109c80408f05875d8678fe5072"
      }, "Associated Press"), "\u3001TikTok \u5F15\u7528\u7684 ", React.createElement(A, {
        href: "https://newsroom.tiktok.com/tiktok-shop-is-where-shoppers-come-to-discover?lang=en"
      }, "TikTok Shop discovery research"), "\uFF0C\u4EE5\u53CA ", React.createElement(A, {
        href: "https://www.ictbusiness.biz/analysis/tiktok-shop-makes-up-nearly-20-percent-of-social-commerce-in-2025"
      }, "ICT Business \u5BF9 eMarketer \u6570\u636E\u7684\u62A5\u9053"), "\u3002Agency \u63CF\u8FF0\u57FA\u4E8E\u516C\u5F00\u5B9A\u4F4D\u548C\u670D\u52A1\u4FE1\u606F\uFF0C\u4E0D\u4EE3\u8868\u6211\u4EEC\u638C\u63E1\u5176\u5185\u90E8\u79C1\u6709\u4E1A\u7EE9\u3002"))]
    }],
    faqs: [{
      q: 'TikTok Shop 代运营公司主要做什么？',
      a: 'TikTok Shop 代运营通常负责店铺搭建、商品上架、商品 SEO、联盟达人招募、寄样管理、内容生产、直播支持、TikTok Ads/Spark Ads 和数据复盘。'
    }, {
      q: '怎么选择美国 TikTok Shop agency？',
      a: '重点看六点：是否懂 TikTok Shop 店铺运营、是否有真实达人联盟管理能力、是否匹配你的品类、是否能生产内容、是否懂付费放大、是否有透明的数据复盘。'
    }, {
      q: '中国品牌做美国 TikTok Shop 需要美国本地 agency 吗？',
      a: '如果目标市场是美国，本地或深耕美国市场的 agency 会更有帮助，尤其是在达人沟通、内容本地化、活动节奏、合规预期和品类策略上。'
    }],
    related: [{
      label: '出海品牌如何在美国 TikTok Shop 上线',
      href: 'cross-border-brands-launch-tiktok-shop-us.html'
    }, {
      label: '如何为品牌找到合适的 TikTok Shop 达人',
      href: 'how-to-find-creators-for-your-brand-tiktok-shop.html'
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
    document.title = lang === 'zh' ? '美国 TikTok Shop 代运营公司怎么选？2026 品牌指南 | WE Marketing' : 'Best TikTok Shop Agencies in the U.S. for Brands | WE Marketing';
  }, [lang]);
  useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
  return React.createElement("div", {
    "data-screen-label": "WE Blog \xB7 Best TikTok Shop Agencies"
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
