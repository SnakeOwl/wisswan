<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TelegramChat extends Model
{
    protected $fillable = [
        'user_name', // @WalterWhite
        'chat_id',
    ];
    
}
