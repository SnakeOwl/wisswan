"use server"

import { Post } from "@/libs"
import getCookie from "@/utils/getCookie"


/**
 * Обновляет refresh и access токены на беке.
 * 
 * @throws
 */
export default async function refreshUserToken() {
    const access_token = await getCookie("access_token");
    const refresh_token = await getCookie("refresh_token");

    if (refresh_token == null || access_token == null)
        throw new Error("no_tokens");


    const data = {
        grant_type: "refresh_token",
        client_id: process.env.BACKEND_AUTH_CLIENT_ID,
        client_secret: process.env.BACKEND_AUTH_CLIENT_SECRET,
        access_token: access_token,
        refresh_token: refresh_token
    }


    const response = await Post("oauth/token", data);

    if (!response.access_token || !response.refresh_token)
        throw new Error("Что-то не так с ответом");


    return response
}