"use client"

import Select, { SelectOption } from "@/app/_components/inputs/Select"
import { usePathname, useRouter, useSearchParams } from "next/navigation"


const options: SelectOption[] = [
    {
        title: "Выводить всё",
        value: "filter_published_none"
    },
    {
        title: "Выводить опубликованные",
        value: "filter_published_only"
    },
    {
        title: "Выводить не опубликованные",
        value: "filter_published_revers"
    }
]


export default function OnlyPublished({
    className = ''
}: {
    className?: string
}) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();

    const sparams = new URLSearchParams(searchParams);
    let usedOrder = 'order_popular'; // <== default value

    // чистить опции и записывать используемый чтобы было чистенько
    options.forEach(el => {
        if (sparams.has(el.value as string)) {
            usedOrder = el.value as string;
            sparams.delete(el.value as string);
        }
    });


    return (
        <div className={className}>
            <label htmlFor="OrderByPopularOrNew"
                className="mb-1"
            >
                Вывод опубликованных
            </label>

            <Select
                id="OrderByPopularOrNew"
                options={options}
                onChange={(e) => {
                    sparams.append(e.target.value, '1')
                    router.replace(pathname + '?' + sparams.toString());
                }}

                value={usedOrder}
            />
        </div>
    )
}