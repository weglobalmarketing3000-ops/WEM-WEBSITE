import fs from 'node:fs/promises';
import { execFileSync } from 'node:child_process';

const base = 'https://www.weglobalmarketing.com';
const expectedDeployment = process.argv[2] || '';
const targets = [
  ['tiktok-shop-order-to-appeal-evidence-ledger', '2026-10-21'],
  ['tiktok-shop-return-inspection-photo-evidence', '2026-10-20'],
  ['tiktok-shop-chargeback-seven-day-evidence-pack', '2026-10-19'],
  ['tiktok-shop-return-rejection-evidence-isrr-risk', '2026-10-18'],
  ['tiktok-shop-aftersales-automation-approval-rules', '2026-10-17'],
  ['tiktok-shop-bfcm-2026-holiday-returns-liability', '2026-10-16'],
];
const redirects = [
  ['tiktok-shop-return-inspection-six-photo-evidence', targets[1][0]],
  ['tiktok-shop-bfcm-2026-holiday-return-window-liability', targets[5][0]],
];
const get = async (route, redirect = 'follow') => {
  const separator = route.includes('?') ? '&' : '?';
  const response = await fetch(`${base}${route}${separator}verify=${Date.now()}`, { redirect, headers: { 'cache-control': 'no-cache', pragma: 'no-cache' } });
  return { status: response.status, location: response.headers.get('location'), cache: response.headers.get('cache-control'), text: await response.text() };
};
const pages = await Promise.all(targets.flatMap(([slug]) => [get(`/blog/${slug}`), get(`/blog/${slug}?lang=zh`)]));
const [list, sitemap, llms, ...redirectPages] = await Promise.all([
  get('/BlogList.compiled.js'), get('/sitemap.xml'), get('/llms.txt'),
  ...redirects.flatMap(([old]) => [get(`/blog/${old}`, 'manual'), get(`/blog/${old}?lang=zh`, 'manual')]),
]);
const inspect = JSON.parse(execFileSync('npx', ['vercel', 'inspect', base, '--format=json'], { encoding: 'utf8' }));
const entries = [...list.text.matchAll(/(?:\{|,)"?slug"?:"([a-z0-9-]+)"/g)].map((match) => match[1]);
const imageChecks = [];
for (const page of pages) for (const image of [...new Set([...page.text.matchAll(/<img[^>]+src="([^"]+)"/g)].map((match) => match[1]))]) {
  const response = await get(image.startsWith('http') ? new URL(image).pathname : image);
  imageChecks.push([image, response.status]);
}
const blogDatesMatch = targets.every(([, date], index) => {
  const match = pages[index * 2].text.match(/<script type="application\/ld\+json">([^]*?)<\/script>/);
  if (!match) return false;
  const posts = JSON.parse(match[1])['@graph'].filter((node) => node['@type'] === 'BlogPosting');
  return posts.length === 2 && posts.every((node) => node.datePublished === date);
});
const redirectChecks = redirects.flatMap(([old, destination], index) => {
  const en = redirectPages[index * 2], zh = redirectPages[index * 2 + 1];
  return [
    [`${old} EN redirects permanently`, en.status === 308 && new URL(en.location, base).pathname === `/blog/${destination}`],
    [`${old} ZH redirect preserves lang`, zh.status === 308 && new URL(zh.location, base).pathname === `/blog/${destination}` && new URL(zh.location, base).searchParams.get('lang') === 'zh'],
  ];
});
const checks = [
  ['custom domain accepted deployment', !expectedDeployment || inspect.id === expectedDeployment],
  ['deployment READY', inspect.readyState === 'READY'],
  ['q4-25 through q4-20 rank order', targets.every(([slug], index) => entries[index] === slug)],
  ['all bilingual routes return 200', pages.every((page) => page.status === 200)],
  ['all bilingual BlogPosting dates match', blogDatesMatch],
  ['all currently referenced article images return 200', imageChecks.length >= 30 && imageChecks.every(([, status]) => status === 200)],
  ...redirectChecks,
  ['q4-25 sitemap EN/ZH', sitemap.text.includes(`<loc>${base}/blog/${targets[0][0]}</loc><lastmod>2026-10-21</lastmod>`) && sitemap.text.includes(`<loc>${base}/blog/${targets[0][0]}?lang=zh</loc><lastmod>2026-10-21</lastmod>`) ],
  ['q4-25 llms discovery', llms.text.includes(`${base}/blog/${targets[0][0]}`)],
  ['article cache no-store', pages[0].cache?.includes('no-store')],
];
const report = { verifiedAt: new Date().toISOString(), deploymentId: inspect.id, readyState: inspect.readyState, ranks: Object.fromEntries(targets.map(([slug]) => [slug, entries.indexOf(slug) + 1])), imageChecks, checks, passed: checks.every(([, pass]) => pass) };
await fs.writeFile('outputs/2026-10-21-q4-25-verifier.json', `${JSON.stringify(report, null, 2)}\n`);
console.log(JSON.stringify({ ...report, imageChecks: `${imageChecks.length} current image requests` }, null, 2));
if (!report.passed) process.exitCode = 1;
