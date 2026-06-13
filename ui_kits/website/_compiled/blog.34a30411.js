const {
  useState,
  useEffect
} = React;
function App() {
  const [lang, setLang] = useState(() => {
    const urlLang = new URLSearchParams(window.location.search).get('lang');
    if (urlLang === 'zh' || urlLang === 'en') return urlLang;
    return window.getWemInitialLang ? window.getWemInitialLang() : 'en';
  });
  useEffect(() => {
    window.persistWemLang ? window.persistWemLang(lang) : localStorage.setItem('we-lang', lang);
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    document.title = lang === 'zh' ? '博客 | 达人电商、付费社媒与电商增长 · WE Marketing' : 'Blog | Creator Commerce, Paid Social & Ecommerce Growth · WE Marketing';
  }, [lang]);
  useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  }, [lang]);
  return React.createElement("div", {
    "data-screen-label": "WE Blog"
  }, React.createElement(CursorStars, null), React.createElement(NavBar, {
    lang: lang,
    onLang: setLang
  }), React.createElement(BlogIndexHero, {
    lang: lang
  }), React.createElement(BlogList, {
    lang: lang
  }), React.createElement(TaglineBand, {
    lang: lang,
    variant: "blog"
  }), React.createElement(CtaFooter, {
    lang: lang
  }), React.createElement(Footer, {
    lang: lang
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App, null));
