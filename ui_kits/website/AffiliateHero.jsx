// AffiliateHero.jsx, creator-facing hero w/ magenta-violet orb glow + network graphic
const DISCORD_URL = 'https://discord.gg/g2CKPFyR4X';
window.DISCORD_URL = DISCORD_URL;

const AffiliateHero = ({ lang }) => {
  const t = {
    en: {
      pill: 'WEM AFFILIATE · CREATOR COMMUNITY',
      h1a: 'Build. Post.', h1accent: 'Earn.',
      sub: 'Join 8,000+ TikTok Shop creators in the WEM Affiliate community. Boosted commission, exclusive brand collabs, free product samples, and content coaching from Top 1% creators, all in one place.',
      cta1: 'Join our Discord →',
      cta2: 'See creator perks',
      meta: ['Free to join', 'No agency link required', 'English + Espinol + 中文 support'],
    },
    zh: {
      pill: 'WEM 联盟 · 达人社群',
      h1a: '拍内容', h1accent: '赚佣金',
      sub: '加入 WEM 联盟社群，与 8,000+ TikTok Shop 达人一起：更高佣金、独家品牌合作、免费寄样、Top 1% 达人内容指导，一站齐全。',,
      cta1: '加入 Discord 社群 →',
      cta2: '查看达人权益',
      meta: ['免费加入', '无粉丝门槛', '中英双语支持'],
    },
  }[lang];
  return (
    <section style={ahStyles.wrap}>
      <div style={ahStyles.orb1}/>
      <div style={ahStyles.orb2}/>
      <div style={ahStyles.inner}>
        <div style={ahStyles.left}>
          <div style={ahStyles.pill}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#000"><path d="M12 0l2.5 7L22 8l-5.5 5L18 22l-6-3.5L6 22l1.5-9L2 8l7.5-1z"/></svg>
            {t.pill}
          </div>
          <h1 style={ahStyles.h1}>
            {t.h1a}<br/>
            <span style={ahStyles.h1accent}>{t.h1accent}</span>
          </h1>
          <p style={ahStyles.sub}>{t.sub}</p>
          <div style={ahStyles.ctas}>
            <a href={DISCORD_URL} target="_blank" rel="noopener" className="we-btn we-btn-primary" style={{ fontSize: 16, padding: '16px 30px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 10 }}>
              <svg width="20" height="20" viewBox="0 0 127.14 96.36" fill="currentColor"><path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"/></svg>
              {t.cta1}
            </a>
            <a href="#perks" style={ahStyles.ghost}>{t.cta2}</a>
          </div>
          <div style={ahStyles.meta}>
            {t.meta.map((m, i) => (
              <div key={i} style={ahStyles.metaItem}>
                <i data-lucide="check-circle-2" style={{ width: 16, height: 16, color: '#C6FF3D' }}/>
                {m}
              </div>
            ))}
          </div>
        </div>
        <div style={ahStyles.right}>
          <NetworkGraphic/>
        </div>
      </div>
    </section>
  );
};

// NetworkGraphic — irregular creator network with avatars + WEM core
// Avatars use DiceBear (open source, deterministic from seed); diverse mix w/ women majority
const NetworkGraphic = () => {
  const center = { x: 260, y: 250 };
  // Irregular node placement — varied distances + angles so edges feel organic
  // seeds pick illustrated avatars; gender/ethnicity cues baked into seed selection
  // style "avataaars" supports varied skin tones + hairstyles
  const nodes = [
    // women (6 of 9)
    { x: 235, y:  55, r: 30, seed: 'Maya',     ring: '#FF1493' },  // woman, Black
    { x: 430, y: 100, r: 22, seed: 'Sofia',    ring: '#9B30FF' },  // woman, Hispanic
    { x: 475, y: 215, r: 26, seed: 'Amara',    ring: '#00E5FF' },  // woman, Black
    { x: 450, y: 380, r: 20, seed: 'Lily',     ring: '#C6FF3D' },  // woman, Asian
    { x: 290, y: 450, r: 28, seed: 'Emma',     ring: '#FF1493' },  // woman, Caucasian
    { x:  95, y: 410, r: 22, seed: 'Priya',    ring: '#9B30FF' },  // woman, South Asian
    // men (3 of 9)
    { x:  35, y: 270, r: 26, seed: 'Marcus',   ring: '#C6FF3D' },  // man, Black
    { x:  80, y: 125, r: 20, seed: 'Diego',    ring: '#00E5FF' },  // man, Hispanic
    { x: 200, y: 190, r: 16, seed: 'Kenji',    ring: '#FF1493' },  // man, Asian — closer in
  ];
  const centerR = 58;

  return (
    <svg viewBox="0 0 520 500" style={{ width: '100%', height: 'auto', maxWidth: 540 }}>
      <defs>
        <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#FF1493" stopOpacity="0.7"/>
          <stop offset="60%"  stopColor="#9B30FF" stopOpacity="0.15"/>
          <stop offset="100%" stopColor="#9B30FF" stopOpacity="0"/>
        </radialGradient>
        <filter id="nodeGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="5"/>
        </filter>
        {/* clipPaths for circular avatar cropping */}
        {nodes.map((n, i) => (
          <clipPath key={`cp${i}`} id={`avClip${i}`}>
            <circle cx={n.x} cy={n.y} r={n.r}/>
          </clipPath>
        ))}
      </defs>

      {/* soft glow behind center */}
      <circle cx={center.x} cy={center.y} r="240" fill="url(#coreGlow)"/>

      {/* edges — from center to each node (varied lengths because positions are irregular) */}
      {nodes.map((n, i) => (
        <line key={`e${i}`} x1={center.x} y1={center.y} x2={n.x} y2={n.y}
              stroke={n.ring} strokeWidth="1" strokeOpacity="0.4" strokeDasharray="3 5">
          <animate attributeName="stroke-dashoffset" from="0" to="-16"
                   dur={`${2 + (i % 4) * 0.4}s`} repeatCount="indefinite"/>
        </line>
      ))}
      {/* a few peer-to-peer edges for network feel */}
      {[[0,1],[1,2],[2,3],[5,6],[7,0],[3,4],[8,5]].map(([a,b], i) => (
        <line key={`pe${i}`} x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y}
              stroke="#fff" strokeWidth="1" strokeOpacity="0.1"/>
      ))}

      {/* nodes with avatars */}
      {nodes.map((n, i) => (
        <g key={`n${i}`}>
          {/* glow */}
          <circle cx={n.x} cy={n.y} r={n.r + 6} fill={n.ring} opacity="0.25" filter="url(#nodeGlow)">
            <animate attributeName="opacity" values="0.15;0.38;0.15" dur={`${2.2 + (i % 4) * 0.35}s`} repeatCount="indefinite"/>
          </circle>
          {/* avatar bg fallback color */}
          <circle cx={n.x} cy={n.y} r={n.r} fill="#1a1a1a"/>
          {/* avatar image, circular clipped */}
          <image
            href={`https://api.dicebear.com/7.x/avataaars/svg?seed=${n.seed}&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf`}
            x={n.x - n.r} y={n.y - n.r} width={n.r * 2} height={n.r * 2}
            clipPath={`url(#avClip${i})`}
            preserveAspectRatio="xMidYMid slice"
          />
          {/* ring border */}
          <circle cx={n.x} cy={n.y} r={n.r} fill="none" stroke={n.ring} strokeWidth="2"/>
        </g>
      ))}

      {/* center WEM node */}
      <circle cx={center.x} cy={center.y} r={centerR} fill="#000" stroke="#FF1493" strokeWidth="2"/>
      <circle cx={center.x} cy={center.y} r={centerR} fill="url(#coreGlow)" opacity="0.5"/>
      <text x={center.x} y={center.y + 9} textAnchor="middle"
            fontFamily="var(--font-display, 'Barlow Condensed')"
            fontWeight="900" fontSize="38" fill="#fff" letterSpacing="-0.5">WEM</text>

      {/* outer pulse rings */}
      <circle cx={center.x} cy={center.y} r={centerR} fill="none" stroke="#FF1493" strokeWidth="1" opacity="0.4">
        <animate attributeName="r" from={centerR} to="160" dur="3s" repeatCount="indefinite"/>
        <animate attributeName="opacity" from="0.5" to="0" dur="3s" repeatCount="indefinite"/>
      </circle>
      <circle cx={center.x} cy={center.y} r={centerR} fill="none" stroke="#9B30FF" strokeWidth="1" opacity="0.4">
        <animate attributeName="r" from={centerR} to="160" dur="3s" begin="1.5s" repeatCount="indefinite"/>
        <animate attributeName="opacity" from="0.5" to="0" dur="3s" begin="1.5s" repeatCount="indefinite"/>
      </circle>
    </svg>
  );
};

const ahStyles = {
  wrap: { position: 'relative', background: '#000', color: '#fff', overflow: 'hidden' },
  orb1: { position: 'absolute', top: -120, right: -160, width: 720, height: 720, background: 'radial-gradient(circle, #FF1493 0%, transparent 50%)', filter: 'blur(60px)', opacity: .3, pointerEvents: 'none' },
  orb2: { position: 'absolute', bottom: -120, left: -120, width: 560, height: 560, background: 'radial-gradient(circle, #5865F2 0%, transparent 60%)', filter: 'blur(80px)', opacity: .35, pointerEvents: 'none' },
  inner: { position: 'relative', maxWidth: 1280, margin: '0 auto', padding: '100px 32px 100px', display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 48, alignItems: 'center' },
  left: {},
  right: { display: 'flex', justifyContent: 'center', alignItems: 'center' },
  pill: { display: 'inline-flex', alignItems: 'center', gap: 12, background: '#fff', color: '#000', borderRadius: 999, padding: '10px 22px', fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: 14, letterSpacing: '.06em' },
  h1: { fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(60px, 7.5vw, 124px)', lineHeight: .95, letterSpacing: '-.01em', textTransform: 'uppercase', margin: '32px 0 0', color: '#fff' },
  h1accent: { background: 'linear-gradient(90deg, #FF1493 0%, #9B30FF 50%, #C6FF3D 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent' },
  sub: { fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 20, lineHeight: 1.45, color: 'rgba(255,255,255,.85)', maxWidth: 620, marginTop: 28 },
  ctas: { display: 'flex', gap: 14, marginTop: 40, flexWrap: 'wrap' },
  ghost: { background: 'transparent', border: '1.5px solid rgba(255,255,255,.4)', color: '#fff', padding: '16px 30px', borderRadius: 999, fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 16, letterSpacing: '.04em', textTransform: 'uppercase', cursor: 'pointer', textDecoration: 'none', display: 'inline-flex', alignItems: 'center' },
  meta: { display: 'flex', gap: 28, marginTop: 36, flexWrap: 'wrap' },
  metaItem: { display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 14, color: 'rgba(255,255,255,.75)' },
};
window.AffiliateHero = AffiliateHero;
