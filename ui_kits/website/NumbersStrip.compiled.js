const NumbersStrip=({lang})=>{const t={en:{eye:"// BY THE NUMBERS",tiles:[["160+","SHOP PARTNERS\nSERVED"],["$15M+","ANNUAL SALES\nMANAGED"],["200K+","U.S. CREATORS\nCOLLABORATED"],["badge","TikTok Shop Certified Agency Since 2025"]]},zh:{eye:"// \u7F8E\u56FD\u5E02\u573A\u6267\u884C\u6570\u636E",tiles:[["160+","\u670D\u52A1\u54C1\u724C\u4E0E\u5E97\u94FA"],["$15M+","\u5E74\u7BA1\u7406\u9500\u552E\u989D"],["200K+","\u7F8E\u56FD\u8FBE\u4EBA\u5408\u4F5C\u8D44\u6E90"],["badge","TikTok Shop Certified Agency Since 2025"]]}}[lang];return React.createElement("section",{style:nsStyles.wrap,className:"numbers-strip"},React.createElement("style",null,`
        @media (max-width: 760px) {
          .numbers-strip {
            padding: 56px 20px !important;
            max-width: 100vw !important;
            overflow: hidden !important;
          }
          .numbers-strip-inner {
            max-width: 100% !important;
          }
          .numbers-strip-eye {
            font-size: 11px !important;
            margin-bottom: 22px !important;
          }
          .numbers-strip-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            gap: 12px !important;
          }
          .numbers-strip-tile {
            min-width: 0 !important;
            min-height: 132px !important;
            padding: 22px 16px !important;
            border-radius: 14px !important;
          }
          .numbers-strip-num {
            font-size: clamp(34px, 10vw, 44px) !important;
            white-space: nowrap !important;
          }
          .numbers-strip-label {
            font-size: 10px !important;
            line-height: 1.35 !important;
            letter-spacing: .06em !important;
            overflow-wrap: anywhere !important;
          }
          .numbers-strip-badge {
            max-width: 118px !important;
          }
        }
      `),React.createElement("div",{style:nsStyles.inner,className:"numbers-strip-inner"},React.createElement("div",{style:nsStyles.eye,className:"numbers-strip-eye"},t.eye),React.createElement("div",{style:nsStyles.grid,className:"numbers-strip-grid"},t.tiles.map(([num,lbl],i)=>React.createElement("div",{key:i,style:nsStyles.tile,className:"numbers-strip-tile"},num==="badge"?React.createElement("img",{src:"assets/tiktok-shop-certified-agency-2025.png",alt:lbl,style:nsStyles.badge,className:"numbers-strip-badge"}):React.createElement(React.Fragment,null,React.createElement("div",{style:nsStyles.num,className:"numbers-strip-num"},num),React.createElement("div",{style:nsStyles.lbl,className:"numbers-strip-label"},lbl.split("\n").map((l,j)=>React.createElement("span",{key:j},l,React.createElement("br",null))))))))))};const nsStyles={wrap:{background:"#000",borderTop:"1px solid rgba(255,255,255,.08)",borderBottom:"1px solid rgba(255,255,255,.08)",padding:"70px 32px"},inner:{maxWidth:1280,margin:"0 auto"},eye:{fontFamily:"var(--font-mono)",fontSize:12,letterSpacing:".18em",fontWeight:700,color:"#FF1493",marginBottom:28},grid:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:20},tile:{background:"#0A0A0A",border:"1px solid rgba(255,255,255,.1)",borderRadius:16,padding:"32px 24px",boxShadow:"0 0 0 1px rgba(255,20,147,.12), 0 0 40px rgba(155,48,255,.12)",minHeight:164,display:"flex",flexDirection:"column",justifyContent:"center"},num:{fontFamily:"var(--font-display)",fontWeight:900,fontSize:"clamp(36px, 4vw, 56px)",lineHeight:1,color:"#fff",letterSpacing:"-.005em"},lbl:{fontFamily:"var(--font-sans)",fontWeight:700,fontSize:12,letterSpacing:".08em",textTransform:"uppercase",color:"rgba(255,255,255,.7)",marginTop:16,lineHeight:1.4},badge:{width:"100%",maxWidth:170,height:"auto",objectFit:"contain",alignSelf:"center",filter:"drop-shadow(0 0 22px rgba(74,143,255,.18)) drop-shadow(0 0 20px rgba(255,20,147,.16))"}};window.NumbersStrip=NumbersStrip;
