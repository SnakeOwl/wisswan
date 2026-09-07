import { Skeleton } from "@/app/_components/Skeletons/Skeleton"
import { Metadata } from "next"
import { Suspense } from "react"
import PostForm from "../_components/PostForm"
import axiosClient from "@/utils/axiosClient"
import Link from "next/link"
import { notFound } from "next/navigation"

export const metadata: Metadata = {
    title: "Редактирование статьи"
}

export default async function Page(props: PageProps<"/dashboard/blog/[id]">) {
    const { params } = props;
    const postId = (await params).id;

    const postResponse = await axiosClient.get(`user/posts/${postId}`);

    if (postResponse.status == 403) {
        return (
            <div>У вас нет доступа к данной статье. Если возникли вопросы, напишите <Link href={"/help"} prefetch={false} className="link-hover text-sky-500">администратору</Link>.</div>
        )
    } else if (postResponse.status == 404) {
        notFound();
    }


    return (
        <main>
            <Suspense fallback={<Skeleton />}>
                <PostForm initialData={postResponse.data} />
            </Suspense>
        </main>
    )
}