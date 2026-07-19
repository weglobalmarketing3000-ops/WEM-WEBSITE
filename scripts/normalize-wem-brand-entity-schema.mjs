import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(SCRIPT_DIR, '..');
const BLOG_DIR = path.join(ROOT, 'ui_kits', 'website', 'blog');
const WRITE = process.argv.includes('--write');

const ORGANIZATION_ID = 'https://www.weglobalmarketing.com/#organization';
const EDITORIAL_TEAM_ID = 'https://www.weglobalmarketing.com/#editorial-team';
const LINKEDIN = 'https://www.linkedin.com/company/we-marketingtsp';

const canonicalOrganization = () => ({
  '@type': 'Organization',
  '@id': ORGANIZATION_ID,
  name: 'WE Marketing',
  alternateName: 'WEM',
  url: 'https://www.weglobalmarketing.com/',
  logo: {
    '@type': 'ImageObject',
    url: 'https://www.weglobalmarketing.com/assets/we-logo.png',
  },
  sameAs: [LINKEDIN],
});

const editorialTeam = () => ({
  '@type': 'Organization',
  '@id': EDITORIAL_TEAM_ID,
  name: 'WE Marketing Team',
  url: 'https://www.weglobalmarketing.com/about',
  parentOrganization: { '@id': ORGANIZATION_ID },
});

function normalizeNode(node) {
  if (!node || typeof node !== 'object') return false;
  let changed = false;

  if (node['@type'] === 'BlogPosting') {
    const nextAuthor = editorialTeam();
    const nextPublisher = canonicalOrganization();
    if (JSON.stringify(node.author) !== JSON.stringify(nextAuthor)) {
      node.author = nextAuthor;
      changed = true;
    }
    if (JSON.stringify(node.publisher) !== JSON.stringify(nextPublisher)) {
      node.publisher = nextPublisher;
      changed = true;
    }
  }

  return changed;
}

async function normalizeFile(filePath) {
  const source = await fs.readFile(filePath, 'utf8');
  let invalid = false;
  let changed = false;
  let blogPostingCount = 0;

  const next = source.replace(
    /<script([^>]*\btype=["']application\/ld\+json["'][^>]*)>([\s\S]*?)<\/script>/gi,
    (full, attrs, body) => {
      let blockChanged = false;
      let data;
      try {
        data = JSON.parse(body);
      } catch {
        invalid = true;
        return full;
      }

      const nodes = Array.isArray(data) ? data : (data['@graph'] || [data]);
      for (const node of nodes) {
        if (node?.['@type'] === 'BlogPosting') blogPostingCount += 1;
        if (normalizeNode(node)) {
          changed = true;
          blockChanged = true;
        }
      }

      if (!blockChanged) return full;
      return `<script${attrs}>\n${JSON.stringify(data)}\n</script>`;
    },
  );

  if (invalid) throw new Error(`Invalid JSON-LD in ${path.relative(ROOT, filePath)}`);
  if (blogPostingCount !== 1) throw new Error(`Expected one BlogPosting in ${path.relative(ROOT, filePath)}, found ${blogPostingCount}`);
  if (changed && WRITE) await fs.writeFile(filePath, next);
  return { changed };
}

const entries = (await fs.readdir(BLOG_DIR))
  .filter((name) => name.endsWith('.html'))
  .sort();

let changedFiles = 0;
for (const entry of entries) {
  const result = await normalizeFile(path.join(BLOG_DIR, entry));
  if (result.changed) changedFiles += 1;
}

const result = {
  mode: WRITE ? 'write' : 'check',
  blogHtmlFiles: entries.length,
  changedFiles,
  organizationId: ORGANIZATION_ID,
  editorialTeamId: EDITORIAL_TEAM_ID,
  sameAs: [LINKEDIN],
};

console.log(JSON.stringify(result, null, 2));

if (!WRITE && changedFiles) process.exitCode = 1;
