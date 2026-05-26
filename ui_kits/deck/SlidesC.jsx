// SlidesC.jsx — Creator Community, Content Engine, Live Engine, Showcase Health/Beauty, Matchmaking, Closing

// 11. CREATOR COMMUNITY — Discord-like sidebar mock + 3 bullet points
const CreatorCommunitySlide = () => (
  <Shell>
    <TitleBlock
      title="CREATOR COMMUNITY"
      subtitle="Leverage our trusted community of 6000+ vetted creators for any campaign goal"
      size={88}
    />
    <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 60, marginTop: 40 }}>
      {/* Discord mock */}
      <div style={{
        background: '#1a1326', borderRadius: 14, overflow: 'hidden',
        border: '1px solid rgba(255,255,255,.08)', height: 480, display: 'grid', gridTemplateColumns: '220px 1fr',
      }}>
        <div style={{ background: '#10081a', padding: 12, color: 'rgba(255,255,255,.7)', fontSize: 11 }}>
          <div style={{ fontWeight: 700, fontSize: 13, color: '#fff', marginBottom: 12 }}>WE Marketing ▾</div>
          {['ENaSkin x WE Marketing','HAIRtamin x WE Marketing','Hot Collabs & Samples','BYNEWCELL x WE Marketing','Bask and Bath x WE Marketing','Nebility x WE Marketing','Hyland\'s x WE Marketing','Westmore Beauty x WE Marketing','Nello x WE Marketing','SKINIO04 x WE Marketing','myQ x WE Marketing','Medicube x WE Marketing','Ritual x WE Marketing','COSRX x WE Marketing','Bock and Bather x WE Marketing'].map((c, i) => (
            <div key={i} style={{ padding: '4px 8px', borderRadius: 4, background: i === 9 ? '#2a1a3a' : 'transparent', marginBottom: 2, fontSize: 10, lineHeight: 1.4 }}>🔒 {c}</div>
          ))}
        </div>
        <div style={{ background: '#0d0614', padding: 16 }}>
          <div style={{ color: '#fff', fontSize: 13, fontWeight: 700 }}># Members</div>
          <div style={{ marginTop: 16, fontFamily: 'var(--font-mono)', fontSize: 9, color: 'rgba(255,255,255,.5)' }}>
            {Array.from({length: 12}).map((_, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '20px 1fr 80px 60px 50px 30px', gap: 8, padding: '4px 0', borderBottom: '1px solid rgba(255,255,255,.05)', alignItems: 'center' }}>
                <span>☐</span>
                <span style={{ background: 'rgba(255,255,255,.1)', height: 8, borderRadius: 2 }}/>
                <span>Mar 25, 2026</span>
                <span>Feb 8, 2022</span>
                <span style={{ background: '#1da1f2', color: '#fff', padding: '2px 6px', borderRadius: 8, fontSize: 8, textAlign: 'center' }}>Creator</span>
                <span>+3</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 12, color: 'rgba(255,255,255,.7)', fontSize: 10, display: 'flex', justifyContent: 'space-between' }}>
            <span>Showing 12 ▾ members of <span style={{ color: '#fff', fontWeight: 700 }}>6,654</span></span>
            <span>‹ Back  <span style={{ background: '#FF1493', color: '#fff', padding: '2px 6px', borderRadius: 4 }}>1</span> 2 3 4 5 ... Next ›</span>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 28, paddingTop: 20 }}>
        {[
          ['Speed & Scale:', 'Instantly match with a large volume of relevant creators for rapid campaign launch'],
          ['Direct Access & Trust:', 'Skip the cold outreach. We provide direct access to creators who already engage with us.'],
          ['Any Model, Ready to Go:', 'Whether for paid collabs, retainers, or commission-based seeding, our creators are mobilized for them.'],
        ].map(([k, v], i) => (
          <div key={i} style={{ display: 'flex', gap: 12 }}>
            <span style={{ color: '#FF1493', fontSize: 22 }}>•</span>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: 19, lineHeight: 1.4 }}>
              <span style={{ color: '#FF1493', fontWeight: 700 }}>{k}</span> <span style={{ color: '#fff' }}>{v}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </Shell>
);

// 12. CONTENT ENGINE — 4 phones with format labels
const ContentEngineSlide = () => {
  const formats = [['Green Screen', 'GREEN SCREEN'], ['Unboxing', 'UNBOXING'], ['Product Review', 'REVIEW'], ['TikTok-friendly\n"Scroll-Stopper" Videos', 'SCROLL-STOPPER']];
  return (
    <Shell>
      <TitleBlock
        title="CONTENT ENGINE"
        subtitle="High volume creator content produced across diverse angles and formats."
        size={88}
      />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32, marginTop: 80 }}>
        {formats.map(([label, tag], i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24 }}>
            <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 26, color: '#fff', textAlign: 'center', whiteSpace: 'pre-line' }}>{label}</h3>
            <PhoneFrame width={240}><PhotoPlaceholder tag={tag} tone="creator"/></PhoneFrame>
          </div>
        ))}
      </div>
    </Shell>
  );
};

// 13. LIVE ENGINE — 4 phone livestreams w/ pink+orange glow
const LiveEngineSlide = () => (
  <Shell>
    <div style={{ position: 'absolute', bottom: 0, left: 0, width: 400, height: 400, background: 'radial-gradient(circle, #FF4500 0%, transparent 60%)', filter: 'blur(40px)', opacity: .5 }}/>
    <div style={{ position: 'absolute', bottom: 0, right: 0, width: 400, height: 400, background: 'radial-gradient(circle, #FF80B0 0%, transparent 60%)', filter: 'blur(40px)', opacity: .4 }}/>
    <TitleBlock
      title="LIVE ENGINE"
      subtitle="High performing live sessions that drive real-time conversion, engagement and momentum."
      size={88}
    />
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32, marginTop: 80, position: 'relative' }}>
      {['LIVE · MOONBREW','FLASH SALE','LIVE · SHOP','BLACK FRIDAY'].map((tag, i) => (
        <div key={i} style={{ display: 'flex', justifyContent: 'center' }}>
          <PhoneFrame width={250} glow><PhotoPlaceholder tag={tag} tone="live"/></PhoneFrame>
        </div>
      ))}
    </div>
  </Shell>
);

// 14. SHOWCASE HEALTH
const ShowcaseHealthSlide = () => (
  <Shell>
    <EdgeShape corner="br" color="#9B30FF"/>
    <div style={{ display: 'flex', alignItems: 'center', gap: 32, marginBottom: 28 }}>
      <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 88, lineHeight: 1, color: '#fff', textTransform: 'uppercase', margin: 0 }}>SHOWCASE #1</h1>
      <CategoryPill color="#9C7FE8">Health</CategoryPill>
    </div>
    <div style={{ display: 'flex', gap: 16, marginTop: 24 }}>
      {[['10K', 'CREATORS ACTIVATED IN ONE MONTH'], ['%118+', 'GMV GROWTH IN ONE MONTH'], ['33K', 'AFFILIATE VIDEOS IN 90 DAYS']].map(([v, l], i) => (
        <div key={i} style={{ background: '#0A0A0A', border: '1px solid rgba(255,255,255,.1)', borderRadius: 14, padding: '18px 24px', flex: 1 }}>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 52, color: '#fff', lineHeight: 1 }}>{v}</div>
          <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 12, letterSpacing: '.06em', color: '#fff', marginTop: 8 }}>{l}</div>
        </div>
      ))}
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: 'auto auto 1fr auto auto', gap: 24, marginTop: 40, alignItems: 'start' }}>
      <PhoneFrame width={170}><PhotoPlaceholder tag="LIVE · MOONBREW" tone="live"/></PhoneFrame>
      <PhoneFrame width={170}><PhotoPlaceholder tag="GIFT GALLERY" tone="live"/></PhoneFrame>
      <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 19, lineHeight: 1.5, color: '#FF1493', maxWidth: 560 }}>
        We scaled a full-funnel affiliate strategy, activating over 10K creators and generating 9K videos in a single month. To lift AOV, we launched gift-with-purchase offers, and we activated affiliate livestreams with exclusive flash deals and giveaways to boost engagement. These initiatives took the product viral on TikTok Shop, built brand and product awareness, and set the foundation for long-term growth.
      </p>
      <PhoneFrame width={170}><PhotoPlaceholder tag="MOONBREW SHOP" tone="creator"/></PhoneFrame>
      <PhoneFrame width={170}><PhotoPlaceholder tag="@MAGNESIUM" tone="creator"/></PhoneFrame>
    </div>
  </Shell>
);

// 15. SHOWCASE BEAUTY
const ShowcaseBeautySlide = () => (
  <Shell>
    <EdgeShape corner="tl" color="#9B30FF"/>
    <EdgeShape corner="br" color="#FF80B0"/>
    <div style={{ display: 'flex', alignItems: 'center', gap: 32, marginBottom: 28 }}>
      <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 88, lineHeight: 1, color: '#fff', textTransform: 'uppercase', margin: 0 }}>SHOWCASE #2</h1>
      <CategoryPill color="#FFC0E0">Beauty</CategoryPill>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: 'auto 1.4fr auto auto 1fr', gap: 28, marginTop: 40, alignItems: 'start' }}>
      <PhoneFrame width={200}><PhotoPlaceholder tag="SKINCARE DEMO" tone="creator"/></PhoneFrame>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ background: '#fff', borderRadius: 12, padding: 14, height: 170 }}>
          <div style={{ fontSize: 11, fontWeight: 700 }}>Analytics</div>
          <div style={{ fontSize: 9, color: '#888' }}>Key metrics</div>
          <div style={{ marginTop: 8, fontSize: 18, fontWeight: 700 }}>$312,343</div>
          <svg width="100%" height="80" viewBox="0 0 200 80"><path d="M0 60 Q40 50 60 40 T120 30 T200 25" stroke="#FF1493" fill="none" strokeWidth="2"/><path d="M0 70 Q40 65 60 60 T120 50 T200 45" stroke="#FFB833" fill="none" strokeWidth="2"/></svg>
        </div>
        <div style={{ background: '#fff', borderRadius: 12, padding: 14, height: 170, position: 'relative' }}>
          <div style={{ fontSize: 11, fontWeight: 700 }}>Analytics · Key metrics</div>
          <div style={{ marginTop: 8, fontSize: 18, fontWeight: 700 }}>$982,389</div>
          <svg width="100%" height="80" viewBox="0 0 200 80"><path d="M0 60 Q40 30 80 20 T200 10" stroke="#FF1493" fill="none" strokeWidth="3"/></svg>
          <div style={{ position: 'absolute', top: -30, left: -10, fontSize: 60, color: '#FF1493', transform: 'rotate(140deg)' }}>↗</div>
        </div>
      </div>
      <div style={{ background: '#0A0A0A', border: '1px solid rgba(255,255,255,.1)', borderRadius: 14, padding: '20px 28px', minWidth: 220 }}>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 56, color: '#fff', lineHeight: 1 }}>$982K</div>
        <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 13, color: '#fff', marginTop: 10 }}>GMV GENERATED IN ONE MONTH</div>
      </div>
      <div style={{ background: '#0A0A0A', border: '1px solid rgba(255,255,255,.1)', borderRadius: 14, padding: '20px 28px', minWidth: 220 }}>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 56, color: '#fff', lineHeight: 1 }}>%215+</div>
        <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 13, color: '#fff', marginTop: 10 }}>GMV GROWTH IN ONE MONTH</div>
      </div>
      <div>
        <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 18, color: '#fff', margin: 0, lineHeight: 1.5 }}>
          We introduced a hero bundle to anchor the assortment and capture shopper attention.
        </p>
        <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: 17, color: '#FF1493', marginTop: 12, lineHeight: 1.5 }}>
          Different product pairings were tested each week to identify winning mixes and improve sell-through. To raise AOV, we rolled out campaigns like gift-with-purchase, upselling, and volume discounts. At the same time, we refined listings with clearer images, titles, and descriptions, which helped lift both click-through and conversion.
        </p>
      </div>
    </div>
  </Shell>
);

// 16. CREATOR MATCHMAKING SHOWCASE — 2 phones, pill, 2 stats, copy
const CreatorMatchmakingSlide = () => (
  <Shell>
    <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 96, lineHeight: 1, color: '#fff', textTransform: 'uppercase', margin: 0 }}>CREATOR MATCHMAKING SHOWCASE</h1>
    <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto 1fr', gap: 40, marginTop: 60, alignItems: 'start' }}>
      <PhoneFrame width={220}><PhotoPlaceholder tag="@SACHEU·LIPSTICK" tone="creator"/></PhoneFrame>
      <PhoneFrame width={220}><PhotoPlaceholder tag="@SACHEU·BLACK FRIDAY" tone="creator"/></PhoneFrame>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <CategoryPill color="#9C7FE8">SACHEU</CategoryPill>
        <div style={{ background: '#0A0A0A', border: '1px solid rgba(255,255,255,.1)', borderRadius: 14, padding: '20px 28px' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 48, color: '#fff', lineHeight: 1 }}>2.5 M+</div>
          <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 12, color: '#fff', marginTop: 8 }}>VIEWS IN ONE MONTH</div>
        </div>
        <div style={{ background: '#0A0A0A', border: '1px solid rgba(255,255,255,.1)', borderRadius: 14, padding: '20px 28px' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 48, color: '#fff', lineHeight: 1 }}>10K+</div>
          <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 12, color: '#fff', marginTop: 8 }}>GMV DURING BLACK FRIDAY</div>
        </div>
      </div>
      <div>
        <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: 28, color: '#fff', margin: 0 }}>How We Made It Work</h3>
        <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 19, lineHeight: 1.5, color: '#FF1493', marginTop: 14 }}>
          We matched the brand with the right creator and the right audience.
          After the first video took off, we quickly doubled down with a follow-up video in the same format, filmed as a comment reply to capture and convert the traffic.
        </p>
      </div>
    </div>
  </Shell>
);

// 17. CLOSING — pink-violet glow gradient, contact left, big headline right
const ClosingSlide = () => (
  <Shell padding={0}>
    <div style={{
      position: 'absolute', top: '50%', right: -100, transform: 'translateY(-50%)',
      width: 900, height: 900, borderRadius: '50%',
      background: 'radial-gradient(circle, #FF80F0 0%, #FF1493 25%, #9B30FF 55%, transparent 75%)',
      filter: 'blur(20px)',
    }}/>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', height: '100%', alignItems: 'center', padding: 100, position: 'relative' }}>
      <div>
        <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: 32, color: '#fff' }}>Wendy Lin</div>
        <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 400, fontSize: 22, color: 'rgba(255,255,255,.7)', marginTop: 4 }}>Founder</div>
        <div style={{ marginTop: 40, display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '20px 32px', alignItems: 'baseline' }}>
          <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: 18, color: '#FF1493', letterSpacing: '.05em' }}>PHONE</span>
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: 22, color: '#fff' }}>(626) 600-0360</span>
          <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: 18, color: '#FF1493', letterSpacing: '.05em' }}>EMAIL</span>
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: 22, color: '#fff' }}>wendy@weglobalmarketing.com</span>
          <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: 18, color: '#FF1493', letterSpacing: '.05em' }}>WEBSITE</span>
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: 22, color: '#fff' }}>www.weglobalmarketing.com</span>
        </div>
      </div>
      <div>
        <h1 style={{
          fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 110, lineHeight: 1,
          color: '#fff', textTransform: 'uppercase', margin: 0,
        }}>READY TO SCALE<br/>ON TIKTOK?<br/>LET'S MAKE IT<br/>HAPPEN!</h1>
      </div>
    </div>
  </Shell>
);

Object.assign(window, { CreatorCommunitySlide, ContentEngineSlide, LiveEngineSlide, ShowcaseHealthSlide, ShowcaseBeautySlide, CreatorMatchmakingSlide, ClosingSlide });
