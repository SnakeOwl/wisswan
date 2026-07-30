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
            lastModified: '2026-07-30T00:00:00.000Z',
            changeFrequency: 'weekly',
            priority: 0.6,
            images: [
                (process.env.NEXT_PUBLIC_SITE_URL + 'images/storage/algebra/percent_no_b.svg'),
                (process.env.NEXT_PUBLIC_SITE_URL + "images/storage/algebra/percent_no_a.svg"),
                (process.env.NEXT_PUBLIC_SITE_URL + "images/storage/geometry/trapezoid.svg"),
                (process.env.NEXT_PUBLIC_SITE_URL + "images/storage/algebra/percent_has_a_b.svg"),
                (process.env.NEXT_PUBLIC_SITE_URL + "images/storage/algebra/22.4_div_14.svg"),
                (process.env.NEXT_PUBLIC_SITE_URL + "images/storage/algebra/625.05_div_1.5.svg"),
                (process.env.NEXT_PUBLIC_SITE_URL + "images/storage/algebra/0.5784_div_0.048.svg"),
                (process.env.NEXT_PUBLIC_SITE_URL + "images/storage/algebra/set_complements.svg"),
                (process.env.NEXT_PUBLIC_SITE_URL + "images/storage/algebra/set_intersection.svg"),
                (process.env.NEXT_PUBLIC_SITE_URL + "images/storage/algebra/set_union.svg"),
                (process.env.NEXT_PUBLIC_SITE_URL + "images/storage/algebra/set_difference.svg"),
                (process.env.NEXT_PUBLIC_SITE_URL + "images/storage/algebra/decart_coordinates.svg"),
                (process.env.NEXT_PUBLIC_SITE_URL + "images/storage/algebra/decart_coordinates_with_dots.svg"),
                (process.env.NEXT_PUBLIC_SITE_URL + "images/storage/algebra/decart_coordinates_y_2_x.svg"),
                (process.env.NEXT_PUBLIC_SITE_URL + "images/storage/algebra/decart_coordinates_y_8_div_x.svg"),
            ],
        },
        {
            url: `${process.env.NEXT_PUBLIC_SITE_URL}math/geometry`,
            lastModified: '2026-07-30T00:00:00.000Z',
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
            url: `${process.env.NEXT_PUBLIC_SITE_URL}math/geometry/rectangles`,
            lastModified: '2026-07-29T00:00:00.000Z',
            changeFrequency: 'weekly',
            priority: 0.6,
            images: [
                `${process.env.NEXT_PUBLIC_SITE_URL}images/storage/geometry/square.svg`,
                `${process.env.NEXT_PUBLIC_SITE_URL}images/storage/geometry/rectangle.svg`,
            ],
        },
        {
            url: `${process.env.NEXT_PUBLIC_SITE_URL}math/geometry/3d`,
            lastModified: '2026-07-30T00:00:00.000Z',
            changeFrequency: 'weekly',
            priority: 0.6,
            images: [
                (process.env.NEXT_PUBLIC_SITE_URL + "/images/storage/geometry/rectangular_parallelepiped.svg"),
                (process.env.NEXT_PUBLIC_SITE_URL + "/images/storage/geometry/right_prizm.svg")
            ],
        },
        {
            url: `${process.env.NEXT_PUBLIC_SITE_URL}math/geometry/polygonal`,
            lastModified: '2026-07-30T00:00:00.000Z',
            changeFrequency: 'weekly',
            priority: 0.6,
            images: [
                `${process.env.NEXT_PUBLIC_SITE_URL}images/storage/geometry/polygonal_line.svg`,
                `${process.env.NEXT_PUBLIC_SITE_URL}images/storage/geometry/polygon.svg`,
                `${process.env.NEXT_PUBLIC_SITE_URL}images/storage/geometry/trapezoid.svg`,
                (process.env.NEXT_PUBLIC_SITE_URL + "images/storage/geometry/rhombus.svg"),
            ],
        },
        {
            url: `${process.env.NEXT_PUBLIC_SITE_URL}math/geometry/circle`,
            lastModified: '2026-07-27T00:00:00.000Z',
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