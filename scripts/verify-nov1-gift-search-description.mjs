import crypto from 'node:crypto';
import fs from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { chromium } = require('/Users/wendylin/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const expectedDeployment = process.argv[2] || '';
const www = 'https://www.weglobalmarketing.com';
const apex = 'https://weglobalmarketing.com';
const gift = 'tiktok-shop-bfcm-2026-gift-search-product-page';
const post = 'tiktok-shop-bfcm-post-sale-continuation';
const enDescription = 'Connect TikTok Shop BFCM gift discovery to a clear product page with accurate product language, variants, offer details and delivery expectations.';
const zhDescription = '把 TikTok Shop 黑五送礼内容接到搜索和商品页，用准确名称、变体、优惠与配送信息帮助用户找到并选对商品。';
const wrongDescription = '黑五 LIVE 先确定每场任务，再安排主播、主推品、Offer、预热视频与复盘。结合 WE Marketing 健康类案例，连接产品教育和直播执行。';
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
const giftHtml = giftEn.bytes.toString();
const slugs = [...list.matchAll(/(?:\{|,)\"?slug\"?:\"([a-z0-9-]+)\"/g)].map((match) => match[1]);
const compiledHash = hash(listResponse.bytes).slice(0, 12);
const expectedCoverEn = await fs.readFile('outputs/patches/2026-10-30-gift-search-final-expected/blog/hero-tiktok-shop-bfcm-2026-gift-search-product-page-en-v2.png');
const expectedCoverZh = await fs.readFile('outputs/patches/2026-10-30-gift-search-final-expected/blog/hero-tiktok-shop-bfcm-2026-gift-search-product-page-zh-v2.png');

const rendered = [];
const browser = await chromium.launch({ headless: true, executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' });
try {
  for (const viewport of [{ name: 'desktop', width: 1440, height: 1000 }, { name: 'mobile', width: 390, height: 844 }]) for (const lang of ['en', 'zh']) {
    const page = await browser.newPage({ viewport });
    const errors = [];
    page.on('pageerror', (error) => errors.push(error.message));
    const response = await page.goto(`${www}/blog/${gift}${lang === 'zh' ? '?lang=zh' : ''}`, { waitUntil: 'networkidle' });
    const state = await page.evaluate(() => ({ htmlLang: document.documentElement.lang, title: document.title, description: document.querySelector('meta[name=description]')?.content, canonical: document.querySelector('link[rel=canonical]')?.href, overflow: document.documentElement.scrollWidth > innerWidth, images: [...document.images].map((image) => image.naturalWidth), body: document.body.innerText }));
    const switchLink = page.locator('.switch a:visible').first();
    await Promise.all([page.waitForLoadState('networkidle'), switchLink.click()]);
    const switched = await page.evaluate(() => ({ htmlLang: document.documentElement.lang, description: document.querySelector('meta[name=description]')?.content, canonical: document.querySelector('link[rel=canonical]')?.href }));
    rendered.push({ viewport: viewport.name, lang, status: response?.status(), errors, ...state, switched });
    await page.close();
  }
} finally { await browser.close(); }

const redirectResults = [];
for (const domain of [www, apex]) for (const [from, to] of redirects) for (const lang of ['', '?lang=zh']) {
  const isApex = domain === apex;
  const response = await get(domain, `/blog/${from}${lang}`, isApex ? 'follow' : 'manual');
  const location = response.location ? new URL(response.location, domain) : null;
  const final = new URL(response.url);
  redirectResults.push({ domain, from, lang: lang || 'en', passed: isApex
    ? response.status === 200 && final.pathname === `/blog/${to}` && (!lang || final.searchParams.get('lang') === 'zh')
    : response.status === 308 && location?.pathname === `/blog/${to}` && (!lang || location.searchParams.get('lang') === 'zh') });
}
const checks = {
  customDomainDeployment: inspect.id === expectedDeployment,
  deploymentReady: inspect.readyState === 'READY',
  rankAndCache: slugs[0] === post && slugs[1] === gift && blog.includes(`BlogList.compiled.js?v=${compiledHash}`),
  articleRoutes: giftEn.status === 200 && giftZh.status === 200 && postEn.status === 200 && postZh.status === 200,
  articleSchema: giftHtml.includes(`\"description\":\"${zhDescription}\"`) && giftHtml.includes('\"datePublished\":\"2026-10-29\"') && !giftHtml.includes(wrongDescription),
  renderedDescriptionParity: rendered.every((entry) => entry.status === 200 && entry.description === (entry.lang === 'zh' ? zhDescription : enDescription) && entry.switched.description === (entry.lang === 'zh' ? enDescription : zhDescription) && !entry.body.includes('undefined') && !entry.overflow && entry.images.every((width) => width > 0) && entry.errors.length === 0),
  renderedLanguageSwitch: rendered.every((entry) => entry.htmlLang === (entry.lang === 'zh' ? 'zh-CN' : 'en') && entry.switched.htmlLang === (entry.lang === 'zh' ? 'en' : 'zh-CN')),
  v2CoverHashes: hash(coverEn.bytes) === hash(expectedCoverEn) && hash(coverZh.bytes) === hash(expectedCoverZh),
  discovery: sitemap.includes(`/blog/${gift}</loc><lastmod>2026-10-29</lastmod>`) && sitemap.includes(`/blog/${post}</loc><lastmod>2026-10-30</lastmod>`) && llms.includes(`/blog/${gift}`) && llms.includes(`/blog/${post}`),
  noStore: [giftEn, giftZh].every((response) => response.cache?.includes('no-store')),
  redirects: redirectResults.length === 16 && redirectResults.every((entry) => entry.passed),
};
const report = { verifiedAt: new Date().toISOString(), deploymentId: inspect.id, readyState: inspect.readyState, compiledHash, rendered: rendered.map(({ body, ...entry }) => entry), redirectResults, checks, passed: Object.values(checks).every(Boolean) };
await fs.writeFile('outputs/2026-11-01-gift-search-zh-description-verifier.json', `${JSON.stringify(report, null, 2)}\n`);
console.log(JSON.stringify(report, null, 2));
if (!report.passed) process.exitCode = 1;
