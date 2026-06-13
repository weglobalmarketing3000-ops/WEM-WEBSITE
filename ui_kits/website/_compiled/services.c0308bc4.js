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
    document.querySelector('meta[name="description"]').setAttribute('content', lang === 'zh' ? 'WEM 提供美国 TikTok Shop 代运营与增长服务：全案代运营、冷启动、TikTok Shop 策略咨询、达人联盟运营、UGC 内容、达人精准匹配、达人直播带货和短视频带货优化。' : 'WEM provides U.S. TikTok Shop services for cross-border brands: full-service management, cold start launch, TikTok Shop consulting, creator affiliate management, UGC content, creator matchmaking, creator live selling, and short video performance support.');
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
