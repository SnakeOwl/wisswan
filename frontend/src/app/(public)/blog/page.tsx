import { Metadata } from "next";
import { getDefaultOpenGraph } from "@/utils/SEO/getDefaultOpenGraph";
import PostsListWrapper from "./_components/PostsListWrapper";
import { Suspense } from "react";
import { Skeleton } from "@/app/_components/Skeletons/Skeleton";

// TODO: для полноценного функционала тут не хватает sitemap, Schema.org и можно накинуть ту штуку про следующую и прошлую статью
// TODO: как будет больше блогов, сделать фильтры по доменам

export const metadata: Metadata = {
    title: "Блог",
    description: "Блог сайта wisswan.tech.",
    keywords: ["Блог"],

    openGraph: getDefaultOpenGraph({
        title: "Блог",
        description: "Блог сайта wisswan.tech."
    }),
}


export default async function Page() {
    return (
        <div className="grid grid-cols-1 xl:grid-cols-5" >
            <div className="hidden xl:block col-span-1"></div>

            <div className="col-span-3 container-v1">
                <main>
                    <h2 className="mt-4 mb-2">Новые статьи</h2>

                    <Suspense fallback={<Skeleton />}>
                        <PostsListWrapper />
                    </Suspense>
                </main>
            </div>

            <div className="hidden xl:block col-span-1"></div>
        </div>
    )
}