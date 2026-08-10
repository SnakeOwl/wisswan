import { getDefaultOpenGraph } from "@/utils/SEO/getDefaultOpenGraph";
import { Metadata } from "next";
import Polynomias from "../_components/Polynomias";

export const metadata: Metadata = {
    title: "Многочлены",
    description: "Алгебра, раздел о многочленах",
    keywords: ["математика", "алгебра", "многочлены"],
    alternates: {
        canonical: "/math/algebra"
    },
    openGraph: getDefaultOpenGraph({
        description: "Алгебра, раздел о многочленах",
    }),
}

export default async function Page(){
    return (
        <main>
            <Polynomias />
        </main>
    )
}