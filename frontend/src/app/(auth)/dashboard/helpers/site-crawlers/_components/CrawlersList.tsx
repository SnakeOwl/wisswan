"use client"

import { useEffect, useRef, useState } from "react"
import { Delete, Get } from "@/libs/Fetch";
import Pagination from "@/app/_components/Paginations/Pagination";
import { useRouter, useSearchParams } from "next/navigation";
import { SiteCrawler } from "@/types/SiteCrawler";
import Link from "next/link";
import { Popover } from "@/app/_components/Popover";
import { Info, X } from "lucide-react";
import { formatDate } from "@/utils/formatDate";
import ButtonStyled from "@/app/_components/buttons/ButtonStyled";


export default function CrawlersList({
    page,
}: {
    page: number,
}) {
    const searchParams = useSearchParams();
    const [hacks, setHacks] = useState<SiteCrawler[]>([]);
    const [totalPages, setTotalPages] = useState<number>(1);
    const perPageRef = useRef<number>(1);
    const router = useRouter();


    useEffect(() => {
        const sparams = new URLSearchParams(searchParams);

        // FIX: must to get Hacks in useEffect on client side. Otherwise it will cache on SSR.
        Get(`user/site-crawlers?${sparams.toString()}`).then((hacksPaginate) => {
            if (hacksPaginate === false)
                throw new Error("Запрос на краулеров оборавался");


            perPageRef.current = hacksPaginate.per_page;
            setTotalPages(hacksPaginate.last_page);
            setHacks(hacksPaginate.data); // user's Hacks
        });
    }, [page, searchParams]);


    const tryDelete = async (crawlerId: number) => {
        if (!confirm("Удалить?"))
            return false;


        Delete(`user/site-crawlers/${crawlerId}`)
            .then(response => {
                router.refresh();
            })
    }


    return (

        <div className="grid gap-4">
            <div className="grid gap-2">
                {hacks.map((crawler: SiteCrawler) => (
                    <div key={crawler.id}
                        className="flex flex-row gap-2 border-b border-neutral-200 py-2 px-1 hover:border-neutral-500"
                    >
                        <Link href={`/dashboard/helpers/site-crawlers/${crawler.id}`}
                            className="flex-1 flex gap-3"
                        >
                            {crawler.url}
                        </Link>

                        <Popover
                            label={<Info />}
                            TriggerClassName="rounded-md p-1"
                        >
                            <div className="flex flex-col gap-1 p-2">
                                <div>{`# ${crawler.id}`}</div>
                                <div>
                                    Создан:&nbsp;{formatDate(crawler.created_at)}
                                </div>
                                {crawler.updated_at &&
                                    <div>
                                        Обновлён:&nbsp;{formatDate(crawler.updated_at)}
                                    </div>
                                }
                            </div>
                        </Popover>

                        <ButtonStyled
                            className="px-1 rounded-sm"
                            theme="red-reversed"
                            onClick={() => tryDelete(crawler.id)}
                        >
                            <X className="" />
                        </ButtonStyled>
                    </div>
                ))
                }
            </div>


            {totalPages > 1 &&
                <Pagination totalPages={totalPages} />
            }
        </div>
    )
}