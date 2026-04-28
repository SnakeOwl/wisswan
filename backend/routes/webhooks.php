<?php

use App\Http\Controllers\Webhooks\TelegramInputController;

Route::prefix('webhooks')
    ->group(function () {
        Route::post("telegram-input", TelegramInputController::class); // <-- Telegram
    });
