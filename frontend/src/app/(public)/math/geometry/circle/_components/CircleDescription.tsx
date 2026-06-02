import ContentDividerV1 from "@/app/_components/dividers/ContentDividerV1";
import Image from "next/image";

export default function CircleDescription() {
    return (
        <section>
            <ContentDividerV1 className='my-4'>
                <h2 className="text-2xl text-nowrap">Общие сведения</h2>
            </ContentDividerV1>

            <div>
                <Image
                    className="float-left lg:mr-4"
                    src="/images/storage/circle_description_1.svg"
                    width={400} height={400}
                    alt="Рисунок круга с указанием таких элементов как: диаметр, радиус, дуга, хорда, сегмент, сектор"
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
}