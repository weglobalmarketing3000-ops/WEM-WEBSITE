import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';

const root = path.resolve(import.meta.dirname, '..');
const out = path.join(root, 'outputs/2026-10-13-q4-17-source');
const sources = {
  logistics: {
    file: 'logistics-fulfillment-options.html',
    url: 'https://seller-us.tiktok.com/university/essay?identity=1&knowledge_id=7740101263378189&role=1'
  },
  fulfillment: {
    file: 'fulfillment-policy.html',
    url: 'https://seller-us.tiktok.com/university/essay?identity=1&knowledge_id=3995852763301633&role=1'
  },
  shipping: {
    file: 'customer-order-shipping-requirements.html',
    url: 'https://seller-us.tiktok.com/university/essay?default_language=en&knowledge_id=6837879804970754'
  },
  ldr: {
    file: 'late-dispatch-rate-requirements.html',
    url: 'https://seller-us.tiktok.com/university/essay?identity=1&knowledge_id=3668989549299511&role=1'
  },
  manifest: {
    file: 'tiktok-manifest.html',
    url: 'https://seller-us.tiktok.com/university/essay?default_language=en&knowledge_id=2159226148472596'
  }
};

await fs.mkdir(out, { recursive: true });
const receipt = { status: 'source_revalidated', date: '2026-10-13', sources: {} };
for (const [key, source] of Object.entries(sources)) {
  const response = await fetch(source.url, { headers: { 'user-agent': 'Mozilla/5.0' } });
  if (!response.ok) throw new Error(`${source.url} returned ${response.status}`);
  const html = await response.text();
  if (html.length < 100000) throw new Error(`${source.url} returned an incomplete page (${html.length} bytes)`);
  await fs.writeFile(path.join(out, source.file), html);
  receipt.sources[key] = {
    url: source.url,
    file: `outputs/2026-10-13-q4-17-source/${source.file}`,
    httpStatus: response.status,
    bytes: Buffer.byteLength(html),
    sha256: crypto.createHash('sha256').update(html).digest('hex')
  };
}
await fs.writeFile(path.join(root, 'outputs/2026-10-13-q4-17-source-revalidation.json'), `${JSON.stringify(receipt, null, 2)}\n`);
console.log(JSON.stringify(receipt, null, 2));
