/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, 
    output: {
        // Specify the directory where the exported files should be generated
        // Optionally, you can specify a subdirectory here
        // For example, if you want to export to '/out' directory:
        // dir: '/out'
        // By default, it exports to the root directory
        dir: 'out', // Update this path as per your requirement
      },
    basePath: process.env.NODE_ENV === 'production' ? '/your-username.github.io/<your-repo-name>' : '', // Replace with your details
};

export default nextConfig;
