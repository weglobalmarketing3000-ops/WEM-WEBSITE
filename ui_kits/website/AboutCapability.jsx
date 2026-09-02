// AboutCapability.jsx, two-column founder narrative + stat grid + capability list
const AboutCapability = ({ lang }) => {
  const t = {
    en: {
      eyeL: 'WHY WE BUILT WEM',
      h2: 'A team that runs the whole TikTok Shop playbook.',
      p1: 'WE Marketing was founded by Wendy Lin in Los Angeles in 2024 after seeing brands and creators squeezed by agency models not built for TikTok Shop.',
      p2: 'WEM runs the whole system: shop strategy, creator activation, short-form content, live operations, and shop management under one team.',
      p3: 'That is how a beauty brand moved from $312K to $982K GMV in 30 days, and how a men\u2019s fashion brand cold-started to 10K+ orders. Same playbook. Better execution.',
      quote: '\"TikTok Shop is a discovery engine, not a storefront. Creators close the trust gap; our job is to make that happen at scale.\"',
      author: '\u2014 Wendy Lin, Founder',
      eyeR: 'BY THE NUMBERS',
      stats: [
      { num: '160+', lab: 'SHOP PARTNERS\nSERVED' },
      { num: '200K+', lab: 'U.S. CREATORS\nCOLLABORATED' },
      { num: '$15M+', lab: 'ANNUAL SALES\nMANAGED' },
      { num: '8,000+', lab: 'CREATORS IN WE\nAFFILIATE COMMUNITY' }],

      caps: [
      ['COLDSTART LAUNCHPAD', 'New product validation in 30-90 days.'],
      ['AFFILIATE MARKETING', 'Outreach, sampling, campaigns, livestream activation.'],
      ['SHORT VIDEO MANAGEMENT', 'Diverse formats, hooks, scripts, performance optimization.'],
      ['LIVE MANAGEMENT', 'Brand and affiliate live, planning, host training, content flow.'],
      ['CREATOR MATCHMAKING', 'Right creator, right audience, right moment.'],
      ['SHOP MANAGEMENT', 'Listings, pricing, campaigns, fulfillment, SPS, compliance.']],

      seeAll: 'See our full services →'
    },
    zh: {
      eyeL: '为什么选择 WEM',
      h2: '能跨语言沟通，也能在美国把事落地。',
      p1: '很多跨境品牌来美国 TikTok Shop，不是产品不行，而是打法没换。国内电商那套节奏，直接搬到美国，很容易出现达人不发、内容没人信、店铺数据接不上的问题。',
      p2: '美国 TikTok Shop 不是单纯开个店，也不是找几个人拍视频。它更像内容、电商、达人联盟和直播叠在一起的生意。WEM 用一支团队同时管店铺、达人、短视频、直播和数据，减少中间反复沟通的损耗。',
      p3: '我们已经帮美妆、健康、男装、食品和科技类品牌做过冷启动、平台期突破和爆款放大。对跨境团队来说，价值很直接：英西中沟通更顺，美国本地执行更快，内容更贴近真实买家。',
      quote: '"跨境品牌在美国 TikTok Shop 的难点，通常不是产品本身，而是内容本地化、达人信任和执行节奏没有接上。"',
      author: 'Wendy Lin，创始人',
      eyeR: '关键数据',
      stats: [
        { num: '160+', lab: '服务品牌与店铺' },
        { num: '200K+', lab: '美国达人合作资源' },
        { num: '$15M+', lab: '年管理销售额' },
        { num: '8,000+', lab: 'WE 达人社群成员' },
      ],
      caps: [
        ['美国冷启动', '30 到 90 天完成开店、内容、达人和首批订单验证。'],
        ['达人联盟运营', '找达人、寄样、谈佣金、催发布、看数据，一起管。'],
        ['UGC 内容生产', '脚本、hook、素材测试和广告可用内容交付。'],
        ['直播运营', '品牌直播与达人直播的排期、培训、脚本和销售数据跟进。'],
        ['精准达人匹配', '按品类、人群、语言和销售表现找更合适的美国达人。'],
        ['店铺代运营', '商品 SEO、定价、活动、履约、SPS、合规和 Seller Center 操作。'],
      ],
      seeAll: '查看全部服务',
    },
    ko: {
      eyeL: 'WEM을 만든 이유',
      h2: 'TikTok Shop의 모든 실행을 한 팀에서.',
      p1: 'WE Marketing은 TikTok Shop에 맞지 않는 기존 에이전시 모델로 브랜드와 크리에이터가 어려움을 겪는 모습을 보고, Wendy Lin이 2024년 로스앤젤레스에서 설립했습니다.',
      p2: 'WEM은 숍 전략, 크리에이터 활성화, 숏폼 콘텐츠, 라이브 운영, 숍 관리를 한 팀 안에서 통합해 운영합니다.',
      p3: '이 플레이북을 통해 한 뷰티 브랜드는 30일 만에 GMV가 $312K에서 $982K로 성장했고, 한 남성 패션 브랜드는 콜드 스타트로 10K+ 주문을 달성했습니다. 같은 플레이북, 더 정교한 실행입니다.',
      quote: '"TikTok Shop은 단순한 판매장이 아니라 발견을 만드는 엔진입니다. 크리에이터가 신뢰의 간극을 메우고, 우리의 역할은 그 과정을 규모 있게 실현하는 것입니다."',
      author: '— Wendy Lin, 창립자',
      eyeR: '주요 성과',
      stats: [
        { num: '160+', lab: '지원한 숍 파트너' },
        { num: '200K+', lab: '협업한 미국 크리에이터' },
        { num: '$15M+', lab: '연간 관리 매출' },
        { num: '8,000+', lab: 'WE 어필리에이트\n커뮤니티 크리에이터' },
      ],
      caps: [
        ['콜드 스타트 론치패드', '30~90일 안에 신제품의 시장성을 검증합니다.'],
        ['어필리에이트 마케팅', '아웃리치, 샘플링, 캠페인, 라이브스트림 활성화를 운영합니다.'],
        ['숏폼 영상 관리', '다양한 포맷, 훅, 스크립트와 성과 최적화를 관리합니다.'],
        ['라이브 운영', '브랜드 및 어필리에이트 라이브 기획, 호스트 교육, 콘텐츠 흐름을 관리합니다.'],
        ['크리에이터 매칭', '적합한 크리에이터를 적합한 고객과 시점에 연결합니다.'],
        ['숍 관리', '상품 등록, 가격, 캠페인, 주문 처리, SPS, 규정 준수를 관리합니다.'],
      ],
      seeAll: '전체 서비스 보기 →',
    },
  }[lang];
  const renderStatNum = (num) => {
    const hasPlus = num.endsWith('+');
    const base = hasPlus ? num.slice(0, -1) : num;
    return <>
      {base}
      {hasPlus && <span style={acStyles.statSym}>+</span>}
    </>;
  };
  return (
    <section style={acStyles.wrap} className="about-capability">
      <style>{`
        @media (max-width: 760px) {
          .about-capability {
            padding: 72px 0 !important;
            max-width: 100vw !important;
            overflow: hidden !important;
          }
          .about-capability-inner {
            display: block !important;
            max-width: 100% !important;
            padding: 0 20px !important;
            overflow: hidden !important;
          }
          .about-capability-title {
            font-size: clamp(38px, 12vw, 52px) !important;
            line-height: .98 !important;
            letter-spacing: 0 !important;
            margin: 18px 0 26px !important;
          }
          .about-capability-p {
            font-size: 16px !important;
            line-height: 1.58 !important;
            margin-bottom: 16px !important;
          }
          .about-capability-quote {
            margin: 22px 0 40px !important;
            padding: 18px 0 !important;
          }
          .about-capability-quote-text {
            font-size: 19px !important;
            line-height: 1.28 !important;
          }
          .about-capability-right {
            width: 100% !important;
            max-width: 100% !important;
            overflow: hidden !important;
          }
          .about-capability-stats {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            gap: 12px !important;
            margin: 18px 0 32px !important;
          }
          .about-capability-stat-card {
            min-width: 0 !important;
            min-height: 126px !important;
            padding: 20px 16px !important;
            border-radius: 14px !important;
          }
          .about-capability-stat-num {
            font-size: clamp(34px, 10vw, 44px) !important;
            white-space: nowrap !important;
          }
          .about-capability-stat-label {
            font-size: 10px !important;
            letter-spacing: .08em !important;
            line-height: 1.35 !important;
            overflow-wrap: anywhere !important;
          }
          .about-capability-cap-list {
            gap: 12px !important;
          }
          .about-capability-cap-row {
            gap: 12px !important;
          }
          .about-capability-cap-title {
            font-size: 15px !important;
            line-height: 1.1 !important;
          }
          .about-capability-cap-desc {
            font-size: 14px !important;
          }
        }
      `}</style>
      <div style={acStyles.inner} className="about-capability-inner">
        <div style={acStyles.left}>
          <div style={acStyles.eye}>{t.eyeL}</div>
          <h2 style={acStyles.h2} className="about-capability-title">{t.h2}</h2>
          <p style={acStyles.p} className="about-capability-p">{t.p1}</p>
          <p style={acStyles.p} className="about-capability-p">{t.p2}</p>
          <p style={acStyles.p} className="about-capability-p">{t.p3}</p>
          <div style={acStyles.quoteWrap} className="about-capability-quote">
            <div style={acStyles.quoteBar} />
            <div>
              <div style={{ ...acStyles.quote, color: "rgb(244, 22, 160)" }} className="about-capability-quote-text">{t.quote}</div>
              <div style={acStyles.author}>{t.author}</div>
            </div>
          </div>
        </div>
        <div style={acStyles.right} className="about-capability-right">
          <div style={acStyles.eye}>{t.eyeR}</div>
          <div style={acStyles.statGrid} className="about-capability-stats">
            {t.stats.map((s, i) =>
            <div key={i} style={acStyles.statCard} className="about-capability-stat-card">
                <div style={acStyles.statNum} className="about-capability-stat-num">
                  {renderStatNum(s.num)}
                </div>
                <div style={acStyles.statLab} className="about-capability-stat-label">{s.lab}</div>
              </div>
            )}
          </div>
          <div style={acStyles.capList} className="about-capability-cap-list">
            {t.caps.map(([h, d], i) =>
            <div key={i} style={acStyles.capRow} className="about-capability-cap-row">
                <div style={acStyles.capCheck}>
                  <i data-lucide="check" style={{ width: 14, height: 14, color: '#000', strokeWidth: 3 }} />
                </div>
                <div>
                  <div style={acStyles.capTitle} className="about-capability-cap-title">{h}</div>
                  <div style={acStyles.capDesc} className="about-capability-cap-desc">{d}</div>
                </div>
              </div>
            )}
          </div>
          <a href="/#Services" style={acStyles.seeAll}>{t.seeAll}</a>
        </div>
      </div>
    </section>);

};
// Render stat numbers cleanly: keep $/+ as inline accent
const acStyles = {
  wrap: { background: '#000', color: '#fff', borderTop: '1px solid rgba(255,255,255,.08)', padding: '120px 0' },
  inner: { maxWidth: 1280, margin: '0 auto', padding: '0 32px', display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 96, alignItems: 'flex-start' },
  left: {},
  right: {},
  eye: { fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,.5)' },
  h2: { fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(40px, 4vw, 60px)', lineHeight: 1.0, letterSpacing: '-.01em', textTransform: 'uppercase', margin: '20px 0 36px', color: '#fff' },
  p: { fontFamily: 'var(--font-sans)', fontSize: 16, lineHeight: 1.65, color: 'rgba(255,255,255,.75)', margin: '0 0 20px' },
  quoteWrap: { display: 'flex', gap: 18, marginTop: 32, padding: '24px 0' },
  quoteBar: { width: 3, background: 'linear-gradient(180deg, #FF1493 0%, #9B30FF 100%)', borderRadius: 2, flexShrink: 0 },
  quote: { fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, lineHeight: 1.3, color: '#FF1493', textTransform: 'none', letterSpacing: '-.005em' },
  author: { fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,.55)', marginTop: 12 },
  statGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, margin: '20px 0 40px' },
  statCard: { background: '#0A0A0A', border: '1px solid rgba(255,255,255,.08)', borderRadius: 16, padding: '28px 24px', minHeight: 160, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' },
  statNum: { fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 56, lineHeight: 1, color: '#fff', letterSpacing: '-.02em' },
  statSym: { color: '#FF1493' },
  statLab: { fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,.6)', whiteSpace: 'pre-line', lineHeight: 1.5, marginTop: 16 },
  capList: { display: 'flex', flexDirection: 'column', gap: 14, marginTop: 12 },
  capRow: { display: 'flex', gap: 14, alignItems: 'flex-start' },
  capCheck: { width: 22, height: 22, borderRadius: 6, background: '#4A8FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 },
  capTitle: { fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 16, letterSpacing: '.04em', textTransform: 'uppercase', color: '#fff' },
  capDesc: { fontFamily: 'var(--font-sans)', fontSize: 14, color: 'rgba(255,255,255,.65)', marginTop: 4, lineHeight: 1.5 },
  seeAll: { display: 'inline-block', marginTop: 28, fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '.16em', textTransform: 'uppercase', color: '#FF1493', textDecoration: 'none', borderBottom: '1px solid rgba(255,20,147,.5)', paddingBottom: 4 }
};
window.AboutCapability = AboutCapability;
