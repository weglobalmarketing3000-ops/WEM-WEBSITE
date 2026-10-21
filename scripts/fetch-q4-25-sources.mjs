import fs from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const out = path.join(root, 'outputs/2026-10-21-q4-25-source');
const sources = [
  ['content-policy', 'https://seller-us.tiktok.com/university/essay?knowledge_id=6837891779151617&lang=en'],
  ['seller-terms', 'https://seller-us.tiktok.com/university/essay?knowledge_id=1331308753078058&lang=en'],
  ['fulfillment-policy', 'https://seller-us.tiktok.com/university/essay?knowledge_id=3995852763301633'],
  ['returns-policy', 'https://seller-us.tiktok.com/university/essay?knowledge_id=984433248438058'],
  ['chargeback-policy', 'https://seller-us.tiktok.com/university/essay?knowledge_id=7989055607670570'],
  ['seller-enforcement-policy', 'https://seller-us.tiktok.com/university/essay?knowledge_id=2380042836166443'],
];

await fs.mkdir(out, { recursive: true });
const report = { checkedAt: new Date().toISOString(), sources: [] };
for (const [name, url] of sources) {
  const response = await fetch(url, { headers: { 'user-agent': 'Mozilla/5.0 WE-Marketing-source-validation' } });
  const html = await response.text();
  await fs.writeFile(path.join(out, `${name}.html`), html);
  report.sources.push({ name, url, status: response.status, bytes: Buffer.byteLength(html), saved: `${name}.html` });
}
report.passed = report.sources.every((source) => source.status === 200 && source.bytes > 1000);
await fs.writeFile(path.join(out, 'report.json'), `${JSON.stringify(report, null, 2)}\n`);
if (!report.passed) throw new Error('One or more official source fetches failed');
console.log(JSON.stringify(report, null, 2));
