import crypto from 'node:crypto';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const teamId = 'team_OAedqEjksUu6SeT1OfkFCRMT';
const previousDeploymentId = 'dpl_E7MqU8MEyBNcrAuwmXxGfjBSEBmw';
const deploymentId = 'dpl_GPWTUXupw2Y2XXPR4hDVTKftB4pU';
const deploymentUrl = 'https://wem-website-qojys0rb1-wem1.vercel.app';
const authPath = path.join(os.homedir(), 'Library/Application Support/com.vercel.cli/auth.json');
const { token } = JSON.parse(await fs.readFile(authPath, 'utf8'));
const headers = { Authorization: `Bearer ${token}` };

async function json(url) {
  const response = await fetch(url, { headers });
  if (!response.ok) throw new Error(`${url} failed: ${response.status} ${await response.text()}`);
  return response.json();
}

function flatten(tree) {
  const files = new Map();
  const walk = (entries, prefix = '') => {
    for (const entry of entries || []) {
      const relative = path.posix.join(prefix, entry.name);
      if (entry.type === 'directory') walk(entry.children, relative);
      else files.set(relative, entry.uid);
    }
  };
  walk(tree);
  return files;
}

function publishedPath(value) {
  return value
    .replace(/^src\/.vercel\/output\/static\//, '')
    .replace(/^src\/ui_kits\/website\//, '')
    .replace(/^src\//, '');
}

function fingerprint(files) {
  const hash = crypto.createHash('sha256');
  for (const file of [...files].sort((a, b) => a.relative.localeCompare(b.relative))) {
    hash.update(file.relative).update('\0').update(file.bytes).update('\0');
  }
  return hash.digest('hex');
}

const [previousTree, currentTree, deployment] = await Promise.all([
  json(`https://api.vercel.com/v6/deployments/${previousDeploymentId}/files?teamId=${teamId}`),
  json(`https://api.vercel.com/v6/deployments/${deploymentId}/files?teamId=${teamId}`),
  json(`https://api.vercel.com/v13/deployments/${deploymentId}?teamId=${teamId}`),
]);
const previous = flatten(previousTree);
const current = flatten(currentTree);
const changed = [...current]
  .filter(([relative, uid]) => previous.get(relative) !== uid)
  .map(([relative, uid]) => ({ sourceRelative: relative, relative: publishedPath(relative), uid }));
const deletedFiles = [...previous.keys()].filter((relative) => !current.has(relative)).map(publishedPath);
const output = path.join(root, 'outputs/2026-10-29-gift-search-origin/patch');
const downloaded = [];
for (const file of changed) {
  const payload = await json(`https://api.vercel.com/v8/deployments/${deploymentId}/files/${file.uid}?teamId=${teamId}`);
  const bytes = Buffer.from(payload.data, 'base64');
  const destination = path.join(output, file.relative);
  await fs.mkdir(path.dirname(destination), { recursive: true });
  await fs.writeFile(destination, bytes);
  downloaded.push({ ...file, bytes, sha256: crypto.createHash('sha256').update(bytes).digest('hex') });
}
const patchFingerprint = fingerprint(downloaded);
const receipt = {
  state: 'succeeded',
  stage: 'origin_reconciled_from_immutable_deployment_delta',
  mode: 'production',
  receiptType: 'recovered_origin_evidence',
  previousDeploymentId,
  deploymentId,
  url: deploymentUrl,
  readyState: deployment.readyState || deployment.state,
  source: deployment.source,
  createdAt: new Date(deployment.createdAt).toISOString(),
  patch: output,
  patchFingerprint,
  changedFiles: downloaded.length,
  deletedFiles,
  exitCode: 0,
};
const receiptPath = path.join(root, 'outputs/deployment-receipts', `${patchFingerprint.slice(0, 20)}-production-origin.json`);
const report = {
  reconciledAt: new Date().toISOString(),
  ...receipt,
  receipt: path.relative(root, receiptPath),
  files: downloaded.map(({ relative, sha256, bytes }) => ({ relative, sha256, bytes: bytes.length })),
};
await fs.mkdir(path.dirname(receiptPath), { recursive: true });
await fs.writeFile(receiptPath, `${JSON.stringify(receipt, null, 2)}\n`);
await fs.mkdir(path.join(root, 'outputs/2026-10-29-gift-search-origin'), { recursive: true });
await fs.writeFile(path.join(root, 'outputs/2026-10-29-gift-search-origin/report.json'), `${JSON.stringify(report, null, 2)}\n`);
console.log(JSON.stringify(report, null, 2));
