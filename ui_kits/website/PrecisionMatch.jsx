// PrecisionMatch.jsx, replaces IndustriesStrip on /showcase.html — proprietary matching system
const PrecisionMatch = ({ lang }) => {
  const t = {
    en: {
      eye: '// PRECISION CREATOR MATCHING',
      h1: 'Not more creators.',
      h2: 'Better matches.',
      sub: 'TAP helps brands move beyond mass creator outreach. We use a structured scoring system to match creators by target audience, language, demographics, content category, GMV history, follower size, posting behavior, and campaign fit, then activate them through our vetted TikTok Shop creator community.',
      cards: [
        ['01', 'Audience Fit', 'Matched by target shopper profile, lifestyle signals, interests, and purchase intent.'],
        ['02', 'Language & Market Fit', 'Matched by English, Spanish, bilingual content ability, and audience communication style.'],
        ['03', 'Demographic Alignment', 'Matched by cultural relevance, creator identity, audience demographics, and campaign goals.'],
        ['04', 'Content Category', 'Matched by niche, content format, product education ability, review style, and live selling fit.'],
        ['05', 'Commerce Signals', 'Matched by GMV history, posting rate, affiliate activity, conversion behavior, and product fit.'],
        ['06', 'Creator Tier & Scale', 'Matched by follower size, engagement quality, content consistency, niche authority, and budget fit.'],
      ],
      proof: 'Powered by our 8,000+ vetted TikTok Shop creator community.',
      ctaH: 'Need creators who actually fit your product?',
      ctaBtn: "Let's build your creator match strategy →",
    },
    zh: {
      eye: '// 精准达人匹配',
      h1: '不是更多达人。',
      h2: '是更准的匹配。',
      sub: 'TAP 让品牌摆脱"广撒网"式的达人合作。我们用一套结构化评分系统，根据目标受众、语言、人群、内容品类、GMV 历史、粉丝量级、发布频率、与活动契合度来匹配达人，再通过我们认证的 TikTok Shop 达人社群进行激活。',
      cards: [
        ['01', '受众契合度', '基于目标购物人群画像、生活方式信号、兴趣偏好、购买意图进行匹配。'],
        ['02', '语言与市场', '基于英语、西语、双语内容能力，以及受众沟通方式进行匹配。'],
        ['03', '人群对齐', '基于文化相关性、达人身份、受众人群结构和活动目标进行匹配。'],
        ['04', '内容品类', '基于细分赛道、内容形式、产品讲解力、测评风格、直播带货契合度进行匹配。'],
        ['05', '电商表现信号', '基于 GMV 历史、发布频率、联盟活跃度、转化行为、产品契合度进行匹配。'],
        ['06', '达人量级与规模', '基于粉丝量、互动质量、内容稳定性、赛道权威度、预算契合度进行匹配。'],
      ],
      proof: '由 8,000+ 认证 TikTok Shop 达人社群驱动。',
      ctaH: '想要真正契合你产品的达人？',
      ctaBtn: '为你定制达人匹配策略 →',
    },
  }[lang];
  return (
    <section style={pmStyles.wrap}>
      <div style={pmStyles.gridLines}/>
      <div style={pmStyles.inner}>
        <div style={pmStyles.eye}>{t.eye}</div>
        <h2 style={pmStyles.h}>
          <span style={pmStyles.hWhite}>{t.h1}</span><br/>
          <span style={pmStyles.hGrad}>{t.h2}</span>
        </h2>
        <p style={pmStyles.sub}>{t.sub}</p>
        <div style={pmStyles.grid}>
          {t.cards.map(([num, name, desc], i) => (
            <div key={i} style={pmStyles.card}>
              <div style={pmStyles.cardHead}>
                <span style={pmStyles.cardNum}>{num}</span>
                <span style={pmStyles.cardDot}/>
                <span style={pmStyles.cardTag}>MATCH PARAM</span>
              </div>
              <div style={pmStyles.cardName}>{name}</div>
              <div style={pmStyles.cardDesc}>{desc}</div>
              <div style={pmStyles.cardBar}>
                <div style={{ ...pmStyles.cardBarFill, width: `${65 + i * 5}%` }}/>
              </div>
            </div>
          ))}
        </div>
        <div style={pmStyles.proof}>
          <span style={pmStyles.proofPulse}/>
          {t.proof}
        </div>
        <div style={pmStyles.ctaBlock}>
          <div style={pmStyles.ctaH}>{t.ctaH}</div>
          <a href="index.html#Contact" style={pmStyles.ctaBtn}>{t.ctaBtn}</a>
        </div>
      </div>
    </section>
  );
};
const pmStyles = {
  wrap: { position: 'relative', background: '#000', borderTop: '1px solid rgba(255,255,255,.08)', padding: '110px 32px 130px', overflow: 'hidden' },
  gridLines: { position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,20,147,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(155,48,255,.06) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none', opacity: .6 },
  inner: { position: 'relative', maxWidth: 1280, margin: '0 auto' },
  eye: { fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '.18em', fontWeight: 700, color: '#FF1493', marginBottom: 28 },
  h: { fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(56px, 7vw, 104px)', lineHeight: 1, letterSpacing: '-.01em', textTransform: 'uppercase', margin: 0 },
  hWhite: { color: '#fff' },
  hGrad: { background: 'linear-gradient(90deg, #FF1493 0%, #9B30FF 50%, #00E5FF 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' },
  sub: { fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: 18, lineHeight: 1.55, color: 'rgba(255,255,255,.75)', maxWidth: 820, marginTop: 28 },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginTop: 64 },
  card: { background: '#0A0A0A', border: '1px solid rgba(255,255,255,.1)', borderRadius: 16, padding: 28, position: 'relative', boxShadow: '0 0 0 1px rgba(255,20,147,.08), 0 0 40px rgba(155,48,255,.08)' },
  cardHead: { display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 },
  cardNum: { fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700, color: '#FF1493', letterSpacing: '.12em' },
  cardDot: { width: 4, height: 4, borderRadius: '50%', background: '#FF1493', boxShadow: '0 0 8px #FF1493' },
  cardTag: { fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,.4)', letterSpacing: '.18em', textTransform: 'uppercase' },
  cardName: { fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 26, letterSpacing: '.01em', textTransform: 'uppercase', color: '#fff', lineHeight: 1.1 },
  cardDesc: { fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: 14, lineHeight: 1.5, color: 'rgba(255,255,255,.65)', marginTop: 14 },
  cardBar: { height: 3, background: 'rgba(255,255,255,.08)', borderRadius: 2, marginTop: 24, overflow: 'hidden' },
  cardBarFill: { height: '100%', background: 'linear-gradient(90deg, #FF1493, #9B30FF, #00E5FF)', borderRadius: 2 },
  proof: { display: 'inline-flex', alignItems: 'center', gap: 10, marginTop: 56, padding: '12px 20px', borderRadius: 999, border: '1px solid rgba(255,20,147,.3)', background: 'rgba(255,20,147,.06)', fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,.85)', letterSpacing: '.04em' },
  proofPulse: { width: 8, height: 8, borderRadius: '50%', background: '#00E5FF', boxShadow: '0 0 10px #00E5FF, 0 0 20px rgba(0,229,255,.5)' },
  ctaBlock: { marginTop: 56, padding: '40px 0 0', borderTop: '1px solid rgba(255,255,255,.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 24 },
  ctaH: { fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(24px, 2.5vw, 32px)', textTransform: 'uppercase', color: '#fff', letterSpacing: '.005em' },
  ctaBtn: { display: 'inline-flex', alignItems: 'center', padding: '18px 32px', borderRadius: 999, background: 'linear-gradient(90deg, #FF1493 0%, #9B30FF 100%)', color: '#fff', fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: 16, letterSpacing: '.04em', textTransform: 'uppercase', textDecoration: 'none', boxShadow: '0 0 30px rgba(255,20,147,.4)' },
};
window.PrecisionMatch = PrecisionMatch;
