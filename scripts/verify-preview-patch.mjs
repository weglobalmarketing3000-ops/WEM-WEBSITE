import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import {execFileSync} from 'node:child_process';

const [deploymentId,patchArg,outArg,url='']=process.argv.slice(2);
if(!deploymentId||!patchArg||!outArg) throw new Error('usage: node scripts/verify-preview-patch.mjs DEPLOYMENT_ID PATCH_DIR OUTPUT_JSON [URL]');
const patch=path.resolve(patchArg);
const hash=value=>crypto.createHash('sha256').update(value).digest('hex');
const api=endpoint=>JSON.parse(execFileSync('npx',['vercel','api',endpoint],{encoding:'utf8',maxBuffer:64*1024*1024}));
const tree=api(`/v6/deployments/${deploymentId}/files?limit=10000`);
const map=new Map();
function walk(nodes,prefix=''){
  for(const node of nodes||[]){
    const current=`${prefix}/${node.name}`;
    if(node.type==='directory') walk(node.children,current);
    else if(node.type==='file') map.set(current,{uid:node.uid});
  }
}
walk(tree);
const relatives=[];
async function collect(dir){
  for(const entry of await fs.readdir(dir,{withFileTypes:true})){
    const absolute=path.join(dir,entry.name);
    if(entry.isDirectory()) await collect(absolute);
    else relatives.push(path.relative(patch,absolute));
  }
}
await collect(patch);
const result={deploymentId,url,readyState:'READY',files:{}};
for(const relative of relatives.sort()){
  const remotePath=`/src/ui_kits/website/${relative}`;
  const item=map.get(remotePath);
  if(!item) throw new Error(`missing remote file ${remotePath}`);
  const payload=api(`/v8/deployments/${deploymentId}/files/${item.uid}`);
  const remote=Buffer.from(payload.data,'base64');
  const local=await fs.readFile(path.join(patch,relative));
  result.files[relative]={remotePath,bytes:remote.length,localSha256:hash(local),remoteSha256:hash(remote),match:hash(local)===hash(remote)};
}
result.passed=Object.keys(result.files).length===relatives.length&&Object.values(result.files).every(file=>file.match);
await fs.writeFile(path.resolve(outArg),`${JSON.stringify(result,null,2)}\n`);
console.log(JSON.stringify({deploymentId,files:relatives.length,passed:result.passed,output:path.resolve(outArg)},null,2));
if(!result.passed) process.exitCode=1;
