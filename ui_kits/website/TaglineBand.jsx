// TaglineBand.jsx, repeating tagline strip (magenta)
const TaglineBand = ({ lang, variant = 'home' }) => {
  const phrases = {
    home: {
      en: 'CREATE · CONNECT · CONVERT · ',
      zh: '种草 · 出单 · 增长 · ',
    },
    services: {
      en: 'STRATEGY · CREATORS · CONTENT · LIVE · SCALE · ',
      zh: '策略 · 达人 · 内容 · 直播 · 放量 · ',
    },
    work: {
      en: 'REAL CASES · REAL SIGNALS · REAL GMV · ',
      zh: '真实案例 · 真实信号 · 真实增长 · ',
    },
    affiliate: {
      en: 'SAMPLES · COMMISSION · COMMUNITY · TRAINING · ',
      zh: '寄样 · 佣金 · 社群 · 内容指导 · ',
    },
    about: {
      en: 'BUILT IN THE U.S. · CONNECTED TO CREATORS · MADE FOR BRANDS · ',
      zh: '美国本地团队 · 连接达人 · 服务品牌 · ',
    },
    blog: {
      en: 'PLAYBOOKS · FIELD NOTES · TIKTOK SHOP STRATEGY · ',
      zh: '实战手册 · 一线笔记 · TIKTOK SHOP 策略 · ',
    },
    ugc: {
      en: 'CREATOR CONTENT · AD CREATIVE · USAGE RIGHTS · ',
      zh: '达人内容 · 广告素材 · 完整使用权 · ',
    },
  };
  const phrase = (phrases[variant] || phrases.home)[lang] || phrases.home.en;
  const variantStyle = variant === 'ugc'
    ? {
      wrap: { background: 'linear-gradient(90deg, #4A8FFF 0%, #2563EB 42%, #7C3AED 74%, #FF1493 100%)', borderTop: '1px solid rgba(74,143,255,.35)', borderBottom: '1px solid rgba(255,20,147,.35)', boxShadow: 'inset 0 24px 70px rgba(74,143,255,.12), inset 0 -24px 70px rgba(0,0,0,.2)' },
      solid: { color: '#fff', textShadow: '0 6px 22px rgba(0,0,0,.22)' },
      outline: { WebkitTextStroke: '2px rgba(255,255,255,.9)' },
      cyan: { color: '#4A8FFF', textShadow: '0 6px 20px rgba(0,0,0,.25)' },
    }
    : {};
  return (
    <section style={{ ...tbStyles.wrap, ...(variantStyle.wrap || {}) }}>
      <div style={tbStyles.track} className="tb-track">
        {Array.from({ length: 12 }).map((_, i) => {
          const style = i % 3 === 0
            ? { ...tbStyles.solid, ...(variantStyle.solid || {}) }
            : i % 3 === 1
              ? { ...tbStyles.outline, ...(variantStyle.outline || {}) }
              : { ...tbStyles.cyan, ...(variantStyle.cyan || {}) };
          return <span key={i} style={style}>{phrase}</span>;
        })}
      </div>
      <style>{`@keyframes tb-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } } .tb-track { animation: tb-scroll 22s linear infinite; }`}</style>
    </section>
  );
};
const tbStyles = {
  wrap: { background: 'linear-gradient(90deg, #FF1493 0%, #9B30FF 100%)', padding: '32px 0', overflow: 'hidden' },
  track: { display: 'flex', gap: 20, whiteSpace: 'nowrap' },
  solid: { fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 84, lineHeight: 1, letterSpacing: '-.01em', textTransform: 'uppercase', color: '#fff' },
  outline: { fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 84, lineHeight: 1, letterSpacing: '-.01em', textTransform: 'uppercase', color: 'transparent', WebkitTextStroke: '2px #fff' },
  cyan: { fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 84, lineHeight: 1, letterSpacing: '-.01em', textTransform: 'uppercase', color: '#4A8FFF' },
};
window.TaglineBand = TaglineBand;
