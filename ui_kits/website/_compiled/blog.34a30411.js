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
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang === 'ko' ? 'ko-KR' : 'en';
    document.title = lang === 'zh' ? 'TikTok Shop 品牌与卖家运营指南 | WEM' : lang === 'ko' ? '브랜드와 셀러를 위한 TikTok Shop 인사이트 | WEM' : 'TikTok Shop Insights for Brands & Sellers | WEM';
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
