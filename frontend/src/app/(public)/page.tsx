import { Metadata } from 'next';
import HacksBlock from './_components/HacksBlock';


export const metadata: Metadata = {
    description: `${process.env.NEXT_PUBLIC_APP_NAME} — платформа для облегчения рутины разработчиков. Готовые решения и мониторинг с уведомлениями удобными способами.`,
    keywords: [process.env.NEXT_PUBLIC_APP_NAME!, "виссван", "хаки", "сайт-краулеры", "hacks", "site crawlers"]
}


export default async function Page() {
    return (
        <main className='pb-4'>
            <section>
                <HacksBlock />
            </section>
        </main>
    );
}
