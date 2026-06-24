// Matchmaking.jsx — creator matchmaking sub-section (compact cards)
const MATCHES = [
  {
    tag_en: 'MATCH #01 · BEAUTY',
    tag_zh: '匹配 #01 · 美妆',
    brand: 'SACHEU',
    layout: 'polaroid',
    creators: [
      { handle: '@zarinascart', video: '../../assets/match-sacheu-1.mp4' },
      { handle: '@zarinascart', video: '../../assets/match-sacheu-2.mp4' },
    ],
    creatorPill: '@zarinascart',
    body_en: 'Precision match, fast follow-up. The first creator hit 1.5M+ views; the comment-reply follow-up reached 4.2M.',
    body_zh: '我们匹配的首位达人发出第一条视频后，播放很快冲到 150 万。热度起来后，我们马上用评论回复视频接住流量，几天内又放大到 420 万播放。',
    statKind: 'metric',
    stats_en: [
      { val: '1.5M+', label: 'Hero video views' },
      { val: '4.2M',  label: 'Follow-up views' },
      { val: '$10K+', label: 'Black Friday GMV' },
    ],
    stats_zh: [
      { val: '1.5M+', label: '首条播放' },
      { val: '4.2M',  label: '跟进播放' },
      { val: '$10K+', label: '黑五销售额' },
    ],
    pull_en: 'The right match is the moment. Speed to compound it is the system.',
    pull_zh: '找对达人只是开始。真正拉开差距的是反应速度。',
  },
  {
    tag_en: 'MATCH #02 · SKINCARE',
    tag_zh: '匹配 #02 · 护肤品牌',
    brand: 'Medicube',
    layout: 'grid',
    creators: [
      { handle: '@bedau18tuoine', lang: 'VI', video: '../../assets/match-medicube-1.mp4' },
      { handle: '@mackkosborne', lang: 'EN', video: '../../assets/match-medicube-2.mp4' },
      { handle: '@terrykaye',    lang: 'GENDER-DIVERSE', video: '../../assets/match-medicube-3.mp4' },
      { handle: 'LIVE session',   lang: 'LIVE', video: '../../assets/match-medicube-4.mp4' },
    ],
    body_en: 'WEM scaled Medicube with multilingual creators, short video, live selling, and a broader audience mix. Top LIVE sessions converted 2,000+ units per SKU.',
    body_zh: '我们为 Medicube 在美国组织多语种达人合作，覆盖英语、西语和越南语内容，同时推进短视频和直播。头部直播里，单个 SKU 卖出 2,000 多单。',
    statKind: 'pill',
    stats_en: [
      { val: '3', label: 'Languages', sub: 'EN · ES · VI' },
      { val: '2', label: 'Formats',   sub: 'LIVE · Short' },
      { val: '2K+', label: 'Units / SKU', sub: 'Top LIVE' },
      { val: 'Diverse', label: 'Roster', sub: 'Gender · Demo' },
    ],
    stats_zh: [
      { val: '3', label: '语种', sub: '英 · 西 · 越' },
      { val: '2', label: '形式', sub: '直播 · 短视频' },
      { val: '2K+', label: '单 SKU 订单', sub: '头部直播' },
      { val: '多元', label: '达人组合', sub: '性别 · 人群' },
    ],
    pull_en: 'U.S. TikTok Shop is segmented by language, format, and demographic. Creator mix is the growth lever.',
    pull_zh: '美国市场不是一种人群。语言、文化和内容形式都对了，才有放量空间。',
  },
];

const MATCH_ACCENTS = ['#FF1493', '#4A8FFF', '#9B30FF', '#4A8FFF'];

const Matchmaking = ({ lang }) => {
  const t = {
    en: {
      kicker: 'CREATOR MATCHMAKING · QUICK WINS',
      h2a: 'Right creator.',
      h2b: 'Right moment.',
      sub: 'Precision matches that compound into breakout moments, without a full-service engagement.',
    },
    zh: {
      kicker: '达人匹配 · 先验证再放大',
      h2a: '先找对人，',
      h2b: '再放大内容。',
      sub: '适合想先试美国市场的品牌。不必一上来就全托管，先用精准达人合作验证产品、内容和受众。',
    },
  }[lang];
  return (
    <section style={mmStyles.wrap} className="matchmaking-section">
      <style>{`
        @media (max-width: 760px) {
          .matchmaking-section { padding: 64px 0 84px !important; max-width: 100vw !important; overflow: hidden !important; }
          .matchmaking-inner { padding: 0 20px !important; max-width: 100% !important; overflow: hidden !important; }
          .matchmaking-header { margin-bottom: 34px !important; padding-top: 24px !important; }
          .matchmaking-title { font-size: clamp(38px, 11vw, 52px) !important; line-height: .98 !important; letter-spacing: 0 !important; }
          .matchmaking-sub { font-size: 16px !important; line-height: 1.5 !important; }
          .matchmaking-list { gap: 18px !important; }
          .matchmaking-card { display: flex !important; flex-direction: column !important; gap: 22px !important; padding: 20px !important; border-radius: 18px !important; max-width: 100% !important; overflow: hidden !important; }
          .matchmaking-media { width: 100% !important; max-width: 100% !important; overflow: hidden !important; }
          .matchmaking-polaroids { gap: 8px !important; padding: 6px 0 14px !important; }
          .matchmaking-polaroid { width: min(132px, 37vw) !important; height: auto !important; aspect-ratio: 9 / 16 !important; border-width: 4px !important; border-radius: 16px !important; transform: none !important; }
          .matchmaking-grid { max-width: 100% !important; gap: 8px !important; }
          .matchmaking-body { min-width: 0 !important; }
          .matchmaking-tag { font-size: 11px !important; letter-spacing: .1em !important; padding: 8px 14px !important; }
          .matchmaking-brand { font-size: clamp(34px, 10vw, 46px) !important; }
          .matchmaking-copy { font-size: 15px !important; line-height: 1.52 !important; max-width: 100% !important; }
          .matchmaking-stats-3 { grid-template-columns: 1fr !important; gap: 12px !important; }
          .matchmaking-stats-4 { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; gap: 10px !important; }
          .matchmaking-pill-stat { min-width: 0 !important; padding: 12px !important; }
          .matchmaking-pull { font-size: 15px !important; line-height: 1.45 !important; }
        }
      `}</style>
      <div style={mmStyles.inner} className="matchmaking-inner">
        <div style={mmStyles.header} className="matchmaking-header">
          <div style={mmStyles.kicker}>{t.kicker}</div>
          <h2 style={mmStyles.h2} className="matchmaking-title">
            <span>{t.h2a}</span><br/>
            <span style={mmStyles.h2grad}>{t.h2b}</span>
          </h2>
          <p style={mmStyles.sub} className="matchmaking-sub">{t.sub}</p>
        </div>
        <div style={mmStyles.list} className="matchmaking-list">
          {MATCHES.map((m, i) => (
            <MatchCard key={i} m={m} lang={lang} accent={MATCH_ACCENTS[i % MATCH_ACCENTS.length]}/>
          ))}
          {MATCHES.length < 3 && <MatchPlaceholder lang={lang}/>}
        </div>
      </div>
    </section>
  );
};

const MatchCard = ({ m, lang, accent }) => {
  const tag   = lang === 'en' ? m.tag_en : m.tag_zh;
  const body  = lang === 'en' ? m.body_en : m.body_zh;
  const stats = lang === 'en' ? m.stats_en : m.stats_zh;
  const pull  = lang === 'en' ? m.pull_en : m.pull_zh;
  return (
    <div style={mmStyles.card} className="matchmaking-card">
      <div style={mmStyles.mediaSide} className="matchmaking-media">
        {m.layout === 'grid' ? <VideoGrid m={m} accent={accent}/> : <VideoPolaroids m={m} accent={accent}/>}
      </div>
      <div style={mmStyles.body} className="matchmaking-body">
        <div style={{ ...mmStyles.tag, color: accent, background: `${accent}1f` }} className="matchmaking-tag">{tag}</div>
        <div style={mmStyles.brand} className="matchmaking-brand">{m.brand}</div>
        <p style={mmStyles.bodyText} className="matchmaking-copy">{body}</p>
        {m.statKind === 'pill'
          ? <PillStats stats={stats} accent={accent}/>
          : <MetricStats stats={stats} accent={accent}/>}
        <div style={{ ...mmStyles.pull, color: accent, textShadow: `0 0 30px ${accent}66` }} className="matchmaking-pull">{pull}</div>
      </div>
    </div>
  );
};

const VideoPolaroids = ({ m, accent }) => (
  <div style={mmStyles.polaroidWrap} className="matchmaking-polaroids">
    {m.creators.map((c, i) => (
      <div key={i} style={{ ...mmStyles.polaroidFrame, transform: i === 1 ? 'rotate(3deg) translateY(20px)' : 'rotate(-2deg)', boxShadow: `0 20px 40px rgba(0,0,0,.5), 0 0 0 1px ${accent}40, 0 0 60px ${accent}26` }} className="matchmaking-polaroid">
        <video src={c.video} autoPlay loop muted playsInline style={mmStyles.video}/>
      </div>
    ))}
    <div style={{ ...mmStyles.creatorPill, borderColor: `${accent}80` }}>
      <div style={{ ...mmStyles.creatorDot, background: accent }}/>
      {m.creatorPill}
    </div>
  </div>
);

const VideoGrid = ({ m, accent }) => (
  <div style={mmStyles.gridWrap} className="matchmaking-grid">
    {m.creators.map((c, i) => (
      <div key={i} style={{ ...mmStyles.gridCell, boxShadow: `0 12px 30px rgba(0,0,0,.5), 0 0 0 1px ${accent}40` }}>
        <video src={c.video} autoPlay loop muted playsInline style={mmStyles.video}/>
        <div style={{ ...mmStyles.gridLabel, background: `${accent}E6` }}>
          <span style={mmStyles.gridLabelLang}>{c.lang}</span>
          <span style={mmStyles.gridLabelHandle}>{c.handle}</span>
        </div>
      </div>
    ))}
  </div>
);

const MetricStats = ({ stats, accent }) => (
  <div style={mmStyles.statsRow3} className="matchmaking-stats-3">
    {stats.map((s, i) => (
      <div key={i}>
        <div style={{ ...mmStyles.statVal, color: i === 0 ? accent : '#fff' }}>{s.val}</div>
        <div style={mmStyles.statLbl}>{s.label}</div>
      </div>
    ))}
  </div>
);

const PillStats = ({ stats, accent }) => (
  <div style={mmStyles.statsRow4} className="matchmaking-stats-4">
    {stats.map((s, i) => (
      <div key={i} style={{ ...mmStyles.pillStat, borderColor: `${accent}33` }} className="matchmaking-pill-stat">
        <div style={{ ...mmStyles.pillVal, color: accent }}>{s.val}</div>
        <div style={mmStyles.pillLbl}>{s.label}</div>
        <div style={mmStyles.pillSub}>{s.sub}</div>
      </div>
    ))}
  </div>
);

const MatchPlaceholder = ({ lang }) => (
  <div style={{ ...mmStyles.card, opacity: .35, borderStyle: 'dashed' }}>
    <div style={mmStyles.mediaSide}>
      <div style={{ ...mmStyles.polaroidFrame, transform: 'none', boxShadow: 'none', border: '2px dashed rgba(255,255,255,.2)', background: 'transparent', width: 220 }}>
        <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,.4)', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.1em', textAlign: 'center' }}>
          {lang === 'en' ? <>MORE CASES<br/>COMING</> : <>更多案例<br/>更新中</>}
        </div>
      </div>
    </div>
    <div style={mmStyles.body}>
      <div style={{ ...mmStyles.tag, color: 'rgba(255,255,255,.5)', background: 'rgba(255,255,255,.06)' }}>{lang === 'en' ? 'NEXT MATCH' : '下一个匹配案例'}</div>
      <div style={{ ...mmStyles.brand, color: 'rgba(255,255,255,.5)' }}>{lang === 'en' ? 'Your brand here.' : '下一个案例'}</div>
      <p style={mmStyles.bodyText}>{lang === 'en' ? 'More matchmaking wins are shipping soon.' : '更多美国达人匹配案例正在整理。'}</p>
    </div>
  </div>
);

const mmStyles = {
  wrap: { position: 'relative', background: '#000', padding: '80px 0 140px', overflow: 'hidden' },
  inner: { position: 'relative', maxWidth: 1280, margin: '0 auto', padding: '0 32px' },
  header: { maxWidth: 780, marginBottom: 64, paddingTop: 40, borderTop: '1px solid rgba(255,255,255,.08)' },
  kicker: { fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '.18em', color: 'rgba(255,255,255,.6)', marginBottom: 24, marginTop: 40 },
  h2: { fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(44px, 5.2vw, 76px)', lineHeight: .98, letterSpacing: '-.005em', textTransform: 'uppercase', margin: 0, color: '#fff' },
  h2grad: { background: 'linear-gradient(90deg, #4A8FFF 0%, #9B30FF 60%, #FF1493 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent' },
  sub: { fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: 19, lineHeight: 1.5, color: 'rgba(255,255,255,.75)', marginTop: 24 },
  list: { display: 'flex', flexDirection: 'column', gap: 32 },
  card: { display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: 48, alignItems: 'center', background: '#0A0A0A', border: '1px solid rgba(255,255,255,.1)', borderRadius: 24, padding: 40 },
  mediaSide: { display: 'flex', justifyContent: 'center' },

  // polaroid layout
  polaroidWrap: { position: 'relative', display: 'flex', gap: 16, justifyContent: 'center', padding: '20px 0' },
  polaroidFrame: { position: 'relative', width: 160, height: 284, borderRadius: 20, overflow: 'hidden', background: '#000', border: '5px solid #1a1a1a', flexShrink: 0, transition: 'transform .3s' },
  creatorPill: { position: 'absolute', bottom: -8, left: '50%', transform: 'translateX(-50%)', background: '#000', border: '1px solid', borderRadius: 999, padding: '8px 16px 8px 10px', display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-mono)', fontSize: 12, color: '#fff', whiteSpace: 'nowrap', zIndex: 3 },
  creatorDot: { width: 10, height: 10, borderRadius: 999 },

  // 2x2 grid layout
  gridWrap: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12, width: '100%', maxWidth: 360 },
  gridCell: { position: 'relative', aspectRatio: '9 / 16', borderRadius: 14, overflow: 'hidden', background: '#000' },
  gridLabel: { position: 'absolute', left: 8, right: 8, bottom: 8, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 2, padding: '6px 8px', borderRadius: 6, backdropFilter: 'blur(6px)' },
  gridLabelLang: { fontFamily: 'var(--font-mono)', fontSize: 9, fontWeight: 800, color: '#000', letterSpacing: '.12em' },
  gridLabelHandle: { fontFamily: 'var(--font-mono)', fontSize: 9, color: 'rgba(0,0,0,.75)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '100%' },

  video: { width: '100%', height: '100%', objectFit: 'cover', display: 'block' },

  body: {},
  tag: { display: 'inline-block', fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: 20, letterSpacing: '.12em', padding: '10px 22px', borderRadius: 999, marginBottom: 18 },
  brand: { fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 48, lineHeight: 1, letterSpacing: '-.01em', textTransform: 'uppercase', color: '#fff', margin: '0 0 16px' },
  bodyText: { fontFamily: 'var(--font-sans)', fontSize: 16, lineHeight: 1.55, color: 'rgba(255,255,255,.8)', margin: '0 0 24px', maxWidth: 560 },

  statsRow3: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, padding: '20px 0', borderTop: '1px solid rgba(255,255,255,.1)', borderBottom: '1px solid rgba(255,255,255,.1)' },
  statVal: { fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 28, lineHeight: 1, letterSpacing: '-.01em' },
  statLbl: { fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 11, color: 'rgba(255,255,255,.6)', marginTop: 8, letterSpacing: '.06em', textTransform: 'uppercase' },

  statsRow4: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10, marginTop: 8 },
  pillStat: { padding: '14px 14px', borderRadius: 12, border: '1px solid', background: 'rgba(255,255,255,.02)' },
  pillVal: { fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 24, lineHeight: 1, letterSpacing: '-.01em' },
  pillLbl: { fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 11, color: '#fff', marginTop: 8, letterSpacing: '.04em', textTransform: 'uppercase' },
  pillSub: { fontFamily: 'var(--font-mono)', fontSize: 10, color: 'rgba(255,255,255,.5)', marginTop: 4 },

  pull: { fontFamily: 'var(--font-sans)', fontStyle: 'italic', fontWeight: 600, fontSize: 16, lineHeight: 1.45, marginTop: 24, maxWidth: 560 },
};

window.Matchmaking = Matchmaking;
