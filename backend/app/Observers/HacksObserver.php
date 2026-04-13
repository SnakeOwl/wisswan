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
        $hack->is_global = 0; // скрыть с публикации

        // Если пользователь авторизован и он НЕ админ (пример проверки)
        if ($user) {
            if (!$user->isAdmin()){
                // Если статус прилетел 200, принудительно ставим 110
                if (in_array((int)$hack->status, [200, 201])) {
                    $hack->status = 110;
                }
            }else {
                // при смене статуса на 200, открывать хак для глобального пользования
                // на публикацию ставить можно только админу (пока так)
                
                if ($hack->status == 200) {
                    $hack->is_global = 1; // открыть для публикации
                }
            }
        }
    }
}
