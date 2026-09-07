import { Domain } from "domain"
import { User } from "./User"

export type Post = {
    id: number
    created_at: string | null
    updated_at: string | null
    published_at: string | null
    is_published: boolean
    title: string
    content: string
    short_description: string
    status: number // Status in fact
    user_id: number | null

    editor_ip: string | null
    device_type: string | null // mobile, desktop, tablet, bot ...
    browser_name: string | null // Chrome, Safari, Firefox ...
    os_name: string | null // Windows, iOS, Android ...         
    screen_resolution: string | null // "1920x1080", "390x844"

    user?: User
    domains?: Domain[]
}