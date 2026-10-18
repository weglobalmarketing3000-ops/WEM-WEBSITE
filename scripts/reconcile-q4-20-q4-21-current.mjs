import fs from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const baseline = path.join(root, 'outputs/2026-10-18-current-live-baseline/ui_kits/website');
const shared = ['BlogList.compiled.js', 'BlogList.jsx', 'blog.html', 'llms.txt', 'sitemap.xml', 'assets/we-logo.png'];
const targets = [
  {
    patch: '2026-10-18-q4-20-current-accepted',
    files: [
      'blog/tiktok-shop-bfcm-2026-holiday-returns-liability.html',
      'blog/hero-tiktok-shop-bfcm-2026-holiday-returns-liability-en-v1.png',
      'blog/hero-tiktok-shop-bfcm-2026-holiday-returns-liability-zh-v1.png',
      'blog/optimized/hero-tiktok-shop-bfcm-2026-holiday-returns-liability-en-v1.jpg',
      'blog/optimized/hero-tiktok-shop-bfcm-2026-holiday-returns-liability-zh-v1.jpg',
      'blog/thumbs/hero-tiktok-shop-bfcm-2026-holiday-returns-liability-en-v1.jpg',
      'blog/thumbs/hero-tiktok-shop-bfcm-2026-holiday-returns-liability-zh-v1.jpg',
      'blog/q4-20-returns/decision-en-v1.svg', 'blog/q4-20-returns/decision-zh-v1.svg',
      'blog/q4-20-returns/liability-en-v1.svg', 'blog/q4-20-returns/liability-zh-v1.svg',
    ],
  },
  {
    patch: '2026-10-18-q4-21-current-accepted',
    files: [
      'blog/tiktok-shop-aftersales-automation-approval-rules.html',
      'blog/hero-tiktok-shop-aftersales-automation-approval-rules-en-v1.png',
      'blog/hero-tiktok-shop-aftersales-automation-approval-rules-zh-v1.png',
      'blog/optimized/hero-tiktok-shop-aftersales-automation-approval-rules-en-v1.jpg',
      'blog/optimized/hero-tiktok-shop-aftersales-automation-approval-rules-zh-v1.jpg',
      'blog/thumbs/hero-tiktok-shop-aftersales-automation-approval-rules-en-v1.jpg',
      'blog/thumbs/hero-tiktok-shop-aftersales-automation-approval-rules-zh-v1.jpg',
      'blog/q4-21-automation/loop-en-v1.svg', 'blog/q4-21-automation/loop-zh-v1.svg',
      'blog/q4-21-automation/matrix-en-v1.svg', 'blog/q4-21-automation/matrix-zh-v1.svg',
    ],
  },
];

for (const target of targets) {
  const destination = path.join(root, 'outputs/patches', target.patch);
  for (const relative of [...shared, ...target.files]) {
    await fs.mkdir(path.dirname(path.join(destination, relative)), { recursive: true });
    await fs.copyFile(path.join(baseline, relative), path.join(destination, relative));
  }
  if (target.patch.includes('q4-21')) {
    const article = path.join(destination, 'blog/tiktok-shop-aftersales-automation-approval-rules.html');
    const source = await fs.readFile(article, 'utf8');
    await fs.writeFile(article, source.replaceAll(
      '用权限、证据和停止条件管理 TikTok Shop 售后自动化。',
      '用权限、证据、停止条件与最终状态回读管理 TikTok Shop 退款、退货和换货自动化。',
    ));
  }
  console.log(`${target.patch}: ${shared.length + target.files.length} files`);
}
