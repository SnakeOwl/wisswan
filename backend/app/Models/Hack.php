<?php

namespace App\Models;

use App\Models\Scopes\OrderByRatingDesc;
use App\Models\Traits\UsesStatuses;
use App\Observers\HacksObserver;
use Illuminate\Database\Eloquent\Attributes\ObservedBy;
use Illuminate\Database\Eloquent\Attributes\ScopedBy;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

#[ScopedBy([OrderByRatingDesc::class]), ObservedBy(HacksObserver::class)]
class Hack extends Model
{
    use UsesStatuses;


    protected $fillable = [
        'is_global', // display the Hack on public pages
        'title', // text
        'value', // longtext
        'rating', // counter
        'ip_last_updated',
        'shared_link', // Зарезервировано. initialize.
        'status', // see App\Models\Traits\UsesStatuses

        // user_id // bounds on creating
    ];

    protected $casts = [
        'is_global' => 'boolean', // В MySQL нет честного типа BOOLEAN, поэтому используется TINYINT(1). Из-за этого он по умолчанию возвращает строки '0', '1'
    ];

    /**
     * Defatult values on creating
     *
     * @var array
     */
    protected $attributes = [
        'status' => '100',
    ];

    protected $with = [
        'domains'
    ];

    public function rating_plus()
    {
        $this->rating += 1;
        $this->saveQuietly();
    }


    public function sync_or_create_domains_with_name(&$domains_array)
    {
        $ids_to_sync = [];
        $new_domains = [];

        if (!is_null($domains_array)) {
            foreach ($domains_array as $domain) {
                // if $domain not have id, than create;
                if (isset($domain['id'])) {
                    $ids_to_sync[] = $domain['id'];
                    continue;
                }


                $new_domain = Domain::firstOrCreate(['name' => $domain['name']])->refresh();
                $ids_to_sync[] = $new_domain->id;
                $new_domains[] = $new_domain;
            }
        }

        $this->domains()->sync($ids_to_sync);

        return [
            'bounded' => $ids_to_sync,
            "new_domains" => $new_domains
        ];
    }


    // ==== RELATIONS ====

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function domains(): BelongsToMany
    {
        return $this->belongsToMany(Domain::class);
    }
    // ---- RELATIONS ----
}
