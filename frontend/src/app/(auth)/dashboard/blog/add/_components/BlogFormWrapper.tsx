"use client"

import { usePathname } from "next/navigation";
import PostForm from "../../_components/PostForm";

export default function PostFormWrapper() {
    const pathname = usePathname();

    // на странице add, форма не должна сохранять свои значения.
    return (
        <PostForm key={pathname} />
    )
}