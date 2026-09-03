#!/usr/bin/env bash
set -euo pipefail

# Deploy a reviewed website patch without copying the shared working tree.
# The base is the current production deployment's immutable static output.
# Usage: scripts/deploy-production-from-live-baseline.sh PATCH_DIRECTORY [DEPLOYMENT_ID]

patch_dir="${1:?Pass a directory containing only reviewed ui_kits/website files.}"
deployment_id="${2:-}"
repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
project_link="$repo_root/.vercel/project.json"
vercel_config="$repo_root/ui_kits/website/vercel.json"
snapshot=""

cleanup() {
  if [[ -n "$snapshot" && -d "$snapshot" ]]; then rm -rf "$snapshot"; fi
}
trap cleanup EXIT

[[ -d "$patch_dir" ]] || { echo "Patch directory does not exist: $patch_dir" >&2; exit 1; }
[[ -f "$project_link" ]] || { echo "Missing Vercel project link: $project_link" >&2; exit 1; }
[[ -f "$vercel_config" ]] || { echo "Missing site Vercel configuration: $vercel_config" >&2; exit 1; }
command -v jq >/dev/null
command -v npx >/dev/null
command -v base64 >/dev/null
command -v rsync >/dev/null

if [[ -z "$deployment_id" ]]; then
  deployment_url="$(npx vercel ls wem-website --prod --yes | sed -n '/^https:\/\//{p;q;}')"
  [[ -n "$deployment_url" ]] || { echo "Could not resolve a production deployment URL." >&2; exit 1; }
  deployment_id="$(npx vercel inspect "$deployment_url" --format=json | jq -r '.id')"
fi
[[ -n "$deployment_id" ]] || { echo "Could not resolve a production deployment." >&2; exit 1; }

snapshot="$(mktemp -d /tmp/wem-live-production-patch.XXXXXX)"
mkdir -p "$snapshot/.vercel" "$snapshot/ui_kits/website/.vercel/output/static"
cp "$project_link" "$snapshot/.vercel/project.json"
ln -s ../ui_kits/website/.vercel/output "$snapshot/.vercel/output"

npx vercel api "/v6/deployments/$deployment_id/files?limit=10000" > "$snapshot/files.json"
node -e '
const fs=require("fs"); const tree=JSON.parse(fs.readFileSync(process.argv[1],"utf8"));
function walk(nodes,p="") {
  for (const n of nodes||[]) {
    const q=`${p}/${n.name}`;
    if (n.type==="file" && q.startsWith("/src/.vercel/output/")) {
      console.log(`${q.slice("/src/.vercel/output/".length)}\t${n.uid}`);
    } else if (n.type==="file" && q.startsWith("/src/ui_kits/website/") && n.name!=="vercel.json") {
      console.log(`static/${q.slice("/src/ui_kits/website/".length)}\t${n.uid}`);
    } else if (n.type==="directory") {
      walk(n.children,q);
    }
  }
}
walk(tree);
' "$snapshot/files.json" > "$snapshot/file-map.tsv"

export WEM_DEPLOYMENT_ID="$deployment_id" WEM_SNAPSHOT="$snapshot"
download_one() {
  rel="$1"; uid="$2"
  dest="$WEM_SNAPSHOT/ui_kits/website/.vercel/output/$rel"
  mkdir -p "$(dirname "$dest")"
  npx vercel api "/v8/deployments/$WEM_DEPLOYMENT_ID/files/$uid" | jq -r '.data' | base64 -D > "$dest"
}
batch_count=0
while IFS=$'\t' read -r rel uid; do
  download_one "$rel" "$uid" &
  batch_count=$((batch_count + 1))
  if (( batch_count >= 16 )); then
    wait
    batch_count=0
  fi
done < "$snapshot/file-map.tsv"
wait

rsync -a --exclude '.DS_Store' "$patch_dir/" "$snapshot/ui_kits/website/.vercel/output/static/"
rsync -a "$snapshot/ui_kits/website/.vercel/output/static/" "$snapshot/ui_kits/website/"
cp "$vercel_config" "$snapshot/ui_kits/website/vercel.json"
rm -f "$snapshot/files.json" "$snapshot/file-map.tsv"

for required_static_file in index.html robots.txt sitemap.xml llms.txt blog.html; do
  [[ -s "$snapshot/ui_kits/website/.vercel/output/static/$required_static_file" ]] || {
    echo "Refusing to deploy: reconstructed baseline is missing $required_static_file" >&2
    exit 1
  }
done

grep -q 'Sitemap: https://www.weglobalmarketing.com/sitemap.xml' \
  "$snapshot/ui_kits/website/.vercel/output/static/robots.txt" || {
    echo "Refusing to deploy: robots.txt does not declare the production sitemap" >&2
    exit 1
  }

grep -q '<loc>https://www.weglobalmarketing.com/</loc>' \
  "$snapshot/ui_kits/website/.vercel/output/static/sitemap.xml" || {
    echo "Refusing to deploy: sitemap.xml does not include the homepage" >&2
    exit 1
  }

node - "$snapshot/ui_kits/website/.vercel/output/static" <<'NODE'
const fs = require('fs');
const path = require('path');
const staticRoot = process.argv[2];
const sitemap = fs.readFileSync(path.join(staticRoot, 'sitemap.xml'), 'utf8');
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
const missing = [];
for (const value of urls) {
  const urlPath = new URL(value).pathname;
  const pathname = urlPath.replace(/^\/+|\/+$/g, '');
  const candidates = !pathname
    ? ['index.html']
    : urlPath.endsWith('/')
      ? [`${pathname}/index.html`, `${pathname}.html`]
      : [`${pathname}.html`, `${pathname}/index.html`];
  if (!candidates.some((relative) => fs.existsSync(path.join(staticRoot, relative)))) {
    missing.push({ value, relative: candidates.join(' or ') });
  }
}
if (missing.length) {
  console.error(`Refusing to deploy: ${missing.length} sitemap routes have no static HTML file`);
  for (const item of missing.slice(0, 20)) console.error(`${item.value} -> ${item.relative}`);
  process.exit(1);
}
console.log(`Pre-deploy sitemap coverage passed: ${urls.length} routes`);
NODE

if [[ "${WE_MARKETING_DRY_RUN:-0}" == "1" ]]; then
  find "$snapshot/ui_kits/website/.vercel/output/static" -type f | wc -l
  echo "Live production baseline reconstruction passed; dry run complete."
  exit 0
fi

pushd "$snapshot" >/dev/null
if [[ "${WE_MARKETING_DEPLOY_PREVIEW:-0}" == "1" ]]; then
  deployment_url="$(npx vercel deploy --yes)"
else
  deployment_url="$(npx vercel deploy --prod --yes)"
fi
popd >/dev/null

echo "Deployment URL: $deployment_url"

if [[ "${WE_MARKETING_DEPLOY_PREVIEW:-0}" != "1" ]]; then
  for production_path in / /robots.txt /blog /sitemap.xml /llms.txt; do
    status="$(curl -L -sS -o /dev/null -w '%{http_code}' --max-time 20 \
      "https://www.weglobalmarketing.com$production_path")"
    [[ "$status" == "200" ]] || {
      echo "Production verification failed ($status): $production_path" >&2
      exit 1
    }
  done

  curl -L -sS --max-time 20 https://www.weglobalmarketing.com/ \
    | grep -q '<title>WE Marketing' || {
      echo "Production verification failed: homepage title was not found" >&2
      exit 1
    }

  curl -L -sS --max-time 20 https://www.weglobalmarketing.com/robots.txt \
    | grep -q 'Sitemap: https://www.weglobalmarketing.com/sitemap.xml' || {
      echo "Production verification failed: robots.txt sitemap declaration was not found" >&2
      exit 1
    }

  node <<'NODE'
(async () => {
  const sitemapResponse = await fetch('https://www.weglobalmarketing.com/sitemap.xml');
  if (!sitemapResponse.ok) throw new Error(`sitemap returned ${sitemapResponse.status}`);
  const sitemap = await sitemapResponse.text();
  const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
  let cursor = 0;
  const failures = [];
  async function worker() {
    while (cursor < urls.length) {
      const url = urls[cursor++];
      try {
        const response = await fetch(url, { redirect: 'follow' });
        if (response.status !== 200) failures.push(`${response.status} ${url}`);
      } catch (error) {
        failures.push(`ERROR ${url}: ${error.message}`);
      }
    }
  }
  await Promise.all(Array.from({ length: 8 }, worker));
  if (failures.length) {
    console.error(`Production verification failed: ${failures.length} sitemap URLs are unhealthy`);
    for (const failure of failures.slice(0, 20)) console.error(failure);
    process.exit(1);
  }
  console.log(`Production sitemap verification passed: ${urls.length} URLs returned 200`);
})().catch((error) => {
  console.error(`Production sitemap verification failed: ${error.message}`);
  process.exit(1);
});
NODE
fi
