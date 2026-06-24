import { Suspense } from "react";
import SiteCrawlersLink from "./_components/SiteCrawlersLink";
import { Skeleton } from "@/app/_components/Skeletons/Skeleton";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "Помощники"
}


export default async function Page() {
    const cardsH = "min-h-[150px]";
    const cardClasses = cardsH + " border border-neutral-200 rounded-lg p-3";

    return (
        <main className="grid grid-cols-4 gap-4">
            <div className={cardsH}>
                <Suspense fallback={<Skeleton className="h-full" />}>
                    <SiteCrawlersLink classname={cardClasses} />
                </Suspense>
            </div>
        </main>
    )
}