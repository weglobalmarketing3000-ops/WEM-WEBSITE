// NumbersStrip.jsx, 4-tile stat strip for /showcase.html
const NumbersStrip = ({ lang }) => {
  const t = {
    en: {
      eye: '// BY THE NUMBERS',
      tiles: [
        ['160+', 'SHOP PARTNERS\nSERVED'],
        ['$15M+', 'ANNUAL SALES\nMANAGED'],
        ['200K+', 'U.S. CREATORS\nCOLLABORATED'],
        ['badge', 'TikTok Shop Certified Agency Since 2025'],
      ],
    },
    zh: {
      eye: '// 美国市场执行数据',
      tiles: [
        ['160+', '服务品牌与店铺'],
        ['$15M+', '年管理销售额'],
        ['200K+', '美国达人合作资源'],
        ['badge', 'TikTok Shop Certified Agency Since 2025'],
      ],
    },
  }[lang];
  return (
    <section style={nsStyles.wrap}>
      <div style={nsStyles.inner}>
        <div style={nsStyles.eye}>{t.eye}</div>
        <div style={nsStyles.grid}>
          {t.tiles.map(([num, lbl], i) => (
            <div key={i} style={nsStyles.tile}>
              {num === 'badge' ? (
                <img
                  src="assets/tiktok-shop-certified-agency-2025.png"
                  alt={lbl}
                  style={nsStyles.badge}
                />
              ) : (
                <>
                  <div style={nsStyles.num}>{num}</div>
                  <div style={nsStyles.lbl}>{lbl.split('\n').map((l,j)=><span key={j}>{l}<br/></span>)}</div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
const nsStyles = {
  wrap: { background: '#000', borderTop: '1px solid rgba(255,255,255,.08)', borderBottom: '1px solid rgba(255,255,255,.08)', padding: '70px 32px' },
  inner: { maxWidth: 1280, margin: '0 auto' },
  eye: { fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '.18em', fontWeight: 700, color: '#FF1493', marginBottom: 28 },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 },
  tile: { background: '#0A0A0A', border: '1px solid rgba(255,255,255,.1)', borderRadius: 16, padding: '32px 24px', boxShadow: '0 0 0 1px rgba(255,20,147,.12), 0 0 40px rgba(155,48,255,.12)', minHeight: 164, display: 'flex', flexDirection: 'column', justifyContent: 'center' },
  num: { fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(36px, 4vw, 56px)', lineHeight: 1, color: '#fff', letterSpacing: '-.005em' },
  lbl: { fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 12, letterSpacing: '.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,.7)', marginTop: 16, lineHeight: 1.4 },
  badge: { width: '100%', maxWidth: 170, height: 'auto', objectFit: 'contain', alignSelf: 'center', filter: 'drop-shadow(0 0 22px rgba(74,143,255,.18)) drop-shadow(0 0 20px rgba(255,20,147,.16))' },
};
window.NumbersStrip = NumbersStrip;
