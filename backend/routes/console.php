<?php

use App\Console\Commands\DeleteOldAuthCodes;
use App\Console\Commands\SetSiteCrawlersJobs;
use Illuminate\Support\Facades\Schedule;


Schedule::command(DeleteOldAuthCodes::class)->daily();
Schedule::command(SetSiteCrawlersJobs::class)->hourly(); // ставит парсинг сайт-краулеров в очередь