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
      h: 'TikTok Shop 代运营，\n常见问题解答。',
      items: [
        { q: 'TikTok Shop 代运营机构是做什么的？', a: 'TikTok Shop 代运营机构负责品牌在 TikTok Shop 上的完整业务，包括商品上架、达人招募、联盟项目管理、内容策略与业绩优化。WE Marketing 提供全链路代运营，让品牌专注产品，由我们驱动平台销售。' },
        { q: 'TikTok Shop 代运营费用是多少？', a: '通常采用"月度服务费 + GMV 业绩分成"的混合模式，将机构利益与品牌增长对齐。请联系 WE Marketing 获取根据品牌需求定制的方案。' },
        { q: '什么是 TikTok Shop Partner (TSP)？', a: 'TSP 是经 TikTok 官方认证、可以为品牌运营 TikTok Shop 的合作机构。TSP 可获得官方工具、优先支持以及实时 GMV 归因数据。WE Marketing 是少数被认证的 TSP 机构之一。' },
        { q: '你们能帮新品牌冷启动 TikTok Shop 吗？', a: '可以。WE Marketing 已为 160+ 品牌完成 TikTok Shop 冷启动，覆盖开店、商品优化、达人寄样到首单加速的完整流程。' },
        { q: '你们如何为我的品牌匹配达人？', a: '我们在 8,000+ 认证 TikTok Shop 达人社群中根据品类契合度、受众画像、内容风格与历史 GMV 进行匹配。' },
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
