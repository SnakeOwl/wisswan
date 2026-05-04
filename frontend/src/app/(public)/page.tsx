import { Metadata } from 'next';
import HacksBlock from './_components/HacksBlock';
import { Suspense } from 'react';
import { SkeletonTable } from '../_components/Skeletons/SkeletonTable';


export const metadata: Metadata = {
    description: `${process.env.NEXT_PUBLIC_APP_NAME} — платформа для облегчения рутины разработчиков. Готовые решения и мониторинг с уведомлениями удобными способами.`,
    keywords: [process.env.NEXT_PUBLIC_APP_NAME!, "виссван", "хаки", "сайт-краулеры", "hacks", "site crawlers"]
}


export default async function Page() {
    return (
        <main>
            <section>
                <Suspense fallback={ <SkeletonTable cols={2} rows={4} /> }>
                    <HacksBlock />
                </Suspense>
            </section>
        </main>
    );
}
