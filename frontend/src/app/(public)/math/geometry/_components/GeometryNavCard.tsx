"use client"

import { GlowingEffect } from "@/components/ui/glowing-effect"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ComponentProps } from "react"

export type CardProp = {
    imageSrc: string
    imageAlt: string
    label: string
    link: string
    sublinks: {
        href: string
        label: string
    }[]
}

export default function GeometryNavCard({
    card
}: {
    card: CardProp
}) {
    const router = useRouter();

    return (
        <div
            className="group cursor-pointer relative border rounded-md"
            onClick={() => router.push(card.link)}
        >
            <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
            />

            <div className="group  p-4   flex flex-row gap-4">
                <Image
                    src={card.imageSrc}
                    alt={card.imageAlt}
                    width={200}
                    height={200}
                    unoptimized
                />
                <div>
                    <div className="group-hover:text-sky-500 font-bold text-xl mb-2">
                        {card.label}
                    </div>

                    <ul className="flex flex-wrap gap-2"
                        onClick={e => e.stopPropagation()}
                    >
                        {card.sublinks.map((link, index) => (
                            <li key={index}
                            >
                                <HastagLink href={link.href}>
                                    <span className="font-bold text-sky-500">#</span>&nbsp;{link.label}
                                </HastagLink>
                            </li>
                        ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

type HastagLinkProps = ComponentProps<typeof Link>;

const HastagLink = (props: HastagLinkProps) => (
    <Link {...props}
        className={`py-1 px-2 text-sm rounded-sm
            bg-linear-to-r from-cyan-100 via-sky-100 to-blue-50
            hover:text-white hover:from-cyan-400 hover:via-sky-400 hover:to-blue-300 duration-100
            `}
    >
    </Link>

)