import { ReactNode, Suspense } from "react"
import LayoutAsyncProcessor from "./_components/LayoutAsyncProcessor";
import { SkeletonTable } from "../_components/Skeletons/SkeletonTable";

export default async function Layout({
    children
}: {
    children: ReactNode
}) {
    return (
        <Suspense fallback={ <SkeletonTable height="min-h-[250px]" /> }>
            <LayoutAsyncProcessor>
                {children}
            </LayoutAsyncProcessor>
        </Suspense>
    )
}