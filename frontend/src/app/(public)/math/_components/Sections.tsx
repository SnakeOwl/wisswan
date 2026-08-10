"use client"

import clsx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation"


interface ISectionLinks {
    section: string
    links: {
        label: string
        href: string
    }[]
}


export default function Sections() {
    const pathname = usePathname();

    const links: ISectionLinks[] = [
        {
            section: "algebra",
            links: [{
                label: "Числа",
                href: "/math/algebra/numbers"
            }, {
                label: "Алгоритмы",
                href: "/math/algebra/algoritms"
            }, {
                label: "Дроби",
                href: "/math/algebra/fractions"
            }, {
                label: "Проценты",
                href: "/math/algebra/percents"
            }, {
                label: "Пропорции",
                href: "/math/algebra/proportions"
            }, {
                label: "Множества",
                href: "/math/algebra/sets"
            }, {
                label: "Координаты",
                href: "/math/algebra/coordinates"
            }, {
                label: "Степень числа",
                href: "/math/algebra/power"
            }, {
                label: "Многочлены",
                href: "/math/algebra/polynomias"
            }, {
                label: "Линейные уравнения",
                href: "/math/algebra/linear_equations"
            }, {
                label: "Функции",
                href: "/math/algebra/functions"
            }
            ]
        }
    ];

    const choosenSegment = links.find(el => pathname.includes(el.section));

    const segmentLinks: {
        label: string
        href: string
    }[] | null = choosenSegment != null ? choosenSegment.links : null;


    if (segmentLinks == null)
        return null; // нечего показывать


    return (
        <nav className="sticky top-0" aria-label="Содержание страницы">
            <div className="overflow-y-auto scrollbar-none hover:scrollbar-thin max-h-screen px-2 pb-4">
                <p className="font-heading top-0 pt-12 font-bold mb-2">Разделы:</p>

                <ul className="space-y-1 text-sm">
                    {segmentLinks.map(el => (
                        <li key={el.href}>
                            <Link 
                                href={el!.href}
                                className={clsx("link-hover", {
                                    "text-sky-700": pathname == el.href
                                })}
                            >
                                {el.label}
                            </Link>
                        </li>
                    ))
                    }
                </ul>
            </div>
        </nav>
    )
}
