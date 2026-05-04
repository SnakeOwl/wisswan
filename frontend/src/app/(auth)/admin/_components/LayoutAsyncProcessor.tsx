import { isAdmin } from "@/types/User";
import getUser from "@/utils/getUser";
import { redirect } from "next/navigation";

export default async function LayoutAsyncProcessor({ children }: { children: React.ReactNode }) {
    const user = await getUser();

    if (!isAdmin(user))
        redirect('/dashboard');


    return children;
}