import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Панель инструментов"
}

export default function Page(){
    return (
        <main>
            Тут должна быть статистика по созданным ресурсам (возможен даже снос левого меню).
        </main>
    )
}