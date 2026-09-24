const fs=require('node:fs/promises');
const os=require('node:os');
const path=require('node:path');
const {spawn}=require('node:child_process');
const {chromium}=require('/Users/wendylin/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');

const repo=path.resolve(__dirname,'..');
const current='tiktok-shop-jewelry-category-operating-system';
const previous='tiktok-shop-growth-autopilot-vs-gmv-max-pro';
const third='tiktok-shop-growth-autopilot-roi-protection';
const out=path.join(repo,'outputs/2026-09-21-training45-local-qa');
const temp=awaitableTemp();
function awaitableTemp(){return fs.mkdtemp(path.join(os.tmpdir(),'wem-training45-'));}
const sleep=ms=>new Promise(r=>setTimeout(r,ms));

(async()=>{
  const root=await temp;
  let server,browser;
  try{
    await fs.mkdir(out,{recursive:true});
    await fs.cp(path.join(repo,'ui_kits/website'),root,{recursive:true});
    await fs.cp(path.join(repo,'outputs/patches/2026-09-20-training44-account-health-system'),root,{recursive:true});
    await fs.cp(path.join(repo,'outputs/patches/2026-09-22-growth-autopilot-roi-protection'),root,{recursive:true});
    await fs.cp(path.join(repo,'outputs/patches/2026-09-22-growth-autopilot-roi-logo-fix'),root,{recursive:true});
    await fs.cp(path.join(repo,'outputs/patches/2026-09-23-growth-autopilot-comparison'),root,{recursive:true});
    await fs.cp(path.join(repo,'outputs/patches/2026-09-21-training45-scoped-local'),root,{recursive:true});
    const port=18745;
    server=spawn('python3',['-m','http.server',String(port),'--bind','127.0.0.1'],{cwd:root,stdio:'ignore'});
    await sleep(900);
    browser=await chromium.launch({headless:true,executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});
    const base='http://127.0.0.1:'+port;
    const report={status:'local_only_not_published',assembly:['ui_kits/website','training44 full accepted local build','Growth Autopilot production patches','training45 target-only overlay'],index:[],articles:[],checks:{}};
    for(const viewport of [{name:'desktop',width:1280,height:720},{name:'mobile',width:390,height:844}]){
      const context=await browser.newContext({viewport:{width:viewport.width,height:viewport.height}});
      const page=await context.newPage();
      for(const cache of ['fresh','warm']){
        await page.goto(base+'/blog.html',{waitUntil:'networkidle'});
        await page.locator('a[href*="/blog/tiktok-shop-"]').first().scrollIntoViewIfNeeded();
        await page.waitForTimeout(300);
        const result=await page.evaluate(()=>{
          const cards=[...document.querySelectorAll('a[href*="/blog/tiktok-shop-"]')].slice(0,3).map(a=>({href:a.getAttribute('href'),text:a.innerText.trim(),image:a.querySelector('img')?.naturalWidth||0}));
          return {cards,overflow:document.documentElement.scrollWidth>innerWidth,broken:[...document.images].filter(i=>i.complete&&i.naturalWidth===0).map(i=>i.src),script:[...document.scripts].map(s=>s.src).find(s=>s.includes('BlogList.compiled'))};
        });
        report.index.push({viewport:viewport.name,cache,...result});
        if(cache==='fresh')await page.screenshot({path:path.join(out,'index-'+viewport.name+'.png')});
      }
      for(const slug of [current,previous])for(const lang of ['en','zh-CN']){
        const suffix=lang==='zh-CN'?'?lang=zh':'';
        await page.goto(base+'/blog/'+slug+'.html'+suffix,{waitUntil:'networkidle'});
        const result=await page.evaluate((lang)=>{
          const visible=e=>{if(!e)return false;const r=e.getBoundingClientRect();const s=getComputedStyle(e);return r.height>0&&s.visibility!=='hidden'&&s.display!=='none'};
          const a=document.querySelector('article[lang="'+lang+'"]');
          const other=document.querySelector('article[lang="'+(lang==='en'?'zh-CN':'en')+'"]');
          const h1=a?.querySelector('h1');
          const source=[...(a?.querySelectorAll('h2')||[])].find(h=>h.innerText.trim()===(lang==='en'?'Source notes':'来源说明'));
          const body=document.body.innerText;
          const related=[...document.querySelectorAll('.wem-related a')].filter(visible);
          return {title:h1?.innerText,active:visible(a),otherHidden:!visible(other),hero:a?.querySelector('img.hero')?.naturalWidth||0,heroCopy:a?.querySelectorAll('.wem-hero-copy').length||0,source:source?{font:getComputedStyle(source).fontFamily,size:getComputedStyle(source).fontSize,weight:getComputedStyle(source).fontWeight,color:getComputedStyle(source).color}:null,h1:h1?{font:getComputedStyle(h1).fontFamily,size:getComputedStyle(h1).fontSize,weight:getComputedStyle(h1).fontWeight,color:getComputedStyle(h1).color}:null,faq:[...document.querySelectorAll('.wem-faq-item')].filter(visible).length,related:related.length,cta:body.includes(lang==='en'?'READY TO SCALE':'想把美国'),booking:body.includes(lang==='en'?'BOOK A DISCOVERY CALL':'预约咨询'),footer:body.includes(lang==='en'?'All rights reserved':'版权所有'),broken:[...document.images].filter(i=>i.complete&&i.naturalWidth===0).map(i=>i.src),overflow:document.documentElement.scrollWidth>innerWidth,undefinedText:body.includes('undefined')};
        },lang);
        report.articles.push({viewport:viewport.name,slug,lang,...result});
        await page.screenshot({path:path.join(out,slug+'-'+lang+'-'+viewport.name+'.png')});
      }
      await context.close();
    }
    const expected=[previous,third,current];
    report.checks.index=report.index.every(r=>!r.overflow&&r.broken.length===0&&/BlogList\.compiled\.js\?v=[0-9a-f]{12}/.test(r.script||'')&&expected.every((s,i)=>r.cards[i]?.href.endsWith(s)&&r.cards[i]?.image>0));
    report.checks.article=report.articles.every(r=>r.active&&r.otherHidden&&r.hero>0&&r.heroCopy===0&&r.source&&r.faq===6&&r.related===3&&r.cta&&r.booking&&r.footer&&r.broken.length===0&&!r.overflow&&!r.undefinedText);
    report.checks.styleParity=['desktop','mobile'].every(view=>['en','zh-CN'].every(lang=>{
      const a=report.articles.find(r=>r.viewport===view&&r.lang===lang&&r.slug===current);
      const b=report.articles.find(r=>r.viewport===view&&r.lang===lang&&r.slug===previous);
      return JSON.stringify({h1:a.h1,source:a.source})===JSON.stringify({h1:b.h1,source:b.source});
    }));
    report.passed=Object.values(report.checks).every(Boolean);
    await fs.writeFile(path.join(out,'report.json'),JSON.stringify(report,null,2)+'\n');
    console.log(JSON.stringify({checks:report.checks,passed:report.passed,output:out},null,2));
    if(!report.passed)process.exitCode=1;
  }finally{
    if(browser)await browser.close();
    if(server){server.kill('SIGTERM');await sleep(300);}
    await fs.rm(root,{recursive:true,force:true});
  }
})().catch(e=>{console.error(e);process.exitCode=1});
