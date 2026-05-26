// CtaFooter.jsx, final CTA (pink → violet gradient)
const CtaFooter = ({ lang }) => {
  const t = {
    en: { h: "Ready to scale\non TikTok?", sub: "Tell us your brand, your stack, your ambition. We'll reply in 24 hours.", cta: 'Book a discovery call →', alt: 'Email us instead', href: 'https://zus03h0enw04.sg.larksuite.com/scheduler/03970278dd9a7925' },
    zh: { h: '准备好在\nTIKTOK SHOP\n上起量了吗？', sub: '告诉我们你的品牌、现状和目标。24 小时内回复。', cta: '预约咨询 →', alt: '或发邮件给我们', href: 'https://zus03h0enw04.sg.larksuite.com/scheduler/03970278dd9a7925' },
  }[lang];
  return (
    <section id="About" style={ctaStyles.wrap}>
      <div style={ctaStyles.bg}/>
      <div style={ctaStyles.inner}>
        <h2 style={ctaStyles.h}>{t.h.split('\n').map((l,i)=><span key={i}>{l}<br/></span>)}</h2>
        <p style={ctaStyles.sub}>{t.sub}</p>
        <div style={ctaStyles.ctas}>
          <a href={t.href} target="_blank" rel="noopener" style={{ ...ctaStyles.btnLight, textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>{t.cta}</a>
          <a href="mailto:hello@weglobalmarketing.com" style={{ ...ctaStyles.ghost, textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>{t.alt}</a>
        </div>
      </div>
    </section>
  );
};
const ctaStyles = {
  wrap: { position: 'relative', background: 'linear-gradient(135deg, #FF1493 0%, #9B30FF 100%)', color: '#fff', padding: '140px 0', overflow: 'hidden' },
  bg: { position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,.2) 0%, transparent 60%)', pointerEvents: 'none' },
  inner: { position: 'relative', maxWidth: 1100, margin: '0 auto', padding: '0 32px', textAlign: 'center' },
  h: { fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(60px, 8vw, 120px)', lineHeight: .95, letterSpacing: '-.005em', textTransform: 'uppercase', margin: 0 },
  sub: { fontFamily: 'var(--font-sans)', fontSize: 20, lineHeight: 1.5, color: 'rgba(255,255,255,.9)', marginTop: 28, maxWidth: 620, marginLeft: 'auto', marginRight: 'auto' },
  ctas: { display: 'flex', gap: 14, justifyContent: 'center', marginTop: 40 },
  btnLight: { background: '#fff', color: '#000', border: 0, padding: '18px 34px', borderRadius: 999, fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: 16, letterSpacing: '.04em', textTransform: 'uppercase', cursor: 'pointer' },
  ghost: { background: 'transparent', border: '1.5px solid rgba(255,255,255,.4)', color: '#fff', padding: '18px 34px', borderRadius: 999, fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 16, letterSpacing: '.04em', textTransform: 'uppercase', cursor: 'pointer' },
};
window.CtaFooter = CtaFooter;
