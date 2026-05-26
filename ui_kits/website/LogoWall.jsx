// LogoWall.jsx, partner/brand logo row (mono text logos as placeholders)
const LogoWall = ({ lang }) => {
  const brands = ['HIGROUND', 'WNP', 'CANVAS BEAUTY', 'MEDICUBE', 'MAGNETOPIA', 'ALLCLAIR', 'SWEETUMS', 'BYTEDANCE'];
  const eye = lang === 'en' ? 'Trusted by 200+ brands' : '200+ 品牌的选择';
  return (
    <section style={lwStyles.wrap}>
      <div style={lwStyles.inner}>
        <div style={lwStyles.eye}>{eye}</div>
        <div style={lwStyles.row}>
          {brands.map((b, i) => (
            <div key={i} style={lwStyles.logo}>{b}</div>
          ))}
        </div>
      </div>
    </section>
  );
};

const lwStyles = {
  wrap: { background: '#fff', borderTop: '1px solid var(--we-line)', borderBottom: '1px solid var(--we-line)', padding: '48px 0' },
  inner: { maxWidth: 1280, margin: '0 auto', padding: '0 32px' },
  eye: { fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--we-ink-3)', marginBottom: 24, textAlign: 'center' },
  row: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 24, flexWrap: 'wrap' },
  logo: { fontFamily: 'var(--font-display)', fontSize: 16, letterSpacing: '.08em', color: 'var(--we-ink-2)', opacity: .65 },
};

window.LogoWall = LogoWall;
