<?php

namespace App\Jobs;

use App\Models\TelegramChat;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Foundation\Queue\Queueable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Throwable;

class SendTelegramNotification implements ShouldQueue
{
    use Queueable, SerializesModels, InteractsWithQueue, Dispatchable;

    protected $telegram_chat;
    protected $message;


    /**
     * @param TelegramChat $telegram_chat - В какой чат посылать
     * @param string $message - Какое сообщение посылать
     */
    public function __construct(TelegramChat $telegram_chat, string $message)
    {
        $this->telegram_chat = $telegram_chat;
        $this->message = $message;
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        try {
        // TODO: тут посылать сообщение
        } catch (Throwable $e) {
            info("TelegramChat id: " . $this->telegram_chat->id . ' : ' . $e->getMessage());
        }
    }
}
