import ContentDividerV1 from "@/app/_components/dividers/ContentDividerV1";
import { getDefaultOpenGraph } from "@/utils/SEO/getDefaultOpenGraph";
import { Metadata } from "next";
import Image from "next/image";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Link from "next/link";
import 'katex/dist/katex.min.css'; // Важно для правильного отображения дробей
import { InlineMath } from 'react-katex'; // Используем InlineMath, чтобы текст шел в одну строку


export const metadata: Metadata = {
    title: "Алгебра",
    description: "Разделы по алгебре",
    keywords: ["математика", "алгебра"],

    openGraph: getDefaultOpenGraph({
        description: "Алгебра, пояснения по алгебре",
        images: [
            (process.env.NEXT_PUBLIC_SITE_URL + 'images/storage/algebra/percent_no_b.svg'),
            (process.env.NEXT_PUBLIC_SITE_URL + "images/storage/algebra/percent_no_a.svg"),
            (process.env.NEXT_PUBLIC_SITE_URL + "images/storage/geometry/trapezoid.svg"),
            (process.env.NEXT_PUBLIC_SITE_URL + "images/storage/algebra/percent_has_a_b.svg"),
            (process.env.NEXT_PUBLIC_SITE_URL + "images/storage/algebra/22.4_div_14.svg"),
            (process.env.NEXT_PUBLIC_SITE_URL + "images/storage/algebra/625.05_div_1.5.svg"),
            (process.env.NEXT_PUBLIC_SITE_URL + "images/storage/algebra/0.5784_div_0.048.svg"),
            (process.env.NEXT_PUBLIC_SITE_URL + "images/storage/algebra/set_complements.svg"),
            (process.env.NEXT_PUBLIC_SITE_URL + "images/storage/algebra/set_intersection.svg"),
            (process.env.NEXT_PUBLIC_SITE_URL + "images/storage/algebra/set_union.svg"),
            (process.env.NEXT_PUBLIC_SITE_URL + "images/storage/algebra/set_difference.svg"),
            (process.env.NEXT_PUBLIC_SITE_URL + "images/storage/algebra/decart_coordinates.svg"),
            (process.env.NEXT_PUBLIC_SITE_URL + "images/storage/algebra/decart_coordinates_with_dots.svg"),
            (process.env.NEXT_PUBLIC_SITE_URL + "images/storage/algebra/decart_coordinates_y_2_x.svg"),
            (process.env.NEXT_PUBLIC_SITE_URL + "images/storage/algebra/decart_coordinates_y_8_div_x.svg"),
        ],
    }),
}


export default async function Page() {
    return (
        <main>
            <Numbers />

            <Algoritsm />

            <Drobi />

            <Percent />

            <Proportions />

            <Sets />

            <Coordinates />

            <Power />

            <Polynomias />

            <LinearEquations />

            <Functions />
        </main>
    )
}

const Percent = () => (
    <section id="Percent">
        <ContentDividerV1 className='my-4'>
            <h2 className="w-fit text-2xl text-wrap xl:text-nowrap">Проценты</h2>
        </ContentDividerV1>


        <section id="Percent_general">
            <h3 className="w-fit text-xl text-wrap xl:text-nowrap">Общие сведения</h3>

            <div>
                <p>Число процентов можно записать в виде дроби:</p>
                <div className="flex flex-col gap-2">
                    <div>
                        {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                        <div aria-hidden="true" className="xl:text-lg">
                            <InlineMath math={"4\\% = \\frac{4}{100} = 0.04"} />
                        </div>

                        {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                        <span className="sr-only">
                            4% = 4/100 = 0.04
                        </span>
                    </div>

                    <div>
                        {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                        <div aria-hidden="true" className="xl:text-lg">
                            <InlineMath math={"25\\% = \\frac{25}{100} = 0.25"} />
                        </div>

                        {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                        <span className="sr-only">
                            25% = 25/100 = 0.25
                        </span>
                    </div>

                    <div>
                        {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                        <div aria-hidden="true" className="xl:text-lg">
                            <InlineMath math={"75\\% = \\frac{75}{100} = 0.75"} />
                        </div>

                        {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                        <span className="sr-only">
                            75% = 75/100 = 0.75
                        </span>
                    </div>
                </div>
            </div>

            <div>
                <p>Дробное число можно записать в виде числа процентов, для этого нужно дробь умножить на 100: <br />
                    0.04 * 100% = 4% <br />
                    0.25 * 100% = 25% <br />
                    1.25 * 100% = 125%
                </p>
            </div>
        </section>

        <section id="Percent_formulas">
            <ContentDividerV1 className='my-4'>
                <h3 className="w-fit text-xl text-wrap xl:text-nowrap">Формулы</h3>
            </ContentDividerV1>


            <h3 className="w-fit text-xl text-wrap xl:text-nowrap mt-4 mb-2 ">Нахождение процента (<span className="text-green-700">b</span>) от числа (<span className="text-blue-700">a</span>)</h3>
            <p>Чтобы найти процент от числа, нужно число разделить на 100 и умножить на число процентов:</p>
            <div className="flex flex-row flex-wrap xl:flex-nowrap items-center gap-2">
                <div>
                    {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                    <div aria-hidden="true" className="xl:text-xl">
                        <InlineMath math={"b = \\frac{a}{100} \\cdot ?\\%"} />
                    </div>

                    {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                    <span className="sr-only">
                        b = a / 100 * ?%
                    </span>
                </div>

                <Image
                    src={"/images/storage/algebra/percent_no_b.svg"}
                    unoptimized
                    width={120} height={120}
                    alt="2 круга: первый большой круг с пометками: a и p%, второй круг вписан в первый, занимает примерно 25% от первого и помечен знаком вопроса"
                />
            </div>

            <h3 className="w-fit text-xl text-wrap xl:text-nowrap mt-4 mb-2 ">Нахождение числа (<span className="text-blue-700">a</span>) по его проценту (<span className="text-blue-700">p%</span>)</h3>
            <div className="flex flex-row flex-wrap xl:flex-nowrap items-center gap-2">
                <div>
                    {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                    <div aria-hidden="true" className="xl:text-xl">
                        <InlineMath math={"a = \\frac{b}{p\\%} \\cdot 100\\%"} />
                    </div>

                    {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                    <span className="sr-only">
                        a = b / p% * 100%
                    </span>
                </div>

                <Image
                    src={"/images/storage/algebra/percent_no_a.svg"}
                    unoptimized
                    width={120} height={120}
                    alt="2 круга: первый большой круг с пометками: знак вопроса и p%, второй круг вписан в первый, занимает примерно 25% от первого и помечен как b"
                />
            </div>

            <h3 className="w-fit text-xl text-wrap xl:text-nowrap mt-4 mb-2 ">Нахождение процентного соотношения чисел</h3>
            <p>Какой процент одно число (<span className="text-green-700">b</span>) составляет от другого (<span className="text-blue-700">a</span>):</p>
            <div className="flex flex-row flex-wrap xl:flex-nowrap items-center gap-2">
                <div>
                    {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                    <div aria-hidden="true" className="xl:text-xl">
                        <InlineMath math={"p\\% = \\frac{b}{a} \\cdot 100\\%"} />
                    </div>

                    {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                    <span className="sr-only">
                        p% = b / a * 100%
                    </span>
                </div>

                <Image
                    src={"/images/storage/algebra/percent_has_a_b.svg"}
                    unoptimized
                    width={120} height={120}
                    alt="2 круга: первый большой круг с пометками: a и p%, второй круг вписан в первый, занимает примерно 25% от первого и помечен как b. На первом круге есть знак вопроса правее от второго круга."
                />
            </div>
        </section>
    </section>
)


const Algoritsm = () => (
    <section id="Numbers">
        <ContentDividerV1 className='my-4'>
            <h2 className="w-fit text-2xl text-wrap xl:text-nowrap">Алгоритмы</h2>
        </ContentDividerV1>

        <section>
            <h3 className="w-fit text-xl text-wrap xl:text-nowrap mt-4 mb-2 ">Нахождение наибольшего общего делителя НОД</h3>
            <section>
                <h4 className="mt-4 mb-2 text-lg text-wrap">Школьный метод</h4>
                <ol className="list-decimal list-inside">
                    <li>Разложить каждое из чисел на простые множители.</li>
                    <li>Выписать все общие множители (те, которые входят в каждое из полученных разложений).</li>
                    <li>Найти произведение этих общих множителей.</li>
                </ol>

                <p className="font-bold">Пример:</p>
                <ol className="list-decimal list-inside">Найти НОД(48, 72, 96)
                    <li>
                        Разлаживаю числа на простые множители: <br />
                        48 = <b>2 * 2 * 2</b> * 2 * <b>3</b><br />
                        72 = <b>2 * 2 * 2</b> * 3 * <b>3</b><br />
                        96 = <b>2 * 2 * 2</b> * 2 * 2 * <b>3</b>
                    </li>
                    <li>
                        Выписываю общие множители (те, которые входят в каждое из полученных разложений): <br />
                        <b>2 * 2 * 2 * 3</b>
                    </li>
                    <li> Нахожу произведение общих множителей: <b>2 * 2 * 2 * 3</b> = 24</li>
                </ol>
            </section>
        </section>

        <section>
            <h3 className="w-fit text-xl text-wrap xl:text-nowrap mt-4 mb-2 ">Нахождение наименьшего общего кратного НОК</h3>
            <section>
                <h4>Школьный метод</h4>
                <ol className="list-decimal list-inside">
                    <li>Разложить каждое из чисел на простые множители.</li>
                    <li>Записать разложение одного из чисел и дополнить его теми множителями из остальных разложений, которых нет в записанном произведении.</li>
                    <li>Вычислить записанное произведение.</li>
                </ol>

                <p className="font-bold">Пример:</p>
                <ol className="list-decimal list-inside">Найти НОК(48, 72, 96)
                    <li>
                        Разлаживаю числа на простые множители: <br />
                        48 = 2 * 2 * 2 * 2 * 3<br />
                        72 = 2 * 2 * 2 * 3 * 3<br />
                        96 = 2 * 2 * 2 * 2 * 2 * 3
                    </li>
                    <li>
                        Выписываю числа самого большого числа: <br />
                        <b>2 * 2 * 2 * 2 * 2 * 3</b> <br />
                        Сравниваю с оставшимися числами и дописываю то, чего не хватает. <br />
                        в случае с 48 все множители уже есть. <br />
                        В случае с 72 не хватает тройки. Добавляю тройку в набор? <br />
                        <b>2 * 2 * 2 * 2 * 2 * 3 * 3</b>
                    </li>
                    <li>Нахожу произведение общих множителей: <b>2 * 2 * 2 * 3</b> = 24</li>
                </ol>
            </section>
        </section>
    </section>
)


const Numbers = () => (
    <section>
        <ContentDividerV1 className='my-4'>
            <h2 id="Numbers" className="w-fit text-2xl text-wrap xl:text-nowrap">Числа</h2>
        </ContentDividerV1>

        <section>
            <ContentDividerV1 className='my-4'>
                <h3 id="Numbers-actions" className="w-fit text-xl text-wrap xl:text-nowrap">Действия над числами</h3>
            </ContentDividerV1>
            <ul>
                <li>
                    <h4 id="Numbers-actions-addition" className="mt-4 mb-2 text-lg">Сложение</h4>
                    <b>
                        a + b = c
                    </b> <br />
                    <span>Где a — <strong>слагаемое</strong> (число, для сложения)</span> <br />
                    <span>b — <strong>слагаемое</strong> (число, для сложения)</span> <br />
                    <span>c — <strong>сумма</strong> (результат сложения)</span> <br />
                </li>
                <li>
                    <h4 id="Numbers-actions-subtraction" className="mt-4 mb-2 text-lg">Вычитание</h4>
                    <b>
                        a - b = c
                    </b> <br />
                    <span>Где a — <strong>уменьшаемое</strong> (число, которое уменьшают)</span> <br />
                    <span>b — <strong>вычитаемое</strong> (число, НА которое уменьшают)</span> <br />
                    <span>c — <strong>разность</strong> (результат сложения)</span> <br />
                </li>
                <li>
                    <h4 id="Numbers-actions-multiplication" className="mt-4 mb-2 text-lg">Умножение</h4>
                    <p>
                        <b>
                            a * b = c
                        </b> <br />
                        <span>Где a — <strong>множитель</strong> (число, которое умножают)</span> <br />
                        <span>b — <strong>множитель</strong> (число, которое умножают)</span> <br />
                        <span>c — <strong>произведение</strong> (результат сложения)</span> <br />
                    </p>

                    <p>При умножении двух отрицательных чисел, ответ будет положительный. Если хоть одно из чисел отрицательное, то ответ будет отрицательным.</p>
                </li>
                <li>
                    <h4 id="Numbers-actions-division" className="mt-4 mb-2 text-lg">Деление</h4>
                    <p>
                        <b>
                            a / b = c
                        </b> <br />
                        <span>Где a — <strong>делимое</strong> (число, которое делят)</span> <br />
                        <span>b — <strong>делитель</strong> (число, на которое делят)</span> <br />
                        <span>c — <strong>частное</strong> (результат деления)</span> <br />
                    </p>

                    <p>При делении двух отрицательных чисел, ответ будет положительный. Если хоть одно из чисел отрицательное, то ответ будет отрицательным.</p>
                </li>
                <li>
                    <h4 id="Numbers-actions-division_with_remainder" className="mt-4 mb-2 text-lg text-wrap">Деление с остатком</h4>
                    <p>
                        <b>
                            a / b = c + d
                        </b> <br />
                        <span>Где a — <strong>делимое</strong> (число, которое делят)</span> <br />
                        <span>b — <strong>делитель</strong> (число, на которое делят)</span> <br />
                        <span>c — <strong>неполное частное</strong> (результат деления, частная часть)</span> <br />
                        <span>d — <strong>остаток от деления</strong> (результат деления, остаток)</span> <br />
                    </p>
                    <p>Делить число a, на число b — значит найти такие числа c и d, что a = b * c + d, причём d &lt; b </p>
                </li>
                <li>
                    <h4 id="Numbers-actions-exponentiation" className="mt-4 mb-2 text-lg text-wrap">Возведение в степень</h4>
                    <p>Число <b>a</b> называют <strong>основанием степени</strong>, число <b>n</b> - <strong>показателем степени</strong>.</p>

                    <p className="font-bold">
                        a<sup>n</sup> = a * a * a ... a<sub>n</sub>
                    </p>
                    <p className="text-sm">Пример: 5<sup>5</sup> = 5 * 5 * 5 * 5 * 5 = 3125</p>
                </li>

                <li>
                    <h4 id="Numbers-actions-expanding_parentheses" className="mt-4 mb-2 text-lg text-wrap">Раскрытие скобок</h4>
                    <p>Если перед скобками стоит - , то каждый член в скобках нужно умножить на -1: <br />
                        <b>a - (b - c) = a - b + c</b> <br />
                        <i className="text-sm">(правило из сложения многочленов)</i>
                    </p>
                </li>
            </ul>
        </section>

        <section>
            <ContentDividerV1 className='my-4'>
                <h3 id="Numbers-formulas" className="w-fit text-xl text-wrap xl:text-nowrap">Формулы и характеристики</h3>
            </ContentDividerV1>
            <p>
                <strong>Простым числом</strong> называют число, которое имеет <b>только два различных делителя</b>.
            </p>
            <p>
                <strong>Составным числом</strong> называют число, которое имеет <b>более двух делителей</b>.
            </p>
            <p>
                Два натуральных числа называют <strong>взаимно простыми</strong>, если их наибольший общий делитель равен 1.
            </p>
            <p>
                <strong>Среднее арифметическое</strong> нескольких чисел — это частное, от деления суммы этих чисел на их количество.
            </p>
            <p>
                <strong>Делителем числа</strong> a называется то число, на которое делится данное число a без остатка.
            </p>
            <p>
                <strong>Общим делителем чисел</strong> a и b называется число, на которое делятся два данных числа a и b без остатка.
            </p>
            <p>
                <strong>Наибольшим общим делителем чисел</strong> a и b (<b>НОД(a, b)</b>) называется наибольшее число, на которое делятся два данных числа a и b без остатка.
            </p>
            <p>
                <strong>Кратным числа</strong> a называется число, которое делится на данное число a без остатка.
            </p>
            <p>
                <strong>Общим кратным чисел</strong> a и b называется число, которое делится на числа a и b без остатка.
            </p>
            <p>
                <strong>Наименьшим общим кратным натуральных чисел</strong> a и b <b>(НОК(a, b))</b> называется наименьшее натуральное число, которое делится на два данных числа без остатка.
            </p>
            <p>
                <strong>Числовое выражение</strong> — выражение, которое содержит в себе: <b>числа, знаки действий, скобки</b>.
                <strong> Значение числового выражения</strong> — число, полученное в результате выполнения указанных в выражении действий.
                Если в числовых выражениях содержатся ещё <strong>переменные</strong>, то выражения называются <strong>переменными</strong>.
                <strong> Областью определения выражения с переменными</strong> называют все те значения переменных, при которых выражение имеет смысл.

            </p>
            <p>
                <strong>Уравнением</strong> называется равенство, содержащее переменную. <strong>Корнем уравнения</strong> называется значение переменной (число), подстановка которого в уравнение даёт верное числовое равенство. <br />
                <strong>Решить уравнение</strong> — значит найти все его корни или доказать, что уравнение не имеет корней.
            </p>
            <p>
                <strong>Тождественно равными выражениями</strong> называют выражения, которые равны между собой: <i className="text-nowrap">11 + a = a + 11</i>, <i className="text-nowrap">5 * a = a * 5</i>, <i className="text-nowrap">a * a * a = a&sup3;</i>. Само <b>равенство</b> этих двух выражений называют <strong>тождеством</strong>.
            </p>
        </section>

        <section>
            <ContentDividerV1 className='my-4'>
                <h3 id="Numbers-numerical_sets" className="w-fit text-xl text-wrap xl:text-nowrap">Числовые множества</h3>
            </ContentDividerV1>

            <dl>
                <div>&#8484; <dt className="inline font-bold">Целые числа</dt> — <dd className="inline">числа без дробной части, положительные и отрицательные. Обозначаются буквой &#8484; (от немецкого Zahlen)</dd></div>
                <div>&#8469; <dt className="inline font-bold">Натуральные числа</dt> — <dd className="inline">это целые числа без отрицательных элементов. Обычно начинаются от 1, но если пишут &#8469;<sub>0</sub>, то начинают с 0. Обозначаются буквой &#8469;</dd></div>
                <div>&#8474; <dt className="inline font-bold">Рациональные числа</dt> — <dd className="inline">числа с дробной частью. Числа вида p/q, где p и q &isin; &#8469; и q не равен нулю.</dd></div>
                <div>&#120128; <dt className="inline font-bold">Иррациональные числа</dt> — <dd className="inline">числа которые нельзя выразить дробью. Для примера это числа: &pi;, e, &radic;2. Не имеют единого стандарта для обозначения, могут обозначаться как &#120128;</dd></div>
                <div>&#8477; <dt className="inline font-bold">Вещественные числа</dt> — <dd className="inline">объединяют рациональные (&#8474;) и иррациональные числа (&#120128;). Это все числа, которые можно записать на числовой оси.</dd></div>
                <div>&#8450; <dt className="inline font-bold">Комплексные числа</dt> — <dd className="inline">числа вида a + bi, где i — мнимая единица (i<sup>2</sup> = -1)</dd></div>
            </dl>
        </section>
    </section>
)

const Drobi = () => {
    return (
        <section id="Drobi">
            <ContentDividerV1 className='my-4'>
                <h2 id="Fractions" className="w-fit text-2xl text-wrap xl:text-nowrap">Дроби</h2>
            </ContentDividerV1>

            <section>
                <h3 id="Fractions-general" className="w-fit text-xl text-wrap xl:text-nowrap mt-4 mb-2 ">Общие сведения</h3>

                <p>
                    Дроби могут быть <b>правильными</b> и <b>неправильными</b>. <br />
                    <strong>Правильная дробь</strong> — та, у которой <b>числитель меньше знаменателя</b>. <br />
                    <strong>Неправильная дробь</strong> — та, у которой <b>числитель больше знаменателя</b>.
                </p>
                <p><strong>Сократить дробь</strong> — это значит разделить её числитель и знаменатель на одно и тоже число.</p>

                <p><strong>Выделить целую и дробную части из неправильной дроби</strong> можно так:</p>
                <ol className="list-decimal list-inside">
                    <li>Делить числитель на знаменатель <strong>с остатком</strong></li>
                    <li>Частное записать как целую часть, остаток записать как числитель, знаменатель оставить</li>
                </ol>

                <p>Представить <strong>смешанное число в виде дроби</strong> можно так: целую часть умножить на знаменатель и прибавить к числителю.</p>
            </section>

            <section>
                <ContentDividerV1 className='my-4'>
                    <h3 id="Fractions-actions" className="w-fit text-xl text-wrap xl:text-nowrap">Действия над дробями</h3>
                </ContentDividerV1>

                <ul className="space-y-2">
                    <li>
                        <div className="flex items-center flex-wrap">
                            <div className="flex items-center">
                                {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                                <div aria-hidden="true" className="xl:text-xl">
                                    <InlineMath math={"x \\cdot \\frac{a}{b} = \\frac{x \\cdot a}{b}"} />
                                </div>

                                {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                                <span className="sr-only">
                                    x умножить на дробь, a деленное на b, равно дроби, в числителе x умножить на a, в знаменателе b.
                                </span>

                                <strong> — умножение числа на дробь.</strong>
                            </div>

                            <div className="flex items-center gap-1 text-sm ml-1">
                                <span className="font-bold">НО</span>: не путать со смешанными числами:

                                {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                                <div aria-hidden="true" className="xl:text-xl">
                                    <InlineMath math={"2\\frac{3}{5} \\cdot 3\\frac{3}{4} = \\frac{13}{5} \\cdot \\frac{15}{4}"} />
                                </div>

                                {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                                <span className="sr-only">
                                    Две целых три пятых умножить на три целых три четвертых равно тринадцать пятых умножить на пятнадцать четвертых.
                                </span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center">
                            {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                            <div aria-hidden="true" className="xl:text-xl">
                                <InlineMath math={"\\frac{a}{b} \\cdot \\frac{c}{d} = \\frac{a \\cdot c}{b \\cdot d}"} />
                            </div>

                            {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                            <span className="sr-only">
                                Дробь, a деленное на b, умножить на дробь, c деленное на d, равно дроби, в числителе a умножить на c, в знаменателе b умножить на d.
                            </span>
                            <strong> — умножение дробей</strong>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center">
                            {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                            <div aria-hidden="true" className="xl:text-xl">
                                <InlineMath math={"\\frac{\\cancel{a}}{b} \\cdot \\frac{c}{\\cancel{a}} = \\frac{c}{b}"} />
                            </div>

                            {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                            <span className="sr-only">
                                умножение двух дробей: первая дробь: в числителе зачёрскнутая a, в знаменателе b, вторая дробь: в числителе c, в знаменателе зачёркнутая a, равно: дробь: в числителе a, в знаменателе b
                            </span>
                            <strong> — сокращение чисел при умножении</strong>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center">
                            {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                            <div aria-hidden="true" className="xl:text-xl">
                                <InlineMath math={"x + \\frac{a}{b} = \\frac{\\mathbf{x \\cdot b} + a}{b}"} />
                            </div>

                            {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                            <span className="sr-only">
                                x плюс дробь, a деленное на b, равно дроби, в числителе x умножить на b плюс a, в знаменателе b.
                            </span>

                            <strong> — сложение числа с дробью</strong>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center">
                            {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                            <div aria-hidden="true" className="xl:text-xl">
                                <InlineMath math={"\\frac{a}{b} / \\frac{c}{d} = \\frac{a \\cdot d}{b \\cdot c}"} />
                            </div>

                            {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                            <span className="sr-only">
                                Дробь, a деленное на b, разделить на дробь, c деленное на d, равно дроби, в числителе a умножить на d, в знаменателе b умножить на c.
                            </span>

                            <strong> — деление дробей</strong>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center flex-wrap">
                            <div className="flex items-center">
                                {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                                <div aria-hidden="true" className="xl:text-xl">
                                    <InlineMath math={"\\frac{a}{b} / 2 = \\frac{a / 2}{b}"} />
                                </div>

                                {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                                <span className="sr-only">
                                    (a/b) / 2 = (a / 2)/b
                                </span>

                                <strong> — деление дроби на число.</strong>
                            </div>

                            <div className="flex items-center text-sm ml-1">
                                <span>То же самое что:</span>

                                {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                                <div aria-hidden="true" className="xl:text-xl">
                                    <InlineMath math={"\\frac{a}{b} / 3 = \\frac{a}{b} \\cdot \\frac{1}{3} = \\frac{a \\cdot 1}{b \\cdot 3}"} />
                                </div>

                                {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                                <span className="sr-only">
                                    Дробь, в числителе a, в знаменателе b, разделить на три равно:
                                    дробь, a деленное на b, умножить на одну третьих,
                                    что равно дроби, в числителе a умножить на один, в знаменателе b умножить на три.
                                </span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="flex flex-wrap items-center">
                            {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                            <div aria-hidden="true" className="xl:text-xl">
                                <InlineMath math={"1\\frac{7}{15} - 1\\frac{10}{15} = -\\frac{3}{15}"} />
                            </div>

                            {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                            <span className="sr-only">
                                Одна целая семь пятнадцатых минус одна целая десять пятнадцатых равно минус три пятнадцатых.
                            </span>

                            <strong> — смещение отрицания дробей</strong>
                        </div>
                    </li>
                </ul>
            </section>

            <section>
                <h3 id="Fractions-actions-fractions_to_common_denominator" className="mt-4 mb-2 text-xl text-wrap">Общее правило приведения дробей к общему знаменателю</h3>

                <p>Чтобы привести две дроби к общему знаменателю, нужно:</p>
                <ul className="list-decimal list-inside">
                    <li>Разложить знаменатель каждой дроби на простые множители.</li>
                    <li>Умножить числитель и знаменатель первой дроби на недостающие множители из разложения знаменателя второй дроби.</li>
                    <li>Умножить числитель и знаменатель второй дроби на недостающие множители из разложения знаменателя первой дроби.</li>
                </ul>

                <p>Пример:</p>
                <div className="flex items-center">Привожу к общему знаменателю дроби:
                    {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                    <div aria-hidden="true" className="xl:text-xl">
                        <InlineMath math={"\\frac{5}{9}"} />
                    </div>

                    {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                    <span className="sr-only">
                        Дробь пять девятых
                    </span>

                    <span>и</span>

                    {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                    <div aria-hidden="true" className="xl:text-xl">
                        <InlineMath math={"\\frac{2}{15}"} />
                    </div>

                    {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                    <span className="sr-only">
                        Дробь два пятнадцатых
                    </span>
                </div>

                <ol className="list-decimal list-inside">
                    <li>
                        Разложим знаменатели на простые множители:
                        9 = 3 * 3 и 15 = 5 * 3
                    </li>
                    <li>
                        Умножаю числитель и знаменатель первой дроби на недостающий множитель <b className="mx-1">5</b> из разложения числа 15:

                        {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                        <div aria-hidden="true" className="xl:text-xl">
                            <InlineMath math={"\\frac{5}{9} = \\frac{5 \\cdot \\mathbf{5}}{9 \\cdot \\mathbf{5}} = \\frac{25}{45}"} />
                        </div>

                        {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                        <span className="sr-only">
                            Пять девятых равно дроби, в числителе пять умножить на пять, в знаменателе девять умножить на пять, что равно двадцать пять сорок пятых.
                        </span>
                    </li>
                    <li>
                        Умножаю числитель и знаменатель второй дроби на недостающие множители <b>3</b> из разложения числа 9:

                        {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                        <div aria-hidden="true" className="xl:text-xl">
                            <InlineMath math={"\\frac{2}{15} = \\frac{2 \\cdot \\mathbf{3}}{15 \\cdot \\mathbf{3}} = \\frac{6}{45}"} />
                        </div>

                        {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                        <span className="sr-only">
                            Две пятнадцатых равно дроби, в числителе два умножить на три, в знаменателе пятнадцать умножить на три, что равно шесть сорок пятых.
                        </span>
                    </li>
                </ol>
            </section>

            <section>
                <h3 id="Fractions-actions-addition_fractions_with_common_denominator" className="text-xl mt-4 mb-2 text-wrap">Правило сложения дробей с одинаковыми знаменателями</h3>
                <p>При сложении дробей с одинаковыми знаменателями числители складывают, знаменатель оставить. Алгоритм такой:</p>

                <ol className="list-decimal list-inside">
                    <li>Сложить числители данных дробей и сумму записать в числитель новой дроби.</li>
                    <li>В знаменатель новой дроби записать прежний знаменатель.</li>
                    <li>По возможности:
                        <ul className=" list-disc list-inside pl-4">
                            <li>сократить полученную дробь</li>
                            <li>выделить целую и дробную части из неправильной дроби</li>
                        </ul>
                    </li>
                </ol>

                <div>
                    <p>Пример:</p>

                    {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                    <div aria-hidden="true" className="xl:text-xl">
                        <InlineMath math={"\\frac{4}{9} + \\frac{2}{9} + \\frac{1}{9} = \\frac{4 + 2 + 1}{9} = \\frac{7}{9}"} />
                    </div>

                    {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                    <span className="sr-only">
                        Четыре девятых плюс две девятых плюс одна девятая равно:
                        дробь, в числителе четыре плюс два плюс один, в знаменателе девять,
                        что равно семь девятых.
                    </span>
                </div>
            </section>

            <section>
                <h3 id="Fractions-actions-subtraction_fractions_with_common_denominator" className="mt-4 mb-2 text-xl text-wrap">Правило вычитания дробей с одинаковыми знаменателями</h3>
                <p>При вычитании дробей с одинаковыми знаменателями из числителя уменьшаемого вычитают числитель вычитаемого, знаменатель оставить. Алгоритм такой:</p>

                <ol className="list-decimal list-inside">
                    <li>Вычесть из числителя уменьшаемого числитель вычитаемого и разность записать в числитель новой дроби.</li>
                    <li>В знаменатель новой дроби записать прежний знаменатель.</li>
                    <li>По возможности:
                        <ul className="list-disc list-inside pl-4">
                            <li>сократить полученную дробь</li>
                            <li>выделить целую и дробную части из неправильной дроби</li>
                        </ul>
                    </li>
                </ol>

                <div>
                    <p>Пример:</p>

                    {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                    <div aria-hidden="true" className="xl:text-xl">
                        <InlineMath math={"\\frac{4}{9} - \\frac{2}{9} - \\frac{1}{9} = \\frac{4 - 2 - 1}{9} = \\frac{1}{9}"} />
                    </div>

                    {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                    <span className="sr-only">
                        Четыре девятых минус две девятых минус одна девятая равно:
                        дробь, в числителе четыре минус два минус один, в знаменателе девять,
                        что равно одна девятая.
                    </span>
                </div>
            </section>

            <section>
                <h3 id="Fractions-actions-subtraction_addiction_different_denominators" className="mt-4 mb-2 text-xl text-wrap">Правило сложения ИЛИ вычитания дробей с разными знаменателями</h3>
                <p>Чтобы выполнить сложение ИЛИ вычитание дробей с разными знаменателями, нужно привести их к общему знаменателю, а затем применить правило сложения ИЛИ вычитания дробей с одинаковыми знаменателями.</p>

                <p>Пример:</p>
                {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                <div aria-hidden="true" className="xl:text-xl">
                    <InlineMath math={"\\frac{4}{10} - \\frac{1}{2} + \\frac{2}{5} = \\frac{4}{10} - \\frac{5}{10} + \\frac{4}{10} = \\frac{4 - 5 + 4}{10} = \\frac{3}{10}"} />
                </div>

                {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                <span className="sr-only">
                    Четыре десятых минус одна вторая плюс две пятых равно:
                    четыре десятых минус пять десятых плюс четыре десятых,
                    что равно дроби, в числителе четыре минус пять плюс четыре, в знаменателе десять.
                    И это равно три десятых.
                </span>
            </section>

            <section>
                <h3 id="Fractions-actions-subtraction_addiction_mixed_numbers" className="mt-4 mb-2 text-xl text-wrap">Сложение ИЛИ вычитание смешанных чисел</h3>
                <p>При сложении ИЛИ вычитании смешанных чисел целые и дробные части складываются ИЛИ вычитаются отдельно:</p>
                <div className="w-full overflow-x-auto">
                    <Table className="text-base table-fixed w-full min-w-[600px]  xl:max-w-[1000px] mx-auto overflow-x-scroll">
                        <TableCaption>Примеры сложения ИЛИ и вычитания смешанных чисел</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="font-bold">Сложение ИЛИ вычитание смешанных чисел</TableHead>
                                <TableHead className="font-bold w-[250px]">Пример</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="whitespace-normal break-words">
                                    При сложении <b>целого числа</b> и <b>правильной дроби</b> записывать в виде <b>смешанного числа</b>
                                </TableCell>
                                <TableCell>
                                    {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                                    <div aria-hidden="true">
                                        <InlineMath math={"3 + \\frac{1}{2} = 3\\frac{1}{2}"} />
                                    </div>

                                    {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                                    <span className="sr-only">
                                        Три плюс одна вторая равно три целых одна вторая.
                                    </span>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="whitespace-normal break-words">
                                    При сложении ИЛИ вычитании <b>смешанных чисел</b> целые и дробные части вычисляются отдельно
                                </TableCell>
                                <TableCell>
                                    {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                                    <div aria-hidden="true">
                                        <InlineMath math={`
                                        \\begin{aligned}
                                        2\\frac{2}{4} + 3\\frac{1}{4} &= \\\\[1ex]
                                        2 + 3 + \\frac{2}{4} + \\frac{1}{4} &= 5\\frac{3}{4}
                                        \\end{aligned}
                                    `} />
                                    </div>

                                    {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                                    <span className="sr-only">
                                        <p>Пример на сложение смешанных чисел вычисляется в две строки.</p>
                                        <p>Строка первая: две целых две четвертых плюс три целых одна четвертая равно.</p>
                                        <p>Строка вторая: два плюс три плюс две четвертых плюс одна четвертая, что равно пять целых три четвертых.</p>
                                    </span>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="whitespace-normal break-words">
                                    При вычитании из <b>единицы</b> <b>правильной дроби</b> единицу преобразовать в дробь со знаменателем вычитаемого.
                                </TableCell>
                                <TableCell >
                                    {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                                    <div aria-hidden="true">
                                        <InlineMath math={"1 - \\frac{2}{5} = \\frac{5}{5} - \\frac{2}{5} = \\frac{3}{5}"} />
                                    </div>

                                    {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                                    <span className="sr-only">
                                        Один минус две пятых равно пять пятых минус две пятых, что равно три пятых.
                                    </span>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="whitespace-normal break-words">
                                    При вычитании из <b>целого числа</b> <b>правильной дроби</b>, <b>целое число</b> представить в виде слагаемых, одно из которых равно единице. Далее вычислять как по правилам выше.
                                </TableCell>
                                <TableCell>
                                    {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                                    <div aria-hidden="true">
                                        <InlineMath math={`
                                        \\begin{aligned}
                                        \\mathbf{3} - \\frac{2}{5} &= \\mathbf{2 + 1} - \\frac{2}{5} = \\\\[1ex]
                                        \\mathbf{2} + \\frac{\\mathbf{5}}{\\mathbf{5}} - \\frac{2}{5} &= 2 + \\frac{3}{5}
                                        \\end{aligned}
                                    `} />
                                    </div>

                                    {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                                    <span className="sr-only">
                                        <p>Пример на разложение целого числа вычисляется в две строки.</p>
                                        <p>Строка первая: три минус две пятых равно, два плюс один минус две пятых равно.</p>
                                        <p>Строка вторая: два плюс дробь, пять пятых, минус две пятых, равно два плюс три пятых.</p>
                                    </span>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="whitespace-normal break-words">
                                    Когда <b>дробные части смешанных чисел</b> имеют <b>разные знаменатели</b>, то их нужно привести к <b>общему знаменателю</b>.
                                </TableCell>
                                <TableCell>
                                    {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                                    <div aria-hidden="true">
                                        <InlineMath math={`
                                        \\begin{aligned}
                                        2\\frac{2}{7} - 1\\frac{1}{5} &= \\\\[1ex]
                                        2 - 1 + \\frac{2}{7} - \\frac{1}{5} &= \\\\[1ex]
                                        1 + \\frac{2 \\cdot 5}{7 \\cdot 5} - \\frac{1 \\cdot 7}{5 \\cdot 7} &= \\\\[1ex]
                                        1 + \\frac{10 - 7}{35} &= 1\\frac{3}{35}
                                        \\end{aligned}
                                    `} />
                                    </div>

                                    {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                                    <span className="sr-only">
                                        <p>Пример на приведение к общему знаменателю вычисляется в четыре строки.</p>
                                        <p>Строка первая: две целых две седьмых минус одна целая одна пятая равно.</p>
                                        <p>Строка вторая: два минус один плюс две седьмых минус одна пятая равно.</p>
                                        <p>Строка третья: один плюс дробь, в числителе два умножить на пять, в знаменателе семь умножить на пять, минус дробь, в числителе один умножить на семь, в знаменателе пять умножить на семь, равно.</p>
                                        <p>Строка четвёртая: один плюс дробь, в числителе десять минус семь, в знаменателе тридцать пять, что равно одна целая три тридцать пятых.</p>
                                    </span>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="whitespace-normal break-words">
                                    Если <b>после сложения смешанных чисел</b>, в дробной части <b>получилась неправильная дробь</b>, то <b>выписать из неё целую часть</b>.
                                </TableCell>
                                <TableCell>
                                    {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                                    <div aria-hidden="true">
                                        <InlineMath math={`
                                        \\begin{aligned}
                                        2\\frac{2}{3} + \\frac{2}{3} &= \\\\[1ex]
                                        2\\frac{4}{3} &= 3\\frac{1}{3}
                                        \\end{aligned}
                                    `} />
                                    </div>

                                    {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                                    <span className="sr-only">
                                        <p>Пример вычисляется в две строки.</p>
                                        <p>Строка первая: две целых две третьих плюс две третьих равно.</p>
                                        <p>Строка вторая: две целых четыре третьих, что равно три целых одна третья.</p>
                                    </span>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="whitespace-normal break-words">
                                    Когда <b>из целого числа вычитаешь смешанное</b>, то <b>целые части считай отдельно</b>, а то что осталось преобразуй в сумму чисел, где одно из них равно единице, для преобразования в дробь
                                </TableCell>
                                <TableCell>
                                    {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                                    <div aria-hidden="true">
                                        <InlineMath math={`
                                        \\begin{aligned}
                                        3 - 1\\frac{2}{4} &= \\\\[1ex]
                                        2 - \\frac{2}{4} &= (1 + 1) - \\frac{2}{4} \\\\[1ex]
                                        1\\frac{4}{4} - \\frac{2}{4} &= 1\\frac{2}{4}
                                        \\end{aligned}
                                    `} />
                                    </div>

                                    {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                                    <span className="sr-only">
                                        <p>Пример вычисляется в три строки.</p>
                                        <p>Строка первая: три минус одна целая две четвертых равно.</p>
                                        <p>Строка вторая: два минус две четвертых равно, в скобках один плюс один, минус две четвертых.</p>
                                        <p>Строка третья: одна целая четыре четвертых минус две четвертых равно одна целая две четвертых.</p>
                                    </span>
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell className="whitespace-normal break-words">
                                    Если <b>при вычитании смешанных чисел дробная часть вычитаемого больше уменьшаемого</b>, то можно <b>из целой части преобразовать единичку в дробь</b> и прибавить её к дробной части.
                                </TableCell>
                                <TableCell>
                                    {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                                    <div aria-hidden="true">
                                        <InlineMath math={`
                                        \\begin{aligned}
                                        2\\frac{1}{3} - 1\\frac{2}{3} &= \\\\[1ex]
                                        1\\frac{1}{3} - \\frac{2}{3} &= \\left(\\frac{3}{3} + \\frac{1}{3}\\right) - \\frac{2}{3} = \\\\[1ex]
                                        \\frac{4}{3} - \\frac{2}{3} &= \\frac{2}{3}
                                        \\end{aligned}
                                    `} />
                                    </div>

                                    {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                                    <span className="sr-only">
                                        <p>Пример вычисляется в три строки.</p>
                                        <p>Строка первая: две целых одна третья минус одна целая две третьих равно.</p>
                                        <p>Строка вторая: одна целая одна третья минус две третьих равно, в скобках одну третьих плюс одна третья, закрывается скобка, минус две третьих равно.</p>
                                        <p>Строка третья: четыре третьих минус две третьих равно две третьих.</p>
                                    </span>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </section>




            <section>
                <h3 id="Fractions-actions-rule_for_multiplying_common_fractions" className="mt-4 mb-2 text-xl text-wrap">Правило умножения обыкновенных дробей</h3>
                Алгоритм такой:
                <ol className="list-decimal list-inside">
                    <li>В <b>числитель</b> новой дроби писать произведение <b>числителей</b> умножаемых дробей.</li>
                    <li>В <b>знаменатель</b> новой дроби писать произведение <b>знаменателей</b> умножаемых дробей.</li>
                    <li>По возможности:
                        <ul className="list-disc list-inside pl-4">
                            <li>сократить полученную дробь</li>
                        </ul>
                    </li>
                </ol>

                <div>
                    <p>Пример:</p>

                    <div className="flex items-center flex-wrap gap-2">
                        {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                        <div aria-hidden="true" className="xl:text-xl">
                            <InlineMath math={"\\frac{4}{5} \\cdot \\frac{2}{4} = \\frac{8}{20} = \\frac{2}{5}"} />
                            <i className="text-base">(сокращение на 4)</i>
                        </div>

                        {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                        <span className="sr-only">
                            Четыре пятых умножить на две четвертых равно восемь двадцатых, что равно две пятых.
                        </span>
                    </div>
                </div>
            </section>

            <section>
                <h3 id="Fractions-actions-rule_for_multiplying_mixed_numbers" className="mt-4 mb-2 text-xl text-wrap">Правило умножения смешанных чисел</h3>
                <p>Алгоритм такой:</p>
                <ol className="list-decimal list-inside">
                    <li>Записать каждый множитель в виде <strong>неправильной дроби</strong>.</li>
                    <li>Применить <Link href={"#rule_for_multiplying_common_fractions"} className="link">правило умножения обыкновенных дробей</Link>.</li>
                </ol>

                <div>
                    <p>Пример:</p>
                    <div className="flex items-center flex-wrap gap-2">
                        {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                        <span aria-hidden="true" className="xl:text-xl">
                            <InlineMath math={"2\\frac{3}{5} \\cdot 3\\frac{3}{4} = \\frac{2 \\cdot 5 + 3}{5} \\cdot \\frac{3 \\cdot 4 + 3}{4} = \\frac{13}{5} \\cdot \\frac{15}{4} = \\frac{195}{20} = \\frac{39}{4}"} />
                            <i className="text-base">(сокращение на 5)</i>
                        </span>

                        {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                        <span className="sr-only">
                            Две целых три пятых умножить на три целых три четвертых равно:
                            дробь, в числителе два умножить на пять плюс три, в знаменателе пять,
                            умножить на дробь, в числителе три умножить на четыре плюс три, в знаменателе четыре.
                            Это равно тринадцать пятых умножить на пятнадцать четвертых,
                            что равно сто девяносто пять двадцатых, и после сокращения равно тридцать девять четвертых.
                        </span>
                    </div>
                </div>
            </section>

            <section>
                <h3 id="Fractions-actions-rule_for_division_fractions" className="mt-4 mb-2 text-xl text-wrap">Правило деления обыкновенных дробей</h3>
                <p>Чтобы разделить одну дробь на другую, нужно делимое умножить на число, обратное делителю. <i>(Если делим на дробь, то дробь перевернуть. Если делим на число, то преобразовать его в дробь, где в числитель идёт 1, а в знаменатель само число)</i>.</p>
                <p>Пример:</p>

                <div className="flex items-center">
                    {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                    <div aria-hidden="true" className="xl:text-xl">
                        <InlineMath math={"\\frac{a}{b} / \\frac{c}{d} = \\frac{a \\cdot d}{b \\cdot c}"} />
                    </div>

                    {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                    <span className="sr-only">
                        (a/b) / (c/d) = (a*d)/(b*c)
                    </span>

                    <span className="mx-1">Или</span>

                    {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                    <div aria-hidden="true" className="xl:text-xl">
                        <InlineMath math={"\\frac{2}{3} / \\frac{3}{4} = \\frac{2 \\cdot 4}{3 \\cdot 3}"} />
                    </div>

                    {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                    <span className="sr-only">
                        (2/3) / (3/4) = (2*4)(3*3)
                    </span>
                </div>
            </section>

            <section>
                <h3 id="Fractions-actions-rule_for_equals_fractions" className="mt-4 mb-2 text-xl text-wrap">Правило сравнения десятичных дробей</h3>
                <ol className="list-decimal list-inside">
                    <li>Из двух дробей с разными целыми частями больше та, у которой целая часть больше.</li>
                    <li>Если целые части равны, то больше будет то число, у которого дробная часть больше.</li>
                </ol>

                <p>
                    К примеру: <br />
                    2.31 &gt; 1.31 <br />
                    2.31 &lt; 2.312 <br />
                    2.31 = 2.31 <br />
                </p>
            </section>

            <FractionalNumbers />
        </section>
    )
}





const FractionalNumbers = () => (
    <section>
        <ContentDividerV1 className='my-4'>
            <h3 id="Fractions-real_numbers_actions" className="w-fit text-wrap xl:text-nowrap text-xl">Действия над дробными числами</h3>
        </ContentDividerV1>

        <section>
            <h4 id="Fractions-real_numbers_actions-division" className="w-fit text-lg text-wrap">Деление дробных чисел</h4>
            <p>Нужно использовать упрощение, где это возможно. <strong>Упрощение: умножаем оба числа на 10, пока одно из них не станет целым</strong>.</p>

            <section>
                <h4 className="mt-4 mb-2 text-lg text-wrap">Деление дробного на целое</h4>

                <figure>
                    {/* 1. Картинка с ALT для SEO */}
                    <Image
                        src={"/images/storage/algebra/22.4_div_14.svg"}
                        unoptimized
                        width={80} height={50}
                        alt="Деление в столбик 22.4 на 14"
                        aria-describedby="divide-22_4-on-14-description"
                    />

                    {/* 2. Подробное пошаговое описание только для читалок */}
                    <figcaption id="divide-22_4-on-14-description" className="sr-only">
                        Пошаговый процесс деления 22.4 на 14:
                        Шаг 1. Сначала считаем целую часть ответа.
                        Делим 22 на 14, получаем 1, остаток 8.
                        Целую часть числа больше ни на что не поделишь, поэтому пишем полученную единицу в ответ как целую часть.
                        Шаг 2. Теперь считаем дробную часть ответа.
                        Берём остаток, полученный после Шага 1, ещё берём 4 из дробной части делимого, делим 84 на 14, получаем 6, в остатке 0.
                        Шестёрку пишем как дробную часть ответа.
                        Число поделено без остатков,  итоговый ответ: 1.6
                    </figcaption>
                </figure>
            </section>

            <section>
                <h4 id="Fractions-real_numbers_actions-division_real_to_real" className="mt-4 mb-2 text-lg text-wrap">Деление дробного на дробное</h4>

                <p>Примеры:</p>
                <ul className="list-decimal list-inside">
                    <li>
                        <span className="font-bold" >625.05/1.5</span>:
                        <p><strong>Упрощение: умножаем оба числа на 10, чтобы делитель был целым числом</strong>. После этого деление будет выглядеть как: <b>6250.5 / 15</b></p>

                        <figure>
                            {/* 1. Картинка с коротким, емким ALT для SEO и Яндекс/Google Картинок */}
                            <Image
                                src={"/images/storage/algebra/625.05_div_1.5.svg"}
                                unoptimized
                                width={120}
                                height={50}
                                alt="Деление в столбик 6250.5 на 15"
                                aria-describedby="divide-6250_5-on-15-description"
                            />

                            {/* 2. Подробное пошаговое описание только для читалок */}
                            <figcaption id="divide-6250_5-on-15-description" className="sr-only">
                                Пошаговый процесс деления 6250.5 на 15:
                                Шаг 1. Сначала считаем целую часть ответа.
                                Делим 62 на 60, получаем 4, остаток 2. Полученную четвёрку пишем в ответ.
                                Берём двойку из остатка, ещё берём 5 из делимого и делим это на 15, получили 1, остаток 10. Полученную единицу пишем в ответ.
                                Берём десятку из остатка, ещё берём 0 из делимого и делим это на 90, получили 6, остаток 10. Полученную шестёрку пишем в ответ.

                                Шаг 2. Теперь считаем дробную часть ответа.
                                Берём остаток, полученный после Шага 1, ещё берём 5 из дробной части делимого, делим 105 на 105, получаем 7, в остатке 0.
                                Семёрку пишем как дробную часть ответа.
                                Число поделено без остатков, итоговый ответ: 1.6
                            </figcaption>
                        </figure>
                    </li>
                    <li>
                        <span className="font-bold">0.261 / 0.003</span>:
                        <p><strong>Упрощение: Переносим запятую вправо на 3 цифры (умножаем на 10, 3 раза)</strong>, тогда: <span className="font-bold">261 / 3 = 87</span></p>
                    </li>
                    <li>
                        <span className="font-bold">0.5784 / 0.048</span>:
                        <p><strong>Упрощение: умножаем оба числа на 10, 3 раза, чтобы делитель был целым числом</strong>. После этого деление будет выглядеть как: <b>578.4 / 48</b></p>

                        <figure>
                            {/* 1. Картинка с коротким, емким ALT для SEO и Яндекс/Google Картинок */}
                            <Image
                                src={"/images/storage/algebra/0.5784_div_0.048.svg"}
                                unoptimized
                                width={120}
                                height={50}
                                alt="Деление в столбик 578.4 на 48"
                                aria-describedby="divide-578_4-on-48-description"
                            />

                            {/* 2. Подробное пошаговое описание только для читалок */}
                            <figcaption id="divide-578_4-on-48-description" className="sr-only">
                                Пошаговый процесс деления 578.4 на 48:
                                Шаг 1. Сначала считаем целую часть ответа.
                                Делим 57 на 48, получаем 1, остаток 9. Полученную единицу пишем в ответ.
                                Берём единицу из остатка, ещё берём 8 из делимого и делим это на 96, получили 2, остаток 2. Полученную двойку пишем в ответ.

                                Шаг 2. Теперь считаем дробную часть ответа.
                                Берём остаток, полученный после Шага 1, ещё берём 4 из дробной части делимого, поделить 24 на 48 невозможно. Пишем 0 в дробную часть ответа.
                                Приписываем 0 к 24 и делим 240 на 240, получили 5, остаток 0. Полученную пятёрку пишем в дробную часть ответа.
                                Число поделено без остатков, итоговый ответ: 12.05
                            </figcaption>
                        </figure>
                    </li>
                </ul>
            </section>
        </section>


        <section>
            <h4 id="Fractions-real_numbers_actions-multiplication" className="text-lg mt-4 mb-2 text-wrap">Умножение дробных чисел</h4>

            <section>
                <p>Примеры:</p>
                <p>
                    1.03 * 28.4 = (1.03 * <span className="text-red-700">100</span>) * (28.4 * <span className="text-blue-700">10</span>) / <span className="text-purple-700">1000</span> = 103 * 284 / <span className="text-purple-700">1000</span> = 29.252
                </p>
                <div>Тут <span className="text-purple-700">1000</span> — это <span className="text-red-700">100</span> * <span className="text-blue-700">10</span>, которые нужны чтобы сделать из дробных чисел целые.</div>
            </section>
        </section>
    </section>
)


const Proportions = () => {
    return (
        <section>
            <ContentDividerV1 className='my-4'>
                <h2 id="Proportions" className="w-fit text-wrap xl:text-nowrap text-2xl">Пропорции</h2>
            </ContentDividerV1>

            <section>
                <h3 id="Proportions-general" className="text-xl mt-4 mb-2 text-wrap">Общие сведения</h3>

                <dl>
                    <div><dt className="inline font-bold">Пропорция</dt> — <dd className="inline">это равенство двух отношений.</dd> По факту, это утверждение о том, что 2 дроби или 2 отношения равны между собой.</div>
                </dl>

                <div className="flex flex-wrap itemx-center">
                    Условно
                    <div className="mx-1">
                        {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                        <div aria-hidden="true" className="xl:text-lg">
                            <InlineMath math={"\\frac{a}{b} = \\frac{c}{d}"} />
                        </div>

                        {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                        <span className="sr-only">
                            a/b = c/d
                        </span>
                    </div>
                    <span>— это пропорция. Её можно читать так: отношение <b>a</b> к <b>b</b> равно отношению <b>c</b> к <b>d</b> или: <b>a</b> относится к <b>b</b></span>
                </div>
                <p><b>a</b> и <b>d</b> — это крайние члены.</p>
                <p><b>b</b> и <b>c</b> — это средние члены.</p>
            </section>

            <section>
                <ContentDividerV1 className='my-4'>
                    <h3 id="Proportions-properties" className="w-fit text-wrap xl:text-nowrap text-xl mt-4 mb-2">Свойства</h3>
                </ContentDividerV1>

                <section>
                    <h4 id="Proportions-properties-main_property" className="text-lg mt-4 mb-2 text-wrap">Основное свойство пропорции.</h4>
                    <p>Произведение крайних членов пропорции равно произведению средних членов той же пропорции.</p>
                    <div>Запись такая: <br />
                        <div>
                            {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                            <div aria-hidden="true" className="xl:text-xl">
                                <InlineMath math={"\\frac{a}{b} = \\frac{c}{d} \\Rightarrow a \\cdot d = b \\cdot c"} />
                            </div>

                            {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                            <span className="sr-only">
                                a/b = c/d {"=>"} a*d = b*c
                            </span>
                        </div>
                    </div>
                </section>

                <section>
                    <h4 id="Proportions-properties-equals_multiplications" className="text-lg mt-4 mb-2 text-wrap">Из равенства двух произведений можно составить пропорцию.</h4>

                    <div>
                        {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                        <div aria-hidden="true" className="xl:text-lg">
                            <InlineMath math={"4 \\cdot 5 = 3 \\cdot 7 \\Rightarrow \\frac{4}{3} = \\frac{7}{5}"} />
                        </div>

                        {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                        <span className="sr-only">
                            4*5 = 3*7 {"=>"} 4/3 = 7/5
                        </span>
                    </div>
                </section>

                <section>
                    <h4 id="Proportions-properties-edge_middle_proportions" className="text-lg mt-4 mb-2 text-wrap">Крайние и средние члены пропорции можно поменять местами.</h4>

                    <div>
                        {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                        <div aria-hidden="true" className="xl:text-xl">
                            <InlineMath math={"\\frac{a}{b} = \\frac{c}{d} \\Rightarrow \\frac{d}{b} = \\frac{c}{a} \\Rightarrow \\frac{d}{c} = \\frac{b}{a}"} />
                        </div>

                        {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                        <span className="sr-only">
                            (a/b) = (c/d) {"=>"} (d/b) = (c/a) {"=>"} (d/c) = (b/a)
                        </span>
                    </div>
                </section>
            </section>
        </section>
    )
}


const Sets = () => (
    <section>
        <ContentDividerV1 className='my-4'>
            <h2 id="Sets" className="w-fit text-wrap xl:text-nowrap text-2xl">Множества</h2>
        </ContentDividerV1>

        <dl>
            <dt className="inline font-bold">Множеством </dt>
            <dd className="inline">можно назвать группу элементов с каким-либо одинаковым признаком. В математике они рассматриваются как группа чисел.</dd>
        </dl>

        <p>Множества обозначаются большими буквами латинского алфавита, а их элементы указываются в фигурных скобках через запятую.</p>
        <p>
            Например, есть множество <i>A = &#123;2, 4, 6, 8&#125;</i>. Читается это как: <i>множество A состоит из элементов 2, 4, 6, 8</i>. Это множество <b>конечно</b>.
            Для сравнения есть <Link href={"#Numbers-numerical_sets"} className="link-hover text-sky-700">Числовые множества</Link>, которые не имеют конца.
        </p>

        <p><strong>Пустые множества</strong> обозначают символом: &empty;</p>
        <p>Если множество <b>B</b> является подмножеством <b>A</b>, пишут: <span className="text-nowrap"><b>B</b> &sub; <b>A</b></span> </p>
        <p>Если множество <b>B</b> является подмножеством множества <b>A</b>, то разность <span className="text-nowrap"><b>A</b> &#8726; <b>B</b></span> называют <strong>дополнением множества</strong> <b>B</b> до множества <b>A</b>.
            Обозначают так: <b>B</b>&prime;<b><sub>A</sub></b>
        </p>

        <figure className="flex flex-col items-center">
            <Image
                src={"/images/storage/algebra/set_complements.svg"}
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
                    src={"/images/storage/algebra/set_intersection.svg"}
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
                    src={"/images/storage/algebra/set_union.svg"}
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
                    src={"/images/storage/algebra/set_difference.svg"}
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


const Coordinates = () => (
    <section>
        <ContentDividerV1 className='my-4'>
            <h2 id="Coordinates" className="w-fit text-wrap xl:text-nowrap text-2xl">Координаты</h2>
        </ContentDividerV1>

        <p><strong>Система координат</strong> — это удобный способ определять положение точки и графики на плоскости или в пространстве. В большинстве случаев в математике используется Декартова система координать, но есть и другие.</p>

        <section>
            <h3 id="Coordinates-ReneDekart" className="text-xl mt-4 mb-2 text-wrap">Декартова система координат</h3>
            <p>Впервые прямоугольную систему координат ввёл Рене Декарт В своей работе «Геометрия». На ней изображены 2 оси: ось <b>X</b> <i>(ось абсцисс)</i> и ось <b>Y</b> <i>(ось ординат)</i> и через них задаются координаты.</p>

            <p>Графиком обратной пропорциональной зависимости является <b>гипербола</b>.</p>

            <figure className="flex flex-col items-center my-2">
                <Image
                    src={"/images/storage/algebra/decart_coordinates.svg"}
                    unoptimized
                    width={500} height={500}
                    alt="Декартова система координат. Две перпендикулярные стрелки с засечками от -9 до 9. Горизонтальная ось X, вертикальная Y."
                />

                <figcaption className="font-bold text-sm">
                    Декартова система координат
                </figcaption>
            </figure>

            <h4 id="Coordinates-examples" className="font-heading">Примеры использования системы координат</h4>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 ">
                <figure className="flex flex-col items-center my-2 w-fit">
                    <Image
                        src={"/images/storage/algebra/decart_coordinates_with_dots.svg"}
                        unoptimized
                        width={500} height={500}
                        alt="Декартова система координат с точками на ней"
                    />

                    <figcaption>
                        Декартова система координат с точками: <b>A(2,1)</b>, <b>B(5,2)</b>, <b>C(6-6)</b>, <b>D(-3,-3)</b>, <b>E(-5,4)</b>
                    </figcaption>
                </figure>

                <figure className="flex flex-col items-center my-2 w-fit">
                    <Image
                        src={"/images/storage/algebra/decart_coordinates_y_2_x.svg"}
                        unoptimized
                        width={500} height={500}
                        alt="Декартова система координат с точками на ней. Точки: (1,2), (2,4), (3,6), (4,8). Через все точки проходит прямая."
                    />

                    <figcaption>
                        Декартова система координат с формулой <b className="text-nowrap">Y = 2X</b>
                    </figcaption>
                </figure>

                <figure className="flex flex-col items-center my-2 w-fit">
                    <Image
                        src={"/images/storage/algebra/decart_coordinates_y_8_div_x.svg"}
                        unoptimized
                        width={500} height={500}
                        alt="Декартова система координат с точками на ней. Точки: (1,8), (2,4), (3,2.6), (4,2), (5,1.6), (6,1.3), (7,1.14), (8,1), (9,0.88). Все точки соеденены линией."
                    />

                    <figcaption className="w-full">
                        Декартова система координат с формулой <b className="text-nowrap">Y = 8/X</b>. Кривая, которая соединяет все точки называют <b>Гиперболой</b>.
                    </figcaption>
                </figure>
            </div>
        </section>
    </section>
)


const Power = () => (
    <section>
        <ContentDividerV1 className='my-4'>
            <h2 id="Power" className="w-fit text-wrap xl:text-nowrap text-2xl">Степень числа</h2>
        </ContentDividerV1>

        <p><strong>Степень числа</strong> — это когда число нужно умножить на само себя указанное количество раз (в простом смысле). Но иногда это может приводить даже к дробям (формулы ниже).</p>

        <div>
            Обозначения операции: <br />

            <div>
                {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                <div aria-hidden="true" className="xl:text-lg">
                    <InlineMath math={"a^n = \\prod_{i=1}^{n} a"} />
                </div>

                {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                <span className="sr-only">
                    a^n = a * a * ... * a (n раз)
                </span>
            </div>

            <div>
                Тут: <br />

                <div className="flex flex-row">
                    <div>
                        {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                        <div aria-hidden="true">
                            <InlineMath math={"a^n"} />
                        </div>

                        {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                        <span className="sr-only">
                            a^n
                        </span>
                    </div>
                    <span> — степень</span>
                </div>

                <span><b>a</b> — основание степени</span> <br />
                <span><b>n</b> — показатель степени</span>

                <div className="flex flex-row">
                    {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                    <div aria-hidden="true" className="xl:text-lg">
                        <InlineMath math={"\\prod_{i=1}^{n} a"} />
                    </div>
                    <span> — умножать нужное количество раз на <b>a</b> с накоплением.</span>
                </div>
            </div>
        </div>

        <section>
            <h3 id="Power-Formulas" className="text-xl mt-4 mb-2 text-wrap">Формулы</h3>

            <div className="flex flex-col gap-2">
                <div className="flex flex-row">
                    {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                    <div aria-hidden="true" className="xl:text-lg">
                        <InlineMath math={"a^{-n} = \\frac{1}{a^n}, a \\neq 0"} />
                    </div>

                    {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                    <span className="sr-only">
                        a^(-n) = 1/(a^n), a != 0
                    </span>
                </div>

                <div className="flex flex-row">
                    {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                    <div aria-hidden="true" className="xl:text-lg">
                        <InlineMath math={"a^0 = 1, a \\neq 0"} />
                    </div>

                    {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                    <span className="sr-only">
                        a^0 = 1, a != 0
                    </span>
                </div>

                <div className="flex flex-row">
                    {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                    <div aria-hidden="true" className="xl:text-lg">
                        <InlineMath math={"(\\frac{a}{b})^{-n} = \\frac{a^n}{b^n}"} />
                    </div>

                    {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                    <span className="sr-only">
                        (a/b)^(-n) = (a^n)/(b^n)
                    </span>
                </div>


                <div className="flex flex-row">
                    <div>
                        {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                        <div aria-hidden="true" className="xl:text-lg">
                            <InlineMath math={"a^m \\cdot a^n = a^{m+n}"} />
                        </div>

                        {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                        <span className="sr-only">
                            a^m * a^n = a^(m+n)
                        </span>
                    </div>
                    <span className="text-base"> — Произведение степеней с одинаковым основанием</span>
                </div>

                <div className="flex flex-row">
                    {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                    <div aria-hidden="true" className="xl:text-lg">
                        <InlineMath math={"\\frac{a^m}{a^n} = a^m / a^n = a^{m - n}"} />
                    </div>

                    {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                    <span className="sr-only">
                        (a^m)/(a^n) = a^m / a^n = a^(m-n)
                    </span>
                    <span className="text-base"> — Деление степеней с одинаковыми основаниями</span>
                </div>

                <div className="flex flex-row">
                    {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                    <div aria-hidden="true" className="xl:text-lg">
                        <InlineMath math={"(a \\cdot b \\cdot c)^n = a^n \\cdot b^n \\cdot c^n"} />
                    </div>

                    {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                    <span className="sr-only">
                        (a*b*c)^n = a^n * b^n * c^n
                    </span>
                    <span className="text-base"> — Раскрытие скобок</span>
                </div>


                <div className="flex flex-row">
                    {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                    <div aria-hidden="true" className="xl:text-lg">
                        <InlineMath math={"(\\frac{a}{b})^n = (a / b)^n = \\frac{a^n}{b^n}"} />
                    </div>

                    {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                    <span className="sr-only">
                        (a/b)^n = (a/b)^n = (a^n)/(b^n)
                    </span>
                    <span className="text-base"> — Раскрытие скобок</span>
                </div>

                <div className="flex flex-row">
                    {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                    <div aria-hidden="true" className="xl:text-lg">
                        <InlineMath math={"(a^m)^n = a^{m \\cdot n}"} />
                    </div>

                    {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                    <span className="sr-only">
                        (a^m)^n = a^(m*n)
                    </span>
                    <span className="text-base"> — Раскрытие скобок</span>
                </div>

                <div className="flex flex-row">
                    {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                    <div aria-hidden="true" className="xl:text-xl">
                        <InlineMath math={"((\\frac{a}{b})^{\\cancel{c}})^{\\frac{d}{\\cancel{c}}} = (\\frac{a}{b})^d"} />
                    </div>

                    {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                    <span className="sr-only">
                        ((a/b)^c)^(d/c) = (a/b)^d
                    </span>

                    <span className="text-base"> — Сокращение дробей при переумножении степеней</span>
                </div>

                <div className="flex flex-row">
                    {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                    <div aria-hidden="true" className="xl:text-xl">
                        <InlineMath math={"a^{\\frac{m}{n}} = \\sqrt[n]{a^m} , (a^{\\frac{1}{2}} = \\sqrt{a})"} />
                    </div>

                    {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                    <span className="sr-only">
                        a^(m/n) = (a^m)^(1/n)
                    </span>

                    <span className="text-base"> — Связь степеней с корнями</span>
                </div>

                <div className="flex flex-row">
                    {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                    <div aria-hidden="true" className="xl:text-xl">
                        <InlineMath math={"25^9 = 5^{18}"} />
                    </div>

                    {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                    <span className="sr-only">
                        25^9 = 5^(18)
                    </span>

                    <span className="text-base"> — возведение в степень числа со степенью</span>
                </div>
            </div>

        </section>
    </section>
)

const Polynomias = () => (
    <section>
        <ContentDividerV1 className='my-4'>
            <h2 id="Polynomias" className="w-fit text-wrap xl:text-nowrap text-2xl">Многочлены</h2>
        </ContentDividerV1>

        <section>
            <h3 id="Polynomias-mononomias" className="text-xl mt-4 mb-2 text-wrap">Одночлен</h3>

            <p><strong>Одночленом</strong> называют произведение чисел, переменных и их натуральных степеней.</p>
            <p>Примеры одночленов:</p>
            <ul className="list-disc list-inside">
                <li>-4x <i>(Тут используется одночлен с коэффициентом -1    )</i></li>
                <li>4x</li>
                <li>7a&sup2;b&sup3;</li>
            </ul>

            <p><strong>Степенью одночлена с коэффициентом, отличным от нуля</strong>, называют сумму показателей степеней входящих в него переменных:</p>
            <ul className="list-disc list-inside">
                <li>2a&sup2;b&sup3; — одночлен пятой степени</li>
                <li>2a&sup2; — одночлен второй степени</li>
                <li>2a&sup2;b — одночлен третьей степени</li>
                <li>2 — одночлен нулевой степени</li>
            </ul>

            <p><strong>Подобными</strong> называют одночлены, у которых одинаковая часть, содержащая степени и переменные:</p>
            <ul className="list-disc list-inside">
                <li>2a&sup2;b&sup3; и 4a&sup2;b&sup3;</li>
                <li>a&sup2;b&sup3; и -a&sup2;b&sup3;</li>
            </ul>


            <section>
                <h4 className="text-lg mt-4 mb-2 text-wrap">Операции над одночленами</h4>

                <section>
                    <h5 className="text-base mt-4 mb-2 text-wrap">Умножение</h5>
                    <ul className="space-y-2">
                        <li>
                            <div className="flex flex-row">
                                {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                                <div aria-hidden="true" className="xl:text-lg">
                                    <InlineMath math={"4a^3b^2 \\cdot -4a^4b^3 = -16a^7b^5"} />
                                </div>

                                {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                                <span className="sr-only">
                                    4 * a^3 * b^2 * -4 * a^4 * b^3 = -16 * a^7 * b^5
                                </span>
                            </div>
                        </li>
                    </ul>
                </section>

                <section>
                    <h5 className="text-base mt-4 mb-2 text-wrap">Деление</h5>

                    <ul className="space-y-2">
                        <li>
                            <div className="flex flex-row">
                                {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                                <div aria-hidden="true" className="xl:text-lg">
                                    <InlineMath math={"8a^3b^2 / -4a^2b = -2ab"} />
                                </div>

                                {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                                <span className="sr-only">
                                    8*a^3 * b^2 / -4*a^2 * b = -2*a*b
                                </span>
                            </div>
                        </li>
                    </ul>
                </section>

                <section>
                    <h5 className="text-base mt-4 mb-2 text-wrap">Возведение в степень</h5>

                    <ul className="space-y-2">
                        <li>
                            <div className="flex flex-row">
                                {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                                <div aria-hidden="true" className="xl:text-lg">
                                    <InlineMath math={"(4a^4b^3)^3 = 64a^{12}b^9"} />
                                </div>

                                {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                                <span className="sr-only">
                                    (4 * a^4 * b^3)^3 = 64 * a^(12) * b^9
                                </span>
                            </div>
                        </li>
                    </ul>
                </section>

                <section>
                    <h5 className="text-base mt-4 mb-2 text-wrap">Сложение и вычитание</h5>
                    <p>Складывать и вычитать можно только <b>подобные</b> одночлены.</p>

                    <ul className="space-y-2">
                        <li>
                            <div className="flex flex-row">
                                {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                                <div aria-hidden="true" className="xl:text-lg">
                                    <InlineMath math={"4a^2 + 2a^2 = 6a^2"} />
                                </div>

                                {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                                <span className="sr-only">
                                    4 * a^2 + 2 * a^2 = 6 * a^2
                                </span>
                            </div>
                        </li>
                        <li>
                            <div className="flex flex-row">
                                {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                                <div aria-hidden="true" className="xl:text-lg">
                                    <InlineMath math={"4a^2 - 2a^2 = 2a^2"} />
                                </div>

                                {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                                <span className="sr-only">
                                    4 * a^2 - 2 * a^2 = 2 * a^2
                                </span>
                            </div>
                        </li>
                    </ul>
                </section>
            </section>
        </section>

        <section>
            <h3 id="Polynomias-polynomias" className="text-xl mt-4 mb-2 text-wrap">Многочлен</h3>

            <p><strong>Многочленом</strong> называют сумму одночленов. <b>Двухчлен</b> — многочлен из двух членов. <b>Трёхчлен</b> — многочлен из трёх членов.</p>
            <div>
                <span>Многочлен: </span>
                {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                <div aria-hidden="true" className="inline xl:text-lg">
                    <InlineMath math={"4a - 2ab + a - 4"} />
                </div>

                {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                <span className="sr-only inline">
                    4*a - 2*a*b + a -4
                </span>

                <span> состоит из четырёх одночленов: </span>

                {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                <div aria-hidden="true" className="inline xl:text-lg">
                    <InlineMath math={"4a, 2ab, a, -4"} />
                </div>

                {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                <span className="sr-only inline">
                    4*a, 2*a*b, a, -4
                </span>
            </div>

            <p>Многочлен имеет <strong>стандартный вид</strong>, если все его члены записаны в стандартном виде и среди них нет подобных.</p>

            <p><strong>Степенью многочлена</strong> стандартного вида называют наибольшую из степеней входящих в него одночленов:</p>
            <ul>
                <li>
                    <div>
                        {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                        <div aria-hidden="true" className="inline xl:text-lg">
                            <InlineMath math={"2ab - 5a^2 + 2a^3b^2"} />
                        </div>

                        {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                        <span className="sr-only inline">
                            2*a*b - 5*a^2 + 2*a^3 * b^2
                        </span>

                        <span> тут член с наибольшей степенью — </span>

                        {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                        <div aria-hidden="true" className="inline xl:text-lg">
                            <InlineMath math={"2a^3b^2"} />
                        </div>

                        {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                        <span className="sr-only inline">
                            2*a^3 * b^2
                        </span>

                        <span>, следовательно, степень многочлена равна 5.</span>
                    </div>
                </li>

                <p><b>Разложить многочлен на множители</b> — значит представить его в виде произведения одночлена и многочлена или произведения многочленов. В большинстве случаев выносят общий множитель за скобки.</p>
            </ul>

            <section>
                <h4 className="text-lg mt-4 mb-2 text-wrap">Операции над многочленами</h4>

                <section>
                    <h5 className="text-base mt-4 mb-2 text-wrap">Сложение и вычитание</h5>

                    <p>Складывать и вычитать можно только <b>подобные</b> одночлены.</p>

                    <p>Если перед скобками стоит &apos;-&apos; , то каждый член в скобках нужно умножить на -1: <br />
                        <b className="text-lg">a - (b - c) = a - b + c</b>
                    </p>

                    <p className="font-heading">Примеры:</p>
                    <ul className="space-y-2">
                        <li>
                            <div className="flex flex-row">
                                {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                                <div aria-hidden="true" className="xl:text-lg">
                                    <InlineMath math={"4a^2 + 4a - (2a^2 - 2a + 1) = 2a^2 + 6a - 1"} />
                                </div>

                                {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                                <span className="sr-only">
                                    4*a^2 + 4*a - (2*a^2 - 2*a +1) = 2*a^2 + 6*a - 1
                                </span>
                            </div>
                        </li>
                        <li>
                            <div className="flex flex-row">
                                {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                                <div aria-hidden="true" className="xl:text-lg">
                                    <InlineMath math={"2ab + 4a + 3b^2 - (ab + 2b^2) = ab + 4a +b^2"} />
                                </div>

                                {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                                <span className="sr-only">
                                    2*a*b + 4*a + 3*b^2 - (a*b + 2*b^2) = a*b + 4*a + b^2
                                </span>
                            </div>
                        </li>
                    </ul>
                </section>

                <section>
                    <h5 className="text-base mt-4 mb-2 text-wrap">Деление многочлена на одночлен</h5>

                    <p>Чтобы делить многочлен на одночлен, нужно сначала делить каждый член многочлена на одночлен, затем сложить что получилось.</p>
                    <p>По факту делишь каждый член многочлена на одночлен:</p>

                    <ul className="space-y-2">
                        <li>
                            {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                            <div aria-hidden="true" className="xl:text-lg">
                                <InlineMath math={"8a^4 - 6a^3 + 8a^2 / 2a^2 = 8a^4 / 2a^2 - 6a^3 / 2a^2 + 8a^2 / 2a^2 = 4a^2 - 3a + 4"} />
                            </div>

                            {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                            <span className="sr-only">
                                8*a^4 - 6*a^3 + 8*a^2 / 2*a^2 = 8*a^4 / 2*a^2 - 6*a^3 / 2*a^2 + 8*a^2 / 2*a^2 = 4*a^2 - 3*a + 4
                            </span>
                        </li>
                    </ul>
                </section>

                <section>
                    <h5 className="text-base mt-4 mb-2 text-wrap">Умножение многочленов</h5>
                    <p>Умножай каждый член первого многочлена на каждый член второго многочлена, пока в первом не закончатся члены для умножения:</p>
                    <ul className="space-y-2">
                        <li>
                            {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                            <div aria-hidden="true" className="xl:text-lg">
                                <InlineMath math={"2a (a^2 + 3a - 1) = 2a \\cdot a^2 + 2a \\cdot 3a - 2a \\cdot 1 = 2a^3 + 6a - 2a"} />
                            </div>

                            {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                            <span className="sr-only">
                                2*a * (a^2 + 3*a - 1) = 2*a * a^2 + 2*a * 1 = 2*a^3 + 6*a - 2*a
                            </span>
                        </li>
                        <li>
                            {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                            <div aria-hidden="true" className="xl:text-lg">
                                <InlineMath math={"(b + c)(b - c) = bb + bc - bc - cc = b^2 + bc - bc - c^2"} />
                            </div>

                            {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                            <span className="sr-only">
                                (b + c)(b - c) = bb + bc - bc - cc = b^2 + bc - bc - c^2
                            </span>
                        </li>
                    </ul>
                </section>
            </section>
        </section>
    </section>
)

const LinearEquations = () => (
    <section>
        <ContentDividerV1 className='my-4'>
            <h2 id="LinearEquations" className="w-fit text-wrap xl:text-nowrap text-2xl">Линейные уравнения</h2>
        </ContentDividerV1>

        <p ><strong>Уравнением</strong> называют равенство с переменной.</p>
        <p><strong>Корнем уравнения</strong> называют значение переменной, которое обращает это уравнение в верное равенство.</p>
        <p><strong>Решить уравнение</strong> — значит найти все его корни или доказать, что их нет.</p>
        <p> <strong>Равносильным уравнением</strong> называют уравнения, имеющие одно и то же множество корней: <i>(x = 2; 4 - x = 2; 8 * x = 16)</i></p>

        <p><strong>Линейным уравнением</strong> называют уравнение вида <b>ax = b</b>, где <b>a</b>, <b>b</b> — числа, а <b>x</b> — переменная.</p>
        <p>Для сравнения, <strong>нелинейные уравнения</strong> — математические равенства, в которых неизвестные находятся в степенях выше первой, умножаются друг на друга или входят в состав особых функций (синус, косинус, логарифм).</p>


        <p>По количеству корней линейное уравнение может:</p>
        <ul className="list-disc list-inside">
            <li>
                не иметь корней: 0*x=16 <i>(нет ответа)</i>
            </li>
            <li>
                иметь единственный корень: 4*x=8 <i>(x = 2)</i>
            </li>
            <li>
                иметь бесконечное количество корней: 0*x=0 <i>(подставляй в x что хочешь)</i>
            </li>
        </ul>


        <h3 id="LinearEquations-not_equals_one_var" className="text-xl mt-4 mb-2 text-wrap">Линейные неравенства с одной переменной</h3>
        <p><b>Линейные неравенства с одной переменной</b>: <i>a*x&gt;b</i> , <i>a*x&lt;b</i> , <i>a*x&ge;b</i> , <i>a*x&le;b</i> , где a,b — числа, а x — переменная. </p>

        <p><strong>Решением неравенства с одной переменной</strong> называют число, подстановка которого приводит неравенство к верному числовому равенству.</p>
        <p><strong>Решить неравенство</strong> — значит найти его решения или доказать что их нет.</p>
        <p><strong>Равносильные неравенства</strong> — неравенства, имеющие одно и тоже множество решений. (Аналогично равносильным уравнением)</p>


        {/* TODO: адаптировать под незрячих */}
        {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
        <section aria-hidden="true">
            <h4 id="LinearEquations-examples" className="text-xl mt-4 mb-2 text-wrap">Примеры решений неравенств</h4>

            <ul className="list-disc pl-4 space-y-3">
                <li>
                    {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                    <div aria-hidden="true" className="xl:text-lg">

                        <InlineMath math={`
                            \\begin{aligned}
                                6x^2 - 3x(2x + 4) &\\ge 18 \\\\
                                6x^2 - 6x^2 + 12x &\\ge 18 \\\\
                                -12x &\\ge 18 \\\\
                                -2x &\\ge 3 \\\\
                                -x &\\ge 1.5 \\\\ 
                                x &\\le -1.5 
                            \\end{aligned}
                            `} />
                    </div>
                </li>
                <li>
                    {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                    <div aria-hidden="true" className="xl:text-lg">
                        <InlineMath math={`
                            \\begin{aligned}
                                (x + 7)(x - 3) &\\ge x^2 \\\\
                                x^2 - 3x + 7x - 21 &\\ge x^2 \\\\
                                4x - 21 &\\ge 0 \\\\
                                x &\\ge 5.25 
                            \\end{aligned}`} />
                    </div>
                </li>
                <li>
                    {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                    <div aria-hidden="true" className="xl:text-lg">
                        <InlineMath math={`
                            \\begin{aligned}
                                x(x + 2) &\\lt (x + 3)(x - 1) \\\\
                                x^2 + 2x &\\lt x^2 - x + 3x - 3 \\\\
                                x^2 + 2x &\\lt x^2 + 2x - 3 \\\\
                                0 &\\lt - 3
                            \\end{aligned}`} />

                        <span> — нет решений, или у неравенства нет корней.</span>
                    </div>
                </li>
                <li>
                    {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                    <div aria-hidden="true" className="xl:text-lg">
                        <InlineMath math={`
                            \\begin{aligned}
                                (x + 6) (3x - 8) -3(x^2 - 1) &\\gt 20 \\\\
                                3x^2 - 8x + 18x - 48 - 3x^2 + 3 &\\gt 20 \\\\
                                10x - 45 &\\gt 20 \\\\
                                10x - 65 &\\gt 0 \\\\
                                x &\\gt 6.5
                            \\end{aligned}`} />
                    </div>
                </li>
                <li>
                    {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                    <div aria-hidden="true" className="xl:text-lg">
                        <InlineMath math={`
                            \\begin{aligned}
                                (x - 3) (2x - 1) &\\le (2x + 1) (x + 2) \\\\
                                2x^2 - x - 6x + 3 &\\le 2x^2 + 4x + x + 2 \\\\
                                2x^2 - 7x + 3 &\\le 2x^2 + 5x + 2 \\\\
                                -7x + 3 &\\le 5x + 2 \\\\
                                -12x + 1 &\\le 0 \\\\
                                -12x &\\le -1 \\\\
                                -x &\\le - \\frac{1}{12} \\\\\
                                x &\\ge \\frac{1}{12}
                            \\end{aligned}`} />
                    </div>
                </li>
                <li>
                    {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                    <div aria-hidden="true" className="xl:text-lg">
                        <InlineMath math={`
                            \\begin{aligned}
                                (3x + 3)(x + 2) - (3x - 4)(x + 2) &\\gt 35 \\\\
                                3x^2 + 6x + 3x + 6 + (-3x + 4)(x + 2) &\\gt 35 \\\\
                                3x^2 + 6x + 3x + 6 -3x^2 - 6x + 4x + 8 &\\gt 35 \\\\
                                3x + 6 + 4x + 8 &\\gt 35 \\\\
                                7x + 14 &\\gt 35 \\\\
                                7x &\\gt 21 \\\\
                                x &\\gt 3
                            \\end{aligned}`} />
                    </div>
                </li>
            </ul>
        </section>
    </section>
)


const Functions = () => (
    <section>
        <ContentDividerV1 className='my-4'>
            <h2 id="Functions" className="w-fit text-wrap xl:text-nowrap text-2xl">Функция</h2>
        </ContentDividerV1>

        <p><strong>Функцией</strong> называют зависимость двух переменных друг от друга, при которой любому значению одной переменной (аргументу), соответствует одно значение другой переменной (функции). Эту зависимость ещё называют <strong>Функциональной зависимостью</strong>. По факту: в функции y = 2*x, при смене x, y будет меняться тоже. Пример такой функции представлен ниже.</p>
        <p><strong>Областью определения функции</strong> называют множество значений, которые принимают аргумент функции. В функции Y = 2*X областью о</p>
        <p><strong>Множеством значений функции</strong> называют множество значений, которые принимает (по факту выдаёт) функция.</p>

        <p>На системе координат ниже представлена функция <b>Y = 2*X</b>. В ней <b>областью определения функции</b> являются числа: <b>&#123;1, 2, 3, 4&#125;</b>. <b>Множеством значений функции</b> являются числа: <b>&#123;2, 4, 6, 8&#125;</b></p>

        <figure className="flex flex-col items-center my-2 w-fit mx-auto">
            <Image
                src={"/images/storage/algebra/function_y_2_x.svg"}
                unoptimized
                width={500} height={500}
                alt="Декартова система координат с точками на ней. Точки: (1,2), (2,4), (3,6), (4,8). Через все точки проходит прямая."
            />

            <figcaption>
                График функции <b className="text-nowrap">Y = 2*X</b>
            </figcaption>
        </figure>

        <p>Аргументы, при которых значения функции равны 0, называют нулями функции.</p>

        <p><strong>График функции</strong> — это когда представляют функцию на системе координат и там: точки на оси абсцисс равны значениям аргумента, значения на оси координат равны значениям функции.</p>

    </section>
)