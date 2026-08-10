import { getDefaultOpenGraph } from "@/utils/SEO/getDefaultOpenGraph";
import { Metadata } from "next";
import Functions from "../_components/Functions";

export const metadata: Metadata = {
    title: "Функции",
    description: "Алгебра, раздел о функциях",
    keywords: ["математика", "алгебра", "функции"],
    alternates: {
        canonical: "/math/algebra"
    },
    openGraph: getDefaultOpenGraph({
        description: "Алгебра, раздел о функциях",
    }),
}

export default async function Page(){
    return (
        <main>
            <Functions />
        </main>
    )
}