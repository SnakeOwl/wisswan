import { Suspense } from "react";
import LayoutAsyncProcessor from "./_components/LayoutAsyncProcessor";

export default async function Layout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <Suspense>
            <LayoutAsyncProcessor>
                {children}
            </LayoutAsyncProcessor>
        </Suspense>
    )
}