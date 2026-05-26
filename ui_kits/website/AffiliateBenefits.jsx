// AffiliateBenefits.jsx, 6 creator perks in a grid
const AffiliateBenefits = ({ lang }) => {
  const t = {
    en: {
      eyebrow: '// CREATOR PERKS',
      h: 'Six reasons\nto join WE Affiliate.',
      sub: 'We work directly with TikTok Shop brands, so creators in our community get the good stuff first: better rates, free samples, faster responses, real coaching.',
      items: [
        { icon: 'trending-up', accent: '#FF1493', tag: '01', title: 'Boosted Commission', body: 'Negotiated rates with partner brands, higher than the open-market baseline. Some SKUs run 20-35% commission, plus campaign bonuses.' },
        { icon: 'handshake', accent: '#9B30FF', tag: '02', title: 'Exclusive Brand Collabs', body: 'First access to campaigns before they go public on TikTok Shop. Gifted seeding, paid UGC briefs, and live show slots with vetted brands.' },
        { icon: 'package', accent: '#C6FF3D', tag: '03', title: 'Free Product Samples', body: 'Request samples from 160+ partner shops. Most ship within 5-7 business days. No follower minimum for starter kits.' },
        { icon: 'sparkles', accent: '#00E5FF', tag: '04', title: 'Creator Support', body: 'Dedicated ops team for TikTok Shop violations, appeals, and account issues. Free basic video editing and thumbnail help.' },
        { icon: 'users', accent: '#FF1493', tag: '05', title: '8,000+ Fellow Creators', body: 'Plug into a vetted creator community. Collab finder, duet chains, trending-sound alerts, and an always-on Discord w/ English + 中文 channels.' },
        { icon: 'graduation-cap', accent: '#9B30FF', tag: '06', title: 'Tips from the Top 1%', body: 'Weekly content reviews from Top 1% TikTok Shop creators. Hooks, pacing, pricing, CTAs. The stuff that actually moves GMV.' },
      ],
    },
    zh: {
      eyebrow: '// 达人权益',
      h: '加入 WE 联盟\n的六个理由',
      sub: '我们直接对接 TikTok Shop 品牌方，社群达人第一手拿到好资源 —— 更高佣金、免费寄样、快速响应、真实指导。',
      items: [
        { icon: 'trending-up', accent: '#FF1493', tag: '01', title: '更高佣金比例', body: '与品牌方谈好的专属佣金，高于市场公开价。部分 SKU 佣金 20-35%，另有活动奖金。' },
        { icon: 'handshake', accent: '#9B30FF', tag: '02', title: '独家品牌合作', body: '活动在 TikTok Shop 公开之前，社群达人优先对接。包含寄样、付费 UGC、直播场次。' },
        { icon: 'package', accent: '#C6FF3D', tag: '03', title: '免费寄样', body: '可向 160+ 合作店铺申请样品，大多 5-7 个工作日内发出。新手无粉丝门槛。' },
        { icon: 'sparkles', accent: '#00E5FF', tag: '04', title: '达人支持', body: '专属运营团队处理店铺违规、申诉、账号问题。提供基础视频剪辑与封面协助。' },
        { icon: 'users', accent: '#FF1493', tag: '05', title: '8,000+ 达人社群', body: '认证达人社群：合拍搭档、合集联动、热门音乐预警，经验分享，英西语 Discord 社群 24h 在线。' },
        { icon: 'graduation-cap', accent: '#9B30FF', tag: '06', title: 'Top 1% 达人指导', body: '每周由 Top 1% TikTok Shop 达人进行内容复盘：开头钩子、节奏、定价、CTA —— 都是真正拉 GMV 的点。' },
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
