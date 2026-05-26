// Slides.jsx — all slide types for WE Marketing business deck

const Logo = ({ color = 'white', size = 48 }) => (
  <img src={color === 'white' ? '../../assets/we-logo-white.png' : '../../assets/we-logo.png'} alt="WE Marketing" style={{ height: size }} />
);

const Eyebrow = ({ children, color = '#FF80F9' }) => (
  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 18, letterSpacing: '.22em', textTransform: 'uppercase', color }}>{children}</div>
);

const SlideBase = ({ children, bg = '#fff', color = '#0D0D0D', noise = false }) => (
  <div style={{ width: '100%', height: '100%', background: bg, color, padding: 100, position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
    {noise && <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(1200px 700px at 80% 15%, rgba(255,91,248,.3), transparent 60%), radial-gradient(900px 500px at 5% 90%, rgba(255,91,248,.18), transparent 60%)', pointerEvents: 'none' }}/>}
    {children}
  </div>
);

// 1. COVER
const CoverSlide = () => (
  <SlideBase bg="linear-gradient(135deg,#2A0A45 0%,#6B14A3 45%,#A130CF 100%)" color="#fff" noise>
    <div style={{ position: 'relative', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Logo size={72}/>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 16, letterSpacing: '.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,.7)' }}>2026 · Business Deck</div>
      </div>
      <div>
        <Eyebrow>TikTok Shop Agency · 全域增长</Eyebrow>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 180, lineHeight: .88, letterSpacing: '-.02em', textTransform: 'uppercase', margin: '28px 0 0' }}>
          TURN SCROLLS<br/>INTO <span style={{ background: 'linear-gradient(135deg,#FF5BF8,#FF80F9)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>SALES.</span>
        </h1>
        <div style={{ fontFamily: 'var(--font-zh)', fontWeight: 900, fontSize: 56, marginTop: 40, color: 'rgba(255,255,255,.8)' }}>让每一次滑动，都变成成交。</div>
      </div>
    </div>
  </SlideBase>
);

// 2. AGENDA
const AgendaSlide = () => {
  const items = [['01','Who we are','WE 是谁'],['02','The TikTok Shop opportunity','TTS 机会'],['03','Our services','核心服务'],['04','Proof & case studies','数据与案例'],['05','How we work','合作流程'],['06','Let\'s go →','下一步']];
  return (
    <SlideBase bg="#fff">
      <Eyebrow color="#6B14A3">Agenda · 目录</Eyebrow>
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 96, lineHeight: .95, letterSpacing: '-.015em', textTransform: 'uppercase', margin: '20px 0 60px' }}>What we'll<br/>cover.</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 32, flex: 1 }}>
        {items.map(([n, en, zh], i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'baseline', gap: 24, borderBottom: '1px solid #E5E5E5', paddingBottom: 20 }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 20, color: '#FF5BF8', fontWeight: 700 }}>{n}</div>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 40, textTransform: 'uppercase', letterSpacing: '-.01em' }}>{en}</div>
              <div style={{ fontFamily: 'var(--font-zh)', fontWeight: 500, fontSize: 22, color: '#5C5C5C', marginTop: 4 }}>{zh}</div>
            </div>
          </div>
        ))}
      </div>
    </SlideBase>
  );
};

// 3. STATS
const StatSlide = () => {
  const stats = [['$150M+','GMV generated','总 GMV'],['200+','Brand partners','品牌合作'],['50K','Creator network','达人网络'],['#1','TSP ROAS · Q2','ROAS 第一']];
  return (
    <SlideBase bg="#0D0D0D" color="#fff" noise>
      <Eyebrow>Achievements · 成绩</Eyebrow>
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 96, lineHeight: .95, letterSpacing: '-.015em', textTransform: 'uppercase', margin: '20px 0 80px' }}>Results,<br/><span style={{ background: 'linear-gradient(135deg,#FF5BF8,#A130CF)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>not promises.</span></h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32, flex: 1 }}>
        {stats.map(([n, l, zh], i) => (
          <div key={i} style={{ borderLeft: '4px solid #FF5BF8', paddingLeft: 28 }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 120, lineHeight: 1, letterSpacing: '-.03em' }}>{n}</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 14, letterSpacing: '.22em', textTransform: 'uppercase', color: '#a0a0a0', marginTop: 18 }}>{l}</div>
            <div style={{ fontFamily: 'var(--font-zh)', fontSize: 18, color: 'rgba(255,255,255,.6)', marginTop: 8 }}>{zh}</div>
          </div>
        ))}
      </div>
    </SlideBase>
  );
};

// 4. SERVICES
const ServicesSlide = () => {
  const svc = [['Shop Mgmt','店铺代运营'],['Live Selling','直播电商'],['Creators','达人合作'],['Affiliate','联盟分销'],['TikTok Ads','广告投放'],['Content','内容策略']];
  return (
    <SlideBase bg="#FAFAFA">
      <Eyebrow color="#6B14A3">Services · 服务</Eyebrow>
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 96, lineHeight: .95, letterSpacing: '-.015em', textTransform: 'uppercase', margin: '20px 0 60px' }}>One team.<br/>Every lever.</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, flex: 1 }}>
        {svc.map(([en, zh], i) => (
          <div key={i} style={{ background: i === 0 ? 'linear-gradient(135deg,#FF5BF8,#A130CF)' : '#fff', color: i === 0 ? '#fff' : '#0D0D0D', borderRadius: 20, padding: 36, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: i === 0 ? '0 0 48px rgba(255,91,248,.4)' : '0 6px 16px rgba(13,13,13,.06)', border: i === 0 ? 'none' : '1px solid #E5E5E5' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 14, letterSpacing: '.22em', opacity: .7 }}>0{i+1}</div>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 40, textTransform: 'uppercase', letterSpacing: '-.01em' }}>{en}</div>
              <div style={{ fontFamily: 'var(--font-zh)', fontWeight: 700, fontSize: 26, marginTop: 8, opacity: .85 }}>{zh}</div>
            </div>
          </div>
        ))}
      </div>
    </SlideBase>
  );
};

// 5. CASE STUDY
const CaseStudySlide = () => (
  <SlideBase bg="linear-gradient(135deg,#FF5BF8 0%,#A130CF 100%)" color="#fff">
    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 80, flex: 1, alignItems: 'center' }}>
      <div>
        <Eyebrow color="rgba(255,255,255,.8)">Case Study · Beauty</Eyebrow>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 280, lineHeight: .88, letterSpacing: '-.03em' }}>$1.5M</div>
        <div style={{ fontFamily: 'var(--font-sans)', fontSize: 28, marginTop: 14, opacity: .85 }}>in a single LIVE · 一场直播</div>
      </div>
      <div>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 56, textTransform: 'uppercase', letterSpacing: '-.01em' }}>CANVAS BEAUTY × @STORMISTEELE</div>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: 22, lineHeight: 1.5, marginTop: 24, opacity: .9 }}>Full-funnel approach. Creator-led storytelling. Live-ads running concurrently. Broke the US TikTok Shop single-LIVE revenue record.</p>
        <div style={{ fontFamily: 'var(--font-zh)', fontSize: 20, marginTop: 20, opacity: .75 }}>全链路投放 · 达人内容 · 直播间广告 · 创 TikTok Shop 单场 GMV 纪录</div>
      </div>
    </div>
  </SlideBase>
);

// 6. QUOTE
const QuoteSlide = () => (
  <SlideBase bg="#0D0D0D" color="#fff">
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: 1400 }}>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: 160, color: '#FF5BF8', lineHeight: .8 }}>"</div>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: 80, lineHeight: 1.05, letterSpacing: '-.015em', textTransform: 'uppercase', marginTop: -40 }}>
        With WE, our TikTok Shop went from <span style={{ color: '#5C5C5C' }}>'meh'</span> to <span style={{ background: 'linear-gradient(135deg,#FF5BF8,#FF80F9)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>'WOW.'</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginTop: 80 }}>
        <div style={{ width: 64, height: 64, borderRadius: 999, background: 'linear-gradient(135deg,#FF5BF8,#A130CF)' }}/>
        <div>
          <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 22 }}>Marketing Lead</div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 16, color: '#a0a0a0', marginTop: 4 }}>A leading beauty DTC brand · 头部美妆品牌</div>
        </div>
      </div>
    </div>
  </SlideBase>
);

// 7. PROCESS
const ProcessSlide = () => {
  const steps = [['01','DISCOVER','深度诊断','We audit your shop, your creatives, your category. 30-day roadmap.'],['02','BUILD','搭建','Shop ops, creator squad, LIVE studio, ads account — wired in 2 weeks.'],['03','SCALE','放大','Weekly creative iteration, monthly LIVEs, data-led spend scaling.']];
  return (
    <SlideBase bg="#fff">
      <Eyebrow color="#6B14A3">How we work · 合作流程</Eyebrow>
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 96, lineHeight: .95, letterSpacing: '-.015em', textTransform: 'uppercase', margin: '20px 0 60px' }}>From zero<br/>to scale.</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, flex: 1 }}>
        {steps.map(([n, en, zh, body], i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 20, borderTop: '4px solid #FF5BF8', paddingTop: 24 }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 16, color: '#FF5BF8', letterSpacing: '.22em', fontWeight: 700 }}>{n}</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 64, textTransform: 'uppercase', letterSpacing: '-.02em', lineHeight: .95 }}>{en}</div>
            <div style={{ fontFamily: 'var(--font-zh)', fontWeight: 700, fontSize: 28, color: '#5C5C5C' }}>{zh}</div>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: 20, lineHeight: 1.5, color: '#2A2A2A' }}>{body}</div>
          </div>
        ))}
      </div>
    </SlideBase>
  );
};

// 8. CLOSING
const ClosingSlide = () => (
  <SlideBase bg="#0D0D0D" color="#fff" noise>
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', alignItems: 'center' }}>
      <Eyebrow>Ready? · 准备好了吗？</Eyebrow>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 220, lineHeight: .88, letterSpacing: '-.02em', textTransform: 'uppercase', margin: '32px 0' }}>
        LET'S<br/><span style={{ background: 'linear-gradient(135deg,#FF5BF8,#FF80F9)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>GO LIVE.</span>
      </h1>
      <div style={{ fontFamily: 'var(--font-zh)', fontWeight: 900, fontSize: 56, color: 'rgba(255,255,255,.75)' }}>开播吧。</div>
      <div style={{ marginTop: 80, display: 'flex', gap: 40, fontFamily: 'var(--font-mono)', fontSize: 22, letterSpacing: '.1em' }}>
        <div>hello@wemarketing.com</div>
        <div style={{ color: '#FF5BF8' }}>·</div>
        <div>weglobalmarketing.com</div>
      </div>
    </div>
  </SlideBase>
);

Object.assign(window, { CoverSlide, AgendaSlide, StatSlide, ServicesSlide, CaseStudySlide, QuoteSlide, ProcessSlide, ClosingSlide });
