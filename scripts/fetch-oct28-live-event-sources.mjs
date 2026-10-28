import crypto from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const output = path.join(root, 'outputs/2026-10-28-live-event-sources');
const sources = [
  {
    id: 'tiktok-shop-bfcm-2026-guide',
    url: 'https://seller-us.tiktok.com/university/essay?knowledge_id=26854147802894&source_type=ai_university_home',
  },
  {
    id: 'wem-wellness-case',
    url: 'https://www.weglobalmarketing.com/showcase#case-wellness-affiliate-live',
  },
];

await fs.mkdir(output, { recursive: true });
const report = { fetchedAt: new Date().toISOString(), sources: [] };
for (const source of sources) {
  const response = await fetch(source.url, { redirect: 'follow' });
  const bytes = Buffer.from(await response.arrayBuffer());
  if (!response.ok || bytes.length < 1000) throw new Error(`${source.id} incomplete: ${response.status}, ${bytes.length} bytes`);
  const file = path.join(output, `${source.id}.html`);
  await fs.writeFile(file, bytes);
  report.sources.push({
    ...source,
    finalUrl: response.url,
    status: response.status,
    bytes: bytes.length,
    sha256: crypto.createHash('sha256').update(bytes).digest('hex'),
    file: path.relative(root, file),
  });
}
await fs.writeFile(path.join(output, 'report.json'), `${JSON.stringify(report, null, 2)}\n`);
console.log(JSON.stringify(report, null, 2));
