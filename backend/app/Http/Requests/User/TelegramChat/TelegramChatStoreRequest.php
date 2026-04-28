<?php

namespace App\Http\Requests\User\TelegramChat;

use Illuminate\Foundation\Http\FormRequest;

class TelegramChatStoreRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'user_name' => 'nullable|string|max:255|unique:telegram_chats,user_name',
        ];
    }

    public function messages(): array
    {
        return [
            'user_name.max' => 'Превышено максимальное количество символов',
            'user_name.unique' => 'Такое имя уже занято'
        ];
    }
}
