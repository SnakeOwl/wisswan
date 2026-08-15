import ContentDividerV1 from "@/app/_components/dividers/ContentDividerV1"
import { getDefaultOpenGraph } from "@/utils/SEO/getDefaultOpenGraph"
import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
    title: "База по геометрии",
    description: "Описание некоторых определений, свойств и правил, без которых, геомерию понять сложно",
    keywords: ['Трёхмерные фигуры', "Прямоугольный параллелепипед"],
    openGraph: getDefaultOpenGraph({
        description: "База по геометрии",
        images: [
            (process.env.NEXT_PUBLIC_SITE_URL + "images/storage/geometry/acute_angle.svg"),
            (process.env.NEXT_PUBLIC_SITE_URL + "images/storage/geometry/obtuse_angle.svg"),
            (process.env.NEXT_PUBLIC_SITE_URL + "images/storage/geometry/right_angle.svg"),
        ]
    }),
}



export default async function Page() {
    return (
        <main>
            <Definitions />
        </main>
    )
}


const Definitions = () => (
    <section>
        <ContentDividerV1 className="mb-4">
            <h2 id="Definitions" className="w-fit text-2xl text-wrap xl:text-nowrap">Определения</h2>
        </ContentDividerV1>


        <dl>
            <dt className="inline font-bold">Прямая</dt> — <dd className="inline">это прямая линия, бесконечная в обе стороны.</dd> <br />
            <dt className="inline font-bold">Луч</dt> — <dd className="inline">это часть прямой, но имеет начало и не имеет конца (бесконечен в одну сторону).</dd> <br />
            <dt className="inline font-bold">Отрезок</dt> — <dd className="inline">это часть прямой, но имеет концы на обеих сторонах (длина ограничена двумя точками).</dd> <br />
            <dt className="inline font-bold">Параллельные прямые</dt> — <dd className="inline">это прямые, которые не пересекаются.</dd> Обозначаются так: &#8741; , НЕ параллельные обозначаются так: &#x2226; <br />
            <dt className="inline font-bold">Перпендикулярные прямые</dt> — <dd className="inline">это прямые, которые при пересечении образуют между собой прямой угол.</dd> Обозначаются так: &#8869; <br />
            <dt className="inline font-bold">Аксиома</dt> — <dd className="inline">это утверждения о свойствах фигур, которые принимаются без доказательств.</dd> <br />
            <dt className="inline font-bold">Теорема</dt> — <dd className="inline">это утверждение, верность которой проверяется путём логических рассуждений, которые называют <b>доказательством</b></dd> <br />
            <dt className="inline font-bold">Пересекающиеся прямые</dt> — <dd className="inline">это те, которые имеют общую точку пересечения.</dd> <br />
            <dt className="inline font-bold">Параллельные прямые</dt> — <dd className="inline">это те, которые имеют лежат в одной плоскости и не пересекаются.</dd> <br />
            <dt className="inline font-bold">Противоположные лучи</dt> <dd className="inline">имеют общее начало и лежат на одной прямой. Их ещё называют <b>дополнительными</b>.</dd> <br />
            <dt className="inline font-bold">Равные отрезки</dt> <dd className="inline">Имеют одинаковую длину и их можно совместить наложением.</dd> <br />
            <dt className="inline font-bold">Длина отрезка</dt> — <dd className="inline">Это расстояние между двумя его концами (точками).</dd> 
        </dl>



        <section>
            <h3 className="mt-4 mb-2 text-lg text-wrap">Виды углов</h3>
            <div className="flex flex-col xl:flex-row gap-4 items-end justify-center">
                <figure className="flex flex-col items-center gap-2 border rounded-md p-4">
                    <Image
                        src={"/images/storage/geometry/acute_angle.svg"}
                        unoptimized
                        width={150} height={150}
                        alt="Острый угол"
                    />

                    <figcaption className="text-base text-center font-heading">
                        Острый угол
                    </figcaption>
                </figure>

                <figure className="flex flex-col items-center gap-2 border rounded-md p-4">
                    <Image
                        src={"/images/storage/geometry/right_angle.svg"}
                        unoptimized
                        width={150} height={150}
                        alt="Прямой угол"
                    />

                    <figcaption className="text-base text-center font-heading">
                        Прямой угол
                    </figcaption>
                </figure>

                <figure className="flex flex-col items-center gap-2 border rounded-md p-4">
                    <Image
                        src={"/images/storage/geometry/obtuse_angle.svg"}
                        unoptimized
                        width={150} height={150}
                        alt=""
                    />

                    <figcaption className="text-base text-center font-heading">
                        Тупой угол
                    </figcaption>
                </figure>

            </div>
        </section>
    </section>
)