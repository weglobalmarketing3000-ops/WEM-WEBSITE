// FeaturedCase.jsx, featured case study blocks (parameterized)
const CASES = [
  {
    tag_en: 'CASE #01 · WELLNESS',
    tag_zh: '案例 #01 · 健康保健',
    title_en: 'Full-Funnel Affiliate.\n90 Days to Viral.',
    title_zh: '90 天把新品\n推成爆款',
    body_en: 'Ran seeding, paid, LIVE, and top-GMV creator layers in parallel from day one. Turned a wellness product that needs education into a platform-wide breakout.',
    body_zh: '这个健康产品卖点不简单，用户需要先理解，才会愿意下单。我们没有慢慢等内容发酵，而是从第一天就同时做达人种草、付费放大、直播带货和头部达人合作，把复杂卖点讲成美国用户看得懂的内容。',
    stats_en: [
      { kind: 'num', num: 10000, suffix: '+', label: 'Creators sampled in month 1' },
      { kind: 'num', num: 33000, suffix: '+', label: 'Affiliate videos in 90 days' },
      { kind: 'num', num: 4.7,   suffix: 'M', label: 'Views on a single hero video', decimals: 1 },
      { kind: 'num', num: 150,   suffix: 'K+', label: 'Monthly GMV by month 5', prefix: '$' },
    ],
    stats_zh: [
      { kind: 'num', num: 10000, suffix: '+', label: '首月联系达人' },
      { kind: 'num', num: 33000, suffix: '+', label: '90 天达人内容' },
      { kind: 'num', num: 4.7,   suffix: 'M', label: '单条视频播放', decimals: 1 },
      { kind: 'num', num: 150,   suffix: 'K+', label: '第 5 个月销售额', prefix: '$' },
    ],
    pull_en: 'In education-heavy categories, sequential creator strategies lose. Parallel ones compound.',
    pull_zh: '需要教育用户的产品，不能只靠一条爆款。达人、内容、直播和广告要一起跑，数据才会叠起来。',
    video: '../../assets/case-wellness-hero.mp4',
    creatorHandle: 'Creator S',
    creatorMeta_en: '4.7M views · hero video',
    creatorMeta_zh: '470 万播放 · 爆款内容',
    flip: false,
  },
  {
    tag_en: 'CASE #02 · BEAUTY',
    tag_zh: '案例 #02 · 美妆品类',
    title_en: 'Breaking a Stalled\nGMV Ceiling in 30 Days.',
    title_zh: '30 天打破\n销售停滞',
    body_en: 'Beauty brand plateaued for months despite strong reviews and proven product-market fit. WEM restructured the hero-product strategy, scaled creator seeding, and unified content direction around a single problem-solution narrative. The ceiling broke in one month.',
    body_zh: '这个美妆品牌产品评价不错，但 TikTok Shop 销售几个月没有明显增长。我们重新梳理主推品，扩大达人种草，并把内容统一到一个清楚的痛点和卖点。30 天后，销售重新动起来。',
    stats_en: [
      { kind: 'num', num: 982, suffix: 'K', label: 'GMV in a single month', prefix: '$' },
      { kind: 'num', num: 215, suffix: '%+', label: 'Month-over-month growth' },
      { kind: 'check', label: 'Hero product strategy\nfully restructured' },
      { kind: 'check', label: 'One unified narrative\nacross all creators' },
    ],
    stats_zh: [
      { kind: 'num', num: 982, suffix: 'K', label: '单月销售额', prefix: '$' },
      { kind: 'num', num: 215, suffix: '%+', label: '月环比增长' },
      { kind: 'check', label: '重做主推品\n打法' },
      { kind: 'check', label: '统一达人\n内容方向' },
    ],
    pull_en: 'Plateaus are almost never a creator-volume problem. They are a story dilution problem.',
    pull_zh: '很多品牌不是缺达人，而是每个人都在讲不同的卖点。说法统一后，内容才会形成合力。',
    video: null,
    media: 'dashboards',
    dashboards: {
      before: { src: '../../assets/case2-before-feb.png', label_en: 'BEFORE · FEB 2025', label_zh: '优化前 · 2025 年 2 月', stat_en: '$312K GMV', stat_zh: '$312K 销售额' },
      after:  { src: '../../assets/case2-after-mar.png',  label_en: 'AFTER · MAR 2025',  label_zh: '优化后 · 2025 年 3 月', stat_en: '$982K GMV', stat_zh: '$982K 销售额' },
    },
    creatorHandle: 'Beauty DTC brand',
    creatorMeta_en: 'Hero product relaunch',
    creatorMeta_zh: '主推品重新启动',
    flip: true,
  },
  {
    tag_en: 'CASE #03 · MEN’S FASHION',
    tag_zh: '案例 #03 · 男装',
    title_en: 'Unlocking an Underbuilt\nCategory. Cold Start to 10K.',
    title_zh: '冷门男装\n跑出 10K+ 订单',
    body_en: 'Six months on the platform with no meaningful traction. Men’s fashion is an underbuilt category on TikTok Shop with limited creator supply. WEM unlocked scale through diversified creator casting, listing optimization, and hero-content engineering designed for algorithmic lift.',
    body_zh: '品牌上线六个月，销售一直没有起色。男装在美国 TikTok Shop 上本来就不是成熟品类，达人少，内容模板也少。我们先拓宽达人类型，再优化商品页和内容角度，终于把订单跑起来。',
    stats_en: [
      { kind: 'num', num: 10000, suffix: '+', label: 'Orders after relaunch' },
      { kind: 'num', num: 5.1,   suffix: 'M', label: 'Views on one hero video', decimals: 1 },
      { kind: 'check', label: 'Diversified creator casting\nacross broader audience' },
      { kind: 'check', label: 'Creator-first launch\nwith minimal paid spend' },
    ],
    stats_zh: [
      { kind: 'num', num: 10000, suffix: '+', label: '重启后订单数' },
      { kind: 'num', num: 5.1,   suffix: 'M', label: '单条视频播放', decimals: 1 },
      { kind: 'check', label: '拓宽达人类型\n找到新受众' },
      { kind: 'check', label: '先跑达人内容\n再加预算' },
    ],
    pull_en: 'In underbuilt categories, scale is unlocked by broadening the creator pool, not narrowing it.',
    pull_zh: '冷门品类先别急着砸广告。先找到会买的人，再放大有效内容。',
    video: '../../assets/case3-zayndeals.mp4',
    media: 'phone',
    creatorHandle: '@zayndeals',
    creatorMeta_en: '5.1M views · hero video',
    creatorMeta_zh: '510 万播放 · 爆款内容',
    flip: false,
  },
];

const CASE_ACCENTS = ['#FF1493', '#4A8FFF', '#9B30FF']; // pink / blue / purple

const FeaturedCase = ({ lang }) => {
  const h = {
    en: {
      anchor: 'OUR WORK',
      kicker: 'FULL-SERVICE CASE STUDIES',
      h2a: 'We run the whole',
      h2b: 'playbook.',
      sub: 'End-to-end engagements where WEM owns strategy, creators, content, and shop operations.',
    },
    zh: {
      anchor: '案例',
      kicker: '美国 TikTok Shop 增长案例',
      h2a: '内容要好看，',
      h2b: '更要能卖。',
      sub: '我们负责策略、达人、内容、直播和店铺运营，目标很简单：让品牌在美国少试错，更快看到真实销售。',
    },
  }[lang];
  return (
    <section id="Our Work" style={fcStyles.wrap}>
      <div style={fcStyles.orb}/>
      <div style={fcStyles.inner}>
        <div style={fcStyles.sectionHead}>
          <div style={fcStyles.anchor}>{h.anchor}</div>
          <div style={fcStyles.kicker}>{h.kicker}</div>
          <h2 style={fcStyles.sectionH2}>
            <span>{h.h2a}</span><br/>
            <span style={fcStyles.sectionH2grad}>{h.h2b}</span>
          </h2>
          <p style={fcStyles.sectionSub}>{h.sub}</p>
        </div>
        {CASES.map((c, idx) => <CaseBlock key={idx} c={c} lang={lang} last={idx === CASES.length - 1} accent={CASE_ACCENTS[idx % CASE_ACCENTS.length]}/>)}
      </div>
    </section>
  );
};

const CaseBlock = ({ c, lang, last, accent }) => {
  const tag = lang === 'en' ? c.tag_en : c.tag_zh;
  const title = lang === 'en' ? c.title_en : c.title_zh;
  const body = lang === 'en' ? c.body_en : c.body_zh;
  const stats = lang === 'en' ? c.stats_en : c.stats_zh;
  const pull = lang === 'en' ? c.pull_en : c.pull_zh;
  const creatorMeta = lang === 'en' ? c.creatorMeta_en : c.creatorMeta_zh;
  const copy = (
    <div>
      <div style={{ ...fcStyles.tag, color: accent, background: `${accent}1f` }}>{tag}</div>
      <h2 style={fcStyles.h2}>
        {title.split('\n').map((l, i) => (
          <span
            key={i}
            style={i === 1
              ? (lang === 'zh'
                ? { color: accent, textShadow: `0 0 34px ${accent}55` }
                : { color: 'transparent', WebkitTextStroke: `2px ${accent}` })
              : {}}
          >
            {l}<br/>
          </span>
        ))}
      </h2>
      <p style={fcStyles.body}>{body}</p>
      <div style={{ ...fcStyles.pull, color: accent, textShadow: `0 0 40px ${accent}66` }}>{pull}</div>
    </div>
  );
  const mediaPhone = (
    <div style={fcStyles.right}>
      <div style={fcStyles.phoneWrap}>
        <div style={fcStyles.phone}>
          {c.video ? (
            <video style={fcStyles.video} src={c.video} autoPlay loop muted playsInline/>
          ) : (
            <div style={fcStyles.placeholder}>
              <div style={fcStyles.placeholderLabel}>{lang === 'en' ? 'CASE VIDEO' : '案例视频'}</div>
              <div style={fcStyles.placeholderSub}>{lang === 'en' ? 'Coming soon' : '即将上线'}</div>
            </div>
          )}
          <div style={fcStyles.phoneNotch}/>
        </div>
        <div style={fcStyles.creatorBadge}>
          <div style={{ ...fcStyles.creatorAvatar, background: `linear-gradient(135deg, ${accent}, #9B30FF)` }}/>
          <div>
            <div style={fcStyles.creatorHandle}>{c.creatorHandle}</div>
            <div style={fcStyles.creatorMeta}>{creatorMeta}</div>
          </div>
        </div>
      </div>
    </div>
  );
  const mediaDashboards = c.dashboards && (
    <div style={fcStyles.dashStack}>
      {['before', 'after'].map((k) => {
        const d = c.dashboards[k];
        const label = lang === 'en' ? d.label_en : d.label_zh;
        const stat  = lang === 'en' ? d.stat_en  : d.stat_zh;
        const isAfter = k === 'after';
        return (
          <div key={k} style={{ ...fcStyles.dashCard, ...(isAfter ? { boxShadow: `0 20px 50px rgba(0,0,0,.4), 0 0 0 1px ${accent}66, 0 0 60px ${accent}33` } : {}) }}>
            <div style={fcStyles.dashHead}>
              <div style={{ ...fcStyles.dashTag, ...(isAfter ? { color: '#fff', background: accent } : {}) }}>{label}</div>
              <div style={fcStyles.dashStat}>{stat}</div>
            </div>
            <img src={d.src} alt={label} style={fcStyles.dashImg}/>
          </div>
        );
      })}
      <div style={{ ...fcStyles.dashArrow, borderColor: accent, boxShadow: `0 0 30px ${accent}80` }}>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
      </div>
    </div>
  );
  const media = c.media === 'dashboards' ? mediaDashboards : mediaPhone;
  return (
    <div style={{ ...fcStyles.block, marginBottom: last ? 0 : 160 }}>
      <div style={fcStyles.top}>
        {c.flip ? <>{media}{copy}</> : <>{copy}{media}</>}
      </div>
      <div style={fcStyles.statsRow}>
        {stats.map((s, i) => (
          s.kind === 'num'
            ? <FcStat key={i} {...s} delay={i*120} accent={accent}/>
            : <FcCheck key={i} label={s.label} accent={accent}/>
        ))}
      </div>
    </div>
  );
};

const FcStat = ({ num, suffix='', prefix='', decimals=0, label, delay=0, accent='#FF1493' }) => {
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
      setValue(num * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, num, delay]);
  const format = (n) => {
    if (decimals > 0) return n.toFixed(decimals);
    if (n >= 1000) return Math.round(n / 1000) + 'K';
    return Math.round(n).toString();
  };
  return (
    <div ref={ref} style={fcStyles.stat}>
      <div style={fcStyles.statNum}>
        {prefix}{format(value)}<span style={{ color: accent }}>{suffix}</span>
      </div>
      <div style={fcStyles.statLbl}>{label}</div>
    </div>
  );
};

const FcCheck = ({ label, accent='#FF1493' }) => (
  <div style={fcStyles.stat}>
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6L9 17l-5-5"/>
    </svg>
    <div style={{ ...fcStyles.checkLbl }}>{label.split('\n').map((l,i)=><span key={i}>{l}<br/></span>)}</div>
  </div>
);

const fcStyles = {
  wrap: { position: 'relative', background: '#000', padding: '140px 0 100px', borderTop: '1px solid rgba(255,255,255,.08)', overflow: 'hidden' },
  orb: { position: 'absolute', top: '10%', left: -200, width: 600, height: 600, background: 'radial-gradient(circle, #FF1493 0%, transparent 60%)', filter: 'blur(100px)', opacity: .22, pointerEvents: 'none' },
  sectionHead: { maxWidth: 780, marginBottom: 100 },
  anchor: { fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.24em', color: '#FF1493', marginBottom: 32, textTransform: 'uppercase' },
  kicker: { fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: 12, letterSpacing: '.18em', color: 'rgba(255,255,255,.6)', marginBottom: 24, textTransform: 'uppercase' },
  sectionH2: { fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(56px, 6.5vw, 96px)', lineHeight: .98, letterSpacing: '-.005em', textTransform: 'uppercase', margin: 0, color: '#fff' },
  sectionH2grad: { background: 'linear-gradient(90deg, #FF1493 0%, #9B30FF 50%, #4A8FFF 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent' },
  sectionSub: { fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: 19, lineHeight: 1.5, color: 'rgba(255,255,255,.75)', marginTop: 24 },
  inner: { position: 'relative', maxWidth: 1280, margin: '0 auto', padding: '0 32px' },
  block: {},
  tag: { display: 'inline-block', fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: 12, letterSpacing: '.18em', color: '#FF1493', background: 'rgba(255,20,147,.12)', padding: '8px 16px', borderRadius: 999, marginBottom: 32 },
  top: { display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 80, alignItems: 'center' },
  h2: { fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(52px, 6.2vw, 92px)', lineHeight: .95, letterSpacing: '-.005em', textTransform: 'uppercase', margin: 0, color: '#fff' },
  body: { fontFamily: 'var(--font-sans)', fontSize: 19, lineHeight: 1.55, color: 'rgba(255,255,255,.8)', marginTop: 28, maxWidth: 580 },
  pull: { fontFamily: 'var(--font-sans)', fontStyle: 'italic', fontWeight: 600, fontSize: 22, lineHeight: 1.4, color: '#FF1493', margin: '40px 0 0', maxWidth: 560 },
  right: { display: 'flex', justifyContent: 'center' },
  phoneWrap: { position: 'relative' },
  phone: { position: 'relative', width: 280, height: 500, borderRadius: 40, border: '8px solid #1a1a1a', background: '#000', overflow: 'hidden', boxShadow: '0 0 0 1px rgba(255,20,147,.3), 0 40px 80px rgba(255,20,147,.15), 0 0 120px rgba(155,48,255,.25)' },
  video: { width: '100%', height: '100%', objectFit: 'cover', display: 'block' },
  placeholder: { width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #1a0033 0%, #4a0f66 100%)', color: '#fff' },
  placeholderLabel: { fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 22, letterSpacing: '.1em', textTransform: 'uppercase' },
  placeholderSub: { fontFamily: 'var(--font-mono)', fontSize: 11, color: 'rgba(255,255,255,.5)', marginTop: 6, letterSpacing: '.12em', textTransform: 'uppercase' },
  phoneNotch: { position: 'absolute', top: 8, left: '50%', transform: 'translateX(-50%)', width: 80, height: 22, borderRadius: 999, background: '#000', zIndex: 2 },
  creatorBadge: { position: 'absolute', bottom: 24, left: '50%', transform: 'translate(-50%, 50%)', background: '#0A0A0A', border: '1px solid rgba(255,255,255,.15)', borderRadius: 999, padding: '10px 18px 10px 10px', display: 'flex', alignItems: 'center', gap: 12, whiteSpace: 'nowrap', boxShadow: '0 12px 30px rgba(0,0,0,.6)' },
  creatorAvatar: { width: 36, height: 36, borderRadius: 999, background: 'linear-gradient(135deg, #FF1493, #9B30FF)' },
  creatorHandle: { fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: 13, color: '#fff' },
  creatorMeta: { fontFamily: 'var(--font-mono)', fontSize: 10, color: 'rgba(255,255,255,.6)', marginTop: 2 },
  statsRow: { marginTop: 56, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2, background: 'rgba(255,255,255,.08)', border: '1px solid rgba(255,255,255,.08)', borderRadius: 20, overflow: 'hidden' },
  stat: { background: '#141414', padding: '36px 28px' },
  statNum: { fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 44, lineHeight: 1, color: '#fff', letterSpacing: '-.01em' },
  statLbl: { fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 12, color: 'rgba(255,255,255,.6)', marginTop: 10, letterSpacing: '.04em', lineHeight: 1.4, textTransform: 'uppercase' },
  checkLbl: { fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 15, color: '#fff', marginTop: 14, lineHeight: 1.4 },

  // dashboard before/after stack
  dashStack: { position: 'relative', display: 'flex', flexDirection: 'column', gap: 20 },
  dashCard: { background: '#fff', borderRadius: 14, overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,.4), 0 0 0 1px rgba(255,255,255,.06)' },
  dashCardAfter: { boxShadow: '0 20px 50px rgba(0,0,0,.4), 0 0 0 1px rgba(255,20,147,.4), 0 0 60px rgba(255,20,147,.2)' },
  dashHead: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 18px', borderBottom: '1px solid #E5E7EB' },
  dashTag: { fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: 11, letterSpacing: '.14em', color: '#6B7280', background: '#F3F4F6', padding: '6px 12px', borderRadius: 999 },
  dashTagAfter: { color: '#fff', background: '#FF1493' },
  dashStat: { fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 20, lineHeight: 1, color: '#0A0A0A', letterSpacing: '-.01em' },
  dashImg: { width: '100%', display: 'block' },
  dashArrow: { position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', width: 56, height: 56, borderRadius: 999, background: '#000', border: '2px solid #FF1493', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 30px rgba(255,20,147,.5)' },
};
window.FeaturedCase = FeaturedCase;
