import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function LayoutAsyncProcessor({
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