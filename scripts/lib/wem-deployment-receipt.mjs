import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

export function fingerprintPatch(root) {
  const hash = crypto.createHash('sha256');
  const walk = dir => fs.readdirSync(dir, { withFileTypes: true })
    .sort((a, b) => a.name.localeCompare(b.name))
    .flatMap(entry => entry.isDirectory() ? walk(path.join(dir, entry.name)) : [path.join(dir, entry.name)]);
  for (const file of walk(root)) {
    const relative = path.relative(root, file).split(path.sep).join('/');
    hash.update(relative).update('\0').update(fs.readFileSync(file)).update('\0');
  }
  return hash.digest('hex');
}

export function parseDeploymentOutput(value) {
  const urls = [...value.matchAll(/https:\/\/wem-website-[a-z0-9-]+-wem1\.vercel\.app/gi)].map(match => match[0]);
  const ids = [...value.matchAll(/\bdpl_[A-Za-z0-9]+\b/g)].map(match => match[0]);
  return { url: urls.at(-1) || '', deploymentId: ids.at(-1) || '' };
}

export function classifyReceipt(receipt, fingerprint, mode, isRunning = pid => {
  try { process.kill(pid, 0); return true; } catch { return false; }
}) {
  if (!receipt || receipt.patchFingerprint !== fingerprint || receipt.mode !== mode) return 'missing';
  if (receipt.state === 'succeeded' && receipt.url && receipt.exitCode === 0) return 'recoverable_success';
  if (receipt.state === 'running' && Number.isInteger(receipt.pid) && isRunning(receipt.pid)) return 'active_duplicate';
  if (receipt.state === 'running') return 'stale_running';
  if (receipt.url && receipt.deploymentId && receipt.exitCode !== 0) return 'recoverable_deployment';
  return 'terminal_failure';
}

export function readReceipt(file) {
  try { return JSON.parse(fs.readFileSync(file, 'utf8')); } catch { return null; }
}

export function writeReceipt(file, value) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  const temporary = `${file}.${process.pid}.tmp`;
  fs.writeFileSync(temporary, `${JSON.stringify(value, null, 2)}\n`);
  fs.renameSync(temporary, file);
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  const [, , command, ...args] = process.argv;
  if (command === 'fingerprint') process.stdout.write(fingerprintPatch(path.resolve(args[0])));
  else if (command === 'parse') process.stdout.write(JSON.stringify(parseDeploymentOutput(fs.readFileSync(args[0], 'utf8'))));
  else if (command === 'classify') {
    const receipt = readReceipt(args[0]);
    process.stdout.write(JSON.stringify({ classification: classifyReceipt(receipt, args[1], args[2]), receipt }));
  } else if (command === 'write') {
    writeReceipt(args[0], JSON.parse(args[1]));
  } else {
    console.error('usage: wem-deployment-receipt.mjs fingerprint DIR | parse LOG | classify RECEIPT FINGERPRINT MODE | write RECEIPT JSON');
    process.exit(64);
  }
}
