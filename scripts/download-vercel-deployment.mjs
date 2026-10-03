import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';

const [deploymentId, teamId, destination, includeDirectory] = process.argv.slice(2);
if (!deploymentId || !teamId || !destination) throw new Error('usage: deploymentId teamId destination');
const authPath = path.join(os.homedir(), 'Library/Application Support/com.vercel.cli/auth.json');
const { token } = JSON.parse(await fs.readFile(authPath, 'utf8'));
const headers = { Authorization: `Bearer ${token}` };
const listUrl = `https://api.vercel.com/v6/deployments/${deploymentId}/files?teamId=${teamId}`;
const listResponse = await fetch(listUrl, { headers });
if (!listResponse.ok) throw new Error(`list deployment files failed: ${listResponse.status} ${await listResponse.text()}`);
const tree = await listResponse.json();
const files = [];
function walk(entries, prefix = '') {
  for (const entry of entries) {
    const relative = path.posix.join(prefix, entry.name);
    if (entry.type === 'directory') walk(entry.children || [], relative);
    else files.push({ relative, uid: entry.uid });
  }
}
walk(tree);
if (includeDirectory) {
  const wanted = new Set();
  async function collect(directory) {
    for (const entry of await fs.readdir(directory, { withFileTypes: true })) {
      const absolute = path.join(directory, entry.name);
      if (entry.isDirectory()) await collect(absolute);
      else wanted.add(path.relative(includeDirectory, absolute).split(path.sep).join('/'));
    }
  }
  await collect(includeDirectory);
  const selected = files.flatMap((file) => {
    const candidates = [
      file.relative.replace(/^src\/\.vercel\/output\/static\//, ''),
      file.relative.replace(/^src\/ui_kits\/website\//, ''),
      file.relative.startsWith('src/') ? file.relative.slice(4) : file.relative,
    ];
    const outputRelative = candidates.find((candidate) => wanted.has(candidate));
    return outputRelative ? [{ ...file, outputRelative }] : [];
  });
  files.splice(0, files.length, ...selected);
  if (files.length !== wanted.size) throw new Error(`deployment readback selection mismatch: wanted ${wanted.size}, found ${files.length}`);
}
let cursor = 0;
async function worker() {
  while (cursor < files.length) {
    const file = files[cursor++];
    const url = `https://api.vercel.com/v8/deployments/${deploymentId}/files/${file.uid}?teamId=${teamId}`;
    const response = await fetch(url, { headers });
    if (!response.ok) throw new Error(`download failed ${file.relative}: ${response.status} ${await response.text()}`);
    const payload = await response.json();
    const outputRelative = file.outputRelative || (file.relative.startsWith('src/') ? file.relative.slice(4) : file.relative);
    const output = path.join(destination, outputRelative);
    await fs.mkdir(path.dirname(output), { recursive: true });
    await fs.writeFile(output, Buffer.from(payload.data, 'base64'));
  }
}
await Promise.all(Array.from({ length: 16 }, worker));
console.log(JSON.stringify({ deploymentId, files: files.length, destination }, null, 2));
