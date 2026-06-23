// ServicesOverview.jsx, full services page with section anchors.
const SO_ACCENTS = ['#FF1493', '#4A8FFF', '#9B30FF', '#FF1493', '#4A8FFF', '#4A8FFF', '#9B30FF', '#FF1493'];

const ServicesOverview = ({ lang }) => {
  const data = {
    en: {
      hero: {
        eyebrow: 'WEM SERVICES',
        h1: ['TikTok Shop services', 'built for U.S. growth.'],
        sub: 'WEM helps cross-border brands, Amazon sellers, and U.S. teams turn TikTok Shop into a working sales channel through shop operations, creators, content, live selling, and performance reporting.',
        cta: 'Book a discovery call',
        note: 'Every engagement is scoped around your product stage, category, margins, and internal team capacity.',
      },
      intro: {
        h: 'Full-service management is the core. Specialty services scale the parts you need most.',
        p: 'TikTok Shop growth does not come from one viral video. Brands need product pages that convert, creators who can explain the product, samples that actually get posted, the right creator live hosts, offers that make sense, and weekly data reviews. WEM can run the full system, support the parts your in-house team needs help scaling, or advise your team when you want to execute internally.',
      },
      services: [
        {
          id: 'full-service-management',
          icon: 'shopping-bag',
          title: 'Full-Service TikTok Shop Management',
          best: 'Best for brands that want WEM to manage the full TikTok Shop growth system instead of piecing together shop operations, creators, content, live, and reporting across multiple vendors.',
          handles: ['Shop operations, product pages, product SEO, pricing, and promotion planning', 'Creator affiliate strategy, creator seeding, and campaign follow-up', 'Content direction, creator briefs, and content performance review', 'Creator live selling coordination and campaign calendar planning', 'Weekly reporting across GMV, creator activity, content output, shop health, and blockers'],
          model: 'Monthly retainer plus GMV commission. Scope depends on your category, product stage, margin, and how much support your internal team already has.',
        },
        {
          id: 'cold-start',
          icon: 'rocket',
          title: 'TikTok Shop Cold Start Launch',
          best: 'Best for brands starting from zero. Many agencies only want brands with traction already. WEM has handled many zero-to-one launches, from setup to creator seeding, testing, early orders, and scale.',
          handles: ['Shop setup, product listing structure, product SEO, and launch roadmap', 'First creator seeding wave, affiliate setup, and sample workflow', 'Testing product angles, offers, commissions, creator types, and content formats', 'Building early content, orders, reviews, and sales signals', 'Identifying what can scale after the first creator and content signals are clear'],
          model: 'Monthly retainer plus GMV commission. Usually planned around the first 60 to 90 days, then continued as full-service management if the brand is ready to scale.',
        },
        {
          id: 'consulting',
          icon: 'messages-square',
          title: 'TikTok Shop Strategy Consulting',
          best: 'Best for brands that already have an in-house marketing or operations team and want to execute themselves, but need experienced TikTok Shop guidance before they make expensive decisions.',
          handles: ['TikTok Shop launch strategy, growth roadmap, and priority setting', 'Logistics and fulfillment strategy for brands that have not sold through TikTok Shop before', 'Creator affiliate strategy, commission planning, and creator workflow design', 'Shop setup, product page, offer, and campaign structure review', 'Advisory sessions for in-house teams, including action plans, audits, and follow-up recommendations'],
          model: 'Consulting can be scoped as one-time strategy sessions, audits, or ongoing advisory support. This is a good fit when your team wants to execute internally but needs WEM experience to avoid common TikTok Shop mistakes.',
        },
        {
          id: 'affiliate-management',
          icon: 'users',
          title: 'Creator Affiliate Management',
          best: 'Best for brands that already have shop operations in place, but are not confident in creator management. Common pain points include limited creator resources, slow outreach, creator communication gaps, and difficulty outsourcing day-to-day follow-up.',
          handles: ['Creator sourcing through WEM community, category outreach, Affiliate Center discovery, and existing creator relationships', 'Affiliate Center management, including creator messages, target collaborations, creator invitations, and daily follow-up', 'Commission strategy, campaign setup, sample approval, and posting reminders', 'Briefs, posting guidance, content review, and issue escalation', 'Post rate, GMV, creator response, sample ROI, and weekly affiliate reporting'],
          model: 'Monthly retainer plus performance commission. Works well as a hybrid model when your team runs the shop and WEM manages the creator side.',
        },
        {
          id: 'ugc-content',
          icon: 'film',
          title: 'UGC and Creator Content Packages',
          best: 'Best for brands that need creator videos for TikTok Shop, Amazon listings, DTC pages, paid ads, and social channels, without needing full TikTok Shop management.',
          handles: ['Bulk, Plus, and Premium creator content packages', 'Creator matching, briefs, production tracking, and QA', 'Editing, captions, and full usage rights based on package', 'English, Spanish, Chinese, and other content options', 'Creative samples that can support product pages and paid media'],
          model: 'Package-based pricing. This service has its own page with minimums, pricing, examples, usage rights, and timeline.',
          href: 'services/creator-content',
          cta: 'See UGC packages',
        },
        {
          id: 'creator-matchmaking',
          icon: 'sparkles',
          title: 'Creator Matchmaking',
          best: 'Best for brands that already do some creator work in-house, but want to scale faster by accessing more relevant creators, stronger category fits, and WEM support for activation.',
          handles: ['Creator matching by category, audience, language, content style, and sales signals', 'Creator shortlist and fit notes for your campaign goals', 'Commission-only options for selected campaigns', 'Fixed setup fee plus commission options for deeper sourcing and activation', 'Optional support for outreach, samples, briefs, and creator follow-up'],
          model: 'Can be commission-only for selected campaigns, or fixed fee plus commission when the brand wants more hands-on sourcing and activation.',
        },
        {
          id: 'creator-live',
          icon: 'radio',
          title: 'TikTok Shop Creator Live Selling Programs',
          best: 'Best for brands that want creator-led live selling, not just a host list. WEM helps brands choose the right live hosts, structure the offer, prepare the live flow, and review what should be repeated or fixed.',
          handles: ['Creator live host selection by category, audience, language, sales style, and availability', 'Live campaign planning, exclusive live flash sale structure, and giveaway setup', 'Moderator support, run-of-show, product talking points, and scripts', 'Offer, commission, product lineup, sample coordination, and pre-live preparation', 'Post-live review across GMV, traffic, conversion, host performance, and next steps'],
          model: 'Hourly or live package plus commission. WEM can help brands test which live hosts, offers, and formats can scale. Our live commerce advisor has driven $30K+ GMV in a single TikTok Shop live session.',
        },
        {
          id: 'content-performance',
          icon: 'video',
          title: 'Short Video Performance Support',
          best: 'Best for brands that have creator short videos coming in, but need stronger briefs, better hooks, clearer product selling points, multilingual content direction, and data-backed content review.',
          handles: ['Sales and content data review to understand what is converting and what is not', 'Content coach guidance from people who have actually sold on TikTok Shop', 'Multilingual brief direction for English, Spanish, Chinese, and other U.S. audience segments', 'Brief site creation so creators can understand product positioning, claims, offers, and content rules', '1 on 1 content reviews, hook feedback, CTA improvement, and recommendations on what to repeat or fix'],
          model: 'Usually included inside full-service management, creator affiliate management, or live selling programs. Can also be scoped as a content support project when a brand already has creators but needs better conversion.',
        },
      ],
      contentSnapshot: {
        eyebrow: 'CONTENT ITERATION SNAPSHOT',
        title: 'Optimized from views to sales',
        caption: 'Repeated testing across hooks, product angles, pacing, and CTAs.',
        mediaLabel: 'Creator video tests',
        mediaImage: 'assets/content-performance/creator-video-views.jpg',
        resultImage: 'assets/content-performance/creator-gmv-row-clean.png',
        gmv: '$51.21K',
        gmvLabel: '30-day GMV from one creator and one product',
        metrics: [
          ['5.57K', 'Items sold'],
          ['5.91%', 'Of total GMV'],
          ['$8.08K', 'Estimated commission'],
        ],
        note: 'Based on real campaign data. Brand and creator details hidden for privacy.',
      },
      liveSnapshot: {
        eyebrow: 'CREATOR LIVE EXECUTION',
        title: 'Creator-led live selling execution',
        caption: 'WEM does more than send a host list. We match the live seller, structure the offer, prep the flow, support the room, and review what can scale.',
        note: 'Real live recording. Creator handles and viewer details hidden for privacy.',
        tags: ['Host selection', 'Flash sale', 'Buy card', 'Moderator', 'Giveaway'],
        video: 'assets/live-hosts/creator-live-recording.mov',
        proof: [
          ['Flash sale setup', 'Offer timing, deal framing, buy-card flow, and limited-time urgency.'],
          ['Host fit', 'Creator host matched by category, audience, demo style, and live cadence.'],
          ['Room support', 'Moderator support, comment flow, product reminders, and giveaway mechanics.'],
          ['Post-live review', 'GMV, traffic, conversion, host performance, and next test plan.'],
        ],
        shortlistTitle: 'Live host shortlist preview',
        shortlistNote: 'Examples of live hosts WEM frequently works with. Final shortlists are still matched by category fit, sales style, availability, and live history before outreach.',
        shortlist: [
          { icon: 'bear', type: 'Toys, gaming, and deals-driven live host', signal: '$250K+ GMV / FOMO, flash-sale, and auction-style selling', fit: 'Strong fit for toys, gaming-adjacent products, fast-moving deals, limited-time bundles, and live rooms that need urgency and confident offer framing.' },
          { icon: 'vacuum', type: 'Household and outdoor demo host', signal: '$120K+ GMV / 35.6K followers / balanced audience', fit: 'Strong fit for $50 to $100 products, especially household appliances and products that sell better through outdoor or hands-on demonstration.' },
          { icon: 'tools-auto', type: 'Video and live conversion host', signal: '$500K+ GMV / automotive, motorcycle, tools, and hardware fit', fit: 'Works well when short video builds demand and live closes the sale. Audience reach is balanced across 25-54, led by 35-44, with an approximately 60% female / 40% male mix.' },
          { icon: 'beauty', type: 'Beauty and daily skincare live host', signal: '$100K+ GMV / video + live / flash sales and deals', fit: 'Strong fit for skincare and beauty products that need clear ingredient, routine, and usage explanation. Audience is 85%+ ages 35-55+, making the host a good fit for daily skincare lives and deal-led beauty campaigns.' },
        ],
      },
      labelBest: 'Best for',
      labelHandles: 'What WEM handles',
      labelModel: 'How we work',
      defaultCta: 'Talk to WEM',
      final: {
        h: 'Not sure which service fits?',
        p: 'Tell us where your TikTok Shop program is stuck. We will help you choose the right starting point instead of selling you services you do not need.',
      },
    },
    zh: {
      hero: {
        eyebrow: 'WEM 服务',
        h1: ['美国 TikTok Shop', '代运营与增长服务'],
        sub: 'WEM 帮跨境品牌、Amazon 卖家和在美品牌团队，把 TikTok Shop 从“开了店”变成能持续出单的销售渠道。我们把店铺、达人、内容、直播和数据复盘放在同一套执行体系里。',
        cta: '预约咨询',
        note: '每个合作都会根据产品阶段、品类、利润空间和你们内部团队配置来定范围。',
      },
      intro: {
        h: '全案代运营是核心，专项服务解决你最缺的那一环。',
        p: 'TikTok Shop 不是只靠一条爆款视频。品牌需要能转化的商品页、讲得清楚产品的达人、寄出去后真的发布的样品、达人直播、合适的活动机制，以及每周看得懂的数据复盘。WEM 可以跑完整体系，也可以补你们 in-house 团队最缺的部分，或者只做顾问支持，让你们团队自己执行。',
      },
      services: [
        {
          id: 'full-service-management',
          icon: 'shopping-bag',
          title: 'TikTok Shop 全案代运营',
          best: '适合想把美国 TikTok Shop 增长体系交给 WEM 跑的品牌，不想把店铺、达人、内容、直播和数据拆给多个供应商。',
          handles: ['店铺运营、商品页、商品 SEO、定价和活动规划', '达人联盟策略、达人寄样和 campaign 跟进', '内容方向、达人 brief 和内容转化复盘', '达人直播协调和活动排期', '每周汇总 GMV、达人动作、内容产出、店铺健康和运营卡点'],
          model: '月费加 GMV 提成。具体范围会根据品类、产品阶段、利润空间和你们内部团队能力来定。',
        },
        {
          id: 'cold-start',
          icon: 'rocket',
          title: '美国 TikTok Shop 冷启动',
          best: '适合从 0 开始的品牌。很多 agency 更愿意接已经有销量的店铺，但 WEM 做过很多 0 到 1 冷启动，从 setup 到 creator seeding、内容测试、早期订单，再到 scale。',
          handles: ['开店、商品页结构、商品 SEO 和启动路线图', '首批达人寄样、联盟设置和样品流程', '测试卖点、佣金、活动、达人类型和内容形式', '积累早期内容、订单、评价和销售信号', '判断哪些达人、内容和活动机制可以继续放大'],
          model: '月费加 GMV 提成。通常按前 60 到 90 天规划，跑出信号后可以继续进入全案代运营。',
        },
        {
          id: 'consulting',
          icon: 'messages-square',
          title: 'TikTok Shop 策略咨询',
          best: '适合已有 in-house marketing 或运营团队、想自己执行，但需要有经验的人帮你们判断 TikTok Shop 方向和优先级的商家。',
          handles: ['TikTok Shop 启动策略、增长路线图和优先级判断', '物流和履约策略，尤其适合还没试过 TikTok Shop 发货的商家', '达人联盟策略、佣金设计和达人工作流规划', '店铺 setup、商品页、活动机制和 campaign 结构诊断', '给内部团队做咨询会议、audit、action plan 和后续建议'],
          model: '可以按单次策略咨询、专项 audit 或长期顾问支持来做。适合你们团队自己执行，但需要 WEM 帮你们避坑、定方向、确认下一步怎么做。',
        },
        {
          id: 'affiliate-management',
          icon: 'users',
          title: '达人联盟运营',
          best: '适合已有店铺运营团队，但对达人管理不熟悉、缺达人资源、达人沟通困难，或者外包达人执行时效率慢、质量不稳定的品牌。',
          handles: ['通过 WEM 达人社群、品类拓展、Affiliate Center 和既有达人关系筛选达人', '管理店铺 Affiliate Center，包括回复 creator message、发送 target collabs、达人邀请和日常 follow-up', '佣金策略、活动设置、寄样审核、样品追踪和发布提醒', '达人 brief、发布建议、内容审核和问题升级', '发布率、GMV、达人回复、寄样 ROI 和每周达人联盟复盘'],
          model: '月费加效果提成。适合 hybrid 合作：你们内部团队管店铺，WEM 负责达人资源和达人运营。',
        },
        {
          id: 'ugc-content',
          icon: 'film',
          title: 'UGC 达人内容套餐',
          best: '适合需要 TikTok Shop、Amazon Listing、DTC 页面、广告和社媒素材，但暂时不需要 WEM 全案管理的品牌。',
          handles: ['Bulk、Plus、Premium 三类内容套餐', '达人匹配、brief、进度跟踪和质量检查', '按套餐提供剪辑、字幕和使用权', '支持英文、西语、中文和其他语言内容', '可用于商品页、广告和社媒的真实达人素材'],
          model: '按 package 收费。UGC 有独立页面，里面有价格、最低数量、案例、使用权和交付周期。',
          href: 'services/creator-content',
          cta: '查看 UGC 套餐',
        },
        {
          id: 'creator-matchmaking',
          icon: 'sparkles',
          title: '达人精准匹配',
          best: '适合想 scale up 的品牌。你们 in-house 已经在做达人，但想通过 WEM 接触更多更合适的达人，更快把活动做起来。',
          handles: ['按品类、人群、语言、内容风格和销售表现信号匹配达人', '给出达人 shortlist 和匹配理由', '部分 campaign 可做纯佣合作', '需要更深度 sourcing 和 activation 时，可做固费加佣金', '可选支持 outreach、寄样、brief 和达人 follow-up'],
          model: '可做纯佣，也可做固费加佣金。适合作为品牌内部达人团队的加速器。',
        },
        {
          id: 'creator-live',
          icon: 'radio',
          title: 'TikTok Shop 达人直播带货运营',
          best: '适合想做达人直播带货的品牌，不只是找主播。WEM 会帮品牌匹配合适达人主播，也会支持直播活动设计、优惠机制、话术准备、moderator 和直播复盘。',
          handles: ['按品类、人群、语言、销售风格和档期筛选达人直播主播', '直播 campaign 规划、exclusive live flash sale 和 giveaway 机制设计', 'moderator 支持、直播流程、产品话术和脚本', '活动价格、佣金、主推产品、样品协调和开播前准备', '复盘 GMV、流量、转化、主播表现和下一步测试'],
          model: '按小时包或直播 package 收取固费，加佣金。我们的 live commerce advisor 曾单场 TikTok Shop 直播 GMV 超过 $30K。',
        },
        {
          id: 'content-performance',
          icon: 'video',
          title: '短视频带货优化支持',
          best: '适合已经有达人短视频内容产出，但内容转化不稳定、brief 不够清楚、hook 不够强，或者需要英文、西语、中文等多语种内容方向的品牌。',
          handles: ['结合销售数据和内容数据判断哪些内容在转化，哪些没有转化', '由真正卖过货的 content coach 提供内容建议', '根据美国市场的多语种受众优化英文、西语、中文等 brief 方向', '搭建 brief site，让达人更清楚产品定位、卖点、活动、禁区和内容要求', '提供 1 on 1 content review，优化 hook、产品植入、价格表达、CTA 和可重复的内容方向'],
          model: '通常包含在全案代运营、达人联盟运营或达播项目里。也可以作为专项内容优化项目，帮助已有达人资源的品牌提升转化。',
        },
      ],
      contentSnapshot: {
        eyebrow: '带货内容优化案例',
        title: '从播放表现，优化到真实成交',
        caption: '持续测试 hook、卖点表达、内容节奏和 CTA。',
        mediaLabel: '达人视频测试表现',
        mediaImage: 'assets/content-performance/creator-video-views.jpg',
        resultImage: 'assets/content-performance/creator-gmv-row-clean.png',
        gmv: '$51.21K',
        gmvLabel: '单个达人、单个商品，30 天 GMV',
        metrics: [
          ['5.57K', '售出件数'],
          ['5.91%', '占整体 GMV'],
          ['$8.08K', '预估佣金'],
        ],
        note: '真实项目数据，已隐藏品牌与达人信息。',
      },
      liveSnapshot: {
        eyebrow: '达播现场执行',
        title: '达人直播带货执行',
        caption: 'WEM 不只是给主播名单。我们会匹配达人主播、设计优惠机制、准备直播流程、支持现场互动，并复盘哪些形式值得继续放大。',
        note: '真实直播录屏，已隐藏达人账号与互动信息。',
        tags: ['主播筛选', 'Flash sale', '商品卡', 'Moderator', 'Giveaway'],
        video: 'assets/live-hosts/creator-live-recording.mov',
        proof: [
          ['Flash sale 设置', '活动节奏、优惠表达、商品卡承接和限时购买氛围。'],
          ['主播匹配', '按品类、受众、讲解方式、直播频率和档期匹配达人主播。'],
          ['现场支持', 'Moderator 支持、评论节奏、产品提醒和 giveaway 机制。'],
          ['直播复盘', '复盘 GMV、流量、转化、主播表现和下一轮测试方向。'],
        ],
        shortlistTitle: '达人直播主播 shortlist',
        shortlistNote: '以下是 WEM 经常合作的 live host 示例；实际 shortlist 仍会根据品类匹配、销售风格、档期和直播历史先筛选，再触达。',
        shortlist: [
          { icon: 'bear', type: '玩具、游戏与 Deal 型主播', signal: '250K+ GMV / 擅长 FOMO、限时闪促和 auction 节奏', fit: '适合玩具、游戏相关产品、deal-driven 商品、限时组合和需要强紧迫感的直播间，能把库存感、价格锚点和抢购氛围带起来。' },
          { icon: 'vacuum', type: '家电与户外演示型主播', signal: '120K+ GMV / 35.6K 粉丝 / 受众相对均衡', fit: '适合客单价 50 到 100 美元的产品，尤其是 household appliance 和需要户外或上手演示的商品。' },
          { icon: 'tools-auto', type: '短视频种草 + 直播割草型主播', signal: '500K+ GMV / 汽摩、工具、五金和大件产品适配', fit: '适合先用短视频种草、再用直播收口转化的打法。受众覆盖 25-54，35-44 最集中，男女结构约女性 60%、男性 40%。' },
          { icon: 'beauty', type: '美妆与日常护肤型主播', signal: '100K+ GMV / video + live / flash sales 和 deals', fit: '适合 skincare 和 beauty 产品，尤其是需要讲清楚成分、使用步骤和日常护肤场景的商品。受众 35-55+ 占比 85%+，适合日常护肤直播和 deal-led 美妆活动。' },
        ],
      },
      labelBest: '适合谁',
      labelHandles: 'WEM 具体做什么',
      labelModel: '合作方式',
      defaultCta: '咨询 WEM',
      final: {
        h: '不确定从哪个服务开始？',
        p: '告诉我们你的 TikTok Shop 现在卡在哪里。我们会帮你判断优先级，不会让你一开始就买不需要的服务。',
      },
    },
  }[lang];

  const book = 'https://zus03h0enw04.sg.larksuite.com/scheduler/03970278dd9a7925';
  React.useEffect(() => {
    const scrollToHash = () => {
      const id = window.location.hash.replace('#', '');
      if (!id) return;
      const target = document.getElementById(id);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    const timers = [80, 320, 700].map((delay) => window.setTimeout(scrollToHash, delay));
    window.addEventListener('hashchange', scrollToHash);
    return () => {
      timers.forEach(window.clearTimeout);
      window.removeEventListener('hashchange', scrollToHash);
    };
  }, [lang]);

  return (
    <main style={soStyles.main}>
      <section style={soStyles.hero}>
        <div style={soStyles.heroGlow}/>
        <div style={soStyles.heroInner}>
          <div style={soStyles.eyebrow}>{data.hero.eyebrow}</div>
          <h1 style={soStyles.h1}>{data.hero.h1[0]}<br/><span style={soStyles.grad}>{data.hero.h1[1]}</span></h1>
          <p style={soStyles.heroSub}>{data.hero.sub}</p>
          <div style={soStyles.heroCtas}>
            <a href={book} target="_blank" rel="noopener" className="we-btn we-btn-primary" style={soStyles.primary}>{data.hero.cta}</a>
            <a href="#cold-start" style={soStyles.secondary}>{lang === 'en' ? 'Explore services' : '查看服务'}</a>
          </div>
          <p style={soStyles.note}>{data.hero.note}</p>
        </div>
      </section>

      <section style={soStyles.intro}>
        <div style={soStyles.introLabel}>{lang === 'en' ? 'HOW WEM WORKS' : 'WEM 怎么做'}</div>
        <h2 style={soStyles.introH}>{data.intro.h}</h2>
        <p style={soStyles.introP}>{data.intro.p}</p>
      </section>

      <section style={soStyles.serviceWrap}>
        {data.services.map((svc, i) => {
          const c = SO_ACCENTS[i % SO_ACCENTS.length];
          return (
            <article key={svc.id} id={svc.id} style={soStyles.service}>
              <div style={soStyles.serviceTop}>
                <div style={{ ...soStyles.icon, background: c }}>
                  <i data-lucide={svc.icon} style={{ width: 26, height: 26, color: '#000' }}/>
                </div>
                <div style={soStyles.num}>{String(i + 1).padStart(2, '0')}</div>
              </div>
              <div data-services-grid="true" style={soStyles.serviceGrid}>
                <div>
                  <h2 style={soStyles.serviceTitle}>{svc.title}</h2>
                  <div style={{ ...soStyles.pill, color: c, borderColor: `${c}66` }}>{data.labelBest}</div>
                  <p style={soStyles.best}>{svc.best}</p>
                </div>
                <div>
                  <div style={soStyles.blockLabel}>{data.labelHandles}</div>
                  <ul style={soStyles.list}>
                    {svc.handles.map((item, j) => <li key={j} style={soStyles.li}>{item}</li>)}
                  </ul>
                  <div style={soStyles.blockLabel}>{data.labelModel}</div>
                  <p style={soStyles.model}>{svc.model}</p>
                  <a href={svc.href || book} target={svc.href ? undefined : '_blank'} rel={svc.href ? undefined : 'noopener'} style={{ ...soStyles.textCta, color: c }}>
                    {svc.cta || data.defaultCta} →
                  </a>
                </div>
              </div>
              {svc.id === 'creator-live' && (
                <LiveHostSnapshot data={data.liveSnapshot} accent={c} />
              )}
            </article>
          );
        })}
      </section>

      <section style={soStyles.final}>
        <h2 style={soStyles.finalH}>{data.final.h}</h2>
        <p style={soStyles.finalP}>{data.final.p}</p>
        <a href={book} target="_blank" rel="noopener" style={soStyles.finalBtn}>{data.hero.cta}</a>
      </section>
    </main>
  );
};

const ContentIterationSnapshot = ({ data, accent, lang }) => (
  <div style={{ ...soStyles.snapshot, borderColor: `${accent}55`, boxShadow: `0 0 0 1px ${accent}18, 0 24px 80px rgba(0,0,0,.35)` }}>
    <div style={soStyles.snapshotTop}>
      <div>
        <div style={{ ...soStyles.snapshotEye, color: accent }}>{data.eyebrow}</div>
        <div style={soStyles.snapshotTitle}>{data.title}</div>
        <p style={soStyles.snapshotCaption}>{data.caption}</p>
      </div>
      <div style={{ ...soStyles.snapshotPulse, background: accent }}/>
    </div>

    <div style={soStyles.gmvResultGrid}>
      <div style={{ ...soStyles.gmvHeroCard, borderColor: `${accent}55` }}>
        <div style={{ ...soStyles.gmvHeroLabel, color: accent }}>30-DAY GMV</div>
        <div style={soStyles.gmvHeroValue}>{data.gmv}</div>
        <p style={soStyles.gmvHeroCopy}>{data.gmvLabel}</p>
      </div>
      <div style={soStyles.metricGrid}>
        {data.metrics.map(([value, label]) => (
          <div key={label} style={soStyles.metricBox}>
            <div style={soStyles.metricValue}>{value}</div>
            <div style={soStyles.metricLabel}>{label}</div>
          </div>
        ))}
      </div>
    </div>

    <div style={soStyles.creatorResultCard}>
      <div style={soStyles.viewsLabel}>{lang === 'zh' ? '真实数据截图' : 'Real result row'}</div>
      <img src={data.resultImage} alt={data.gmvLabel} loading="lazy" decoding="async" style={soStyles.resultImage}/>
    </div>

    <div style={soStyles.contentMediaCard}>
      <div style={soStyles.viewsLabel}>{data.mediaLabel}</div>
      <div style={soStyles.contentImageWrap}>
        <img src={data.mediaImage} alt={data.mediaLabel} loading="lazy" decoding="async" style={soStyles.contentImage}/>
      </div>
    </div>

    <div style={soStyles.snapshotNote}>{data.note}</div>
  </div>
);

const LazyServiceVideo = ({ src, style }) => {
  const wrapRef = React.useRef(null);
  const videoRef = React.useRef(null);
  const [shouldLoad, setShouldLoad] = React.useState(false);

  React.useEffect(() => {
    const node = wrapRef.current;
    if (!node || shouldLoad) return;
    if (!('IntersectionObserver' in window)) {
      setShouldLoad(true);
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setShouldLoad(true);
        observer.disconnect();
      }
    }, { rootMargin: '850px 0px' });
    observer.observe(node);
    return () => observer.disconnect();
  }, [shouldLoad]);

  React.useEffect(() => {
    if (shouldLoad && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  }, [shouldLoad, src]);

  return (
    <div ref={wrapRef} style={{ ...style, position: 'relative', overflow: 'hidden', background: '#080808' }}>
      {shouldLoad ? (
        <video
          ref={videoRef}
          src={src}
          autoPlay
          muted
          playsInline
          loop
          preload="none"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
      ) : (
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 35%, rgba(255,255,255,.14), transparent 38%)' }} />
      )}
    </div>
  );
};

const HostCategoryIcon = ({ type }) => {
  const common = {
    width: 18,
    height: 18,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2.2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    style: { color: '#000' },
    'aria-hidden': 'true',
  };

  if (type === 'bear') {
    return (
      <svg {...common}>
        <circle cx="7" cy="7" r="2.6" />
        <circle cx="17" cy="7" r="2.6" />
        <circle cx="12" cy="13" r="7" />
        <path d="M9.2 12h.1" />
        <path d="M14.7 12h.1" />
        <path d="M10.2 15.2c1 .8 2.6 .8 3.6 0" />
        <path d="M12 13.8v1.1" />
      </svg>
    );
  }

  if (type === 'vacuum') {
    return (
      <svg {...common}>
        <circle cx="12" cy="9" r="5.2" />
        <circle cx="12" cy="9" r="1" />
        <path d="M12 4.2c1.6 1.4 1.6 3 0 4.8" />
        <path d="M16.3 11.4c-2 .8-3.5 .2-4.3-2.4" />
        <path d="M7.7 11.4c.4-2.1 1.8-2.9 4.3-2.4" />
        <path d="M12 14.2v5.8" />
        <path d="M8.5 20h7" />
      </svg>
    );
  }

  if (type === 'tools-auto') {
    return (
      <svg {...common}>
        <path d="M5.5 13.5 7.4 8.8A3 3 0 0 1 10.2 7h3.6a3 3 0 0 1 2.8 1.8l1.9 4.7" />
        <path d="M4 14h16v4H4z" />
        <circle cx="7.2" cy="18.2" r="1.8" />
        <circle cx="16.8" cy="18.2" r="1.8" />
        <path d="M8 11h8" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M9 9h6v10a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2z" />
      <path d="M10.2 5h3.6v4h-3.6z" />
      <path d="M11 3h2" />
      <path d="M8 9h8" />
      <path d="M10 14h4" />
    </svg>
  );
};

const LiveHostSnapshot = ({ data, accent }) => {

  return (
    <div style={{ ...soStyles.livePanel, borderColor: `${accent}55`, boxShadow: `0 0 0 1px ${accent}18, 0 24px 80px rgba(0,0,0,.35)` }}>
      <style>{`
        @keyframes wemLivePulse {
          0%, 100% { opacity: .45; transform: scale(.92); }
          50% { opacity: 1; transform: scale(1); }
        }
        .wem-live-pulse { animation: wemLivePulse 1.7s infinite ease-in-out; }
        @media (max-width: 900px) {
          .wem-live-scene { grid-template-columns: 1fr !important; min-height: auto !important; padding: 24px !important; }
          .wem-live-phone { width: min(270px, 78vw) !important; }
          .wem-live-proof-grid, .wem-live-shortlist-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    <div style={soStyles.liveHeader}>
      <div>
        <div style={{ ...soStyles.snapshotEye, color: accent }}>{data.eyebrow}</div>
        <div style={soStyles.snapshotTitle}>{data.title}</div>
        <p style={soStyles.snapshotCaption}>{data.caption}</p>
      </div>
    </div>
    <div className="wem-live-scene" style={soStyles.liveScene}>
      <div style={{ ...soStyles.liveGlow, background: `radial-gradient(circle, ${accent}88 0%, ${accent}22 42%, transparent 72%)` }} />
      <div style={soStyles.livePhoneShadow} />
      <div className="wem-live-phone" style={{ ...soStyles.livePhone, borderColor: `${accent}55` }}>
        <div style={soStyles.liveNotch} />
        <div style={soStyles.liveScreen}>
          {data.video && (
            <LazyServiceVideo src={data.video} style={soStyles.liveSceneVideo} />
          )}
          <div style={soStyles.liveScreenShade} />
          <div style={soStyles.livePlayBar}>
            <span style={{ ...soStyles.liveDot, background: accent }} className="wem-live-pulse" />
            <span>LIVE SELLING PREVIEW</span>
          </div>
        </div>
      </div>
      <div className="wem-live-proof-grid" style={soStyles.liveProofGrid}>
        {data.proof.map(([value, text]) => (
          <div key={value} style={{ ...soStyles.liveProofCard, borderColor: `${accent}44` }}>
            <strong style={soStyles.liveProofValue}>{value}</strong>
            <span style={soStyles.liveProofText}>{text}</span>
          </div>
        ))}
      </div>
    </div>
    {data.shortlist && (
      <div style={soStyles.liveShortlist}>
        <div style={soStyles.liveShortlistHead}>
          <div style={{ ...soStyles.liveShortlistTitle, color: accent }}>{data.shortlistTitle}</div>
          <p style={soStyles.liveShortlistNote}>{data.shortlistNote}</p>
        </div>
        <div className="wem-live-shortlist-grid" style={soStyles.liveShortlistGrid}>
          {data.shortlist.map((host) => (
            <div key={host.type} style={{ ...soStyles.liveHostCard, borderColor: `${accent}44` }}>
              <div style={soStyles.liveHostTop}>
                <div style={{ ...soStyles.liveHostIcon, background: accent }}>
                  <HostCategoryIcon type={host.icon} />
                </div>
                <div style={soStyles.liveHostType}>{host.type}</div>
              </div>
              <div style={{ ...soStyles.liveHostSignal, color: accent }}>{host.signal}</div>
              <p style={soStyles.liveHostFit}>{host.fit}</p>
            </div>
          ))}
        </div>
      </div>
    )}
    <div style={soStyles.liveTags}>
      {data.tags.map((tag) => (
        <span key={tag} style={{ ...soStyles.liveTag, borderColor: `${accent}55`, color: accent }}>{tag}</span>
      ))}
    </div>
    <div style={soStyles.snapshotNote}>{data.note}</div>
  </div>
  );
};

const soStyles = {
  main: { background: '#000', color: '#fff' },
  hero: { position: 'relative', overflow: 'hidden', borderBottom: '1px solid rgba(255,255,255,.08)' },
  heroGlow: { position: 'absolute', top: -220, right: -200, width: 820, height: 820, background: 'radial-gradient(circle, rgba(255,20,147,.34), transparent 60%)', filter: 'blur(60px)', pointerEvents: 'none' },
  heroInner: { position: 'relative', maxWidth: 1280, margin: '0 auto', padding: '118px 32px 92px' },
  eyebrow: { fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '.22em', color: '#FF1493', fontWeight: 700, textTransform: 'uppercase' },
  h1: { fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(60px, 8vw, 122px)', lineHeight: .94, letterSpacing: '-.01em', textTransform: 'uppercase', margin: '24px 0 0', maxWidth: 1050 },
  grad: { background: 'linear-gradient(90deg, #FF1493 0%, #9B30FF 55%, #4A8FFF 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent' },
  heroSub: { fontFamily: 'var(--font-sans)', fontSize: 21, lineHeight: 1.5, color: 'rgba(255,255,255,.78)', maxWidth: 760, margin: '30px 0 0' },
  heroCtas: { display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 36 },
  primary: { fontSize: 15, padding: '15px 26px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center' },
  secondary: { display: 'inline-flex', alignItems: 'center', border: '1.5px solid rgba(255,255,255,.34)', color: '#fff', borderRadius: 999, padding: '15px 26px', fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: 15, letterSpacing: '.04em', textTransform: 'uppercase', textDecoration: 'none' },
  note: { fontFamily: 'var(--font-sans)', fontSize: 14, lineHeight: 1.55, color: 'rgba(255,255,255,.58)', maxWidth: 620, marginTop: 22 },
  intro: { maxWidth: 1040, margin: '0 auto', padding: '92px 32px 40px' },
  introLabel: { fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.18em', color: 'rgba(255,255,255,.5)', textTransform: 'uppercase', marginBottom: 16 },
  introH: { fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(38px, 5vw, 68px)', lineHeight: 1, letterSpacing: '-.005em', textTransform: 'uppercase', margin: 0 },
  introP: { fontFamily: 'var(--font-sans)', fontSize: 18, lineHeight: 1.65, color: 'rgba(255,255,255,.74)', marginTop: 22, maxWidth: 860 },
  serviceWrap: { maxWidth: 1180, margin: '0 auto', padding: '28px 32px 80px', display: 'grid', gap: 22 },
  service: { scrollMarginTop: 92, background: '#0A0A0A', border: '1px solid rgba(255,255,255,.1)', borderRadius: 16, padding: 32 },
  serviceTop: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 },
  icon: { width: 52, height: 52, borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center' },
  num: { fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '.16em', color: 'rgba(255,255,255,.36)', fontWeight: 700 },
  serviceGrid: { display: 'grid', gridTemplateColumns: '1fr 1.45fr', gap: 48 },
  serviceTitle: { fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(34px, 4vw, 58px)', lineHeight: 1, letterSpacing: '-.005em', textTransform: 'uppercase', margin: 0 },
  pill: { display: 'inline-flex', border: '1px solid', borderRadius: 999, padding: '7px 12px', fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '.14em', textTransform: 'uppercase', marginTop: 22 },
  best: { fontFamily: 'var(--font-sans)', fontSize: 17, lineHeight: 1.6, color: 'rgba(255,255,255,.78)', marginTop: 16 },
  blockLabel: { fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.16em', textTransform: 'uppercase', color: '#FF1493', marginBottom: 12 },
  list: { margin: '0 0 26px', padding: 0, listStyle: 'none', display: 'grid', gap: 10 },
  li: { fontFamily: 'var(--font-sans)', fontSize: 16, lineHeight: 1.55, color: 'rgba(255,255,255,.82)', paddingLeft: 18, position: 'relative' },
  snapshot: { margin: '8px 0 30px', background: 'linear-gradient(145deg, rgba(255,255,255,.075), rgba(255,255,255,.025))', border: '1px solid', borderRadius: 18, padding: 22, overflow: 'hidden' },
  snapshotTop: { display: 'flex', justifyContent: 'space-between', gap: 18, alignItems: 'flex-start', marginBottom: 18 },
  snapshotEye: { fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '.16em', textTransform: 'uppercase', fontWeight: 800 },
  snapshotTitle: { fontFamily: 'var(--font-sans)', fontSize: 22, lineHeight: 1.15, fontWeight: 900, color: '#fff', marginTop: 8 },
  snapshotCaption: { fontFamily: 'var(--font-sans)', fontSize: 14, lineHeight: 1.45, color: 'rgba(255,255,255,.68)', margin: '8px 0 0' },
  snapshotPulse: { width: 12, height: 12, borderRadius: 999, flexShrink: 0, boxShadow: '0 0 28px currentColor' },
  gmvResultGrid: { display: 'grid', gridTemplateColumns: '.8fr 1.2fr', gap: 12, alignItems: 'stretch', marginBottom: 12 },
  gmvHeroCard: { display: 'flex', flexDirection: 'column', justifyContent: 'center', border: '1px solid', borderRadius: 14, padding: '18px 18px 17px', background: 'linear-gradient(145deg, rgba(255,255,255,.09), rgba(255,255,255,.025))', minHeight: 132 },
  gmvHeroLabel: { fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '.16em', textTransform: 'uppercase', fontWeight: 900 },
  gmvHeroValue: { fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 62, lineHeight: .9, color: '#fff', marginTop: 9, letterSpacing: '-.015em' },
  gmvHeroCopy: { fontFamily: 'var(--font-sans)', fontSize: 13, lineHeight: 1.35, color: 'rgba(255,255,255,.64)', margin: '12px 0 0' },
  contentMediaCard: { background: 'rgba(0,0,0,.2)', border: '1px solid rgba(255,255,255,.08)', borderRadius: 14, padding: 12, marginTop: 12 },
  viewsLabel: { fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '.13em', textTransform: 'uppercase', color: 'rgba(255,255,255,.54)', marginBottom: 14 },
  contentImageWrap: { borderRadius: 12, overflow: 'hidden', background: '#050505', minHeight: 148, display: 'flex', alignItems: 'stretch', boxShadow: '0 18px 48px rgba(0,0,0,.26)' },
  contentImage: { width: '100%', height: '100%', minHeight: 148, objectFit: 'cover', display: 'block' },
  resultImage: { width: '100%', display: 'block', borderRadius: 12, background: '#fff', boxShadow: '0 16px 36px rgba(0,0,0,.16)' },
  creatorResultCard: { display: 'grid', gap: 10, marginTop: 12, background: 'rgba(255,255,255,.035)', border: '1px solid rgba(255,255,255,.075)', borderRadius: 14, padding: 12 },
  metricGrid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 },
  metricBox: { background: 'rgba(0,0,0,.24)', border: '1px solid rgba(255,255,255,.08)', borderRadius: 12, padding: '13px 12px' },
  metricValue: { fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 24, color: '#fff', lineHeight: 1 },
  metricLabel: { fontFamily: 'var(--font-sans)', fontSize: 11, color: 'rgba(255,255,255,.58)', marginTop: 5, textTransform: 'uppercase', letterSpacing: '.05em' },
  snapshotNote: { fontFamily: 'var(--font-sans)', fontSize: 12, lineHeight: 1.4, color: 'rgba(255,255,255,.46)', marginTop: 14 },
  livePanel: { margin: '8px 0 30px', background: 'linear-gradient(145deg, rgba(255,255,255,.075), rgba(255,255,255,.025))', border: '1px solid', borderRadius: 18, padding: 22, overflow: 'hidden' },
  liveHeader: { marginBottom: 18 },
  liveScene: { position: 'relative', minHeight: 500, display: 'grid', gridTemplateColumns: 'minmax(230px, .72fr) minmax(0, 1.28fr)', gap: 24, alignItems: 'center', borderRadius: 18, overflow: 'hidden', background: 'linear-gradient(135deg, rgba(255,255,255,.045), rgba(255,255,255,.018))', padding: '28px 28px' },
  liveGlow: { position: 'absolute', width: 500, height: 500, left: '2%', top: '8%', filter: 'blur(10px)', opacity: .78, pointerEvents: 'none' },
  livePhoneShadow: { position: 'absolute', left: '13%', bottom: 38, width: 240, height: 52, borderRadius: '50%', background: 'rgba(0,0,0,.42)', filter: 'blur(18px)' },
  livePhone: { position: 'relative', zIndex: 2, width: 260, aspectRatio: '9 / 18.2', justifySelf: 'center', borderRadius: 38, padding: 10, background: 'linear-gradient(145deg, #0a0b0f, #24252d)', border: '1px solid', boxShadow: '0 28px 70px rgba(0,0,0,.52), 0 0 0 7px rgba(255,255,255,.035)' },
  liveNotch: { position: 'absolute', zIndex: 5, top: 17, left: '50%', width: 86, height: 20, transform: 'translateX(-50%)', borderRadius: '0 0 15px 15px', background: '#050507' },
  liveScreen: { position: 'relative', width: '100%', height: '100%', borderRadius: 30, overflow: 'hidden', background: '#000' },
  liveSceneImg: { position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0, display: 'block' },
  liveSceneVideo: { position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center center', display: 'block', background: '#050505' },
  liveScreenShade: { position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,.04), transparent 42%, rgba(0,0,0,.18))', pointerEvents: 'none' },
  livePlayBar: { position: 'absolute', left: 16, right: 16, bottom: 16, display: 'flex', alignItems: 'center', gap: 8, borderRadius: 999, background: 'rgba(5,5,7,.72)', border: '1px solid rgba(255,255,255,.16)', padding: '9px 12px', fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '.08em', color: 'rgba(255,255,255,.82)' },
  liveDot: { width: 8, height: 8, borderRadius: 999, display: 'inline-block' },
  liveProofGrid: { position: 'relative', zIndex: 2, display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 12, alignContent: 'center' },
  liveCreatorCard: { display: 'grid', gap: 14, border: '1px solid', borderRadius: 18, padding: '18px 18px 17px', background: 'linear-gradient(145deg, rgba(255,255,255,.12), rgba(255,255,255,.035))', boxShadow: '0 18px 52px rgba(0,0,0,.28)' },
  liveCreatorTop: { display: 'flex', justifyContent: 'space-between', gap: 14, alignItems: 'flex-start' },
  liveCreatorCode: { fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.16em', textTransform: 'uppercase', fontWeight: 900 },
  liveCreatorRole: { fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 28, lineHeight: 1, color: '#fff', textTransform: 'uppercase', marginTop: 8 },
  liveBadge: { display: 'inline-flex', alignItems: 'center', borderRadius: 999, color: '#000', fontFamily: 'var(--font-mono)', fontWeight: 900, fontSize: 10, letterSpacing: '.12em', padding: '7px 10px' },
  liveCreatorMetrics: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 8 },
  liveCreatorMetric: { display: 'grid', gap: 4, borderRadius: 12, padding: '12px 12px 11px', background: 'rgba(0,0,0,.3)', border: '1px solid rgba(255,255,255,.08)' },
  liveCreatorMetricValue: { fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 31, lineHeight: .95, color: '#fff' },
  liveCreatorMetricLabel: { fontFamily: 'var(--font-sans)', fontSize: 11, lineHeight: 1.25, color: 'rgba(255,255,255,.56)', textTransform: 'uppercase', letterSpacing: '.06em' },
  liveCreatorTags: { display: 'flex', flexWrap: 'wrap', gap: 7 },
  liveCreatorTag: { display: 'inline-flex', border: '1px solid', borderRadius: 999, padding: '6px 9px', fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,.78)', background: 'rgba(0,0,0,.22)' },
  liveCreatorFit: { margin: 0, fontFamily: 'var(--font-sans)', fontSize: 13, lineHeight: 1.45, color: 'rgba(255,255,255,.66)' },
  liveProofCard: { display: 'grid', alignContent: 'start', gap: 8, minHeight: 152, border: '1px solid', borderRadius: 14, padding: '18px 17px', background: 'rgba(0,0,0,.34)', backdropFilter: 'blur(12px)' },
  liveProofValue: { fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 24, color: '#fff', lineHeight: 1, textTransform: 'uppercase' },
  liveProofText: { fontFamily: 'var(--font-sans)', fontSize: 13, lineHeight: 1.45, color: 'rgba(255,255,255,.62)' },
  liveShortlist: { marginTop: 16, borderRadius: 16, padding: 18, background: 'linear-gradient(145deg, rgba(0,0,0,.36), rgba(255,255,255,.035))', border: '1px solid rgba(255,255,255,.08)' },
  liveShortlistHead: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 16, flexWrap: 'wrap', marginBottom: 14 },
  liveShortlistTitle: { fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 28, lineHeight: 1, textTransform: 'uppercase' },
  liveShortlistNote: { fontFamily: 'var(--font-sans)', fontSize: 12, lineHeight: 1.45, color: 'rgba(255,255,255,.56)', maxWidth: 520, margin: 0 },
  liveShortlistGrid: { display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 12 },
  liveHostCard: { border: '1px solid', borderRadius: 14, padding: 16, background: 'rgba(255,255,255,.045)' },
  liveHostTop: { display: 'grid', gridTemplateColumns: '32px minmax(0, 1fr)', gap: 10, alignItems: 'center' },
  liveHostIcon: { width: 32, height: 32, borderRadius: 9, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 },
  liveHostType: { fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 20, lineHeight: 1, color: '#fff', textTransform: 'uppercase' },
  liveHostSignal: { fontFamily: 'var(--font-sans)', fontWeight: 900, fontSize: 12, lineHeight: 1.35, marginTop: 10 },
  liveHostFit: { fontFamily: 'var(--font-sans)', fontSize: 12, lineHeight: 1.45, color: 'rgba(255,255,255,.62)', margin: '9px 0 0' },
  liveTags: { display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 16 },
  liveTag: { display: 'inline-flex', border: '1px solid', borderRadius: 999, padding: '7px 10px', fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '.08em', textTransform: 'uppercase', background: 'rgba(0,0,0,.22)' },
  model: { fontFamily: 'var(--font-sans)', fontSize: 16, lineHeight: 1.6, color: 'rgba(255,255,255,.72)', margin: '0 0 20px' },
  textCta: { fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 900, letterSpacing: '.06em', textTransform: 'uppercase', textDecoration: 'none' },
  final: { margin: '0 auto', maxWidth: 1180, padding: '88px 32px 120px', textAlign: 'center' },
  finalH: { fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(44px, 6vw, 86px)', lineHeight: .98, textTransform: 'uppercase', margin: 0 },
  finalP: { fontFamily: 'var(--font-sans)', fontSize: 19, lineHeight: 1.55, color: 'rgba(255,255,255,.76)', maxWidth: 680, margin: '24px auto 34px' },
  finalBtn: { display: 'inline-flex', background: '#fff', color: '#000', borderRadius: 999, padding: '17px 30px', fontFamily: 'var(--font-sans)', fontWeight: 900, fontSize: 15, letterSpacing: '.04em', textTransform: 'uppercase', textDecoration: 'none' },
};
window.ServicesOverview = ServicesOverview;
