<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class OnlineDocument extends Model
{
    protected $fillable = [
        'published_at',
        'is_published',
        'title',
        'content',
        'status',
        'short_description',
        'editor_ip',
        'device_type', // mobile, desktop, tablet, bot ...
        'browser_name', // Chrome, Safari, Firefox ...
        'os_name', // Windows, iOS, Android ...
        'screen_resolution', // "1920x1080", "390x844"
    ];

    protected $casts = [
        'is_published' => 'boolean', // В MySQL нет честного типа BOOLEAN, поэтому используется TINYINT(1). Из-за этого он по умолчанию возвращает строки '0', '1'
    ];


    // ==== RELATIONS ====

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    // ---- RELATIONS ----
}
