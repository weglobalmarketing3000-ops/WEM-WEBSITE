const {
  useState,
  useEffect
} = React;
const BOOK = 'https://zus03h0enw04.sg.larksuite.com/scheduler/03970278dd9a7925';
const TIERS = {
  bulk: {
    color: '#FF1493',
    name: 'Essentials'
  },
  select: {
    color: '#4A8FFF',
    name: 'Plus'
  },
  premium: {
    color: '#9B30FF',
    name: 'Premium'
  }
};
const COPY = {
  en: {
    hero: {
      eye: 'WE MARKETING',
      h1a: 'Creator Content',
      h1b: 'Packages.',
      lead: 'Authentic video content from 24,000+ vetted TikTok creators. Full usage rights. Ready for Meta, TikTok, Amazon, and beyond.',
      cta: 'Get Started →',
      platformNote: 'Creator videos built for every place your customer scrolls.',
      platforms: ['TikTok Shop', 'Meta Ads', 'Instagram Reels', 'YouTube Shorts', 'Amazon']
    },
    stats: [['24,000+', 'Vetted TikTok creators with real sales data'], ['8', 'Content formats covering full ad funnel'], ['60-80%', 'Cheaper than UGC marketplaces'], ['$60', 'Starting price per video']],
    statsNote: 'All videos include editing, captions, and full perpetual usage rights.',
    pricingTitle: ['Pick your', 'package.'],
    packages: [{
      tier: 'bulk',
      popular: true,
      tag: 'VOLUME PLAY',
      name: 'Essentials',
      price: '$60/video',
      note: '100 video minimum = $6,000',
      features: ['100 videos from ~35 creators', 'High-volume creator formats: product demos, routines, product showing, try-ons, and simple POV content', 'WEM assigns creators and content types', 'Basic editing + captions included', 'Full perpetual usage rights'],
      ideal: 'High volume for ad creative testing and cold starts. Maximum content, lowest cost.',
      timeline: '4-6 weeks'
    }, {
      tier: 'select',
      tag: 'QUALITY + CHOICE',
      name: 'Plus',
      price: '$80/video',
      note: '50 video minimum = $4,000',
      features: ['~35 creators produce 70+ directed video options', 'Brand keeps the best 50', 'Brand specifies content types, brief, and product angles', 'Reviews, unboxings, comparisons, problem-solution demos, green-screen explainers, or guided product demos', 'Basic editing + captions included', 'Full perpetual usage rights'],
      callout: 'Love more than 50? Package pricing available for additional videos. Contact us for more details.',
      ideal: 'Creative control. See more, keep the best. More involved creator formats than Essentials.',
      timeline: '4-6 weeks. Brand selects 50 from 70+.'
    }, {
      tier: 'premium',
      tag: 'STRUCTURED STORYTELLING',
      name: 'Premium',
      price: '$150/video',
      note: '25 video minimum = $3,750',
      features: ['25 videos with multi-scene structure and storytelling', 'Scripted with clear narrative arc, hook, and CTA', 'Creators with proven engagement and strong delivery', 'Full editing + captions + 1 revision', 'Full perpetual usage rights'],
      ideal: 'Brand campaigns, product launches, and hero ad creative that needs a narrative.',
      timeline: '3-5 weeks'
    }],
    popular: 'Most Popular',
    idealFor: 'Ideal for:',
    timeline: 'Timeline:',
    compareTitle: 'Quick compare.',
    compareHeaders: ['Essentials', 'Plus', 'Premium'],
    compareRows: [['Price / video', '$60', '$80', '$150'], ['Minimum order', '100', '50', '25'], ['Minimum spend', '$6,000', '$4,000', '$3,750'], ['Creators', '~35', '~35', 'Handpicked'], ['Videos delivered', '100', '70+', '25'], ['Videos you keep', '100', '50', '25'], ['Typical format', 'Demos / routines / product showing', 'Reviews / explainers / guided demos', 'Scripted story'], ['Brand picks content type', 'No', 'Yes', 'Yes'], ['Editing + captions', 'Yes', 'Yes', 'Yes'], ['Revisions', 'No', 'No', '1 round'], ['Usage rights', 'Perpetual', 'Perpetual', 'Perpetual']],
    customBundle: ['Need a custom bundle or higher volume? ', 'Contact us for discounts.'],
    customCreator: {
      eye: 'CUSTOM CREATOR CAMPAIGNS',
      titleA: 'Need stronger creators',
      titleB: 'than a package pool?',
      lead: 'For brands that want more than standardized UGC, WEM can build paid creator collaborations around stronger creator fit, sales history, audience trust, and campaign goals.',
      modes: [{
        id: 'kol',
        title: 'KOL / Brand Lift',
        goal: 'Goal: awareness, credibility, product discovery',
        budget: 'Budget preview: often $1K-$6K+ per video depending on reach, usage, and scope.',
        body: 'High-reach creators selected by follower base, average views, engagement, and audience fit.'
      }, {
        id: 'gmv',
        title: 'GMV-Driven Creators',
        goal: 'Goal: conversion, scale, high-intent shoppers',
        budget: 'Budget preview: often $300-$1.5K+ per video, or live packages plus commission.',
        body: 'Sales-proven TikTok Shop creators selected by GMV signal, audience fit, product category, and repeatability.'
      }],
      shortlistTitle: 'Creator shortlist preview',
      shortlistNote: 'No public handles shown. WEM shortlists include estimated creator fees before outreach.',
      shortlistCta: 'Ask WEM for a curated shortlist',
      shortlistEmpty: 'KOL shortlists are built case by case around reach, audience credibility, language, category fit, and launch goals.',
      creators: [{
        code: 'Mega Beauty KOL',
        role: 'High reach + sales signal',
        mode: 'kol',
        avatar: 'mega-beauty-kol',
        metrics: [['Followers', '12M'], ['GMV signal', '$180K'], ['Avg. views', '130K'], ['Audience', 'Female 18-34']],
        fit: 'A rare profile: celebrity-level reach with measurable TikTok Shop sales signal, useful when a brand needs awareness and conversion potential in the same creator'
      }, {
        code: 'Beauty KOL',
        role: 'Male skincare / beauty voice',
        mode: 'kol',
        avatar: 'glam-dark',
        metrics: [['Followers', '1.2M'], ['Engagement', '20%'], ['Avg. views', '1.5K'], ['Audience', '86% Female, 25-34']],
        fit: 'A rare male beauty voice with strong female audience fit, useful for brand lift and conversion-led product discovery'
      }, {
        code: 'Male Reach KOL',
        role: 'High-reach male-audience creator',
        mode: 'kol',
        avatar: 'bearded',
        metrics: [['Followers', '2.1M'], ['Engagement', '13.5%'], ['Avg. views', '26.6K'], ['Audience', 'Male 25-34']],
        fit: 'Strong fit for brands that need male audience reach, product discovery, and credibility at launch'
      }, {
        code: 'Verified Beauty KOL',
        role: 'Celebrity-style male creator',
        mode: 'kol',
        avatar: 'sunglasses',
        metrics: [['Followers', '4.1M'], ['Engagement', '7.1%'], ['Avg. views', '36.3K'], ['Audience', '72% Female, 18-24']],
        fit: 'Verified creator with young female audience fit, useful for beauty, home, and brand-lift campaigns with some sales proof'
      }, {
        code: 'Vietnamese Beauty',
        role: 'Vietnamese-language beauty creator',
        mode: 'gmv',
        avatar: 'beauty-soft',
        video: 'creator-content/creator-v-vietnamese-beauty.mp4?v=20260623-video-fix',
        metrics: [['GMV', '$130K'], ['Avg. views', '8K+'], ['Audience', 'Vietnamese-speaking'], ['Category', 'Beauty']],
        fit: 'Beauty creator with Vietnamese-language content and strong product-review trust.'
      }, {
        code: 'Spanish Beauty',
        role: 'Spanish-language GMV creator',
        mode: 'gmv',
        avatar: 'beauty-blonde',
        metrics: [['GMV', '$160K'], ['Avg. views', '1.5K'], ['Audience', '78% Female, 35-44'], ['Category', 'Beauty / Spanish']],
        fit: 'Spanish-language beauty creator with proven GMV signal for multicultural U.S. shopper segments.'
      }, {
        code: 'Live Commerce',
        role: 'Toys & home live host',
        mode: 'gmv',
        avatar: 'glasses',
        metrics: [['GMV', '$233.5K'], ['Followers', '21K'], ['Category', 'Toys / Home'], ['Format', 'Live selling']],
        fit: 'Live-first seller for toys, kids products, and home supplies.'
      }, {
        code: 'Mature Lifestyle',
        role: 'High-GMV trust-led creator',
        mode: 'gmv',
        avatar: 'blonde',
        metrics: [['GMV', '$800K+'], ['Avg. views', '5.8K'], ['Audience', '77% Female, 45-54'], ['Category', 'Beauty / Self care']],
        fit: 'Trust-led beauty and self-care creator for products that need credible demos and older female shopper trust.'
      }, {
        code: 'High-Ticket Demo',
        role: 'Live + short video converter',
        mode: 'gmv',
        avatar: 'dad-demo',
        metrics: [['GMV', '$230K'], ['Avg. views', '1.4K'], ['Audience', '57% Female, 35-44'], ['Category', 'Toys / Tools']],
        fit: 'Demo-led creator for larger products. Live plus short video can help higher-ticket items convert.'
      }],
      caseEye: 'Sales-driven creator collab',
      caseTitle: 'From one paid collab to a long-term revenue driver.',
      caseBody: 'A wellness creator collaboration generated 4.7M views and $61K GMV over 3 months. After the initial campaign, the creator moved into a long-term retainer and continued producing similar content that kept driving TikTok Shop GMV over time.',
      stats: [['4.7M', 'views'], ['$61K', 'GMV'], ['3 mo.', 'campaign window'], ['63.7K', 'current followers']],
      notes: ['Wellness / supplement category', 'Creator-led product storytelling', 'Retainer potential after product-market fit']
    },
    sampleTitle: ['Sample', 'work.'],
    sampleTabs: {
      bulk: 'Essentials',
      select: 'Plus',
      premium: 'Premium'
    },
    samples: [{
      tier: 'bulk',
      type: 'Routine',
      category: 'Skincare',
      desc: 'Creator tries each product on camera',
      src: 'creator-content/bulk-1.mp4'
    }, {
      tier: 'bulk',
      type: 'Product Showing',
      category: 'Kids Ride-On',
      desc: 'No-face product display',
      src: 'creator-content/bulk-2.mp4'
    }, {
      tier: 'bulk',
      type: 'TOF Storytelling',
      category: 'Food',
      desc: '“Make my snack with me”',
      src: 'creator-content/bulk-3.mp4'
    }, {
      tier: 'select',
      type: 'Product Review',
      category: 'Skincare',
      desc: 'Real-world honest review',
      src: 'creator-content/select-1.mp4'
    }, {
      tier: 'select',
      type: 'Unboxing',
      category: 'Kids Ride-On',
      desc: 'Open box + assembly',
      src: 'creator-content/select-2.mp4'
    }, {
      tier: 'select',
      type: 'Green Screen',
      category: 'Wellness',
      desc: 'Coupon explanation, strong CTA',
      src: 'creator-content/select-3.mp4'
    }, {
      tier: 'premium',
      type: 'Video Ad',
      category: 'Smart Home',
      desc: 'Multi-angle doorbell security footage',
      src: 'creator-content/premium-2.mp4'
    }, {
      tier: 'premium',
      type: 'TOF Storytelling',
      category: 'Wellness',
      desc: 'Cinematic bedtime narrative',
      src: 'creator-content/premium-bedtime-narrative.mp4?v=20260623-video-fix'
    }, {
      tier: 'premium',
      type: 'TOF Storytelling',
      category: 'Wellness',
      desc: 'Strong viral hook, ingredient-focused narrative',
      src: 'creator-content/premium-1.mp4'
    }],
    caseStudy: {
      eye: 'CASE STUDY',
      titleA: 'MoonBrew:',
      titleB: '300 videos, 6 weeks.',
      lead: 'Cold start on TikTok. 173 creators. Scripted reviews with hook + CTA. All amplified on TikTok.',
      stats: [['2M+', 'Views from two top videos'], ['100%+', 'GMV growth'], ['65%+', 'Shopify traffic lift from halo effect']],
      cards: [['ESSENTIALS · 200 VIDEOS', 'Volume content to train the algorithm and build brand presence on the platform.'], ['PREMIUM · 10 VIDEOS', 'Two standout videos reached 1.2M+ and 828K views; one helped cold-start a new flavor and new listing.']],
      closeA: 'Start with volume, find your winners,',
      closeB: 'scale what works.'
    },
    rights: {
      titleA: 'Usage rights &',
      titleB: 'specs.',
      included: 'INCLUDED IN ALL PACKAGES',
      upgrades: 'AVAILABLE AS UPGRADES',
      includedItems: ['Use anywhere online: ads, product listings, website, email, social', 'Meta, TikTok, YouTube, Google Ads, Amazon', 'No time limit, no renewal fees', 'Edited video delivered via Google Drive', 'Vertical 1080 x 1920, MP4 format'],
      upgradesItems: ['Rush delivery', 'Whitelisting / Spark Ads', 'Category exclusivity'],
      languages: React.createElement(React.Fragment, null, React.createElement("strong", null, "Languages:"), " English (default). Spanish, Haitian Creole, Vietnamese, Korean, and others available upon request.")
    },
    how: {
      titleA: 'How it',
      titleB: 'works.',
      steps: [['01', 'Choose your package', 'Essentials for volume, Plus for higher-touch formats and choice, Premium for storytelling.'], ['02', 'Submit your brief', 'Product, target audience, content direction. WEM handles creator matching.'], ['03', 'Creators produce content', 'Each creator films multiple videos. WEM manages sampling, briefing, and QA.'], ['04', 'Review and choose (Plus package)', '70+ videos delivered. Pick your best 50. Contact us for add-on pricing.'], ['05', 'Receive final deliverables', 'Edited videos + raw footage via Google Drive. Ready for ads.']]
    },
    final: {
      titleA: 'Ready to get',
      titleB: 'started?',
      lead: 'Tell us your product, target audience, and content goals. We handle creator matching, briefing, production, and delivery. Full service from brief to final cut.',
      cta: 'Book a Call'
    }
  },
  zh: {
    hero: {
      eye: 'WE MARKETING',
      h1a: 'UGC 达人内容',
      h1b: '生产套餐',
      lead: '为跨境品牌、Amazon 卖家和美国 DTC 品牌批量生产真实短视频。我们从 24,000+ 筛选达人里匹配合适人选，交付内容可用于 TikTok、Meta、Amazon Listing、官网和广告投放。',
      cta: '开始咨询',
      platformNote: '一套达人内容，可以服务多个销售和投放场景。',
      platforms: ['TikTok Shop', 'Meta 广告', 'Instagram Reels', 'YouTube Shorts', 'Amazon']
    },
    stats: [['24,000+', '筛选达人库'], ['8', '常用内容形式'], ['60-80%', '比常规 UGC 采购更省'], ['$60', '单条视频起价']],
    statsNote: '视频包含剪辑、字幕和长期使用权，适合广告、商品页和多平台复用。',
    pricingTitle: ['选择你的', '内容套餐'],
    packages: [{
      tier: 'bulk',
      popular: true,
      tag: '批量测试',
      name: 'Essentials',
      price: '$60/条',
      note: '100 条起订 = $6,000',
      features: ['约 35 位达人产出 100 条视频', '适合批量测试的达人自然内容形式：产品演示、routine、产品展示、试用/试穿和简单 POV 内容', 'WEM 负责分配达人、拆内容方向和基础质检', '包含基础剪辑与字幕', '包含长期使用权'],
      ideal: '适合冷启动、广告素材池搭建和大批量卖点测试。内容量最大，单条成本最低。',
      timeline: '4 到 6 周'
    }, {
      tier: 'select',
      tag: '先看后选',
      name: 'Plus',
      price: '$80/条',
      note: '50 条起订 = $4,000',
      features: ['约 35 位达人交付 70+ 条更有方向的视频选项', '品牌从中保留最适合投放的 50 条', '可指定内容类型、卖点方向和拍摄需求', '内容形式更明确：测评、开箱、对比、痛点解决型演示、绿幕讲解或引导式产品演示', '包含基础剪辑与字幕', '包含长期使用权'],
      callout: '如果想保留超过 50 条，可以按套餐单价加购。',
      ideal: '适合想控制内容方向，又希望拿到比 Essentials 更复杂内容形式的品牌。',
      timeline: '4 到 6 周。品牌从 70+ 条中选择 50 条。'
    }, {
      tier: 'premium',
      tag: '强叙事内容',
      name: 'Premium',
      price: '$150/条',
      note: '25 条起订 = $3,750',
      features: ['25 条多场景视频', '脚本包含 hook、使用场景、卖点展开和下单引导', '匹配表达能力强、镜头感更好的达人', '包含完整剪辑、字幕和 1 轮修改', '包含长期使用权'],
      ideal: '适合新品发布、品牌活动、重点广告素材和需要更完整表达的内容。',
      timeline: '3 到 5 周'
    }],
    popular: '最受欢迎',
    idealFor: '适合：',
    timeline: '周期：',
    compareTitle: '快速对比',
    compareHeaders: ['Essentials', 'Plus', 'Premium'],
    compareRows: [['单条价格', '$60', '$80', '$150'], ['起订数量', '100', '50', '25'], ['最低预算', '$6,000', '$4,000', '$3,750'], ['达人数量', '约 35', '约 35', '精选达人'], ['交付视频', '100', '70+', '25'], ['最终保留', '100', '50', '25'], ['常见形式', '演示 / routine / 产品展示', '测评 / 讲解 / 引导式演示', '脚本化故事'], ['品牌指定内容方向', '不包含', '可以', '可以'], ['剪辑 + 字幕', '包含', '包含', '包含'], ['修改轮次', '不包含', '不包含', '1 轮'], ['使用授权', '永久', '永久', '永久']],
    customBundle: ['需要更大批量或定制内容方向？', '联系我们获取报价。'],
    customCreator: {
      eye: '定制达人合作',
      titleA: '想找更强的达人',
      titleB: '做定制合作？',
      lead: '如果品牌不只是想批量拿 UGC，而是想找更有影响力或更会卖货的达人，WEM 可以按品类、历史带货表现、受众信任和 campaign 目标来定制合作。',
      modes: [{
        id: 'kol',
        title: 'KOL / 品牌曝光',
        goal: '目标：新品声量、品牌背书、产品认知',
        budget: '预算参考：通常 $1K-$6K+ / 条，取决于达人量级、授权和合作范围。',
        body: '按粉丝量、平均播放、互动率和受众画像筛选适合品牌曝光的达人。'
      }, {
        id: 'gmv',
        title: 'GMV 型达人合作',
        goal: '目标：转化、放大、高意向人群',
        budget: '预算参考：通常 $300-$1.5K+ / 条，或直播 package 加佣金。',
        body: '按 GMV 信号、受众匹配、品类适配和可复制性筛选转化型达人。'
      }],
      shortlistTitle: '推荐达人 shortlist 预览',
      shortlistNote: '公开页面不展示达人 handle。WEM 会在正式触达前提供达人 shortlist 和预估费用。',
      shortlistCta: '联系 WEM 获取定制 shortlist',
      shortlistEmpty: 'KOL shortlist 会按曝光量、受众信任、语言、品类匹配和新品目标单独筛选。',
      creators: [{
        code: '顶级美妆 KOL',
        role: '大粉量 + 带货信号',
        mode: 'kol',
        avatar: 'mega-beauty-kol',
        metrics: [['粉丝', '12M'], ['带货信号', '$180K'], ['平均播放', '130K'], ['受众', '女性 18-34']],
        fit: '很少见的大粉量达人，同时有可参考的 TikTok Shop 带货信号。适合既要声量、又希望有转化潜力的品牌合作'
      }, {
        code: '美妆 KOL',
        role: '男性美妆表达',
        mode: 'kol',
        avatar: 'glam-dark',
        metrics: [['粉丝', '1.2M'], ['互动率', '20%'], ['平均播放', '1.5K'], ['受众', '86% 女性，25-34']],
        fit: '少见的男性美妆表达，但女性受众占比高，适合品牌曝光、信任建立和有转化目标的产品种草'
      }, {
        code: '男性受众 KOL',
        role: '高触达男性受众达人',
        mode: 'kol',
        avatar: 'bearded',
        metrics: [['粉丝', '2.1M'], ['互动率', '13.5%'], ['平均播放', '26.6K'], ['受众', '男性 25-34']],
        fit: '适合需要男性受众触达、新品认知和发布期背书的品牌'
      }, {
        code: '蓝勾美妆 KOL',
        role: '名人型男性达人',
        mode: 'kol',
        avatar: 'sunglasses',
        metrics: [['粉丝', '4.1M'], ['互动率', '7.1%'], ['平均播放', '36.3K'], ['受众', '72% 女性，18-24']],
        fit: '有蓝勾认证和年轻女性受众，适合美妆、家居和需要声量背书的 campaign，也有一定带货证明'
      }, {
        code: '越南语美妆',
        role: '小语种美妆达人',
        mode: 'gmv',
        avatar: 'beauty-soft',
        video: 'creator-content/creator-v-vietnamese-beauty.mp4?v=20260623-video-fix',
        metrics: [['GMV', '$130K'], ['平均播放', '8K+'], ['受众', '越南语人群'], ['类目', '美妆']],
        fit: '越南语美妆内容达人，适合需要信任感和真实测评表达的产品。'
      }, {
        code: '西语美妆',
        role: '西语 GMV 型达人',
        mode: 'gmv',
        avatar: 'beauty-blonde',
        metrics: [['GMV', '$160K'], ['平均播放', '1.5K'], ['受众', '78% 女性，35-44'], ['类目', '美妆 / 西语']],
        fit: '西语美妆达人，有明确 GMV 信号，适合触达美国多语种消费人群。'
      }, {
        code: '直播带货达人',
        role: '玩具与家居百货',
        mode: 'gmv',
        avatar: 'glasses',
        metrics: [['GMV', '$233.5K'], ['粉丝', '21K'], ['类目', '玩具 / 家居'], ['形式', '直播带货']],
        fit: '直播型达人，适合玩具、儿童产品和家居百货类目的达播合作。'
      }, {
        code: '成熟受众达人',
        role: '高 GMV 信任型达人',
        mode: 'gmv',
        avatar: 'blonde',
        metrics: [['GMV', '$800K+'], ['平均播放', '5.8K'], ['受众', '77% 女性，45-54'], ['类目', '美妆 / 护理']],
        fit: '信任型美妆和护理达人，适合需要可信讲解和成熟女性消费者信任的产品。'
      }, {
        code: '高客单演示型达人',
        role: '短视频加直播转化',
        mode: 'gmv',
        avatar: 'dad-demo',
        metrics: [['GMV', '$230K'], ['平均播放', '1.4K'], ['受众', '57% 女性，35-44'], ['类目', '玩具 / 工具']],
        fit: '适合玩具、五金工具、运动用品和需要演示的大件产品。直播加短视频更适合推动高客单转化。'
      }],
      caseEye: 'GMV 型达人合作案例',
      caseTitle: '从一次付费合作，变成长期带货资产。',
      caseBody: '一个保健品达人合作在 3 个月内带来 4.7M 播放和 $61K GMV。初次合作后，这位达人转为长期 retainer，持续产出类似内容，并持续为 TikTok Shop 带来 GMV。',
      stats: [['4.7M', '播放'], ['$61K', 'GMV'], ['3 个月', '合作周期'], ['63.7K', '当前粉丝']],
      notes: ['保健品类目', '达人主导的产品叙事', '测试成功后转长期 retainer']
    },
    sampleTitle: ['内容', '示例'],
    sampleTabs: {
      bulk: 'Essentials',
      select: 'Plus',
      premium: 'Premium'
    },
    samples: [{
      tier: 'bulk',
      type: '日常展示',
      category: '护肤',
      desc: '达人自然展示产品怎么用',
      src: 'creator-content/bulk-1.mp4'
    }, {
      tier: 'bulk',
      type: '产品展示',
      category: '母婴用品',
      desc: '不露脸产品功能展示',
      src: 'creator-content/bulk-2.mp4'
    }, {
      tier: 'bulk',
      type: '生活场景',
      category: '食品',
      desc: '把产品放进真实生活场景里',
      src: 'creator-content/bulk-3.mp4'
    }, {
      tier: 'select',
      type: '产品测评',
      category: '护肤',
      desc: '真实使用后的体验反馈',
      src: 'creator-content/select-1.mp4'
    }, {
      tier: 'select',
      type: '开箱组装',
      category: '母婴用品',
      desc: '开箱、组装和卖点展示',
      src: 'creator-content/select-2.mp4'
    }, {
      tier: 'select',
      type: '绿幕讲解',
      category: '健康保健',
      desc: '把优惠和下单理由讲清楚',
      src: 'creator-content/select-3.mp4'
    }, {
      tier: 'premium',
      type: '广告素材',
      category: '智能家居',
      desc: '多角度呈现门铃安全使用场景',
      src: 'creator-content/premium-2.mp4'
    }, {
      tier: 'premium',
      type: 'TOF 故事种草',
      category: '健康保健',
      desc: '电影感睡前场景叙事',
      src: 'creator-content/premium-bedtime-narrative.mp4?v=20260623-video-fix'
    }, {
      tier: 'premium',
      type: '高转化种草',
      category: '健康保健',
      desc: '围绕成分、痛点和使用场景展开',
      src: 'creator-content/premium-1.mp4'
    }],
    caseStudy: {
      eye: '案例',
      titleA: 'MoonBrew：',
      titleB: '6 周 300 条视频',
      lead: '这是一个美国 TikTok Shop 冷启动项目。173 位达人参与内容生产，我们批量测试 hook、卖点和下单引导，再把有效素材拿去放大。',
      stats: [['2M+', '两条头部视频播放'], ['100%+', '销售增长'], ['65%+', 'Shopify 独立站外溢流量增长']],
      cards: [['ESSENTIALS · 200 条视频', '先用大量内容测试平台反馈，让品牌快速在 TikTok 上露出。'], ['PREMIUM · 10 条视频', '两条重点视频分别达到 1.2M+ 和 828K 播放，其中一条帮助一个新口味和新 listing 完成冷启动。']],
      closeA: '先用内容测试，找到有效素材，',
      closeB: '再集中预算放大。'
    },
    rights: {
      titleA: '使用授权和',
      titleB: '交付规格',
      included: '所有套餐均包含',
      upgrades: '可选升级',
      includedItems: ['可用于广告、商品详情页、Amazon Listing、官网、邮件和社媒', '支持 Meta、TikTok、YouTube、Google Ads、Amazon', '无时间限制，无续费', '剪辑后视频通过 Google Drive 交付', '竖版 1080 x 1920，MP4 格式'],
      upgradesItems: ['加急交付', '达人授权和 Spark Ads', '品类独家'],
      languages: React.createElement(React.Fragment, null, React.createElement("strong", null, "\u8BED\u8A00\uFF1A"), "\u9ED8\u8BA4\u82F1\u6587\u3002\u53EF\u6309\u9700\u63D0\u4F9B\u897F\u8BED\u3001\u4E2D\u6587\u3001\u6D77\u5730\u514B\u91CC\u5965\u5C14\u8BED\u3001\u8D8A\u5357\u8BED\u3001\u97E9\u8BED\u53CA\u5176\u4ED6\u8BED\u79CD\u3002")
    },
    how: {
      titleA: '合作',
      titleB: '流程',
      steps: [['01', '选择套餐', 'Essentials 适合批量测试，Plus 适合更复杂内容形式和先看后选，Premium 适合重点广告内容。'], ['02', '提交内容需求', '提供产品、目标买家、核心卖点和不能踩的内容红线。WEM 负责匹配达人和拆解内容方向。'], ['03', '达人拍摄内容', '达人按内容要求拍摄多条视频。WEM 管理寄样、沟通、进度和基础质检。'], ['04', '审核并选择', 'Plus 套餐会先交付 70+ 条视频，品牌再选择最终保留的 50 条。需要加购可单独报价。'], ['05', '收到最终内容', '剪辑视频和原始素材通过 Google Drive 交付，可直接用于广告和商品页。']]
    },
    final: {
      titleA: '准备开始',
      titleB: '做 UGC？',
      lead: '告诉我们你的产品、目标买家和内容目标。我们负责达人匹配、内容要求拆解、内容生产、质检和交付，从需求到成片全流程执行。',
      cta: '预约咨询'
    }
  }
};
const S = {
  wrap: {
    background: '#000',
    color: '#fff'
  },
  section: {
    padding: '120px 32px',
    position: 'relative'
  },
  inner: {
    maxWidth: 1280,
    margin: '0 auto',
    position: 'relative'
  },
  eye: {
    fontFamily: 'var(--font-mono)',
    fontSize: 12,
    letterSpacing: '.22em',
    textTransform: 'uppercase',
    color: '#FF1493',
    marginBottom: 24,
    fontWeight: 700
  },
  h1: {
    fontFamily: 'var(--font-display)',
    fontWeight: 900,
    fontSize: 'clamp(56px, 7vw, 110px)',
    lineHeight: .95,
    letterSpacing: '-.005em',
    textTransform: 'uppercase',
    margin: 0
  },
  h2: {
    fontFamily: 'var(--font-display)',
    fontWeight: 900,
    fontSize: 'clamp(40px, 5vw, 72px)',
    lineHeight: 1,
    letterSpacing: '-.005em',
    textTransform: 'uppercase',
    margin: '0 0 24px'
  },
  lead: {
    fontFamily: 'var(--font-sans)',
    fontSize: 22,
    lineHeight: 1.45,
    color: 'rgba(255,255,255,.85)',
    maxWidth: 780,
    marginTop: 28,
    marginBottom: 40
  },
  grad: {
    background: 'linear-gradient(90deg,#FF1493,#9B30FF,#4A8FFF)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  },
  orb1: {
    position: 'absolute',
    top: -120,
    right: -160,
    width: 600,
    height: 600,
    background: 'radial-gradient(circle, #FF1493 0%, transparent 55%)',
    filter: 'blur(70px)',
    opacity: .3,
    pointerEvents: 'none'
  },
  orb2: {
    position: 'absolute',
    bottom: -120,
    left: -120,
    width: 500,
    height: 500,
    background: 'radial-gradient(circle, #9B30FF 0%, transparent 60%)',
    filter: 'blur(80px)',
    opacity: .3,
    pointerEvents: 'none'
  },
  statsRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: 24
  },
  statTile: {
    background: '#0A0A0A',
    border: '1px solid rgba(255,255,255,.1)',
    borderRadius: 16,
    padding: 32,
    boxShadow: '0 0 0 1px rgba(255,20,147,.1), 0 0 40px rgba(155,48,255,.1)'
  },
  statNum: {
    fontFamily: 'var(--font-display)',
    fontWeight: 900,
    fontSize: 56,
    lineHeight: 1,
    color: '#fff'
  },
  statLab: {
    fontFamily: 'var(--font-sans)',
    fontWeight: 700,
    fontSize: 13,
    letterSpacing: '.06em',
    color: '#fff',
    marginTop: 14,
    lineHeight: 1.4
  },
  statsNote: {
    fontFamily: 'var(--font-sans)',
    fontSize: 14,
    color: 'rgba(255,255,255,.6)',
    marginTop: 24,
    textAlign: 'center'
  },
  pricingRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 24
  },
  priceCard: {
    background: '#0A0A0A',
    border: '1px solid rgba(255,255,255,.1)',
    borderRadius: 20,
    padding: 36,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column'
  },
  priceCardHighlight: {
    borderColor: 'rgba(74,143,255,.5)',
    boxShadow: '0 0 0 1px rgba(74,143,255,.3), 0 0 60px rgba(74,143,255,.15)',
    transform: 'translateY(-12px)'
  },
  tag: {
    fontFamily: 'var(--font-mono)',
    fontSize: 11,
    letterSpacing: '.18em',
    textTransform: 'uppercase',
    fontWeight: 700,
    padding: '6px 12px',
    borderRadius: 999,
    alignSelf: 'flex-start',
    marginBottom: 18
  },
  popular: {
    position: 'absolute',
    top: -16,
    right: 24,
    background: '#4A8FFF',
    color: '#000',
    fontFamily: 'var(--font-sans)',
    fontWeight: 800,
    fontSize: 11,
    letterSpacing: '.1em',
    padding: '6px 14px',
    borderRadius: 999,
    textTransform: 'uppercase'
  },
  pkgName: {
    fontFamily: 'var(--font-display)',
    fontWeight: 900,
    fontSize: 44,
    lineHeight: 1,
    textTransform: 'uppercase',
    margin: '0 0 8px'
  },
  pkgPrice: {
    fontFamily: 'var(--font-display)',
    fontWeight: 900,
    fontSize: 36,
    lineHeight: 1,
    color: '#fff'
  },
  pkgNote: {
    fontFamily: 'var(--font-sans)',
    fontSize: 13,
    color: 'rgba(255,255,255,.6)',
    marginTop: 6,
    marginBottom: 22
  },
  pkgLi: {
    fontFamily: 'var(--font-sans)',
    fontSize: 15,
    lineHeight: 1.5,
    color: 'rgba(255,255,255,.85)',
    padding: '8px 0',
    display: 'flex',
    gap: 10
  },
  callout: {
    background: 'rgba(255,20,147,.08)',
    border: '1px solid rgba(255,20,147,.3)',
    borderRadius: 10,
    padding: '10px 14px',
    fontFamily: 'var(--font-sans)',
    fontSize: 13,
    color: '#FF1493',
    marginTop: 16
  },
  ideal: {
    fontFamily: 'var(--font-sans)',
    fontSize: 13,
    color: 'rgba(255,255,255,.65)',
    lineHeight: 1.5,
    marginTop: 20,
    paddingTop: 18,
    borderTop: '1px solid rgba(255,255,255,.08)'
  },
  compareCards: {
    marginTop: 34,
    display: 'grid',
    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
    gap: 20
  },
  compareCard: {
    position: 'relative',
    overflow: 'hidden',
    minHeight: 420,
    borderRadius: 22,
    padding: 26,
    border: '1px solid rgba(255,255,255,.12)',
    background: 'linear-gradient(145deg, rgba(255,255,255,.1), rgba(255,255,255,.028))',
    boxShadow: 'inset 0 1px 0 rgba(255,255,255,.12), 0 18px 55px rgba(0,0,0,.22)',
    display: 'flex',
    flexDirection: 'column'
  },
  compareCardGlow: {
    position: 'absolute',
    right: -60,
    top: -70,
    width: 170,
    height: 170,
    borderRadius: '50%',
    filter: 'blur(8px)',
    opacity: .42
  },
  comparePlanName: {
    position: 'relative',
    fontFamily: 'var(--font-display)',
    fontWeight: 900,
    fontSize: 30,
    lineHeight: 1,
    textTransform: 'uppercase',
    color: '#fff'
  },
  comparePlanHint: {
    position: 'relative',
    fontFamily: 'var(--font-sans)',
    fontSize: 13,
    lineHeight: 1.3,
    color: 'rgba(255,255,255,.64)',
    fontWeight: 800,
    marginTop: 8
  },
  compareTable: {
    position: 'relative',
    marginTop: 24,
    borderTop: '1px solid rgba(255,255,255,.12)'
  },
  compareRowMini: {
    display: 'grid',
    gridTemplateColumns: '92px 1fr',
    gap: 16,
    padding: '15px 0',
    borderBottom: '1px solid rgba(255,255,255,.09)',
    alignItems: 'baseline'
  },
  compareMiniLabel: {
    fontFamily: 'var(--font-mono)',
    fontWeight: 900,
    fontSize: 10,
    letterSpacing: '.13em',
    textTransform: 'uppercase',
    lineHeight: 1.25
  },
  compareMiniValue: {
    fontFamily: 'var(--font-sans)',
    fontWeight: 750,
    fontSize: 14,
    lineHeight: 1.42,
    color: 'rgba(255,255,255,.86)'
  },
  customCreatorGrid: {
    display: 'grid',
    gridTemplateColumns: 'minmax(300px, .8fr) minmax(0, 1.2fr)',
    gap: 28,
    alignItems: 'stretch',
    marginTop: 42
  },
  modeGrid: {
    display: 'grid',
    gap: 14
  },
  modeCard: {
    borderRadius: 18,
    padding: 24,
    minHeight: 188,
    background: 'linear-gradient(145deg, rgba(255,255,255,.1), rgba(255,255,255,.035))',
    border: '1px solid rgba(255,255,255,.12)',
    display: 'grid',
    alignContent: 'start'
  },
  modeTitle: {
    fontFamily: 'var(--font-display)',
    fontWeight: 900,
    fontSize: 24,
    textTransform: 'uppercase',
    color: '#fff',
    lineHeight: 1
  },
  modeGoal: {
    fontFamily: 'var(--font-mono)',
    fontWeight: 800,
    fontSize: 10,
    letterSpacing: '.12em',
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,.56)',
    lineHeight: 1.35,
    marginTop: 14
  },
  modeBudget: {
    fontFamily: 'var(--font-sans)',
    fontSize: 13,
    lineHeight: 1.35,
    color: '#fff',
    fontWeight: 850,
    marginTop: 13,
    padding: '10px 12px',
    borderRadius: 12,
    background: 'rgba(0,0,0,.22)',
    border: '1px solid rgba(255,255,255,.1)'
  },
  modeText: {
    fontFamily: 'var(--font-sans)',
    fontSize: 15,
    lineHeight: 1.5,
    color: 'rgba(255,255,255,.72)',
    marginTop: 10
  },
  paidCase: {
    display: 'grid',
    gridTemplateColumns: 'minmax(260px, 380px) 1fr',
    gap: 30,
    padding: 28,
    borderRadius: 26,
    marginTop: 28,
    background: 'radial-gradient(circle at 100% 0%, rgba(255,20,147,.18), transparent 38%), linear-gradient(145deg, rgba(255,255,255,.11), rgba(255,255,255,.035))',
    border: '1px solid rgba(255,255,255,.14)',
    boxShadow: '0 24px 80px rgba(0,0,0,.28)'
  },
  paidVideo: {
    width: '100%',
    aspectRatio: '16 / 10',
    borderRadius: 18,
    objectFit: 'cover',
    background: '#000',
    border: '1px solid rgba(255,255,255,.12)'
  },
  paidCaseEye: {
    fontFamily: 'var(--font-mono)',
    fontSize: 10,
    letterSpacing: '.18em',
    textTransform: 'uppercase',
    color: '#4A8FFF',
    fontWeight: 800
  },
  paidCaseTitle: {
    fontFamily: 'var(--font-display)',
    fontWeight: 900,
    fontSize: 'clamp(28px, 3vw, 42px)',
    lineHeight: 1,
    color: '#fff',
    textTransform: 'uppercase',
    marginTop: 10
  },
  paidCaseBody: {
    fontFamily: 'var(--font-sans)',
    fontSize: 16,
    lineHeight: 1.55,
    color: 'rgba(255,255,255,.78)',
    marginTop: 16
  },
  paidStats: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
    gap: 10,
    marginTop: 22
  },
  paidStat: {
    borderRadius: 14,
    padding: '13px 12px',
    background: 'rgba(0,0,0,.26)',
    border: '1px solid rgba(255,255,255,.1)'
  },
  paidStatNum: {
    fontFamily: 'var(--font-display)',
    fontSize: 28,
    fontWeight: 900,
    lineHeight: 1,
    color: '#FF1493'
  },
  paidStatLab: {
    fontFamily: 'var(--font-mono)',
    fontSize: 9,
    letterSpacing: '.12em',
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,.58)',
    marginTop: 6
  },
  paidNotes: {
    display: 'flex',
    gap: 8,
    flexWrap: 'wrap',
    marginTop: 18
  },
  paidNote: {
    fontFamily: 'var(--font-sans)',
    fontWeight: 800,
    fontSize: 12,
    color: '#fff',
    borderRadius: 999,
    padding: '7px 10px',
    background: 'rgba(255,255,255,.08)',
    border: '1px solid rgba(255,255,255,.1)'
  },
  shortlistWrap: {
    padding: 22,
    borderRadius: 20,
    minHeight: 390,
    background: 'linear-gradient(145deg, rgba(74,143,255,.07), rgba(255,20,147,.045))',
    border: '1px solid rgba(255,255,255,.1)'
  },
  shortlistHead: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'end',
    gap: 16,
    flexWrap: 'wrap',
    marginBottom: 16
  },
  shortlistTitle: {
    fontFamily: 'var(--font-display)',
    fontWeight: 900,
    fontSize: 28,
    lineHeight: 1,
    color: '#fff',
    textTransform: 'uppercase'
  },
  shortlistNote: {
    fontFamily: 'var(--font-sans)',
    fontSize: 12,
    lineHeight: 1.4,
    color: 'rgba(255,255,255,.58)',
    maxWidth: 520
  },
  shortlistGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    gap: 16,
    alignItems: 'stretch'
  },
  shortlistEmpty: {
    borderRadius: 16,
    minHeight: 176,
    display: 'flex',
    alignItems: 'center',
    padding: 20,
    background: 'rgba(0,0,0,.22)',
    border: '1px dashed rgba(74,143,255,.26)',
    fontFamily: 'var(--font-sans)',
    fontSize: 14,
    lineHeight: 1.5,
    color: 'rgba(255,255,255,.68)'
  },
  creatorCard: {
    display: 'grid',
    gridTemplateRows: '92px 94px 1fr',
    gap: 14,
    borderRadius: 18,
    padding: 18,
    minHeight: 292,
    height: '100%',
    background: 'rgba(0,0,0,.26)',
    border: '1px solid rgba(255,255,255,.1)',
    overflow: 'hidden'
  },
  creatorWideCard: {
    gridColumn: '1 / -1',
    minHeight: 250
  },
  creatorAvatarImage: {
    width: 72,
    height: 72,
    borderRadius: '50%',
    objectFit: 'cover',
    display: 'block',
    border: '3px solid #4A8FFF',
    boxShadow: '0 0 0 4px rgba(255,255,255,.08), 0 16px 34px rgba(0,0,0,.34)',
    flexShrink: 0,
    background: '#111'
  },
  creatorAvatar: {
    position: 'relative',
    width: 76,
    height: 76,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'radial-gradient(circle at 28% 22%, rgba(255,255,255,.72), transparent 18%), radial-gradient(circle at 50% 58%, var(--avatar-bg, #FF5BB8), #9B30FF 78%)',
    border: '3px solid var(--clay-accent, #4A8FFF)',
    boxShadow: '0 0 0 4px rgba(255,255,255,.08), 0 16px 34px rgba(0,0,0,.34)',
    overflow: 'hidden',
    flexShrink: 0
  },
  clayHead: {
    position: 'absolute',
    top: 23,
    left: 21,
    width: 34,
    height: 34,
    borderRadius: '50%',
    background: 'linear-gradient(145deg, #ffd1ba, #b66b59)',
    boxShadow: 'inset -5px -6px 10px rgba(122,52,42,.23), inset 5px 4px 8px rgba(255,255,255,.36)',
    zIndex: 3
  },
  clayHair: {
    position: 'absolute',
    top: 14,
    left: 17,
    width: 42,
    height: 27,
    borderRadius: '24px 24px 12px 12px',
    background: 'linear-gradient(145deg, #2a1720, #0d090c)',
    zIndex: 4
  },
  clayHairLong: {
    top: 12,
    left: 12,
    width: 52,
    height: 56,
    borderRadius: '28px 28px 22px 22px',
    zIndex: 2
  },
  clayHairPony: {
    top: 12,
    left: 18,
    width: 40,
    height: 31,
    borderRadius: '22px 22px 12px 12px',
    boxShadow: '20px 3px 0 -9px #d9a55c'
  },
  clayHairWavy: {
    top: 10,
    left: 13,
    width: 50,
    height: 42,
    borderRadius: '28px 20px 24px 16px',
    zIndex: 2
  },
  clayHairUpdo: {
    top: 8,
    left: 26,
    width: 24,
    height: 18,
    borderRadius: '50%',
    boxShadow: '0 14px 0 7px #c79248'
  },
  clayBody: {
    position: 'absolute',
    bottom: -7,
    left: 20,
    width: 36,
    height: 26,
    borderRadius: '18px 18px 8px 8px',
    background: 'linear-gradient(145deg, var(--clay-accent, #4A8FFF), rgba(255,255,255,.12))',
    boxShadow: 'inset -4px -5px 8px rgba(0,0,0,.22), inset 4px 3px 7px rgba(255,255,255,.22)',
    zIndex: 1
  },
  clayPhone: {
    position: 'absolute',
    right: 14,
    bottom: 12,
    width: 10,
    height: 15,
    borderRadius: 3,
    background: '#111',
    border: '1px solid rgba(255,255,255,.28)',
    transform: 'rotate(-10deg)',
    zIndex: 5
  },
  clayEyes: {
    position: 'absolute',
    top: 36,
    left: 28,
    width: 5,
    height: 5,
    borderRadius: '50%',
    background: '#221615',
    boxShadow: '14px 0 0 #221615',
    zIndex: 6
  },
  clayGlasses: {
    position: 'absolute',
    top: 33,
    left: 22,
    width: 32,
    height: 13,
    borderRadius: 999,
    border: '2px solid rgba(35,24,24,.82)',
    zIndex: 7
  },
  clayShades: {
    position: 'absolute',
    top: 34,
    left: 21,
    width: 34,
    height: 12,
    borderRadius: 999,
    background: 'linear-gradient(90deg, #151515, #40221c)',
    transform: 'rotate(-7deg)',
    zIndex: 7
  },
  clayBeard: {
    position: 'absolute',
    top: 45,
    left: 25,
    width: 26,
    height: 16,
    borderRadius: '0 0 15px 15px',
    background: '#211412',
    zIndex: 5
  },
  clayLips: {
    position: 'absolute',
    top: 50,
    left: 34,
    width: 9,
    height: 3,
    borderRadius: 999,
    background: '#b34a67',
    zIndex: 8
  },
  clayHand: {
    position: 'absolute',
    top: 33,
    right: 10,
    width: 12,
    height: 19,
    borderRadius: 999,
    background: '#9b6958',
    transform: 'rotate(-26deg)',
    zIndex: 8
  },
  clayTool: {
    position: 'absolute',
    right: 12,
    bottom: 16,
    width: 17,
    height: 6,
    borderRadius: 999,
    background: '#b9bcc4',
    transform: 'rotate(-26deg)',
    boxShadow: '10px 0 0 -4px #1b1b1e',
    zIndex: 8
  },
  creatorTop: {
    display: 'grid',
    gridTemplateColumns: '78px minmax(0, 1fr)',
    gap: 14,
    alignItems: 'center',
    minHeight: 92
  },
  creatorText: {
    minWidth: 0,
    display: 'grid',
    alignContent: 'center'
  },
  creatorCode: {
    fontFamily: 'var(--font-display)',
    fontWeight: 900,
    fontSize: 20,
    lineHeight: 1.02,
    color: '#4A8FFF',
    textTransform: 'uppercase',
    maxWidth: '100%',
    wordBreak: 'normal',
    overflowWrap: 'normal'
  },
  creatorRole: {
    fontFamily: 'var(--font-sans)',
    fontWeight: 900,
    fontSize: 12,
    lineHeight: 1.18,
    color: '#fff',
    marginTop: 7
  },
  creatorMetrics: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    gap: 8,
    minHeight: 94,
    alignSelf: 'start'
  },
  creatorMetric: {
    display: 'grid',
    alignContent: 'center',
    gap: 3,
    borderRadius: 10,
    padding: '9px 10px',
    background: 'rgba(255,255,255,.045)',
    fontFamily: 'var(--font-sans)',
    fontSize: 11,
    lineHeight: 1.25
  },
  creatorMetricLabel: {
    color: 'rgba(255,255,255,.5)',
    fontWeight: 800
  },
  creatorMetricValue: {
    color: '#fff',
    fontWeight: 900
  },
  creatorFit: {
    alignSelf: 'end',
    paddingTop: 10,
    borderTop: '1px solid rgba(255,255,255,.1)',
    fontFamily: 'var(--font-sans)',
    fontSize: 12,
    lineHeight: 1.35,
    color: 'rgba(255,255,255,.72)'
  },
  shortlistCta: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    borderRadius: 999,
    padding: '12px 16px',
    fontFamily: 'var(--font-sans)',
    fontWeight: 900,
    fontSize: 12,
    letterSpacing: '.06em',
    textTransform: 'uppercase',
    color: '#000',
    textDecoration: 'none'
  },
  videoGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 24,
    marginBottom: 40
  },
  videoCard: {
    background: '#0A0A0A',
    border: '1px solid rgba(255,255,255,.08)',
    borderRadius: 16,
    overflow: 'hidden'
  },
  videoFrame: {
    width: '100%',
    aspectRatio: '9 / 16',
    background: '#000',
    display: 'block',
    objectFit: 'cover'
  },
  videoLabel: {
    padding: '16px 18px 18px'
  },
  videoTag: {
    fontFamily: 'var(--font-sans)',
    fontWeight: 800,
    fontSize: 11,
    letterSpacing: '.12em',
    textTransform: 'uppercase',
    padding: '4px 10px',
    borderRadius: 999,
    display: 'inline-block',
    marginBottom: 10
  },
  videoCat: {
    fontFamily: 'var(--font-display)',
    fontWeight: 900,
    fontSize: 20,
    color: '#fff',
    textTransform: 'uppercase',
    letterSpacing: '.01em'
  },
  videoDesc: {
    fontFamily: 'var(--font-sans)',
    fontSize: 14,
    color: 'rgba(255,255,255,.7)',
    marginTop: 4
  },
  caseStat: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 20,
    marginTop: 32
  },
  caseStrats: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: 20,
    marginTop: 28
  },
  caseStratCard: {
    background: '#0A0A0A',
    border: '1px solid rgba(255,255,255,.1)',
    borderRadius: 16,
    padding: 28
  },
  rightsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: 32
  },
  rightsCol: {
    background: '#0A0A0A',
    border: '1px solid rgba(255,255,255,.1)',
    borderRadius: 16,
    padding: 32
  },
  step: {
    display: 'grid',
    gridTemplateColumns: '80px 1fr',
    gap: 24,
    padding: '24px 0',
    borderTop: '1px solid rgba(255,255,255,.08)',
    alignItems: 'baseline'
  },
  stepNum: {
    fontFamily: 'var(--font-display)',
    fontWeight: 900,
    fontSize: 48,
    color: '#FF1493',
    lineHeight: 1
  },
  stepBody: {
    fontFamily: 'var(--font-sans)',
    fontSize: 17,
    lineHeight: 1.5,
    color: 'rgba(255,255,255,.85)'
  },
  stepTitle: {
    fontFamily: 'var(--font-sans)',
    fontWeight: 800,
    fontSize: 20,
    color: '#fff',
    textTransform: 'uppercase',
    letterSpacing: '.02em',
    marginBottom: 6
  }
};
function Hero({
  lang
}) {
  const t = COPY[lang].hero;
  return React.createElement("section", {
    className: "cc-section cc-hero",
    style: {
      ...S.section,
      paddingTop: 120,
      overflow: 'hidden'
    }
  }, React.createElement("div", {
    style: S.orb1
  }), React.createElement("div", {
    style: S.orb2
  }), React.createElement("div", {
    className: "cc-inner",
    style: S.inner
  }, React.createElement("div", {
    style: S.eye
  }, t.eye), React.createElement("h1", {
    className: "cc-hero-title",
    style: S.h1
  }, t.h1a, React.createElement("br", null), React.createElement("span", {
    style: S.grad
  }, t.h1b)), React.createElement("p", {
    className: "cc-lead",
    style: S.lead
  }, t.lead), React.createElement("a", {
    href: BOOK,
    target: "_blank",
    rel: "noopener",
    className: "cc-cta"
  }, t.cta)));
}
function Stats({
  lang
}) {
  const t = COPY[lang];
  return React.createElement("section", {
    className: "cc-section",
    style: {
      ...S.section,
      padding: '60px 32px',
      background: '#000',
      borderTop: '1px solid rgba(255,255,255,.08)',
      borderBottom: '1px solid rgba(255,255,255,.08)'
    }
  }, React.createElement("div", {
    className: "cc-inner",
    style: S.inner
  }, React.createElement("div", {
    className: "cc-stats-row",
    style: S.statsRow
  }, t.stats.map(([n, l], i) => React.createElement("div", {
    key: i,
    className: "cc-stat-tile",
    style: S.statTile
  }, React.createElement("div", {
    className: "cc-stat-num",
    style: S.statNum
  }, n), React.createElement("div", {
    style: S.statLab
  }, l)))), React.createElement("div", {
    style: S.statsNote
  }, t.statsNote)));
}
const Check = ({
  color
}) => React.createElement("span", {
  style: {
    color,
    fontWeight: 800,
    flexShrink: 0
  }
}, "\u2713");
function Pricing({
  lang
}) {
  const t = COPY[lang];
  return React.createElement("section", {
    id: "packages",
    className: "cc-section cc-pricing-section",
    style: {
      ...S.section,
      paddingTop: 120,
      scrollMarginTop: 96
    }
  }, React.createElement("div", {
    className: "cc-inner",
    style: S.inner
  }, React.createElement("h2", {
    className: "cc-section-title",
    style: S.h2
  }, t.pricingTitle[0], " ", React.createElement("span", {
    style: S.grad
  }, t.pricingTitle[1])), React.createElement("div", {
    className: "cc-pricing-row",
    style: {
      ...S.pricingRow,
      marginTop: 60
    }
  }, t.packages.map((c, i) => {
    const accent = TIERS[c.tier].color;
    return React.createElement("div", {
      key: i,
      className: "cc-pricing-card",
      style: {
        ...S.priceCard,
        ...(c.popular ? S.priceCardHighlight : {}),
        borderColor: c.popular ? 'rgba(74,143,255,.5)' : `${accent}33`
      }
    }, c.popular && React.createElement("span", {
      className: "cc-popular-badge",
      style: S.popular
    }, t.popular), React.createElement("span", {
      style: {
        ...S.tag,
        background: `${accent}1f`,
        color: accent
      }
    }, c.tag), React.createElement("div", {
      className: "cc-package-name",
      style: {
        ...S.pkgName,
        color: accent
      }
    }, c.name), React.createElement("div", {
      className: "cc-package-price",
      style: S.pkgPrice
    }, c.price), React.createElement("div", {
      style: S.pkgNote
    }, c.note), React.createElement("div", {
      style: {
        flex: 1
      }
    }, c.features.map((f, j) => React.createElement("div", {
      key: j,
      className: "cc-package-li",
      style: S.pkgLi
    }, React.createElement(Check, {
      color: accent
    }), f)), c.callout && React.createElement("div", {
      style: S.callout
    }, c.callout)), React.createElement("div", {
      style: S.ideal
    }, React.createElement("strong", {
      style: {
        color: '#fff'
      }
    }, t.idealFor), " ", c.ideal, React.createElement("br", null), React.createElement("strong", {
      style: {
        color: '#fff'
      }
    }, t.timeline), " ", c.timeline));
  }))));
}
function Compare({
  lang
}) {
  const t = COPY[lang];
  const cards = lang === 'zh' ? [{
    tier: 'bulk',
    name: 'Essentials',
    hint: '批量测试',
    rows: [['交付方式', '约 35 位达人产出 100 条视频'], ['内容形式', '达人自然演示、routine、产品展示、试用/试穿和简单 POV 内容'], ['达人选择', 'WEM 根据品类和内容方向匹配达人'], ['品牌选择', '品牌不需要反选达人，直接获得完整素材池'], ['修改', '基础剪辑和字幕，不含额外修改轮次'], ['适合', '冷启动、素材池搭建、大批量卖点测试']]
  }, {
    tier: 'select',
    name: 'Plus',
    hint: '先看后选',
    rows: [['交付方式', '约 35 位达人交付 70+ 条更有方向的视频选项'], ['内容形式', '测评、开箱、对比、痛点解决型演示、绿幕讲解或引导式产品演示'], ['达人选择', 'WEM 负责筛选和分配达人'], ['品牌选择', '品牌从成片里选择最适合投放的 50 条'], ['修改', '基础剪辑和字幕，不含额外修改轮次'], ['适合', '想提高内容控制度和内容完成度，又希望先看成片再筛选']]
  }, {
    tier: 'premium',
    name: 'Premium',
    hint: '重点广告内容',
    rows: [['交付方式', '25 条多场景、高完成度视频'], ['内容方向', '更完整脚本、叙事结构和 CTA'], ['达人选择', 'WEM 提供 creator shortlist，品牌可参与反选'], ['修改', '包含完整剪辑、字幕和 1 轮修改'], ['适合', '新品发布、重点广告素材、品牌活动']]
  }] : [{
    tier: 'bulk',
    name: 'Essentials',
    hint: 'Volume testing',
    rows: [['Delivery', '100 videos from about 35 creators'], ['Creator selection', 'WEM matches creators based on category and content direction'], ['Brand selection', 'No creator shortlist review, you receive the full creative pool'], ['Revision', 'Basic editing and captions, no extra revision round'], ['Best use', 'Cold starts, ad testing, large creative volume']]
  }, {
    tier: 'select',
    name: 'Plus',
    hint: 'More choice',
    rows: [['Delivery', '70+ directed video options delivered, brand keeps 50'], ['Format depth', 'Reviews, unboxings, comparisons, problem-solution demos, green-screen explainers, or guided product demos'], ['Creator selection', 'WEM selects and assigns the creator pool'], ['Brand selection', 'Choose the strongest videos after delivery'], ['Revision', 'Basic editing and captions, no extra revision round'], ['Best use', 'More control, finished-content selection, stronger format fit']]
  }, {
    tier: 'premium',
    name: 'Premium',
    hint: 'Hero ad creative',
    rows: [['Delivery', '25 higher-production, multi-scene videos'], ['Direction', 'Stronger scripting, narrative arc, and CTA'], ['Creator selection', 'WEM shares a creator shortlist, and the brand can help choose'], ['Revision', 'Full editing, captions, and 1 revision round'], ['Best use', 'Launches, hero ad assets, stronger storytelling']]
  }];
  return React.createElement("section", {
    className: "cc-section",
    style: {
      ...S.section,
      paddingTop: 70,
      background: 'radial-gradient(circle at 12% 20%, rgba(74,143,255,.12), transparent 32%), radial-gradient(circle at 88% 8%, rgba(255,20,147,.12), transparent 30%), #000'
    }
  }, React.createElement("div", {
    className: "cc-inner",
    style: S.inner
  }, React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 24,
      alignItems: 'end',
      flexWrap: 'wrap'
    }
  }, React.createElement("h2", {
    className: "cc-section-title",
    style: {
      ...S.h2,
      fontSize: 'clamp(34px, 4.5vw, 62px)',
      margin: 0
    }
  }, lang === 'zh' ? '交付差异' : 'What changes by package.'), React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 800,
      color: 'rgba(255,255,255,.62)',
      maxWidth: 360,
      lineHeight: 1.4
    }
  }, lang === 'zh' ? '价格前面已经讲清楚了，这里只看交付方式、选择权和内容深度的区别。' : 'Pricing is covered above. This section only compares delivery, selection, and creative depth.')), React.createElement("div", {
    className: "cc-compare-cards",
    style: S.compareCards
  }, cards.map(card => {
    const accent = TIERS[card.tier].color;
    return React.createElement("div", {
      key: card.name,
      className: "cc-compare-card",
      style: {
        ...S.compareCard,
        borderColor: `${accent}44`
      }
    }, React.createElement("div", {
      style: {
        ...S.compareCardGlow,
        background: accent
      }
    }), React.createElement("div", {
      style: {
        ...S.comparePlanName,
        color: accent
      }
    }, card.name), React.createElement("div", {
      style: S.comparePlanHint
    }, card.hint), React.createElement("div", {
      style: S.compareTable
    }, card.rows.map(([label, value]) => React.createElement("div", {
      key: label,
      className: "cc-compare-row",
      style: S.compareRowMini
    }, React.createElement("div", {
      style: {
        ...S.compareMiniLabel,
        color: accent
      }
    }, label), React.createElement("div", {
      style: S.compareMiniValue
    }, value)))));
  })), React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: 36,
      padding: 28,
      background: 'rgba(255,20,147,.08)',
      border: '1px solid rgba(255,20,147,.3)',
      borderRadius: 14
    }
  }, React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 18,
      color: '#fff'
    }
  }, t.customBundle[0]), React.createElement("a", {
    href: BOOK,
    target: "_blank",
    rel: "noopener",
    style: {
      color: '#FF1493',
      textDecoration: 'underline',
      fontWeight: 700
    }
  }, t.customBundle[1]))));
}
function LazyVideo({
  src,
  style,
  label
}) {
  const wrapRef = React.useRef(null);
  const videoRef = React.useRef(null);
  const isMobile = React.useMemo(() => typeof window !== 'undefined' && window.matchMedia('(max-width: 640px)').matches, []);
  const [shouldLoad, setShouldLoad] = React.useState(false);
  React.useEffect(() => {
    const node = wrapRef.current;
    if (!node || shouldLoad) return;
    if (isMobile) return;
    if (!('IntersectionObserver' in window)) {
      setShouldLoad(true);
      return;
    }
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        setShouldLoad(true);
        observer.disconnect();
      }
    }, {
      rootMargin: '420px 0px'
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, [shouldLoad, isMobile]);
  React.useEffect(() => {
    if (shouldLoad && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [shouldLoad, src]);
  return React.createElement("div", {
    ref: wrapRef,
    "aria-label": label || '',
    onClick: () => setShouldLoad(true),
    style: {
      ...style,
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(145deg, rgba(255,20,147,.16), rgba(74,143,255,.13), rgba(0,0,0,.92))',
      cursor: isMobile && !shouldLoad ? 'pointer' : 'default'
    }
  }, shouldLoad ? React.createElement("video", {
    ref: videoRef,
    src: src,
    autoPlay: true,
    loop: true,
    muted: true,
    playsInline: true,
    preload: "none",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: style.objectFit || 'cover',
      display: 'block'
    }
  }) : React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'grid',
      placeItems: 'center',
      background: 'radial-gradient(circle at 50% 35%, rgba(255,255,255,.16), transparent 35%), linear-gradient(180deg, rgba(255,255,255,.03), rgba(0,0,0,.28))'
    }
  }, React.createElement("span", {
    style: {
      width: 46,
      height: 46,
      borderRadius: 999,
      display: 'grid',
      placeItems: 'center',
      background: 'rgba(0,0,0,.42)',
      border: '1px solid rgba(255,255,255,.22)',
      color: '#fff',
      fontSize: 18,
      boxShadow: '0 18px 50px rgba(0,0,0,.35)'
    },
    "aria-hidden": "true"
  }, "\u25b6")));
}
function EagerVideo({
  src,
  style,
  label
}) {
  const videoRef = React.useRef(null);
  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [src]);
  return React.createElement("div", {
    "aria-label": label || '',
    style: {
      ...style,
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(145deg, rgba(255,20,147,.14), rgba(74,143,255,.1), rgba(0,0,0,.9))'
    }
  }, React.createElement("video", {
    ref: videoRef,
    src: src,
    autoPlay: true,
    loop: true,
    muted: true,
    playsInline: true,
    preload: "metadata",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: style.objectFit || 'cover',
      display: 'block'
    }
  }));
}
function SampleWork({
  lang
}) {
  const t = COPY[lang];
  const [active, setActive] = React.useState('select');
  const tabs = [{
    id: 'bulk',
    label: t.sampleTabs.bulk
  }, {
    id: 'select',
    label: t.sampleTabs.select
  }, {
    id: 'premium',
    label: t.sampleTabs.premium
  }];
  return React.createElement("section", {
    id: "ugc-video-examples",
    className: "cc-section",
    style: {
      ...S.section,
      scrollMarginTop: 96
    }
  }, React.createElement("div", {
    className: "cc-inner",
    style: S.inner
  }, React.createElement("h2", {
    className: "cc-section-title",
    style: S.h2
  }, t.sampleTitle[0], " ", React.createElement("span", {
    style: S.grad
  }, t.sampleTitle[1])), React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginBottom: 36,
      flexWrap: 'wrap'
    }
  }, tabs.map(t => {
    const c = TIERS[t.id].color;
    const on = active === t.id;
    return React.createElement("button", {
      key: t.id,
      onClick: () => setActive(t.id),
      style: {
        background: on ? c : 'transparent',
        color: on ? '#000' : c,
        border: `1.5px solid ${c}`,
        fontFamily: 'var(--font-sans)',
        fontWeight: 800,
        fontSize: 14,
        letterSpacing: '.08em',
        textTransform: 'uppercase',
        padding: '12px 24px',
        borderRadius: 999,
        cursor: 'pointer',
        transition: 'background .25s, color .25s'
      }
    }, t.label);
  })), React.createElement("div", {
    key: active,
    className: "cc-video-grid",
    style: {
      ...S.videoGrid,
      marginBottom: 0,
      animation: 'cc-fade .35s ease'
    }
  }, t.samples.filter(s => s.tier === active).map((v, i) => {
    const c = TIERS[v.tier].color;
    return React.createElement("div", {
      key: i,
      style: S.videoCard,
      className: "cc-video-card"
    }, React.createElement(LazyVideo, {
      src: v.src,
      label: `${v.type} ${v.category}`,
      style: S.videoFrame
    }), React.createElement("div", {
      style: S.videoLabel
    }, React.createElement("span", {
      style: {
        ...S.videoTag,
        background: `${c}1f`,
        color: c
      }
    }, v.type), React.createElement("div", {
      style: S.videoCat
    }, v.category), React.createElement("div", {
      style: S.videoDesc
    }, v.desc)));
  })), React.createElement("style", null, `@keyframes cc-fade { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }`)));
}
const CREATOR_AVATAR_SPRITE = 'creator-content/avatars/avatar-sprite.webp?v=20260528-avatar-sprite';
const CREATOR_AVATAR_POSITIONS = {
  'mega-beauty-kol': '0% 0%',
  'glam-dark': '50% 0%',
  bearded: '100% 0%',
  sunglasses: '0% 50%',
  'beauty-soft': '50% 50%',
  'beauty-blonde': '100% 50%',
  glasses: '0% 100%',
  blonde: '50% 100%',
  'dad-demo': '100% 100%'
};
function ClayAvatar({
  variant,
  accent
}) {
  return React.createElement("div", {
    "aria-hidden": "true",
    style: {
      ...S.creatorAvatarImage,
      borderColor: accent,
      backgroundImage: `url(${CREATOR_AVATAR_SPRITE})`,
      backgroundSize: '300% 300%',
      backgroundPosition: CREATOR_AVATAR_POSITIONS[variant] || '50% 50%',
      backgroundRepeat: 'no-repeat'
    }
  });
}
function CustomCreatorCampaigns({
  lang
}) {
  const t = COPY[lang].customCreator;
  const [activeMode, setActiveMode] = React.useState('kol');
  const activeCreators = t.creators.filter(creator => creator.mode === activeMode);
  const activeAccent = activeMode === 'kol' ? '#4A8FFF' : '#FF1493';
  return React.createElement("section", {
    style: {
      ...S.section,
      background: 'radial-gradient(circle at 10% 8%, rgba(74,143,255,.14), transparent 34%), radial-gradient(circle at 90% 16%, rgba(255,20,147,.14), transparent 32%), #000'
    }
  }, React.createElement("div", {
    style: S.inner
  }, React.createElement("div", {
    style: S.eye
  }, t.eye), React.createElement("h2", {
    style: S.h2
  }, t.titleA, React.createElement("br", null), React.createElement("span", {
    style: S.grad
  }, t.titleB)), React.createElement("p", {
    style: {
      ...S.lead,
      marginBottom: 0
    }
  }, t.lead), React.createElement("div", {
    className: "cc-custom-creator-grid",
    style: S.customCreatorGrid
  }, React.createElement("div", null, React.createElement("div", {
    style: S.modeGrid
  }, t.modes.map((mode, i) => {
    const active = activeMode === mode.id;
    const c = i === 0 ? '#4A8FFF' : '#FF1493';
    return React.createElement("div", {
      key: mode.id,
      onMouseEnter: () => setActiveMode(mode.id),
      onClick: () => setActiveMode(mode.id),
      onFocus: () => setActiveMode(mode.id),
      tabIndex: "0",
      style: {
        ...S.modeCard,
        borderColor: active ? c : i === 0 ? 'rgba(74,143,255,.22)' : 'rgba(255,20,147,.24)',
        boxShadow: active ? `0 0 0 1px ${c}33, 0 18px 52px rgba(0,0,0,.28)` : 'none',
        cursor: 'pointer'
      }
    }, React.createElement("div", {
      style: {
        ...S.modeTitle,
        color: c
      }
    }, mode.title), React.createElement("div", {
      style: S.modeGoal
    }, mode.goal), React.createElement("div", {
      style: {
        ...S.modeBudget,
        borderColor: `${c}33`
      }
    }, mode.budget), React.createElement("div", {
      style: S.modeText
    }, mode.body));
  }))), React.createElement("div", {
    style: {
      ...S.shortlistWrap,
      borderColor: `${activeAccent}55`,
      background: `radial-gradient(circle at 85% 0%, ${activeAccent}24, transparent 36%), linear-gradient(145deg, ${activeAccent}13, rgba(255,255,255,.035))`,
      boxShadow: `0 0 0 1px ${activeAccent}18, 0 24px 70px rgba(0,0,0,.28)`
    }
  }, React.createElement("div", {
    style: S.shortlistHead
  }, React.createElement("div", {
    style: {
      ...S.shortlistTitle,
      color: activeAccent
    }
  }, t.shortlistTitle), React.createElement("div", {
    style: S.shortlistNote
  }, t.shortlistNote)), activeCreators.length ? React.createElement("div", {
    className: "cc-shortlist-grid cc-shortlist-inline",
    style: S.shortlistGrid
  }, activeCreators.map((creator, i) => {
    const wide = activeCreators.length % 2 === 1 && i === activeCreators.length - 1;
    return React.createElement("div", {
      key: creator.code,
      className: "cc-creator-card",
      style: {
        ...S.creatorCard,
        ...(wide ? S.creatorWideCard : {})
      }
    }, React.createElement("div", {
      style: S.creatorTop
    }, React.createElement(ClayAvatar, {
      variant: creator.avatar,
      accent: activeAccent
    }), React.createElement("div", {
      style: S.creatorText
    }, React.createElement("div", {
      style: {
        ...S.creatorCode,
        color: activeAccent
      }
    }, creator.code), React.createElement("div", {
      style: S.creatorRole
    }, creator.role))), React.createElement("div", {
      style: S.creatorMetrics
    }, creator.metrics.map(([label, value]) => React.createElement("div", {
      key: label,
      style: S.creatorMetric
    }, React.createElement("span", {
      style: S.creatorMetricLabel
    }, label), React.createElement("span", {
      style: S.creatorMetricValue
    }, value)))), React.createElement("div", {
      style: S.creatorFit
    }, creator.fit));
  })) : React.createElement("div", {
    style: S.shortlistEmpty
  }, t.shortlistEmpty), React.createElement("a", {
    href: BOOK,
    target: "_blank",
    rel: "noopener",
    style: {
      ...S.shortlistCta,
      background: activeAccent
    }
  }, t.shortlistCta, " \u2192"))), React.createElement("div", {
    className: "cc-paid-case",
    style: S.paidCase
  }, React.createElement(EagerVideo, {
    src: "creator-content/creator-s-wellness-gmv.mp4",
    label: t.caseTitle,
    style: S.paidVideo
  }), React.createElement("div", null, React.createElement("div", {
    style: S.paidCaseEye
  }, t.caseEye), React.createElement("div", {
    style: S.paidCaseTitle
  }, t.caseTitle), React.createElement("p", {
    style: S.paidCaseBody
  }, t.caseBody), React.createElement("div", {
    className: "cc-paid-stats",
    style: S.paidStats
  }, t.stats.map(([num, lab]) => React.createElement("div", {
    key: lab,
    style: S.paidStat
  }, React.createElement("div", {
    style: S.paidStatNum
  }, num), React.createElement("div", {
    style: S.paidStatLab
  }, lab)))), React.createElement("div", {
    style: S.paidNotes
  }, t.notes.map(note => React.createElement("span", {
    key: note,
    style: S.paidNote
  }, note)))))));
}
function CaseStudy({
  lang
}) {
  const t = COPY[lang].caseStudy;
  return React.createElement("section", {
    style: {
      ...S.section,
      background: '#000',
      borderTop: '1px solid rgba(255,255,255,.08)',
      borderBottom: '1px solid rgba(255,255,255,.08)'
    }
  }, React.createElement("div", {
    style: S.inner
  }, React.createElement("div", {
    style: S.eye
  }, t.eye), React.createElement("h2", {
    style: S.h2
  }, t.titleA, " ", React.createElement("span", {
    style: S.grad
  }, t.titleB)), React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 19,
      color: 'rgba(255,255,255,.8)',
      maxWidth: 760,
      lineHeight: 1.5
    }
  }, t.lead), React.createElement("div", {
    style: S.caseStat
  }, t.stats.map(([n, l], i) => React.createElement("div", {
    key: i,
    style: S.statTile
  }, React.createElement("div", {
    style: S.statNum
  }, n), React.createElement("div", {
    style: S.statLab
  }, l)))), React.createElement("div", {
    style: S.caseStrats
  }, React.createElement("div", {
    style: {
      ...S.caseStratCard,
      borderColor: 'rgba(255,20,147,.4)'
    }
  }, React.createElement("div", {
    style: {
      ...S.tag,
      background: 'rgba(255,20,147,.15)',
      color: '#FF1493'
    }
  }, t.cards[0][0]), React.createElement("p", {
    style: {
      ...S.stepBody,
      marginTop: 12
    }
  }, t.cards[0][1])), React.createElement("div", {
    style: {
      ...S.caseStratCard,
      borderColor: 'rgba(155,48,255,.4)'
    }
  }, React.createElement("div", {
    style: {
      ...S.tag,
      background: 'rgba(155,48,255,.15)',
      color: '#9B30FF'
    }
  }, t.cards[1][0]), React.createElement("p", {
    style: {
      ...S.stepBody,
      marginTop: 12
    }
  }, t.cards[1][1]))), React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: 28,
      color: '#fff',
      textTransform: 'uppercase',
      marginTop: 40,
      letterSpacing: '-.005em'
    }
  }, t.closeA, " ", React.createElement("span", {
    style: S.grad
  }, t.closeB))));
}
function Rights({
  lang
}) {
  const t = COPY[lang].rights;
  return React.createElement("section", {
    style: S.section
  }, React.createElement("div", {
    style: S.inner
  }, React.createElement("h2", {
    style: S.h2
  }, t.titleA, " ", React.createElement("span", {
    style: S.grad
  }, t.titleB)), React.createElement("div", {
    style: S.rightsGrid
  }, React.createElement("div", {
    style: S.rightsCol
  }, React.createElement("div", {
    style: {
      ...S.tag,
      background: 'rgba(255,20,147,.15)',
      color: '#FF1493'
    }
  }, t.included), React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: '20px 0 0'
    }
  }, t.includedItems.map((x, i) => React.createElement("li", {
    key: i,
    style: S.pkgLi
  }, React.createElement(Check, {
    color: "#FF1493"
  }), x)))), React.createElement("div", {
    style: S.rightsCol
  }, React.createElement("div", {
    style: {
      ...S.tag,
      background: 'rgba(74,143,255,.15)',
      color: '#4A8FFF'
    }
  }, t.upgrades), React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: '20px 0 0'
    }
  }, t.upgradesItems.map((x, i) => React.createElement("li", {
    key: i,
    style: S.pkgLi
  }, React.createElement(Check, {
    color: "#4A8FFF"
  }), x))), React.createElement("div", {
    style: {
      ...S.callout,
      marginTop: 28,
      background: 'rgba(74,143,255,.08)',
      borderColor: 'rgba(74,143,255,.3)',
      color: '#4A8FFF'
    }
  }, t.languages)))));
}
function HowItWorks({
  lang
}) {
  const t = COPY[lang].how;
  return React.createElement("section", {
    style: S.section
  }, React.createElement("div", {
    style: S.inner
  }, React.createElement("h2", {
    style: S.h2
  }, t.titleA, " ", React.createElement("span", {
    style: S.grad
  }, t.titleB)), React.createElement("div", {
    style: {
      marginTop: 32
    }
  }, t.steps.map(([n, title, b], i) => React.createElement("div", {
    key: i,
    style: S.step
  }, React.createElement("div", {
    style: S.stepNum
  }, n), React.createElement("div", null, React.createElement("div", {
    style: S.stepTitle
  }, title), React.createElement("div", {
    style: S.stepBody
  }, b)))))));
}
function FinalCta({
  lang
}) {
  const t = COPY[lang].final;
  return React.createElement("section", {
    style: {
      ...S.section,
      background: 'linear-gradient(135deg, #FF1493 0%, #9B30FF 100%)',
      textAlign: 'center',
      padding: '140px 32px'
    }
  }, React.createElement("div", {
    style: S.inner
  }, React.createElement("h2", {
    style: {
      ...S.h2,
      color: '#fff',
      margin: '0 auto 24px',
      maxWidth: 900
    }
  }, t.titleA, " ", React.createElement("span", {
    style: {
      color: '#fff',
      textShadow: '0 0 32px rgba(255,255,255,.4)'
    }
  }, t.titleB)), React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 20,
      lineHeight: 1.5,
      color: 'rgba(255,255,255,.9)',
      maxWidth: 720,
      margin: '0 auto 36px'
    }
  }, t.lead), React.createElement("a", {
    href: BOOK,
    target: "_blank",
    rel: "noopener",
    style: {
      background: '#fff',
      color: '#000',
      padding: '18px 36px',
      borderRadius: 999,
      fontFamily: 'var(--font-sans)',
      fontWeight: 800,
      fontSize: 16,
      letterSpacing: '.04em',
      textTransform: 'uppercase',
      textDecoration: 'none',
      display: 'inline-block'
    }
  }, t.cta)));
}
function App() {
  const [lang, setLang] = useState(() => window.getWemInitialLang ? window.getWemInitialLang() : 'en');
  useEffect(() => {
    window.persistWemLang ? window.persistWemLang(lang) : localStorage.setItem('we-lang', lang);
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    document.title = lang === 'zh' ? 'UGC 达人内容套餐 | TikTok Shop 与 Amazon 短视频素材 | WE Marketing' : 'UGC Video Packages for TikTok Shop, Amazon & DTC Brands | WE Marketing';
    document.querySelector('meta[name="description"]').setAttribute('content', lang === 'zh' ? '面向 TikTok Shop、Amazon 卖家、DTC 品牌和跨境品牌的 UGC 达人内容套餐。24,000+ 筛选达人，完整使用权，支持英文、西语、中文等内容生产。' : 'UGC video packages for TikTok Shop, Amazon sellers, DTC brands, and cross-border brands. 24,000+ vetted creators, full usage rights, English, Spanish, and Chinese content options.');
  }, [lang]);
  useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
  return React.createElement("div", {
    "data-screen-label": "WE Services \xB7 Creator Content"
  }, React.createElement(CursorStars, null), React.createElement(NavBar, {
    lang: lang,
    onLang: setLang,
    basePath: "../"
  }), React.createElement(Hero, {
    lang: lang
  }), React.createElement(Stats, {
    lang: lang
  }), React.createElement(Pricing, {
    lang: lang
  }), React.createElement(Compare, {
    lang: lang
  }), React.createElement(SampleWork, {
    lang: lang
  }), React.createElement(CaseStudy, {
    lang: lang
  }), React.createElement(Rights, {
    lang: lang
  }), React.createElement(HowItWorks, {
    lang: lang
  }), React.createElement(CustomCreatorCampaigns, {
    lang: lang
  }), React.createElement(TaglineBand, {
    lang: lang,
    variant: "ugc"
  }), React.createElement(FinalCta, {
    lang: lang
  }), React.createElement(Footer, {
    lang: lang,
    basePath: "../"
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App, null));
