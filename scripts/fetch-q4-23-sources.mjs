import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';

const root = path.resolve(import.meta.dirname, '..');
const output = path.join(root, 'outputs/2026-10-19-q4-23-source');
const sources = [
  ['chargeback-policy.html', 'https://seller-us.tiktok.com/university/essay?default_language=en&identity=1&knowledge_id=7989055607670570'],
  ['aftersales-evidence-guide.html', 'https://seller-us.tiktok.com/university/essay?knowledge_id=7042659022210829'],
];

await fs.mkdir(output, { recursive: true });
const report = [];
for (const [name, url] of sources) {
  const response = await fetch(url, { headers: { 'user-agent': 'Mozilla/5.0 WEM source revalidation' } });
  if (!response.ok) throw new Error(`${url} returned ${response.status}`);
  const body = await response.text();
  if (body.length < 50_000) throw new Error(`${url} returned incomplete source (${body.length} bytes)`);
  await fs.writeFile(path.join(output, name), body);
  report.push({
    name,
    url,
    bytes: Buffer.byteLength(body),
    sha256: crypto.createHash('sha256').update(body).digest('hex'),
    fetchedAt: new Date().toISOString(),
  });
}
await fs.writeFile(path.join(root, 'outputs/2026-10-19-q4-23-source-revalidation.json'), `${JSON.stringify({
  status: 'source_revalidated',
  facts: {
    policyDate: '2026-09-23',
    appealWindow: '7 calendar days from chargeback notification; use the specific reply-by date shown in Seller Center',
    required: ['transaction status', 'product description', 'proof that the item was received by the cardholder'],
    optional: ['order confirmation', 'changes/refunds/cancellation', 'tracking numbers', 'product images', 'customer messages'],
    process: 'TikTok Shop reviews the seller submission, prepares representment, and submits it to the financial institution',
    outcome: 'financial institution controls the outcome; Seller Center provides outcome readback',
  },
  sources: report,
}, null, 2)}\n`);
console.log(JSON.stringify(report, null, 2));
