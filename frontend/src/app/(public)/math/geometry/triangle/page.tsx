import ContentDividerV1 from "@/app/_components/dividers/ContentDividerV1"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"



export default async function Page() {
    return (
        <main>
            <CircleDescription />

            <CircleFullDescription />
            <Theorems />
            <EqualitySigns />
        </main>
    )
}


export const metadata:Metadata = {
    title: "Треугольник",
    description: "Описание треугольника, свойства треугольника, калькулятор треугольников."
}


const CircleDescription = () => (
    <section id="CircleDescription">
        <ContentDividerV1 className='my-4'>
            <h2 className="text-2xl text-nowrap">Общие сведения</h2>
        </ContentDividerV1>

        <div>
            <Image
                className="float-left lg:mr-4"
                src="/images/storage/triangle_description_1.svg"
                width={400} height={400}
                alt="Треугольник, на котором обозначены высота, медиана, биссектриса"
            />

            <div className="flex flex-col gap-2">
                <p><b>Высотой</b> треугольника называется перпендикуляр, опущенный из&nbsp;вершины треугольника на&nbsp;противоположную сторону или на&nbsp;её&nbsp;продолжение.</p>
                <p><b>Медианой</b> треугольника называется отрезок, который соединяет вершину треугольника с&nbsp;серединой противоположной стороны</p>
                <p><b>Биссектрисой</b> треугольника нзывается отрезок биссектрисы угла треугольника, соединяющий вершину треугольника с&nbsp;точкой пересечения биссектрисы с&nbsp;противоположной стороны</p>
                <Link href={'#CircleFullDescription'}
                    className="link-hover text-sky-800"
                >
                    Более подробное описание
                </Link>
            </div>
        </div>
    </section>
)


const CircleFullDescription = () => (
    <section id="CircleFullDescription">
        <ContentDividerV1 className='my-4'>
            <h2 className="text-2xl text-nowrap">Подробные сведения</h2>
        </ContentDividerV1>

        <div>
            <Image
                className="float-left lg:mr-4"
                src="/images/storage/triangle_description_1.svg"
                width={400} height={400}
                alt="Треугольник, на котором обозначены высота, медиана, биссектриса"
            />

            <div className="flex flex-col">
                <p><b>Треугольником</b> называется трёхзвенная замкнутая ломаная вместе с&nbsp;частью плоскости, которую она ограничивает.</p>
                <p><b>Равными</b> треугольниками называются треугольники, которые можно совместить наложением.</p>
                <p><b>Равнобедренным</b> треугольником называется треугольник, у&nbsp;которого 2&nbsp;стороны равны.</p>
                <p><b>Равносторонним</b> треугольником называется треугольник, у&nbsp;которого все стороны равны.</p>
                <p><b>Периметром</b> треугольника (многоугольника) называется сумма длин его сторон.</p>

                <p><b>Высотой</b> треугольника называется перпендикуляр, опущенный из&nbsp;вершины треугольника на&nbsp;противоположную сторону или на&nbsp;её&nbsp;продолжение.</p>
                <p><b>Медианой</b> треугольника называется отрезок, который соединяет вершину треугольника с&nbsp;серединой противоположной стороны</p>
                <p><b>Биссектрисой</b> треугольника нзывается отрезок биссектрисы угла треугольника, соединяющий вершину треугольника с&nbsp;точкой пересечения биссектрисы с&nbsp;противоположной стороны</p>

            </div>
        </div>
    </section>
)


const Theorems = () => (
    <section id="Theorems">
        <ContentDividerV1 className='my-2'>
            <h3 className="text-xl text-nowrap">Теоремы</h3>
        </ContentDividerV1>
        <ul>
            <li>Если в&nbsp;треугольнике <b>высота является медианой</b>, то&nbsp;<b>треугольник равнобедренный</b></li>
            <li>Если в&nbsp;треугольнике <b>высота является биссектрисой</b>, то&nbsp;<b>треугольник равнобедренный</b></li>
            <li>Если в&nbsp;треугольнике <b>медиана является биссектрисой</b>, то&nbsp;<b>треугольник равнобедренный</b></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </section>
)


const EqualitySigns = () => (
    <section id="EqualitySigns">
        <ContentDividerV1 className='my-2'>
            <h4 className="text-lg text-nowrap">Тризнаки равенства треугольников</h4>
        </ContentDividerV1>

        <ul>
            <li><b>Первый признак (по&nbsp;двум сторонам и&nbsp;углу между ними)</b>: если две стороны и&nbsp;угол между ними одного треугольника соответственно равны двум сторонам и&nbsp;углу между ними&nbsp;другого треугольника, то&nbsp;такие треугольники равны.</li>
            <li><b>Второй признак (по&nbsp;стороне и&nbsp;двум прилежащим к&nbsp;ней углам)</b>: если сторона и&nbsp;два прилежащих к&nbsp;ней угла одного треугольника соответственно равны стороне и&nbsp;двум прилежащим к&nbsp;ней углам другого треугольника, то&nbsp;такие треугольники равны.</li>
            <li><b>Третий признак (по&nbsp;трем сторонам)</b>: Если три стороны одного треугольника соответственно равны трем сторонам другого треугольника, то&nbsp;такие треугольники равны.</li>
        </ul>
    </section>
)