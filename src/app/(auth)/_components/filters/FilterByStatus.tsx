"use client"

import Select, { SelectOption } from "@/app/_components/inputs/Select"
import { statuses } from "@/types/Status";
import { usePathname, useRouter, useSearchParams } from "next/navigation"



export default function FilterByStatus({
    className = ''
}: {
    className?: string
}) {
    const soptionPrefix = "filter_status"
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();

    const sparams = new URLSearchParams(searchParams);
    let usedFilter = '0'; // <== default value

    // чистить опции и записывать используемый чтобы было чистенько
    const selectOptions: SelectOption[] = statuses.map(el => ({
        title: el.title,
        value: el.value
    }));

    if (sparams.has(soptionPrefix)) {
        usedFilter = sparams.get(soptionPrefix)!;
    }



    return (
        <div className={className}>
            <label htmlFor="FilterByStatus"
                className="mb-1"
            >
                Фильтр по статусам
            </label>

            <Select
                id="FilterByStatus"
                options={selectOptions}
                onChange={(e) => {
                    sparams.set(soptionPrefix, e.target.value)
                    router.replace(pathname + '?' + sparams.toString());
                }}

                value={usedFilter}
            />
        </div>
    )
}