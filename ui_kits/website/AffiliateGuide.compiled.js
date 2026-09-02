const AffiliateGuide=({lang})=>{const t={en:{eyebrow:"// GETTING STARTED",h:"TikTok Shop success\nguide. Included.",sub:"Every new member gets the WEM creator playbook, updated with our ops team and top creator coaches.",steps:[{n:"01",title:"Creating High-Quality Content",body:"Lighting, sound, framing, hooks, captions, and product placement that feels natural."},{n:"02",title:"Affiliate Monetization",body:"How commissions, product selection, sample access, and campaign metrics actually work."},{n:"03",title:"Scaling + Optimization",body:"Posting cadence, testing frameworks, data review, and reuse across short video and live."},{n:"04",title:"Support Materials",body:"Scripts, checklists, short tutorials, office hours, and Discord support for account issues."}]},zh:{eyebrow:"// \u65B0\u624B\u6307\u5357",h:"TikTok Shop\n\u521B\u4F5C\u8005\u4E0A\u624B\u6307\u5357",sub:"\u65B0\u6210\u5458\u53EF\u4EE5\u9886\u53D6\u64CD\u4F5C\u624B\u518C\u3002\u5185\u5BB9\u7531\u5934\u90E8\u8FBE\u4EBA\u548C WE \u56E2\u961F\u6301\u7EED\u66F4\u65B0\u3002",steps:[{n:"01",title:"\u5148\u628A\u89C6\u9891\u62CD\u6E05\u695A",body:"\u706F\u5149\u3001\u6536\u97F3\u3001\u6784\u56FE\u3001\u5B57\u5E55\u548C\u526A\u8F91\u5148\u8FC7\u5173\u3002\u5185\u5BB9\u8981\u771F\u5B9E\uFF0C\u4E5F\u8981\u8BA9\u7F8E\u56FD\u7528\u6237\u4E00\u773C\u770B\u61C2\u3002"},{n:"02",title:"\u77E5\u9053\u600E\u4E48\u8D5A\u94B1",body:"\u600E\u4E48\u770B\u4F63\u91D1\uFF0C\u600E\u4E48\u9009\u54C1\uFF0C\u600E\u4E48\u7533\u8BF7\u6837\u54C1\uFF0C\u53D1\u5E03\u540E\u770B\u54EA\u4E9B\u6570\u636E\uFF0C\u624B\u518C\u91CC\u90FD\u4F1A\u8BB2\u6E05\u695A\u3002"},{n:"03",title:"\u6301\u7EED\u6D4B\u8BD5\u5185\u5BB9",body:"\u56FA\u5B9A\u66F4\u65B0\uFF0C\u6D4B\u8BD5\u4E0D\u540C hook\u3001\u5356\u70B9\u548C\u4E0B\u5355\u5F15\u5BFC\u3002\u8868\u73B0\u597D\u7684\u5185\u5BB9\u53EF\u4EE5\u7EE7\u7EED\u590D\u7528\u5230\u76F4\u64AD\u548C\u5E7F\u544A\u7D20\u6750\u3002"},{n:"04",title:"\u9047\u5230\u95EE\u9898\u6709\u4EBA\u5BF9\u63A5",body:"\u811A\u672C\u6A21\u677F\u3001\u62CD\u6444\u6E05\u5355\u3001\u77ED\u6559\u5B66\u89C6\u9891\u548C Discord \u7B54\u7591\u90FD\u4F1A\u5F00\u653E\u3002\u9047\u5230\u8FDD\u89C4\u6216\u7533\u8BC9\uFF0C\u4E5F\u53EF\u4EE5\u76F4\u63A5\u548C WE \u56E2\u961F\u6C9F\u901A\u3002"}]}}[lang];return React.createElement("section",{style:agStyles.wrap,className:"affiliate-guide"},React.createElement("style",null,`
        @media (max-width: 760px) {
          .affiliate-guide {
            padding: 76px 22px !important;
            max-width: 100vw !important;
            overflow: hidden !important;
          }
          .affiliate-guide-header {
            max-width: 100% !important;
            margin-bottom: 34px !important;
          }
          .affiliate-guide-title {
            font-size: clamp(42px, 13vw, 58px) !important;
            line-height: .96 !important;
            letter-spacing: 0 !important;
          }
          .affiliate-guide-sub {
            font-size: 16px !important;
            line-height: 1.5 !important;
            max-width: 100% !important;
            margin-top: 20px !important;
          }
          .affiliate-guide-grid {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }
          .affiliate-guide-card {
            padding: 22px 18px !important;
            gap: 16px !important;
            border-radius: 16px !important;
          }
          .affiliate-guide-num {
            width: 56px !important;
            font-size: 42px !important;
            -webkit-text-stroke-width: 1.5px !important;
          }
          .affiliate-guide-card-title {
            font-size: 22px !important;
            line-height: 1.05 !important;
          }
          .affiliate-guide-body {
            font-size: 15px !important;
            line-height: 1.45 !important;
          }
        }
      `),React.createElement("div",{style:agStyles.header,className:"affiliate-guide-header"},React.createElement("div",{style:agStyles.eyebrow},t.eyebrow),React.createElement("h2",{style:agStyles.h,className:"affiliate-guide-title"},t.h.split("\n").map((l,i)=>React.createElement("span",{key:i},l,React.createElement("br",null)))),React.createElement("p",{style:agStyles.sub,className:"affiliate-guide-sub"},t.sub)),React.createElement("div",{style:agStyles.grid,className:"affiliate-guide-grid"},t.steps.map((s,i)=>React.createElement("div",{key:i,style:agStyles.card,className:"affiliate-guide-card"},React.createElement("div",{style:agStyles.num,className:"affiliate-guide-num"},s.n),React.createElement("div",{style:agStyles.cardBody},React.createElement("div",{style:agStyles.title,className:"affiliate-guide-card-title"},s.title),React.createElement("div",{style:agStyles.body,className:"affiliate-guide-body"},s.body))))))};const agStyles={wrap:{background:"#000",color:"#fff",padding:"120px 32px",maxWidth:1280,margin:"0 auto"},header:{maxWidth:860,marginBottom:72},eyebrow:{fontFamily:"var(--font-mono)",fontSize:12,letterSpacing:".12em",color:"#4A8FFF",fontWeight:700,marginBottom:20},h:{fontFamily:"var(--font-display)",fontWeight:900,fontSize:"clamp(52px, 6.5vw, 96px)",lineHeight:.98,letterSpacing:"-.01em",textTransform:"uppercase",margin:0},sub:{fontFamily:"var(--font-sans)",fontSize:20,lineHeight:1.5,color:"rgba(255,255,255,.7)",marginTop:28,maxWidth:720},grid:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:20},card:{background:"#0A0A0A",border:"1px solid rgba(255,255,255,.1)",borderRadius:20,padding:32,display:"flex",gap:24,alignItems:"flex-start"},num:{fontFamily:"var(--font-display)",fontWeight:900,fontSize:72,lineHeight:.9,color:"transparent",WebkitTextStroke:"2px #FF1493",flexShrink:0,width:110},cardBody:{flex:1},title:{fontFamily:"var(--font-display)",fontWeight:900,fontSize:26,lineHeight:1.05,letterSpacing:"-.005em",textTransform:"uppercase",marginBottom:12},body:{fontFamily:"var(--font-sans)",fontSize:15,lineHeight:1.55,color:"rgba(255,255,255,.7)",textWrap:"pretty"}};window.AffiliateGuide=AffiliateGuide;
