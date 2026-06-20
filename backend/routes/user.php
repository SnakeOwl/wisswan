<?php

use App\Http\Controllers\Feedback\SupportFormRequestController;
use App\Http\Controllers\User\Hacks\GetUsedDomainsInHacksController;
use App\Http\Controllers\User\Hacks\HacksController;
use App\Http\Controllers\User\Login\LoginController;
use App\Http\Controllers\User\SiteCrawlersController;
use App\Http\Controllers\User\TelegramChats\TelegramChatController;
use App\Http\Controllers\User\User\UpdateUserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::post('/login-email', [LoginController::class, 'login']);
Route::post('/login-code', [LoginController::class, 'check_code']);


Route::middleware('auth:sanctum')
    ->prefix('user')
    ->group(function () {
        Route::get('/', function (Request $request) {
            return $request->user();
        });

        Route::apiResource('hacks', HacksController::class)->except(['update']);
        Route::post('hacks/{hack}', [HacksController::class, 'update']);
        Route::post('hacks/sync-domens/{hack}', [HacksController::class, 'sync_domains']);

        Route::get('get-used-domains-in-hacks', GetUsedDomainsInHacksController::class);

        Route::post('/update/{user}', UpdateUserController::class);

        Route::apiResource('site-crawlers', SiteCrawlersController::class)->except(['update']);
        Route::post('site-crawlers/{site_crawler}', [SiteCrawlersController::class, 'update']);

        Route::apiResource('telegram-chats', TelegramChatController::class)->except(['update', 'show']);
        Route::post('telegram-chats/{telegram_chat}', [TelegramChatController::class, 'update']);

        Route::apiResource('feedbacks/support-form-requests', SupportFormRequestController::class)
            ->except(['update']);
        Route::post('feedbacks/support-form-requests/{support_form_request}', [SupportFormRequestController::class, 'update']);

    });
