/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output:"export",
    basePath: process.env.NODE_ENV === 'production' ? '/your-username.github.io/<your-repo-name>' : '', // Replace with your details
    distDir: 'out', // Update this path as per your requirement
};

export default nextConfig;
