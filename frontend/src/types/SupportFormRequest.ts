import { User } from "./User"

export type SupportFormRequest = {
    id: number,

    text: string,
    contact_email: string | null,
    status: number // Status in fact
    using_personal_data: boolean,
    subject: string | null,
    user_id: number | null,
    created_at: string | null
    updated_at: string | null
    
    user?: User | null
}