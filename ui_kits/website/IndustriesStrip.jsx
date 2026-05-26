// IndustriesStrip.jsx, category + logo strip for /showcase.html
const IndustriesStrip = ({ lang }) => {
  const t = {
    en: {
      eye: '// INDUSTRIES WE SERVE',
      rows: [
        ['BEAUTY', ['Skin1004', 'Missha', 'Canvas Beauty', 'Medicube', 'Magnetopia', 'Bask & Lather', 'Ena Skin']],
        ['WELLNESS', ['WNP', 'Ritual', 'Ananke', 'Ina Labs']],
        ['TECH', ['Higround']],
        ['FASHION', ['Zayndeals', 'TGIDeas', 'FIFA WC Merch', 'Guyu Global']],
        ['FOOD & OTHER', ['Brew', 'Miniso', 'Clomoon', 'Moonbrew']],
      ],
      close: '160+ brand partners and counting.',
    },
    zh: {
      eye: '// 服务行业',
      rows: [
        ['美妆', ['Skin1004', 'Missha', 'Canvas Beauty', 'Medicube', 'Magnetopia', 'Bask & Lather', 'Ena Skin']],
        ['健康', ['WNP', 'Ritual', 'Ananke', 'Ina Labs']],
        ['科技', ['Higround']],
        ['时尚', ['Zayndeals', 'TGIDeas', 'FIFA WC Merch', 'Guyu Global']],
        ['食品 & 其他', ['Brew', 'Miniso', 'Clomoon', 'Moonbrew']],
      ],
      close: '160+ 品牌合作伙伴，仍在持续增长。',
    },
  }[lang];
  return (
    <section style={isStyles.wrap}>
      <div style={isStyles.inner}>
        <div style={isStyles.eye}>{t.eye}</div>
        <div style={isStyles.rows}>
          {t.rows.map(([cat, brands], i) => (
            <div key={i} style={isStyles.row}>
              <div style={isStyles.cat}>{cat}</div>
              <div style={isStyles.brands}>
                {brands.map((b, j) => <span key={j} style={isStyles.brand}>{b}</span>)}
              </div>
            </div>
          ))}
        </div>
        <div style={isStyles.close}>{t.close}</div>
      </div>
    </section>
  );
};
const isStyles = {
  wrap: { background: '#000', borderTop: '1px solid rgba(255,255,255,.08)', padding: '90px 32px' },
  inner: { maxWidth: 1280, margin: '0 auto' },
  eye: { fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '.18em', fontWeight: 700, color: '#FF1493', marginBottom: 36 },
  rows: { display: 'flex', flexDirection: 'column', gap: 0 },
  row: { display: 'grid', gridTemplateColumns: '200px 1fr', gap: 32, padding: '24px 0', borderTop: '1px solid rgba(255,255,255,.08)', alignItems: 'center' },
  cat: { fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 22, letterSpacing: '.04em', textTransform: 'uppercase', color: '#fff' },
  brands: { display: 'flex', flexWrap: 'wrap', gap: '10px 28px', justifyContent: 'flex-end', rowGap: 12 },
  brand: { fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 18, letterSpacing: '.03em', textTransform: 'uppercase', color: 'rgba(255,255,255,.55)', whiteSpace: 'nowrap' },
  close: { fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 14, letterSpacing: '.06em', textTransform: 'uppercase', color: 'rgba(255,255,255,.5)', marginTop: 36, textAlign: 'center' },
};
window.IndustriesStrip = IndustriesStrip;
