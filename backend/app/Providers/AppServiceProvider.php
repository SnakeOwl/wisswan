<?php

namespace App\Providers;

use App\Libs\OuterAPI\TelegramAPI\TelegramAPI;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {

        $this->app->singleton(TelegramAPI::class, function ($app) {
            return new TelegramAPI(env('TELEGRAM_API_TOKEN', null));
        });
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {

    }
}
