// Hero.jsx, dark hero w/ pink+violet orb glow
const Hero = ({ lang }) => {
  const t = {
    en: {
      pill: 'FULL SERVICE TIKTOK SHOP PARTNER AGENCY',
      h1a: 'We help brands', h1accent: 'scale', h1b: 'on TikTok.',
      sub: 'From cold start to sustained GMV. Creator outreach, content, live, and shop operations, all run by one team. 160+ brands. $15M+ annual sales. Certified TikTok Shop Partner Agency.',
      cta1: 'Book a discovery call →', cta2: 'See our work',
      stats: [[8000,'+','Creators in Community'],[24000,'+','Vetted Creators'],[160,'+','Shop Partners Served'],[15,'M+','Annual Sales']],
    },
    zh: {
      pill: '全托管 TIKTOK SHOP 合作代理机构',
      h1a: '我们帮品牌', h1accent: '起量', h1b: '在 TikTok',
      sub: '从冷启动验证到规模化增长：达人激活、内容系统、直播运营、店铺代管。一支团队，一本账。',
      cta1: '预约咨询 →', cta2: '查看案例',
      stats: [[8000,'+','社群创作者'],[24000,'+','认证达人'],[160,'+','服务店铺'],[15,'M+','年销售额']],
    },
  }[lang];
  return (
    <>
      <section style={heroStyles.wrap}>
        <div style={heroStyles.orb1}/>
        <div style={heroStyles.orb2}/>
        <div style={heroStyles.inner}>
          <div style={heroStyles.pill}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#000"><path d="M12 0l2.5 7L22 8l-5.5 5L18 22l-6-3.5L6 22l1.5-9L2 8l7.5-1z"/></svg>
            {t.pill}
          </div>
          <h1 style={heroStyles.h1}>
            {t.h1a}<br/>
            <span style={heroStyles.h1accent}>{t.h1accent}</span>{' '}
            <span style={heroStyles.h1outline}>{t.h1b}</span>
          </h1>
          <p style={heroStyles.sub}>{t.sub}</p>
          <div style={heroStyles.ctas}>
            <button className="we-btn we-btn-primary" style={{ fontSize: 16, padding: '16px 30px' }} onClick={() => window.open('https://zus03h0enw04.sg.larksuite.com/scheduler/03970278dd9a7925','_blank')}>{t.cta1}</button>
            <button style={heroStyles.ghost} onClick={() => location.href='work.html'}>{t.cta2}</button>
          </div>
        </div>
      </section>
      <section style={heroStyles.statsBand}>
        <div style={heroStyles.statsInner}>
          {t.stats.map(([target, suffix, label], i) => (
            <StatCard key={i} target={target} suffix={suffix} label={label} delay={i * 150}/>
          ))}
        </div>
      </section>
    </>
  );
};
const heroStyles = {
  wrap: { position: 'relative', background: '#000', color: '#fff', overflow: 'hidden' },
  orb1: { position: 'absolute', top: -100, right: -150, width: 700, height: 700, background: 'radial-gradient(circle, #FF1493 0%, transparent 50%)', filter: 'blur(60px)', opacity: .35, pointerEvents: 'none' },
  orb2: { position: 'absolute', bottom: -100, left: -100, width: 500, height: 500, background: 'radial-gradient(circle, #9B30FF 0%, transparent 60%)', filter: 'blur(80px)', opacity: .35, pointerEvents: 'none' },
  inner: { position: 'relative', maxWidth: 1280, margin: '0 auto', padding: '120px 32px 100px' },
  pill: { display: 'inline-flex', alignItems: 'center', gap: 12, background: '#fff', color: '#000', borderRadius: 999, padding: '10px 22px', fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: 14, letterSpacing: '.06em' },
  h1: { fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(64px, 8vw, 128px)', lineHeight: 1, letterSpacing: '-.01em', textTransform: 'uppercase', margin: '32px 0 0', color: '#fff' },
  h1accent: { background: 'linear-gradient(90deg, #FF1493 0%, #9B30FF 60%, #00E5FF 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent' },
  h1outline: { color: 'transparent', WebkitTextStroke: '2px #fff' },
  sub: { fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 22, lineHeight: 1.4, color: 'rgba(255,255,255,.85)', maxWidth: 700, marginTop: 24 },
  ctas: { display: 'flex', gap: 14, marginTop: 40 },
  ghost: { background: 'transparent', border: '1.5px solid rgba(255,255,255,.4)', color: '#fff', padding: '16px 30px', borderRadius: 999, fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 16, letterSpacing: '.04em', textTransform: 'uppercase', cursor: 'pointer' },
  statsBand: { background: '#000', padding: '60px 32px', borderTop: '1px solid rgba(255,255,255,.08)', borderBottom: '1px solid rgba(255,255,255,.08)' },
  statsInner: { maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 28 },
  stat: { background: '#0A0A0A', border: '1px solid rgba(255,255,255,.1)', borderRadius: 16, padding: 32, textAlign: 'center', boxShadow: '0 0 0 1px rgba(255,20,147,.12), 0 0 40px rgba(155,48,255,.12)' },
  statNum: { fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 64, lineHeight: 1, color: '#fff' },
  statLbl: { fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 12, letterSpacing: '.08em', textTransform: 'uppercase', color: '#fff', marginTop: 12 },
};
// StatCard, counts up when scrolled into view
const StatCard = ({ target, suffix, label, delay }) => {
  const ref = React.useRef(null);
  const [value, setValue] = React.useState(0);
  const [started, setStarted] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting && !started) setStarted(true); });
    }, { threshold: 0.4 });
    io.observe(el); return () => io.disconnect();
  }, [started]);
  React.useEffect(() => {
    if (!started) return;
    const duration = 1800; const startT = performance.now() + delay;
    let raf;
    const tick = (now) => {
      const t = Math.max(0, Math.min(1, (now - startT) / duration));
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(target * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, target, delay]);
  const format = (n) => {
    if (suffix === 'M+') return n.toString();
    if (n >= 1000) return (n / 1000).toFixed(n % 1000 === 0 ? 0 : 1).replace(/\.0$/, '') + 'K';
    return n.toString();
  };
  return (
    <div ref={ref} style={heroStyles.stat}>
      <div style={heroStyles.statNum}>
        {format(value)}<span style={{ color: '#FF1493' }}>{suffix}</span>
      </div>
      <div style={heroStyles.statLbl}>{label}</div>
    </div>
  );
};

window.Hero = Hero;
