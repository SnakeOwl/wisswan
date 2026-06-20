<?php

namespace App\Models;

use App\Jobs\SendTelegramNotification;
use App\Models\Scopes\OrderByIdDesc;
use App\Models\Traits\UsesStatuses;
use Illuminate\Database\Eloquent\Attributes\ScopedBy;
use Illuminate\Database\Eloquent\Model;


#[ScopedBy(OrderByIdDesc::class)]
class SupportFormRequest extends Model
{
    use UsesStatuses;

    protected $fillable = [
        'text',
        'contact_email',
        'status', // see App\Models\Traits\UsesStatuses
        'using_personal_data',
        'subject',
        'user_id',
    ];


    protected static function booted(): void
    {
        static::created(function (SupportFormRequest $form_request) {
            $telegram_chat = TelegramChat::firstWhere("user_name", config('app.admin_telegram'));
            if ($telegram_chat != null){
                SendTelegramNotification::dispatch($telegram_chat, "Пришло сообщение на форму help. id: " . $form_request->id);
            }
        });
    }
}
