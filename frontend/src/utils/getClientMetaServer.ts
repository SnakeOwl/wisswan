"use server"

import { headers } from "next/headers";

// Функция для парсинга User-Agent (базовый вариант без тяжелых библиотек)
export async function getClientMetaServer() {
    // Получаем IP-адрес на стороне сервера
    const headersList = await headers();
    // Проверяем стандартные заголовки прокси (Vercel, Cloudflare, Nginx обычно пишут сюда)
    const forwardedFor = headersList.get("x-forwarded-for");
    const editor_ip = forwardedFor ? forwardedFor.split(",")[0] : (headersList.get("x-real-ip") || "127.0.0.1");

    return {
        editor_ip
    };
}
