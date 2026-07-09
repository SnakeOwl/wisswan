import { Metadata } from "next"
import GeometryNavCard from "./_components/GeometryNavCard"
import { getDefaultOpenGraph } from "@/utils/SEO/getDefaultOpenGraph"

export const metadata: Metadata = {
    title: "Геометрия",
    description: "Раздел о геометрии. Геометрические фигуры.",
    keywords: ["геометрия", "раздел о геометрии"],
    openGraph: getDefaultOpenGraph({
        description: "Раздел геометрии"
    }),
}

export default async function Page() {

    const sections = [{
        imageSrc: "/images/storage/circle_description_1.svg",
        imageAlt: "Рисунок круга с указанием таких элементов как: диаметр, радиус, дуга, хорда, сегмент, сектор",
        label: "Круг и окружность",
        link: `/math/geometry/circle`,
        sublinks: [{
            href: "/math/geometry/circle#CircleDescription",
            label: "Общие сведения"
        }]
    }, {
        imageSrc: "/images/storage/Triangle_3.svg",
        imageAlt: "Прямоугольный треугольник с указанием сторон и углов",
        label: "Треугольник",
        link: `/math/geometry/triangle`,
        sublinks: [{
            href: "/math/geometry/triangle#CircleDescription",
            label: "Общие сведения"
        }, {
            href: "/math/geometry/triangle#CircleFullDescription",
            label: "Подробные сведения"
        }, {
            href: "/math/geometry/triangle#Theorems",
            label: "Теоремы"
        }, {
            href: "/math/geometry/triangle#EqualitySigns",
            label: "Тризнаки равенства треугольников"
        }, {
            href: "/math/geometry/triangle#RightTriangleFormulas",
            label: "Формулы прямоугольного треугольника"
        }]
    },{
        imageSrc: "/images/storage/geometry/polygon.svg",
        imageAlt: "Ломаная из четырёх отрезков",
        label: "Многоугольники",
        link: `/math/geometry/polygonal`,
        sublinks: [{
            href: "/math/geometry/polygonal#PolygonalLine",
            label: "Ломаная"
        }, {
            href: "/math/geometry/polygonal#Polygonal",
            label: "Многоугольники"
        }, {
            href: "/math/geometry/polygonal#PolygonalFormulas",
            label: "Формулы многоугольников"
        },
    ]
    },
    ]

    return (
        <main>
            <nav className="grid lg:grid-cols-2 gap-4">
                {sections.map((el, index) => (
                    <GeometryNavCard key={index}
                        card={el}
                    />
                ))
                }
            </nav>
        </main>
    )
}