import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

// Registers src/i18n/request.ts. This app doesn't use next-intl's
// middleware/routing (see src/i18n/routing.ts) — the config file exists only
// because next-intl's build tooling requires one to be present.
const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '/Dorbrij',
  assetPrefix: '/Dorbrij/',
};

export default withNextIntl(nextConfig);