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
        images: [(process.env.NEXT_PUBLIC_SITE_URL +  'images/storage/circle_description_1.svg')]
    }),
}



export default function Page() {
    return (
        <main>
            <CircleDescription />

            {/* <CircleCalculator /> */}

        </main>
    )
}


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
                <p><b>Окружность</b>&nbsp;&mdash; это замкнутая линия на&nbsp;плоскости, все точки которой находятся на&nbsp;одинаковом расстоянии от&nbsp;одной точки&nbsp;&mdash; центра окружности.</p>
                <p><b>Круг</b>&nbsp;&mdash; это внутренняя часть плоскости, ограниченная окружностью.</p>
                <p><b>Хордой</b> окружности называется отрезок соединяющий две точки окружности.</p>
                <p><b>Дугой</b> окружности называется часть окружности, ограниченная двумя точками.</p>
                <p><b>Сектором</b> называется часть круга, заключенная между двумя радиусами.</p>
            </div>
        </div>
    </section>
)