// CtaFooter.jsx, final CTA (pink → violet gradient)
const CtaFooter = ({ lang }) => {
  const t = {
    en: { h: "Ready to scale\non TikTok?", sub: "Tell us your brand, your stack, your ambition. We'll reply in 24 hours.", cta: 'Book a discovery call →', alt: 'Email us instead', href: 'https://zus03h0enw04.sg.larksuite.com/scheduler/03970278dd9a7925' },
    zh: { h: '想把美国\nTikTok Shop 跑起来？', sub: '告诉我们你的产品、目标市场和现在卡在哪。我们会在 24 小时内回复，直接给下一步建议。', cta: '预约咨询', alt: '邮件联系', href: 'https://zus03h0enw04.sg.larksuite.com/scheduler/03970278dd9a7925' },
  }[lang];
  return (
    <section id="About" style={ctaStyles.wrap}>
      <div style={ctaStyles.bg}/>
      <svg viewBox="0 0 1440 420" preserveAspectRatio="none" style={ctaStyles.lines} aria-hidden="true">
        <path className="cta-flow-line" d="M-80 270 C210 110, 410 350, 660 190 S1080 80, 1520 250" fill="none" stroke="#fff" strokeWidth="1.6"/>
        <path className="cta-flow-line" d="M-100 120 C180 250, 420 70, 720 180 S1110 330, 1530 110" fill="none" stroke="#00E5FF" strokeWidth="1.4" style={{ animationDelay: '-3.2s' }}/>
      </svg>
      <div style={ctaStyles.inner}>
        <h2 style={ctaStyles.h}>{t.h.split('\n').map((l,i)=><span key={i}>{l}<br/></span>)}</h2>
        <p style={ctaStyles.sub}>{t.sub}</p>
        <div style={ctaStyles.ctas}>
          <a href={t.href} target="_blank" rel="noopener" style={{ ...ctaStyles.btnLight, textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>{t.cta}</a>
          <a href="mailto:hello@weglobalmarketing.com" style={{ ...ctaStyles.ghost, textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>{t.alt}</a>
        </div>
      </div>
      <style>{`
        @keyframes cta-bg-shift {
          0%, 100% { transform: translate3d(-2%, -1%, 0) scale(1); opacity: .72; }
          50% { transform: translate3d(2%, 1%, 0) scale(1.08); opacity: 1; }
        }
        @keyframes cta-flow {
          0% { stroke-dashoffset: 560; opacity: .18; }
          42% { opacity: .55; }
          100% { stroke-dashoffset: 0; opacity: .18; }
        }
        .cta-flow-line { stroke-dasharray: 18 24; animation: cta-flow 9s linear infinite; }
      `}</style>
    </section>
  );
};
const ctaStyles = {
  wrap: { position: 'relative', background: 'linear-gradient(135deg, #FF1493 0%, #9B30FF 100%)', color: '#fff', padding: '140px 0', overflow: 'hidden' },
  bg: { position: 'absolute', inset: '-10%', background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,.24) 0%, transparent 58%), radial-gradient(circle at 15% 80%, rgba(0,229,255,.24), transparent 38%)', pointerEvents: 'none', animation: 'cta-bg-shift 12s ease-in-out infinite' },
  lines: { position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: .58, pointerEvents: 'none' },
  inner: { position: 'relative', zIndex: 2, maxWidth: 1100, margin: '0 auto', padding: '0 32px', textAlign: 'center' },
  h: { fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(60px, 8vw, 120px)', lineHeight: .95, letterSpacing: '-.005em', textTransform: 'uppercase', margin: 0 },
  sub: { fontFamily: 'var(--font-sans)', fontSize: 20, lineHeight: 1.5, color: 'rgba(255,255,255,.9)', marginTop: 28, maxWidth: 620, marginLeft: 'auto', marginRight: 'auto' },
  ctas: { display: 'flex', gap: 14, justifyContent: 'center', marginTop: 40 },
  btnLight: { background: '#fff', color: '#000', border: 0, padding: '18px 34px', borderRadius: 999, fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: 16, letterSpacing: '.04em', textTransform: 'uppercase', cursor: 'pointer' },
  ghost: { background: 'transparent', border: '1.5px solid rgba(255,255,255,.4)', color: '#fff', padding: '18px 34px', borderRadius: 999, fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 16, letterSpacing: '.04em', textTransform: 'uppercase', cursor: 'pointer' },
};
window.CtaFooter = CtaFooter;
