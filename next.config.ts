import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

// Registers src/i18n/request.ts. This app doesn't use next-intl's
// middleware/routing (see src/i18n/routing.ts) — the config file exists only
// because next-intl's build tooling requires one to be present.
const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

// Empty when the site is served from a domain root (dorbrij.ir, and the
// Docker image). GitHub Pages serves it from /Dorbrij instead, so the Pages
// workflow sets NEXT_PUBLIC_BASE_PATH explicitly. Getting this wrong breaks
// every CSS/JS URL on the deployed site.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  ...(basePath ? { basePath, assetPrefix: `${basePath}/` } : {}),
};

export default withNextIntl(nextConfig);
