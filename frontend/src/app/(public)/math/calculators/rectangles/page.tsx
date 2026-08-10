import { getDefaultOpenGraph } from "@/utils/SEO/getDefaultOpenGraph"
import { Metadata } from "next"
import RectangleCalculator from "../../_components/RectangleCalculator"



export const metadata: Metadata = {
    title: "Калькулятор прямоугольников",
    description: "Калькулятор прямоугольников",
    keywords: ['Калькулятор прямоугольников'],
    alternates: {
        canonical: "/math/geometry/rectangles"
    },
    openGraph: getDefaultOpenGraph({
        description: "Калькулятор прямоугольников",
        images: [
            (process.env.NEXT_PUBLIC_SITE_URL + "/images/storage/geometry/square.svg"),
            (process.env.NEXT_PUBLIC_SITE_URL + "/images/storage/geometry/rectangle.svg")
        ]
    }),
}


export default async function Page() {
    return (
        <main>
            <RectangleCalculator />
        </main>
    )
}