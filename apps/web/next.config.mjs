/** @type {import('next').NextConfig} */
const nextConfig = {
  // Required because @nity/ui ships TSX source instead of compiled JS.
  // Next.js otherwise treats node_modules as pre-compiled and won't run them through SWC.
  transpilePackages: ['@nity/ui', '@nity/utils'],
};

export default nextConfig;
