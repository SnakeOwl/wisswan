import { getDefaultOpenGraph } from "@/utils/SEO/getDefaultOpenGraph";
import { Metadata } from "next";
import Proportions from "../_components/Proportions";

export const metadata: Metadata = {
    title: "Пропорции",
    description: "Алгебра, раздел о пропорциях",
    keywords: ["математика", "алгебра", "пропорции"],
    alternates: {
        canonical: "/math/algebra"
    },
    openGraph: getDefaultOpenGraph({
        description: "Алгебра, раздел о пропорциях",
    }),
}

export default async function Page(){
    return (
        <main>
            <Proportions />
        </main>
    )
}