/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    exportPathMap: async function (defaultPathMap) {
        return {
          '/': { page: '/' },
          // Add other routes if needed
        };
    },
    reactStrictMode: true,
};

export default nextConfig;
