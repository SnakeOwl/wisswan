import { Get } from "@/libs/Fetch";
import { log } from "@/libs/Logging";
import { Plus } from "lucide-react";
import { Metadata } from "next"
import Link from "next/link";
import CrawlersList from "./_components/CrawlersList";


export const metadata: Metadata = {
    title: "Сайт-краулеры"
}


export default async function Page(props: PageProps<'/dashboard/helpers/site-crawlers'>) {
    const sparams = await props.searchParams;
    const page = sparams.page ? Number(sparams.page) : 1;

    const crawlersPaginationResponse = await Get('user/site-crawlers');

    if (crawlersPaginationResponse == undefined || crawlersPaginationResponse.total == undefined) {
        log('ERROR: totalCrawlers: ' + JSON.stringify(crawlersPaginationResponse));
        return null;
    }



    return (
        <main>
            <p className="mb-4">Краулеры запускаются по расписанию (раз в 20 миннут). Записывают статус ответа в свои логи.</p>

            <nav className="flex gap-4 mb-4">
                <Link
                    className="flex gap-1 w-fit py-2 px-3 rounded-lg 
                        border border-neutral-300"
                    href={'/dashboard/helpers/site-crawlers/create'}
                >
                    <Plus />
                    Создать
                </Link>
            </nav>


            <CrawlersList page={page} />
        </main>
    )
}