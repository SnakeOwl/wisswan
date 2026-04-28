<?php

namespace App\Http\Requests\User\TelegramChat;

class TelegramChatUpdateRequest extends TelegramChatAccessRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'user_name' => 'nullable|string|max:255|unique:telegram_chats,user_name,' . $this->telegram_chat->id,
        ];
    }

    public function messages(): array
    {
        return [
            'user_name.max' => 'Превышено максимальное количество символов',
            'user_name.unique' => 'Такое имя уже занято',
        ];
    }
}
