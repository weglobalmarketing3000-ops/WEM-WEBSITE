// NavBar.jsx, sticky top nav (dark)
const WEM_LANG_VERSION = '20260528-default-en';
window.getWemInitialLang = () => {
  const urlLang = new URLSearchParams(window.location.search).get('lang');
  if (urlLang === 'zh' || urlLang === 'en') return urlLang;
  if (localStorage.getItem('we-lang-version') !== WEM_LANG_VERSION) {
    localStorage.setItem('we-lang', 'en');
    localStorage.setItem('we-lang-version', WEM_LANG_VERSION);
    return 'en';
  }
  return localStorage.getItem('we-lang') || 'en';
};
window.persistWemLang = (lang) => {
  localStorage.setItem('we-lang', lang);
  localStorage.setItem('we-lang-version', WEM_LANG_VERSION);
};
const NavBar = ({ lang, onLang, basePath = '' }) => {
  const b = basePath;
  const home = b || '/';
  const t = {
    en: { nav: [['Our Services', b + 'services'], ['UGC Content', b + 'services/creator-content'], ['Our Work', b + 'showcase'], ['Creator Affiliate', b + 'affiliate'], ['About Us', b + 'about'], ['Blog', b + 'blog']], cta: 'Book a call →' },
    zh: { nav: [['服务', b + 'services'], ['UGC 内容', b + 'services/creator-content'], ['案例', b + 'showcase'], ['达人联盟', b + 'affiliate'], ['关于我们', b + 'about'], ['博客', b + 'blog']], cta: '预约咨询' },
  }[lang];
  return (
    <nav style={navStyles.wrap} className="wem-nav">
      <style>{`
        @media (max-width: 860px) {
          .wem-nav-inner { padding: 12px 18px !important; gap: 14px !important; }
          .wem-nav-links { display: none !important; }
          .wem-nav-brand img { height: 31px !important; }
          .wem-nav-call { display: none !important; }
        }
        @media (max-width: 430px) {
          .wem-nav-inner { padding: 11px 14px !important; }
        }
      `}</style>
      <div style={navStyles.inner} className="wem-nav-inner">
        <a href={home} style={navStyles.brand} className="wem-nav-brand">
          <img src={(basePath ? '../' : '') + '../../assets/we-logo-white.png'} alt="WE" style={{ height: 36 }}/>
        </a>
        <div style={navStyles.links} className="wem-nav-links">
          {t.nav.map(([label, href], i) => <a key={i} href={href} style={navStyles.link}>{label}</a>)}
        </div>
        <div style={navStyles.right}>
          <button style={navStyles.langBtn} onClick={() => onLang(lang === 'en' ? 'zh' : 'en')}>
            {lang === 'en' ? '中' : 'EN'}
          </button>
          <a href="https://zus03h0enw04.sg.larksuite.com/scheduler/03970278dd9a7925" target="_blank" rel="noopener" className="we-btn we-btn-primary wem-nav-call" style={{ fontSize: 14, padding: '10px 18px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>{t.cta}</a>
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
