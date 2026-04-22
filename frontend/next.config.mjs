/** @type {import('next').NextConfig} */
const nextConfig = {
    // В standalone билде нужно руками папку public копировать.
    output: "standalone",
    experimental: {
        serverActions: {
        allowedOrigins: ['wisswan.tech', 'localhost:3000'],
        },
    },
    typescript: {
        // на проде не хватает оперативы для сборки
        ignoreBuildErrors: true,
  },
};

export default nextConfig;
