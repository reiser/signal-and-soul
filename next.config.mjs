// Managed by the DevShot Studio recipe.
// DEVSHOT_ASSET_PREFIX is exported by start-studio from this VM's xenstore
// vm-name; unset in a plain `next build`, so config stays default.
const prefix = process.env.DEVSHOT_ASSET_PREFIX || undefined;

/** @type {import('next').NextConfig} */
const nextConfig = prefix
  ? {
      // The public Studio browser proxy preserves the prefix when forwarding
      // to the dev server, so we set basePath + assetPrefix to that prefix
      // (HMR chunk URLs and CSS/JS asset URLs all need it).
      //
      // The on-VM e2e runner and the inspect/open tools hit the dev server
      // directly at http://127.0.0.1:3000/ with no prefix, so we ALSO add
      // rewrites that alias the bare / and /_next/* paths to the prefixed
      // paths — Next applies these before the basePath check, so the
      // magazine is reachable from both URLs.
      basePath: prefix,
      assetPrefix: prefix,
      images: { path: `${prefix}/_next/image` },
      async rewrites() {
        return [
          { source: '/_next/:path*', destination: `${prefix}/_next/:path*` },
          { source: '/:path*', destination: `${prefix}/:path*` },
        ];
      },
    }
  : {};

export default nextConfig;
