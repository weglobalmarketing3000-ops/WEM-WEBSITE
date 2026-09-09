#!/usr/bin/env bash
set -euo pipefail

repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
test_root="$(mktemp -d /tmp/wem-deploy-lock-test.XXXXXX)"
cleanup() { rm -rf "$test_root"; }
trap cleanup EXIT

patch_dir="$test_root/patch with spaces"
receipt_dir="$test_root/receipts"
mkdir -p "$patch_dir" "$receipt_dir"
printf 'approved' > "$patch_dir/article.html"

WEM_DEPLOY_RECEIPT_DIR="$receipt_dir" WEM_DEPLOY_TEST_ONLY=1 WEM_DEPLOY_TEST_HOLD_SECONDS=4 \
  "$repo_root/scripts/deploy-production-from-live-baseline.sh" "$patch_dir" > "$test_root/owner.log" 2>&1 &
owner_pid=$!
for _ in {1..40}; do
  receipt_file="$(find "$receipt_dir" -maxdepth 1 -name '*.json' -print -quit)"
  [[ -n "$receipt_file" ]] && break
  sleep 0.1
done
[[ -n "${receipt_file:-}" ]]
before="$(shasum -a 256 "$receipt_file" | awk '{print $1}')"
set +e
WEM_DEPLOY_RECEIPT_DIR="$receipt_dir" WEM_DEPLOY_TEST_ONLY=1 \
  "$repo_root/scripts/deploy-production-from-live-baseline.sh" "$patch_dir" > "$test_root/duplicate.log" 2>&1
duplicate_exit=$?
set -e
[[ "$duplicate_exit" == "75" ]]
after="$(shasum -a 256 "$receipt_file" | awk '{print $1}')"
[[ "$before" == "$after" ]]
[[ "$(jq -r '.state' "$receipt_file")" == "running" ]]
wait "$owner_pid"

rm -f "$receipt_file"
mkdir "$receipt_dir/wem-production-baseline.lock"
jq -n --argjson pid 99999999 '{pid:$pid}' > "$receipt_dir/wem-production-baseline.lock/owner.json"
WEM_DEPLOY_RECEIPT_DIR="$receipt_dir" WEM_DEPLOY_TEST_ONLY=1 \
  "$repo_root/scripts/deploy-production-from-live-baseline.sh" "$patch_dir" > "$test_root/stale.log" 2>&1
receipt_file="$(find "$receipt_dir" -maxdepth 1 -name '*.json' -print -quit)"
[[ "$(jq -r '.state' "$receipt_file")" == "succeeded" ]]
[[ ! -d "$receipt_dir/wem-production-baseline.lock" ]]

mkdir "$receipt_dir/wem-production-baseline.lock"
set +e
WEM_DEPLOY_RECEIPT_DIR="$receipt_dir" WEM_DEPLOY_TEST_ONLY=1 \
  "$repo_root/scripts/deploy-production-from-live-baseline.sh" "$patch_dir" > "$test_root/empty-owner.log" 2>&1
empty_owner_exit=$?
set -e
[[ "$empty_owner_exit" == "75" ]]
[[ -d "$receipt_dir/wem-production-baseline.lock" ]]
echo "wem deployment lock tests passed: duplicate preserves owner receipt, stale owner recovers, empty owner is protected"
