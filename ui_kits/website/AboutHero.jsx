// AboutHero.jsx, hero for /about.html
const AboutHero = ({ lang }) => {
  const t = {
    en: {
      pill: 'ABOUT WE MARKETING',
      h1a: 'We turn TikTok Shop into a',
      h1accent: 'revenue engine',
      h1b: 'for brands.',
      sub: 'WE Marketing is a TikTok Shop Partner Agency built to drive performance at scale. We combine shop strategy, creator activation, content systems, and live operations into one unified system, so brands move from cold start validation to sustainable, repeatable growth on TikTok Shop.',
      badge1: 'TIKTOK SHOP PARTNER AGENCY · CERTIFIED SINCE 2025',
      badge2: 'EN · ES · 中文 SUPPORT',
      cta1: 'Book a discovery call →',
      cta2: 'See our work',
    },
    zh: {
      pill: '关于 WE MARKETING',
      h1a: '我们将 TikTok Shop 打造为',
      h1accent: '增长引擎',
      h1b: '助品牌持续放大。',
      sub: 'WE Marketing 是 TikTok Shop 官方合作机构（TSP），专注规模化业绩增长。我们将店铺策略、达人激活、内容体系与直播运营整合为一体化方案，帮助品牌从冷启动验证走向可持续、可复制的稳定增长。',
      badge1: 'TIKTOK SHOP 官方合作机构 · 2025 起认证',
      badge2: '中 · 英 · 西 三语支持',
      cta1: '预约咨询 →',
      cta2: '查看案例',
    },
  }[lang];
  return (
    <section style={abhStyles.wrap}>
      <div style={abhStyles.orb1}/>
      <div style={abhStyles.orb2}/>
      <div style={abhStyles.inner}>
        <div style={abhStyles.pill}>{t.pill}</div>
        <h1 style={abhStyles.h1}>
          {t.h1a}<br/>
          <span style={abhStyles.accent}>{t.h1accent}</span> {t.h1b}
        </h1>
        <p style={abhStyles.sub}>{t.sub}</p>
        <div style={abhStyles.badges}>
          <div style={abhStyles.badge}>{t.badge1}</div>
          <div style={{ ...abhStyles.badge, ...abhStyles.badgeAlt }}>{t.badge2}</div>
        </div>
        <div style={abhStyles.ctas}>
          <a href="https://zus03h0enw04.sg.larksuite.com/scheduler/03970278dd9a7925" target="_blank" rel="noopener" className="we-btn we-btn-primary" style={{ fontSize: 16, padding: '16px 30px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 10 }}>{t.cta1}</a>
          <a href="index.html#Our Work" style={abhStyles.ghost}>{t.cta2}</a>
        </div>
      </div>
    </section>
  );
};
const abhStyles = {
  wrap: { position: 'relative', background: '#000', color: '#fff', overflow: 'hidden' },
  orb1: { position: 'absolute', top: -160, right: -200, width: 720, height: 720, background: 'radial-gradient(circle, #FF1493 0%, transparent 55%)', filter: 'blur(70px)', opacity: .28, pointerEvents: 'none' },
  orb2: { position: 'absolute', bottom: -160, left: -160, width: 600, height: 600, background: 'radial-gradient(circle, #9B30FF 0%, transparent 60%)', filter: 'blur(80px)', opacity: .32, pointerEvents: 'none' },
  inner: { position: 'relative', maxWidth: 1280, margin: '0 auto', padding: '120px 32px 100px', textAlign: 'center' },
  pill: { display: 'inline-block', background: '#fff', color: '#000', borderRadius: 999, padding: '10px 22px', fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: 13, letterSpacing: '.08em' },
  h1: { fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(56px, 7vw, 110px)', lineHeight: .95, letterSpacing: '-.01em', textTransform: 'uppercase', margin: '32px auto 0', maxWidth: 1100, color: '#fff' },
  accent: { background: 'linear-gradient(90deg, #FF1493 0%, #9B30FF 50%, #00E5FF 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' },
  sub: { fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: 19, lineHeight: 1.5, color: 'rgba(255,255,255,.78)', maxWidth: 760, margin: '32px auto 0' },
  badges: { display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginTop: 32 },
  badge: { fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: '#FF1493', border: '1px solid rgba(255,20,147,.4)', borderRadius: 999, padding: '8px 16px' },
  badgeAlt: { color: '#00E5FF', borderColor: 'rgba(0,229,255,.4)' },
  ctas: { display: 'flex', gap: 14, marginTop: 44, justifyContent: 'center', flexWrap: 'wrap' },
  ghost: { background: 'transparent', border: '1.5px solid rgba(255,255,255,.4)', color: '#fff', padding: '16px 30px', borderRadius: 999, fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 16, letterSpacing: '.04em', textTransform: 'uppercase', cursor: 'pointer', textDecoration: 'none', display: 'inline-flex', alignItems: 'center' },
};
window.AboutHero = AboutHero;
