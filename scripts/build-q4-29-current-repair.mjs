import fs from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const base = path.join(root, 'outputs/2026-10-25-current-live-baseline/ui_kits/website/ui_kits/website');
const out = path.join(root, 'outputs/patches/2026-10-25-q4-29-current-repair');
const q429 = 'blog/tiktok-shop-shipping-protection-insurance-evidence.html';
const q428 = 'blog/tiktok-shop-bfcm-virtual-bundles-inventory-returns.html';
const source3 = 'https://seller-us.tiktok.com/university/essay?knowledge_id=2334828973737741';

await fs.rm(out, { recursive: true, force: true });
for (const dir of ['blog/q4-29-shipping-protection']) await fs.mkdir(path.join(out, dir), { recursive: true });
await fs.writeFile(path.join(out, '.wem-delete-paths'), 'blog/tiktok-shop-bfcm-virtual-bundles-offer-inventory-returns.html\n');
for (const file of [q429, q428, 'vercel.json', 'BlogList.jsx', 'BlogList.compiled.js', 'blog.html', 'sitemap.xml', 'llms.txt']) {
  await fs.mkdir(path.dirname(path.join(out, file)), { recursive: true });
  await fs.copyFile(path.join(base, file), path.join(out, file));
}

const esc = value => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
function closeoutSvg(zh = false) {
  const title = zh ? '案件关单读回' : 'CLAIM CLOSEOUT READBACK';
  const subtitle = zh ? '提交不是完成，状态与财务结果必须一起关闭。' : 'Submission is not completion. Close status and finance together.';
  const rows = zh ? [
    ['实时状态', '处理中、获批、拒绝或补充材料，按页面原样保存。'],
    ['决定与金额', '记录决定日期、页面金额和适用包裹，不做推测。'],
    ['财务读回', '把服务费、赔付与 Finance 记录分别核对。'],
    ['负责人和下一步', '未终结案件必须有 Owner、缺失证据与复核日期。'],
  ] : [
    ['LIVE STATUS', 'Save in process, approved, denied or evidence requested exactly as shown.'],
    ['DECISION AND AMOUNT', 'Record the decision date, displayed amount and applicable package.'],
    ['FINANCE READBACK', 'Reconcile the service fee, reimbursement and Finance record separately.'],
    ['OWNER AND NEXT STEP', 'Every open case needs an owner, missing evidence and review date.'],
  ];
  return `<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" width="1400" height="650" viewBox="0 0 1400 650" role="img"><rect width="1400" height="650" rx="34" fill="#f3f0ff"/><text x="64" y="84" font-family="Arial,PingFang SC,sans-serif" font-size="40" font-weight="800" fill="#171717">${esc(title)}</text><text x="64" y="124" font-family="Arial,PingFang SC,sans-serif" font-size="21" fill="#514b57">${esc(subtitle)}</text><rect x="64" y="146" width="150" height="6" rx="3" fill="#ed168c"/>${rows.map(([head,body],i)=>`<g transform="translate(64 ${184+i*108})"><rect width="1272" height="82" rx="21" fill="#fff" stroke="#d8d1ef"/><rect width="270" height="82" rx="21" fill="${i%2?'#ed168c':'#245bd7'}"/><text x="135" y="51" text-anchor="middle" font-family="Arial,PingFang SC,sans-serif" font-size="20" font-weight="800" fill="#fff">${esc(head)}</text><text x="306" y="51" font-family="Arial,PingFang SC,sans-serif" font-size="18" fill="#37332f">${esc(body)}</text></g>`).join('')}<text x="1336" y="624" text-anchor="end" font-family="Arial" font-size="16" font-weight="700" fill="#1746b8">WE MARKETING</text></svg>\n`;
}
await fs.writeFile(path.join(out, 'blog/q4-29-shipping-protection/claim-closeout-en-v1.svg'), closeoutSvg(false));
await fs.writeFile(path.join(out, 'blog/q4-29-shipping-protection/claim-closeout-zh-v1.svg'), closeoutSvg(true));

let shipping = await fs.readFile(path.join(out, q429), 'utf8');
const staleZhDescription = "document.querySelector('meta[name=description]').content='TikTok Shop BFCM Better Price Rewards 先把毛利、退货、费用和单 SKU 贡献算清，再决定报名价格层级。'";
const rightZhDescription = "document.querySelector('meta[name=description]').content='在 TikTok Shop 包裹丢失、破损或 DNR 前，建立可读的物流保障证据链。'";
if (!shipping.includes(staleZhDescription)) throw new Error('q4-29 stale Chinese description not found');
shipping = shipping.replace(staleZhDescription, rightZhDescription);
const oldCitations = '"citation":["https://seller-us.tiktok.com/university/essay?knowledge_id=1043867350730510","https://seller-us.tiktok.com/university/essay?knowledge_id=3569596666382098"]';
const newCitations = `"citation":["https://seller-us.tiktok.com/university/essay?knowledge_id=1043867350730510","https://seller-us.tiktok.com/university/essay?knowledge_id=3569596666382098","${source3}"]`;
if ((shipping.match(new RegExp(oldCitations.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) || []).length !== 2) throw new Error('q4-29 citation arrays not found twice');
shipping = shipping.replaceAll(oldCitations, newCitations);
shipping = shipping.replace('<h2>Read back the result and close the financial loop</h2>', '<img src="/blog/q4-29-shipping-protection/claim-closeout-en-v1.svg" alt="Shipping protection claim closeout readback"><h2>Read back the result and close the financial loop</h2>');
shipping = shipping.replace('<h2>读回结果，并把财务链路关上</h2>', '<img src="/blog/q4-29-shipping-protection/claim-closeout-zh-v1.svg" alt="物流保障案件关单读回"><h2>读回结果，并把财务链路关上</h2>');
shipping = shipping.replace('That sequence is more useful than promising blanket coverage because it exposes exactly which operational fact is still missing.</p>', 'That sequence is more useful than promising blanket coverage because it exposes exactly which operational fact is still missing. Keep the record readable after shift changes, vendor changes and staff turnover.</p>');
shipping = shipping.replace('这比承诺“所有包裹都保障”更有价值，因为它会暴露哪一个运营事实仍然缺失。</p>', '这比承诺“所有包裹都保障”更有价值，因为它会暴露哪一个运营事实仍然缺失。即使换班、换服务商或换负责人，这条记录也必须能独立读懂。</p>');
shipping = shipping.replace('Turn promotion reporting into an evidence-led growth decision.', 'Turn shipping protection into a readable evidence and claim system.');
shipping = shipping.replace('把促销报表变成有证据、可复核的增长决定。', '把物流保障变成有证据、可读回的案件系统。');
await fs.writeFile(path.join(out, q429), shipping);

let bundles = await fs.readFile(path.join(out, q428), 'utf8');
const enAnchor = '<h2>Route returns at component level and whole-bundle level</h2>';
const zhAnchor = '<h2>同时设计组件退货和整套退货</h2>';
if (!bundles.includes(enAnchor) || !bundles.includes(zhAnchor)) throw new Error('q4-28 current article anchors missing');
bundles = bundles.replace(enAnchor, '<img src="/blog/q4-28-virtual-bundles/offer-return-chain-en-v1.svg" alt="Virtual bundle offer to return truth chain">' + enAnchor);
bundles = bundles.replace(zhAnchor, '<img src="/blog/q4-28-virtual-bundles/offer-return-chain-zh-v1.svg" alt="虚拟组合装优惠到退货事实链">' + zhAnchor);
await fs.writeFile(path.join(out, q428), bundles);

const vercelPath = path.join(out, 'vercel.json');
const vercel = JSON.parse(await fs.readFile(vercelPath, 'utf8'));
vercel.redirects = [
  { source: '/blog/tiktok-shop-bfcm-virtual-bundles-offer-inventory-returns', destination: '/blog/tiktok-shop-bfcm-virtual-bundles-inventory-returns', permanent: true },
  { source: '/blog/tiktok-shop-smart-promotion-performance-cost', destination: '/blog/tiktok-shop-smart-promotion-performance-cost-growth', permanent: true },
  { source: '/blog/tiktok-shop-return-inspection-six-photo-evidence', destination: '/blog/tiktok-shop-return-inspection-photo-evidence', permanent: true },
  { source: '/blog/tiktok-shop-bfcm-2026-holiday-return-window-liability', destination: '/blog/tiktok-shop-bfcm-2026-holiday-returns-liability', permanent: true },
];
await fs.writeFile(vercelPath, `${JSON.stringify(vercel, null, 2)}\n`);

const en = shipping.match(/<article lang="en">([\s\S]*?)<\/article>/)?.[1] || '';
const zh = shipping.match(/<article lang="zh-CN">([\s\S]*?)<\/article>/)?.[1] || '';
const words = en.replace(/<[^>]+>/g, ' ').trim().split(/\s+/).length;
const chars = zh.replace(/<[^>]+>/g, '').replace(/\s/g, '').length;
if (words < 1300 || chars < 1800) throw new Error(`content floor failed: ${words}/${chars}`);
if ((en.match(/<img /g) || []).length !== 3 || (zh.match(/<img /g) || []).length !== 3) throw new Error('q4-29 image count failed');
if (shipping.includes('Better Price Rewards 先把毛利') || shipping.includes('Turn promotion reporting')) throw new Error('stale q4-29 copy remains');
const files = [];
async function walk(dir) { for (const entry of await fs.readdir(dir, { withFileTypes: true })) { const p = path.join(dir, entry.name); if (entry.isDirectory()) await walk(p); else files.push(path.relative(out, p)); } }
await walk(out);
if (files.length !== 11) throw new Error(`expected 11 repair files, found ${files.length}`);
console.log(JSON.stringify({ out, files: files.sort(), q429EnglishWords: words, q429ChineseChars: chars }, null, 2));
