// AboutCapability.jsx, two-column founder narrative + stat grid + capability list
const AboutCapability = ({ lang }) => {
  const t = {
    en: {
      eyeL: 'WHY WE BUILT WEM',
      h2: 'A team that runs the whole TikTok Shop playbook.',
      p1: 'WE Marketing was founded by Wendy Lin in Los Angeles in 2024, after years of watching brands and creators get squeezed by agency models that were never designed for TikTok Shop. Most agencies treat TikTok like another e-commerce channel. The brands winning on TikTok Shop know it is a different game: creator-led, content-first, live-driven, and operationally heavy.',
      p2: 'We built WEM to run the whole game. One team owns shop strategy, creator activation, short-form content, live operations, and shop management, under one P&L. No handoffs, no finger-pointing, no gaps between "the influencer team" and "the shop team."',
      p3: 'That is how a beauty brand we work with went from a $312K GMV month to a $982K GMV month in 30 days. That is how a men\u2019s fashion brand cold-started to 10K+ orders in a category most agencies struggle to staff creators for. The playbook is the same. The execution is the difference.',
      quote: '\"TikTok Shop is a discovery engine, not a storefront. Creators close the trust gap between your brand and a customer who has never heard of you. Our job is to make that happen at scale.\"  ',
      author: '\u2014 Wendy Lin, Founder',
      eyeR: 'BY THE NUMBERS',
      stats: [
      { num: '160+', lab: 'SHOP PARTNERS\nSERVED' },
      { num: '200K+', lab: 'U.S. CREATORS\nCOLLABORATED' },
      { num: '$15M+', lab: 'ANNUAL SALES\nMANAGED' },
      { num: '8,000+', lab: 'CREATORS IN WE\nAFFILIATE COMMUNITY' }],

      caps: [
      ['COLDSTART LAUNCHPAD', 'New product validation in 30-90 days.'],
      ['AFFILIATE MARKETING', 'Outreach, sampling, campaigns, livestream activation.'],
      ['SHORT VIDEO MANAGEMENT', 'Diverse formats, hooks, scripts, performance optimization.'],
      ['LIVE MANAGEMENT', 'Brand and affiliate live, planning, host training, content flow.'],
      ['CREATOR MATCHMAKING', 'Right creator, right audience, right moment.'],
      ['SHOP MANAGEMENT', 'Listings, pricing, campaigns, fulfillment, SPS, compliance.']],

      seeAll: 'See our full services →'
    },
    zh: {
      eyeL: '我们为什么创立 WEM',
      h2: '一支精干团队，跑通 TikTok Shop 全链路。',
      p1: 'WE Marketing 由 Wendy Lin 于 2024 年在洛杉矶创立。多年来我们目睹品牌与达人被传统代理机构的模式所束缚，那些模式从未为 TikTok Shop 而设计。大多数机构把 TikTok Shop当成又一个社交渠道或电商平台；而真正在 TikTok Shop 上赢的品牌都明白：这是一场全新的游戏，达人驱动、内容优先、直播为王、运营密集。',
      p2: '我们创立 WEM，就是要把整个链路打通。一支团队同时负责店铺策略、达人激活、短视频内容、直播运营与店铺代运营，在同一个 P&L 下统筹推进。没有交接断层，没有责任推诿，"达人团队"和"店铺团队"之间也没有真空地带。',
      p3: '这就是为什么我们合作的一家美妆品牌能在 30 天内从月 GMV 31.2 万美金跃升到 98.2 万美金；也是一个男装品牌能在几乎没有达人库存、大多数代理难以调动达人的品类中冷启动并完成 10000+ 订单。打法是一样的，差别在执行。',
      quote: '"TikTok Shop 是一个发现引擎，不是一个店铺。达人帮你跟一个从未听过你品牌的消费者间架起信任。我们的工作是让这件事规模化发生。"',
      author: '— Wendy Lin, 创始人',
      eyeR: '关键数据',
      stats: [
      { num: '160+', lab: '合作品牌数' },
      { num: '24K+', lab: '认证达人社群' },
      { num: '$15M+', lab: '年管理 GMV' },
      { num: '8,000+', lab: 'WE 联盟社群达人' }],

      caps: [
      ['冷启动 LAUNCHPAD', '新品 30-90 天验证起量。'],
      ['联盟营销', '达人外联、寄样、活动、直播激活。'],
      ['短视频运营', '多样形式、钩子、脚本、效果优化。'],
      ['直播运营', '品牌与达人直播：策划、主播培训、内容流。'],
      ['达人匹配', '对的达人、对的受众、对的时机。'],
      ['店铺代运营', '商品、定价、活动、履约、SPS、合规。']],

      seeAll: '查看全部服务 →'
    }
  }[lang];
  return (
    <section style={acStyles.wrap}>
      <div style={acStyles.inner}>
        <div style={acStyles.left}>
          <div style={acStyles.eye}>{t.eyeL}</div>
          <h2 style={acStyles.h2}>{t.h2}</h2>
          <p style={acStyles.p}>{t.p1}</p>
          <p style={acStyles.p}>{t.p2}</p>
          <p style={acStyles.p}>{t.p3}</p>
          <div style={acStyles.quoteWrap}>
            <div style={acStyles.quoteBar} />
            <div>
              <div style={{ ...acStyles.quote, color: "rgb(244, 22, 160)" }}>{t.quote}</div>
              <div style={acStyles.author}>{t.author}</div>
            </div>
          </div>
        </div>
        <div style={acStyles.right}>
          <div style={acStyles.eye}>{t.eyeR}</div>
          <div style={acStyles.statGrid}>
            {t.stats.map((s, i) =>
            <div key={i} style={acStyles.statCard}>
                <div style={acStyles.statNum}>
                  {s.num.replace(/[+$]/g, '').replace(/^/, '')}
                  <span style={acStyles.statSym}>{s.num.match(/[+$]/g)?.join('')}</span>
                </div>
                <div style={acStyles.statLab}>{s.lab}</div>
              </div>
            )}
          </div>
          <div style={acStyles.capList}>
            {t.caps.map(([h, d], i) =>
            <div key={i} style={acStyles.capRow}>
                <div style={acStyles.capCheck}>
                  <i data-lucide="check" style={{ width: 14, height: 14, color: '#000', strokeWidth: 3 }} />
                </div>
                <div>
                  <div style={acStyles.capTitle}>{h}</div>
                  <div style={acStyles.capDesc}>{d}</div>
                </div>
              </div>
            )}
          </div>
          <a href="index.html#Services" style={acStyles.seeAll}>{t.seeAll}</a>
        </div>
      </div>
    </section>);

};
// Render stat numbers cleanly: keep $/+ as inline accent
const acStyles = {
  wrap: { background: '#000', color: '#fff', borderTop: '1px solid rgba(255,255,255,.08)', padding: '120px 0' },
  inner: { maxWidth: 1280, margin: '0 auto', padding: '0 32px', display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 96, alignItems: 'flex-start' },
  left: {},
  right: {},
  eye: { fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,.5)' },
  h2: { fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(40px, 4vw, 60px)', lineHeight: 1.0, letterSpacing: '-.01em', textTransform: 'uppercase', margin: '20px 0 36px', color: '#fff' },
  p: { fontFamily: 'var(--font-sans)', fontSize: 16, lineHeight: 1.65, color: 'rgba(255,255,255,.75)', margin: '0 0 20px' },
  quoteWrap: { display: 'flex', gap: 18, marginTop: 32, padding: '24px 0' },
  quoteBar: { width: 3, background: 'linear-gradient(180deg, #FF1493 0%, #9B30FF 100%)', borderRadius: 2, flexShrink: 0 },
  quote: { fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, lineHeight: 1.3, color: '#FF1493', textTransform: 'none', letterSpacing: '-.005em' },
  author: { fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,.55)', marginTop: 12 },
  statGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, margin: '20px 0 40px' },
  statCard: { background: '#0A0A0A', border: '1px solid rgba(255,255,255,.08)', borderRadius: 16, padding: '28px 24px', minHeight: 160, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' },
  statNum: { fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 56, lineHeight: 1, color: '#fff', letterSpacing: '-.02em' },
  statSym: { color: '#FF1493' },
  statLab: { fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,.6)', whiteSpace: 'pre-line', lineHeight: 1.5, marginTop: 16 },
  capList: { display: 'flex', flexDirection: 'column', gap: 14, marginTop: 12 },
  capRow: { display: 'flex', gap: 14, alignItems: 'flex-start' },
  capCheck: { width: 22, height: 22, borderRadius: 6, background: '#C6FF3D', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 },
  capTitle: { fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 16, letterSpacing: '.04em', textTransform: 'uppercase', color: '#fff' },
  capDesc: { fontFamily: 'var(--font-sans)', fontSize: 14, color: 'rgba(255,255,255,.65)', marginTop: 4, lineHeight: 1.5 },
  seeAll: { display: 'inline-block', marginTop: 28, fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '.16em', textTransform: 'uppercase', color: '#FF1493', textDecoration: 'none', borderBottom: '1px solid rgba(255,20,147,.5)', paddingBottom: 4 }
};
window.AboutCapability = AboutCapability;