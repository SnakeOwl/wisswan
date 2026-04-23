import { Metadata } from "next";
import HacksBlock from "./_components/HacksBlock";


export const metadata: Metadata = {
    title: "Хаки",
    description: "Готовые хаки для дальнейшего использования. Готовые решения для мелких задач программистов.",
    keywords: ["Хаки", "Готовые решения", "утилиты"],
}


export default async function Page({
    searchParams,
}: PageProps<'/hacks'>) {
    const sparams = await searchParams;
    const soptions = new URLSearchParams(sparams as { [key: string]: string });


    return (
        <main>
            <HacksBlock filters={soptions} />
        </main>
    )
}