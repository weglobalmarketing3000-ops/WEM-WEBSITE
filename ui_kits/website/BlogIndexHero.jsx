// BlogIndexHero.jsx, compact hero for /blog.html
const BlogIndexHero = ({ lang }) => {
  const t = {
    en: {
      pill: 'WE MARKETING BLOG',
      h1a: 'TikTok Shop insights',
      h1accent: 'for brands and sellers.',
      sub: 'Practical guides on TikTok Shop launch, agency selection, creator affiliates, UGC, live selling, product pages, and shop operations for brand and ecommerce teams.',
    },
    zh: {
      pill: 'WE MARKETING 博客',
      h1a: 'TikTok Shop 品牌与卖家',
      h1accent: '运营增长指南。',
      sub: '面向品牌方、Amazon 卖家、跨境团队和电商运营者，覆盖 TikTok Shop 启动、agency 选择、达人联盟、UGC、直播、商品页和店铺运营。',
    },
    ko: {
      pill: 'WE MARKETING 블로그',
      h1a: '브랜드와 셀러를 위한',
      h1accent: 'TikTok Shop 인사이트.',
      sub: '브랜드와 이커머스 팀을 위해 TikTok Shop 론치, 에이전시 선정, 크리에이터 어필리에이트, UGC, 라이브 판매, 상품 페이지와 숍 운영을 다루는 실무 가이드를 제공합니다.',
    },
  }[lang];
  return (
    <section style={bihStyles.wrap} className="blog-index-hero">
      <style>{`
        @media (max-width: 760px) {
          .blog-index-hero { max-width: 100vw !important; overflow: hidden !important; }
          .blog-index-inner { padding: 86px 20px 54px !important; max-width: 100% !important; }
          .blog-index-pill { font-size: 11px !important; padding: 9px 16px !important; }
          .blog-index-title { font-size: clamp(42px, 12vw, 56px) !important; line-height: .96 !important; letter-spacing: 0 !important; }
          .blog-index-sub { font-size: 16px !important; line-height: 1.52 !important; max-width: 100% !important; }
        }
      `}</style>
      <div style={bihStyles.orb}/>
      <div style={bihStyles.inner} className="blog-index-inner">
        <div style={bihStyles.pill} className="blog-index-pill">{t.pill}</div>
        <h1 style={bihStyles.h1} className="blog-index-title">
          {t.h1a}<br/>
          <span style={bihStyles.accent}>{t.h1accent}</span>
        </h1>
        <p style={bihStyles.sub} className="blog-index-sub">{t.sub}</p>
      </div>
    </section>
  );
};
const bihStyles = {
  wrap: { position: 'relative', background: '#F5F3EE', color: '#171717', overflow: 'hidden', borderBottom: '1px solid #E2DDD5' },
  orb: { position: 'absolute', top: -260, right: -180, width: 760, height: 760, background: 'radial-gradient(circle, rgba(255,20,147,.24) 0%, rgba(74,143,255,.10) 34%, transparent 63%)', filter: 'blur(90px)', opacity: .72, pointerEvents: 'none' },
  inner: { position: 'relative', maxWidth: 960, margin: '0 auto', padding: '118px 32px 82px', textAlign: 'center' },
  pill: { display: 'inline-block', background: '#171717', color: '#FFFFFF', borderRadius: 999, padding: '10px 22px', fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: 13, letterSpacing: '.08em' },
  h1: { fontFamily: 'var(--font-sans)', fontWeight: 850, fontSize: 'clamp(48px, 6vw, 88px)', lineHeight: .98, letterSpacing: '-.05em', textTransform: 'none', margin: '32px auto 0', color: '#171717' },
  accent: { background: 'linear-gradient(90deg, #FF1493 0%, #9B30FF 60%, #4A8FFF 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' },
  sub: { fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: 18, lineHeight: 1.62, color: '#5E5953', maxWidth: 680, margin: '28px auto 0' },
};
window.BlogIndexHero = BlogIndexHero;
