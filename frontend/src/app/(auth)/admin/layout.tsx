import LayoutChildrenWrapper from "./_components/LayoutChildrenWrapper";
import { Suspense } from "react";

export default async function Layout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <Suspense>
            <LayoutChildrenWrapper>
                {children}
            </LayoutChildrenWrapper>
        </Suspense>
    )
}