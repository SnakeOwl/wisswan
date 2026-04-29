<?php

namespace App\Models;

use App\Libs\OuterAPI\TelegramAPI\TelegramAPI;
use Exception;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class TelegramChat extends Model
{
    protected $fillable = [
        'user_name', // UNIQUE @WalterWhite
        'chat_id', // UNIQUE
    ];



    /**
     * Посылает сообщение в чат
     * @param string $message
     * @throws \Exception
     */
    public function send_message($message)
    {
        // в личных чатах через бота нельзя использовать user_name
        if ($this->chat_id == null)
            throw new Exception("Не хватает chat_id для отправки сообщения. TelegramChat.id: {$this->id}. message: $message");


        $chat_id = $this->chat_id;

        $telegram_api = app(TelegramAPI::class); // singleton

        $response = $telegram_api->send_message($chat_id, $message);
        
        return $response;
    }

    /**
     * Посылает меню пользователю.
     * @throws \Exception
     */
    public function send_menu()
    {
        // в личных чатах через бота нельзя использовать user_name
        if ($this->chat_id == null)
            throw new Exception("Не хватает chat_id для отправки меню. TelegramChat.id: {$this->id}.");


        $chat_id = $this->chat_id;

        return app(TelegramAPI::class)->send_menu($chat_id);
    }


    // ==== RELATIONS ====

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
    // ---- RELATIONS ----
}
