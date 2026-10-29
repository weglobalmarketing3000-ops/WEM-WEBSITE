import fs from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const origin = path.join(root, 'outputs/2026-10-29-gift-search-origin/patch');
const patch = path.join(root, 'outputs/patches/2026-10-29-gift-search-current-repair');
const slug = 'tiktok-shop-bfcm-2026-gift-search-product-page';
const articleRelative = `blog/${slug}.html`;
const articlePath = path.join(patch, articleRelative);
const visualDirectory = path.join(patch, 'blog', slug);
const assets = path.join(root, 'outputs/2026-09-30-bfcm-wendy-series/assets');
const covers = path.join(root, 'outputs/2026-10-29-gift-search-cover-edits');
const acceptedRedirectConfig = path.join(root, 'outputs/patches/2026-10-28-live-event-current-repair/vercel.json');
const acceptedLiveEventRepair = path.join(root, 'outputs/patches/2026-10-28-live-event-current-repair/blog');

await fs.rm(patch, { recursive: true, force: true });
await fs.cp(origin, patch, { recursive: true });
await fs.copyFile(acceptedRedirectConfig, path.join(patch, 'vercel.json'));
await fs.mkdir(visualDirectory, { recursive: true });
await fs.mkdir(path.join(patch, 'blog', 'tiktok-shop-bfcm-2026-live-event-planning'), { recursive: true });
await Promise.all([
  fs.copyFile(path.join(assets, '03-gift-search-gate-en.svg'), path.join(visualDirectory, 'gift-readiness-gate-en-v1.svg')),
  fs.copyFile(path.join(assets, '03-gift-search-gate-zh.svg'), path.join(visualDirectory, 'gift-readiness-gate-zh-v1.svg')),
  fs.copyFile(path.join(covers, 'hero-en-v2.png'), path.join(patch, 'blog', `hero-${slug}-en-v2.png`)),
  fs.copyFile(path.join(covers, 'hero-zh-v2.png'), path.join(patch, 'blog', `hero-${slug}-zh-v2.png`)),
  fs.copyFile(path.join(covers, 'hero-en-v2.jpg'), path.join(patch, 'blog', 'optimized', `hero-${slug}-en-v2.jpg`)),
  fs.copyFile(path.join(covers, 'hero-zh-v2.jpg'), path.join(patch, 'blog', 'optimized', `hero-${slug}-zh-v2.jpg`)),
  fs.copyFile(path.join(covers, 'thumb-en-v2.jpg'), path.join(patch, 'blog', 'thumbs', `hero-${slug}-en-v2.jpg`)),
  fs.copyFile(path.join(covers, 'thumb-zh-v2.jpg'), path.join(patch, 'blog', 'thumbs', `hero-${slug}-zh-v2.jpg`)),
  fs.copyFile(path.join(acceptedLiveEventRepair, 'tiktok-shop-bfcm-2026-live-event-planning.html'), path.join(patch, 'blog', 'tiktok-shop-bfcm-2026-live-event-planning.html')),
  fs.copyFile(path.join(acceptedLiveEventRepair, 'tiktok-shop-bfcm-2026-live-event-planning', 'readiness-gate-en-v1.svg'), path.join(patch, 'blog', 'tiktok-shop-bfcm-2026-live-event-planning', 'readiness-gate-en-v1.svg')),
  fs.copyFile(path.join(acceptedLiveEventRepair, 'tiktok-shop-bfcm-2026-live-event-planning', 'readiness-gate-zh-v1.svg'), path.join(patch, 'blog', 'tiktok-shop-bfcm-2026-live-event-planning', 'readiness-gate-zh-v1.svg')),
]);
for (const name of ['gift-readiness-gate-en-v1.svg', 'gift-readiness-gate-zh-v1.svg']) {
  const target = path.join(visualDirectory, name);
  const svg = (await fs.readFile(target, 'utf8')).replace(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 220"',
    '<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="220" viewBox="0 0 1000 220"',
  );
  await fs.writeFile(target, svg);
}

const oldCoverStem = `hero-${slug}`;
for (const relative of [articleRelative, 'BlogList.jsx', 'BlogList.compiled.js', 'blog.html']) {
  const target = path.join(patch, relative);
  let text = await fs.readFile(target, 'utf8');
  text = text
    .replaceAll(`${oldCoverStem}-en-v1.png`, `${oldCoverStem}-en-v2.png`)
    .replaceAll(`${oldCoverStem}-zh-v1.png`, `${oldCoverStem}-zh-v2.png`)
    .replaceAll(`${oldCoverStem}-en-v1.jpg`, `${oldCoverStem}-en-v2.jpg`)
    .replaceAll(`${oldCoverStem}-zh-v1.jpg`, `${oldCoverStem}-zh-v2.jpg`);
  if (relative === 'BlogList.jsx' || relative === 'BlogList.compiled.js') {
    text = text
      .replace(
        /("slug"\s*:\s*"tiktok-shop-bfcm-2026-gift-search-product-page"[\s\S]*?"date"\s*:\s*\{\s*"en"\s*:\s*)"Oct 28, 2026"([\s\S]*?"zh"\s*:\s*)"2026 年 10 月 28 日"/,
        '$1"Oct 29, 2026"$2"2026 年 10 月 29 日"',
      )
      .replace(
        /(slug\s*:\s*"tiktok-shop-bfcm-2026-gift-search-product-page"[\s\S]*?date\s*:\s*\{\s*en\s*:\s*)"Oct 28, 2026"([\s\S]*?zh\s*:\s*)"2026 年 10 月 28 日"/,
        '$1"Oct 29, 2026"$2"2026 年 10 月 29 日"',
      );
  }
  await fs.writeFile(target, text);
}

let html = await fs.readFile(articlePath, 'utf8');
html = html.replaceAll(
  'https://www.weglobalmarketing.com/showcase#case-beauty-gmv-growth',
  'https://www.weglobalmarketing.com/showcase#case-fashion-cold-start',
);
html = html.replace(
  '<h2>Keep the gift promise tied to inventory and delivery</h2>',
  '<figure><img src="/blog/tiktok-shop-bfcm-2026-gift-search-product-page/gift-readiness-gate-en-v1.svg" alt="Four gift-readiness decisions before scaling TikTok Shop BFCM discovery"><figcaption>Scale only when the recipient, included items, options and delivery promise are all clear.</figcaption></figure><h2>Keep the gift promise tied to inventory and delivery</h2>',
);
html = html.replace(
  '<h2>送礼承诺，还要回到库存和配送</h2>',
  '<figure><img src="/blog/tiktok-shop-bfcm-2026-gift-search-product-page/gift-readiness-gate-zh-v1.svg" alt="TikTok Shop 黑五送礼搜索放大前的四项核对"><figcaption>适合谁、收到什么、选项是否清楚、配送是否准确，都确认后再放大。</figcaption></figure><h2>送礼承诺，还要回到库存和配送</h2>',
);
html = html.replace(
  'Reviewed September 30, 2026:',
  'Source review refreshed October 29, 2026:',
);
html = html.replace(
  '核对日期为 2026 年 9 月 30 日。',
  '材料已于 2026 年 10 月 29 日重新核对。',
);
html = html.replace(
  '<p class="en">Turn promotion reporting into an evidence-led growth decision.</p><p class="zh">把促销报表变成有证据、可复核的增长决定。</p>',
  '<p class="en">Connect one credible gift idea to a product page shoppers can find, understand and choose with confidence.</p><p class="zh">把一个可信的送礼理由接到用户找得到、看得懂、选得明白的商品页。</p>',
);

for (const required of [
  'gift-readiness-gate-en-v1.svg',
  'gift-readiness-gate-zh-v1.svg',
  'Source review refreshed October 29, 2026:',
  '材料已于 2026 年 10 月 29 日重新核对。',
  'case-fashion-cold-start',
  'Connect one credible gift idea to a product page',
  `${oldCoverStem}-en-v2.png`,
  `${oldCoverStem}-zh-v2.png`,
]) {
  if (!html.includes(required)) throw new Error(`missing required repaired content: ${required}`);
}
for (const stale of ['case-beauty-gmv-growth', 'Turn promotion reporting', 'September 30, 2026', '2026 年 9 月 30 日', `${oldCoverStem}-en-v1.png`, `${oldCoverStem}-zh-v1.png`]) {
  if (html.includes(stale)) throw new Error(`stale article content remains: ${stale}`);
}
await fs.writeFile(articlePath, html);
console.log(JSON.stringify({ patch, articleRelative, expectedFiles: 26 }, null, 2));
