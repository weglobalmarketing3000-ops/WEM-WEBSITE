import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';

const patch = path.resolve('outputs/patches/2026-09-17-aug15-31-visual-parity');
const dates = [
  ['2026-08-15','tiktok-shop-open-collaboration-product-fit'],
  ['2026-08-16','tiktok-shop-affiliate-commission-change'],
  ['2026-08-17','measure-tiktok-shop-partner-performance'],
  ['2026-08-18','tiktok-shop-probation-growth-plan'],
  ['2026-08-19','weekly-tiktok-shop-operating-review'],
  ['2026-08-20','tiktok-shop-live-first-five-sessions-learning-system'],
  ['2026-08-23','tiktok-shop-live-preheat-system'],
  ['2026-08-24','tiktok-shop-seller-assistant-human-control'],
  ['2026-08-25','validate-tiktok-shop-ai-report'],
  ['2026-08-26','tiktok-shop-regulated-claims-review'],
  ['2026-08-27','tiktok-shop-violation-first-24-hours'],
  ['2026-08-28','tiktok-shop-correct-or-appeal'],
  ['2026-08-29','tiktok-shop-policy-vs-milestone-quiz'],
  ['2026-08-30','tiktok-shop-ai-first-90-days'],
  ['2026-08-31','tiktok-shop-live-assortment'],
];
const font='Inter,"Helvetica Neue",-apple-system,system-ui,sans-serif';
const styles=`<style id="wem-aug-visual-parity-v1">
.wrap article{font-family:${font}!important;color:#37332f!important}
.wrap article p,.wrap article li,.wrap article blockquote,.wrap article table{font-family:${font}!important;color:#37332f!important;font-size:18px!important;line-height:1.78!important}
.wrap article h2{font-family:${font}!important;font-size:clamp(36px,4.4vw,54px)!important;font-weight:800!important;line-height:1.08!important;letter-spacing:-.045em!important;color:#171717!important;text-transform:none!important}
.wrap article h2:after{display:block;width:112px;height:5px;margin-top:24px;border-radius:999px;background:linear-gradient(90deg,#2256c9,#9b62df,#ff4d9d);content:""}
.wrap article h3{font-family:${font}!important}
.wrap h1{font-family:${font}!important;font-size:clamp(39px,5.4vw,70px)!important;font-weight:850!important;color:#171717!important;line-height:1.03!important;letter-spacing:-.05em!important;text-transform:none!important}
.wrap article .wem-source-notes-heading{margin-top:72px!important;padding:0!important;border:0!important;background:transparent!important;box-shadow:none!important;font-family:${font}!important;font-size:clamp(30px,3.28125vw,42px)!important;font-weight:700!important;line-height:1.1!important;color:#171717!important;letter-spacing:-.035em!important;text-transform:none!important}
.wrap article .wem-source-notes-heading:after{display:block!important;width:112px!important;height:5px!important;margin-top:24px!important;border-radius:999px!important;background:linear-gradient(90deg,#2256c9,#9b62df,#ff4d9d)!important;content:""!important}
.wem-source-notes-body{font-family:${font}!important;color:#37332f!important;font-size:18px!important;line-height:1.78!important}
.wem-source-notes-body a{color:#1746b8!important}
@media(max-width:650px){.wrap article p,.wrap article li,.wrap article blockquote,.wem-source-notes-body{font-size:17px!important}}
</style>`;
const marker=`<script id="wem-aug-source-marker-v1">document.querySelectorAll('article h2').forEach(h=>{let t=h.textContent.trim();if(t.startsWith('Source notes')||t.startsWith('来源说明')){h.classList.add('wem-source-notes-heading');h.nextElementSibling?.classList.add('wem-source-notes-body')}})</script>`;
await fs.mkdir(path.join(patch,'blog'),{recursive:true});
const report=[];
for(const [date,slug] of dates){
  const url=`https://www.weglobalmarketing.com/blog/${slug}`;
  const response=await fetch(url);
  if(!response.ok)throw new Error(`${url} HTTP ${response.status}`);
  const live=await response.text();
  const before=live.replace(/<style id="wem-aug-visual-parity-v1">[\s\S]*?<\/style>/,'')
    .replace(/<script id="wem-aug-source-marker-v1">[\s\S]*?<\/script>/,'');
  if(!before.includes('</head>')||!before.includes('</body>')||!before.includes('Source notes')||!before.includes('来源说明')||!before.includes(date))throw new Error(`${slug} unexpected live page`);
  if(before.includes('wem-aug-visual-parity-v1'))throw new Error(`${slug} stale style could not be removed`);
  const after=before.replace('</head>',`${styles}</head>`).replace('</body>',`${marker}</body>`);
  await fs.writeFile(path.join(patch,'blog',`${slug}.html`),after);
  report.push({date,slug,originalSha256:crypto.createHash('sha256').update(before).digest('hex'),newSha256:crypto.createHash('sha256').update(after).digest('hex'),onlyStyleInserted:after.replace(styles,'').replace(marker,'')===before});
}
await fs.writeFile(path.join(patch,'build-report.json'),JSON.stringify({articles:report},null,2)+'\n');
console.log(JSON.stringify({patch,articles:report.length,onlyStyleInserted:report.every(x=>x.onlyStyleInserted)},null,2));
