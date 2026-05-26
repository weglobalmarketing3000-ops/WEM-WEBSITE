// TaglineBand.jsx, repeating tagline strip (magenta)
const TaglineBand = ({ lang }) => {
  const phrase = lang === 'en' ? 'CREATE · CONNECT · CONVERT · ' : '内容 · 连接 · 成交 · ';
  return (
    <section style={tbStyles.wrap}>
      <div style={tbStyles.track}>
        {Array.from({ length: 10 }).map((_, i) => {
          const variant = i % 3 === 0 ? tbStyles.solid : i % 3 === 1 ? tbStyles.outline : tbStyles.cyan;
          return <span key={i} style={variant}>{phrase}</span>;
        })}
      </div>
      <style>{`@keyframes tb-scroll { from { transform: translateX(0); } to { transform: translateX(-25%); } } .tb-track { animation: tb-scroll 15s linear infinite; }`}</style>
    </section>
  );
};
const tbStyles = {
  wrap: { background: 'linear-gradient(90deg, #FF1493 0%, #9B30FF 100%)', padding: '32px 0', overflow: 'hidden' },
  track: { display: 'flex', gap: 20, whiteSpace: 'nowrap', animation: 'tb-scroll 3s linear infinite' },
  solid: { fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 84, lineHeight: 1, letterSpacing: '-.01em', textTransform: 'uppercase', color: '#fff' },
  outline: { fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 84, lineHeight: 1, letterSpacing: '-.01em', textTransform: 'uppercase', color: 'transparent', WebkitTextStroke: '2px #fff' },
  cyan: { fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 84, lineHeight: 1, letterSpacing: '-.01em', textTransform: 'uppercase', color: '#00E5FF' },
};
window.TaglineBand = TaglineBand;
