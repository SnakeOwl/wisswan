<?php

namespace App\Models;

use App\Models\Scopes\OrderByIdDesc;
use Illuminate\Database\Eloquent\Attributes\ScopedBy;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

#[ScopedBy([OrderByIdDesc::class])]
class SiteCrawlerLog extends Model
{
    protected $fillable = [    
        'status',
    ];
    
    // ==== RELATIONS ====

    public function crawler(): BelongsTo
    {
        return $this->belongsTo(SiteCrawler::class);
    }
    // ---- RELATIONS ----
}
