// MeetYourCoach.jsx, sits between AffiliateBenefits and AffiliateCommunity
const MeetYourCoach = ({ lang }) => {
  const t = {
    en: {
      eyebrow: '// MEET YOUR COACH',
      h: 'Coached by someone\nwho actually sells.',
      sub: 'Every creator in WEM gets access to weekly coaching from a Top 1% TikTok Shop affiliate.',
      body: 'April Aldana has generated $1M+ GMV in the past year and $30K+ in a single livestream. She coaches creators on hooks, live selling, and content that converts.',
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
      body: 'April Aldana 过去一年带来 $1M+ 销售额，单场直播突破 $30K+。她会帮达人看 hook、节奏、产品植入、价格表达和直播话术。',
      pills: ['TIKTOK SHOP 头部达人', '过去 12 个月 $1M+ 销售额', '单场直播 $30K+ 销售额'],
      bullets: [
        { icon: 'video', text: '短视频选题和 hook 建议' },
        { icon: 'radio', text: '直播话术和节奏指导' },
        { icon: 'message-square-text', text: '内容修改建议' },
      ],
      name: 'APRIL ALDANA · 内容教练',
    },
    ko: {
      eyebrow: '// 크리에이터 코치',
      h: '실제로 판매하는\n크리에이터에게 배우세요.',
      sub: 'WEM 크리에이터는 매주 TikTok Shop 상위 1% 어필리에이트의 코칭을 받을 수 있습니다.',
      body: 'April Aldana는 지난 1년간 $1M+ GMV, 한 번의 라이브에서 $30K+ GMV를 만들었습니다. 훅, 라이브 판매와 전환을 만드는 콘텐츠를 코칭합니다.',
      pills: ['TIKTOK SHOP 상위 1% 어필리에이트', '지난 12개월 GMV $1M+', '한 번의 라이브에서 $30K+'],
      bullets: [
        { icon: 'video', text: '주간 숏폼 영상 전략' },
        { icon: 'radio', text: '라이브 판매 코칭' },
        { icon: 'message-square-text', text: '콘텐츠 리뷰 및 피드백' },
      ],
      name: 'APRIL ALDANA · 리드 콘텐츠 코치',
    },
  }[lang];
  return (
    <section style={mcStyles.wrap} className="meet-coach">
      <style>{`
        @media (max-width: 760px) {
          .meet-coach {
            padding: 72px 0 !important;
            max-width: 100vw !important;
            overflow: hidden !important;
          }
          .meet-coach-inner {
            max-width: 100% !important;
            padding: 0 20px !important;
            overflow: hidden !important;
          }
          .meet-coach-eyebrow {
            font-size: 11px !important;
            margin-bottom: 24px !important;
          }
          .meet-coach-grid {
            display: block !important;
          }
          .meet-coach-title {
            font-size: clamp(42px, 13vw, 58px) !important;
            line-height: .94 !important;
            letter-spacing: 0 !important;
          }
          .meet-coach-sub {
            font-size: 18px !important;
            line-height: 1.45 !important;
            max-width: 100% !important;
          }
          .meet-coach-pills {
            margin-top: 24px !important;
            gap: 8px !important;
          }
          .meet-coach-pill {
            width: 100% !important;
            justify-content: center !important;
            text-align: center !important;
            font-size: 12px !important;
            padding: 10px 14px !important;
          }
          .meet-coach-body {
            font-size: 16px !important;
            line-height: 1.58 !important;
            max-width: 100% !important;
            margin-top: 24px !important;
          }
          .meet-coach-right {
            position: relative !important;
            min-height: 0 !important;
            display: grid !important;
            grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
            gap: 10px !important;
            margin-top: 34px !important;
          }
          .meet-coach-frame {
            position: relative !important;
            top: auto !important;
            right: auto !important;
            bottom: auto !important;
            left: auto !important;
            width: 100% !important;
            aspect-ratio: 1 / 1 !important;
            transform: none !important;
            border-radius: 14px !important;
          }
          .meet-coach-name {
            max-width: 100% !important;
            width: 100% !important;
            justify-content: center !important;
            text-align: center !important;
            font-size: 11px !important;
            line-height: 1.25 !important;
          }
        }
      `}</style>
      <div style={mcStyles.orb1}/>
      <div style={mcStyles.orb2}/>
      <div style={mcStyles.inner} className="meet-coach-inner">
        <div style={mcStyles.eyebrow} className="meet-coach-eyebrow">{t.eyebrow}</div>
        <div style={mcStyles.grid} className="meet-coach-grid">
          <div style={mcStyles.left}>
            <h2 style={mcStyles.h} className="meet-coach-title">{t.h.split('\n').map((l,i)=><span key={i}>{l}<br/></span>)}</h2>
            <p style={mcStyles.sub} className="meet-coach-sub">{t.sub}</p>
            <div style={mcStyles.pills} className="meet-coach-pills">
              {t.pills.map((p,i) => <span key={i} style={mcStyles.pill} className="meet-coach-pill">{p}</span>)}
            </div>
            <p style={mcStyles.body} className="meet-coach-body">{t.body}</p>
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
            <div style={mcStyles.nameBadge} className="meet-coach-name">{t.name}</div>
          </div>
          <div style={mcStyles.right} className="meet-coach-right">
            <div style={{ ...mcStyles.frame, ...mcStyles.frameTop }} className="meet-coach-frame">
              <img src="../../assets/coach-april-2.png" alt="April Aldana - Livestream 101" style={mcStyles.img}/>
            </div>
            <div style={{ ...mcStyles.frame, ...mcStyles.frameMid }} className="meet-coach-frame">
              <img src="../../assets/coach-april-3.png" alt="April Aldana - Weekly tip" style={mcStyles.img}/>
            </div>
            <div style={{ ...mcStyles.frame, ...mcStyles.frameBot }} className="meet-coach-frame">
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
