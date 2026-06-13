// BlogIndexHero.jsx, compact hero for /blog.html
const BlogIndexHero = ({ lang }) => {
  const t = {
    en: {
      pill: 'WE MARKETING BLOG',
      h1a: 'Creator commerce,',
      h1accent: 'paid social, and ecommerce growth.',
      sub: 'WEM field notes on TikTok Shop, Meta ads, Instagram, UGC, creators, influencers, Amazon, Walmart, Shopify, DTC, retail, and brand growth. Practical enough for operators, readable enough for founders.',
    },
    zh: {
      pill: 'WE MARKETING 博客',
      h1a: '达人电商、',
      h1accent: '付费社媒和电商增长。',
      sub: 'WEM 关于 TikTok Shop、Meta 广告、Instagram、UGC、达人、influencer、Amazon、Walmart、Shopify、DTC、零售和品牌增长的一线笔记。给运营能用，给老板也能看懂。',
    },
  }[lang];
  return (
    <section style={bihStyles.wrap}>
      <div style={bihStyles.orb}/>
      <div style={bihStyles.inner}>
        <div style={bihStyles.pill}>{t.pill}</div>
        <h1 style={bihStyles.h1}>
          {t.h1a}<br/>
          <span style={bihStyles.accent}>{t.h1accent}</span>
        </h1>
        <p style={bihStyles.sub}>{t.sub}</p>
      </div>
    </section>
  );
};
const bihStyles = {
  wrap: { position: 'relative', background: '#000', color: '#fff', overflow: 'hidden', borderBottom: '1px solid rgba(255,255,255,.08)' },
  orb: { position: 'absolute', top: -200, right: -200, width: 700, height: 700, background: 'radial-gradient(circle, #FF1493 0%, transparent 55%)', filter: 'blur(80px)', opacity: .25, pointerEvents: 'none' },
  inner: { position: 'relative', maxWidth: 880, margin: '0 auto', padding: '120px 32px 80px', textAlign: 'center' },
  pill: { display: 'inline-block', background: '#fff', color: '#000', borderRadius: 999, padding: '10px 22px', fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: 13, letterSpacing: '.08em' },
  h1: { fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(48px, 6vw, 96px)', lineHeight: .95, letterSpacing: '-.01em', textTransform: 'uppercase', margin: '32px auto 0', color: '#fff' },
  accent: { background: 'linear-gradient(90deg, #FF1493 0%, #9B30FF 60%, #4A8FFF 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' },
  sub: { fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: 18, lineHeight: 1.55, color: 'rgba(255,255,255,.75)', maxWidth: 640, margin: '28px auto 0' },
};
window.BlogIndexHero = BlogIndexHero;
