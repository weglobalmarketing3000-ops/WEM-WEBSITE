const {
  useState,
  useEffect
} = React;
function App() {
  const [lang, setLang] = useState(() => window.getWemInitialLang ? window.getWemInitialLang() : 'en');
  useEffect(() => {
    window.persistWemLang ? window.persistWemLang(lang) : localStorage.setItem('we-lang', lang);
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    document.title = lang === 'zh' ? '美国 TikTok Shop 代运营 | 跨境品牌与在美华人品牌增长伙伴 | WE Marketing' : 'WE Marketing | U.S. TikTok Shop Agency for Creator-Led Growth';
    document.querySelector('meta[name="description"]').setAttribute('content', lang === 'zh' ? 'WE Marketing 是位于南加州的美国 TikTok Shop Partner Agency，服务跨境品牌、Amazon 卖家和在美华人品牌团队，提供美国 TikTok Shop 代运营、达人联盟、UGC 内容、直播带货和店铺增长。' : 'WE Marketing, also known as WEM, is a U.S. TikTok Shop agency helping brands scale with creator affiliates, UGC content, live selling, shop operations, and performance reporting.');
  }, [lang]);
  useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  }, [lang]);
  return React.createElement("div", {
    "data-screen-label": "WE Marketing Home"
  }, React.createElement(CursorStars, null), React.createElement(NavBar, {
    lang: lang,
    onLang: setLang
  }), React.createElement(Hero, {
    lang: lang
  }), React.createElement(Marquee, {
    lang: lang
  }), React.createElement(ServiceGrid, {
    lang: lang
  }), React.createElement(Testimonial, {
    lang: lang
  }), React.createElement(SeeTheWork, {
    lang: lang
  }), React.createElement(FaqSection, {
    lang: lang
  }), React.createElement(TaglineBand, {
    lang: lang
  }), React.createElement(CtaFooter, {
    lang: lang
  }), React.createElement(Footer, {
    lang: lang
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App, null));
