<?php

namespace App\Jobs;

use App\Models\SiteCrawler;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Foundation\Queue\Queueable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class StartSiteCrawlersParsing implements ShouldQueue
{
    use Queueable, SerializesModels, InteractsWithQueue, Dispatchable;

    protected $site_crawler;


    public function __construct(SiteCrawler $site_crawler)
    {
        $this->site_crawler = $site_crawler;
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        $this->site_crawler->parse();
    }
}
