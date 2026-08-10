import ContentDividerV1 from '@/app/_components/dividers/ContentDividerV1';
import 'katex/dist/katex.min.css'; // Важно для правильного отображения дробей
import { InlineMath } from "react-katex";

const Proportions = () => {
    return (
        <div>
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
        </div>
    )
}

export default Proportions;