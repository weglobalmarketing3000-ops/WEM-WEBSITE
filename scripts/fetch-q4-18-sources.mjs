import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';

const root = path.resolve(import.meta.dirname, '..');
const out = path.join(root, 'outputs/2026-10-14-q4-18-source');
await fs.mkdir(out, { recursive: true });

const sources = [
  ['order-handling-capacity', 'https://seller-us.tiktok.com/university/essay?course_type=1&from=search&identity=1&knowledge_id=5941246229022506&role=1'],
  ['fulfillment-policy', 'https://seller-us.tiktok.com/university/essay?identity=1&knowledge_id=3995852763301633&role=1'],
  ['bfcm-seller-campaign-guide', 'https://seller-us.tiktok.com/university/essay?content_id=2786070166210347&course_type=1&from=new-and-updated&identity=1&knowledge_id=26854147802894&learning_id=26854147802894&module_id=latest_policies&role=seller'],
  ['logistics-fulfillment-score', 'https://seller-us.tiktok.com/university/essay?knowledge_id=7082627485452050'],
  ['order-fulfillment-best-practices', 'https://seller-us.tiktok.com/university/essay?course_type=1&knowledge_id=6179821974439723'],
];

const records = [];
for (const [name, url] of sources) {
  const response = await fetch(url, { redirect: 'follow', headers: { 'user-agent': 'Mozilla/5.0' } });
  const bytes = Buffer.from(await response.arrayBuffer());
  if (!response.ok || bytes.length < 50000) throw new Error(`${name}: HTTP ${response.status}, ${bytes.length} bytes`);
  const file = path.join(out, `${name}.html`);
  await fs.writeFile(file, bytes);
  records.push({ name, url, status: response.status, bytes: bytes.length, sha256: crypto.createHash('sha256').update(bytes).digest('hex'), file: path.relative(root, file) });
}

await fs.writeFile(path.join(root, 'outputs/2026-10-14-q4-18-source-revalidation.json'), `${JSON.stringify({ checkedAt: new Date().toISOString(), records }, null, 2)}\n`);
console.log(JSON.stringify(records, null, 2));
