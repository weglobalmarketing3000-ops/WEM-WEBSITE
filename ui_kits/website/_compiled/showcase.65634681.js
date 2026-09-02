const {
  useState,
  useEffect
} = React;
function App() {
  const [lang, setLang] = useState(() => window.getWemInitialLang ? window.getWemInitialLang() : 'en');
  useEffect(() => {
    window.persistWemLang ? window.persistWemLang(lang) : localStorage.setItem('we-lang', lang);
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    document.title = lang === 'zh' ? '美国 TikTok Shop 品牌与卖家增长案例 | WEM' : 'TikTok Shop Case Studies for Brands & Sellers | WEM';
    document.querySelector('meta[name="description"]').setAttribute('content', lang === 'zh' ? '查看 WEM 如何通过达人联盟、UGC、直播、商品页优化和每周运营，帮助品牌与卖家增长美国 TikTok Shop。' : 'See how WEM helps brands and sellers grow TikTok Shop through creator affiliates, UGC, live selling, product-page optimization, and weekly operations.');
  }, [lang]);
  useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  }, [lang]);
  return React.createElement("div", {
    "data-screen-label": "WE Marketing Work"
  }, React.createElement(CursorStars, null), React.createElement(NavBar, {
    lang: lang,
    onLang: setLang
  }), React.createElement(WorkHero, {
    lang: lang
  }), React.createElement(NumbersStrip, {
    lang: lang
  }), React.createElement(FeaturedCase, {
    lang: lang
  }), React.createElement(PrecisionMatch, {
    lang: lang
  }), React.createElement(TaglineBand, {
    lang: lang,
    variant: "work"
  }), React.createElement(CtaFooter, {
    lang: lang
  }), React.createElement(Footer, {
    lang: lang
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App, null));
