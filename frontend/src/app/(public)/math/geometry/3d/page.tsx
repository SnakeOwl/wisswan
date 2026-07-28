import ContentDividerV1 from "@/app/_components/dividers/ContentDividerV1"
import { getDefaultOpenGraph } from "@/utils/SEO/getDefaultOpenGraph"
import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
    title: "Трёхмерные фигуры",
    description: "Тёхмерные математические фигуры, их описание, формулы, свойства, теоремы",
    keywords: ['Трёхмерные фигуры', "Прямоугольный параллелепипед"],
    openGraph: getDefaultOpenGraph({
        description: "Трёхмерные фигуры",
        images: [(process.env.NEXT_PUBLIC_SITE_URL + "/images/storage/geometry/rectangular_parallelepiped.svg")]
    }),
}

export default async function Page() {
    return (
        <main>
            <RectangularParallelepiped />
        </main>
    )
}


const RectangularParallelepiped = () => (
    <section>
        <ContentDividerV1>
            <h2 id="RectangularParallelepiped" className="w-fit text-2xl text-wrap xl:text-nowrap">Прямоугольный параллелепипед</h2>
        </ContentDividerV1>

        <div className="flex flex-row flex-wrap xl:flex-nowrap">
            <figure>
                <Image
                    src={"/images/storage/geometry/rectangular_parallelepiped.svg"}
                    width={400} height={400}
                    alt="Прямоугольный параллелепипед с указанием высоты как a, длины как b, ширины как c."
                    unoptimized
                />
            </figure>

            <div>
                <ul className="list-disc list-inside"> Прямоугольный параллелепипед состоит из:
                    <li>прямоугольников, которые ещё называют <strong>гранями</strong>, всего их 6. Противоположные грани равны.</li>
                    <li>сторон, стороны ещё называют <strong>рёбрами</strong>, их 12.</li>
                    <li>вершин, они же <strong>вершины</strong> прямоугольников, их 8.</li>
                </ul>
                <p>В каждой вершине прямоугольного параллелепипеда сходятся 3 ребра. Их длины можно назвать измерениями параллелепипеда: <strong className="text-blue-700">длиной</strong>, <strong className="text-green-700">шириной</strong>, <strong className="text-red-700">высотой</strong></p>
                <p>На практике часто используется куб. <strong>Куб</strong> — это прямоугольный параллелепипед, у которого все стороны равны. Грани куба — это квадраты</p>
            </div>
        </div>

        <section>
            <h4 className="mt-4 mb-2 text-lg">Формулы</h4>
            <p>
                Объём обозначается прописной латинской буквой <i>V</i>. <br />
                Объём прямоугольного параллелепипеда равен произведению его длины, ширины, высоты. <br />
                <strong><i>V</i> = <span className="text-red-700">a</span> * <span className="text-blue-700">b</span> * <span className="text-green-700">c</span></strong>
            </p>
            <p>Объём куда равен произведению трёх сторон, которые равны между собой: <br />
                <strong><i>V</i> = <span className="text-red-700">a</span>&sup3;</strong>
            </p>

        </section>
    </section>
)
