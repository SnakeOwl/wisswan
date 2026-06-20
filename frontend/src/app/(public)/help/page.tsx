import { Metadata } from "next"
import HelpForm from "./_components/HelpForm"

export const metadata: Metadata = {
    title: "Форма обратной связи",
    description: "Форма связи с администрацией сайта"
}


export default async function Page() {
    return (
        <main>
            <HelpForm />
        </main>
    )
}