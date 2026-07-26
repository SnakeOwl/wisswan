import ContentDividerV1 from "@/app/_components/dividers/ContentDividerV1"
import { getDefaultOpenGraph } from "@/utils/SEO/getDefaultOpenGraph"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Треугольники",
    description: "Описание треугольников, его формулы, свойства, теоремы",
    keywords: ['реугольник', "описание треугольников"],
    openGraph: getDefaultOpenGraph({
        description: "Треугольники",
        images: [(process.env.NEXT_PUBLIC_SITE_URL + 'images/storage/Triangle_3.svg')]
    }),
}


export default async function Page() {
    return (
        <main className="grid gap-4">
            <TriangleDescription />

            <RightTriangleFormulas />

            <Theorems />

            <TriangleFullDescription />

            <EqualitySigns />
        </main>
    )
}




const TriangleDescription = () => (
    <section id="CircleDescription">
        <ContentDividerV1 className='my-4'>
            <h2 className="text-2xl xl:text-nowrap mx-auto">Общие сведения</h2>
        </ContentDividerV1>

        <div className="flex flex-col xl:flex-row ">
            <Image
                className="float-left lg:mr-4"
                src="/images/storage/triangle_description_1.svg"
                width={300} height={300}
                alt="Треугольник, на котором обозначены высота, медиана, биссектриса"
                unoptimized
            />

            <div className="flex flex-col gap-2">
                <p><b>Высотой</b> треугольника называется перпендикуляр, опущенный из&nbsp;вершины треугольника на&nbsp;противоположную сторону или на&nbsp;её&nbsp;продолжение.</p>
                <p><b>Медианой</b> треугольника называется отрезок, который соединяет вершину треугольника с&nbsp;серединой противоположной стороны</p>
                <p><b>Биссектриса</b> идёт из угла треугольника и делит этот угол пополам</p>
                <Link href={'#CircleFullDescription'}
                    className="link-hover text-sky-800"
                >
                    Более подробное описание
                </Link>
            </div>
        </div>
    </section>
)


const TriangleFullDescription = () => (
    <section id="CircleFullDescription">
        <ContentDividerV1 className='my-4'>
            <h2 className="text-2xl text-nowrap">Подробные сведения</h2>
        </ContentDividerV1>

        <div className="flex flex-col xl:flex-row">
            <Image
                className="float-left lg:mr-4"
                src="/images/storage/triangle_description_1.svg"
                width={300} height={300}
                alt="Треугольник, на котором обозначены высота, медиана, биссектриса"
                unoptimized
            />

            <div className="flex flex-col">
                <p><b>Треугольником</b> называется трёхзвенная замкнутая ломаная вместе с&nbsp;частью плоскости, которую она ограничивает.</p>
                <p><b>Равными</b> треугольниками называются треугольники, которые можно совместить наложением.</p>
                <p><b>Периметром</b> треугольника (многоугольника) называется сумма длин его сторон.</p>

                <p><b>Высотой</b> треугольника называется перпендикуляр, опущенный из&nbsp;вершины треугольника на&nbsp;противоположную сторону или на&nbsp;её&nbsp;продолжение.</p>
                <p><b>Медианой</b> треугольника называется отрезок, который соединяет вершину треугольника с&nbsp;серединой противоположной стороны</p>
                <p><b>Биссектрисой</b> треугольника называется отрезок биссектрисы угла треугольника, соединяющий вершину треугольника с&nbsp;точкой пересечения биссектрисы с&nbsp;противоположной стороны</p>
            </div>
        </div>

        <section>
            <h3 className="text-md text-wrap xl:text-nowrap mt-4 mb-2">Виды треугольников в зависимости от числа равных сторон</h3>

            <dl className="grid xl:grid-cols-3 gap-4">
                <div className="flex flex-col items-center justify-between">
                    <Image
                        src="/images/storage/geometry/scalene_triangle.svg"
                        width={200} height={200}
                        unoptimized
                        alt="Разносторонний треугольник"
                    />
                    <div>
                        <dt className="inline font-bold">Разносторонний треугольник</dt> — <dd className="inline">все стороны разной длины.</dd>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-between">
                    <Image
                        src="/images/storage/geometry/isosceles_triangle.svg"
                        width={200} height={200}
                        unoptimized
                        alt="Равнобедренный треугольник"
                    />
                    <div>
                        <dt className="inline font-bold">Равнобедренный треугольник</dt> — <dd className="inline">2 стороны одинаковой длины.</dd>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-between">
                    <Image
                        src="/images/storage/geometry/equilateral_triangle.svg"
                        width={200} height={200}
                        unoptimized
                        alt="Равносторонний треугольник"
                    />
                    <div>
                        <dt className="inline font-bold">Равносторонний треугольник</dt> — <dd className="inline">все стороны одинаковой длины.</dd>
                    </div>
                </div>
            </dl>
        </section>

        <section>
            <h3 className="text-md text-wrap xl:text-nowrap mt-4 mb-2">Виды треугольников в зависимости от величины наибольшего угла</h3>

            <dl className="grid xl:grid-cols-3 gap-4">
                <div className="flex flex-col items-center justify-between">
                    <Image
                        src="/images/storage/geometry/acute_triangle.svg"
                        width={200} height={200}
                        unoptimized
                        alt="Остроугольный треугольник"
                    />

                    <div>
                        <dt className="inline font-bold">Остроугольный треугольник</dt> — <dd className="inline">наибольший угол менее 90&deg;.</dd>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-between">
                    <Image
                        src="/images/storage/geometry/right_triangle.svg"
                        width={200} height={200}
                        unoptimized
                        alt="Прямоугольный треугольник"
                    />

                    <div>
                        <dt className="inline font-bold">Прямоугольный треугольник</dt> — <dd className="inline">наибольший угол равен 90&deg;.</dd>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-between">
                    <Image
                        src="/images/storage/geometry/obtuse_triangle.svg"
                        width={200} height={200}
                        unoptimized
                        alt="Тупоугольный треугольник"
                    />

                    <div>
                        <dt className="inline font-bold">Тупоугольный треугольник</dt> — <dd className="inline">наибольший угол более 90&deg;.</dd>
                    </div>
                </div>
            </dl>
        </section>
    </section>
)


const Theorems = () => (
    <section id="Theorems">
        <ContentDividerV1 className='my-2'>
            <h3 className="text-xl text-nowrap">Теоремы</h3>
        </ContentDividerV1>

        <ul className="space-y-2">
            <li>Если в&nbsp;треугольнике <b>высота является медианой</b>, то&nbsp;<b>треугольник равнобедренный</b></li>
            <li>Если в&nbsp;треугольнике <b>высота является биссектрисой</b>, то&nbsp;<b>треугольник равнобедренный</b></li>
            <li>Если в&nbsp;треугольнике <b>медиана является биссектрисой</b>, то&nbsp;<b>треугольник равнобедренный</b></li>
            <li>В&nbsp;треугольнике против большей стороны лежит больший угол, а&nbsp;против большего угла лежит большая сторона</li>
            <li>Любая сторона треугольника меньше суммы двух других его сторон</li>
            <li><i>О&nbsp;свойстве точек биссектрисы угла</i>. Любая точка биссектрисы угла равноудалена от&nbsp;сторон угла. Если точка внутри угла равноудалена от&nbsp;сторон угла, то&nbsp;она лежит на&nbsp;биссектрисе этого угла.</li>
            <li><i>Свойство катета прямоугольного треугольника, лежащего против угла в&nbsp;30&deg;</i>. Катет прямоугольного треугольника, лежащий против угла в&nbsp;30&deg;, равен половине гипотенузы.</li>
            <li>Если в&nbsp;прямоугольном треугольнике катет равен половине гипотенузы, то&nbsp;этот катет лежит против угла в&nbsp;30&deg;.</li>

            <li className="list-none">
                <div className="flex flex-col xl:flex-row border rounded-md p-2">
                    <Image
                        src="/images/storage/Triangle_2.svg"
                        width={200} height={200}
                        alt="Треугольник, на котором показано как 3 биссектрисы пересекаются в центре вписанного круга"
                        unoptimized
                    />

                    <ul className="space-y-2">
                        <li>Каждая биссектриса угла в&nbsp;треугольнике делит его противолежащую сторону на&nbsp;отрезки, пропорциональные к&nbsp;двум другим сторонам треугольника: <span className="font-bold">BN/BA = CN/CA ; NB/NC = AB/AC</span></li>
                        <li>Все биссектрисы треугольника пересекаются в&nbsp;одной точке, которая является центром вписанной окружности.</li>
                    </ul>
                </div>
            </li>
            <li><span className="font-bold">Теорема косинусов:</span> квадрат стороны треугольника равен сумме квадратов двух других сторон минус удвоенное произведение этих сторон на&nbsp;косинус угла между ними.</li>
            <li>
                <div className="flex flex-col xl:flex-row xl:flex-nowrap gap-4 border rounded-md p-2">
                    <Image
                        src="/images/storage/circle_triangle_1.svg"
                        width={300} height={300}
                        alt="Прямоугольный треугольник с указанием сторон и углов"
                        unoptimized
                    />
                    <div>
                        <p><span className="font-bold">Теорема синусов:</span> стороны треугольника пропорциональны синусу противолежащих углов. Кроме того, это отношение равно диаметру окружности, описанной вокруг этого треугольника:</p>
                        <div className="text-md xl:text-2xl"><span className="text-blue-600">a</span> / sin(<span className="text-green-600">α</span>) == <span className="text-blue-600">b</span> / sin(<span className="text-green-600">β</span>) == <span className="text-blue-600">c</span> / sin(<span className="text-green-600">γ</span>) == 2<span className="text-red-600">R</span></div>
                    </div>
                </div>
            </li>
        </ul>
    </section>
)


const EqualitySigns = () => (
    <section id="EqualitySigns">
        <ContentDividerV1 className='my-2'>
            <h4 className="text-lg text-wrap xl:text-nowrap">Тризнаки равенства треугольников</h4>
        </ContentDividerV1>

        <ul className="space-y-2">
            <li><b>Первый признак (по&nbsp;двум сторонам и&nbsp;углу между ними)</b>: если две стороны и&nbsp;угол между ними одного треугольника соответственно равны двум сторонам и&nbsp;углу между ними&nbsp;другого треугольника, то&nbsp;такие треугольники равны.</li>
            <li><b>Второй признак (по&nbsp;стороне и&nbsp;двум прилежащим к&nbsp;ней углам)</b>: если сторона и&nbsp;два прилежащих к&nbsp;ней угла одного треугольника соответственно равны стороне и&nbsp;двум прилежащим к&nbsp;ней углам другого треугольника, то&nbsp;такие треугольники равны.</li>
            <li><b>Третий признак (по&nbsp;трем сторонам)</b>: Если три стороны одного треугольника соответственно равны трем сторонам другого треугольника, то&nbsp;такие треугольники равны.</li>
        </ul>

        <ContentDividerV1 className='mt-4 mb-2'>
            <h5 className="text-md text-wrap xl:text-nowrap">Признаки равенства прямоугольных трегольников</h5>
        </ContentDividerV1>

        <ol className="list-decimal list-inside">
            <li>По&nbsp;двум катетам. Если катеты одного прямоугольного треугольника соответственно равны двум катетам другого прямоугольного треугольника, то&nbsp;такие треугольники равны.</li>
            <li>По&nbsp;катету и&nbsp;прилежащему острому углу. Если катет и&nbsp;прилежащий к&nbsp;нему острый угол одного прямоугольного треугольника соответственно равны катету и&nbsp;прилежащему к&nbsp;нему острому углу другого прямоугольного треугольника, то&nbsp;такие треугольники равны.</li>
            <li>По&nbsp;катету и&nbsp;противолежащему острому углу. Если катет и&nbsp;противолежащий острый угол одного прямоугольного треугольника соответственно равны катету и&nbsp;противолежащему острому углу другого прямоугольного треугольника, то&nbsp;такие треугольники равны.</li>
            <li>По&nbsp;гипотенузе и&nbsp;острому углу. Если гипотенуза и&nbsp;острый угол одного прямоугольного треугольника соответственно равны гипотенузе и&nbsp;острому углу другого прямоугольного треугольника, то&nbsp;такие треугольники равны.</li>
            <li>По&nbsp;катету и&nbsp;гипотенузе. Если катет и&nbsp;гипотенуза одного прямоугольного треугольника соответственно равны катету и&nbsp;гипотенузе другого прямоугольного треугольника, то&nbsp;такие треугольники равны.</li>
        </ol>
    </section>
)

const RightTriangleFormulas = () => {
    /**
     * используемые цвета на картинке
     * e - text-amber-700   <span className="text-amber-600">e</span>
     * f - text-lime-700    <span className="text-lime-600">f</span>
     * g - text-cyan-700    <span className="text-cyan-600">g</span>
     * A - text-red-700     <span className="text-red-600">A</span>
     * B - text-blue-700    <span className="text-blue-600">B</span>
     * C - text-green-700   <span className="text-green-600">C</span>
     * α - text-amber-700   <span className="text-amber-600">α</span>
     * γ - text-pink-700    <span className="text-pink-600">γ</span>
     * ω - text-purple-700  <span className="text-purple-600">ω</span>
     */
    const formulas: React.ReactNode[] = [

    ];

    return (
        <section id="RightTriangleFormulas">
            <ContentDividerV1 className='my-2'>
                <h2 className="text-lg text-wrap xl:text-nowrap">Формулы прямоугольного треугольника</h2>
            </ContentDividerV1>

            <div className="flex flex-col xl:flex-row gap-4 max-w-4xl mx-auto">
                <ul className="tex-md xl:text-xl flex-1 font-bold space-y-2">
                    <li>
                        <span className="text-emerald-600">f</span> = <span>&radic;<span className="overline decoration-solid"><span className="text-amber-700">e</span>&sup2; + <span className="text-cyan-700">g</span>&sup2;</span></span>  <span className="font-normal text-base">(Теорема Пифагора)</span>
                    </li>
                    <li>
                        <span className="text-lime-600">f</span> = <span className="text-amber-600">e</span> / cos(<span className="text-amber-600">α</span>) == <span className="text-cyan-600">g</span> / cos(<span className="text-purple-600">ω</span>) == <span className="text-amber-600">e</span> / sin(<span className="text-purple-600">ω</span>) == <span className="text-cyan-600">g</span> / sin(<span className="text-amber-600">α</span>)
                    </li>
                    <li>
                        <span className="text-amber-600">e</span> = <span className="text-lime-600">f</span> * cos(<span className="text-amber-600">α</span>) == <span className="text-lime-600">f</span> * sin(<span className="text-purple-600">ω</span>) == <span className="text-cyan-600">g</span> * tg(<span className="text-purple-600">ω</span>) == <span className="text-cyan-600">g</span> / tg(<span className="text-amber-600">α</span>)
                    </li>
                    <li>
                        <span className="text-cyan-600">g</span> = <span className="text-lime-600">f</span> * cos(<span className="text-purple-600">ω</span>) == <span className="text-lime-600">f</span> * sin(<span className="text-amber-600">α</span>) == <span className="text-amber-600">e</span> * tg(<span className="text-amber-600">α</span>) == <span className="text-amber-600">e</span> / tg(<span className="text-purple-600">ω</span>)
                    </li>
                    <li>
                        S = (<span className="text-amber-600">e</span> * <span className="text-cyan-600">g</span>) / 2 <span className="text-base font-normal">(Площадь)</span>
                    </li>
                    <li>
                        <span className="text-amber-600">e</span>&sup2; = <span className="text-cyan-600">g</span>&sup2; + <span className="text-lime-600">f</span>&sup2; - 2<span className="text-cyan-600">g</span><span className="text-lime-600">f</span> * cos(<span className="text-purple-600">ω</span>) <span className="text-base font-normal">(Теорема косинусов)</span>
                    </li>
                    <li>
                        <span className="text-cyan-600">g</span>&sup2; = <span className="text-amber-600">e</span>&sup2; + <span className="text-lime-600">f</span>&sup2; - 2<span className="text-amber-600">e</span><span className="text-lime-600">f</span> * cos(<span className="text-amber-600">α</span>) <span className="text-base font-normal">(Теорема косинусов)</span>
                    </li>
                    <li>
                        <span className="text-emerald-600">f</span>&sup2; = <span className="text-amber-600">e</span>&sup2; + <span className="text-cyan-600">g</span>&sup2; - 2<span className="text-amber-600">e</span><span className="text-cyan-600">g</span> * cos(<span className="text-pink-600">γ</span>) <span className="text-base font-normal">(Теорема косинусов)</span>
                    </li>
                    <li>
                        <span className="text-base font-normal">Формула Герона:</span> S = &radic;<span className="overline decoration-solid">П (П - <span className="text-amber-600">e</span>) (П - <span className="text-cyan-600">g</span>) (П - <span className="text-lime-600">f</span>)</span><span className="text-base font-normal">, где</span> П = (<span className="text-amber-600">e</span> + <span className="text-lime-600">f</span> + <span className="text-cyan-600">g</span>) / 2 <span className="text-base font-normal">(полупериметр)</span>
                    </li>
                    <li>
                        S = (<span className="text-amber-600">e</span>&sup2; * &radic;3) / 4 <span className="text-base font-normal">НО: только если треугольник равносторонний</span>
                    </li>
                </ul>

                <Image
                    src="/images/storage/Triangle_3.svg"
                    width={300} height={300}
                    alt="Прямоугольный треугольник с указанием сторон и углов"
                    unoptimized
                />
            </div>
        </section>
    )
}