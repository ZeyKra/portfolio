/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        dangerouslyAllowSVG: true
      },
    basePath: '/portfolio',
    env: { 
      NEXT_PUBLIC_BASE_PATH: '/portfolio',
      URL: 'https://zeykra.github.io/portfolio'
    }
};

export default nextConfig;
