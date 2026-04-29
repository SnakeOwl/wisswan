<?php

namespace App\Http\Controllers\Webhooks;

use App\Http\Controllers\Controller;
use App\Http\Requests\Webhooks\TelegramInputRequest;
use App\Libs\OuterAPI\TelegramAPI\TelegramAPI;
use Illuminate\Support\Facades\Log;

class TelegramInputController extends Controller
{
    /**
     * Сюда прилетают сообщения от Телеграмм бота.
     */
    public function __invoke(TelegramInputRequest $request)
    {
        $telegram_data = $request->all();
        Log::info('Telegram Update:', $telegram_data);

        app(TelegramAPI::class)->process_incoming_data($telegram_data); // singleton


        return response('ok', 200);
    }
}


