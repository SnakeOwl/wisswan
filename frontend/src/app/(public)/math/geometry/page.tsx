import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Геометрия",
    description: "Раздел о геометрии. Геометрические фигуры."
}

export default async function Page() {
    const sections = [{
        imageSrc: "/images/storage/circle_description_1.svg",
        imageAlt: "Рисунок круга с указанием таких элементов как: диаметр, радиус, дуга, хорда, сегмент, сектор",
        label: "Круг и окружность",
        link: `/math/geometry/circle`,
    }, {
        imageSrc: "/images/storage/triangle_description_1.svg",
        imageAlt: "Треугольник, на котором обозначены высота, медиана, биссектриса",
        label: "Треугольник",
        link: `/math/geometry/triangle`,
    },

    ]

    return (
        <main>
            <nav className="grid lg:grid-cols-2 gap-4">
                {sections.map((el, index) => (
                    <Link key={index}
                        href={el.link}
                        className="link-hover"
                    >
                        <div className="border p-4 rounded hover:ring flex flex-row">
                            <Image
                                src={el.imageSrc}
                                alt={el.imageAlt}
                                width={200}
                                height={200}
                                unoptimized
                            />

                            <div className="font-bold text-xl">
                                {el.label}
                            </div>
                        </div>
                    </Link>
                ))
                }
            </nav>
        </main>
    )
}