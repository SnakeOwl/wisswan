import { Metadata } from "next";
import { Suspense } from "react";
import { Skeleton } from "@/app/_components/Skeletons/Skeleton";
import BlogFormWrapper from "./_components/BlogFormWrapper";

export const metadata: Metadata = {
    title: "Создание статьи"
}


export default function Page() {
    return (
        <main>
            <Suspense fallback={<Skeleton />}>
                <BlogFormWrapper />
            </Suspense>
        </main>
    )
}