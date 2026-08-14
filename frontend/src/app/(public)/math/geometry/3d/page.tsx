import ContentDividerV1 from "@/app/_components/dividers/ContentDividerV1"
import { getDefaultOpenGraph } from "@/utils/SEO/getDefaultOpenGraph"
import { Metadata } from "next"
import Image from "next/image"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Button } from "@/components/ui/button"


export const metadata: Metadata = {
    title: "Трёхмерные фигуры",
    description: "Тёхмерные математические фигуры, их описание, формулы, свойства, теоремы",
    keywords: ['Трёхмерные фигуры', "Прямоугольный параллелепипед"],
    openGraph: getDefaultOpenGraph({
        description: "Трёхмерные фигуры",
        images: [
            (process.env.NEXT_PUBLIC_SITE_URL + "/images/storage/geometry/rectangular_parallelepiped.svg"),
            (process.env.NEXT_PUBLIC_SITE_URL + "/images/storage/geometry/right_prizm.svg"),
            (process.env.NEXT_PUBLIC_SITE_URL + "/images/storage/geometry/cylinder.svg"),
        ]
    }),
}

export default async function Page() {
    return (
        <main>
            <RectangularParallelepiped />

            <Prizm />

            <Cylinder />
        </main>
    )
}


const RectangularParallelepiped = () => (
    <section>
        <ContentDividerV1 className="my-4">
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


const Prizm = () => (
    <section>
        <ContentDividerV1 className="my-4">
            <h2 id="Prizm" className="w-fit text-2xl text-wrap xl:text-nowrap">Призма</h2>
        </ContentDividerV1>

        <dl>
            <div>
                <dt className="inline font-bold">Основания призмы</dt> — <dd className="inline">это две равные грани в виде многоугольников, которые лежат парралельно друг другу. По факту верхняя и нижняя фигуры.</dd>
            </div>
        </dl>

        <section>
            <h3 className="w-fit text-xl text-wrap xl:text-nowrap mt-4 mb-2">Прямая призма</h3>

            <p>У <strong>прямой призмы</strong> боковые рёбра стоят под углом в 90&deg;.</p>
            <dl>
                <div>
                    <dt className="inline font-bold">Правильная призма</dt> — <dd className="inline">это призма, у которой основания — это
                        правильные многоугольники
                        <HoverCard>
                            <HoverCardTrigger delay={10} closeDelay={100} render={<Button variant="secondary" aria-hidden>?</Button>} />
                            <HoverCardContent className="flex w-64 flex-col gap-0.5">
                                <div>У правильных многоугольников <b>все стороны равны</b></div>
                            </HoverCardContent>
                        </HoverCard>
                        , а боковые грани — равные прямоугольники
                        <HoverCard>
                            <HoverCardTrigger delay={10} closeDelay={100} render={<Button variant="secondary" aria-hidden>?</Button>} />
                            <HoverCardContent className="flex w-64 flex-col gap-0.5">
                                <div>У равных прямоугольников <b>одинаковая высота и ширина</b></div>
                            </HoverCardContent>
                        </HoverCard>
                        .</dd>
                </div>
            </dl>

            <p className="sr-only">У правильных многоугольников все стороны равны</p>
            <p className="sr-only">У равных прямоугольников одинаковая высота и ширина</p>


            <div>
                <figure className="xl:float-left flex flex-col items-center">
                    <Image
                        src={"/images/storage/geometry/right_prizm.svg"}
                        width={320} height={400}
                        alt="Правильная шестиугольная призма"
                        unoptimized
                    />

                    <figcaption className="text-sm font-bold">
                        Правильная шестиугольная призма
                    </figcaption>
                </figure>

                <p>S <sub>боковой поверхности</sub> — это общая площадь всех боковых граней призмы без учёта оснований.</p>
                <p className="text-lg font-bold">S <sub>боковой поверхности</sub> — P <sub>основания</sub> * <span className="text-sky-700">h</span></p>
            </div>
        </section>
    </section>
)


const Cylinder = () => (
    <section>
        <ContentDividerV1 className="my-4">
            <h2 id="Cylinder" className="w-fit text-2xl text-wrap xl:text-nowrap">Цилиндр</h2>
        </ContentDividerV1>

        <div className="flex flex-col xl:flex-row flex-wrap gap-4 mt-4">
            <Image
                src={"/images/storage/geometry/cylinder.svg"}
                alt={"Цилиндр, с пометками: r — радиус, EF — осевое сечение, h — высота, ABCD — осевое сечение L0 — длина окружности."}
                width={300} height={400}
                unoptimized
            />
            <div>
                <section>
                    <h3 id="Formulas" className="w-fit text-2xl text-wrap xl:text-nowrap mt-4 mb-2">Формулы</h3>
                    <p>S боковой поверхности цилиндра = <span className="text-green-700">L0</span> * <span className="text-blue-700">h</span></p>
                </section>

                <section>
                    <h3 className="w-fit text-xl text-wrap xl:text-nowrap mt-4 mb-2">Обозначения</h3>

                    <p><span className="text-blue-700">h</span> — высота</p>
                    <p><span className="text-red-700">r</span> — радиус основания</p>
                    <p>ABCD — Осевое сечение</p>
                    <p>EF — Диагональ призмы</p>
                </section>
            </div>
        </div>
    </section>
)