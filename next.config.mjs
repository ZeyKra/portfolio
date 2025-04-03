/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        dangerouslyAllowSVG: true
      },
    basePath: '/portfolio',
    env: { 
      NEXT_PUBLIC_BASE_PATH: '/portfolio'
    }
};

export default nextConfig;
