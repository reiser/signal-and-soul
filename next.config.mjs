// Managed by the DevShot Studio recipe — serves build assets under the per-VM
// public-proxy path. DEVSHOT_ASSET_PREFIX is exported by start-studio from this
// VM's xenstore vm-name; unset in a plain `next build`, so config stays default.
const assetPrefix = process.env.DEVSHOT_ASSET_PREFIX || undefined;

/** @type {import('next').NextConfig} */
const nextConfig = assetPrefix
  ? { assetPrefix, images: { path: `${assetPrefix}/_next/image` } }
  : {};

export default nextConfig;
