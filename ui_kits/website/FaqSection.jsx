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
    ko: {
      eye: '// 자주 묻는 질문',
      h: 'TikTok Shop 에이전시,\n핵심만 답합니다.',
      items: [
        { q: 'TikTok Shop 에이전시는 어떤 일을 하나요?', a: '상품 등록, 크리에이터 모집, 어필리에이트 프로그램, 콘텐츠 전략과 성과 최적화를 통합 관리합니다. WE Marketing은 브랜드가 상품에 집중하는 동안 이 실행 시스템을 운영합니다.' },
        { q: 'TikTok Shop 에이전시 비용은 얼마인가요?', a: '일반적으로 월 관리비와 성과 기반 GMV 커미션으로 구성됩니다. 실제 범위와 비용은 브랜드의 카테고리, 단계와 목표에 따라 맞춤 제안합니다.' },
        { q: 'TikTok Shop Partner(TSP)란 무엇인가요?', a: 'TikTok Shop 운영을 지원하도록 TikTok이 공식 인증한 파트너 에이전시입니다. WE Marketing은 인증된 TikTok Shop Partner Agency입니다.' },
        { q: '신규 브랜드의 TikTok Shop 론치도 지원하나요?', a: '네. 숍 세팅, 상품 페이지 최적화, 크리에이터 시딩과 첫 판매 가속화를 연결하는 콜드 스타트 플레이북으로 신규 브랜드를 지원합니다.' },
        { q: '우리 브랜드에 맞는 크리에이터는 어떻게 찾나요?', a: '8,000명 이상의 크리에이터 커뮤니티에서 카테고리, 고객 특성, 콘텐츠 스타일과 과거 GMV 신호를 바탕으로 적합한 크리에이터를 매칭합니다.' },
      ],
    },
  }[lang];
  const [open, setOpen] = React.useState(0);
  return (
    <section id="FAQ" className="faq-section" style={fqStyles.wrap}>
      <style>{`
        @media (max-width: 760px) {
          .faq-section {
            max-width: 100vw !important;
            padding: 76px 20px !important;
            overflow: hidden !important;
          }
          .faq-inner {
            display: block !important;
            max-width: 100% !important;
            overflow: hidden !important;
          }
          .faq-head {
            position: relative !important;
            top: auto !important;
            margin-bottom: 34px !important;
          }
          .faq-eye {
            margin-bottom: 18px !important;
            font-size: 11px !important;
            letter-spacing: .16em !important;
          }
          .faq-title {
            font-size: clamp(42px, 13vw, 56px) !important;
            line-height: .96 !important;
            letter-spacing: 0 !important;
          }
          .faq-list,
          .faq-item {
            width: 100% !important;
            max-width: 100% !important;
          }
          .faq-list {
            gap: 12px !important;
          }
          .faq-item {
            border-radius: 14px !important;
          }
          .faq-question {
            padding: 20px 18px !important;
            gap: 14px !important;
            align-items: flex-start !important;
            font-size: clamp(22px, 7vw, 30px) !important;
            line-height: 1.05 !important;
          }
          .faq-question-text {
            min-width: 0 !important;
            overflow-wrap: anywhere !important;
          }
          .faq-icon {
            flex: 0 0 auto !important;
            font-size: 28px !important;
          }
          .faq-answer {
            padding: 0 18px 22px !important;
            font-size: 16px !important;
            line-height: 1.55 !important;
          }
        }
      `}</style>
      <div style={fqStyles.orb}/>
      <div className="faq-inner" style={fqStyles.inner}>
        <div className="faq-head" style={fqStyles.head}>
          <div className="faq-eye" style={fqStyles.eye}>{t.eye}</div>
          <h2 className="faq-title" style={fqStyles.h}>{t.h.split('\n').map((l,i)=><span key={i}>{l}<br/></span>)}</h2>
        </div>
        <div className="faq-list" style={fqStyles.list}>
          {t.items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div className="faq-item" key={i} style={fqStyles.item}>
                <button className="faq-question" style={fqStyles.q} onClick={() => setOpen(isOpen ? -1 : i)} aria-expanded={isOpen}>
                  <span className="faq-question-text" style={fqStyles.qText}>{it.q}</span>
                  <span className="faq-icon" style={{ ...fqStyles.icon, transform: isOpen ? 'rotate(45deg)' : 'rotate(0)' }}>+</span>
                </button>
                {isOpen && <div className="faq-answer" style={fqStyles.a}>{it.a}</div>}
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
