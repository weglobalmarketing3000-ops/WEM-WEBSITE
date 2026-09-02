// AffiliateBenefits.jsx, 6 creator perks in a grid
const AffiliateBenefits = ({ lang }) => {
  const t = {
    en: {
      eyebrow: '// CREATOR PERKS',
      h: 'Six reasons\nto join WEM Affiliate.',
      sub: 'Better commissions, more samples, earlier brand access, and practical support for content growth.',
      items: [
        { icon: 'trending-up', accent: '#FF1493', tag: '01', title: 'Boosted Commission', body: 'Access stronger rates than the open marketplace, with campaign bonuses on selected launches.' },
        { icon: 'handshake', accent: '#9B30FF', tag: '02', title: 'Priority Brand Opportunities', body: 'See product launches, samples, live opportunities, and brand collabs earlier.' },
        { icon: 'package', accent: '#4A8FFF', tag: '03', title: 'Free Samples', body: 'Apply for products across more categories and find what fits your audience.' },
        { icon: 'sparkles', accent: '#4A8FFF', tag: '04', title: 'Creator Support', body: 'Get help with campaign rules, violations, appeals, account questions, and content direction.' },
        { icon: 'users', accent: '#FF1493', tag: '05', title: '8,000+ Creator Community', body: 'Share sample updates, content ideas, live notes, wins, and campaign insights in Discord.' },
        { icon: 'graduation-cap', accent: '#9B30FF', tag: '06', title: 'Top 1% Private Training', body: 'Learn hooks, pacing, product placement, price framing, and CTAs from proven creators.' },
      ],
    },
    zh: {
      eyebrow: '// 达人权益',
      h: '为什么加入\nWE 达人联盟',
      sub: '我们直接和品牌合作，社群成员能更早看到合作机会、寄样名额、佣金活动和内容建议。',
      items: [
        { icon: 'trending-up', accent: '#FF1493', tag: '01', title: '更好的佣金机会', body: '我们会提前和品牌沟通佣金和活动奖励。很多合作高于公开佣金，部分 SKU 可达 20% 到 35%，活动期还有额外奖金。' },
        { icon: 'handshake', accent: '#9B30FF', tag: '02', title: '优先看到品牌合作', body: '新品推广、寄样申请、付费 UGC、直播合作，会优先在 WE 社群开放。适合你的合作，我们会提醒你及时申请。' },
        { icon: 'package', accent: '#4A8FFF', tag: '03', title: '更多寄样选择', body: '根据你的内容方向、受众和品类，挑选更适合申请的品牌和样品。合作店铺会持续更新，可选择的品类更多。' },
        { icon: 'sparkles', accent: '#4A8FFF', tag: '04', title: 'WE 团队支持', body: '遇到违规、申诉、账号问题，或者不确定内容怎么拍，可以直接和我们沟通，减少试错时间。' },
        { icon: 'users', accent: '#FF1493', tag: '05', title: '8,000+ 达人社群', body: '和更多 TikTok Shop 创作者交流选品、寄样、直播、佣金和内容经验。社群越活跃，新的品牌机会也更容易被及时看到。' },
        { icon: 'graduation-cap', accent: '#9B30FF', tag: '06', title: '头部达人内容建议', body: 'TikTok Shop Top 1% 达人会从 hook、节奏、产品植入、价格表达和下单引导等角度给建议，帮助内容提升转化率。' },
      ],
    },
    ko: {
      eyebrow: '// 크리에이터 혜택',
      h: 'WEM 어필리에이트에\n참여해야 할 여섯 가지 이유.',
      sub: '더 나은 커미션, 다양한 샘플, 빠른 브랜드 협업 기회와 콘텐츠 성장을 위한 실전 지원을 제공합니다.',
      items: [
        { icon: 'trending-up', accent: '#FF1493', tag: '01', title: '우대 커미션', body: '오픈 마켓플레이스보다 높은 커미션과 일부 론치 캠페인의 추가 보너스를 안내합니다.' },
        { icon: 'handshake', accent: '#9B30FF', tag: '02', title: '브랜드 협업 우선 안내', body: '신제품, 샘플, 라이브 및 브랜드 협업 기회를 더 빠르게 확인할 수 있습니다.' },
        { icon: 'package', accent: '#4A8FFF', tag: '03', title: '무료 샘플', body: '여러 카테고리의 제품에 지원하고 내 콘텐츠와 시청자에게 맞는 상품을 찾을 수 있습니다.' },
        { icon: 'sparkles', accent: '#4A8FFF', tag: '04', title: '크리에이터 지원', body: '캠페인 규정, 위반 및 이의 제기, 계정 문의와 콘텐츠 방향에 대한 도움을 받을 수 있습니다.' },
        { icon: 'users', accent: '#FF1493', tag: '05', title: '8,000+ 크리에이터 커뮤니티', body: 'Discord에서 샘플 소식, 콘텐츠 아이디어, 라이브 노트와 캠페인 인사이트를 나눕니다.' },
        { icon: 'graduation-cap', accent: '#9B30FF', tag: '06', title: '상위 1% 크리에이터 코칭', body: '검증된 크리에이터에게 훅, 전개, 제품 노출, 가격 표현과 CTA를 배웁니다.' },
      ],
    },
  }[lang];
  return (
    <section id="perks" style={abStyles.wrap} className="affiliate-benefits">
      <style>{`
        @media (max-width: 760px) {
          .affiliate-benefits {
            padding: 76px 22px !important;
            max-width: 100vw !important;
            overflow: hidden !important;
          }
          .affiliate-benefits-header {
            margin-bottom: 36px !important;
            max-width: 100% !important;
          }
          .affiliate-benefits-title {
            font-size: clamp(42px, 13vw, 58px) !important;
            line-height: .96 !important;
            letter-spacing: 0 !important;
          }
          .affiliate-benefits-sub {
            font-size: 17px !important;
            line-height: 1.55 !important;
            max-width: 100% !important;
            margin-top: 20px !important;
          }
          .affiliate-benefits-grid {
            grid-template-columns: 1fr !important;
            gap: 14px !important;
          }
          .perk-card {
            width: 100% !important;
            min-width: 0 !important;
            padding: 24px 22px !important;
            border-radius: 16px !important;
          }
          .perk-card-title {
            font-size: clamp(28px, 9vw, 38px) !important;
            line-height: 1.02 !important;
          }
          .perk-card-body {
            font-size: 16px !important;
            line-height: 1.52 !important;
          }
        }
      `}</style>
      <div style={abStyles.header} className="affiliate-benefits-header">
        <div style={abStyles.eyebrow}>{t.eyebrow}</div>
        <h2 style={abStyles.h} className="affiliate-benefits-title">{t.h.split('\n').map((l,i)=><span key={i}>{l}<br/></span>)}</h2>
        <p style={abStyles.sub} className="affiliate-benefits-sub">{t.sub}</p>
      </div>
      <div style={abStyles.grid} className="affiliate-benefits-grid">
        {t.items.map((item, i) => (
          <div key={i} className="perk-card" style={abStyles.card}>
            <div style={{ ...abStyles.iconBox, background: item.accent }}>
              <i data-lucide={item.icon} style={{ width: 26, height: 26, color: '#000' }}/>
            </div>
            <div style={abStyles.tag}>{item.tag}</div>
            <div style={abStyles.title} className="perk-card-title">{item.title}</div>
            <div style={abStyles.body} className="perk-card-body">{item.body}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
const abStyles = {
  wrap: { background: '#000', color: '#fff', padding: '120px 32px', maxWidth: 1280, margin: '0 auto' },
  header: { maxWidth: 860, marginBottom: 72 },
  eyebrow: { fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '.12em', color: '#FF1493', fontWeight: 700, marginBottom: 20 },
  h: { fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(52px, 6.5vw, 96px)', lineHeight: .98, letterSpacing: '-.01em', textTransform: 'uppercase', margin: 0 },
  sub: { fontFamily: 'var(--font-sans)', fontSize: 20, lineHeight: 1.5, color: 'rgba(255,255,255,.7)', marginTop: 28, maxWidth: 720 },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 },
  card: { background: '#0A0A0A', border: '1px solid rgba(255,255,255,.1)', borderRadius: 20, padding: 32, position: 'relative', transition: 'transform .25s, border-color .25s, box-shadow .25s' },
  iconBox: { width: 52, height: 52, borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24 },
  tag: { position: 'absolute', top: 28, right: 28, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.12em', color: 'rgba(255,255,255,.35)', fontWeight: 700 },
  title: { fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 28, lineHeight: 1.05, letterSpacing: '-.005em', textTransform: 'uppercase', marginBottom: 14 },
  body: { fontFamily: 'var(--font-sans)', fontSize: 15, lineHeight: 1.55, color: 'rgba(255,255,255,.7)', textWrap: 'pretty' },
};
window.AffiliateBenefits = AffiliateBenefits;
