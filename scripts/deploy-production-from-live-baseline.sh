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
lock_owned=0
receipt_file=""
deployment_log=""
patch_fingerprint=""
deploy_mode="production"
patch_abs=""
lock_dir=""
receipt_url=""
receipt_deployment_id=""

write_receipt() {
  local state="$1" stage="$2" url="${3:-$receipt_url}" deployment="${4:-$receipt_deployment_id}" exit_code="${5:-null}"
  local temporary="${receipt_file}.$$.tmp"
  jq -n \
    --arg state "$state" --arg stage "$stage" --arg mode "$deploy_mode" \
    --arg patch "$patch_abs" --arg fingerprint "$patch_fingerprint" \
    --argjson pid "$$" --arg log "$deployment_log" --arg url "$url" \
    --arg deploymentId "$deployment" --argjson exitCode "$exit_code" \
    --arg updatedAt "$(date -u +%Y-%m-%dT%H:%M:%SZ)" \
    '{state:$state,stage:$stage,mode:$mode,patch:$patch,patchFingerprint:$fingerprint,pid:$pid,log:$log,url:$url,deploymentId:$deploymentId,exitCode:$exitCode,updatedAt:$updatedAt}' \
    > "$temporary"
  mv "$temporary" "$receipt_file"
}

cleanup() {
  if [[ -n "$snapshot" && -d "$snapshot" ]]; then rm -rf "$snapshot"; fi
  if [[ "$lock_owned" == "1" && -n "$lock_dir" ]]; then
    rm -f "$lock_dir/owner.json"
    rmdir "$lock_dir" 2>/dev/null || true
  fi
}
finish() {
  local code=$?
  if [[ "$code" != "0" && "$lock_owned" == "1" && -n "$receipt_file" && -f "$receipt_file" \
    && "$(jq -r '.state' "$receipt_file" 2>/dev/null)" == "running" \
    && "$(jq -r '.pid' "$receipt_file" 2>/dev/null)" == "$$" ]]; then
    write_receipt "failed" "terminal_error" "" "" "$code"
  fi
  cleanup
}
trap finish EXIT

[[ -d "$patch_dir" ]] || { echo "Patch directory does not exist: $patch_dir" >&2; exit 1; }
[[ -f "$project_link" ]] || { echo "Missing Vercel project link: $project_link" >&2; exit 1; }
[[ -f "$vercel_config" ]] || { echo "Missing site Vercel configuration: $vercel_config" >&2; exit 1; }
command -v jq >/dev/null
command -v npx >/dev/null
command -v base64 >/dev/null
command -v rsync >/dev/null

patch_abs="$(cd "$patch_dir" && pwd)"
patch_fingerprint="$(node "$repo_root/scripts/lib/wem-deployment-receipt.mjs" fingerprint "$patch_abs")"
[[ "${WE_MARKETING_DEPLOY_PREVIEW:-0}" == "1" ]] && deploy_mode="preview"
receipt_root="${WEM_DEPLOY_RECEIPT_DIR:-$repo_root/outputs/deployment-receipts}"
mkdir -p "$receipt_root/logs"
receipt_key="${patch_fingerprint:0:20}-${deploy_mode}"
receipt_file="$receipt_root/$receipt_key.json"
deployment_log="$receipt_root/logs/$receipt_key.log"
lock_dir="$receipt_root/wem-production-baseline.lock"

if [[ -f "$receipt_file" ]]; then
  classification="$(node "$repo_root/scripts/lib/wem-deployment-receipt.mjs" classify "$receipt_file" "$patch_fingerprint" "$deploy_mode")"
  case "$(jq -r '.classification' <<<"$classification")" in
    recoverable_success)
      echo "Recovered completed deployment receipt: $receipt_file"
      echo "Deployment URL: $(jq -r '.receipt.url' <<<"$classification")"
      exit 0
      ;;
    active_duplicate)
      echo "Deployment already running; inspect receipt instead of starting a duplicate: $receipt_file" >&2
      cat "$receipt_file" >&2
      exit 75
      ;;
    recoverable_deployment)
      receipt_url="$(jq -r '.receipt.url' <<<"$classification")"
      receipt_deployment_id="$(jq -r '.receipt.deploymentId' <<<"$classification")"
      echo "Resuming post-deployment checks from receipt: $receipt_file"
      ;;
  esac
fi

if ! mkdir "$lock_dir" 2>/dev/null; then
  owner_record="$(cat "$lock_dir/owner.json" 2>/dev/null || true)"
  owner_pid="$(jq -r '.pid // empty' <<<"$owner_record" 2>/dev/null || true)"
  if [[ ! "$owner_pid" =~ ^[0-9]+$ ]]; then
    echo "Deployment lock has no confirmed stale owner; preserving it for the process that is acquiring it: $lock_dir" >&2
    exit 75
  fi
  if kill -0 "$owner_pid" 2>/dev/null; then
    echo "Another WEM baseline deployment owns the shared lock: $lock_dir" >&2
    cat "$lock_dir/owner.json" >&2
    exit 75
  fi
  stale_lock="${lock_dir}.stale.$$"
  if ! mv "$lock_dir" "$stale_lock" 2>/dev/null; then
    echo "Deployment lock changed while stale ownership was being checked; retry from the receipt." >&2
    exit 75
  fi
  moved_owner_record="$(cat "$stale_lock/owner.json" 2>/dev/null || true)"
  if [[ "$moved_owner_record" != "$owner_record" ]]; then
    mv "$stale_lock" "$lock_dir" 2>/dev/null || true
    echo "Deployment lock owner changed during stale-lock recovery; preserving the lock and retrying later." >&2
    exit 75
  fi
  rm -f "$stale_lock/owner.json"
  rmdir "$stale_lock"
  if ! mkdir "$lock_dir" 2>/dev/null; then
    echo "Another deployment acquired the lock during stale-lock recovery; retry from the receipt." >&2
    exit 75
  fi
fi
lock_owned=1
jq -n --argjson pid "$$" --arg receipt "$receipt_file" --arg patch "$patch_abs" \
  --arg fingerprint "$patch_fingerprint" --arg mode "$deploy_mode" \
  '{pid:$pid,receipt:$receipt,patch:$patch,patchFingerprint:$fingerprint,mode:$mode}' > "$lock_dir/owner.json"
write_receipt "running" "baseline_reconstruction"

if [[ "${WEM_DEPLOY_TEST_ONLY:-0}" == "1" ]]; then
  sleep "${WEM_DEPLOY_TEST_HOLD_SECONDS:-0}"
  write_receipt "succeeded" "test_complete" "https://wem-website-test-wem1.vercel.app" "dpl_TEST" 0
  echo "Deployment receipt: $receipt_file"
  echo "Deployment URL: https://wem-website-test-wem1.vercel.app"
  exit 0
fi

if [[ -z "$deployment_id" ]]; then
  deployment_list="$(npx vercel ls wem-website --prod --yes)"
  printf '%s\n' "$deployment_list"
  deployment_url="$(grep -Eo 'https://wem-website-[a-z0-9-]+-wem1\.vercel\.app' <<<"$deployment_list" | sed -n '1p' || true)"
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
  encoded="$(npx vercel api "/v8/deployments/$WEM_DEPLOYMENT_ID/files/$uid" | jq -er '.data | select(type == "string" and length > 0)')"
  printf '%s' "$encoded" | base64 -D > "$dest"
  [[ -s "$dest" ]] || { echo "Downloaded deployment file is empty: $rel" >&2; return 1; }
}
total_downloads="$(wc -l < "$snapshot/file-map.tsv" | tr -d ' ')"
downloaded=0
batch_pids=()
while IFS=$'\t' read -r rel uid; do
  download_one "$rel" "$uid" &
  batch_pids+=("$!")
  if (( ${#batch_pids[@]} >= 16 )); then
    for child_pid in "${batch_pids[@]}"; do wait "$child_pid"; done
    downloaded=$((downloaded + ${#batch_pids[@]}))
    echo "Baseline download progress: $downloaded/$total_downloads files"
    write_receipt "running" "baseline_download_${downloaded}_of_${total_downloads}"
    batch_pids=()
  fi
done < "$snapshot/file-map.tsv"
if (( ${#batch_pids[@]} > 0 )); then
  for child_pid in "${batch_pids[@]}"; do wait "$child_pid"; done
  downloaded=$((downloaded + ${#batch_pids[@]}))
  echo "Baseline download progress: $downloaded/$total_downloads files"
  write_receipt "running" "baseline_download_${downloaded}_of_${total_downloads}"
fi

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
  const pathname = new URL(value).pathname.replace(/^\/+|\/+$/g, '');
  const relative = pathname ? `${pathname}.html` : 'index.html';
  if (!fs.existsSync(path.join(staticRoot, relative))) missing.push({ value, relative });
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
  write_receipt "dry_run_complete" "baseline_reconstruction_complete" "" "" 0
  echo "Live production baseline reconstruction passed; dry run complete."
  exit 0
fi

pushd "$snapshot" >/dev/null
if [[ -n "$receipt_url" && -n "$receipt_deployment_id" ]]; then
  inspect_json="$(npx vercel inspect "$receipt_url" --format=json)"
  inspect_id="$(jq -r '.id // empty' <<<"$inspect_json")"
  inspect_state="$(jq -r '.readyState // .status // empty' <<<"$inspect_json" | tr '[:lower:]' '[:upper:]')"
  [[ "$inspect_id" == "$receipt_deployment_id" && "$inspect_state" == "READY" ]] || {
    echo "Recorded deployment is not the matching READY deployment: $receipt_url" >&2
    exit 1
  }
  deployment_url="$receipt_url"
  deployment_result_id="$receipt_deployment_id"
  printf 'Recovered READY deployment %s (%s)\n' "$deployment_url" "$deployment_result_id" | tee "$deployment_log"
else
  write_receipt "running" "vercel_deploy"
  set +e
  if [[ "${WE_MARKETING_DEPLOY_PREVIEW:-0}" == "1" ]]; then
    npx vercel deploy --yes 2>&1 | tee "$deployment_log"
  else
    npx vercel deploy --prod --yes 2>&1 | tee "$deployment_log"
  fi
  deploy_exit="${PIPESTATUS[0]}"
  set -e
  [[ "$deploy_exit" == "0" ]] || exit "$deploy_exit"
  parsed_deployment="$(node "$repo_root/scripts/lib/wem-deployment-receipt.mjs" parse "$deployment_log")"
  deployment_url="$(jq -r '.url' <<<"$parsed_deployment")"
  deployment_result_id="$(jq -r '.deploymentId' <<<"$parsed_deployment")"
fi
popd >/dev/null
[[ -n "$deployment_url" ]] || { echo "Vercel exited successfully but no deployment URL was found in $deployment_log" >&2; exit 1; }
if [[ -z "$deployment_result_id" ]]; then
  deployment_result_id="$(npx vercel inspect "$deployment_url" --format=json | jq -r '.id // empty')"
fi
receipt_url="$deployment_url"
receipt_deployment_id="$deployment_result_id"
if [[ "${WE_MARKETING_DEPLOY_PREVIEW:-0}" == "1" ]]; then
  write_receipt "succeeded" "deployment_ready" "$deployment_url" "$deployment_result_id" 0
else
  write_receipt "running" "deployment_ready" "$deployment_url" "$deployment_result_id"
fi
echo "Deployment receipt: $receipt_file"
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
  write_receipt "succeeded" "production_health_complete" "$deployment_url" "$deployment_result_id" 0
fi
