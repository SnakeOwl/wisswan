import 'katex/dist/katex.min.css'; // Важно для правильного отображения дробей
import { InlineMath } from 'react-katex';

const Power = () => (
    <div>
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
                        <InlineMath math={"(\\frac{a}{b})^{-n} = \\frac{b^n}{a^n}"} />
                    </div>

                    {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                    <span className="sr-only">
                        (a/b)^(-n) = (b^n)/(a^n)
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
                    <div>
                        {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                        <div aria-hidden="true" className="xl:text-lg">
                            <InlineMath math={"a^c \\cdot b^c = d^c"} />
                        </div>

                        {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                        <span className="sr-only">
                            a^c * b^c = d^c
                        </span>
                    </div>
                    <span className="text-base"> — Произведение оснований с одинаковыми степенями</span>
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

        {/** TODO: для незрячих адаптировать */}
        <section aria-hidden={true}>
            <h3 id="Power-examples" className="mt-4 mb-2 text-xl text-wrap">Примеры вычислений со стеменями</h3>

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
    </div>
)

export default Power;