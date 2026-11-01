import crypto from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const base = 'https://www.weglobalmarketing.com';
const deploymentId = 'dpl_AsQwpZBQCtuhbGxNKnNDTkp7s2gz';
const deploymentUrl = 'https://wem-website-az4ao5xk9-wem1.vercel.app';
const slug = 'tiktok-shop-bfcm-2026-gift-search-product-page';
const originDir = path.join(root, 'outputs/2026-11-01-gift-search-zh-description-origin');
const patchDir = path.join(root, 'outputs/patches/2026-11-01-gift-search-zh-description');
const wrong = '黑五 LIVE 先确定每场任务，再安排主播、主推品、Offer、预热视频与复盘。结合 WE Marketing 健康类案例，连接产品教育和直播执行。';
const correct = '把 TikTok Shop 黑五送礼内容接到搜索和商品页，用准确名称、变体、优惠与配送信息帮助用户找到并选对商品。';
const hash = (value) => crypto.createHash('sha256').update(value).digest('hex');
const get = async (route) => {
  const response = await fetch(`${base}${route}${route.includes('?') ? '&' : '?'}readback=${Date.now()}`, { redirect: 'follow', headers: { 'cache-control': 'no-cache', pragma: 'no-cache' } });
  if (!response.ok) throw new Error(`${route} returned ${response.status}`);
  return response.text();
};

await fs.mkdir(originDir, { recursive: true });
await fs.mkdir(path.join(patchDir, 'blog'), { recursive: true });
const [article, list, blog, sitemap, llms] = await Promise.all([
  get(`/blog/${slug}`), get('/BlogList.compiled.js'), get('/blog'), get('/sitemap.xml'), get('/llms.txt'),
]);
for (const [name, value] of Object.entries({
  [`blog/${slug}.html`]: article, 'BlogList.compiled.js': list, 'blog.html': blog, 'sitemap.xml': sitemap, 'llms.txt': llms,
})) {
  const destination = path.join(originDir, name);
  await fs.mkdir(path.dirname(destination), { recursive: true });
  await fs.writeFile(destination, value);
}
const wrongAssignment = `document.querySelector('meta[name=description]').content='${wrong}';`;
const correctAssignment = `document.querySelector('meta[name=description]').content='${correct}';`;
if (article.split(wrongAssignment).length !== 2) throw new Error('expected exactly one incorrect Chinese runtime description');
if (!article.includes(`\"description\":\"${correct}\"`)) throw new Error('approved Chinese JSON-LD description not found');
const repairedArticle = article.replace(wrongAssignment, correctAssignment);
if (repairedArticle.includes(wrong) || !repairedArticle.includes(correctAssignment)) throw new Error('description repair failed');
await fs.writeFile(path.join(patchDir, 'blog', `${slug}.html`), repairedArticle);
await fs.copyFile(path.join(root, 'outputs/patches/2026-10-31-gift-search-index-continuity/vercel.json'), path.join(patchDir, 'vercel.json'));

const report = {
  reconciledAt: new Date().toISOString(), deploymentId, deploymentUrl,
  deploymentReadyState: 'READY', deploymentCreatedAt: '2026-10-31T13:29:54.366Z', deploymentCreatedAtPt: '2026-10-31 06:29:54 PDT',
  deploymentMetadata: null, gitSource: null, planAuthorizationForNovember1: 'not_found',
  preservedIndexSha256: hash(list), preservedIndexCacheVersion: (blog.match(/BlogList\.compiled\.js\?v=([a-f0-9]+)/) || [])[1],
  preservedPostSale: list.includes('tiktok-shop-bfcm-post-sale-continuation'),
  preservedGiftIndexDate: list.includes('Oct 29, 2026') && list.includes('2026 \\u5E74 10 \\u6708 29 \\u65E5'),
  preservedGiftV2Covers: list.includes(`hero-${slug}-en-v2.png`) && list.includes(`hero-${slug}-zh-v2.png`),
  sitemapGiftDate: sitemap.includes(`/blog/${slug}</loc><lastmod>2026-10-29</lastmod>`),
  llmsGiftPresent: llms.includes(`/blog/${slug}`),
  originalArticleSha256: hash(article), repairedArticleSha256: hash(repairedArticle),
  incorrectDescription: wrong, approvedDescription: correct,
};
await fs.writeFile(path.join(originDir, 'report.json'), `${JSON.stringify(report, null, 2)}\n`);
console.log(JSON.stringify({ patchDir, report }, null, 2));
