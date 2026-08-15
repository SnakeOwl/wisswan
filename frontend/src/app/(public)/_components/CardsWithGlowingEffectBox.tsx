"use client";
import { BriefcaseBusiness, CirclePlus, Contact, Handshake, Plus, Presentation, ReplaceAll, ShoppingCart, SquarePlus, Star, Workflow } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import ContentDividerV1 from "@/app/_components/dividers/ContentDividerV1";
import { EvervaultCard, Icon } from "@/components/ui/evervault-card";
import Image from "next/image";
import ButtonStyled from "@/app/_components/buttons/ButtonStyled";
import { useRouter } from "next/navigation";

export function CardsWithGlowingEffectBox() {

    const cards = [
        {
            imageSrc: '/images/storage/dashicons-wordpress-alt.svg',
            imageAlt: 'Логотип WordPress',
            title: 'Wordpress',
            priceFrom: 219,
            pluses: [
                "Решение проверенное временем",
                "Возможность глубокой модерации с помощью панели управления",
                "Множество плагинов и бесплатных решений",
                "Бесплатен",
            ],
            sites: [
                {
                    icon: <Presentation className="text-sky-700 min-h-6 h-6 min-w-6 w-6" />,
                    label: "Landing page (одностраничник, SPA)"
                }, {
                    icon: <Contact className="text-teal-700 min-h-6 h-6 min-w-6 w-6" />,
                    label: "Сайт-визитка (1-5 страниц)"
                }, {
                    icon: <BriefcaseBusiness className="text-green-700 min-h-6 h-6 min-w-6 w-6" />,
                    label: "Корпоративный сайт"
                }, {
                    icon: <ShoppingCart className="text-amber-700 min-h-6 h-6 min-w-6 w-6" />,
                    label: "Интернет-магазин",
                }
            ],
            plusesListIcon: <CirclePlus className="text-green-700 min-h-5 h-5 min-w-5 w-5" />,
            detailsHref: '/#WorkSteps',

        }, {
            imageSrc: '/images/storage/1c_bitrix_logo.svg',
            imageAlt: 'Логотип 1С-Битрикс',
            title: '1С-Битрикс',
            priceFrom: 449,
            pluses: [
                "Решение проверенное временем",
                "Возможность глубокой модерации с помощью панели управления",
                "Много готовых решений",
                "Цена лицензии зависит от необходимого функционала",
                "CMS от Российской компании",
            ],
            sites: [
                {
                    icon: <Presentation className="text-sky-700 min-h-6 h-6 min-w-6 w-6" />,
                    label: "Landing page (одностраничник, SPA)"
                }, {
                    icon: <Contact className="text-teal-700 min-h-6 h-6 min-w-6 w-6" />,
                    label: "Сайт-визитка (1-5 страниц)"
                }, {
                    icon: <BriefcaseBusiness className="text-green-700 min-h-6 h-6 min-w-6 w-6" />,
                    label: "Корпоративный сайт"
                }, {
                    icon: <ShoppingCart className="text-amber-700 min-h-6 h-6 min-w-6 w-6" />,
                    label: "Интернет-магазин",
                }
            ],
            plusesListIcon: <Plus className="text-blue-700 min-h-4 h-4 min-w-4 w-4" />,
            detailsHref: '/#WorkSteps',
        }, {
            imageSrc: '/images/storage/Laravel.svg',
            imageAlt: 'Логотип Laravel',
            title: 'Laravel',
            priceFrom: 1533,
            pluses: [
                "Решение проверенное временем",
                "Панель управления выбирается индивидуально",
                "Множество готовых решений, как платных, так и бесплатных",
                "Бесплатен",
                "Неограниченный потенциал для развития",
            ],
            sites: [
                {
                    icon: <Presentation className="text-sky-700 min-h-6 h-6 min-w-6 w-6" />,
                    label: "Landing page (одностраничник, SPA)"
                }, {
                    icon: <BriefcaseBusiness className="text-green-700 min-h-6 h-6 min-w-6 w-6" />,
                    label: "Корпоративный сайт"
                }, {
                    icon: <ShoppingCart className="text-amber-700 min-h-6 h-6 min-w-6 w-6" />,
                    label: "Интернет-магазин",
                }, {
                    icon: <Handshake className="text-red-700 min-h-6 h-6 min-w-6 w-6" />,
                    label: "SaaS-платформы",
                }, {
                    icon: <Workflow className="text-fuchsia-700 min-h-6 h-6 min-w-6 w-6" />,
                    label: "Микросервисы",
                },
            ],
            plusesListIcon: <SquarePlus className="text-orange-700 min-h-5 h-5 min-w-5 w-5" />,
            detailsHref: '/#WorkSteps',
        }
    ];


    return (
        <section>
            <ContentDividerV1 className="mb-4">
                <h1 className="text-xl px-2 xl:px-0 xl:text-2xl xl:text-nowrap font-bold mx-auto w-fit">Создание&nbsp;и&nbsp;поддержка сайтов</h1>
            </ContentDividerV1>

            <ul className="px-2 xl:px-16 px-2 xl:px-16 grid xl:grid-cols-4 gap-4 lg:gap-4">
                {cards.map((el, index) => (
                    <GridItem key={index}
                        icon={
                            <Image
                                src={el.imageSrc}
                                alt={el.imageAlt}
                                width={20} height={20}
                                unoptimized
                            />
                        }
                        title={el.title}
                        pluses={el.pluses}
                        sites={el.sites}
                        plusesListIcon={el.plusesListIcon}
                        detailsHref={el.detailsHref}
                        price={el.priceFrom}
                    />
                ))
                }
                <div className="px-1">
                    <NextjsEvervaultCard price={1533} />
                </div>
            </ul>
        </section>

    );
}


const NextjsEvervaultCard = ({
    price
}: {
    price: number
}) => {
    const router = useRouter();

    return (
        <div className="w-full border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start mx-auto p-6 relative ">
            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

            <EvervaultCard text="Next" />

            <h3 className="dark:text-white text-black mt-4 text-sm text-wrap">
                Разработка сайтов на React технологии
            </h3>


            <ul className="space-y-1">
                <li className="flex flex-row gap-2 items-center">
                    <Star className="text-yellow-400 min-h-6 h-6 min-w-6 w-6" />
                    Одна из трёх лучших технологий современности
                </li>

                <li className="flex flex-row gap-2 items-center">
                    <ReplaceAll className="text-rose-700 min-h-6 h-6 min-w-6 w-6" />
                    Высокопроизводительное приложение любой сложности
                </li>
            </ul>


            <div className="w-full flex flex-row justify-between items-center mt-4">
                <div className="flex flex-row items-center gap-1">
                    <span className="text-lg font-heading">от {price}</span>

                    <Image
                        src={"/images/byn_symbol.svg"}
                        alt="Графический знак белорусского рубля"
                        width={14} height={14}
                        unoptimized
                    />
                </div>

                <ButtonStyled
                    className="px-2 py-1 rounded"
                    theme="red-reversed"
                    onClick={() => router.push('/order')}
                >
                    Заказать
                </ButtonStyled>
            </div>
        </div>
    );
}



interface GridItemProps {
    icon: React.ReactNode;
    title: string;
    pluses: string[];
    sites: {
        label: string,
        icon: React.ReactNode
    }[]
    plusesListIcon: React.ReactNode
    detailsHref: string
    price: number
}

const GridItem = ({ icon, title, pluses, sites, plusesListIcon, detailsHref, price }: GridItemProps) => {
    const router = useRouter();

    return (
        <li className={`list-none`}>
            <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
                <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                />

                <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6">
                    <div className="relative flex flex-1 flex-col gap-3">
                        <div className="flex flex-row items-center gap-3">
                            <div className="w-fit rounded-lg border border-gray-600 p-2">
                                {icon}
                            </div>
                            <h3 className="-tracking-4 pt-0.5 text-xl/[1.375rem] text-balance text-black md:text-2xl/[1.875rem]">
                                {title}
                            </h3>
                        </div>

                        <section>
                            <h4 className="mb-2">Преимущества</h4>
                            <ul className="space-y-1">
                                {pluses.map((el, index) => (
                                    <li key={index}
                                        className="flex flex-row gap-2 items-center"
                                    >
                                        {plusesListIcon}{el}
                                    </li>
                                ))
                                }
                            </ul>
                        </section>

                        <section className="mt-auto">
                            <h4 className="mb-2">Варианты реализации</h4>
                            <ul className="space-y-1">
                                {sites.map((el, index) => (
                                    <li key={index}
                                        className="flex flex-row gap-2 items-center"
                                    >
                                        {el.icon}{el.label}
                                    </li>
                                ))
                                }
                            </ul>
                        </section>

                        <div className="flex flex-row justify-between items-center mt-4">
                            <div className="flex flex-row items-center gap-1">
                                <span className="text-lg font-heading">от {price}</span>

                                <Image
                                    src={"/images/byn_symbol.svg"}
                                    alt="Графический знак белорусского рубля"
                                    width={14} height={14}
                                    unoptimized
                                />
                            </div>

                            <ButtonStyled
                                className="px-2 py-1 rounded"
                                theme="red-reversed"
                                onClick={() => router.push('/order')}
                            >

                                Заказать
                            </ButtonStyled>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};
