import { MetadataRoute } from 'next'


export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    return [
        {
            url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
            lastModified: '2026-07-01T08:53:55.061Z',
            changeFrequency: 'weekly',
            priority: 1,
            images: [
                `${process.env.NEXT_PUBLIC_SITE_URL}images/storage/example_seo_core_1.png`,
                `${process.env.NEXT_PUBLIC_SITE_URL}images/storage/tehzadanie.png`,
                `${process.env.NEXT_PUBLIC_SITE_URL}images/storage/figma.png`,
            ],
        },
        {
            url: `${process.env.NEXT_PUBLIC_SITE_URL}math`,
            lastModified: '2026-07-14T00:00:00.000Z',
            changeFrequency: 'weekly',
            priority: 0.5
        },
        {
            url: `${process.env.NEXT_PUBLIC_SITE_URL}math/algebra`,
            lastModified: '2026-07-27T00:00:00.000Z',
            changeFrequency: 'weekly',
            priority: 0.6,
            /*images: [
                
            ],*/
        },
        {
            url: `${process.env.NEXT_PUBLIC_SITE_URL}math/geometry`,
            lastModified: '2026-07-23T00:00:00.000Z',
            changeFrequency: 'weekly',
            priority: 0.5,
            images: [
                `${process.env.NEXT_PUBLIC_SITE_URL}images/storage/circle_description_1.svg`,
                `${process.env.NEXT_PUBLIC_SITE_URL}images/storage/Triangle_3.svg`,
                `${process.env.NEXT_PUBLIC_SITE_URL}images/storage/geometry/polygonal_line.svg`,
                `${process.env.NEXT_PUBLIC_SITE_URL}images/storage/geometry/rectangular_parallelepiped.svg`,
            ],
        },
        {
            url: `${process.env.NEXT_PUBLIC_SITE_URL}math/geometry/3d`,
            lastModified: '2026-07-13T00:00:00.000Z',
            changeFrequency: 'weekly',
            priority: 0.6,
            images: [
                `${process.env.NEXT_PUBLIC_SITE_URL}images/storage/geometry/rectangular_parallelepiped.svg`,
            ],
        },
        {
            url: `${process.env.NEXT_PUBLIC_SITE_URL}math/geometry/polygonal`,
            lastModified: '2026-07-09T00:00:00.000Z',
            changeFrequency: 'weekly',
            priority: 0.6,
            images: [
                `${process.env.NEXT_PUBLIC_SITE_URL}images/storage/geometry/polygonal_line.svg`,
                `${process.env.NEXT_PUBLIC_SITE_URL}images/storage/geometry/polygon.svg`,
            ],
        },
        {
            url: `${process.env.NEXT_PUBLIC_SITE_URL}math/geometry/circle`,
            lastModified: '2026-07-23T00:00:00.000Z',
            changeFrequency: 'weekly',
            priority: 0.6,
            images: [
                `${process.env.NEXT_PUBLIC_SITE_URL}images/storage/circle_description_1.svg`,
            ],
        },
        {
            url: `${process.env.NEXT_PUBLIC_SITE_URL}math/geometry/triangle`,
            lastModified: '2026-07-26T00:00:00.000Z',
            changeFrequency: 'weekly',
            priority: 0.6,
            images: [
                `${process.env.NEXT_PUBLIC_SITE_URL}images/storage/triangle_description_1.svg`,
                `${process.env.NEXT_PUBLIC_SITE_URL}images/storage/Triangle_3.svg`,
                `${process.env.NEXT_PUBLIC_SITE_URL}images/storage/Triangle_2.svg`,
                `${process.env.NEXT_PUBLIC_SITE_URL}images/storage/circle_triangle_1.svg`,
            ],
        },

        {
            url: `${process.env.NEXT_PUBLIC_SITE_URL}privacy`,
            lastModified: '2026-07-01T08:53:55.061Z',
            changeFrequency: 'monthly',
            priority: 0.1
        },
        {
            url: `${process.env.NEXT_PUBLIC_SITE_URL}login`,
            lastModified: '2026-07-01T08:53:55.061Z',
            changeFrequency: 'never',
            priority: 0
        },
        {
            url: `${process.env.NEXT_PUBLIC_SITE_URL}help`,
            lastModified: '2026-07-01T08:53:55.061Z',
            changeFrequency: 'monthly',
            priority: 0.8
        },
        {
            url: `${process.env.NEXT_PUBLIC_SITE_URL}about`,
            lastModified: '2026-07-01T08:53:55.061Z',
            changeFrequency: 'monthly',
            priority: 0.1
        },
    ]
}