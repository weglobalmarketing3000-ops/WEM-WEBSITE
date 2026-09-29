#!/bin/sh
set -eu
repo_root=$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)
target_root=${1:-"${HOME}/.codex/skills"}
install_link() {
  source_path=$1
  target_path=$2
  if [ -e "$target_path" ] || [ -L "$target_path" ]; then
    echo "Refusing to overwrite existing target: $target_path" >&2
    exit 1
  fi
  mkdir -p "$(dirname -- "$target_path")"
  ln -s "$source_path" "$target_path"
  echo "Installed: $target_path -> $source_path"
}
install_link "$repo_root" "$target_root/we-marketing-design"
install_link "$repo_root/skills/wem-daily-geo-blog-publisher" "$target_root/wem-daily-geo-blog-publisher"
echo "Automation scheduling remains a separate per-machine step."
