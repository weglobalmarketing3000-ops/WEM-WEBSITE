// Testimonial.jsx, quote block (dark, pink accent)
const Testimonial = ({ lang }) => {
  const t = {
    en: {
      eyebrow: 'WHAT BRANDS SAY',
      quote: '\u201CWE Marketing gave us the creator momentum we needed. Their team activated creators quickly, helped us gain visibility on TikTok Shop, and created a broader halo effect across Amazon, our DTC site, and brand awareness.\u201D',
      who: 'Marketing Lead',
      brand: 'A leading fashion DTC brand',
    },
    zh: {
      eyebrow: '品牌怎么说',
      quote: '"WE 做的不是单纯找达人。他们会把内容、联盟、店铺节奏和数据复盘放在一起看，沟通很清楚，动作也快。"',
      who: '品牌市场负责人',
      brand: '跨境 DTC 消费品牌',
    },
  }[lang];
  return (
    <section style={ttStyles.wrap}>
      <div style={ttStyles.inner}>
        <div style={ttStyles.eye}>{t.eyebrow}</div>
        <div style={ttStyles.quote}>{t.quote}</div>
        <div style={ttStyles.attr}>
          <div style={ttStyles.avatar}/>
          <div>
            <div style={ttStyles.who}>{t.who}</div>
            <div style={ttStyles.brand}>{t.brand}</div>
          </div>
        </div>
      </div>
    </section>
  );
};
const ttStyles = {
  wrap: { background: '#000', color: '#fff', padding: '120px 0', borderTop: '1px solid rgba(255,255,255,.08)' },
  inner: { maxWidth: 1100, margin: '0 auto', padding: '0 32px' },
  eye: { fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: 13, letterSpacing: '.12em', textTransform: 'uppercase', color: '#4A8FFF', marginBottom: 32 },
  quote: { fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 36, lineHeight: 1.3, color: '#fff' },
  attr: { display: 'flex', alignItems: 'center', gap: 16, marginTop: 48 },
  avatar: { width: 52, height: 52, borderRadius: 999, background: 'linear-gradient(135deg, #FF1493 0%, #9B30FF 100%)' },
  who: { fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: 16, color: '#fff' },
  brand: { fontFamily: 'var(--font-mono)', fontSize: 12, color: 'rgba(255,255,255,.6)', marginTop: 3 },
};
window.Testimonial = Testimonial;
