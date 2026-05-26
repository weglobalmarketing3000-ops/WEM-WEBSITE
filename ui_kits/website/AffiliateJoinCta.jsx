// AffiliateJoinCta.jsx, final Discord-join CTA (Discord blurple gradient)
const AffiliateJoinCta = ({ lang }) => {
  const t = {
    en: {
      eyebrow: '// LET\u2019S GROW TOGETHER',
      h: 'Your next brand\ncollab is waiting.',
      sub: 'Join our Discord to discover live brand collabs, apply directly, and start promoting as soon as today.',
      cta: 'Join the Discord',
      alt: 'Apply to creator network',
      fine: 'Free to join. No follower minimum. Open to creators in the US market only.',
    },
    zh: {
      eyebrow: '// 一起开始',
      h: '你的下一个\n品牌合作',
      sub: '加入 Discord，贴上 TikTok 账号，选一个频道 —— 我们会在 48 小时内给你匹配资源。',
      cta: '加入 Discord',
      alt: '申请加入达人网络',
      fine: '免费加入。无粉丝门槛。面向美国、加拿大、英国及中文市场的达人。',
    },
  }[lang];
  return (
    <section style={ajStyles.wrap}>
      <div style={ajStyles.bg}/>
      <div style={ajStyles.inner}>
        <div style={ajStyles.eyebrow}>{t.eyebrow}</div>
        <h2 style={ajStyles.h}>{t.h.split('\n').map((l,i)=><span key={i}>{l}<br/></span>)}</h2>
        <p style={ajStyles.sub}>{t.sub}</p>
        <div style={ajStyles.ctas}>
          <a href={window.DISCORD_URL} target="_blank" rel="noopener" style={ajStyles.btnLight}>
            <svg width="22" height="22" viewBox="0 0 127.14 96.36" fill="#000"><path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"/></svg>
            {t.cta}
          </a>
          <a href="mailto:wendy@weglobalmarketing.com" style={ajStyles.ghost}>{t.alt}</a>
        </div>
        <div style={ajStyles.fine}>{t.fine}</div>
      </div>
    </section>
  );
};
const ajStyles = {
  wrap: { position: 'relative', background: 'linear-gradient(135deg, #5865F2 0%, #9B30FF 50%, #FF1493 100%)', color: '#fff', padding: '140px 0', overflow: 'hidden' },
  bg: { position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 30%, rgba(255,255,255,.22) 0%, transparent 60%)', pointerEvents: 'none' },
  inner: { position: 'relative', maxWidth: 1100, margin: '0 auto', padding: '0 32px', textAlign: 'center' },
  eyebrow: { fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '.12em', color: 'rgba(255,255,255,.85)', fontWeight: 700, marginBottom: 20 },
  h: { fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(60px, 8vw, 120px)', lineHeight: .95, letterSpacing: '-.005em', textTransform: 'uppercase', margin: 0 },
  sub: { fontFamily: 'var(--font-sans)', fontSize: 20, lineHeight: 1.5, color: 'rgba(255,255,255,.9)', marginTop: 28, maxWidth: 640, marginLeft: 'auto', marginRight: 'auto' },
  ctas: { display: 'flex', gap: 14, justifyContent: 'center', marginTop: 40, flexWrap: 'wrap' },
  btnLight: { display: 'inline-flex', alignItems: 'center', gap: 12, background: '#fff', color: '#000', border: 0, padding: '18px 34px', borderRadius: 999, fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: 16, letterSpacing: '.04em', textTransform: 'uppercase', cursor: 'pointer', textDecoration: 'none' },
  ghost: { background: 'transparent', border: '1.5px solid rgba(255,255,255,.4)', color: '#fff', padding: '18px 34px', borderRadius: 999, fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 16, letterSpacing: '.04em', textTransform: 'uppercase', cursor: 'pointer', textDecoration: 'none', display: 'inline-flex', alignItems: 'center' },
  fine: { fontFamily: 'var(--font-sans)', fontSize: 13, color: 'rgba(255,255,255,.7)', marginTop: 28 },
};
window.AffiliateJoinCta = AffiliateJoinCta;
