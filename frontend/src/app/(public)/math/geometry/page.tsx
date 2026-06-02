import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Геометрия",
    description: "Раздел о геометрии. Геометрические фигуры."
}

export default async function Page() {
    return (
        <main>
            <nav className="grid lg:grid-cols-2 gap-4">

                <Link href={`/math/geometry/circle`} 
                    className="link-hover"
                >
                    <div className="border p-4 rounded hover:ring flex flex-row">
                        <Image
                            src="/images/storage/circle_description_1.svg"
                            alt="Рисунок круга с указанием таких элементов как: диаметр, радиус, дуга, хорда, сегмент, сектор"
                            width={200}
                            height={200}
                        />

                        <div className="font-bold text-xl">
                            Круг и окружность
                        </div>
                    </div>
                </Link>
            </nav>
        </main>
    )
}