import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { Metadata } from 'next';
import { Suspense } from 'react';
import { CardsWithGlowingEffectBox } from './_components/CardsWithGlowingEffectBox';
import { ReviewsBlock } from './_components/ReviewsBlock';
import DoomBlock from './_components/DoomBlock/DoomBlock';
import TimelineWorkSteps from "./_components/TimelineWorkSteps";
import { getDefaultOpenGraph } from "@/utils/SEO/getDefaultOpenGraph";
import SchemaOrg from "./_components/SchemaOrg";

export const metadata: Metadata = {
    title: "Создание сайтов",
    description: `${process.env.NEXT_PUBLIC_APP_NAME} — Создание сайтов на Wordpress, Laravel, React, Nextjs, 1С-Битрикс. Купить сайт под ключ.`,
    keywords: [process.env.NEXT_PUBLIC_APP_NAME!, "виссван", "создание сайтов", "разработка сайтов", "wordpress", "1с-битрикс", "laravel", "react", "nextjs"],

    openGraph: getDefaultOpenGraph({
        description: "Создание сайтов на Wordpress, Laravel, React, Nextjs, 1С-Битрикс"
    }),
}


export default async function Page() {
    return (
        <main className='flex flex-col gap-12 pt-4'>
            <section data-nosnippet>
                <RainWithTextBlock />
            </section>

            <CardsWithGlowingEffectBox />

            <WorkSteps />

            <section data-nosnippet className='container-v1'>
                <Suspense>
                    <ReviewsBlock />
                </Suspense>
            </section>

            <section data-nosnippet aria-hidden="true" className='container-v1 hidden lg:block'>
                <DoomBlock />
            </section>

            <SchemaOrg />
        </main>
    );
}


const RainWithTextBlock = () => (
    <BackgroundBeamsWithCollision>
        <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black font-sans tracking-tight">
            Профессиональная сборка{" "}<br className="hidden lg:block" />
            <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
                <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                    <span className="">стек под задачи вашего бизнеса</span>
                </div>
                <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                    <span className="">стек под задачи вашего бизнеса</span>
                </div>
            </div>
        </h2>
    </BackgroundBeamsWithCollision>
);


const WorkSteps = () => {
    return (
        <section id="WorkSteps" className='container-v1'>
            <TimelineWorkSteps />
        </section>
    );
}