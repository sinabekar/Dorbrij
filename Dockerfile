# syntax=docker/dockerfile:1

# The site is a fully static `output: 'export'` build with no backend, so the
# runtime image is just nginx over the exported files — no Node in production.

# ---- build ----
# --platform=$BUILDPLATFORM keeps this stage on the builder's native arch even
# when targeting linux/amd64 from an arm64 Mac: `next build` here only emits
# static files, which are arch-independent, so there is nothing to gain from
# running Node under emulation.
FROM --platform=$BUILDPLATFORM node:22-alpine AS builder
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

# Empty = served from the domain root (dorbrij.ir). Override only if the site
# ever has to live under a sub-path.
ARG NEXT_PUBLIC_BASE_PATH=""
ENV NEXT_PUBLIC_BASE_PATH=$NEXT_PUBLIC_BASE_PATH
ENV NEXT_TELEMETRY_DISABLED=1
# Hard ceiling on the build's heap. The server this deploys to runs eleven
# other containers on 3GB of RAM, so an unbounded `next build` risks the
# kernel OOM-killer picking off someone else's database instead of this
# build. Capped, Node fails on its own terms and nothing else is touched.
ENV NODE_OPTIONS=--max-old-space-size=768

RUN npm run build

# ---- runtime ----
# `output: 'export'` means there is no Node server to run — just files.
FROM nginx:alpine AS runner
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/out /usr/share/nginx/html

EXPOSE 80
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s \
  CMD wget -qO- http://127.0.0.1/ >/dev/null 2>&1 || exit 1
