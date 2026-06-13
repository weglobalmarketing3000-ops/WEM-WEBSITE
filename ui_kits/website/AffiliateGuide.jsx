// AffiliateGuide.jsx, getting-started guide (4 numbered stages, horizontal cards)
const AffiliateGuide = ({ lang }) => {
  const t = {
    en: {
      eyebrow: '// GETTING STARTED',
      h: 'TikTok Shop success\nguide. Included.',
      sub: 'Every new member gets our full playbook, reviewed quarterly by Top 1% creators and our ops team.',
      steps: [
        { n: '01', title: 'Creating High-Quality Content', body: 'Lighting, sound, and framing. Writing strong hooks and natural product placements. Leveraging trends that actually fit your brand. Captions, overlays, and editing tricks that lift engagement.' },
        { n: '02', title: 'Affiliate Monetization', body: 'How TikTok Shop affiliate really works. Commission structures, product selection criteria, and the metrics that matter when you\u2019re tracking performance across campaigns.' },
        { n: '03', title: 'Scaling + Optimization', body: 'Posting cadences and testing frameworks. Using data to lift conversion. Repurposing winners across live, short-form, and paid, without burning out.' },
        { n: '04', title: 'Support Materials', body: 'Downloadable script + checklist templates. Short instructional videos. Live office hours. Direct line to our ops team via Discord for violations and appeals.' },
      ],
    },
    zh: {
      eyebrow: '// 新手指南',
      h: 'TikTok Shop\n创作者上手指南',
      sub: '新成员可以领取操作手册。内容由头部达人和 WE 团队持续更新。',
      steps: [
        { n: '01', title: '先把视频拍清楚', body: '灯光、收音、构图、字幕和剪辑先过关。内容要真实，也要让美国用户一眼看懂。' },
        { n: '02', title: '知道怎么赚钱', body: '怎么看佣金，怎么选品，怎么申请样品，发布后看哪些数据，手册里都会讲清楚。' },
        { n: '03', title: '持续测试内容', body: '固定更新，测试不同 hook、卖点和下单引导。表现好的内容可以继续复用到直播和广告素材。' },
        { n: '04', title: '遇到问题有人对接', body: '脚本模板、拍摄清单、短教学视频和 Discord 答疑都会开放。遇到违规或申诉，也可以直接和 WE 团队沟通。' },
      ],
    },
  }[lang];
  return (
    <section style={agStyles.wrap}>
      <div style={agStyles.header}>
        <div style={agStyles.eyebrow}>{t.eyebrow}</div>
        <h2 style={agStyles.h}>{t.h.split('\n').map((l,i)=><span key={i}>{l}<br/></span>)}</h2>
        <p style={agStyles.sub}>{t.sub}</p>
      </div>
      <div style={agStyles.grid}>
        {t.steps.map((s, i) => (
          <div key={i} style={agStyles.card}>
            <div style={agStyles.num}>{s.n}</div>
            <div style={agStyles.cardBody}>
              <div style={agStyles.title}>{s.title}</div>
              <div style={agStyles.body}>{s.body}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
const agStyles = {
  wrap: { background: '#000', color: '#fff', padding: '120px 32px', maxWidth: 1280, margin: '0 auto' },
  header: { maxWidth: 860, marginBottom: 72 },
  eyebrow: { fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '.12em', color: '#4A8FFF', fontWeight: 700, marginBottom: 20 },
  h: { fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(52px, 6.5vw, 96px)', lineHeight: .98, letterSpacing: '-.01em', textTransform: 'uppercase', margin: 0 },
  sub: { fontFamily: 'var(--font-sans)', fontSize: 20, lineHeight: 1.5, color: 'rgba(255,255,255,.7)', marginTop: 28, maxWidth: 720 },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 },
  card: { background: '#0A0A0A', border: '1px solid rgba(255,255,255,.1)', borderRadius: 20, padding: 32, display: 'flex', gap: 24, alignItems: 'flex-start' },
  num: { fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 72, lineHeight: .9, color: 'transparent', WebkitTextStroke: '2px #FF1493', flexShrink: 0, width: 110 },
  cardBody: { flex: 1 },
  title: { fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 26, lineHeight: 1.05, letterSpacing: '-.005em', textTransform: 'uppercase', marginBottom: 12 },
  body: { fontFamily: 'var(--font-sans)', fontSize: 15, lineHeight: 1.55, color: 'rgba(255,255,255,.7)', textWrap: 'pretty' },
};
window.AffiliateGuide = AffiliateGuide;
