"use client"

import { TelegramChat } from "@/types/TelegramChat";
import React from "react";
import { TelegramChatDispatchAction } from "./ReduceTelegramChat";


export type TelegramChatContextType = {
    telegramChat: TelegramChat | null
};

export const stateTelegramChatInitial: TelegramChatContextType = {
    telegramChat: null,
}


const ContextTelegramChat = React.createContext<{
    stateTelegramChat: TelegramChatContextType,
    dispatchTelegramChat: React.Dispatch<TelegramChatDispatchAction>
}>({
    stateTelegramChat: stateTelegramChatInitial,
    dispatchTelegramChat: () => { }
});

export default ContextTelegramChat;