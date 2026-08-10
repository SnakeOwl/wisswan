import { getDefaultOpenGraph } from "@/utils/SEO/getDefaultOpenGraph";
import { Metadata } from "next";
import Coordinates from "../_components/Coordinates";

export const metadata: Metadata = {
    title: "Координаты",
    description: "Алгебра, раздел о координатах",
    keywords: ["математика", "алгебра", "координаты"],
    alternates: {
        canonical: "/math/algebra"
    },
    openGraph: getDefaultOpenGraph({
        description: "Алгебра, раздел о координатах",
    }),
}

export default async function Page() {
    return (
        <main>
            <Coordinates />
        </main>
    )
}