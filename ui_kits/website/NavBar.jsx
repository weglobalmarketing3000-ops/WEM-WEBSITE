// NavBar.jsx, sticky top nav (dark)
const NavBar = ({ lang, onLang, basePath = '' }) => {
  const b = basePath;
  const t = {
    en: { nav: [['Services', b + 'index.html#services'], ['Creator Content', b + 'services/creator-content.html'], ['Our Work', b + 'showcase.html'], ['Affiliate', b + 'affiliate.html'], ['About', b + 'about.html'], ['Blog', b + 'blog.html']], cta: 'Book a call →' },
    zh: { nav: [['服务', b + 'index.html#services'], ['达人内容', b + 'services/creator-content.html'], ['案例', b + 'showcase.html'], ['联盟达人', b + 'affiliate.html'], ['关于', b + 'about.html'], ['博客', b + 'blog.html']], cta: '预约咨询 →' },
  }[lang];
  return (
    <nav style={navStyles.wrap}>
      <div style={navStyles.inner}>
        <a href={b + 'index.html'} style={navStyles.brand}>
          <img src={(basePath ? '../' : '') + '../../assets/we-logo-white.png'} alt="WE" style={{ height: 36 }}/>
        </a>
        <div style={navStyles.links}>
          {t.nav.map(([label, href], i) => <a key={i} href={href} style={navStyles.link}>{label}</a>)}
        </div>
        <div style={navStyles.right}>
          <button style={navStyles.langBtn} onClick={() => onLang(lang === 'en' ? 'zh' : 'en')}>
            {lang === 'en' ? '中' : 'EN'}
          </button>
          <a href="https://zus03h0enw04.sg.larksuite.com/scheduler/03970278dd9a7925" target="_blank" rel="noopener" className="we-btn we-btn-primary" style={{ fontSize: 14, padding: '10px 18px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>{t.cta}</a>
        </div>
      </div>
    </nav>
  );
};
const navStyles = {
  wrap: { position: 'sticky', top: 0, zIndex: 50, background: 'rgba(0,0,0,.85)', borderBottom: '1px solid rgba(255,255,255,.08)', backdropFilter: 'blur(12px)' },
  inner: { maxWidth: 1280, margin: '0 auto', padding: '14px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24 },
  brand: { display: 'flex', alignItems: 'center', textDecoration: 'none' },
  links: { display: 'flex', gap: 28 },
  link: { fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 600, color: '#fff', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '.04em' },
  right: { display: 'flex', alignItems: 'center', gap: 12 },
  langBtn: { width: 36, height: 36, borderRadius: 999, border: '1.5px solid rgba(255,255,255,.3)', background: 'transparent', fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 12, cursor: 'pointer', color: '#fff' },
};
window.NavBar = NavBar;
