/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: process.env.NODE_ENV === 'production' ? '/your-username.github.io/<your-repo-name>' : '', // Replace with your details
};

export default nextConfig;
