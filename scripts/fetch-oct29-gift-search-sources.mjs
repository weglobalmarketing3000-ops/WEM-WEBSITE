import crypto from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const output = path.join(root, 'outputs/2026-10-29-gift-search-sources');
const sources = [
  {
    id: 'tiktok-shop-bfcm-2026-guide',
    url: 'https://seller-us.tiktok.com/university/essay?knowledge_id=26854147802894&source_type=ai_university_home',
    file: 'tiktok-shop-bfcm-2026-guide.html',
  },
  {
    id: 'wem-fashion-case',
    url: 'https://www.weglobalmarketing.com/showcase#case-fashion-cold-start',
    file: 'wem-fashion-case.html',
  },
];

await fs.mkdir(output, { recursive: true });
const report = { fetchedAt: new Date().toISOString(), sources: [] };
for (const source of sources) {
  const response = await fetch(source.url, { redirect: 'follow' });
  if (!response.ok) throw new Error(`${source.id} failed: ${response.status}`);
  const bytes = Buffer.from(await response.arrayBuffer());
  await fs.writeFile(path.join(output, source.file), bytes);
  report.sources.push({
    id: source.id,
    url: source.url,
    finalUrl: response.url,
    status: response.status,
    bytes: bytes.length,
    sha256: crypto.createHash('sha256').update(bytes).digest('hex'),
    file: path.relative(root, path.join(output, source.file)),
  });
}
await fs.writeFile(path.join(output, 'report.json'), `${JSON.stringify(report, null, 2)}\n`);
console.log(JSON.stringify(report, null, 2));
