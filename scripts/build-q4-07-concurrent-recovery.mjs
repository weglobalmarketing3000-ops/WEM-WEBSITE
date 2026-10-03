import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import vm from 'node:vm';

const root=path.resolve(import.meta.dirname,'..');
const current=process.env.WEM_CURRENT_BASELINE;
if(!current) throw new Error('Set WEM_CURRENT_BASELINE to the downloaded current production ui_kits/website directory');
const accepted=path.join(root,'outputs/patches/2026-10-03-q4-07-contract-controls');
const out=path.join(root,'outputs/patches/2026-10-03-q4-07-concurrent-recovery');
const plural='tiktok-shop-creator-agency-contract-controls';
const singular='tiktok-shop-creator-agency-contract-control';
const url=`https://www.weglobalmarketing.com/blog/${plural}`;
const hash=x=>crypto.createHash('sha256').update(x).digest('hex');

await fs.rm(out,{recursive:true,force:true});
for(const d of ['assets','blog','blog/optimized','blog/thumbs']) await fs.mkdir(path.join(out,d),{recursive:true});
await fs.copyFile(path.join(accepted,'assets/we-logo.png'),path.join(out,'assets/we-logo.png'));
const assetFiles=[
  `blog/hero-${plural}-en-v1.png`,`blog/hero-${plural}-zh-v1.png`,
  `blog/optimized/hero-${plural}-en-v1.jpg`,`blog/optimized/hero-${plural}-zh-v1.jpg`,
  `blog/thumbs/hero-${plural}-en-v1.jpg`,`blog/thumbs/hero-${plural}-zh-v1.jpg`,
  'blog/q4-07-map-en.png','blog/q4-07-map-zh.png','blog/q4-07-gate-en.png','blog/q4-07-gate-zh.png',
  `blog/${plural}.html`,
];
for(const file of assetFiles) await fs.copyFile(path.join(accepted,file),path.join(out,file));

const acceptedList=await fs.readFile(path.join(accepted,'BlogList.jsx'),'utf8');
const currentList=await fs.readFile(path.join(current,'BlogList.jsx'),'utf8');
const acceptedCard=acceptedList.match(/const BLOG_POSTS = \[(\{slug:'tiktok-shop-creator-agency-contract-controls'[\s\S]*?\}),\{slug:/)?.[1];
if(!acceptedCard) throw new Error('Could not extract accepted q4-07 card');
let list=currentList.replace(/const BLOG_POSTS = \[\{slug:['"]tiktok-shop-creator-agency-contract-control['"][\s\S]*?\},\{slug:/,`const BLOG_POSTS = [${acceptedCard},{slug:`);
if(!list.includes(`slug:'${plural}'`) || list.includes(`slug:'${singular}'`) || list.includes(`slug:"${singular}"`)) throw new Error('BlogList merge did not replace the concurrent singular card');
await fs.writeFile(path.join(out,'BlogList.jsx'),list);
const babel={};vm.createContext(babel);vm.runInContext(await fs.readFile(path.join(root,'.cache/babel-standalone-7.29.0.min.js'),'utf8'),babel);
const compiled=babel.Babel.transform(list,{presets:[['react',{runtime:'classic'}]],compact:true,minified:true,sourceType:'script'}).code+'\n';
await fs.writeFile(path.join(out,'BlogList.compiled.js'),compiled);

let index=await fs.readFile(path.join(current,'blog.html'),'utf8');
index=index.replace(/BlogList\.compiled\.js\?v=[^"']+/,`BlogList.compiled.js?v=${hash(compiled).slice(0,12)}`);
await fs.writeFile(path.join(out,'blog.html'),index);

let sitemap=await fs.readFile(path.join(current,'sitemap.xml'),'utf8');
if(!sitemap.includes(`<loc>${url}</loc>`)) sitemap=sitemap.replace('</urlset>',`  <url><loc>${url}</loc><lastmod>2026-10-03</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>\n  <url><loc>${url}?lang=zh</loc><lastmod>2026-10-03</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>\n</urlset>`);
await fs.writeFile(path.join(out,'sitemap.xml'),sitemap);
let llms=await fs.readFile(path.join(current,'llms.txt'),'utf8');
if(!llms.includes(url)) llms+=`\n- TikTok Shop Does Not Become a Party to Your Creator or Agency Contract: ${url}\n  - 中文：${url}?lang=zh\n`;
await fs.writeFile(path.join(out,'llms.txt'),llms);

const files=[];async function walk(d){for(const e of await fs.readdir(d,{withFileTypes:true})){const a=path.join(d,e.name);e.isDirectory()?await walk(a):files.push(path.relative(out,a))}}await walk(out);
if(files.length!==17) throw new Error(`Expected 17 recovery files, got ${files.length}`);
console.log(JSON.stringify({out,files:files.length,version:hash(compiled).slice(0,12),preservedConcurrentArticle:await fs.stat(path.join(current,'blog',`${singular}.html`)).then(()=>true)}));
