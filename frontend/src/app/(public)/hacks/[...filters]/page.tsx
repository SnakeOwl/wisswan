import { Metadata } from "next";
import HacksBlock from "../_components/HacksBlock";


export const metadata: Metadata = {
    title: "Хаки по фильтрам",
    description: "Готовые хаки по фильтрам для дальнейшего использования. Готовые решения для мелких задач программистов.",
    keywords: ["Хаки", "Готовые решения", "утилиты"],
}

export default async function BlogPostPage({
    params
}: PageProps<'/hacks/[...filters]'>
) {
    const filters = (await params).filters;

    const sparams = new URLSearchParams();

    filters.forEach(filter => {
        sparams.append('domains[]', filter);
    });


    return (
        <main>
            <HacksBlock filters={sparams} />
        </main>
    )
}