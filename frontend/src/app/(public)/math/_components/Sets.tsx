import Image from "next/image";
import Link from "next/link";


const Sets = () => (
    <section>
        <dl>
            <dt className="inline font-bold">Множеством </dt>
            <dd className="inline">можно назвать группу элементов с каким-либо одинаковым признаком. В математике они рассматриваются как группа чисел.</dd>
        </dl>

        <p>Множества обозначаются большими буквами латинского алфавита, а их элементы указываются в фигурных скобках через запятую.</p>
        <p>
            Например, есть множество <i>A = &#123;2, 4, 6, 8&#125;</i>. Читается это как: <i>множество A состоит из элементов 2, 4, 6, 8</i>. Это множество <b>конечно</b>.
            Для сравнения есть <Link href={"/math/algebra/number"} className="link-hover text-sky-700">Числовые множества</Link>, которые не имеют конца.
        </p>

        <p><strong>Пустые множества</strong> обозначают символом: &empty;</p>
        <p>Если множество <b>B</b> является подмножеством <b>A</b>, пишут: <span className="text-nowrap"><b>B</b> &sub; <b>A</b></span> </p>
        <p>Если множество <b>B</b> является подмножеством множества <b>A</b>, то разность <span className="text-nowrap"><b>A</b> &#8726; <b>B</b></span> называют <strong>дополнением множества</strong> <b>B</b> до множества <b>A</b>.
            Обозначают так: <b>B</b>&prime;<b><sub>A</sub></b>
        </p>

        <figure className="flex flex-col items-center">
            <Image
                src={"/images/storage/algebra/set-complements.svg"}
                unoptimized
                width={200} height={200}
                alt="2 круга: первый круг как бы представляет собой множество A, второй круг вписан в первый и представляет собой подмножество B. На круге A надпись о том, что это дополнение."
            />

            <figcaption className="text-sm">Дополнение множества B до множества A</figcaption>
        </figure>


        <h3 id="Sets-actions" className="text-xl mt-4 mb-2 text-wrap">Действия над множествами</h3>
        <p>Если множество <b>C</b> является <strong>пересечением множеств</strong> <b>A</b> и <b>B</b>, пишут: <span className="text-nowrap"><b>C</b> = <b>A</b> &cap; <b>B</b></span>.
            Тогда множество <b>C</b> будет состоять из тех элементов, которые есть и в <b>A</b> и в <b>B</b></p>
        <p><strong>Объединением множеств</strong> <b>A</b> и <b>B</b> называют то множество (<b>D</b>), которое будет состоять из их элементов (без повторяющихся элементов). Объеднинение записывают так: <span className="text-nowrap"><b>D</b> = <b>A</b> &cup; <b>B</b></span></p>
        <p><strong>Разностью множеств</strong> <b>A</b> и <b>B</b> называют множество, которое будет состоять из тех элементов <b>A</b>, которые не будут принадлежать <b>B</b>.
            Записывают это так: <span className="text-nowrap"><b>C</b> = <b>A</b> &#8726; <b>B</b></span>
        </p>

        <p>Визуально, действия выше можно представить так:</p>

        <div className="flex flex-col xl:flex-row items-center justify-center gap-4">
            <figure className="flex flex-col items-center">
                <Image
                    src={"/images/storage/algebra/set-intersection.svg"}
                    unoptimized
                    width={200} height={200}
                    alt="2 круга: первый круг как бы представляет собой множество A, второй круг и представляет собой подмножество B. Они пересекаются в центре и это пересечение выделено красным и какбы это и есть область C."
                />

                <figcaption className="text-sm text-center">
                    Пересечение множеств <br />
                    <span className="text-nowrap"><b className="text-red-700">C</b> = <b className="text-green-700">A</b> &cap; <b className="text-blue-700">B</b></span>
                </figcaption>
            </figure>

            <figure className="flex flex-col items-center">
                <Image
                    src={"/images/storage/algebra/set-union.svg"}
                    unoptimized
                    width={200} height={200}
                    alt="2 круга: первый круг как бы представляет собой множество A, второй круг и представляет собой подмножество B. Они пересекаются в центре и какбы объеденены."
                />

                <figcaption className="text-sm text-center">
                    Объединение множеств <br />
                    <span className="text-nowrap"><b className="text-orange-500">C</b> = <b className="text-green-700">A</b> &cup; <b className="text-blue-700">B</b></span>
                </figcaption>
            </figure>

            <figure className="flex flex-col items-center">
                <Image
                    src={"/images/storage/algebra/set-difference.svg"}
                    unoptimized
                    width={200} height={200}
                    alt="2 круга: первый круг как бы представляет собой множество A, второй круг и представляет собой подмножество B. Они пересекаются в центре и какбы объеденены."
                />

                <figcaption className="text-sm text-center">
                    Разность множеств <br />
                    <span className="text-nowrap"><b className="text-red-700">C</b> = <b className="text-green-700">A</b> &#8726; <b className="text-blue-700">B</b></span>
                </figcaption>
            </figure>
        </div>
    </section>
)

export default Sets;