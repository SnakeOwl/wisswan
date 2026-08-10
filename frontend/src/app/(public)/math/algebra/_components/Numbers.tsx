import ContentDividerV1 from "@/app/_components/dividers/ContentDividerV1";
import 'katex/dist/katex.min.css'; // Важно для правильного отображения дробей
import { InlineMath } from 'react-katex'; 


export default function Numbers() {
    return (
        <div>
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

                <section>
                    <h4 id="Numbers-imaginary_unit" className="w-fit text-lg text-wrap xl:text-nowrap mt-4 mb-2 ">Мнимая единица &#8520;</h4>
                    <p>&#8520; <strong>Мнимая единица</strong> — число, для которого &#8520;&sup2;=-1. Формально обозначают её как &#8520;, но почти всегда пишут как обычную i.</p>

                    <div>
                        <p>Цикл степеней у неё такой:</p>
                        <div className="flex flex-wrap items-center">
                            {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                            <div aria-hidden="true" className="xl:text-xl">
                                <InlineMath math={`
                            \\begin{aligned}
                                ⅈ^1&=ⅈ \\\\
                                ⅈ^2&=-1 \\\\
                                ⅈ^3&=-ⅈ \\\\
                                ⅈ^4&=1 
                            \\end{aligned}
                        `} />
                            </div>

                            {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                            <span className="sr-only">
                                ⅈ^1=ⅈ br
                                ⅈ^2=-1
                                ⅈ^3=-ⅈ
                                ⅈ^4=1
                            </span>
                        </div>
                        <p>а далее цикл повторяется.</p>
                    </div>


                </section>

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
        </div>
    )
}