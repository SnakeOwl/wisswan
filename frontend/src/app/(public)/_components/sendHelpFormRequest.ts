"use server"

import { Post } from "@/libs/Fetch";
import { log } from "@/libs/Logging";
import getCookie from "@/utils/getCookie";

// создаёт | обновляет хак с валидацией. Функция для useFormState.
export default async function sendHelpFormRequest(formDataValidated: any) {
    try {
        const hasUserToken = (await getCookie('auth_token')) != null;

        const urlToSave = hasUserToken
            ? `user/feedbacks/support-form-requests`
            : `feedbacks/support-form-requests`;

        const response = await Post(urlToSave, formDataValidated);

        return response;
    } catch (error: unknown) {
        await log(JSON.stringify(error)); // undefined error

        return { errors: { general: "Что-то пошло не так, пожалуйста попробуйте позже" } };
    }
}