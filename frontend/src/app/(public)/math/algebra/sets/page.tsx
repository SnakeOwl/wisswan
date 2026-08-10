import { getDefaultOpenGraph } from "@/utils/SEO/getDefaultOpenGraph";
import { Metadata } from "next";
import Sets from "../../_components/Sets";

export const metadata: Metadata = {
    title: "Множества",
    description: "Алгебра, раздел о множествах",
    keywords: ["математика", "алгебра", "множества"],
    alternates: {
        canonical: "/math/algebra"
    },
    openGraph: getDefaultOpenGraph({
        description: "Алгебра, раздел о множествах",
    }),
}

export default async function Page(){
    return (
        <main>
            <Sets />
        </main>
    )
}