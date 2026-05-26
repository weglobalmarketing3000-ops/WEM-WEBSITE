// NumbersStrip.jsx, 4-tile stat strip for /showcase.html
const NumbersStrip = ({ lang }) => {
  const t = {
    en: {
      eye: '// BY THE NUMBERS',
      tiles: [
        ['160+', 'SHOP PARTNERS\nSERVED'],
        ['$15M+', 'ANNUAL SALES\nMANAGED'],
        ['200K+', 'U.S. CREATORS\nCOLLABORATED'],
        ['CERTIFIED', 'TIKTOK SHOP\nPARTNER 2025'],
      ],
    },
    zh: {
      eye: '// 数据一览',
      tiles: [
        ['160+', '服务店铺'],
        ['$15M+', '年销售额'],
        ['200K+', '美国合作达人'],
        ['认证', 'TIKTOK SHOP\n合作伙伴 2025'],
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
              <div style={nsStyles.num}>{num}</div>
              <div style={nsStyles.lbl}>{lbl.split('\n').map((l,j)=><span key={j}>{l}<br/></span>)}</div>
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
  tile: { background: '#0A0A0A', border: '1px solid rgba(255,255,255,.1)', borderRadius: 16, padding: '32px 24px', boxShadow: '0 0 0 1px rgba(255,20,147,.12), 0 0 40px rgba(155,48,255,.12)' },
  num: { fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(36px, 4vw, 56px)', lineHeight: 1, color: '#fff', letterSpacing: '-.005em' },
  lbl: { fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 12, letterSpacing: '.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,.7)', marginTop: 16, lineHeight: 1.4 },
};
window.NumbersStrip = NumbersStrip;
