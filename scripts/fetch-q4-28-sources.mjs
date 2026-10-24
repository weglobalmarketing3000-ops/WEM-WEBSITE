import fs from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const out = path.join(root, 'outputs/2026-10-24-q4-28-source');
const sources = [
  ['virtual-bundles', 'https://seller-us.tiktok.com/university/essay?knowledge_id=894944353240878&lang=en'],
  ['aigc-product-images', 'https://seller-us.tiktok.com/university/essay?knowledge_id=5892224899909383&lang=en'],
  ['returns-refunds', 'https://seller-us.tiktok.com/university/essay?knowledge_id=3253210454181634&lang=en'],
];

await fs.mkdir(out, { recursive: true });
const report = { checkedAt: new Date().toISOString(), sources: [] };
for (const [name, url] of sources) {
  const response = await fetch(url, { headers: { 'user-agent': 'Mozilla/5.0 WE-Marketing-source-validation' } });
  const html = await response.text();
  await fs.writeFile(path.join(out, `${name}.html`), html.trimEnd() + '\n');
  report.sources.push({ name, url, status: response.status, bytes: Buffer.byteLength(html), saved: `${name}.html` });
}
report.passed = report.sources.every((source) => source.status === 200 && source.bytes > 1000);
await fs.writeFile(path.join(out, 'report.json'), `${JSON.stringify(report, null, 2)}\n`);
console.log(JSON.stringify(report, null, 2));
if (!report.passed) process.exitCode = 1;
