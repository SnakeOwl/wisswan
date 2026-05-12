import { ParallaxHeroImages } from "@/components/ui/parallax-hero-images";

export default async function ParalaxImagesBox() {
    return (
        <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-neutral-50 dark:bg-neutral-950">
            <ParallaxHeroImages
                variant="edge-focus"
                images={images}
            />
            <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-4 px-4 text-center">
                <h1 className="text-4xl font-bold tracking-tight text-neutral-800 drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] md:text-6xl dark:text-neutral-100 dark:drop-shadow-[0_0_20px_rgba(0,0,0,0.8)]">
                    Готовые стратегии для вашего бизнеса
                </h1>
                <p className="max-w-md text-neutral-600 drop-shadow-[0_0_10px_rgba(255,255,255,0.6)] dark:text-neutral-400 dark:drop-shadow-[0_0_10px_rgba(0,0,0,0.6)]">
                    Не копируем конкурентов, а создаем уникальные решения под задачи вашей индустрии — от e-com до сложных сервисов.
                </p>
            </div>
        </div>
    );
}

const images = [
    "/images/extranet/cherrydeck-rMILC1PIwM0-unsplash.jpg",
    "/images/extranet/growtika-Am6pBe2FpJw-unsplash.jpg",
    "/images/extranet/tangerine-newt-FAUsTQ5Qj7M-unsplash.jpg",
    "/images/extranet/shutter-speed-BQ9usyzHx_w-unsplash.jpg",
    "/images/extranet/jason-briscoe-amLfrL8LGls-unsplash.jpg",
    "/images/extranet/webaliser-_TPTXZd9mOo-unsplash.jpg",
];
