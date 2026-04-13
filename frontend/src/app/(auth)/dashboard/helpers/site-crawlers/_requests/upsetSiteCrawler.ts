"use server"

import { Post } from "@/libs/Fetch";
import { log } from "@/libs/Logging";
import { z } from "zod/v4";

export default async function upsetSiteCrawler(updata: Record<string, any>) {
    const zodSchema = z.object({
        url: z.string('Необходимо заполнить')
            .max(512, "Слишком много символов")
            .startsWith("https://", "Ссылка должна начинаться с https://"),
    });


    try {
        zodSchema.parse(updata); // will be a throw on validation error

        const urlToSave = updata.id ? `user/site-crawlers/${updata.id}` : `user/site-crawlers`;

        // request to backend
        const response = await Post(urlToSave, updata);

        return response;
    } catch (error: unknown) {
        if (error instanceof z.ZodError) {
            const errorBuffer: Record<string, string> = {};

            error.issues.forEach(issue => {
                issue.path.forEach(fieldName => {
                    errorBuffer[fieldName as string] = issue.message;
                })
            });

            return { errors: errorBuffer };
        }

        await log(JSON.stringify(error)); // undefined error

        return { errors: { general: "Что-то пошло не так, пожалуйста попробуйте позже" } };
    }
}