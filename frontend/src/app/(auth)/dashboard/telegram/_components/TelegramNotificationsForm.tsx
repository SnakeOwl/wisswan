"use client"

import InputV2Styled from "@/app/_components/inputs/InputV2Styled"
import ContextUser from "@/context/ContextUser";
import { Post } from "@/libs";
import { useCallback, useContext } from "react"
import ContextTelegramChat from "../_context/ContextTelegramChat";
import ContextToast from "@/context/messages/Toaster/ContextToast";

export default function TelegramNotificationsForm({
    className
}: {
    className?: string
}) {
    const { stateUser, dispatchUser } = useContext(ContextUser);
    const { stateTelegramChat } = useContext(ContextTelegramChat);
    const { dispatchToast } = useContext(ContextToast);


    const updateUser = useCallback(async (data: any) => {
        if (stateUser.authentication_status != "authorized" || stateUser.user == null)
            return null;


        Post(`user/update/${stateUser.user.id}`, data).then(response => {
            if (!response.id) {
                dispatchToast({
                    type: "SET",
                    title: "Ошибка",
                    message: "Данные не сохранены",
                    style: "red",
                });

                console.error(response);
            }
        });
    }, [stateUser.authentication_status, stateUser.user, dispatchToast]);
    

    if (stateUser.authentication_status != "authorized")
        return null;


    return (
        <div className={`${className} flex flex-col gap-2 border p-4 border-neutral-200 rounded`}>
            <div className="flex flex-row gap-2">
                <InputV2Styled id="use_telegram_notify_on_site_cravler_500"
                    checked={stateUser.user?.use_telegram_notify_on_site_cravler_500}
                    value={stateUser.user?.use_telegram_notify_on_site_cravler_500 ? 1 : 0}
                    onChange={() => {
                        const newValue = !stateUser.user!.use_telegram_notify_on_site_cravler_500;

                        dispatchUser({
                            type: "SET",
                            user: {
                                ...stateUser.user!,
                                use_telegram_notify_on_site_cravler_500: newValue,
                            },
                            authentication_status: stateUser.authentication_status,
                        });

                        updateUser({ use_telegram_notify_on_site_cravler_500: newValue });
                    }}
                    type="checkbox"
                    disabled={stateTelegramChat.telegramChat == null}
                />

                <label htmlFor="use_telegram_notify_on_site_cravler_500">Высылать уведомления при получении 500 ответа от Сайт-краулеров</label>
            </div>

            <div className="flex flex-row gap-2">
                <InputV2Styled id="use_telegram_notify_on_site_cravler_all_responses"
                    checked={stateUser.user?.use_telegram_notify_on_site_cravler_all_responses}
                    value={stateUser.user?.use_telegram_notify_on_site_cravler_all_responses ? 1 : 0}
                    onChange={() => {
                        const newValue = !stateUser.user!.use_telegram_notify_on_site_cravler_all_responses;

                        dispatchUser({
                            type: "SET",
                            user: {
                                ...stateUser.user!,
                                use_telegram_notify_on_site_cravler_all_responses: newValue,
                            },
                            authentication_status: stateUser.authentication_status,
                        });

                        updateUser({ use_telegram_notify_on_site_cravler_all_responses: newValue });
                    }}
                    type="checkbox"
                    disabled={stateTelegramChat.telegramChat == null}
                />

                <label htmlFor="use_telegram_notify_on_site_cravler_all_responses">Высылать все уведомления от Сайт-краулеров</label>
            </div>
        </div>
    )
}