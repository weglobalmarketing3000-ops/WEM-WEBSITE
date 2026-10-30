import crypto from 'node:crypto';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const teamId = 'team_OAedqEjksUu6SeT1OfkFCRMT';
const acceptedDeploymentId = 'dpl_9EmMoyHdJHMJqG6AAeq1P6otwmzd';
const currentDeploymentId = 'dpl_8x8EQTpocFQbmKcmorNczFMCdc7i';
const output = path.join(root, 'outputs/2026-10-30-gift-search-current-origin');
const authPath = path.join(os.homedir(), 'Library/Application Support/com.vercel.cli/auth.json');
const {token} = JSON.parse(await fs.readFile(authPath, 'utf8'));
const headers = {Authorization: `Bearer ${token}`};

async function json(url) {
  const response = await fetch(url, {headers});
  if (!response.ok) throw new Error(`${url} failed: ${response.status} ${await response.text()}`);
  return response.json();
}

function flatten(tree) {
  const files = new Map();
  function walk(entries, prefix = '') {
    for (const entry of entries || []) {
      const relative = path.posix.join(prefix, entry.name);
      if (entry.type === 'directory') walk(entry.children, relative);
      else files.set(relative, entry.uid);
    }
  }
  walk(tree);
  return files;
}

function publishedPath(value) {
  return value
    .replace(/^src\/.vercel\/output\/static\//, '')
    .replace(/^src\/ui_kits\/website\//, '')
    .replace(/^src\//, '');
}

const [acceptedTree, currentTree, currentMetadata] = await Promise.all([
  json(`https://api.vercel.com/v6/deployments/${acceptedDeploymentId}/files?teamId=${teamId}`),
  json(`https://api.vercel.com/v6/deployments/${currentDeploymentId}/files?teamId=${teamId}`),
  json(`https://api.vercel.com/v13/deployments/${currentDeploymentId}?teamId=${teamId}`),
]);
const accepted = flatten(acceptedTree);
const current = flatten(currentTree);
const changed = [...current]
  .filter(([relative, uid]) => accepted.get(relative) !== uid)
  .map(([sourceRelative, uid]) => ({sourceRelative, relative: publishedPath(sourceRelative), uid}));
const deleted = [...accepted]
  .filter(([relative]) => !current.has(relative))
  .map(([relative]) => publishedPath(relative));

await fs.mkdir(path.join(output, 'changed'), {recursive: true});
const downloaded = [];
for (const file of changed) {
  const payload = await json(`https://api.vercel.com/v8/deployments/${currentDeploymentId}/files/${file.uid}?teamId=${teamId}`);
  const bytes = Buffer.from(payload.data, 'base64');
  const destination = path.join(output, 'changed', file.relative);
  await fs.mkdir(path.dirname(destination), {recursive: true});
  await fs.writeFile(destination, bytes);
  downloaded.push({relative: file.relative, bytes: bytes.length, sha256: crypto.createHash('sha256').update(bytes).digest('hex')});
}

const report = {
  reconciledAt: new Date().toISOString(),
  acceptedDeploymentId,
  currentDeploymentId,
  currentUrl: `https://${currentMetadata.url}`,
  readyState: currentMetadata.readyState,
  createdAt: new Date(currentMetadata.createdAt).toISOString(),
  creator: currentMetadata.creator,
  meta: currentMetadata.meta,
  changedFiles: downloaded,
  deletedFiles: deleted,
};
await fs.writeFile(path.join(output, 'report.json'), `${JSON.stringify(report, null, 2)}\n`);
console.log(JSON.stringify(report, null, 2));
