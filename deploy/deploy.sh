#!/usr/bin/env bash
# Deploy dorbrij.ir: build the static site here, ship it, rebuild the container
# there. Run from the repo root:  ./deploy/deploy.sh
#
# The build runs locally on purpose — the server has ~1GB of free RAM and no
# swap, so `next build` on it risks OOM-killing the other projects (postgres,
# mariadb, wrenai) sharing the box.
set -euo pipefail

SERVER="${SERVER:-root@82.115.18.200}"
REMOTE_DIR="${REMOTE_DIR:-/root/dorbrij}"

cd "$(dirname "$0")/.."

echo "==> Building static export"
rm -rf out
npm ci
npm run build

echo "==> Syncing to $SERVER:$REMOTE_DIR"
ssh "$SERVER" "mkdir -p $REMOTE_DIR"
rsync -az --delete \
  out nginx.conf Dockerfile.prebuilt docker-compose.yml \
  "$SERVER:$REMOTE_DIR/"

echo "==> Rebuilding container"
ssh "$SERVER" "cd $REMOTE_DIR && docker compose up -d --build"

echo "==> Health check"
ssh "$SERVER" "sleep 3; curl -sf -o /dev/null -w 'container: %{http_code}\n' http://127.0.0.1:3020/"

echo "==> Done"
