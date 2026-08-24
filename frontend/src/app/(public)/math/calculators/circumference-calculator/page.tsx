import { getDefaultOpenGraph } from "@/utils/SEO/getDefaultOpenGraph"
import { Metadata } from "next"
import CircleCalculator from "../../_components/CircleCalculator"


export const metadata: Metadata = {
    title: "Калькулятор окружности",
    description: "Калькулятор окружности, вычисление радиуса, диаметра, длины, площади.",
    keywords: ['калькулятор окружности', "площадь окружности", "радиус окружности", "диаметр окружности", "длина окружности"],
    openGraph: getDefaultOpenGraph({
        description: "Калькулятор окружности",
        images: [(process.env.NEXT_PUBLIC_SITE_URL + 'images/storage/geometry/calculator-circle.svg')]
    }),
}


export default async function Page() {
    return (
        <main>
            <CircleCalculator />
        </main>
    )
}