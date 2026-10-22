import fs from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const out = path.join(root, 'outputs/2026-10-22-q4-26-source');
const sources = [
  ['smart-promotion-faq', 'https://seller-us.tiktok.com/university/essay?knowledge_id=4827354015483691&lang=en'],
  ['program-performance-and-costs', 'https://seller-us.tiktok.com/university/essay?knowledge_id=386652959082253&lang=en'],
  ['seller-spending-insights', 'https://seller-us.tiktok.com/university/essay?knowledge_id=1898073370461966&lang=en'],
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
