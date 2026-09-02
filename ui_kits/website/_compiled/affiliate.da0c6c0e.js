const {
  useState,
  useEffect
} = React;
function getInitialLang() {
  return window.getWemInitialLang ? window.getWemInitialLang() : 'en';
}
function App() {
  const [lang, setLang] = useState(getInitialLang);
  useEffect(() => {
    window.persistWemLang ? window.persistWemLang(lang) : localStorage.setItem('we-lang', lang);
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    document.title = lang === 'zh' ? 'WE 达人联盟 | 美国 TikTok Shop 创作者社群' : 'TikTok Shop Creator Community | WE Affiliate by WEM';
    document.querySelector('meta[name="description"]').setAttribute('content', lang === 'zh' ? '加入 WE 达人联盟，美国 TikTok Shop 创作者社群。获取品牌合作、免费寄样、更高佣金、Discord 支持和英西中三语内容建议。' : "Join WE Affiliate, WEM's TikTok Shop creator community for brand collaborations, samples, commissions, Discord support, and multilingual guidance.");
  }, [lang]);
  useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  }, [lang]);
  return React.createElement("div", {
    "data-screen-label": "WE Affiliate"
  }, React.createElement(CursorStars, null), React.createElement(NavBar, {
    lang: lang,
    onLang: setLang
  }), React.createElement(AffiliateHero, {
    lang: lang
  }), React.createElement(AffiliateBenefits, {
    lang: lang
  }), React.createElement(MeetYourCoach, {
    lang: lang
  }), React.createElement(AffiliateCommunity, {
    lang: lang
  }), React.createElement(TaglineBand, {
    lang: lang,
    variant: "affiliate"
  }), React.createElement(AffiliateJoinCta, {
    lang: lang
  }), React.createElement(Footer, {
    lang: lang
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App, null));
