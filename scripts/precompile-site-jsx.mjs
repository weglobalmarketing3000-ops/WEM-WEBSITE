import fs from 'node:fs/promises';
import path from 'node:path';
import vm from 'node:vm';
import https from 'node:https';
import crypto from 'node:crypto';

const ROOT = path.resolve('ui_kits/website');
const CACHE_DIR = path.resolve('.cache');
const BABEL_VERSION = '7.29.0';
const BABEL_CACHE = path.join(CACHE_DIR, `babel-standalone-${BABEL_VERSION}.min.js`);
const COMPILED_VERSION = '20260528-compiled';

async function fileExists(file) {
  try {
    await fs.access(file);
    return true;
  } catch {
    return false;
  }
}

function download(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        download(new URL(res.headers.location, url).toString()).then(resolve, reject);
        return;
      }
      if (res.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: ${res.statusCode}`));
        return;
      }
      const chunks = [];
      res.on('data', (chunk) => chunks.push(chunk));
      res.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
    }).on('error', reject);
  });
}

async function loadBabel() {
  await fs.mkdir(CACHE_DIR, { recursive: true });
  if (!(await fileExists(BABEL_CACHE))) {
    const code = await download(`https://unpkg.com/@babel/standalone@${BABEL_VERSION}/babel.min.js`);
    await fs.writeFile(BABEL_CACHE, code);
  }
  const code = await fs.readFile(BABEL_CACHE, 'utf8');
  const sandbox = {};
  vm.createContext(sandbox);
  vm.runInContext(code, sandbox);
  return sandbox.Babel;
}

function compile(Babel, source, filename) {
  return Babel.transform(source, {
    filename,
    presets: [['react', { runtime: 'classic' }]],
    comments: false,
    compact: true,
    minified: true,
    sourceType: 'script',
  }).code;
}

async function listFiles(dir, ext) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const out = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...await listFiles(full, ext));
    if (entry.isFile() && entry.name.endsWith(ext)) out.push(full);
  }
  return out;
}

function compiledPathForSource(sourcePath) {
  const parsed = path.parse(sourcePath);
  return path.join(parsed.dir, `${parsed.name}.compiled.js`);
}

function htmlCompiledScriptPath(htmlPath) {
  const rel = path.relative(ROOT, htmlPath).replace(/[\\/]/g, '__').replace(/\.html$/i, '');
  const hash = crypto.createHash('sha1').update(path.relative(ROOT, htmlPath)).digest('hex').slice(0, 8);
  return path.join(ROOT, '_compiled', `${rel}.${hash}.js`);
}

function stripQuery(src) {
  return src.split('?')[0];
}

function toPosix(p) {
  return p.split(path.sep).join('/');
}

function relativeSrc(fromHtml, toFile) {
  let rel = path.relative(path.dirname(fromHtml), toFile);
  if (!rel.startsWith('.')) rel = `./${rel}`;
  return toPosix(rel);
}

function replaceRuntimeScripts(html) {
  return html
    .replace(/<script src="https:\/\/unpkg\.com\/lucide@latest"><\/script>\n?/g, '<script src="/lucide-lite.js?v=20260528-lite"></script>\n')
    .replace(/<script src="\/lucide-lite\.js\?v=20260528-lite"><\/script>\n?/g, '<script src="/lucide-lite.js?v=20260528-lite"></script>\n')
    .replace(
      /<script src="https:\/\/unpkg\.com\/react@18\.3\.1\/umd\/react\.development\.js"[^>]*><\/script>\n?/g,
      '<script src="/vendor/react.production.min.js?v=18.3.1"></script>\n',
    )
    .replace(
      /<script src="https:\/\/unpkg\.com\/react@18\.3\.1\/umd\/react\.production\.min\.js"[^>]*><\/script>\n?/g,
      '<script src="/vendor/react.production.min.js?v=18.3.1"></script>\n',
    )
    .replace(
      /<script src="https:\/\/unpkg\.com\/react-dom@18\.3\.1\/umd\/react-dom\.development\.js"[^>]*><\/script>\n?/g,
      '<script src="/vendor/react-dom.production.min.js?v=18.3.1"></script>\n',
    )
    .replace(
      /<script src="https:\/\/unpkg\.com\/react-dom@18\.3\.1\/umd\/react-dom\.production\.min\.js"[^>]*><\/script>\n?/g,
      '<script src="/vendor/react-dom.production.min.js?v=18.3.1"></script>\n',
    )
    .replace(/<script src="https:\/\/unpkg\.com\/@babel\/standalone@7\.29\.0\/babel\.min\.js"[^>]*><\/script>\n?/g, '');
}

const Babel = await loadBabel();
const jsxFiles = await listFiles(ROOT, '.jsx');
const compiledJsx = new Map();

for (const jsxFile of jsxFiles) {
  const source = await fs.readFile(jsxFile, 'utf8');
  const compiled = compile(Babel, source, jsxFile);
  const target = compiledPathForSource(jsxFile);
  await fs.writeFile(target, `${compiled}\n`);
  compiledJsx.set(path.resolve(jsxFile), path.resolve(target));
}

await fs.mkdir(path.join(ROOT, '_compiled'), { recursive: true });

const htmlFiles = await listFiles(ROOT, '.html');
let updatedHtmlCount = 0;
let inlineCount = 0;

for (const htmlPath of htmlFiles) {
  let html = await fs.readFile(htmlPath, 'utf8');
  let next = replaceRuntimeScripts(html);
  const inlineParts = [];

  next = next.replace(/<script type="text\/babel" src="([^"]+)"><\/script>/g, (match, src) => {
    const cleanSrc = stripQuery(src);
    const sourcePath = path.resolve(path.dirname(htmlPath), cleanSrc);
    const compiledTarget = compiledJsx.get(sourcePath);
    if (!compiledTarget) {
      throw new Error(`No compiled target for ${src} in ${htmlPath}`);
    }
    return `<script src="${relativeSrc(htmlPath, compiledTarget)}?v=${COMPILED_VERSION}"></script>`;
  });

  next = next.replace(/<script type="text\/babel">([\s\S]*?)<\/script>/g, (match, code) => {
    const compiled = compile(Babel, code, htmlPath);
    inlineParts.push(compiled);
    return `<script src="${relativeSrc(htmlPath, htmlCompiledScriptPath(htmlPath))}?v=${COMPILED_VERSION}"></script>`;
  });

  if (inlineParts.length) {
    inlineCount += inlineParts.length;
    await fs.writeFile(htmlCompiledScriptPath(htmlPath), `${inlineParts.join('\n\n')}\n`);
  }

  if (next !== html) {
    await fs.writeFile(htmlPath, next);
    updatedHtmlCount += 1;
  }
}

console.log(JSON.stringify({
  compiledJsx: compiledJsx.size,
  updatedHtml: updatedHtmlCount,
  inlineScripts: inlineCount,
  compiledVersion: COMPILED_VERSION,
}, null, 2));
