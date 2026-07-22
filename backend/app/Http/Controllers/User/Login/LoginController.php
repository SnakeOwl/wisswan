<?php

namespace App\Http\Controllers\User\Login;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\Login\LoginRequest;
use App\Models\User;
use App\Models\UserLoginCode;
use Illuminate\Support\Facades\Mail;

class LoginController extends Controller
{
    // запрос на код
    public function login(LoginRequest $request)
    {
        $params = $request->validated();

        $user = User::withTrashed()->where("email", $params)->first();
        $params["last_activity_at"] = now();


        if ($user === null) {
            $user = new User();
            $user->email = $params['email'];
            $user->last_activity_at = now();
            $user->save();
            $user->refresh(); // get id from base
        } else {
            $user->update($params);
        }


        // check on delete
        if ($user->trashed())
            return response(json_encode(["errors" => ['email' => 'Пользователь удалён']]), 200);


        $login_code = UserLoginCode::create_for_user($user->id);


        Mail::send('emails.auth.login-code', ['code' => $login_code->code], function ($m) use ($request) {
            $m->to($request->input('email'))->subject(env('APP_NAME') . ' код для входа');
        });


        return response(json_encode(["success" => "Код отправлен на почту"]), 200);
    }
}
