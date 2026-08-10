import { getDefaultOpenGraph } from "@/utils/SEO/getDefaultOpenGraph";
import { Metadata } from "next";
import Algoritsm from "../_components/Algoritms";


export const metadata: Metadata = {
    title: "Алгоритмы",
    description: "Алгебра, раздел об алгоритмах",
    keywords: ["математика", "алгебра", "алгоритмы"],
    alternates: {
        canonical: "/math/algebra"
    },
    openGraph: getDefaultOpenGraph({
        description: "Алгебра, раздел об алгоритмах",
    }),
}

export default async function Page(){
    return (
        <main>
            <Algoritsm />
        </main>
    )
}