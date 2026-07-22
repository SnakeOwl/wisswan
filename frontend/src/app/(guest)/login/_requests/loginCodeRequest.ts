"use server"

import { Post } from "@/libs/Fetch";
import { log } from "@/libs/Logging";
import { z } from "zod";

export default async function loginCodeRequest(prevState: any, formData: FormData) {
    const rawData = Object.fromEntries(formData);
    // TODO: need request counter protection


    const zodSchema = z.object({
        email: z.string()
            .email("Введите корректный email")
            .min(5, "Email слишком короткий")
            .max(100, "Email слишком длинный"),
        code: z.string()
            .length(5, "Код должен содержать 5 символов")
    });

    try {
        zodSchema.parse(rawData); // will be a throw on validation error

        const data = {
            grant_type: "email_code",
            client_id: process.env.BACKEND_AUTH_CLIENT_ID,
            client_secret: process.env.BACKEND_AUTH_CLIENT_SECRET,
            email: rawData.email,
            scope: '*',
            code: rawData.code
        }

        // request to backend
        const codeResponse = await Post('oauth/token', data);
console.log(codeResponse)

        // laravel passport validation
        if (codeResponse.error && codeResponse.hint)
            return { errors: { code: codeResponse.hint } }


        return codeResponse;
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