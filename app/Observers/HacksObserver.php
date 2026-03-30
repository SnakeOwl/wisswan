<?php

namespace App\Observers;
use App\Models\Hack;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Auth;

class HacksObserver
{
    public function saving(Hack $hack): void
    {
        // $hack - это новое значение, которое полетит в базу
        $hack->ip_last_updated = Request::ip();
        $user = Auth::user(); // Достаем текущего юзера

        // Если пользователь авторизован и он НЕ админ (пример проверки)
        if ($user && !$user->isAdmin()) {
            // Если статус прилетел 200, принудительно ставим 110
            if (in_array((int)$hack->status, [200, 201])) {
                $hack->status = 110;
            }
        }
    }
}
