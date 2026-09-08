import { Skeleton } from "@/app/_components/Skeletons/Skeleton";
import { Suspense } from "react";
import PageContent from "./_components/PageContent";
import { Fetch } from "@/libs";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Post } from "@/types/Blog";
import { getDefaultOpenGraph } from "@/utils/SEO/getDefaultOpenGraph";

export async function generateMetadata(props: PageProps<"/blog/[id]">): Promise<Metadata> {
    const postId = (await props.params).id;
    const postResponse = await Fetch(`feed/posts/${postId}`, false);

    if (postResponse === 404)
        notFound();

    if (postResponse === 403)
        return {};


    const post: Post = postResponse;


    return {
        title: post.title,
        description: post.short_description,
        openGraph: getDefaultOpenGraph({
            title: post.title,
            description: post.short_description,
        }),
    }
}


export default async function Page(props: PageProps<"/blog/[id]">) {
    return (
        <main>
            <Suspense fallback={<Skeleton />}>
                <PageContent props={props} />
            </Suspense>
        </main>
    )
}