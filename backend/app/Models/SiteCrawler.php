<?php

namespace App\Models;

use App\Models\Scopes\OrderByIdDesc;
use Illuminate\Database\Eloquent\Attributes\ScopedBy;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Facades\Http;

#[ScopedBy([OrderByIdDesc::class])]
class SiteCrawler extends Model
{
    protected $fillable = [
        'url', // capacity: 512, какую страницу парсить
    ];


    /**
     * Парсит сайт по ссылке. Записывает что нужно.
     * @return int
     */
    public function parse()
    {
        if (!str_starts_with($this->url, 'https://'))
            return false;


        $response_status = null;

        try {
            $response = Http::withHeaders([
                'User-Agent' => 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
                'Accept' => 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
                'Accept-Language' => 'en-US,en;q=0.5',
                'Referer' => 'https://google.com',
            ])
                ->timeout(10) // чтобы скрипт не завис
                ->connectTimeout(5)
                ->get($this->url);

            $response_status = $response->status();

        } catch (\Exception $e) {
            // Если сайт лежит или URL невалиден, вернем 500 или 0
            $response_status = 500;
        }

        // Создание логов
        $this->logs()->create([
            'status' => $response_status
        ]);

        return true;
    }


    // ==== RELATIONS ====

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function logs(): HasMany
    {
        return $this->hasMany(SiteCrawlerLog::class);
    }
    // ---- RELATIONS ----
}
