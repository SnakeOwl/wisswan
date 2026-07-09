<?php

namespace App\Models;

use App\Models\Scopes\OrderByName;
use App\Models\Traits\UsesStatuses;
use Illuminate\Database\Eloquent\Attributes\ScopedBy;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

#[ScopedBy([OrderByName::class])]
class Domain extends Model
{
    use UsesStatuses;

    protected $fillable = [
        'name',
        'alias',
        'published',
    ];

    protected $casts = [
        'published' => 'boolean', // В MySQL нет честного типа BOOLEAN, поэтому используется TINYINT(1). Из-за этого он по умолчанию возвращает строки '0', '1'
    ];


    // ==== RELATIONS ====

    // ---- RELATIONS ----
}
