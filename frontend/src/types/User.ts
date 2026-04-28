export type User = {
    id: number
    access?: number 
    avatar: string | null // url
    deleted_at: string | null
    email: string
    name: string | null
    email_verified_at: string
    ip_last_updated: string
    last_activity_at: string
    created_at: string | null
    updated_at: string | null
    deleted_message?: string // hidden. Manager: Why this user was deleted.
    use_telegram_notify_on_site_cravler_500: boolean
    use_telegram_notify_on_site_cravler_all_responses: boolean
}


export function isAdmin(user: User | null) {
    return user != null && user.access == 255;
}