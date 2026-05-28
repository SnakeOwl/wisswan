import { ReactNode, Suspense } from "react"
import { LayoutUI } from "./_components/LayoutUI";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import LayoutBreadcrumbs from "../_components/LayoutBreadcrumbs";


export default async function Layout({
    children
}: {
    children: ReactNode
}) {
    return (
        <Suspense>
            <LayoutBreadcrumbs />

            <LayoutAsyncProcessor>
                <LayoutUI>
                    {children}
                </LayoutUI>
            </LayoutAsyncProcessor>
        </Suspense>
    )
}


const LayoutAsyncProcessor = async function ({
    children
}: {
    children: React.ReactNode
}) {
    const cookiesStorage = await cookies();

    // ==== Redirecting users without token

    if (!cookiesStorage.has("auth_token"))
        redirect('/login');

    // ---- Redirecting users without token


    return children;
}