import { TelegramChatContextType } from "./ContextTelegramChat";


export type TelegramChatDispatchAction =
    | ({ type: 'SET' } & TelegramChatContextType)
    | { type: 'RESET' }


export default function ReduceTelegramChat(
    state: TelegramChatContextType,
    action: TelegramChatDispatchAction
): TelegramChatContextType {
    const { type, ...newAction } = action;


    switch (type) {
        case "SET":
            return {
                ...newAction as TelegramChatContextType
            }

        case "RESET":
            return {
                telegramChat: null,
            }

        default:
            return state;
    }
}