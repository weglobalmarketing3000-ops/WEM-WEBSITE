// PrecisionMatch.jsx, replaces IndustriesStrip on /showcase.html — proprietary matching system
const LazyMatchVideo = ({ src, label }) => {
  const wrapRef = React.useRef(null);
  const videoRef = React.useRef(null);
  const [shouldLoad, setShouldLoad] = React.useState(false);

  React.useEffect(() => {
    const node = wrapRef.current;
    if (!node || shouldLoad) return;
    if (!('IntersectionObserver' in window)) {
      setShouldLoad(true);
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setShouldLoad(true);
        observer.disconnect();
      }
    }, { rootMargin: '320px 0px' });
    observer.observe(node);
    return () => observer.disconnect();
  }, [shouldLoad]);

  React.useEffect(() => {
    if (shouldLoad && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [shouldLoad]);

  return (
    <div ref={wrapRef} style={pmStyles.videoCard}>
      {shouldLoad ? (
        <video ref={videoRef} style={pmStyles.video} src={src} autoPlay loop muted playsInline preload="none"/>
      ) : null}
      <div style={pmStyles.videoLabel}>{label}</div>
    </div>
  );
};

const PrecisionMatch = ({ lang }) => {
  const t = {
    en: {
      eye: '// PRECISION CREATOR MATCHING',
      h1: 'Not more creators.',
      h2: 'Better matches.',
      sub: 'TAP helps brands move beyond mass creator outreach. We use a structured scoring system to match creators by target audience, language, demographics, content category, GMV history, follower size, posting behavior, and campaign fit, then activate them through our vetted TikTok Shop creator community.',
      cards: [
        ['01', 'Audience Fit', 'Matched by target shopper profile, lifestyle signals, interests, and purchase intent.'],
        ['02', 'Language & Market Fit', 'Matched by English, Spanish, Chinese, multilingual content ability, and audience communication style.'],
        ['03', 'Demographic Alignment', 'Matched by cultural relevance, creator identity, audience demographics, and campaign goals.'],
        ['04', 'Content Category', 'Matched by niche, content format, product education ability, review style, and live selling fit.'],
        ['05', 'Commerce Signals', 'Matched by GMV history, posting rate, affiliate activity, conversion behavior, and product fit.'],
        ['06', 'Creator Tier & Scale', 'Matched by follower size, engagement quality, content consistency, niche authority, and budget fit.'],
      ],
      proof: 'Powered by our 8,000+ vetted TikTok Shop creator community.',
      showcase: {
        eye: 'CASE #04 · BEAUTY MATCHMAKING',
        title: 'Affordable Glow in a Week Set: one product, many creator fits.',
        result: '1,000+',
        resultLabel: 'creators activated',
        sub: 'For a $79.99 high-AOV skincare set, WEM built a creator pool across audience fit, language ability, demographic fit, content stage, and commerce signal instead of sending one generic brief to everyone.',
        videos: [
          ['assets/creator-matchmaking/affordable-glow-audience-test.mp4', 'Audience reach test'],
          ['assets/creator-matchmaking/glass-glow-vietnamese-creator.mp4', 'Product education test'],
          ['assets/creator-matchmaking/affordable-glow-language-market-test.mp4', 'Language-market angle'],
          ['assets/creator-matchmaking/affordable-glow-routine-proof-test.mp4', 'Routine proof test'],
        ],
        mixTitle: 'Activation mix',
        mix: [
          ['Audience expansion', 'Creator mix designed to expand reach across language markets, shopper profiles, and content comfort levels.'],
          ['TOF content', 'Texture shots, product visuals, and quick routines built for first-touch discovery.'],
          ['MOF content', 'Ingredient education, review angles, routine fit, and comparison content for consideration.'],
          ['BOF content', 'TikTok Shop conversion posts, offer framing, proof points, and purchase cues for high-intent shoppers.'],
        ],
        signals: ['Language ability', 'Audience fit', 'Demographic fit', 'TOF / MOF / BOF', 'Commerce signals', 'High-AOV fit'],
        proofs: [
          ['$100K GMV', 'Generated through creator activation across multiple shopper and content angles.'],
        ],
        note: 'A structured creator mix helps one SKU test multiple shopper contexts, languages, and funnel roles before scaling the winners.',
      },
      ctaH: 'Need creators who actually fit your product?',
      ctaBtn: "Let's build your creator match strategy →",
      cardTag: 'MATCH PARAM',
    },
    zh: {
      eye: '// 精准达人匹配',
      h1: '达人不是越多越好。',
      h2: '关键是选得准。',
      sub: '我们不建议品牌一上来就广撒网。先看目标买家是谁，再看语言、文化背景、内容品类、历史销售表现、发布习惯和预算，把更可能带来订单的达人筛出来。',
      cards: [
        ['01', '目标买家', '达人受众是否接近你的真实买家，包括生活方式、兴趣和购买动机。'],
        ['02', '语言市场', '英语、西语、中文和多语内容能力，都会影响美国用户愿不愿意相信。'],
        ['03', '人群文化', '达人身份、受众结构和文化语境，要和品牌想卖给的人对得上。'],
        ['04', '内容品类', '看达人是否真的会讲这类产品，能不能做测评、开箱、教程或直播。'],
        ['05', '销售信号', '参考历史销售表现、发布率、联盟活跃度和产品适配度。'],
        ['06', '预算规模', '粉丝量不是唯一标准。互动质量、稳定性和预算更重要。'],
      ],
      proof: '基于 8,000+ TikTok Shop 达人社群和真实合作经验。',
      showcase: {
        eye: 'CASE #04 · BEAUTY MATCHMAKING',
        title: 'Affordable Glow in a Week Set：一个产品，多种达人适配。',
        result: '1,000+',
        resultLabel: '达人激活',
        sub: '针对 $79.99 的高客单护肤套装，WEM 不是给所有达人发同一个 brief，而是按受众适配、语言能力、demographic、内容阶段和销售信号组合达人池。',
        videos: [
          ['assets/creator-matchmaking/affordable-glow-audience-test.mp4', 'Audience reach test'],
          ['assets/creator-matchmaking/glass-glow-vietnamese-creator.mp4', 'Product education test'],
          ['assets/creator-matchmaking/affordable-glow-language-market-test.mp4', 'Language-market angle'],
          ['assets/creator-matchmaking/affordable-glow-routine-proof-test.mp4', 'Routine proof test'],
        ],
        mixTitle: '激活组合',
        mix: [
          ['Audience expansion', '通过不同语言市场、购物人群和内容表达方式，扩大可测试的受众范围。'],
          ['TOF content', '质地展示、产品视觉和快速 routine，用于第一触点种草。'],
          ['MOF content', '成分教育、测评角度、护肤步骤适配和对比内容，用于考虑阶段。'],
          ['BOF content', 'TikTok Shop 转化内容、offer 表达、信任点和购买提示，用于高意向人群。'],
        ],
        signals: ['语言能力', '受众适配', '人群匹配', 'TOF / MOF / BOF', '销售信号', '高客单适配'],
        proofs: [
          ['$100K GMV', '通过多种购物人群和内容角度的达人激活产生销售。'],
        ],
        note: '结构化达人组合可以让一个 SKU 同时测试购物语境、语言市场和漏斗角色，再放大表现最好的角度。',
      },
      ctaH: '想找到真正适合你产品的美国达人？',
      ctaBtn: '定制达人匹配策略',
      cardTag: '匹配维度',
    },
  }[lang];
  return (
    <section style={pmStyles.wrap}>
      <div style={pmStyles.gridLines}/>
      <div style={pmStyles.inner}>
        <div style={pmStyles.eye}>{t.eye}</div>
        <h2 style={pmStyles.h}>
          <span style={pmStyles.hWhite}>{t.h1}</span><br/>
          <span style={pmStyles.hGrad}>{t.h2}</span>
        </h2>
        <p style={pmStyles.sub}>{t.sub}</p>
        <div style={pmStyles.grid}>
          {t.cards.map(([num, name, desc], i) => (
            <div key={i} style={pmStyles.card}>
              <div style={pmStyles.cardHead}>
                <span style={pmStyles.cardNum}>{num}</span>
                <span style={pmStyles.cardDot}/>
                <span style={pmStyles.cardTag}>{t.cardTag}</span>
              </div>
              <div style={pmStyles.cardName}>{name}</div>
              <div style={pmStyles.cardDesc}>{desc}</div>
              <div style={pmStyles.cardBar}>
                <div style={{ ...pmStyles.cardBarFill, width: `${65 + i * 5}%` }}/>
              </div>
            </div>
          ))}
        </div>
        <div style={pmStyles.proof}>
          <span style={pmStyles.proofPulse}/>
          {t.proof}
        </div>
        <div id="case-creator-matchmaking" style={pmStyles.showcase}>
          <div style={pmStyles.showcaseEye}>{t.showcase.eye}</div>
          <div style={pmStyles.showcaseLayout}>
            <div style={pmStyles.showcaseMain}>
              <h3 style={pmStyles.showcaseTitle}>{t.showcase.title}</h3>
              <div style={pmStyles.resultRow}>
                <div style={pmStyles.resultNum}>{t.showcase.result}</div>
                <div style={pmStyles.resultLabel}>{t.showcase.resultLabel}</div>
              </div>
              <p style={pmStyles.showcaseSub}>{t.showcase.sub}</p>
              <div style={pmStyles.signalWrap}>
                {t.showcase.signals.map((signal) => (
                  <span key={signal} style={pmStyles.signalPill}>{signal}</span>
                ))}
              </div>
            </div>
            <div style={pmStyles.mixPanel}>
              <div style={pmStyles.videoGrid}>
                {t.showcase.videos.map(([src, label]) => (
                  <LazyMatchVideo key={src} src={src} label={label}/>
                ))}
              </div>
              <div style={pmStyles.mixTitle}>{t.showcase.mixTitle}</div>
              {t.showcase.mix.map(([name, body], i) => (
                <div key={name} style={pmStyles.mixRow}>
                  <div style={pmStyles.mixIndex}>{String(i + 1).padStart(2, '0')}</div>
                  <div>
                    <div style={pmStyles.mixName}>{name}</div>
                    <div style={pmStyles.mixBody}>{body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={pmStyles.proofRow}>
            {t.showcase.proofs.map(([num, body]) => (
              <div key={num} style={pmStyles.proofCard}>
                <div style={pmStyles.proofNum}>{num}</div>
                <div style={pmStyles.proofBody}>{body}</div>
              </div>
            ))}
            <div style={pmStyles.showcaseNote}>{t.showcase.note}</div>
          </div>
        </div>
        <div style={pmStyles.ctaBlock}>
          <div style={pmStyles.ctaH}>{t.ctaH}</div>
          <a href="/#Contact" style={pmStyles.ctaBtn}>{t.ctaBtn}</a>
        </div>
      </div>
    </section>
  );
};
const pmStyles = {
  wrap: { position: 'relative', background: '#000', borderTop: '1px solid rgba(255,255,255,.08)', padding: '110px 32px 130px', overflow: 'hidden' },
  gridLines: { position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,20,147,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(155,48,255,.06) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none', opacity: .6 },
  inner: { position: 'relative', maxWidth: 1280, margin: '0 auto' },
  eye: { fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '.18em', fontWeight: 700, color: '#FF1493', marginBottom: 28 },
  h: { fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(56px, 7vw, 104px)', lineHeight: 1, letterSpacing: '-.01em', textTransform: 'uppercase', margin: 0 },
  hWhite: { color: '#fff' },
  hGrad: { background: 'linear-gradient(90deg, #FF1493 0%, #9B30FF 50%, #4A8FFF 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' },
  sub: { fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: 18, lineHeight: 1.55, color: 'rgba(255,255,255,.75)', maxWidth: 820, marginTop: 28 },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginTop: 64 },
  card: { background: '#0A0A0A', border: '1px solid rgba(255,255,255,.1)', borderRadius: 16, padding: 28, position: 'relative', boxShadow: '0 0 0 1px rgba(255,20,147,.08), 0 0 40px rgba(155,48,255,.08)' },
  cardHead: { display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 },
  cardNum: { fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700, color: '#FF1493', letterSpacing: '.12em' },
  cardDot: { width: 4, height: 4, borderRadius: '50%', background: '#FF1493', boxShadow: '0 0 8px #FF1493' },
  cardTag: { fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,.4)', letterSpacing: '.18em', textTransform: 'uppercase' },
  cardName: { fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 26, letterSpacing: '.01em', textTransform: 'uppercase', color: '#fff', lineHeight: 1.1 },
  cardDesc: { fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: 14, lineHeight: 1.5, color: 'rgba(255,255,255,.65)', marginTop: 14 },
  cardBar: { height: 3, background: 'rgba(255,255,255,.08)', borderRadius: 2, marginTop: 24, overflow: 'hidden' },
  cardBarFill: { height: '100%', background: 'linear-gradient(90deg, #FF1493, #9B30FF, #4A8FFF)', borderRadius: 2 },
  proof: { display: 'inline-flex', alignItems: 'center', gap: 10, marginTop: 56, padding: '12px 20px', borderRadius: 999, border: '1px solid rgba(255,20,147,.3)', background: 'rgba(255,20,147,.06)', fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,.85)', letterSpacing: '.04em' },
  proofPulse: { width: 8, height: 8, borderRadius: '50%', background: '#4A8FFF', boxShadow: '0 0 10px #4A8FFF, 0 0 20px rgba(74,143,255,.5)' },
  showcase: { marginTop: 34, padding: 34, border: '1px solid rgba(255,20,147,.22)', borderRadius: 22, background: 'linear-gradient(135deg, rgba(255,20,147,.09), rgba(74,143,255,.045) 58%, rgba(255,255,255,.025))', boxShadow: '0 24px 70px rgba(0,0,0,.32)', scrollMarginTop: 96 },
  showcaseEye: { display: 'inline-flex', alignItems: 'center', width: 'fit-content', maxWidth: '100%', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.18em', color: '#B86CFF', fontWeight: 900, marginBottom: 18, textTransform: 'uppercase', borderRadius: 999, padding: '10px 18px', background: 'rgba(155,48,255,.18)', border: '1px solid rgba(155,48,255,.22)' },
  showcaseLayout: { display: 'grid', gridTemplateColumns: '1.08fr .92fr', gap: 24, alignItems: 'stretch' },
  showcaseMain: { padding: 26, borderRadius: 18, border: '1px solid rgba(255,255,255,.1)', background: 'rgba(5,5,5,.68)' },
  showcaseTitle: { fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(36px, 4.4vw, 62px)', lineHeight: .96, letterSpacing: '.005em', textTransform: 'uppercase', color: '#fff', margin: 0 },
  resultRow: { display: 'flex', alignItems: 'end', gap: 18, marginTop: 24, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,.1)' },
  resultNum: { fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(72px, 9vw, 118px)', lineHeight: .82, color: '#fff', textShadow: '0 0 34px rgba(255,20,147,.35)' },
  resultLabel: { fontFamily: 'var(--font-mono)', fontWeight: 900, fontSize: 13, lineHeight: 1.25, letterSpacing: '.13em', color: '#4A8FFF', textTransform: 'uppercase', maxWidth: 190, paddingBottom: 6 },
  showcaseSub: { fontFamily: 'var(--font-sans)', fontSize: 16, lineHeight: 1.55, color: 'rgba(255,255,255,.72)', maxWidth: 760, margin: '22px 0 0' },
  signalWrap: { display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 22 },
  signalPill: { fontFamily: 'var(--font-mono)', fontWeight: 800, fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,.86)', border: '1px solid rgba(255,255,255,.13)', borderRadius: 999, padding: '8px 10px', background: 'rgba(255,255,255,.045)' },
  mixPanel: { padding: 22, borderRadius: 18, border: '1px solid rgba(74,143,255,.24)', background: 'linear-gradient(160deg, rgba(74,143,255,.11), rgba(0,0,0,.35))' },
  videoGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(112px, 1fr))', gap: 10, marginBottom: 18 },
  videoCard: { position: 'relative', minHeight: 218, aspectRatio: '9 / 14', borderRadius: 14, overflow: 'hidden', background: '#050505', border: '1px solid rgba(255,255,255,.12)', boxShadow: '0 18px 46px rgba(0,0,0,.35)' },
  video: { position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' },
  videoLabel: { position: 'absolute', left: 8, right: 8, bottom: 8, padding: '7px 8px', borderRadius: 999, background: 'rgba(0,0,0,.72)', border: '1px solid rgba(255,255,255,.14)', color: '#fff', fontFamily: 'var(--font-mono)', fontSize: 9, fontWeight: 900, letterSpacing: '.08em', lineHeight: 1.15, textTransform: 'uppercase', textAlign: 'center' },
  mixTitle: { fontFamily: 'var(--font-mono)', fontWeight: 900, fontSize: 12, letterSpacing: '.16em', color: '#FF1493', textTransform: 'uppercase', marginBottom: 14 },
  mixRow: { display: 'grid', gridTemplateColumns: '38px 1fr', gap: 12, padding: '14px 0', borderTop: '1px solid rgba(255,255,255,.09)' },
  mixIndex: { fontFamily: 'var(--font-mono)', fontWeight: 900, fontSize: 11, color: '#4A8FFF', paddingTop: 2 },
  mixName: { fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 24, lineHeight: 1, color: '#fff', textTransform: 'uppercase' },
  mixBody: { fontFamily: 'var(--font-sans)', fontSize: 13, lineHeight: 1.45, color: 'rgba(255,255,255,.64)', marginTop: 7 },
  proofRow: { display: 'grid', gridTemplateColumns: 'minmax(240px, .62fr) 1fr', gap: 12, marginTop: 12 },
  proofCard: { borderRadius: 16, border: '1px solid rgba(255,255,255,.1)', background: 'rgba(0,0,0,.34)', padding: 18 },
  proofNum: { fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 34, lineHeight: 1, color: '#fff' },
  proofBody: { fontFamily: 'var(--font-sans)', fontSize: 13, lineHeight: 1.45, color: 'rgba(255,255,255,.66)', marginTop: 9 },
  showcaseNote: { fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: 16, lineHeight: 1.38, color: '#fff', padding: 18, borderRadius: 16, border: '1px solid rgba(74,143,255,.32)', background: 'rgba(0,0,0,.28)' },
  ctaBlock: { marginTop: 56, padding: '40px 0 0', borderTop: '1px solid rgba(255,255,255,.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 24 },
  ctaH: { fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(24px, 2.5vw, 32px)', textTransform: 'uppercase', color: '#fff', letterSpacing: '.005em' },
  ctaBtn: { display: 'inline-flex', alignItems: 'center', padding: '18px 32px', borderRadius: 999, background: 'linear-gradient(90deg, #FF1493 0%, #9B30FF 100%)', color: '#fff', fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: 16, letterSpacing: '.04em', textTransform: 'uppercase', textDecoration: 'none', boxShadow: '0 0 30px rgba(255,20,147,.4)' },
};
window.PrecisionMatch = PrecisionMatch;
