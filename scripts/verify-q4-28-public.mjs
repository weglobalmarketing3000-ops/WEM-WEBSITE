import fs from 'node:fs/promises';
import { execFileSync } from 'node:child_process';

const expectedDeployment=process.argv[2]||'';
const domains=['https://www.weglobalmarketing.com','https://weglobalmarketing.com'];
const targets=[
 ['tiktok-shop-bfcm-virtual-bundles-offer-inventory-returns','2026-10-24'],
 ['tiktok-shop-bfcm-better-price-rewards-margin-returns-fees','2026-10-23'],
 ['tiktok-shop-smart-promotion-performance-cost-growth','2026-10-22'],
 ['tiktok-shop-order-to-appeal-evidence-ledger','2026-10-21'],
 ['tiktok-shop-return-inspection-photo-evidence','2026-10-20'],
 ['tiktok-shop-chargeback-seven-day-evidence-pack','2026-10-19'],
 ['tiktok-shop-return-rejection-evidence-isrr-risk','2026-10-18'],
 ['tiktok-shop-aftersales-automation-approval-rules','2026-10-17'],
 ['tiktok-shop-bfcm-2026-holiday-returns-liability','2026-10-16'],
];
const redirects=[
 ['tiktok-shop-smart-promotion-performance-cost',targets[2][0]],
 ['tiktok-shop-return-inspection-six-photo-evidence',targets[4][0]],
 ['tiktok-shop-bfcm-2026-holiday-return-window-liability',targets[8][0]],
];
const get=async(base,route,redirect='follow')=>{const s=route.includes('?')?'&':'?';const r=await fetch(`${base}${route}${s}v=${Date.now()}`,{redirect,headers:{'cache-control':'no-cache',pragma:'no-cache'}});return{status:r.status,url:r.url,location:r.headers.get('location'),cache:r.headers.get('cache-control'),text:await r.text()}};
const inspect=JSON.parse(execFileSync('npx',['vercel','inspect',domains[0],'--format=json'],{encoding:'utf8'}));
const pages=await Promise.all(targets.flatMap(([slug])=>[get(domains[0],`/blog/${slug}`),get(domains[0],`/blog/${slug}?lang=zh`)]));
const [list,sitemap,llms]=await Promise.all([get(domains[0],'/BlogList.compiled.js'),get(domains[0],'/sitemap.xml'),get(domains[0],'/llms.txt')]);
const entries=[...list.text.matchAll(/(?:\{|,)"?slug"?:"([a-z0-9-]+)"/g)].map(m=>m[1]);
const images=[];
for(const page of pages.slice(0,4))for(const src of [...new Set([...page.text.matchAll(/<img[^>]+src="([^"]+)"/g)].map(m=>m[1]))]){const r=await get(domains[0],src.startsWith('http')?new URL(src).pathname:src);images.push([src,r.status]);}
const redirectsOk=[];
for(const domain of domains)for(const [old,dest] of redirects)for(const lang of ['','?lang=zh']){
 const apex=new URL(domain).host==='weglobalmarketing.com';
 const r=await get(domain,`/blog/${old}${lang}`,apex?'follow':'manual');
 const loc=r.location?new URL(r.location,domain):null,final=new URL(r.url);
 redirectsOk.push(apex
  ? r.status===200&&final.pathname===`/blog/${dest}`&&(!lang||final.searchParams.get('lang')==='zh')
  : r.status===308&&loc?.pathname===`/blog/${dest}`&&(!lang||loc.searchParams.get('lang')==='zh'));
}
const dates=targets.every(([,date],i)=>{const m=pages[i*2].text.match(/<script type="application\/ld\+json">([^]*?)<\/script>/);return m&&JSON.parse(m[1])['@graph'].filter(n=>n['@type']==='BlogPosting').every(n=>n.datePublished===date)});
const q428=pages[0].text,q427=pages[2].text;
const checks=[
 ['custom domain deployment',!expectedDeployment||inspect.id===expectedDeployment],
 ['deployment READY',inspect.readyState==='READY'],
 ['q4-28 through q4-20 order',targets.every(([slug],i)=>entries[i]===slug)],
 ['all bilingual routes 200',pages.every(p=>p.status===200)],
 ['all BlogPosting dates',dates],
 ['q4-28 and q4-27 images 200',images.length>=20&&images.every(([,s])=>s===200)],
 ['q4-28 localized body visuals',q428.includes('component-audit-en-v1.svg')&&q428.includes('offer-return-chain-en-v1.svg')&&q428.includes('component-audit-zh-v1.svg')&&q428.includes('offer-return-chain-zh-v1.svg')],
 ['q4-27 repaired second visuals',q427.includes('expiry-review-en-v2.svg')&&q427.includes('expiry-review-zh-v2.svg')],
 ['q4-28 CTA/footer',q428.includes('READY TO TALK')&&q428.includes('<footer class="footer">')],
 ['q4-28 sitemap EN/ZH',sitemap.text.includes(`<loc>${domains[0]}/blog/${targets[0][0]}</loc><lastmod>2026-10-24</lastmod>`)&&sitemap.text.includes(`<loc>${domains[0]}/blog/${targets[0][0]}?lang=zh</loc><lastmod>2026-10-24</lastmod>`)],
 ['q4-28 llms',llms.text.includes(`${domains[0]}/blog/${targets[0][0]}`)],
 ['article no-store',pages[0].cache?.includes('no-store')],
 ['legacy redirects both domains',redirectsOk.every(Boolean)],
];
const report={verifiedAt:new Date().toISOString(),deploymentId:inspect.id,readyState:inspect.readyState,ranks:Object.fromEntries(targets.map(([s])=>[s,entries.indexOf(s)+1])),imageRequests:images.length,checks,passed:checks.every(([,p])=>p)};
await fs.writeFile('outputs/2026-10-24-q4-28-verifier.json',`${JSON.stringify(report,null,2)}\n`);
console.log(JSON.stringify(report,null,2));if(!report.passed)process.exitCode=1;
