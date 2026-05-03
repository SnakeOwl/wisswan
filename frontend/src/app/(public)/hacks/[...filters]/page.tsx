import { Metadata } from "next";
import { Suspense } from "react";
import HacksBlockWrapper from "./_components/HacksBlockWrapper";


export const metadata: Metadata = {
    title: "Хаки по фильтрам",
    description: "Готовые хаки по фильтрам для дальнейшего использования. Готовые решения для мелких задач программистов.",
    keywords: ["Хаки", "Готовые решения", "утилиты"],
}

export default async function BlogPostPage(props: PageProps<'/hacks/[...filters]'>) {
    return (
        <main>
            <Suspense>
                <HacksBlockWrapper params={props.params} searchParams={props.searchParams} />
            </Suspense>
        </main>
    )
}