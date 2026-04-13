import { Get } from "@/libs/Fetch"
import { log } from "@/libs/Logging";
import { Bug } from "lucide-react";
import Link from "next/link";

export default async function SiteCrawlersLink({
    classname = ''
}: {
    classname?: string
}) {
    const crawlersPaginationResponse = await Get('user/site-crawlers');

    if (crawlersPaginationResponse == undefined || crawlersPaginationResponse.total == undefined) {
        log('ERROR: totalCrawlers: ' + JSON.stringify(crawlersPaginationResponse));
        return null;
    }

    const totalCrawlers = crawlersPaginationResponse.total;


    return (
        <Link
            href={`/dashboard/helpers/site-crawlers`}
            className={'block relative h-full ' + classname}
        >
            <Bug className="absolute top-4 right-4" />

            <div className="flex flex-col justify-between h-full">
                <h4>Сайт-краулеры</h4>
                <div>
                    {totalCrawlers > 0 ? `Сейчас: ${totalCrawlers}` : 'Не используются'}
                </div>
            </div>
        </Link>
    )
}