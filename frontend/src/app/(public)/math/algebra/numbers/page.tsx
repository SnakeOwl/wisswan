import { getDefaultOpenGraph } from "@/utils/SEO/getDefaultOpenGraph";
import { Metadata } from "next";
import Numbers from "../_components/Numbers";

export const metadata: Metadata = {
    title: "Числа",
    description: "Алгебра, раздел о числах",
    keywords: ["математика", "алгебра", "числа"],
    alternates: {
        canonical: "/math/algebra"
    },
    openGraph: getDefaultOpenGraph({
        description: "Алгебра, раздел о числах",
    }),
}

export default async function Page(){
    return (
        <main>
            <Numbers />
        </main>
    )
}