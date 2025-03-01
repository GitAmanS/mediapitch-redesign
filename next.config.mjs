/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',  // Ensures a static export
    images: {
      unoptimized: true, // Required if using Next.js images
    },
  };

export default nextConfig;
