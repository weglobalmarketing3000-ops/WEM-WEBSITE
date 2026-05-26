// SlidesB.jsx — Cold Start, Showcase, Creator Ecosystem, Live Engine, etc.

// 7. COLD START ACCELERATOR — left text + bullets, big bubble photo right
const ColdStartSlide = () => (
  <Shell>
    {/* big iridescent bubble placeholder right */}
    <div style={{
      position: 'absolute', top: 80, right: 60, width: 720, height: 580,
    }}>
      <div style={{
        position: 'absolute', top: 60, left: 100, width: 480, height: 380, borderRadius: '50%',
        background: 'radial-gradient(circle at 35% 30%, #FFFFFF 0%, #FFB0E8 12%, #B8A0FF 35%, #6040A0 65%, #1A0A30 95%)',
        filter: 'blur(.5px)',
        boxShadow: '0 0 100px rgba(155,48,255,.4)',
      }}/>
      {/* small bubble */}
      <div style={{
        position: 'absolute', top: 120, right: 30, width: 80, height: 70, borderRadius: '50%',
        background: 'radial-gradient(circle at 35% 30%, #FFB0E8 10%, #6040A0 70%)',
      }}/>
    </div>

    <div style={{ maxWidth: 1100, position: 'relative' }}>
      <h1 style={{
        fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 96, lineHeight: 1,
        color: '#fff', textTransform: 'uppercase', margin: 0,
      }}>COLD START<br/>ACCELERATOR</h1>
      <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 22, color: '#FF1493', marginTop: 24 }}>
        Turn new or unproven products into validated winners fast.
      </p>

      <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: 32, color: '#fff', marginTop: 60 }}>How We Do It</h3>
      <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 400, fontSize: 20, color: '#fff', marginTop: 12 }}>
        We generate authentic early traction by seeding products through controlled samples:
      </p>

      <ul style={{ listStyle: 'none', padding: 0, margin: '24px 0 0' }}>
        {[
          ['Authentic Social Proof', 'Drive real customer interactions and experiences that help establish credibility and trust for new buyers.'],
          ['Creator Seeding', 'Activate 50–100+ creators to produce authentic content to spark early awareness and engagement.'],
          ['Improved Metrics', 'Strengthen CTR, watch time, add-to-cart and conversion signals through diverse content formats.'],
          ['Algorithm Boost', 'Feed the system with meaningful buyer and viewer behavior data so TikTok can learn who the product is for and begin scaling delivery.'],
        ].map(([k, v], i) => (
          <li key={i} style={{ display: 'flex', gap: 14, marginTop: 14, fontFamily: 'var(--font-sans)', fontSize: 19, lineHeight: 1.45 }}>
            <span style={{ color: '#FF1493', fontSize: 20 }}>•</span>
            <span><span style={{ color: '#FF1493', fontWeight: 700 }}>{k} →</span> <span style={{ color: '#fff' }}>{v}</span></span>
          </li>
        ))}
      </ul>
    </div>
  </Shell>
);

// 8. SHOWCASE #1 (Electronics) — title + pill + 3 stats stacked right + screenshot bottom
const ShowcaseElectronicsSlide = () => (
  <Shell>
    <EdgeShape corner="tl" color="#9B30FF"/>
    <EdgeShape corner="br" color="#9B30FF"/>
    <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 60, position: 'relative' }}>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 32, marginBottom: 28 }}>
          <h1 style={{
            fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 76, lineHeight: 1,
            color: '#fff', textTransform: 'uppercase', margin: 0,
          }}>COLD START<br/>SHOWCASE #1</h1>
          <CategoryPill color="#7FB8E8">Electronics</CategoryPill>
        </div>
        <p style={{
          fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 22, lineHeight: 1.5,
          color: '#FF1493', marginTop: 0, maxWidth: 720,
        }}>
          We drove the cold start by producing diverse video formats each day, testing different hooks, storylines, and product angles. Real-time tracking allowed us to quickly see what resonated and refine the creative approach. By doubling down on the best-performing content, we increased organic reach and traffic, which helped us successfully cold start the shop and product.
        </p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'stretch' }}>
        {[['$16K', 'GMV IN FIRST 10 DAYS'], ['200K+', 'ORGANIC VIDEO VIEWS'], ['$63K', 'GMV IN FIRST 28 DAYS']].map(([v, l], i) => (
          <div key={i} style={{
            background: '#0A0A0A', border: '1px solid rgba(255,255,255,.1)', borderRadius: 16,
            padding: '24px 32px',
          }}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 56, lineHeight: 1, color: '#fff' }}>{v}</div>
            <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 14, letterSpacing: '.06em', color: '#fff', marginTop: 10 }}>{l}</div>
          </div>
        ))}
      </div>
    </div>
    {/* TikTok Shop dashboard placeholder */}
    <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 40, marginTop: 40, position: 'relative' }}>
      <div style={{
        background: '#0E0E0E', border: '1px solid rgba(255,255,255,.08)', borderRadius: 14, padding: 24,
        height: 200,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, color: '#fff', fontSize: 14, fontWeight: 600 }}>
          <span style={{ color: '#FF1493' }}>♪</span> TikTok Shop · Center
        </div>
        <div style={{ marginTop: 20, color: 'rgba(255,255,255,.6)', fontSize: 11, letterSpacing: '.1em' }}>LAST 28 DAYS</div>
        <div style={{ display: 'flex', gap: 32, marginTop: 12 }}>
          {[['GMV', '$63,328.88', '+2.2K%'], ['Customers', '2,284', '+1.8K%'], ['SKU orders', '2,341', '+1.9K%'], ['Visitors', '57,776', '+1.8K%']].map(([k, v, d], i) => (
            <div key={i}>
              <div style={{ color: 'rgba(255,255,255,.55)', fontSize: 12 }}>{k} ▸</div>
              <div style={{ color: '#fff', fontSize: 22, fontWeight: 700, fontFamily: 'var(--font-display)', marginTop: 6 }}>{v}</div>
              <div style={{ color: '#22C55E', fontSize: 11, marginTop: 2 }}>{d}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={{
        background: '#fff', borderRadius: 14, height: 200, padding: 16,
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
      }}>
        <div style={{ display: 'flex', gap: 4 }}>
          {['10.7K','19.9K','15.9K','35.8K','39.4K','12.6K'].map((v, i) => (
            <div key={i} style={{ flex: 1, aspectRatio: '9/16', background: `linear-gradient(135deg, oklch(${.5 + i * .04} .15 ${300 + i * 10}), #2a2a2a)`, borderRadius: 4, display: 'flex', alignItems: 'flex-end', justifyContent: 'center', padding: 4, color: '#fff', fontSize: 9, fontWeight: 600 }}>▶ {v}</div>
          ))}
        </div>
      </div>
    </div>
  </Shell>
);

// 9. SHOWCASE #2 (Fashion) — phone mockups + copy + stats bottom
const ShowcaseFashionSlide = () => (
  <Shell>
    <Orb size={250} x="100%" y="100%" opacity={.7}/>
    <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr auto auto', gap: 48, alignItems: 'start' }}>
      <div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 64, lineHeight: 1, color: '#fff', textTransform: 'uppercase', margin: 0 }}>
          COLD START<br/>SHOWCASE #2
        </h1>
        <div style={{ marginTop: 24 }}><CategoryPill color="#7FB8E8">Fashion</CategoryPill></div>
        <div style={{ marginTop: 32, width: 200 }}><PhoneFrame width={200}><PhotoPlaceholder tag="SHOP·BLANK&GRAPHIC TEES" tone="creator"/></PhoneFrame></div>
      </div>
      <div>
        <p style={{
          fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 22, lineHeight: 1.55,
          color: '#FF1493', marginTop: 80,
        }}>
          We built early social proof to spark trust and momentum, then optimized listings with stronger images and positioning to drive higher conversion. Scaling through creators unlocked viral reach, delivering 2M+ views in one week. To lift AOV and protect margin, we designed value-driven offers that turned traffic into profitable growth.
        </p>
      </div>
      <div style={{ marginTop: 80 }}><PhoneFrame width={200}><PhotoPlaceholder tag="@ZAYN" tone="creator"/></PhoneFrame></div>
      <div style={{ marginTop: 80 }}><PhoneFrame width={200}><PhotoPlaceholder tag="@SEBASTIAN" tone="creator"/></PhoneFrame></div>
    </div>
    <div style={{ display: 'flex', gap: 16, marginTop: 60 }}>
      {[['2M+', 'VIEWS DRIVEN BY ONE VIDEO'], ['100+', 'DAILY ORDERS BY SECOND MONTH'], ['2K+', 'CREATORS ACTIVATED BY SECOND MONTH']].map(([v, l], i) => (
        <div key={i} style={{ background: '#0A0A0A', border: '1px solid rgba(255,255,255,.1)', borderRadius: 14, padding: '20px 28px', flex: 1 }}>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 56, color: '#fff', lineHeight: 1 }}>{v}</div>
          <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 13, letterSpacing: '.06em', color: '#fff', marginTop: 10 }}>{l}</div>
        </div>
      ))}
    </div>
  </Shell>
);

// 10. CREATOR ECOSYSTEM — phones in arc over purple curve
const CreatorEcosystemSlide = () => (
  <Shell>
    <TitleBlock
      title="CREATOR ECOSYSTEM"
      subtitle="We activate creators across different categories and content styles, from KOLs to high volume KOCs."
      size={88}
    />
    {/* big purple curve in middle */}
    <div style={{
      position: 'absolute', bottom: 80, left: '50%', transform: 'translateX(-50%)',
      width: 800, height: 380, borderRadius: '50%',
      background: 'radial-gradient(ellipse, #6B14A3 0%, #A030CF 45%, transparent 70%)',
      filter: 'blur(2px)', opacity: .7,
    }}/>
    {/* phones in arc */}
    <div style={{ position: 'absolute', bottom: 60, left: 80, right: 80, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
      {[
        { tag: 'CREATOR 1', y: 0 },
        { tag: 'CREATOR 2', y: -40 },
        { tag: 'PRODUCT', y: -10 },
        { tag: 'COFFEE', y: -80 },
        { tag: 'BEAUTY', y: -50 },
        { tag: 'SKINCARE', y: -90 },
        { tag: 'PERSONAL', y: -30 },
        { tag: 'OUTFIT', y: 10 },
      ].map((p, i) => (
        <div key={i} style={{ transform: `translateY(${p.y}px)` }}>
          <PhoneFrame width={130} glow><PhotoPlaceholder tag={p.tag} tone="creator"/></PhoneFrame>
        </div>
      ))}
    </div>
  </Shell>
);

Object.assign(window, { ColdStartSlide, ShowcaseElectronicsSlide, ShowcaseFashionSlide, CreatorEcosystemSlide });
