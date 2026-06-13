// MeetYourCoach.jsx, sits between AffiliateBenefits and AffiliateCommunity
const MeetYourCoach = ({ lang }) => {
  const t = {
    en: {
      eyebrow: '// MEET YOUR COACH',
      h: 'Coached by someone\nwho actually sells.',
      sub: 'Every creator in WEM gets access to weekly coaching from a Top 1% TikTok Shop affiliate.',
      body: 'April Aldana has generated $1M+ GMV in the past year and $30K+ in a single livestream. She coaches our creators weekly on short video strategy, live selling, and content that actually converts. For brands, that means the creators promoting your products aren\u2019t guessing.',
      pills: ['TOP 1% TIKTOK SHOP AFFILIATE', '$1M+ GMV · PAST 12 MONTHS', '$30K+ IN A SINGLE LIVESTREAM'],
      bullets: [
        { icon: 'video', text: 'Weekly short video strategy' },
        { icon: 'radio', text: 'Live selling coaching' },
        { icon: 'message-square-text', text: 'Content review & feedback' },
      ],
      name: 'APRIL ALDANA · LEAD CONTENT COACH',
    },
    zh: {
      eyebrow: '// 内容建议',
      h: '让真正卖过货的人\n帮你看内容。',
      sub: 'WE 达人联盟成员可以获得 TikTok Shop 头部达人的短视频和直播建议。',
      body: 'April Aldana 过去一年带来 $1M+ 销售额，单场直播突破 $30K+。她会帮达人看选题、hook、节奏、产品植入、价格表达和直播话术，重点是怎么讲，才能让内容更有转化力。',
      pills: ['TIKTOK SHOP 头部达人', '过去 12 个月 $1M+ 销售额', '单场直播 $30K+ 销售额'],
      bullets: [
        { icon: 'video', text: '短视频选题和 hook 建议' },
        { icon: 'radio', text: '直播话术和节奏指导' },
        { icon: 'message-square-text', text: '内容修改建议' },
      ],
      name: 'APRIL ALDANA · 内容教练',
    },
  }[lang];
  return (
    <section style={mcStyles.wrap}>
      <div style={mcStyles.orb1}/>
      <div style={mcStyles.orb2}/>
      <div style={mcStyles.inner}>
        <div style={mcStyles.eyebrow}>{t.eyebrow}</div>
        <div style={mcStyles.grid}>
          <div style={mcStyles.left}>
            <h2 style={mcStyles.h}>{t.h.split('\n').map((l,i)=><span key={i}>{l}<br/></span>)}</h2>
            <p style={mcStyles.sub}>{t.sub}</p>
            <div style={mcStyles.pills}>
              {t.pills.map((p,i) => <span key={i} style={mcStyles.pill}>{p}</span>)}
            </div>
            <p style={mcStyles.body}>{t.body}</p>
            <div style={mcStyles.bullets}>
              {t.bullets.map((b,i) => (
                <div key={i} style={mcStyles.bullet}>
                  <div style={mcStyles.bulletIcon}>
                    <i data-lucide={b.icon} style={{ width: 18, height: 18, color: '#FF1493' }}/>
                  </div>
                  <div style={mcStyles.bulletText}>{b.text}</div>
                </div>
              ))}
            </div>
            <div style={mcStyles.nameBadge}>{t.name}</div>
          </div>
          <div style={mcStyles.right}>
            <div style={{ ...mcStyles.frame, ...mcStyles.frameTop }}>
              <img src="../../assets/coach-april-2.png" alt="April Aldana - Livestream 101" style={mcStyles.img}/>
            </div>
            <div style={{ ...mcStyles.frame, ...mcStyles.frameMid }}>
              <img src="../../assets/coach-april-3.png" alt="April Aldana - Weekly tip" style={mcStyles.img}/>
            </div>
            <div style={{ ...mcStyles.frame, ...mcStyles.frameBot }}>
              <img src="../../assets/coach-april-1.png" alt="April Aldana - Live selling" style={mcStyles.img}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const mcStyles = {
  wrap: { position: 'relative', background: '#000', padding: '120px 0', borderTop: '1px solid rgba(255,255,255,.08)', overflow: 'hidden' },
  orb1: { position: 'absolute', top: '20%', left: -200, width: 500, height: 500, background: 'radial-gradient(circle, #FF1493 0%, transparent 60%)', filter: 'blur(80px)', opacity: .25, pointerEvents: 'none' },
  orb2: { position: 'absolute', bottom: '10%', right: -200, width: 500, height: 500, background: 'radial-gradient(circle, #4A8FFF 0%, transparent 60%)', filter: 'blur(80px)', opacity: .18, pointerEvents: 'none' },
  inner: { position: 'relative', maxWidth: 1280, margin: '0 auto', padding: '0 32px' },
  eyebrow: { fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '.18em', color: '#FF1493', marginBottom: 32 },
  grid: { display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 64, alignItems: 'start' },
  left: {},
  h: { fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(44px, 5.4vw, 76px)', lineHeight: .95, letterSpacing: '-.005em', textTransform: 'uppercase', color: '#fff', margin: 0 },
  sub: { fontFamily: 'var(--font-sans)', fontSize: 18, lineHeight: 1.5, color: 'rgba(255,255,255,.6)', marginTop: 20, maxWidth: 540 },
  pills: { display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 32 },
  pill: { display: 'inline-flex', alignItems: 'center', background: 'rgba(255,20,147,.12)', border: '1px solid rgba(255,20,147,.4)', color: '#FF1493', fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: 12, letterSpacing: '.08em', padding: '8px 14px', borderRadius: 999, boxShadow: '0 0 20px rgba(255,20,147,.15)' },
  body: { fontFamily: 'var(--font-sans)', fontSize: 16, lineHeight: 1.6, color: 'rgba(255,255,255,.85)', marginTop: 28, maxWidth: 540 },
  bullets: { display: 'flex', flexDirection: 'column', gap: 14, marginTop: 28 },
  bullet: { display: 'flex', alignItems: 'center', gap: 14 },
  bulletIcon: { width: 36, height: 36, borderRadius: 10, background: 'rgba(255,20,147,.1)', border: '1px solid rgba(255,20,147,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 },
  bulletText: { fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 16, color: '#fff' },
  nameBadge: { display: 'inline-flex', marginTop: 36, background: '#FF1493', color: '#000', fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: 13, letterSpacing: '.1em', padding: '12px 20px', borderRadius: 999 },

  right: { position: 'relative', minHeight: 620 },
  frame: { position: 'absolute', borderRadius: 18, overflow: 'hidden', background: '#0A0A0A', border: '2px solid', transition: 'transform .3s' },
  frameTop: { top: 0, right: 0, width: '78%', aspectRatio: '4 / 3', borderColor: '#FF1493', boxShadow: '0 0 0 1px rgba(255,20,147,.5), 0 0 40px rgba(255,20,147,.4), 0 20px 50px rgba(0,0,0,.6)', transform: 'rotate(2deg)', zIndex: 3 },
  frameMid: { top: '32%', left: 0, width: '70%', aspectRatio: '4 / 3', borderColor: '#4A8FFF', boxShadow: '0 0 0 1px rgba(74,143,255,.5), 0 0 40px rgba(74,143,255,.35), 0 20px 50px rgba(0,0,0,.6)', transform: 'rotate(-3deg)', zIndex: 2 },
  frameBot: { bottom: 0, right: '8%', width: '72%', aspectRatio: '1 / 1', borderColor: '#9B30FF', boxShadow: '0 0 0 1px rgba(155,48,255,.5), 0 0 40px rgba(155,48,255,.35), 0 20px 50px rgba(0,0,0,.6)', transform: 'rotate(4deg)', zIndex: 1 },
  img: { width: '100%', height: '100%', objectFit: 'cover', display: 'block' },
};

window.MeetYourCoach = MeetYourCoach;
