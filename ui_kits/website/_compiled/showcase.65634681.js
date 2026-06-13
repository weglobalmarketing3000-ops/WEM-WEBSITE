const {
  useState,
  useEffect
} = React;
function App() {
  const [lang, setLang] = useState(() => window.getWemInitialLang ? window.getWemInitialLang() : 'en');
  useEffect(() => {
    window.persistWemLang ? window.persistWemLang(lang) : localStorage.setItem('we-lang', lang);
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    document.title = lang === 'zh' ? '美国 TikTok Shop 增长案例 | 跨境品牌与 Amazon 卖家案例 | WE Marketing' : 'U.S. TikTok Shop Case Studies | Cross-Border Brand Growth | WE Marketing';
    document.querySelector('meta[name="description"]').setAttribute('content', lang === 'zh' ? '美国 TikTok Shop 增长案例：跨境品牌、Amazon 卖家、美妆、健康、服饰品牌如何通过美国达人联盟、UGC 内容、直播带货和店铺运营提升销售额。' : 'TikTok Shop case studies for U.S. market launches: cross-border brands, beauty, wellness, fashion, Amazon sellers, creator affiliates, UGC content, live selling, and GMV growth.');
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
