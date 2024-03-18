/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: {
        // This allows you to export to static HTML files
        // Optionally, you can specify a subdirectory here
        // For example, if you want to export to '/out' directory:
        // path: '/out'
        // By default, it exports to the root directory
        path: '/menujuy/out', // Update this path as per your requirement
      },
};

export default nextConfig;
