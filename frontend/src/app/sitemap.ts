import { MetadataRoute } from 'next'


export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    return [
        {
            url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
            lastModified: '2026-08-18T00:00:00.000Z',
            changeFrequency: 'monthly',
            priority: 1,
            images: [
                `${process.env.NEXT_PUBLIC_SITE_URL}images/storage/example_seo_core_1.png`,
                `${process.env.NEXT_PUBLIC_SITE_URL}images/storage/tehzadanie.png`,
                `${process.env.NEXT_PUBLIC_SITE_URL}images/storage/figma.png`,
            ],
        },
        {
            url: `${process.env.NEXT_PUBLIC_SITE_URL}cases`,
            lastModified: '2026-08-18T00:00:00.000Z',
            changeFrequency: 'monthly',
            priority: 0.8,
            images: [
                (process.env.NEXT_PUBLIC_SITE_URL + "images/storage/cases/burger_cucumber_preview.jpg"),
            ],
        },
        {
            url: `${process.env.NEXT_PUBLIC_SITE_URL}math`,
            lastModified: '2026-08-10T00:00:00.000Z',
            changeFrequency: 'monthly',
            priority: 0.5
        },
        {
            url: `${process.env.NEXT_PUBLIC_SITE_URL}math/algebra`,
            lastModified: '2026-08-13T00:00:00.000Z',
            changeFrequency: 'daily',
            priority: 0.8,
            images: [
                (process.env.NEXT_PUBLIC_SITE_URL + 'images/storage/algebra/percent-no-b.svg'),
                (process.env.NEXT_PUBLIC_SITE_URL + "images/storage/algebra/percent-no-a.svg"),
                (process.env.NEXT_PUBLIC_SITE_URL + "images/storage/geometry/trapezoid.svg"),
                (process.env.NEXT_PUBLIC_SITE_URL + "images/storage/algebra/percent-has-a-b.svg"),
                (process.env.NEXT_PUBLIC_SITE_URL + "images/storage/algebra/22.4-div-14.svg"),
                (process.env.NEXT_PUBLIC_SITE_URL + "images/storage/algebra/625.05-div-1.5.svg"),
                (process.env.NEXT_PUBLIC_SITE_URL + "images/storage/algebra/0.5784-div-0.048.svg"),
                (process.env.NEXT_PUBLIC_SITE_URL + "images/storage/algebra/set-complements.svg"),
                (process.env.NEXT_PUBLIC_SITE_URL + "images/storage/algebra/set-intersection.svg"),
                (process.env.NEXT_PUBLIC_SITE_URL + "images/storage/algebra/set-union.svg"),
                (process.env.NEXT_PUBLIC_SITE_URL + "images/storage/algebra/set-difference.svg"),
                (process.env.NEXT_PUBLIC_SITE_URL + "images/storage/algebra/decart-coordinates.svg"),
                (process.env.NEXT_PUBLIC_SITE_URL + "images/storage/algebra/decart-coordinates-with-dots.svg"),
                (process.env.NEXT_PUBLIC_SITE_URL + "images/storage/algebra/decart-coordinates-y-2-x.svg"),
                (process.env.NEXT_PUBLIC_SITE_URL + "images/storage/algebra/decart-coordinates-y-8-div-x.svg"),
                (process.env.NEXT_PUBLIC_SITE_URL + "images/storage/algebra/two-linear-formulas-same.svg"),
                (process.env.NEXT_PUBLIC_SITE_URL + "images/storage/algebra/two-linear-formulas-parralel.svg"),
                (process.env.NEXT_PUBLIC_SITE_URL + "images/storage/algebra/two-linear-formulas-crossed.svg"),
                (process.env.NEXT_PUBLIC_SITE_URL + "images/storage/algebra/function-y-2-x.svg"),
            ],
        },
        {
            url: `${process.env.NEXT_PUBLIC_SITE_URL}math/algebra/numbers`,
            lastModified: '2026-08-10T00:00:00.000Z',
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        {
            url: `${process.env.NEXT_PUBLIC_SITE_URL}math/algebra/algoritms`,
            lastModified: '2026-08-10T00:00:00.000Z',
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        {
            url: `${process.env.NEXT_PUBLIC_SITE_URL}math/algebra/fractions`,
            lastModified: '2026-08-10T00:00:00.000Z',
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        {
            url: `${process.env.NEXT_PUBLIC_SITE_URL}math/algebra/percents`,
            lastModified: '2026-08-10T00:00:00.000Z',
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        {
            url: `${process.env.NEXT_PUBLIC_SITE_URL}math/algebra/proportions`,
            lastModified: '2026-08-10T00:00:00.000Z',
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        {
            url: `${process.env.NEXT_PUBLIC_SITE_URL}math/algebra/sets`,
            lastModified: '2026-08-10T00:00:00.000Z',
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        {
            url: `${process.env.NEXT_PUBLIC_SITE_URL}math/algebra/coordinates`,
            lastModified: '2026-08-10T00:00:00.000Z',
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        {
            url: `${process.env.NEXT_PUBLIC_SITE_URL}math/algebra/power`,
            lastModified: '2026-08-10T00:00:00.000Z',
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        {
            url: `${process.env.NEXT_PUBLIC_SITE_URL}math/algebra/polynomias`,
            lastModified: '2026-08-10T00:00:00.000Z',
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        {
            url: `${process.env.NEXT_PUBLIC_SITE_URL}math/algebra/linear_equations`,
            lastModified: '2026-08-10T00:00:00.000Z',
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        {
            url: `${process.env.NEXT_PUBLIC_SITE_URL}math/algebra/functions`,
            lastModified: '2026-08-10T00:00:00.000Z',
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        {
            url: `${process.env.NEXT_PUBLIC_SITE_URL}math/geometry`,
            lastModified: '2026-07-30T00:00:00.000Z',
            changeFrequency: 'weekly',
            priority: 0.5,
            images: [
                `${process.env.NEXT_PUBLIC_SITE_URL}images/storage/circle_description_1.svg`,
                `${process.env.NEXT_PUBLIC_SITE_URL}images/storage/geometry/Triangle-3.svg`,
                `${process.env.NEXT_PUBLIC_SITE_URL}images/storage/geometry/polygonal-line.svg`,
                `${process.env.NEXT_PUBLIC_SITE_URL}images/storage/geometry/rectangular-parallelepiped.svg`,
            ],
        },
        {
            url: `${process.env.NEXT_PUBLIC_SITE_URL}math/geometry/base`,
            lastModified: '2026-08-24T00:00:00.000Z',
            changeFrequency: 'weekly',
            priority: 0.5,
            images: [
                (process.env.NEXT_PUBLIC_SITE_URL + "images/storage/geometry/acute-angle.svg"),
                (process.env.NEXT_PUBLIC_SITE_URL + "images/storage/geometry/obtuse-angle.svg"),
                (process.env.NEXT_PUBLIC_SITE_URL + "images/storage/geometry/right-angle.svg"),
                (process.env.NEXT_PUBLIC_SITE_URL + "images/storage/geometry/adjacent-angles.svg"),
                (process.env.NEXT_PUBLIC_SITE_URL + "images/storage/geometry/vertical-angles.svg"),
                (process.env.NEXT_PUBLIC_SITE_URL + "images/storage/geometry/right-angle-with-two-perpendicular.svg"),
                (process.env.NEXT_PUBLIC_SITE_URL + "images/storage/geometry/right-angle-with-perpendicular.svg"),
                (process.env.NEXT_PUBLIC_SITE_URL + "images/storage/geometry/perpendicular-bisector-of-a-segment.svg"),
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
            lastModified: '2026-08-13T00:00:00.000Z',
            changeFrequency: 'weekly',
            priority: 0.6,
            images: [
                (process.env.NEXT_PUBLIC_SITE_URL + "images/storage/geometry/rectangular-parallelepiped.svg"),
                (process.env.NEXT_PUBLIC_SITE_URL + "images/storage/geometry/right-prizm.svg"),
                (process.env.NEXT_PUBLIC_SITE_URL + "images/storage/geometry/cylinder.svg")
            ],
        },
        {
            url: `${process.env.NEXT_PUBLIC_SITE_URL}math/geometry/polygonal`,
            lastModified: '2026-07-30T00:00:00.000Z',
            changeFrequency: 'weekly',
            priority: 0.6,
            images: [
                `${process.env.NEXT_PUBLIC_SITE_URL}images/storage/geometry/polygonal-line.svg`,
                `${process.env.NEXT_PUBLIC_SITE_URL}images/storage/geometry/polygon.svg`,
                `${process.env.NEXT_PUBLIC_SITE_URL}images/storage/geometry/trapezoid.svg`,
                (process.env.NEXT_PUBLIC_SITE_URL + "images/storage/geometry/rhombus.svg"),
            ],
        },
        {
            url: `${process.env.NEXT_PUBLIC_SITE_URL}math/geometry/circle`,
            lastModified: '2026-08-24T00:00:00.000Z',
            changeFrequency: 'monthly',
            priority: 0.6,
            images: [
                (process.env.NEXT_PUBLIC_SITE_URL + 'images/storage/circle_description_1.svg'),
                (process.env.NEXT_PUBLIC_SITE_URL + 'images/storage/geometry/circle-inner-corner.svg'),

            ],
        },
        {
            url: `${process.env.NEXT_PUBLIC_SITE_URL}math/geometry/triangle`,
            lastModified: '2026-08-24T00:00:00.000Z',
            changeFrequency: 'weekly',
            priority: 0.6,
            images: [
                (process.env.NEXT_PUBLIC_SITE_URL + 'images/storage/geometry/Triangle-2.svg'),
                (process.env.NEXT_PUBLIC_SITE_URL + 'images/storage/geometry/Triangle-3.svg'),
                (process.env.NEXT_PUBLIC_SITE_URL + 'images/storage/geometry/equilateral-triangle.svg'),
                (process.env.NEXT_PUBLIC_SITE_URL + 'images/storage/geometry/isosceles-triangle.svg'),
                (process.env.NEXT_PUBLIC_SITE_URL + 'images/storage/geometry/scalene-triangle.svg'),
                (process.env.NEXT_PUBLIC_SITE_URL + 'images/storage/geometry/acute-triangle.svg'),
                (process.env.NEXT_PUBLIC_SITE_URL + 'images/storage/geometry/obtuse-triangle.svg'),
                (process.env.NEXT_PUBLIC_SITE_URL + 'images/storage/geometry/right-triangle.svg'),
            ],
        },
        {
            url: `${process.env.NEXT_PUBLIC_SITE_URL}math/calculators`,
            lastModified: '2026-08-07T00:00:00.000Z',
            changeFrequency: 'weekly',
            priority: 0.9,
            images: [
                `${process.env.NEXT_PUBLIC_SITE_URL}images/storage/geometry/square.svg`,
                `${process.env.NEXT_PUBLIC_SITE_URL}images/storage/geometry/Triangle-3.svg`,
            ],
        },
        {
            url: `${process.env.NEXT_PUBLIC_SITE_URL}math/calculators/circumference-calculator`,
            lastModified: '2026-08-07T00:00:00.000Z',
            changeFrequency: 'monthly',
            priority: 1,
            images: [
                (process.env.NEXT_PUBLIC_SITE_URL + 'images/storage/geometry/calculator-circle.svg'),
            ],
        },
        {
            url: `${process.env.NEXT_PUBLIC_SITE_URL}math/calculators/rectangles`,
            lastModified: '2026-08-07T00:00:00.000Z',
            changeFrequency: 'weekly',
            priority: 1,
            images: [
                `${process.env.NEXT_PUBLIC_SITE_URL}images/storage/geometry/rectangle.svg`,
                `${process.env.NEXT_PUBLIC_SITE_URL}images/storage/geometry/square.svg`,
            ],
        },
        {
            url: `${process.env.NEXT_PUBLIC_SITE_URL}math/calculators/triangle`,
            lastModified: '2026-08-07T00:00:00.000Z',
            changeFrequency: 'weekly',
            priority: 1,
            images: [
                `${process.env.NEXT_PUBLIC_SITE_URL}images/storage/geometry/Triangle-3.svg`,
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