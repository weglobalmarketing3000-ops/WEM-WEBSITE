// SlidesA.jsx — Cover, About, Highlights, Services, Why, Growth Approach

// 1. COVER — pink top band with pill + black bottom with WE MARKETING wordmark + logo
const CoverSlide = () => (
  <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
    {/* Pink band */}
    <div style={{ background: '#FF38B0', height: '32%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{
        background: '#fff', borderRadius: 999, padding: '18px 56px',
        display: 'inline-flex', alignItems: 'center', gap: 18,
      }}>
        {/* small star/burst icon */}
        <svg width="28" height="28" viewBox="0 0 24 24" fill="#000"><path d="M12 0l2.5 7L22 8l-5.5 5L18 22l-6-3.5L6 22l1.5-9L2 8l7.5-1z"/></svg>
        <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: 32, letterSpacing: '.04em', color: '#000' }}>
          TIKTOK SHOP PARTNER AGENCY
        </span>
      </div>
    </div>
    {/* Black bottom */}
    <div style={{ background: '#000', flex: 1, display: 'grid', gridTemplateColumns: '1.4fr 1fr', alignItems: 'center', padding: '0 100px' }}>
      <div>
        <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 36, color: '#FF38B0', margin: 0 }}>
          We help brands &amp; sellers scale on TikTok
        </p>
        <h1 style={{
          fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 200, lineHeight: .9,
          letterSpacing: '-.005em', color: '#fff', textTransform: 'uppercase', margin: '32px 0 0',
        }}>WE<br/>MARKETING</h1>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src="../../assets/we-logo-white.png" alt="WE Marketing" style={{ width: 480 }}/>
      </div>
    </div>
  </div>
);

// 2. ABOUT US — big purple orb on left, title overlapping, copy on right
const AboutSlide = () => (
  <Shell>
    <Orb size={620} x="28%" y="55%"/>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, height: '100%', alignItems: 'center', position: 'relative' }}>
      <div>
        <h1 style={{
          fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 200, lineHeight: .88,
          letterSpacing: '-.005em', color: '#fff', textTransform: 'uppercase', margin: 0,
          position: 'relative', zIndex: 2,
        }}>ABOUT<br/>US</h1>
      </div>
      <div>
        <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 26, lineHeight: 1.4, color: '#FF1493', margin: 0 }}>
          WE MARKETING is a TikTok Shop Partner Agency built to drive performance at scale.
        </p>
        <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 400, fontSize: 24, lineHeight: 1.55, color: '#fff', marginTop: 28 }}>
          We combine shop strategy, creator activation, content systems and live operations to unlock sustainable growth. From cold start validation to scalable performance, we turn TikTok Shop into a consistent and repeatable revenue engine for your brand.
        </p>
      </div>
    </div>
  </Shell>
);

// 3. KEY HIGHLIGHTS — 4 stat cards w/ rim glow, iridescent ring decoration top-right
const HighlightsSlide = () => {
  const stats = [
    ['160+', 'SHOP PARTNERS\nSERVED'],
    ['200K+', 'U.S. INFLUENCERS\nCOLLABORATED'],
    ['15M+', 'ANNUAL SALES\nMANAGED'],
    ['BADGE', 'TIKTOK SHOP\nPARTNER AGENCY'],
  ];
  return (
    <Shell>
      {/* iridescent ring top-right */}
      <div style={{
        position: 'absolute', top: -100, right: -150, width: 500, height: 500,
        borderRadius: '50%',
        background: 'conic-gradient(from 180deg, #FF1493, #9B30FF, #4A8FFF, #00E0D0, #9B30FF, #FF1493)',
        filter: 'blur(40px)', opacity: .5,
      }}/>
      <h1 style={{
        fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 110, lineHeight: 1,
        letterSpacing: '-.005em', color: '#fff', textTransform: 'uppercase', margin: 0,
      }}>OUR KEY HIGHLIGHTS</h1>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32, marginTop: 100 }}>
        {stats.map(([v, l], i) => (
          <div key={i} style={{
            aspectRatio: '1/1.05',
            background: '#000',
            border: '1px solid rgba(255,255,255,.18)',
            borderRadius: 18,
            padding: 32,
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            textAlign: 'center', gap: 32,
            boxShadow: '0 0 0 1px rgba(255,20,147,.15), 0 0 40px rgba(155,48,255,.18)',
          }}>
            {v === 'BADGE' ? (
              <div style={{
                width: 180, height: 180, borderRadius: '50%',
                background: 'radial-gradient(circle, #fff 30%, transparent 32%), conic-gradient(from 0deg, #FF1493, #00E0D0, #FF1493)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                position: 'relative',
              }}>
                <div style={{
                  position: 'absolute', inset: 12, borderRadius: '50%', background: '#fff',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-sans)', color: '#000', textAlign: 'center', padding: 20,
                }}>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.1em' }}>♪ TikTok Shop</div>
                  <div style={{ fontSize: 13, fontWeight: 500, marginTop: 4 }}>Certified</div>
                  <div style={{ fontSize: 22, fontFamily: 'var(--font-display)', fontWeight: 900, fontStyle: 'italic' }}>Agency</div>
                  <div style={{ fontSize: 9, marginTop: 4, color: '#888' }}>Since 2023</div>
                </div>
              </div>
            ) : (
              <div style={{
                fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 92, lineHeight: 1,
                color: '#fff', letterSpacing: '-.01em',
              }}>{v}</div>
            )}
            <div style={{
              fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 18, lineHeight: 1.3,
              letterSpacing: '.06em', color: '#fff', whiteSpace: 'pre-line',
            }}>{l}</div>
          </div>
        ))}
      </div>
    </Shell>
  );
};

// 4. OUR SERVICES — 3x2 grid, pink heading + body
const ServicesSlide = () => {
  const svc = [
    ['COLDSTART LAUNCHPAD', 'Build social proof, generate early orders, create momentum, optimize listings, and design campaigns for new products.'],
    ['AFFILIATE MARKETING', 'Full-cycle management from outreach and sampling to affiliate campaigns, livestreams, and performance tracking.'],
    ['SHORT VIDEO MANAGEMENT', 'Produce and test diverse short-form content, analyze product angles, craft strong hooks and scripts, and optimize for performance.'],
    ['LIVE MANAGEMENT', 'Strategy and management for brand live and affiliate live, including planning, host training, content flow, campaign design and performance optimization.'],
    ['CREATOR MATCHMAKING', 'Connect brands with the right creators to reach the right audience at the right time.'],
    ['SHOP MANAGEMENT', 'Strategy and execution across assortment, listings, campaigns, and pricing to drive sales and long-term growth.'],
  ];
  return (
    <Shell>
      <EdgeShape corner="tl" color="#9B30FF"/>
      <Orb size={120} x="62%" y="26%" opacity={.95}/>
      <Orb size={80} x="92%" y="62%" opacity={.85}/>
      <h1 style={{
        fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 120, lineHeight: 1,
        color: '#fff', textTransform: 'uppercase', margin: 0, position: 'relative',
      }}>OUR SERVICES</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '48px 56px', marginTop: 80, position: 'relative' }}>
        {svc.map(([title, body], i) => (
          <div key={i}>
            <h3 style={{
              fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: 24, lineHeight: 1.15,
              letterSpacing: '.01em', color: '#FF1493', margin: 0, textTransform: 'uppercase',
            }}>{title}</h3>
            <p style={{
              fontFamily: 'var(--font-sans)', fontWeight: 400, fontSize: 18, lineHeight: 1.5,
              color: '#fff', marginTop: 18,
            }}>{body}</p>
          </div>
        ))}
      </div>
    </Shell>
  );
};

// 5. WHY BRANDS CHOOSE US — bullets in pink, decorative rocket
const WhyUsSlide = () => (
  <Shell>
    <h1 style={{
      fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 110, lineHeight: 1,
      color: '#fff', textTransform: 'uppercase', margin: 0,
    }}>WHY BRANDS CHOOSE US</h1>
    <div style={{ marginTop: 80, maxWidth: 1300 }}>
      {[
        'Rapid creator activation at scale',
        'Proven cold start framework that drives early traction',
        'True end-to-end management across creator, content, live and shop',
      ].map((b, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'baseline', gap: 18, marginBottom: 32 }}>
          <span style={{ color: '#FF1493', fontSize: 28, lineHeight: 1 }}>•</span>
          <span style={{
            fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 36, lineHeight: 1.35,
            color: '#FF1493',
          }}>{b}</span>
        </div>
      ))}
    </div>
    {/* iridescent rocket placeholder */}
    <div style={{
      position: 'absolute', bottom: 100, right: 120, width: 220, height: 140,
      background: 'linear-gradient(135deg,#FFE0F0,#E0F0FF,#FFE0F0)',
      borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
      transform: 'rotate(-20deg)',
      boxShadow: '0 10px 40px rgba(255,20,147,.3)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: '#888', fontFamily: 'var(--font-mono)', fontSize: 10,
    }}>🏈 ROCKET</div>
  </Shell>
);

// 6. GROWTH APPROACH — 6 colored chevron arrows
const GrowthApproachSlide = () => {
  const stages = [
    ['Cold Start', '#9C7FE8'],
    ['Creator\nActivation', '#7FB8E8'],
    ['Content\nEngine', '#E87F8E'],
    ['Live\nEngine', '#E8A57F'],
    ['Shop\nOptimization', '#5FD9C9'],
    ['Scale', '#E86E47'],
  ];
  return (
    <Shell>
      <TitleBlock
        title="GROWTH APPROACH"
        subtitle="We drive end-to-end performance through a unified system that moves brands from cold start validation to scalable growth."
        size={92}
      />
      <div style={{ display: 'flex', alignItems: 'center', marginTop: 100, gap: 0 }}>
        {stages.map(([label, color], i) => (
          <div key={i} style={{
            background: color,
            color: '#000',
            padding: '32px 28px 32px 32px',
            clipPath: 'polygon(0 0, calc(100% - 24px) 0, 100% 50%, calc(100% - 24px) 100%, 0 100%, 24px 50%)',
            marginLeft: i === 0 ? 0 : -16,
            minWidth: 200,
            textAlign: 'center',
            fontFamily: 'var(--font-sans)',
            fontWeight: 800,
            fontSize: 24,
            lineHeight: 1.15,
            whiteSpace: 'pre-line',
          }}>{label}</div>
        ))}
      </div>
      {/* Bar chart icon bottom right */}
      <div style={{ position: 'absolute', bottom: 80, right: 120, display: 'flex', alignItems: 'flex-end', gap: 6 }}>
        {[40, 60, 90, 110, 130].map((h, i) => (
          <div key={i} style={{ width: 28, height: h, background: `oklch(${.5 + i * .08} .2 150)`, borderRadius: 4 }}/>
        ))}
        <div style={{ marginLeft: 12, color: '#22C55E', fontSize: 60, fontFamily: 'var(--font-display)', fontWeight: 900 }}>$</div>
      </div>
    </Shell>
  );
};

Object.assign(window, { CoverSlide, AboutSlide, HighlightsSlide, ServicesSlide, WhyUsSlide, GrowthApproachSlide });
