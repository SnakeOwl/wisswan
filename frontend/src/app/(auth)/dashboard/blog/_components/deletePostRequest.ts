"use server"
import { log } from "@/libs/Logging";
import axiosClient from "@/utils/axiosClient";
import axios from "axios";

export default async function deletePostRequest(postId: number) {
    try {
        await axiosClient.delete(`user/posts/${postId}`);

        return true;
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            if (error.response && error.response.status === 422) {
                console.log(error.response.data.errors);
                // 422 = laravel валидация
                const laravelErrors = error.response.data.errors; // структура Laravel: { title: ["Error text"], content: [...] }
                const errorBuffer: Record<string, string> = {};

                if (laravelErrors) {
                    Object.keys(laravelErrors).forEach((key) => {
                        errorBuffer[key] = laravelErrors[key][0];
                    });
                    return { errors: errorBuffer };
                }
            }

            await log(`Axios Error [${error.response?.status}]: ${JSON.stringify(error.response?.data)}`);
        } else {
            await log(`Unknown Error: ${error instanceof Error ? error.message : String(error)}`);
        }


        return { errors: { general: "Что-то пошло не так, пожалуйста попробуйте позже" } };
    }
}
