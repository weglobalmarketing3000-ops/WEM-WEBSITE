import fs from 'node:fs/promises';
import { execFileSync } from 'node:child_process';

const expectedDeployment = process.argv[2] || '';
const domains = ['https://www.weglobalmarketing.com', 'https://weglobalmarketing.com'];
const targets = [
  ['tiktok-shop-smart-promotion-performance-cost','2026-10-22'],
  ['tiktok-shop-order-to-appeal-evidence-ledger','2026-10-21'],
  ['tiktok-shop-return-inspection-photo-evidence','2026-10-20'],
  ['tiktok-shop-chargeback-seven-day-evidence-pack','2026-10-19'],
  ['tiktok-shop-return-rejection-evidence-isrr-risk','2026-10-18'],
  ['tiktok-shop-aftersales-automation-approval-rules','2026-10-17'],
  ['tiktok-shop-bfcm-2026-holiday-returns-liability','2026-10-16'],
];
const redirects = [
  ['tiktok-shop-return-inspection-six-photo-evidence',targets[2][0]],
  ['tiktok-shop-bfcm-2026-holiday-return-window-liability',targets[6][0]],
];
const get = async (base, route, redirect='follow') => {
  const separator = route.includes('?') ? '&' : '?';
  const response = await fetch(`${base}${route}${separator}verify=${Date.now()}`, { redirect, headers:{'cache-control':'no-cache',pragma:'no-cache'} });
  return { status:response.status, url:response.url, location:response.headers.get('location'), cache:response.headers.get('cache-control'), text:await response.text() };
};
const inspect = JSON.parse(execFileSync('npx',['vercel','inspect',domains[0],'--format=json'],{encoding:'utf8'}));
const pages = await Promise.all(targets.flatMap(([slug]) => [get(domains[0],`/blog/${slug}`),get(domains[0],`/blog/${slug}?lang=zh`)]));
const [list,sitemap,llms] = await Promise.all([get(domains[0],'/BlogList.compiled.js'),get(domains[0],'/sitemap.xml'),get(domains[0],'/llms.txt')]);
const entries = [...list.text.matchAll(/(?:\{|,)"?slug"?:"([a-z0-9-]+)"/g)].map((m) => m[1]);
const images = [];
for (const page of pages) for (const src of [...new Set([...page.text.matchAll(/<img[^>]+src="([^"]+)"/g)].map((m) => m[1]))]) {
  const response = await get(domains[0],src.startsWith('http') ? new URL(src).pathname : src);
  images.push([src,response.status]);
}
const redirectChecks = [];
for (const domain of domains) for (const [old,destination] of redirects) for (const lang of ['', '?lang=zh']) {
  const isApex = new URL(domain).host === 'weglobalmarketing.com';
  const response = await get(domain,`/blog/${old}${lang}`,isApex ? 'follow' : 'manual');
  const location = response.location ? new URL(response.location,domain) : null;
  const final = new URL(response.url);
  redirectChecks.push([`${new URL(domain).host} ${old}${lang}`,isApex ? response.status===200 && final.pathname===`/blog/${destination}` && (!lang || final.searchParams.get('lang')==='zh') : response.status===308 && location.pathname===`/blog/${destination}` && (!lang || location.searchParams.get('lang')==='zh')]);
}
const dates = targets.every(([,date],i) => {
  const match = pages[i*2].text.match(/<script type="application\/ld\+json">([^]*?)<\/script>/);
  if (!match) return false;
  return JSON.parse(match[1])['@graph'].filter((node) => node['@type']==='BlogPosting').every((node) => node.datePublished===date);
});
const checks = [
  ['custom domain deployment',!expectedDeployment || inspect.id===expectedDeployment],
  ['deployment READY',inspect.readyState==='READY'],
  ['q4-26 through q4-20 order',targets.every(([slug],i) => entries[i]===slug)],
  ['all bilingual routes 200',pages.every((p) => p.status===200)],
  ['all BlogPosting dates',dates],
  ['all article images 200',images.length>=98 && images.every(([,status]) => status===200)],
  ['q4-26 CTA/footer',pages[0].text.includes('READY TO TALK') && pages[0].text.includes('<footer class="footer">')],
  ['q4-26 sitemap EN/ZH',sitemap.text.includes(`<loc>${domains[0]}/blog/${targets[0][0]}</loc><lastmod>2026-10-22</lastmod>`) && sitemap.text.includes(`<loc>${domains[0]}/blog/${targets[0][0]}?lang=zh</loc><lastmod>2026-10-22</lastmod>`)],
  ['q4-26 llms',llms.text.includes(`${domains[0]}/blog/${targets[0][0]}`)],
  ['article no-store',pages[0].cache?.includes('no-store')],
  ...redirectChecks,
];
const report = { verifiedAt:new Date().toISOString(), deploymentId:inspect.id, readyState:inspect.readyState, ranks:Object.fromEntries(targets.map(([slug]) => [slug,entries.indexOf(slug)+1])), imageRequests:images.length, checks, passed:checks.every(([,pass]) => pass) };
await fs.writeFile('outputs/2026-10-22-q4-26-verifier.json',`${JSON.stringify(report,null,2)}\n`);
console.log(JSON.stringify(report,null,2));
if (!report.passed) process.exitCode=1;
