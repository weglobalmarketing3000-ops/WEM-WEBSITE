import fs from 'node:fs/promises';
import { execFileSync } from 'node:child_process';

const base = 'https://www.weglobalmarketing.com';
const expectedDeployment = process.argv[2] || '';
const targets = [
  ['tiktok-shop-chargeback-seven-day-evidence-pack', '2026-10-19'],
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
const imageChecks = [];
for (const page of pages) {
  const urls = [...page.text.matchAll(/<img[^>]+src="([^"]+)"/g)].map(match => match[1]);
  for (const image of [...new Set(urls)]) {
    const response = await get(image.startsWith('http') ? new URL(image).pathname : image);
    imageChecks.push([image, response.status]);
  }
}
const checks = [
  ['custom domain accepted deployment', !expectedDeployment || inspect.id === expectedDeployment],
  ['deployment READY', inspect.readyState === 'READY'],
  ['q4-23 through q4-20 rank order', targets.every(([slug], index) => entries[index] === slug)],
  ['all bilingual routes return 200', pages.every(page => page.status === 200)],
  ['all bilingual BlogPosting dates match', targets.every(([slug, date], index) => {
    const graph = JSON.parse(pages[index * 2].text.match(/<script type="application\/ld\+json">([^]*?)<\/script>/)[1])['@graph'];
    return graph.filter(node => node['@type'] === 'BlogPosting').length === 2 && graph.filter(node => node['@type'] === 'BlogPosting').every(node => node.datePublished === date);
  })],
  ['all currently referenced article images return 200', imageChecks.length >= 20 && imageChecks.every(([, status]) => status === 200)],
  ['old q4-20 EN redirects permanently', oldEn.status === 308 && new URL(oldEn.location, base).pathname === '/blog/tiktok-shop-bfcm-2026-holiday-returns-liability'],
  ['old q4-20 ZH redirect preserves lang', oldZh.status === 308 && new URL(oldZh.location, base).pathname === '/blog/tiktok-shop-bfcm-2026-holiday-returns-liability' && new URL(oldZh.location, base).searchParams.get('lang') === 'zh'],
  ['q4-23 sitemap EN/ZH', sitemap.text.includes(`<loc>${base}/blog/${targets[0][0]}</loc><lastmod>2026-10-19</lastmod>`) && sitemap.text.includes(`<loc>${base}/blog/${targets[0][0]}?lang=zh</loc><lastmod>2026-10-19</lastmod>`) ],
  ['q4-23 llms discovery', llms.text.includes(`${base}/blog/${targets[0][0]}`)],
  ['article cache no-store', pages[0].cache?.includes('no-store')],
];
const report = { verifiedAt: new Date().toISOString(), deploymentId: inspect.id, readyState: inspect.readyState, ranks: Object.fromEntries(targets.map(([slug]) => [slug, entries.indexOf(slug) + 1])), imageChecks, checks, passed: checks.every(([, pass]) => pass) };
await fs.writeFile('outputs/2026-10-19-q4-23-verifier.json', `${JSON.stringify(report, null, 2)}\n`);
console.log(JSON.stringify({ ...report, imageChecks: `${imageChecks.length} current image requests` }, null, 2));
if (!report.passed) process.exitCode = 1;
