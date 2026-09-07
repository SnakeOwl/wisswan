import { Post } from "@/types/Blog";
import axiosClient from "@/utils/axiosClient";
import { SquarePlus } from "lucide-react"
import { Metadata } from "next"
import Link from "next/link"
import PostsList from "./_components/PostsList";
import Pagination from "@/app/_components/Paginations/Pagination";

export const metadata: Metadata = {
    title: "Блог"
}

export default async function Page(props: PageProps<"/dashboard/blog">) {
    const { searchParams } = props;

    const sparams = await searchParams;
    const sParamsQuery = new URLSearchParams(sparams as Record<string, string>);

    const apiRoute = `user/posts?${sParamsQuery.toString()}`;
    const postsPaginatedResponse = await axiosClient.get(apiRoute);


    let responseErrorText: string | null = null;
    let posts: Post[] = [];
    let totalPages: number = 0;

    if (postsPaginatedResponse.status != 200) {
        responseErrorText = "Не смог получить список постов, свяжитесь с администрацией сайта.";
    } else {
        posts = postsPaginatedResponse.data.data;
        totalPages = postsPaginatedResponse.data.last_page
    }

    const showPagination = totalPages > 1;



    return (
        <main className="flex flex-col gap-4">
            <div className="flex flex-row flex-wrap">
                <Link href={"/dashboard/blog/add"}

                    prefetch={false}

                    className="flex items-center gap-2 border p-2 hover-link hover:border-sky-500 group rounded"
                >
                    <SquarePlus className="group-hover:animate-bounce" /> Создать
                </Link >
            </div>


            {responseErrorText != null &&
                <div>
                    responseErrorText
                </div>
            }


            <PostsList posts={posts} />


            {showPagination && <Pagination totalPages={totalPages as number} />}
        </main>
    )
}