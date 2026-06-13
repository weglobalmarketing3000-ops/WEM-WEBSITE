// ServiceGrid.jsx, service overview cards (dark)
const SG_ACCENTS = ['#FF1493', '#4A8FFF', '#9B30FF', '#FF1493', '#4A8FFF', '#9B30FF', '#4A8FFF', '#FF1493'];

const ServiceGrid = ({ lang }) => {
  const services = {
    en: [
      { icon: 'shopping-bag', title: 'Full-Service Management', sub: 'Shop ops, creators, content, live, reporting, and weekly growth management.', href: 'services#full-service-management' },
      { icon: 'rocket', title: 'Cold Start Launch', sub: 'Zero-to-one setup, creator seeding, content testing, and early sales signals.', href: 'services#cold-start' },
      { icon: 'messages-square', title: 'TikTok Shop Consulting', sub: 'Strategy guidance for logistics, launch planning, creator programs, and growth priorities.', href: 'services#consulting' },
      { icon: 'users', title: 'Creator Affiliate Management', sub: 'Creator sourcing, Affiliate Center follow-up, target collabs, samples, and reporting.', href: 'services#affiliate-management' },
      { icon: 'film', title: 'UGC Content', sub: 'Vetted creator videos for TikTok Shop, Amazon, DTC, ads, and product pages.', href: 'services#ugc-content' },
      { icon: 'sparkles', title: 'Creator Matchmaking', sub: 'Category-fit creator access and campaign activation support for in-house teams.', href: 'services#creator-matchmaking' },
      { icon: 'radio', title: 'Creator Live Selling', sub: 'Live host selection, flash-sale setup, scripts, moderator support, and recap.', href: 'services#creator-live' },
      { icon: 'video', title: 'Short Video Performance', sub: 'Data review, stronger briefs, content coaching, and short-video conversion feedback.', href: 'services#content-performance' },
    ],
    zh: [
      { icon: 'shopping-bag', title: '全案代运营', sub: '店铺、达人、内容、直播、数据复盘一起管理。', href: 'services#full-service-management' },
      { icon: 'rocket', title: '美国冷启动', sub: '从 setup、达人寄样、内容测试到早期销售信号。', href: 'services#cold-start' },
      { icon: 'messages-square', title: 'TikTok Shop 咨询顾问', sub: '物流、启动策略、达人策略和增长优先级建议。', href: 'services#consulting' },
      { icon: 'users', title: '达人联盟运营', sub: '达人拓展、Affiliate Center、target collabs、寄样和复盘。', href: 'services#affiliate-management' },
      { icon: 'film', title: 'UGC 内容生产', sub: '真实达人短视频，用于 TikTok Shop、Amazon、广告和商品页。', href: 'services#ugc-content' },
      { icon: 'sparkles', title: '达人精准匹配', sub: '帮 in-house 团队接入更多合适达人，更快启动 campaign。', href: 'services#creator-matchmaking' },
      { icon: 'radio', title: '达人直播带货运营', sub: '主播筛选、flash sale、脚本、moderator 和直播复盘。', href: 'services#creator-live' },
      { icon: 'video', title: '短视频带货优化', sub: '数据复盘、brief 优化、content coach 和转化建议。', href: 'services#content-performance' },
    ],
  }[lang];
  const sub = lang === 'en' ? 'Hover a service to see where it fits, then jump into the full breakdown.' : '鼠标放到卡片上看适合场景，点击进入服务总览页对应内容。';
  const learn = lang === 'en' ? 'Learn more' : '了解更多';
  return (
    <section id="Services" style={sgStyles.wrap}>
      <div style={sgStyles.inner}>
        <h2 style={sgStyles.h2}>
          <span>{lang === 'en' ? 'Our ' : ''}</span>
          <span style={sgStyles.h2grad}>{lang === 'en' ? 'services' : '服务'}</span>
          <span>.</span>
        </h2>
        <p style={sgStyles.sub}>{sub}</p>
        <div className="svc-grid" style={sgStyles.grid}>
          {services.map((s, i) => {
            const c = SG_ACCENTS[i % SG_ACCENTS.length];
            return (
              <a key={i} href={s.href} className="svc-flip-card" style={sgStyles.link} aria-label={`${learn}: ${s.title}`}>
                <div className="svc-flip-inner" style={sgStyles.flipInner}>
                  <div className="svc-flip-face svc-flip-front" style={{ ...sgStyles.face, ...sgStyles.front }}>
                    <i data-lucide={s.icon} style={{ width: 34, height: 34, color: c, strokeWidth: 2 }}/>
                    <div style={{ ...sgStyles.cardTitle, color: c }}>{s.title}</div>
                  </div>
                  <div className="svc-flip-face svc-flip-back" style={{ ...sgStyles.face, ...sgStyles.back, borderColor: `${c}66` }}>
                    <div style={{ ...sgStyles.backTitle, color: c }}>{s.title}</div>
                    <div style={sgStyles.cardSub}>{s.sub}</div>
                    <div style={{ ...sgStyles.learn, color: c }}>{learn} <span aria-hidden="true">→</span></div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
const sgStyles = {
  wrap: { background: '#000', padding: '140px 0' },
  inner: { maxWidth: 1280, margin: '0 auto', padding: '0 32px' },
  h2: { fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(60px, 7vw, 108px)', lineHeight: .95, letterSpacing: '-.005em', textTransform: 'uppercase', margin: '0 0 18px', color: '#fff' },
  h2grad: { background: 'linear-gradient(90deg, #FF1493 0%, #9B30FF 54%, #4A8FFF 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent' },
  sub: { fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 22, color: 'rgba(255,255,255,.85)', margin: '0 0 60px', maxWidth: 800 },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 },
  link: { display: 'block', minHeight: 250, color: '#fff', textDecoration: 'none', perspective: 1000 },
  flipInner: { position: 'relative', width: '100%', height: '100%', minHeight: 250, transition: 'transform .6s cubic-bezier(.2,.8,.2,1)', transformStyle: 'preserve-3d' },
  face: { position: 'absolute', inset: 0, minHeight: 250, background: '#0A0A0A', border: '1px solid rgba(255,255,255,.08)', borderRadius: 18, padding: 28, backfaceVisibility: 'hidden', display: 'flex', flexDirection: 'column', overflow: 'hidden' },
  front: { justifyContent: 'space-between' },
  back: { transform: 'rotateY(180deg)', justifyContent: 'space-between', boxShadow: '0 0 60px rgba(255,20,147,.12)' },
  cardTitle: { fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 34, lineHeight: 1, color: '#FF1493', textTransform: 'uppercase', letterSpacing: '.005em', margin: 0 },
  backTitle: { fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: 12, textTransform: 'uppercase', letterSpacing: '.09em', marginBottom: 14 },
  cardSub: { fontFamily: 'var(--font-sans)', fontSize: 15, lineHeight: 1.42, color: 'rgba(255,255,255,.82)' },
  learn: { fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 800, letterSpacing: '.06em', textTransform: 'uppercase', marginTop: 'auto', paddingTop: 18 },
};
window.ServiceGrid = ServiceGrid;
