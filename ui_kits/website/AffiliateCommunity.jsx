// AffiliateCommunity.jsx, the 8K+ community band w/ avatar wall + Discord hook
const AffiliateCommunity = ({ lang }) => {
  const t = {
    en: {
      eyebrow: '// THE COMMUNITY',
      h: '8,000+ creators.\nOne Discord.',
      sub: 'Brand drops, sample requests, content Q&A, and live coaching in one Discord. English, Spanish, and Chinese support from WEM.',
      features: [
        { icon: 'message-square', label: 'Exclusive collaborations & sample alerts' },
        { icon: 'video', label: 'Weekly 1:1 content reviews' },
        { icon: 'shield-check', label: 'Violation + appeals help desk' },
        { icon: 'trending-up', label: 'Trending sound & hook library' },
      ],
      cta: 'Join our Discord',
      learn: 'Why creator community matters for brands →',
      stats: [['8K+','Fellow creators'], ['24/7','Community access'], ['3', 'EN · ES · 中文 support']],
      status: 'online',
    },
    zh: {
      eyebrow: '// 达人社群',
      h: '8,000+ 达人\n一起交流合作',
      sub: '在 Discord 里，你可以看到品牌公告、寄样提醒和佣金活动，也可以和其他创作者交流选品、内容、直播和账号问题。英文、西语、中文都有支持。',
      features: [
        { icon: 'message-square', label: '品牌合作和寄样提醒' },
        { icon: 'video', label: '短视频和直播交流' },
        { icon: 'shield-check', label: '账号问题和申诉建议' },
        { icon: 'trending-up', label: '热门声音和 hook 参考' },
      ],
      cta: '加入 Discord',
      learn: '达人社群为什么对品牌有价值 →',
      stats: [['8K+','创作者交流'], ['24/7','社群支持'], ['3', '英西中支持']],
      status: '在线',
    },
    ko: {
      eyebrow: '// 크리에이터 커뮤니티',
      h: '8,000+ 크리에이터.\n하나의 Discord.',
      sub: '브랜드 론치, 샘플 신청, 콘텐츠 Q&A와 라이브 코칭을 한 Discord에서 만나보세요. WEM이 영어, 스페인어, 중국어로 지원합니다.',
      features: [
        { icon: 'message-square', label: '단독 협업 및 샘플 알림' },
        { icon: 'video', label: '주간 1:1 콘텐츠 리뷰' },
        { icon: 'shield-check', label: '위반 및 이의 제기 지원' },
        { icon: 'trending-up', label: '트렌드 음원 및 훅 라이브러리' },
      ],
      cta: 'Discord 참여하기',
      learn: '크리에이터 커뮤니티가 브랜드에 중요한 이유 →',
      stats: [['8K+','동료 크리에이터'], ['24/7','커뮤니티 이용'], ['3', '영어 · 스페인어 · 중국어 지원']],
      status: '온라인',
    },
  }[lang];
  // Fake handle strings for avatar wall, no real PII.
  const handles = [
    ['@mia.styles', '#FF1493'], ['@jayseattle', '#9B30FF'], ['@evie.tries', '#4A8FFF'],
    ['@ohsokai', '#4A8FFF'], ['@leoxbeauty', '#FF6B9D'], ['@tate.reviews', '#5865F2'],
    ['@ruby.living', '#4A8FFF'], ['@deezeats', '#FF1493'], ['@noor.home', '#9B30FF'],
    ['@bee.mua', '#4A8FFF'], ['@sam.wearsit', '#FF6B9D'], ['@kai.kitchen', '#4A8FFF'],
  ];
  return (
    <section style={acStyles.wrap} className="ac-wrap">
      <style>{`
        @media (max-width: 760px) {
          .ac-wrap { padding: 82px 20px !important; max-width: 100vw !important; overflow-x: hidden !important; }
          .ac-inner { grid-template-columns: 1fr !important; gap: 34px !important; max-width: 100% !important; overflow: hidden !important; }
          .ac-left, .ac-right { max-width: 100% !important; min-width: 0 !important; }
          .ac-heading { font-size: clamp(44px, 13vw, 58px) !important; line-height: .96 !important; letter-spacing: 0 !important; }
          .ac-sub { font-size: 16px !important; line-height: 1.5 !important; }
          .ac-list { margin: 26px 0 30px !important; }
          .ac-avatars { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; gap: 8px !important; }
          .ac-chip { padding: 10px 10px !important; min-width: 0 !important; border-radius: 12px !important; }
          .ac-chip:nth-child(n+7) { display: none !important; }
          .ac-dot { width: 24px !important; height: 24px !important; }
          .ac-handle { font-size: 11px !important; min-width: 0 !important; }
          .ac-status { display: none !important; }
          .ac-stats { grid-template-columns: repeat(3, minmax(0, 1fr)) !important; gap: 8px !important; margin-top: 14px !important; }
          .ac-stat { padding: 14px 10px !important; min-width: 0 !important; }
          .ac-stat-n { font-size: 26px !important; }
          .ac-stat-l { font-size: 9px !important; line-height: 1.2 !important; letter-spacing: .04em !important; }
          .ac-btn { width: 100% !important; justify-content: center !important; }
        }
      `}</style>
      <div style={acStyles.inner} className="ac-inner">
        <div style={acStyles.left} className="ac-left">
          <div style={acStyles.eyebrow}>{t.eyebrow}</div>
          <h2 style={acStyles.h} className="ac-heading">{t.h.split('\n').map((l,i)=><span key={i}>{l}<br/></span>)}</h2>
          <p style={acStyles.sub} className="ac-sub">{t.sub}</p>
          <ul style={acStyles.list} className="ac-list">
            {t.features.map((f, i) => (
              <li key={i} style={acStyles.li}>
                <div style={acStyles.liIcon}><i data-lucide={f.icon} style={{ width: 18, height: 18, color: '#000' }}/></div>
                <span style={acStyles.liTxt}>{f.label}</span>
              </li>
            ))}
          </ul>
          <a href={window.DISCORD_URL} target="_blank" rel="noopener" style={acStyles.btn} className="ac-btn">
            <svg width="22" height="22" viewBox="0 0 127.14 96.36" fill="#fff"><path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"/></svg>
            {t.cta}
          </a>
          <div style={{ marginTop: 18 }}>
            <a href={`/blog/tiktok-shop-creator-community-brand-growth${lang === 'zh' ? '?lang=zh' : ''}`} style={acStyles.learn}>{t.learn}</a>
          </div>
        </div>
        <div style={acStyles.right} className="ac-right">
          <div style={acStyles.avatars} className="ac-avatars">
            {handles.map(([h, c], i) => (
              <div key={i} style={{ ...acStyles.chip, animationDelay: `${i * 0.12}s` }} className="ac-chip">
                <div style={{ ...acStyles.dot, background: c }} className="ac-dot"/>
                <span style={acStyles.handle} className="ac-handle">{h}</span>
                <div style={acStyles.status} className="ac-status">{t.status}</div>
              </div>
            ))}
          </div>
          <div style={acStyles.statsRow} className="ac-stats">
            {t.stats.map(([n, l], i) => (
              <div key={i} style={acStyles.statBox} className="ac-stat">
                <div style={acStyles.statN} className="ac-stat-n">{n}</div>
                <div style={acStyles.statL} className="ac-stat-l">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
const acStyles = {
  wrap: { background: '#0A0A0A', color: '#fff', padding: '120px 32px', borderTop: '1px solid rgba(255,255,255,.08)', borderBottom: '1px solid rgba(255,255,255,.08)' },
  inner: { maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' },
  left: { maxWidth: 560 },
  eyebrow: { fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '.12em', color: '#FF1493', fontWeight: 700, marginBottom: 20 },
  h: { fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(52px, 6.5vw, 92px)', lineHeight: .98, letterSpacing: '-.01em', textTransform: 'uppercase', margin: 0 },
  sub: { fontFamily: 'var(--font-sans)', fontSize: 18, lineHeight: 1.5, color: 'rgba(255,255,255,.7)', marginTop: 24 },
  list: { listStyle: 'none', padding: 0, margin: '32px 0 40px', display: 'grid', gap: 14 },
  li: { display: 'flex', alignItems: 'center', gap: 14 },
  liIcon: { width: 32, height: 32, borderRadius: 10, background: '#4A8FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 },
  liTxt: { fontFamily: 'var(--font-sans)', fontSize: 16, fontWeight: 600, color: '#fff' },
  btn: { display: 'inline-flex', alignItems: 'center', gap: 12, background: '#5865F2', color: '#fff', padding: '16px 28px', borderRadius: 999, fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: 16, letterSpacing: '.04em', textTransform: 'uppercase', cursor: 'pointer', textDecoration: 'none' },
  learn: { color: '#FF1493', fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 14, textDecoration: 'none' },
  right: { position: 'relative' },
  avatars: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 },
  chip: { background: '#000', border: '1px solid rgba(255,255,255,.12)', borderRadius: 14, padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 12 },
  dot: { width: 32, height: 32, borderRadius: 999, flexShrink: 0, boxShadow: '0 0 20px currentColor' },
  handle: { fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 700, color: '#fff', flex: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' },
  status: { fontFamily: 'var(--font-mono)', fontSize: 10, color: '#4A8FFF', textTransform: 'uppercase', letterSpacing: '.08em', fontWeight: 700 },
  statsRow: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, marginTop: 20 },
  statBox: { background: '#000', border: '1px solid rgba(255,255,255,.1)', borderRadius: 12, padding: 18, textAlign: 'center' },
  statN: { fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 32, color: '#FF1493', lineHeight: 1 },
  statL: { fontFamily: 'var(--font-sans)', fontSize: 10, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,.6)', marginTop: 8 },
};
window.AffiliateCommunity = AffiliateCommunity;
