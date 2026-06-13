// AffiliateBenefits.jsx, 6 creator perks in a grid
const AffiliateBenefits = ({ lang }) => {
  const t = {
    en: {
      eyebrow: '// CREATOR PERKS',
      h: 'Six reasons\nto join WEM Affiliate.',
      sub: 'WEM works directly with TikTok Shop brands to bring creators better commission opportunities, a wider range of samples, early campaign access, and practical support for content and account growth.',
      items: [
        { icon: 'trending-up', accent: '#FF1493', tag: '01', title: 'Boosted Commission', body: 'WEM negotiates commission with partner brands so creators can access stronger rates than the open marketplace, often 3% to 10% higher. Some campaigns also include extra incentives for additional posts, GMV milestones, or limited-time pushes.' },
        { icon: 'handshake', accent: '#9B30FF', tag: '02', title: 'Priority Brand Opportunities', body: 'Creators in the WEM community get first access to product launches, sample campaigns, exclusive live flash sales, paid live opportunities, and brand collaborations that match their content niche.' },
        { icon: 'package', accent: '#4A8FFF', tag: '03', title: 'Free Samples', body: 'WEM works with a wide and constantly updated pool of partner brands, so creators can apply for samples across different products and categories. More sample options mean more chances to test products, create fresh content, and find what fits your audience.' },
        { icon: 'sparkles', accent: '#4A8FFF', tag: '04', title: 'Creator Support', body: 'Get WEM guidance on campaign rules, TikTok Shop violations, appeals, account questions, content direction, and important TikTok Shop updates. When you are unsure what to do next, our team helps you understand the issue and move forward faster.' },
        { icon: 'users', accent: '#FF1493', tag: '05', title: '8,000+ Creator Community', body: 'Join thousands of fellow TikTok Shop creators sharing experience, wins, product feedback, sample updates, content ideas, live selling notes, and campaign insights. Discord includes dedicated Spanish channels, plus regular giveaways and raffles for the community.' },
        { icon: 'graduation-cap', accent: '#9B30FF', tag: '06', title: 'Exclusive Private Training from the Top 1%', body: 'Get private trainings and content reviews led by Top 1% TikTok Shop creators. Learn how they structure hooks, pacing, product placement, pricing language, and CTAs to improve conversion.' },
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
  }[lang];
  return (
    <section id="perks" style={abStyles.wrap}>
      <div style={abStyles.header}>
        <div style={abStyles.eyebrow}>{t.eyebrow}</div>
        <h2 style={abStyles.h}>{t.h.split('\n').map((l,i)=><span key={i}>{l}<br/></span>)}</h2>
        <p style={abStyles.sub}>{t.sub}</p>
      </div>
      <div style={abStyles.grid}>
        {t.items.map((item, i) => (
          <div key={i} className="perk-card" style={abStyles.card}>
            <div style={{ ...abStyles.iconBox, background: item.accent }}>
              <i data-lucide={item.icon} style={{ width: 26, height: 26, color: '#000' }}/>
            </div>
            <div style={abStyles.tag}>{item.tag}</div>
            <div style={abStyles.title}>{item.title}</div>
            <div style={abStyles.body}>{item.body}</div>
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
