<?php

namespace App\Console\Commands;

use App\Models\SiteCrawler;
use Illuminate\Console\Command;

class Run extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:run';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Для тестов. Запускает что-нибудь. Изменяется от коммита к коммиту.';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $crawler = SiteCrawler::first();
        $crawler->parse();
    }
}
