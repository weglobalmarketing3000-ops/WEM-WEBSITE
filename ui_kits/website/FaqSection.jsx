// FaqSection.jsx, visible accordion FAQ on homepage (mirrors FAQPage JSON-LD)
const FaqSection = ({ lang }) => {
  const t = {
    en: {
      eye: '// FREQUENTLY ASKED',
      h: 'TikTok Shop agency,\nanswered.',
      items: [
        { q: 'What does a TikTok Shop agency do?', a: 'A TikTok Shop agency manages your entire presence on TikTok Shop, including product listings, creator recruitment, affiliate program management, content strategy, and performance optimization. At WE Marketing, we handle all of this so brands can focus on their products while we drive sales through the platform.' },
        { q: 'How much does a TikTok Shop agency cost?', a: "Engagements typically include a monthly management fee plus a performance-based GMV commission, aligning the agency's incentives with your growth. Contact WE Marketing for a custom proposal based on your brand's needs and goals." },
        { q: 'What is a TikTok Shop Partner (TSP)?', a: "A TikTok Shop Partner is an agency officially certified by TikTok to manage brands on TikTok Shop. TSPs get direct access to TikTok's partner tools, priority support, and real-time GMV attribution data. WE Marketing is one of a select group of certified TSP agencies." },
        { q: 'Can you help launch a new brand on TikTok Shop?', a: 'Yes. WE Marketing has launched over 160 brands on TikTok Shop with a proven playbook covering store setup, product optimization, creator seeding, and first-sale acceleration.' },
        { q: 'How do you find creators for my brand?', a: 'We match your brand with creators from our community of 8,000+ vetted TikTok Shop creators. Matching is based on category fit, audience demographics, content style, and past GMV performance.' },
      ],
    },
    zh: {
      eye: '// 常见问题',
      h: '美国 TikTok Shop 代运营，\n常见问题解答。',
      items: [
        { q: '美国 TikTok Shop 代运营到底做什么？', a: '不是只帮你上架商品，也不是只找达人拍视频。真正要管的是商品页、店铺活动、达人联盟、寄样、UGC 内容、直播、广告素材和销售数据。我们把这些事放在一张表里推进。' },
        { q: '跨境品牌一定要美国本地团队吗？', a: '如果你卖的是美国市场，本地执行会少走很多弯路。达人沟通、寄样速度、内容表达、合规预期和活动节奏都不一样。我们支持英西中沟通，也负责美国本地执行。' },
        { q: '代运营怎么收费？', a: '通常是月度服务费加销售分成，也可以按 UGC 内容、达人匹配或冷启动项目拆开做。费用取决于品类、SKU 数量、目标市场、达人规模和执行深度。' },
        { q: '什么是 TikTok Shop Partner Agency？', a: '这是 TikTok Shop 官方合作服务机构，可以为品牌提供店铺运营、达人联盟、内容和数据相关支持。WE Marketing 是 TikTok Shop Partner Agency，重点做美国市场。' },
        { q: '你们怎么帮品牌找达人？', a: '我们不只看粉丝量。会看品类、人群、语言、内容风格、发布率、历史销售表现和品牌调性。目标是找到美国用户愿意信、愿意买的达人。' },
      ],
    },
  }[lang];
  const [open, setOpen] = React.useState(0);
  return (
    <section id="FAQ" style={fqStyles.wrap}>
      <div style={fqStyles.orb}/>
      <div style={fqStyles.inner}>
        <div style={fqStyles.head}>
          <div style={fqStyles.eye}>{t.eye}</div>
          <h2 style={fqStyles.h}>{t.h.split('\n').map((l,i)=><span key={i}>{l}<br/></span>)}</h2>
        </div>
        <div style={fqStyles.list}>
          {t.items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={i} style={fqStyles.item}>
                <button style={fqStyles.q} onClick={() => setOpen(isOpen ? -1 : i)} aria-expanded={isOpen}>
                  <span style={fqStyles.qText}>{it.q}</span>
                  <span style={{ ...fqStyles.icon, transform: isOpen ? 'rotate(45deg)' : 'rotate(0)' }}>+</span>
                </button>
                {isOpen && <div style={fqStyles.a}>{it.a}</div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
const fqStyles = {
  wrap: { position: 'relative', background: '#000', borderTop: '1px solid rgba(255,255,255,.08)', padding: '120px 32px', overflow: 'hidden' },
  orb: { position: 'absolute', top: '40%', left: -200, width: 500, height: 500, background: 'radial-gradient(circle, #9B30FF 0%, transparent 60%)', filter: 'blur(90px)', opacity: .2, pointerEvents: 'none' },
  inner: { position: 'relative', maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80, alignItems: 'flex-start' },
  head: { position: 'sticky', top: 100 },
  eye: { fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '.18em', fontWeight: 700, color: '#FF1493', marginBottom: 24 },
  h: { fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(44px, 5vw, 76px)', lineHeight: .98, letterSpacing: '-.005em', textTransform: 'uppercase', color: '#fff', margin: 0 },
  list: { display: 'flex', flexDirection: 'column', gap: 14 },
  item: { background: '#0A0A0A', border: '1px solid rgba(255,255,255,.08)', borderRadius: 16, overflow: 'hidden' },
  q: { width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 24, padding: '24px 28px', background: 'transparent', border: 'none', color: '#fff', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 22, letterSpacing: '.005em', textAlign: 'left', cursor: 'pointer', textTransform: 'uppercase', lineHeight: 1.25 },
  qText: { flex: 1 },
  icon: { fontFamily: 'var(--font-display)', fontSize: 32, color: '#FF1493', lineHeight: 1, transition: 'transform .25s ease', display: 'inline-block' },
  a: { padding: '0 28px 26px', fontFamily: 'var(--font-sans)', fontSize: 17, lineHeight: 1.65, color: 'rgba(255,255,255,.8)' },
};
window.FaqSection = FaqSection;
