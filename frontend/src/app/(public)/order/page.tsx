import { getDefaultOpenGraph } from "@/utils/SEO/getDefaultOpenGraph"
import { Metadata } from "next"
import OrderForm from "./_components/OrderForm"

export const metadata: Metadata = {
    title: "Форма заказа",
    description: "Тут пользователь может сделать заказ на одну из указанных услуг",
    keywords: ["заказ", "форма заказа"],

    openGraph: getDefaultOpenGraph({
        description: "Форма заказа"
    }),
}


export default async function Page() {
    return (
        <main className="flex-1 container-v1 flex items-center justify-center w-full">
            <OrderForm />
        </main>
    )
}