"use server"
import { log } from "@/libs/Logging";
import axiosClient from "@/utils/axiosClient";
import axios from "axios";
import { z } from "zod";

export default async function updatePostRequest(data: any) {
    const rawData = data;

    const zodSchema = z.object({
        title: z.string()
            .min(8, "Слишком короткий заголовок")
            .max(255, "Слишком длинный заголовок"),

        content: z.string()
            .min(1, "Слишком мало слов"),
        short_description: z.string()
            .min(8, "Слишком мало символов")
            .max(255, "Слишком много символов"),
    });


    try {
        zodSchema.parse(rawData); // will be a throw on validation error


        // request to backend
        if (rawData.id == undefined) {
            // creating
            const response = await axiosClient.post(`user/posts`, rawData);
            return response.data;
        } else {
            // updating
            const response = await axiosClient.put(`user/posts/${rawData.id}`, rawData);
            return response.data;
        }
    } catch (error: unknown) {
        if (error instanceof z.ZodError) {
            const errorBuffer: Record<string, string> = {};

            error.issues.forEach(issue => {
                issue.path.forEach(fieldName => {
                    errorBuffer[fieldName] = issue.message;
                })
            });

            return { errors: errorBuffer };
        }


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
