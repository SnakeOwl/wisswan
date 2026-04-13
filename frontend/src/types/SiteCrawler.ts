import { User } from "./User"

export type SiteCrawler = {
    id: number
    created_at: string | null
    updated_at: string | null
    user_id: number
    url: string // page for parsing

    user?: User
    logs?: SiteCrawlerLog[]
}

export type SiteCrawlerLog = {
    id: number
    created_at: string | null
    updated_at: string | null
    site_crawler_id: number
    status: number // respose status

    crawler?: SiteCrawler
}