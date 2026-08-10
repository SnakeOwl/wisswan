import { getDefaultOpenGraph } from "@/utils/SEO/getDefaultOpenGraph";
import { Metadata } from "next";
import LinearEquations from "../_components/LinearEquations";

export const metadata: Metadata = {
    title: "Линейные уравнения",
    description: "Алгебра, раздел о линейных уравнениях",
    keywords: ["математика", "алгебра", "линейные уравнения"],
    alternates: {
        canonical: "/math/algebra"
    },
    openGraph: getDefaultOpenGraph({
        description: "Алгебра, раздел о линейных уравнениях",
    }),
}

export default async function Page(){
    return (
        <main>
            <LinearEquations />
        </main>
    )
}