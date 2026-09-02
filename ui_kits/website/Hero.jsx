// Hero.jsx, homepage hero with cinematic motion system.
const Hero = ({ lang }) => {
  const heroRef = React.useRef(null);
  const [introVisible, setIntroVisible] = React.useState(() => {
    try {
      return !new URLSearchParams(window.location.search).has('skipIntro');
    } catch (error) {
      return true;
    }
  });
  const [introOpening, setIntroOpening] = React.useState(false);
  React.useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;
    const onMove = (event) => {
      const rect = el.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      el.style.setProperty('--hero-x', `${x}%`);
      el.style.setProperty('--hero-y', `${y}%`);
      el.style.setProperty('--hero-tilt-x', `${(y - 50) / -18}deg`);
      el.style.setProperty('--hero-tilt-y', `${(x - 50) / 18}deg`);
    };
    el.addEventListener('mousemove', onMove, { passive: true });
    return () => el.removeEventListener('mousemove', onMove);
  }, []);
  React.useEffect(() => {
    if (!introVisible) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [introVisible]);
  const t = {
    en: {
      pill: 'FULL SERVICE TIKTOK SHOP PARTNER AGENCY',
      h1a: 'We help brands', h1accent: 'scale', h1b: 'on TikTok.',
      sub: 'From cold start to sustained GMV. Creator outreach, content, live, and shop operations, all run by one team. 160+ brands. $15M+ annual sales. Certified TikTok Shop Partner Agency.',
      cta1: 'Book a discovery call →', cta2: 'See our work',
      stats: [[8000,'+','Creators in Community'],[24000,'+','Vetted Creators'],[160,'+','Shop Partners Served'],[15,'M+','Annual Sales']],
    },
    zh: {
      pill: '美国 TIKTOK SHOP 代运营与增长团队',
      h1a: '让跨境品牌', h1accent: '在美国', h1b: '卖起来',
      sub: '我们服务出海品牌、Amazon 卖家和在美华人品牌团队。从开店、商品页、达人联盟、UGC 内容、直播到店铺运营，帮你把美国 TikTok Shop 做成真正能出单的渠道。',
      cta1: '预约咨询', cta2: '查看案例',
      stats: [[8000,'+','达人社群'],[24000,'+','筛选达人'],[160,'+','服务品牌'],[15,'M+','年管理销售额']],
    },
    ko: {
      pill: '풀서비스 TIKTOK SHOP 파트너 에이전시',
      h1a: '브랜드의 TikTok 성장을', h1accent: '실행으로 ', h1b: '만듭니다.',
      sub: '콜드 스타트부터 지속 가능한 GMV까지. 크리에이터, 콘텐츠, 라이브와 숍 운영을 한 팀이 연결합니다. 160+ 브랜드, 연간 관리 매출 $15M+.',
      cta1: '상담 예약하기 →', cta2: '성과 사례 보기',
      stats: [[8000,'+','커뮤니티 크리에이터'],[24000,'+','검증한 크리에이터'],[160,'+','지원한 숍 파트너'],[15,'M+','연간 관리 매출']],
    },
  }[lang];
  const [activeService, setActiveService] = React.useState(0);
  const openIntro = () => {
    if (introOpening) return;
    setIntroOpening(true);
    window.setTimeout(() => setIntroVisible(false), 860);
  };
  return (
    <>
      <style>{`
        @keyframes wemIntroMeshDrift {
          0% { transform: translate3d(-2%, -1%, 0) scale(1); }
          50% { transform: translate3d(2%, 1.5%, 0) scale(1.05); }
          100% { transform: translate3d(-2%, -1%, 0) scale(1); }
        }
        @keyframes wemIntroPortalBreathe {
          0%, 100% { transform: translate(-50%, -50%) rotateX(64deg) rotateZ(0deg) scale(.98); opacity: .54; }
          50% { transform: translate(-50%, -50%) rotateX(64deg) rotateZ(8deg) scale(1.04); opacity: .86; }
        }
        @keyframes wemIntroPortalSpin {
          0% { transform: translate(-50%, -50%) rotateX(64deg) rotateZ(0deg); }
          100% { transform: translate(-50%, -50%) rotateX(64deg) rotateZ(360deg); }
        }
        @keyframes wemIntroNodeOrbit {
          0% { transform: rotateY(0deg) rotateX(8deg); }
          100% { transform: rotateY(360deg) rotateX(8deg); }
        }
        @keyframes wemIntroNodeFloat {
          0%, 100% { transform: translate3d(var(--intro-x), var(--intro-y), var(--intro-z)) rotateY(var(--intro-ry)); }
          50% { transform: translate3d(calc(var(--intro-x) + 8px), calc(var(--intro-y) - 14px), var(--intro-z)) rotateY(var(--intro-ry)); }
        }
        @keyframes wemIntroOpen {
          0% { opacity: 1; transform: scale(1); filter: blur(0); }
          34% { opacity: 1; transform: scale(.985); filter: blur(0); }
          72% { opacity: .92; transform: scale(1.08); filter: blur(1px); }
          100% { opacity: 0; transform: scale(1.18); filter: blur(8px); }
        }
        @keyframes wemIntroFlash {
          0% { opacity: 0; transform: translate(-50%, -50%) scale(.18); }
          24% { opacity: .98; transform: translate(-50%, -50%) scale(.78); }
          100% { opacity: 0; transform: translate(-50%, -50%) scale(2.65); }
        }
        @keyframes wemIntroSnapOut {
          0% { opacity: 1; transform: translate(-50%, -50%) scale(1) rotateX(6deg); }
          38% { opacity: 1; transform: translate(-50%, -50%) scale(.92) rotateX(10deg); }
          100% { opacity: 0; transform: translate(-50%, -50%) scale(1.58) rotateX(22deg); }
        }
        @keyframes wemIntroEnterPulse {
          0%, 100% { box-shadow: 0 0 0 1px rgba(255,255,255,.2), 0 0 30px rgba(190,55,128,.18), inset 0 0 0 1px rgba(255,255,255,.1); }
          50% { box-shadow: 0 0 0 1px rgba(255,255,255,.48), 0 0 68px rgba(190,55,128,.28), 0 0 102px rgba(112,70,190,.18), 0 0 120px rgba(74,143,255,.12), inset 0 0 26px rgba(255,255,255,.11); }
        }
        @keyframes wemIntroSystemScan {
          0% { transform: translateX(-110%); opacity: 0; }
          18%, 78% { opacity: .72; }
          100% { transform: translateX(110%); opacity: 0; }
        }
        .wem-intro-overlay.is-opening {
          pointer-events: none;
          animation: wemIntroOpen .86s cubic-bezier(.65,0,.15,1) forwards;
        }
        .wem-intro-overlay.is-opening .wem-intro-flash {
          animation: wemIntroFlash .72s cubic-bezier(.65,0,.15,1) forwards;
        }
        .wem-intro-overlay.is-opening .wem-intro-gate {
          animation: wemIntroSnapOut .78s cubic-bezier(.65,0,.15,1) forwards;
          border-color: rgba(255,255,255,.62) !important;
          box-shadow: 0 0 130px rgba(190,55,128,.42), 0 0 210px rgba(112,70,190,.28), 0 0 250px rgba(255,255,255,.28), inset 0 0 96px rgba(255,255,255,.26) !important;
        }
        .wem-intro-overlay.is-opening .wem-intro-copy,
        .wem-intro-overlay.is-opening .wem-intro-brand-signature,
        .wem-intro-overlay.is-opening .wem-intro-orbit {
          opacity: 0;
          transition: opacity 180ms ease;
        }
        .wem-intro-system-rail::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,.72), transparent);
          animation: wemIntroSystemScan 3s ease-in-out infinite;
          pointer-events: none;
          mix-blend-mode: screen;
        }
        .wem-intro-enter { animation: wemIntroEnterPulse 2.2s ease-in-out infinite; }
        .wem-intro-dot-field { animation: wemIntroPortalSpin 34s linear infinite; }
        .wem-intro-dot-field-alt { animation: wemIntroPortalSpin 52s linear infinite reverse; }
        @keyframes wemHeroDrift {
          0% { transform: translateX(-12%); }
          100% { transform: translateX(12%); }
        }
        @keyframes wemHeroPulse {
          0%, 100% { opacity: .45; transform: scale(.92); }
          50% { opacity: 1; transform: scale(1); }
        }
        @keyframes wemHeroScan {
          0% { transform: translateY(-110%); opacity: 0; }
          18%, 72% { opacity: .55; }
          100% { transform: translateY(110%); opacity: 0; }
        }
        @keyframes wemHeroOrbit {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes wemHeroNodeFloat {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(0, -12px, 0); }
        }
        @keyframes wemHeroFlow {
          0% { stroke-dashoffset: 280; opacity: .18; }
          45% { opacity: .75; }
          100% { stroke-dashoffset: 0; opacity: .18; }
        }
        @keyframes wemHeroAurora {
          0% { transform: translate3d(-4%, -2%, 0) rotate(-2deg) scale(1); filter: hue-rotate(0deg) blur(26px); }
          45% { transform: translate3d(3%, 2%, 0) rotate(2deg) scale(1.07); filter: hue-rotate(18deg) blur(30px); }
          100% { transform: translate3d(-4%, -2%, 0) rotate(-2deg) scale(1); filter: hue-rotate(0deg) blur(26px); }
        }
        @keyframes wemHeroBeam {
          0% { transform: translate3d(-18%, 18%, 0) rotate(-12deg); opacity: .08; }
          42% { opacity: .28; }
          100% { transform: translate3d(18%, -18%, 0) rotate(-12deg); opacity: .08; }
        }
        @keyframes wemHeroThread {
          0% { stroke-dashoffset: 640; opacity: .08; }
          34% { opacity: .46; }
          100% { stroke-dashoffset: 0; opacity: .08; }
        }
        @keyframes wemHeroCardStream {
          0%, 14% { transform: translate3d(0, 0, 0); }
          20%, 34% { transform: translate3d(0, -86px, 0); }
          40%, 54% { transform: translate3d(0, -172px, 0); }
          60%, 74% { transform: translate3d(0, -258px, 0); }
          80%, 94% { transform: translate3d(0, -344px, 0); }
          100% { transform: translate3d(0, -344px, 0); }
        }
        @keyframes wemHeroPhoneFloat {
          0%, 100% { transform: rotate(-4deg) translate3d(0, 0, 0); }
          50% { transform: rotate(-3deg) translate3d(0, -14px, 0); }
        }
        @keyframes wemHeroTagFloat {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(0, -10px, 0); }
        }
        @keyframes wemHeroViewsRise {
          0%, 100% { transform: translate3d(0, 0, 0); }
          26%, 45% { transform: translate3d(0, -74px, 0); }
          56%, 75% { transform: translate3d(0, -148px, 0); }
          86%, 99% { transform: translate3d(0, -222px, 0); }
        }
        @keyframes wemHeroBarGrow {
          0%, 100% { transform: scaleX(.22); opacity: .58; }
          45%, 72% { transform: scaleX(1); opacity: 1; }
        }
        @keyframes wemHeroChartDraw {
          0% { stroke-dashoffset: 520; opacity: .22; }
          48% { opacity: .95; }
          100% { stroke-dashoffset: 0; opacity: .42; }
        }
        @keyframes wemHeroMetricPulse {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); box-shadow: 0 20px 55px rgba(0,0,0,.28); }
          50% { transform: translate3d(0, -8px, 0) scale(1.02); box-shadow: 0 26px 70px rgba(255,255,255,.18); }
        }
        @keyframes wemDomCoreSpin {
          0% { transform: rotateX(62deg) rotateZ(0deg); }
          100% { transform: rotateX(62deg) rotateZ(360deg); }
        }
        @keyframes wemDomNodeFloat {
          0%, 100% { transform: translate3d(var(--node-x), var(--node-y), var(--node-z)) rotateY(var(--node-ry)) rotateX(10deg); }
          50% { transform: translate3d(calc(var(--node-x) + 10px), calc(var(--node-y) - 18px), var(--node-z)) rotateY(var(--node-ry)) rotateX(18deg); }
        }
        .wem-intro-mesh { animation: wemIntroMeshDrift 12s ease-in-out infinite; }
        .wem-intro-ring-a { animation: wemIntroPortalSpin 14s linear infinite; }
        .wem-intro-ring-b { animation: wemIntroPortalSpin 21s linear infinite reverse; }
        .wem-intro-ring-c { animation: wemIntroPortalBreathe 5.5s ease-in-out infinite; }
        .wem-intro-orbit { animation: wemIntroNodeOrbit 24s linear infinite; transform-style: preserve-3d; }
        .wem-intro-node { animation: wemIntroNodeFloat 5.8s ease-in-out infinite; }
        .wem-intro-node:nth-child(2) { animation-delay: -.8s; }
        .wem-intro-node:nth-child(3) { animation-delay: -1.6s; }
        .wem-intro-node:nth-child(4) { animation-delay: -2.4s; }
        .wem-intro-node:nth-child(5) { animation-delay: -3.2s; }
        .wem-intro-node:nth-child(6) { animation-delay: -4s; }
        .wem-hero-wrap::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          opacity: .86;
          background:
            radial-gradient(circle at var(--hero-x, 62%) var(--hero-y, 34%), rgba(255,255,255,.22), transparent 0 7%, rgba(255,255,255,.18) 11%, transparent 24%),
            radial-gradient(circle at calc(var(--hero-x, 62%) - 18%) calc(var(--hero-y, 34%) + 20%), rgba(190,55,128,.1), transparent 30%);
          mix-blend-mode: screen;
          transition: opacity var(--dur-base);
        }
        .wem-hero-wrap::after {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          opacity: .18;
          background: repeating-linear-gradient(180deg, rgba(255,255,255,.34) 0 1px, transparent 1px 5px);
          mix-blend-mode: overlay;
        }
        .wem-hero-inner { display: grid; grid-template-columns: minmax(360px, .82fr) minmax(460px, 1fr); gap: 46px; align-items: center; }
        .wem-hero-visual { position: relative; min-height: 640px; }
        .wem-hero-stage { transform: perspective(1100px) rotateX(var(--hero-tilt-x, 0deg)) rotateY(var(--hero-tilt-y, 0deg)); transition: transform 180ms ease-out; }
        .wem-hero-marquee { animation: wemHeroDrift 9s ease-in-out infinite alternate; }
        .wem-hero-pulse { animation: wemHeroPulse 1.5s ease-in-out infinite; }
        .wem-hero-scan { animation: wemHeroScan 4.5s ease-in-out infinite; }
        .wem-hero-orbit { animation: wemHeroOrbit 28s linear infinite; transform-origin: center; }
        .wem-hero-node { animation: wemHeroNodeFloat 6.2s ease-in-out infinite; }
        .wem-hero-node:nth-of-type(2) { animation-delay: -1.2s; }
        .wem-hero-node:nth-of-type(3) { animation-delay: -2.4s; }
        .wem-hero-node:nth-of-type(4) { animation-delay: -3.6s; }
        .wem-hero-flow { stroke-dasharray: 9 12; animation: wemHeroFlow 4.8s linear infinite; }
        .wem-hero-bg-shift { animation: wemHeroAurora 18s ease-in-out infinite; }
        .wem-hero-beam-a { animation: wemHeroBeam 13s ease-in-out infinite alternate; }
        .wem-hero-beam-b { animation: wemHeroBeam 17s ease-in-out infinite alternate-reverse; }
        .wem-hero-thread { stroke-dasharray: 18 26; animation: wemHeroThread 9s linear infinite; }
        .wem-hero-phone { animation: wemHeroPhoneFloat 7.5s ease-in-out infinite; }
        .wem-hero-card-stream { animation: wemHeroCardStream 12s cubic-bezier(.4,0,.2,1) infinite; }
        .wem-hero-view-stream { animation: wemHeroViewsRise 10s cubic-bezier(.4,0,.2,1) infinite; }
        .wem-hero-view-bar { transform-origin: left center; animation: wemHeroBarGrow 3.4s ease-in-out infinite; }
        .wem-hero-view-bar:nth-child(2) { animation-delay: -.8s; }
        .wem-hero-view-bar:nth-child(3) { animation-delay: -1.6s; }
        .wem-hero-view-bar:nth-child(4) { animation-delay: -2.3s; }
        .wem-hero-growth-line { stroke-dasharray: 520; animation: wemHeroChartDraw 7.8s linear infinite; }
        .wem-hero-metric-float { animation: wemHeroMetricPulse 5.6s ease-in-out infinite; }
        .wem-hero-metric-float:nth-of-type(2) { animation-delay: -1.7s; }
        .wem-hero-tag { animation: wemHeroTagFloat 6.2s ease-in-out infinite; }
        .wem-hero-tag:nth-of-type(2) { animation-delay: -1.8s; }
        .wem-hero-tag:nth-of-type(3) { animation-delay: -3.4s; }
        .wem-hero-kpi strong { font-family: var(--font-display); font-size: 30px; line-height: 1; color: #fff; }
        .wem-hero-kpi span { font-family: var(--font-sans); font-size: 11px; line-height: 1.25; color: rgba(255,255,255,.62); text-transform: uppercase; letter-spacing: .05em; }
        .wem-hero-video-card video { width: 100%; height: 100%; object-fit: cover; display: block; filter: saturate(1.18) contrast(1.08); }
        .wem-hero-video-card::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 40%, rgba(0,0,0,.68));
          pointer-events: none;
        }
        .wem-hero-metric-float strong { font-family: var(--font-display); font-size: 34px; line-height: 1; color: #fff; }
        .wem-hero-metric-float span { font-family: var(--font-sans); font-size: 11px; line-height: 1.2; color: rgba(255,255,255,.72); text-transform: uppercase; letter-spacing: .05em; font-weight: 800; }
        .wem-hero-phone-main strong { font-family: var(--font-display); font-size: 46px; line-height: .9; color: #fff; }
        .wem-hero-phone-main span, .wem-hero-phone-main small { font-family: var(--font-sans); color: rgba(255,255,255,.72); font-weight: 800; }
        .wem-hero-phone-main small { font-size: 11px; text-transform: uppercase; letter-spacing: .05em; }
        .wem-hero-three-canvas { position: absolute; inset: 0; width: 100%; height: 100%; z-index: 0; pointer-events: none; }
        .wem-dom-service-node { animation: wemDomNodeFloat 5.8s ease-in-out infinite; }
        .wem-dom-service-node:nth-child(2) { animation-delay: -.8s; }
        .wem-dom-service-node:nth-child(3) { animation-delay: -1.6s; }
        .wem-dom-service-node:nth-child(4) { animation-delay: -2.4s; }
        .wem-dom-service-node:nth-child(5) { animation-delay: -3.2s; }
        .wem-dom-service-node:nth-child(6) { animation-delay: -4s; }
        .wem-service-hud-card { transition: transform 180ms ease, border-color 180ms ease, background 180ms ease, opacity 180ms ease; }
        .wem-service-hud-card:hover { transform: translateX(-6px); }
        @media (max-width: 980px) {
          .wem-intro-copy { left: 50% !important; right: auto !important; top: 73% !important; bottom: auto !important; max-width: calc(100vw - 56px) !important; transform: translate(-50%, -50%) !important; }
          .wem-intro-title { font-size: 42px !important; }
          .wem-intro-title-en { font-size: 50px !important; line-height: .88 !important; }
          .wem-intro-stage { transform: translate(-50%, -50%) scale(.78) !important; top: 42% !important; }
          .wem-hero-inner { grid-template-columns: 1fr; gap: 34px; }
          .wem-dom-constellation { opacity: .48 !important; transform: translate(10%, -4%) scale(.82) !important; }
          .wem-service-hud { max-width: 640px !important; }
          .wem-hero-stats-inner { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (min-width: 981px) and (max-height: 840px) {
          .wem-intro-stage { top: 34.5% !important; transform: translate(-50%, -50%) scale(.92) !important; }
          .wem-intro-copy { top: 79% !important; gap: 9px !important; }
          .wem-intro-title-en { font-size: clamp(46px, 5.4vw, 86px) !important; line-height: .9 !important; }
          .wem-intro-system-rail { min-height: 42px !important; transform: scale(.94); }
        }
        @media (max-width: 640px) {
          .wem-intro-brand-signature { left: 50% !important; top: 22px !important; transform: translateX(-50%) !important; }
          .wem-intro-copy { left: 50% !important; right: auto !important; top: 70% !important; bottom: auto !important; transform: translate(-50%, -50%) !important; padding: 0 !important; gap: 9px !important; }
          .wem-intro-copy { width: calc(100vw - 56px) !important; max-width: 334px !important; }
          .wem-intro-title { font-size: 26px !important; line-height: 1.04 !important; width: 100% !important; max-width: 100% !important; overflow-wrap: normal !important; }
          .wem-intro-title-en { font-size: 32px !important; line-height: .96 !important; }
          .wem-intro-sub { width: min(100%, 292px) !important; max-width: 292px !important; font-size: 13px !important; line-height: 1.38 !important; }
          .wem-intro-stage { width: 540px !important; height: 540px !important; top: 34% !important; transform: translate(-50%, -50%) scale(.58) !important; opacity: .9 !important; }
          .wem-intro-enter { display: none !important; }
          .wem-intro-canvas { opacity: .7 !important; }
          .wem-intro-dot-field,
          .wem-intro-dot-field-alt,
          .wem-intro-mesh,
          .wem-intro-orbit,
          .wem-intro-node { animation-duration: 42s !important; }
          .wem-intro-node { min-width: 112px !important; padding: 10px 11px !important; font-size: 10px !important; }
          .wem-intro-system-rail { display: none !important; }
          .wem-intro-title-full { display: none !important; }
          .wem-intro-title-mobile { display: inline !important; }
          .wem-hero-wrap { min-height: auto !important; }
          .wem-hero-wrap::before { opacity: .46; }
          .wem-hero-wrap::after { opacity: .08; }
          .wem-hero-inner {
            min-height: calc(100svh - 88px) !important;
            padding: 92px 22px 50px !important;
            max-width: 100vw !important;
            overflow: hidden;
            align-content: center;
            gap: 0 !important;
            text-align: center;
          }
          .wem-hero-inner > div { min-width: 0; }
          .wem-hero-title {
            margin: 28px auto 0 !important;
            max-width: min(350px, calc(100vw - 44px)) !important;
            font-size: 45px !important;
            line-height: .98 !important;
            text-wrap: balance;
          }
          .wem-hero-sub {
            margin: 22px auto 0 !important;
            max-width: min(344px, calc(100vw - 44px)) !important;
            font-size: 18px !important;
            line-height: 1.48 !important;
            color: rgba(255,255,255,.82) !important;
            text-wrap: pretty;
          }
          .wem-hero-pill {
            margin: 0 auto !important;
            max-width: min(334px, calc(100vw - 44px)) !important;
            justify-content: center !important;
            white-space: normal !important;
            border-radius: 999px !important;
            font-size: 11px !important;
            line-height: 1.18 !important;
            padding: 11px 18px !important;
            color: rgba(255,255,255,.92) !important;
            background: rgba(255,255,255,.1) !important;
            border: 1px solid rgba(255,255,255,.16) !important;
            box-shadow: 0 18px 60px rgba(0,0,0,.26), inset 0 0 0 1px rgba(255,255,255,.05) !important;
            backdrop-filter: blur(12px);
          }
          .wem-hero-pill svg { display: none !important; }
          .wem-service-hud { display: none !important; }
          .wem-service-hud-grid { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; gap: 8px !important; }
          .wem-service-hud-card { min-height: 72px !important; padding: 12px !important; }
          .wem-dom-constellation { display: none !important; }
          .wem-hero-ctas { flex-direction: column; align-items: center; margin-top: 34px !important; }
          .wem-hero-ctas > * { width: 100%; max-width: min(330px, calc(100vw - 48px)); }
          .wem-hero-ctas .we-btn-primary {
            min-height: 64px !important;
            border-radius: 999px !important;
            box-shadow: 0 18px 58px rgba(255,20,147,.24), 0 0 0 1px rgba(255,255,255,.16) inset !important;
          }
          .wem-hero-stats-inner { grid-template-columns: 1fr !important; gap: 14px !important; }
          .wem-hero-stat { padding: 24px !important; }
          .wem-hero-bg-shift { opacity: .38 !important; filter: blur(34px) !important; }
          .wem-hero-thread { animation-duration: 18s !important; opacity: .42 !important; }
        }
      `}</style>
      {introVisible && <OpeningPortal lang={lang} opening={introOpening} onOpen={openIntro}/>}
      <section ref={heroRef} style={heroStyles.wrap} className="wem-hero-wrap">
        {!introVisible && <HeroThreeScene lang={lang} active={activeService} onActive={setActiveService}/>}
        <div style={heroStyles.bgLayer} className="wem-hero-bg-shift"/>
        <div style={heroStyles.bgGrid}/>
        <div style={heroStyles.bgBeamA} className="wem-hero-beam-a"/>
        <div style={heroStyles.bgBeamB} className="wem-hero-beam-b"/>
        <svg viewBox="0 0 1440 760" preserveAspectRatio="none" style={heroStyles.bgThreads}>
          <path className="wem-hero-thread" d="M-80 520 C180 360, 300 620, 520 430 S850 150, 1110 270 S1350 520, 1520 330" fill="none" stroke="#4A8FFF" strokeWidth="1.6"/>
          <path className="wem-hero-thread" d="M-100 230 C160 90, 380 280, 590 190 S940 130, 1120 390 S1340 610, 1530 480" fill="none" stroke="#FF1493" strokeWidth="1.4" style={{ animationDelay: '-2.6s' }}/>
          <path className="wem-hero-thread" d="M-120 660 C190 540, 280 220, 560 310 S890 640, 1160 480 S1350 170, 1510 230" fill="none" stroke="#9B30FF" strokeOpacity=".38" strokeWidth="1.5" style={{ animationDelay: '-5.1s' }}/>
        </svg>
        <div style={heroStyles.orb1}/>
        <div style={heroStyles.orb2}/>
        <div style={heroStyles.inner} className="wem-hero-inner">
          <div>
            <div style={heroStyles.pill} className="wem-hero-pill">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#000"><path d="M12 0l2.5 7L22 8l-5.5 5L18 22l-6-3.5L6 22l1.5-9L2 8l7.5-1z"/></svg>
              {t.pill}
            </div>
            <h1 style={heroStyles.h1} className="wem-hero-title">
              {t.h1a}{lang === 'en' ? ' ' : ''}<br/>
              <span style={heroStyles.h1accent}>{t.h1accent}</span>{lang === 'en' ? ' ' : ''}
              <span style={lang === 'zh' ? heroStyles.h1solid : heroStyles.h1outline}>{t.h1b}</span>
            </h1>
            <p style={heroStyles.sub} className="wem-hero-sub">{t.sub}</p>
            <div style={heroStyles.ctas} className="wem-hero-ctas">
              <button className="we-btn we-btn-primary" style={{ fontSize: 16, padding: '16px 30px' }} onClick={() => window.open('https://zus03h0enw04.sg.larksuite.com/scheduler/03970278dd9a7925','_blank')}>{t.cta1}</button>
              <button style={heroStyles.ghost} onClick={() => location.href=lang === 'ko' ? './showcase.html' : 'showcase.html'}>{t.cta2}</button>
            </div>
          </div>
          <HeroServiceHud lang={lang} active={activeService} onActive={setActiveService}/>
        </div>
      </section>
      <section style={heroStyles.statsBand}>
        <div style={heroStyles.statsInner} className="wem-hero-stats-inner">
          {t.stats.map(([target, suffix, label], i) => (
            <StatCard key={i} target={target} suffix={suffix} label={label} delay={i * 150}/>
          ))}
        </div>
      </section>
    </>
  );
};
const OpeningPortal = ({ lang, opening, onOpen }) => {
  const copies = { en: {
      brand: 'WE MARKETING',
      eyebrow: 'BUILT FOR CREATOR-LED COMMERCE',
      title: 'TIKTOK SHOP GROWTH SYSTEM',
      mobileTitle: 'TIKTOK SHOP GROWTH',
      sub: 'Creators, content, live, shop ops, paid, and reporting connected into repeatable GMV.',
      cta: 'Initiate Growth System',
      nodes: ['CREATORS', 'UGC', 'LIVE', 'SHOP OPS', 'PAID', 'GMV'],
      steps: ['CREATOR', 'CONTENT', 'LIVE', 'SHOP', 'PAID', 'GMV'],
    }, zh: {
      brand: 'WE MARKETING',
      eyebrow: '为内容电商增长而建',
      title: 'TIKTOK SHOP 增长系统',
      mobileTitle: '进入增长系统',
      sub: '从达人、内容、直播、店铺运营到复盘，把零散动作接成能持续出单的增长系统。',
      cta: '启动增长系统',
      nodes: ['达人', 'UGC', '直播', '店铺', '投放', 'GMV'],
      steps: ['达人', '内容', '直播', '店铺', '投放', 'GMV'],
    }, ko: {
      brand: 'WE MARKETING',
      eyebrow: '크리에이터 중심 커머스를 위해',
      title: 'TIKTOK SHOP 성장 시스템',
      mobileTitle: '성장 시스템 시작',
      sub: '크리에이터, 콘텐츠, 라이브, 숍 운영, 유료 확산과 리포팅을 반복 가능한 GMV 시스템으로 연결합니다.',
      cta: '성장 시스템 시작하기',
      nodes: ['크리에이터', 'UGC', '라이브', '숍 운영', '유료 확산', 'GMV'],
      steps: ['크리에이터', '콘텐츠', '라이브', '숍', '유료', 'GMV'],
    }};
  const copy = copies[lang];
  const positions = [
    ['-230px', '-118px', '120px', '-18deg'],
    ['-20px', '-180px', '170px', '14deg'],
    ['220px', '-92px', '118px', '-10deg'],
    ['214px', '106px', '150px', '18deg'],
    ['-18px', '178px', '105px', '-12deg'],
    ['-244px', '70px', '154px', '14deg'],
  ];
  return (
    <div
      className={`wem-intro-overlay${opening ? ' is-opening' : ''}`}
      style={heroStyles.introOverlay}
      role="dialog"
      aria-label={copy.cta}
      onClick={onOpen}
    >
      <OpeningPortalScene opening={opening}/>
      <div style={heroStyles.introDotField} className="wem-intro-dot-field" aria-hidden="true"/>
      <div style={heroStyles.introDotFieldAlt} className="wem-intro-dot-field-alt" aria-hidden="true"/>
      <div style={heroStyles.introMesh} className="wem-intro-mesh" aria-hidden="true"/>
      <div style={heroStyles.introTunnel} aria-hidden="true"/>
      <span style={heroStyles.introFlash} className="wem-intro-flash" aria-hidden="true"/>
      <div style={heroStyles.introBrandSignature} className="wem-intro-brand-signature" aria-hidden="true">
        <img src="./assets/we-logo-white.png" alt="" style={heroStyles.introBrandSignatureLogo}/>
      </div>
      <div style={heroStyles.introStage} className="wem-intro-stage" aria-hidden="true">
        <div style={heroStyles.introGate} className="wem-intro-gate">
          <span style={heroStyles.introPlanetGlow}/>
          <span style={heroStyles.introPlanetShade}/>
          <span style={heroStyles.introPlanetGrid}/>
          <span style={heroStyles.introGateCore}/>
          <span style={heroStyles.introGateHalo}/>
          <span style={heroStyles.introRingA} className="wem-intro-ring-a"/>
          <span style={heroStyles.introRingB} className="wem-intro-ring-b"/>
          <span style={heroStyles.introRingC} className="wem-intro-ring-c"/>
          <img src="./assets/we-mark.png" alt="" style={heroStyles.introGateLogo}/>
          <span style={heroStyles.introCoreLabel}>
            <img src="./assets/we-logo-white.png" alt="" style={heroStyles.introCoreWordmark}/>
          </span>
        </div>
        <div style={heroStyles.introOrbit} className="wem-intro-orbit">
          {copy.nodes.map((node, index) => {
            const [x, y, z, ry] = positions[index];
            return (
              <span
                key={node}
                className="wem-intro-node"
                style={{
                  ...heroStyles.introNode,
                  '--intro-x': x,
                  '--intro-y': y,
                  '--intro-z': z,
                  '--intro-ry': ry,
                  borderColor: index % 2 ? 'rgba(255,255,255,.18)' : 'rgba(190,55,128,.3)',
                }}
              >
                {node}
              </span>
            );
          })}
        </div>
      </div>
      <div style={heroStyles.introCopy} className="wem-intro-copy">
        <img src="./assets/we-mark.png" alt="WE Marketing" style={heroStyles.introBrandMark}/>
        <span style={heroStyles.introEyebrow}>{copy.eyebrow}</span>
        <h2 style={{ ...heroStyles.introTitle, ...(lang === 'en' ? heroStyles.introTitleEn : null) }} className={`wem-intro-title${lang === 'en' ? ' wem-intro-title-en' : ''}`}>
          <span className="wem-intro-title-full" style={heroStyles.introTitleFull}>{copy.title}</span>
          <span className="wem-intro-title-mobile" style={heroStyles.introTitleMobile}>{copy.mobileTitle}</span>
        </h2>
        <p style={heroStyles.introSub} className="wem-intro-sub">{copy.sub}</p>
        <div style={heroStyles.introSystemRail} className="wem-intro-system-rail" aria-hidden="true">
          {copy.steps.map((step, index) => (
            <React.Fragment key={step}>
              <span style={heroStyles.introSystemStep}>{step}</span>
              {index < copy.steps.length - 1 && <span style={heroStyles.introSystemArrow}>→</span>}
            </React.Fragment>
          ))}
        </div>
        <button type="button" style={heroStyles.introEnter} className="wem-intro-enter" onClick={(event) => { event.stopPropagation(); onOpen(); }}>
          <span style={heroStyles.introEnterText}>{copy.cta}</span>
          <span style={heroStyles.introEnterArrow}>→</span>
        </button>
      </div>
    </div>
  );
};
const OpeningPortalScene = ({ opening }) => {
  const canvasRef = React.useRef(null);
  const openingRef = React.useRef(opening);
  openingRef.current = opening;
  React.useEffect(() => {
    let disposed = false;
    let frame = 0;
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext('2d', { alpha: true });
    const compact = window.matchMedia('(max-width: 640px)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const particleTotal = compact ? 150 : 420;
    const microTotal = compact ? 90 : 260;
    const distantTotal = compact ? 80 : 180;
    const foregroundTotal = compact ? 8 : 18;
    const particles = Array.from({ length: reduced ? 0 : particleTotal }, (_, index) => {
      const arm = index % 5;
      const depth = Math.random();
      return {
        arm,
        depth,
        radius: 28 + Math.pow(Math.random(), .6) * 660,
        angle: Math.random() * Math.PI * 2,
        lift: (Math.random() - .5) * 170,
        speed: .00065 + Math.random() * .0012,
        size: .28 + Math.random() * 1.65,
        spike: Math.random() > .92,
        phase: Math.random() * Math.PI * 2,
        accent: Math.random() > .972,
        violet: Math.random() > .94,
        blue: Math.random() > .88,
      };
    });
    const microStars = Array.from({ length: microTotal }, () => ({
      x: Math.random(),
      y: Math.random(),
      size: .18 + Math.random() * .48,
      phase: Math.random() * Math.PI * 2,
      speed: .00008 + Math.random() * .00022,
      tone: Math.random(),
      alpha: .045 + Math.random() * .14,
    }));
    const distantStars = Array.from({ length: distantTotal }, () => ({
      x: Math.random(),
      y: Math.random(),
      size: .18 + Math.random() * .82,
      phase: Math.random() * Math.PI * 2,
      speed: .00018 + Math.random() * .00055,
      drift: (Math.random() - .5) * .018,
      spike: Math.random() > .97,
      tone: Math.random(),
      alpha: .1 + Math.random() * .36,
    }));
    const foregroundStars = Array.from({ length: foregroundTotal }, () => {
      let x = Math.random();
      let y = Math.random();
      if (x > .24 && x < .76 && y > .22 && y < .76) {
        if (Math.random() > .5) x = Math.random() > .5 ? .06 + Math.random() * .14 : .8 + Math.random() * .14;
        else y = Math.random() > .5 ? .05 + Math.random() * .16 : .76 + Math.random() * .18;
      }
      return {
        x,
        y,
        size: 1.8 + Math.random() * 4.8,
        phase: Math.random() * Math.PI * 2,
        speed: .00012 + Math.random() * .00028,
        tone: Math.random(),
        alpha: .035 + Math.random() * .12,
      };
    });
    let width = 1;
    let height = 1;
    const resize = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      const dpr = compact ? 1 : Math.min(window.devicePixelRatio || 1, 1.25);
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement);
    resize();
    const drawRing = (time, scale, color, alpha, squash) => {
      ctx.save();
      ctx.translate(width / 2, height * .42);
      ctx.rotate(time * .00009 * scale);
      ctx.scale(1, squash);
      ctx.strokeStyle = color;
      ctx.globalAlpha = alpha;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.ellipse(0, 0, Math.min(width, height) * .38 * scale, Math.min(width, height) * .16 * scale, 0, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
    };
    const drawTrailArc = (time, scale, color, alpha, squash, phase, length) => {
      const base = Math.min(width, height);
      const start = phase + time * .00018 * scale;
      ctx.save();
      ctx.translate(width / 2, height * .42);
      ctx.rotate(time * .00006 * scale + phase * .12);
      ctx.scale(1, squash);
      ctx.strokeStyle = color;
      ctx.globalAlpha = alpha;
      ctx.lineWidth = Math.max(1, base * .0018);
      ctx.lineCap = 'round';
      ctx.shadowColor = color;
      ctx.shadowBlur = 18;
      ctx.beginPath();
      ctx.ellipse(0, 0, base * .39 * scale, base * .17 * scale, 0, start, start + length);
      ctx.stroke();
      ctx.globalAlpha = alpha * .34;
      ctx.lineWidth = Math.max(3, base * .0048);
      ctx.beginPath();
      ctx.ellipse(0, 0, base * .39 * scale, base * .17 * scale, 0, start + length * .18, start + length * .72);
      ctx.stroke();
      ctx.restore();
    };
    const drawStarTrail = (x, y, dx, dy, length, alpha, color, radius) => {
      const gradient = ctx.createLinearGradient(x - dx * length, y - dy * length, x, y);
      gradient.addColorStop(0, color.replace('ALPHA', '0'));
      gradient.addColorStop(.68, color.replace('ALPHA', String(alpha * .22)));
      gradient.addColorStop(1, color.replace('ALPHA', String(alpha * .72)));
      ctx.save();
      ctx.strokeStyle = gradient;
      ctx.lineWidth = Math.max(.45, radius * .58);
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(x - dx * length, y - dy * length);
      ctx.lineTo(x, y);
      ctx.stroke();
      ctx.restore();
    };
    const drawForegroundGlow = (x, y, radius, alpha, color) => {
      ctx.save();
      ctx.globalCompositeOperation = 'screen';
      ctx.filter = `blur(${Math.max(1.8, radius * .52)}px)`;
      const glow = ctx.createRadialGradient(x, y, 0, x, y, radius * 5.8);
      glow.addColorStop(0, color.replace('ALPHA', String(alpha)));
      glow.addColorStop(.28, color.replace('ALPHA', String(alpha * .26)));
      glow.addColorStop(1, color.replace('ALPHA', '0'));
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(x, y, radius * 7.2, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    };
    const drawMicroStar = (x, y, radius, alpha, color) => {
      ctx.save();
      ctx.fillStyle = color.replace('ALPHA', String(alpha));
      ctx.globalAlpha = 1;
      ctx.beginPath();
      ctx.arc(x, y, Math.max(.2, radius), 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    };
    const drawStar = (x, y, radius, alpha, color, spike) => {
      const glow = ctx.createRadialGradient(x, y, 0, x, y, radius * 5.6);
      glow.addColorStop(0, color.replace('ALPHA', String(alpha)));
      glow.addColorStop(.34, color.replace('ALPHA', String(alpha * .2)));
      glow.addColorStop(1, color.replace('ALPHA', '0'));
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(x, y, radius * 4.6, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = color.replace('ALPHA', String(Math.min(.95, alpha + .12)));
      ctx.beginPath();
      ctx.arc(x, y, Math.max(.35, radius), 0, Math.PI * 2);
      ctx.fill();
      if (spike) {
        ctx.save();
        ctx.strokeStyle = color.replace('ALPHA', String(alpha * .72));
        ctx.lineWidth = Math.max(.45, radius * .28);
        ctx.beginPath();
        ctx.moveTo(x - radius * 4.5, y);
        ctx.lineTo(x + radius * 4.5, y);
        ctx.moveTo(x, y - radius * 4.5);
        ctx.lineTo(x, y + radius * 4.5);
        ctx.stroke();
        ctx.restore();
      }
    };
    const animate = (time) => {
      if (disposed) return;
      const openingBoost = openingRef.current ? 1 : 0;
      ctx.clearRect(0, 0, width, height);
      microStars.forEach((p) => {
        const pulse = .86 + Math.sin(time * p.speed + p.phase) * .14;
        const color = p.tone > .955
          ? 'rgba(190,55,128,ALPHA)'
          : p.tone > .9
            ? 'rgba(155,48,255,ALPHA)'
            : p.tone > .84
              ? 'rgba(74,143,255,ALPHA)'
              : 'rgba(255,255,255,ALPHA)';
        drawMicroStar(p.x * width, p.y * height, p.size, Math.max(.025, p.alpha * pulse - openingBoost * .06), color);
      });
      distantStars.forEach((p) => {
        const twinkle = .72 + Math.sin(time * p.speed + p.phase) * .28;
        const x = ((p.x + Math.sin(time * p.speed + p.phase) * p.drift + 1) % 1) * width;
        const y = p.y * height;
        const edgeLift = p.y < .2 || p.y > .78 || p.x < .18 || p.x > .82 ? 1.32 : .82;
        const alpha = Math.max(.08, Math.min(.78, p.alpha * twinkle * edgeLift - openingBoost * .16));
        const color = p.tone > .94
          ? 'rgba(190,55,128,ALPHA)'
          : p.tone > .86
            ? 'rgba(155,48,255,ALPHA)'
            : p.tone > .78
              ? 'rgba(74,143,255,ALPHA)'
              : 'rgba(255,255,255,ALPHA)';
        drawStar(x, y, p.size, alpha, color, p.spike);
      });
      drawRing(time, 1.08 + openingBoost * .18, 'rgba(205,64,146,.42)', .29, .34);
      drawRing(time, 1.42 + openingBoost * .24, 'rgba(155,48,255,.3)', .24, .25);
      drawRing(-time, 1.8 + openingBoost * .32, 'rgba(74,143,255,.18)', .14, .18);
      if (!compact) {
        drawTrailArc(time, 1.1 + openingBoost * .12, 'rgba(205,64,146,.88)', .3, .34, .2, Math.PI * .72);
        drawTrailArc(-time, 1.45 + openingBoost * .16, 'rgba(155,48,255,.9)', .22, .24, 2.4, Math.PI * .54);
        drawTrailArc(time, 1.83 + openingBoost * .18, 'rgba(74,143,255,.74)', .1, .18, 4.1, Math.PI * .42);
      }
      const cx = width / 2;
      const cy = height * .42;
      const spin = time * .00012 + openingBoost * .8;
      particles.forEach((p) => {
        const armAngle = p.arm * Math.PI * .4;
        const angle = p.angle + armAngle + spin + p.radius * .003;
        const z = .38 + p.depth * .92 + Math.sin(time * p.speed + p.angle) * .08;
        const rx = p.radius * z * (1 + openingBoost * .16);
        const x = cx + Math.cos(angle) * rx;
        const y = cy + Math.sin(angle) * rx * .34 + p.lift * z;
        if (x < -20 || x > width + 20 || y < -20 || y > height + 20) return;
        const twinkle = .72 + Math.sin(time * p.speed * 2.8 + p.phase) * .28;
        const alpha = Math.max(.035, Math.min(.58, (z * .38 - openingBoost * .22) * twinkle));
        const color = p.accent
          ? 'rgba(190,55,128,ALPHA)'
          : p.violet
            ? 'rgba(155,48,255,ALPHA)'
            : p.blue
              ? 'rgba(74,143,255,ALPHA)'
            : 'rgba(255,255,255,ALPHA)';
        const tx = -Math.sin(angle);
        const ty = Math.cos(angle) * .34;
        const tLen = Math.hypot(tx, ty) || 1;
        if (!compact && z > .68 && alpha > .16) {
          drawStarTrail(x, y, tx / tLen, ty / tLen, (8 + p.size * 6) * z * (1 + openingBoost * .28), alpha * .42, color, p.size * z);
        }
        drawStar(x, y, p.size * z, alpha, color, p.spike && z > .72);
      });
      foregroundStars.forEach((p) => {
        const pulse = .72 + Math.sin(time * p.speed + p.phase) * .28;
        const color = p.tone > .78
          ? 'rgba(190,55,128,ALPHA)'
          : p.tone > .5
            ? 'rgba(155,48,255,ALPHA)'
            : 'rgba(255,255,255,ALPHA)';
        drawForegroundGlow(p.x * width, p.y * height, p.size, Math.max(.02, p.alpha * pulse - openingBoost * .08), color);
      });
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      ro.disconnect();
    };
  }, []);
  return <canvas ref={canvasRef} className="wem-intro-canvas" style={heroStyles.introCanvas} aria-hidden="true"/>;
};
const getHeroServices = (lang) => ({
  en: [
      ['Creator Affiliate', 'Recruit, seed, follow up, and scale creators that can actually sell.', '#FF1493', '8K+'],
      ['UGC Content', 'Turn creator briefs, demos, and usage rights into a repeatable content engine.', '#4A8FFF', '24K+'],
      ['Live Selling', 'Build host rosters, live scripts, product stacks, and weekly live rhythm.', '#9B30FF', 'Live'],
      ['Shop Operations', 'Keep the shop ready for creator-led conversion and scale.', '#4A8FFF', 'Ops'],
      ['Paid Amplify', 'Push proven creator angles into paid traffic without breaking the organic loop.', '#FF1493', 'ROAS'],
      ['Growth Reporting', 'Connect content, traffic, orders, creator output, and next actions every week.', '#9B30FF', 'GMV'],
    ],
  zh: [
      ['达人联盟', '招募、寄样、跟进、放大真正能带货的达人。', '#FF1493', '8K+'],
      ['UGC 内容', '把脚本、测评、展示和授权做成可复用的内容系统。', '#4A8FFF', '24K+'],
      ['直播带货', '搭建主播池、直播话术、货盘节奏和每周复盘。', '#9B30FF', 'Live'],
      ['店铺运营', '让店铺承接达人流量、内容流量和成交放大。', '#4A8FFF', 'Ops'],
      ['投放放大', '把跑出来的达人角度放进广告，放大有效内容。', '#FF1493', 'ROAS'],
      ['增长复盘', '每周把内容、流量、订单、达人产出和下一步接起来。', '#9B30FF', 'GMV'],
    ],
  ko: [
      ['크리에이터 어필리에이트', '판매 가능성이 있는 크리에이터를 발굴하고 시딩, 후속 관리와 확장을 운영합니다.', '#FF1493', '8K+'],
      ['UGC 콘텐츠', '브리프, 데모와 사용 권리를 반복 가능한 콘텐츠 시스템으로 만듭니다.', '#4A8FFF', '24K+'],
      ['라이브 판매', '호스트 풀, 라이브 스크립트, 상품 구성과 주간 라이브 리듬을 만듭니다.', '#9B30FF', 'Live'],
      ['숍 운영', '크리에이터 트래픽이 전환과 성장으로 이어지도록 숍을 준비합니다.', '#4A8FFF', 'Ops'],
      ['유료 확산', '검증된 크리에이터 각도를 유료 트래픽으로 확대합니다.', '#FF1493', 'ROAS'],
      ['성장 리포팅', '콘텐츠, 트래픽, 주문, 크리에이터 활동과 다음 액션을 매주 연결합니다.', '#9B30FF', 'GMV'],
    ],
}[lang]);
const HeroThreeScene = ({ lang, active, onActive }) => {
  const canvasRef = React.useRef(null);
  const activeRef = React.useRef(active);
  activeRef.current = active;
  const services = getHeroServices(lang);
  React.useLayoutEffect(() => {
    let disposed = false;
    let frame = 0;
    let cleanup = () => {};
    import('./vendor/three.module.min.js?v=20260612').then((THREE) => {
      if (disposed || !canvasRef.current) return;
      const canvas = canvasRef.current;
      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'high-performance' });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.8));
      renderer.setClearColor(0x000000, 0);

      const scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2(0x050008, 0.045);
      const camera = new THREE.PerspectiveCamera(46, 1, 0.1, 80);
      camera.position.set(0, 2.1, 12.5);

      const root = new THREE.Group();
      root.position.set(2.25, .05, 0);
      root.scale.setScalar(1.18);
      scene.add(root);

      const ambient = new THREE.AmbientLight(0xffffff, .7);
      scene.add(ambient);
      const pinkLight = new THREE.PointLight(0xff1493, 16, 26);
      pinkLight.position.set(-5, 4, 5);
      scene.add(pinkLight);
      const rimLight = new THREE.PointLight(0xffffff, 12, 24);
      rimLight.position.set(5, -1, 6);
      scene.add(rimLight);

      const coreMaterial = new THREE.MeshPhysicalMaterial({
        color: 0xff1493,
        emissive: 0xff1493,
        emissiveIntensity: .72,
        metalness: .2,
        roughness: .12,
        transmission: .08,
        clearcoat: .72,
        clearcoatRoughness: .2,
      });
      const core = new THREE.Mesh(new THREE.IcosahedronGeometry(1.62, 4), coreMaterial);
      root.add(core);
      const wire = new THREE.Mesh(
        new THREE.IcosahedronGeometry(1.72, 2),
        new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true, transparent: true, opacity: .34 }),
      );
      root.add(wire);

      const ringGroup = new THREE.Group();
      root.add(ringGroup);
      [
        [2.35, 2.35, 0, 0xff1493, .26],
        [3.2, 3.2, Math.PI / 2.8, 0xffffff, .2],
        [4.2, 4.2, -Math.PI / 3.2, 0xffffff, .12],
      ].forEach(([rx, ry, rot, color, opacity]) => {
        const ring = new THREE.Mesh(
          new THREE.TorusGeometry(rx, .012, 10, 180),
          new THREE.MeshBasicMaterial({ color, transparent: true, opacity }),
        );
        ring.scale.y = ry / rx;
        ring.rotation.x = 1.16;
        ring.rotation.z = rot;
        ringGroup.add(ring);
      });

      const orbit = new THREE.Group();
      root.add(orbit);
      const nodeMeshes = [];
      services.forEach((service, index) => {
        const angle = (Math.PI * 2 * index) / services.length;
        const color = new THREE.Color(service[2]);
        const group = new THREE.Group();
        group.position.set(Math.cos(angle) * 4.15, Math.sin(angle * 1.4) * .95, Math.sin(angle) * 2.35);
        const mesh = new THREE.Mesh(
          index % 2 ? new THREE.OctahedronGeometry(.38, 1) : new THREE.BoxGeometry(.58, .58, .58, 2, 2, 2),
          new THREE.MeshPhysicalMaterial({
            color,
            emissive: color,
            emissiveIntensity: .95,
            metalness: .54,
            roughness: .16,
            clearcoat: .7,
          }),
        );
        mesh.userData.serviceIndex = index;
        group.add(mesh);
        const halo = new THREE.Mesh(
          new THREE.TorusGeometry(.7, .018, 10, 80),
          new THREE.MeshBasicMaterial({ color, transparent: true, opacity: .72 }),
        );
        halo.rotation.x = Math.PI / 2.6;
        group.add(halo);
        const line = new THREE.Line(
          new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0, 0), group.position.clone()]),
          new THREE.LineBasicMaterial({ color, transparent: true, opacity: .22 }),
        );
        orbit.add(line);
        orbit.add(group);
        nodeMeshes.push(mesh);
      });

      const particleCount = 720;
      const positions = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);
      const palette = [new THREE.Color(0xff1493), new THREE.Color(0xffffff), new THREE.Color(0xffffff), new THREE.Color(0xffffff)];
      for (let i = 0; i < particleCount; i += 1) {
        const radius = 4 + Math.random() * 11;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos((Math.random() * 2) - 1);
        positions[i * 3] = Math.sin(phi) * Math.cos(theta) * radius;
        positions[i * 3 + 1] = (Math.cos(phi) * radius * .54) + (Math.random() - .5);
        positions[i * 3 + 2] = Math.sin(phi) * Math.sin(theta) * radius;
        const c = palette[i % palette.length];
        colors[i * 3] = c.r;
        colors[i * 3 + 1] = c.g;
        colors[i * 3 + 2] = c.b;
      }
      const particleGeometry = new THREE.BufferGeometry();
      particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
      const particles = new THREE.Points(
        particleGeometry,
        new THREE.PointsMaterial({ size: .045, vertexColors: true, transparent: true, opacity: .76, blending: THREE.AdditiveBlending }),
      );
      scene.add(particles);

      const raycaster = new THREE.Raycaster();
      const pointer = new THREE.Vector2(-10, -10);
      const target = { x: 0, y: 0 };
      const resize = () => {
        const rect = canvas.parentElement.getBoundingClientRect();
        const width = Math.max(1, rect.width);
        const height = Math.max(1, rect.height);
        renderer.setSize(width, height, false);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      };
      const onMove = (event) => {
        const rect = canvas.getBoundingClientRect();
        if (!rect.width || !rect.height) return;
        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;
        pointer.x = x * 2 - 1;
        pointer.y = -(y * 2 - 1);
        target.x = (x - .5) * .9;
        target.y = (y - .5) * .55;
      };
      const ro = new ResizeObserver(resize);
      ro.observe(canvas.parentElement);
      window.addEventListener('mousemove', onMove, { passive: true });
      resize();

      const clock = new THREE.Clock();
      const animate = () => {
        if (disposed) return;
        const elapsed = clock.getElapsedTime();
        root.rotation.y += (target.x - root.rotation.y) * .025;
        root.rotation.x += (-target.y - root.rotation.x) * .025;
        orbit.rotation.y = elapsed * .11;
        ringGroup.rotation.y = elapsed * .06;
        ringGroup.rotation.z = Math.sin(elapsed * .22) * .12;
        core.rotation.x = elapsed * .22;
        core.rotation.y = elapsed * .34;
        wire.rotation.x = -elapsed * .18;
        wire.rotation.y = elapsed * .24;
        particles.rotation.y = elapsed * .018;
        particles.rotation.x = Math.sin(elapsed * .08) * .07;

        nodeMeshes.forEach((mesh) => {
          const index = mesh.userData.serviceIndex;
          const selected = index === activeRef.current;
          mesh.scale.lerp(new THREE.Vector3(selected ? 1.62 : 1, selected ? 1.62 : 1, selected ? 1.62 : 1), .08);
          mesh.rotation.x += .012 + index * .001;
          mesh.rotation.y += .018;
        });

        raycaster.setFromCamera(pointer, camera);
        const hit = raycaster.intersectObjects(nodeMeshes, false)[0];
        if (hit && typeof hit.object.userData.serviceIndex === 'number' && hit.object.userData.serviceIndex !== activeRef.current) {
          onActive(hit.object.userData.serviceIndex);
        }
        renderer.render(scene, camera);
        frame = requestAnimationFrame(animate);
      };
      animate();

      cleanup = () => {
        cancelAnimationFrame(frame);
        window.removeEventListener('mousemove', onMove);
        ro.disconnect();
        scene.traverse((obj) => {
          if (obj.geometry) obj.geometry.dispose();
          if (obj.material) {
            if (Array.isArray(obj.material)) obj.material.forEach((m) => m.dispose());
            else obj.material.dispose();
          }
        });
        renderer.dispose();
      };
    }).catch(() => {});
    return () => {
      disposed = true;
      cleanup();
    };
  }, [lang, onActive]);

  return (
    <div style={heroStyles.threeLayer} aria-hidden="true">
      <canvas ref={canvasRef} className="wem-hero-three-canvas"/>
      <div style={heroStyles.threeVignette}/>
      <div style={heroStyles.domConstellation} className="wem-dom-constellation">
        <div style={heroStyles.domCore}>
          <span style={heroStyles.domCoreGlow}/>
          <span style={heroStyles.domRingA}/>
          <span style={heroStyles.domRingB}/>
          <span style={heroStyles.domRingC}/>
          <strong style={heroStyles.domCoreText}>WEM</strong>
        </div>
        {services.map(([name, copy, color, metric], index) => {
          const positions = [
            ['-210px', '-118px', '86px', '-22deg'],
            ['44px', '-160px', '130px', '18deg'],
            ['220px', '-40px', '62px', '-14deg'],
            ['162px', '148px', '104px', '20deg'],
            ['-88px', '182px', '72px', '-18deg'],
            ['-252px', '52px', '116px', '16deg'],
          ];
          const [x, y, z, ry] = positions[index];
          return (
            <button
              key={name}
              type="button"
              tabIndex="-1"
              className="wem-dom-service-node"
              onMouseEnter={() => onActive(index)}
              onFocus={() => onActive(index)}
              style={{
                ...heroStyles.domNode,
                '--node-x': x,
                '--node-y': y,
                '--node-z': z,
                '--node-ry': ry,
                borderColor: index === active ? color : 'rgba(255,255,255,.16)',
                boxShadow: index === active ? `0 0 0 1px ${color}, 0 0 46px ${color}99` : '0 20px 70px rgba(0,0,0,.35)',
              }}
            >
              <span style={{ ...heroStyles.domNodeOrb, background: color }}/>
              <span style={heroStyles.domNodeMetric}>{metric}</span>
              <span style={heroStyles.domNodeName}>{name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
const HeroServiceHud = ({ lang, active, onActive }) => {
  const services = getHeroServices(lang);
  const header = lang === 'en'
    ? {
      eyebrow: 'Growth service system',
      title: 'Creator-led commerce',
      copy: 'Creators, UGC, live, shop operations, paid amplification, and reporting connected into one repeatable GMV system.',
    }
    : lang === 'ko'
    ? {
      eyebrow: '통합 성장 시스템',
      title: '크리에이터 기반 커머스',
      copy: '크리에이터, UGC, 라이브, 숍 운영, 광고 확장, 성과 분석을 하나의 반복 가능한 GMV 성장 시스템으로 연결합니다.',
    }
    : {
      eyebrow: '增长服务系统',
      title: '内容电商增长系统',
      copy: '把达人、UGC、直播、店铺承接、投放放大和复盘连接成一套可持续出单的增长系统。',
    };
  return (
    <aside style={heroStyles.serviceHud} className="wem-service-hud" aria-label={lang === 'ko' ? 'WE Marketing 통합 성장 시스템' : (lang === 'en' ? 'WE Marketing growth service system' : 'WE Marketing 增长服务系统')}>
      <div style={heroStyles.serviceHudHeader}>
        <span style={heroStyles.serviceHudEyebrow}>{header.eyebrow}</span>
        <strong style={heroStyles.serviceHudTitle}>{header.title}</strong>
        <p style={heroStyles.serviceHudCopy}>{header.copy}</p>
      </div>
      <div style={heroStyles.serviceHudGrid} className="wem-service-hud-grid">
        {services.map(([name, copy, color, metric], index) => (
          <button
            key={name}
            type="button"
            onMouseEnter={() => onActive(index)}
            onFocus={() => onActive(index)}
            style={{
              ...heroStyles.serviceHudCard,
              borderColor: index === active ? color : 'rgba(255,255,255,.13)',
              background: index === active ? `linear-gradient(135deg, ${color}2e, rgba(0,0,0,.56))` : 'rgba(0,0,0,.42)',
              opacity: index === active ? 1 : .74,
            }}
            className="wem-service-hud-card"
          >
            <span style={{ ...heroStyles.serviceMetric, color }}>{metric}</span>
            <span style={heroStyles.serviceName}>{name}</span>
          </button>
        ))}
      </div>
    </aside>
  );
};
const HeroMotionVisual = ({ lang }) => {
  const labels = lang === 'en'
    ? {
      feed: ['Creator videos', 'Views climbing', 'Affiliate sales', 'Live traffic', 'GMV signal'],
      headline: 'Creator discovery engine',
      sub: 'Seed more creator content, read the signals, then scale what starts moving.',
      phoneTitle: 'Creator videos',
      phoneSub: 'Views updating live',
      rows: [
        ['UGC try-on', '18.4K', '38%', '#FF1493'],
        ['Product demo', '96.8K', '58%', '#4A8FFF'],
        ['Review clip', '318K', '76%', '#9B30FF'],
        ['Viral angle', '1.2M', '94%', '#4A8FFF'],
      ],
      metrics: [['+286%', 'creator views'], ['48', 'new creator posts'], ['3', 'languages covered']],
      note: 'From creator seeding to content testing, every signal points to the next move.',
      videos: [
        ['./assets/match-medicube-2.mp4', 'Beauty demo'],
        ['./assets/match-sacheu-1.mp4', 'Creator proof'],
        ['./assets/case3-zayndeals.mp4', 'Deal signal'],
      ],
    }
    : {
      feed: ['达人视频', '播放增长', '联盟成交', '直播流量', 'GMV 信号'],
      headline: '让更多达人帮品牌被看见',
      sub: '先铺开达人内容，再根据播放、互动和成交信号，把有效方向放大。',
      phoneTitle: '达人视频',
      phoneSub: '播放量持续更新',
      rows: [
        ['试用内容', '18.4K', '38%', '#FF1493'],
        ['产品展示', '96.8K', '58%', '#4A8FFF'],
        ['测评视频', '318K', '76%', '#9B30FF'],
        ['爆款角度', '1.2M', '94%', '#4A8FFF'],
      ],
      metrics: [['+286%', '达人播放增长'], ['48', '新增达人内容'], ['三语', '覆盖更多受众']],
      note: '从达人种草到内容测试，用真实数据判断下一步该推什么。',
      videos: [
        ['./assets/match-medicube-2.mp4', '美妆展示'],
        ['./assets/match-sacheu-1.mp4', '达人内容'],
        ['./assets/case3-zayndeals.mp4', '爆品信号'],
      ],
    };
  return (
    <div style={heroStyles.visualWrap} className="wem-hero-visual wem-hero-stage" aria-hidden="true">
      <div style={heroStyles.visualGrid}/>
      <div style={heroStyles.visualGlow}/>
      <div style={heroStyles.videoDeck}>
        {labels.videos.map(([src, caption], i) => (
          <div key={src} style={{ ...heroStyles.videoCard, ...heroStyles.videoCardPositions[i] }} className="wem-hero-video-card">
            <video src={src} muted autoPlay loop playsInline preload="metadata"/>
            <span style={heroStyles.videoCaption}>{caption}</span>
          </div>
        ))}
      </div>
      <div style={heroStyles.marqueeRail} className="wem-hero-marquee">
        {[...labels.feed, ...labels.feed].map((item, i) => (
          <span key={`${item}-${i}`} style={heroStyles.feedPill}>{item}</span>
        ))}
      </div>
      <div style={heroStyles.growthCopy}>
        <span style={heroStyles.growthEyebrow}>{lang === 'en' ? 'RESULT-DRIVEN TIKTOK SHOP GROWTH' : '结果导向的 TIKTOK SHOP 增长'}</span>
        <strong style={heroStyles.growthHeadline}>{labels.headline}</strong>
        <span style={heroStyles.growthSub}>{labels.sub}</span>
      </div>
      <div style={heroStyles.phoneHalo}/>
      <div style={heroStyles.heroPhone} className="wem-hero-phone">
        <div style={heroStyles.phoneNotch}/>
        <div style={heroStyles.phoneScreen}>
          <div style={heroStyles.phoneTop}>
            <span style={heroStyles.phoneBadge}>{labels.phoneTitle}</span>
            <span style={heroStyles.phoneDot}/>
          </div>
          <div style={heroStyles.phoneHero} className="wem-hero-phone-main">
            <span>{labels.phoneSub}</span>
            <strong>1.2M</strong>
            <small>{lang === 'en' ? 'top creator video views' : '单条达人视频播放'}</small>
          </div>
          <div style={heroStyles.viewsViewport}>
            <div style={heroStyles.viewsStream} className="wem-hero-view-stream">
              {[...labels.rows, ...labels.rows].map(([name, views, width, color], i) => (
                <div key={`${name}-${views}-${i}`} style={heroStyles.viewRow}>
                  <div style={{ ...heroStyles.videoThumb, background: `linear-gradient(135deg, ${color}, rgba(255,255,255,.14))` }}>
                    <span style={heroStyles.playIcon}>▶</span>
                  </div>
                  <div style={heroStyles.viewMeta}>
                    <div style={heroStyles.viewTopLine}>
                      <strong>{name}</strong>
                      <span>{views}</span>
                    </div>
                    <div style={heroStyles.viewTrack}>
                      <span className="wem-hero-view-bar" style={{ ...heroStyles.viewBar, width, background: color }}/>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={heroStyles.phoneBottom}>
            <span>{lang === 'en' ? 'Signal found' : '找到有效信号'}</span>
            <strong>GMV ↑</strong>
          </div>
        </div>
      </div>
      <div style={heroStyles.metricStack}>
        {labels.metrics.map(([value, label], i) => (
          <div key={label} style={heroStyles.growthMetric} className="wem-hero-metric-float">
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
      <div style={heroStyles.chartPanel}>
        <svg viewBox="0 0 360 160" style={heroStyles.chartSvg}>
          <path d="M20 132 C78 124, 98 92, 142 96 S210 84, 250 50 S306 30, 340 18" fill="none" stroke="#4A8FFF" strokeWidth="5" strokeLinecap="round" className="wem-hero-growth-line"/>
          <path d="M20 132 C78 124, 98 92, 142 96 S210 84, 250 50 S306 30, 340 18 L340 150 L20 150 Z" fill="url(#heroGrowthFill)"/>
          <defs>
            <linearGradient id="heroGrowthFill" x1="0" y1="0" x2="0" y2="1">
              <stop stopColor="#4A8FFF" stopOpacity=".28"/>
              <stop offset="1" stopColor="#9B30FF" stopOpacity="0"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div style={heroStyles.growthNote}>{labels.note}</div>
      <svg viewBox="0 0 560 560" style={heroStyles.phoneLines}>
        <path className="wem-hero-flow" d="M78 210 C180 92, 348 108, 478 206" fill="none" stroke="#4A8FFF" strokeWidth="2"/>
        <path className="wem-hero-flow" d="M88 404 C214 512, 378 486, 492 348" fill="none" stroke="#9B30FF" strokeWidth="2" style={{ animationDelay: '-2s' }}/>
        <path className="wem-hero-flow" d="M60 322 C172 250, 392 278, 526 162" fill="none" stroke="#9B30FF" strokeWidth="2" style={{ animationDelay: '-3.5s' }}/>
      </svg>
    </div>
  );
};
const heroStyles = {
  introOverlay: { position: 'fixed', inset: 0, zIndex: 80, overflow: 'hidden', background: 'radial-gradient(circle at 50% 38%, rgba(205,64,146,.15), transparent 34%), radial-gradient(circle at 68% 28%, rgba(74,143,255,.11), transparent 35%), radial-gradient(circle at 32% 46%, rgba(126,74,205,.15), transparent 36%), radial-gradient(circle at 50% 38%, #140915 0%, #07070d 38%, #010103 100%)', color: '#fff', cursor: 'pointer', transformOrigin: '50% 50%' },
  introCanvas: { position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 2, pointerEvents: 'none', opacity: .9, mixBlendMode: 'screen' },
  introDotField: { position: 'absolute', left: '50%', top: '42%', zIndex: 1, width: 'min(126vw, 1720px)', height: 'min(126vw, 1720px)', transform: 'translate(-50%, -50%)', borderRadius: 999, backgroundImage: 'radial-gradient(rgba(255,255,255,.24) .45px, transparent 1.4px)', backgroundSize: '28px 28px', maskImage: 'radial-gradient(ellipse at center, transparent 0 10%, rgba(0,0,0,.3) 12%, #000 18% 72%, transparent 86%)', opacity: .055, mixBlendMode: 'screen' },
  introDotFieldAlt: { position: 'absolute', left: '50%', top: '42%', zIndex: 1, width: 'min(96vw, 1320px)', height: 'min(96vw, 1320px)', transform: 'translate(-50%, -50%)', borderRadius: 999, backgroundImage: 'radial-gradient(rgba(255,255,255,.18) .42px, transparent 1.2px)', backgroundSize: '44px 44px', maskImage: 'conic-gradient(from 28deg, transparent 0deg, #000 28deg, transparent 64deg, #000 104deg, transparent 160deg, #000 220deg, transparent 286deg, #000 320deg, transparent 360deg)', opacity: .045, mixBlendMode: 'screen' },
  introMesh: { position: 'absolute', inset: 0, zIndex: 3, background: 'radial-gradient(circle at 50% 42%, rgba(205,64,146,.14), rgba(126,74,205,.12) 20%, rgba(74,143,255,.06) 32%, rgba(3,3,8,.34) 58%, rgba(0,0,0,.64) 100%), linear-gradient(118deg, transparent 0 18%, rgba(205,64,146,.05) 18% 18.15%, transparent 18.15% 46%, rgba(126,74,205,.055) 46% 46.2%, transparent 46.2% 72%)', opacity: .8 },
  introTunnel: { position: 'absolute', left: '50%', top: '42%', zIndex: 3, width: 'min(104vw, 1440px)', height: 'min(104vw, 1440px)', transform: 'translate(-50%, -50%)', borderRadius: 999, background: 'repeating-radial-gradient(circle, rgba(255,255,255,.1) 0 1px, transparent 1px 118px)', maskImage: 'radial-gradient(circle, transparent 0 7%, #000 10% 64%, transparent 79%)', opacity: .2 },
  introFlash: { position: 'absolute', left: '50%', top: '50%', zIndex: 5, width: 420, height: 420, borderRadius: 999, background: 'radial-gradient(circle, rgba(255,255,255,.9), rgba(255,255,255,.46) 28%, rgba(190,55,128,.22) 45%, rgba(112,70,190,.2) 58%, transparent 74%)', opacity: 0, pointerEvents: 'none' },
  introBrandSignature: { position: 'absolute', left: 32, top: 28, zIndex: 7, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 64, height: 64, padding: 6, borderRadius: 18, border: '1px solid rgba(255,255,255,.14)', background: 'rgba(255,255,255,.055)', backdropFilter: 'blur(12px)', boxShadow: '0 18px 50px rgba(0,0,0,.28)' },
  introBrandSignatureLogo: { width: 54, height: 54, objectFit: 'contain', filter: 'drop-shadow(0 0 14px rgba(190,55,128,.26)) drop-shadow(0 0 18px rgba(74,143,255,.16))' },
  introStage: { position: 'absolute', left: '50%', top: '39%', zIndex: 4, width: 1060, height: 1060, transform: 'translate(-50%, -50%)', transformStyle: 'preserve-3d', perspective: 1200, pointerEvents: 'none', opacity: .96 },
  introGate: { position: 'absolute', left: '50%', top: '50%', width: 460, height: 460, transform: 'translate(-50%, -50%) rotateX(6deg)', borderRadius: 999, display: 'grid', placeItems: 'center', overflow: 'visible', background: 'radial-gradient(circle at 34% 24%, rgba(255,255,255,.34), rgba(205,64,146,.4) 18%, rgba(126,74,205,.34) 36%, rgba(30,12,39,.93) 60%, rgba(5,6,12,.98) 84%)', border: '1px solid rgba(255,255,255,.23)', boxShadow: '0 50px 150px rgba(0,0,0,.7), 0 0 126px rgba(205,64,146,.28), 0 0 150px rgba(74,143,255,.14), inset -34px -38px 90px rgba(0,0,0,.78), inset 28px 24px 72px rgba(255,255,255,.12)', transition: 'transform 900ms cubic-bezier(.16,1,.3,1), box-shadow 900ms ease, border-color 900ms ease' },
  introPlanetGlow: { position: 'absolute', inset: -42, borderRadius: 999, background: 'radial-gradient(circle, rgba(205,64,146,.26), rgba(126,74,205,.2) 34%, rgba(74,143,255,.13) 54%, transparent 74%)', filter: 'blur(10px)' },
  introPlanetShade: { position: 'absolute', inset: 0, borderRadius: 999, background: 'radial-gradient(circle at 32% 26%, transparent 0 24%, rgba(190,55,128,.08) 38%, rgba(112,70,190,.1) 54%, rgba(0,0,0,.52) 72%, rgba(0,0,0,.9) 100%)', mixBlendMode: 'multiply' },
  introPlanetGrid: { position: 'absolute', inset: 38, borderRadius: 999, background: 'repeating-linear-gradient(18deg, rgba(255,255,255,.11) 0 1px, transparent 1px 21px), repeating-linear-gradient(104deg, rgba(74,143,255,.09) 0 1px, transparent 1px 29px)', opacity: .26, maskImage: 'radial-gradient(circle, #000 0 64%, transparent 76%)' },
  introGateCore: { position: 'absolute', inset: 102, borderRadius: 999, background: 'radial-gradient(circle, rgba(255,255,255,.18), rgba(190,55,128,.07) 36%, rgba(74,143,255,.08) 60%, rgba(0,0,0,.5) 100%)', border: '1px solid rgba(255,255,255,.13)', boxShadow: 'inset 0 0 50px rgba(255,255,255,.1), 0 0 52px rgba(74,143,255,.16)' },
  introGateHalo: { position: 'absolute', left: '50%', top: '50%', width: 600, height: 182, borderRadius: '50%', border: '1px solid rgba(255,255,255,.2)', transform: 'translate(-50%, -50%) rotateX(70deg) rotateZ(-16deg)', boxShadow: '0 0 44px rgba(190,55,128,.13), 0 0 74px rgba(74,143,255,.1)' },
  introRingA: { position: 'absolute', left: '50%', top: '50%', width: 840, height: 322, borderRadius: '50%', border: '1px solid rgba(205,64,146,.36)', boxShadow: '0 0 48px rgba(205,64,146,.15)' },
  introRingB: { position: 'absolute', left: '50%', top: '50%', width: 720, height: 278, borderRadius: '50%', border: '1px solid rgba(155,48,255,.3)', boxShadow: '0 0 38px rgba(155,48,255,.12)' },
  introRingC: { position: 'absolute', left: '50%', top: '50%', width: 960, height: 374, borderRadius: '50%', border: '1px dashed rgba(255,255,255,.18)' },
  introGateLogo: { position: 'relative', zIndex: 3, width: 220, height: 'auto', filter: 'drop-shadow(0 0 24px rgba(190,55,128,.38)) drop-shadow(0 0 22px rgba(74,143,255,.18)) drop-shadow(0 18px 34px rgba(0,0,0,.55))' },
  introCoreLabel: { position: 'absolute', left: '50%', top: 'calc(50% + 88px)', zIndex: 3, transform: 'translateX(-50%)', width: 180, height: 30, overflow: 'hidden', display: 'block', filter: 'drop-shadow(0 0 14px rgba(190,55,128,.22))' },
  introCoreWordmark: { position: 'absolute', left: 0, top: -130, width: 180, height: 180, objectFit: 'contain' },
  introOrbit: { position: 'absolute', inset: 0 },
  introNode: { position: 'absolute', left: '50%', top: '50%', minWidth: 138, minHeight: 46, marginLeft: -69, marginTop: -23, display: 'grid', placeItems: 'center', padding: '12px 16px', borderRadius: 999, border: '1px solid rgba(255,255,255,.18)', background: 'rgba(8,8,14,.48)', color: 'rgba(255,255,255,.76)', fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '.14em', fontWeight: 900, textTransform: 'uppercase', backdropFilter: 'blur(10px)', boxShadow: '0 24px 72px rgba(0,0,0,.35), inset 0 0 0 1px rgba(255,255,255,.08)', transformStyle: 'preserve-3d' },
  introSystemRail: { position: 'relative', zIndex: 5, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 11, minHeight: 48, marginTop: 5, padding: '0 22px', borderRadius: 999, border: '1px solid rgba(255,255,255,.15)', background: 'linear-gradient(90deg, rgba(190,55,128,.1), rgba(255,255,255,.07), rgba(112,70,190,.11), rgba(74,143,255,.08))', color: '#fff', overflow: 'hidden', backdropFilter: 'blur(10px)', boxShadow: '0 18px 60px rgba(0,0,0,.38), 0 0 44px rgba(190,55,128,.08), 0 0 46px rgba(74,143,255,.07)' },
  introSystemStep: { position: 'relative', zIndex: 1, fontFamily: 'var(--font-mono)', fontSize: 11, lineHeight: 1, fontWeight: 900, letterSpacing: '.12em', color: 'rgba(255,255,255,.82)', whiteSpace: 'nowrap' },
  introSystemArrow: { position: 'relative', zIndex: 1, fontFamily: 'var(--font-mono)', fontSize: 14, color: '#FF1493', lineHeight: 1 },
  introCopy: { position: 'absolute', left: '50%', top: '75.5%', zIndex: 6, display: 'grid', justifyItems: 'center', gap: 12, width: 'min(980px, calc(100vw - 72px))', transform: 'translate(-50%, -50%)', pointerEvents: 'none', textAlign: 'center', color: '#fff' },
  introBrandMark: { display: 'none', width: 132, height: 'auto', marginBottom: 6, filter: 'drop-shadow(0 14px 30px rgba(255,20,147,.22))' },
  introEyebrow: { fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,.66)', fontSize: 13, letterSpacing: '.18em', fontWeight: 900, textTransform: 'uppercase' },
  introTitle: { fontFamily: 'var(--font-display)', fontSize: 'clamp(44px, 5.3vw, 84px)', lineHeight: .9, letterSpacing: 0, textTransform: 'uppercase', margin: 0, color: '#fff', textShadow: '0 0 28px rgba(190,55,128,.14), 0 0 28px rgba(74,143,255,.08), 0 20px 70px rgba(0,0,0,.68)' },
  introTitleEn: { fontSize: 'clamp(50px, 6vw, 96px)', lineHeight: .88 },
  introTitleFull: { display: 'inline' },
  introTitleMobile: { display: 'none' },
  introSub: { maxWidth: 760, margin: 0, color: 'rgba(255,255,255,.72)', fontFamily: 'var(--font-sans)', fontSize: 18, lineHeight: 1.46, fontWeight: 800 },
  introEnter: { pointerEvents: 'auto', justifySelf: 'center', marginTop: 14, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 16, minHeight: 70, minWidth: 360, padding: '0 46px', borderRadius: 999, border: '1px solid rgba(255,255,255,.32)', background: 'linear-gradient(92deg, rgba(190,55,128,.22), rgba(112,70,190,.18) 52%, rgba(74,143,255,.12))', color: '#fff', fontFamily: 'var(--font-sans)', fontWeight: 900, fontSize: 14, letterSpacing: '.12em', textTransform: 'uppercase', cursor: 'pointer', backdropFilter: 'blur(14px)', boxShadow: '0 24px 70px rgba(0,0,0,.52), 0 0 58px rgba(190,55,128,.14), 0 0 58px rgba(74,143,255,.12), inset 0 0 0 1px rgba(255,255,255,.13)' },
  introEnterText: { position: 'relative', zIndex: 1 },
  introEnterArrow: { fontSize: 22, lineHeight: 1 },
  wrap: { position: 'relative', background: '#000', color: '#fff', overflow: 'hidden', minHeight: '86vh', '--hero-x': '62%', '--hero-y': '34%', '--hero-tilt-x': '0deg', '--hero-tilt-y': '0deg' },
  bgLayer: { position: 'absolute', zIndex: 0, inset: '-22% -16%', background: 'conic-gradient(from 210deg at 24% 38%, transparent 0deg, rgba(205,64,146,.22) 54deg, transparent 116deg, rgba(126,74,205,.18) 174deg, transparent 246deg, rgba(74,143,255,.12) 296deg, transparent 360deg), radial-gradient(circle at 68% 24%, rgba(205,64,146,.14), transparent 32%), radial-gradient(circle at 34% 78%, rgba(126,74,205,.12), transparent 36%)', opacity: .62, mixBlendMode: 'screen', pointerEvents: 'none' },
  bgGrid: { position: 'absolute', zIndex: 0, inset: 0, opacity: .12, pointerEvents: 'none', backgroundImage: 'linear-gradient(rgba(255,255,255,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.06) 1px, transparent 1px)', backgroundSize: '96px 96px', maskImage: 'radial-gradient(ellipse at 50% 36%, rgba(0,0,0,.82), transparent 70%)' },
  bgBeamA: { position: 'absolute', left: '-24%', top: '12%', width: '84%', height: 132, borderRadius: 999, background: 'linear-gradient(90deg, transparent, rgba(190,55,128,.15), rgba(255,255,255,.14), transparent)', filter: 'blur(34px)', pointerEvents: 'none' },
  bgBeamB: { position: 'absolute', right: '-28%', bottom: '10%', width: '88%', height: 148, borderRadius: 999, background: 'linear-gradient(90deg, transparent, rgba(155,48,255,.2), rgba(74,143,255,.08), transparent)', filter: 'blur(34px)', pointerEvents: 'none' },
  bgThreads: { position: 'absolute', zIndex: 1, inset: 0, width: '100%', height: '100%', pointerEvents: 'none', opacity: .62, filter: 'drop-shadow(0 0 14px rgba(255,255,255,.18))' },
  orb1: { position: 'absolute', top: -120, right: -180, width: 760, height: 760, background: 'radial-gradient(circle, rgba(205,64,146,.58) 0%, rgba(126,74,205,.38) 34%, transparent 58%)', filter: 'blur(70px)', opacity: .24, pointerEvents: 'none' },
  orb2: { position: 'absolute', bottom: -130, left: -120, width: 560, height: 560, background: 'radial-gradient(circle, rgba(74,143,255,.56) 0%, rgba(205,64,146,.22) 30%, rgba(126,74,205,.2) 48%, transparent 70%)', filter: 'blur(96px)', opacity: .22, pointerEvents: 'none' },
  inner: { position: 'relative', zIndex: 4, maxWidth: 1360, margin: '0 auto', padding: '78px 32px 88px' },
  pill: { display: 'inline-flex', alignItems: 'center', gap: 12, background: '#fff', color: '#000', borderRadius: 999, padding: '10px 22px', fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: 14, letterSpacing: '.06em' },
  h1: { fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(58px, 7.25vw, 106px)', lineHeight: .98, letterSpacing: 0, textTransform: 'uppercase', margin: '28px 0 0', color: '#fff', textShadow: '0 18px 70px rgba(255,20,147,.16)' },
  h1accent: { background: 'linear-gradient(90deg, #FF1493 0%, #FF38A8 44%, #9B30FF 78%, #4A8FFF 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent' },
  h1outline: { color: 'transparent', WebkitTextStroke: '2px #fff' },
  h1solid: { color: '#fff', WebkitTextStroke: '0 transparent', textShadow: '0 14px 50px rgba(255,20,147,.18)' },
  sub: { fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 21, lineHeight: 1.38, color: 'rgba(255,255,255,.85)', maxWidth: 700, marginTop: 22 },
  ctas: { display: 'flex', gap: 14, marginTop: 32 },
  ghost: { background: 'transparent', border: '1.5px solid rgba(255,255,255,.4)', color: '#fff', padding: '16px 30px', borderRadius: 999, fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 16, letterSpacing: '.04em', textTransform: 'uppercase', cursor: 'pointer' },
  threeLayer: { position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none', overflow: 'hidden' },
  threeVignette: { position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 67% 42%, transparent 0%, rgba(0,0,0,.04) 34%, rgba(0,0,0,.68) 88%), linear-gradient(90deg, rgba(0,0,0,.82) 0%, rgba(0,0,0,.18) 48%, rgba(0,0,0,.18) 100%)' },
  domConstellation: { position: 'absolute', zIndex: 3, left: '48%', top: '46%', width: 560, height: 480, transform: 'translate(0, -48%)', transformStyle: 'preserve-3d', perspective: 900, pointerEvents: 'none', filter: 'drop-shadow(0 32px 80px rgba(0,0,0,.48))' },
  domCore: { position: 'absolute', left: '50%', top: '50%', width: 168, height: 168, marginLeft: -84, marginTop: -84, borderRadius: 999, display: 'grid', placeItems: 'center', transformStyle: 'preserve-3d', background: 'radial-gradient(circle at 34% 28%, rgba(255,255,255,.98), rgba(255,20,147,.74) 22%, rgba(155,48,255,.22) 48%, rgba(255,255,255,.16) 66%, transparent 100%)', boxShadow: '0 0 80px rgba(255,20,147,.46), 0 0 112px rgba(155,48,255,.2), 0 0 130px rgba(255,255,255,.16)', border: '1px solid rgba(255,255,255,.35)' },
  domCoreGlow: { position: 'absolute', inset: -38, borderRadius: 999, background: 'radial-gradient(circle, rgba(255,20,147,.4), rgba(155,48,255,.18) 38%, rgba(74,143,255,.08) 56%, transparent 72%)', filter: 'blur(12px)' },
  domRingA: { position: 'absolute', width: 420, height: 168, border: '1px solid rgba(255,255,255,.48)', borderRadius: '50%', transform: 'rotateX(62deg) rotateZ(-14deg)', animation: 'wemDomCoreSpin 16s linear infinite' },
  domRingB: { position: 'absolute', width: 500, height: 202, border: '1px solid rgba(155,48,255,.38)', borderRadius: '50%', transform: 'rotateX(62deg) rotateZ(34deg)', animation: 'wemDomCoreSpin 21s linear infinite reverse' },
  domRingC: { position: 'absolute', width: 330, height: 132, border: '1px dashed rgba(255,255,255,.28)', borderRadius: '50%', transform: 'rotateX(62deg) rotateZ(72deg)', animation: 'wemDomCoreSpin 13s linear infinite' },
  domCoreText: { position: 'relative', zIndex: 2, fontFamily: 'var(--font-display)', fontSize: 48, lineHeight: 1, color: '#fff', letterSpacing: 0, textShadow: '0 0 26px rgba(0,0,0,.6)' },
  domNode: { position: 'absolute', left: '50%', top: '50%', minWidth: 154, minHeight: 82, marginLeft: -77, marginTop: -41, borderRadius: 16, border: '1px solid rgba(255,255,255,.16)', background: 'linear-gradient(145deg, rgba(0,0,0,.64), rgba(255,255,255,.08))', color: '#fff', display: 'grid', gridTemplateColumns: '24px 1fr', gridTemplateRows: 'auto auto', columnGap: 10, alignItems: 'center', padding: '13px 14px', pointerEvents: 'auto', cursor: 'pointer', backdropFilter: 'blur(10px)', transformStyle: 'preserve-3d' },
  domNodeOrb: { gridRow: '1 / span 2', width: 18, height: 18, borderRadius: 999, boxShadow: '0 0 26px currentColor' },
  domNodeMetric: { fontFamily: 'var(--font-display)', fontSize: 27, lineHeight: .9, color: '#fff', fontWeight: 900 },
  domNodeName: { fontFamily: 'var(--font-sans)', fontSize: 10, lineHeight: 1.1, color: 'rgba(255,255,255,.82)', fontWeight: 900, letterSpacing: '.08em', textTransform: 'uppercase' },
  serviceHud: { position: 'relative', zIndex: 3, justifySelf: 'end', width: 'min(520px, 100%)', minHeight: 520, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: 18, padding: 24, borderRadius: 28, background: 'linear-gradient(145deg, rgba(0,0,0,.26), rgba(255,255,255,.035))', border: '1px solid rgba(255,255,255,.12)', boxShadow: '0 32px 110px rgba(0,0,0,.32), inset 0 0 80px rgba(255,20,147,.08)', backdropFilter: 'blur(9px)' },
  serviceHudHeader: { maxWidth: 460, display: 'grid', gap: 10 },
  serviceHudEyebrow: { fontFamily: 'var(--font-mono)', color: '#FFFFFF', fontSize: 11, letterSpacing: '.16em', textTransform: 'uppercase', fontWeight: 900 },
  serviceHudTitle: { fontFamily: 'var(--font-display)', color: '#fff', fontSize: 'clamp(38px, 3.7vw, 66px)', lineHeight: .9, letterSpacing: 0, textTransform: 'uppercase', textShadow: '0 12px 46px rgba(190,55,128,.18)' },
  serviceHudCopy: { fontFamily: 'var(--font-sans)', fontSize: 16, lineHeight: 1.45, fontWeight: 800, color: 'rgba(255,255,255,.78)', maxWidth: 410 },
  serviceHudGrid: { display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 10 },
  serviceHudCard: { minHeight: 82, borderRadius: 14, border: '1px solid rgba(255,255,255,.13)', color: '#fff', textAlign: 'left', padding: '14px 14px', cursor: 'pointer', display: 'grid', alignContent: 'center', gap: 5, boxShadow: '0 18px 45px rgba(0,0,0,.24)' },
  serviceMetric: { fontFamily: 'var(--font-display)', fontSize: 31, lineHeight: .9, fontWeight: 900 },
  serviceName: { fontFamily: 'var(--font-sans)', fontSize: 12, lineHeight: 1.15, letterSpacing: '.06em', textTransform: 'uppercase', fontWeight: 900 },
  visualWrap: { position: 'relative', borderRadius: 28, background: 'linear-gradient(135deg, rgba(255,255,255,.075), rgba(255,255,255,.018))', border: '1px solid rgba(255,255,255,.1)', overflow: 'hidden', boxShadow: '0 28px 90px rgba(0,0,0,.48), 0 0 0 1px rgba(255,255,255,.08)', padding: 28 },
  visualGrid: { position: 'absolute', inset: 0, opacity: .22, backgroundImage: 'linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)', backgroundSize: '54px 54px', maskImage: 'radial-gradient(circle at 52% 42%, #000 0%, transparent 72%)' },
  visualGlow: { position: 'absolute', inset: '-22% -18%', background: 'radial-gradient(circle at 50% 42%, rgba(255,255,255,.34), transparent 35%), radial-gradient(circle at 20% 68%, rgba(255,20,147,.26), transparent 32%), radial-gradient(circle at 78% 70%, rgba(155,48,255,.18), transparent 36%)', filter: 'blur(18px)' },
  videoDeck: { position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none' },
  videoCard: { position: 'absolute', width: 142, height: 214, borderRadius: 20, overflow: 'hidden', border: '1px solid rgba(255,255,255,.16)', background: 'rgba(255,255,255,.08)', boxShadow: '0 24px 70px rgba(0,0,0,.38)', opacity: .78 },
  videoCardPositions: [
    { left: 24, bottom: 66, transform: 'rotate(-9deg)' },
    { right: 180, bottom: 18, transform: 'rotate(7deg)' },
    { right: 28, top: 74, transform: 'rotate(9deg)' },
  ],
  videoCaption: { position: 'absolute', left: 12, right: 12, bottom: 12, zIndex: 2, color: '#fff', fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '.12em', textTransform: 'uppercase', fontWeight: 900, textShadow: '0 2px 14px rgba(0,0,0,.8)' },
  marqueeRail: { position: 'absolute', left: 22, right: 22, top: 24, display: 'flex', gap: 10, whiteSpace: 'nowrap', opacity: .92 },
  feedPill: { display: 'inline-flex', border: '1px solid rgba(255,255,255,.16)', borderRadius: 999, padding: '8px 12px', background: 'rgba(0,0,0,.42)', color: 'rgba(255,255,255,.82)', fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '.08em', textTransform: 'uppercase' },
  growthCopy: { position: 'absolute', zIndex: 8, left: 34, top: 78, width: 232, display: 'grid', gap: 9 },
  growthEyebrow: { fontFamily: 'var(--font-mono)', color: '#FFFFFF', fontSize: 10, letterSpacing: '.16em', textTransform: 'uppercase', fontWeight: 900 },
  growthHeadline: { fontFamily: 'var(--font-display)', color: '#fff', fontSize: 31, lineHeight: .95, letterSpacing: '-.01em', textTransform: 'uppercase' },
  growthSub: { fontFamily: 'var(--font-sans)', color: 'rgba(255,255,255,.68)', fontSize: 13, lineHeight: 1.35, fontWeight: 700 },
  phoneHalo: { position: 'absolute', zIndex: 1, width: 420, height: 420, left: 'calc(50% - 210px)', top: 110, borderRadius: 999, background: 'radial-gradient(circle, rgba(255,255,255,.24), rgba(255,20,147,.16) 34%, rgba(155,48,255,.12) 52%, transparent 70%)', filter: 'blur(18px)', opacity: .95 },
  heroPhone: { position: 'absolute', zIndex: 6, width: 246, height: 480, right: 46, top: 132, borderRadius: 38, padding: 10, background: 'linear-gradient(145deg, #08080d, #252632)', border: '1px solid rgba(255,255,255,.2)', boxShadow: '0 32px 90px rgba(0,0,0,.58), 0 0 0 8px rgba(255,255,255,.035)', transform: 'rotate(-4deg)' },
  phoneNotch: { position: 'absolute', zIndex: 8, top: 18, left: '50%', width: 82, height: 20, transform: 'translateX(-50%)', borderRadius: '0 0 16px 16px', background: '#050507' },
  phoneScreen: { position: 'relative', width: '100%', height: '100%', overflow: 'hidden', borderRadius: 32, background: 'linear-gradient(180deg, #101118, #050507)' },
  phoneTop: { height: 70, padding: '34px 18px 10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,.08)', background: 'linear-gradient(180deg, rgba(255,255,255,.08), rgba(255,255,255,.02))' },
  phoneBadge: { fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,.78)', fontSize: 9, letterSpacing: '.12em', fontWeight: 900 },
  phoneDot: { width: 9, height: 9, borderRadius: 999, background: '#4A8FFF', boxShadow: '0 0 18px rgba(74,143,255,.75)' },
  phoneHero: { margin: '14px 13px 0', borderRadius: 22, padding: '16px 15px', background: 'linear-gradient(135deg, rgba(255,255,255,.18), rgba(255,20,147,.14), rgba(155,48,255,.1))', border: '1px solid rgba(255,255,255,.12)', display: 'grid', gap: 4 },
  viewsViewport: { height: 204, margin: '13px 13px 0', overflow: 'hidden', borderRadius: 20 },
  viewsStream: { display: 'grid', gap: 10 },
  viewRow: { height: 64, display: 'grid', gridTemplateColumns: '46px 1fr', alignItems: 'center', gap: 11, padding: '9px 10px', borderRadius: 18, background: 'rgba(255,255,255,.075)', border: '1px solid rgba(255,255,255,.1)', boxShadow: '0 15px 35px rgba(0,0,0,.18)' },
  videoThumb: { height: 46, borderRadius: 14, display: 'grid', placeItems: 'center', boxShadow: 'inset 0 0 0 1px rgba(255,255,255,.18)' },
  playIcon: { color: '#fff', fontSize: 13, filter: 'drop-shadow(0 2px 8px rgba(0,0,0,.35))' },
  viewMeta: { minWidth: 0, display: 'grid', gap: 8 },
  viewTopLine: { display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 8, fontFamily: 'var(--font-sans)', color: '#fff' },
  viewTrack: { height: 7, borderRadius: 999, background: 'rgba(255,255,255,.1)', overflow: 'hidden' },
  viewBar: { display: 'block', height: '100%', borderRadius: 999, boxShadow: '0 0 18px currentColor' },
  phoneBottom: { position: 'absolute', left: 14, right: 14, bottom: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderRadius: 18, padding: '13px 14px', background: 'rgba(255,255,255,.14)', border: '1px solid rgba(255,255,255,.24)', color: '#fff', fontFamily: 'var(--font-sans)', fontWeight: 900 },
  streamViewport: { position: 'relative', height: 280, margin: '18px 14px 0', overflow: 'hidden', borderRadius: 20 },
  cardStream: { display: 'grid', gap: 12 },
  opsCard: { height: 74, display: 'grid', gridTemplateColumns: '34px 1fr', alignItems: 'center', gap: 12, padding: '12px 13px', borderRadius: 18, border: '1px solid', background: 'rgba(255,255,255,.08)', boxShadow: '0 16px 36px rgba(0,0,0,.24)' },
  opsIcon: { width: 30, height: 30, borderRadius: 10, boxShadow: '0 0 18px rgba(255,255,255,.18)' },
  opsTitle: { display: 'block', fontFamily: 'var(--font-sans)', fontWeight: 900, color: '#fff', fontSize: 14, lineHeight: 1.05 },
  opsCopy: { display: 'block', fontFamily: 'var(--font-sans)', color: 'rgba(255,255,255,.6)', fontSize: 11, lineHeight: 1.25, marginTop: 5 },
  reportPanel: { position: 'absolute', left: 14, right: 14, bottom: 18, borderRadius: 20, padding: 15, background: 'rgba(255,255,255,.08)', border: '1px solid rgba(255,255,255,.1)', backdropFilter: 'blur(12px)' },
  reportHeader: { fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,.66)', fontSize: 9, letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: 12, fontWeight: 900 },
  reportBars: { display: 'grid', gap: 8 },
  reportBar: { display: 'block', height: 8, borderRadius: 999, boxShadow: '0 0 18px rgba(255,255,255,.16)' },
  metricStack: { position: 'absolute', zIndex: 9, left: 34, top: 254, width: 166, display: 'grid', gap: 11 },
  growthMetric: { borderRadius: 18, padding: '15px 16px', background: 'rgba(0,0,0,.56)', border: '1px solid rgba(255,255,255,.14)', backdropFilter: 'blur(14px)', display: 'grid', gap: 4 },
  chartPanel: { position: 'absolute', zIndex: 5, left: 34, right: 202, bottom: 58, height: 158, borderRadius: 24, background: 'rgba(0,0,0,.5)', border: '1px solid rgba(255,255,255,.12)', backdropFilter: 'blur(14px)', overflow: 'hidden', boxShadow: '0 22px 70px rgba(0,0,0,.25)' },
  chartSvg: { position: 'absolute', inset: 0, width: '100%', height: '100%', filter: 'drop-shadow(0 0 12px rgba(255,255,255,.4))' },
  chartLabels: { position: 'absolute', left: 18, right: 18, bottom: 14, display: 'flex', justifyContent: 'space-between', color: 'rgba(255,255,255,.68)', fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase', fontWeight: 900 },
  growthNote: { position: 'absolute', zIndex: 8, left: 46, bottom: 30, maxWidth: 330, fontFamily: 'var(--font-sans)', color: 'rgba(255,255,255,.72)', fontSize: 12, lineHeight: 1.3, fontWeight: 800 },
  floatTags: { position: 'absolute', inset: 0, zIndex: 7, pointerEvents: 'none' },
  floatTag: { position: 'absolute', borderRadius: 999, padding: '10px 13px', background: 'rgba(0,0,0,.58)', border: '1px solid rgba(255,255,255,.14)', color: 'rgba(255,255,255,.86)', fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '.08em', textTransform: 'uppercase', backdropFilter: 'blur(12px)', boxShadow: '0 18px 45px rgba(0,0,0,.22)' },
  floatTagPositions: [
    { left: 42, top: 138 },
    { right: 30, top: 208 },
    { left: 50, bottom: 150 },
  ],
  heroKpis: { position: 'absolute', zIndex: 7, right: 30, bottom: 44, display: 'grid', gap: 8, width: 160 },
  heroKpi: { borderRadius: 14, padding: '12px 14px', background: 'rgba(255,255,255,.09)', border: '1px solid rgba(255,255,255,.12)', backdropFilter: 'blur(12px)' },
  phoneLines: { position: 'absolute', zIndex: 2, width: '92%', height: '92%', left: '4%', top: '5%', opacity: .82, pointerEvents: 'none' },
  orbitSvg: { position: 'absolute', zIndex: 2, width: '96%', height: '96%', left: '2%', top: '2%', opacity: .95 },
  centerCore: { position: 'absolute', zIndex: 5, left: '50%', top: '50%', width: 238, height: 238, transform: 'translate(-50%, -50%)', borderRadius: 999, display: 'grid', placeItems: 'center', background: 'radial-gradient(circle, rgba(255,255,255,.14), rgba(255,255,255,.025) 58%, rgba(0,0,0,.34))', border: '1px solid rgba(255,255,255,.18)', boxShadow: '0 28px 90px rgba(0,0,0,.5), 0 0 70px rgba(255,255,255,.18)' },
  coreRing: { position: 'absolute', inset: 16, borderRadius: 999, border: '1px solid rgba(255,255,255,.12)', boxShadow: 'inset 0 0 40px rgba(255,20,147,.13)' },
  coreInner: { position: 'relative', zIndex: 2, display: 'grid', justifyItems: 'center', gap: 8, padding: 28, textAlign: 'center' },
  coreOverline: { fontFamily: 'var(--font-mono)', color: '#FFFFFF', fontSize: 10, letterSpacing: '.16em', textTransform: 'uppercase', fontWeight: 900 },
  coreSub: { fontFamily: 'var(--font-sans)', color: 'rgba(255,255,255,.62)', fontSize: 12, lineHeight: 1.3 },
  nodePanel: { position: 'absolute', inset: 0, zIndex: 6 },
  nodePositions: [
    { left: 36, top: 150 },
    { right: 30, top: 172 },
    { left: 48, bottom: 138 },
    { right: 42, bottom: 154 },
  ],
  liveDot: { width: 8, height: 8, borderRadius: 999, background: '#4A8FFF', display: 'inline-block' },
  signalRow: { position: 'absolute', minWidth: 172, display: 'flex', alignItems: 'center', gap: 10, border: '1px solid', borderRadius: 12, padding: '11px 12px', background: 'rgba(0,0,0,.5)', backdropFilter: 'blur(12px)', color: '#fff', fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 800, boxShadow: '0 18px 48px rgba(0,0,0,.25)' },
  signalIndex: { fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '.1em' },
  pipeline: { position: 'absolute', zIndex: 5, left: 34, right: 34, bottom: 38, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8 },
  stage: { display: 'flex', alignItems: 'center', gap: 8, minHeight: 44, padding: '10px 11px', borderRadius: 12, background: 'rgba(255,255,255,.08)', border: '1px solid rgba(255,255,255,.1)', color: 'rgba(255,255,255,.78)', fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: 11, lineHeight: 1.2 },
  stageDot: { width: 7, height: 7, borderRadius: 999, flex: '0 0 auto' },
  kpiStack: { position: 'absolute', zIndex: 5, right: 30, top: 72, width: 166, display: 'grid', gap: 9 },
  kpiCard: { display: 'grid', gap: 2, borderRadius: 14, padding: '14px 15px', background: 'rgba(255,255,255,.09)', border: '1px solid rgba(255,255,255,.13)', backdropFilter: 'blur(14px)', color: '#fff' },
  statsBand: { position: 'relative', background: 'radial-gradient(circle at 30% 0%, rgba(255,20,147,.14), transparent 34%), radial-gradient(circle at 76% 18%, rgba(155,48,255,.12), transparent 30%), #000', padding: '60px 32px', borderTop: '1px solid rgba(255,255,255,.08)', borderBottom: '1px solid rgba(255,255,255,.08)' },
  statsInner: { maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 28 },
  stat: { background: 'linear-gradient(180deg, rgba(255,255,255,.08), rgba(255,255,255,.025))', border: '1px solid rgba(255,255,255,.13)', borderRadius: 16, padding: 32, textAlign: 'center', boxShadow: '0 0 0 1px rgba(255,20,147,.12), 0 0 40px rgba(155,48,255,.08)', backdropFilter: 'blur(14px)' },
  statNum: { fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 64, lineHeight: 1, color: '#fff' },
  statLbl: { fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 12, letterSpacing: '.08em', textTransform: 'uppercase', color: '#fff', marginTop: 12 },
};
// StatCard, counts up when scrolled into view
const StatCard = ({ target, suffix, label, delay }) => {
  const ref = React.useRef(null);
  const [value, setValue] = React.useState(0);
  const [started, setStarted] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting && !started) setStarted(true); });
    }, { threshold: 0.4 });
    io.observe(el); return () => io.disconnect();
  }, [started]);
  React.useEffect(() => {
    if (!started) return;
    const duration = 1800; const startT = performance.now() + delay;
    let raf;
    const tick = (now) => {
      const t = Math.max(0, Math.min(1, (now - startT) / duration));
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(target * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, target, delay]);
  const format = (n) => {
    if (suffix === 'M+') return n.toString();
    if (n >= 1000) return (n / 1000).toFixed(n % 1000 === 0 ? 0 : 1).replace(/\.0$/, '') + 'K';
    return n.toString();
  };
  return (
    <div ref={ref} style={heroStyles.stat} className="wem-hero-stat">
      <div style={heroStyles.statNum}>
        {format(value)}<span style={{ color: '#FF1493' }}>{suffix}</span>
      </div>
      <div style={heroStyles.statLbl}>{label}</div>
    </div>
  );
};

window.Hero = Hero;
