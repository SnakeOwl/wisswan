import ContentDividerV1 from "@/app/_components/dividers/ContentDividerV1";
import { getDefaultOpenGraph } from "@/utils/SEO/getDefaultOpenGraph";
import { Metadata } from "next"
import Image from "next/image";
import Link from "next/link"


export const metadata: Metadata = {
    title: "О проекте",
    description: "Краткая информация о проекте",
    keywords: ["О проекте", "технический стек", "используемые технологии", "описание проекта"],

    openGraph: getDefaultOpenGraph({
        description: "О проекте"
    }),
}


export default async function Page() {
    return (
        <main className="container-v1">
            <p>Изначально сайт планировался как портал для технических специалистов. Но&nbsp;у&nbsp;сил свыше было своё мнение.</p>

            <LogosBlock />

            <UsedTecnologies />
        </main>
    )
}

const UsedTecnologies = () => {
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
        <section className="flex flex-col gap-2">
            <ContentDividerV1 className="my-4">
                <h2 className="font-bold text-2xl text-nowrap">Используемые технологии</h2>
            </ContentDividerV1>

            {links.map((el, index) => (
                <section key={index}>
                    <h3>{el.hLabel}</h3>
                    <ul>
                        {el.links.map((link, index) => (
                            <li key={index}>
                                <Link href={link.href}
                                    rel="noindex noreferrer"
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
    )
}

const LogosBlock = () => (
    <section>
        <ContentDividerV1 className="my-4">
            <h2 className="font-bold text-2xl text-nowrap">Логотипы</h2>
        </ContentDividerV1>

        <div className="flex flex-wrap justify-around">
            <div>
                <Image
                    src={"/images/logo.svg"}
                    width={400} height={400}
                    alt="Логотип сайта в светлом стиле"
                    unoptimized
                />
                <p className="text-sm text-center">Логотип сайта в светлом стиле</p>
            </div>

            <div>
                <Image
                    src={"/images/logo_dark.svg"}
                    width={400} height={400}
                    alt="Логотип сайта в тёмном стиле"
                    unoptimized
                />
                <p className="text-sm text-center">Логотип сайта в тёмном стиле</p>
            </div>
        </div>
    </section>
)