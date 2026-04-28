<?php

namespace App\Http\Requests\Webhooks;

use Illuminate\Foundation\Http\FormRequest;

class TelegramInputRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        // Сравниваем секретный токен из заголовка.
        $secretFromTelegram = $this->header('X-Telegram-Bot-Api-Secret-Token');
        $mySecret = env('TELEGRAM_SECRET_TOKEN');

        return $secretFromTelegram === $mySecret;
    }
}
