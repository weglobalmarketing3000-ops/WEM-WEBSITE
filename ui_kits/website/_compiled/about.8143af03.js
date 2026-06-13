const {
  useState,
  useEffect
} = React;
function App() {
  const [lang, setLang] = useState(() => window.getWemInitialLang ? window.getWemInitialLang() : 'en');
  useEffect(() => {
    window.persistWemLang ? window.persistWemLang(lang) : localStorage.setItem('we-lang', lang);
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    document.title = lang === 'zh' ? '关于 WE Marketing | 洛杉矶美国 TikTok Shop 代运营机构' : 'About WE Marketing | Los Angeles TikTok Shop Partner Agency';
    document.querySelector('meta[name="description"]').setAttribute('content', lang === 'zh' ? 'WE Marketing 是位于南加州的美国 TikTok Shop Partner Agency，服务跨境品牌、Amazon 卖家和在美华人创业团队，提供 TikTok Shop 代运营、达人联盟、UGC 内容和直播带货执行。' : 'WE Marketing is a Southern California TikTok Shop Partner Agency serving cross-border brands, Amazon sellers, and Chinese-speaking founders with U.S. creator affiliates, UGC content, live selling, and shop operations.');
  }, [lang]);
  useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  }, [lang]);
  return React.createElement("div", {
    "data-screen-label": "WE About"
  }, React.createElement(CursorStars, null), React.createElement(NavBar, {
    lang: lang,
    onLang: setLang
  }), React.createElement(AboutHero, {
    lang: lang
  }), React.createElement(AboutCapability, {
    lang: lang
  }), React.createElement(TaglineBand, {
    lang: lang,
    variant: "about"
  }), React.createElement(CtaFooter, {
    lang: lang
  }), React.createElement(Footer, {
    lang: lang
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App, null));
