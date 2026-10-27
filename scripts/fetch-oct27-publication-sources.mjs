import crypto from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const out = path.join(root, 'outputs/2026-10-27-publication-sources');
const sources = [
  ['q4-30-cancellation-policy', 'https://seller-us.tiktok.com/university/essay?default_language=en&identity=1&knowledge_id=3253210454181634'],
  ['creator-runway-bfcm-guide', 'https://seller-us.tiktok.com/university/essay?knowledge_id=26854147802894&source_type=ai_university_home'],
  ['wem-beauty-case', 'https://www.weglobalmarketing.com/showcase#case-beauty-gmv-growth'],
];
await fs.mkdir(out, { recursive: true });
const report = { fetchedAt: new Date().toISOString(), sources: [] };
for (const [id, url] of sources) {
  const response = await fetch(url, { redirect: 'follow', headers: { 'user-agent': 'Mozilla/5.0 WEM publication QA' } });
  const bytes = Buffer.from(await response.arrayBuffer());
  const file = path.join(out, `${id}.html`);
  await fs.writeFile(file, bytes);
  report.sources.push({ id, url, finalUrl: response.url, status: response.status, ok: response.ok, bytes: bytes.length, sha256: crypto.createHash('sha256').update(bytes).digest('hex'), contentType: response.headers.get('content-type') });
}
await fs.writeFile(path.join(out, 'report.json'), `${JSON.stringify(report, null, 2)}\n`);
console.log(JSON.stringify(report, null, 2));
