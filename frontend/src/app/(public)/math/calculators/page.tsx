import { GlowingEffect } from "@/components/ui/glowing-effect"
import { getDefaultOpenGraph } from "@/utils/SEO/getDefaultOpenGraph"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"


export const metadata: Metadata = {
    title: "Калькуляторы",
    description: "Онлайн-калькуляторы геометрических фигур.",
    keywords: ["калькуляторы геометрических фигур"],

    openGraph: getDefaultOpenGraph({
        description: "Список доступных калькуляторов"
    }),
}


export default async function Page() {
    const links: INavCard[] = [
        {
            imageSrc: "/images/storage/Triangle_3.svg",
            imageAlt: "Прямоугольный треугольник с указанием сторон и углов",
            label: "Калькулятор треугольников",
            href: `/math/calculators/triangle`,
        }, {
            imageSrc: "/images/storage/geometry/square.svg",
            imageAlt: "Квадрат где углы помечены как: A, B, C, Z, стороны помечены как: отрезки AB и CZ как h, а BC и AZ как w. По центру проведена диагональ, помеченная как D.",
            label: "Калькулятор прямоугольников",
            href: `/math/calculators/rectangles`,
        }
    ]


    return (
        <main className="">
            <nav className="grid grid-cols-1 xl:grid-cols-2  gap-4">
                {links.map((el, index) => (
                    <NavCard key={el.href}
                        {...el}
                    />
                ))}
            </nav>
        </main>
    )
}


interface INavCard {
    imageSrc: string
    imageAlt: string
    label: string
    href: string
}

const NavCard = ({
    imageSrc,
    imageAlt,
    label,
    href

}: INavCard) => (
    <Link href={href}
        className="group cursor-pointer relative border rounded-md"
    >
        <GlowingEffect
            spread={40}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
        />

        <div className="group p-4 flex flex-col xl:flex-row gap-4">
            <Image
                className="mx-auto xl:mx-0"
                src={imageSrc}
                alt={imageAlt}
                width={150} height={150}
                unoptimized
            />
            <div>
                <div className="group-hover:text-sky-500 font-bold mb-2 font-heading">
                    {label}
                </div>

            </div>
        </div>
    </Link>
)