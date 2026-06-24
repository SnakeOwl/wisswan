import { Metadata } from "next"
import Link from "next/link"


export const metadata: Metadata = {
    title: "О проекте",
    description: "Краткая информация о проекте",
    keywords: ["О проекте", "технический стек", "используемые технологии", "описание проекта"],
}


export default async function Page() {
    const links = [
        {
            hLabel: "Frontend",
            links: [{
                href: 'https://nextjs.org/',
                label: 'Next.js'
            }, {
                href: 'https://tailwindcss.com/',
                label: 'Tailwind'
            }]
        }, {
            hLabel: "Backend",
            links: [{
                href: 'https://laravel.com/',
                label: 'Laravel'
            }, {
                href: 'https://resend.com/',
                label: 'Resend'
            }, {
                href: 'https://www.mysql.com/',
                label: 'Mysql'
            }]
        }, {
            hLabel: "Development",
            links: [{
                href: 'https://github.com/SnakeOwl/wisswan',
                label: 'Github'
            }, {
                href: 'https://www.docker.com/',
                label: 'Docker'
            }]
        }
    ];


    return (
        <main className="container-v1">
            <p>Изначально сайт планировался как портал для технических специалистов.</p>

            <section className="flex flex-col gap-2">
                <h2 className="font-bold text-2xl">Используемые технологии</h2>
                {links.map((el, index) => (
                    <section key={index}>
                        <h3>{el.hLabel}</h3>
                        <ul>
                            {el.links.map((link, index) => (
                                <li key={index}>
                                    <Link href={link.href}
                                        rel="noindex"
                                        target="_blank"
                                        className="first-letter:text-sky-400 block w-fit link-hover"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </section>
                ))
                }
            </section>
        </main>
    )
}