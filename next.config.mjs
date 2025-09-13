/** @type {import('next').NextConfig} */
const nextConfig = {
  // --- START OF PRECISION FIX ---
  // This is the critical line that tells Next.js to generate a
  // fully static site into the 'out' directory.
  output: 'export',
  // --- END OF PRECISION FIX ---

  // Your existing configurations are good and should be kept.
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Setting 'unoptimized: true' is a good practice for static exports,
  // especially on platforms like Cloudflare that might have their own image optimization.
  images: {
    unoptimized: true,
  },
}

export default nextConfig