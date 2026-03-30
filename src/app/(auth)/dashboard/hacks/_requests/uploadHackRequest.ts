"use server"

import { Post } from "@/libs/Fetch";
import { log } from "@/libs/Logging";
import { z } from "zod";

// обновляет хак с валидацией.
export default async function uploadHackRequest(data: Record<string, string | number>) {
    const zodSchema = z.object({
        title: z.string()
            .max(65535, "Слишком много символов")
            .nullable().optional(),
        group: z.string()
            .max(255, "Слишком много символов")
            .nullable().optional(),
        domen: z.string()
            .max(255, "Слишком много символов")
            .nullable().optional(),
        subdomen: z.string()
            .max(255, "Слишком много символов")
            .nullable().optional(),
        id: z.number()
            .nullable().optional(),
        status: z.number()
            .nullable().optional(),
        value: z.string()
            .nullable().optional()
    });


    try {
        zodSchema.parse(data); // will be a throw on validation error

        const urlToSave = `user/hacks/${data.id}`;
        
        // request to backend
        const response = await Post(urlToSave, data);
        
        return response;
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

        await log(JSON.stringify(error)); // undefined error

        return { errors: { general: "Что-то пошло не так, пожалуйста попробуйте позже" } };
    }
}