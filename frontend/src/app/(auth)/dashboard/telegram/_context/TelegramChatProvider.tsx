"use client"

import { useReducer } from "react";
import ContextTelegramChat, { stateTelegramChatInitial, TelegramChatContextType } from "./ContextTelegramChat";
import ReduceTelegramChat from "./ReduceTelegramChat";



export default function TelegramChatProvider({
    children,
    initialState = stateTelegramChatInitial
}: {
    children: React.ReactNode
    initialState?: TelegramChatContextType
}) {
    const [stateTelegramChat, dispatchTelegramChat] = useReducer(ReduceTelegramChat, initialState);

    return (
        <ContextTelegramChat.Provider value={{ stateTelegramChat, dispatchTelegramChat }}>
            {children}
        </ContextTelegramChat.Provider>
    )
}