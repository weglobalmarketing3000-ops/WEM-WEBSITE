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
    document.title = lang === 'zh' ? '美国 TikTok Shop 代运营、达人联盟、达播与 UGC 服务 | WE Marketing' : 'TikTok Shop Management, Creator Affiliate, Live & UGC Services | WE Marketing';
    document.querySelector('meta[name="description"]').setAttribute('content', lang === 'zh' ? 'WEM 提供美国 TikTok Shop 代运营与增长服务：全案代运营、冷启动、TikTok Shop 策略咨询、达人联盟运营、UGC 内容、达人精准匹配、达人直播带货、商品页本地化和产品短视频拍摄服务。' : 'WEM provides U.S. TikTok Shop services for cross-border brands, Amazon sellers, Shopify brands, and DTC teams: full-service management, cold start launch, consulting, creator affiliate management, UGC content, live selling, product page localization, and short video production.');
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
