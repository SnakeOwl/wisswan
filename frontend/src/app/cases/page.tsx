import { getDefaultOpenGraph } from "@/utils/SEO/getDefaultOpenGraph";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { ScrollText, BoneFracture } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import ContentDividerV1 from "../_components/dividers/ContentDividerV1";


export const metadata: Metadata = {
    title: "Проекты",
    description: "Примеры выполненных работ: сайты компаний, промо-сайты, интернет-магазины, логотипы и фирменные стили",
    keywords: ['создание сайтов портфолио', "разработка сайтов портфолио", "примеры работ"],

    openGraph: getDefaultOpenGraph({
        description: "Проекты",
        images: [(process.env.NEXT_PUBLIC_SITE_URL + "images/storage/cases/burger_cucumber_preview.jpg")]
    }),
}



export default async function Page() {
    return (
        <main>
            <section>
                <ContentDividerV1 className="mb-4">
                    <h1 className="text-xl px-2 xl:px-0 xl:text-2xl xl:text-nowrap font-bold mx-auto w-fit">Проекты</h1>
                </ContentDividerV1>

                <Cases />
            </section>

        </main>
    )
}


type BadgeColor = "blue" | "green" | "purple"

interface ICaseLinkContent {
    href: string
    imgSrc: string
    imgAlt: string
    label: string
    description: string
    badges: {
        icon: React.ReactNode
        label: string
        color: BadgeColor
        hoverNode: React.ReactNode
        caseIsExample?: boolean
    }[],
}


export const Cases = () => {
    const examples: ICaseLinkContent[] = [{
        description: "Стильное и быстрое SPA-приложение, которое переворачивает представление о заказе уличной еды. Сервис создан для тех, кто ценит свое время и обожает сочные, кастомные бургеры с хрустящими фирменными огурчиками.",
        label: "BURGER CUCUMBER — Single Page Application Next.js",
        href: "/cases/burger-cucumber",
        imgAlt: "полный скрин примера single page application проекта (SPA)",
        imgSrc: "/images/storage/cases/burger_cucumber_preview.jpg",

        badges: [{
            color: "blue",
            icon: <ScrollText className="size-4" />,
            label: "SPA",
            hoverNode: <span><b>S</b>ingle <b>P</b>age <b>A</b>pplication — Одностраничное приложение, оно же landing page</span>,
        }, {
            color: "green",
            icon: <></>,
            label: "Next.js",
            hoverNode: <span>Сайт на базе фреймворка <Link href={"https://nextjs.org/"} className="hover-link text-sky-500" target="_blank" rel="noindex noreferrer">Next.js</Link></span>
        }, {
            color: "purple",
            icon: <BoneFracture className="size-4" />,
            label: "Пример проекта",
            caseIsExample: true,
            hoverNode: <span>Сайт является демонстрационным решением и не является коммерческим продуктом</span>
        }],
    }];


    return (
        <div className="grid grid-cols-1 container-v1 max-w-[1200px] mx-auto">
            {examples.map(el => (
                <div key={el.href} className="relative rounded-2xl border">
                    <GlowingEffect
                        spread={80}
                        glow={true}
                        disabled={false}
                        proximity={64}
                        inactiveZone={0.01}
                    />
                    <Link
                        className="group block p-4 xl:p-6 hover:ring-sky-100"
                        href={el.href}
                    >
                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-2 relative">
                            <div className="flex flex-col gap-4 justify-center order-2 xl:order-1">
                                <p className="font-heading group-hover:text-sky-700">{el.label}</p>

                                <p>{el.description}</p>

                                <div className="flex flex-row flex-wrap gap-3">
                                    {el.badges.map((badge, index) => (
                                        <HoverCard key={index}>
                                            <HoverCardTrigger delay={10} closeDelay={100} render={
                                                <div
                                                    className={clsx("px-2 py-1 flex items-center gap-1 text-sm rounded ring-2", {
                                                        "ring-blue-100 text-blue-700": badge.color == "blue",
                                                        "ring-green-100 text-green-700": badge.color == "green",
                                                        "ring-purple-100 text-purple-700": badge.color == "purple",
                                                    })}
                                                >
                                                    <span className={clsx({ "animate-none group-hover:animate-spin": badge.caseIsExample })}>
                                                        {badge.icon}
                                                    </span>

                                                    {badge.label}
                                                </div>
                                            } />
                                            <HoverCardContent className="flex w-64 flex-col gap-0.5">
                                                {badge.hoverNode}
                                            </HoverCardContent>
                                        </HoverCard>

                                    ))
                                    }
                                </div>
                            </div>

                            <figure className="flex items-center justify-center order-1 xl:order-2">
                                <Image
                                    alt={el.imgAlt}
                                    src={el.imgSrc}
                                    width={200} height={400}
                                    overrideSrc={el.imgSrc}
                                />
                            </figure>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    )
}