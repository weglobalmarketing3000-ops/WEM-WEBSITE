function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState,
  useEffect
} = React;
const P = t => ({
  kind: 'p',
  text: t
});
const H3 = t => ({
  kind: 'h3',
  text: t
});
const UL = items => ({
  kind: 'list',
  items
});
const OL = items => ({
  kind: 'list',
  items,
  ordered: true
});
const CTA = label => ({
  kind: 'cta',
  label,
  href: 'https://zus03h0enw04.sg.larksuite.com/scheduler/03970278dd9a7925'
});
const POST = {
  meta: {
    title: 'How to Choose a TikTok Shop Agency as a Creator',
    cat: 'CREATORS · AGENCY GUIDE',
    author: 'WE Marketing Team',
    date: 'Sep 15, 2025',
    read: '7 min read',
    heroImage: 'hero-2-how-to-choose-tiktok-shop-agency-as-creator.png',
    heroAlt: 'Three TikTok Shop creators in a studio workspace reviewing content together on a laptop, with ring light and product samples on the table.'
  },
  sections: [{
    id: 'intro',
    h: 'Choosing the right TikTok Shop agency as a creator',
    body: [P("If you're an active TikTok Shop affiliate, you've probably been approached by agencies. Maybe through DMs, emails, or Discord messages. Some offer access to brands, free products, and better commissions. Others are vague about what they actually do."), P("Not all TikTok Shop agencies are the same, and choosing the wrong one can waste your time or lock you into a bad deal. Here's how to evaluate them.")]
  }, {
    id: 'what-they-do',
    h: 'What a TikTok Shop agency actually does for creators',
    body: [P("A TikTok Shop agency sits between brands and creators. The agency manages the brand's TikTok Shop program and recruits creators to make content for those brands."), P("For you as a creator, this means:"), H3('Access to more brands'), P("Agencies typically manage multiple brands at once. Instead of finding products to promote one by one through TikTok's affiliate marketplace, an agency can connect you with several brands that match your niche."), H3('Free products'), P("Brands working with agencies send product samples to creators through the agency's program. You get products to try and create content with, at no cost."), H3('Potentially higher commissions'), P("Some agencies negotiate higher commission rates for their creator community than what's available through open collaboration on the marketplace."), H3('Content support'), P("Good agencies provide briefs with product selling points, content angle suggestions, and performance tips. This can help you make better content that converts, which means more commission for you.")]
  }, {
    id: 'red-flags',
    h: 'Red flags to watch for',
    body: [H3('Vague about which brands they represent'), P("If an agency can't tell you specifically what brands you'd be working with, that's a problem. You should be able to evaluate whether the products are a fit for your audience before committing."), H3('Requiring exclusivity'), P("Be cautious of agencies that want you to work exclusively with them or restrict you from promoting competing products. You should maintain the freedom to work with any brand or agency you want."), H3('No clear communication process'), P("If the agency is slow to respond during recruitment, they'll be even slower once you're onboarded. Good agencies communicate proactively and are responsive when you have questions."), H3('Taking a cut of your commission without being upfront'), P("Always ask how the agency makes money. Reputable agencies are paid by brands and don't reduce your commission rate. If an agency is taking a percentage of your earnings, you should know that before you agree."), H3('Pressure to post on a rigid schedule'), P("Content guidelines and suggested timelines are fine. Strict posting requirements with penalties are a sign the agency treats creators as a production line rather than partners.")]
  }, {
    id: 'green-flags',
    h: 'Green flags to look for',
    body: [H3('They know your content'), P("If an agency reaches out and references your specific videos or niche, they've done their homework. Generic mass messages suggest they're just blasting every creator they can find."), H3("They work with brands you'd actually use"), P("The best agency partnerships feel natural because the products align with content you'd want to create anyway. Ask for the list of brands they manage and whether those brands fit your audience."), H3('Transparent about commissions and expectations'), P("A good agency tells you upfront: here's the commission rate, here's the product, here's the suggested posting window, and here's what we provide. No surprises."), H3('They have a creator community'), P("Agencies with an active creator community (Discord, group chats, or regular events) tend to invest more in creator relationships. You can also talk to other creators in the community to get a sense of their experience."), H3('They follow up and stay in touch'), P("After sending you product, a good agency checks in: did you receive it? Do you have questions? How did the content perform? This ongoing communication shows they care about the relationship, not just the post.")]
  }, {
    id: 'ask',
    h: 'What to ask before joining',
    body: [P("Before you commit to working with any TikTok Shop agency, get clear answers to these questions:"), OL(['What brands do you currently manage, and which ones would I be working with?', 'What commission rates can I expect?', 'Does working with you affect my commission in any way?', 'Am I required to be exclusive, or can I work with other agencies and brands?', 'What support do you provide? (Briefs, content tips, performance feedback?)', "What's your posting expectation? Is there a minimum?", 'How do you communicate with creators? (Discord, email, DM?)']), P("The answers will tell you quickly whether the agency is a good fit.")]
  }, {
    id: 'wem',
    h: 'How WE Marketing works with creators',
    body: [P("At WE Marketing, we run a creator community of 8,000+ TikTok Shop affiliates. Here's what our creators get:"), H3('Brand access across categories'), P("We manage 160+ brands across beauty, skincare, wellness, home, fashion, and more. When a new brand comes in, we match it to creators based on niche, audience, and content style."), H3('Creator Lab program'), P("Our Creator Lab is designed to help creators grow their TikTok Shop earnings. It includes curated brand collaborations, 1-on-1 strategy audits, weekly coaching sessions, and a Creator Spotlight program where top-performing content gets amplified through Spark Ads, giving your videos extra reach."), H3('No exclusivity required'), P("We don't ask for exclusivity. You're free to work with any brand, agency, or platform you want."), H3('Active community'), P("Our Discord community is where creators connect, share tips, and get first access to new brand opportunities."), P("If you're a TikTok Shop creator looking for better brand partnerships and support, apply to join our Creator Lab or join our Discord community."), CTA('Join the WE Discord →')]
  }],
  faqs: [{
    q: 'Should I join a TikTok Shop agency as a creator?',
    a: "It depends on the agency. A good TikTok Shop agency gives you access to more brand deals, free products, and higher commission rates than you'd find on your own. A bad one locks you into restrictive contracts with little support. Evaluate each agency by the brands they work with, how they communicate, and what they actually provide beyond just sending you products."
  }, {
    q: 'What should creators look for in a TikTok Shop agency?',
    a: "Look for agencies that work with brands you'd actually want to promote, offer competitive commission rates, communicate proactively, don't require exclusivity, and have a track record of supporting creators. Ask about their creator community, how many brands they manage, and what kind of support you'll get beyond just receiving samples."
  }, {
    q: 'Do TikTok Shop agencies take a cut of creator commissions?',
    a: "This varies by agency. Some agencies are paid by brands and don't touch creator commissions at all. Others take a percentage. Always ask upfront how the agency makes money and whether it affects your commission rate. Reputable agencies are transparent about their fee structure."
  }],
  related: [{
    label: 'What Does a TikTok Shop Agency Do?',
    href: 'what-does-a-tiktok-shop-agency-do.html'
  }]
};
function App() {
  const slug = window.location.pathname.split('/').pop().replace('.html', '');
  const [lang, setLang] = useState(() => {
    const urlLang = new URLSearchParams(window.location.search).get('lang');
    if (urlLang === 'zh' || urlLang === 'en') return urlLang;
    return localStorage.getItem('we-lang') || 'en';
  });
  const post = lang === 'zh' && window.BLOG_ZH_POSTS?.[slug] ? window.BLOG_ZH_POSTS[slug] : POST;
  useEffect(() => {
    localStorage.setItem('we-lang', lang);
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    if (post?.meta?.title) document.title = (post.meta.title || "WE Blog") + " | WE Marketing";
  }, [lang, post]);
  useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
  return React.createElement("div", {
    "data-screen-label": "WE Blog \xB7 Agency for Creators"
  }, React.createElement(CursorStars, null), React.createElement(NavBar, {
    lang: lang,
    onLang: setLang,
    basePath: "../"
  }), React.createElement(BlogPost, _extends({}, post, {
    labels: lang === 'zh' ? window.BLOG_ZH_LABELS : undefined
  })), React.createElement(CtaFooter, {
    lang: lang
  }), React.createElement(Footer, {
    lang: lang,
    basePath: "../"
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App, null));
