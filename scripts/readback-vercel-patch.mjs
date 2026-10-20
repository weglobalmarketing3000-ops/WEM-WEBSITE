import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';

const [deploymentId, teamId, patchDirectory, destination] = process.argv.slice(2);
if (!deploymentId || !teamId || !patchDirectory || !destination) throw new Error('usage: deploymentId teamId patchDirectory destination');
const authPath = path.join(os.homedir(), 'Library/Application Support/com.vercel.cli/auth.json');
const { token } = JSON.parse(await fs.readFile(authPath, 'utf8'));
const headers = { Authorization: `Bearer ${token}` };
const listResponse = await fetch(`https://api.vercel.com/v6/deployments/${deploymentId}/files?teamId=${teamId}`, { headers });
if (!listResponse.ok) throw new Error(`list deployment files failed: ${listResponse.status} ${await listResponse.text()}`);
const tree = await listResponse.json();
const remote = new Map();
function walk(entries, prefix = '') {
  for (const entry of entries) {
    const relative = path.posix.join(prefix, entry.name);
    if (entry.type === 'directory') walk(entry.children || [], relative);
    else remote.set(relative, entry.uid);
  }
}
walk(tree);
const local = [];
async function collect(directory) {
  for (const entry of await fs.readdir(directory, { withFileTypes: true })) {
    const absolute = path.join(directory, entry.name);
    if (entry.isDirectory()) await collect(absolute);
    else local.push(path.relative(patchDirectory, absolute).split(path.sep).join('/'));
  }
}
await collect(patchDirectory);
await fs.mkdir(destination, { recursive: true });
for (const relative of local.sort()) {
  const candidates = [`src/ui_kits/website/${relative}`, `src/.vercel/output/static/${relative}`, relative];
  const remotePath = candidates.find((candidate) => remote.has(candidate));
  if (!remotePath) throw new Error(`deployed path not found: ${relative}`);
  const response = await fetch(`https://api.vercel.com/v8/deployments/${deploymentId}/files/${remote.get(remotePath)}?teamId=${teamId}`, { headers });
  if (!response.ok) throw new Error(`download failed ${remotePath}: ${response.status} ${await response.text()}`);
  const payload = await response.json();
  const output = path.join(destination, relative);
  await fs.mkdir(path.dirname(output), { recursive: true });
  await fs.writeFile(output, Buffer.from(payload.data, 'base64'));
}
console.log(JSON.stringify({ deploymentId, files: local.length, destination }, null, 2));
