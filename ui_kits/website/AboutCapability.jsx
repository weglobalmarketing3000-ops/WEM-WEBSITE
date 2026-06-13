// AboutCapability.jsx, two-column founder narrative + stat grid + capability list
const AboutCapability = ({ lang }) => {
  const t = {
    en: {
      eyeL: 'WHY WE BUILT WEM',
      h2: 'A team that runs the whole TikTok Shop playbook.',
      p1: 'WE Marketing was founded by Wendy Lin in Los Angeles in 2024, after years of watching brands and creators get squeezed by agency models that were never designed for TikTok Shop. Most agencies treat TikTok like another e-commerce channel. The brands winning on TikTok Shop know it is a different game: creator-led, content-first, live-driven, and operationally heavy.',
      p2: 'We built WEM to run the whole game. One team owns shop strategy, creator activation, short-form content, live operations, and shop management, under one P&L. No handoffs, no finger-pointing, no gaps between "the influencer team" and "the shop team."',
      p3: 'That is how a beauty brand we work with went from a $312K GMV month to a $982K GMV month in 30 days. That is how a men\u2019s fashion brand cold-started to 10K+ orders in a category most agencies struggle to staff creators for. The playbook is the same. The execution is the difference.',
      quote: '\"TikTok Shop is a discovery engine, not a storefront. Creators close the trust gap between your brand and a customer who has never heard of you. Our job is to make that happen at scale.\"  ',
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
  }[lang];
  return (
    <section style={acStyles.wrap}>
      <div style={acStyles.inner}>
        <div style={acStyles.left}>
          <div style={acStyles.eye}>{t.eyeL}</div>
          <h2 style={acStyles.h2}>{t.h2}</h2>
          <p style={acStyles.p}>{t.p1}</p>
          <p style={acStyles.p}>{t.p2}</p>
          <p style={acStyles.p}>{t.p3}</p>
          <div style={acStyles.quoteWrap}>
            <div style={acStyles.quoteBar} />
            <div>
              <div style={{ ...acStyles.quote, color: "rgb(244, 22, 160)" }}>{t.quote}</div>
              <div style={acStyles.author}>{t.author}</div>
            </div>
          </div>
        </div>
        <div style={acStyles.right}>
          <div style={acStyles.eye}>{t.eyeR}</div>
          <div style={acStyles.statGrid}>
            {t.stats.map((s, i) =>
            <div key={i} style={acStyles.statCard}>
                <div style={acStyles.statNum}>
                  {s.num.replace(/[+$]/g, '').replace(/^/, '')}
                  <span style={acStyles.statSym}>{s.num.match(/[+$]/g)?.join('')}</span>
                </div>
                <div style={acStyles.statLab}>{s.lab}</div>
              </div>
            )}
          </div>
          <div style={acStyles.capList}>
            {t.caps.map(([h, d], i) =>
            <div key={i} style={acStyles.capRow}>
                <div style={acStyles.capCheck}>
                  <i data-lucide="check" style={{ width: 14, height: 14, color: '#000', strokeWidth: 3 }} />
                </div>
                <div>
                  <div style={acStyles.capTitle}>{h}</div>
                  <div style={acStyles.capDesc}>{d}</div>
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
