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
      h: 'TikTok Shop\n成功手册',
      sub: '所有新成员均可获取完整手册，由 Top 1% 达人与我们的运营团队每季度更新。',
      steps: [
        { n: '01', title: '制作高质量内容', body: '灯光、声音、取景。钩子写作与自然植入。借势但不脱节。字幕、贴纸、剪辑技巧全覆盖。' },
        { n: '02', title: '联盟变现逻辑', body: 'TikTok Shop 联盟的实际运作。佣金结构、选品标准、跨活动追踪时真正需要看的指标。' },
        { n: '03', title: '放量 + 优化', body: '更新节奏与测试框架。用数据拉高转化。把爆款复用到直播、短视频、付费流量 —— 不内耗。' },
        { n: '04', title: '支持资料', body: '可下载的脚本 + 清单模板。短教学视频。直播答疑。Discord 直通运营团队处理违规申诉。' },
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
  eyebrow: { fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '.12em', color: '#C6FF3D', fontWeight: 700, marginBottom: 20 },
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
