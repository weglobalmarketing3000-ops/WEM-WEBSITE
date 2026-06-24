// AboutHero.jsx, hero for /about.html
const AboutHero = ({ lang }) => {
  const t = {
    en: {
      pill: 'ABOUT WE MARKETING',
      h1a: 'We turn TikTok Shop into a',
      h1accent: 'revenue engine',
      h1b: 'for brands.',
      sub: 'WE Marketing is a TikTok Shop Partner Agency built for performance. We connect shop strategy, creators, content, and live operations into one growth system.',
      badge1: 'TIKTOK SHOP PARTNER AGENCY · CERTIFIED SINCE 2025',
      badge2: 'EN · ES · 中文 SUPPORT',
      cta1: 'Book a discovery call →',
      cta2: 'See our work'
    },
    zh: {
      pill: '关于 WE MARKETING',
      h1a: '我们帮品牌把',
      h1accent: '美国 TikTok Shop',
      h1b: '做成生意。',
      sub: 'WE Marketing 位于洛杉矶，服务跨境品牌、Amazon 卖家和在美华人品牌团队。我们不只做咨询，而是直接把店铺、达人、内容、直播和数据跟进一起执行。',
      badge1: 'TIKTOK SHOP PARTNER AGENCY · 2025 起认证',
      badge2: '英西中沟通 · 美国本地执行 · 多语种达人覆盖',
      cta1: '预约咨询',
      cta2: '查看案例'
    }
  }[lang];
  return (
    <section style={abhStyles.wrap} className="about-hero">
      <style>{`
        @media (max-width: 760px) {
          .about-hero { max-width: 100vw !important; overflow: hidden !important; }
          .about-hero-inner { padding: 86px 20px 68px !important; max-width: 100% !important; }
          .about-hero-pill { font-size: 11px !important; line-height: 1.2 !important; white-space: normal !important; }
          .about-hero-title { font-size: clamp(44px, 13vw, 62px) !important; line-height: .96 !important; letter-spacing: 0 !important; }
          .about-hero-sub { font-size: 17px !important; line-height: 1.48 !important; max-width: 100% !important; }
          .about-hero-badges { display: grid !important; grid-template-columns: 1fr !important; gap: 10px !important; }
          .about-hero-badge { text-align: center !important; font-size: 10px !important; line-height: 1.25 !important; }
          .about-hero-ctas { display: grid !important; grid-template-columns: 1fr !important; }
          .about-hero-ctas a { justify-content: center !important; width: 100% !important; text-align: center !important; }
        }
      `}</style>
      <div style={abhStyles.orb1} />
      <div style={abhStyles.orb2} />
      <div style={abhStyles.inner} className="about-hero-inner">
        <div style={abhStyles.pill} className="about-hero-pill">{t.pill}</div>
        <h1 style={abhStyles.h1} className="about-hero-title">
          {t.h1a}<br />
          <span style={abhStyles.accent}>{t.h1accent}</span><br />{t.h1b}
        </h1>
        <p style={abhStyles.sub} className="about-hero-sub">{t.sub}</p>
        <div style={abhStyles.badges} className="about-hero-badges">
          <div style={abhStyles.badge} className="about-hero-badge">{t.badge1}</div>
          <div style={{ ...abhStyles.badge, ...abhStyles.badgeAlt }} className="about-hero-badge">{t.badge2}</div>
        </div>
        <div style={abhStyles.ctas} className="about-hero-ctas">
          <a href="https://zus03h0enw04.sg.larksuite.com/scheduler/03970278dd9a7925" target="_blank" rel="noopener" className="we-btn we-btn-primary" style={{ fontSize: 16, padding: '16px 30px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 10 }}>{t.cta1}</a>
          <a href="/#Our Work" style={abhStyles.ghost}>{t.cta2}</a>
        </div>
      </div>
    </section>);

};
const abhStyles = {
  wrap: { position: 'relative', background: '#000', color: '#fff', overflow: 'hidden' },
  orb1: { position: 'absolute', top: -160, right: -200, width: 720, height: 720, background: 'radial-gradient(circle, #FF1493 0%, transparent 55%)', filter: 'blur(70px)', opacity: .28, pointerEvents: 'none' },
  orb2: { position: 'absolute', bottom: -160, left: -160, width: 600, height: 600, background: 'radial-gradient(circle, #9B30FF 0%, transparent 60%)', filter: 'blur(80px)', opacity: .32, pointerEvents: 'none' },
  inner: { position: 'relative', maxWidth: 1280, margin: '0 auto', padding: '120px 32px 100px', textAlign: 'center' },
  pill: { display: 'inline-block', background: '#fff', color: '#000', borderRadius: 999, padding: '10px 22px', fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: 13, letterSpacing: '.08em' },
  h1: { fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(56px, 7vw, 110px)', lineHeight: .95, letterSpacing: '-.01em', textTransform: 'uppercase', margin: '32px auto 0', maxWidth: 1100, color: '#fff' },
  accent: { background: 'linear-gradient(90deg, #FF1493 0%, #9B30FF 50%, #4A8FFF 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' },
  sub: { fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: 19, lineHeight: 1.5, color: 'rgba(255,255,255,.78)', maxWidth: 760, margin: '32px auto 0' },
  badges: { display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginTop: 32 },
  badge: { fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: '#FF1493', border: '1px solid rgba(255,20,147,.4)', borderRadius: 999, padding: '8px 16px' },
  badgeAlt: { color: '#4A8FFF', borderColor: 'rgba(74,143,255,.4)' },
  ctas: { display: 'flex', gap: 14, marginTop: 44, justifyContent: 'center', flexWrap: 'wrap' },
  ghost: { background: 'transparent', border: '1.5px solid rgba(255,255,255,.4)', color: '#fff', padding: '16px 30px', borderRadius: 999, fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 16, letterSpacing: '.04em', textTransform: 'uppercase', cursor: 'pointer', textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }
};
window.AboutHero = AboutHero;
