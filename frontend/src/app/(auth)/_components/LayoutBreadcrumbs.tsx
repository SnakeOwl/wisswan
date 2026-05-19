"use client"

import Link from "next/link";
import { usePathname } from "next/navigation"
import React from "react";


const translatedSegments: Record<string, string> = {
    "dashboard": "Панель",
    "hacks": "Хаки",
    "telegram": "Telegram",
    "personal": "Личные данные",
    "helpers": "Помощники",
    "site-crawlers": "Краулеры",

}


export default function LayoutBreadcrumbs() {
    const pathname = usePathname();

    const pathnameSegments = pathname.split('/');
    pathnameSegments.shift(); // первый элемент всегда пустой

    const breadcrumbs: { label: string, href: string }[] = [
        {
            label: process.env.NEXT_PUBLIC_APP_NAME!,
            href: "/"
        }
    ];


    pathnameSegments.reduce((acum: string, segment) => {
        const href = acum + segment + '/';

        breadcrumbs.push({
            label: translatedSegments[segment] != undefined ? translatedSegments[segment] : segment,
            href: href
        });
        console.log(href);
        return href;
    }, '/')


    return (
        <div className="flex flex-row gap-1 font-heading">
            {breadcrumbs.map((el, index) => {
                return (
                    <React.Fragment key={index}>
                        {(index > 0) &&
                            <div>/</div>
                        }

                        <Link href={el.href}
                            className="hover:text-sky-500 text-nowrap"
                        >
                            {el.label}
                        </Link>
                    </React.Fragment>
                )
            })

            }
        </div>
    )

}