import { Metadata } from "next"
import Link from "next/link"


export const metadata: Metadata = {
    title: "О проекте",
    description: "Краткая информация о проекте",
    keywords: ["О проекте", "технический стек", "используемые технологии", "описание проекта"],
}

const PageHeader = () => (
    <div className='flex flex-row gap-4 w-full items-center my-4'>
        <div className="hidden xl:block border-b border-neutral-500 w-full"></div>
        <h1 className='text-4xl font-bold min-w-fit mx-auto'>О проекте</h1>
        <div className="hidden xl:block border-b border-neutral-500 w-full"></div>
    </div>
)

export default async function Page() {
    return (
        <main>
            <PageHeader />
            <p>Изначально сайт планировался как портал для технических специалистов.</p>

            <section className="flex flex-col gap-2">
                <h2 className="font-bold text-2xl">Используемые технологии</h2>
                <section>
                    <h3>Frontend</h3>
                    <ul>
                        <li>
                            <Link href='https://nextjs.org/'
                                rel="nofollow noindex"
                                target="_blank"
                                className="first-letter:text-sky-400 block"
                            >
                                Next.js
                            </Link>
                        </li>
                        <li>
                            <Link href='https://nextjs.org/'
                                rel="nofollow noindex"
                                target="_blank"
                                className="first-letter:text-sky-400 block"
                            >
                                Editor.js
                            </Link>
                        </li>
                        <li>
                            <Link href='https://tailwindcss.com/'
                                rel="nofollow noindex"
                                target="_blank"
                                className="first-letter:text-sky-400 block"
                            >
                                Tailwind
                            </Link>
                        </li>
                    </ul>
                </section>

                <section>
                    <h3>Backend</h3>
                    <ul>
                        <li>
                            <Link href='https://laravel.com/'
                                rel="nofollow noindex"
                                target="_blank"
                                className="first-letter:text-sky-400 block"
                            >
                                Laravel
                            </Link>
                        </li>
                        <li>
                            <Link href='https://resend.com/'
                                rel="nofollow noindex"
                                target="_blank"
                                className="first-letter:text-sky-400 block"
                            >
                                Resend
                            </Link>
                        </li>
                        <li>
                            <Link href='https://www.mysql.com/'
                                rel="nofollow noindex"
                                target="_blank"
                                className="first-letter:text-sky-400 block"
                            >
                                Mysql
                            </Link>
                        </li>
                    </ul>
                </section>

                <section>
                    <h3>Development</h3>
                    <ul>
                        <li>
                            <Link href='https://github.com/SnakeOwl/wisswan'
                                rel="nofollow noindex"
                                target="_blank"
                                className="first-letter:text-sky-400 block"
                            >
                                Github
                            </Link>
                        </li>
                        <li>
                            <Link href='https://www.docker.com/'
                                rel="nofollow noindex"
                                target="_blank"
                                className="first-letter:text-sky-400 block"
                            >
                                Docker
                            </Link>
                        </li>
                    </ul>
                </section>
            </section>
        </main>
    )
}