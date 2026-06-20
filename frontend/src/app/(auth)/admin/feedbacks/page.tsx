import { Metadata } from "next"
import FeedbacksTable from "./_components/FeedbacksTable"


export const metadata: Metadata = {
    title: "Обратная связь"
}


export default async function Page(props: PageProps<"/admin/feedbacks">) {
    const sparams = await props.searchParams;
    const page = sparams.page || 1;

    return (
        <main>
            <FeedbacksTable page={Number(page)} />
        </main>
    )
}