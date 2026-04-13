<?php

namespace App\Console\Commands;

use App\Jobs\StartSiteCrawlersParsing;
use App\Models\SiteCrawler;
use Illuminate\Console\Command;

class SetSiteCrawlersJobs extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:set-site-crawlers-jobs';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Забивает очередь из сайт-краулеров на исполнение';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        SiteCrawler::all()->each(function ($crawler) {
            StartSiteCrawlersParsing::dispatch($crawler);
        });
    }
}
