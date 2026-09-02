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
    document.title = lang === 'zh' ? '美国 TikTok Shop 品牌与卖家服务 | WEM' : 'TikTok Shop Services for Brands & Sellers | WEM';
    document.querySelector('meta[name="description"]').setAttribute('content', lang === 'zh' ? 'WEM 为美国和跨境品牌提供 TikTok Shop 代运营、冷启动、达人联盟、UGC、直播、商品页和每周数据复盘服务。' : 'WEM helps U.S. and cross-border brands launch and scale TikTok Shop through shop management, creator affiliates, UGC, live selling, and reporting.');
  }, [lang]);
  useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  }, [lang]);
  return React.createElement("div", {
    "data-screen-label": "WE Services Overview"
  }, React.createElement(CursorStars, null), React.createElement(NavBar, {
    lang: lang,
    onLang: setLang
  }), React.createElement(ServicesOverview, {
    lang: lang
  }), React.createElement(TaglineBand, {
    lang: lang,
    variant: "services"
  }), React.createElement(CtaFooter, {
    lang: lang
  }), React.createElement(Footer, {
    lang: lang
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App, null));
