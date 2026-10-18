import fs from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const output = path.join(root, 'outputs/2026-10-18-q4-22-source');
const sources = [
  ['isrr-requirements.html', 'https://seller-us.tiktok.com/university/essay?knowledge_id=368451231696653'],
  ['manage-isrr.html', 'https://seller-us.tiktok.com/university/essay?knowledge_id=5258293639497493'],
  ['aftersales-evidence-guide.html', 'https://seller-us.tiktok.com/university/essay?knowledge_id=7042659022210829'],
  ['returns-refunds-replacements.html', 'https://seller-us.tiktok.com/university/essay?knowledge_id=984433248438058'],
  ['customer-order-cancellation-return-refund-policy.html', 'https://seller-us.tiktok.com/university/essay?knowledge_id=3253210454181634'],
];

await fs.mkdir(output, { recursive: true });
const report = [];
for (const [name, url] of sources) {
  const response = await fetch(url, { headers: { 'user-agent': 'Mozilla/5.0 WEM source revalidation' } });
  if (!response.ok) throw new Error(`${url} returned ${response.status}`);
  const body = await response.text();
  if (body.length < 50_000) throw new Error(`${url} returned incomplete source (${body.length} bytes)`);
  await fs.writeFile(path.join(output, name), body);
  report.push({ name, url, bytes: Buffer.byteLength(body), fetchedAt: new Date().toISOString() });
}
await fs.writeFile(path.join(root, 'outputs/2026-10-18-q4-22-source-revalidation.json'), `${JSON.stringify({ status: 'source_revalidated', sources: report }, null, 2)}\n`);
console.log(JSON.stringify(report, null, 2));
