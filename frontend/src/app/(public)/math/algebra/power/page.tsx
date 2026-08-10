import { getDefaultOpenGraph } from "@/utils/SEO/getDefaultOpenGraph";
import { Metadata } from "next";
import Power from "../_components/Power";

export const metadata: Metadata = {
    title: "Степень числа",
    description: "Алгебра, раздел о степени чисел",
    keywords: ["математика", "алгебра", "Степень числа"],
    alternates: {
        canonical: "/math/algebra"
    },
    openGraph: getDefaultOpenGraph({
        description: "Алгебра, раздел о степени чисел",
    }),
}

export default async function Page(){
    return (
        <main>
            <Power />
        </main>
    )
}