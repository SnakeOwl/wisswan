import { User } from "./User";

export type TelegramChat = {
    id: number;
    user_name: string | null; // UNIQUE. Telegram name. Example: @WalterWhite
    chat_id: number | null; // UNIQUE. Telegram chat id
    created_at: string | null;
    updated_at: string | null;

    user?: User
}