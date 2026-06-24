import { Get } from "@/libs/Fetch";
import { Metadata } from "next"
import SiteCrawlerForm from "../_components/SiteCrawlerForm";
import { SiteCrawlerLog } from "@/types/SiteCrawler";
import Hr from "@/app/_components/Hr";
import { formatDate } from "@/utils/formatDate";
import { Popover } from "@/app/_components/Popover";
import { Info } from "lucide-react";

export const metadata: Metadata = {
    title: "Управление сайт-краулером"
}


export default async function Page(props: PageProps<'/dashboard/helpers/site-crawlers/[id]'>) {
    const crawlerId = (await props.params).id;

    const crawlerResponse = await Get(`user/site-crawlers/${crawlerId}`);

    if (crawlerResponse == 403)
        throw new Error("Нет доступа к данной записи");

    if (crawlerResponse == undefined)
        throw new Error(`Не смог получить краулер: #${crawlerId}`);


    const logs = crawlerResponse.logs || [];

    return (
        <main>
            <div className="w-[400px]">
                <SiteCrawlerForm
                    initialCrawler={crawlerResponse}
                />
            </div>

            {logs.length > 0 &&
                <section className="w-full flex flex-col gap-2 mt-4">
                    <Hr />
                    <h2>История обходов</h2>
                    {logs.map((log: SiteCrawlerLog) => (
                        <div key={log.id}
                            className="w-full flex gap-1 items-center py-1 px-2 rounded-lg
                                border border-neutral-300"
                        >
                            <div className="flex-1">
                            {formatDate(log.created_at, true) + ' : '}
                            {log.status == 200
                                ? <span className="text-emerald-600">{log.status}</span>
                                : <span>{log.status}</span>
                            }

                            </div>

                            <Popover
                                label={<Info />}
                                TriggerClassName="rounded-md p-1"
                                popoverClassname="w-[220px]"
                            >
                                <div className="flex flex-col gap-1 p-2">
                                    <div>{`# ${log.id}`}</div>
                                    <div>
                                        Создан:&nbsp;{formatDate(log.created_at, true)}
                                    </div>
                                    {log.updated_at &&
                                        <div>
                                            Обновлён:&nbsp;{formatDate(log.updated_at, true)}
                                        </div>
                                    }
                                </div>
                            </Popover>
                        </div>
                    ))
                    }
                </section>
            }
        </main>
    )
}