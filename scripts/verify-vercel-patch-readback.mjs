import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import crypto from 'node:crypto';

const [deploymentId,teamId,patchDirectory,reportPath]=process.argv.slice(2);
if(!deploymentId||!teamId||!patchDirectory||!reportPath) throw new Error('usage: deploymentId teamId patchDirectory reportPath');
const {token}=JSON.parse(await fs.readFile(path.join(os.homedir(),'Library/Application Support/com.vercel.cli/auth.json'),'utf8'));
const headers={Authorization:`Bearer ${token}`};
const deploymentResponse=await fetch(`https://api.vercel.com/v13/deployments/${deploymentId}?teamId=${teamId}`,{headers});
if(!deploymentResponse.ok) throw new Error(`deployment metadata failed: ${deploymentResponse.status}`);
const deployment=await deploymentResponse.json();
const listResponse=await fetch(`https://api.vercel.com/v6/deployments/${deploymentId}/files?teamId=${teamId}`,{headers});
if(!listResponse.ok) throw new Error(`deployment files failed: ${listResponse.status}`);
const remote=[];
function walk(entries,prefix=''){for(const entry of entries){const relative=path.posix.join(prefix,entry.name);if(entry.type==='directory')walk(entry.children||[],relative);else remote.push({relative,uid:entry.uid});}}
walk(await listResponse.json());
const local=[];
async function collect(directory){for(const entry of await fs.readdir(directory,{withFileTypes:true})){const absolute=path.join(directory,entry.name);if(entry.isDirectory())await collect(absolute);else local.push(path.relative(patchDirectory,absolute).split(path.sep).join('/'));}}
await collect(patchDirectory);
const sha=b=>crypto.createHash('sha256').update(b).digest('hex');
const files={};
for(const relative of local.sort()){
  const found=remote.find(file=>[
    file.relative.replace(/^src\/\.vercel\/output\/static\//,''),
    file.relative.replace(/^src\/ui_kits\/website\//,''),
    file.relative.startsWith('src/')?file.relative.slice(4):file.relative
  ].includes(relative));
  if(!found){files[relative]={found:false,match:false};continue;}
  const response=await fetch(`https://api.vercel.com/v8/deployments/${deploymentId}/files/${found.uid}?teamId=${teamId}`,{headers});
  if(!response.ok) throw new Error(`download failed ${relative}: ${response.status}`);
  const payload=await response.json();
  const remoteBytes=Buffer.from(payload.data,'base64');
  const localBytes=await fs.readFile(path.join(patchDirectory,relative));
  files[relative]={remotePath:`/${found.relative}`,bytes:remoteBytes.length,localSha256:sha(localBytes),remoteSha256:sha(remoteBytes),match:sha(localBytes)===sha(remoteBytes)};
}
const report={deploymentId,url:`https://${deployment.url}`,readyState:deployment.readyState,files,expectedFiles:local.length,matchedFiles:Object.values(files).filter(f=>f.match).length,passed:deployment.readyState==='READY'&&Object.values(files).every(f=>f.match)};
await fs.mkdir(path.dirname(reportPath),{recursive:true});
await fs.writeFile(reportPath,`${JSON.stringify(report,null,2)}\n`);
console.log(JSON.stringify({deploymentId,readyState:report.readyState,expectedFiles:report.expectedFiles,matchedFiles:report.matchedFiles,passed:report.passed,reportPath},null,2));
if(!report.passed) process.exitCode=1;
