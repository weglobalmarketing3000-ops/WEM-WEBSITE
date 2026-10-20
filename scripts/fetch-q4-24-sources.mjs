import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';

const root = path.resolve(import.meta.dirname, '..');
const output = path.join(root, 'outputs/2026-10-20-q4-24-source');
const sources = [
  ['returns-refunds-requirements.html', 'https://seller-us.tiktok.com/university/essay?identity=1&knowledge_id=984433248438058'],
  ['aftersales-evidence-guide.html', 'https://seller-us.tiktok.com/university/essay?knowledge_id=7042659022210829'],
  ['aftersales-dispute-escalations.html', 'https://seller-us.tiktok.com/university/essay?from=policy&identity=1&knowledge_id=3985068541478658&role=1'],
  ['customer-return-refund-policy.html', 'https://seller-us.tiktok.com/university/essay?knowledge_id=3253210454181634'],
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

const facts = {
  requirementsDate: '2026-09-17',
  reviewWindow: 'seller-managed returns are reviewed within 4 business days; use the live Seller Center deadline',
  grades: ['Original', 'Minor damage / Functional', 'Severe damage / Unsellable', 'Buyer shipped the wrong item'],
  gradingUpload: ['JPG or PNG only', 'no video in this grading upload', '5 MB maximum per file', 'up to 6 images', 'optional additional comments'],
  broaderEvidence: 'continuous return-unboxing video and other order-linked proof may be required in appeals or disputes outside the grading photo upload',
  evidencePrinciple: 'connect the return label, parcel exterior, all contents, product identifiers and exact resale-impacting condition to the same order',
};
await fs.writeFile(path.join(root, 'outputs/2026-10-20-q4-24-source-revalidation.json'), `${JSON.stringify({
  status: 'source_revalidated',
  facts,
  sources: report,
}, null, 2)}\n`);
console.log(JSON.stringify({ facts, sources: report }, null, 2));
