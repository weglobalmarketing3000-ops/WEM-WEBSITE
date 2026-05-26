// FeaturedCase.jsx, featured case study blocks (parameterized)
const CASES = [
  {
    tag_en: 'CASE #01 · WELLNESS',
    tag_zh: '案例 #01 · 健康品类',
    title_en: 'Full-Funnel Affiliate.\n90 Days to Viral.',
    title_zh: '全漏斗联盟\n90 天引爆平台',
    body_en: 'Ran seeding, paid, LIVE, and top-GMV creator layers in parallel from day one. Turned a wellness product that needs education into a platform-wide breakout.',
    body_zh: '从 Day 1 开始，并行推进种草、付费、直播和头部 GMV 达人四条线。把一个需要用户教育的健康产品，做成平台级爆款。',
    stats_en: [
      { kind: 'num', num: 10000, suffix: '+', label: 'Creators sampled in month 1' },
      { kind: 'num', num: 33000, suffix: '+', label: 'Affiliate videos in 90 days' },
      { kind: 'num', num: 4.7,   suffix: 'M', label: 'Views on a single hero video', decimals: 1 },
      { kind: 'num', num: 150,   suffix: 'K+', label: 'Monthly GMV by month 5', prefix: '$' },
    ],
    stats_zh: [
      { kind: 'num', num: 10000, suffix: '+', label: '首月触达达人数' },
      { kind: 'num', num: 33000, suffix: '+', label: '90 天联盟视频数' },
      { kind: 'num', num: 4.7,   suffix: 'M', label: '单条爆款视频播放量', decimals: 1 },
      { kind: 'num', num: 150,   suffix: 'K+', label: '第 5 个月月 GMV', prefix: '$' },
    ],
    pull_en: 'In education-heavy categories, sequential creator strategies lose. Parallel ones compound.',
    pull_zh: '在教育型品类里，串行达人策略会失败；并行策略会复利。',
    video: '../../assets/case-smitty.mp4',
    creatorHandle: '@shopwithsmitty',
    creatorMeta_en: '4.7M views · hero video',
    creatorMeta_zh: '470 万播放 · 爆款视频',
    flip: false,
  },
  {
    tag_en: 'CASE #02 · BEAUTY',
    tag_zh: '案例 #02 · 美妆品类',
    title_en: 'Breaking a Stalled\nGMV Ceiling in 30 Days.',
    title_zh: '30 天打破\nGMV 天花板',
    body_en: 'Beauty brand plateaued for months despite strong reviews and proven product-market fit. WEM restructured the hero-product strategy, scaled creator seeding, and unified content direction around a single problem-solution narrative. The ceiling broke in one month.',
    body_zh: '美妆品牌即使拥有良好口碑和验证过的产品市场契合度，仍然停滞数月。WE 重构了主推品策略，扩大达人种草规模，并统一所有内容方向到一条"问题-方案"叙事。一个月后，天花板被打破。',
    stats_en: [
      { kind: 'num', num: 982, suffix: 'K', label: 'GMV in a single month', prefix: '$' },
      { kind: 'num', num: 215, suffix: '%+', label: 'Month-over-month growth' },
      { kind: 'check', label: 'Hero product strategy\nfully restructured' },
      { kind: 'check', label: 'One unified narrative\nacross all creators' },
    ],
    stats_zh: [
      { kind: 'num', num: 982, suffix: 'K', label: '单月 GMV', prefix: '$' },
      { kind: 'num', num: 215, suffix: '%+', label: '月环比增长' },
      { kind: 'check', label: '主推品策略\n全面重构' },
      { kind: 'check', label: '所有达人\n统一叙事' },
    ],
    pull_en: 'Plateaus are almost never a creator-volume problem. They are a story dilution problem.',
    pull_zh: '平台期几乎从来不是达人数量问题，而是叙事稀释问题。',
    video: null,
    media: 'dashboards',
    dashboards: {
      before: { src: '../../assets/case2-before-feb.png', label_en: 'BEFORE · FEB 2025', label_zh: '之前 · 2025 年 2 月', stat_en: '$312K GMV', stat_zh: '$312K GMV' },
      after:  { src: '../../assets/case2-after-mar.png',  label_en: 'AFTER · MAR 2025',  label_zh: '之后 · 2025 年 3 月', stat_en: '$982K GMV', stat_zh: '$982K GMV' },
    },
    creatorHandle: 'Beauty DTC brand',
    creatorMeta_en: 'Hero product relaunch',
    creatorMeta_zh: '主推品重启',
    flip: true,
  },
  {
    tag_en: 'CASE #03 · MEN’S FASHION',
    tag_zh: '案例 #03 · 男装品类',
    title_en: 'Unlocking an Underbuilt\nCategory. Cold Start to 10K.',
    title_zh: '冷启动突破\n空白品类 10K 订单',
    body_en: 'Six months on the platform with no meaningful traction. Men’s fashion is an underbuilt category on TikTok Shop with limited creator supply. WEM unlocked scale through diversified creator casting, listing optimization, and hero-content engineering designed for algorithmic lift.',
    body_zh: '上线六个月仍无明显增长。男装在 TikTok Shop 属于供给空白品类，达人资源有限。WE 通过多元化达人选择、商品列表优化和面向算法的爆款内容工程，打开规模增长空间。',
    stats_en: [
      { kind: 'num', num: 10000, suffix: '+', label: 'Orders after relaunch' },
      { kind: 'num', num: 5.1,   suffix: 'M', label: 'Views on one hero video', decimals: 1 },
      { kind: 'check', label: 'Diversified creator casting\nacross broader audience' },
      { kind: 'check', label: 'Creator-first launch\nwith minimal paid spend' },
    ],
    stats_zh: [
      { kind: 'num', num: 10000, suffix: '+', label: '重启后总订单数' },
      { kind: 'num', num: 5.1,   suffix: 'M', label: '单条爆款视频播放量', decimals: 1 },
      { kind: 'check', label: '多元化达人选角\n拓宽目标受众' },
      { kind: 'check', label: '以达人为先的启动\n低付费投入' },
    ],
    pull_en: 'In underbuilt categories, scale is unlocked by broadening the creator pool, not narrowing it.',
    pull_zh: '在供给空白品类里，规模来自于拓宽达人池，而不是收窄。',
    video: '../../assets/case3-zayndeals.mp4',
    media: 'phone',
    creatorHandle: '@zayndeals',
    creatorMeta_en: '5.1M views · hero video',
    creatorMeta_zh: '510 万播放 · 爆款视频',
    flip: false,
  },
];

const CASE_ACCENTS = ['#FF1493', '#00E5FF', '#9B30FF']; // pink / cyan / purple

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
      kicker: '全托管 · 完整案例',
      h2a: '从策略到执行',
      h2b: '我们接管。',
      sub: '端到端合作：WE 负责策略、达人、内容和店铺运营。',
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
          <span key={i} style={i === 1 ? { color: 'transparent', WebkitTextStroke: `2px ${accent}` } : {}}>{l}<br/></span>
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
              <div style={fcStyles.placeholderLabel}>CASE VIDEO</div>
              <div style={fcStyles.placeholderSub}>Coming soon</div>
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
  sectionH2grad: { background: 'linear-gradient(90deg, #FF1493 0%, #9B30FF 50%, #00E5FF 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent' },
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
