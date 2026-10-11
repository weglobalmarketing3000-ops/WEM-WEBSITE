import fs from 'node:fs/promises';
import {execFileSync} from 'node:child_process';

const base='https://www.weglobalmarketing.com';
const slug='tiktok-shop-peak-season-shipping-margin';
const prior='tiktok-shop-bfcm-price-claim-audit';
const date='2026-10-11';
const expectedDeployment='dpl_4ut1zMRsC7kufkGMcuCxnGfRZSc3';
const get=async path=>{
  const response=await fetch(`${base}${path}${path.includes('?')?'&':'?'}verify=${Date.now()}`,{redirect:'follow',headers:{'cache-control':'no-cache',pragma:'no-cache'}});
  return {status:response.status,text:await response.text()};
};

const [en,zh,list,sitemap,priorEn,priorZh]=await Promise.all([
  get(`/blog/${slug}`),get(`/blog/${slug}?lang=zh`),get('/BlogList.compiled.js'),get('/sitemap.xml'),get(`/blog/${prior}`),get(`/blog/${prior}?lang=zh`)
]);
const inspect=JSON.parse(execFileSync('npx',['vercel','inspect',base,'--format=json'],{encoding:'utf8'}));
const graph=JSON.parse(en.text.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'];
const posts=graph.filter(node=>node['@type']==='BlogPosting');
const entries=[...list.text.matchAll(/\{slug:"([a-z0-9-]+)"/g)].map(match=>match[1]);
const checks=[
  ['custom domain points to accepted deployment',inspect.id===expectedDeployment],
  ['English route and date',en.status===200&&posts.some(post=>post.inLanguage==='en-US'&&post.datePublished===date)],
  ['Chinese route and date',zh.status===200&&posts.some(post=>post.inLanguage==='zh-CN'&&post.datePublished===date)],
  ['q4-15 blog card rank 1',entries[0]===slug],
  ['q4-14 blog card rank 2',entries[1]===prior],
  ['q4-15 sitemap EN and ZH',sitemap.text.includes(`<loc>${base}/blog/${slug}</loc><lastmod>${date}</lastmod>`)&&sitemap.text.includes(`<loc>${base}/blog/${slug}?lang=zh</loc><lastmod>${date}</lastmod>`)],
  ['q4-14 bilingual regression routes remain live',priorEn.status===200&&priorZh.status===200&&priorEn.text.includes('2026-10-10')]
];
const report={date,slug,deploymentId:inspect.id,rank:entries.indexOf(slug)+1,priorRank:entries.indexOf(prior)+1,checks,passed:checks.every(([,passed])=>passed)};
await fs.writeFile('outputs/2026-10-11-q4-15-verifier.json',`${JSON.stringify(report,null,2)}\n`);
console.log(JSON.stringify(report,null,2));
if(!report.passed) process.exitCode=1;
