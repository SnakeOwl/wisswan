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

        return $telegram_api->send_message($this->chat_id, $message);
    }

    /**
     * Посылает меню пользователю.
     * @throws \Exception
     */
    public function send_menu()
    {
        if ($this->chat_id == null)
            throw new Exception("Не хватает chat_id для отправки меню. TelegramChat.id: {$this->id}.");


        return app(TelegramAPI::class)->send_menu($this->chat_id);
    }


    // ==== RELATIONS ====

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
    // ---- RELATIONS ----
}
