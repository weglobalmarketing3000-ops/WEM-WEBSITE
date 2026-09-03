const {
  useState,
  useEffect
} = React;
function App() {
  const [lang, setLang] = useState(() => window.getWemInitialLang ? window.getWemInitialLang() : 'en');
  useEffect(() => {
    window.persistWemLang ? window.persistWemLang(lang) : localStorage.setItem('we-lang', lang);
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : (lang === 'ko' ? 'ko-KR' : 'en');
    document.title = lang === 'zh'
      ? '关于 WE Marketing | 洛杉矶美国 TikTok Shop 代运营机构'
      : (lang === 'ko' ? 'WE Marketing 소개 | 로스앤젤레스 TikTok Shop 파트너 에이전시' : 'About WE Marketing | Los Angeles TikTok Shop Partner Agency');
    document.querySelector('meta[name="description"]').setAttribute('content', lang === 'zh'
      ? 'WEM 是位于南加州的美国 TikTok Shop 服务机构，为品牌、跨境卖家和 Amazon 团队提供店铺运营、达人联盟、UGC 和直播支持。'
      : (lang === 'ko' ? 'WE Marketing(WEM)은 미국 및 크로스보더 브랜드의 TikTok Shop 운영, 크리에이터 어필리에이트, UGC, 라이브 판매를 지원하는 남부 캘리포니아 에이전시입니다.' : 'WEM is a Southern California TikTok Shop agency helping U.S. and cross-border brands with shop operations, creator affiliates, UGC, and live selling.'));
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
