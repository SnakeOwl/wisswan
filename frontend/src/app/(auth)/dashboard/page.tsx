import { Metadata } from "next";
import ToastTestButton from "./_components/ToastTestButton";

export const metadata: Metadata = {
    title: "Панель инструментов"
}

export default function Page(){
    return (
        <main>
            {/* <ToastTestButton /> */}
            Тут должна быть статистика по созданным ресурсам (возможен даже снос левого меню).
        </main>
    )
}