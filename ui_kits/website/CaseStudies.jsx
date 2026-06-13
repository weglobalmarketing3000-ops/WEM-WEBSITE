// CaseStudies.jsx, dark showcase cards
const CS_ACCENTS = ['#FF1493', '#4A8FFF', '#9B30FF', '#4A8FFF'];

const CaseStudies = ({ lang }) => {
  const t = {
    en: {
      title: 'Results, not promises.',
      sub: 'Real work, real metrics, across beauty, wellness, tech, and fashion.',
      items: [
        { brand: 'Canvas Beauty', creator: '@stormisteele', stat: '$1.5M', unit: 'single LIVE', cat: 'BEAUTY' },
        { brand: 'Higround', creator: '@carterpcs', stat: '18x', unit: 'ROAS', cat: 'TECH' },
        { brand: 'WNP', creator: '+ 40 creators', stat: '7x', unit: 'ROAS WoW', cat: 'WELLNESS' },
        { brand: 'Medicube', creator: '@michellephan', stat: '#1', unit: 'TikTok Shop LIVE', cat: 'SKINCARE' },
      ],
    },
    zh: {
      title: '结果不是口号',
      sub: '真实项目，真实数据：美国 TikTok Shop 上的美妆、健康、科技、服饰和跨境消费品案例。',
      items: [
        { brand: 'Canvas Beauty', creator: '@stormisteele', stat: '$1.5M', unit: '单场直播', cat: '美妆' },
        { brand: 'Higround', creator: '@carterpcs', stat: '18x', unit: 'ROAS', cat: '科技' },
        { brand: 'WNP', creator: '40+ 达人', stat: '7x', unit: '周环比 ROAS', cat: '健康' },
        { brand: 'Medicube', creator: '@michellephan', stat: '#1', unit: 'TikTok Shop 直播', cat: '护肤' },
      ],
    },
  }[lang];
  return (
    <section style={csStyles.wrap}>
      <div style={csStyles.orb}/>
      <div style={csStyles.inner}>
        <h2 style={csStyles.h2}>
          {lang === 'en'
            ? <>Results, <span style={csStyles.h2grad}>not promises.</span></>
            : <>结果<span style={csStyles.h2grad}>不是口号</span></>}
        </h2>
        <p style={csStyles.sub}>{t.sub}</p>
        <div style={csStyles.grid}>
          {t.items.map((c, i) => {
            const a = CS_ACCENTS[i % CS_ACCENTS.length];
            return (
              <div key={i} style={csStyles.card}>
                <div style={{ ...csStyles.cat, color: a, background: `${a}1f` }}>{c.cat}</div>
                <div style={csStyles.stat}>
                  <span style={{ background: `linear-gradient(135deg, ${a} 0%, #fff 100%)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent' }}>{c.stat}</span>
                </div>
                <div style={csStyles.unit}>{c.unit}</div>
                <div style={csStyles.meta}>
                  <div style={csStyles.brand}>{c.brand}</div>
                  <div style={csStyles.creator}>{c.creator}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
const csStyles = {
  wrap: { background: '#000', padding: '140px 0', position: 'relative', overflow: 'hidden' },
  orb: { position: 'absolute', top: '30%', right: -200, width: 500, height: 500, background: 'radial-gradient(circle, #9B30FF 0%, transparent 60%)', filter: 'blur(80px)', opacity: .3, pointerEvents: 'none' },
  inner: { maxWidth: 1280, margin: '0 auto', padding: '0 32px', position: 'relative' },
  h2: { fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(60px, 7vw, 108px)', lineHeight: .95, letterSpacing: '-.005em', textTransform: 'uppercase', margin: '0 0 18px', color: '#fff' },
  h2grad: { background: 'linear-gradient(90deg, #FF1493 0%, #9B30FF 50%, #4A8FFF 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent' },
  sub: { fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 22, color: 'rgba(255,255,255,.85)', margin: '0 0 60px', maxWidth: 800 },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 },
  card: { background: '#0A0A0A', border: '1px solid rgba(255,255,255,.1)', borderRadius: 16, padding: 28, minHeight: 300, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', cursor: 'pointer', color: '#fff', transition: 'all .3s', boxShadow: '0 0 0 1px rgba(255,20,147,.08)' },
  cat: { fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: 11, letterSpacing: '.12em', color: '#FF1493', background: 'rgba(255,20,147,.12)', padding: '6px 12px', borderRadius: 999, alignSelf: 'flex-start' },
  stat: { fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 64, lineHeight: 1, letterSpacing: '-.02em', marginTop: 28, color: '#fff' },
  unit: { fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 13, color: '#fff', marginTop: 6, letterSpacing: '.04em', textTransform: 'uppercase' },
  meta: { marginTop: 24, borderTop: '1px solid rgba(255,255,255,.1)', paddingTop: 16 },
  brand: { fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: 16, color: '#fff' },
  creator: { fontFamily: 'var(--font-mono)', fontSize: 12, color: 'rgba(255,255,255,.6)', marginTop: 4 },
};
window.CaseStudies = CaseStudies;
