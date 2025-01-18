/** @type {import('next').NextConfig} */
const nextConfig = {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'lh3.googleusercontent.com',
      port: '',
      pathname: '/a/**',
    },
  ],
  // experimental: { 
  //   serverActions: true,
  // },
};

module.exports = nextConfig;
