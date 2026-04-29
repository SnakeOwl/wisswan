<?php

namespace App\Models;

use App\Models\Scopes\OrderByIdDesc;
use App\Observers\SiteCrawlerLogObserver;
use Illuminate\Database\Eloquent\Attributes\ObservedBy;
use Illuminate\Database\Eloquent\Attributes\ScopedBy;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;


#[ScopedBy([OrderByIdDesc::class]), ObservedBy(SiteCrawlerLogObserver::class)]
class SiteCrawlerLog extends Model
{
    protected $fillable = [
        'status',
    ];

    
    public function __toString()
    {
        $crawler = $this->crawler;
        return implode(', ', [$this->created_at, $crawler->url, "Статус ответа: {$this->status}"]);
    }

    // ==== RELATIONS ====

    public function crawler(): BelongsTo
    {
        return $this->belongsTo(SiteCrawler::class, 'site_crawler_id');
    }
    // ---- RELATIONS ----
}
