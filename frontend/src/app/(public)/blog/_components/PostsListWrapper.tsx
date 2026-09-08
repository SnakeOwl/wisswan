import { Fetch } from "@/libs";
import PostList from "./PostList";


export default async function PostsListWrapper() {
    const postsResponse = await Fetch("feed/posts", 0);
    const posts = postsResponse;
    

    return (
        <PostList posts={posts} />
    )
}