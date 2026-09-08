import { Fetch } from "@/libs";
import BlogList from "./_components/BlogList";
import { Metadata } from "next";
import { getDefaultOpenGraph } from "@/utils/SEO/getDefaultOpenGraph";

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
    const postsResponse = await Fetch("feed/posts", 300);
    const posts = postsResponse;


    return (
        <div className="grid grid-cols-1 xl:grid-cols-5" >
            <div className="hidden xl:block col-span-1"></div>

            <div className="col-span-3 container-v1">
                <main>
                    <h2 className="mt-4 mb-2">Новые статьи</h2>

                    <BlogList posts={posts} />
                </main>
            </div>

            <div className="hidden xl:block col-span-1"></div>
        </div>
    )
}