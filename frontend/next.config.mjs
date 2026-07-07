/** @type {import('next').NextConfig} */
const nextConfig = {
    /**
     * В standalone билде нужно руками копировать папки: 
     * public
     * .next/static
     * 
     * Сам билд будет в папке .next/standalone
     */ 
    output: "standalone",

    /**
     * Включаем кеш из Next 16: https://nextjs.org/docs/app/api-reference/config/next-config-js/cacheComponents
     * Кеширует то, что было помечено как "use cache" (асинхронные Компоненты и функции).
     * Кеширует на сервере, а клиентам отправляет откешированный вариант (один для всех, как static переменная в ООП классе).
     * НО: cookies(), headers(), or searchParams при необходимости нужно кидать как параметры для функции.
     * 
     * Для ассинхронных функций использовать с функцией cacheTag('myTag'), Чтобы через revalidateTag можно было кеш скинуть:
     * 'use cache'
     * cacheTag('tag-one', 'tag-two')
     * ИЛИ: можно использовать cacheLife: https://nextjs.org/docs/app/api-reference/config/next-config-js/cacheLife
     * Тогда сюда ниже нужно дописать параметры для кеша, вида:
     * cacheLife: {
     *  blog: {
     *       stale: 3600, // 1 hour
     *       revalidate: 900, // 15 minutes
     *       expire: 86400, // 1 day
     *       },
     *   },
     * и в асинхронных функциях уже писать:
     * 'use cache'
     * cacheLife('blog')
     * 
     */
    cacheComponents: true,
    
    reactCompiler: true,

    experimental: {
        /** Turbopack now supports filesystem caching in development, storing compiler artifacts on disk between runs for significantly faster compile times across restarts, especially in large projects. */
        turbopackFileSystemCacheForDev: true,

        serverActions: {
            allowedOrigins: ['wisswan.tech', 'localhost', '127.0.0.1'],
        },
    },
    typescript: {
        // на проде не хватает оперативы для сборки
        ignoreBuildErrors: true,
  },
};

export default nextConfig;
