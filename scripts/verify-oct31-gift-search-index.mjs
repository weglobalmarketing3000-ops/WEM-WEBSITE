import crypto from 'node:crypto';
import fs from 'node:fs/promises';
import { execFileSync } from 'node:child_process';

const expectedDeployment = process.argv[2] || '';
const www = 'https://www.weglobalmarketing.com';
const apex = 'https://weglobalmarketing.com';
const gift = 'tiktok-shop-bfcm-2026-gift-search-product-page';
const post = 'tiktok-shop-bfcm-post-sale-continuation';
const redirects = [
  ['tiktok-shop-bfcm-virtual-bundles-offer-inventory-returns', 'tiktok-shop-bfcm-virtual-bundles-inventory-returns'],
  ['tiktok-shop-smart-promotion-performance-cost', 'tiktok-shop-smart-promotion-performance-cost-growth'],
  ['tiktok-shop-return-inspection-six-photo-evidence', 'tiktok-shop-return-inspection-photo-evidence'],
  ['tiktok-shop-bfcm-2026-holiday-return-window-liability', 'tiktok-shop-bfcm-2026-holiday-returns-liability'],
];
const hash = (value) => crypto.createHash('sha256').update(value).digest('hex');
async function get(base, route, redirect = 'follow') {
  const response = await fetch(`${base}${route}${route.includes('?') ? '&' : '?'}verify=${Date.now()}`, { redirect, headers: { 'cache-control': 'no-cache', pragma: 'no-cache' } });
  return { status: response.status, url: response.url, location: response.headers.get('location'), cache: response.headers.get('cache-control'), bytes: Buffer.from(await response.arrayBuffer()) };
}

const inspect = JSON.parse(execFileSync('npx', ['vercel', 'inspect', www, '--format=json'], { encoding: 'utf8' }));
const [listResponse, blogResponse, sitemapResponse, llmsResponse, giftEn, giftZh, postEn, postZh, coverEn, coverZh] = await Promise.all([
  get(www, '/BlogList.compiled.js'), get(www, '/blog'), get(www, '/sitemap.xml'), get(www, '/llms.txt'),
  get(www, `/blog/${gift}`), get(www, `/blog/${gift}?lang=zh`), get(www, `/blog/${post}`), get(www, `/blog/${post}?lang=zh`),
  get(www, `/blog/hero-${gift}-en-v2.png`), get(www, `/blog/hero-${gift}-zh-v2.png`),
]);
const list = listResponse.bytes.toString();
const blog = blogResponse.bytes.toString();
const sitemap = sitemapResponse.bytes.toString();
const llms = llmsResponse.bytes.toString();
const slugs = [...list.matchAll(/(?:\{|,)\"?slug\"?:\"([a-z0-9-]+)\"/g)].map((match) => match[1]);
const giftStart = list.indexOf(`slug:\"${gift}\"`) >= 0 ? list.indexOf(`slug:\"${gift}\"`) : list.indexOf(`\"slug\":\"${gift}\"`);
const giftEnd = list.indexOf('slug:', giftStart + 10) >= 0 ? list.indexOf('slug:', giftStart + 10) : list.indexOf('\"slug\":', giftStart + 10);
const giftEntry = list.slice(giftStart, giftEnd > giftStart ? giftEnd : giftStart + 2400);
const expectedCompiledHash = hash(listResponse.bytes).slice(0, 12);
const expectedCoverEn = await fs.readFile('outputs/patches/2026-10-30-gift-search-final-expected/blog/hero-tiktok-shop-bfcm-2026-gift-search-product-page-en-v2.png');
const expectedCoverZh = await fs.readFile('outputs/patches/2026-10-30-gift-search-final-expected/blog/hero-tiktok-shop-bfcm-2026-gift-search-product-page-zh-v2.png');
const redirectsResult = [];
for (const domain of [www, apex]) for (const [from, to] of redirects) for (const lang of ['', '?lang=zh']) {
  const isApex = domain === apex;
  const response = await get(domain, `/blog/${from}${lang}`, isApex ? 'follow' : 'manual');
  const location = response.location ? new URL(response.location, domain) : null;
  const final = new URL(response.url);
  redirectsResult.push({ domain, from, lang: lang || 'en', passed: isApex
    ? response.status === 200 && final.pathname === `/blog/${to}` && (!lang || final.searchParams.get('lang') === 'zh')
    : response.status === 308 && location?.pathname === `/blog/${to}` && (!lang || location.searchParams.get('lang') === 'zh') });
}
const text = (response) => response.bytes.toString();
const checks = {
  customDomainDeployment: inspect.id === expectedDeployment,
  deploymentReady: inspect.readyState === 'READY',
  preservedPostRank1: slugs[0] === post,
  repairedGiftRank2: slugs[1] === gift,
  repairedGiftCard: giftEntry.includes('Oct 29, 2026') && giftEntry.includes('2026 \\u5E74 10 \\u6708 29 \\u65E5') && giftEntry.includes(`hero-${gift}-en-v2.png`) && giftEntry.includes(`hero-${gift}-zh-v2.png`),
  cacheKey: blog.includes(`BlogList.compiled.js?v=${expectedCompiledHash}`),
  giftBilingual200: giftEn.status === 200 && giftZh.status === 200,
  giftSchemaDate: [giftEn, giftZh].every((response) => (text(response).match(/datePublished\"?:\"(\d{4}-\d{2}-\d{2})/g) || []).every((value) => value.includes('2026-10-29'))),
  postPreserved200: postEn.status === 200 && postZh.status === 200,
  postSchemaDate: [postEn, postZh].every((response) => text(response).includes('datePublished\":\"2026-10-30\"')),
  v2CoverHashes: hash(coverEn.bytes) === hash(expectedCoverEn) && hash(coverZh.bytes) === hash(expectedCoverZh),
  discovery: sitemap.includes(`/blog/${gift}</loc><lastmod>2026-10-29</lastmod>`) && sitemap.includes(`/blog/${post}</loc><lastmod>2026-10-30</lastmod>`) && llms.includes(`/blog/${gift}`) && llms.includes(`/blog/${post}`),
  noStore: [giftEn, giftZh].every((response) => response.cache?.includes('no-store')),
  redirects: redirectsResult.length === 16 && redirectsResult.every((entry) => entry.passed),
};
const report = { verifiedAt: new Date().toISOString(), deploymentId: inspect.id, readyState: inspect.readyState, ranks: { [post]: slugs.indexOf(post) + 1, [gift]: slugs.indexOf(gift) + 1 }, expectedCompiledHash, redirectsResult, checks, passed: Object.values(checks).every(Boolean) };
await fs.writeFile('outputs/2026-10-31-gift-search-index-continuity-verifier.json', `${JSON.stringify(report, null, 2)}\n`);
console.log(JSON.stringify(report, null, 2));
if (!report.passed) process.exitCode = 1;
