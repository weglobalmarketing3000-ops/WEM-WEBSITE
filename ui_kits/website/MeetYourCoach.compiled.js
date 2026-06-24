const MeetYourCoach=({lang})=>{const t={en:{eyebrow:"// MEET YOUR COACH",h:"Coached by someone\nwho actually sells.",sub:"Every creator in WEM gets access to weekly coaching from a Top 1% TikTok Shop affiliate.",body:"April Aldana has generated $1M+ GMV in the past year and $30K+ in a single livestream. She coaches our creators weekly on short video strategy, live selling, and content that actually converts. For brands, that means the creators promoting your products aren\u2019t guessing.",pills:["TOP 1% TIKTOK SHOP AFFILIATE","$1M+ GMV \xB7 PAST 12 MONTHS","$30K+ IN A SINGLE LIVESTREAM"],bullets:[{icon:"video",text:"Weekly short video strategy"},{icon:"radio",text:"Live selling coaching"},{icon:"message-square-text",text:"Content review & feedback"}],name:"APRIL ALDANA \xB7 LEAD CONTENT COACH"},zh:{eyebrow:"// \u5185\u5BB9\u5EFA\u8BAE",h:"\u8BA9\u771F\u6B63\u5356\u8FC7\u8D27\u7684\u4EBA\n\u5E2E\u4F60\u770B\u5185\u5BB9\u3002",sub:"WE \u8FBE\u4EBA\u8054\u76DF\u6210\u5458\u53EF\u4EE5\u83B7\u5F97 TikTok Shop \u5934\u90E8\u8FBE\u4EBA\u7684\u77ED\u89C6\u9891\u548C\u76F4\u64AD\u5EFA\u8BAE\u3002",body:"April Aldana \u8FC7\u53BB\u4E00\u5E74\u5E26\u6765 $1M+ \u9500\u552E\u989D\uFF0C\u5355\u573A\u76F4\u64AD\u7A81\u7834 $30K+\u3002\u5979\u4F1A\u5E2E\u8FBE\u4EBA\u770B\u9009\u9898\u3001hook\u3001\u8282\u594F\u3001\u4EA7\u54C1\u690D\u5165\u3001\u4EF7\u683C\u8868\u8FBE\u548C\u76F4\u64AD\u8BDD\u672F\uFF0C\u91CD\u70B9\u662F\u600E\u4E48\u8BB2\uFF0C\u624D\u80FD\u8BA9\u5185\u5BB9\u66F4\u6709\u8F6C\u5316\u529B\u3002",pills:["TIKTOK SHOP \u5934\u90E8\u8FBE\u4EBA","\u8FC7\u53BB 12 \u4E2A\u6708 $1M+ \u9500\u552E\u989D","\u5355\u573A\u76F4\u64AD $30K+ \u9500\u552E\u989D"],bullets:[{icon:"video",text:"\u77ED\u89C6\u9891\u9009\u9898\u548C hook \u5EFA\u8BAE"},{icon:"radio",text:"\u76F4\u64AD\u8BDD\u672F\u548C\u8282\u594F\u6307\u5BFC"},{icon:"message-square-text",text:"\u5185\u5BB9\u4FEE\u6539\u5EFA\u8BAE"}],name:"APRIL ALDANA \xB7 \u5185\u5BB9\u6559\u7EC3"}}[lang];return React.createElement("section",{style:mcStyles.wrap,className:"meet-coach"},React.createElement("style",null,`
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
      `),React.createElement("div",{style:mcStyles.orb1}),React.createElement("div",{style:mcStyles.orb2}),React.createElement("div",{style:mcStyles.inner,className:"meet-coach-inner"},React.createElement("div",{style:mcStyles.eyebrow,className:"meet-coach-eyebrow"},t.eyebrow),React.createElement("div",{style:mcStyles.grid,className:"meet-coach-grid"},React.createElement("div",{style:mcStyles.left},React.createElement("h2",{style:mcStyles.h,className:"meet-coach-title"},t.h.split("\n").map((l,i)=>React.createElement("span",{key:i},l,React.createElement("br",null)))),React.createElement("p",{style:mcStyles.sub,className:"meet-coach-sub"},t.sub),React.createElement("div",{style:mcStyles.pills,className:"meet-coach-pills"},t.pills.map((p,i)=>React.createElement("span",{key:i,style:mcStyles.pill,className:"meet-coach-pill"},p))),React.createElement("p",{style:mcStyles.body,className:"meet-coach-body"},t.body),React.createElement("div",{style:mcStyles.bullets},t.bullets.map((b,i)=>React.createElement("div",{key:i,style:mcStyles.bullet},React.createElement("div",{style:mcStyles.bulletIcon},React.createElement("i",{"data-lucide":b.icon,style:{width:18,height:18,color:"#FF1493"}})),React.createElement("div",{style:mcStyles.bulletText},b.text)))),React.createElement("div",{style:mcStyles.nameBadge,className:"meet-coach-name"},t.name)),React.createElement("div",{style:mcStyles.right,className:"meet-coach-right"},React.createElement("div",{style:{...mcStyles.frame,...mcStyles.frameTop},className:"meet-coach-frame"},React.createElement("img",{src:"../../assets/coach-april-2.png",alt:"April Aldana - Livestream 101",style:mcStyles.img})),React.createElement("div",{style:{...mcStyles.frame,...mcStyles.frameMid},className:"meet-coach-frame"},React.createElement("img",{src:"../../assets/coach-april-3.png",alt:"April Aldana - Weekly tip",style:mcStyles.img})),React.createElement("div",{style:{...mcStyles.frame,...mcStyles.frameBot},className:"meet-coach-frame"},React.createElement("img",{src:"../../assets/coach-april-1.png",alt:"April Aldana - Live selling",style:mcStyles.img}))))))};const mcStyles={wrap:{position:"relative",background:"#000",padding:"120px 0",borderTop:"1px solid rgba(255,255,255,.08)",overflow:"hidden"},orb1:{position:"absolute",top:"20%",left:-200,width:500,height:500,background:"radial-gradient(circle, #FF1493 0%, transparent 60%)",filter:"blur(80px)",opacity:.25,pointerEvents:"none"},orb2:{position:"absolute",bottom:"10%",right:-200,width:500,height:500,background:"radial-gradient(circle, #4A8FFF 0%, transparent 60%)",filter:"blur(80px)",opacity:.18,pointerEvents:"none"},inner:{position:"relative",maxWidth:1280,margin:"0 auto",padding:"0 32px"},eyebrow:{fontFamily:"var(--font-mono)",fontSize:12,letterSpacing:".18em",color:"#FF1493",marginBottom:32},grid:{display:"grid",gridTemplateColumns:"1.1fr 1fr",gap:64,alignItems:"start"},left:{},h:{fontFamily:"var(--font-display)",fontWeight:900,fontSize:"clamp(44px, 5.4vw, 76px)",lineHeight:.95,letterSpacing:"-.005em",textTransform:"uppercase",color:"#fff",margin:0},sub:{fontFamily:"var(--font-sans)",fontSize:18,lineHeight:1.5,color:"rgba(255,255,255,.6)",marginTop:20,maxWidth:540},pills:{display:"flex",flexWrap:"wrap",gap:10,marginTop:32},pill:{display:"inline-flex",alignItems:"center",background:"rgba(255,20,147,.12)",border:"1px solid rgba(255,20,147,.4)",color:"#FF1493",fontFamily:"var(--font-sans)",fontWeight:800,fontSize:12,letterSpacing:".08em",padding:"8px 14px",borderRadius:999,boxShadow:"0 0 20px rgba(255,20,147,.15)"},body:{fontFamily:"var(--font-sans)",fontSize:16,lineHeight:1.6,color:"rgba(255,255,255,.85)",marginTop:28,maxWidth:540},bullets:{display:"flex",flexDirection:"column",gap:14,marginTop:28},bullet:{display:"flex",alignItems:"center",gap:14},bulletIcon:{width:36,height:36,borderRadius:10,background:"rgba(255,20,147,.1)",border:"1px solid rgba(255,20,147,.3)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},bulletText:{fontFamily:"var(--font-sans)",fontWeight:600,fontSize:16,color:"#fff"},nameBadge:{display:"inline-flex",marginTop:36,background:"#FF1493",color:"#000",fontFamily:"var(--font-sans)",fontWeight:800,fontSize:13,letterSpacing:".1em",padding:"12px 20px",borderRadius:999},right:{position:"relative",minHeight:620},frame:{position:"absolute",borderRadius:18,overflow:"hidden",background:"#0A0A0A",border:"2px solid",transition:"transform .3s"},frameTop:{top:0,right:0,width:"78%",aspectRatio:"4 / 3",borderColor:"#FF1493",boxShadow:"0 0 0 1px rgba(255,20,147,.5), 0 0 40px rgba(255,20,147,.4), 0 20px 50px rgba(0,0,0,.6)",transform:"rotate(2deg)",zIndex:3},frameMid:{top:"32%",left:0,width:"70%",aspectRatio:"4 / 3",borderColor:"#4A8FFF",boxShadow:"0 0 0 1px rgba(74,143,255,.5), 0 0 40px rgba(74,143,255,.35), 0 20px 50px rgba(0,0,0,.6)",transform:"rotate(-3deg)",zIndex:2},frameBot:{bottom:0,right:"8%",width:"72%",aspectRatio:"1 / 1",borderColor:"#9B30FF",boxShadow:"0 0 0 1px rgba(155,48,255,.5), 0 0 40px rgba(155,48,255,.35), 0 20px 50px rgba(0,0,0,.6)",transform:"rotate(4deg)",zIndex:1},img:{width:"100%",height:"100%",objectFit:"cover",display:"block"}};window.MeetYourCoach=MeetYourCoach;
