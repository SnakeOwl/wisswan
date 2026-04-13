import { Metadata } from "next"
import SiteCrawlerForm from "../_components/SiteCrawlerForm"


export const metadata: Metadata = {
    title: "Создание сайт-краулера"
}


export default async function Page() {
    return (
        <main>
            <div className="w-[400px]">
                <SiteCrawlerForm
                    initialCrawler={null}
                />
            </div>
        </main>
    )
}