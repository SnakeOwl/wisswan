import { Metadata } from 'next';
import { Suspense } from 'react';
import ParalaxImagesBox from './_components/ParalaxImagesBox';
import { RainWithTextBlock } from './_components/RainWithTextBlock';
import { CardsWithGlowingEffectBox } from './_components/CardsWithGlowingEffectBox';
import { TripleCardBox } from './_components/TripleCardBox';
import { DoubleTextWithLargeImageBox } from './_components/DoubleTextWithLargeImageBox';
import { ReviewsBlock } from './_components/ReviewsBlock';
import { WorldMapBlock } from './_components/WorldMapBlock';


export const metadata: Metadata = {
    description: `${process.env.NEXT_PUBLIC_APP_NAME} — платформа для облегчения рутины разработчиков. Готовые решения и мониторинг с уведомлениями удобными способами.`,
    keywords: [process.env.NEXT_PUBLIC_APP_NAME!, "виссван", "хаки", "сайт-краулеры", "hacks", "site crawlers"]
}


export default async function Page() {
    return (
        <main className='flex flex-col gap-12 py-12'>
            <section className='container-v1'>
                <ParalaxImagesBox />
            </section>

            <section>
                <RainWithTextBlock />
            </section>

            <section className='container-v1'>
                <CardsWithGlowingEffectBox />
            </section>

            <section className='container-v1'>
                <TripleCardBox />
            </section>

            <section>
                <DoubleTextWithLargeImageBox />
            </section>

            <section className='container-v1'>
                <Suspense>
                    <ReviewsBlock />
                </Suspense>
            </section>

            <section className='container-v1'>
                <WorldMapBlock />
            </section>
        </main>
    );
}
