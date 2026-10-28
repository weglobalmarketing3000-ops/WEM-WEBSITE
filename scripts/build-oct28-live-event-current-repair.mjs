import fs from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const origin = path.join(root, 'outputs/2026-10-28-live-event-origin/patch');
const patch = path.join(root, 'outputs/patches/2026-10-28-live-event-current-repair');
const slug = 'tiktok-shop-bfcm-2026-live-event-planning';
const articleRelative = `blog/${slug}.html`;
const articlePath = path.join(patch, articleRelative);
const visualDirectory = path.join(patch, 'blog', slug);
const assets = path.join(root, 'outputs/2026-09-30-bfcm-wendy-series/assets');
const acceptedRedirectConfig = path.join(root, 'outputs/patches/2026-10-27-q4-30-creator-runway-current-repair/vercel.json');

await fs.rm(patch, { recursive: true, force: true });
await fs.cp(origin, patch, { recursive: true });
await fs.copyFile(acceptedRedirectConfig, path.join(patch, 'vercel.json'));
await fs.mkdir(visualDirectory, { recursive: true });
await Promise.all([
  fs.copyFile(path.join(assets, '02-live-event-gate-en.svg'), path.join(visualDirectory, 'readiness-gate-en-v1.svg')),
  fs.copyFile(path.join(assets, '02-live-event-gate-zh.svg'), path.join(visualDirectory, 'readiness-gate-zh-v1.svg')),
]);
for (const name of ['readiness-gate-en-v1.svg', 'readiness-gate-zh-v1.svg']) {
  const target = path.join(visualDirectory, name);
  const svg = (await fs.readFile(target, 'utf8')).replace(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 220"',
    '<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="220" viewBox="0 0 1000 220"',
  );
  await fs.writeFile(target, svg);
}

let html = await fs.readFile(articlePath, 'utf8');
html = html.replaceAll(
  'https://www.weglobalmarketing.com/showcase#case-beauty-gmv-growth',
  'https://www.weglobalmarketing.com/showcase#case-wellness-affiliate-live',
);
html = html.replace(
  '<p>Give each review one next decision: keep the demonstration, shorten the explanation, remove an unclear item, change the host-product match, or test an offer with better economics. A review that only says “go live more” leaves the important work unresolved.</p><h2>Let inventory and customer experience set the scale</h2>',
  '<p>Give each review one next decision: keep the demonstration, shorten the explanation, remove an unclear item, change the host-product match, or test an offer with better economics. A review that only says “go live more” leaves the important work unresolved.</p><figure><img src="/blog/tiktok-shop-bfcm-2026-live-event-planning/readiness-gate-en-v1.svg" alt="Four readiness decisions before scaling a TikTok Shop BFCM LIVE plan"><figcaption>Scale only after the offer, inventory, host and customer-support coverage are confirmed.</figcaption></figure><h2>Let inventory and customer experience set the scale</h2>',
);
html = html.replace(
  '<p>每次复盘至少得到一个具体决定：保留哪段演示，哪段解释缩短，哪个商品先移出，是否更换主播与商品匹配，或是否测试利润更合理的优惠。只得出“多播一点”，关键问题仍没解决。</p><h2>放大之前，先让库存和体验跟得上</h2>',
  '<p>每次复盘至少得到一个具体决定：保留哪段演示，哪段解释缩短，哪个商品先移出，是否更换主播与商品匹配，或是否测试利润更合理的优惠。只得出“多播一点”，关键问题仍没解决。</p><figure><img src="/blog/tiktok-shop-bfcm-2026-live-event-planning/readiness-gate-zh-v1.svg" alt="TikTok Shop 黑五 LIVE 放大前的四项核对"><figcaption>Offer、库存、主播测试和客服覆盖都确认后，再扩大场次。</figcaption></figure><h2>放大之前，先让库存和体验跟得上</h2>',
);
html = html.replace(
  'Source review: September 30, 2026.',
  'Source review refreshed: October 28, 2026.',
);
html = html.replace(
  '材料核对日期为 2026 年 9 月 30 日。',
  '材料已于 2026 年 10 月 28 日重新核对。',
);
html = html.replace(
  '<p class="en">Turn promotion reporting into an evidence-led growth decision.</p><p class="zh">把促销报表变成有证据、可复核的增长决定。</p>',
  '<p class="en">Turn each BFCM LIVE session into a clear buyer task, operating test and next decision.</p><p class="zh">让每场黑五 LIVE 都有明确的用户任务、运营测试和下一步决定。</p>',
);

for (const required of [
  'readiness-gate-en-v1.svg',
  'readiness-gate-zh-v1.svg',
  'Source review refreshed: October 28, 2026.',
  '材料已于 2026 年 10 月 28 日重新核对。',
  'case-wellness-affiliate-live',
  'Turn each BFCM LIVE session into a clear buyer task',
]) {
  if (!html.includes(required)) throw new Error(`missing required repaired content: ${required}`);
}
if (html.includes('case-beauty-gmv-growth') || html.includes('Turn promotion reporting')) {
  throw new Error('stale provenance or generic CTA remains');
}
await fs.writeFile(articlePath, html);
console.log(JSON.stringify({ patch, files: (await fs.readdir(patch)).length, articleRelative }, null, 2));
