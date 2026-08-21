import ContentDividerV1 from "@/app/_components/dividers/ContentDividerV1";
import Image from "next/image";
import 'katex/dist/katex.min.css'; // Важно для правильного отображения дробей
import { InlineMath } from "react-katex";

const Percent = () => (
    <div>
        <section id="Percent_general">
            <h3 id="Percent-general" className="w-fit text-xl text-wrap xl:text-nowrap">Общие сведения</h3>

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
                <h3 id="Percent-formulas" className="w-fit text-xl text-wrap xl:text-nowrap">Формулы</h3>
            </ContentDividerV1>


            <h4 id="Percent-formulas-find_percent" className="w-fit text-lg text-wrap xl:text-nowrap mt-4 mb-2 ">Нахождение процента (<span className="text-green-700">b</span>) от числа (<span className="text-blue-700">a</span>)</h4>
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
                    src={"/images/storage/algebra/percent-no-b.svg"}
                    unoptimized
                    width={120} height={120}
                    alt="2 круга: первый большой круг с пометками: a и p%, второй круг вписан в первый, занимает примерно 25% от первого и помечен знаком вопроса"
                />
            </div>

            <h4 id="Percent-formulas-find_number" className="w-fit text-lg text-wrap xl:text-nowrap mt-4 mb-2 ">Нахождение числа (<span className="text-blue-700">a</span>) по его проценту (<span className="text-blue-700">p%</span>)</h4>
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
                    src={"/images/storage/algebra/percent-no-a.svg"}
                    unoptimized
                    width={120} height={120}
                    alt="2 круга: первый большой круг с пометками: знак вопроса и p%, второй круг вписан в первый, занимает примерно 25% от первого и помечен как b"
                />
            </div>

            <h4 id="Percent-formulas-find_percent_proportion" className="w-fit text-lg text-wrap xl:text-nowrap mt-4 mb-2 ">Нахождение процентного соотношения чисел</h4>
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
                    src={"/images/storage/algebra/percent-has-a-b.svg"}
                    unoptimized
                    width={120} height={120}
                    alt="2 круга: первый большой круг с пометками: a и p%, второй круг вписан в первый, занимает примерно 25% от первого и помечен как b. На первом круге есть знак вопроса правее от второго круга."
                />
            </div>
        </section>
    </div>
)

export default Percent;