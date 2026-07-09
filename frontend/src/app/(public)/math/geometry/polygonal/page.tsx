import ContentDividerV1 from "@/app/_components/dividers/ContentDividerV1";
import { getDefaultOpenGraph } from "@/utils/SEO/getDefaultOpenGraph";
import { Metadata } from "next";
import Image from "next/image";
import { InlineMath } from "react-katex";
import 'katex/dist/katex.min.css';


export const metadata: Metadata = {
    title: "Многоугольники",
    description: "Описание многоугольников, их формулы, свойства, теоремы",
    keywords: ['многоугольники', "описание многоугольников"],
    openGraph: getDefaultOpenGraph({
        description: "Многоугольники",
        images: [(process.env.NEXT_PUBLIC_SITE_URL + 'images/storage/polygon.svg')]
    }),
}


export default async function Page() {
    return (
        <main>
            <PolygonalLine />

            <Polygonal />
        </main>
    )
}


const PolygonalLine = () => (
    <section id="PolygonalLine">
        <ContentDividerV1>
            <h3 className="w-fit text-wrap xl:text-nowrap">Ломаная</h3>
        </ContentDividerV1>

        <div className="flex flex-row flex-wrap xl:flex-nowrap gap-3">
            <figure>
                <Image
                    src={"/images/storage/geometry/polygonal_line.svg"}
                    width={320} height={280}
                    alt="Ломаная A,B,C,D,E"
                    unoptimized
                />
            </figure>

            <div>
                <p>Ломаная ABCDE</p>
                <p>Вершины: A, B, C, D, E.</p>
                <p>Звенья: AB, BC, CD, DE</p>
                <p><strong>Длиной</strong> ломаной называется сумма длин её звеньев.</p>
                <p>Ломаная строится из нескольких точек, из которых три соседние не лежат на одной прямой. Далее из этих точек формируются отрезки. <strong>Точки</strong> называют <strong>вершинами ломаной</strong>, а <strong>отрезками</strong> называют <strong>звенья ломанной</strong></p>
                <p>Ломаные могут быть <strong>замкнутыми</strong> и <strong>незамкнутыми</strong>. <strong>Незамкнутые ломаные</strong> - это те, у которых конечная вершина последнего звена не является нальной вершиной ломаной (<i>по факту ломанная не зацикливается на начальной вершине</i>). <strong>Замкнутые ломаные</strong> - это те, у которых конечная вершина последнего звена является нальной вершиной ломаной (по факту ломанная зацикливается на начальной вершине).</p>
            </div>
        </div>

    </section>
)


const Polygonal = () => (
    <section id="Polygonal">
        <ContentDividerV1>
            <h2 className="w-fit text-wrap xl:text-nowrap">Многоугольник</h2>
        </ContentDividerV1>

        <div className="flex flex-row flex-wrap xl:flex-nowrap gap-3 mt-4 mb-2 ">
            <div>
                <p>Часть плоскости, с замкнутой ломаной по периметру называют <strong>многоугольником</strong>.</p>
                <p><strong>Стороны многоугольника</strong> - это звенья той ломаной, которая его формирует. <i>На рисунке это: a, b, c, d, e.</i></p>
                <p><strong>Вершины многоугольника</strong> - это вершины той ломаной, которая его формирует. <i>На рисунке это: A, B, C, D, E.</i></p>
                <p><strong>Периметром многоугольника</strong> называют сумму длин его сторон. В даном многоугольнике это: <strong>P = a + b + c + d + e</strong></p>
            </div>

            <figure>
                <Image
                    src={"/images/storage/geometry/polygon.svg"}
                    width={400} height={400}
                    alt="Многоугольник, где обозначены вершины: A, B, C, D, E и стороны: a, b, c, d ,e"
                    unoptimized
                />
            </figure>
        </div>

        <PolygonalFormulas />
    </section >
)

const PolygonalFormulas = () => (
    <section id="PolygonalFormulas">
        <ContentDividerV1>
            <h2 className="w-fit text-wrap xl:text-nowrap">Формулы многоугольников</h2>
        </ContentDividerV1>

        <ul>
            <li>
                {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                <span aria-hidden="true">
                    <InlineMath math={"P =\\sum_{i=1}^{n} a_i"} />
                </span>

                {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                <span className="sr-only">
                    P равно сумме от i равного единице до n элементов a с индексом i
                </span>

                — <strong>Периметр</strong>. Где <b>a</b> - это сторона, <b>n</b> - количество сторон в многоугольнике.
            </li>
        </ul>
    </section>
)