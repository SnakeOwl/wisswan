import ContentDividerV1 from "@/app/_components/dividers/ContentDividerV1";
import { Metadata } from "next";
import Link from "next/link";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { getDefaultOpenGraph } from "@/utils/SEO/getDefaultOpenGraph";


export const metadata: Metadata = {
    title: "Математика",
    description: "Раздел с ссылками на другие разделы математики",
    keywords: ["математика", "геометрия"],

    openGraph: getDefaultOpenGraph({
        description: "Раздел математики"
    }),
}


export default async function Page() {
    return (
        <main>
            <section>
                <ContentDividerV1 className="mb-4">
                    <h2 className="text-2xl text-nowrap">Разделы математики</h2>
                </ContentDividerV1>

                <ContentDividerV1 className="mb-4">
                    <h3 className="text-xl font-bold text-nowrap">
                        <Link href={'/math/geometry'}
                            className="link-hover underline"
                        >
                            Геометрия
                        </Link>
                    </h3>
                </ContentDividerV1>

                <ContentDividerV1 className="mb-4">
                    <h3 className="text-xl font-bold text-nowrap">
                        <Link href={'/math/algebra'}
                            className="link-hover underline"
                        >
                            Алгебра
                        </Link>
                    </h3>
                </ContentDividerV1>
            </section>

            <ShortMultipliesFormulas />
        </main>
    )
}


const ShortMultipliesFormulas = () => {
    const formulas = [
        {
            formula: <span><strong>(a + b)&sup2; = a&sup2; + 2ab + b&sup2;</strong> =<br />
                (a + b)(a + b) = <br />
                a&sup2; + ab + ba + b&sup2;
            </span>,
            description: "Квадрат суммы"
        }, {
            formula: <span><strong>a&sup2; - b&sup2; = (a - b)(a + b)</strong> = <br />
                a&sup2; - ab + ba - b&sup2;
            </span>,
            description: "Разность квадратов"
        }, {
            formula: <span><strong>(a + b)&sup3; = a&sup3; + 3a&sup2;b + 3ab&sup2; + b&sup3;</strong></span>,
            description: "Куб суммы"
        }, {
            formula: <span><strong>(a - b)&sup3; = a&sup3; - 3a&sup2;b + 3ab&sup2; - b&sup3;</strong></span>,
            description: "Куб разности"
        }, {
            formula: <span><strong>a&sup3; - b&sup3; = (a - b)(a&sup2; + ab + b&sup2;)</strong></span>,
            description: "Разложение разности кубов"
        }, {
            formula: <span><strong>a&sup3; + b&sup3; = (a + b)(a&sup2; - ab + b&sup2;)</strong></span>,
            description: "Разложение суммы кубов"
        }
    ];

    return (
        <main>
            <ContentDividerV1>
                <h3 className="text-2xl font-bold text-wrap xl:text-nowrap">Формулы сокращённого умножения</h3>
            </ContentDividerV1>

            <div className="flex">
                <Table className="max-w-lg mx-auto">
                    <TableCaption>Формулы сокращённого умножения</TableCaption>
                    <TableHeader>
                        <TableRow >
                            <TableHead className="font-bold">Формула</TableHead>
                            <TableHead className="font-bold">Название</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {formulas.map((el, index) => (
                            <TableRow key={index}>
                                <TableCell className="text-xl">{el.formula}</TableCell>
                                <TableCell>{el.description}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </main>
    )
}