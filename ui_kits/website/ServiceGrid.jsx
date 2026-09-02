// ServiceGrid.jsx, service overview cards (dark)
const SG_ACCENTS = ['#FF1493', '#4A8FFF', '#9B30FF', '#FF1493', '#4A8FFF', '#9B30FF', '#4A8FFF', '#FF1493'];

const ServiceGrid = ({ lang }) => {
  const services = {
    en: [
      { icon: 'shopping-bag', title: 'Full-Service Management', sub: 'Shop ops, creators, content, live, reporting, and weekly growth management.', href: 'services.html#full-service-management' },
      { icon: 'rocket', title: 'Cold Start Launch', sub: 'Zero-to-one setup, creator seeding, content testing, and early sales signals.', href: 'services.html#cold-start' },
      { icon: 'messages-square', title: 'TikTok Shop Consulting', sub: 'Strategy guidance for logistics, launch planning, creator programs, and growth priorities.', href: 'services.html#consulting' },
      { icon: 'users', title: 'Creator Affiliate Management', sub: 'Creator sourcing, Affiliate Center follow-up, target collabs, samples, and reporting.', href: 'services.html#affiliate-management' },
      { icon: 'film', title: 'UGC Content', sub: 'Vetted creator videos for TikTok Shop, Amazon, DTC, ads, and product pages.', href: 'services.html#ugc-content' },
      { icon: 'sparkles', title: 'Creator Matchmaking', sub: 'Category-fit creator access and campaign activation support for in-house teams.', href: 'services.html#creator-matchmaking' },
      { icon: 'radio', title: 'Creator Live Selling', sub: 'Live host selection, flash-sale setup, scripts, moderator support, and recap.', href: 'services.html#creator-live' },
      { icon: 'video', title: 'Short Video Production', sub: 'Product short videos for TikTok Shop, Amazon, DTC pages, paid ads, and social content.', href: 'services.html#content-performance' },
    ],
    zh: [
      { icon: 'shopping-bag', title: '全案代运营', sub: '店铺、达人、内容、直播、数据复盘一起管理。', href: 'services.html#full-service-management' },
      { icon: 'rocket', title: '美国冷启动', sub: '从 setup、达人寄样、内容测试到早期销售信号。', href: 'services.html#cold-start' },
      { icon: 'messages-square', title: 'TikTok Shop 咨询顾问', sub: '物流、启动策略、达人策略和增长优先级建议。', href: 'services.html#consulting' },
      { icon: 'users', title: '达人联盟运营', sub: '达人拓展、Affiliate Center、target collabs、寄样和复盘。', href: 'services.html#affiliate-management' },
      { icon: 'film', title: 'UGC 内容生产', sub: '真实达人短视频，用于 TikTok Shop、Amazon、广告和商品页。', href: 'services.html#ugc-content' },
      { icon: 'sparkles', title: '达人精准匹配', sub: '帮 in-house 团队接入更多合适达人，更快启动 campaign。', href: 'services.html#creator-matchmaking' },
      { icon: 'radio', title: '达人直播带货运营', sub: '主播筛选、flash sale、moderator 和直播复盘。', href: 'services.html#creator-live' },
      { icon: 'video', title: '短视频拍摄服务', sub: '产品短视频拍摄，用于 TikTok Shop、Amazon、广告、DTC 和社媒。', href: 'services.html#content-performance' },
    ],
    ko: [
      { icon: 'shopping-bag', title: '풀서비스 운영', sub: '숍, 크리에이터, 콘텐츠, 라이브, 리포팅과 주간 성장을 통합 운영합니다.', href: '../services.html#full-service-management' },
      { icon: 'rocket', title: '콜드 스타트 론치', sub: '제로 투 원 세팅, 크리에이터 시딩, 콘텐츠 테스트와 초기 매출 신호를 만듭니다.', href: '../services.html#cold-start' },
      { icon: 'messages-square', title: 'TikTok Shop 컨설팅', sub: '물류, 론치, 크리에이터 프로그램과 성장 우선순위를 설계합니다.', href: '../services.html#consulting' },
      { icon: 'users', title: '크리에이터 어필리에이트 운영', sub: '크리에이터 발굴, Affiliate Center, 타깃 협업, 샘플과 리포팅을 관리합니다.', href: '../services.html#affiliate-management' },
      { icon: 'film', title: 'UGC 콘텐츠', sub: 'TikTok Shop, Amazon, DTC, 광고와 상품 페이지용 크리에이터 영상을 제작합니다.', href: '../services.html#ugc-content' },
      { icon: 'sparkles', title: '크리에이터 매칭', sub: '인하우스 팀을 위해 카테고리 적합도가 높은 크리에이터와 캠페인 활성화를 지원합니다.', href: '../services.html#creator-matchmaking' },
      { icon: 'radio', title: '크리에이터 라이브 판매', sub: '호스트 선정, 플래시 세일, 스크립트, 모더레이터와 사후 리뷰를 운영합니다.', href: '../services.html#creator-live' },
      { icon: 'video', title: '숏폼 영상 제작', sub: 'TikTok Shop, Amazon, DTC, 유료 광고와 소셜용 상품 영상을 제작합니다.', href: '../services.html#content-performance' },
    ],
  }[lang];
  const sub = lang === 'en' ? 'Hover a service to see where it fits, then jump into the full breakdown.' : lang === 'ko' ? '서비스가 필요한 상황을 확인하고 자세한 운영 범위를 살펴보세요.' : '鼠标放到卡片上看适合场景，点击进入服务总览页对应内容。';
  const learn = lang === 'en' ? 'Learn more' : lang === 'ko' ? '자세히 보기' : '了解更多';
  return (
    <section id="Services" style={sgStyles.wrap} className="service-grid-section">
      <style>{`
        @media (max-width: 760px) {
          .service-grid-section {
            padding: 78px 0 !important;
            max-width: 100vw !important;
            overflow: hidden !important;
          }
          .service-grid-inner {
            padding: 0 22px !important;
            max-width: 100% !important;
          }
          .service-grid-title {
            font-size: clamp(46px, 14vw, 64px) !important;
            line-height: .95 !important;
            letter-spacing: 0 !important;
          }
          .service-grid-sub {
            font-size: 16px !important;
            line-height: 1.55 !important;
            margin-bottom: 28px !important;
          }
          .svc-grid {
            grid-template-columns: 1fr !important;
            gap: 14px !important;
          }
          .svc-flip-card {
            min-height: 0 !important;
            height: auto !important;
            perspective: none !important;
          }
          .svc-flip-inner {
            min-height: 0 !important;
            height: auto !important;
            transform: none !important;
            transform-style: flat !important;
          }
          .svc-flip-front {
            display: none !important;
          }
          .svc-flip-back {
            position: relative !important;
            min-height: 0 !important;
            transform: none !important;
            backface-visibility: visible !important;
            padding: 22px 20px !important;
            border-radius: 16px !important;
          }
          .svc-flip-back-title {
            font-size: 11px !important;
          }
          .svc-flip-card-copy {
            font-size: 15px !important;
            line-height: 1.5 !important;
          }
        }
      `}</style>
      <div style={sgStyles.inner} className="service-grid-inner">
        <h2 style={sgStyles.h2} className="service-grid-title">
          <span>{lang === 'en' ? 'Our ' : ''}</span>
          <span style={sgStyles.h2grad}>{lang === 'en' ? 'services' : lang === 'ko' ? '서비스' : '服务'}</span>
          <span>.</span>
        </h2>
        <p style={sgStyles.sub} className="service-grid-sub">{sub}</p>
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
                    <div style={{ ...sgStyles.backTitle, color: c }} className="svc-flip-back-title">{s.title}</div>
                    <div style={sgStyles.cardSub} className="svc-flip-card-copy">{s.sub}</div>
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
