import Image from "next/image";
import 'katex/dist/katex.min.css'; // Важно для правильного отображения дробей
import { InlineMath } from 'react-katex';

const LinearEquations = () => (
    <div>
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


        <section>
            <h3 id="LinearEquations-not_equals_one_var" className="text-xl mt-4 mb-2 text-wrap">Линейные неравенства с одной переменной</h3>
            <p><b>Линейные неравенства с одной переменной</b>: <i>a*x&gt;b</i> , <i>a*x&lt;b</i> , <i>a*x&ge;b</i> , <i>a*x&le;b</i> , где a,b — числа, а x — переменная. </p>

            <p><strong>Решением неравенства с одной переменной</strong> называют число, подстановка которого приводит неравенство к верному числовому равенству.</p>
            <p><strong>Решить неравенство</strong> — значит найти его решения или доказать что их нет.</p>
            <p><strong>Равносильные неравенства</strong> — неравенства, имеющие одно и тоже множество решений. (Аналогично равносильным уравнением)</p>


            {/* TODO: адаптировать под незрячих */}
            {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
            <section aria-hidden="true">
                <h4 id="LinearEquations-examples" className="text-lg mt-4 mb-2 text-wrap">Примеры решений неравенств с одной переменной</h4>

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

            <section>
                <h3 id="LinearEquations-linear_with_two_variables" className="text-xl mt-4 mb-2 text-wrap">Линейные неравенства с двумя переменными</h3>

                <div><strong>Линейным уравнением с двумя переменными</strong>&nbsp;выглядит так:&nbsp;
                    {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                    <div aria-hidden="true" className="inline xl:text-lg">
                        <InlineMath math={"ax + by = c"} />
                    </div>
                    <div className="sr-only inline">
                        a*x+b*y=c
                    </div>
                    <span>, в нём <b>a</b>, <b>b</b>, <b>c</b> — числа, <b>x</b> и <b>y</b> — переменные.</span>
                </div>

                <div>
                    <b>Решением уравнения</b> {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                    <div aria-hidden="true" className="inline xl:text-lg">
                        <InlineMath math={"ax + by = c"} />
                    </div>
                    <div className="sr-only inline">
                        a*x+b*y=c
                    </div>
                    <span> является упорядоченная пара чисел (x, y), при подстановке которых в уравнение, получается верное числовое равенство.</span>
                    <span><strong>Графиком</strong> такого уравнения является прямая</span>
                </div>
                <p>Стоит отметить, что количество решений может быть более одного (это от нулей в уравнении зависит, чем их больше, тем меньше решений).</p>
            </section>

            {/** TODO: адаптировать для незрячих */}
            <section aria-hidden="true">
                <h3 id="LinearEquations-system_with_2_linear_with_two_variables" className="text-xl mt-4 mb-2 text-wrap">Система из двух линейных уравнений с двумя переменными</h3>

                <p>Система из двух линейных уравнений с двумя переменными имеет вид:</p>
                {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                <div aria-hidden="true" className="xl:text-lg">
                    <InlineMath math={`
                            \\begin{cases}
                            \\color{red}{a_1x + b_1y = c_1} \\\\
                            \\color{blue}{a_2x + b_2y = c_2}
                            \\end{cases}`} />
                    <span>где a<sub>1,2</sub>, b<sub>1,2</sub>, c<sub>1,2</sub> — числа, а x,y — переменные</span>
                </div>
                <p><strong>Решением системы уравнений</strong> будет пара чисел (x,y), которые будут одновременно решать все уравнения в системе.</p>
                <p><strong>Решить систему</strong> — значит найти все её решения или доказать, что их нет.</p>

                <div>
                    <p>Количество решений у систем может быть несколько или не быть:</p>

                    <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
                        <figure className="flex flex-col items-center my-2 w-fit mx-auto">
                            <Image
                                src={"/images/storage/algebra/two-linear-formulas-same.svg"}
                                unoptimized
                                width={500} height={500}
                                alt="Декартова система координат с двумя прямыми, которые лежат друг на друге"
                            />

                            <figcaption>
                                Если прямые совпадают, значит система уравнений имеет бесконечное количество решений
                            </figcaption>
                        </figure>

                        <figure className="flex flex-col items-center my-2 w-fit mx-auto">
                            <Image
                                src={"/images/storage/algebra/two-linear-formulas-parralel.svg"}
                                unoptimized
                                width={500} height={500}
                                alt="Декартова система координат с двумя прямыми, которые парралельны друг другу"
                            />

                            <figcaption>
                                Если прямые не пересекаются, значит система решений не имеет
                            </figcaption>
                        </figure>

                        <figure className="flex flex-col items-center my-2 w-fit mx-auto">
                            <Image
                                src={"/images/storage/algebra/two-linear-formulas-crossed.svg"}
                                unoptimized
                                width={500} height={500}
                                alt="Декартова система координат с двумя прямыми, которые пересекаются в одной точке"
                            />

                            <figcaption>
                                Если прямые пересекаются в одной точке, значит система имеет одно решение
                            </figcaption>
                        </figure>
                    </div>
                </div>

                {/** TODO: адаптировать для незрячих */}
                <section aria-hidden={true}>
                    <h4 id="LinearEquations-system_with_2_linear_with_two_variables-solutions" className="text-lg mt-4 mb-2 text-wrap">Способы решения систем </h4>

                    <section>
                        <h5 id="LinearEquations-system_with_2_linear_with_two_variables-solutions-addiction" className="text-base mt-4 mb-2 text-wrap">Решение способом сложения</h5>

                        <p>Допустим есть система:</p>

                        <div>
                            {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                            <div aria-hidden="true" className="xl:text-lg">
                                <InlineMath math={`
                                \\begin{cases}
                                    4x + 2y = 14 \\\\
                                    6x - 2y = 10
                                \\end{cases}
                                `} />
                            </div>
                            {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                            <span className="sr-only">
                            </span>
                        </div>

                        <p>В системе можно делать операции между самими уравнениями, главное чтобы операция влияла на все члены уравнения. Условно при умножении на число, нужно умножать числа (даже после знака равно). Ещё можно суммировать все члены одного уравнения на все члены другого (если до этого умножить уравнение на нужное число, то можно избавиться от переменных во втором слагаемом).</p>
                        <p>В данном случае берём первое уравнение и суммируем со вторым (умножение не требуется). Получаем:</p>

                        <div>
                            {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                            <div aria-hidden="true" className="xl:text-lg">
                                <InlineMath math={`
                                \\begin{cases}
                                    4x + 2y = 14 \\\\
                                    10x - 0 = 24
                                \\end{cases}
                                `} />
                            </div>
                            {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                            <span className="sr-only">
                            </span>
                        </div>

                        <p>Далее из второго уравнения узнаём x:</p>

                        <div>
                            {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                            <div aria-hidden="true" className="xl:text-lg">
                                <InlineMath math={`
                                \\begin{cases}
                                    4x + 2y &= 14 \\\\
                                    x &= 24 / 10 = 2.4
                                \\end{cases}
                                `} />
                            </div>
                            {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                            <span className="sr-only">
                            </span>
                        </div>

                        <p>Найденный x подставляем в первое уравнение:</p>
                        <div>
                            {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                            <div aria-hidden="true" className="xl:text-lg">
                                <InlineMath math={`
                                \\begin{cases}
                                    4 \\cdot 2.4 + 2y &= 14 \\\\
                                    x &= 2.4
                                \\end{cases}
                                `} />
                            </div>
                            {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                            <span className="sr-only">
                            </span>
                        </div>

                        <p>Далее находим y из первого уравнения:</p>
                        <div>
                            {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                            <div aria-hidden="true" className="xl:text-lg">
                                <InlineMath math={`
                                \\begin{cases}
                                    y &=  (14 - 9.6) / 2 = 2.2 \\\\
                                    x &= 2.4
                                \\end{cases}
                                `} />
                            </div>
                            {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                            <span className="sr-only">
                            </span>
                        </div>

                        <p>Ответ: (2.4, 2.2)</p>
                    </section>


                    <section>
                        <h5 id="LinearEquations-system_with_2_linear_with_two_variables-solutions-substitution" className="text-base mt-4 mb-2 text-wrap">Решение способом подстановки</h5>

                        <p>Допустим есть система:</p>

                        <div>
                            {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                            <div aria-hidden="true" className="xl:text-lg">
                                <InlineMath math={`
                                \\begin{cases}
                                    4x + y = 14 \\\\
                                    6x - y = 10
                                \\end{cases}
                                `} />
                            </div>
                            {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                            <span className="sr-only">
                            </span>
                        </div>

                        <p>Из первого уравнения выражаем y:</p>

                        <div>
                            {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                            <div aria-hidden="true" className="xl:text-lg">
                                <InlineMath math={`
                                \\begin{cases}
                                    y &= -4x + 14 \\\\
                                    6x - y &= 10
                                \\end{cases}
                                `} />
                            </div>
                            {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                            <span className="sr-only">
                            </span>
                        </div>

                        <p>Подставляем y во второе уравнение:</p>

                        <div>
                            {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                            <div aria-hidden="true" className="xl:text-lg">
                                <InlineMath math={`
                                \\begin{cases}
                                    y &= -4x + 14 \\\\
                                    6x - (-4x + 14) &= 10
                                \\end{cases}
                                `} />
                            </div>
                            {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                            <span className="sr-only">
                            </span>
                        </div>

                        <p>Решая второе уравнение узнаём x:</p>

                        <div className="flex flex-col gap-3">
                            <div>
                                {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                                <div aria-hidden="true" className="xl:text-lg">
                                    <InlineMath math={`
                                \\begin{cases}
                                    y &= -4x + 14 \\\\
                                    6x + 4x -14 &= 10
                                \\end{cases}
                                `} />
                                </div>
                                {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                                <span className="sr-only">
                                </span>
                            </div>

                            <div>
                                {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                                <div aria-hidden="true" className="xl:text-lg">
                                    <InlineMath math={`
                                \\begin{cases}
                                    y &= -4x + 14 \\\\
                                    10x &= 10 + 14
                                \\end{cases}
                                `} />
                                </div>
                                {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                                <span className="sr-only">
                                </span>
                            </div>

                            <div>
                                {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                                <div aria-hidden="true" className="xl:text-lg">
                                    <InlineMath math={`
                                \\begin{cases}
                                    y &= -4x + 14 \\\\
                                    x &= 24 / 10 = 2.4
                                \\end{cases}
                                `} />
                                </div>
                                {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                                <span className="sr-only">
                                </span>
                            </div>
                        </div>


                        <p>Подставляем значение x в первое уравнение и находим y:</p>
                        <div>
                            {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                            <div aria-hidden="true" className="xl:text-lg">
                                <InlineMath math={`
                                \\begin{cases}
                                    y &= -4(2.4) + 14 = 4.4 \\\\
                                    x &= 2.4
                                \\end{cases}
                                `} />
                            </div>
                            {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                            <span className="sr-only">
                            </span>
                        </div>

                        <p>Ответ: (2.4, 4.4)</p>
                    </section>
                </section>

                {/** TODO: адаптировать для незрячих */}
                <section aria-hidden={true}>
                    <h4 id="LinearEquations-system_with_2_linear_with_two_variables-examples" className="text-lg mt-4 mb-2 text-wrap">Примеры решения систем</h4>

                    <div className="flex flex-col gap-6">


                        <div className="flex flex-col gap-3">
                            <div>
                                {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                                <div aria-hidden="true" className="xl:text-lg">
                                    <InlineMath math={`
                                \\begin{cases}
                                0.1x + 0.2y &= 0.3 \\\\
                                0.4x + 0.5y &= 0.9
                                \\end{cases}
                                `} />
                                </div>
                                {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                                <span className="sr-only">
                                </span>
                            </div>

                            <p>Умножаем первое уравнение на -4 и суммируем со вторым:</p>
                            <div>
                                {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                                <div aria-hidden="true" className="xl:text-lg">
                                    <InlineMath math={`
                                \\begin{cases}
                                    0.1x + 0.2y &= 0.3 \\\\
                                    0 + -0.3y &= -0.3
                                \\end{cases}
                                `} />
                                </div>
                                {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                                <span className="sr-only">
                                </span>
                            </div>

                            <div>
                                {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                                <div aria-hidden="true" className="xl:text-lg">
                                    <InlineMath math={`
                                \\begin{cases}
                                    0.1x + 0.2y &= 0.3 \\\\
                                    y &= -0.3 / -0.3 = 1
                                \\end{cases}
                                `} />
                                </div>
                                {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                                <span className="sr-only">
                                </span>
                            </div>

                            <div>
                                {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                                <div aria-hidden="true" className="xl:text-lg">
                                    <InlineMath math={`
                                \\begin{cases}
                                    0.1x + 0.2(1) &= 0.3 \\\\
                                    y &= 1
                                \\end{cases}
                                `} />
                                </div>
                                {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                                <span className="sr-only">
                                </span>
                            </div>

                            <div>
                                {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                                <div aria-hidden="true" className="xl:text-lg">
                                    <InlineMath math={`
                                \\begin{cases}
                                    x &= (0.3 - 0.2) / 0.1 = 1 \\\\
                                    y &= 1
                                \\end{cases}
                                `} />
                                </div>
                                {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                                <span className="sr-only">
                                </span>
                            </div>
                        </div>

                        <hr />
                        <div className="flex flex-col gap-3">
                            <div>
                                {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                                <div aria-hidden="true" className="xl:text-lg">
                                    <InlineMath math={`
                                    \\begin{cases}
                                        0.6x - 0.2 = 19 - 3y \\\\
                                        0.5y - \\frac{5}{6} = 15 \\frac{2}{3} - 2x
                                    \\end{cases}
                                `} />
                                </div>
                                {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                                <span className="sr-only">
                                </span>
                            </div>

                            <div>
                                {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                                <div aria-hidden="true" className="xl:text-lg">
                                    <InlineMath math={`
                                    \\begin{cases}
                                        0.6x + 3y = 19 + \\frac{1}{5} = \\frac{96}{5} = \\frac{192}{10}  \\\\
                                        2x + 0.5y  = 15\\frac{2}{3} + \\frac{5}{6} = \\frac{99}{6} = \\frac{33}{2} = \\frac{165}{10}
                                    \\end{cases}
                                `} />
                                </div>
                                {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                                <span className="sr-only">
                                </span>
                            </div>

                            <div>
                                {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                                <div aria-hidden="true" className="xl:text-lg">
                                    <InlineMath math={`
                                    \\begin{cases}
                                        y = (\\frac{192}{10} - 0.6x) / 3 =\\frac{64}{10} - 0.2x \\\\
                                        2x + 0.5(\\frac{64}{10} - 0.2x) = \\frac{165}{10}
                                    \\end{cases}
                                `} />
                                </div>
                                {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                                <span className="sr-only">
                                </span>
                            </div>

                            <div>
                                {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                                <div aria-hidden="true" className="xl:text-lg">
                                    <InlineMath math={`
                                    \\begin{cases}
                                        y = 6.4 - 0.2x \\\\
                                        2x + \\frac{32}{10} - 0.1x = \\frac{165}{10}
                                    \\end{cases}
                                `} />
                                </div>
                                {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                                <span className="sr-only">
                                </span>
                            </div>

                            <div>
                                {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                                <div aria-hidden="true" className="xl:text-lg">
                                    <InlineMath math={`
                                    \\begin{cases}
                                        y = 6.4 - 0.2x \\\\
                                        1.9x = 16.5 - 3.2 = 13.3
                                    \\end{cases}
                                `} />
                                </div>
                                {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                                <span className="sr-only">
                                </span>
                            </div>

                            <div>
                                {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                                <div aria-hidden="true" className="xl:text-lg">
                                    <InlineMath math={`
                                    \\begin{cases}
                                        y = 6.4 - 0.2x \\\\
                                        1.9x = 13.3 / 1.9 = 7
                                    \\end{cases}
                                `} />
                                </div>
                                {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                                <span className="sr-only">
                                </span>
                            </div>

                            <div>
                                {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                                <div aria-hidden="true" className="xl:text-lg">
                                    <InlineMath math={`
                                    \\begin{cases}
                                        y = 6.4 - 0.2 \\cdot 7 = 5\\\\
                                        1.9x  = 7
                                    \\end{cases}
                                `} />
                                </div>
                                {/* 2. Этот блок не виден на экране, но читалка прочтет его идеально понятным языком */}
                                <span className="sr-only">
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
            </section>



        </section>
    </div >
)


export default LinearEquations;