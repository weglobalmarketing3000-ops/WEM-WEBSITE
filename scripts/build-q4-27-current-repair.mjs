import fs from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const live = path.join(root, 'outputs/2026-10-23-current-live-baseline/ui_kits/website');
const patch = path.join(root, 'outputs/patches/2026-10-23-q4-27-better-price-rewards-repair');
const slug = 'tiktok-shop-bfcm-better-price-rewards-margin-returns-fees';
const article = `blog/${slug}.html`;
const copies = [
  'BlogList.compiled.js', 'BlogList.jsx', 'assets/we-logo.png', 'blog.html', 'llms.txt', 'sitemap.xml',
  article,
  `blog/hero-${slug}-en-v1.png`, `blog/hero-${slug}-zh-v1.png`,
  `blog/optimized/hero-${slug}-en-v1.jpg`, `blog/optimized/hero-${slug}-zh-v1.jpg`,
  `blog/thumbs/hero-${slug}-en-v1.jpg`, `blog/thumbs/hero-${slug}-zh-v1.jpg`,
  'blog/q4-27-better-price-rewards/sku-check-en-v1.svg',
  'blog/q4-27-better-price-rewards/sku-check-zh-v1.svg',
];

await fs.mkdir(patch, { recursive: true });
for (const relative of copies) {
  const destination = path.join(patch, relative);
  await fs.mkdir(path.dirname(destination), { recursive: true });
  await fs.copyFile(path.join(live, relative), destination);
}

const svg = ({ title, subtitle, rows }) => `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="680" viewBox="0 0 1200 680" role="img" aria-labelledby="title desc">
  <title id="title">${title}</title><desc id="desc">${subtitle}</desc>
  <rect width="1200" height="680" rx="34" fill="#f7f5f1"/><rect x="2" y="2" width="1196" height="676" rx="32" fill="none" stroke="#ded9cf" stroke-width="4"/>
  <rect x="64" y="62" width="10" height="112" rx="5" fill="#ff1493"/>
  <text x="104" y="110" font-family="Arial, Helvetica, sans-serif" font-size="42" font-weight="800" fill="#171717">${title}</text>
  <text x="104" y="154" font-family="Arial, Helvetica, sans-serif" font-size="23" fill="#37332f">${subtitle}</text>
  ${rows.map((row, index) => {
    const y = 218 + index * 98;
    return `<rect x="66" y="${y}" width="1068" height="76" rx="18" fill="#ffffff" stroke="#ded9cf" stroke-width="2"/><circle cx="112" cy="${y + 38}" r="17" fill="#2457d6"/><text x="112" y="${y + 45}" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="20" font-weight="800" fill="#ffffff">${index + 1}</text><text x="150" y="${y + 32}" font-family="Arial, Helvetica, sans-serif" font-size="24" font-weight="800" fill="#171717">${row[0]}</text><text x="150" y="${y + 59}" font-family="Arial, Helvetica, sans-serif" font-size="19" fill="#625d56">${row[1]}</text><text x="1060" y="${y + 48}" text-anchor="end" font-family="Arial, Helvetica, sans-serif" font-size="22" font-weight="800" fill="#2457d6">${row[2]}</text>`;
  }).join('\n  ')}
  <rect x="66" y="622" width="1068" height="4" rx="2" fill="url(#accent)"/><defs><linearGradient id="accent"><stop stop-color="#2457d6"/><stop offset="1" stop-color="#ff3b9d"/></linearGradient></defs>
</svg>\n`;

const enSvg = svg({
  title: 'EXPIRY AND REVIEW PLAN',
  subtitle: 'A reward tier stays valid only while its inputs stay valid.',
  rows: [
    ['PRICE OR BENEFIT CHANGES', 'Re-read the live campaign threshold and visible account benefit.', 'REVISE'],
    ['FEES OR RETURN RATE MOVES', 'Refresh contribution with confirmed costs; keep unknowns visible.', 'REMODEL'],
    ['INVENTORY OR SERVICE LOAD SHIFTS', 'Check the SKU against its fulfillment and support boundary.', 'RESTRICT'],
    ['REVIEW DATE ARRIVES', 'Save the source, selected tier and registration readback.', 'KEEP / HOLD'],
  ],
});
const zhSvg = svg({
  title: '到期与复核计划',
  subtitle: '只有输入条件仍然成立，奖励层级才继续有效。',
  rows: [
    ['价格或权益变化', '重新读取实时活动门槛与账户当前显示的权益。', '改价'],
    ['费用或退货率变化', '用已确认成本重算贡献，未知项继续标明待确认。', '重算'],
    ['库存或服务负荷变化', '检查 SKU 是否仍在履约与客服边界内。', '限量'],
    ['到达复核日期', '保存来源、选定层级与报名完成后的读回。', '保留 / 暂缓'],
  ],
});
await fs.writeFile(path.join(patch, 'blog/q4-27-better-price-rewards/expiry-review-en-v1.svg'), enSvg);
await fs.writeFile(path.join(patch, 'blog/q4-27-better-price-rewards/expiry-review-zh-v1.svg'), zhSvg);

const articlePath = path.join(patch, article);
let html = await fs.readFile(articlePath, 'utf8');
const wrongZhDescription = "document.querySelector('meta[name=description]').content='用六张图记录可关联、可复核的 TikTok Shop 退货验货证据。'";
const rightZhDescription = "document.querySelector('meta[name=description]').content='把 TikTok Shop BFCM Better Price Rewards 放进单 SKU 毛利、退货、费用和履约边界后再选择层级。'";
if (!html.includes(wrongZhDescription)) throw new Error('Expected stale Chinese description was not found');
html = html.replace(wrongZhDescription, rightZhDescription);
const enNeedle = '<h2>7. Use registration controls deliberately</h2>';
const zhNeedle = '<h2>7. 有意识地使用报名方式</h2>';
if (!html.includes(enNeedle) || !html.includes(zhNeedle)) throw new Error('Expected article section anchors were not found');
html = html.replace(enNeedle, '<img src="/blog/q4-27-better-price-rewards/expiry-review-en-v1.svg" alt="Better Price Rewards expiry and review plan">' + enNeedle);
html = html.replace(zhNeedle, '<img src="/blog/q4-27-better-price-rewards/expiry-review-zh-v1.svg" alt="Better Price Rewards 到期与复核计划">' + zhNeedle);
await fs.writeFile(articlePath, html);

const files = [];
async function walk(directory) {
  for (const entry of await fs.readdir(directory, { withFileTypes: true })) {
    const absolute = path.join(directory, entry.name);
    if (entry.isDirectory()) await walk(absolute); else files.push(path.relative(patch, absolute));
  }
}
await walk(patch);
if (files.length !== 17) throw new Error(`Expected 17 scoped files, found ${files.length}`);
console.log(JSON.stringify({ patch, files: files.sort() }, null, 2));
