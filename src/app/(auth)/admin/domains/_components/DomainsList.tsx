"use client"

import Pagination from "@/app/_components/Paginations/Pagination";
import { Popover } from "@/app/_components/Popover";
import { Get } from "@/libs/Fetch";
import { Domain } from "@/types/Domain";
import { Info, Settings } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react";
import DomainForm from "./DomainForm";
import { formatDate } from "@/utils/formatDate";

export default function DomainsList() {
    const searchParams = useSearchParams();
    const [domains, setDomains] = useState<Domain[]>([]);
    const [totalPages, setTotalPages] = useState<number>(1);
    const router = useRouter();

    useEffect(() => {
        const sparams = new URLSearchParams(searchParams);

        Get(`admin/domains?${sparams.toString()}`).then(domainsPaginationResponse => {
            if (domainsPaginationResponse?.data == undefined)
                throw new Error("Не смог получить домены");


            setDomains(domainsPaginationResponse.data);
            setTotalPages(domainsPaginationResponse.last_page);
        })

    }, [searchParams]);


    return (
        <div>
            <div className="flex flex-col w-full gap-3">
                {domains.map((domain, index) => (
                    <div key={domain.id}
                        className="flex flex-row gap-2 border-b dark:border-neutral-800 border-neutral-200 py-2 px-1 hover:border-neutral-500"
                    >
                        <div className="flex-1 flex gap-3">
                            <span className="w-12 text-right">
                                {domain.id}
                            </span>

                            <span>
                                {domain.name} {domain.alias ? ` : ${domain.alias}` : null}
                                {domain.published ? <span className="text-emerald-500"> Опубликован</span> : null}
                            </span>
                        </div>


                        <Popover
                            label={<Settings />}
                            TriggerClassName="rounded-md p-1"
                        >
                            <DomainForm
                                initialDomain={domain}
                                onDeleted={() => router.refresh()}
                                onChanged={(newDomain) => {
                                    domains[index] = newDomain;
                                    setDomains([...domains]);
                                }}
                            />
                        </Popover>

                        <Popover
                            label={<Info />}
                            TriggerClassName="rounded-md p-1"
                        >
                            <div className="flex flex-col gap-1 p-2">
                                <div>
                                    Создан:&nbsp;{formatDate(domain.created_at)}
                                </div>
                                {domain.updated_at &&
                                    <div>
                                        Обновлён:&nbsp;{formatDate(domain.updated_at)}
                                    </div>
                                }
                            </div>
                        </Popover>
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