import { getDefaultOpenGraph } from "@/utils/SEO/getDefaultOpenGraph"
import { Metadata } from "next"
import TriangleCalculator from "../../_components/TriangleCalculator"


export const metadata: Metadata = {
    title: "Калькулятор треугольников",
    description: "Калькулятор треугольников",
    keywords: ['калькулятор треугольников'],
    openGraph: getDefaultOpenGraph({
        description: "Калькулятор треугольников",
        images: [(process.env.NEXT_PUBLIC_SITE_URL + 'images/storage/geometry/Triangle-3.svg')]
    }),
}


export default async function Page() {
    return (
        <main>
            <TriangleCalculator />
        </main>
    )
}