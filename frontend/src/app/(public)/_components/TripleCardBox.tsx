"use client";

import { WobbleCard } from "@/components/ui/wobble-card";
import Image from "next/image";

export function TripleCardBox() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
            <WobbleCard
                containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
                className=""
            >
                <div className="max-w-xs">
                    <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                        Взрывной рост узнаваемости
                    </h2>
                    <p className="mt-4 text-left  text-base/6 text-neutral-200">
                        Мы&nbsp;не&nbsp;просто рисуем макеты, а&nbsp;создаем визуальный код, который заставляет ваш бренд выделяться среди тысяч конкурентов. Ваш дизайн станет вашим главным сейлз-менеджером
                    </p>
                </div>
                <Image
                    src="/images/extranet/deng-xiang--WXQm_NTK0U-unsplash.jpg"
                    width={500}
                    height={500}
                    alt="linear demo image"
                    className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
                />
            </WobbleCard>
            <WobbleCard containerClassName="col-span-1 min-h-[300px]">
                <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                    24/7 Поддержка
                </h2>
                <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                    Всегда на&nbsp;связи, чтобы ваш бизнес работал без пауз
                </p>
            </WobbleCard>
            <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
                <div className="max-w-sm">
                    <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                        Экосистема, которая работает на вас
                    </h2>
                    <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                        Объединяем маркетинг, дизайн и код в единый мощный инструмент. Получите полный контроль над показателями и автоматизируйте продажи, пока вы занимаетесь стратегией
                    </p>
                </div>
                
                <Image
                    src="/images/extranet/egor-komarov-YIdn6NHaGlo-unsplash.jpg"
                    width={500}
                    height={500}
                    alt="linear demo image"
                    className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
                    unoptimized
                />
            </WobbleCard>
        </div>
    );
}
