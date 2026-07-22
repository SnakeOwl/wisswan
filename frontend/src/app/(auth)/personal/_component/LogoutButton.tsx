"use client"

import Button from "@/app/_components/buttons/Button";
import ContextUser from "@/context/ContextUser"
import { Post } from "@/libs";
import { deleteCookie } from "@/utils/deleteCookie";
import { redirect } from "next/navigation";
import { useContext } from "react"

export default function LogoutButton() {
    const { dispatchUser } = useContext(ContextUser);

    const logout = async () => {
        if (!confirm("Выйти из аккаунта?"))
            return null;

        const response = await Post("user/logout");

        if (response != undefined) {
            await deleteCookie('access_token');
            await deleteCookie('refresh_token');
            await deleteCookie('access_token_expires_in');

            dispatchUser({
                type: "SET",
                authentication_status: "unauthorized",
                user: null
            });

            redirect('/');
        }

    }

    return (
        <Button className="px-4 py-2 rounded-lg text-red-500 hover:text-white hover:bg-red-500"
            onClick={logout}
        >
            Выйти
        </Button>
    )
}