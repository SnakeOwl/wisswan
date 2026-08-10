import Image from "next/image";
import 'katex/dist/katex.min.css'; // Важно для правильного отображения дробей
import { InlineMath } from 'react-katex';

const Polynomias = () => (
    <div>
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
    </div>
)

export default Polynomias;