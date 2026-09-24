const fs=require('node:fs/promises');
const os=require('node:os');
const path=require('node:path');
const {spawn}=require('node:child_process');
const {chromium}=require('/Users/wendylin/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');

const repo=path.resolve(__dirname,'..');
const current='tiktok-shop-consumer-electronics-operating-system';
const previous='tiktok-shop-jewelry-category-operating-system';
const out=path.join(repo,'outputs/2026-09-24-training46-local-qa');
const sleep=ms=>new Promise(r=>setTimeout(r,ms));

(async()=>{
  const root=await fs.mkdtemp(path.join(os.tmpdir(),'wem-training46-'));
  let server,browser;
  try{
    await fs.mkdir(out,{recursive:true});
    await fs.cp(path.join(repo,'ui_kits/website'),root,{recursive:true});
    for(const patch of [
      'outputs/patches/2026-09-20-training44-account-health-system',
      'outputs/patches/2026-09-22-growth-autopilot-roi-protection',
      'outputs/patches/2026-09-22-growth-autopilot-roi-logo-fix',
      'outputs/patches/2026-09-23-growth-autopilot-comparison',
      'outputs/patches/2026-09-21-training45-scoped-local',
      'outputs/patches/2026-09-24-training46-consumer-electronics'
    ]) await fs.cp(path.join(repo,patch),root,{recursive:true});
    const port=18746;
    server=spawn('python3',['-m','http.server',String(port),'--bind','127.0.0.1'],{cwd:root,stdio:'ignore'});
    await sleep(900);
    browser=await chromium.launch({headless:true,executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});
    const base='http://127.0.0.1:'+port;
    const report={status:'local_only_not_published',index:[],articles:[],reference:[],checks:{}};
    for(const viewport of [{name:'desktop',width:1280,height:720},{name:'mobile',width:390,height:844}]){
      const context=await browser.newContext({viewport:{width:viewport.width,height:viewport.height}});
      const page=await context.newPage();
      const errors=[];page.on('pageerror',e=>errors.push(String(e)));
      for(const cache of ['fresh','warm']){
        await page.goto(base+'/blog.html',{waitUntil:'networkidle'});
        await page.locator('a[href*="/blog/tiktok-shop-"]').first().scrollIntoViewIfNeeded();
        await page.waitForTimeout(300);
        const result=await page.evaluate(()=>({cards:[...document.querySelectorAll('a[href*="/blog/tiktok-shop-"]')].slice(0,4).map(a=>({href:a.getAttribute('href'),text:a.innerText.trim(),image:a.querySelector('img')?.naturalWidth||0})),overflow:document.documentElement.scrollWidth>innerWidth,broken:[...document.images].filter(i=>i.complete&&i.naturalWidth===0).map(i=>i.src),script:[...document.scripts].map(s=>s.src).find(s=>s.includes('BlogList.compiled'))}));
        report.index.push({viewport:viewport.name,cache,...result});
        if(cache==='fresh')await page.screenshot({path:path.join(out,'index-'+viewport.name+'.png'),fullPage:true});
      }
      for(const slug of [current,previous])for(const lang of ['en','zh-CN']){
        await page.goto(base+'/blog/'+slug+'.html'+(lang==='zh-CN'?'?lang=zh':''),{waitUntil:'networkidle'});
        const result=await page.evaluate(lang=>{
          const visible=e=>{if(!e)return false;const r=e.getBoundingClientRect(),s=getComputedStyle(e);return r.height>0&&s.visibility!=='hidden'&&s.display!=='none'};
          const a=document.querySelector(`article[lang="${lang}"]`),other=document.querySelector(`article[lang="${lang==='en'?'zh-CN':'en'}"]`),h1=a?.querySelector('h1');
          const source=[...(a?.querySelectorAll('h2')||[])].find(h=>h.innerText.trim()===(lang==='en'?'Source notes':'来源说明'));
          const body=document.body.innerText,related=[...document.querySelectorAll('.wem-related a')].filter(visible);
          const style=e=>e?{font:getComputedStyle(e).fontFamily,size:getComputedStyle(e).fontSize,weight:getComputedStyle(e).fontWeight,color:getComputedStyle(e).color,line:getComputedStyle(e).lineHeight}:null;
          return {title:h1?.innerText,active:visible(a),otherHidden:!visible(other),hero:a?.querySelector('img.hero')?.naturalWidth||0,heroCopy:a?.querySelectorAll('.wem-hero-copy').length||0,source:style(source),h1:style(h1),paragraph:style(a?.querySelector('section.wem-topic-card p')),faq:[...document.querySelectorAll('.wem-faq-item')].filter(visible).length,related:related.length,cta:body.includes(lang==='en'?'READY TO SCALE':'想把美国'),booking:body.includes(lang==='en'?'BOOK A DISCOVERY CALL':'预约咨询'),footer:body.includes(lang==='en'?'All rights reserved':'版权所有'),broken:[...document.images].filter(i=>i.complete&&i.naturalWidth===0).map(i=>i.src),overflow:document.documentElement.scrollWidth>innerWidth,undefinedText:body.includes('undefined'),literalMarkdown:body.includes('**')};
        },lang);
        report.articles.push({viewport:viewport.name,slug,lang,...result});
        if(slug===current)await page.screenshot({path:path.join(out,slug+'-'+lang+'-'+viewport.name+'.png'),fullPage:true});
      }
      for(const lang of ['en','zh-CN']){
        await page.goto('https://www.weglobalmarketing.com/blog/tiktok-shop-sample-decision-system'+(lang==='zh-CN'?'?lang=zh':''),{waitUntil:'networkidle'});
        const ref=await page.evaluate(lang=>{
          const visible=e=>{if(!e)return false;const r=e.getBoundingClientRect(),s=getComputedStyle(e);return r.height>0&&s.visibility!=='hidden'&&s.display!=='none'};
          const root=[...document.querySelectorAll('[lang]')].find(e=>e.getAttribute('lang')===lang&&visible(e))||document;
          const h1=[...root.querySelectorAll('h1')].find(visible)||[...document.querySelectorAll('h1')].find(visible);
          const source=[...root.querySelectorAll('h2')].find(h=>/^(Source notes|来源说明)/i.test(h.innerText.trim()));
          const p=source?.parentElement?.querySelector('p')||root.querySelector('p');
          const style=e=>e?{font:getComputedStyle(e).fontFamily,size:getComputedStyle(e).fontSize,weight:getComputedStyle(e).fontWeight,color:getComputedStyle(e).color,line:getComputedStyle(e).lineHeight}:null;
          return {lang,h1:style(h1),source:style(source),paragraph:style(p),title:h1?.innerText||'',sourceText:source?.innerText||''};
        },lang);
        report.reference.push({viewport:viewport.name,...ref});
      }
      report.articles.push({viewport:viewport.name,errors:[...errors]});
      await context.close();
    }
    const expected=[current,'tiktok-shop-growth-autopilot-vs-gmv-max-pro','tiktok-shop-growth-autopilot-roi-protection'];
    report.checks.index=report.index.every(r=>!r.overflow&&r.broken.length===0&&/BlogList\.compiled\.js\?v=[0-9a-f]{12}/.test(r.script||'')&&expected.every((s,i)=>r.cards[i]?.href.endsWith(s)&&r.cards[i]?.image>0));
    report.checks.article=report.articles.filter(r=>r.slug).every(r=>r.active&&r.otherHidden&&r.hero>0&&r.heroCopy===0&&r.source&&r.faq===6&&r.related===3&&r.cta&&r.booking&&r.footer&&r.broken.length===0&&!r.overflow&&!r.undefinedText&&!r.literalMarkdown);
    report.checks.noErrors=report.articles.filter(r=>r.errors).every(r=>r.errors.length===0);
    report.checks.styleParity=['desktop','mobile'].every(view=>['en','zh-CN'].every(lang=>{
      const a=report.articles.find(r=>r.viewport===view&&r.lang===lang&&r.slug===current);
      const b=report.reference.find(r=>r.viewport===view&&r.lang===lang);
      return a.h1?.font===b.h1?.font&&a.h1?.weight===b.h1?.weight&&a.h1?.color===b.h1?.color&&a.source?.font?.startsWith('Inter')&&a.source?.weight==='800'&&a.source?.color==='rgb(23, 23, 23)'&&a.paragraph?.color==='rgb(55, 51, 47)'&&a.paragraph?.size===(view==='mobile'?'16px':'18px');
    }));
    report.passed=Object.values(report.checks).every(Boolean);
    await fs.writeFile(path.join(out,'report.json'),JSON.stringify(report,null,2)+'\n');
    console.log(JSON.stringify({checks:report.checks,passed:report.passed,output:out},null,2));
    if(!report.passed)process.exitCode=1;
  }finally{if(browser)await browser.close();if(server){server.kill('SIGTERM');await sleep(300)}await fs.rm(root,{recursive:true,force:true})}
})().catch(e=>{console.error(e);process.exitCode=1});
