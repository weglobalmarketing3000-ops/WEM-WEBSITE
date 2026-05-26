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
    body_en: 'Precision-matched creator delivered a 1.5M+ view hero video on the first drop. WEM doubled down within days with a comment-reply follow-up that hit 4.2M views.',
    body_zh: '精准匹配的达人首条视频即突破 150 万播放。WE 在数天内以评论回复跟进视频再度引爆，触达 420 万播放。',
    statKind: 'metric',
    stats_en: [
      { val: '1.5M+', label: 'Hero video views' },
      { val: '4.2M',  label: 'Follow-up views' },
      { val: '$10K+', label: 'Black Friday GMV' },
    ],
    stats_zh: [
      { val: '1.5M+', label: '爆款视频播放' },
      { val: '4.2M',  label: '跟进视频播放' },
      { val: '$10K+', label: '黑五 GMV' },
    ],
    pull_en: 'The right match is the moment. Speed to compound it is the system.',
    pull_zh: '对的匹配是时机，复利的速度是系统。',
  },
  {
    tag_en: 'MATCH #02 · SKINCARE',
    tag_zh: '匹配 #02 · 韩妆护肤',
    brand: 'Medicube',
    layout: 'grid',
    creators: [
      { handle: '@bedau18tuoine', lang: 'VI', video: '../../assets/match-medicube-1.mp4' },
      { handle: '@mackkosborne', lang: 'EN', video: '../../assets/match-medicube-2.mp4' },
      { handle: '@terrykaye',    lang: 'GENDER-DIVERSE', video: '../../assets/match-medicube-3.mp4' },
      { handle: 'LIVE session',   lang: 'LIVE', video: '../../assets/match-medicube-4.mp4' },
    ],
    body_en: 'WEM deployed a multilingual, multi-format creator network to scale Medicube across the U.S. market. The campaign spanned English, Spanish, and Vietnamese creators, LIVE and short video formats, and a gender-diverse roster. Top LIVE sessions converted 2,000+ units per SKU.',
    body_zh: 'WE 为 Medicube 部署多语言、多形式的达人网络，覆盖美国市场。活动涵盖英语、西班牙语、越南语达人，短视频与直播双轨并行，性别多元化阵容。头部直播单 SKU 转化 2,000+ 单。',
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
      { val: '2K+', label: '单 SKU 单量', sub: '头部直播' },
      { val: '多元', label: '达人阵容', sub: '性别 · 人群' },
    ],
    pull_en: 'The U.S. TikTok Shop market is segmented by language, format, and demographic. A diversified creator network is how brands reach all of it.',
    pull_zh: '美国 TikTok Shop 市场按语言、形式和人群高度切分。只有多元化的达人网络，才能触达全部。',
  },
];

const MATCH_ACCENTS = ['#FF1493', '#00E5FF', '#9B30FF', '#C6FF3D'];

const Matchmaking = ({ lang }) => {
  const t = {
    en: {
      kicker: 'CREATOR MATCHMAKING · QUICK WINS',
      h2a: 'Right creator.',
      h2b: 'Right moment.',
      sub: 'Precision matches that compound into breakout moments, without a full-service engagement.',
    },
    zh: {
      kicker: '达人匹配 · 单点突破',
      h2a: '对的达人，',
      h2b: '对的时机。',
      sub: '精准匹配，让单点合作放大为爆款瞬间，无需全托管投入。',
    },
  }[lang];
  return (
    <section style={mmStyles.wrap}>
      <div style={mmStyles.inner}>
        <div style={mmStyles.header}>
          <div style={mmStyles.kicker}>{t.kicker}</div>
          <h2 style={mmStyles.h2}>
            <span>{t.h2a}</span><br/>
            <span style={mmStyles.h2grad}>{t.h2b}</span>
          </h2>
          <p style={mmStyles.sub}>{t.sub}</p>
        </div>
        <div style={mmStyles.list}>
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
    <div style={mmStyles.card}>
      <div style={mmStyles.mediaSide}>
        {m.layout === 'grid' ? <VideoGrid m={m} accent={accent}/> : <VideoPolaroids m={m} accent={accent}/>}
      </div>
      <div style={mmStyles.body}>
        <div style={{ ...mmStyles.tag, color: accent, background: `${accent}1f` }}>{tag}</div>
        <div style={mmStyles.brand}>{m.brand}</div>
        <p style={mmStyles.bodyText}>{body}</p>
        {m.statKind === 'pill'
          ? <PillStats stats={stats} accent={accent}/>
          : <MetricStats stats={stats} accent={accent}/>}
        <div style={{ ...mmStyles.pull, color: accent, textShadow: `0 0 30px ${accent}66` }}>{pull}</div>
      </div>
    </div>
  );
};

const VideoPolaroids = ({ m, accent }) => (
  <div style={mmStyles.polaroidWrap}>
    {m.creators.map((c, i) => (
      <div key={i} style={{ ...mmStyles.polaroidFrame, transform: i === 1 ? 'rotate(3deg) translateY(20px)' : 'rotate(-2deg)', boxShadow: `0 20px 40px rgba(0,0,0,.5), 0 0 0 1px ${accent}40, 0 0 60px ${accent}26` }}>
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
  <div style={mmStyles.gridWrap}>
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
  <div style={mmStyles.statsRow3}>
    {stats.map((s, i) => (
      <div key={i}>
        <div style={{ ...mmStyles.statVal, color: i === 0 ? accent : '#fff' }}>{s.val}</div>
        <div style={mmStyles.statLbl}>{s.label}</div>
      </div>
    ))}
  </div>
);

const PillStats = ({ stats, accent }) => (
  <div style={mmStyles.statsRow4}>
    {stats.map((s, i) => (
      <div key={i} style={{ ...mmStyles.pillStat, borderColor: `${accent}33` }}>
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
          MORE CASES<br/>COMING
        </div>
      </div>
    </div>
    <div style={mmStyles.body}>
      <div style={{ ...mmStyles.tag, color: 'rgba(255,255,255,.5)', background: 'rgba(255,255,255,.06)' }}>NEXT MATCH</div>
      <div style={{ ...mmStyles.brand, color: 'rgba(255,255,255,.5)' }}>{lang === 'en' ? 'Your brand here.' : '你的品牌'}</div>
      <p style={mmStyles.bodyText}>{lang === 'en' ? 'More matchmaking wins are shipping soon.' : '更多精准匹配案例即将上线。'}</p>
    </div>
  </div>
);

const mmStyles = {
  wrap: { position: 'relative', background: '#000', padding: '80px 0 140px', overflow: 'hidden' },
  inner: { position: 'relative', maxWidth: 1280, margin: '0 auto', padding: '0 32px' },
  header: { maxWidth: 780, marginBottom: 64, paddingTop: 40, borderTop: '1px solid rgba(255,255,255,.08)' },
  kicker: { fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '.18em', color: 'rgba(255,255,255,.6)', marginBottom: 24, marginTop: 40 },
  h2: { fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(44px, 5.2vw, 76px)', lineHeight: .98, letterSpacing: '-.005em', textTransform: 'uppercase', margin: 0, color: '#fff' },
  h2grad: { background: 'linear-gradient(90deg, #00E5FF 0%, #9B30FF 60%, #FF1493 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent' },
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
