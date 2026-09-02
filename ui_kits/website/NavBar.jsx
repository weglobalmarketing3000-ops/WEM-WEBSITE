// NavBar.jsx, sticky top nav (dark)
const WEM_LANG_VERSION = '20260528-default-en';
window.getWemInitialLang = () => {
  if (document.documentElement.lang === 'ko-KR') return 'ko';
  const urlLang = new URLSearchParams(window.location.search).get('lang');
  if (urlLang === 'zh' || urlLang === 'en') return urlLang;
  if (localStorage.getItem('we-lang-version') !== WEM_LANG_VERSION) {
    localStorage.setItem('we-lang', 'en');
    localStorage.setItem('we-lang-version', WEM_LANG_VERSION);
    return 'en';
  }
  const savedLang = localStorage.getItem('we-lang');
  return savedLang === 'ko' ? 'en' : (savedLang || 'en');
};
window.persistWemLang = (lang) => {
  localStorage.setItem('we-lang', lang);
  localStorage.setItem('we-lang-version', WEM_LANG_VERSION);
};
const NavBar = ({ lang, onLang, basePath = '' }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const b = basePath;
  const isKo = lang === 'ko';
  const home = isKo ? '../index.html' : (b || './index.html');
  const page = (path) => isKo ? (path === 'about.html' ? './about.html' : `../${path}`) : `${b}${path}`;
  const appointment = 'https://zus03h0enw04.sg.larksuite.com/scheduler/03970278dd9a7925';
  const t = {
    en: { nav: [['Our Services', page('services.html')], ['UGC Content', page('services/creator-content.html')], ['Our Work', page('showcase.html')], ['Creator Affiliate', page('affiliate.html')], ['About Us', page('about.html')], ['Blog', page('blog.html')]], cta: 'Book a call →' },
    zh: { nav: [['服务', page('services.html')], ['UGC 内容', page('services/creator-content.html')], ['案例', page('showcase.html')], ['达人联盟', page('affiliate.html')], ['关于我们', page('about.html')], ['博客', page('blog.html')]], cta: '预约咨询' },
    ko: { nav: [['서비스', page('services.html')], ['UGC 콘텐츠', page('services/creator-content.html')], ['성과 사례', page('showcase.html')], ['크리에이터 어필리에이트', page('affiliate.html')], ['회사 소개', page('about.html')], ['블로그', page('blog.html')]], cta: '상담 예약 →' },
  }[lang];
  return (
    <nav style={navStyles.wrap} className="wem-nav">
      <style>{`
        .wem-nav-mobile-menu { display: none; }
        .wem-nav-menu-button { display: none; }
        @media (max-width: 860px) {
          .wem-nav-inner { padding: 12px 18px !important; gap: 14px !important; }
          .wem-nav-links { display: none !important; }
          .wem-nav-brand img { height: 31px !important; }
          .wem-nav-call { display: none !important; }
          .wem-nav-menu-button { display: inline-grid !important; }
          .wem-nav-mobile-menu {
            display: grid !important;
            position: absolute;
            left: 14px;
            right: 14px;
            top: calc(100% + 8px);
            padding: 10px;
            border-radius: 18px;
            background: rgba(5,5,8,.96);
            border: 1px solid rgba(255,255,255,.14);
            box-shadow: 0 22px 70px rgba(0,0,0,.42), 0 0 0 1px rgba(255,20,147,.08);
            backdrop-filter: blur(18px);
          }
        }
        @media (max-width: 430px) {
          .wem-nav-inner { padding: 11px 14px !important; }
        }
      `}</style>
      <div style={navStyles.inner} className="wem-nav-inner">
        <a href={home} style={navStyles.brand} className="wem-nav-brand">
          <img src={(basePath ? '../' : '') + '../../assets/we-logo-white.png'} alt="WE Marketing" style={{ height: 36 }}/>
        </a>
        <div style={navStyles.links} className="wem-nav-links">
          {t.nav.map(([label, href], i) => <a key={i} href={href} style={navStyles.link}>{label}</a>)}
        </div>
        <div style={navStyles.right}>
          {lang === 'ko' ? (
            <div style={navStyles.routeLang} aria-label="Language">
              <a href="/about" style={navStyles.routeLangLink}>English</a>
              <span aria-hidden="true"> / </span>
              <a href="/about?lang=zh" style={navStyles.routeLangLink}>简体中文</a>
              <span aria-hidden="true"> / </span>
              <a href="/ko/about" style={navStyles.routeLangCurrent} aria-current="page">한국어</a>
            </div>
          ) : (
            <button style={navStyles.langBtn} onClick={() => onLang(lang === 'en' ? 'zh' : 'en')}>
              {lang === 'en' ? '中' : 'EN'}
            </button>
          )}
          <button
            type="button"
            className="wem-nav-menu-button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            style={navStyles.menuButton}
          >
            <span style={{ ...navStyles.menuLine, transform: menuOpen ? 'translateY(6px) rotate(45deg)' : 'none' }}/>
            <span style={{ ...navStyles.menuLine, opacity: menuOpen ? 0 : 1 }}/>
            <span style={{ ...navStyles.menuLine, transform: menuOpen ? 'translateY(-6px) rotate(-45deg)' : 'none' }}/>
          </button>
          <a href={appointment} target="_blank" rel="noopener" className="we-btn we-btn-primary wem-nav-call" style={{ fontSize: 14, padding: '10px 18px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>{t.cta}</a>
        </div>
      </div>
      {menuOpen && (
        <div className="wem-nav-mobile-menu" style={navStyles.mobileMenu}>
          {t.nav.map(([label, href], i) => (
            <a key={i} href={href} onClick={() => setMenuOpen(false)} style={navStyles.mobileLink}>{label}</a>
          ))}
          <a
            href={appointment}
            target="_blank"
            rel="noopener"
            onClick={() => setMenuOpen(false)}
            style={navStyles.mobileCta}
          >
            {t.cta}
          </a>
        </div>
      )}
    </nav>
  );
};
const navStyles = {
  wrap: { position: 'sticky', top: 0, zIndex: 120, background: 'rgba(0,0,0,.85)', borderBottom: '1px solid rgba(255,255,255,.08)', backdropFilter: 'blur(12px)' },
  inner: { maxWidth: 1280, margin: '0 auto', padding: '14px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24 },
  brand: { display: 'flex', alignItems: 'center', textDecoration: 'none' },
  links: { display: 'flex', gap: 28 },
  link: { fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 600, color: '#fff', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '.04em' },
  right: { display: 'flex', alignItems: 'center', gap: 12 },
  langBtn: { width: 36, height: 36, borderRadius: 999, border: '1.5px solid rgba(255,255,255,.3)', background: 'transparent', fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 12, cursor: 'pointer', color: '#fff' },
  routeLang: { display: 'flex', alignItems: 'center', gap: 0, whiteSpace: 'nowrap', fontFamily: 'var(--font-sans)', fontWeight: 650, fontSize: 11, color: 'rgba(255,255,255,.45)' },
  routeLangLink: { color: 'rgba(255,255,255,.72)', textDecoration: 'none' },
  routeLangCurrent: { color: '#fff', textDecoration: 'none' },
  menuButton: { width: 40, height: 40, borderRadius: 999, border: '1.5px solid rgba(255,255,255,.24)', background: 'rgba(255,255,255,.06)', color: '#fff', cursor: 'pointer', placeItems: 'center', alignContent: 'center', gap: 4, padding: 0 },
  menuLine: { display: 'block', width: 17, height: 2, borderRadius: 999, background: '#fff', transition: 'transform .2s ease, opacity .2s ease' },
  mobileMenu: { display: 'none' },
  mobileLink: { display: 'block', padding: '14px 14px', borderRadius: 12, color: '#fff', textDecoration: 'none', fontFamily: 'var(--font-sans)', fontWeight: 850, fontSize: 14, letterSpacing: '.06em', textTransform: 'uppercase' },
  mobileCta: { display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 8, minHeight: 48, borderRadius: 999, color: '#fff', textDecoration: 'none', fontFamily: 'var(--font-sans)', fontWeight: 900, fontSize: 14, background: 'linear-gradient(90deg, #FF1493, #9B30FF)', boxShadow: '0 14px 44px rgba(255,20,147,.22)' },
};
window.NavBar = NavBar;
