import { Cuboid } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";


export const metadata: Metadata = {
    title: "Математика",
    description: "Раздел с ссылками на другие разделы математики",
}


export default async function Page() {
    const mainLinks = [
        {
            label: "Геометрия",
            href: "/math/geometry",
            icon: <Cuboid />,
        }
    ];


    return (
        <main>
            <h1 className="text-2xl font-bold mb-4">Разделы математики</h1>

            <div className="grid lg:grid-cols-2 gap-4">
                {mainLinks.map((el, index) => (
                    <div key={index}>
                        <div className="border rounded p-2">
                            <Link href={el.href}
                                className="hover:text-sky-500"
                            >
                                <h2 className="text-xl font-bold">
                                    {el.label}
                                </h2>
                            </Link>
                        </div>
                    </div>
                ))
                }
            </div>
        </main>
    )
}