import fs from 'node:fs/promises';
import { execFileSync } from 'node:child_process';

const base = 'https://www.weglobalmarketing.com';
const expectedDeployment = process.argv[2] || '';
const targets = [
  ['tiktok-shop-return-rejection-evidence-isrr-risk', '2026-10-18'],
  ['tiktok-shop-aftersales-automation-approval-rules', '2026-10-17'],
  ['tiktok-shop-bfcm-2026-holiday-returns-liability', '2026-10-16'],
];
const oldSlug = 'tiktok-shop-bfcm-2026-holiday-return-window-liability';
const get = async (route, redirect = 'follow') => {
  const response = await fetch(`${base}${route}${route.includes('?') ? '&' : '?'}verify=${Date.now()}`, { redirect, headers: { 'cache-control': 'no-cache', pragma: 'no-cache' } });
  return { status: response.status, location: response.headers.get('location'), cache: response.headers.get('cache-control'), text: await response.text() };
};

const pages = await Promise.all(targets.flatMap(([slug]) => [get(`/blog/${slug}`), get(`/blog/${slug}?lang=zh`)]));
const [list, sitemap, llms, oldEn, oldZh] = await Promise.all([
  get('/BlogList.compiled.js'), get('/sitemap.xml'), get('/llms.txt'), get(`/blog/${oldSlug}`, 'manual'), get(`/blog/${oldSlug}?lang=zh`, 'manual'),
]);
const inspect = JSON.parse(execFileSync('npx', ['vercel', 'inspect', base, '--format=json'], { encoding: 'utf8' }));
const entries = [...list.text.matchAll(/\{slug:"([a-z0-9-]+)"/g)].map(match => match[1]);
const checks = [
  ['custom domain accepted deployment', !expectedDeployment || inspect.id === expectedDeployment],
  ['deployment READY', inspect.readyState === 'READY'],
  ['q4-22/q4-21/q4-20 rank order', targets.every(([slug], index) => entries[index] === slug)],
  ['all bilingual routes return 200', pages.every(page => page.status === 200)],
  ['all bilingual BlogPosting dates match', targets.every(([slug, date], index) => {
    const graph = JSON.parse(pages[index * 2].text.match(/<script type="application\/ld\+json">([^]*?)<\/script>/)[1])['@graph'];
    return graph.filter(node => node['@type'] === 'BlogPosting').length === 2 && graph.filter(node => node['@type'] === 'BlogPosting').every(node => node.datePublished === date);
  })],
  ['q4-21 Chinese description repair present', pages[2].text.includes('用权限、证据、停止条件与最终状态回读管理 TikTok Shop 退款、退货和换货自动化。')],
  ['old q4-20 EN redirects permanently', oldEn.status === 308 && new URL(oldEn.location, base).pathname === '/blog/tiktok-shop-bfcm-2026-holiday-returns-liability'],
  ['old q4-20 ZH redirect preserves lang', oldZh.status === 308 && new URL(oldZh.location, base).pathname === '/blog/tiktok-shop-bfcm-2026-holiday-returns-liability' && new URL(oldZh.location, base).searchParams.get('lang') === 'zh'],
  ['q4-22 sitemap EN/ZH', sitemap.text.includes(`<loc>${base}/blog/${targets[0][0]}</loc><lastmod>2026-10-18</lastmod>`) && sitemap.text.includes(`<loc>${base}/blog/${targets[0][0]}?lang=zh</loc><lastmod>2026-10-18</lastmod>`) ],
  ['q4-22 llms discovery', llms.text.includes(`${base}/blog/${targets[0][0]}`)],
  ['article cache no-store', pages[0].cache?.includes('no-store')],
];
const report = { verifiedAt: new Date().toISOString(), deploymentId: inspect.id, readyState: inspect.readyState, ranks: Object.fromEntries(targets.map(([slug]) => [slug, entries.indexOf(slug) + 1])), checks, passed: checks.every(([, pass]) => pass) };
await fs.writeFile('outputs/2026-10-18-q4-22-verifier.json', `${JSON.stringify(report, null, 2)}\n`);
console.log(JSON.stringify(report, null, 2));
if (!report.passed) process.exitCode = 1;
