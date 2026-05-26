// Marquee.jsx, brand partners scrolling marquee (dark)
const Marquee = ({ lang }) => {
  // Real partner brands
  const realBrands = ['SKIN1004','MISSHA','MEOWANT','MEDICUBE','MAGNETOPIA','BASK & LATHER','ENA SKIN','INA LABS','ANANKECLO','MINISO','GUYU GLOBAL','TGIDEAS','FIFA WORLD CUP MERCHANDISE','RITUAL'];
  // Placeholder brands — replace these directly with real partner names
  const placeholderBrands = ['HI!PAPA','ZUTTONYAN','PAPABLIC','GUYU','MOONBREW','COSRX'];
  const brands = [...realBrands, ...placeholderBrands];
  const eye = lang === 'en' ? 'BRAND PARTNERS · 160+ brands trust WEM' : '品牌伙伴 · 160+ 品牌信赖 WEM';

  // Split into two rows so each row scrolls independently
  const half = Math.ceil(brands.length / 2);
  const row1 = brands.slice(0, half);
  const row2 = brands.slice(half);
  const items1 = [...row1, ...row1];
  const items2 = [...row2, ...row2];

  return (
    <section style={mqStyles.wrap}>
      <div style={mqStyles.eye}>{eye}</div>
      {[items1, items2].map((items, track) => (
        <div key={track} style={{ ...mqStyles.track, animationDirection: track % 2 ? 'reverse' : 'normal', animationDuration: track % 2 ? '7s' : '5s' }}>
          {items.map((b, i) => <div key={i} style={mqStyles.logo}>{b}</div>)}
        </div>
      ))}
      <style>{`@keyframes mq-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </section>
  );
};
const mqStyles = {
  wrap: { background: '#000', borderBottom: '1px solid rgba(255,255,255,.08)', padding: '56px 0 80px', overflow: 'hidden' },
  eye: { fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,.5)', marginBottom: 28, textAlign: 'center' },
  track: { display: 'flex', gap: 80, whiteSpace: 'nowrap', animation: 'mq-scroll 50s linear infinite', paddingBottom: 14 },
  logo: { fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 26, letterSpacing: '.04em', color: 'rgba(255,255,255,.45)', flexShrink: 0 },
};
window.Marquee = Marquee;
