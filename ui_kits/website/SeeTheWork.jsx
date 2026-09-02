// SeeTheWork.jsx, single-line bridge from homepage to /showcase.html
const SeeTheWork = ({ lang }) => {
  const t = {
    en: {
      eye: '// REAL WORK · REAL NUMBERS',
      h: '160+ brand partners across beauty, wellness,\ntech, and fashion.',
      cta: 'See the work →',
    },
    zh: {
      eye: '// 真实案例 · 美国市场数据',
      h: '我们做过 160+ 个品牌和店铺，覆盖美妆、健康、\n科技、服饰和跨境消费品。',
      cta: '查看案例',
    },
  }[lang];
  return (
    <section style={stwStyles.wrap}>
      <div style={stwStyles.inner}>
        <div style={stwStyles.eye}>{t.eye}</div>
        <h2 style={stwStyles.h}>{t.h.split('\n').map((l,i)=><span key={i}>{l}<br/></span>)}</h2>
        <a href="showcase.html" style={stwStyles.cta}>{t.cta}</a>
      </div>
    </section>
  );
};
const stwStyles = {
  wrap: { background: '#000', borderTop: '1px solid rgba(255,255,255,.08)', borderBottom: '1px solid rgba(255,255,255,.08)', padding: '100px 32px' },
  inner: { maxWidth: 1100, margin: '0 auto', textAlign: 'center' },
  eye: { fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '.18em', fontWeight: 700, color: '#FF1493', marginBottom: 24 },
  h: { fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(40px, 5vw, 72px)', lineHeight: 1.05, letterSpacing: '-.005em', textTransform: 'uppercase', color: '#fff', margin: 0 },
  cta: { display: 'inline-flex', alignItems: 'center', marginTop: 36, padding: '16px 32px', borderRadius: 999, background: 'linear-gradient(90deg, #FF1493 0%, #9B30FF 100%)', color: '#fff', fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: 16, letterSpacing: '.04em', textTransform: 'uppercase', textDecoration: 'none' },
};
window.SeeTheWork = SeeTheWork;
