<?php

namespace App\Http\Requests\User\TelegramChat;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Gate;

class TelegramChatAccessRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        $user = $this->user();
        $chat = $this->route("telegram_chat");

        // if Hack has no bound to User, then it's anonymous created Hack
        return $chat->user_id === null
            || Gate::forUser($user)->allows('edit-model', $chat);
    }
}
