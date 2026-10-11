import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';

const root = path.resolve(import.meta.dirname, '..');
const out = path.join(root, 'outputs/2026-10-11-q4-15-source');
const sources = {
  peak: {
    file: 'peak-season-shipping-rate.html',
    url: 'https://seller-us.tiktok.com/university/essay?default_language=en&knowledge_id=4797361814980370'
  },
  live: {
    file: 'live-flat-rate.html',
    url: 'https://seller-us.tiktok.com/university/essay?knowledge_id=6744662208792321&default_language=en'
  },
  standard: {
    file: 'standard-delivery.html',
    url: 'https://seller-us.tiktok.com/university/essay?knowledge_id=987788883576589&lang=en'
  }
};

await fs.mkdir(out, { recursive: true });
const receipt = { status: 'source_revalidated', date: '2026-10-11', sources: {} };
for (const [key, source] of Object.entries(sources)) {
  const response = await fetch(source.url, { headers: { 'user-agent': 'Mozilla/5.0' } });
  if (!response.ok) throw new Error(`${source.url} returned ${response.status}`);
  const html = await response.text();
  if (html.length < 100000) throw new Error(`${source.url} returned an incomplete page (${html.length} bytes)`);
  await fs.writeFile(path.join(out, source.file), html);
  receipt.sources[key] = {
    url: source.url,
    file: `outputs/2026-10-11-q4-15-source/${source.file}`,
    httpStatus: response.status,
    bytes: Buffer.byteLength(html),
    sha256: crypto.createHash('sha256').update(html).digest('hex')
  };
}
await fs.writeFile(path.join(root, 'outputs/2026-10-11-q4-15-source-revalidation.json'), `${JSON.stringify(receipt, null, 2)}\n`);
console.log(JSON.stringify(receipt, null, 2));
