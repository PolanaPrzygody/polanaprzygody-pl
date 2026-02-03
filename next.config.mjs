import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  async redirects() {
    return [
      {
        source: '/rejestracja',
        destination: '/umow-sie',
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'instagram.com',
      },
      {
        protocol: 'https',
        hostname: '*.cdninstagram.com',
      },
    ],
  },
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
});

export default withMDX(nextConfig);
