import ContentDividerV1 from "@/app/_components/dividers/ContentDividerV1"
import { GlowingEffect } from "@/components/ui/glowing-effect"
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
            (process.env.NEXT_PUBLIC_SITE_URL + "images/storage/geometry/acute-angle.svg"),
            (process.env.NEXT_PUBLIC_SITE_URL + "images/storage/geometry/obtuse-angle.svg"),
            (process.env.NEXT_PUBLIC_SITE_URL + "images/storage/geometry/right-angle.svg"),
            (process.env.NEXT_PUBLIC_SITE_URL + "images/storage/geometry/adjacent-angles.svg"),
            (process.env.NEXT_PUBLIC_SITE_URL + "images/storage/geometry/vertical-angles.svg"),
            (process.env.NEXT_PUBLIC_SITE_URL + "images/storage/geometry/right-angle-with-two-perpendicular.svg"),
            (process.env.NEXT_PUBLIC_SITE_URL + "images/storage/geometry/right-angle-with-perpendicular.svg"),
            (process.env.NEXT_PUBLIC_SITE_URL + "images/storage/geometry/perpendicular-bisector-of-a-segment.svg"),
            (process.env.NEXT_PUBLIC_SITE_URL + "images/storage/geometry/parallelism-lines-with-edges-1.svg"),
            (process.env.NEXT_PUBLIC_SITE_URL + "images/storage/geometry/perpendicular-lines-with-edges-2.svg"),
            (process.env.NEXT_PUBLIC_SITE_URL + "images/storage/geometry/perpendicular-lines-with-edges-1.svg"),
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
            <dt className="inline font-bold">&#8741; Параллельные прямые</dt> — <dd className="inline">это прямые, которые не пересекаются.</dd> Обозначаются так: &#8741; , НЕ параллельные обозначаются так: &#x2226; <br />
            <dt className="inline font-bold">&#8869; Перпендикулярные прямые</dt> — <dd className="inline">это прямые, которые при пересечении образуют между собой прямой угол.</dd> Обозначаются так: &#8869; <br />
            <dt className="inline font-bold">Аксиома</dt> — <dd className="inline">это утверждения о свойствах фигур, которые принимаются без доказательств.</dd> <br />
            <dt className="inline font-bold">Теорема</dt> — <dd className="inline">это утверждение, верность которой проверяется путём логических рассуждений, которые называют <b>доказательством</b></dd> <br />
            <dt className="inline font-bold">Пересекающиеся прямые</dt> — <dd className="inline">это те, которые имеют общую точку пересечения.</dd> <br />
            <dt className="inline font-bold">Параллельные прямые</dt> — <dd className="inline">это те, которые имеют лежат в одной плоскости и не пересекаются.</dd> <br />
            <dt className="inline font-bold">Противоположные лучи</dt> <dd className="inline">имеют общее начало и лежат на одной прямой. Их ещё называют <b>дополнительными</b>.</dd> <br />
            <dt className="inline font-bold">Равные отрезки</dt> <dd className="inline">имеют одинаковую длину и их можно совместить наложением.</dd> <br />
            <dt className="inline font-bold">Длина отрезка</dt> — <dd className="inline">это расстояние между двумя его концами (точками).</dd> <br />
            <div>
                <dt className="inline font-bold">Геометрическое место точек</dt> — <dd className="inline">это множество точек, обладающих общим свойством.</dd> 
                <br />
                <i>Примером таких мест точек являются: <b>окружность</b>, так как её точки равноудалены от центральной точки, <b>биссектриса</b>, так как её точки равноудалены от образующих угла линий.</i>
            </div>
        </dl>

        <section>
            <h3 id="Definitions-parallelism-lines" className="text-lg text-wrap xl:text-nowrap mt-4 mb-2">Свойства параллельных прямых</h3>

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
                        src={"/images/storage/geometry/signs-parallelism-lines.svg"}
                        unoptimized
                        width={200} height={200}
                        alt="Две параллельные прямые с сечением. Углы α и β накрест лежащие, углы α и γ соответственные, углы α и ω смежные."
                    />

                    <figcaption className="text-base text-center font-heading max-w-[300px]">
                        <span className="text-blue-700">Две параллельные прямые</span> пересечены <span className="text-red-700">секущей</span>
                    </figcaption>
                </figure>


                <h4 id="Definitions-parallelism-lines-signs" className="text-md text-wrap xl:text-nowrap mb-1">Признаки параллельности прямых</h4>
                <p className="first-letter:font-bold">Теорема (первый признак параллельности прямых): Если при пересечении <span className="text-blue-700">двух прямых</span> <span className="text-red-700">секущей</span> <span className="text-green-700">внутренние накрест лежащие углы</span> равны, то прямые параллельны. <i>На рисунке углы <span className="text-green-700">α</span> и <span className="text-green-700">β</span> равны, они накрест лежащие.</i></p>
                <p className="first-letter:font-bold">Теорема (второй признак параллельности прямых): Если при пересечении <span className="text-blue-700">двух прямых</span> <span className="text-red-700">секущей</span> <span className="text-green-700">соответственные углы</span> равны, то прямые параллельны. <i>На рисунке углы <span className="text-green-700">α</span> и <span className="text-green-700">γ</span> равны, они соответственные.</i></p>
                <p className="first-letter:font-bold">Теорема (третий признак параллельности прямых): Если при пересечении <span className="text-blue-700">двух прямых</span> <span className="text-red-700">секущей</span> сумма внутренних односторонних углов равна 180&deg;, то прямые параллельны. <i>На рисунке сумма углов <span className="text-red-700">ω</span> и <span className="text-green-700">β</span> равна 180&deg;.</i></p>
                <h4 id="Definitions-parallelism-lines-other-properties" className="text-md text-wrap xl:text-nowrap mt-2 mb-1">Другие свойства</h4>
                <p className="first-letter:font-bold">Теорема (о свойстве накрест лежащих углов между секущей и параллельными прямыми): Если <span className="text-blue-700">две параллельные прямые</span> пересечены <span className="text-red-700">секущей</span>, то <span className="text-green-700">внутренние накрест лежащие углы</span> равны. <i>На рисунке углы <span className="text-green-700">α</span> и <span className="text-green-700">β</span> равны, они накрест лежащие.</i></p>
                <p className="first-letter:font-bold">Теорема (о свойстве соответственных углов между секущей и параллельными прямыми): Если <span className="text-blue-700">две параллельные прямые</span> пересечены <span className="text-red-700">секущей</span>, то <span className="text-green-700">соответственные углы</span> равны. <i>На рисунке углы <span className="text-green-700">α</span> и <span className="text-green-700">γ</span> равны, они соответственные.</i></p>
                <p className="first-letter:font-bold">Теорема (о свойстве односторонних углов между секущей и параллельными прямыми): Если <span className="text-blue-700">две параллельные прямые</span> пересечены <span className="text-red-700">секущей</span>, то сумма <span className="text-green-700">внутренних односторонних углов</span> равна 180&deg;. <i>На рисунке сумма углов <span className="text-red-700">ω</span> и <span className="text-green-700">β</span> равна 180&deg;.</i></p>
                <p className="first-letter:font-bold">Теорема (о расстоянии между параллельными прямыми): Все точки одной из двух параллельных прямых равноудалены от другой прямой.</p>
            </div>
        </section>

        <section>
            <h3 id="Definitions-eagles" className="text-lg text-wrap xl:text-nowrap mt-4 mb-2">Углы</h3>

            <dl>
                <dt className="inline font-bold">Угол</dt> — <dd className="inline">это геометрическая фигура, которую образуют 2 луча, выходящие из одной точки и часть плоскости между ними.</dd> <br />
                <dt className="inline font-bold">Биссектриса угла</dt> делит угол пополам  — <dd className="inline">это луч, который выходит из вершины угла (откуда выходят оба луча угла) и делит угол пополам.</dd> <br />
                <dt className="inline font-bold">Развёрнутым углом</dt> <dd className="inline">называют угол, который равен 180&deg;, а образующие его лучи являются дополнительными лучами.</dd> <br />
                <dt className="inline font-bold">Смежными углами</dt> <dd className="inline">называют углы, у которых одна сторона общая, а остальные являются дополнительными лучами:</dd>

            </dl>

            <p className="first-letter:font-bold">Теорема (свойтво смежных углов): Сумма смежных углов равна 180&deg;.</p>

            <div className="flex flex-col md:flex-row gap-4 items-center md:items-end justify-start">
                <figure className="flex flex-col items-center gap-2 border rounded-md p-4">
                    <Image
                        src={"/images/storage/geometry/adjacent-angles.svg"}
                        unoptimized
                        width={300} height={200}
                        alt="Смежные углы"
                    />

                    <figcaption className="text-base text-center font-heading max-w-[300px]">
                        Смежные углы <br /> <span className="text-sm font-sans">Красный луч разделяет развёрнутый угол на 2 смежных угла.</span>
                    </figcaption>
                </figure>
            </div>

            <dl>
                <dt className="inline font-bold">Вертикальные углами</dt> <dd className="inline">называют те углы, у которых образующие лучи являются дополнительными другого угла:</dd> <br />
            </dl>
            <p className="first-letter:font-bold">Теорема (свойтво вертикальных углов): Вертикальные углы равны.</p>

            <div className="flex flex-col md:flex-row gap-4 items-center md:items-end justify-start">
                <figure className=" flex flex-col items-center gap-2 border rounded-md p-4">
                    <Image
                        src={"/images/storage/geometry/vertical-angles.svg"}
                        unoptimized
                        width={300} height={200}
                        alt="Вертикальные углы"
                    />

                    <figcaption className="text-base text-center font-heading max-w-[300px]">
                        Вертикальные углы
                    </figcaption>
                </figure>
            </div>

            <dl>
                <dt className="inline font-bold">Перпендикулярные прямые</dt> <dd className="inline">пересекаются под прямым углом.</dd> <br />
                <dt className="inline font-bold">Перпендикуляром</dt> <dd className="inline">к прямой называют отрезок, который лежит на другой прямой, которая пересекает первую и перпендикулярна ей. Их точку пересечения называют <strong>основанием</strong></dd>
            </dl>

            <p className="first-letter:font-bold">Теорема: Через точку, лежащую на прямой, можно провести прямую, перпендикулярную этой прямой и только одну.</p>
            <p className="first-letter:font-bold">Теорема: Через точку, не лежащую на прямой, можно провести прямую, перпендикулярную этой прямой и только одну.</p>
            <p className="first-letter:font-bold">Теорема (о двух прямых, перпендикулярных третьей): На плоскости две прямые, перпендикулярные третьей параллельны между собой.</p>
            <p className="first-letter:font-bold">Теорема: Если на плоскости прямая пересекает одну из двух параллельных прямых, то она пересекает и другую прямую.</p>

            <div className="flex flex-col md:flex-row gap-4 items-center md:items-end justify-start">
                <figure className=" flex flex-col items-center gap-2 border rounded-md p-4">
                    <Image
                        src={"/images/storage/geometry/right-angle-with-perpendicular.svg"}
                        unoptimized
                        width={200} height={200}
                        alt="Перпендикулярные прямые"
                    />

                    <figcaption className="text-base text-center font-heading max-w-[300px]">
                        Перпендикулярные прямые
                    </figcaption>
                </figure>

                <figure className=" flex flex-col items-center gap-2 border rounded-md p-4">
                    <Image
                        src={"/images/storage/geometry/right-angle-with-two-perpendicular.svg"}
                        unoptimized
                        width={200} height={200}
                        alt="Две прямые, перпендикулярные третьей"
                    />

                    <figcaption className="text-base text-center font-heading max-w-[300px]">
                        Две прямые, перпендикулярные третьей
                    </figcaption>
                </figure>
            </div>


            <section>
                <h4 id="Definitions-eagles-types" className="mt-4 mb-2 text-md text-wrap">Виды углов</h4>
                <div className="flex flex-col md:flex-row gap-4 items-center md:items-end justify-start">
                    <figure className="flex flex-col items-center gap-2 border rounded-md p-4">
                        <Image
                            src={"/images/storage/geometry/acute-angle.svg"}
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
                            src={"/images/storage/geometry/right-angle.svg"}
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
                            src={"/images/storage/geometry/obtuse-angle.svg"}
                            unoptimized
                            width={150} height={150}
                            alt="Тупой угол"
                        />

                        <figcaption className="text-base text-center font-heading">
                            Тупой угол
                        </figcaption>
                    </figure>
                </div>
            </section>

            <section>
                <h4 id="Definitions-eagles-difficult-header-1" className="mt-4 mb-2 text-md text-wrap">Углы с соответственно параллельными и соответственно перпендикулярными сторонами</h4>
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
                            src={"/images/storage/geometry/parallelism-lines-with-edges-1.svg"}
                            unoptimized
                            width={200} height={200}
                            alt="Две параллельные прямые пересечены двумя параллельными секущими. Указаны углы: α, β, γ, δ, ω."
                        />

                        <figcaption className="text-base text-center font-heading max-w-[300px]">
                            <span className="text-blue-700">Две параллельные прямые</span> пересечены <span className="text-red-700">двумя парралельными секущими</span>
                        </figcaption>
                    </figure>

                    <p className="first-letter:font-bold">Теорема (об углах с соответственно параллельными сторонами): Углы с соответственно параллельными сторонами или равны (если оба <span className="text-green-700">острые</span> или оба <span className="text-red-700">тупые</span>), или в сумме составляют 180&deg; (если один <span className="text-green-700">острый</span>, а другой <span className="text-red-700">тупой</span>).
                        <br />
                        <i>
                            На рисунке углы <span className="text-green-700">α, β, γ, δ</span> и <span className="text-red-700">ω</span> соответственно параллельны, потому что их образуют параллельные <span className="text-red-700">друг</span> <span className="text-blue-700">другу</span> линии. Следуя теореме: углы <span className="text-green-700">α, β, γ</span> равны, а углы <span className="text-green-700">δ</span> и <span className="text-red-700">ω</span> в сумме образуют угол в 180&deg;. Углы <span className="text-green-700">δ</span> и <span className="text-green-700">γ</span> равны, так как они накрест лежащие.
                        </i>
                    </p>
                </div>

                <div className="flow-root mt-4">
                    <figure className="float-left flex flex-col w-full md:w-fit items-center gap-2 border rounded-md p-2 relative md:mr-2">
                        <GlowingEffect
                            spread={40}
                            glow={true}
                            disabled={false}
                            proximity={64}
                            inactiveZone={0.01}
                        />

                        <Image
                            src={"/images/storage/geometry/perpendicular-lines-with-edges-1.svg"}
                            unoptimized
                            width={200} height={200}
                            alt="Два острых угла, лучи основания второго угла перпендикулярны лучам первого угла (в смысле, один луч перпендикулярен одному лучу первого угла, а второй луч перпендикулярен второму). Углы помечены как: α, β"
                        />

                        <figcaption className="text-base text-center font-heading max-w-[300px]">
                            Два угла с перпендикулярными основаниями (a)
                        </figcaption>
                    </figure>

                    <figure className="float-left flex flex-col w-full md:w-fit items-center gap-2 border rounded-md p-2 relative md:mr-2 mt-2 md:mt-0">
                        <GlowingEffect
                            spread={40}
                            glow={true}
                            disabled={false}
                            proximity={64}
                            inactiveZone={0.01}
                        />

                        <Image
                            src={"/images/storage/geometry/perpendicular-lines-with-edges-2.svg"}
                            unoptimized
                            width={200} height={200}
                            alt="Два угла, перый острый и помечен как α, второй тупой и помечен как β. Образующие линии второго угла перпендикулярны образующим линиям первого угла."
                        />

                        <figcaption className="text-base text-center font-heading max-w-[300px]">
                            Два угла с перпендикулярными основаниями (b)
                        </figcaption>
                    </figure>

                    <p className="first-letter:font-bold">Теорема (об углах с соответственно перпендикулярными сторонами): Углы с соответственно перпендикулярными сторонами или равны (если оба <span className="text-red-700">острые</span> или оба <span className="text-green-700">тупые</span>), или в сумме составляют 180&deg; (если один <span className="text-red-700">острый</span>, а другой <span className="text-green-700">тупой</span>).
                        <br />
                        <i>
                            На рисунке <b>a</b> углы <span className="text-red-700">α</span> и <span className="text-red-700">β</span> соответственно перпендикулярны, потому что их образуют перпендикулярные <span className="text-green-700">друг</span> <span className="text-blue-700">другу</span> линии. Следуя теореме: углы равны.
                            <br />
                            На рисунке <b>b</b> углы <span className="text-red-700">α</span> и <span className="text-green-700">γ</span> соответственно перпендикулярны. Если продолжить одну из образующих линий угла <span className="text-green-700">γ</span>, то окажется что образуется второй угол <span className="text-red-700">β</span>, который смежный с углом <span className="text-green-700">γ</span> и их сумма будет равна 180&deg;. Следуя теореме: сумма углов <span className="text-red-700">α</span> и <span className="text-green-700">γ</span> равна 180&deg;.
                        </i>
                    </p>
                </div>
            </section>
        </section>

        <section>
            <h3 id="Definitions-Perpendicular-bisector-segment" className="text-lg text-wrap xl:text-nowrap mt-4 mb-2">Серединный перпендикуляр к отрезку</h3>

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
                        src={"/images/storage/geometry/perpendicular-bisector-of-a-segment.svg"}
                        unoptimized
                        width={300} height={300}
                        alt="Горизонтальный отрезок A, B. Который по середине пересекает отрезок C, D, образуя с отрезком A, B прямой угол. Отрезок C, D и является серединным перпендикуляром."
                    />

                    <figcaption className="text-base text-center font-heading">
                        Серединный перпендикуляр
                    </figcaption>
                </figure>

                <dl>
                    <dt className="inline font-bold">Серединным перпендикуляром к отрезку</dt> <dd className="inline"> называют перпендикулярную прямую этому отрезку, которая проходит через его середину.</dd> <br />
                </dl>

                <p className="first-letter:font-bold">Теорема (о серединном перпендикуляре к отрезку): Любая точка серединного перпендикуляра к отрезку равноудалена от концов этого отрезка. Если точка равноудалена от концов отрезка, то она лежит на серединном перпендикуляре к этому отрезку.</p>
            </div>
        </section>
    </section>
)
