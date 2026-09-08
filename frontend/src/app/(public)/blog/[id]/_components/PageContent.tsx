import LexicalView from "@/app/_components/TextEditors/LexicalView";
import { Fetch } from "@/libs";
import { Post } from "@/types/Blog";
import { formatDate } from "@/utils/formatDate";
import { notFound } from "next/navigation";

export default async function PageContent({
    props
}: {
    props: PageProps<"/blog/[id]">
}) {
    const postId = (await props.params).id;
    const postResponse = await Fetch(`feed/posts/${postId}`, false);

    if (postResponse === 404)
        notFound();

    if (postResponse === 403)
        return (
            <div>
                У вас нет доступа к данной статье.
            </div>
        );

    const post: Post = postResponse;


    return (
        <main>
            <header className="py-2 px-4 w-fit mx-auto">
                <h1 className="text-center">{post.title}</h1>
                <div>
                    <span className="text-sm">
                        {post.published_at && (
                            <>
                                <span>Опубликовано:  {formatDate(post.published_at)}</span>
                                {post.updated_at && (new Date(post.updated_at).getDate() != new Date(post.published_at!).getDate()) &&
                                    <span>, обновлено: {formatDate(post.published_at)}</span>
                                }
                            </>
                        )}
                    </span>
                </div>
            </header>

            <LexicalView content={post.content} />
        </main>
    )
}

