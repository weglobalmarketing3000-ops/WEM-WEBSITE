// SlideShell.jsx — primitives shared across all slide types
// Matches real WE Marketing deck: black bg, magenta-pink subtitles, heavy condensed display

const Shell = ({ children, bg = '#000000', style = {}, padding = 80 }) => (
  <div style={{
    width: '100%', height: '100%',
    background: bg,
    color: '#fff',
    padding,
    position: 'relative',
    overflow: 'hidden',
    fontFamily: 'var(--font-sans)',
    ...style,
  }}>{children}</div>
);

// Title block: BIG WHITE DISPLAY headline + pink subtitle below (signature pattern)
const TitleBlock = ({ title, subtitle, size = 80, maxWidth = '90%' }) => (
  <div style={{ marginBottom: 48, maxWidth }}>
    <h1 style={{
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: size,
      lineHeight: .95,
      letterSpacing: '-.005em',
      textTransform: 'uppercase',
      color: '#fff',
      margin: 0,
    }}>{title}</h1>
    {subtitle && (
      <p style={{
        fontFamily: 'var(--font-sans)',
        fontWeight: 600,
        fontSize: 22,
        lineHeight: 1.4,
        color: '#FF1493',
        marginTop: 18,
        maxWidth: 1100,
      }}>{subtitle}</p>
    )}
  </div>
);

// Pill badge — used for category tags ("HEALTH", "BEAUTY", "ELECTRONICS")
const CategoryPill = ({ children, color = '#9B30FF' }) => (
  <span style={{
    display: 'inline-flex',
    alignItems: 'center',
    background: color,
    color: '#000',
    fontFamily: 'var(--font-sans)',
    fontWeight: 800,
    fontSize: 28,
    letterSpacing: '.03em',
    padding: '14px 32px',
    borderRadius: 14,
    textTransform: 'uppercase',
  }}>{children}</span>
);

// Stat card — rounded square, dark fill, faint magenta rim
const StatCard = ({ value, label, size = 'lg' }) => {
  const fontSize = size === 'lg' ? 56 : size === 'md' ? 48 : 40;
  return (
    <div style={{
      background: '#0A0A0A',
      border: '1px solid rgba(255,255,255,.12)',
      borderRadius: 16,
      padding: '28px 32px',
      minWidth: 200,
    }}>
      <div style={{
        fontFamily: 'var(--font-display)',
        fontWeight: 900,
        fontSize,
        lineHeight: 1,
        color: '#fff',
        letterSpacing: '-.01em',
      }}>{value}</div>
      <div style={{
        fontFamily: 'var(--font-sans)',
        fontWeight: 600,
        fontSize: 13,
        letterSpacing: '.08em',
        textTransform: 'uppercase',
        color: 'rgba(255,255,255,.65)',
        marginTop: 10,
      }}>{label}</div>
    </div>
  );
};

// Decorative orb — the iridescent purple/magenta 3D bubble in corner
const Orb = ({ size = 400, x = '85%', y = '50%', opacity = 1 }) => (
  <div style={{
    position: 'absolute',
    left: x, top: y,
    transform: 'translate(-50%, -50%)',
    width: size, height: size,
    borderRadius: '50%',
    background: 'radial-gradient(circle at 30% 25%, #FFB0FF 0%, #FF60D0 18%, #B040FF 42%, #6B14A3 70%, #1A0030 95%)',
    filter: 'blur(.5px)',
    opacity,
    pointerEvents: 'none',
    boxShadow: '0 0 80px rgba(155,48,255,.4)',
  }}/>
);

// Decorative edge shape — curved violet shape peeking from corner
const EdgeShape = ({ corner = 'tl', color = '#6B14A3' }) => {
  const positions = {
    tl: { top: -200, left: -200, transform: 'rotate(0deg)' },
    tr: { top: -150, right: -200, transform: 'rotate(90deg)' },
    bl: { bottom: -200, left: -150, transform: 'rotate(-90deg)' },
    br: { bottom: -150, right: -200, transform: 'rotate(180deg)' },
  };
  return (
    <div style={{
      position: 'absolute',
      width: 500, height: 500,
      background: `radial-gradient(circle at 30% 30%, ${color}AA 0%, transparent 60%)`,
      borderRadius: '60% 40% 50% 50% / 50% 60% 40% 50%',
      pointerEvents: 'none',
      ...positions[corner],
    }}/>
  );
};

// Phone mockup frame — used in Creator Ecosystem, Live Engine, etc.
const PhoneFrame = ({ children, width = 180, glow = false }) => (
  <div style={{
    width,
    aspectRatio: '9/19.5',
    background: '#000',
    border: '6px solid #1a1a1a',
    borderRadius: 28,
    overflow: 'hidden',
    position: 'relative',
    boxShadow: glow
      ? '0 0 0 1px rgba(255,255,255,.15), 0 0 40px rgba(155,48,255,.25)'
      : '0 0 0 1px rgba(255,255,255,.1)',
  }}>{children}</div>
);

// Photo placeholder for product/creator imagery
const PhotoPlaceholder = ({ tag = 'PHOTO', tone = 'creator' }) => {
  const tones = {
    creator: 'linear-gradient(135deg,#3a2a4a,#5a3070)',
    product: 'linear-gradient(135deg,#2a3050,#404060)',
    live: 'linear-gradient(135deg,#4a2030,#702550)',
    review: '#fff',
  };
  return (
    <div style={{
      width: '100%', height: '100%',
      background: tones[tone] || tones.creator,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: tone === 'review' ? '#999' : 'rgba(255,255,255,.4)',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '.15em',
      textTransform: 'uppercase',
    }}>{tag}</div>
  );
};

Object.assign(window, { Shell, TitleBlock, CategoryPill, StatCard, Orb, EdgeShape, PhoneFrame, PhotoPlaceholder });
