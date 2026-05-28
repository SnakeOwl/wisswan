import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Геометрия",
    description: "Раздел о геометрии. Геометрические фигуры."
}

export default async function Page(){
    return (
        <main>
            <h1>Геометрия</h1>
        </main>
    )
}