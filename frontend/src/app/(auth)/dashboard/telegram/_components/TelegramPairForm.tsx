"use client"

import Button from "@/app/_components/buttons/Button"
import InputV2Styled from "@/app/_components/inputs/InputV2Styled"
import { useContext, useState } from "react"
import ContextTelegramChat from "../_context/ContextTelegramChat"
import { Delete, log, Post } from "@/libs"
import ContextToast from "@/context/messages/Toaster/ContextToast"
import Link from "next/link"


export default function TelegramPairForm() {
    const { stateTelegramChat, dispatchTelegramChat } = useContext(ContextTelegramChat);
    const { dispatchToast } = useContext(ContextToast);
    const [showSaveButton, setShowSaveButton] = useState<boolean>(false);
    const [telegramName, setTelegramName] = useState<string | null>(stateTelegramChat.telegramChat ? stateTelegramChat.telegramChat.user_name : null)
    const [errors, setErrors] = useState<Record<string, string>>({});

    const pairTelegramUserName = async () => {
        // запрос на бек для сохранения

        if (telegramName != undefined && telegramName.length > 0) {
            // Есть имя телеграмма - сохранение или апдейт

            const requestUrl = stateTelegramChat.telegramChat
                ? `user/telegram-chats/${stateTelegramChat.telegramChat.id}` // updating
                : `user/telegram-chats`; // creating

            Post(requestUrl, { user_name: telegramName })
                .then(response => {
                    if (response.id) {
                        dispatchTelegramChat({
                            type: "SET",
                            telegramChat: response
                        });

                        setErrors({}); // reset errors
                    } else if (response.errors) {
                        // какие-то ошибки с бекенда прилетели
                        setErrors(response.errors);
                    } else {
                        log(`Произошла ошибка при отправке телеграм имени. response: ${JSON.stringify(response)}, requestUrl: ${requestUrl}, user_name: ${telegramName}`);

                        dispatchToast({
                            type: "SET",
                            message: "Данные не сохранены",
                            title: "Ошибка",
                            style: "red",
                        });
                    }
                })
        } else if (stateTelegramChat.telegramChat != null) {
            // если нету имени из телеграмма, то это запрос на удаление

            Delete(`user/telegram-chats/${stateTelegramChat.telegramChat.id}`)
                .then(response => {
                    if (response == true) {
                        dispatchTelegramChat({
                            type: "RESET",
                        });
                    } else if (response.errors) {
                        // какие-то ошибки с бекенда прилетели
                        setErrors(response.errors);
                    } else {
                        log(`Произошла ошибка при попытке удаления телеграм имени. response: ${JSON.stringify(response)}, user_name: ${telegramName}`);

                        dispatchToast({
                            type: "SET",
                            message: "Данные не сохранены",
                            title: "Ошибка",
                            style: "red",
                        });
                    }
                })
        }
    }

    const telegramNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let val = e.target.value;
        setShowSaveButton(true);

        if (val.length > 0 && !val.startsWith('@')) {
            val = `@${val}`;
        }

        setTelegramName(val)
    }


    // TODO: по хорошему тут нужно будет вводить проверку на привязку пользователя (по его названию). Но пока сайтом даже никто не пользуется.
    return (
        <div className="flex flex-col gap-2 p-2 border border-neutral-200 dark:border-neutral-800 rounded w-full lg:w-1/2">
            <h2>Привязка бота</h2>

            <div className="grid gap-2">
                <label htmlFor="telegram_name">Имя в Telegram</label>
                <InputV2Styled id="telegram_name"
                    placeholder="@WalterWhite"
                    value={telegramName || ''}
                    onChange={telegramNameChange}
                    error={errors.user_name || errors.chat_id}
                    success={stateTelegramChat.telegramChat != null && "Телеграм чат привязан"}
                />
            </div>

            {showSaveButton &&
                <Button
                    className="py-2 rounded-md"
                    onClick={pairTelegramUserName}
                > Сохранить
                </Button>
            }

            <div className="text-sm">
                <Link href='https://t.me/wisswan_bot'
                    className="text-sky-500 hover:underline"
                    target="_blank"
                    rel="noindex"
                >
                    Ссылка на бота
                </Link>
            </div>
        </div>
    )
}