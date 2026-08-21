import { getDefaultOpenGraph } from "@/utils/SEO/getDefaultOpenGraph";
import { Metadata } from "next";
import ContentDividerV1 from "@/app/_components/dividers/ContentDividerV1";
import Numbers from "./_components/Numbers";
import Algoritsm from "./_components/Algoritms";
import Fractions from "./_components/Fractions";
import { Percent } from "lucide-react";
import Proportions from "./_components/Proportions";
import Sets from "../_components/Sets";
import Coordinates from "./_components/Coordinates";
import Power from "./_components/Power";
import Polynomias from "./_components/Polynomias";
import LinearEquations from "./_components/LinearEquations";
import Functions from "./_components/Functions";


export const metadata: Metadata = {
    title: "Алгебра",
    description: "Разделы по алгебре",
    keywords: ["математика", "алгебра"],

    openGraph: getDefaultOpenGraph({
        description: "Алгебра, пояснения по алгебре",
        images: [
            (process.env.NEXT_PUBLIC_SITE_URL + 'images/storage/algebra/percent-no-b.svg'),
            (process.env.NEXT_PUBLIC_SITE_URL + "images/storage/algebra/percent-no-a.svg"),
            (process.env.NEXT_PUBLIC_SITE_URL + "images/storage/geometry/trapezoid.svg"),
            (process.env.NEXT_PUBLIC_SITE_URL + "images/storage/algebra/percent-has-a-b.svg"),
            (process.env.NEXT_PUBLIC_SITE_URL + "images/storage/algebra/22.4-div-14.svg"),
            (process.env.NEXT_PUBLIC_SITE_URL + "images/storage/algebra/625.05-div-1.5.svg"),
            (process.env.NEXT_PUBLIC_SITE_URL + "images/storage/algebra/0.5784-div-0.048.svg"),
            (process.env.NEXT_PUBLIC_SITE_URL + "images/storage/algebra/set-complements.svg"),
            (process.env.NEXT_PUBLIC_SITE_URL + "images/storage/algebra/set-intersection.svg"),
            (process.env.NEXT_PUBLIC_SITE_URL + "images/storage/algebra/set-union.svg"),
            (process.env.NEXT_PUBLIC_SITE_URL + "images/storage/algebra/set-difference.svg"),
            (process.env.NEXT_PUBLIC_SITE_URL + "images/storage/algebra/decart-coordinates.svg"),
            (process.env.NEXT_PUBLIC_SITE_URL + "images/storage/algebra/decart-coordinates-with-dots.svg"),
            (process.env.NEXT_PUBLIC_SITE_URL + "images/storage/algebra/decart-coordinates-y-2-x.svg"),
            (process.env.NEXT_PUBLIC_SITE_URL + "images/storage/algebra/decart-coordinates-y-8-div-x.svg"),
            (process.env.NEXT_PUBLIC_SITE_URL + "images/storage/algebra/two-linear-formulas-same.svg"),
            (process.env.NEXT_PUBLIC_SITE_URL + "images/storage/algebra/two-linear-formulas-parralel.svg"),
            (process.env.NEXT_PUBLIC_SITE_URL + "images/storage/algebra/two-linear-formulas-crossed.svg"),
        ],
    }),
}


export default async function Page() {
    return (
        <main>
            <section>
                <ContentDividerV1 className='my-4'>
                    <h2 id="Numbers" className="w-fit text-2xl text-wrap xl:text-nowrap">Числа</h2>
                </ContentDividerV1>

                <Numbers />
            </section>

            <section>
                <ContentDividerV1 className='my-4'>
                    <h2 id="Algoritsm" className="w-fit text-2xl text-wrap xl:text-nowrap">Алгоритмы</h2>
                </ContentDividerV1>
                <Algoritsm />
            </section>

            <section>
                <ContentDividerV1 className='my-4'>
                    <h2 id="Fractions" className="w-fit text-2xl text-wrap xl:text-nowrap">Дроби</h2>
                </ContentDividerV1>

                <Fractions />
            </section>

            <section>
                <ContentDividerV1 className='my-4'>
                    <h2 id="Percent" className="w-fit text-2xl text-wrap xl:text-nowrap">Проценты</h2>
                </ContentDividerV1>

                <Percent />
            </section>

            <section>
                <ContentDividerV1 className='my-4'>
                    <h2 id="Proportions" className="w-fit text-wrap xl:text-nowrap text-2xl">Пропорции</h2>
                </ContentDividerV1>

                <Proportions />
            </section>

            <section>
                <ContentDividerV1 className='my-4'>
                    <h2 id="Sets" className="w-fit text-wrap xl:text-nowrap text-2xl">Множества</h2>
                </ContentDividerV1>

                <Sets />
            </section>

            <section>
                <ContentDividerV1 className='my-4'>
                    <h2 id="Coordinates" className="w-fit text-wrap xl:text-nowrap text-2xl">Координаты</h2>
                </ContentDividerV1>

                <Coordinates />
            </section>

            <section>
                <ContentDividerV1 className='my-4'>
                    <h2 id="Power" className="w-fit text-wrap xl:text-nowrap text-2xl">Степень числа</h2>
                </ContentDividerV1>

                <Power />
            </section>

            <section>
                <ContentDividerV1 className='my-4'>
                    <h2 id="Polynomias" className="w-fit text-wrap xl:text-nowrap text-2xl">Многочлены</h2>
                </ContentDividerV1>

                <Polynomias />
            </section>

            <section>
                <ContentDividerV1 className='my-4'>
                    <h2 id="LinearEquations" className="w-fit text-wrap xl:text-nowrap text-2xl">Линейные уравнения</h2>
                </ContentDividerV1>

                <LinearEquations />
            </section>

            <section>
                <ContentDividerV1 className='my-4'>
                    <h2 id="Functions" className="w-fit text-wrap xl:text-nowrap text-2xl">Функции</h2>
                </ContentDividerV1>

                <Functions />
            </section>
        </main>
    )
}









