import ContentDividerV1 from "@/app/_components/dividers/ContentDividerV1"
import { getDefaultOpenGraph } from "@/utils/SEO/getDefaultOpenGraph"
import { Metadata } from "next"
import Image from "next/image"
import Calculator from "./_components/Calculator"

export const metadata: Metadata = {
    title: "Прямоугольники",
    description: "Прямоугольники, их описание, формулы, свойства, теоремы",
    keywords: ['Прямоугольники'],
    openGraph: getDefaultOpenGraph({
        description: "Прямоугольники",
        images: [
            (process.env.NEXT_PUBLIC_SITE_URL + "/images/storage/geometry/square.svg"),
            (process.env.NEXT_PUBLIC_SITE_URL + "/images/storage/geometry/rectangle.svg")
        ]
    }),
}


export default async function Page() {
    return (
        <main>
            <Calculator />
            
            <Formulas />
        </main>
    )
}


const Formulas = () => (
    <section>
        <ContentDividerV1>
            <h2 id="Formulas" className="w-fit text-2xl text-wrap xl:text-nowrap">Формулы</h2>
        </ContentDividerV1>

        <h3 id="Fractions-defines" className="w-fit text-xl text-wrap xl:text-nowrap mt-4 mb-2 ">Обозначения</h3>

        <dl>
            <div>S <dt className="inline font-bold">Площадь прямоугольника (так же площадь квадрата)</dt> — <dd className="inline">размер внутренней поверхности.</dd> Измеряется обычно в м<sup>2</sup> или см<sup>2</sup>.</div>
            <div>P <dt className="inline font-bold">Периметр прямоугольника (так же периметр квадрата)</dt> — <dd className="inline">сумма длин его сторон.</dd></div>
            <div><span className="text-purple-700">D</span> <dt className="inline font-bold">Диагональ прямоугольника</dt> — <dd className="inline">прямой отрезок, идущий от одного угла к другому через центр.</dd></div>
        </dl>

        <div className="flex flex-col xl:flex-row flex-wrap gap-4 mt-4">
            <Image
                src={"/images/storage/geometry/square.svg"}
                alt={"Квадрат где углы помечены как: A, B, C, Z, стороны помечены как: отрезки AB и CZ как h, а BC и AZ как w. По центру проведена диагональ, помеченная как D."}
                width={200} height={200}
                unoptimized
            />

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-3 flex-1 text-xl">
                <div className="text-nowrap">S = <span className="text-green-700">w</span> * <span className="text-blue-700">h</span></div>
                <div className="text-nowrap">P = 2<span className="text-green-700">w</span> + 2<span className="text-blue-700">h</span></div>
                <div className="text-nowrap"><span className="text-purple-700">D</span> = &radic;(<span className="text-green-700">w</span><sup>2</sup> + <span className="text-blue-700">h</span><sup>2</sup>)</div>
            </div>
        </div>
    </section>
)