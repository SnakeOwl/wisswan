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
        images: [
            (process.env.NEXT_PUBLIC_SITE_URL + 'images/storage/polygon.svg'),
            (process.env.NEXT_PUBLIC_SITE_URL + "images/storage/geometry/polygonal-line.svg"),
            (process.env.NEXT_PUBLIC_SITE_URL + "images/storage/geometry/trapezoid.svg"),
            (process.env.NEXT_PUBLIC_SITE_URL + "images/storage/geometry/rhombus.svg"),
        ],
    }),
}


export default async function Page() {
    return (
        <main>
            <PolygonalLine />

            <Polygonal />

            <Trapezoid />

            <Rhombus />
        </main>
    )
}


const PolygonalLine = () => (
    <section id="PolygonalLine">
        <ContentDividerV1 className="my-4">
            <h3 className="w-fit text-wrap xl:text-nowrap">Ломаная</h3>
        </ContentDividerV1>

        <div className="flex flex-row flex-wrap xl:flex-nowrap gap-3">
            <figure>
                <Image
                    src={"/images/storage/geometry/polygonal-line.svg"}
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
                <p>Ломаные могут быть <strong>замкнутыми</strong> и <strong>незамкнутыми</strong>. <strong>Незамкнутые ломаные</strong> - это те, у которых конечная вершина последнего звена не является начальной вершиной ломаной (<i>по факту ломанная не зацикливается на начальной вершине</i>). <strong>Замкнутые ломаные</strong> - это те, у которых конечная вершина последнего звена является начальной вершиной ломаной (по факту ломанная зацикливается на начальной вершине).</p>
            </div>
        </div>

    </section>
)




const Polygonal = () => (
    <section>
        <ContentDividerV1 className="my-4">
            <h2 id="Polygonal" className="w-fit text-wrap xl:text-nowrap">Многоугольник</h2>
        </ContentDividerV1>

        <div className="flex flex-row flex-wrap xl:flex-nowrap gap-3 mt-4 mb-2 ">
            <div>
                <p>Часть плоскости, с замкнутой ломаной по периметру называют <strong>многоугольником</strong>.</p>
                <p><strong>Стороны многоугольника</strong> - это звенья той ломаной, которая его формирует. <i>На рисунке это: a, b, c, d, e.</i></p>
                <p><strong>Вершины многоугольника</strong> - это вершины той ломаной, которая его формирует. <i>На рисунке это: A, B, C, D, E.</i></p>
                <p><strong>Периметром многоугольника</strong> называют сумму длин его сторон. В данном многоугольнике это:&nbsp;<b className="text-nowrap">P = a + b + c + d + e</b></p>
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
    <section>
        <ContentDividerV1 className="my-4">
            <h3 id="PolygonalFormulas" className="w-fit text-wrap xl:text-nowrap">Формулы многоугольников</h3>
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


const Trapezoid = () => (
    <section>
        <ContentDividerV1 className="my-4">
            <h2 id="Trapezoid" className="w-fit text-wrap xl:text-nowrap">Трапеция</h2>
        </ContentDividerV1>

        <div className="flex flex-col xl:flex-row gap-4">
            <Image
                src={"/images/storage/geometry/trapezoid.svg"}
                width={350} height={220}
                alt="Трапеция с обозначениями: углы обозначены как A, B, C, Z, диагональ AZ обозначена как D, точка пересечения диагоналей обозначена как O"
                unoptimized
            />

            <div>
                <dl>
                    <dt className="inline font-bold">Трапеция </dt> —
                    <dd className="inline">это четырёхугольник 2 стороны которого параллельны друг другу.</dd> Эти стороны являются основаниями.
                </dl>
            </div>
        </div>
    </section>
)


const Rhombus = () => (
    <section>
        <ContentDividerV1 className="my-4">
            <h2 id="Rhombus" className="w-fit text-wrap xl:text-nowrap">Ромб</h2>
        </ContentDividerV1>

        <p>У ромба все стороны равны.</p>

        <section>
            <h3 id="Rhombus-formulas" className="w-fit text-xl text-wrap xl:text-nowrap mt-4 mb-2 ">Формулы</h3>

            <figure className="w-full xl:w-fit flex flex-col items-center float-left xl:mr-4">
                <Image
                    src={"/images/storage/geometry/rhombus.svg"}
                    width={380} height={180}
                    alt="Ромб с обозначениями: точки на углах обозначены как: A, B, C, D. Высота обозначена как h. Диагональ AC обозначена как d1, диагональ BD обозначена как d2."
                    unoptimized
                />

                <figcaption className="text-sm text-center font-bold">
                    Ромб
                </figcaption>
            </figure>

            <p className="text-lg">P = 4 * сторону</p>

            <div>
                {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                <div aria-hidden="true" className="xl:text-xl inline">
                    <InlineMath math={"S = \\frac{d1 \\cdot d2}{2}"} />
                </div>

                {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                <span className="sr-only">
                    Площадь равна произведению диагоналей делённому на 2.
                </span>

                <i className="text-sm"> Диагонали пересекаются под прямым углом.</i>
            </div>

            <div>
                {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                <div aria-hidden="true" className="xl:text-xl inline">
                    <InlineMath math={"S = \\text{сторона} \\cdot h"} />
                </div>

                {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                <span className="sr-only">
                    Площадь равна произведению стороны на высоту.
                </span>

                <i className="text-sm"> Классическая формула как у параллелограмма.</i>
            </div>

            <div>
                {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                <div aria-hidden="true" className="xl:text-xl inline">
                    <InlineMath math={"S = \\text{сторона}^2 \\cdot \\sin{α}"} />
                </div>

                {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                <span className="sr-only">
                    Площадь равна произведению стороны в квадрате на синус угла Альфы (это угол BAD).
                </span>
            </div>
        </section>
    </section>
)

