import ContentDividerV1 from "@/app/_components/dividers/ContentDividerV1";
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
import { InlineMath } from 'react-katex';


const Fractions = () => {
    return (
        <div>
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

            {/** TODO: для незрячих адаптировать */}
            <section aria-hidden={true}>
                <h3 id="Fractions-examples" className="mt-4 mb-2 text-xl text-wrap">Примеры вычислений с дробями</h3>

                <ul className="list-disc pl-4 space-y-3">
                    <li>
                        <div className="flex flex-wrap items-center font-bold">
                            <span>Вычислить:</span>
                            {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                            <div aria-hidden="true" className="xl:text-xl ml-2">
                                <InlineMath math={`(2\\frac{10}{27})^{-\\frac{2}{3}} \\cdot 0.81^{-0.5} + (\\frac{1}{2})^2 + 2^{-3}`} />
                            </div>

                            {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                            <span className="sr-only">

                            </span>
                        </div>

                        <div className="flex flex-wrap items-center">
                            {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                            <div aria-hidden="true" className="xl:text-xl">
                                <InlineMath math={`
                                \\begin{aligned}
                                    &(2\\frac{10}{27})^{-\\frac{2}{3}} \\cdot 0.81^{-0.5} + (\\frac{1}{2})^2 + 2^{-3} = \\\\
                                    &(\\frac{64}{27})^{-\\frac{2}{3}} \\cdot \\frac{1}{0.81^{0.5}} + \\frac{1}{4} + \\frac{1}{2^3} = \\\\
                                    &\\frac{\\sqrt[2]{27^2}}{\\sqrt[2]{64^2}} \\cdot \\frac{1}{\\sqrt{0.81}} + \\frac{1}{4} + \\frac{1}{8} = \\\\
                                    &\\frac{9}{16} \\cdot \\frac{1}{0.9} + \\frac{1}{4} + \\frac{1}{8} = \\\\
                                    &\\frac{9}{14.4} + \\frac{1}{4} + \\frac{1}{8} = \\\\
                                    &0.625 + 0.25 + 0.125 = 1
                                \\end{aligned}
                                `} />
                            </div>

                            {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                            <span className="sr-only">

                            </span>
                        </div>
                    </li>
                    <li>
                        <div className="flex flex-wrap items-center font-bold">
                            <span>Вычислить:</span>
                            {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                            <div aria-hidden="true" className="xl:text-xl ml-2">
                                <InlineMath math={`125^{-\\frac{2}{3}} - 16^{\\frac{1}{2}} + 343^{-\\frac{1}{3}} - 3`} />
                            </div>

                            {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                            <span className="sr-only">

                            </span>
                        </div>

                        <div className="flex flex-wrap items-center">
                            {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                            <div aria-hidden="true" className="xl:text-xl">
                                <InlineMath math={`
                                \\begin{aligned}
                                    &125^{-\\frac{2}{3}} - 16^{\\frac{1}{2}} + 343^{-\\frac{1}{3}} - 3 = \\\\
                                    &(5^3)^{-\\frac{2}{3}} - \\sqrt{16} + \\frac{1}{\\sqrt[2]{343}} - 3 = \\\\
                                    &5^{-2} - 4 + \\frac{1}{7} - 3 = \\\\
                                    &\\frac{1}{25} - 4 + \\frac{1}{7} - 3 = \\\\
                                    &\\frac{7}{175} + \\frac{25}{175} - 7 = \\\\
                                    &\\frac{32}{175} - 7 \\Rightarrow - \\frac{1193}{175} \\Rightarrow -6\\frac{143}{175}
                                \\end{aligned}
                                `} />
                            </div>

                            {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                            <span className="sr-only">

                            </span>
                        </div>
                    </li>

                    <li>
                        <div className="flex flex-wrap items-center font-bold">
                            <span>Найти значение выражения:</span>
                            {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                            <div aria-hidden="true" className="xl:text-xl ml-2">
                                <InlineMath math={`(2-15^{\\frac{1}{4}})(2+15^{\\frac{1}{4}}) / (3^\\frac{1}{2} - 5^{\\frac{1}{2}})^2`} />
                            </div>

                            {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                            <span className="sr-only">

                            </span>
                        </div>

                        <div className="flex flex-wrap items-center">
                            {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                            <div aria-hidden="true" className="xl:text-xl">
                                <InlineMath math={`
                                    \\begin{aligned}
                                        (2-15^{\\frac{1}{4}})(2+15^{\\frac{1}{4}}) / (3^\\frac{1}{2} - 5^{\\frac{1}{2}})^2 =
                                    \\end{aligned}
                                    `} />
                            </div>

                            {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                            <span className="sr-only">

                            </span>
                        </div>

                        <p>Использую формулу сокращённого умножения Разность квадратов:</p>

                        <div className="flex flex-wrap items-center">
                            {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                            <div aria-hidden="true" className="xl:text-xl">
                                <InlineMath math={`
                                    \\begin{aligned}
                                        2^2 - (15^{\\frac{1}{4}})^2 / (3^\\frac{1}{2} - 5^{\\frac{1}{2}})^2 =
                                    \\end{aligned}
                                    `} />
                            </div>

                            {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                            <span className="sr-only">

                            </span>
                        </div>

                        <p>Использую формулу сокращённого умножения Квадрат разности:</p>

                        <div className="flex flex-wrap items-center">
                            {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                            <div aria-hidden="true" className="xl:text-xl">
                                <InlineMath math={`
                                    \\begin{aligned}
                                        &\\frac{2^2 - 15^{\\frac{1}{2}}}{3 - 2 \\cdot 15^{\\frac{1}{2}} + 5} = \\\\
                                        &\\frac{4 - 15^{\\frac{1}{2}}}{8 - 2 \\cdot 15^{\\frac{1}{2}}} = \\\\
                                        &\\frac{4 - 15^{\\frac{1}{2}}}{2 (4 - 15^{\\frac{1}{2}})} = \\frac{1}{2}
                                    \\end{aligned}
                                    `} />
                            </div>

                            {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                            <span className="sr-only">

                            </span>
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
        </div>
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
                        src={"/images/storage/algebra/22.4-div-14.svg"}
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
                                src={"/images/storage/algebra/625.05-div-1.5.svg"}
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
                                src={"/images/storage/algebra/0.5784-div-0.048.svg"}
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


export default Fractions;