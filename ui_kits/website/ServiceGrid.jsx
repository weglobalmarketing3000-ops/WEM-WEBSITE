// ServiceGrid.jsx, 6-pillar services (dark)
const SG_ACCENTS = ['#FF1493', '#00E5FF', '#9B30FF', '#FF1493', '#FF1493', '#00E5FF', '#9B30FF'];

const ServiceGrid = ({ lang }) => {
  const services = {
    en: [
      { icon: 'rocket', title: 'Coldstart Launchpad', sub: 'Build social proof, generate early orders, create momentum, optimize listings, and design campaigns for new products.' },
      { icon: 'users', title: 'Affiliate Marketing', sub: 'Full-cycle management from outreach and sampling to affiliate campaigns, livestreams, and performance tracking.' },
      { icon: 'video', title: 'Short Video Management', sub: 'Produce and test diverse short-form content, analyze product angles, craft strong hooks and scripts, and optimize for performance.' },
      { icon: 'film', title: 'Creator Content', sub: 'Authentic UGC video from 21,000+ creators. Bulk, Select, and Premium packages starting at $60/video. Full perpetual usage rights.', href: 'services/creator-content.html' },
      { icon: 'radio', title: 'Live Management', sub: 'Strategy for brand live and affiliate live, planning, host training, content flow, and performance optimization.' },
      { icon: 'sparkles', title: 'Creator Matchmaking', sub: 'Connect brands with the right creators to reach the right audience at the right time.' },
      { icon: 'shopping-bag', title: 'Shop Management', sub: 'Strategy and execution across assortment, listings, campaigns, and pricing to drive sales and long-term growth.' },
    ],
    zh: [
      { icon: 'rocket', title: '冷启动加速器', sub: '建立口碑、获取早期订单、打造势能，优化商品页并设计新品发布活动。' },
      { icon: 'users', title: '联盟分销', sub: '全流程管理：从达人触达、寄样到联盟活动、直播和数据追踪。' },
      { icon: 'video', title: '短视频运营', sub: '批量产出并测试多角度内容，分析产品卖点，打造强钩子脚本。' },
      { icon: 'film', title: '达人内容', sub: '21,000+ 达人产出真实 UGC 视频。Bulk、Select、Premium 三档套餐，$60/条起，含永久使用授权。', href: 'services/creator-content.html' },
      { icon: 'radio', title: '直播运营', sub: '品牌直播与达人直播全策略：排播、主播培训、内容节奏、数据优化。' },
      { icon: 'sparkles', title: '达人匹配', sub: '在正确的时机，为品牌匹配对的达人，触达对的人群。' },
      { icon: 'shopping-bag', title: '店铺代运营', sub: '选品、上架、活动、定价全链路执行，驱动销售和长期增长。' },
    ],
  }[lang];
  const title = lang === 'en' ? 'Our services' : '服务';
  const sub = lang === 'en' ? 'A unified system powering creator, content, live and shop operations.' : '一体化系统，驱动达人、内容、直播与店铺运营。';
  return (
    <section id="Services" style={sgStyles.wrap}>
      <div style={sgStyles.inner}>
        <h2 style={sgStyles.h2}>
          <span>{lang === 'en' ? 'Our ' : ''}</span>
          <span style={sgStyles.h2grad}>{lang === 'en' ? 'services' : '服务'}</span>
          <span>.</span>
        </h2>
        <p style={sgStyles.sub}>{sub}</p>
        <div style={sgStyles.grid}>
          {services.map((s, i) => {
            const c = SG_ACCENTS[i % SG_ACCENTS.length];
            const inner = (<>
              <i data-lucide={s.icon} style={{ width: 28, height: 28, color: c, strokeWidth: 2 }}/>
              <div style={{ ...sgStyles.cardTitle, color: c }}>{s.title}</div>
              <div style={sgStyles.cardSub}>{s.sub}</div>
            </>);
            return s.href
              ? <a key={i} href={s.href} style={{ ...sgStyles.card, textDecoration: 'none', display: 'block' }} className="svc-card">{inner}</a>
              : <div key={i} style={sgStyles.card} className="svc-card">{inner}</div>;
          })}
        </div>
      </div>
    </section>
  );
};
const sgStyles = {
  wrap: { background: '#000', padding: '140px 0' },
  inner: { maxWidth: 1280, margin: '0 auto', padding: '0 32px' },
  h2: { fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(60px, 7vw, 108px)', lineHeight: .95, letterSpacing: '-.005em', textTransform: 'uppercase', margin: '0 0 18px', color: '#fff' },
  h2grad: { background: 'linear-gradient(90deg, #FF1493 0%, #9B30FF 50%, #00E5FF 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent' },
  sub: { fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 22, color: 'rgba(255,255,255,.85)', margin: '0 0 60px', maxWidth: 800 },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 },
  card: { background: '#0A0A0A', border: '1px solid rgba(255,255,255,.08)', borderRadius: 18, padding: 36, transition: 'all .3s', cursor: 'pointer' },
  cardTitle: { fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: 22, color: '#FF1493', textTransform: 'uppercase', letterSpacing: '.02em', margin: '22px 0 14px' },
  cardSub: { fontFamily: 'var(--font-sans)', fontSize: 16, lineHeight: 1.55, color: '#fff' },
};
window.ServiceGrid = ServiceGrid;
