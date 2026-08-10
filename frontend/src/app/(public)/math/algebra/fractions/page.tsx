import { getDefaultOpenGraph } from "@/utils/SEO/getDefaultOpenGraph";
import { Metadata } from "next";
import Fractions from "../_components/Fractions";

export const metadata: Metadata = {
    title: "Дроби",
    description: "Алгебра, раздел о дробях",
    keywords: ["математика", "алгебра", "дроби"],
    alternates: {
        canonical: "/math/algebra"
    },
    openGraph: getDefaultOpenGraph({
        description: "Алгебра, раздел о дробях",
    }),
}

export default async function Page(){
    return (
        <main>
            <Fractions />
        </main>
    )
}