#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..', 'ui_kits', 'website');

const koDir = path.join(root, 'ko', 'blog');
const files = fs.readdirSync(koDir).filter((name) => name.endsWith('.html'));
const strip = (value = '') => value.replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\s+/g, ' ').trim();
const attr = (html, re) => strip(html.match(re)?.[1] || '');
const posts = files.map((file) => {
  const slug = file.replace(/\.html$/, '');
  const html = fs.readFileSync(path.join(koDir, file), 'utf8');
  const published = attr(html, /"datePublished"\s*:\s*"([^"]+)"/i) || '2025-01-01';
  const title = attr(html, /<h1[^>]*>([\s\S]*?)<\/h1>/i);
  const excerpt = attr(html, /<meta\s+name="description"\s+content="([^"]+)"/i);
  const rawEyebrow = attr(html, /<(?:div|p)[^>]+class="(?:eyebrow|[^\"]*\beyebrow\b)[^"]*"[^>]*>([\s\S]*?)<\/(?:div|p)>/i);
  const eyebrow = /[가-힣]/.test(rawEyebrow) ? rawEyebrow : 'TIKTOK SHOP · 실무 가이드';
  const image = attr(html, /<meta\s+property="og:image"\s+content="[^"]*\/([^/"?]+)"/i) || attr(html, /<img[^>]+class="heroimg"[^>]+src="[^"]*\/([^/"?]+)"/i) || '';
  return { slug, title, excerpt, category: eyebrow, date: published, image };
}).filter((post) => post.title && post.excerpt).sort((a, b) => b.date.localeCompare(a.date));

const code = `const KOREAN_BLOG_POSTS=${JSON.stringify(posts)};
const formatKoDate=value=>{const [y,m,d]=value.split('-');return \`\${y}년 \${Number(m)}월 \${Number(d)}일\`};
const koThumb=image=>{const name=typeof image==='string'?image:(image&&image.en)||'';return name?\`/blog/\${name}\`:''};
const BlogList=()=>{const[query,setQuery]=React.useState('');const q=query.trim().toLocaleLowerCase();const visible=KOREAN_BLOG_POSTS.filter(post=>!q||[post.title,post.excerpt,post.category].join(' ').toLocaleLowerCase().includes(q));return React.createElement('section',{className:'ko-blog-list'},React.createElement('style',null,\`
.ko-blog-list{background:#f5f3ee;padding:54px 24px 110px;color:#171717}.ko-blog-inner{max-width:1180px;margin:auto}.ko-blog-top{display:flex;align-items:end;justify-content:space-between;gap:24px;margin-bottom:30px}.ko-blog-kicker{display:block;color:#d20d7d;font:800 12px/1.2 var(--font-mono);letter-spacing:.14em;text-transform:uppercase}.ko-blog-top h2{margin:10px 0 0;font:900 clamp(34px,5vw,62px)/.98 var(--font-display);letter-spacing:-.035em}.ko-blog-count{color:#68625b;font-weight:700}.ko-blog-search{display:flex;align-items:center;max-width:720px;margin:0 0 34px;padding:0 18px;background:#fff;border:1px solid #dcd6cd;border-radius:15px}.ko-blog-search input{width:100%;height:56px;border:0;outline:0;background:transparent;font:600 16px var(--font-sans)}.ko-blog-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px}.ko-blog-card{display:flex;flex-direction:column;min-width:0;overflow:hidden;color:inherit;text-decoration:none;background:#fff;border:1px solid #ded8cf;border-radius:18px;transition:.22s transform,.22s border-color,.22s box-shadow}.ko-blog-card:hover{transform:translateY(-3px);border-color:rgba(255,20,147,.45);box-shadow:0 18px 44px rgba(40,31,25,.1)}.ko-blog-thumb{aspect-ratio:16/9;background:linear-gradient(120deg,#211433,#0b0b12);overflow:hidden}.ko-blog-thumb img{width:100%;height:100%;object-fit:cover}.ko-blog-body{display:flex;flex:1;flex-direction:column;padding:22px}.ko-blog-category{color:#c20b73;font:800 11px/1.3 var(--font-mono);letter-spacing:.1em;text-transform:uppercase}.ko-blog-card h3{margin:13px 0 10px;font:850 25px/1.12 var(--font-sans);letter-spacing:-.025em}.ko-blog-card p{margin:0 0 20px;color:#605b55;font:500 15px/1.6 var(--font-sans)}.ko-blog-meta{margin-top:auto;padding-top:16px;border-top:1px solid #ece7df;color:#756f68;font:700 12px var(--font-sans)}.ko-blog-empty{grid-column:1/-1;padding:48px;text-align:center;background:#fff;border-radius:18px}@media(max-width:900px){.ko-blog-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(max-width:620px){.ko-blog-list{padding:38px 16px 72px}.ko-blog-top{align-items:flex-start;flex-direction:column}.ko-blog-grid{grid-template-columns:1fr}.ko-blog-card h3{font-size:23px}}
\`),React.createElement('div',{className:'ko-blog-inner'},React.createElement('div',{className:'ko-blog-top'},React.createElement('div',null,React.createElement('span',{className:'ko-blog-kicker'},'한국어 아티클 라이브러리'),React.createElement('h2',null,'최신 실무 가이드')),React.createElement('span',{className:'ko-blog-count'},\`\${visible.length}개 글\`)),React.createElement('label',{className:'ko-blog-search'},React.createElement('input',{type:'search',value:query,onChange:event=>setQuery(event.target.value),placeholder:'글, 주제 또는 전략 검색','aria-label':'한국어 글 검색'})),React.createElement('div',{className:'ko-blog-grid'},visible.map((post,index)=>React.createElement('a',{key:post.slug,href:\`/ko/blog/\${post.slug}\`,className:'ko-blog-card','data-rank':index+1},post.image&&React.createElement('div',{className:'ko-blog-thumb'},React.createElement('img',{src:koThumb(post.image),alt:post.title,loading:index<3?'eager':'lazy',onError:event=>{event.currentTarget.style.display='none'}})),React.createElement('div',{className:'ko-blog-body'},React.createElement('span',{className:'ko-blog-category'},post.category),React.createElement('h3',null,post.title),React.createElement('p',null,post.excerpt),React.createElement('span',{className:'ko-blog-meta'},formatKoDate(post.date),' · 실무 가이드')))),visible.length===0&&React.createElement('div',{className:'ko-blog-empty'},'검색 조건에 맞는 글이 없습니다.'))))};window.BlogList=BlogList;\n`;
fs.writeFileSync(path.join(root, 'ko-runtime', 'BlogList.compiled.js'), code);
console.log(JSON.stringify({ generated: posts.length, first: posts[0] }, null, 2));
