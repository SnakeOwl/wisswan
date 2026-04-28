<?php

namespace App\Observers;

use App\Jobs\SendTelegramNotification;
use App\Models\SiteCrawlerLog;

class SiteCrawlerLogObserver
{
    public function created(SiteCrawlerLog $siteCrawlerLog)
    {
        $user = $siteCrawlerLog->crawler->user;
        $telegram_chat = $user->telegram_chats()->first();

        if ($telegram_chat != null) {
            if ($user->use_telegram_notify_on_site_cravler_all_responses) {
                // Кидать парсинги site_crawlers как уведомления по telegram
                SendTelegramNotification::dispatch($telegram_chat, "Уведомление Сайт-краулера: ответ сервера: " . $siteCrawlerLog->status);

            } else if ($user->use_telegram_notify_on_site_cravler_500 && ($siteCrawlerLog->status >= 500 && $siteCrawlerLog->status < 600)) {
                // Кидать те site_crawlers парсинги, которые с 500 ответом, как уведомления по telegram
                SendTelegramNotification::dispatch($telegram_chat, "Уведомление Сайт-краулера: ответ сервера: " . $siteCrawlerLog->status);
            }
        }
    }
}
