import { Metadata } from "next"
import Link from "next/link"


export const metadata: Metadata = {
    title: "О проекте",
    description: "Краткая информация о проекте"
}


export default async function Page() {
    return (
        <main>
            <h1>О проекте</h1>
            <div className="flex flex-col gap-6">
                <h2>Используемые технологии</h2>
                <section>
                    <h3>Frontend</h3>
                    <ul>
                        <li><Link href={'https://nextjs.org/'}
                            rel="nofollow noindex"
                            target="_blank"
                        >
                            Next.js
                        </Link></li>
                    </ul>
                </section>

                <section>
                    <h3>Backend</h3>
                    <ul>
                        <li><Link href={'https://laravel.com/'}
                            rel="nofollow noindex"
                            target="_blank"
                        >
                            Laravel
                        </Link></li>
                    </ul>
                </section>

                <section>
                    <h3>Github: <Link href='https://github.com/SnakeOwl/wisswan' rel="nofollow noindex"
                            target="_blank">Ссылка</Link>
                    </h3>
                </section>
            </div>
        </main>
    )
}