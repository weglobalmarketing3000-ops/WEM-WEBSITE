const { chromium } = require('playwright');
const fs = require('node:fs');

const base = process.env.QA_BASE || 'https://www.weglobalmarketing.com';
const output = process.env.QA_OUTPUT || 'outputs/2026-09-17-aug15-31-public-audit.json';
const expected = {
  '2026-08-15': 'tiktok-shop-open-collaboration-product-fit',
  '2026-08-16': 'tiktok-shop-affiliate-commission-change',
  '2026-08-17': 'measure-tiktok-shop-partner-performance',
  '2026-08-18': 'tiktok-shop-probation-growth-plan',
  '2026-08-19': 'weekly-tiktok-shop-operating-review',
  '2026-08-20': 'tiktok-shop-live-first-five-sessions-learning-system',
  '2026-08-23': 'tiktok-shop-live-preheat-system',
  '2026-08-24': 'tiktok-shop-seller-assistant-human-control',
  '2026-08-25': 'validate-tiktok-shop-ai-report',
  '2026-08-26': 'tiktok-shop-regulated-claims-review',
  '2026-08-27': 'tiktok-shop-violation-first-24-hours',
  '2026-08-28': 'tiktok-shop-correct-or-appeal',
  '2026-08-29': 'tiktok-shop-policy-vs-milestone-quiz',
  '2026-08-30': 'tiktok-shop-ai-first-90-days',
  '2026-08-31': 'tiktok-shop-live-assortment',
};

(async () => {
  const browser = await chromium.launch({headless:true, executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});
  const records = [];
  const targets = [['2026-08-01','tiktok-shop-sample-decision-system'],['2026-08-08','tiktok-shop-shop-ready-scale-ready'], ...Object.entries(expected)];
  for (const viewport of [{width:1280,height:720},{width:390,height:844}]) {
    const page = await browser.newPage({viewport});
    for (const [date, slug] of targets) {
      for (const lang of ['en','zh-CN']) {
        const url = `${base}/blog/${slug}${base.startsWith('http://127.0.0.1')?'.html':''}${lang==='zh-CN'?'?lang=zh':''}`;
        const response = await page.goto(url,{waitUntil:'networkidle',timeout:45000});
        if(date==='2026-08-24'&&lang==='en'&&viewport.width===1280&&process.env.QA_SCREENSHOT){
          await page.getByRole('heading',{name:'Source notes'}).scrollIntoViewIfNeeded();
          await page.screenshot({path:process.env.QA_SCREENSHOT,fullPage:false});
        }
        const report = await page.evaluate(({lang}) => {
          const active = document.querySelector(`article[lang="${lang}"]`) || document.querySelector('article');
          const h1 = active?.querySelector('h1') || document.querySelector('h1');
          const heading = [...(active?.querySelectorAll('h2')||[])].find(el => /^(Source notes|来源说明|来源备注)$/.test(el.textContent.trim()));
          const css = el => el ? {fontFamily:getComputedStyle(el).fontFamily,fontSize:getComputedStyle(el).fontSize,fontWeight:getComputedStyle(el).fontWeight,color:getComputedStyle(el).color} : null;
          const body = document.body.innerText;
          const firstBody = active?.querySelector('h2+p') || active?.querySelector('p');
          return {
            title:h1?.textContent.trim(), h1:css(h1), copy:css(firstBody), source:css(heading), sourceExists:!!heading,
            activeVisible:active && getComputedStyle(active).display!=='none',
            heroNaturalWidth:active?.querySelector('img.hero')?.naturalWidth || null,
            faqs:[...document.querySelectorAll('.wem-faq-item')].filter(el=>getComputedStyle(el).display!=='none').length,
            cta:/READY TO SCALE|想把美国/.test(body),footer:/All rights reserved|版权所有/.test(body),
            brokenImages:[...document.images].filter(im=>im.complete && im.naturalWidth===0).map(im=>im.src),
            overflow:document.documentElement.scrollWidth>innerWidth,
            sourceText:heading?.parentElement?.innerText.slice(0,180) || null,
          };
        },{lang});
        records.push({date,slug,lang,viewport:viewport.width,http:response?.status(),...report});
      }
    }
    await page.close();
  }
  await browser.close();
  const baseline = records.filter(r=>r.date==='2026-08-01'||r.date==='2026-08-08');
  const issues = records.filter(r=>r.date!=='2026-08-01'&&r.date!=='2026-08-08').flatMap(r=>{
    const ref = baseline.find(b=>b.lang===r.lang && b.viewport===r.viewport);
    const sourceRef = baseline.find(b=>b.date==='2026-08-08'&&b.lang===r.lang&&b.viewport===r.viewport);
    const problems=[];
    if(r.http!==200) problems.push('http');
    if(!r.activeVisible||!r.title) problems.push('article');
    if(r.h1 && ref?.h1 && JSON.stringify(r.h1)!==JSON.stringify(ref.h1)) problems.push('h1_style');
    if(r.copy && ref?.copy && r.copy.fontFamily!==ref.copy.fontFamily) problems.push('copy_font');
    if(!r.sourceExists) problems.push('source_missing');
    if(r.source && sourceRef?.source && (r.source.fontFamily!==ref?.h1?.fontFamily ||
      r.source.fontSize!==sourceRef.source.fontSize || r.source.fontWeight!==sourceRef.source.fontWeight ||
      r.source.color!==sourceRef.source.color)) problems.push('source_style');
    if(!r.heroNaturalWidth) problems.push('hero');
    if(r.faqs<3) problems.push('faq');
    if(!r.cta) problems.push('cta');
    if(!r.footer) problems.push('footer');
    if(r.brokenImages.length) problems.push('broken_images');
    if(r.overflow) problems.push('overflow');
    return problems.length?[{date:r.date,slug:r.slug,lang:r.lang,viewport:r.viewport,problems}]:[];
  });
  const result={baseline,records,issues,missingDates:['2026-08-21','2026-08-22']};
  fs.writeFileSync(output,JSON.stringify(result,null,2)+'\n');
  console.log(JSON.stringify({records:records.length,issues,missingDates:result.missingDates},null,2));
})().catch(err=>{console.error(err);process.exitCode=1});
