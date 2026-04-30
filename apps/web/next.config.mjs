/** @type {import('next').NextConfig} */
const nextConfig = {
  // Required because @playground/ui ships TSX source instead of compiled JS.
  // Next.js otherwise treats node_modules as pre-compiled and won't run them through SWC.
  transpilePackages: ['@playground/ui'],
};

export default nextConfig;
