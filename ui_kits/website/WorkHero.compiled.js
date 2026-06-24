const WorkHero=({lang})=>{const t={en:{pill:"OUR WORK",h1a:"Real work.",h1accent:"Real numbers.",sub:"TikTok Shop case studies across beauty, wellness, tech, and fashion. Cold starts, creator wins, live programs, and real sales metrics."},zh:{pill:"\u6848\u4F8B",h1a:"\u7F8E\u56FD TikTok Shop",h1accent:"\u771F\u5B9E\u589E\u957F\u6848\u4F8B\u3002",sub:"\u8986\u76D6\u7F8E\u5986\u3001\u5065\u5EB7\u3001\u79D1\u6280\u3001\u670D\u9970\u548C\u8DE8\u5883\u6D88\u8D39\u54C1\u3002\u770B\u51B7\u542F\u52A8\u3001\u8FBE\u4EBA\u53D1\u5E03\u3001\u76F4\u64AD\u6210\u4EA4\u548C\u771F\u5B9E\u9500\u552E\u589E\u957F\u3002"}}[lang];return React.createElement("section",{style:whStyles.wrap,className:"work-hero"},React.createElement("style",null,`
        @media (max-width: 760px) {
          .work-hero {
            max-width: 100vw !important;
            overflow: hidden !important;
          }
          .work-hero-inner {
            padding: 92px 22px 58px !important;
            max-width: 100% !important;
          }
          .work-hero-pill {
            font-size: 12px !important;
            padding: 9px 18px !important;
          }
          .work-hero-title {
            font-size: clamp(50px, 15vw, 70px) !important;
            line-height: .96 !important;
            letter-spacing: 0 !important;
          }
          .work-hero-sub {
            font-size: 18px !important;
            line-height: 1.46 !important;
            max-width: 100% !important;
            margin-top: 26px !important;
          }
        }
      `),React.createElement("div",{style:whStyles.orb1}),React.createElement("div",{style:whStyles.orb2}),React.createElement("div",{style:whStyles.inner,className:"work-hero-inner"},React.createElement("div",{style:whStyles.pill,className:"work-hero-pill"},t.pill),React.createElement("h1",{style:whStyles.h1,className:"work-hero-title"},t.h1a,React.createElement("br",null),React.createElement("span",{style:whStyles.h1accent},t.h1accent)),React.createElement("p",{style:whStyles.sub,className:"work-hero-sub"},t.sub)))};const whStyles={wrap:{position:"relative",background:"#000",color:"#fff",overflow:"hidden"},orb1:{position:"absolute",top:-100,right:-150,width:700,height:700,background:"radial-gradient(circle, #FF1493 0%, transparent 50%)",filter:"blur(60px)",opacity:.3,pointerEvents:"none"},orb2:{position:"absolute",bottom:-200,left:-100,width:500,height:500,background:"radial-gradient(circle, #4A8FFF 0%, transparent 60%)",filter:"blur(80px)",opacity:.2,pointerEvents:"none"},inner:{position:"relative",maxWidth:1280,margin:"0 auto",padding:"120px 32px 80px"},pill:{display:"inline-flex",alignItems:"center",background:"#fff",color:"#000",borderRadius:999,padding:"10px 22px",fontFamily:"var(--font-sans)",fontWeight:800,fontSize:14,letterSpacing:".06em"},h1:{fontFamily:"var(--font-display)",fontWeight:900,fontSize:"clamp(64px, 8vw, 128px)",lineHeight:1,letterSpacing:"-.01em",textTransform:"uppercase",margin:"32px 0 0",color:"#fff"},h1accent:{background:"linear-gradient(90deg, #FF1493 0%, #9B30FF 50%, #4A8FFF 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",color:"transparent"},sub:{fontFamily:"var(--font-sans)",fontWeight:600,fontSize:22,lineHeight:1.4,color:"rgba(255,255,255,.85)",maxWidth:760,marginTop:32}};window.WorkHero=WorkHero;
