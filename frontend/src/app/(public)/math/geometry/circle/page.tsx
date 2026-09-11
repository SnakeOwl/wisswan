import { Metadata } from "next";
import ContentDividerV1 from "@/app/_components/dividers/ContentDividerV1";
import Image from "next/image";
import { getDefaultOpenGraph } from "@/utils/SEO/getDefaultOpenGraph";
import CircleCalculator from "../../_components/CircleCalculator";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export const metadata: Metadata = {
    title: "Круг и окружности",
    description: "Описание круга и окружностей, их свойства, формулы, теоремы",
    keywords: ['круг и окружность', "описание кругов и окружностей"],

    openGraph: getDefaultOpenGraph({
        description: "круг и окружности",
        images: [
            (process.env.NEXT_PUBLIC_SITE_URL + 'images/storage/circle_description_1.svg'),
            (process.env.NEXT_PUBLIC_SITE_URL + 'images/storage/geometry/circle-inner-corner.svg'),
        ]
    }),
}



export default function Page() {
    return (
        <main>
            <section>
                <ContentDividerV1 className='my-4'>
                    <h2 id="TriangleCalculator" className="w-fit text-2xl text-wrap xl:text-nowrap">Калькулятор окружности</h2>
                </ContentDividerV1>

                <CircleCalculator />
            </section>

            <Formulas />

            <Theorems />

            <CircleDescription />
        </main>
    )
}


const Formulas = () => (
    <section id="#Formulas">
        <ContentDividerV1 className='my-4'>
            <h2 className="text-2xl text-nowrap">Формулы</h2>
        </ContentDividerV1>

        <div className="flex flex-row flex-wrap gap-6">
            <div className="flex flex-col items-center">
                <div className="text-2xl">
                    S = &pi;<span className="text-green-700">R</span><sup>2</sup>
                </div>

                <span>
                    Площадь круга
                </span>
            </div>

            <div className="flex flex-col items-center">
                <div className="text-2xl">
                    C = &pi;<span className="text-blue-700">D</span> = 2&pi;<span className="text-green-700">R</span>
                </div>

                <span>
                    Длина окружности
                </span>
            </div>
        </div>
    </section>
)


const Theorems = () => (
    <section id="Theorems">
        <ContentDividerV1 className='my-4'>
            <h2 className="text-2xl text-nowrap">Теоремы</h2>
        </ContentDividerV1>


        <div className="flow-root">
            <figure className="float-left flex flex-col w-full md:w-fit items-center gap-2 border rounded-md p-2 relative md:mr-2">
                <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                />

                <Image
                    src="/images/storage/geometry/circle-inner-corner.svg"
                    width={300} height={300}
                    alt="Рисунок круга на котором зелёными линиями подписан вписанный угол, а синими линиями центральный угол. Центральный угол идёт из центра, вписанный идёт из края круга."
                    unoptimized
                />

                <figcaption className="text-base text-center font-heading max-w-[300px]">
                    <span className="text-blue-700">Две параллельные прямые</span> пересечены <span className="text-red-700">секущей</span>
                </figcaption>
            </figure>

            <p>Вписанный угол равен половине соответствующего ему центрального угла.</p>
        </div>
    </section>
)


const CircleDescription = () => (
    <section id="#CircleDescription">
        <ContentDividerV1 className='my-4'>
            <h2 className="text-2xl text-nowrap">Общие сведения</h2>
        </ContentDividerV1>

        <div className="flow-root">
            <figure className="float-left flex flex-col w-full md:w-fit items-center gap-2 border rounded-md p-2 relative md:mr-2">
                <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                />

                <Image
                className="block h-auto object-contain"
                    src="/images/storage/circle_description_1.svg"
                    width={400} height={400}
                    alt="Рисунок круга с указанием таких элементов как: диаметр, радиус, дуга, хорда, сегмент, сектор"
                    unoptimized
                />

                <figcaption className="text-base text-center font-heading max-w-[300px]">
                    <span className="text-blue-700">Две параллельные прямые</span> пересечены <span className="text-red-700">секущей</span>
                </figcaption>
            </figure>

            <p><strong className="text-blue-700" >Диаметр</strong> — это отрезок, который соединяет две точки окружности и обязательно проходит через её центр. Иногда обозначается так: &#8960;</p>
            <p><strong className="text-green-700">Радиус</strong> — это отрезок, соединяющий центр окружности с любой точкой, лежащей на этой окружности.</p>

            <p><strong>Окружность</strong>&nbsp;&mdash; это замкнутая линия на&nbsp;плоскости, все точки которой находятся на&nbsp;одинаковом расстоянии от&nbsp;одной точки&nbsp;&mdash; центра окружности.</p>
            <p><strong>Круг</strong>&nbsp;&mdash; это внутренняя часть плоскости, ограниченная окружностью.</p>
            <p><strong>Хордой</strong> окружности называется отрезок соединяющий две точки окружности.</p>
            <p><strong>Дугой</strong> окружности называется часть окружности, ограниченная двумя точками.</p>
            <p><strong>Сектором</strong> называется часть круга, заключенная между двумя радиусами.</p>

            <dl>
                <div><dt className="inline font-bold">Вписанный угол</dt> — <dd className="inline">угол, вершина которого лежит на окружности, а стороны пересекают эту окружность. </dd></div>
            </dl>
        </div>



    </section>
)