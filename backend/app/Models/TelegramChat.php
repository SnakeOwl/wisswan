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
        if ($this->chat_id == null)
            throw new Exception("Не хватает chat_id для отправки сообщения. TelegramChat.id: {$this->id}. message: $message");


        $telegram_api = app(TelegramAPI::class); // singleton

        $telegram_api->send_message($message);
    }


    // ==== RELATIONS ====

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
    // ---- RELATIONS ----
}
