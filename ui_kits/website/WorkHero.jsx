// WorkHero.jsx, hero for /showcase.html
const WorkHero = ({ lang }) => {
  const t = {
    en: {
      pill: 'OUR WORK',
      h1a: 'Real work.',
      h1accent: 'Real numbers.',
      sub: 'TikTok Shop case studies across beauty, wellness, tech, and fashion. Cold-starts, plateau breaks, hero-creator wins, and multilingual live programs. Same playbook. Different category. Real metrics.',
    },
    zh: {
      pill: '案例',
      h1a: '美国 TikTok Shop',
      h1accent: '真实增长案例。',
      sub: '覆盖美妆、健康、科技、服饰和跨境消费品。我们关注的不只是播放量，也看冷启动速度、达人发布率、内容带来的订单、直播成交和销售增长。',
    },
  }[lang];
  return (
    <section style={whStyles.wrap}>
      <div style={whStyles.orb1}/>
      <div style={whStyles.orb2}/>
      <div style={whStyles.inner}>
        <div style={whStyles.pill}>{t.pill}</div>
        <h1 style={whStyles.h1}>
          {t.h1a}<br/>
          <span style={whStyles.h1accent}>{t.h1accent}</span>
        </h1>
        <p style={whStyles.sub}>{t.sub}</p>
      </div>
    </section>
  );
};
const whStyles = {
  wrap: { position: 'relative', background: '#000', color: '#fff', overflow: 'hidden' },
  orb1: { position: 'absolute', top: -100, right: -150, width: 700, height: 700, background: 'radial-gradient(circle, #FF1493 0%, transparent 50%)', filter: 'blur(60px)', opacity: .3, pointerEvents: 'none' },
  orb2: { position: 'absolute', bottom: -200, left: -100, width: 500, height: 500, background: 'radial-gradient(circle, #4A8FFF 0%, transparent 60%)', filter: 'blur(80px)', opacity: .2, pointerEvents: 'none' },
  inner: { position: 'relative', maxWidth: 1280, margin: '0 auto', padding: '120px 32px 80px' },
  pill: { display: 'inline-flex', alignItems: 'center', background: '#fff', color: '#000', borderRadius: 999, padding: '10px 22px', fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: 14, letterSpacing: '.06em' },
  h1: { fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(64px, 8vw, 128px)', lineHeight: 1, letterSpacing: '-.01em', textTransform: 'uppercase', margin: '32px 0 0', color: '#fff' },
  h1accent: { background: 'linear-gradient(90deg, #FF1493 0%, #9B30FF 50%, #4A8FFF 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent' },
  sub: { fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 22, lineHeight: 1.4, color: 'rgba(255,255,255,.85)', maxWidth: 760, marginTop: 32 },
};
window.WorkHero = WorkHero;
