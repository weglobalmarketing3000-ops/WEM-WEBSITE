import fs from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const out = path.join(root, 'outputs/2026-10-25-q4-29-source');
const sources = [
  ['tiktok-shipping-protection.html', 'https://seller-us.tiktok.com/university/essay?knowledge_id=1043867350730510&lang=en'],
  ['seller-shipping-protection.html', 'https://seller-us.tiktok.com/university/essay?knowledge_id=3569596666382098&lang=en'],
  ['tiktok-shipping-orders.html', 'https://seller-us.tiktok.com/university/essay?knowledge_id=2334828973737741&lang=en'],
];
await fs.mkdir(out, { recursive: true });
const report = [];
for (const [name, url] of sources) {
  const response = await fetch(url, { headers: { 'user-agent': 'Mozilla/5.0 WEM source revalidation' } });
  const text = await response.text();
  if (!response.ok || text.length < 10000) throw new Error(`${name}: HTTP ${response.status}, ${text.length} bytes`);
  await fs.writeFile(path.join(out, name), text);
  report.push({ name, url, status: response.status, bytes: text.length });
}
await fs.writeFile(path.join(out, 'report.json'), `${JSON.stringify({ fetchedAt: new Date().toISOString(), sources: report }, null, 2)}\n`);
console.log(JSON.stringify(report, null, 2));
