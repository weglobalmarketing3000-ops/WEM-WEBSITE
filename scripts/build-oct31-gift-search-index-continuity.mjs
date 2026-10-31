import crypto from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';
import vm from 'node:vm';

const root = path.resolve(import.meta.dirname, '..');
const base = 'https://www.weglobalmarketing.com';
const deploymentId = 'dpl_F2YdBewCQtCUihMT97AEUaVE8un4';
const deploymentUrl = 'https://wem-website-g5kjg54in-wem1.vercel.app';
const slug = 'tiktok-shop-bfcm-2026-gift-search-product-page';
const preservedSlug = 'tiktok-shop-bfcm-post-sale-continuation';
const originDir = path.join(root, 'outputs/2026-10-31-gift-search-index-origin');
const patchDir = path.join(root, 'outputs/patches/2026-10-31-gift-search-index-continuity');

const get = async (route) => {
  const response = await fetch(`${base}${route}${route.includes('?') ? '&' : '?'}readback=${Date.now()}`, { redirect: 'follow' });
  if (!response.ok) throw new Error(`${route} returned ${response.status}`);
  return response.text();
};
const sha = (value) => crypto.createHash('sha256').update(value).digest('hex');

await fs.mkdir(originDir, { recursive: true });
await fs.mkdir(patchDir, { recursive: true });
const [liveList, liveCompiled, liveBlog, liveSitemap, liveLlms] = await Promise.all([
  get('/BlogList.jsx'), get('/BlogList.compiled.js'), get('/blog'), get('/sitemap.xml'), get('/llms.txt'),
]);
for (const [name, value] of Object.entries({
  'BlogList.jsx': liveList,
  'BlogList.compiled.js': liveCompiled,
  'blog.html': liveBlog,
  'sitemap.xml': liveSitemap,
  'llms.txt': liveLlms,
})) await fs.writeFile(path.join(originDir, name), value);

const marker = `\"slug\":\"${slug}\"`;
const start = liveList.indexOf(marker);
if (start < 0) throw new Error('gift-search entry not found');
const next = liveList.indexOf('},{\"slug\":', start + marker.length);
const end = next < 0 ? liveList.indexOf('];', start) : next + 1;
if (end < 0) throw new Error('gift-search entry boundary not found');
const originalEntry = liveList.slice(start - 1, end);
let correctedEntry = originalEntry;
correctedEntry = correctedEntry.replace('\"date\":{\"en\":\"Oct 28, 2026\",\"zh\":\"2026 年 10 月 28 日\"}', '\"date\":{\"en\":\"Oct 29, 2026\",\"zh\":\"2026 年 10 月 29 日\"}');
correctedEntry = correctedEntry.replaceAll(`hero-${slug}-en-v1.png`, `hero-${slug}-en-v2.png`);
correctedEntry = correctedEntry.replaceAll(`hero-${slug}-zh-v1.png`, `hero-${slug}-zh-v2.png`);
if (correctedEntry === originalEntry) throw new Error('gift-search entry was not repaired');
if (!correctedEntry.includes('Oct 29, 2026') || !correctedEntry.includes(`hero-${slug}-en-v2.png`) || !correctedEntry.includes(`hero-${slug}-zh-v2.png`)) throw new Error('gift-search repair incomplete');

const repairedList = `${liveList.slice(0, start - 1)}${correctedEntry}${liveList.slice(end)}`;
if (!repairedList.includes(`\"slug\":\"${preservedSlug}\"`)) throw new Error('newer post-sale entry was not preserved');
const sandbox = {};
vm.createContext(sandbox);
vm.runInContext(await fs.readFile(path.join(root, '.cache/babel-standalone-7.29.0.min.js'), 'utf8'), sandbox);
const repairedCompiled = `${sandbox.Babel.transform(repairedList, { presets: [['react', { runtime: 'classic' }]], comments: false, compact: true, minified: true, sourceType: 'script' }).code}\n`;
const version = sha(repairedCompiled).slice(0, 12);
const repairedBlog = liveBlog.replace(/BlogList\.compiled\.js\?v=[^\"']+/, `BlogList.compiled.js?v=${version}`);
if (!repairedBlog.includes(`BlogList.compiled.js?v=${version}`)) throw new Error('blog cache key was not repaired');

await fs.writeFile(path.join(patchDir, 'BlogList.jsx'), repairedList);
await fs.writeFile(path.join(patchDir, 'BlogList.compiled.js'), repairedCompiled);
await fs.writeFile(path.join(patchDir, 'blog.html'), repairedBlog);
await fs.copyFile(path.join(root, 'outputs/patches/2026-10-30-gift-search-final-expected/vercel.json'), path.join(patchDir, 'vercel.json'));

const report = {
  reconciledAt: new Date().toISOString(), deploymentId, deploymentUrl,
  deploymentReadyState: 'READY', deploymentCreatedAt: '2026-10-31T10:20:39.972Z',
  deploymentCreatedAtPt: '2026-10-31 03:20:39 PDT', deploymentMetadata: null, gitSource: null,
  planAuthorizationForPreservedPostSale: 'not_found', preservedUnrelatedSlug: preservedSlug,
  repairedSlug: slug, repairedDate: '2026-10-29', repairedCoverVersion: 'v2',
  sitemapGiftDateCorrectBeforeRepair: liveSitemap.includes(`/blog/${slug}</loc><lastmod>2026-10-29</lastmod>`),
  sitemapPreservedPostSale: liveSitemap.includes(`/blog/${preservedSlug}</loc><lastmod>2026-10-30</lastmod>`),
  llmsGiftPresent: liveLlms.includes(`/blog/${slug}`), llmsPreservedPostSale: liveLlms.includes(`/blog/${preservedSlug}`),
  originalHashes: { list: sha(liveList), compiled: sha(liveCompiled), blog: sha(liveBlog), sitemap: sha(liveSitemap), llms: sha(liveLlms) },
  repairedHashes: { list: sha(repairedList), compiled: sha(repairedCompiled), blog: sha(repairedBlog) },
  cacheVersion: version,
};
await fs.writeFile(path.join(originDir, 'report.json'), `${JSON.stringify(report, null, 2)}\n`);
console.log(JSON.stringify({ patchDir, report }, null, 2));
