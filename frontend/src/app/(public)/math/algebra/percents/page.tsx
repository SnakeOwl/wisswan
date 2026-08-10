import { getDefaultOpenGraph } from "@/utils/SEO/getDefaultOpenGraph";
import { Metadata } from "next";
import Percent from "../_components/Percent";

export const metadata: Metadata = {
    title: "Проценты",
    description: "Алгебра, раздел о процентах",
    keywords: ["математика", "алгебра", "проценты"],
    alternates: {
        canonical: "/math/algebra"
    },
    openGraph: getDefaultOpenGraph({
        description: "Алгебра, раздел о процентах",
    }),
}

export default async function Page(){
    return (
        <main>
            <Percent />
        </main>
    )
}