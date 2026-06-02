import { Metadata } from "next";
import CircleCalculator from "./_components/CircleCalculator";
import CircleDescription from "./_components/CircleDescription";

export const metadata: Metadata = {
    title: "Круг и окружность",
    description: "Использование круга. Формулы круга. Свойства круга. Калькулятор круга."
}



export default function Page() {
    return (
        <main>
            <CircleDescription />

            {/* <CircleCalculator /> */}

        </main>
    )
}