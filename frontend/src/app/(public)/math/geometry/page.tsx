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
        }, {
            href: "/math/geometry/circle#Formulas",
            label: "Формулы"
        }
        ]
    }, {
        imageSrc: "/images/storage/Triangle_3.svg",
        imageAlt: "Прямоугольный треугольник с указанием сторон и углов",
        label: "Треугольник",
        link: `/math/geometry/triangle`,
        sublinks: [{
            href: "/math/geometry/triangle#TriangleCalculator",
            label: "Калькулятор"
        },{
            href: "/math/geometry/triangle#RightTriangleFormulas",
            label: "Формулы прямоугольного треугольника"
        }, {
            href: "/math/geometry/triangle#Theorems",
            label: "Теоремы"
        }, ]
    }, {
        imageSrc: "/images/storage/geometry/square.svg",
        imageAlt: "Квадрат где углы помечены как: A, B, C, Z, стороны помечены как: отрезки AB и CZ как h, а BC и AZ как w. По центру проведена диагональ, помеченная как D.",
        label: "Прямоугольники",
        link: `/math/geometry/rectangles`,
        sublinks: [{
            href: "/math/geometry/rectangles#Calculator",
            label: "Калькулятор"
        }, {
            href: "/math/geometry/rectangles#Formulas",
            label: "Формулы"
        }
        ]
    }, {
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
            href: "/math/geometry/polygonal#Trapezoid",
            label: "Трапеция"
        },{
            href: "/math/geometry/polygonal#Rhombus",
            label: "Ромб"
        }
        ]
    }, {
        imageSrc: "/images/storage/geometry/rectangular_parallelepiped.svg",
        imageAlt: "Прямоугольный параллелепипед с указанием высоты как a, длины как b, ширины как c.",
        label: "Трёхмерные фигуры",
        link: `/math/geometry/3d`,
        sublinks: [{
            href: "/math/geometry/3d#RectangularParallelepiped",
            label: "Прямоугольный параллелепипед"
        },{
            href: "/math/geometry/3d#Prizm",
            label: "Призма"
        }        
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