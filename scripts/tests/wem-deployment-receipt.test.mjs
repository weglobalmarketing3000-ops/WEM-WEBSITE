import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { classifyReceipt, fingerprintPatch, parseDeploymentOutput, readReceipt, writeReceipt } from '../lib/wem-deployment-receipt.mjs';

const temp = fs.mkdtempSync(path.join(os.tmpdir(), 'wem-receipt-test.'));
try {
  const patch = path.join(temp, 'patch');
  fs.mkdirSync(patch);
  fs.writeFileSync(path.join(patch, 'article.html'), 'approved');
  const fingerprint = fingerprintPatch(patch);
  const helper = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../lib/wem-deployment-receipt.mjs');
  assert.equal(execFileSync(process.execPath, [helper, 'fingerprint', patch], { encoding: 'utf8' }).trim(), fingerprint);

  const late = parseDeploymentOutput(`Building...\nDeployment completed\nDeployment URL: {\n  "id": "dpl_LATE123",\n  "url": "https://wem-website-late123-wem1.vercel.app"\n}`);
  assert.deepEqual(late, { url: 'https://wem-website-late123-wem1.vercel.app', deploymentId: 'dpl_LATE123' });
  const lateLog = path.join(temp, 'late deploy.log');
  fs.writeFileSync(lateLog, `Building...\nDeployment completed\nDeployment URL: {\n  "id": "dpl_LATE123",\n  "url": "https://wem-website-late123-wem1.vercel.app"\n}`);
  assert.deepEqual(JSON.parse(execFileSync(process.execPath, [helper, 'parse', lateLog], { encoding: 'utf8' })), late);

  const receiptFile = path.join(temp, 'preview.json');
  const completed = { state: 'succeeded', mode: 'preview', patchFingerprint: fingerprint, pid: 111, url: late.url, deploymentId: late.deploymentId, exitCode: 0 };
  execFileSync(process.execPath, [helper, 'write', receiptFile, JSON.stringify(completed)]);
  assert.equal(classifyReceipt(readReceipt(receiptFile), fingerprint, 'preview'), 'recoverable_success');
  const classified = JSON.parse(execFileSync(process.execPath, [helper, 'classify', receiptFile, fingerprint, 'preview'], { encoding: 'utf8' }));
  assert.equal(classified.classification, 'recoverable_success');

  const active = { state: 'running', mode: 'preview', patchFingerprint: fingerprint, pid: process.pid };
  assert.equal(classifyReceipt(active, fingerprint, 'preview'), 'active_duplicate');
  assert.equal(classifyReceipt({ ...active, pid: 99999999 }, fingerprint, 'preview'), 'stale_running');
  assert.equal(classifyReceipt({ ...completed, state: 'failed', exitCode: 1 }, fingerprint, 'preview'), 'recoverable_deployment');
  assert.equal(classifyReceipt(active, `${fingerprint}x`, 'preview'), 'missing');
  console.log('wem deployment receipt tests passed: late result, preview recovery, duplicate invocation');
} finally {
  fs.rmSync(temp, { recursive: true, force: true });
}
