import { Metadata } from "next";
import ContentDividerV1 from "@/app/_components/dividers/ContentDividerV1";
import Image from "next/image";
import { getDefaultOpenGraph } from "@/utils/SEO/getDefaultOpenGraph";

export const metadata: Metadata = {
    title: "Круг и окружности",
    description: "Описание круга и окружностей, их свойства, формулы, теоремы",
    keywords: ['круг и окружность', "описание кругов и окружностей"],

    openGraph: getDefaultOpenGraph({
        description: "круг и окружности",
        images: [(process.env.NEXT_PUBLIC_SITE_URL + 'images/storage/circle_description_1.svg')]
    }),
}



export default function Page() {
    return (
        <main>
            <CircleDescription />

            <Formulas />
            
            {/* <CircleCalculator /> */}

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
                    S = &pi;<span className="text-green-700">R</span>
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

const CircleDescription = () => (
    <section id="#CircleDescription">
        <ContentDividerV1 className='my-4'>
            <h2 className="text-2xl text-nowrap">Общие сведения</h2>
        </ContentDividerV1>

        <div className="flex flex-col xl:flex-row">
            <Image
                className="float-left lg:mr-4"
                src="/images/storage/circle_description_1.svg"
                width={400} height={400}
                alt="Рисунок круга с указанием таких элементов как: диаметр, радиус, дуга, хорда, сегмент, сектор"
                unoptimized
            />

            <div className="flex flex-col gap-2">
                <p><strong className="text-blue-700" >Диаметр</strong> — это отрезок, который соединяет две точки окружности и обязательно проходит через её центр. Иногда обозначается так: &#8960;</p> 
                <p><strong className="text-green-700">Радиус</strong> — это отрезок, соединяющий центр окружности с любой точкой, лежащей на этой окружности.</p>

                <p><strong>Окружность</strong>&nbsp;&mdash; это замкнутая линия на&nbsp;плоскости, все точки которой находятся на&nbsp;одинаковом расстоянии от&nbsp;одной точки&nbsp;&mdash; центра окружности.</p>
                <p><strong>Круг</strong>&nbsp;&mdash; это внутренняя часть плоскости, ограниченная окружностью.</p>
                <p><strong>Хордой</strong> окружности называется отрезок соединяющий две точки окружности.</p>
                <p><strong>Дугой</strong> окружности называется часть окружности, ограниченная двумя точками.</p>
                <p><strong>Сектором</strong> называется часть круга, заключенная между двумя радиусами.</p>
            </div>
        </div>
    </section>
)