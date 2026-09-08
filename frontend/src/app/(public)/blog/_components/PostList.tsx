import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Post } from "@/types/Blog";
import { formatDate } from "@/utils/formatDate";
import Link from "next/link";

export default function PostList({
    posts
}: {
    posts: Post[]
}) {
    return (
        <div className="grid gird-cols-1 xl:grid-cols-3 gap-4">
            {posts.map((post, index) => (
                <Link key={index} href={`/blog/${post.id}`}>
                    <article className="group relative p-2 border rounded-lg flex flex-col pag-2">
                        <GlowingEffect
                            spread={40}
                            glow={true}
                            disabled={false}
                            proximity={64}
                            inactiveZone={0.01}
                        />

                        <h3 className="group-hover:text-sky-500">{post.title}</h3>

                        <p>{post.short_description}</p>

                        <div>
                            <span className="text-xs">
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
                    </article>
                </Link>
            ))
            }
        </div>
    )
}