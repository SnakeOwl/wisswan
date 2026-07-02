import { Metadata } from "next"
import HelpForm from "./_components/HelpForm"
import { getDefaultOpenGraph } from "@/utils/SEO/getDefaultOpenGraph"

export const metadata: Metadata = {
    title: "Форма обратной связи",
    description: "Форма связи с администрацией сайта",
    keywords: ["форма связи с администрацией сайта", "форма обратной связи"],
    
    openGraph: getDefaultOpenGraph({
        description: "Форма обратной связи"
    }),
}


export default async function Page() {
    return (
        <main className="container-v1">
            <HelpForm />
        </main>
    )
}