import { Metadata } from "next";
import Link from "next/link";
import { getDefaultOpenGraph } from "@/utils/SEO/getDefaultOpenGraph";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Математика",
    description: "Раздел с ссылками на другие разделы математики",
    keywords: ["математика", "геометрия", "калькулятор"],

    openGraph: getDefaultOpenGraph({
        description: "Раздел с ссылками на другие разделы математики"
    }),
}


export default async function Page() {
    return (
        <main>
            <section>
                <nav>
                    <ul className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                        <li>
                            <Link href={'/math/algebra'}
                                className="link-hover">
                                <div className="group cursor-pointer relative border rounded-md p-4">
                                    <GlowingEffect
                                        spread={40}
                                        glow={true}
                                        disabled={false}
                                        proximity={64}
                                        inactiveZone={0.01}
                                    />
                                    <span className="font-heading text-2xl">Алгебра</span>

                                    {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                                    <div className="grid grid-cols-1 xl:grid-cols-3 gap-2" aria-hidden={true}>
                                        <figure className="flex flex-col items-center">
                                            <Image
                                                src={"/images/storage/algebra/decart_coordinates_with_dots.svg"}
                                                unoptimized
                                                width={150} height={150}
                                                alt="Декартова система координат с точками на ней"
                                            />

                                            <figcaption className="text-xs text-center">
                                                Декартова система координат
                                            </figcaption>
                                        </figure>

                                        <figure className="flex flex-col items-center">
                                            <Image
                                                src={"/images/storage/algebra/set_union.svg"}
                                                unoptimized
                                                width={150} height={150}
                                                alt="2 круга: первый круг как бы представляет собой множество A, второй круг и представляет собой подмножество B. Они пересекаются в центре и какбы объеденены."
                                            />

                                            <figcaption className="text-xs text-center">
                                                Объединение множеств <br />
                                                <span className="text-nowrap"><b className="text-orange-500">C</b> = <b className="text-green-700">A</b> &cup; <b className="text-blue-700">B</b></span>
                                            </figcaption>
                                        </figure>

                                        <figure className="flex flex-col items-center my-2 w-fit mx-auto">
                                            <Image
                                                src={"/images/storage/algebra/two_linear_formulas_crossed.svg"}
                                                unoptimized
                                                width={150} height={150}
                                                alt="Декартова система координат с двумя прямыми, которые пересекаются в одной точке"
                                            />
                                        </figure>
                                    </div>

                                </div>
                            </Link>
                        </li>

                        <li>
                            <Link href={'/math/geometry'}
                                className="link-hover">
                                <div className="group cursor-pointer relative border rounded-md p-4">
                                    <GlowingEffect
                                        spread={40}
                                        glow={true}
                                        disabled={false}
                                        proximity={64}
                                        inactiveZone={0.01}
                                    />
                                    <span className="font-heading text-2xl">Геометрия</span>

                                    {/* 1. Этот блок увидят обычные пользователи. Читалка его пропустит */}
                                    <div className="grid grid-cols-1 xl:grid-cols-3 gap-2" aria-hidden={true}>
                                        <figure className="flex flex-col items-center">
                                            <Image
                                                src="/images/storage/circle_description_1.svg"
                                                width={150} height={150}
                                                alt="Рисунок круга с указанием таких элементов как: диаметр, радиус, дуга, хорда, сегмент, сектор"
                                                unoptimized
                                            />

                                            <figcaption className="text-xs text-center">
                                                Круг
                                            </figcaption>
                                        </figure>

                                        <figure className="flex flex-col items-center">
                                            <Image
                                                src={"/images/storage/geometry/rectangular_parallelepiped.svg"}
                                                width={150} height={150}
                                                alt="Прямоугольный параллелепипед с указанием высоты как a, длины как b, ширины как c."
                                                unoptimized
                                            />
                                            
                                            <figcaption className="text-xs text-center">
                                                Куб
                                            </figcaption>
                                        </figure>

                                        <figure className="flex flex-col items-center">
                                            <Image
                                                src={"/images/storage/geometry/polygon.svg"}
                                                width={150} height={150}
                                                alt="Многоугольник, где обозначены вершины: A, B, C, D, E и стороны: a, b, c, d ,e"
                                                unoptimized
                                            />

                                            <figcaption className="text-xs text-center">
                                                Многоугольник
                                            </figcaption>
                                        </figure>
                                    </div>
                                </div>
                            </Link>
                        </li>

                        <li>
                            <Link href={'/math/calculators'}
                                className="link-hover">
                                <div className="group cursor-pointer relative border rounded-md p-4">
                                    <GlowingEffect
                                        spread={40}
                                        glow={true}
                                        disabled={false}
                                        proximity={64}
                                        inactiveZone={0.01}
                                    />
                                    <span className="font-heading text-2xl">Калькуляторы</span>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </section>
        </main>
    )
}
