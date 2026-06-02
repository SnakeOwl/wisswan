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
    "math": "Математика",
    "geometry": "Геометрия",
    circle: "Круг и окружность",
    about: "О проекте",
}


export default function LayoutBreadcrumbs() {
    const pathname = usePathname();

    let pathnameSegments = pathname.split('/');
    pathnameSegments = pathnameSegments.filter(el => el != '');

    if (pathnameSegments.length == 0)
        return null;


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

        return href;
    }, '/')


    return (
        <div className='flex flex-row gap-4 w-full items-center my-4'>
            <div className="hidden xl:block border-b border-neutral-500 w-full"></div>
            <div className="flex flex-row gap-1 font-heading items-center text-2xl">
                {breadcrumbs.map((el, index) => (

                    <React.Fragment key={index}>
                        {(index > 0) &&
                            <div>/</div>
                        }

                        {index == breadcrumbs.length-1 ? (
                            <h1 className="font-bold text-nowrap">
                                {el.label}
                            </h1>
                        ) : (
                            <Link href={el.href}
                                className="hover:text-sky-500 font-bold text-nowrap"
                            >
                                {el.label}
                            </Link>
                        )
                        }

                    </React.Fragment>
                ))



                }
            </div>
            <div className="hidden xl:block border-b border-neutral-500 w-full"></div>
        </div>
    )

}