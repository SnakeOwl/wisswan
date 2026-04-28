import { Metadata } from "next"
import TelegramChatProvider from "./_context/TelegramChatProvider"
import TelegramPairForm from "./_components/TelegramPairForm"
import TelegramNotificationsForm from "./_components/TelegramNotificationsForm"
import { Get } from "@/libs"
import { TelegramChat } from "@/types/TelegramChat"


export const metadata: Metadata = {
    title: "Интеграция с Telegram ботом"
}


export default async function Page() {
    const telegramChatResponse = await Get('user/telegram-chats');

    let telegramChat: null | TelegramChat = null;

    if (telegramChatResponse == 404) {
        // пока ещё нет привязанного чата
    } else if (!telegramChatResponse.id) {
        throw new Error("Не смог получить информацию о чате");
    } else {
        // чат есть
        telegramChat = telegramChatResponse;
    }


    return (
        <TelegramChatProvider initialState={telegramChat ? { telegramChat: telegramChat } : undefined} >
            <main className="grid gap-4">
                <TelegramPairForm />

                <TelegramNotificationsForm className="" />
            </main>
        </TelegramChatProvider>
    )
}