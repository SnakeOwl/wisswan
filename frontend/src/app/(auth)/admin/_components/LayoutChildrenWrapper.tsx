import { isAdmin } from "@/types/User";
import getUser from "@/utils/getUser";
import { redirect } from "next/navigation";
import { connection } from "next/server";

export default async function LayoutChildrenWrapper({ children }: { children: React.ReactNode }) {
    await connection(); 

    const user = await getUser();

    if (!isAdmin(user))
        redirect('/dashboard');


    return children;
}