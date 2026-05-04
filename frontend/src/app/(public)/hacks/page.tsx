import { Metadata } from "next";
import { Suspense, use } from "react";
import HackBlockWrapper from "./_components/HackBlockWrapper";


export const metadata: Metadata = {
    title: "Хаки",
    description: "Готовые хаки для дальнейшего использования. Готовые решения для мелких задач программистов.",
    keywords: ["Хаки", "Готовые решения", "утилиты"],
}


export default async function Page(props: PageProps<'/hacks'>) {
    return (
        <main>
            <Suspense>
                <HackBlockWrapper {...props} />
            </Suspense>
        </main>
    )
}