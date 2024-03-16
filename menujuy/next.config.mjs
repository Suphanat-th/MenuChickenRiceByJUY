/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    reactStrictMode: true,
    experimental: {
        images: {
            // ... previous image optimization settings
        }
    }
};

export default nextConfig;
